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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Direction`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Direction`**  
[`CompassDirection`](../object/CompassDirection.html)  
[`ShipboardDirection`](../object/ShipboardDirection.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`downDir`](../object/downDir.html) [`inDir`](../object/inDir.html) [`outDir`](../object/outDir.html) [`upDir`](../object/upDir.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allDirections`](#allDirections) [`departureName`](#departureName) [`dirProp`](#dirProp) [`name`](#name) [`nameTab`](#nameTab) [`opposite`](#opposite) [`sortingOrder`](#sortingOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`classInit`](#classInit) [`initializeDirection`](#initializeDirection) [`oppositeProp`](#oppositeProp) [`propDir`](#propDir)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allDirections"></span>

`allDirections`

[travel.t](../file/travel.t.html)\[[1748](../source/travel.t.html#1748)\]



A Class property containing a Vector of all the directions defined in
the game (the 16 defined in the library plus any additionasl custom
directions defined in game code)



<span id="departureName"></span>

`departureName`

[travel.t](../file/travel.t.html)\[[1698](../source/travel.t.html#1698)\]



The name to use when departing via this direction, e.g. 'to the north'



<span id="dirProp"></span>

`dirProp`

[travel.t](../file/travel.t.html)\[[1684](../source/travel.t.html#1684)\]



The exit property of a room association with this Direction, e.g. &north
(corresponding to northDir).



<span id="name"></span>

`name`

[travel.t](../file/travel.t.html)\[[1690](../source/travel.t.html#1690)\]



The name of this direction, e.g. 'north'. This is the name that appears
in the exit lister.



<span id="nameTab"></span>

`nameTab`

[travel.t](../file/travel.t.html)\[[1693](../source/travel.t.html#1693)\]



Class property: a LookupTable matching names to direction objects.



<span id="opposite"></span>

`opposite`

[travel.t](../file/travel.t.html)\[[1751](../source/travel.t.html#1751)\]



The direction that is opposite to this one.



<span id="sortingOrder"></span>

`sortingOrder`

[travel.t](../file/travel.t.html)\[[1741](../source/travel.t.html#1741)\]



Our sorting order in the master list. We use this to present directions
in a consistent, aesthetically pleasing order in listings involving
multiple directions. The sorting order is simply an integer that gives
the relative position in the list; the list of directions is sorted from
lowest sorting order to highest. Sorting order numbers don't have to be
contiguous, since we simply put the directions in an order that makes
the sortingOrder values ascend through the list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="classInit"></span>

`classInit ( )`

[travel.t](../file/travel.t.html)\[[1719](../source/travel.t.html#1719)\]



Class initialization - this is called once on the class object. We'll
build our master list of all of the Direction objects in the game, and
then sort the list using the sorting order.



<span id="initializeDirection"></span>

`initializeDirection ( )`

[travel.t](../file/travel.t.html)\[[1705](../source/travel.t.html#1705)\]



Initialize. We'll use this routine to add each Direction instance to the
master direction list (Direction.allDirections) during
pre-initialization.



<span id="oppositeProp"></span>

`oppositeProp (prop)`

[travel.t](../file/travel.t.html)\[[1754](../source/travel.t.html#1754)\]



The dirProp that's the opposite to prop



<span id="propDir"></span>

`propDir (prop)`

[travel.t](../file/travel.t.html)\[[1763](../source/travel.t.html#1763)\]



The direction to which prop points.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


