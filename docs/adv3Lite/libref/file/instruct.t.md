[instruct.t]{.title}[file]{.type}

[source file](../source/instruct.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
Slightly adapted by Eric Eve for use with adv3Lite

TADS 3 Library: Instructions for new players

This module defines the INSTRUCTIONS command, which provides the player
with an overview of how to play IF games in general. These instructions
are especially designed as an introduction to IF for inexperienced
players. The instructions given here are meant to be general enough to
apply to most games that follow the common IF conventions.

This module defines the English version of the instructions.

In most cases, each author should customize these general-purpose
instructions at least a little for the specific game. We provide a few
hooks for some specific parameter-driven customizations that don\'t
require modifying the original text in this file. Authors should also
feel free to make more extensive customizations as needed to address
areas where the game diverges from the common conventions described
here.

One of the most important things you should do to customize these
instructions for your game is to add a list of any special verbs or
command phrasings that your game uses. Of course, you might think
you\'ll be spoiling part of the challenge for the player if you do this;
you might worry that you\'ll give away a puzzle if you don\'t keep a
certain verb secret. Be warned, though, that many players - maybe even
most - don\'t think \"guess the verb\" puzzles are good challenges; a
lot of players feel that puzzles that hinge on finding the right verb or
phrasing are simply bad design that make a game less enjoyable. You
should think carefully about exactly why you don\'t want to disclose a
particular verb in the instructions. If you want to withhold a verb
because the entire puzzle is to figure out what command to use, then you
have created a classic guess-the-verb puzzle, and most everyone in the
IF community will feel this is simply a bad puzzle that you should omit
from your game. If you want to withhold a verb because it\'s too
suggestive of a particular solution, then you should at least make sure
that a more common verb - one that you are willing to disclose in the
instructions, and one that will make as much sense to players as your
secret verb - can achieve the same result. You don\'t have to disclose
every \*accepted\* verb or phrasing - as long as you disclose every
\*required\* verb \*and\* phrasing, you will have a defense against
accusations of using guess-the-verb puzzles.

You might also want to mention the \"cruelty\" level of the game, so
that players will know how frequently they should save the game. It\'s
helpful to point out whether or not it\'s possible for the player
character to be killed; whether it\'s possible to get into situations
where the game becomes \"unwinnable\"; and, if the game can become
unwinnable, whether or not this will become immediately clear. The
kindest games never kill the PC and are always winnable, no matter what
actions the player takes; it\'s never necessary to save these games
except to suspend a session for later resumption. The cruelest games
kill the PC without warning (although if they offer an UNDO command from
a \"death\" prompt, then even this doesn\'t constitute true cruelty),
and can become unwinnable in ways that aren\'t readily and immediately
apparent to the player, which means that the player could proceed for
quite some time (and thus invest substantial effort) after the game is
already effectively lost. Note that unwinnable situations can often be
very subtle, and might not even be intended by the author; for example,
if the player needs a candle to perform an exorcism at some point, but
the candle can also be used for illumination in dark areas, the player
could make the game unwinnable simply by using up the candle early on
while exploring some dark tunnels, and might not discover the problem
until much further into the game.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`InstructionsMenu`](../object/InstructionsMenu.html)`  `[`VerbRule(instructions)`](../object/VerbRule(instructions).html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`Instructions`](../object/Instructions.html)`  `[`topInstructionsMenu`](../object/topInstructionsMenu.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::