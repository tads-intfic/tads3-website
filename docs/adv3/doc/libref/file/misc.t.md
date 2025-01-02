<span class="title">misc.t</span><span class="type">file</span>

[source file](../source/misc.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - miscellaneous definitions

This module contains miscellaneous definitions that don't have a natural
grouping with any larger modules, and which aren't complex enough to
justify modules of their own.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`CyclicEventList`](../object/CyclicEventList.html)`  `[`EventList`](../object/EventList.html)`  `[`ExternalEventList`](../object/ExternalEventList.html)`  `[`FinishOption`](../object/FinishOption.html)`  `[`FinishType`](../object/FinishType.html)`  `[`GameMainDef`](../object/GameMainDef.html)`  `[`RandomEventList`](../object/RandomEventList.html)`  `[`RandomFiringScript`](../object/RandomFiringScript.html)`  `[`Script`](../object/Script.html)`  `[`ShuffledEventList`](../object/ShuffledEventList.html)`  `[`ShuffledIntegerList`](../object/ShuffledIntegerList.html)`  `[`ShuffledList`](../object/ShuffledList.html)`  `[`StopEventList`](../object/StopEventList.html)`  `[`SyncEventList`](../object/SyncEventList.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`adv3LibInit`](../object/adv3LibInit.html)`  `[`adv3LibPreinit`](../object/adv3LibPreinit.html)`  `[`finishOptionAmusing`](../object/finishOptionAmusing.html)`  `[`finishOptionCredits`](../object/finishOptionCredits.html)`  `[`finishOptionFullScore`](../object/finishOptionFullScore.html)`  `[`finishOptionQuit`](../object/finishOptionQuit.html)`  `[`finishOptionRestart`](../object/finishOptionRestart.html)`  `[`finishOptionRestore`](../object/finishOptionRestore.html)`  `[`finishOptionScore`](../object/finishOptionScore.html)`  `[`finishOptionUndo`](../object/finishOptionUndo.html)`  `[`ftDeath`](../object/ftDeath.html)`  `[`ftFailure`](../object/ftFailure.html)`  `[`ftGameOver`](../object/ftGameOver.html)`  `[`ftVictory`](../object/ftVictory.html)`  `[`libGlobal`](../object/libGlobal.html)`  `[`restoreOptionRestoreAnother`](../object/restoreOptionRestoreAnother.html)`  `[`restoreOptionStartOver`](../object/restoreOptionStartOver.html)`  `[`settingsUI`](../object/settingsUI.html)`  `[`verboseModeSettingsItem`](../object/verboseModeSettingsItem.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`cls`](#cls)`  `[`failedRestoreOptions`](#failedRestoreOptions)`  `[`finishGame`](#finishGame)`  `[`finishGameMsg`](#finishGameMsg)`  `[`isListSubset`](#isListSubset)`  `[`main`](#main)`  `[`mainCommon`](#mainCommon)`  `[`mainRestore`](#mainRestore)`  `[`nilToList`](#nilToList)`  `[`overrides`](#overrides)`  `[`partitionList`](#partitionList)`  `[`processOptions`](#processOptions)`  `[`runGame`](#runGame)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="cls"></span>

`cls ( )`

[misc.t](../file/misc.t.html)\[[550](../source/misc.t.html#550)\]

<div class="desc">

Clear the main game window. In most cases, you should call this rather
than calling the low-level clearScreen() function directly, since this
routine takes care of a couple of chores that should usually be done at
the same time.

First, we flush the transcript to ensure that no left-over reports that
were displayed before we cleared the screen will show up on the new
screen. Second, we call the low-level clearScreen() function to actually
clear the display window. Finally, we re-display any \<ABOUTBOX\> tag,
to ensure that the about-box will still be around; this is necessary
because any existing \<ABOUTBOX\> tag is lost after the screen is
cleared.

</div>

<span id="failedRestoreOptions"></span>

`failedRestoreOptions ( )`

[misc.t](../file/misc.t.html)\[[1992](../source/misc.t.html#1992)\]

<div class="desc">

Show failed startup restore options. If a restore operation fails at
startup, we won't just proceed with the game, but ask the user what they
want to do; we'll offer the options of restoring another game, quitting,
or starting the game from the beginning.

</div>

<span id="finishGame"></span>

`finishGame (extra)`

[misc.t](../file/misc.t.html)\[[1981](../source/misc.t.html#1981)\]

<div class="desc">

finish the game, offering the given extra options but no message

</div>

<span id="finishGameMsg"></span>

`finishGameMsg (msg, extra)`

[misc.t](../file/misc.t.html)\[[1903](../source/misc.t.html#1903)\]

<div class="desc">

Finish the game, showing a message explaining why the game has ended.
This can be called when an event occurs that ends the game, such as the
player character's death, winning, or any other endpoint in the story.

We'll show a message defined by 'msg', using a standard format. The
format depends on the language, but in English, it's usually the message
surrounded by asterisks: "\*\*\* You have won! \*\*\*". 'msg' can be:

  
- nil, in which case we display nothing  
- a string, which we'll display as the message  
- a FinishType object, from which we'll get the message

After showing the message (if any), we'll prompt the user with options
for how to proceed. We'll always show the QUIT, RESTART, and RESTORE
options; other options can be offered by listing one or more
FinishOption objects in the 'extra' parameter, which is given as a list
of FinishOption objects. The library defines a few non-default finish
options, such as finishOptionUndo and finishOptionCredits; in addition,
the game can subclass FinishOption to create its own custom options, as
desired.

</div>

<span id="isListSubset"></span>

`isListSubset (a, b)`

[misc.t](../file/misc.t.html)\[[2469](../source/misc.t.html#2469)\]

<div class="desc">

Determine if list a is a subset of list b. a is a subset of b if every
element of a is in b.

</div>

<span id="main"></span>

`main (args)`

[misc.t](../file/misc.t.html)\[[599](../source/misc.t.html#599)\]

<div class="desc">

Main program entrypoint. The core run-time start-up code calls this
after running pre-initialization and load-time initialization. This
entrypoint is called when we're starting the game normally; when the
game is launched through a saved-position file, mainRestore() will be
invoked instead.

</div>

<span id="mainCommon"></span>

`mainCommon (prop, [args])`

[misc.t](../file/misc.t.html)\[[624](../source/misc.t.html#624)\]

<div class="desc">

Common main entrypoint - this handles starting a new game or restoring
an existing saved state.

</div>

<span id="mainRestore"></span>

`mainRestore (args, restoreFile)`

[misc.t](../file/misc.t.html)\[[614](../source/misc.t.html#614)\]

<div class="desc">

Main program entrypoint for restoring a saved-position file. This is
invoked from the core run-time start-up code when the game is launched
from the operating system via a saved-position file. For example, on
Windows, double-clicking on a saved-position file on the Windows desktop
launches the interpreter, which looks in the save file to find the game
executable to run, then starts the game and invokes this entrypoint.

</div>

<span id="nilToList"></span>

`nilToList (val)`

[misc.t](../file/misc.t.html)\[[2438](../source/misc.t.html#2438)\]

<div class="desc">

nilToList - convert a 'nil' value to an empty list. This can be useful
for mix-in classes that will be used in different inheritance contexts,
since the classes might or might not inherit a base class definition for
list-valued methods such as preconditions. This provides a usable
default for list-valued methods that return nothing from superclasses.

</div>

<span id="overrides"></span>

`overrides (obj, base, prop)`

[misc.t](../file/misc.t.html)\[[678](../source/misc.t.html#678)\]

<div class="desc">

Determine if the given object overrides the definition of the given
property inherited from the given base class. Returns true if the object
derives from the given base class, and the object's definition of the
property comes from a different place than the base class's definition
of the property.

</div>

<span id="partitionList"></span>

`partitionList (lst, fn)`

[misc.t](../file/misc.t.html)\[[2457](../source/misc.t.html#2457)\]

<div class="desc">

partitionList - partition a list into a pair of two lists, the first
containing items that match the predicate 'fn', the second containing
items that don't match 'fn'. 'fn' is a function pointer (usually an
anonymous function) that takes a single argument - a list element - and
returns true or nil.

The return value is a list with two elements. The first element is a
list giving the elements of the original list for which 'fn' returns
true, the second element is a list giving the elements for which 'fn'
returns nil.

(Contributed by Tommy Nordgren.)

</div>

<span id="processOptions"></span>

`processOptions (lst)`

[misc.t](../file/misc.t.html)\[[2003](../source/misc.t.html#2003)\]

<div class="desc">

Process a list of finishing options. We'll loop, showing prompts and
reading responses, until we get a response that terminates the loop.

</div>

<span id="runGame"></span>

`runGame (look)`

[misc.t](../file/misc.t.html)\[[577](../source/misc.t.html#577)\]

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

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
