::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Doors\
[[*Prev:*Room Descriptions](roomdesc.htm){.nav}     [*Next:*
TravelConnectors and Barriers](travel.htm){.nav}     ]{.navnp}
:::

::: main
# Doors

A Door is an object that can be attached to the direction property of a
Room, and which can be open and closed and optionally locked and
unlocked, and which has to be open to allow an actor to pass through it.
As in the adv3 library, so also in adv3Lite a physical door is
represented by two game objects, each representing one side of the door
(in each of the two locations connected by the door). To create a door,
then, it is necessary to define a Door object in each location attached
to the appropriate direction property; to let the library know that
these are two sides of the same door it is further necessary to set the
**otherSide** property of each Door object to point to the other Door
object, for example:

::: code
    hall: Room 'Hall' 'hall'
       "The front door lies to the west. "
       west = frontDoor
    ;

    + frontDoor: Door 'front door; solid oak' 
        "It's a solid oak front door, strong enough to resist a siege. "
        
        otherSide = frontDoorOutside
        lockability = lockableWithKey
        isLocked = true    
    ;


    drive: Room 'Front Drive' 'front drive'
        "The front drive sweeps round from the northwest and comes to an end just in
        front of the house, which stands directly to the east. A narrow path runs
        round the side of the house to the southeast. "
        
        east = frontDoorOutside
    ;

    + frontDoorOutside: Door 'front door'    
        otherSide = frontDoor
        lockability = lockableWithKey
        isLocked = true
    ;

Note that as in the above example, to make a door lockable we define its
lockability property just as we would on any other Thing.

Another point to note is that in order to keep everything in sync we
defined the **otherSide** property on both sides of the Door and
[[isLocked]{#doorlocked_idx} = true]{.code} on both sides of the Door.
While this is good practice, it is not absolutely necessary, however,
since if we forget to do it the library will attempt to correct it for
us. In particular, if we are compiling for debugging, the library will
warn us at the start of the game if it finds any Doors with an otherSide
of nil, and whether or not we\'re compiling for debugging it will
attempt to correct mismatched otherSide and isLocked properties (with
isLocked = true taking precedence over isLocked = nil). Note, however,
that there is no need for the lockability properties of both sides of
the same door to be the same. It is quite in order for each side of a
door to have a different locking mechanism (e.g. a key on one side and a
keypad on the other) or for only one side of the door to be lockable
(and hence unlockable). IF you *deliberately* don\'t want a door to have
another side (for example, because it\'s a fake door that\'s never
opened, or it\'s one side of a lift door whose other side may change in
the course of the game) you can suppress the warning messages by setting
its [otherSide]{.code} property to [self]{.code} instead of
[nil]{.code}. In that case the exit leading through the door will be
shown in the exit lister as visited, which may or may not be what you
want; on the one hand it can betray the fact that the door doesn\'t go
anywhere, while on the other by so doing it may helpfully tell players
that they don\'t need to try to find a way through the door since it can
never be opened. You may thus also want to override the **destination**
property of such a door to **unknownDest\_**, which will make it show up
in the exit listing as an unvisited exit. You could then subsequently
change the [destination]{.code} to getOutermostRoom (which will make it
show up as a visited exit) once something happens to tell the player
that there\'s in fact no way through the door.

The library takes care of a few other details for us besides, in
particular:

-   A Door is defined as being fixed in place and not listed (isFixed =
    true and isListed = nil) by default, since these settings apply to
    virtually all Doors.
-   A Door is defined as being visible in the dark (i.e. visibleInDark
    becomes true) if the room on its other side is illuminated (this
    allows the player character to travel from a dark room to an
    illuminated room through a Door, so is usually the desired
    behaviour).
-   The **makeOpen(stat)** and **makeLocked(stat)** of a Door
    automatically keep both sides of a door synchronized (i.e. calling
    these methods on one side of a Door automatically updates the
    appropriate property --- isOpen or isLocked --- on both sides of the
    Door).
-   When the player character passes through a door the
    isDestinationKnown property is set to true on both sides of the door
    (mainly to allow subsequent pathfinding through the door).
-   If an actor tries to pass through a door that is closed, the game
    will attempt to open the door via an implicit action and will block
    the travel if the door remains closed because it was locked, unless
    the door\'s **autoUnlock** property is true, in which case
    attempting to open the door will trigger an attempt to unlock it via
    an implicit action provided the attempt has a plausible chance of
    success (either because the door doesn\'t need a key or because the
    actor possesses a key that might plausibly unlock the door).

Finally, note that to define the front door in the example above we had
to define two objects, [frontDoor]{.code} and [frontDoorOutside]{.code},
each representing one side of the door. This is nearly always the case
when using the Door class (unless you\'re using it to define a dummy
door that can never be opened). For doors that are the same both sides
you may find it easier to use the
[SymDoor](../../extensions/docs/symconn.htm#symdoor) class defined in
the [symconn](../../extensions/docs/symconn.htm) extension, since this
allows you to define a door using only one game object instead of two.
To take advantage of this class you would need to explicitly include the
symconn extension in your build.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Doors\
[[*Prev:* Room Descriptions](roomdesc.htm){.nav}     [*Next:*
TravelConnectors and Barriers](travel.htm){.nav}     ]{.navnp}
:::
:::
