::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Opening Moves](begin.htm){.nav}
\> Core and Optional Modules\
[[*Prev:* Introduction and Overview](docs-intro.htm){.nav}     [*Next:*
Minimal Game Definition](mingame.htm){.nav}     ]{.navnp}
:::

::: main
# Core and Optional Modules

The adv3Lite library has been designed to be as modular as possible, so
that if there are features of library you don\'t need for a particular
game you can easily exclude them from the build (on how to do this,
consult the System Manual). Some of the modules, however, are core to
the library and must be included in every game. Moreover, a few of the
optional modules require other optional modules to be present. In this
section we list the core modules and offer a brief explanation of the
optional ones.

Note that all modules, core and optional, are included in the library by
default, so that all the features of the library are available to you
when you start a new game. It\'s up to you do decide which features you
don\'t need or want to use, and to opt out of them by excluding them
from your build if you so wish.

NOTE: if you exclude an optional module once the game has been compiled
(as a new game automatically is by Windows Workbench) you may need to do
a complete recompile for debugging after excluding the unwanted modules;
otherwise you may get a number of spurious errors and warnings.

[]{#core}

## Core Modules

In addition to the TADS 3 System files (the ones that some in the
system.tl library file that is usually contained automatically in any
TADS 3 complilation), any TADS 3 game built with the adv3Lite library
*must* include the following files from the adv3Lite library:

-   action.t
-   actions.t
-   banner.t \*
-   command.t
-   console.t \*
-   doer.t
-   debug.t \*\*
-   debug_dynfunct.t \*\*
-   input.t
-   lister.t
-   main.t
-   messages.t
-   modid.t
-   output.t
-   parser.t
-   precond.t
-   query.t
-   spelling.t
-   status.t
-   thing.t
-   travel.t
-   english.t \*\*\*
-   grammar.t \*\*\*
-   tokens.t \*\*\*

\* console.t and banner.t are required for traditional TADS 3 games
played on an interpreter. These files are not included in the
adv3LiteWeb library used for games to be played via the [Web
UI](webui.htm); for web-based games browser.t is used in place of
console.t, and banner.t is not used at all.

\*\* The debug.t and debug_dynfunct.t files are only included in debug
builds; they therefore have no effect on the size of the released game.
Note that if you include dynfunc.t in your game you should **not**
include debug_dynfunc.t, since the latter simply includes dynfunc.t in a
game compiled for debugging, and you won\'t want it twice!

\*\*\* english.t, grammar.t and tokens.t are specific to English
language games. Games written in another language would need to replace
them with that other language\'s equivalents.

[]{#optional}

## Optional Modules

The following modules are optional, but (where noted below) may require
the presence of other modules:

-   **actor.t:** Provides support for implementing NPCs including
    conversation and agenda items. Requires events.t and topicEntry.t.
-   **attachables.t:** Implements classes for simple types of
    attachable, including SimpleAttachable, NearbyAttachable and
    Component.
-   **eventList.t:** Implements various types of EventList (identical to
    those in the adv3 library).
-   **events.t:** Implements fuses and daemons.
-   **exits.t:** Implements the status line exit-lister and the EXITS
    command.
-   **extras.t** Defines a whole load of classes such as Fixture,
    Container, Supporter and the like familiar from the adv3 library.
    This file implements some additional functionality through a number
    of its classes, while others simply implement effects that could
    readily be obtained by defining various properties on Thing; many
    authors will probably want to include this file for convenience and
    more readable code.
-   **gadget.t:** Implements classes for control gadgets such as
    buttons, levers and dials.
-   **hintsys.t:** Implements a hint system (almost identical to that in
    adv3). Requires menusys.t, menucon.t and events.t
-   **intruct.t**: Provides a game with a set of basic instructions on
    playing IF. Requires menusys.t and menucon.t to display instructions
    in menu format.
-   **menusys.t** and **menucon.t:** Implement the system for displaying
    menus. Note that these two files must be included together (i.e.
    your game must include both or neither). In a webui game menucon.t
    is replaced with menuweb.t.
-   **newbie.t**: Provides various kinds of assistance to new players.
    Requires events.t
-   **pathfind.t:** Implements pathfinding, both for NPCs (if desired)
    and for the player character (via use of GO TO and CONTINUE
    commands).
-   **scene.t:** Implements a Scenes mechanism similar to that found in
    Inform 7.
-   **score.t:** Implements a scoring system identical to that in the
    adv3 library. Exclude this file to disable scoring if it is not
    relevant to your game.
-   **senseRegion.t:** Implements the SenseRegion class which allows a
    game to define regions of two or more rooms with sensory connections
    between them.
-   **topicEntry.t:** Implements the base class for Topic Entries along
    with the Consultable and ConsultTopic classes.
-   **thoughts.t:** Provides the framework for a THINK ABOUT command.
    Requires topicEntry.t.

Note that in addition to the optional modules listed above, there are a
number of [extensions](extensions.htm), which can further extend the
functionality of adv3Lite. The difference between an optional module and
an extension is that you have to choose to opt out of using an optional
module (by deliberately excluding it from your game), whereas you have
to deliberately opt in to an extensions (by taking the appropriate steps
to include it in your game). In principle optional modules implement
features that many games are likely to need, while extensions offer more
specialized features that fewer games are likely to need, although in
practice the distinction between the more popular extensions and the
lesser used optional modules may turn out to be a little fuzzy in this
respect. It is in any case worth being aware of what extensions are
available in case one or more of them implements features you need in
your game.

\
[]{#which}

## Which Optional Modules Do You Need?

You may be wondering, since some of the library modules are optional,
how to choose which ones you actually need. Of course you won\'t go
horribly wrong if you simply leave them all in place in your game, but
if you want to be more discriminating, the following guidelines may be
of some help. While the modules you should include will of course depend
on the nature of the game you\'re trying to write, it may be helpful to
think of the optional modules in the following groups:

*Extras, EventLists and Events*: while it is possible to write a game in
adv3Lite without any of these three modules (otherwise they wouldn\'t be
truly optional), all three of them are likely to prove useful for the
majority of games, so you should normally include them unless you have
good reason not to.

*Exits and Pathfind*: both these modules provide ease of use for players
without creating any additional work for game authors, so they are
normally worth including *except* in games with very few rooms. If
you\'re writing a one-room game these two modules are completely
pointless and should normally be excluded (since they could mislead the
player). For games containing two or three rooms these two modules may
not add much, but whether or not to include them will partly depend on
your aesthetic choice. Games with four or more rooms will normally
benefit from having these modules included.

*Attachables, Gadget, SenseRegion and Thoughts*: Each of these modules
provides implementations that the majority of games may not need, and so
need only be included if your game actually requires the functionality
they provide (although it is, of course, harmless to leave them in).
*Attachables* is useful if and only if you have objects the player needs
to be able to attach to and/or detach from each other. *Gadget* is
useful if your game makes use of buttons, levers and dials, but not
otherwise (so it is, for example, unlikely to be useful in a game set
some way in the past). *SenseRegion* is useful if you want it to be
possible to see, hear and or/smell objects in one room from another (so
that, for example, it would clearly be useless in a one-room game).
*Thoughts* provides a framework for implementing a THINK ABOUT command,
and is only useful if that\'s something you want in your game.

*Menusys, Hintsys and Score*: Hintsys should only be included if your
game implement hints, and Score should only be included if your game
keeps score; excluding either of these modules should help make it
clearer to your players that your game does not implement the relevant
features. If you included Hintsys you must also include Menusys, but you
may also want to include Menusys for other purposes, for example to
offer players a menu of options in response to an ABOUT command.

*Instruct and Newbie*: Both these modules provide help for new players
of Interactive Fiction and are almost certainly worth including if such
new players are likely to be in your target audience. Note that Instruct
works better if Menusys is included, and that Newbie can usefully be
supplemented by features in Hintsys.

*Scene*: The Scene module probably doesn\'t allow you to do anything you
couldn\'t do without it, but it may well enable you to do it in an
easier way. Scenes (which it implements) are basically objects that
become active and inactive under circumstances you specify and which can
carry out specified tasks when beginning and ending and while they\'re
active; this can often be a convenient way of organizing events in a
game. If in doubt, leave this module in unless and until you\'re sure
you don\'t need it.

*Actor and TopicEntry*: You almost certainly need these two modules if
your game is going to include NPCs (non-player characters) of any
sophistication, but probably not otherwise. You don\'t need the Actor
module to define the Player Character (which can simply be a Thing), nor
do you need it to define simple NPCs such as animals or guards whose
role is simply to block access to somewhere until they\'re removed. On
the other hand, if your game is going to include anything more than the
most basic conversation with one or more NPCs then you almost certainly
will require the Actor module (along with the TopicEntry module on which
it depends) --- at least it will if you plan to use an ask/tell type
conversation system. If you want something completely different, such as
a menu-driven conversation system or a simple TALK TO system you may
prefer not to include the Actor module but instead write your own
replacement for it. Note that you will also need the TopicEntry module
if your game includes Consultables (such as books the player character
can look things up in) or you want to include the Thoughts module.

[]{#liter}

If you want few or none of the optional modules, you may prefer to base
your project on the **adv3Liter** version of the library and add in any
additional modules you want. To do this from Workbench, simply select
the adv3Liter option from the new project wizard when you create your
new project. If you\'re not using Workbench but you\'re instead
compiling from the command line, proceed as you would for an adv3 game
(see the section on Compiling and Linking in the TADS 3 System Manual if
you need guidance on this), but specify the adv3Liter library instead ([
-lib adv3Liter]{.code}) and include the option [ -D LANGUAGE =
english]{.code} on the command line.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Manual*\
[Table of Contents](toc.htm){.nav} \| [Opening Moves](begin.htm){.nav}
\> Core and Optional Modules\
[[*Prev:* Introduction](docs-intro.htm){.nav}     [*Next:* Minimal Game
Definition](mingame.htm){.nav}     ]{.navnp}
:::
