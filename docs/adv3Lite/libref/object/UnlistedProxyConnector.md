[UnlistedProxyConnector]{.title}[class]{.type}

[travel.t](../file/travel.t.html)\[[1533](../source/travel.t.html#1533)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
An UnlistedProxyConnector is a special kind of TravelConnector created
by the asExit macro to make one exit do duty for another. There is
probably never any need for this class to be used explicitly in game
code, since game authors will always use the asExit macro instead.

`class `**`UnlistedProxyConnector`**` :   `[`TravelConnector`](../object/TravelConnector.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`UnlistedProxyConnector`**\
`         `[`TravelConnector`](../object/TravelConnector.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`isConnectorListed`](#isConnectorListed)`  `[`isConnectorVisible`](#isConnectorVisible)`  `[`proxyForProp`](#proxyForProp)`  `

Inherited from `TravelConnector` :\
` `[`destination`](../object/TravelConnector.html#destination)`  `[`isConnectorApparent`](../object/TravelConnector.html#isConnectorApparent)`  `[`isOpen`](../object/TravelConnector.html#isOpen)`  `[`PushTravelVia`](../object/TravelConnector.html#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](../object/TravelConnector.html#suppressTravelDescForPushTravel)`  `[`transmitsLight`](../object/TravelConnector.html#transmitsLight)`  `[`travelBarriers`](../object/TravelConnector.html#travelBarriers)`  `[`traversalTime`](../object/TravelConnector.html#traversalTime)`  `[`traversed`](../object/TravelConnector.html#traversed)`  `[`traversedBy`](../object/TravelConnector.html#traversedBy)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`afterTravelNotifications`](#afterTravelNotifications)`  `[`beforeTravelNotifications`](#beforeTravelNotifications)`  `[`construct`](#construct)`  `[`dobjFor(GoThrough)`](#dobjFor(GoThrough))`  `[`getDestination`](#getDestination)`  `[`proxyForConnector`](#proxyForConnector)`  `[`travelVia`](#travelVia)`  `

Inherited from `TravelConnector` :\
` `[`canTravelerPass`](../object/TravelConnector.html#canTravelerPass)`  `[`checkPushTravel`](../object/TravelConnector.html#checkPushTravel)`  `[`checkTravelBarriers`](../object/TravelConnector.html#checkTravelBarriers)`  `[`dobjFor(TravelVia)`](../object/TravelConnector.html#dobjFor(TravelVia))`  `[`execTravel`](../object/TravelConnector.html#execTravel)`  `[`explainTravelBarrier`](../object/TravelConnector.html#explainTravelBarrier)`  `[`getDepartingDirection`](../object/TravelConnector.html#getDepartingDirection)`  `[`getTraveler`](../object/TravelConnector.html#getTraveler)`  `[`hasBeenTraversedBy`](../object/TravelConnector.html#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](../object/TravelConnector.html#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](../object/TravelConnector.html#isConnectorVisible)`  `[`isDestinationKnown`](../object/TravelConnector.html#isDestinationKnown)`  `[`noteTraversal`](../object/TravelConnector.html#noteTraversal)`  `[`sayActorFollowing`](../object/TravelConnector.html#sayActorFollowing)`  `[`sayDeparting`](../object/TravelConnector.html#sayDeparting)`  `[`sayNoDestination`](../object/TravelConnector.html#sayNoDestination)`  `[`travelDesc`](../object/TravelConnector.html#travelDesc)`  `[`traversalMsg`](../object/TravelConnector.html#traversalMsg)`  `[`traversalTimeFrom`](../object/TravelConnector.html#traversalTimeFrom)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isConnectorListed}

`isConnectorListed`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1552](../source/travel.t.html#1552)\]

::: desc
An UnlistedProxyConnector is never listed as an exit in its own right.
:::

[]{#isConnectorVisible}

`isConnectorVisible`

[travel.t](../file/travel.t.html)\[[1559](../source/travel.t.html#1559)\]

::: desc
We\'ll assume an UnlistedProxyListedConnector is always \'visible\',
since it\'s a proxy for some other connector which will handle the
actual visibility conditions.
:::

[]{#proxyForProp}

`proxyForProp`

[travel.t](../file/travel.t.html)\[[1536](../source/travel.t.html#1536)\]

::: desc
The direction property for which we\'re a proxy.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#afterTravelNotifications}

`afterTravelNotifications (actor)`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1600](../source/travel.t.html#1600)\]

::: desc
*no description available*
:::

[]{#beforeTravelNotifications}

`beforeTravelNotifications (actor)`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1599](../source/travel.t.html#1599)\]

::: desc
We don\'t want an UnlistedProxyConnector to trigger any travel
notifications since these will be triggered - if appropriate - on the
:::

[]{#construct}

`construct (dir_)`

[travel.t](../file/travel.t.html)\[[1586](../source/travel.t.html#1586)\]

::: desc
Construct a new UnlistedProxyConnector.
:::

[]{#dobjFor(GoThrough)}

`dobjFor(GoThrough)`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1617](../source/travel.t.html#1617)\]

::: desc
Handle going through this connector by calling our travelVia() method to
execute travel via the connector for which we\'re a proxy.
:::

[]{#getDestination}

`getDestination (origin)`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1606](../source/travel.t.html#1606)\]

::: desc
Return the actual destination, if any, an actor will arrive at by
traversing the connector we\'re a proxy for from origin.
:::

[]{#proxyForConnector}

`proxyForConnector (loc)`

[travel.t](../file/travel.t.html)\[[1542](../source/travel.t.html#1542)\]

::: desc
The loc parameter should contain the room in which this
UnlistedProxyConnector is used, but calling code will need to supply it.
:::

[]{#travelVia}

`travelVia (traveler)`[OVERRIDDEN]{.rem}

[travel.t](../file/travel.t.html)\[[1563](../source/travel.t.html#1563)\]

::: desc
Carry out travel via this connector.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
