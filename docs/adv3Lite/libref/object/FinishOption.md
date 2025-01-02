---
layout: docs
---
<span class="title">FinishOption</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1058](../source/misc.t.html#1058)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Finish Option class. This is the base class for the abstract objects
representing options offered by finishGame.

`class `**`FinishOption`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FinishOption`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`finishOptionAmusing`](../object/finishOptionAmusing.html)`  `[`finishOptionCredits`](../object/finishOptionCredits.html)`  `[`finishOptionFullScore`](../object/finishOptionFullScore.html)`  `[`finishOptionQuit`](../object/finishOptionQuit.html)`  `[`finishOptionRestart`](../object/finishOptionRestart.html)`  `[`finishOptionRestore`](../object/finishOptionRestore.html)`  `[`finishOptionScore`](../object/finishOptionScore.html)`  `[`finishOptionUndo`](../object/finishOptionUndo.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`desc`](#desc)`  `[`listed`](#listed)`  `[`responseChar`](#responseChar)`  `[`responseKeyword`](#responseKeyword)`  `[`showScoreInFinish`](#showScoreInFinish)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`doOption`](#doOption)`  `[`responseMatches`](#responseMatches)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="desc"></span>

`desc`

[misc.t](../file/misc.t.html)\[[1066](../source/misc.t.html#1066)\]

<div class="desc">

The description, as displayed in the list of options. For the default
English messages, this is expected to be a verb phrase in infinitive
form, and should show the keyword accepted as a response in all
capitals: "RESTART", "see some AMUSING things to do", "show CREDITS".

</div>

<span id="listed"></span>

`listed`

[misc.t](../file/misc.t.html)\[[1077](../source/misc.t.html#1077)\]

<div class="desc">

By default, the item is listed. If you want to create an invisible
option that's accepted but which isn't listed in the prompt, just set
this to nil. Invisible options are sometimes useful when the output of
one option mentions another option; for example, the CREDITS message
might mention a LICENSE command for displaying the license, so you want
to make that command available without cluttering the prompt with it.

</div>

<span id="responseChar"></span>

`responseChar`

[misc.t](../file/misc.t.html)\[[1087](../source/misc.t.html#1087)\]

<div class="desc">

a single character we accept as an alternative to our full response
keyword, or nil if we don't accept a single-character response

</div>

<span id="responseKeyword"></span>

`responseKeyword`

[misc.t](../file/misc.t.html)\[[1080](../source/misc.t.html#1080)\]

<div class="desc">

our response keyword

</div>

<span id="showScoreInFinish"></span>

`showScoreInFinish`

[misc.t](../file/misc.t.html)\[[1130](../source/misc.t.html#1130)\]

<div class="desc">

Flag: show the score with the end-of-game announcement. If any option in
the list of finishing options has this flag set, we'll show the score
using the same message that the SCORE command uses.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doOption"></span>

`doOption ( )`

[misc.t](../file/misc.t.html)\[[1118](../source/misc.t.html#1118)\]

<div class="desc">

Carry out the option. This is called when the player enters a response
that matches this option. This routine must perform the action of the
option, then return true to indicate that we should ask for another
option, or nil to indicate that the finishGame() routine should simply
return.

</div>

<span id="responseMatches"></span>

`responseMatches (response)`

[misc.t](../file/misc.t.html)\[[1097](../source/misc.t.html#1097)\]

<div class="desc">

Match a response string to this option. Returns true if the string
matches our response, nil otherwise. By default, we'll return true if
the string exactly matches responseKeyword or exactly matches our
responseChar (if that's non-nil), but this can be overridden to match
other strings if desired. By default, we'll match the response without
regard to case.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
