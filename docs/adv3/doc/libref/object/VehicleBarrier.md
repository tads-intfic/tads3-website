---
layout: docs
---
<span class="title">VehicleBarrier</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[7007](../source/travel.t.html#7007)\]

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

A VehicleBarrier is a TravelConnector that allows actors to travel, but
blocks vehicles. By default, we block all vehicles, but subclasses can
customize this so that we block only specific vehicles.

`class `**`VehicleBarrier`**` :   `[`TravelBarrier`](../object/TravelBarrier.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`VehicleBarrier`**  
`         `[`TravelBarrier`](../object/TravelBarrier.html)  
`                 object`  
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

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canTravelerPass`](#canTravelerPass)`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canTravelerPass"></span>

`canTravelerPass (traveler)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[7014](../source/travel.t.html#7014)\]

<div class="desc">

Determine if the given traveler can pass through this connector. By
default, we'll return nil for a Vehicle, true for anything else. This
can be overridden to allow specific vehicles to pass, or to filter on
any other criteria.

</div>

<span id="explainTravelBarrier"></span>

`explainTravelBarrier (traveler)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[7017](../source/travel.t.html#7017)\]

<div class="desc">

explain why we can't pass

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
