---
layout: docs
---
<span class="title">inputManager</span><span class="type">object</span>

[input.t](../file/input.t.html)\[[68](../source/input.t.html#68)\]

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

Keyboard input manager.

**`inputManager`**` :   `[`PostRestoreObject`](../object/PostRestoreObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`inputManager`**  
`         `[`PostRestoreObject`](../object/PostRestoreObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`inProgressDefObj`](#inProgressDefObj)`  `[`inputEventInProgress`](#inputEventInProgress)`  `[`inputLineInProgress`](#inputLineInProgress)`  `[`noInputTimeout`](#noInputTimeout)`  `

Inherited from `PostRestoreObject` :  
` `[`restoreCode`](../object/PostRestoreObject.html#restoreCode)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`cancelInputInProgress`](#cancelInputInProgress)`  `[`execute`](#execute)`  `[`getEvent`](#getEvent)`  `[`getEventOrKey`](#getEventOrKey)`  `[`getInputDialog`](#getInputDialog)`  `[`getInputFile`](#getInputFile)`  `[`getInputLine`](#getInputLine)`  `[`getInputLineExt`](#getInputLineExt)`  `[`getKey`](#getKey)`  `[`inputBegin`](#inputBegin)`  `[`inputEventBegin`](#inputEventBegin)`  `[`inputEventEnd`](#inputEventEnd)`  `[`inputLineBegin`](#inputLineBegin)`  `[`inputLineEnd`](#inputLineEnd)`  `[`pauseForMore`](#pauseForMore)`  `[`processRealTimeEvents`](#processRealTimeEvents)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="inProgressDefObj"></span>

`inProgressDefObj`

[input.t](../file/input.t.html)\[[761](../source/input.t.html#761)\]

<div class="desc">

the InputDef object for the input in progress

</div>

<span id="inputEventInProgress"></span>

`inputEventInProgress`

[input.t](../file/input.t.html)\[[764](../source/input.t.html#764)\]

<div class="desc">

flag: keystroke/event input is in progress

</div>

<span id="inputLineInProgress"></span>

`inputLineInProgress`

[input.t](../file/input.t.html)\[[758](../source/input.t.html#758)\]

<div class="desc">

Flag: command line input is in progress. If this is set, it means that
we interrupted command-line editing by a timeout, so we should not show
a prompt the next time we go back to the keyboard for input.

</div>

<span id="noInputTimeout"></span>

`noInputTimeout`

[input.t](../file/input.t.html)\[[783](../source/input.t.html#783)\]

<div class="desc">

Flag: inputLine does not support timeouts on the current platform. We
set this when we get an InEvtNoTimeout return code from
inputLineTimeout, so that we'll know not to try calling again with a
timeout. This applies to the current interpreter only, so we must ignore
any value restored from a previously saved game, since the game might
have been saved on a different platform.

Note that if this value is nil, it means only that we've never seen an
InEvtNoTimeout return code from inputLineEvent - it does NOT mean that
timeouts are supported locally.

We assume that the input functions are uniform in their treatment of
timeouts; that is, we assume that if inputLineTimeout supports timeout,
then so does inputEvent, and that if one doesn't support timeout, the
other won't either.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="cancelInputInProgress"></span>

`cancelInputInProgress (reset)`

[input.t](../file/input.t.html)\[[554](../source/input.t.html#554)\]

<div class="desc">

Cancel input in progress.

If 'reset' is true, we'll clear any input state saved from the
interrupted in-progress editing session; otherwise, we'll retain the
saved editing state for restoration on the next input.

This MUST be called before calling tadsSay(). Games should generally
never call tadsSay() directly (call the library function say() instead),
so in most cases authors will not need to worry about calling this on
output.

This MUST ALSO be called before performing any keyboard input. Callers
using inputManager methods for keyboard operations won't have to worry
about this, because the inputManager methods call this routine when
necessary.

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[input.t](../file/input.t.html)\[[727](../source/input.t.html#727)\]

<div class="desc">

receive post-restore notification

</div>

<span id="getEvent"></span>

`getEvent (allowRealTime, promptFunc)`

[input.t](../file/input.t.html)\[[413](../source/input.t.html#413)\]

<div class="desc">

Read an event, processing real-time events while waiting, if desired.
'allowRealTime' and 'promptFunc' work the same way they do with
getInputLine().

</div>

<span id="getEventOrKey"></span>

`getEventOrKey (allowRealTime, promptFunc, keyOnly)`

[input.t](../file/input.t.html)\[[429](../source/input.t.html#429)\]

<div class="desc">

Read an event or keystroke. 'allowRealTime' and 'promptFunc' work the
same way they do in getInputLine(). If 'keyOnly' is true, then we're
only interested in keystroke events, and we'll ignore any other events
entered.

Note that this routine is not generally called directly; callers should
usually call the convenience routines getKey() or getEvent(), as needed.

</div>

<span id="getInputDialog"></span>

`getInputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[input.t](../file/input.t.html)\[[366](../source/input.t.html#366)\]

<div class="desc">

Ask for input through a dialog. Freezes the real-time clock for the
duration of the dialog display. The arguments are the same as for the
built-in inputDialog() function.

</div>

<span id="getInputFile"></span>

`getInputFile (prompt, dialogType, fileType, flags)`

[input.t](../file/input.t.html)\[[338](../source/input.t.html#338)\]

<div class="desc">

Ask for an input file. Freezes the real-time event clock for the
duration of reading the event.

</div>

<span id="getInputLine"></span>

`getInputLine (allowRealTime, promptFunc)`

[input.t](../file/input.t.html)\[[90](../source/input.t.html#90)\]

<div class="desc">

Read a line of input from the keyboard.

If allowRealTime is true, we'll execute any real-time events that are
already due to run, and then we'll allow the input to be interrupted by
real-time events, if interrupted input is supported on the local
platform. Otherwise, we will not process any real-time events.

promptFunc is a callback function to invoke to display the prompt. This
is provided as a callback so that we can re-display the prompt as
necessary after real-time event interruptions. Note that if real-time
interruption is not to be allowed, the caller can simply display the
prompt before calling this routine rather than passing in a prompt
callback, if desired.

If we're in HTML mode, this will switch into the 'tads-input' font while
reading the line, so this routine should be used wherever possible
rather than calling inputLine() or inputLineTimeout() directly.

</div>

<span id="getInputLineExt"></span>

`getInputLineExt (defObj)`

[input.t](../file/input.t.html)\[[102](../source/input.t.html#102)\]

<div class="desc">

Read a line of input from the keyboard - extended interface, using the
InputDef object to define the input parameters. 'defObj' is an instance
of class InputDef, defining how we're to handle the input.

</div>

<span id="getKey"></span>

`getKey (allowRealTime, promptFunc)`

[input.t](../file/input.t.html)\[[394](../source/input.t.html#394)\]

<div class="desc">

Read a keystroke, processing real-time events while waiting, if desired.
'allowRealTime' and 'promptFunc' work the same way they do with
getInputLine().

</div>

<span id="inputBegin"></span>

`inputBegin (promptFunc)`

[input.t](../file/input.t.html)\[[707](../source/input.t.html#707)\]

<div class="desc">

Begin generic input. Cancels command report list capture, and shows the
prompt if given.

</div>

<span id="inputEventBegin"></span>

`inputEventBegin (promptFunc)`

[input.t](../file/input.t.html)\[[623](../source/input.t.html#623)\]

<div class="desc">

Begin reading key/event input. We'll cancel any report gatherer so that
prompt text shows immediately, and show the prompt if desired.

</div>

<span id="inputEventEnd"></span>

`inputEventEnd ( )`

[input.t](../file/input.t.html)\[[638](../source/input.t.html#638)\]

<div class="desc">

End keystroke/event input.

</div>

<span id="inputLineBegin"></span>

`inputLineBegin (defObj)`

[input.t](../file/input.t.html)\[[652](../source/input.t.html#652)\]

<div class="desc">

Begin command line editing. If we're in HTML mode, we'll show the
appropriate codes to establish the input font.

</div>

<span id="inputLineEnd"></span>

`inputLineEnd ( )`

[input.t](../file/input.t.html)\[[678](../source/input.t.html#678)\]

<div class="desc">

End command line editing. If we're in HTML mode, we'll show the
appropriate codes to close the input font.

</div>

<span id="pauseForMore"></span>

`pauseForMore (freezeRealTime)`

[input.t](../file/input.t.html)\[[282](../source/input.t.html#282)\]

<div class="desc">

Pause for a MORE prompt. If freezeRealTime is true, we'll stop the
real-time clock; otherwise we'll let it keep running. Even if we don't
freeze the clock, we won't actually process any real-time events while
waiting: the point of the MORE prompt is to allow the player to read and
acknowledge the on-screen display before showing anything new, so we
don't want to allow any output to result from real-time events that
occur while waiting for user input. If any real-time events come due
while we're waiting, we'll process them when we're done.

In order to ensure that the display makes sense to the user, we flush
any captured input in the transcript before pausing. We re-activate
transcript capture after the pause if it was active before. Note that in
some cases, this could affect the overall output for the command, since
some commands wait until the very end of the command to go back and
process the entire transcript for the command. Since we interrupt the
transcript, flushing any output that occurred before the pause, a
command that goes back over its entire output stream at the end of the
turn won't be able to see or modify any of the output that occurred
prior to the pause, since we will have flushed the output to that point.

</div>

<span id="processRealTimeEvents"></span>

`processRealTimeEvents (allowRealTime)`

[input.t](../file/input.t.html)\[[583](../source/input.t.html#583)\]

<div class="desc">

Process any real-time events that are ready to run, and return the
timeout until the next real-time event.

If allowRealTime is nil, we won't process real-time events at all; we'll
merely return nil for the timeout to indicate to the caller that any
user input interaction about to be attempted should wait indefinitely.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
