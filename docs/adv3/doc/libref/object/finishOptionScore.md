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



Option to show the score in finishGame. This doesn't create a listed
option in the set of offered options, but rather is simply a flag to
finishGame() that the score should be announced along with the
end-of-game announcement message.

**`finishOptionScore`**` :   `[`FinishOption`](../object/FinishOption.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`finishOptionScore`**  
[`FinishOption`](../object/FinishOption.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isListed`](#isListed)[`showScoreInFinish`](#showScoreInFinish)

Inherited from `FinishOption` :  
[`desc`](../object/FinishOption.html#desc)[`responseChar`](../object/FinishOption.html#responseChar)[`responseKeyword`](../object/FinishOption.html#responseKeyword)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doOption`](#doOption)

Inherited from `FinishOption` :  
[`responseMatches`](../object/FinishOption.html#responseMatches)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isListed"></span>

`isListed`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2292](../source/misc.t.html#2292)\]



this is not a listed option



<span id="showScoreInFinish"></span>

`showScoreInFinish`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2289](../source/misc.t.html#2289)\]



show the score in the end-of-game announcement



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doOption"></span>

`doOption ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2295](../source/misc.t.html#2295)\]



this option isn't selectable, so it has no effect





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


