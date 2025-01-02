---
layout: docs
---
<span class="title">libGlobal</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[1587](../source/misc.t.html#1587)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Library global variables

**`libGlobal`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`libGlobal`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actorVisualAmbientCache`](#actorVisualAmbientCache)[`allSenses`](#allSenses)[`canTouchCache`](#canTouchCache)[`commandLineArgs`](#commandLineArgs)[`connectionCache`](#connectionCache)[`curAction`](#curAction)[`curActor`](#curActor)[`curIssuingActor`](#curIssuingActor)[`curVerifyResults`](#curVerifyResults)[`exitListerObj`](#exitListerObj)[`footnoteClass`](#footnoteClass)[`hintManagerObj`](#hintManagerObj)[`IFID`](#IFID)[`lastActorForUndo`](#lastActorForUndo)[`lastCommandForUndo`](#lastCommandForUndo)[`libMessageObj`](#libMessageObj)[`parserDebugMode`](#parserDebugMode)[`playerChar`](#playerChar)[`pointOfView`](#pointOfView)[`pointOfViewActor`](#pointOfViewActor)[`povStack`](#povStack)[`scoreObj`](#scoreObj)[`senseCache`](#senseCache)[`totalTurns`](#totalTurns)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`disableSenseCache`](#disableSenseCache)[`enableSenseCache`](#enableSenseCache)[`getCommandSwitch`](#getCommandSwitch)[`invalSenseCache`](#invalSenseCache)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actorVisualAmbientCache"></span>

`actorVisualAmbientCache`

[misc.t](../file/misc.t.html)\[[1643](../source/misc.t.html#1643)\]

<div class="desc">

Actor visual ambient cache - this keeps track of the ambient light level
at the given actor.

</div>

<span id="allSenses"></span>

`allSenses`

[misc.t](../file/misc.t.html)\[[1697](../source/misc.t.html#1697)\]

<div class="desc">

List of all of the senses. The library pre-initializer will load this
list with a reference to each instance of class Sense.

</div>

<span id="canTouchCache"></span>

`canTouchCache`

[misc.t](../file/misc.t.html)\[[1631](../source/misc.t.html#1631)\]

<div class="desc">

Can-Touch cache - we keep CanTouchInfo entries here, keyed by
\[from,to\]. This cache is the touch-path equivalent of the sense cache,
and is enabled and disabled

</div>

<span id="commandLineArgs"></span>

`commandLineArgs`

[misc.t](../file/misc.t.html)\[[1812](../source/misc.t.html#1812)\]

<div class="desc">

Command line arguments. The library sets this to a list of strings
containing the arguments passed to the program on the command line. This
list contains the command line arguments parsed according to the local
conventions for the operating system and C++ library. The standard
parsing procedure used by most systems is to break the line into tokens
delimited by space characters. Many systems also allow space characters
to be embedded in tokens by quoting the tokens. The first argument is
always the name of the .t3 file currently executing.

</div>

<span id="connectionCache"></span>

`connectionCache`

[misc.t](../file/misc.t.html)\[[1637](../source/misc.t.html#1637)\]

<div class="desc">

Connection list cache - this is a cache of all of the objects connected
by containment to a given object.

</div>

<span id="curAction"></span>

`curAction`

[misc.t](../file/misc.t.html)\[[1784](../source/misc.t.html#1784)\]

<div class="desc">

*no description available*

</div>

<span id="curActor"></span>

`curActor`

[misc.t](../file/misc.t.html)\[[1782](../source/misc.t.html#1782)\]

<div class="desc">

Current command information. We keep track of the current command's
actor and action here, as well as the verification result list and the
command report list.

</div>

<span id="curIssuingActor"></span>

`curIssuingActor`

[misc.t](../file/misc.t.html)\[[1783](../source/misc.t.html#1783)\]

<div class="desc">

*no description available*

</div>

<span id="curVerifyResults"></span>

`curVerifyResults`

[misc.t](../file/misc.t.html)\[[1785](../source/misc.t.html#1785)\]

<div class="desc">

*no description available*

</div>

<span id="exitListerObj"></span>

`exitListerObj`

[misc.t](../file/misc.t.html)\[[1788](../source/misc.t.html#1788)\]

<div class="desc">

the exitLister object, if included in the build

</div>

<span id="footnoteClass"></span>

`footnoteClass`

[misc.t](../file/misc.t.html)\[[1741](../source/misc.t.html#1741)\]

<div class="desc">

The global Footnote class object. We use a global for this, rather than
referencing Footnote directly, to allow the footnote module to be left
out entirely if the game doesn't make use of footnotes. The footnote
class should set this during pre-initialization.

</div>

<span id="hintManagerObj"></span>

`hintManagerObj`

[misc.t](../file/misc.t.html)\[[1791](../source/misc.t.html#1791)\]

<div class="desc">

the hint manager, if included in the build

</div>

<span id="IFID"></span>

`IFID`

[misc.t](../file/misc.t.html)\[[1799](../source/misc.t.html#1799)\]

<div class="desc">

The game's IFID, as defined in the game's main module ID object. If the
game has multiple IFIDs in the module list, this will store only the
first IFID in the list. NOTE: the library initializes this automatically
during preinit; don't set this manually.

</div>

<span id="lastActorForUndo"></span>

`lastActorForUndo`

[misc.t](../file/misc.t.html)\[[1775](../source/misc.t.html#1775)\]

<div class="desc">

Most recent target actor phrase; this goes with lastCommandForUndo. This
is nil if the last command did not specify an actor (i.e., was
implicitly for the player character), otherwise is the string the player
typed specifying a target actor.

</div>

<span id="lastCommandForUndo"></span>

`lastCommandForUndo`

[misc.t](../file/misc.t.html)\[[1766](../source/misc.t.html#1766)\]

<div class="desc">

Most recent command, for 'undo' purposes. This is the last command the
player character performed, or the last initial command a player
directed to an NPC.

Note that if the player directed a series of commands to an NPC with a
single command line, only the first command on such a command line is
retained here, because it is only the first such command that counts as
a player's turn in terms of the game clock. Subsequent commands are
executed by the NPC's on the NPC's own time, and do not count against
the PC's game clock time. The first command counts against the PC's
clock because of the time it takes the PC to give the command to the
NPC.

</div>

<span id="libMessageObj"></span>

`libMessageObj`

[misc.t](../file/misc.t.html)\[[1608](../source/misc.t.html#1608)\]

<div class="desc">

The current library messages object. This is the source object for
messages that don't logically relate to the actor carrying out the
comamand. It's mostly used for meta-command replies, and for text
fragments that are used to construct descriptions.

This message object isn't generally used for parser messages or action
replies - most of those come from the objects given by the current
actor's getParserMessageObj() or getActionMessageObj(), respectively.

By default, this is set to libMessages. The library never changes this
itself, but a game can change this if it wants to switch to a new set of
messages during a game. (If you don't need to change messages during a
game, but simply want to customize some of the default messages, you
don't need to set this variable - you can simply use 'modify
libMessages' instead. This variable is designed for cases where you want
to \*dynamically\* change the standard messages during the game.)

</div>

<span id="parserDebugMode"></span>

`parserDebugMode`

[misc.t](../file/misc.t.html)\[[1750](../source/misc.t.html#1750)\]

<div class="desc">

flag: the parser is in 'debug' mode, in which it displays the parse tree
for each command entered

</div>

<span id="playerChar"></span>

`playerChar`

[misc.t](../file/misc.t.html)\[[1702](../source/misc.t.html#1702)\]

<div class="desc">

The current player character

</div>

<span id="pointOfView"></span>

`pointOfView`

[misc.t](../file/misc.t.html)\[[1717](../source/misc.t.html#1717)\]

<div class="desc">

The current perspective object. This is \*usually\* the actor performing
the current command, but can be a different object when the actor is
viewing the location being described via an intermediary, such as
through a closed-circuit TV camera.

</div>

<span id="pointOfViewActor"></span>

`pointOfViewActor`

[misc.t](../file/misc.t.html)\[[1709](../source/misc.t.html#1709)\]

<div class="desc">

The current perspective actor. This is the actor who's performing the
action (LOOK AROUND, EXAMINE, SMELL, etc) that's generating the current
description.

</div>

<span id="povStack"></span>

`povStack`

[misc.t](../file/misc.t.html)\[[1724](../source/misc.t.html#1724)\]

<div class="desc">

The stack of point of view objects. The last element of the vector is
the most recent point of view after the current point of view.

</div>

<span id="scoreObj"></span>

`scoreObj`

[misc.t](../file/misc.t.html)\[[1732](../source/misc.t.html#1732)\]

<div class="desc">

The global score object. We use a global for this, rather than
referencing libScore directly, to allow the score module to be left out
entirely if the game doesn't make use of scoring. The score module
should set this during pre-initialization.

</div>

<span id="senseCache"></span>

`senseCache`

[misc.t](../file/misc.t.html)\[[1624](../source/misc.t.html#1624)\]

<div class="desc">

Sense cache - we keep SenseInfo lists here, keyed by \[pov,sense\]; we
normally discard the cached information at the start of each turn, and
disable caching entirely at the start of the "action" phase of each
turn. We leave caching disabled during each turn's action phase because
this is the phase where simulation state changes are typically made, and
hence it would be difficult to keep the cache coherent during this
phase.

When this is nil, it indicates that caching is disabled. We only allow
caching during certain phases of execution, when game state is not
conventionally altered, so that we don't have to do a lot of work to
keep the cache up to date.

</div>

<span id="totalTurns"></span>

`totalTurns`

[misc.t](../file/misc.t.html)\[[1744](../source/misc.t.html#1744)\]

<div class="desc">

the total number of turns so far

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="disableSenseCache"></span>

`disableSenseCache ( )`

[misc.t](../file/misc.t.html)\[[1662](../source/misc.t.html#1662)\]

<div class="desc">

disable the cache

</div>

<span id="enableSenseCache"></span>

`enableSenseCache ( )`

[misc.t](../file/misc.t.html)\[[1646](../source/misc.t.html#1646)\]

<div class="desc">

enable the cache, clearing any old cached information

</div>

<span id="getCommandSwitch"></span>

`getCommandSwitch (s)`

[misc.t](../file/misc.t.html)\[[1832](../source/misc.t.html#1832)\]

<div class="desc">

Retrieve a "switch" from the command line. Switches are options
specifies with the conventional Unix "-xxx" notation. This searches for
a command option that equals the given string or starts with the given
substring. If we find it, we return the part of the option after the
given substring - this is conventionally the value of the switch. For
example, the command line might look like this:

  
t3run mygame.t3 -name=MyGame -user=Bob

Searching for '-name=' would return 'MyGame', and searching for '-user='
would return' Bob'.

If the switch is found but has no value attached, the return value is an
empty string. If the switch isn't found at all, the return value is nil.

</div>

<span id="invalSenseCache"></span>

`invalSenseCache ( )`

[misc.t](../file/misc.t.html)\[[1680](../source/misc.t.html#1680)\]

<div class="desc">

Invalidate the sense cache. This can be called if something happens
during noun resolution or verification that causes any cached sense
information to become out of date. For example, if you have to create a
new game-world object during noun-phrase resolution, this should be
called to ensure that the new object's visibility is properly calculated
and incorporated into the cached information.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
