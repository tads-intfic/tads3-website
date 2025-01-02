---
layout: docs
---
<span class="title">TravelBarrier</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1658](../source/travel.t.html#1658)\]

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

A TravelBarrier can be attached to a TravelConnector, via the
travelBarrier property, to form a conditional barrier to travel.

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

**`TravelBarrier`**  
`         `[`PushTravelBarrier`](../object/PushTravelBarrier.html)  
`         `[`VehicleBarrier`](../object/VehicleBarrier.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canTravelerPass`](#canTravelerPass)`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canTravelerPass"></span>

`canTravelerPass (traveler)`

[travel.t](../file/travel.t.html)\[[1664](../source/travel.t.html#1664)\]

<div class="desc">

Determine if this barrier blocks the given traveler. By default, we
don't block anyone. This doesn't make us much of a barrier, so
subclasses should override this with a more specific condition.

</div>

<span id="explainTravelBarrier"></span>

`explainTravelBarrier (traveler)`

[travel.t](../file/travel.t.html)\[[1672](../source/travel.t.html#1672)\]

<div class="desc">

Explain why travel isn't allowed. This should generate an appropriate
failure report explaining the problem. This is invoked when travel is
attempted and canTravelerPass returns nil. Subclasses must override
this.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
