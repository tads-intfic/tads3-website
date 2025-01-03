---
layout: docs
---
<span class="title">locationDistinguisher</span><span class="type">object</span>

[disambig.t](../file/disambig.t.html)\[[218](../source/disambig.t.html#218)\]

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



Location Distinguisher. This distinguisher identifies objects purely by
their immediate locations.

**`locationDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`locationDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`aName`](#aName) [`canDistinguish`](#canDistinguish) [`countName`](#countName) [`matchName`](#matchName) [`name`](#name) [`notePrompt`](#notePrompt) [`objInScope`](#objInScope) [`theName`](#theName)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="aName"></span>

`aName (obj)`

[en_us.t](../file/en_us.t.html)\[[3556](../source/en_us.t.html#3556)\]



*no description available*



<span id="canDistinguish"></span>

`canDistinguish (a, b)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[219](../source/disambig.t.html#219)\]



*no description available*



<span id="countName"></span>

`countName (obj, cnt)`

[en_us.t](../file/en_us.t.html)\[[3558](../source/en_us.t.html#3558)\]



*no description available*



<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[235](../source/disambig.t.html#235)\]



otherwise, use the inherited handling



<span id="name"></span>

`name (obj)`

[en_us.t](../file/en_us.t.html)\[[3555](../source/en_us.t.html#3555)\]



*no description available*



<span id="notePrompt"></span>

`notePrompt (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3561](../source/en_us.t.html#3561)\]



note that we're prompting based on this distinguisher



<span id="objInScope"></span>

`objInScope (obj, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[225](../source/disambig.t.html#225)\]



we tell the objects apart by their immediate locations



<span id="theName"></span>

`theName (obj)`

[en_us.t](../file/en_us.t.html)\[[3557](../source/en_us.t.html#3557)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


