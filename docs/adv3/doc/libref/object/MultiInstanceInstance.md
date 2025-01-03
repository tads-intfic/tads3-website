---
layout: docs
---
<span class="title">MultiInstanceInstance</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3173](../source/objects.t.html#3173)\]

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



An instance of a MultiInstance object. This is a mix-in class that we
add (using mutiple inheritance) to each instance. This overrides the
location manipulation methods, to ensure that we keep the MultiInstance
parent object in sync with any changes made directly to the instance
objects.

IMPORTANT - the library adds this class to each instance object
\*automatically\*. Game code shouldn't ever have to use this class
directly.

`class `**`MultiInstanceInstance`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MultiInstanceInstance`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MultiInstanceInstance`**  
[`MultiFacetedFacet`](../object/MultiFacetedFacet.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isEquivalent`](#isEquivalent) [`miParent`](#miParent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`baseMoveInto`](#baseMoveInto) [`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isEquivalent"></span>

`isEquivalent`

[objects.t](../file/objects.t.html)\[[3227](../source/objects.t.html#3227)\]



All instances of a given MultiInstance are equivalent to one another,
for parsing purposes.



<span id="miParent"></span>

`miParent`

[objects.t](../file/objects.t.html)\[[3230](../source/objects.t.html#3230)\]



our MultiInstance parent



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="baseMoveInto"></span>

`baseMoveInto (newCont)`

[objects.t](../file/objects.t.html)\[[3187](../source/objects.t.html#3187)\]



move to a new location



<span id="construct"></span>

`construct (parent)`

[objects.t](../file/objects.t.html)\[[3174](../source/objects.t.html#3174)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


