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

<div class="fdesc">

The mix-in superclass for MultiFaceted facet instances.

IMPORTANT - the library adds this class to each instance object
\*automatically\*. Game code shouldn't ever have to use this class
directly.

`class `**`MultiFacetedFacet`**` :   `[`MultiInstanceInstance`](../object/MultiInstanceInstance.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MultiFacetedFacet`**  
[`MultiInstanceInstance`](../object/MultiInstanceInstance.html)  
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



Inherited from `MultiInstanceInstance` :  
[`isEquivalent`](../object/MultiInstanceInstance.html#isEquivalent)[`miParent`](../object/MultiInstanceInstance.html#miParent)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`getFacets`](#getFacets)

Inherited from `MultiInstanceInstance` :  
[`baseMoveInto`](../object/MultiInstanceInstance.html#baseMoveInto)[`construct`](../object/MultiInstanceInstance.html#construct)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getFacets"></span>

`getFacets ( )`

[objects.t](../file/objects.t.html)\[[3286](../source/objects.t.html#3286)\]

<div class="desc">

Get our other facets for parsing purposes - our parent maintains the
list of all of its facets, so simply return that list. (Note that we'll
be in the list as well, but that's harmless, so don't bother removing
us.)

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
