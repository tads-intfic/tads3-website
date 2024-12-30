::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Extending the Map\
[[*Prev:* Starting the Map](airmap1.htm){.nav}     [*Next:* Aboard the
Plane](airmap3.htm){.nav}     ]{.navnp}
:::

::: main
# Extending the Map

Our next job is to sketch out the other half of the airport terminal
building. There won\'t be much here that\'s new for now, apart from one
thing. We\'re going to take advantage of *separate compilation* to put
the next section of the map in a new source file. Both *The Adventures
of Heidi* and *Goldskull* were such small games that their source code
could easily be fitted into a single file. *Airport* is rather a larger
game, so it\'s worth splitting over several. There are two main
advantages: (1) It\'s easier to keep track of where everything is and
keep things manageable if we split our source over several reasonably
sized files rather than lumping it all together into one gargantuan one;
(2) each time a TADS 3 game is recompiled it only has to recompile the
source files that have changed, so that if we make changes to one file,
we don\'t have to recompile all the rest (TADS 3 in any case takes
advantage of this so it doesn\'t have to keep recompiling the library
files each time). If you want more information on separate compilation
you can read the article \"Understanding Separate Compilation\" in Part
I of the *TADS 3 Technical Manual*.

So let\'s create a new source file now. If you\'re using Workbench,
select File -\> New from the menu (or type Ctrl-N, or click on the new
file icon in the task bar, the third icon along from the left-hand end,
representing an empty page). Select \'TADS Source file\' from the
dialogue that follows and then click \'Open\'. Then select File -\> Save
from the menu (or press Ctrl-S, or click the file save icon in the task
bar). When prompted for a file name type \"gatearea\" (without the
quotation marks). You should see a dialogue box asking \"Would you like
to add gatearea.t to the Project file list?\" Click Yes. If you\'re not
using Workbench use your text editor to create a new blank file called
\"gatearea.t\", then edit your copy of airport.t3m to add the following
line at the end:

::: cmdline
    -source gatearea
:::

Whichever way you used to create the new file, the next step is to make
sure it starts with the following three lines:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"
:::

The easiest way to do that is probably to copy these lines from start.t
and paste them into gatearea.t. Once you\'ve done that, you\'re good to
go.

There\'s not much new about the first version of this area of the map,
so we\'ll just go straight away and list it:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"


    gateArea: Room 'Gate Area' 'gate area'
        "The ways to Gates 1, 2 and 3 are signposted to the northwest, north and
        northeast respectively, while a display board mounted high up on the wall
        indicates what flights are boarding and departing where and when.
        Immediately to the east is a metal door, while the main concourse lies
        south. "
        
        south = concourse
        northwest = gate1
        north = gate2
        northeast = gate3
        east = maintenanceRoom
    ;

    + Distant 'display board; departure'
        "The display imparts the following information:\b
        TI 179 to Buenos Aires <FONT COLOR=GREEN>BOARDING GATE 3</FONT>\n
        RO 359 to Mexico City <FONT COLOR=RED>DELAYED</FONT>\n
        PZ 87 to Houston <FONT COLOR=RED>DELAYED</FONT>\n
        BU 4567 to Bogota <FONT COLOR=RED>DELAYED</FONT>"
        
    ;

    maintenanceRoom: Room 'Maintenance Room' 'maintenance room'
        
        west = gateArea
        out asExit(west)
    ;



    gate1: Room 'Gate 1' 'gate[n] 1[adj]; one'
        "Disconsolate passengers lounge around on seats waiting for a flight that
        seems never to arrive. The gate to the west is closed, so the only way out
        from here is back to the southeast. " 
        
        southeast = gateArea    
    ;

    + Decoration 'disconsolate passengers;;;them'    
    ;
     
    + Decoration 'seats;;;them'
    ;    

    gate2: Room 'Gate 2' 'gate[n] 2[adj]; two'
        "This area is totally deserted, as if no one even expects a flight will ever
        board here. The gate to the north looks firmly locked, so the only
        practicable way out would seem to be back to the south. "
        
        south = gateArea
    ;

    gate3: Room 'Gate 3' 'gate[n] 3[adj]; three'
        "The area is practically deserted, apart from the odd belated passenger
        dashing off through the open gate to the east. "
        
        southwest = gateArea
        east = openGate
    ;

    + Decoration 'seats; empty deserted unoccupied; seating; them'
        "All the seats at this departure gate are unoccupied, suggesting that any
        passengers for the current flight have already boarded the plane. "
        
    ;

    + openGate: Passage 'open gate; unattended wide'
        "The gate is wide open, and for some reason totally unattended. That
        hardly seems like a high level of security.  "
        cannotOpenMsg = 'It\'s already open. '
        cannotCloseMsg = 'That hardly seems appropriate. '
        
        destination = jetway
    ;

    jetway: Room 'Jetway' 'jetway;short enclosed; walkway'
        "This is little more than a short enclosed walkway leading west-east from
        the gate to the plane. You seem to be the only person here, as if everyone
        else has already boarded. "
        
        west = gate3
    //    east = planeFront
        
    ;
:::

Note that we\'ve commented out the line [east = planeFront]{.code} on
the jetway, since the planeFront room hasn\'t been implemented yet. At
this stage you should *uncomment* the line [north = gateArea]{.code} on
the concourse room, otherwise this new section of map won\'t have a
connection from the old one.

Note also how we use \[n\] and \[adj\] in the vocab properties of the
three gates, where the usual order of adjective and noun is reversed, so
we have to mark which is which. The use of \<FONT COLOR=GREEN\>BOARDING
GATE 3\</FONT\> and the like in the description of the display board
illustrate how we can use (a subset of) HTML markup to format the text
we display to the player. The difference between \\b and \\n in the same
description is that \\b leaves a blank line following while \\n just
moves to a new line.

Also noteworthy is our first use of the Distant class. This is almost
identical to the Decoration class, except that it responds to any
command except Examine with \"The Whatever is too far away\"; here
we\'re using this to represent the fact that the display board is
mounted high up on the wall.

Let\'s think a moment more about this Distant display board. As things
stand the player can EXAMINE it, and that\'s all, but you may think that
players should equally well be able to READ it and get the same response
as they do for examining. But if you try adding [dobjFor(Read)
asDobjFor(Examine)]{.code} to the definition of the display board
you\'ll find that nothing has changed. That\'s because the handling for
all actions apart from Examine is carried out by dobjFor(Default) before
any more specific action-handling gets a look-in.

To change this, we need to override the **decorationActions** property
of the display board. This contains the list of actions the display
board will respond to specifically, instead of simply using the
dobjFor(Default) handling (which displays the \"too far away\" message).
The display board should then look like this:

::: code
    + Distant 'display board; departure'
        "The display imparts the following information:\b
        TI 179 to Buenos Aires <FONT COLOR=GREEN>BOARDING GATE 3</FONT>\n
        RO 359 to Mexico City <FONT COLOR=RED>DELAYED</FONT>\n
        PZ 87 to Houston <FONT COLOR=RED>DELAYED</FONT>\n
        BU 4567 to Bogota <FONT COLOR=RED>DELAYED</FONT>"
        
        decorationActions = [Examine, GoTo, Read]
        
        readDesc = desc
    ;
:::

We have included GoTo in the list of decorationActions because a player
might reasonably issue the command GO TO DISPLAY BOARD from another
location, and there\'s no reason why we should not allow it to work. The
Decoration class includes GoTo in its decorationActions list by default
(since players may often wish to go to the location of a Decoration),
but the Distant class does not, since it\'s often used to represent
something that\'s too far away for the player character to go to (such
as the sun, moon, sky or a distant mountain). For the display board,
however, it is appropriate to include GoTo among the actions that can be
handled. Where a Distant object is used to represent an object in a
neighbouring location, handling the GoTo action on it may require more
care, since it may be that GO TO CABIN (when the cabin is a Distant
object representing a cabin in a neighbouring location) should take the
player character to that neighbouring location; it may well be easiest
to handle such cases with Doers.

Overall the implementation of this part of the airport is a little
sparse; we shall be returning to parts of it later to fill in more
details, but the description of the seats and passengers at Gate 1 is
left as an exercise for the reader. Instead we\'ll introduce something
quite new at this point: a series of announcements over the public
address system (most of them the last call for passengers boarding at
Gate 3, in a variety of languages, just to add a little more sense of
urgency to the proceedings). To do this we\'ll define a special object
just to provide the announcements; this can be put right at the end of
the gatearea.t file:

::: code
    announcementObj: ShuffledEventList
        eventList =
        [
            '<<prefix>><q>Last call for passengers on Flight TI 179 to Buenos Aires;
            this flight is now boarding at Gate 3.</q> ',
            
            '<<prefix>><q>Ultima llamada a pasajeros en Vuelo TI 179 a Buenos Aires;
            este vuelo se aloja ahora en la Puerta 3.</q> ',
            
            '<<prefix>><q>La derni&egrave;re demande des passagers sur le Vol TI 179
            &agrave; Buenos Aires; ce vol est maintenant boarding &agrave; la Porte
            3.</q> ',
            
            '<<prefix>><q>Chamada &uacute;ltima a passageiros em TI de V&ocirc;o
            179 a Buenos Aires; este v&ocirc;o est&acute; embarcando agora na Porta
            3.</q> ',
            
            '<<prefix>><q>Will passenger Quixote please report to the airport
            information desk.</q> ',
            
            '<<prefix>><q>This is a security announcement. Any unattended baggage
            will be removed and auctioned for the airport security personnel
            benevolent fund.</q> '
            
        ]
        
        eventPercent = 67
        eventReduceTo = 33
        eventReduceAfter = static eventList.length
       
        
        start()
        {
            if(daemonID == nil)
                daemonID = new Daemon(self, &announce, 1);       
        }
        
        stopDaemon()
        {
            if(daemonID != nil)
            {
                daemonID.removeEvent();
                daemonID = nil;
            }
        }
        
        daemonID = nil
        
        announce()
        {        
            doScript();
        }
        
        prefix = 'An announcement comes over the public address system: '
    ;
:::

Okay, so let\'s explain this one step at a time.

First off, we\'ve created an object of the **ShuffledEventList** class.
This is one of a number of [EventList](../manual/eventlist.htm) classes
that you can read about in more detail in the *adv3Lite Library Manual*.
In brief, an EventList is an object which steps through each item in its
[eventList]{.code} property in turn when its [doScript()]{.code} method
is called. A ShuffledEvent list steps through its items in random order,
then shuffles the list into a new random order when it gets to the end
before repeating the process. If an item in the eventList property is a
single-quoted string, it is simply displayed.

To prevent these messages from becoming too tedious through
over-exposure we can control how often they\'re displayed. The
[eventPercent]{.code} property determines the frequency of turns (as a
percentage) on which an item will be displayed. Here we\'ve chosen a
value of 67, meaning we\'ll see a message on roughly two-thirds of
turns. The [eventReduceTo]{.code} property is the frequency of
occurrence this will eventually drop to, here 33 (i.e. roughly one third
of the time). The [eventReduceAfter]{.code} property determines when
this reduction in frequency takes place. Here we\'ve defined it to take
place after every item in the eventList has been displayed once. The
expression [eventList.length()]{.code} gives the number of items in the
list. The [static]{.code} keyword preceding it means that this number is
calculated at compile time and then stored in the compiled game file.

Second, we need some way of driving this ShuffledEventList, and to that
end we use a **Daemon** to keep calling its [doScript()]{.code} method
each turn. You can read all about Daemons and Fuses in the
[Events](../manual/event.htm) section of the *adv3Lite Library Manual*.
In brief, a Daemon is a special kind of object that calls a specified
method on a specified object at a specified interval. The definition
above, [new Daemon(self, &announce, 1)]{.code} creates a new Daemon that
calls the [announce]{.code} method of the [self]{.code} object (i.e.
announcementObj) every turn (i.e. with an interval of 1). We store a
reference to this Daemon in the [daemonID]{.code} property both so that
the [start()]{.code} method can be prevented from creating another new
Daemon if it has already created one that\'s still running, and so that
the [stopDaemon()]{.code} method can call the Daemon\'s
[removeEvent()]{.code} method if and when we want to stop it running.
The [stopDaemon()]{.code} method also checks that [daemonID]{.code} is
not nil before trying to call its [removeEvent()]{.code} method (so that
it doesn\'t try to stop a non-existent Daemon) and finally resets
[daemonID]{.code} to nil in case either [stopDaemon()]{.code} or
[start()]{.code} is called again. \[Note: in earlier versions of this
Tutorial the [stopDaemon()]{.code} method was simply called
[stop()]{.code}, but from version 1.4 of adv3Lite onwards [stop]{.code}
has another meaning as a macro, so it can no longer be used as a method
name\].

Note how the second parameter of the call to new Daemon() is specified
as [&announce]{.code} and not just [announce]{.code}. Placing the
ampersand (&) in front of the property/method name makes it a *property
pointer*. We use a property pointer in a context like this when what we
want to pass to a method isn\'t the value of a property, but a reference
to the property. Here, we\'re telling Daemon to call the
[announce()]{.code} method each turn, so we need to pass a pointer to
[announce()]{.code} so it knows which method to call. You may be
wondering why we couldn\'t simply have passed [&doScript]{.code}, since
all the [announce()]{.code} method does is to call [doScript()]{.code}.
The answer is that we could perfectly well have done here, but that
we\'ll shortly be tweaking the [announce()]{.code} method in the next
section.

The [prefix]{.code} property simply defines some text we can use in each
element of the [eventList]{.code} without having to type it out in full
each time. Note the use of various HTML entities (e.g. &agrave; for à or
&ocir; for ô) for accented letters that might otherwise be hard to
display or for the compiler to deal with if it found them in your source
file. By the way, the translations into Spanish, French and Portugeese
of the last call for passengers boarding at Gate 3 were carried out
using an online automated translation facility, so they\'re not
guaranteed to be correct! By all means feel free to correct them.

Finally, we need some means of starting this Daemon. A convenient point
at which to do so might be when the player character passes through the
metal detector, so we\'ll make a small adjustment to the method\'s
[travelDesc]{.code} method to make this happen:

::: code
    + metalDetector: Passage 'metal detector; crude; frame'
        "The metal detector is little more than a crude metal frame, just large
        enough to step through, with a power cable trailing across the floor. "
        destination = concourse
        
        isOn = true
        
        canTravelerPass(traveler)
        {
            return !isOn || !IDcard.isIn(traveler);
        }
        
        explainTravelBarrier(traveler)
        {
            "The metal detector buzzes furiously as you pass through it. The
            security guard beckons you back immediately, with a pointed
            tap of his holstered pistol. After a brisk search, he discovers the ID
            card and takes it off you with a disapproving shake of his head. ";
            
            IDcard.moveInto(counter);
        }
        
        travelDesc()
        {
            "You pass through the metal detector without incident. ";
            announcementObj.start();
        }
    ;
:::

The fact that the player character may pass through the metal detector
several times doesn\'t really matter, since once the Daemon is running,
[announcementObj.start()]{.code} doesn\'t actually do anything. In the
next section we\'ll set about laying out the plane.

Once you\'ve made all the necessary changes to your versions of start.t
and gatearea.t, try compiling and running the game again and moving
round the now extended map to make sure everything works as it should.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Extending the Map\
[[*Prev:* Starting the Map](airmap1.htm){.nav}     [*Next:* Aboard the
Plane](airmap3.htm){.nav}     ]{.navnp}
:::
