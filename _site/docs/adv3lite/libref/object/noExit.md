<span class="title">noExit</span><span class="type">object</span>

[symconn.t](../file/symconn.t.html)\[[906](../source/symconn.t.html#906)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

The noExit object can be used to block an exit that would otherwise be
set as a reciprocal exit by Room.preinitThing(). This can be used to
prevent this extension from creating symmetrical exits in cases where
you don't want them. E.g. if north from the smallCave leads to
largeCave, but south from largeCave doesn't lead anywhere (because the
notional passage between the caves curves round, say), then you can set
largeCave.south to noExit to prevent this extension from setting it to
smallCave.

The noExit object is thus a TravelConnector that simulates the effect of
a nil exit in situations where a nil value might get overwritten by this
extension. \[SYMCOMM EXTENSION\]

**`noExit`**` :   `[`TravelConnector`](../object/TravelConnector.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`noExit`**  
`         `[`TravelConnector`](../object/TravelConnector.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isConnectorListed`](#isConnectorListed)`  `

Inherited from `TravelConnector` :  
` `[`destination`](../object/TravelConnector.html#destination)`  `[`isConnectorApparent`](../object/TravelConnector.html#isConnectorApparent)`  `[`isOpen`](../object/TravelConnector.html#isOpen)`  `[`PushTravelVia`](../object/TravelConnector.html#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](../object/TravelConnector.html#suppressTravelDescForPushTravel)`  `[`transmitsLight`](../object/TravelConnector.html#transmitsLight)`  `[`travelBarriers`](../object/TravelConnector.html#travelBarriers)`  `[`traversalTime`](../object/TravelConnector.html#traversalTime)`  `[`traversed`](../object/TravelConnector.html#traversed)`  `[`traversedBy`](../object/TravelConnector.html#traversedBy)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canTravelerPass`](#canTravelerPass)`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `

Inherited from `TravelConnector` :  
` `[`afterTravelNotifications`](../object/TravelConnector.html#afterTravelNotifications)`  `[`beforeTravelNotifications`](../object/TravelConnector.html#beforeTravelNotifications)`  `[`checkPushTravel`](../object/TravelConnector.html#checkPushTravel)`  `[`checkTravelBarriers`](../object/TravelConnector.html#checkTravelBarriers)`  `[`dobjFor(GoThrough)`](../object/TravelConnector.html#dobjFor(GoThrough))`  `[`dobjFor(TravelVia)`](../object/TravelConnector.html#dobjFor(TravelVia))`  `[`execTravel`](../object/TravelConnector.html#execTravel)`  `[`getDepartingDirection`](../object/TravelConnector.html#getDepartingDirection)`  `[`getDestination`](../object/TravelConnector.html#getDestination)`  `[`getTraveler`](../object/TravelConnector.html#getTraveler)`  `[`hasBeenTraversedBy`](../object/TravelConnector.html#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](../object/TravelConnector.html#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](../object/TravelConnector.html#isConnectorVisible)`  `[`isDestinationKnown`](../object/TravelConnector.html#isDestinationKnown)`  `[`noteTraversal`](../object/TravelConnector.html#noteTraversal)`  `[`sayActorFollowing`](../object/TravelConnector.html#sayActorFollowing)`  `[`sayDeparting`](../object/TravelConnector.html#sayDeparting)`  `[`sayNoDestination`](../object/TravelConnector.html#sayNoDestination)`  `[`travelDesc`](../object/TravelConnector.html#travelDesc)`  `[`travelVia`](../object/TravelConnector.html#travelVia)`  `[`traversalMsg`](../object/TravelConnector.html#traversalMsg)`  `[`traversalTimeFrom`](../object/TravelConnector.html#traversalTimeFrom)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isConnectorListed"></span>

`isConnectorListed`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[911](../source/symconn.t.html#911)\]

<div class="desc">

Since we're mimicking the absence of an exit, we don't want to be listed
as one.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canTravelerPass"></span>

`canTravelerPass (actor)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[914](../source/symconn.t.html#914)\]

<div class="desc">

We're not a real exit, so no actor can pass through us.

</div>

<span id="explainTravelBarrier"></span>

`explainTravelBarrier (actor)`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[921](../source/symconn.t.html#921)\]

<div class="desc">

In order to behave just as a nil exit would, we call the actor's
location's cannotGoThatWay() method to explain why travel isn't
possible.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>