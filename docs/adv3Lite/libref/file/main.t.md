[main.t]{.title}[file]{.type}

[source file](../source/main.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
main.t

This module forms part of the adv3Lite library (c) 2012-13 Eric Eve.
Based in part on code in the adv3 Library (c) Michael J. Roberts.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

*(none)* []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`main`](#main)`  `[`mainCommandLoop`](#mainCommandLoop)`  `[`mainCommon`](#mainCommon)`  `[`mainRestore`](#mainRestore)`  `[`runGame`](#runGame)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#main}

`main (args)`

[main.t](../file/main.t.html)\[[20](../source/main.t.html#20)\]

::: desc
Main program entrypoint. The core run-time start-up code calls this
after running pre-initialization and load-time initialization. This
entrypoint is called when we\'re starting the game normally; when the
game is launched through a saved-position file, mainRestore() will be
invoked instead.
:::

[]{#mainCommandLoop}

`mainCommandLoop ( )`

[main.t](../file/main.t.html)\[[132](../source/main.t.html#132)\]

::: desc
The main command loop. This repeatedly prompts the player for a command
and then processes the command until the game ends.
:::

[]{#mainCommon}

`mainCommon (prop, [args])`

[main.t](../file/main.t.html)\[[45](../source/main.t.html#45)\]

::: desc
Common main entrypoint - this handles starting a new game or restoring
an existing saved state.
:::

[]{#mainRestore}

`mainRestore (args, restoreFile)`

[main.t](../file/main.t.html)\[[35](../source/main.t.html#35)\]

::: desc
Main program entrypoint for restoring a saved-position file. This is
invoked from the core run-time start-up code when the game is launched
from the operating system via a saved-position file. For example, on
Windows, double-clicking on a saved-position file on the Windows desktop
launches the interpreter, which looks in the save file to find the game
executable to run, then starts the game and invokes this entrypoint.
:::

[]{#runGame}

`runGame (look)`

[main.t](../file/main.t.html)\[[99](../source/main.t.html#99)\]

::: desc
Run the game. We start by showing the description of the initial
location, if desired, and then we read and interpret commands until the
game ends (via a \"quit\" command, winning, death of the player
character, or any other way of terminating the game).

This routine doesn\'t return until the game ends.

Before calling this routine, the caller should already have set the
global variable gPlayerChar to the player character actor.

\'look\' is a flag indicating whether or not to look around; if this is
true, we\'ll show a full description of the player character\'s initial
location, as though the player were to type \"look around\" as the first
command.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
