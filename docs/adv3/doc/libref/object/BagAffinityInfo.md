---
layout: docs
---
<span class="title">BagAffinityInfo</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[373](../source/thing.t.html#373)\]

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



Bag Affinity Info - this class keeps track of the affinity of a bag of
holding for an object it might contain. We use this class in building
bag affinity lists.

`class `**`BagAffinityInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BagAffinityInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`aff_`](#aff_) [`bag_`](#bag_) [`bulk_`](#bulk_) [`obj_`](#obj_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`compareAffinityTo`](#compareAffinityTo) [`construct`](#construct) [`removeMostRecent`](#removeMostRecent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="aff_"></span>

`aff_`

[thing.t](../file/thing.t.html)\[[450](../source/thing.t.html#450)\]



affinity of the bag for the object



<span id="bag_"></span>

`bag_`

[thing.t](../file/thing.t.html)\[[447](../source/thing.t.html#447)\]



the bag that wants to contain the object



<span id="bulk_"></span>

`bulk_`

[thing.t](../file/thing.t.html)\[[444](../source/thing.t.html#444)\]



the object's bulk



<span id="obj_"></span>

`obj_`

[thing.t](../file/thing.t.html)\[[441](../source/thing.t.html#441)\]



the object the bag wants to contain



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="compareAffinityTo"></span>

`compareAffinityTo (other)`

[thing.t](../file/thing.t.html)\[[389](../source/thing.t.html#389)\]



Compare this item to another item, for affinity ranking purposes.
Returns positive if I should rank higher than the other item, zero if we
have equal ranking, negative if I rank lower than the other item.



<span id="construct"></span>

`construct (obj, bulk, aff, bag)`

[thing.t](../file/thing.t.html)\[[374](../source/thing.t.html#374)\]



*no description available*



<span id="removeMostRecent"></span>

`removeMostRecent (vec)`

[thing.t](../file/thing.t.html)\[[421](../source/thing.t.html#421)\]



given a vector of affinities, remove the most recent item (as indicated
by holdingIndex) and return the BagAffinityInfo object





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


