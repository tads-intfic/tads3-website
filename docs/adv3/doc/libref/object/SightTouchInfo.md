---
layout: docs
---
<span class="title">SightTouchInfo</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[1016](../source/thing.t.html#1016)\]

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

A small data structure class recording SenseInfo objects for sight and
touch. We use this to pick the best facet from a list of facets.

`class `**`SightTouchInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SightTouchInfo`**  
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

[`obj_`](#obj_)[`touchInfo`](#touchInfo)[`visInfo`](#visInfo)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`selectBetter`](#selectBetter)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="obj_"></span>

`obj_`

[thing.t](../file/thing.t.html)\[[1030](../source/thing.t.html#1030)\]

<div class="desc">

the object we're associated with

</div>

<span id="touchInfo"></span>

`touchInfo`

[thing.t](../file/thing.t.html)\[[1034](../source/thing.t.html#1034)\]

<div class="desc">

*no description available*

</div>

<span id="visInfo"></span>

`visInfo`

[thing.t](../file/thing.t.html)\[[1033](../source/thing.t.html#1033)\]

<div class="desc">

our SenseInfo objects for sight and touch

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (actor, obj)`

[thing.t](../file/thing.t.html)\[[1017](../source/thing.t.html#1017)\]

<div class="desc">

*no description available*

</div>

<span id="selectBetter"></span>

`selectBetter (a, b)`

[thing.t](../file/thing.t.html)\[[1042](../source/thing.t.html#1042)\]

<div class="desc">

Class method: select the "better" of two SightTouchInfo's. Returns the
one with the more transparent visual status, or, visual transparencies
being equal, the one with the more transparent touch status.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
