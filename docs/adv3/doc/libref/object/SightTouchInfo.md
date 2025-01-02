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



A small data structure class recording SenseInfo objects for sight and
touch. We use this to pick the best facet from a list of facets.

`class `**`SightTouchInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SightTouchInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`obj_`](#obj_)[`touchInfo`](#touchInfo)[`visInfo`](#visInfo)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`selectBetter`](#selectBetter)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="obj_"></span>

`obj_`

[thing.t](../file/thing.t.html)\[[1030](../source/thing.t.html#1030)\]



the object we're associated with



<span id="touchInfo"></span>

`touchInfo`

[thing.t](../file/thing.t.html)\[[1034](../source/thing.t.html#1034)\]



*no description available*



<span id="visInfo"></span>

`visInfo`

[thing.t](../file/thing.t.html)\[[1033](../source/thing.t.html#1033)\]



our SenseInfo objects for sight and touch



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (actor, obj)`

[thing.t](../file/thing.t.html)\[[1017](../source/thing.t.html#1017)\]



*no description available*



<span id="selectBetter"></span>

`selectBetter (a, b)`

[thing.t](../file/thing.t.html)\[[1042](../source/thing.t.html#1042)\]



Class method: select the "better" of two SightTouchInfo's. Returns the
one with the more transparent visual status, or, visual transparencies
being equal, the one with the more transparent touch status.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


