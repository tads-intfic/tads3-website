::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Extensions\
[[*Prev:* The Web UI](webui.htm){.nav}     [*Next:* Exercises &
Samples](../learning/exercises.htm){.nav}     ]{.navnp}
:::

::: main
# Extensions

Extensions are a way of providing additional functionality without
cluttering up the main library. Adv3Lite provides a number of extensions
that in one way or another offer functionality available in adv3 but
excluded from the main adv3Lite library, or which extend the
capabilities of adv3Lite beyond those of adv3. So, why make them
extensions rather than optional modules in the adv3Lite library? There
are three main reasons:

1.  If they were part of the main library, even as optional modules,
    they would look like more features that users of adv3Lite would need
    to learn, thus adding to the perceived complexity of the library. In
    fact no one needs to learn about any of these extensions unless and
    until they find themselves writing a game that actually requires
    them.
2.  Although optional modules *can* be excluded from a game, the
    temptation will often be to leave them there, either because we
    don\'t get round to excluding them, or we leave them in \'just in
    case\' or to make use of them just because they\'re there. This can
    lead to unnecessary busy-work for both game authors and players; for
    example, the room parts extensions is fairly simple, but if it\'s
    left in by default, authors need to think about removing room parts
    that shouldn\'t be there, such as the east and west walls of a
    section of an east--west passage, and players may waste a lot of
    time trying to interact with walls and ceilings that don\'t actually
    do anything.
3.  For most games, the absence of features offered by these extensions
    won\'t be missed by either players or game authors, so for most
    games they are best left out. Using an \'opt-in\' method of
    extensions should help to ensure that they\'re only included in
    games that will actually benefit from them.

If you find you do want to include one or more of these extensions in
your game, the process is fairly straightforward. In Workbench you would
select the Project -\> Add File to Project option from the main menu (or
right-click on the Source Files icon in the left-hand pane files list
and select Add File from the context menu), and then navigate to the
extensions directory under the adv3Lite directory to select the
extension you want. You should then move it down the file list so that
it comes after all the adv3Lite library files but before your own game
code. If you\'re compiling from the command line you need to add the
extension file names to your project (t3m) file in the equivalent place:
between the library files and your own game code files, in the following
manner:

::: code
    -lib system
    -lib adv3Lite
    -source extensions/roomparts
    -source start

     
:::

Many of the extensions that come with adv3Lite make use of additional
macros, templates and enums. These are all defined in the advlite.h file
so you don\'t need to worry about adding any extra header files to your
code to make use of any of these extensions.

The extensions currently distributed with adv3Lite are briefly described
below, with links to more detailed documentation:

[]{#brightness}

## Brightness

The Brightness extension provides an implementation of different
lighting levels via the ability to assign different brightnesses to
different light sources and different degrees of opacity to
(semi-)transparent containers as well as basic modelling of transmission
of light from a remote location across a SenseRegion. For details, see
the documentation on the [Brightness](../extensions/brightness.htm)
extension.

[]{#collective}

## Collective

This extension defines the [Collective]{.code} and
[DispensingCollective]{.code} classes, which can help with situations
where you have one object representing a collective (e.g. a bunch of
grapes) and one or more objects representing items drawn from that
collective (e.g. individual grapes). The Collective class helps overcome
disambiguation issues when both the collective and individual items are
in scope (e.g. when \'grapes\' might refer either to the bunch of grapes
or to one or more individual grapes) and the DispensingCollective class
further assists with making the collective issue individual items on
demand (e.g. TAKE GRAPE or TAKE GRAPE FROM BUNCH) can be made to move an
individual grape into the player character\'s inventory even when no
individual grape is yet in scope). For details, see the documentation on
the [Collective](../extensions/collective.htm) extension.

[]{#cmdhelp}

## Command Help

The cmdhelp extension offers the player a list of commands to try out if
he or she enters an empty command (i.e. just presses ENTER at the
command prompt). This may be particularly helpful for newcomers to IF.
For details, see the documentation on the [Command
Help](../extensions/cmdhelp.htm) extension.

[]{#dynregion}

## Dynamic Region

The DynamicRegion class defined in this extension allows the definition
of Regions that can grow or shrink during the course of play (a regular
Region being fixed and unalterable); this comes with certain
restrictions, however. For details see
[dynamicRegion.t](../extensions/dynregion.htm)

[]{#eventlistitem <="" a=""}

## EventListItem

The EventListItem extension defines a new **EventListItem** class (along
with appropriate modifications to various EventList classes to enable it
to work). At a first approximation, an EventListItem combines the
functionanlity of AgendaItems and EventList. An EventListItem can be
included amongst other items in an EventList, but will only be used when
its isReady condition is true, and will cease to be used once its isDone
condition becomes true. It can be defined to become isDone after being
used a certain number of uses, and a minimum interval can be set between
successive uses of any given EventListItem. For details see the
[documentation](../extensions/eventlistitem.html) for eventListItem.t

## Footnotes

The Footnotes module is basically the same as its adv3 equivalent. Its
function is to allow the display of footnotes in your game; these can
provide additional information which players can view if they wish using
the FOOTNOTES command, but which are not essential to playing the game.
For details see [footnote.t](../extensions/footnotes.htm)

## Fueled Light Source

The FueledLightSource mix-in class defined in this extension facilitates
defining light sources that have a finite life, since they consume some
kind of fuel every turn that they\'re lit. Most games are unlikely to
make use of fueled light sources, but for those that do, it may be
convenient not to have to reinvent this particular wheel. For more
information see the documentation on
[fueled.t](../extensions/fueled.htm).

[]{#mobile}

## MobileCollectiveGroup

The MobileCollectiveGroup class is a subclass of
[CollectiveGroup](extra.htm#collective) that can be used for objects
that may move around in the course of the game (whereas CollectiveGroup
should be used for fixtures). Its function is to provide a summary
description of a number of similar objects in currently in scope (such
as differently coloured cables that are otherwise identical, for
example. For more For more information see the documentation on
[mobilecollectivegroup.t](../extensions/mobilecollectivegroup.htm).

[]{#objtime}

## Objective Time

The objtime (objective [time]{#obtime_idx}) extension provides a means
of keeping track of game time (a notional clock/calendar within the
game) by advancing the game clock by a defined amount each turn (by
default this is one minute, but this can be customised by game authors
in as fine-grained a manner as they wish, so that, in principle, every
action could consume a different ammount of time). For more information
see the documentation on [objtime.t](../extensions/objtime.htm)

## Postures

The postures extension allows you to keep track of actor posture
(standing, sitting or lying) and adds **Bed** and **Chair** classes that
relate to these postures in particular ways. For more information see
the documentation on [postures.t](../extensions/postures.htm)

[]{#relations}

## Relations

The relations extension allows you to define various kinds of relations
between objects (or between other items), rather in the style of Inform
7 relations. For more information see the documentation on
[relations.t](../extensions/relations.htm)

## Room Parts

The roomparts extension adds [walls]{#wall_idx} and a
[ceiling]{#ceiling_idx} to every room, as well as a new **OutdoorRoom**
class for rooms that have no walls and a sky instead of a ceiling. It
also allows certain items in a room to be associated with particular
room parts so that, for example, examining a wall might mention a
picture that\'s notionally hanging there. For more details see the
documentation on [roomparts.t.](../extensions/roomparts.htm)

[]{#rules}

## Rules

The rules extensions allows you to define Rules and RuleBooks (which
work similarly to their Inform 7 equivalents). For more details see the
documentation on [rules.t.](../extensions/rules.htm)

## SceneTopic

The SceneTopic extension implements the SceneTopic class (and its two
subclasses) that can be used to define ActorTopicEntries that are
triggered when a [Scene](scene.htm) starts or ends. For more details see
the documentation on [scenetopic.t.](../extensions/scenetopic.htm)

[]{#sensory}

## Sensory

The Sensory extension provides fuller handling of Noises and Odors, and
adds SensoryEvents, which are sudden sounds, smells or visible
happenings to which nearby actors or objects can react. For more details
see the documentation on [sensory.t.](../extensions/sensory.htm)

## Signals

The Signals extension (which requires the Relations extension) provides
a means for otherwise unrelated objects to communicate, that is for one
object (the sender) to send specific signals to other objects which can
then handle them in whatever way they wish. For more details see the
documentation on [signals.t.](../extensions/signals.htm)

[]{#subtime}

## Subtime

The subtime extension models the passage of subjective
[time]{#subtime_idx}. It is basically the adv3 subtime extension
modified to work with adv3Lite. It allows game authors to define certain
events within their story as occurring at particular times, and then
provides a means of reporting the time as it appears to the player
character when the player queries the time in between those events. For
details see [subtime.t](../extensions/subtime.htm)

[]{#symconn}

## Symconn

The symconn (Symmetrical Connectors) extension can be used to simplify
the creation of symmetrical connections between rooms (for example where
[room1.east]{.code} leads to [room2]{.code} and [room2.west]{.code}
leads to [room1]{.code}). It can automate the reciprocal connections
between rooms (so that, for example, if [hall.east]{.code} is set to
[lounge]{.code}, [lounge.west]{.code} will automatically be set to
[hall]{.code}). It also defines a number of two-way connector classes so
that, for example, a simple door between two rooms can be specified with
one object instead of the normal two. For details see
[symconn.t](../extensions/symconn.htm)

[]{#sysrules}

## Sysrules

The sysrules extension requires the rules extension to be present also.
It defines a number of rules and rulebooks that replace various methods
in some library classes, allowing greater tailoring of certain aspects
of the turn cycle and of action handling using rules. For details see
[sysrules.t](../extensions/sysrules.htm)

## TIAAction

The TIAAction extension allows you to define actions involving three
objects, such as PUT COIN IN SLOT WITH TWEEZERS. For more details see
the documentation on [tiaaction.t.](../extensions/tiaaction.htm) Note
that it\'s possible to define actions involving two objects and a
literal or a topic without this extension by using techniques outlined
in the chapter on [Defining New Actions](define.htm#threeobjects).

## Viewport

The Viewport extension allows you to define objects such as windows or
CCTV screens that can be used to view remote locations and their
contents when they\'re looked through or examined, without having a
listing of the remote locations in question appearing in the room
listing of the current room. This can be useful for implementing objects
such as windows and CCTV screens where the player only becomes aware of
what they show when s/he uses them. For more details see the
documentation on [viewport.t](../extensions/viewport.htm).

## Weight

The Weight extension allows you to track the weight of objects in your
game and control for the weight capacity of actors and other objects in
much the same way as the standard library handles bulk. For more details
see the documentation on [weight.t](../extensions/weight.htm).
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](toc.htm){.nav} \| [Final Moves](final.htm){.nav} \>
Extensions\
[[*Prev:* The Web UI](webui.htm){.nav}     [*Next:* Exercises &
Samples](../learning/exercises.htm){.nav}     ]{.navnp}
:::
