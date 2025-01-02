---
layout: docs
---
<span class="title">exitLister</span><span class="type">object</span>

[exits.t](../file/exits.t.html)\[[35](../source/exits.t.html#35)\]

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

The main exits lister.

**`exitLister`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`exitLister`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`enableHyperlinks`](#enableHyperlinks)[`enableReminder`](#enableReminder)[`enableReminderAlways`](#enableReminderAlways)[`exitsOnOffExplained`](#exitsOnOffExplained)[`roomDescVerbose`](#roomDescVerbose)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`cannotGoShowExits`](#cannotGoShowExits)[`execute`](#execute)[`exitsOnOffCommand`](#exitsOnOffCommand)[`getRoomDescLister`](#getRoomDescLister)[`getStatuslineExitsHeight`](#getStatuslineExitsHeight)[`isReminderEnabled`](#isReminderEnabled)[`lookAroundShowExits`](#lookAroundShowExits)[`showExits`](#showExits)[`showExitsCommand`](#showExitsCommand)[`showExitsFrom`](#showExitsFrom)[`showExitsWithLister`](#showExitsWithLister)[`showStatuslineExits`](#showStatuslineExits)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="enableHyperlinks"></span>

`enableHyperlinks`

[exits.t](../file/exits.t.html)\[[96](../source/exits.t.html#96)\]

<div class="desc">

Flag: use hyperlinks in the directions mentioned in room description
exit lists, so that players can click on the direction name in the
listing to enter the direction command.

</div>

<span id="enableReminder"></span>

`enableReminder`

[exits.t](../file/exits.t.html)\[[75](../source/exits.t.html#75)\]

<div class="desc">

Flag: show automatic exit listings on attempts to move in directions
that don't allow travel. Enable this by default, since most players
appreciate having the exit list called out separately from the room
description (where any mention of exits might be buried in lots of other
text) in place of an unspecific "you can't go that way".

This is an author-configured setting; the library does not provide a
command to let the player control this setting.

</div>

<span id="enableReminderAlways"></span>

`enableReminderAlways`

[exits.t](../file/exits.t.html)\[[89](../source/exits.t.html#89)\]

<div class="desc">

Flag: enable the automatic exit reminder even when the room description
exit listing is enabled. When this is nil, we will NOT show a reminder
with "can't go that way" messages when the room description exit list is
enabled - this is the default, because it can be a little much to have
the list of exits shown so frequently. Some authors might prefer to show
the reminder unconditionally, though, so this option is offered.

This is an author-configured setting; the library does not provide a
command to let the player control this setting.

</div>

<span id="exitsOnOffExplained"></span>

`exitsOnOffExplained`

[exits.t](../file/exits.t.html)\[[99](../source/exits.t.html#99)\]

<div class="desc">

flag: we've explained how the exits on/off command works

</div>

<span id="roomDescVerbose"></span>

`roomDescVerbose`

[exits.t](../file/exits.t.html)\[[62](../source/exits.t.html#62)\]

<div class="desc">

Flag: use "verbose" listing style for exit lists in room descriptions.
When this is set to true, we'll show a sentence-style list of exits
("Obvious exits lead east to the living room, south, and up."). When
this is set to nil, we'll use a terse style, enclosing the message in
the default system message's brackets ("\[Obvious exits: East, West\]").

Verbose-style room descriptions tend to fit well with a room
description's prose, but at the expense of looking redundant with the
exit list that's usually built into each room's custom descriptive text
to begin with. Some authors prefer the terse style precisely because it
doesn't look like more prose description, but looks like a separate bit
of information being offered.

This is an author-configured setting; the library does not provide a
command to let the player control this setting.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="cannotGoShowExits"></span>

`cannotGoShowExits (actor, loc)`

[exits.t](../file/exits.t.html)\[[231](../source/exits.t.html#231)\]

<div class="desc">

show exits as part of a "cannot go that way" error

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[exits.t](../file/exits.t.html)\[[37](../source/exits.t.html#37)\]

<div class="desc">

preinitialization

</div>

<span id="exitsOnOffCommand"></span>

`exitsOnOffCommand (stat, look)`

[exits.t](../file/exits.t.html)\[[165](../source/exits.t.html#165)\]

<div class="desc">

Perform an EXITS ON/OFF/STATUS/LOOK command. 'stat' indicates whether
we're turning on (true) or off (nil) the statusline exit listing; 'look'
indicates whether we're turning the room description listing on or off.

</div>

<span id="getRoomDescLister"></span>

`getRoomDescLister ( )`

[exits.t](../file/exits.t.html)\[[120](../source/exits.t.html#120)\]

<div class="desc">

Get the exit lister we use for room descriptions.

</div>

<span id="getStatuslineExitsHeight"></span>

`getStatuslineExitsHeight ( )`

[exits.t](../file/exits.t.html)\[[209](../source/exits.t.html#209)\]

<div class="desc">

Calculate the contribution of the exits list to the height of the status
line, in lines of text. If we're not configured to display the exits
list in the status line, then the contribution is zero; otherwise, we'll
estimate how much space we need to display the exit list.

</div>

<span id="isReminderEnabled"></span>

`isReminderEnabled ( )`

[exits.t](../file/exits.t.html)\[[107](../source/exits.t.html#107)\]

<div class="desc">

Determine if the "reminder" is enabled. The reminder is the list of
exits we show along with a "can't go that way" message, to reminder the
player of the valid exits when an invalid one is attempted.

</div>

<span id="lookAroundShowExits"></span>

`lookAroundShowExits (actor, loc, illum)`

[exits.t](../file/exits.t.html)\[[223](../source/exits.t.html#223)\]

<div class="desc">

show exits as part of a room description

</div>

<span id="showExits"></span>

`showExits (actor)`

[exits.t](../file/exits.t.html)\[[185](../source/exits.t.html#185)\]

<div class="desc">

show the list of exits from an actor's current location

</div>

<span id="showExitsCommand"></span>

`showExitsCommand ( )`

[exits.t](../file/exits.t.html)\[[129](../source/exits.t.html#129)\]

<div class="desc">

perform the "exits" command to show exits on explicit request

</div>

<span id="showExitsFrom"></span>

`showExitsFrom (actor, loc)`

[exits.t](../file/exits.t.html)\[[240](../source/exits.t.html#240)\]

<div class="desc">

show the list of exits from a given location for a given actor

</div>

<span id="showExitsWithLister"></span>

`showExitsWithLister (actor, loc, lister, locIsLit)`

[exits.t](../file/exits.t.html)\[[265](../source/exits.t.html#265)\]

<div class="desc">

Show the list of exits using a specific lister.

'actor' is the actor for whom the display is being generated. 'loc' is
the location whose exit list is to be shown; this need not be the same
as the actor's current location. 'lister' is the Lister object that will
show the list of DestInfo objects that we create to represent the exit
list.

'locIsLit' indicates whether or not the ambient illumination, for the
actor's visual senses, is sufficient that the actor would be able to see
if the actor were in the new location. We take this as a parameter so
that we don't have to re-compute the information if the caller has
already computed it for other reasons (such as showing a room
description). If the caller hasn't otherwise computed the value, it can
be easily computed as loc.wouldBeLitFor(actor).

</div>

<span id="showStatuslineExits"></span>

`showStatuslineExits ( )`

[exits.t](../file/exits.t.html)\[[192](../source/exits.t.html#192)\]

<div class="desc">

show an exit list display in the status line, if desired

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
