<span class="title">TravelConnectorLink</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[3072](../source/travel.t.html#3072)\]

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

The base class for Enterables and Exitables. These are physical objects
associated with travel connectors. For example, the object representing
the exterior of a building in the location containing the building could
be an Enterable, so that typing ENTER BUILDING takes us into the
building via the travel connector that leads inside.

Enterables and Exitables are physical covers for travel connectors.
These objects aren't travel connectors themselves, and they don't
specify the destination; instead, these just point to travel connectors.

`class `**`TravelConnectorLink`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TravelConnectorLink`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TravelConnectorLink`**  
`         `[`Enterable`](../object/Enterable.html)  
`                 `[`EntryPortal`](../object/EntryPortal.html)  
`         `[`Exitable`](../object/Exitable.html)  
`                 `[`ExitPortal`](../object/ExitPortal.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`connector`](#connector)`  `[`sightSize`](#sightSize)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`dobjFor(TravelVia)`](#dobjFor(TravelVia))`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="connector"></span>

`connector`

[travel.t](../file/travel.t.html)\[[3074](../source/travel.t.html#3074)\]

<div class="desc">

the underlying travel connector

</div>

<span id="sightSize"></span>

`sightSize`

[travel.t](../file/travel.t.html)\[[3102](../source/travel.t.html#3102)\]

<div class="desc">

These objects are generally things like buildings (exterior or
interior), which tend to be large enough that their details can be seen
at a distance.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="dobjFor(TravelVia)"></span>

`dobjFor(TravelVia)`

[travel.t](../file/travel.t.html)\[[3084](../source/travel.t.html#3084)\]

<div class="desc">

The internal "TravelVia" action just maps to travel via the underlying
connector. However, we want to apply our own preconditions, so we don't
directly remap to the underlying connector. Instead, we provide our own
full TravelVia implementation, and then we perform the travel on the
underlying connector via a replacement action in our own action()
handler.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>