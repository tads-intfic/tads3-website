---
layout: docs
---
<span class="title">Direction</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1678](../source/travel.t.html#1678)\]

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

A Direction object represents a direction in which an actor might
attempt to travel. The library defines eight compass directions (north,
south, etc.) and a further eight special directions (in, out, up, down,
port, starboard, fore and aft), but game code can define additional
directions if required.

The convention that should be followed in naming a Direction object is
to use the name of the direction followed by Dir; e.g. the Direction
object corresponding to north is called northDir. Custom directions
should follow the same convention, since it is assumed by the
goInstead() and goNested() macros.

`class `**`Direction`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Direction`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Direction`**  
[`CompassDirection`](../object/CompassDirection.html)  
[`ShipboardDirection`](../object/ShipboardDirection.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`downDir`](../object/downDir.html)[`inDir`](../object/inDir.html)[`outDir`](../object/outDir.html)[`upDir`](../object/upDir.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`allDirections`](#allDirections)[`departureName`](#departureName)[`dirProp`](#dirProp)[`name`](#name)[`nameTab`](#nameTab)[`opposite`](#opposite)[`sortingOrder`](#sortingOrder)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`classInit`](#classInit)[`initializeDirection`](#initializeDirection)[`oppositeProp`](#oppositeProp)[`propDir`](#propDir)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allDirections"></span>

`allDirections`

[travel.t](../file/travel.t.html)\[[1748](../source/travel.t.html#1748)\]

<div class="desc">

A Class property containing a Vector of all the directions defined in
the game (the 16 defined in the library plus any additionasl custom
directions defined in game code)

</div>

<span id="departureName"></span>

`departureName`

[travel.t](../file/travel.t.html)\[[1698](../source/travel.t.html#1698)\]

<div class="desc">

The name to use when departing via this direction, e.g. 'to the north'

</div>

<span id="dirProp"></span>

`dirProp`

[travel.t](../file/travel.t.html)\[[1684](../source/travel.t.html#1684)\]

<div class="desc">

The exit property of a room association with this Direction, e.g. &north
(corresponding to northDir).

</div>

<span id="name"></span>

`name`

[travel.t](../file/travel.t.html)\[[1690](../source/travel.t.html#1690)\]

<div class="desc">

The name of this direction, e.g. 'north'. This is the name that appears
in the exit lister.

</div>

<span id="nameTab"></span>

`nameTab`

[travel.t](../file/travel.t.html)\[[1693](../source/travel.t.html#1693)\]

<div class="desc">

Class property: a LookupTable matching names to direction objects.

</div>

<span id="opposite"></span>

`opposite`

[travel.t](../file/travel.t.html)\[[1751](../source/travel.t.html#1751)\]

<div class="desc">

The direction that is opposite to this one.

</div>

<span id="sortingOrder"></span>

`sortingOrder`

[travel.t](../file/travel.t.html)\[[1741](../source/travel.t.html#1741)\]

<div class="desc">

Our sorting order in the master list. We use this to present directions
in a consistent, aesthetically pleasing order in listings involving
multiple directions. The sorting order is simply an integer that gives
the relative position in the list; the list of directions is sorted from
lowest sorting order to highest. Sorting order numbers don't have to be
contiguous, since we simply put the directions in an order that makes
the sortingOrder values ascend through the list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="classInit"></span>

`classInit ( )`

[travel.t](../file/travel.t.html)\[[1719](../source/travel.t.html#1719)\]

<div class="desc">

Class initialization - this is called once on the class object. We'll
build our master list of all of the Direction objects in the game, and
then sort the list using the sorting order.

</div>

<span id="initializeDirection"></span>

`initializeDirection ( )`

[travel.t](../file/travel.t.html)\[[1705](../source/travel.t.html#1705)\]

<div class="desc">

Initialize. We'll use this routine to add each Direction instance to the
master direction list (Direction.allDirections) during
pre-initialization.

</div>

<span id="oppositeProp"></span>

`oppositeProp (prop)`

[travel.t](../file/travel.t.html)\[[1754](../source/travel.t.html#1754)\]

<div class="desc">

The dirProp that's the opposite to prop

</div>

<span id="propDir"></span>

`propDir (prop)`

[travel.t](../file/travel.t.html)\[[1763](../source/travel.t.html#1763)\]

<div class="desc">

The direction to which prop points.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
