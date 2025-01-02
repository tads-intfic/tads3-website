---
layout: docs
---
<span class="title">ownershipDistinguisher</span><span class="type">object</span>

[disambig.t](../file/disambig.t.html)\[[129](../source/disambig.t.html#129)\]

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



Ownership Distinguisher. This distinguisher can tell two objects apart
if they have different owners. "Unowned" objects are identified by their
immediate containers instead of their owners.

Note that while location \*can\* distinguish items with this
distinguisher, ownership takes priority: if an object has an owner, the
owner is the distinguishing feature. The reason location is a factor at
all is that we need something parallel to ownership for the purposes of
phrasing distinguishing descriptions of unowned objects. The
best-sounding phrasing, at least in English, is to refer to the unowned
objects by location.

**`ownershipDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ownershipDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`aName`](#aName)[`canDistinguish`](#canDistinguish)[`countName`](#countName)[`matchName`](#matchName)[`name`](#name)[`notePrompt`](#notePrompt)[`objInScope`](#objInScope)[`theName`](#theName)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="aName"></span>

`aName (obj)`

[en_us.t](../file/en_us.t.html)\[[3534](../source/en_us.t.html#3534)\]



*no description available*



<span id="canDistinguish"></span>

`canDistinguish (a, b)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[130](../source/disambig.t.html#130)\]



*no description available*



<span id="countName"></span>

`countName (obj, cnt)`

[en_us.t](../file/en_us.t.html)\[[3536](../source/en_us.t.html#3536)\]



*no description available*



<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[180](../source/disambig.t.html#180)\]



otherwise, use the inherited handling



<span id="name"></span>

`name (obj)`

[en_us.t](../file/en_us.t.html)\[[3533](../source/en_us.t.html#3533)\]



*no description available*



<span id="notePrompt"></span>

`notePrompt (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3539](../source/en_us.t.html#3539)\]



note that we're prompting based on this distinguisher



<span id="objInScope"></span>

`objInScope (obj, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[160](../source/disambig.t.html#160)\]



One or both objects are owned, so we can tell them apart if and only if
they have different owners.



<span id="theName"></span>

`theName (obj)`

[en_us.t](../file/en_us.t.html)\[[3535](../source/en_us.t.html#3535)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


