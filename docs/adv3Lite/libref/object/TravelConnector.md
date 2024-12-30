[TravelConnector]{.title}[class]{.type}

[travel.t](../file/travel.t.html)\[[1085](../source/travel.t.html#1085)\],
[objtime.t](../file/objtime.t.html)\[[348](../source/objtime.t.html#348)\]

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
A TravelConnector is an object that can be attached to the directional
exit property of a room to facilitate (or optionally block) travel in
the associated direction and carry out any side-effects of that travel.
A TravelConnector may be used as an abstract object to implement travel,
or a subclass of TravelConnector such as Door, Passage, StairwayUp or
StairwayDown may be used to represent a physical object via which travel
occurs. The Room class also inherits from TravelConnector.

Whether the base TravelConnector class or one of its subclasses is used,
travel is carried out via a TravelConnector by calling its travelVia()
method.

*Modified in
[objtime.t](../file/objtime.t.html)\[[348](../source/objtime.t.html#348)\]:*\
Modifications to TravelConnector for the OBJTIME EXTENSION. The purpose
of these modifications is to allow different TravelConnectors to take
different amounts of time to traverse.

`class `**`TravelConnector`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TravelConnector`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TravelConnector`**\
`         `[`Door`](../object/Door.html)\
`                 `[`SecretDoor`](../object/SecretDoor.html)\
`         `[`Passage`](../object/Passage.html)\
`                 `[`PathPassage`](../object/PathPassage.html)\
`         `[`Room`](../object/Room.html)\
`                 `[`OutdoorRoom`](../object/OutdoorRoom.html)\
`         `[`StairwayDown`](../object/StairwayDown.html)\
`         `[`StairwayUp`](../object/StairwayUp.html)\
`         `[`SymConnector`](../object/SymConnector.html)\
`                 `[`SymPassage`](../object/SymPassage.html)\
`                         `[`SymDoor`](../object/SymDoor.html)\
`                         `[`SymPathPassage`](../object/SymPathPassage.html)\
`                         `[`SymStairway`](../object/SymStairway.html)\
`         `[`UnlistedProxyConnector`](../object/UnlistedProxyConnector.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`noExit`](../object/noExit.html)`  ` []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`destination`](#destination)`  `[`isConnectorApparent`](#isConnectorApparent)`  `[`isConnectorListed`](#isConnectorListed)`  `[`isOpen`](#isOpen)`  `[`PushTravelVia`](#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](#suppressTravelDescForPushTravel)`  `[`transmitsLight`](#transmitsLight)`  `[`travelBarriers`](#travelBarriers)`  `[`traversalTime`](#traversalTime)`  `[`traversed`](#traversed)`  `[`traversedBy`](#traversedBy)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`afterTravelNotifications`](#afterTravelNotifications)`  `[`beforeTravelNotifications`](#beforeTravelNotifications)`  `[`canTravelerPass`](#canTravelerPass)`  `[`checkPushTravel`](#checkPushTravel)`  `[`checkTravelBarriers`](#checkTravelBarriers)`  `[`dobjFor(GoThrough)`](#dobjFor(GoThrough))`  `[`dobjFor(TravelVia)`](#dobjFor(TravelVia))`  `[`execTravel`](#execTravel)`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `[`getDepartingDirection`](#getDepartingDirection)`  `[`getDestination`](#getDestination)`  `[`getTraveler`](#getTraveler)`  `[`hasBeenTraversedBy`](#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](#isConnectorVisible)`  `[`isDestinationKnown`](#isDestinationKnown)`  `[`noteTraversal`](#noteTraversal)`  `[`sayActorFollowing`](#sayActorFollowing)`  `[`sayDeparting`](#sayDeparting)`  `[`sayNoDestination`](#sayNoDestination)`  `[`travelDesc`](#travelDesc)`  `[`travelVia`](#travelVia)`  `[`traversalMsg`](#traversalMsg)`  `[`traversalTimeFrom`](#traversalTimeFrom)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#destination}

`destination`

[travel.t](../file/travel.t.html)\[[1124](../source/travel.t.html#1124)\]

::: desc
The room to which this TravelConnector leads when it is traversed
:::

[]{#isConnectorApparent}

`isConnectorApparent`

[travel.t](../file/travel.t.html)\[[1093](../source/travel.t.html#1093)\]

::: desc
Is this connector apparent? That is, would it be apparent to an observer
under normal lighting conditions, as opposed to being concealed? By
default we\'ll suppose a TravelConnector is apparent unless it\'s
explicitly hidden.
:::

[]{#isConnectorListed}

`isConnectorListed`

[travel.t](../file/travel.t.html)\[[1099](../source/travel.t.html#1099)\]

::: desc
Should this exit be shown in the exit lister? By default we\'ll assumed
it should be it it\'s visible.
:::

[]{#isOpen}

`isOpen`

[travel.t](../file/travel.t.html)\[[1149](../source/travel.t.html#1149)\]

::: desc
A travel connector is usually open.
:::

[]{#PushTravelVia}

`PushTravelVia`

[travel.t](../file/travel.t.html)\[[1515](../source/travel.t.html#1515)\]

::: desc
The appropriate PushTravelAction for pushing something something through
a TravelConnector.
:::

[]{#suppressTravelDescForPushTravel}

`suppressTravelDescForPushTravel`

[travel.t](../file/travel.t.html)\[[1523](../source/travel.t.html#1523)\]

::: desc
If we display a message for pushing something via us, we probably don\'t
also want the travelDesc describing the actor\'s travel. Game code can
override if both messages are wanted when push-travelling.
:::

[]{#transmitsLight}

`transmitsLight`

[travel.t](../file/travel.t.html)\[[1105](../source/travel.t.html#1105)\]

::: desc
Does light pass through this TravelConnector from its destination (so
that it\'s visible in the dark even its location is dark.).
:::

[]{#travelBarriers}

`travelBarriers`

[travel.t](../file/travel.t.html)\[[1355](../source/travel.t.html#1355)\]

::: desc
an additional TravelBarrier or a list of TravelBarriers to check on this
TravelConnector to see if travel is allowed.
:::

[]{#traversalTime}

`traversalTime`

[objtime.t](../file/objtime.t.html)\[[353](../source/objtime.t.html#353)\]

::: desc
The number of seconds it takes to traverse this connector (in addition
to any that come from the Travel action). \[OBJTIME EXTENSION ONLY\]
:::

[]{#traversed}

`traversed`

[travel.t](../file/travel.t.html)\[[1282](../source/travel.t.html#1282)\]

::: desc
Have we been traversed by the player character? Return true if and only
if we have.
:::

[]{#traversedBy}

`traversedBy`

[travel.t](../file/travel.t.html)\[[1269](../source/travel.t.html#1269)\]

::: desc
A list of the actors, vehicles and pushTraverers that have traversed
this TravelConnector. This is maintained by the noteTraversal(), so game
code should normally treat this property as read-only.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#afterTravelNotifications}

`afterTravelNotifications (actor)`

[travel.t](../file/travel.t.html)\[[1304](../source/travel.t.html#1304)\]

::: desc
Carry out the after travel notifications for this actor
:::

[]{#beforeTravelNotifications}

`beforeTravelNotifications (actor)`

[travel.t](../file/travel.t.html)\[[1285](../source/travel.t.html#1285)\]

::: desc
Carry out the before travel notifications for this actor.
:::

[]{#canTravelerPass}

`canTravelerPass (actor)`

[travel.t](../file/travel.t.html)\[[1328](../source/travel.t.html#1328)\]

::: desc
Method that should return true is actor is allowed to pass through this
TravelConnector and nil otherwise. We allow travel by default but this
could be overridden to block travel under certain conditions.
:::

[]{#checkPushTravel}

`checkPushTravel ( )`

[travel.t](../file/travel.t.html)\[[1499](../source/travel.t.html#1499)\]

::: desc
Check the travel barriers on the indirect object of the action
:::

[]{#checkTravelBarriers}

`checkTravelBarriers (traveler)`

[travel.t](../file/travel.t.html)\[[1363](../source/travel.t.html#1363)\]

::: desc
Check all the travel barriers associated with this connector to
determine whether the traveler is allowed to pass through this travel
connector.
:::

[]{#dobjFor(GoThrough)}

`dobjFor(GoThrough)`

[travel.t](../file/travel.t.html)\[[1480](../source/travel.t.html#1480)\]

::: desc
For now, we just call the travelVia() method on the TravelConnector.
Subsequentlly we might add appropriate code for the other action phases.
:::

[]{#dobjFor(TravelVia)}

`dobjFor(TravelVia)`

[travel.t](../file/travel.t.html)\[[1465](../source/travel.t.html#1465)\]

::: desc
The TravelVia action is supplied so game code can execute a TravelVia
action on a TravelConnector; there is no TRAVEL VIA command that can be
issued directly by a player, but a player command may be translated into
this action.
:::

[]{#execTravel}

`execTravel (actor, traveler, conn)`

[travel.t](../file/travel.t.html)\[[1199](../source/travel.t.html#1199)\]

::: desc
Execute the travel for this actor via this connector
:::

[]{#explainTravelBarrier}

`explainTravelBarrier (actor)`

[travel.t](../file/travel.t.html)\[[1335](../source/travel.t.html#1335)\]

::: desc
If canTravelerPass returns nil explainTravelBarrier should display a
message explaining why travel has been prohibited.
:::

[]{#getDepartingDirection}

`getDepartingDirection (traveler)`

[travel.t](../file/travel.t.html)\[[1450](../source/travel.t.html#1450)\]

::: desc
Get the direction traveler needs to go in to traverse this connector
from traveler\'s current location.
:::

[]{#getDestination}

`getDestination (origin)`

[travel.t](../file/travel.t.html)\[[1130](../source/travel.t.html#1130)\]

::: desc
The room to which this TravelConnector leads when it is traversed from
origin.
:::

[]{#getTraveler}

`getTraveler (actor)`

[travel.t](../file/travel.t.html)\[[1181](../source/travel.t.html#1181)\]

::: desc
Get the traveler associated with this actor. Normally the traveler will
be the same as the actor, but if the actor is in a vehicle, then the
traveler will be the vehicle.
:::

[]{#hasBeenTraversedBy}

`hasBeenTraversedBy (traveler)`

[travel.t](../file/travel.t.html)\[[1275](../source/travel.t.html#1275)\]

::: desc
Test whether this TravelConnector has been traversed by traveler (which
may be an actor, a vehicle, or something pushed through the
TravelConnector by an actor).
:::

[]{#iobjFor(PushTravelThrough)}

`iobjFor(PushTravelThrough)`

[travel.t](../file/travel.t.html)\[[1486](../source/travel.t.html#1486)\]

::: desc
*no description available*
:::

[]{#isConnectorVisible}

`isConnectorVisible ( )`

[travel.t](../file/travel.t.html)\[[1112](../source/travel.t.html#1112)\]

::: desc
A TravelConnector (or at least, the exit it represents) is visible if
it\'s apparent (i.e. not concealed in some way) and if the lighting
conditions are adequate, or if it\'s visible in the dark.
:::

[]{#isDestinationKnown}

`isDestinationKnown ( )`

[travel.t](../file/travel.t.html)\[[1141](../source/travel.t.html#1141)\]

::: desc
Does the player char know where this travel connector leads? By default
s/he doesn\'t until s/he\'s visited its destination, but this could be
overridden for an area the PC is supposed to know well when the game
starts, such as their own house.
:::

[]{#noteTraversal}

`noteTraversal (actor)`

[travel.t](../file/travel.t.html)\[[1246](../source/travel.t.html#1246)\]

::: desc
If the actor doing the traveling is the player character, display the
travelDesc. Note that although this might normally be a simple
description of the travel, the travelDesc method could also be used to
carry out any other side-effects of the travel via this connector.
:::

[]{#sayActorFollowing}

`sayActorFollowing (follower, leader)`

[travel.t](../file/travel.t.html)\[[1417](../source/travel.t.html#1417)\]

::: desc
Display a message to say that follower is following leader in the
direction of this connector.
:::

[]{#sayDeparting}

`sayDeparting (traveler)`

[travel.t](../file/travel.t.html)\[[1396](../source/travel.t.html#1396)\]

::: desc
Display a message to say that an actor is departing via this connector.
On the base class the default behaviour is to describe the departure via
a compass direction. The actor in question would normally be an NPC
visible to the player character.
:::

[]{#sayNoDestination}

`sayNoDestination ( )`

[travel.t](../file/travel.t.html)\[[1234](../source/travel.t.html#1234)\]

::: desc
Display a message saying that this travel connector doesn\'t actually
lead anywhere; this may be needed if our destination is nil and our
noteTraversal() method doesn\'t display anything.
:::

[]{#travelDesc}

`travelDesc ( )`

[travel.t](../file/travel.t.html)\[[1345](../source/travel.t.html#1345)\]

::: desc
Carry out any side effects of travel if the traveler is the player
character. Typically we might just display some text describing the
travel here, but this method could be used for any side-effects of the
travel. If the TravelConnector is mixed in with an EventList class then
the default behaviour is to call the doScript() method here to drive the
EventList.
:::

[]{#travelVia}

`travelVia (actor)`

[travel.t](../file/travel.t.html)\[[1155](../source/travel.t.html#1155)\]

::: desc
Carrier out travel via this connector, first checking that travel
through this connector is permitted for this actor.
:::

[]{#traversalMsg}

`traversalMsg ( )`

[travel.t](../file/travel.t.html)\[[1438](../source/travel.t.html#1438)\]

::: desc
Create a phrase describing the direction of travel through this
connector (e.g. \'to the north\')
:::

[]{#traversalTimeFrom}

`traversalTimeFrom (origin)`

[objtime.t](../file/objtime.t.html)\[[360](../source/objtime.t.html#360)\]

::: desc
If we want to vary the time to go through this TravelConnector depending
on where the traveler is starting from (only really relevant for rooms),
we can override this method instead. \[OBJTIME EXTENSION ONLY\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
