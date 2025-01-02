---
layout: docs
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Daemon : Event<br />
</strong></td>
<td style="text-align: right;"><a href="fuse.html">[Previous]</a> <a
href="generalintroduction.html">[Main]</a> <a
href="sensefuse.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Daemon is only slightly more complicated than a [Fuse](fuse.html), in
that while a Fuse fires a one-off event by executing a method after a
set number of turns, a Daemon repeatedly calls a method at fixed
intervals (unless or until the Daemon is terminated).  
  
The syntax for setting up a Daemon is similar to that for creating a
Fuse:  
  
new Daemon(obj, &prop, interval);  
  
This sets up a daemon that will call the method obj.prop every
*interval* turns, where *interval* must be at least 1 (one). If interval
is 1, obj.prop will execute each turn, starting with the current turn.
If interval is 2, obj.prop will execute every other turn, starting with
the next turn. In general, if interval is *n*, obj.prop will execute
every *n* turns, starting in *n-1* turns time. Note once again that the
second argument to the new Daemon call must be a property (or method)
*pointer*, hence the &prop syntax.  
  
As with a Fuse it's useful to store a reference to a Daemon when it's
created, e.g.:  
  
 daemonID = new Daemon(obj, &prop, interval);  
  
This then allows the Daemon to be terminated with the command:  
  
daemonID.removeEvent;  
  
Otherwise to terminate the Daemon you'd need to call:  
  
eventManager.removeMatchingEvents(obj, &prop);  
  
Now to return to our example. You'll recall that the aim is to limit the
number of turns for which the player character can carry the heavy gold
tablet. The Fuse we've already looked at handles the player character's
recovery; we'll use a Daemon to warn the player that the tablet is
becoming an unbearable burden and then to enforce its dropping when the
player has exhausted his or her allotment of turns:  
  
++ goldTablet : Tablet 'gold tablet\*tablets' 'gold tablet'  
  inscription = "T F Q Z P\nN W O B E\nA U O U A\nF L O U R\nS T O P S"  
  weight = 32  
  feelDesc = "It feels mighty heavy! "  
  carried = 0  
  **afterAction()  
  {  
    if(daemonID == nil && isIn(gPlayerChar))        
    {  
      **endFuse;**       
      daemonID = new Daemon(self, &daemon, 1);  
    }  
    else if(daemonID != nil && !isIn(gPlayerChar))  
    {  
      endDaemon;        
      **fuseID = new Fuse(self, &fuse, 3);**  
    }      
  }  
  daemonID = nil    
  daemon  
  {  
    local carrier = self;  
    while (!carrier.isDirectlyIn(gPlayerChar))  
       carrier = carrier.location;  
    gMessageParams(carrier);     
    switch(carried++)  
    {  
      case 0: break;  
      case 1: "{The carrier/he} {is} starting to feel very heavy. "; break;  
      case 2: break;  
      case 3: "You can't carry {the carrier/him} much further. "; break;  
      default: "You're forced to put {the carrier/him} down;  
                 it's too heavy for you. ";  
               nestedAction(Drop, carrier);                  
    }  
  }    
 endDaemon  
 {  
   if(daemonID != nil)  
     daemonID.removeEvent;  
   daemonID = nil;  
 }**  
 fuse() { carried = 0; fuseID = nil; }  
 fuseID = nil   
 endFuse  
 {  
   if(fuseID != nil)  
     fuseID.removeEvent;  
   fuseID = nil;  
 }  
;  
  
The mechanics of controlling the Daemon are very like those of
controlling the Fuse. We set up the Daemon and store a reference to it
in the statement daemonID = new Daemon(self, &daemon, 1), and we define
a convenient method for terminating the Daemon in endDaemon, which calls
daemonID.removeEvent provided daemonID is not nil, and then sets
daemonID to nil so we can check that there's no longer a Daemon running
(as with the endFuse method we defined earlier, this definition makes it
safe to call endDaemon even if daemonID is nil and no Daemon is
running). As in the case of the Fuse, there's nothing obligatory about
the names daemon, daemonID and endDaemon, we could have called these
properties and methods boston, cambridge and worcester (if we were
particularly anxious name them after cities that are found in both
England and Massachusetts), but the names we have used make it a bit
clearer what they're for.  
  
The principal complication with what we're trying to do is that the
restrictions on carrying the gold tablet should apply whether the player
character is carrying directly, or in some other container such as a
sack, or in a container within a container, such as a box in a sack, and
so on. This means we cannot predict what sequence of actions will result
the in tablet's being carried or no longer carried. It might be as
simple as TAKE GOLD TABLET, or as long-winded as PUT GOLD TABLET IN BOX;
PUT BOX IN SACK; TAKE SACK; or something even more convoluted. Or again,
the player might TAKE GOLD TABLET and then PUT TABLET IN SACK when the
player character (PC) is already carrying the sack. We need to try to
find the simplest way handling all these eventualities.  
  
One thing that helps us here is that the whatsit.isIn(obj) method
returns true whether whatsit is directly in obj or is contained in
something that's within obj, however deeply nested. Thus
goldTablet.isIn(gPlayerChar) will be true whether the tablet is directly
carried by the player character, or in a sack that the PC is holding, or
in a box in a sack that the PC's carrying, and so on. Likewise
goldTablet.isIn(gPlayerChar) will be nil whenever the PC is neither
directly or indirectly carrying the tablet. We can thus use this in
goldTablet.afterAction to check whether the PC is carrying the gold
tablet or not after each turn in which the PC performs an action in the
vicinity of the tablet. But we also need to know whether there's been a
change of state, i.e. whether or not the PC was carrying the gold tablet
before, since we don't want to keep spawning new daemons each turn that
the gold tablet is carried and new fuses each time it is not.
Fortunately we can check that by seeing whether there's a daemon already
running (i.e. daemonID is not nil). If the PC is carrying the gold
tablet and daemonID = nil, we need to create a new daemon (and kill any
fuse that's running), because the PC must have started carrying the
tablet this turn. Likewise, if daemonID is not nil and the PC is not
carrying the tablet, s/he must have just ceased doing so, so we need to
kill the daemon (and start a new fuse). *Because* we start a new daemon
when the PC starts carrying the gold tablet and kill the daemon when the
PC stops carrying the tablet, we can use the existence or otherwise of
the daemon to check whether or not the PC was carrying the tablet the
previous turn. The two checks we need in afterAction are thus
if(daemonID == nil && isIn(gPlayerChar))**, **to determine that the PC
has just started carrying the gold tablet, so that we need to start the
daemon and stop the fuse, and if(daemonID != nil && !isIn(gPlayerChar)),
to determine that the PC has just stopped carrying the tablet, so that
we need to stop the daemon and start a new fuse running.  
  
The daemon method (called each turn that the PC is carrying the gold
tablet) uses a switch statement to display an appropriate message (or
keep quiet), and finally to force the gold tablet to be dropped. The
complication here is once again that the PC may either be carrying the
gold tablet directly, in his hands, or in some other container, such as
a box or sack. In the former case the player should be informed that it
is the gold tablet that is becoming unbearably heavy, and eventually
forced to drop the tablet; in the latter it would be better if the
player were told that the box, sack or other carrier was becoming
difficult to carry, and forced to drop the box or sack. The first four
lines of the daemon method are thus devoted to identifying the object we
want the rest of the routine to work with. We begin by declaring a local
variable, carrier, and setting it to self (i.e. the tablet), which will
be the object we want to refer to if the gold tablet is not inside
anything. The while loop in the next two lines then walks up the
containment tree until it finds an object that's directly held by the
player (if the gold tablet is directly held by the player, it won't have
much walking to do). After these three lines carrier will refer to
whichever object it is that the player's directly holding, either the
gold tablet itself, or whatever the gold tablet's being carried around
in (if the tablet is inside a box which is inside a sack that's being
carried, carrier will refer to the sack, not the box). The fourth line
then uses the library macro gMessageParams() so that we can use carrier
in parameter substitution strings when generating the messages in the
switch statement.  
  
To see how this all works out in practice, try recompiling and running
the game. Then try carrying the gold tablet around first by hand and
then in the sack. You should find that if you carry it by hand, you can
just carry it into the temple and put it on the altar before having to
put it down. Strictly speaking, this is all that *needs* to be done with
it; the catch is that the player can hardly know this without first
weighing the gold tablet, which will use up more turns than this even if
the PC brings the scales to the tablet rather than the other way round.
This doesn't stop the player completing the task, but it does force the
PC to take a break from carrying the gold tablet at some point. If this
was felt to be too much of a nuisance, one could perhaps go on to
implement, say, a wheelbarrow object in which the tablet could be pushed
around for longer distances (which would not count as carrying it).
We'll do this when we come to look at the
[TravelPushable](travelpushable.html) class.  
  
  
  
