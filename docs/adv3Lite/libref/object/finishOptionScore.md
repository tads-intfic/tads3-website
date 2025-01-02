---
layout: docs
---
<span class="title">finishOptionScore</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[1284](../source/misc.t.html#1284)\]

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

Option to show the score in finishGame. This doesn't create a listed
option in the set of offered options, but rather is simply a flag to
finishGame() that the score should be announced along with the
end-of-game announcement message.

**`finishOptionScore`**` :   `[`FinishOption`](../object/FinishOption.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`finishOptionScore`**  
[`FinishOption`](../object/FinishOption.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`listed`](#listed)[`listOrder`](#listOrder)[`showScoreInFinish`](#showScoreInFinish)

Inherited from `FinishOption` :  
[`desc`](../object/FinishOption.html#desc)[`responseChar`](../object/FinishOption.html#responseChar)[`responseKeyword`](../object/FinishOption.html#responseKeyword)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`doOption`](#doOption)

Inherited from `FinishOption` :  
[`responseMatches`](../object/FinishOption.html#responseMatches)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="listed"></span>

`listed`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1289](../source/misc.t.html#1289)\]

<div class="desc">

this is not a listed option

</div>

<span id="listOrder"></span>

`listOrder`

[misc.t](../file/misc.t.html)\[[1294](../source/misc.t.html#1294)\]

<div class="desc">

*no description available*

</div>

<span id="showScoreInFinish"></span>

`showScoreInFinish`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1286](../source/misc.t.html#1286)\]

<div class="desc">

show the score in the end-of-game announcement

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doOption"></span>

`doOption ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1292](../source/misc.t.html#1292)\]

<div class="desc">

this option isn't selectable, so it has no effect

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
