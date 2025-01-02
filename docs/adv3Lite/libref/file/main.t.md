---
---
<span class="title">main.t</span><span class="type">file</span>

[source file](../source/main.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
main.t

This module forms part of the adv3Lite library (c) 2012-13 Eric Eve.
Based in part on code in the adv3 Library (c) Michael J. Roberts.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`main`](#main)`  `[`mainCommandLoop`](#mainCommandLoop)`  `[`mainCommon`](#mainCommon)`  `[`mainRestore`](#mainRestore)`  `[`runGame`](#runGame)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="main"></span>

`main (args)`

[main.t](../file/main.t.html)\[[20](../source/main.t.html#20)\]

<div class="desc">

Main program entrypoint. The core run-time start-up code calls this
after running pre-initialization and load-time initialization. This
entrypoint is called when we're starting the game normally; when the
game is launched through a saved-position file, mainRestore() will be
invoked instead.

</div>

<span id="mainCommandLoop"></span>

`mainCommandLoop ( )`

[main.t](../file/main.t.html)\[[132](../source/main.t.html#132)\]

<div class="desc">

The main command loop. This repeatedly prompts the player for a command
and then processes the command until the game ends.

</div>

<span id="mainCommon"></span>

`mainCommon (prop, [args])`

[main.t](../file/main.t.html)\[[45](../source/main.t.html#45)\]

<div class="desc">

Common main entrypoint - this handles starting a new game or restoring
an existing saved state.

</div>

<span id="mainRestore"></span>

`mainRestore (args, restoreFile)`

[main.t](../file/main.t.html)\[[35](../source/main.t.html#35)\]

<div class="desc">

Main program entrypoint for restoring a saved-position file. This is
invoked from the core run-time start-up code when the game is launched
from the operating system via a saved-position file. For example, on
Windows, double-clicking on a saved-position file on the Windows desktop
launches the interpreter, which looks in the save file to find the game
executable to run, then starts the game and invokes this entrypoint.

</div>

<span id="runGame"></span>

`runGame (look)`

[main.t](../file/main.t.html)\[[99](../source/main.t.html#99)\]

<div class="desc">

Run the game. We start by showing the description of the initial
location, if desired, and then we read and interpret commands until the
game ends (via a "quit" command, winning, death of the player character,
or any other way of terminating the game).

This routine doesn't return until the game ends.

Before calling this routine, the caller should already have set the
global variable gPlayerChar to the player character actor.

'look' is a flag indicating whether or not to look around; if this is
true, we'll show a full description of the player character's initial
location, as though the player were to type "look around" as the first
command.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
