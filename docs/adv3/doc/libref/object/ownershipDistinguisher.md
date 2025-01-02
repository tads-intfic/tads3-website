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

<div class="fdesc">

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ownershipDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`aName`](#aName)[`canDistinguish`](#canDistinguish)[`countName`](#countName)[`matchName`](#matchName)[`name`](#name)[`notePrompt`](#notePrompt)[`objInScope`](#objInScope)[`theName`](#theName)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="aName"></span>

`aName (obj)`

[en_us.t](../file/en_us.t.html)\[[3534](../source/en_us.t.html#3534)\]

<div class="desc">

*no description available*

</div>

<span id="canDistinguish"></span>

`canDistinguish (a, b)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[130](../source/disambig.t.html#130)\]

<div class="desc">

*no description available*

</div>

<span id="countName"></span>

`countName (obj, cnt)`

[en_us.t](../file/en_us.t.html)\[[3536](../source/en_us.t.html#3536)\]

<div class="desc">

*no description available*

</div>

<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[180](../source/disambig.t.html#180)\]

<div class="desc">

otherwise, use the inherited handling

</div>

<span id="name"></span>

`name (obj)`

[en_us.t](../file/en_us.t.html)\[[3533](../source/en_us.t.html#3533)\]

<div class="desc">

*no description available*

</div>

<span id="notePrompt"></span>

`notePrompt (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3539](../source/en_us.t.html#3539)\]

<div class="desc">

note that we're prompting based on this distinguisher

</div>

<span id="objInScope"></span>

`objInScope (obj, matchList, fullMatchList)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[160](../source/disambig.t.html#160)\]

<div class="desc">

One or both objects are owned, so we can tell them apart if and only if
they have different owners.

</div>

<span id="theName"></span>

`theName (obj)`

[en_us.t](../file/en_us.t.html)\[[3535](../source/en_us.t.html#3535)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
