---
layout: docs
---
<span class="title">finishOptionScore</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[2287](../source/misc.t.html#2287)\]

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

[`isListed`](#isListed)[`showScoreInFinish`](#showScoreInFinish)

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

<span id="isListed"></span>

`isListed`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2292](../source/misc.t.html#2292)\]

<div class="desc">

this is not a listed option

</div>

<span id="showScoreInFinish"></span>

`showScoreInFinish`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2289](../source/misc.t.html#2289)\]

<div class="desc">

show the score in the end-of-game announcement

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doOption"></span>

`doOption ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2295](../source/misc.t.html#2295)\]

<div class="desc">

this option isn't selectable, so it has no effect

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
