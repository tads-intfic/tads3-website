---
layout: docs
---
<span class="title">MultiFacetedFacet</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3279](../source/objects.t.html#3279)\]

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



The mix-in superclass for MultiFaceted facet instances.

IMPORTANT - the library adds this class to each instance object
\*automatically\*. Game code shouldn't ever have to use this class
directly.

`class `**`MultiFacetedFacet`**` :   `[`MultiInstanceInstance`](../object/MultiInstanceInstance.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MultiFacetedFacet`**  
[`MultiInstanceInstance`](../object/MultiInstanceInstance.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `MultiInstanceInstance` :  
[`isEquivalent`](../object/MultiInstanceInstance.html#isEquivalent) [`miParent`](../object/MultiInstanceInstance.html#miParent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getFacets`](#getFacets)

Inherited from `MultiInstanceInstance` :  
[`baseMoveInto`](../object/MultiInstanceInstance.html#baseMoveInto) [`construct`](../object/MultiInstanceInstance.html#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getFacets"></span>

`getFacets ( )`

[objects.t](../file/objects.t.html)\[[3286](../source/objects.t.html#3286)\]



Get our other facets for parsing purposes - our parent maintains the
list of all of its facets, so simply return that list. (Note that we'll
be in the list as well, but that's harmless, so don't bother removing
us.)
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


