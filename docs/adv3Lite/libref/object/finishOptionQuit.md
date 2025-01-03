---
layout: docs
---
<span class="title">finishOptionQuit</span><span class="type">object</span>

[misc.t](../file/misc.t.html)\[[1137](../source/misc.t.html#1137)\]

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



QUIT option for finishGame. The language-specific code should modify
this to specify the description and response keywords.

**`finishOptionQuit`**` :   `[`FinishOption`](../object/FinishOption.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`finishOptionQuit`**  
[`FinishOption`](../object/FinishOption.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`desc`](#desc) [`listOrder`](#listOrder) [`responseChar`](#responseChar) [`responseKeyword`](#responseKeyword)

Inherited from `FinishOption` :  
[`listed`](../object/FinishOption.html#listed) [`showScoreInFinish`](../object/FinishOption.html#showScoreInFinish)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doOption`](#doOption)

Inherited from `FinishOption` :  
[`responseMatches`](../object/FinishOption.html#responseMatches)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="desc"></span>

`desc`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3691](../source/english.t.html#3691)\]



*no description available*



<span id="listOrder"></span>

`listOrder`

[misc.t](../file/misc.t.html)\[[1146](../source/misc.t.html#1146)\]



carry out the Quit action - this will signal a QuittingException, so
this call will never return



<span id="responseChar"></span>

`responseChar`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3693](../source/english.t.html#3693)\]



*no description available*



<span id="responseKeyword"></span>

`responseKeyword`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3692](../source/english.t.html#3692)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doOption"></span>

`doOption ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1138](../source/misc.t.html#1138)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


