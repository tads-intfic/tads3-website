::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Rooms and Regions\
[[*Prev:*Things](thing.htm){.nav}     [*Next:* Room
Descriptions](roomdesc.htm){.nav}     ]{.navnp}
:::

::: main
[]{#rooms}

# Rooms and Regions

In addition to Thing, the other absolutely essential class you need to
write a TADS game with the adv3Lite library is Room. Every game must
have at least one Room in which the action takes place. Your game may
have several Rooms (depending on the size of the game world you want to
implement). Note that in Interactive Fiction in general and the adv3Lite
in particular a Room isn\'t necessarily a room in a house (such as a
kitchen or study) but any area the contents of which are considered
accessible to the player character; so, while a Room could be a
conventional room in a house, it could also be one corner of a city
square, or a section of a riverbank, or a woodland path, or a meadow,
part of the deck of a ship, or any number of other such things.

A Room is a kind of Thing (or, to put it more technically, Room is a
subclass of Thing) so Room inherits all the properties and methods of
Thing, but in practice you won\'t use many of them, and in the main
you\'ll be using the methods and properties specific to Room. (Possible
exceptions include the vocab property and the isLit property, which
determines if the Room is lit or dark; by default it\'s lit. Another
clear exception is the desc property, which contains the description of
the Room).

[]{#roomdef}

## Defining a Room

The basic properties to define on a Room are its **roomTitle** (the name
that\'s displayed in bold at the start of a room description), its
**desc** (the body of the room description) and, optionally, its
**vocab**. The normal way to define these properties is through the Room
template. Without the vocab property this looks like this:

::: code
    kitchen: Room 'Kitchen' 
        "This kitchen is equipped much as you'd expect, with, for example, a sink
        over by the window, a large table in the middle of the room, and an oven
        over by the back door to the east, not far from the fridge. The other exits
        are west to the hall, north to the dining-room and down to the cellar. "
    ;
:::

If the vocab property is defined, it is given in a second single-quoted
string, thus:

::: code
    kitchen: Room 'Kitchen' 'kitchen' 
        "This kitchen is equipped much as you'd expect, with, for example, a sink
        over by the window, a large table in the middle of the room, and an oven
        over by the back door to the east, not far from the fridge. The other exits
        are west to the hall, north to the dining-room and down to the cellar. "
    ;
:::

There are a couple of advantages to defining the vocab property on a
Room:

1.  If you want the player to be able to use the GO TO command
    (implemented via pathfind.t) rooms have to have vocab words for the
    player to be able to refer to them in a command like GO TO KITCHEN.
2.  By defining the vocab property you also automatically define the
    Room\'s name property (and hence it\'s theName property), which can
    be useful if you want the game to display a message that includes
    the name of the Room (e.g. \'You wander into the kitchen\', perhaps
    generated from \"You wander into \<\<getOutermostRoom.theName\>\>.
    \"). In the kitchen example above this may look a little redundant
    since the name is the same as the roomTitle, but this need not
    always be the case. For example you might have a room whose
    roomTitle is \'Portland Square (east side)\', which wouldn\'t work
    too well as a name (you might want to name it \'east side of
    Portland Square\', for example).

That said, in many cases you can leave the [vocab]{#roomvocab-idx}
property to be defined implicitly on many rooms, since the default
behaviour of the English-language-specific part of the library is to
derive the vocab property from the roomTitle property according to the
following rules:

1.  The vocab property won\'t be derived from the roomTitle if the vocab
    property has already been explicitly defined.
2.  The vocab property won\'t be derived from the roomTitle is the
    Room\'s **autoName** property is set to nil (it\'s true by default).
3.  The vocab property will be a lower-case version of the roomTitle
    (e.g. \'Kitchen\' will become \'kitchen\') unless the Room\'s
    **proper** property is set to true (indicating that the Room has a
    proper name like \'Market Street\').

This saves the need to type a name like \'kitchen\' twice in the common
case, while allowing the vocab property to be somewhat different from
the roomTitle property in cases like the Portland Square (east side)
example.

[]{#styletag}

By default the [roomTitle]{.code} is displayed in bold at the start of a
room description. This normally works well, but if for any reason you
want to change this format you can do so by modifying the
**roomnameStyleTag**. For example, if you wanted the roomTitle (the name
of the room) to be displayed in bold italics each time, you could
override roomnameStyleTag thus:

::: code
    modify roomnameStyleTag
        openText = '\n<b><i>'
        closeText = '</i></b>\n'
    ;
:::

You could also use \<FONT\> tags here for other effects, for example
specifying a particular colour, but this needs to be done with caution,
since a colour that looks good in your interpreter may not work so well
for players who have chosen a different colour scheme, such as white
text on a blue background. On the other hand, there\'s no reason why you
shouldn\'t use a \<FONT\> tag to change the *size* of the room name if
you so wished, for example:

::: code
    modify roomnameStyleTag
        openText = '\n<b><FONT SIZE=+2>'
        closeText = '</FONT></b>\n'
    ;
:::

Incidentally, there\'s also a **roomdescStyleTag** that can be used in a
similar way to format the long description of a room (but not the
listing of its contents), a **roomcontentsStyleTag** that can be used to
format the display of a room\'s contents, and a **statusroomStyleTag**
for formatting the room name as it is displayed in the status line, as
well as a number of other [StyleTags]{#styletag_idx} you can look up in
the [Library Reference Manual](../libref/index.html).

[]{#directionprops}

## Direction Properties

Unless your game only has a single room, you will generally need to
provide some means of travelling from one location to another, and the
normal way of doing that in an IF game is by defining direction
properties on a Room. These correspond to the command a player would
type to move in the corresponding direction (e.g. if the player typed
NORTH or GO NORTH the game would attempt to move the player character
according to the value of the current room\'s north property). The
adv3Lite library provides 16 such properties:

-   The eight compass directions: north, south, east, west, northeast,
    northwest, southeast and southwest.
-   The four shipboard directions: port, starboard, fore and aft.
-   The four other directions: up, down, in and out.

You do not have to define all of these directions on every Room (indeed,
you\'ll probably never do so); if any direction property is left at nil
that simply means that travel is not possible in that direction. But if
you do define any of these properties they can be defined as one of:

-   Another Room, in which case the player character would be moved to
    that room.
-   A [Door](door.htm), in which case the player would attempt to go
    through that door (but may be prevented from doing so if the door is
    locked).
-   A [TravelConnector](travel.htm) (or any object subclassed from
    TravelConnector), in which case that TravelConnector\'s
    travelVia(actor) method will be triggered.
-   A single- or double-quoted string, in which case the string will
    simply be displayed.
-   A method, in which case the method will be executed.
-   The **asExit** macro, e.g. [out asExit(west)]{.code}, in which case
    the command OUT will result in trying to move the player character
    west, without OUT being listed as a separate exit in any list of
    exits.

If you define a direction property as a Room, Door, TravelConnector or
method, then the corresponding direction will be shown in the list of
exits (assuming that the module exits.t is present in your game). You
can change this behaviour on a TravelConnector (and hence also on a Room
or Door) by setting its isConnectorListed property to nil. A method will
(virtually) always be listed as a possible exit (since presumably the
point of defining it as a method is that something happens if the player
character attempts to move in that direction). An exit defined as a
single- or double-quoted string will never be listed as an available
exit.

It follows from this that defining a direction property as a string is
equivalent to using a NoTravelMessage in the adv3 library (for which
reason NoTravelMsg is not defined in the adv3Lite library). Likewise, a
method that simply displays a string is equivalent to an adv3
FakeConnector (which is likewise not defined in the adv3Lite library).
For example:

::: code
    kitchen: Room 'Kitchen' 'kitchen' 
        "This kitchen is equipped much as you'd expect, with, for example, a sink
        over by the window, a large table in the middle of the room, and an oven
        over by the back door to the east, not far from the fridge. The other exits
        are west to the hall, north to the dining-room and down to the cellar. "
        
        north = diningRoom
        east = backDoor
        west = hall
        down = cellar
        south = "Unfortunately, you can't simply walk through the window, and you have no means of opening it. "
        southwest { "You have no reason to visit the pantry. "; }
    ;
:::

This illustrates what is probably likely to be the most common use of a
method defined on a direction property, but in principle such a method
can do anything you like, including killing the player character, ending
the game in victory, or moving the player character to another location.
If a direction-property method does result in the player character being
moved to another location, the library keeps track of it in a
LookupTable for use by the pathfinder, however for anything other than
displaying a message that doesn\'t result in travel or ending the game,
it\'s probably better and cleaner to use a TravelConnector to carry out
the side-effects of travel (rather than defining them in a method). The
possibility of doing whatever you like in a method is nevertheless there
if you want it.

[]{#allowedDirections}

The shipboard directions port, starboard, fore and aft will generally be
rather meaningless except for rooms that are meant to be aboard a vessel
of some sort. Conversely, it\'s possible, though by no means certain,
that a game may want to prevent the use of compass directions when the
location is meant to be aboard a ship. To make it easier to deal with
such situations Room defines the two properties/methods
**allowShipboardDirections** and **allowCompassDirections**. If either
of these is nil, the corresponding set of directions is disabled for all
relevant commands (e.g. GO PORT, THROW BALL PORT or PUSH TROLLEY PORT)
carried out in the room in question. Attempts to use the disallowed
directions in any command will then be blocked with message stating
\"Shipboard/compass directions have no meaning here.\" By default
[allowCompassDirections]{.code} is true for all rooms, but game code can
override this on rooms that are meant to be aboard ship (or, indeed, in
any game that wants to abolish compass directions altogether). On the
other hand the default behaviour of [allowShipboardDirections()]{.code}
is to return true if and only if one or more of the shipboard direction
exits (port, starboard, fore or aft) is non-nil on the room in question.
Normally, this means that [allowShipboardDirections()]{.code} can be
left to take care of itself, but occasionally you may have rooms, such
as a the hold of the ship, where none of the shipboard directions is
actually defined (because the only way out is UP, say) but the shipboard
directions are still notionally meaningful; on such a room you could
simply define [allowShipboardDirections = true]{.code}. (The enforcement
of these conditions is carried out by the [Doer](doer.htm) method
[checkDirection()]{.code} which is called from [Doer.exec()]{.code} for
any command involving a direction).

Finally, note that defining anything on a direction property of a room
establishes a connection in one direction only. For example, in the
sample code shown above, defining [north = diningRoom]{.code} on the
kitchen establishes a connection to the dining from the kitchen going
north, but it doesn\'t also establish a connection south from the dining
room to the kitchen; that would need to be defined explicitly on the
[diningRoom]{.code} object. This may be an advantage (a) because it may
help to make your code clearer and (b) you may not always want a
connection back in the reverse direction, or you may want it to behave
differently. On the other hand, if you would prefer the reverse
connections to be automatically set up for you, you could try using the
[symconn](../../extensions/docs/symconn.htm) extension, which does just
that.

\
[]{#directions}

## Directions

A direction in the adv3Lite object is generally represented by an object
of type Direction, usually named with the name of the direction plus
\'Dir\', e.g. northDir, eastDir, downDir, southwestDir. For the most
part you won\'t need to worry about direction objects since they
generally take care of themselves, but occasionally you may want to
refer to the name of a direction object when it\'s used as a parameter
for some method or an element of a list (e.g. in the route finder) to
indicate the direction taken.

Otherwise, the only time you might want to worry about Direction objects
is if you want to define a custom direction. This is a relatively
straightforward process, best explained by means of an example. Suppose,
for example, you wanted to implement a nornoreast direction which caused
the player character to travel via the nornoreast property of the
current room when the player entered the command NORNOREAST or NNE. You
would just need to do this:

::: code
    nornoreastDir: CompassDirection
        name = 'nornoreast'
        dirProp = &nornoreast
        sortingOrder = 1450
        opposite = sousouwestDir //assuming you were also defining a sousouwest direction
    ;

    grammar directionName(nornoreast): 'nornoreast' | 'nne' : Production
        dir = nornoreastDir
    ;
:::

With these two definitions, you could then used nornoreast just like any
of the built-in directions. The **sortingOrder** property on the
Direction object defines the order in which this direction will appear
in any list of exits; I chose 1450 here since this would make nornoreast
come just after northeast. The grammar declaration that follows enables
the parser to recognize \'nornoreast\' and \'nne\' as referring to the
nornoreast direction.

\
[]{#otherroomprops}

## Other Room Properties and Methods

Some other properties and methods of Room you may find useful include:

-   **darkName** (single-quoted string) The name to use in place of the
    roomTitle when the room is dark. By default this is simply \'In the
    dark\', but you can change it to anything you like.
-   **darkDesc** (double-quoted string) The description to use in place
    of desc when the room is dark. By default this is \"It is dark; you
    can\'t see a thing.\" but you can change it to anything you like.
-   **roomFirstDesc** (double-quoted string) If this is defined, it will
    be displayed the first time the room is described (the desc property
    being used thereafter).
-   **isIlluminated()** and **litWithin()** Both these methods return
    true if the room is lit and nil if it\'s in darkness (a room is lit
    if its own isLit property is true or if there\'s a visible light
    source within the room)
-   **cannotGoThatWayMsg** (double-quoted string) The message that\'s
    displayed if travel is attempted in a direction that\'s undefined
    (i.e. nil). By default this is \"You can\'t go that way. \"
-   **cannotGoThatWay(dir)** The method that\'s called when travel is
    attempted in an undefined direction. By default this simply displays
    the cannotGoThatWayMsg and then displays a list of available exits,
    if the exits.t module is present. The dir parameter is the direction
    object corresponding to the attempted direction of travel, e.g.
    northDir.
-   **allowDarkTravel** (true or nil) Normally (when this property is
    set to nil) we don\'t allow travel from one dark location to
    another. Set this property to true if you do want to allow travel
    from this location when dark to another dark location.
-   **cannotGoThatWayInDarkMsg** (double-quoted string) The message to
    display when travel is not allowed from a dark location (either
    because the direction doesn\'t lead anywhere or because it goes to
    another dark location). By default this is \"It\'s too dark to see
    where you\'re going. \"
-   **cannotGoThatWayInDark(dir)** The method that\'s called when travel
    is disallowed from a dark location. The default behaviour is to
    display the cannotGoThatWayInDarkMsg and then display a list of
    available exits (if the exits.t module is present). Note that in
    this context the available exits will be only those that lead to
    illuminated locations (unless allowDarkTravel is true).
-   **roomBeforeAction()** This method is called on the room just before
    an action is about to take place, allowing the room to respond to or
    block the incipient action.
-   **roomAfterAction()** This method allows the room to respond to an
    action that\'s just taken place (e.g. by reporting an echo if the
    action was YELL or saying that the player character just cracked his
    head on the low ceiling if the action was JUMP)
-   **roomDaemon()** This method is called on the player character\'s
    location (the room s/he\'s in) each turn towards the end of the
    action processing cycle. It can be used, for example, to display a
    series of atmpospheric message string (by defining the Room as also
    being a [EventList](eventList.htm) in which case
    [roomDaemon()]{.code} would automatically call its
    [doScript()]{.code} method to cycle through its eventList, unless
    [roomDaemon]{.code} had been overridden to do something different).
    If the eventList contains a list of atmospheric strings including
    sounds (as might often be the case) there\'s could be a clash with
    the response to LISTEN and an atmospheric message displayed on the
    same turn. This can be suppressed by setting the Room\'s
    **noScriptAfterListen** property to true (the default) to prevent
    roomDaemon() calling doScript() on the same turn as a LISTEN
    command. If the Room\'s eventList contains nothing but atmospheric
    sounds and there is nothing else in scope to responde to a LISTEN
    command, you may also want to define the Room\'s listenDesc property
    as [listenDesc() { { doScript();} }]{.code}.
-   **extraScopeItems** A list of items that would not normally be in
    scope but which should nevertheless be placed in scope in this room.
    This can of course be defined as a method that returns different
    lists of items under different circumstances.
-   **regions** An optional list of the regions that this room is
    regarded as being within (for the concept of regions, see below).
    Note that rooms can also be associated with Regions via the
    Regions\' roomList property.
-   **isIn(region)** Tests whether this Room is in the specified region.
    Note that this isn\'t simply a matter of testing whether the
    specified region is listed in the room\'s regions property, since
    one region may be inside another. Thus, for example, if the regions
    property of the hall was \[downstairs\] and the regions property of
    the downstairs region was \[indoors\], hall.isIn(indoors) would be
    true.
-   **visited** (true or nil) Has the player character visited (i.e.
    been in) this room? This is true either if a room description has
    been shown when the room is lit, or if it\'s been shown when
    recognizableInDark is true for this room. Note that the room\'s
    **examined** property is also set to true the first time the room is
    described, so this almost does the same thing, except when
    recognizableInDark in dark is true and the description of a dark
    room is displayed, in which case visited is set to true (because the
    player character knows s/he\'s been to this room) but examined
    isn\'t (because the full room description won\'t have been
    displayed).
-   **recognizableInDark** (true or nil) If this is set to true, then a
    room is set to both familiar and visited if a room description is
    shown when it\'s dark (typically, because the player character
    enters the room when it\'s dark). This allows game authors to
    distinguish between a room that\'s so dark the player character
    can\'t even tell where s/he is (recognizableInDark = nil, the
    default) and a room that\'s too dark to see much by but nevertheless
    recognizable (e.g. a dark cellar, which the player knows must be the
    cellar even though there\'s little light there).
-   **travelerLeaving(traveler, dest)**: this is invoked on the room
    when *traveler* is about to leave the room to go to *dest*.
-   **travelerEntering(traveler, origin)**: this is invoked on the room
    when *traveler* is about to enter it from another *origin* (another
    room)
-   **getDirection(conn)** returns the direction in which one would have
    to travel from the room in order to travel via *conn* (i.e. the
    direction corresponding to the direction property on which *conn* is
    defined). For example, if frontDoor was assigned to the north
    property of a room called hall,
    [hall.getDirection(frontDoor)]{.code} would return northDir.

Note that some of these explanations involve concepts we haven\'t come
to yet. Don\'t worry; they will be explained fully in their place when
we come to them.

\

## [The Floor of a Room]{#roomfloor}

The ground (or floor) is present virtually everywhere (except for rooms
representing odd locations like the tops of trees or masts). The library
defines a **Floor** class, and one instance of it, **defaultGround**, to
represent the presence of the floor/ground in every room. A Floor is a
combination of [MultiLoc](multiloc.htm) and Decoration that (by default)
is added into every Room. Its main purpose is to facilitate the
parser\'s ability to disambiguate items by their locations. Without it,
if, say, there were two identical coins, one on a table and one directly
in the room, the parser would have to ask \"Which do you mean, the coin
on the table or the coin?\", which is unclear and fails to give the
player an easy way of selecting the latter. Thanks to the presence of a
[defaultGround]{.code} in every Room the parser can ask \"Which do you
mean, the coin on the table or the coin on the ground?\" and the player
can refer to \"the coin on the ground\" to disambiguate.

The [defaultGround]{.code} object present in every room also performs
the secondary purpose of allowing players to refer to \'the ground\' or
\'the floor\' which must be implicitly present in nearly every room, but
its implementation is deliberately minimalistic to discouraage players
from trying to interact with it. The library will translate PUT
SOMETHING ON FLOOR to DROP SOMETHING, and X GROUND/FLOOR will of course
work, but that\'s about it (everything else gets the standard decoration
response \'The ground is not important\')

If you want to define a custom Floor object for a particular location,
or omit it altogether (e.g. for a room at the top of a tree), you can do
so by overring the **floorObj** property, either to point to your custom
Floor object, or to nil (in the case of a room without a floor). You
should do this even if you implement your custom floor object as a
Fixture in a single location rather than using the custom Floor class,
but you might find it better to use the Floor class even for a custom
floor that appears only in one room, since it\'s designed to facilitate
the parser disambiguation just described. If you do decide to define
your own Fixture, you\'ll need to copy most of the methods and
properties of the Floor class onto it to make it work properly as a
floor.

\
[]{#closedcont}

## Closed Containers as Quasi-Rooms

Although all the above properties and methods have been described as
belonging to Room, several of them are in fact defined on Thing, to
allow for the possibility that the player character may at some point be
inside a closed container and look around from inside it. In that case
you can use the roomTitle, darkName and darkDesc properties on the
containing Thing to determine what it should be called and how it should
be described from the inside. These work in just the same way as they do
for Room, as does the isIlluminated() method. You can also override the
**interiorDesc** property to describe how the closed container looks
from the inside.

\

## [Regions]{#regions}

Regions in adv3Lite are simply a means of grouping Rooms together in any
way you find useful (e.g. all downstairs rooms, all indoor rooms, all
forest rooms, all riverside rooms, all outdoor rooms). You don\'t have
to use Regions if you don\'t want to, but they are straightforward to
use if you do. To include a Room in a Region, simply list that Region in
the Room\'s region property and create a corresponding Region object,
for example:

::: code
    kitchen: Room 'Kitchen' 'kitchen' 
        "This kitchen is equipped much as you'd expect, with, for example, a sink
        over by the window, a large table in the middle of the room, and an oven
        over by the back door to the east, not far from the fridge. The other exits
        are west to the hall, north to the dining-room and down to the cellar. "
        
        regions = [downstairs]
    ;

    downstairs: Region
    ;
:::

Regions can themselves be included within other regions by setting their
regions property. For example, to place the downstairs Region entirely
within the indoors Region we could write:

::: code
    downstairs: Region
      regions = [indoors]
    ;

    indoors: Region
    ;
:::

It is also perfectly legal to define the regions property of Rooms in
such a way that Regions end up overlapping.

The properties and methods of Region you may find useful include:

[]{#regionprops}

-   **regions** A user-defined list of one or more regions that wholly
    contain this Region.
-   **isIn(other)** Tests whether this Region is directy or indirectly
    contained in the other Region.
-   **isOrIsIn(other)** Tests whether this Region either is the other
    Region or is directly or indirectly contained in the other Region.
-   **roomList** A list of all the Rooms lying within this Region (note:
    this list is built by the library and should not be altered by user
    code)
-   **rooms** A user-defined list of Rooms that are directly within this
    region. This can be used to define the rooms (or some of the rooms)
    that go to make up a Region. At the pre-initialization stage this
    list will be used in conjunction with the [regions]{.code} property
    of individual Rooms to build the [roomList]{.code} for each Region
    and update the [regions]{.code} list of each Room. For a fuller
    explanation see below.
-   **familiar** (true or nil) Making a Region familiar has the effect
    of making every Room in the Region familiar. This in turn can be
    useful for enabling the player character to find his/her way around
    an area s/he already knows at the start of the game using the GO TO
    command.
-   **extraScopeItems** A list of items that will be put into scope for
    every Room in the Region (even if they would not normally be in
    scope).
-   **travelerLeaving(traveler, dest)**: this is invoked on the region
    when *traveler* is about to leave the region to go to *dest* (a
    room).
-   **travelerEntering(traveler, origin)**: this is invoked on the
    region when *traveler* is about to enter it from another region, and
    specifically from the room given in the *origin* parameter.
-   **regionBeforeAction()**: this is invoked on the region just before
    an action takes place in any room in the region.
-   **regionAfterAction()**: this is invoked on the region just after an
    action takes place in any room in the region.
-   **regionBeforeTravel(traveler, connector)**: this is invoked on the
    region just before a *traveler* in any room in the region is about
    to travel via *connector*; note that this method is invoked after
    all other before travel notifications (to allow more specific ones
    to intervene first).
-   **regionAfterTravel(traveler, connector)**: this is invoked on the
    region after a *traveler* in any room in the region has traveled via
    *connector*; note that this method is invoked after all other after
    travel notifications (to allow more specific ones to react first).
-   **fastGoTo**: if [gameMain.fastGoTo]{.code} is true, the setting of
    [fastGoTo]{.code} on individual regions will have no effect, since
    [fast GoTo](pathfind.htm#fastgo) (GoTo without stopping for CONTINUE
    commands) will then be in effect globally. If
    [gameMain.fastGoTo]{.code} is nil, however, setting it to true on an
    individual region will allow fast GoTo travel within that Region.
-   **regionDaemon()**: A method that is executed each turn the player
    character is located in this region. By default we call the
    region\'s doScript() method, which could be useful if the region is
    mixed in with an EventList class.

Some of the uses of Regions depend on features of the library we have
not yet covered, and will need to be mentioned again when we come to
them, but in summary the main uses to which Regions can be put include:

-   Testing whether the player character (or some other object) is
    within a particular region as a condition of displaying atmospheric
    messages (e.g. about weather conditions or forest sounds), or for
    any other purpose related to a region (e.g. perhaps particular
    actions are allowed or disallowed in a particular region, or an
    NPC\'s response to a question depends on the region where the
    conversation takes place, or the effect of waving a magic wand
    varies from region to region or\... well, you probably get the
    picture).
-   Specifying the location of a [MultiLoc](multiloc.htm) (an object
    that can be in several rooms at once).
-   Specifying the where condition of a [Doer](doer.htm).
-   Designating a region as familiar at the start of a game so that the
    player character can navigate it with the pcRouteFinder (i.e. using
    the GO TO command) without having to explore it first.
-   Conditionally preventing travel between Regions or making things
    happen when travel between Regions occurs (using the
    [travelerLeaving()]{.code} and [travelerEntering()]{.code} methods).

A further word of explanation may be in order about travelerLeaving()
and travelerEntering(). The first is called on all the regions the
traveler is about to leave, and the second on all the regions the
traveler is about to enter. Leaving a region means travelling from a
room that is an that region to a room that is not. Conversely entering a
region means traveling from a room that is not in that region to one
that is. So, for example, if throneRoom is in regions A, B, C and D and
corridor is in regions C, D, E and F, traveling from throneRoom to
corridor would cause travelerLeaving() to be invoked on regions A and B
(as well as throneRoom) and travelerEntering() to be invoked on Regions
E and F (as well as corridor).

Note that all these notifications take place just *before* the travel is
actually executed. If you want something to take place immediately after
the traveler enters a region one way to do it would be to set a
zero-length fuse in the travelerEntering() method, e.g.:

::: code
    planeRegion: Region
        travelerLeaving(traveler, dest) { "You're about to leave the plane. "; }
        travelerEntering(traveler, origin) 
        { 
            "You're about to enter the plane. ";
            new Fuse(self, &edesc, 0);
        }
        edesc = "You've just boarded the plane. "
    ;
:::

One further point: several of the properties on which the Region
mechanisms depend are set up by the library at the preinitialization
stage. In particular the roomList property of a Region is built at
PreInit stage. This means that the layout of regions *cannot* be changed
during the course of a game. If you need a Region that changes during
the course of your game you could try the
[DynamicRegion](../../extensions/docs/dynregion.htm) extension.

If a Region is defined with a [rooms]{.code} property containing a list
of rooms, each of these rooms will have that Region added to its regions
list, but the building of the Region\'s roomList will still proceed as
before (removing duplicate entries in any case). This makes it safe to
define the Rooms that go into a Region either by listing the Regions in
a Room\'s [regions]{.code} property, or by listing the rooms if a
Region\'s [rooms]{.code} property, or a mixture of both.

There is absolutely no need to define both the [regions]{.code} property
of a Rooms and the [rooms]{.code} property of a Region to associate
Rooms with Regions, but no harm will be done if you do. The purpose is
simply to allow both methods of associating Rooms with Regions so that
game authors can use whichever method they find most congenial,
including a mixture of the two.

The [rooms]{.code} property of a Region can be specified via a template,
thus:

::: code
     downstairsRegion: Region
       [hall, kitchen, study, lounge]
       regions = [indoorRegion]
    ;
     
:::

In this example, note how putting one Region inside another must still
be done via the enclosed Region\'s [regions]{.code} property. If you
have a larger Region that encloses smaller Regions you could also use
the [rooms]{.code} property on the larger Region to list the smaller
Regions that go to make it up. The point to bear in mind is that the
[regions]{.code} property of X can be used to define the regions that X
is in, while the [rooms]{.code} property can be used to define the Rooms
(or Regions) that are in X, and that these provide alternative means for
defining the same relationship.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [The Core Library](core.htm){.nav}
\> Rooms and Regions\
[[*Prev:* Things](thing.htm){.nav}     [*Next:* Room
Descriptions](roomdesc.htm){.nav}     ]{.navnp}
:::
