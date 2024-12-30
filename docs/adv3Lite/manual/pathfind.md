::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Pathfinding\
[[*Prev:* Instructions](instruct.htm){.nav}     [*Next:*
Scenes](scene.htm){.nav}     ]{.navnp}
:::

::: main
# Pathfinding

The pathfind.t module is used to implement pathfinding for the player
character and, optionally, non-player characters. Its inclusion
effectively enables the GO TO X command as an alternative form of
navigation, (where X can be a room or some object known to the player
character). You don\'t have to do anything except leave it in the build
to make it work; in the adv3Lite library it\'s all set up to go, but if
you don\'t want to allow this type of navigation, or your game map is so
small you don\'t need it, you can exclude pathfind.t from the build;
there\'s certainly no point in including it in a one-room game, for
example.

That said, you may find it helpful to know a little bit more about how
the pathfinder works and how you can use it.

## The GO TO and CONTINUE commands

From the player perspective the player character pathfinding is
implemented by two commands, GO TO and CONTINUE (the latter can be
abbreviated to C). GO TO takes the player character one step on his/her
journey; the CONTINUE command is used to take each successive step (if
more than one is needed). The reasons for proceeding only one step at a
time are:

1.  Using the GO TO command should not reduce the number of turns it
    takes to get from one place to another.
2.  In general it is impossible to predict whether the player character
    might encounter some obstacle or other reason for breaking the
    journey along the route. Taking the journey one step at a time
    allows such obstacles to be dealt with on the turn they arise.
3.  Taking the journey one step at a time gives the player/player
    character the opportunity to interact with anything encountered
    along the way, for example an NPC that can be conversed with, or a
    new clue that can be examined. If the player character were taken
    straight to his/her destination s/he might miss things along the
    route s/he might want to see or interact with.

The reasons for implementing a separate CONTINUE command rather than
having the player type AGAIN or G are:

1.  The GO TO command calculates the route whereas the CONTINUE command
    merely makes use of the route calculated by the last GO TO command.
    On a small map this might not make a discernible difference, but on
    a large map, and especially on a very large map, CONTINUE might be
    noticeably faster to execute than GO TO.
2.  If the player character stops along the route to examine or interact
    with things, the journey can still be resumed after any number of
    turns with the CONTINUE command; this would not be possible with
    AGAIN.

The target of a GO TO command can be a Room or an object. It\'s a Room
(GO TO KITCHEN, say), route finder will calculate the shortest path from
the player character\'s current location to the specified room. If it\'s
an object (GO TO OLD BICYLCLE, say) the route finder will calculate the
shortest path from the player character\'s current location to the room
where the object in question was last seen by the player character,
which may not be its current location if it has been moved since,
especially if its another actor who can move around of his/her own
volition. This is a further reason to take the journey one step at a
time; if the player types GO TO FRED and the player character encounters
Fred along the way to Fred\'s last known location, the player will
presumably want to break the journey there.

Note that in order for the player to be able to use the GO TO ROOM form
of the command, each room must have its vocab property defined.

[]{#fastgo}

However, if you don\'t want to use the GO TO/CONTINUE combination in
your game, you can set the [gameMain]{.code} property **fastGoTo** to
true. If [gameMain.fastGoTo]{.code} is [true]{.code}, then the command
GO TO X will continue moving the player character until either s/he
reaches X or something (such as a locked door or an obstructive NPC)
blocks his/her journey (at which point the CONTINUE command can still be
used to attempt to resume the journey, although it will only proceed one
step at a time). You can also set [fastGoTo]{.code} to true within
individual [Regions](room.htm#regions) to allow CONTINUE-less GO TO
between rooms within a given Region, also this setting will have no
effect if [gameMain.fastGoTo]{.code} is true (since the fast GOTO option
is then enabled globally).

[]{#routefinder <="" a=""}

## routeFinder and pcRouteFinder

The pathfind.t module defines a Pathfinder class, which in principle
could be used to find a path between any two nodes in a network (and not
just rooms on a map), and two instantiations of that class, the
routeFinder (for NPCs) and the pcRouteFinder (for the player character).
(To use the Pathfinder class for other kinds of pathfinding you\'d need
to define the findDestinations() method on your custom Pathfinder object
to find all the destinations one step away from a given node, but the
details of doing that are beyond the scope of this manual).

If you want to use the **routeFinder** object in your own game (to
calculate the shortest route between two rooms for a non-player
character) call [routeFinder.findPath(]{.synLit}[start]{.synPar}[,
]{.synLit}[target]{.synPar}[)]{.synLit}, where [start]{.synPar} is the
starting room for the route and [target]{.synPar} is the destination
room you\'re aiming for. This method will either return a path (if one
is found) or nil (if it was unable to find a path between the two
rooms). The routeFinder will also store a copy of the path it has found
in its **cachedRoute** property, along with the destination to which the
path leads in its **currentDestination** property.

The format of the path return by routeFinder.findPath() is a list of two
element lists: \[\[*dir*, *dest*\], \[*dir*, *dest*\], \[*dir*,
*dest*\]\...\], where *dir* is the direction needed to move to the next
room along the route (*dest*). *dir* is given as a direction object
(e.g. northDir, southeastDir or downDir), while *dest* will be the Room
to which going in that direction leads. So to find which direction an
actor needs to move in next to continue along a previously calculated
route, you might use code like:

::: code
       local dir;
       local idx = routeFinder.cachedPath.indexWhich({x: x[2] == fred.getOutermostRoom});
       if(idx != nil && idx < routeFinder.cachedPath.length)
          dir = routeFinder.cachedPath[idx + 1][1];

       if(dir != nil)
          /* Code to move the NPC in this direction, e.g. */
       {
          try
          {
             local action = TravelAction.createInstance();
             gActor = fred;
             action.direction = dir;
             action.doTravel();
             
            if(gPlayerChar.isIn(fred.getOutermostRoom)
               fred.sayArriving();
          }
          
          finally
          {
             gActor = gPlayerChar; // might or might not be needed, depending on context.
          }
       }
:::

Alternatively you might want to bypass some of the complexities of
travel by simply moving the NPC into the next room along the route,
although this might have the unfortunate effect of allowing the NPC to
move through locked doors and other such obstacles:

::: code
       local dest;
       local idx = routeFinder.cachedPath.indexWhich({x: x[2] == fred.getOutermostRoom});
       if(idx != nil && idx < routeFinder.cachedPath.length)
          dest = routeFinder.cachedPath[idx + 1][2];

       if(dest != nil)      
            dest.travelVia(fred);     
       
:::

Note that the library assumes that NPCs are omniscient when it comes to
finding their way around the map; routeFinder simply calculates the
shortest route between two rooms regardless of what NPCs might actually
know; normally this is what you probably want (you just want to get your
NPC from A to B without worrying about tracking NPC knowledge). You have
the option, however, to allow the NPC to avoid locked doors and other
impassible TravelConnectors by specifying
**routeFinder.excludeLockedDoors = true** (which it is by default). If
you do this, it\'s a good idea to set gActor to the NPC in question just
before using the routeFinder (since routeFinder will assume that it\'s
gActor that\'s trying to traverse any TravelConnectors). On the other
hand, if you find that there\'s no route available with
excludeLockedDoors set to true, you might like to try again with
excludeLockedDoors set to nil so that the NPC can at least start on its
journey (maybe things will change by the time it reaches the locked door
or other barrier, or maybe the NPC has the appropriate key).

The []{#pcroutefinder}**pcRouteFinder** works a little differently, in
that it doesn\'t offer an excludeLockedDoors option (the assumption
being is that such obstacles are there for the player/player character
to negotiate) but it does depend on player character knowledge. By
default, the pcRouteFinder will only find routes through connections
that the player character knows about, that is, through TravelConnectors
(including Doors and Rooms) that the player character has previously
traversed; the GO TO command cannot thus be used as a way of bypassing
the need to explore. On the other hand, it may be that the player
character is meant to start out knowing his/her way round some part of
the game map (his own house, perhaps). In that case, include all the
Rooms in the area the player character knows about in one region and
declare that region to be familiar (familiar = true). The player
character will then be able to move around that region using the GO TO
command freely from the start. (Note that since individual rooms can
belong to any number of regions and regions can freely overlap, the use
of a region to declare the area of the map the player character starts
out knowing should in no way interfere with any other purposes you may
have for regions).

Finally, note that if a direction property points to a method that moves
the player character somewhere, the routeFinder can also include that
exit in its route, provided that the method works consistently. A method
that moves the player character (or another actor) to a random
destination, or to one of multiple destinations depending on
circumstances is likely to confuse the routeFinder since it will assume
that the exit always leads where it did last time. To prevent your
variable exit (if you have one) causing such confusion your
variable-exit method should somewhere include the statement:

::: code
      startLoc.setDestInfo(dir, varDest_);  
:::

Where *startLoc* is the Room your variable destination method exit leads
from, *dir* is the direction it leads in (e.g. northDir) and varDest\_
is a special dummy destination (meaning variable destination) that tells
the routeFinder not to try to use the exit and the travel action not to
try to add the actual destination to the destination table (since it
can\'t be relied upon to stay constant). You can achieve a similar
effect by using nil instead of varDest\_, except that the exit won\'t
then be included in any exit listing.

\
[]{#proxy}

## Go To with Enterable, Distant and ProxyDest

Normally the GO TO command just works without a game author having to do
much, but occasionally it may throw up problems. One potential area of
difficulty is that everything the player character knows about is in
scope for a GO TO command, meaning that there could be a lot of objects
to disambiguate. Normally this won\'t create too many problems in
practice, but consider the following minimal game:

::: code
     field: Room 'Field'
        "A solitary hut stands in the middle of the field. "
        in = hut
    ;

    + me: Thing 'me'
        isFixed = true
        contType = Carrier
        person = 2
    ;

    + hutExterior: Enterable 'hut'
        connector = hut
    ;

    hut: Room 'hut'
        "Not much here. "
        out = field
    ; 
     
:::

There is a potential problem here. On the face of it, if the player
typed IN and then OUT and then GO TO HUT, the route finder would take
the player character to the hut room (the inside), as one might expect.
If, however, the player issued the GO TO HUT command again when the
player character was inside the hut, the player character would
(perversely) be taken back out into the field. Why? Because both the hut
Room and the hutExterior Enterable would be in scope for the GO TO
command. If the player character wasn\'t inside the hut Room then the
parse would prefer the Room so that\'s where it would take the player
character. But if the player character were already inside the hut, it
would be illogical to try going there, so the parser would then settle
for the hutExterior which is in the field, and so take the player
character back out to the field.

In fact that doesn\'t happen, because the **Enterable** class includes
the **ProxyDest** mix-in class in its superclass, and the purpose of the
[ProxyDest]{.code} class is to prevent precisely this kind of mishap.
The above mini will thus behave just as it should; i.e. if the command
GO TO HUT is issued while the player character is inside the hut, the
response will be to report that the player character is already there,
rather than to take him or her back out into the field (the location of
the hutExterior Enterable object).

The ProxyDest class works by removing any object that descends from that
class from consideration as a possible target of a GO TO command if
there are any other possible matches. So in this example this means that
a GO TO HUT command issued while the player character is inside the hut
won\'t consider the [hutExterior]{.code} as a possible target, which is
why the game will now respond with the more logical \"You\'re already
there\" rather than by taking the player character back out into the
field. Note that since ProxyDest is a mix-in class, it must come first
in the class list when defining an object.

In situations where you are using an [Enterable]{.code} object to
represent the outside of a location with the same name, the library thus
takes care of this potential problem for you, but if you are using some
other class of object (other than [Distant](#distant), which we\'ll talk
about below), you may need to specify the [ProxyDest]{.code} mix-in
class yourself. Consider the following snippet, for example:

::: code
     hall: Room 'Hall'
        "The way out is to the west. The study door lies to the north. "
        west = road
        north = studyDoor
    ;

    + studyDoor: Door 'door to study[n]'
        otherSide = sDoor
    ;

    study: Room 'Study'
        "A door leads south. "
        south = sDoor
    ;

    + sDoor: Door 'door'
        otherSide = studyDoor
    ;
     
:::

In this case we will get the perverse behaviour where typing GO TO STUDY
when the player character is in the study will take the player character
back out into the hall (this only happens, incidentally, if the door and
the room share the same noun in their name; if we\'d called the door
\'study door\' we wouldn\'t have the problem). The solution is this case
is to use the ProxyDest mix-in class with the Door; because it\'s a
mix-in it must come first in the class list:

::: code
     + studyDoor: ProxyDest, Door 'door to study[n]'
        otherSide = sDoor
    ;
     
:::

[]{#distant}

A potentially even more troublesome case is that of the **Distant**
class. If the player types GO TO FOO where FOO is an object of the
[Distant]{.code} class, presumably the one thing that shouldn\'t happen
is that the player character is taken to the location of the foo Distant
object, since the whole point of a Distant object is that it represents
an object that\'s somewhere else.

Like [Enterable]{.code}, [Distant]{.code} multiply-inherits from the
ProxyDest class, which prevents a Distant object being chosen as the
target of a GO TO command when there are other possibilities available.
That still leaves one kind of situation to cater for, however. Consider
the following example:

::: code
     field: Room 'Field'
        "A solitary hut stands in the middle of the field. "
        // in = hut
        east = road    
    ;

    + Enterable 'hut'
        connector = hut
    ;

    hut: Room 'Hut'
        "Not much here. "
        out = field
    ;

    road: Room 'Road'
        "A hut lies across the field to the west. "
        west = field    
    ;

    + Distant 'hut'    
        destination = field    
    ;

    + me: Thing 'me'
        isFixed = true
        contType = Carrier
        person = 2
    ;  
     
:::

If the player character starts out in the road, s/he will encounter the
Distant hut object before anything else called \'hut\'. In this instance
the logical behaviour in response to the command GO TO HUT would be to
take the player character into the field, since s/he can see that
that\'s where the hut is located. To secure this behaviour we make use
of the **destination** property of the Distant hut object, which should
be set to the room the player character should head for in response to a
GO TO command. Note that in this instance there is no way the library
could work this out for itself; without the [destination]{.code}
property being specified there would be nothing in the code to connect
the Distant hut object in the road with the Enterable hut object in the
field.

In many cases, where a Distant object represents something clearly
unreachable such as the sky or the sun, or something virtually
unreachable such as a distant mountain, the [destination]{.code} should
be left at nil, resulting in GO TO SUN getting the perfectly reasonable
response \"The sun is too far away.\" When, however, a Distant object
represents something not all that far away, such as a prominent object
in a neighbouring room, which it would be obvious to the player
character how to reach, its [destination]{.code} property should be set
to the neighbouring room in question so that a GO TO command can take
the player character there. Note, incidentally, that this will work even
if the player character hasn\'t visited the neighbouring location
before; this is one exception to the rule that a GO TO command will only
take the player character to locations that have already been visited.

\
[]{#senseregion}

## Pathfinding in SenseRegions

As we have seen, the pcRouteFinder will normally only find routes
between and through locations the player character has already visited,
unless the game author declares that a certain region is already
familiar to the player character. If the player character enters a
SenseRegion, however, s/he can presumably see how to get to all the
other rooms in that SenseRegion even if s/he has yet to visit them.
Accordingly the default behaviour of a SenseRegion is for its
**familiar** property to become true when:

1.  The SenseRegion\'s [canSeeAcross]{.code} property is true; and
2.  The player character\'s current location is a room in the
    SenseRegion; and
3.  The player character\'s current location is illuminated.

If a SenseRegion starts out familiar to the player character before s/he
visits it then its [familiar]{.code} property can simply be overridden
to [true]{.code} in the normal way.

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Optional
Modules](optional.htm){.nav} \> Pathfinding\
[[*Prev:* Instructions](instruct.htm){.nav}     [*Next:*
Scenes](scene.htm){.nav}     ]{.navnp}
:::
:::
