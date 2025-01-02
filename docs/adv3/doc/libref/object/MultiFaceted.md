---
layout: docs
---
<span class="title">MultiFaceted</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[3264](../source/objects.t.html#3264)\]

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

A "multi-faceted" object is similar to a MultiInstance object, with the
addition that the instance objects are "facets" of one another. This
means that they have the same identity, from the perspective of a
character in the scenario: all of the instance objects are part of the
same conceptual object, not separate objects.

This is especially useful for large objects that span multiple
locations, such as a river or a long rope.

You define a multi-faceted object the same way you set up a
MultiInstance: definfe a MultiFaceted shell object, and as part of the
shell, define the facet object using the instanceObject property. Here's
an example:

river: MultiFaceted  
locationList = \[riverBank, meadow, canyon\]  
instanceObject: Fixture { 'river' 'river'  
"The river meanders by. "  
}  
;

The main difference between MultiInstance and MultiFaceted is that the
"facet" objects of a MultiFaceted are related as facets of a common
object from the parser's perspective. For example, if a player refers to
one facet, then travels to another location that contains a different
facet, then refers to "it", the parser will realize that the pronoun
refers to the new facet in the new location.

`class `**`MultiFaceted`**` :   `[`MultiInstance`](../object/MultiInstance.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MultiFaceted`**  
`         `[`MultiInstance`](../object/MultiInstance.html)  
`                 `[`BaseMultiLoc`](../object/BaseMultiLoc.html)  
`                         object`  
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

` `[`instanceMixIn`](#instanceMixIn)`  `

Inherited from `MultiInstance` :  
` `[`instanceList`](../object/MultiInstance.html#instanceList)`  `[`instanceObject`](../object/MultiInstance.html#instanceObject)`  `

Inherited from `BaseMultiLoc` :  
` `[`initialLocationClass`](../object/BaseMultiLoc.html#initialLocationClass)`  `[`locationList`](../object/BaseMultiLoc.html#locationList)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getFacets`](#getFacets)`  `

Inherited from `MultiInstance` :  
` `[`addInstance`](../object/MultiInstance.html#addInstance)`  `[`addToContents`](../object/MultiInstance.html#addToContents)`  `[`getInstanceIn`](../object/MultiInstance.html#getInstanceIn)`  `[`initializeLocation`](../object/MultiInstance.html#initializeLocation)`  `[`moveInto`](../object/MultiInstance.html#moveInto)`  `[`moveIntoAdd`](../object/MultiInstance.html#moveIntoAdd)`  `[`moveOutOf`](../object/MultiInstance.html#moveOutOf)`  `[`removeFromContents`](../object/MultiInstance.html#removeFromContents)`  `

Inherited from `BaseMultiLoc` :  
` `[`buildLocationList`](../object/BaseMultiLoc.html#buildLocationList)`  `[`isDirectlyIn`](../object/BaseMultiLoc.html#isDirectlyIn)`  `[`isIn`](../object/BaseMultiLoc.html#isIn)`  `[`isInitiallyIn`](../object/BaseMultiLoc.html#isInitiallyIn)`  `[`isListedInContents`](../object/BaseMultiLoc.html#isListedInContents)`  `[`isOrIsIn`](../object/BaseMultiLoc.html#isOrIsIn)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="instanceMixIn"></span>

`instanceMixIn`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[3269](../source/objects.t.html#3269)\]

<div class="desc">

the mix-in superclass for our instance objects

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getFacets"></span>

`getFacets ( )`

[objects.t](../file/objects.t.html)\[[3266](../source/objects.t.html#3266)\]

<div class="desc">

our instance objects represent our facets for parsing purposes

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
