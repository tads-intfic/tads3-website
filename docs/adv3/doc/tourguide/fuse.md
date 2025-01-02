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
<td style="text-align: left;"><strong>Fuse : Event<br />
</strong></td>
<td style="text-align: right;"><a href="anotherlock.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="daemon.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
A Fuse is probably the simplest kind of Event to create. It simply fires
an event after a certain number of turns. To set up a fuse you use a
statement of the form  
  
new Fuse(obj, &prop, turns);  
  
Which means that after *turns* turns the method obj.prop will be
executed (the prop method of the obj object), and then the fuse will be
removed from the list of pending events. And that's basically it. You
should note, of course, that in the argument list of the new Fuse call,
the second argument is a property pointer, hence you need to use the
&prop syntax. It's also helpful to know that if turns = 0 the method
will fire on the current turn, if it's 1 (one) it'll fire on the next
turn and so on. And it may be worth while bearing in mind that the
statement new Fuse() returns a pointer to the new fuse object created,
so that if you want to refer to it subsequently, it's useful to use a
statement like:  
  
  fuseID = new Fuse(obj, &prop, turns);  
  
This makes it convenient to terminate the fuse prematurely, if for any
reason you need to. To remove the fuse defined above from the list of
pending events you would call:  
  
 fuseID.removeEvent;  
  
This would not fire obj.prop prematurely, it would simply abort the
fuse. If we had not used a fuseID property to store a pointer to the
fuse, we could still abort it by calling:  
  
eventManager.removeMatchingEvents(obj, &prop);  
  
Where obj and &prop are the object and property pointer used in creating
the fuse. This method returns true if any events (Daemons or Fuses) were
found matching the specification and nil if not. It is thus not
absolutely essential to store a pointer to the fuse if you may want to
abort it, but it is probably more convenient. It can also be useful for
keeping track of whether a fuse is active or not.  
  
For our first example we'll return to the stick of
[dynamite](dynamite.html) we created earlier (something which quite
literally has a fuse) and implement it with a fuse. It's still worth
using the Candle class to implement the stick of dynamite, since the
Candle implements a lot of handling (not least of the BURN WITH and
EXTINGUISH commands) that's useful to us. Indeed, much of the original
definition can stand, all we need to do is to override the isLit method
to set up a Fuse (instead of the SenseDaemon the standard Candle
employs); the changes are shown in bold:  
  
dynamite : Candle 'stick dynamite/fuse' 'stick of dynamite'  
  "It's a white cylinder with a short fuse. \<\<isLit ?  
  'The fuse is lit and burning down fast. ' : nil \>\>"  
  fuelLevel = 3  
  brightnessOn = 1  
  sayBurnedOut()  
  {  
    if(isHeldBy(gPlayerChar))  
    {  
      "The dynamite explodes with a mighty bang and blows your hand off. But  
       since you're killed by the blast you probably won't be needing it  
       any more.\b";  
       endGame(ftDeath);  
    }  
    if(canBeTouchedBy(gPlayerChar))  
    {   
      "The dynamite detonates close by, but you are killed by the blast almost  
       before you hear the bang. ";  
       endGame(ftDeath);  
    }  
    if(isIn(boulder))  
    {  
      boulderFragments.moveInto(boulder.location);  
      boulder.moveInto(nil);         
    }  
    callWithSenseContext (nil, nil, {:"You hear a muffled explosion
nearby. "});  
    moveInto(nil);   
           
  }  
  
  **fuseID = nil**  
  **makeLit(lit)  
  {  
     isLit = lit;  
     if(lit)  
       fuseID = new Fuse(self, &sayBurnedOut, 3);  
     else if(fuseID)  
       {  
         fuseID.removeEvent();  
         fuseID = nil;  
       }  
  }  
**;  
  
The one slight oddity about this revised stick of dynamite is that
however many times it extinguished and relit (before it actually
detonates) its fuse always remains the same length - but perhaps in the
context of the game that's just as well (the player always has three
turns to get out of the way after lighting the fuse).

Defining the dynamite this way probably isn't a very good idea, however,
since using a Fuse on in it this way cuts across the mechanism already
provided by the Candle class. So, once you've experimented with
implementing a Fuse on the dynamite, I suggest you remove it again and
put the dynamite back the way it was (simply remove or comment out the
code in bold in the above code fragment). If this change were retained,
other changes would also be needed to make everything work properly, but
we shan't be pursuing those; it's better to keep the dynamite as it was
before.

For our second example we'll create a Fuse and a Daemon on the same
object, though for the moment we'll concentrate our attention on the
Fuse. A solid gold tablet, such as we've placed in the plinth of the
[statue](lever(2).html), would be pretty heavy to carry around, and
indeed it's the heaviest portable object (as defined by its weight
property) that we've defined in the game. Rather than create an
old-fashioned inventory puzzle by limiting the total amount of weight
the player character can carry (so that, for example, the player
character would have to drop everything else in order to carry the gold
tablet, and arrange to distribute light sources along its path, which
would all be pretty tedious) we'll limit the number of turns the player
can carry the gold tablet before putting it down to take a rest. We'll
use a [Daemon](daemon.html) to limit how long the player character can
carry the gold tablet for, and a Fuse to simulate his or her recovery.
We'll add a carried property to goldTablet which will hold the number of
turns for which the tablet has been carried. Once this reaches 3 the
player character becomes too tired and is forced to drop the tablet. At
this point we set a fuse that is fired after three turns (provided the
player leaves the gold tablet alone in the interim); when the fuse fires
three turns later, it simply resets goldTablet.carried back to zero
(which would allow the player character to pick up the gold tablet and
carry it for another three turns).

  
In order to give the context, the following code shows the full
redefinition of the goldTablet, but for now we'll concentrate only on
explaining that for the fuse:  
  
++ goldTablet : Tablet 'gold tablet' 'gold tablet'  
  inscription = "T F Q Z P\nN W O B E\nA U O U A\nF L O U R\nS T O P S"  
  weight = 32  
  feelDesc = "It feels mighty heavy! "  
  carried = 0  
  afterAction()  
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
 }  
 **fuse() { carried = 0; fuseID = nil; }  
 fuseID = nil   
 endFuse  
 {  
   if(fuseID != nil)  
     fuseID.removeEvent;  
   fuseID = nil;  
 }  
**;  
  
There's nothing magical about the names fuse, fuseID and endFuse we've
given various methods and properties, we could have called them tom,
dick and harry, it's just that the names we've given are a lot more
meaningful. The afterAction() method tests whether anything has happened
to change whether the gold tablet is still being carried or not. For
reasons we'll explain more fully when we come to the daemon, the first
if statement in this method tests for the tablet being picked up, and
the second for its being dropped. If it's picked up we want to abort any
fuse that's running (since the player has not rested from trying to
carry the tablet that turn) so we abort the fuse with the endFuse
method. This is a method we define ourselves; it does two things: first,
if fuseID is not nil (i.e. if there is a fuse in operation) we terminate
the fuse by calling fuseID.removeEvent, second we reset fuseID to nil to
keep track of the fact that there's no longer a live fuse. The test for
fuseID being nil makes it safe to call endFuse whether there's actually
a fuse running or not; if fuseID is nil when endFuse is called endFuse
has no effect.  
  
Whenever the player ceases to carry the gold tablet (either by dropping
the tablet itself, or by dropping something that directly or indirectly
contains the tablet) we want to set a new fuse that will allow the
player to recover after three turns (provide s/he doesn't try to pick
the tablet up again during that time). We set the new fuse in the
statement fuseID = new Fuse(self, &fuse, 3) which means that, unless we
abort the fuse in the meanwhile, the method self.fuse (i.e.
goldTablet.fuse) will be executed after three turns. Finally, all the
fuse() method has to do is to reset carried to zero and reset fuseID to
nil (so we have a convenient method of telling that the fuse is no
longer active).  
  
We'll now go on to explore how the [Daemon](daemon.html) works.  
