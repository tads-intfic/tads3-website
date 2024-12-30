::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \>
MobileCollectiveGroup\
[[*Prev:* Fueled Light Source](fueled.htm){.nav}     [*Next:*
Postures](postures.htm){.nav}     ]{.navnp}
:::

::: main
# MobileCollectiveGroup

## Overview

The MobileCollectiveGroup extension implements the
**MobileCollectiveGroup** class, a type of
[CollectiveGroup](../../docs/manual/extra.htm#collective) that can be
used to represent two or more similar objects (e.g. to give a summarized
description) when those objects may move around (so that the number of
them that are in scope can vary from one turn to the next).
MobileCollectiveGroup behaves exactly like CollectiveGroup except that
an object defined as a MobileCollectiveGroup is moved into the player
character\'s location whenever the player character can see at least two
of its members and moved into nil otherwise. This ensures that the
MobileCollectiveGroup is available when it is needed to summarize the
appearance of two or more of its members.

[]{#usage}

## Usage

Include the mobilecollectivegroup.t file after the library files but
before your game source files. Your game will also need to include
extras.t and events.t since this extension makes use of both of them.

To make use of the MobileCollectiveGroup class, simply define an object
as a MobileCollectiveGroup and then use it in just the same way you
would a [CollectiveGroup](../../docs/manual/extra.htm#collective), the
only difference being that it will work as required even if its member
objects are moved around. In most cases you shouldn\'t need to do any
more than this, since the MobileCollectiveGroup class should take care
of all the internal housekeeping for you.

One possible exception is where something that belongs to a
MobileCollectiveGroup is moved in the course of a turn, after the end of
the previous turn but before the execution of a command (typically
EXAMINE) that needs to be handled by the MobileCollectiveGroup. This
isn\'t likely to occur often, but could occur, for example, if an object
is moved by a Daemon before the MobileCollectiveGroup\'s Daemon is run.
This is unlikely to happen since the Daemons used by
MobileCollectiveGroup are given a high [eventOrder]{.code} to prevent
this, but if it does happen you may need to call the
MobileCollectiveGroup\'s **scopeCheck()** method manually in your code
to force a recalculation of whether the MobileCollectiveGroup needs to
move.

The other situation that could theoretically occur is if the objects
belonging to a MobileCollectiveGroup (those that list it in their
[collectiveGroups]{.code} property) change during the course of play. A
MobileCollectiveGroup works out the list of objects that belongs to it
and stores it in its **myObj** property at preinitialization. If this
list changes during the course of your game, you\'ll need to update the
[myObj]{.code} property accordingly in your own game code (again, this
is unlikely to occur very often, so you probably won\'t need to worry
about it).

\

## Example

Suppose your game has three short lengths of patch-cable, each one a
different colour. You might use MobileCollectiveGroup to define them
thus (excluding other elements of the code such as the definition of the
Room that would be needed to contain them):

::: code
     
    + redCable: Cable 'red cable'
        colour = 'red'
    ;

    + blueCable: Cable 'blue cable'
        colour = 'blue'
    ;

    + greenCable: Cable 'green cable'
        colour = 'green'
    ;


    class Cable: Thing
        desc = "It's a short length of <<colour>> cable, essentially a patch cord,
            less than a foot long, with a shiny quarter-inch plug at each end. "
        collectiveGroups = [cableGroup]
        
    ;

    cableGroup: MobileCollectiveGroup 'cables'
        desc()
        {
            inherited();
            "Each cable is, essentially, a patch cord, less than a foot long, 
            with a shiny quarter-inch plug at each end. ";
        }  
    ; 
     
:::

With this scheme in place the command EXAMINE CABLES would generate the
response \"There\'s a red cable, a blue cable, and a green cable here.
Each cable is, essentially, a patch cord, less than a foot long, with a
shiny quarter-inch plug at each end.\" This looks better than having
three similar descriptions, one for each cable, which is what you\'d get
otherwise. As the cables were picked up and moved around the response to
X CABLES would be adjusted according to which cables the player
character could currently see.

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[mobilecollectivegroup.t](../mobilecollectivegroup.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \>
MobileCollectiveGroup\
[[*Prev:* Fueled Light Source](fueled.htm){.nav}     [*Next:*
Postures](postures.htm){.nav}     ]{.navnp}
:::
