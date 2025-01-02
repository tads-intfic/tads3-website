---
layout: docs
---
<span class="title">thing.t</span><span class="type">file</span>

[source file](../source/thing.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library - Thing

This module defines Thing, the base class for physical objects in the
simulation. We also define some utility classes that Thing uses
internally.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`BagAffinityInfo`](../object/BagAffinityInfo.html)[`CanTouchInfo`](../object/CanTouchInfo.html)[`CheckStatus`](../object/CheckStatus.html)[`CheckStatusFailure`](../object/CheckStatusFailure.html)[`DropType`](../object/DropType.html)[`DropTypeThrow`](../object/DropTypeThrow.html)[`EquivalentStateInfo`](../object/EquivalentStateInfo.html)[`SenseInfo`](../object/SenseInfo.html)[`SightTouchInfo`](../object/SightTouchInfo.html)[`Thing`](../object/Thing.html)[`ThingState`](../object/ThingState.html)[`VocabObject`](../object/VocabObject.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`checkStatusSuccess`](../object/checkStatusSuccess.html)[`dropTypeDrop`](../object/dropTypeDrop.html)[`senseTmp`](../object/senseTmp.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`findBestFacet`](#findBestFacet)[`senseInfoTableSubset`](#senseInfoTableSubset)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="findBestFacet"></span>

`findBestFacet (actor, lst)`

[thing.t](../file/thing.t.html)\[[986](../source/thing.t.html#986)\]



Find the best facet from the given list of facets, from the perspective
of the given actor. We'll find the facet that has the best visibility,
or, visibilities being equal, the best touchability.



<span id="senseInfoTableSubset"></span>

`senseInfoTableSubset (senseTab, func)`

[thing.t](../file/thing.t.html)\[[124](../source/thing.t.html#124)\]



Given a sense information table (a LookupTable returned from
Thing.senseInfoTable()), return a vector of only those objects in the
table that match the given criteria.

'func' is a function that takes two arguments, func(obj, info), where
'obj' is a simulation object and 'info' is the corresponding SenseInfo
object. This function is invoked for each object in the sense info
table; if 'func' returns true, then 'obj' is part of the list that we
return.

The return value is a simple vector of game objects. (Note that
SenseInfo objects are not returned - just the simulation objects.)





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


