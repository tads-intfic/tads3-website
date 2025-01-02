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

<div class="fdesc">

An instance of a MultiInstance object. This is a mix-in class that we
add (using mutiple inheritance) to each instance. This overrides the
location manipulation methods, to ensure that we keep the MultiInstance
parent object in sync with any changes made directly to the instance
objects.

IMPORTANT - the library adds this class to each instance object
\*automatically\*. Game code shouldn't ever have to use this class
directly.

`class `**`MultiInstanceInstance`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MultiInstanceInstance`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MultiInstanceInstance`**  
`         `[`MultiFacetedFacet`](../object/MultiFacetedFacet.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isEquivalent`](#isEquivalent)`  `[`miParent`](#miParent)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`baseMoveInto`](#baseMoveInto)`  `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isEquivalent"></span>

`isEquivalent`

[objects.t](../file/objects.t.html)\[[3227](../source/objects.t.html#3227)\]

<div class="desc">

All instances of a given MultiInstance are equivalent to one another,
for parsing purposes.

</div>

<span id="miParent"></span>

`miParent`

[objects.t](../file/objects.t.html)\[[3230](../source/objects.t.html#3230)\]

<div class="desc">

our MultiInstance parent

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="baseMoveInto"></span>

`baseMoveInto (newCont)`

[objects.t](../file/objects.t.html)\[[3187](../source/objects.t.html#3187)\]

<div class="desc">

move to a new location

</div>

<span id="construct"></span>

`construct (parent)`

[objects.t](../file/objects.t.html)\[[3174](../source/objects.t.html#3174)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
