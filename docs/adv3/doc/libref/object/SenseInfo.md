---
layout: docs
---
<span class="title">SenseInfo</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[31](../source/thing.t.html#31)\]

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



Sense Information entry. Thing.senseInfoTable() returns a list of these
objects to provide full sensory detail on the objects within range of a
sense.

`class `**`SenseInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SenseInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`ambient`](#ambient) [`obj`](#obj) [`obstructor`](#obstructor) [`trans`](#trans)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`compareTransTo`](#compareTransTo) [`construct`](#construct) [`selectMoreTrans`](#selectMoreTrans)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="ambient"></span>

`ambient`

[thing.t](../file/thing.t.html)\[[60](../source/thing.t.html#60)\]



the ambient sense energy level at this object



<span id="obj"></span>

`obj`

[thing.t](../file/thing.t.html)\[[51](../source/thing.t.html#51)\]



the object being sensed



<span id="obstructor"></span>

`obstructor`

[thing.t](../file/thing.t.html)\[[57](../source/thing.t.html#57)\]



the obstructor that introduces a non-transparent value of trans



<span id="trans"></span>

`trans`

[thing.t](../file/thing.t.html)\[[54](../source/thing.t.html#54)\]



the transparency from the point of view to this object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="compareTransTo"></span>

`compareTransTo (other)`

[thing.t](../file/thing.t.html)\[[68](../source/thing.t.html#68)\]



compare this SenseInfo object's transparency to the other one; returns a
number greater than zero if 'self' is more transparent, zero if they're
equally transparent, or a negative number if 'self' is less transparent



<span id="construct"></span>

`construct (obj, trans, obstructor, ambient)`

[thing.t](../file/thing.t.html)\[[32](../source/thing.t.html#32)\]



*no description available*



<span id="selectMoreTrans"></span>

`selectMoreTrans (a, b)`

[thing.t](../file/thing.t.html)\[[76](../source/thing.t.html#76)\]



Return the more transparent of two SenseInfo objects. Either argument
can be nil, in which case we'll return the non-nil one; if both are nil,
we'll return nil. If they're equal, we'll return the first one.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


