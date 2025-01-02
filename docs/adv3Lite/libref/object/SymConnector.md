---
---
<span class="title">SymConnector</span><span class="type">class</span>

[symconn.t](../file/symconn.t.html)\[[259](../source/symconn.t.html#259)\]

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

A Symmetrical Connector is a special type of TravelConnector between
rooms that can be traversed in either direction and that, optionally,
can largely set itself up so that if the dir property of room1 points to
this SymConnector, the reverse dir property of room2 also points to this
SymConnector. \[SYMCOMM EXTENSION\]

SymConnector is a type of TravelConnector (from which it descends by
inheritance). A SymConnector can be traversed in both directions, and
defining a SymConnector on a direction property of one room
automatically attaches it to the reverse direction property of the room
to which it leads. Otherwise, a SymConnector behaves much like any other
TravelConnector, and can be used to define travel barriers or the
side-effects of travel in much the same way.

Internally a SymConnector defines a room1 property and a room2 property,
room1 and room2 being the two rooms reciprocally connected by the
SymConnector. The room1 and room2 can be set by the extension at preinit
if the connector's destination is specified, but it's probably clearer
and safer to explictly set the room1 and room2 properties.

`class `**`SymConnector`**` :   `[`TravelConnector`](../object/TravelConnector.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SymConnector`**  
`         `[`TravelConnector`](../object/TravelConnector.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SymConnector`**  
`         `[`SymPassage`](../object/SymPassage.html)  
`                 `[`SymDoor`](../object/SymDoor.html)  
`                 `[`SymPathPassage`](../object/SymPathPassage.html)  
`                 `[`SymStairway`](../object/SymStairway.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`destination`](#destination)`  `[`dirName`](#dirName)`  `[`inRoom1`](#inRoom1)`  `[`inRoom2`](#inRoom2)`  `[`isDestinationKnown`](#isDestinationKnown)`  `[`isOpen`](#isOpen)`  `[`room1`](#room1)`  `[`room1Dir`](#room1Dir)`  `[`room2`](#room2)`  `[`room2Dir`](#room2Dir)`  `[`rooms`](#rooms)`  `

Inherited from `TravelConnector` :  
` `[`isConnectorApparent`](../object/TravelConnector.html#isConnectorApparent)`  `[`isConnectorListed`](../object/TravelConnector.html#isConnectorListed)`  `[`PushTravelVia`](../object/TravelConnector.html#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](../object/TravelConnector.html#suppressTravelDescForPushTravel)`  `[`transmitsLight`](../object/TravelConnector.html#transmitsLight)`  `[`travelBarriers`](../object/TravelConnector.html#travelBarriers)`  `[`traversalTime`](../object/TravelConnector.html#traversalTime)`  `[`traversed`](../object/TravelConnector.html#traversed)`  `[`traversedBy`](../object/TravelConnector.html#traversedBy)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`byRoom`](#byRoom)`  `[`execTravel`](#execTravel)`  `[`getDestination`](#getDestination)`  `[`initConnector`](#initConnector)`  `

Inherited from `TravelConnector` :  
` `[`afterTravelNotifications`](../object/TravelConnector.html#afterTravelNotifications)`  `[`beforeTravelNotifications`](../object/TravelConnector.html#beforeTravelNotifications)`  `[`canTravelerPass`](../object/TravelConnector.html#canTravelerPass)`  `[`checkPushTravel`](../object/TravelConnector.html#checkPushTravel)`  `[`checkTravelBarriers`](../object/TravelConnector.html#checkTravelBarriers)`  `[`dobjFor(GoThrough)`](../object/TravelConnector.html#dobjFor(GoThrough))`  `[`dobjFor(TravelVia)`](../object/TravelConnector.html#dobjFor(TravelVia))`  `[`explainTravelBarrier`](../object/TravelConnector.html#explainTravelBarrier)`  `[`getDepartingDirection`](../object/TravelConnector.html#getDepartingDirection)`  `[`getTraveler`](../object/TravelConnector.html#getTraveler)`  `[`hasBeenTraversedBy`](../object/TravelConnector.html#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](../object/TravelConnector.html#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](../object/TravelConnector.html#isConnectorVisible)`  `[`isDestinationKnown`](../object/TravelConnector.html#isDestinationKnown)`  `[`noteTraversal`](../object/TravelConnector.html#noteTraversal)`  `[`sayActorFollowing`](../object/TravelConnector.html#sayActorFollowing)`  `[`sayDeparting`](../object/TravelConnector.html#sayDeparting)`  `[`sayNoDestination`](../object/TravelConnector.html#sayNoDestination)`  `[`travelDesc`](../object/TravelConnector.html#travelDesc)`  `[`travelVia`](../object/TravelConnector.html#travelVia)`  `[`traversalMsg`](../object/TravelConnector.html#traversalMsg)`  `[`traversalTimeFrom`](../object/TravelConnector.html#traversalTimeFrom)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="destination"></span>

`destination`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[311](../source/symconn.t.html#311)\]

<div class="desc">

Our notional destination (if this is defined it will be copied to room2
at preinit). \[SYMCOMM EXTENSION\]

</div>

<span id="dirName"></span>

`dirName`

[symconn.t](../file/symconn.t.html)\[[288](../source/symconn.t.html#288)\]

<div class="desc">

The name of our direction of travel from the point of view of the player
character depending on whether the pc is in room1 or room2.

</div>

<span id="inRoom1"></span>

`inRoom1`

[symconn.t](../file/symconn.t.html)\[[410](../source/symconn.t.html#410)\]

<div class="desc">

Test whether the player character is in our room1

</div>

<span id="inRoom2"></span>

`inRoom2`

[symconn.t](../file/symconn.t.html)\[[413](../source/symconn.t.html#413)\]

<div class="desc">

Test whether the player character is in our room2

</div>

<span id="isDestinationKnown"></span>

`isDestinationKnown`

[symconn.t](../file/symconn.t.html)\[[347](../source/symconn.t.html#347)\]

<div class="desc">

By default the player character doesn't start off knowing where this
connector leads. Once the pc has been through the connector in either
direction this becomes true on both sides of the connector. \[SYMCOMM
EXTENSION\]

</div>

<span id="isOpen"></span>

`isOpen`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[350](../source/symconn.t.html#350)\]

<div class="desc">

A SymConnector is usually open. \[SYMCOMM EXTENSION\]

</div>

<span id="room1"></span>

`room1`

[symconn.t](../file/symconn.t.html)\[[265](../source/symconn.t.html#265)\]

<div class="desc">

The room from/to which this SymConnector leads. Note we can leave this
to be set up by our initConnector() method. \[SYMCOMM EXTENSION\]

</div>

<span id="room1Dir"></span>

`room1Dir`

[symconn.t](../file/symconn.t.html)\[[276](../source/symconn.t.html#276)\]

<div class="desc">

The direction an actor needs to travel in to travel via us from room1.
This is set up in Room initObj();

</div>

<span id="room2"></span>

`room2`

[symconn.t](../file/symconn.t.html)\[[270](../source/symconn.t.html#270)\]

<div class="desc">

The room to/from which this SymConnector leads. \[SYMCOMM EXTENSION\]

</div>

<span id="room2Dir"></span>

`room2Dir`

[symconn.t](../file/symconn.t.html)\[[282](../source/symconn.t.html#282)\]

<div class="desc">

The direction an actor needs to travel in to travel via us from room2.
This is set up in Room initObj();

</div>

<span id="rooms"></span>

`rooms`

[symconn.t](../file/symconn.t.html)\[[356](../source/symconn.t.html#356)\]

<div class="desc">

The rooms property provides an alternative and slightly shorthand way of
defining our two rooms. If defined, it must contain exactlty two rooms
in the order \[room1, room2\].

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="byRoom"></span>

`byRoom (args)`

[symconn.t](../file/symconn.t.html)\[[416](../source/symconn.t.html#416)\]

<div class="desc">

return a or b depending on which room the player char is in

</div>

<span id="execTravel"></span>

`execTravel (actor, traveler, conn)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[318](../source/symconn.t.html#318)\]

<div class="desc">

Execute travel through this connector. The difference for the SYMCOMM
EXTENSION is that an actor travelling through this connector ends up
knowing where both sides lead to.

</div>

<span id="getDestination"></span>

`getDestination (origin)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[293](../source/symconn.t.html#293)\]

<div class="desc">

Our destination depends on our origin. \[SYMCOMM EXTENSION\]

</div>

<span id="initConnector"></span>

`initConnector (loc, dir)`

[symconn.t](../file/symconn.t.html)\[[363](../source/symconn.t.html#363)\]

<div class="desc">

Initialize this SymConnector by setting up its room1 and room2
properties if they are not already defined. This method is normally
called from the preinitThing() method of the room that first defines
this connector. \[SYMCOMM EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
