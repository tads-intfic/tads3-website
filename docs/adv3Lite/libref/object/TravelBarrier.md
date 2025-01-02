---
layout: docs
---
<span class="title">TravelBarrier</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1630](../source/travel.t.html#1630)\]

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

A TravelBarrier is an object that can optionally be associated with one
or more TravelConnectors to define additional conditional (or even
unconditional) barriers preventing travel.

`class `**`TravelBarrier`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TravelBarrier`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`canTravelerPass`](#canTravelerPass)[`checkTravelBarrier`](#checkTravelBarrier)[`explainTravelBarrier`](#explainTravelBarrier)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canTravelerPass"></span>

`canTravelerPass (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1638](../source/travel.t.html#1638)\]

<div class="desc">

This method should return true to permit the traveler to travel via
connector and nil to prohibit travel. By default we simply allow travel
but particular instances will need to override this method to specify
the conditions under which travel is or is not permitted.

</div>

<span id="checkTravelBarrier"></span>

`checkTravelBarrier (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1655](../source/travel.t.html#1655)\]

<div class="desc">

Check whether traveler can pass through this connector. If it can,
return true; otherise explain why travel is disallowed and return nil.

</div>

<span id="explainTravelBarrier"></span>

`explainTravelBarrier (traveler, connector)`

[travel.t](../file/travel.t.html)\[[1647](../source/travel.t.html#1647)\]

<div class="desc">

Display some text explaining why traveler is not permitted to travel via
connector when canTravelerPass() returns nil.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
