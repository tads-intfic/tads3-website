::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Symconn\
[[*Prev:* Subtime](subtime.htm){.nav}     [*Next:*
Sysrules](sysrules.htm){.nav}     ]{.navnp}
:::

::: main
# Symconn (Symmetrical Connectors)

## Overview

The purpose of the Symconn extension is to simplify setting up two-way
travel connectors, that is single objects that represent an abstract
travel connection, passage, door, or stairway between two locations
(rather than needing to do this with pairs of objects, as in the
standard library). This extension can also automate the creation of
reverse connections;if this extension is included then defining a direct
connection from one room to another will automatically lead to the
creation of a reverse connection from the second room to the first,
unless the game already defines a connection back or the reverse
direction property has already been defined on the second room.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

-   *Classes*: [SymConnector](#symcons), [SymPassage](#sympassage),
    [SymPathPassage](#sympathpassage), [SymDoor](#symdoor),
    [SymStairway](#symstair).
-   *Objects*: [noExit](#noexit).
-   *Properties/methods on SymConnector*: [room1]{.code},
    [room2]{.code}, [byRoom()]{.code}, [inRoom1]{.code},
    inRoom2, [room1Dir]{.code}, [room2Dir]{.code}, [dirName]{.code}
-   *Properties/methods on SymPassage*: [room1Desc]{.code},
    [room2Desc]{.code}, [room1Vocab]{.code}, [room2Vocab]{.code},
    [attachedDir()]{.code}.
-   *Properties/methods on SymDoor*: [room1Lockability]{.code},
    [room2Lockability]{.code}.
-   *Properties/methods on SymStairway*: [upperEnd]{.code},
    [lowerEnd]{.code}, [inUpper]{.code}, [inLower]{.code},
    [upOrDown]{.code}, [byEnd()]{.code}

[]{#usage}

## Usage

Include the symconn.t file after the library files but before your game
source files.

When the symconn extension is present, it will automatically set up
reverse connections between rooms where game code doesn\'t already do
so. In the standard library, if you set [hall.east]{.code} to
[study]{.code}, say, you would also have to set [study.west]{.code} to
[hall]{.code} if you wanted the player character to be able to move back
and forth between the two rooms (as most of the time you probably
would). The symconn extension looks after this for you, so that if you
set [hall.east]{.code} to [study]{.code}, this extension will then
automatically set [study.west]{.code} to [hall]{.code}, *unless* you
have already defined [study.west]{.code} to be something other than
[nil]{.code} or you\'ve defined some other way back from room2 to room1.

[]{#noexit}

In cases where you don\'t want a connection between rooms to be
symmetrical, you need to define the connection back from the second room
yourself (e.g. if you want the connection from the second room to the
first to be to the southeast when the connection from the first room to
the second is to the west). In such cases you could define the reverse
connection to be a different room (if you were trying to create a
confusing maze, for example). If you want there to be no way from the
second room to the first, you need to define something on the reverse
direction of the second room (for example, on the [east]{.code} property
of a second room that\'s to the west of the first). You could define
this to be a single-quoted or double-quoted string explaining why travel
back that way isn\'t possible, or you could define it to be **noExit**,
which then mimics there being no connector back in that direction. So,
for example, if it was possible to go down from the cliff to the ravine,
but not to go up from the ravine to the cliff, you could define
[cliff.down = ravine]{.code} and [ravine.up = noExit]{.code} (or else
perhaps a string explaining that the cliff was too steep to climb.)

If you want to stop the symconn extension setting up reverse connections
altogether (for example, because you want to use the classes symconn
defines without this automatic reverse connection behaviour) you can
override the **autoBackConnections** on the Room class to nil. Setting
[autoBackConnections]{.code} on an individual room to nil will prevent
symconn from automatically creating any reverese connections back to
that room. (This is defined on the Room class, since it\'s the Room
class that\'s responsible for setting up these automatic reverse
connections).\
[]{#symcons}

## Symmetrical Travel Connectors

This extension also defines the **SymConnector** class and its three
subclasses, [SymPassage](#sympassage), [SymDoor](#symdoor) and
[SymStairway](#symstair).

SymConnector is a type of
[TravelConnector](../../docs/manual/travel.htm) (from which it descends
by inheritance). A SymConnector can be traversed in both directions, and
defining a SymConnector on a direction property of one room
automatically attaches it to the reverse direction property of the room
to which it leads. Otherwise, a [SymConnector]{.code} behaves much like
any other TravelConnector, and can be used to define travel barriers or
the side-effects of travel in much the same way. For example, we could
define:

::: code
     defile: Room 'Narrow Defile'
            
        east: SymConnector -> precipice
        "You just manage to squeeze through. "     
        {        
            
            canTravelerPass(traveler)
            {
                return traveler.getCarriedBulk < 4;                
            }
            
            explainTravelBarrier(traveler)
            {
                "You can't squeeze through carrying so much stuff. ";
            }
        }
     
:::

This would cause the same [SymConnector]{.code} (the very same object,
not just a copy of it) to be attached to the west property of the
[precipice]{.code} room, so that travelling east from [defile]{.code} or
west from [precipice]{.code} would be subject to precisely the same
restriction on the maximum bulk carried by the traveler, and would
result in exactly the same \"You just manage to squeeze\" through
message being displayed if travel were allowed in either direction.
Travelling west from [precipice]{.code} would then take the
[traveler]{.code} back to the defile. (If you needed to vary the details
of what happened according to the direction of travel you could always
test the value of [traveler.getOutermostRoom]{.code} to determine which
end *traveler* was starting from).

Internally a SymConnector defines a **room1** property and a **room2**
property, [room1]{.code} and [room2]{.code} being the two rooms
reciprocally connected by the SymConnector. At preinit the symconn
extension automatically sets the [room1]{.code} property of a
SymConnector to the room one of whose direction properties is attached
to that SymConnector, and the [room2]{.code} property of the
SymConnector to the [destination]{.code} of the SymConnector. In the
example about the [-\> precipice]{.code} in the template defines the
[destination]{.code} property (directly) and hence the [room2]{.code}
property (indirectly). So, to set up a SymConnector you\'d typically use
the coding pattern illustrated above: attach it to the direction
property of one room and leave the extension to set up the reverse
connection from the other room.

However, you can also use a [SymConnector]{.code} (including a
[SymPassage](#sympassage), [SymDoor](#symdoor) or
[SymStairway](#symstair)., for which see below) to set up an
*asymmetric* connection, by defining a different direction from the
obvious reverse one on the second room to point back to the same
SymConnector. For example, if you have room1\'s [west]{.code} property
and room2\'s [southeast]{.code} property point to the same SymConnector,
this extension won\'t then attempt to make room2\'s [east]{.code}
property do so. If you don\'t want there to be any way back from room2
to room1 then there\'s little point using a SymConnector at all; you\'d
be better off using an ordinary
[TravelConnector](../../docs/manual/travel.htm) to set up the one-way
connection.\
\
[]{#sympassage}

A **SymPassage** is a kind of [SymConnector](#symcons) representing a
physical object that\'s present in both the locations it connects. A
SymPassage is also a [MultiLoc](../../docs/manual/multiloc.htm), which
the symconn extension automatically places in its two locations at
preinit. It is very like a [SymDoor](#symdoor), except that it can\'t be
opened or closed (at least, not via player commands). The
[SymPassage]{.code} class can be used to define passage-like objects
such as passageways and archways that connect one location to another. A
[SymPassage]{.code} is otherwise defined in exactly the same way as a
[SymDoor]{.code}; from a player\'s perspective it is functionally
equivalent to a [Passage](../../docs/manual/extra.htm#travelconn), the
differences from the game author\'s point of view being that it can be
defined using one game object instead of two and that this extension
automatically takes care of setting up the connection in the reverse
direction.

There are a number of ways a SymPassage object can be defined. The first
(which is particularly useful if you want the passage to be a nested
objectas in the cave example below) is to set the direction property of
the first room to point to it and then to set its own destination
property to point to the second room, like so:

::: code
    firstRoom: Room 'First Room'
        "A narrow passage leads east. " 
        east = myPassage
    ;

    myPassage: SymPassage 'narrow passage'
         destination = secondRoom   // or we could the template to just have -> secondRoom
    ;

    secondRoom: Room 'Second Room'
       "A narrow passage leads west. "
    ;
     
:::

This will work, since the extension will take care of locating the
passage in both the rooms and pointing the second room\'s west property
back to the same passage. But, particularly if the three object
definitions are quite widely separated in game code, it may be less than
obvious later what the connections are. The recommended coding pattern,
therefore is to set the passage\'s [room1]{.code} and [room2]{.code}
properties explicitly (which can be done via a template, as shown below)
and to set the back connection on the second room explicitly, like this:

::: code
    firstRoom: Room 'First Room'
        "A narrow passage leads east. " 
        east = myPassage
    ;

    myPassage: SymPassage 'narrow passage' @firstRoom @secondRoom
         
    ;

    secondRoom: Room 'Second Room'
       "A narrow passage leads west. "
       west = myPassage
    ;
     
:::

[]{#roomdesc}

It\'s possible that the passage looks the same from both ends, in which
case you can just set its [desc]{.code} property in the normal way, but
the two ends of passage may look different, in which case you can define
a separate [room1Desc]{.code} and [room2Desc]{.code} to define how it
looks from each end (which is another reason you might want to define
the [room1]{.code} and [room2]{.code} properties explicitly, so you can
see which is which).

The change in appearance might, however, lead to a change in the way the
passage should be referred to; for example the passage might be narrow
at one end but broaden out at the other. To handle this you can use the
[room1Vocab]{.code} and/or [room2Vocab]{.code} properties explicitly.
You don\'t need to define both, since if you define one, the extension
will use the passage\'s initial [vocab]{.code} property for the other.
For example:

::: code
    firstRoom: Room 'First Room'
        "A narrow passage leads east. " 
        east = myPassage
    ;

    myPassage: SymPassage 'narrow passage; leading east' @firstRoom @secondRoom
        room1Desc = "The passage leading east is quite narrow, but looks like it broadens out further along. "
        room2Desc = "The passage leading west is quite broad, but looks like it narrows further along. "
        room2Vocab = 'wide passage; broad leading west'     
    ;

    secondRoom: Room 'Second Room'
        "A wide passage leads west. "
        west = myPassage
    ;
     
:::

Having to define two description properties where the descriptions
don\'t vary all that much feel like a lot of busywork. An alternative is
to define simply the one desc property and vary it using embedded
expressions (the \<\< \>\> syntax). SymConnector and its descendants
define a number of properties and methods to help with this. The
**inRoom1** and **inRoom2** properties are true if the player character
is in room1 or room2 respectively. The **room1Dir** and **room1Dir**
properties give the direction of travel (as a Direction object) the
player character must go in to traverse this room from room1 and room2
respectively, while the **dirName** property gives the name of that
direction from the perspective of the player character\'s current
location (assuming this is either room1 or room2. This would enable us
to define the myPassage object aboce as:

::: code
    myPassage: SymPassage 'narrow passage; leading east' @firstRoom @secondRoom
        "The passage leading <<dirName>> is quite <<inRoom1 ? 'narrow' : 'broad'>> but looks like it <<inRoom1 ? 'broadens out' : 'narrows'>> further along. "
        
        room2Vocab = 'wide passage; broad leading west'     
    ;
     
:::

This can be compressed a bit further by using the **byRoom** method for
the desc property thus:

::: code
      "The passage leading <<dirName>> is quite <<byRoom(['narrow', broad'])>> but looks like it <<byRoom(['broadens out', 'narrows])'>> further along. "    
     
:::

Note that the byRoom() method takes a single argument that should be a
list of two strings, the first to be displayed for room1 and the second
for room2. This allows all alternative method of achieving the same
result using a string template thus:

::: code
     "The passage leading <<dirName>> is quite <<['narrow', broad']) by room>> but looks like it <<['broadens out', 'narrows'] by room>> further along. "   
     
:::

The use of these techniques is not restricted to the desc property; they
can be employed on any property/method of a SymmConnector (such as
[travelDesc]{.code}) you may want to vary according to the room or
direction of travel (travelDesc is invoked while the player character is
still in the starting location, so if the player is in room1 travel is
towards room2 and vice versa). Note that the byRoom() method is also
defined on Thing, where is simply returns an empty string. Game code
could thus use it elsewhere than with the symconn extension for whatever
purpose a game author deems convenient, passing a list of whatever
length is useful for the purpose.

Note, however, that all these techniques assume that the player
character is either in room1 or room2 when viewiing the SymConnector in
question. This may mot be the case if the SymCommector is visible from a
remote location that\'s part of a
[SenseRegion](../../docs/manual/senseregion.htm) also containing the
player character. This shouldn\'t matter too much provided suitable care
is taken in defining the SymConnector\'s
[remoteDesc(pov)](../../docs/manual/senseregion.htm#remoteprops)
appropriately.

The [SymPassage]{.code} class also defines the [isOpen]{.code} property
which is true by default. The symconn extension makes no use of this
property on [SymPassage]{.code}, but a game could use it to simulate a
passage that starts out blocked, e.g.:

::: code
     cave: Room 'Cave'
        "A passage runs off to the west. "
        west: SymPassage
        {
           -> cave2
           'passage; narrow'
           "<<isOpen>>It's quite narrow, but you should be able to squeeze through. <<else>>It's blocked by a fall of rock. <<end>>"
           
           isOpen = nil
           canTravelerPass(traveler) { return isOpen; }
           
           explainTravelBarrier(traveler)
           {
               "The passage is blocked by rubble from a rockfall. ";
           }
        } 
     
:::

Then at some later point in the game when the player managed to unblock
the passage you would call [cave.west.makeOpen(true);]{.code}

\
[]{#sympathpassage}

A **SymPathPassage** is a kind of [SymPassage](#sympassage) representing
a path, road, or track (the kind of thing you might find in an outside
location as opposed to a passage indoors). It behaves exactly like a
SymPassage except that players can also GO ALONG, GO UP, GO DOWN, or
FOLLOW it, all of which have the same effect, namely of travelling via
the SymPathPassage.

\
[]{#symdoor}

The **SymDoor** class lets you define a door using one object instead of
the usual two. Using the standard adv3Lite library you\'d typically set
up a [door](../../docs/manual/door.htm) between two rooms like this:

::: code
     redRoom: Room 'Red Room'
       "A door leads south. "
       
       south = blackDoor1
     ;
     
     + blackDoor1: Door 'black door'
        "It's black. "
        otherSide = blackDoor2
     ;
     
     greenRoom: Room 'Green Room'
       "A door leads north. "
       north = blackDoor1  
       
    + blackDoor2: Door 'black door'
        "It's black. "
        otherSide = blackDoor1
    ;   
     
:::

Using the SymDoor class this could be reduced to this:

::: code
     redRoom: Room 'Red Room'
       "A door leads south. "
       
       south = blackDoor
     ;
     
     blackDoor: SymDoor 'black door' @redRoom @greenRoom
        "It's black. "
        
     ;
     
     greenRoom: Room 'Green Room'
       "A door leads north. "
       
       north = blackDoor
     ;    
     
:::

You don\'t actually need to define [north = blackDoor]{.code} on
[greenRoom]{.code} here, since the symconn extension will do this for
you, but, as mentioned above, you might find it easier to understand
what\'s going on in your code if you do.

Since SymDoor inherits from [SymPassage](#sympassage), you can set it up
in just the same way. In particular you can use the
[room1Desc](#roomdesc), room2Desc, room1Vocab and room2Vocab properties
just as you would on a SymPassage. In addition, on a SymDoor you can
define **room1Lockability** and **room1Lockability** properties to make
the [lockability](../../docs/manual/thing.htm#behaviour) work in
different ways on each side of the door (although if you want the same
lockability on both sides of the door you can just override its
lockability property). The one thing you can\'t do is define different
keys to work on the different sides of the door. If you really wanted to
do that you\'d be better off using the regular
[Door](../../docs/manual/door.htm) class to define the door as two
different objects.

[]{#attachdir}

It\'s sometimes convenient to refer to a door by the direction it leads
in (e.g. \"The west door\" or \"The north door\"). The symconn extension
takes care of this for you automatically. For example, the black door in
the example above can be referred to by the player as \'south door\'
when the player character is in redRoom and as \'north door\' when the
player character is greenRoom and the game will know which door is
meant, without the game author having to take any steps to make this
happen. If, however, you want to suppress this behaviour on a particular
SymDoor, you can do so simply by overriding its **attachDir** property
to [nil]{.code} ([attachDir]{.code} is a method that works out which
direction property a SymDoor is attached to in the player character\'s
location, which is used by the **DirState**
[State](../../docs/manual/thing.htm#manipulatevocab) object to add the
appropriate direction name adjectives, such as \'north\', to the
SymDoor\'s vocab).

\
[]{#symstair}

The **SymStairway** class lets you define a stairway using one object
instead of the usual two (a paired StairwayUp and StairwayDown). In
essence you can define a SymStairway in just the same way as a
[SymPassage](#sympassage), using the same properties to customize its
two ends if and as desired. In addition, however, a SymStairway needs to
know which is its upper end and which its lower end, which it does via
its [upperEnd]{.code} and [lowerEnd]{.code} properties (which should
contain the rooms at its upper and lower ends respectively). Provided
the SymStairway is attached to the [up]{.code} or [down]{.code} property
of at least one of the rooms it connects, the extension can work out
which end is which for itself and there\'s no need for you to specify
this in your game code. The extension can also do this if the connection
to the [up]{.code} or [down]{.code} property is indirect, via an
[asExit()]{.code} macro, e.g., [up asExit(west)]{.code} where the
SymStairway is directly attached to the [west]{.code} property. If,
however, the SymStairway is only reachable via a compass direction (or
in or out) then you\'ll need to define its [upperEnd]{.code} and
[lowerEnd]{.code} properties yourself.

On the subject of the asExit() macro, if you define [up
asExit(west)]{.code} on the lower room, it\'s generally a good idea to
define [down asExit(east)]{.code} (or whatever direction takes you back
down) on the upper room, since if the player reaches the upper room with
the command UP s/he\'ll expect be to able to reverse that travel with
the command DOWN. For that reason, if this extension finds an
UnlistedProxyConnector (as Exit()) on the up or down property of a room,
it will ensure that there\'s a matching UnlistedProxyConnector on the
corresponding down or up property of the destination room, unless that
property has been already overriden in game code or there\'s no other
way back down defined on the destination room. Normally this will be
what you will want, but if you don\'t (for example, because there are
several ways down from the destination room), you can block this by
defining the down direction on the upper room (say) as [noExit]{.code}
or else, perhaps, as a string explaining why DOWN is not an appropriate
direction, for example, [dpwn = \'From here staircases lead down to
north, east and west; which way do you want to go?\']{.code}.

In addition to the shortcut methods for writing descriptions on other
kinds of SymCommector, SymStairway defines **inUpper** and **inLower**
properties which evaluate to true or nil depending on whether the player
character is at the upper end or lower end of the SymStairway in
question. The **upOrDOwn** evaluates to \'down\' if we\'re at the upper
end and \'up\' if we\'re at the lower end (these being the ways the
stairway will run from either end). Finally, the **byEnd()** method
works analogously to the byRoom() method, taking as its argument a list
of two strings, and returning the first if we\'re at the upper end of
the stairway and the second otherwise. So for example one could define:

::: code
    testStairs: SymStairway 'staircase; ; stairs' @startroom @orangeRoom
        "The stairs <<['climb', 'descend'] by room>> <<upOrDown>> to the <<dirName>>. "
        
        travelDesc = "{I} {run} <<upOrDown>> the stairs. "
    ;
:::

\

Note that [SymPassage]{.code} is a subclass of [SymConnector]{.code}
(and [MultiLoc]{.code}) and the superclass of [SymDoor]{.code}, but that
[SymPassage]{.code} does not inherit from [Passage]{.code}, or
[SymDoor]{.code} from [Door]{.code}, or [SymStairway]{.code} from
[StairwayUp]{.code} or [StairwayDown]{.code}.

[]{#further}

## Further Considerations

The symconn extension doesn\'t enable you to do anything you couldn\'t
do without it; it just makes setting up (most) connections a bit less
work. The main upside is that it gives you a bit less typing to do; a
corresponding potential downside is that it may make your code less
clear, since some of the connections between rooms will be implicitly
added by the extension rather than shown explicitly in your code (for
example, if you define [hall.east]{.code} as [study]{.code} and leave
this extension to define [study.west = hall]{.code}, then when you come
to look at your code later it may not be apparent that there\'s an exit
west from the study to the hall (especially if the definitions of the
study and the hall are some way apart in your code). You could, of
course, add a comment to that effect, but then you might as well have
defined [study.west = hall]{.code} in your code. A subsidiary advantage
of using this extension is that should you forget to define a connection
back (e.g. you define [hall.east]{.code} as [study]{.code} but forget to
define [study.west]{.code} as [hall]{.code}), this extension will take
care of it for you. The corresponding disadvantage is that you\'d have
to remember to explicitly define [study.west = noExit]{.code} if for
some reason you didn\'t want the connection back, although since this is
unlikely to occur very often, in this instance the advantage might
clearly outweigh the disadvantage.

So one way to use this extension might be to define all directional
connections you want on each room explicitly (so it\'s clear in your
code where every direction leads) but to take advantage of the SymConn,
SymPasaage and SymDoor classes to avoid having to define pairs of
objects where a single object can do the job perfectly well, while
regarding the extension\'s ability to supply any missing back
connections as an added bonus in cases of accidental omission.

Being able to define doors with one (SymDoor) object instead of two
(Door) objects may well be a welcome saving of labour, especially if the
majority of doors in your game are the same both sides, as may often be
the case. To make your code clearer, you may prefer to define the
[room1]{.code} and [room2]{.code} properties on your SymDoors (and
SymPassages) explicitly; for example, instead of:

::: code
    blackDoor1: SymDoor 'black door'
        "It's black. "
        room2 = greenRoom
     ; 
     
:::

You could write:

::: code
    blackDoor1: SymDoor 'black door'
        "It's black. "
        room1 = redRoom
        room2 = greenRoom
     ; 
     
:::

Or, using an alternative form of the SymPassage/SymDoor template:

::: code
    blackDoor1: SymDoor 'black door' @redRoom @greenRoom
        "It's black. "    
     ; 
     
:::

Which may make it clearer in your code which two rooms the black door is
connecting. Note, however, that if you do this you must also define
[redRoom.south = blackDoor]{.code} (and you could also optionally define
[greenRoom.north = blackDoor]{.code} if you wished for the sake of
clarity). Or, more generally, if you explicitly define the
[room1]{.code} property on a SymDoor or a SymPassage, you must
(normally) also remember to assign the SymDoor or SymPassage to a
direction property of [room1]{.code}.

A possible exception to this, where you would have to define the room1
and room2 properties explicitly without assigning the SymDoor to a
direction property of room1 would be if you were trying to model the
presence of more than one door leading in the same direction. For
example, suppose there were two doors, a red door and a green door both
leading west from the same room. One way you could model this might be
as follows:

::: code
     livingRoom: Room 'The Living Room' 
        "There are two doors on the west side of the room, one red and
         the other green. "
            
        west: TravelConnector
        {
            getDestination(origin)
            {
                switch(pcRouteFinder.currentDestination)
                {
                case redRoom:
                    return redRoom;
                case greenRoom:
                    return greenRoom;
                default:
                    return nil;
                }
            }
            
            execTravel(actor, traveler, conn)
            {
                local dest = getDestination(traveler.getOutermostRoom);
                if(dest == redRoom)
                    redDoor.execTravel(actor, traveler, conn);
                else if(dest == greenRoom)
                    greenDoor.execTravel(actor, traveler, conn);
                else            
                {
                    "There are two doors to the west, a red one and a green one. ";
                    askChooseObject(GoThrough, DirectObject, 'Which one do you want
                        to go through? ');
                }
            }
        }
        
        
    ;

    redDoor: SymDoor 'red door' @livingRoom @redRoom
    ;

    greenDoor: SymDoor 'green door' @livingRoom @greenRoom
    ;
     
:::

Here, most of the complication on the TravelConnector defined on
[livingRoom.west]{.code} is simply to allow the routefinder to find a
route to the red room and the green room through the red and green
doors. If you weren\'t concerned about that, you could simply define:

::: code
       west()
       {
           "There are two doors to the west, a red one and a green one. ";
            askChooseObject(GoThrough, DirectObject, 'Which one do you want
            to go through? ');
       }
     
     
:::

But then GO TO RED ROOM and GO TO GREEN ROOM might fail to work as
expected.

Overall it\'s up to you as a game author to weigh up the pros and cons
of various different approaches, including whether or not to use this
extension, and then make your own decision about how you want to work.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[symconn.t](../symconn.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Symconn\
[[*Prev:* Subtime](subtime.htm){.nav}     [*Next:*
Sysrules](sysrules.htm){.nav}     ]{.navnp}
:::
