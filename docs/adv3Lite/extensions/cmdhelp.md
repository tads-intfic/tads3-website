::: topbar
![](../../docs/manual/topbar.jpg){border="0"}
:::

::: nav
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Command Help\
[[*Prev:* Collective](collective.htm){.nav}     [*Next:* Dynamic
Region](dynregion.htm){.nav}     ]{.navnp}
:::

::: main
# Command Help

## Overview

When the player enters an empty command (by hitting the enter key at the
command prompt without typing anything), the main library responds
either by carrying out a LOOK command or by complaining that the command
is empty (depending on the setting of [Parser.autoLook]{.code}). This
extension changes that behaviour so that the player is instead offered a
brief menu of options (provided the new Parser property **autoHelp** is
true, as it is by default in this extension). Selecting one of these
options will then cause this extension to display a list of actions in
the chosen category that the player could try; on an HTML-enabled
interpreter these will be hyperlinked so that the player can just click
on one of them to execute it.

\
[]{#classes}

## New Action and Properties

In addition to a number of properties/methods intended purely for
internal use, this extension defines the following new Action object and
properties:

-   *New Action*: [CmdMenu]{.code}
-   *Properties of CmdMenu*: [manipulationActions]{.code},
    [excludeCheckFailures]{.code}, [maxObjs]{.code}.
-   *Additional/overridden properties/methods of Parser*:
    [emptyCommand()]{.code}, [autoHelp]{.code}.

\
[]{#usage}

## Usage

Include the cmdhelp.t file after the library files but before your game
source files.

If the player then enters an empty command, the response will be:

::: cmdline
    What would you like to do?
    1. Go to another location
    2. Investigate your surroundings
    3. Relocate something
    4. Manipulate something
    5. Talk to someone
:::

Note that Option 5 will only be displayed if there is in fact someone
available for the player character to talk to.

The player can then respond by selecting one of the numbers above
(either typing on it or clicking on it). The extension will then respond
by displaying some suggested commands. For example, if the player
selected option 2 above then the game might respond:

::: cmdline
    Here are some suggestions (other actions may also be possible):
    look  listen smell  inventory

    examine box   examine cheese   examine door a   examine ground   examine iron key   examine Lucy   examine note   examine pen   examine table   examine you   

    read note   

    look in box 

    smell cheese   
:::

If the game is being played on an HTML-capable interpreter the player
can then click on one of the suggested commands to execute it.

[]{#exclude}

Note that, as far as possible, the extension tries to offer the player
only commands that are likely to work, i.e. commands involving only
objects that are available to the player and on which the suggested
command is likely to succeed. This test generally involves trying the
verify stage --- or some equivalent checks --- of the relevant action on
various objects to see which would allow the action to go ahead. If the
CmdMenu property **excludeCheckFailures** is true (as it is by default)
then the relevant check routines are also tried to see if they would
rule out the action. Note, however, that any preconditions that may
apply can\'t be checked in this way, since this might trigger implicit
actions. Note also, however, that any side-effects of a check() method,
such as setting a flag to show that it has been tried, *will* be carried
out.

If there are quite a large number of objects in scope, there is a risk
that player could be overwhelmed by the volume of suggestions. The
number of suggestions is therefore limited by the **maxObjs** property
of [CmdMenu]{.code} (which has a value of 10 by default). This limits
the number of objects (or pairs of objects) that will be suggested in
connection with any one action. You can adjust this number up or down if
you feel that players are getting too few or too many suggestions. In
the case of the more common actions the extension tries to prioritize
objects that haven\'t been interacted with as recently as others, which
should help other objects enter the list of suggestions once some
actions have been carried out.

With the exception of LockWith and UnlockWith, the actions that are
suggested in the \"Manipulate something\" section are those listed in
the **manipulationActions** property of [CmdMenu]{.code}. The actions
listed in this property must all be TActions (i.e. actions that take a
direct object only, which direct object must be a Thing). This allows
you to change the actions that might be suggested, and also to add any
TActions you define in your own game. The actions listed in the
[manipulationActions]{.code} list are suggested only on objects for
which they would pass the verify stage and, if
[excludeCheckFailures]{.code}, the check stage. In practice this is
likely to limit the actions suggested to a manageable number.

This restriction to TActions is not quite so limiting as it may first
appear, since many TIActions have TAction equivalents that then prompt
for the indirect object. For example the library defines the following
on the Thing class:

::: code
        isDiggable = nil

        dobjFor(Dig)
        {
            preCond = [touchObj]
            verify() 
            {
                if(!isDiggable)
                   illogical(cannotDigMsg); 
            }
            
            /* 
             *   If digging is allowed, then most likely we need an implement like a
             *   spade to dig with, so our default action is to ask for one. This
             *   can be overridden on objects in which the actors can effectively
             *   dig with their bare hands.
             */
            action() { askForIobj(DigWith); }
        } 
:::

This means that if you defined an object, the beach, say, as being
diggable ([isDiggable = true]{.code}) and the player subsequently tried
the DIG BEACH suggestion, he or she would then be prompted \"What do you
want to dig with?\" (or, if there was just one digging implement in
scope, the parser would select it automatically). Many of the library
actions are defined in accordance with this pattern, and if you follow
it when defining your own TIActions then this extension should be able
to cope with them reasonably well if you just add the matching TAction
to the [manipulationActions]{.code} list.

Finally, note that if the player selects option 5 and talks to an NPC,
the default behaviour of this extension is to hyperlink any topic
suggestions so that they, too, can be selected by clicking on them.

\
[]{#limitations}

## Limitations and Explanations

This extension does not replace the command line interface with a
point-and-click one, even though it moves some way in that direction. In
a large work of IF there may be too many combinations of objects and
actions for a point-and-click interface to be practicable, and in any
case offering a choice of every combination of actions and objects that
might work could potentially lead to spoilers. Moreover, actions that
involve topics and literals can hardly be reduced to a point-and-click
interface, since the set of allowable actions may be infinite (although
the hyperlinking of suggested topics of conversation is a small step in
the direction of providing a partial point-and-click interface for
conversation).

In any case, this extension does not replace the command line interface
at all. The command prompt remains available for the player to use at
any time. Moreover, when a player clicks on a suggested command s/he can
see the command being entered at the command prompt just before it is
executed. At least in theory, this could help educate players in the use
of the command line by providing examples of commands that work. This
extension should thus be seen more as a way of easing players into the
command-line interface than as a way of replacing it. While it may be
possible to devise a game that can be played through to a successful
conclusion by clicking on the commands suggested by this extension, in
most cases players will probably have to type at least some commands on
their own.

\

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[cmdhelp.t](../cmdhelp.t) file.
:::

------------------------------------------------------------------------

::: navb
*Adv3Lite Manual*\
[Table of Contents](../../docs/manual/toc.htm){.nav} \|
[Extensions](../../docs/manual/extensions.htm){.nav} \> Command Help\
[[*Prev:* Collective](collective.htm){.nav}     [*Next:* Dynamic
Region](dynregion.htm){.nav}     ]{.navnp}
:::
