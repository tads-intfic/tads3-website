::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Room Parts\
[[*Prev:* Relations](relations.htm){.nav}     [*Next:*
Rules](rules.htm){.nav}     ]{.navnp}
:::

::: main
# Room Parts

## Overview

The purpose of the [roomparts.t](../roomparts.t) extension is to provide
walls and a ceiling for every indoor room and a sky for every outdoor
room. The parts that appear in any particular room can be customized. It
is also possible to associate particular objects in a room with a
particular room part, such that examining the room part causes mention
of any associated objects.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

-   *Classes*: **OutdoorRoom**, **RoomPart**, **DefaultWall** and
    **Ceiling**.
-   *Objects*: defaultNorthWall, defaultEastWall, defaultSouthWall,
    defaultWestWall, defaultCeiling and defaultSky.
-   *Additional properties on Room (and OutdoorRoom)*:
    [ceilingObj]{.code} and [wallObjs]{.code}.
-   *Additional properties on Thing*: [roomPart]{.code} and
    [roomPartDesc]{.code}.

\
[]{#usage}

## Usage

Include the roomparts.t file after the library files but before your
game source files.

By default, the extension will add four walls and a ceiling to every
Room in the game (note that the adv3Lite already adds a floor to every
Room in the game). Obviously, if you have any rooms that are meant to be
outdoors, this won\'t be appropriate; for that reason the extension
defines an **OutdoorRoom** class that can be used for outdoor locations.
And OutdoorRoom comes only with a sky (in addition to the defaultFloor
already provided by adv3Lite).

You can customize which room parts an individual Room has by overriding
its **ceilingObj** and **wallsObjs** properties (as well as its floorObj
property, of course). The [ceilingObj]{.code} property defines the
object (defaultCeiling or defaultSky) that acts as the room\'s ceiling.
The [wallObjs]{.code} property contains a list of the rooms walls
(normally \[defaultNorthWall, defaultEastWall, defaultSouthWall,
defaultWestWall\]. These properties can be overridden as needed to
remove unwanted room parts or substitute custom ones.

The defaultSky and defaultCeiling objects all descend from the
[Ceiling]{.code} class. The four default wall objects are all of the
[DefaultWall]{.code} class. In turn the Ceiling and DefaultWall classes
are both subclasses of [RoomPart]{.code}, which itself is a subclass of
[MultiLoc]{.code} and [Decoration]{.code}. It follows that if you want
to move any room parts around dynamically during a game (e.g. to remove
a wall that\'s just been demolished) you can do so using the standard
[MultiLoc](../../manual/multiloc#movingmulti) methods such as
moveIntoAdd(loc) or moveOutOf(loc).

You can also associate any item directly in a room with one of its room
parts via that item\'s **roomPart** property, and then define a
**roomPartDesc** that will be displayed when the associated room part is
examined. Note that the item should then be located directly in the
room, not the room part. For example, to implement a portrait that
starts out hanging on a wall you might do something like this:

::: code
     hall: Room 'Grand Hall'
       "This great hall is almost so grand that it's just about over the top. "
     ;
     
     + portrait: Thing 'old portrait; of[prep]; baron blunderpants picture'
         "Even his friends must have considered the old baron ugly;
          anyone else would have called him hideous, if his portrait's
          anything to go by. "
          
         initSpecialDesc = "An old portrait hangs on the west wall. "
         roomPart = defaultWestWall
         roomPartDesc = initSpecialDesc
     ; 
     
:::

With this definition, the command EXAMINE WEST WALL will be met with the
response \"An old portrait hangs on the west wall.\" Note, however, that
since the portrait is portable the player could take it; if s/he does so
then the link with the west wall is automatically broken (moving the
portrait with actionMoveInto() automatically resets its roomPart
property to nil).
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Room Parts\
[[*Prev:* Relations](relations.htm){.nav}     [*Next:*
Rules](rules.htm){.nav}     ]{.navnp}
:::
