::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Viewport\
[[*Prev:* TIAAction](tiaaction.htm){.nav}     [*Next:*
Weight](weight.htm){.nav}     ]{.navnp}
:::

::: main
# Viewport

## Overview

The purpose of the [viewport.t](../viewport.t) extension is to allow
game authors to define objects such as windows or CCTV screens that can
be used to view remote locations and their contents when they\'re looked
through or examined, without having a listing of the remote locations in
question appearing in the room listing of the current room. This can be
useful for implementing objects such as windows and CCTV screens where
the player only becomes aware of what they show when s/he uses them.

\
[]{#classes}

## New Classes, Objects and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new classes, objects and
properties:

-   *Classes*: **Viewport** and **SwitchableViewport**.
-   *Objects*: **QViewport**.
-   *Additional properties/methods on Room*:
    [roomRemoteDesc(pov)]{.code}, [roomsViewed]{.code}.
-   *Properties/methods on Viewport*: [describeVisibleRooms()]{.code},
    [visibleRooms]{.code}, [lookThroughToView]{.code},
    [examineToView]{.code}, [isViewing]{.code}.

[]{#usage}

## Usage

Include the viewport.t file after the library files but before your game
source files. Make sure that senseRegion.t is also included in the
build.

[Viewport]{.code} and [SwitchableViewport]{.code} are mix-in classes
that can be used to define objects such as windows and CCTV screens that
can be used to view remote locations. The only difference between them
is that a [SwitchableViewport]{.code} can be turned on and off, so that
the remote room and its contents can only be viewed while it\'s on.

Looking through or at a [Viewport]{.code}, or looking at a
[SwitchableViewport]{.code} displays a description of the room it
provides a view of, including any listable contents (for which
isVisibleFrom(pov) is true when *pov* is the actor doing the looking).
Once the player character has used the Viewport, the player can refer to
the contents of the remote room just viewed, until the player character
leaves the room (when the list of rooms viewed is reset). This models
the likelihood that the player character would only become aware of the
contents of the items in the remote location after using the Viewport,
but that having seen, say, a statue standing out in the street when
looking through the window, the player character might reasonably try to
examine the statue. On the other hand the contents of the remote
locations seen through Viewports are never listed in the description of
the current room, on the basis that they\'re not objects that the player
character would actively notice when s/he\'s not looking through the
Viewport.

To define what room or rooms a Viewport allows sight of, list them in
the Viewport\'s **visibleRooms** property.

To describe what the remote room looks like through the Viewport, define
its **roomRemoteDesc(pov)** method (where *pov* will be the actor
viewing the room). By default this does nothing, so that if a Viewport
overlooks more than one room you can use the roomRemoteDesc(pov) method
of the first room to describe the entire view (should you so wish).

The **describeVisibleRooms()** method of a Viewport is the method that
actually describes the remote location(s) visible by virtue of the
Viewport. If **lookThroughToView** is true (as it is by default on
Viewport but not SwitchableViewport) then this method will be called
when LOOKING THROUGH the Viewport. If **examineToView** is true (as it
is by default on both Viewport and SwitchableViewport), then it is
called when EXAMINING the Viewport.

The **isViewing** property defines whether the Viewport currently
affords a view of the rooms in its visibleRooms list. On Viewport
[isViewing]{.code} is true by default, whereas on SwitchableViewport
[isViewing]{.code} follows the value of [IsOn]{.code}.

The **roomsViewed** property of a Room keeps track of which rooms have
been viewed via Viewports from within the Room, so that their contents
can subsequently be referred to in commands. The [roomsViewed]{.code}
property is reset to an empty list when the player character leaves the
room, on the basis that on returning the pc would need to use the
Viewport again in order to become aware of what it shows. Switching off
a SwitchableViewport also removes its list of [visibleRooms]{.code} from
its enclosing room\'s [roomsViewed]{.code} list, since they\'re no
longer visible. If anything else affects what can be seen via a
Viewport, you may need to adjust the room\'s [roomsViewed]{.code} list
in your own code.

Note that you wouldn\'t normally use a SenseRegion as well to provide a
sensory connection between the room a Viewport\'s in and the room it
overlooks.

To define a window the player character can look through you can just do
this:

::: code
     + window: Viewport, Fixture 'window'   
        isOpenable = true   
        visibleRooms = [alley]       
    ;
     
:::

Then you\'d also want to define an appropriate roomRemoteDesc() on the
alley:

::: code
     alley: Room 'Alley'
        "A narrow east/west alley, ...<.p>"
          
        roomRemoteDesc(pov)
        {
            "Through the window {i} {can} see a narrow east/west alley.<.p>";
        }
    ;
     
     
:::

To define a CCTV monitor that provides a view into a cell, in outline we
could do something like this:

::: code
     + tv: SwitchableViewport, Heavy 'cctv monitor'
        specialDesc = "A cctv monitor lurks in the corner. "
        visibleRooms = [cell]
    ;

    ...

    cell: Room 'Cell'
         "This small square cell is almost bare apart from a
          bunk along wall. "

        roomRemoteDesc(pov)
        {
            "The screen shows a small, square cell, with a
            bunk hard against the far wall.<.p>";
        }    
    ;

    + clothes: Wearable 'pile of clothes'
        "Quite a mixture. "
        sightSize = large
    ;
     
:::

[]{#setrooms}

Occasionally, you may want to change the room or rooms a Viewport looks
into. For example, it may be possible to switch a CCTV monitor between
different cameras, or the view from a train window may change as the
train progresses down the track. You can do this by calling the
**setRooms(lst)** method of a Viewport, where *lst* is the list of rooms
(or just one individual room) that you want the Viewport to overlook
from now on. Using [setRooms()]{.code} rather than just changing the
Viewport\'s [visibleRooms]{.code} property directly ensures that the
appropriate adjustments are also made to the enclosing rooms\'s
[roomViewed]{.code} property at the same time.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[viewport.t](../viewport.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Viewport\
[[*Prev:* TIAAction](tiaaction.htm){.nav}     [*Next:*
Weight](weight.htm){.nav}     ]{.navnp}
:::
