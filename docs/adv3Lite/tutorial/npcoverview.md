::: topbar
![](topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> Overview\
[[*Prev:* Character Building](character.htm){.nav}     [*Next:* The
Security Guard](guard.htm){.nav}     ]{.navnp}
:::

::: main
# Overview

So far our Airport game has acquired a lot of physical objects the
player can interact with, but not really any people, apart from a few
Decoration objects representing groups of people with whom no real
interaction is possible. This risks making the game-play feel a little
dead, since the player character has no real interaction with any fellow
human beings. It may also strike players as a bit unrealistic that they
can\'t interact with anyone in a busy airport. In any case, the plot of
the Airport game virtually demands that at least a few individual
characters are implemented in a bit more depth than mere Decorations.

In Interactive Fiction parlance, characters other than the player
character implemented in a game are called **Non Player Characters** (or
NPCs for short). In this chapter we shall start to explore how to
implement NPCs in adv3Lite, although we\'ll leave the business of
conversing with NPCs until Chapter 11.

Since NPCs are usually quite complex objects, or rather collections of
objects, it\'s often best to put each one (or at least each major one)
in a source file of its own. That might be overkill for our little
Airport game, but it\'s probably worth creating a new source file for
all our NPCs. Create one now and call it npcs.t. In Workbench, select
File -\> New File from the menu, select the TADS Source File type and
click OK. Then select File -\> Save to save the untitled source file and
call it npcs; when asked if you wish to add npcs.t to the project, say
yes. If you\'re not using Workbench, create a new file called npcs.t in
your text editor, then edit your airport.t3m file to add [-SOURCE
npcs]{.code} at the end.

Either way, then make sure you copy the following three lines to the
start of your new source file:

::: code
    #charset "us-ascii"

    #include <tads.h>
    #include "advlite.h"
:::

For the purposes of this tutorial we\'ll restrict ourselves to
implementing just three NPCs: Pablo Cortez, the Security Guard by the
metal detector, and the flight attendant on the plane, with the last of
these being the most complex.

As intimated above, implementing an NPC in adv3Lite generally involves
creating a set of related objects: one representing the Actor, maybe one
or more representing different states which the Actor can be in at
various times (ActorStates), maybe one or more AgendaItems representing
actions that the Actor will carry out when ready to do so, and probably
quite a number of TopicEntry objects representing the actor\'s responses
to various conversational commands. Not all of these need be present for
every NPC, but more complex NPCs are likely to make use of all these
kinds of object. In this chapter we\'ll look at Actors, ActorStates and
AgendaItems, and leave conversation and TopicEntries to Chapter 11.
:::

------------------------------------------------------------------------

::: navb
*adv3Lite Library Tutorial*\
[Table of Contents](toc.htm){.nav} \| [Character
Building](character.htm){.nav} \> Overview\
[[*Prev:* Character Building](character.htm){.nav}     [*Next:* The
Security Guard](guard.htm){.nav}     ]{.navnp}
:::
