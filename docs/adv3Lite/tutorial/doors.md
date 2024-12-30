::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Doors and Locks\
[[*Prev:* Aboard the Plane](airmap3.htm){.nav}     [*Next:* Schemes and
Devices](schemes.htm){.nav}     ]{.navnp}
:::

::: main
# Doors and Locks

In a couple of places the room descriptions above mention a locked door.
You might also expect to find some doors aboard the plane: at least
between the rear of the plane and the bathroom, and probably between the
front of the plane and the cockpit as well. In the present section
we\'ll see how to go about implementing doors and locks, and add the
relevant ones to our game map.

## The Maintenance Room Door

We\'ll start with the door to the Maintenance Room, since this is the
most common or standard case: a door that can be locked or unlocked
using an ordinary key. We\'ll start by defining the door, and then add
the lock.

In adv3Lite a door is actually composed of two objects, each
representing one side of the door (apart from anything else, this makes
it easy to make one side different from the other). Each side of the
door is placed in the room in which is located, and connected to the
other side of the door via its [otherSide]{.code} property. Since a Door
is yet another TravelConnector (albeit a slightly unusual one) we also
follow the usual step of pointing the appropriate direction property of
the relevant room to the door through which it leads. This should become
clear with the particular example we\'re implemented here:

::: code
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
        east = maintenanceRoomDoor
    ;


    + maintenanceRoomDoor: Door 'metal door'
        "It's marked <q>Personal de Mantenimiento S&oacute;lo</q>, and <<if isOpen>>
        is currently open<<else>> looks firmly closed<<end>>. "
        
        otherSide = mrDoorOut
    ;

     ...

    maintenanceRoom: Room 'Maintenance Room' 'maintenance room'
        
        west = mrDoorOut
        out asExit(west)
    ;

    + mrDoorOut: Door 'metal door; plain'
        "It's just a plain metal door, currently <<if isOpen>> open<<else>>
        closed<<end>>. "
        
        otherSide = maintenanceRoomDoor
    ;
:::

Note that we handle the description of whether the doors are open or
closed manually, via embedded expressions and the [isOpen]{.code}
property (which, as you might expect, is true if the door is open and
nil if the door is closed). You *can* have the game do this for you
automatically by overriding [openStatusReportable]{.code} to be true
(either on the Door class or on individual doors), but then it can be
awkward to write descriptions of doors that read naturally (unless all
you want the player to see is \"The door is open/closed\"), so it\'s
generally better to handle this yourself to get the effect you want.

Make the changes in gatearea.t and then try compiling and running the
game and try out the door. You should find that it automatically opens
for you if you try to go through it when closed (it\'s rather annoying
to players to be told they need to do something as basic as opening a
door before going through it, so the library handles it for them via an
*implied action*; this makes for a smoother playing experience). You
should also find that the game automatically keeps both sides of the
door in sync for you: when one side of the door is opened, both are
opened, and when one is closed, both are closed.

But this door is meant to be *lockable*. You might think that we could
make it so by defining [isLockable = true]{.code} on it, but in fact
this won\'t work. Lockability isn\'t just a binary true/false state,
since even if something is lockable there\'s the question of the locking
mechanism involved. So instead of using an isLockable property we use a
**lockability** property, which can take one of four values:

-   **notLockable** This object can\'t be locked or unlocked (the
    default).
-   **lockableWithoutKey** This object can be locked and unlocked, but
    you don\'t need a key to do it (because the locking mechanism is a
    simple paddle, knob or bolt).
-   **lockableWithKey** This object can be locked and unlocked with a
    key.
-   **indirectLockable** This object can be locked and unlocked, but via
    some other mechanism (perhaps you have to pull a lever or press a
    switch somewhere, or perhaps you need to enter a combination on a
    keypad).

Note that you don\'t have to define the same locking mechanism on both
sides of a door. It\'s perfectly in order, say, for the outside of a
front door to be lockableWithKey and the inside to be
lockableWithoutKey. Note also that as well as being defined on doors,
lockability can be defined on openable containers (a strongbox, say).

Clearly, we want the maintenance room door to be lockableWithKey. We
also want it to start out locked. We therefore need to make the
following changes:

::: code
    + maintenanceRoomDoor: Door 'metal door'
        "It's marked <q>Personal de Mantenimiento S&oacute;lo</q>, and <<if isOpen>>
        is currently open<<else>> looks firmly closed<<end>>. "
        
        otherSide = mrDoorOut
        lockability = lockableWithKey
        isLocked = true
    ;

    ...

    + mrDoorOut: Door 'metal door; plain'
        "It's just a plain metal door, currently <<if isOpen>> open<<else>>
        closed<<end>>. "
        
        otherSide = maintenanceRoomDoor    
        lockability = lockableWithKey
        isLocked = true
    ;
:::

That\'s all very well, but we still haven\'t defined *which* key or keys
can be used to unlock this door. In fact, in adv3Lite, we have to do it
the other way round: we need to tell the key which things it can lock
and unlock. We do that by assigning anything that\'s going to act as a
key to the Key class, and defining a couple of properties on it thus:

::: code
    + brassKey: Key 'small brass key; yale'
        "It's just like all the other yale keys you've ever seen. "    
        
        actualLockList = [maintenanceRoomDoor, mrDoorOut]
        plausibleLockList = [maintenanceRoomDoor, mrDoorOut]
    ;
:::

The **actualLockList** property contains a list of the objects this key
in fact locks and unlocks. Note that if we want it to work on both sides
of the door, we have to list both sides of the door.

The **plausibleLockList** property lists the objects this key looks as
if it might be able to lock and unlock. Since it\'s described as a Yale
key that looks much like any other, the player character would
presumably assume that it *might* work in any Yale lock. Although we
haven\'t explicitly said so, presumably there must be a Yale lock on the
maintenance room door (otherwise the key couldn\'t work on it). Other
things being equal, then, the player character is likely to assume that
this key is at least worth trying on the maintenance room door. The
purpose of this is if the player simply types UNLOCK DOOR (without
specifying any key) or UNLOCK DOOR WITH KEY (without being very specific
about which key), the parser can make an intelligent guess about which
key to try using. Although this isn\'t actually essential, it does once
again make for a smoother playing experience.

Once a key has been tried and found to work, the key will \"remember\"
what it works on, so the parser can make an even better choice. You can
find the full story on [keys](../manual/key.htm) in the *adv3Lite
Library Manual*.

Now try compiling and running the game once more and see if you can gain
access to the maintenance room.

[]{#planedoors}

## Doors aboard the Plane

We might expect the two doors we need to implement aboard the plane
(leading into the cockpit and into the bathroom) to be broadly similar.
Within the cockpit or the bathroom one should be able to lock and unlock
the door without a key (using a knob or bolt or paddle). One probably
wouldn\'t be able to lock or unlock these doors from the other side. So
in each case we want one side of the door to have a lockability of
lockableWithoutKey, and the other to be indirectLockable with a message
explaining that the door can only be locked and unlocked from the other
side (this is probably better than making it notLockable, which might
result in a potentially misleading response). To save ourselves a bit of
repetitious work we can therefore define a couple of custom classes that
can be used to implement both pairs of doors:

::: code
    class PlaneDoor: Door 
        desc = "It's <<if isOpen>>open<<else>>closed<<end>>. "
        lockability = indirectLockable
        indirectLockableMsg = 'It looks like this door can only be locked and
            unlocked from the other side. '
            
        isLocked = nil
    ;

    class LockablePlaneDoor: Door
        desc = "It's currently <<if isOpen>>open<<else>>closed and <<if isLocked>>
            locked<<else>>unlocked<<end>><<end>>. "
        lockability = lockableWithoutKey
        
        isLocked = nil
    ;
:::

Note the use of the nested \<\<if \>\> on the LockablePlaneDoor class.
If the door is open there\'s not a lot of point in reporting whether
it\'s locked or unlocked. Note also that we explicitly defined [isLocked
= nil]{.code} on both classes of Door; this is because things that are
lockable start out locked by default, but we want the doors aboard the
plane to start out unlocked, otherwise the game won\'t be winnable.

Armed with these class defintions we can now implement the doors aboard
the plane as follows:

::: code
    cockpit: Room 'Cockpit' 'cockpit'
        
        aft = cabinDoor
        south asExit(aft)
        out asExit(aft)
        
        regions = [planeRegion]
    ;

    + cabinDoor: LockablePlaneDoor 'cabin door'
        otherSide = cockpitDoor
    ;

    planeFront: Room 'Front of Plane' 'front[n] of the plane;;airplane aeroplane'
        "The main ailse comes to an end at the port exit of the plane, but continues
        aft past the seating. A little further forward is a door that <<unless
          me.hasSeen(cockpit)>>presumably<<end>> leads into the cockpit. "
        
        fore = cockpitDoor
        north asExit(fore)
        port = jetway
        west asExit(port)
        out asExit(port)
        aft = planeRear
        south asExit(aft)
        
        regions = [planeRegion]
    ;

    + cockpitDoor: PlaneDoor 'cockpit door'
        otherSide = cabinDoor
    ;


    planeRear: Room 'Rear of Plane' 'rear[n] of the plane;;airplane aeroplane'
        "The main aisle continue forward to the front of the plane and aft to the
        bathroom between rows of red coloured seats. "
        fore = planeFront
        north asExit(fore)
        aft = bathroomDoor
        south asExit(aft)
        
        regions = [planeRegion]    
    ;

    + bathroomDoor: PlaneDoor 'bathroom door; loo toilet lavatory'
        otherSide = bathroomDoorInside
    ;

    bathroom: Room 'Bathroom' 'bathroom;;loo lavatory toilet wc cubicle'
        "The bathroom is just a tiny cubicle with all the standard fittings you'd
        expect. "
        
        fore = bathroomDoorInside
        north asExit(fore)
        out asExit(fore)    
        
        regions = [planeRegion] 
    ;

    + bathroomDoorInside: LockablePlaneDoor 'cabin door'
        otherSide = bathroomDoor
    ;
:::

If you compile and run the game now, after making these changes, you
should be able to try these doors out.

## The Door to the Security Area

Finally, we need to implement the door between the Concourse and the
Security Area. Since this is unlocked by an ID card placed in a slot, it
might seem a case where we should make the door indirectLockable. On the
other hand, it would not be unreasonable for the player to try to UNLOCK
DOOR WITH CARD, so we shall instead make it lockableWithKey, making the
IDCard the appropriate key:

::: code
    ++ IDcard: Key 'an ID Card; identification poor; photo'     
        "According to what's on the front it apparently belongs to one Antonio
        Velaquez. Fortunately the accompanying photo is so poor it could be of
        almost anyone, even you. A magnetic stripe runs down the back. "
        
        actualLockList = [securityDoor]
        plausibleLockList = [securityDoor]
    ;

    ...

    concourse: Room 'Concourse' 'concourse; long; hallway'
        "You are in a long hallway connecting the terminal
        building (which lies to the south) to the boarding gates (which are
        to the north). To the east is a snack bar, and a door leads west.
        Next to the door on the west in a small slot that looks like it
        accepts magnetic ID cards to operate the door lock. "
        
        north = gateArea
        south = securityGate
        east = snackBar
        west = securityDoor
    ;

    + securityDoor: Door 'door'
        "It's clearly marked PRIVADO and is <<if isOpen>> currently open<<else>>
        firmly closed<<end>>. "
        
        otherSide = concourseDoor
        
        lockability = lockableWithKey    
        isLocked = true    
    ;
:::

The other side of this door can just be a simple door, since we\'ll
assume that no special steps ever need be taken to lock it and unlock it
from the Security Area side:

::: code
    securityArea: Room 'Security Area' 'security area'
        "This somewhat bare room seems to be lobby for other areas. There are exits
        south and west, while the way out back to the concourse lies through the
        door to the east. "
            
        east = concourseDoor
        south = lounge
        west = securityCentre
        out asExit(east)
        
    ;

    + concourseDoor: Door 'door'
        "It's currently <<if isOpen>>open <<else>>closed<<end>>. "
        
        otherSide = securityDoor
    ;
:::

This will work well enough if the player types UNLOCK DOOR WITH CARD,
but not so well if the equally plausible PUT CARD IN SLOT is used.
Probably the best way to deal with that is to intercept PUT CARD IN SLOT
and turn it into UNLOCK DOOR WITH KEY by using a Doer:

::: code
    Doer 'put IDcard in cardslot'
        execAction(c)
        {
            doInstead(UnlockWith, securityDoor, IDcard);
        }
    ;
:::

If you recall our previous use of Doers you should probably recognize
that this means \"If the player\'s command matches PUT IDcard IN
cardslot, then redirect the command to use the UnlockWith action, with
securityDoor as the direct object and IDCard as the indirect object (in
other words UNLOCK securityDoor WITH IDCard).\"

We also want to make it clear to the player that the ID Card is the only
thing that should be put in the slot, which we can do by customizing the
cannotPutInMsg on the cardSlot object:

::: code
    + cardslot: Fixture 'card slot'  
        "The slot appears to accept special ID cards with magnetic encoding. If you
        had an appropriate ID card, you could put it in the slot to open the door. "
        
        cannotPutInMsg = '{The subj dobj} {does}n\'t look as if {he dobj}{\'s} meant
            to fit in there. '
    ;
:::

If you recompile and run this game you should be able to check that it
all works as expected; at least you could if you get the IDCard through
the metal detector to try it on the security door, but since we haven\'t
yet implemented a way of disabling the metal detector it may seem that
we\'re a bit stuck. Fear not; help is at hand! If you compile your game
for debugging (the default in Workbench; use the **-d** option if
compiling using t3Make from the command line) you get a number of
debugging commands for free. If you arrive outside the security room
door and type PURLOIN CARD (which you can abbreviate to PN CARD) you
should find the ID card pops into your hand (or rather, the player
character\'s hand) so you can try it out. Another useful debugging
command is GONEAR (which can be abbreviated to GN) which you can use to
jump around the map, e.g. GN BATHROOM. There\'s also an EVAL command
which can be used to evaluate any expression you like, within reason;
e.g. EVAL me.location would tell you the current location of the player
character, while EVAL securityDoor.makeLocked(nil) would magically
unlock the security door (use with care!). Obviously you don\'t want
your players to have access to these commands, so when you come to
compile your game for release you should use the \'Compile for Release\'
option in Workbench, and not use the [-d]{.code} option when compiling
from the command line. For further information on [debugging
commands](../manual/debug.htm), consult the *adv3Lite Library Manual*.

So, try running the game and using the PURLOIN command to get hold of
the ID card (after you\'ve passed through the metal detector!), and then
try it on the security door.

There are a couple of further refinements we could implement on the
security door. We might expect unlocking the door with the card to open
it, or at least make it pop open a fraction, and closing the door to
lock it. We can implement these refinements by overriding the makeOpen()
and makeLocked() method of the door like so:

::: code
    + securityDoor: Door 'door'
        "It's clearly marked PRIVADO and is <<if isOpen>> currently open<<else>>
        firmly closed<<end>>. "
        
        otherSide = concourseDoor
        
        lockability = lockableWithKey    
        isLocked = true    
        
        makeLocked(stat)
        {
            inherited(stat);
            if(stat == nil)
            {
                makeOpen(true);
                "The door pops open a fraction. ";
            }
        }
        
        makeOpen(stat)
        {
            inherited(stat);
            if(stat == nil && !gAction.isImplicit)
            {
                makeLocked(true);
                "You hear a slight click as the door locks itself when you close
                it. ";
            }
            
        }
    ;
:::

The messages that we\'ve just added would look a bit awkward if they
appeared alongside the default messages we get for unlocking and closing
a door, but if you try the door out now you\'ll find that these are no
longer displayed; the library assumes that since you\'re displaying your
own message you don\'t want its default one as well. This is always the
case when a default message is produced at the [report()]{.code} stage
of an action, a point we shall return to in more detail in a later
chapter. Finally, note that we\'ve avoided a potential \"deadly
embrace\" in which our overridden versions of [makeOpen(stat)]{.code}
and [makeLocked(stat)]{.code} keep on calling each other for all
eternity, since one only calls the other when [stat]{.code} is nil, and
then always passes the value true to the [stat]{.code} parameter of the
other. Note also that our custom code on [makeOpen(stat)]{.code} isn\'t
used when the current action is an implicit one; this prevents the mess
that would otherwise result when the door was implicitly closed as part
of a LOCK action.

We can improve our implementation of this self-locking door (one that
locks itself when closed) by using a Doer to redirect the LOCK action to
a CLOSE action:

::: code
    Doer 'lock securityDoor; lock securityDoor with IDcard'
        execAction(c)
        {
            doInstead(Close, securityDoor);
        }    
    ;
:::

Note that some care is needed in choosing where to place such a
definition in your source code. In particular, you need to avoid putting
it somewhere were it might disrupt the containment hierarchy.In other
words, don\'t put a Doer before any object whose location is defined
using the + syntax, since you don\'t want to locate the object in the
Doer. It\'s safest to define Doers either at the start or end of your
source file or in a separate source file altogether, well clear of the
definitions of Rooms and physical objects in your game.

\

## Reprise

In this chapter we\'ve managed to cover quite a bit of new ground while
ostensibly just laying out a map. The current section explained how to
implement doors and keys, and gave a few examples of customizing the
former to meet particular requirements. Other new adv3Lite/TADS 3
features we\'ve encountered include:

-   Defining the **vocab** property on Rooms to enable the player to
    make use of the GO TO command (and other reasons besides).
-   The **Passage** class (representing things the player character can
    go through to get from one location to another), as a further
    example of a TravelConnector.
-   The **OpenableContainer** class to define containers that can be
    opened and closed.
-   The use of **Separate Compilation** to split the source code of a
    game over several files.
-   The **ShuffledEventList** class used to provide a stream of
    randomly-sequenced messages.
-   The use of a **Daemon** to drive events at regular intervals.
-   The use of the **hasSeen(obj)** method to test whether the player
    character has seen *obj* yet.
-   The use of **Regions** to group rooms in a common area, and of
    **obj.isIn(reg)** to test whether *obj* is somewhere in the Region
    *reg*.
-   The use of the mix-in **MultiLoc** class to define objects that can
    be in several rooms at once.
-   The use of **debugging** commands like PURLOIN, GONEAR and EVAL to
    help with testing.

While none of these would count as a basic feature of adv3Lite, they are
all sufficiently common that they\'re well worth getting to know, so if
you\'re a bit uncertain about any of them it may be worth going back to
take another look, or else perhaps looking them up in the *adv3Lite
Library Manual*. As we continue to implement the Airport game in the
next chapter, we shall be introducing some more as yet unfamiliar
features of adv3Lite.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Airport](airport.htm){.nav} \>
Doors and Locks\
[[*Prev:* Aboard the Plane](airmap3.htm){.nav}     [*Next:* Schemes and
Devices](schemes.htm){.nav}     ]{.navnp}
:::
