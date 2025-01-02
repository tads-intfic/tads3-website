<span class="title">UnlistedProxyConnector</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1533](../source/travel.t.html#1533)\]

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

An UnlistedProxyConnector is a special kind of TravelConnector created
by the asExit macro to make one exit do duty for another. There is
probably never any need for this class to be used explicitly in game
code, since game authors will always use the asExit macro instead.

`class `**`UnlistedProxyConnector`**` :   `[`TravelConnector`](../object/TravelConnector.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`UnlistedProxyConnector`**  
`         `[`TravelConnector`](../object/TravelConnector.html)  
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

` `[`isConnectorListed`](#isConnectorListed)`  `[`isConnectorVisible`](#isConnectorVisible)`  `[`proxyForProp`](#proxyForProp)`  `

Inherited from `TravelConnector` :  
` `[`destination`](../object/TravelConnector.html#destination)`  `[`isConnectorApparent`](../object/TravelConnector.html#isConnectorApparent)`  `[`isOpen`](../object/TravelConnector.html#isOpen)`  `[`PushTravelVia`](../object/TravelConnector.html#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](../object/TravelConnector.html#suppressTravelDescForPushTravel)`  `[`transmitsLight`](../object/TravelConnector.html#transmitsLight)`  `[`travelBarriers`](../object/TravelConnector.html#travelBarriers)`  `[`traversalTime`](../object/TravelConnector.html#traversalTime)`  `[`traversed`](../object/TravelConnector.html#traversed)`  `[`traversedBy`](../object/TravelConnector.html#traversedBy)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`afterTravelNotifications`](#afterTravelNotifications)`  `[`beforeTravelNotifications`](#beforeTravelNotifications)`  `[`construct`](#construct)`  `[`dobjFor(GoThrough)`](#dobjFor(GoThrough))`  `[`getDestination`](#getDestination)`  `[`proxyForConnector`](#proxyForConnector)`  `[`travelVia`](#travelVia)`  `

Inherited from `TravelConnector` :  
` `[`canTravelerPass`](../object/TravelConnector.html#canTravelerPass)`  `[`checkPushTravel`](../object/TravelConnector.html#checkPushTravel)`  `[`checkTravelBarriers`](../object/TravelConnector.html#checkTravelBarriers)`  `[`dobjFor(TravelVia)`](../object/TravelConnector.html#dobjFor(TravelVia))`  `[`execTravel`](../object/TravelConnector.html#execTravel)`  `[`explainTravelBarrier`](../object/TravelConnector.html#explainTravelBarrier)`  `[`getDepartingDirection`](../object/TravelConnector.html#getDepartingDirection)`  `[`getTraveler`](../object/TravelConnector.html#getTraveler)`  `[`hasBeenTraversedBy`](../object/TravelConnector.html#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](../object/TravelConnector.html#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](../object/TravelConnector.html#isConnectorVisible)`  `[`isDestinationKnown`](../object/TravelConnector.html#isDestinationKnown)`  `[`noteTraversal`](../object/TravelConnector.html#noteTraversal)`  `[`sayActorFollowing`](../object/TravelConnector.html#sayActorFollowing)`  `[`sayDeparting`](../object/TravelConnector.html#sayDeparting)`  `[`sayNoDestination`](../object/TravelConnector.html#sayNoDestination)`  `[`travelDesc`](../object/TravelConnector.html#travelDesc)`  `[`traversalMsg`](../object/TravelConnector.html#traversalMsg)`  `[`traversalTimeFrom`](../object/TravelConnector.html#traversalTimeFrom)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isConnectorListed"></span>

`isConnectorListed`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1552](../source/travel.t.html#1552)\]

<div class="desc">

An UnlistedProxyConnector is never listed as an exit in its own right.

</div>

<span id="isConnectorVisible"></span>

`isConnectorVisible`

[travel.t](../file/travel.t.html)\[[1559](../source/travel.t.html#1559)\]

<div class="desc">

We'll assume an UnlistedProxyListedConnector is always 'visible', since
it's a proxy for some other connector which will handle the actual
visibility conditions.

</div>

<span id="proxyForProp"></span>

`proxyForProp`

[travel.t](../file/travel.t.html)\[[1536](../source/travel.t.html#1536)\]

<div class="desc">

The direction property for which we're a proxy.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="afterTravelNotifications"></span>

`afterTravelNotifications (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1600](../source/travel.t.html#1600)\]

<div class="desc">

*no description available*

</div>

<span id="beforeTravelNotifications"></span>

`beforeTravelNotifications (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1599](../source/travel.t.html#1599)\]

<div class="desc">

We don't want an UnlistedProxyConnector to trigger any travel
notifications since these will be triggered - if appropriate - on the

</div>

<span id="construct"></span>

`construct (dir_)`

[travel.t](../file/travel.t.html)\[[1586](../source/travel.t.html#1586)\]

<div class="desc">

Construct a new UnlistedProxyConnector.

</div>

<span id="dobjFor(GoThrough)"></span>

`dobjFor(GoThrough)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1617](../source/travel.t.html#1617)\]

<div class="desc">

Handle going through this connector by calling our travelVia() method to
execute travel via the connector for which we're a proxy.

</div>

<span id="getDestination"></span>

`getDestination (origin)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1606](../source/travel.t.html#1606)\]

<div class="desc">

Return the actual destination, if any, an actor will arrive at by
traversing the connector we're a proxy for from origin.

</div>

<span id="proxyForConnector"></span>

`proxyForConnector (loc)`

[travel.t](../file/travel.t.html)\[[1542](../source/travel.t.html#1542)\]

<div class="desc">

The loc parameter should contain the room in which this
UnlistedProxyConnector is used, but calling code will need to supply it.

</div>

<span id="travelVia"></span>

`travelVia (traveler)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[1563](../source/travel.t.html#1563)\]

<div class="desc">

Carry out travel via this connector.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
