---
layout: docs
---
<span class="title">basicDistinguisher</span><span class="type">object</span>

[disambig.t](../file/disambig.t.html)\[[101](../source/disambig.t.html#101)\]

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



"Basic" Distinguisher. This distinguisher can tell two objects apart if
one or the other object is not marked as isEquivalent, OR if the two
objects don't have an identical superclass list. This distinguisher thus
can tell apart objects unless they're "basic equivalents," marked with
isEquivalent and having the same equivalence keys.

**`basicDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`basicDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`aName`](#aName) [`canDistinguish`](#canDistinguish) [`countName`](#countName) [`name`](#name) [`theName`](#theName)

Inherited from `Distinguisher` :  
[`matchName`](../object/Distinguisher.html#matchName) [`notePrompt`](../object/Distinguisher.html#notePrompt) [`objInScope`](../object/Distinguisher.html#objInScope)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="aName"></span>

`aName (obj)`

[en_us.t](../file/en_us.t.html)\[[3523](../source/en_us.t.html#3523)\]



*no description available*



<span id="canDistinguish"></span>

`canDistinguish (a, b)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[102](../source/disambig.t.html#102)\]



*no description available*



<span id="countName"></span>

`countName (obj, cnt)`

[en_us.t](../file/en_us.t.html)\[[3525](../source/en_us.t.html#3525)\]



*no description available*



<span id="name"></span>

`name (obj)`

[en_us.t](../file/en_us.t.html)\[[3522](../source/en_us.t.html#3522)\]



*no description available*



<span id="theName"></span>

`theName (obj)`

[en_us.t](../file/en_us.t.html)\[[3524](../source/en_us.t.html#3524)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


