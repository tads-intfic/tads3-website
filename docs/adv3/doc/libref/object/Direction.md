---
layout: docs
---
<span class="title">Direction</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[30](../source/travel.t.html#30)\],
[en_us.t](../file/en_us.t.html)\[[3053](../source/en_us.t.html#3053)\]

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



Directions. Each direction is represented by an instance of Direction.

A Direction object encapsulates information about a travel direction. By
using an object to represent each possible travel direction, we make it
possible for a game or library extension to add new custom directions
without having to change the basic library.

*Modified in
[en_us.t](../file/en_us.t.html)\[[3053](../source/en_us.t.html#3053)\]:*  
The English-specific modifications for directions.

`class `**`Direction`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Direction`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Direction`**  
[`CompassDirection`](../object/CompassDirection.html)  
[`RelativeDirection`](../object/RelativeDirection.html)  
[`ShipboardDirection`](../object/ShipboardDirection.html)  
[`VerticalDirection`](../object/VerticalDirection.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allDirections`](#allDirections)[`dirProp`](#dirProp)[`sortingOrder`](#sortingOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`defaultConnector`](#defaultConnector)[`initializeDirection`](#initializeDirection)[`initializeDirectionClass`](#initializeDirectionClass)[`sayArriving`](#sayArriving)[`sayDeparting`](#sayDeparting)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allDirections"></span>

`allDirections`

[travel.t](../file/travel.t.html)\[[100](../source/travel.t.html#100)\]



A master list of the defined directions. We build this automatically
during initialization to include each Direction instance. Any operation
that wants to iterate over all possible directions can run through this
list.

By using this master list to enumerate all possible directions rather
than a hard-coded set of pre-defined directions, we can ensure that any
new directions that a game or library extension adds will be
incorporated automatically into the library simply by virtue of the
existence Direction instances to represent the new directions.



<span id="dirProp"></span>

`dirProp`

[travel.t](../file/travel.t.html)\[[36](../source/travel.t.html#36)\]



The link property for the direction. This is a property pointer that we
use to ask an actor's location for a TravelConnector when the actor
attempts to travel in this direction.



<span id="sortingOrder"></span>

`sortingOrder`

[travel.t](../file/travel.t.html)\[[85](../source/travel.t.html#85)\]



Our sorting order in the master list. We use this to present directions
in a consistent, aesthetically pleasing order in listings involving
multiple directions. The sorting order is simply an integer that gives
the relative position in the list; the list of directions is sorted from
lowest sorting order to highest. Sorting order numbers don't have to be
contiguous, since we simply put the directions in an order that makes
the sortingOrder values ascend through the list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="defaultConnector"></span>

`defaultConnector (loc)`

[travel.t](../file/travel.t.html)\[[45](../source/travel.t.html#45)\]



The default TravelConnector when an actor attempts travel in this
direction, but the actor's location does not define the dirProp property
for this direction. This is almost always a connector that goes nowhere,
such as noTravel, since this is used only when a location doesn't have a
link for travel in this direction.



<span id="initializeDirection"></span>

`initializeDirection ( )`

[travel.t](../file/travel.t.html)\[[52](../source/travel.t.html#52)\]



Initialize. We'll use this routine to add each Direction instance to the
master direction list (Direction.allDirections) during
pre-initialization.



<span id="initializeDirectionClass"></span>

`initializeDirectionClass ( )`

[travel.t](../file/travel.t.html)\[[63](../source/travel.t.html#63)\]



Class initialization - this is called once on the class object. We'll
build our master list of all of the Direction objects in the game, and
then sort the list using the sorting order.



<span id="sayArriving"></span>

`sayArriving (traveler)`

[en_us.t](../file/en_us.t.html)\[[3055](../source/en_us.t.html#3055)\]



describe a traveler arriving from this direction



<span id="sayDeparting"></span>

`sayDeparting (traveler)`

[en_us.t](../file/en_us.t.html)\[[3062](../source/en_us.t.html#3062)\]



describe a traveler departing in this direction





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


