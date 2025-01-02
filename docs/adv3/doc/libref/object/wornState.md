---
layout: docs
---
<span class="title">wornState</span><span class="type">object</span>

[en_us.t](../file/en_us.t.html)\[[3628](../source/en_us.t.html#3628)\]

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

"worn"

**`wornState`**` :   `[`ThingState`](../object/ThingState.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`wornState`**  
[`ThingState`](../object/ThingState.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `ThingState` :  
[`listingOrder`](../object/ThingState.html#listingOrder)[`listName_`](../object/ThingState.html#listName_)[`stateTokens`](../object/ThingState.html#stateTokens)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`wornName`](#wornName)

Inherited from `ThingState` :  
[`findStateToken`](../object/ThingState.html#findStateToken)[`inventoryName`](../object/ThingState.html#inventoryName)[`listName`](../object/ThingState.html#listName)[`matchName`](../object/ThingState.html#matchName)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="wornName"></span>

`wornName (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3635](../source/en_us.t.html#3635)\]

<div class="desc">

In listings of worn items, don't bother mentioning our 'worn' status, as
the entire list consists of items being worn - it would be redundant to
point out that the items in a list of items being worn are being worn.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
