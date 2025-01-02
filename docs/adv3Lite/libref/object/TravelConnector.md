---
layout: docs
---
<span class="title">TravelConnector</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[1085](../source/travel.t.html#1085)\],
[objtime.t](../file/objtime.t.html)\[[348](../source/objtime.t.html#348)\]

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
[objtime.t](../file/objtime.t.html)\[[348](../source/objtime.t.html#348)\]:*  
Modifications to TravelConnector for the OBJTIME EXTENSION. The purpose
of these modifications is to allow different TravelConnectors to take
different amounts of time to traverse.

`class `**`TravelConnector`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TravelConnector`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TravelConnector`**  
[`Door`](../object/Door.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`Passage`](../object/Passage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`Room`](../object/Room.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`SymConnector`](../object/SymConnector.html)  
[`SymPassage`](../object/SymPassage.html)  
[`SymDoor`](../object/SymDoor.html)  
[`SymPathPassage`](../object/SymPathPassage.html)  
[`SymStairway`](../object/SymStairway.html)  
[`UnlistedProxyConnector`](../object/UnlistedProxyConnector.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`noExit`](../object/noExit.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`destination`](#destination)[`isConnectorApparent`](#isConnectorApparent)[`isConnectorListed`](#isConnectorListed)[`isOpen`](#isOpen)[`PushTravelVia`](#PushTravelVia)[`suppressTravelDescForPushTravel`](#suppressTravelDescForPushTravel)[`transmitsLight`](#transmitsLight)[`travelBarriers`](#travelBarriers)[`traversalTime`](#traversalTime)[`traversed`](#traversed)[`traversedBy`](#traversedBy)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`afterTravelNotifications`](#afterTravelNotifications)[`beforeTravelNotifications`](#beforeTravelNotifications)[`canTravelerPass`](#canTravelerPass)[`checkPushTravel`](#checkPushTravel)[`checkTravelBarriers`](#checkTravelBarriers)[`dobjFor(GoThrough)`](#dobjFor(GoThrough))[`dobjFor(TravelVia)`](#dobjFor(TravelVia))[`execTravel`](#execTravel)[`explainTravelBarrier`](#explainTravelBarrier)[`getDepartingDirection`](#getDepartingDirection)[`getDestination`](#getDestination)[`getTraveler`](#getTraveler)[`hasBeenTraversedBy`](#hasBeenTraversedBy)[`iobjFor(PushTravelThrough)`](#iobjFor(PushTravelThrough))[`isConnectorVisible`](#isConnectorVisible)[`isDestinationKnown`](#isDestinationKnown)[`noteTraversal`](#noteTraversal)[`sayActorFollowing`](#sayActorFollowing)[`sayDeparting`](#sayDeparting)[`sayNoDestination`](#sayNoDestination)[`travelDesc`](#travelDesc)[`travelVia`](#travelVia)[`traversalMsg`](#traversalMsg)[`traversalTimeFrom`](#traversalTimeFrom)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="destination"></span>

`destination`

[travel.t](../file/travel.t.html)\[[1124](../source/travel.t.html#1124)\]



The room to which this TravelConnector leads when it is traversed



<span id="isConnectorApparent"></span>

`isConnectorApparent`

[travel.t](../file/travel.t.html)\[[1093](../source/travel.t.html#1093)\]



Is this connector apparent? That is, would it be apparent to an observer
under normal lighting conditions, as opposed to being concealed? By
default we'll suppose a TravelConnector is apparent unless it's
explicitly hidden.



<span id="isConnectorListed"></span>

`isConnectorListed`

[travel.t](../file/travel.t.html)\[[1099](../source/travel.t.html#1099)\]



Should this exit be shown in the exit lister? By default we'll assumed
it should be it it's visible.



<span id="isOpen"></span>

`isOpen`

[travel.t](../file/travel.t.html)\[[1149](../source/travel.t.html#1149)\]



A travel connector is usually open.



<span id="PushTravelVia"></span>

`PushTravelVia`

[travel.t](../file/travel.t.html)\[[1515](../source/travel.t.html#1515)\]



The appropriate PushTravelAction for pushing something something through
a TravelConnector.



<span id="suppressTravelDescForPushTravel"></span>

`suppressTravelDescForPushTravel`

[travel.t](../file/travel.t.html)\[[1523](../source/travel.t.html#1523)\]



If we display a message for pushing something via us, we probably don't
also want the travelDesc describing the actor's travel. Game code can
override if both messages are wanted when push-travelling.



<span id="transmitsLight"></span>

`transmitsLight`

[travel.t](../file/travel.t.html)\[[1105](../source/travel.t.html#1105)\]



Does light pass through this TravelConnector from its destination (so
that it's visible in the dark even its location is dark.).



<span id="travelBarriers"></span>

`travelBarriers`

[travel.t](../file/travel.t.html)\[[1355](../source/travel.t.html#1355)\]



an additional TravelBarrier or a list of TravelBarriers to check on this
TravelConnector to see if travel is allowed.



<span id="traversalTime"></span>

`traversalTime`

[objtime.t](../file/objtime.t.html)\[[353](../source/objtime.t.html#353)\]



The number of seconds it takes to traverse this connector (in addition
to any that come from the Travel action). \[OBJTIME EXTENSION ONLY\]



<span id="traversed"></span>

`traversed`

[travel.t](../file/travel.t.html)\[[1282](../source/travel.t.html#1282)\]



Have we been traversed by the player character? Return true if and only
if we have.



<span id="traversedBy"></span>

`traversedBy`

[travel.t](../file/travel.t.html)\[[1269](../source/travel.t.html#1269)\]



A list of the actors, vehicles and pushTraverers that have traversed
this TravelConnector. This is maintained by the noteTraversal(), so game
code should normally treat this property as read-only.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="afterTravelNotifications"></span>

`afterTravelNotifications (actor)`

[travel.t](../file/travel.t.html)\[[1304](../source/travel.t.html#1304)\]



Carry out the after travel notifications for this actor



<span id="beforeTravelNotifications"></span>

`beforeTravelNotifications (actor)`

[travel.t](../file/travel.t.html)\[[1285](../source/travel.t.html#1285)\]



Carry out the before travel notifications for this actor.



<span id="canTravelerPass"></span>

`canTravelerPass (actor)`

[travel.t](../file/travel.t.html)\[[1328](../source/travel.t.html#1328)\]



Method that should return true is actor is allowed to pass through this
TravelConnector and nil otherwise. We allow travel by default but this
could be overridden to block travel under certain conditions.



<span id="checkPushTravel"></span>

`checkPushTravel ( )`

[travel.t](../file/travel.t.html)\[[1499](../source/travel.t.html#1499)\]



Check the travel barriers on the indirect object of the action



<span id="checkTravelBarriers"></span>

`checkTravelBarriers (traveler)`

[travel.t](../file/travel.t.html)\[[1363](../source/travel.t.html#1363)\]



Check all the travel barriers associated with this connector to
determine whether the traveler is allowed to pass through this travel
connector.



<span id="dobjFor(GoThrough)"></span>

`dobjFor(GoThrough)`

[travel.t](../file/travel.t.html)\[[1480](../source/travel.t.html#1480)\]



For now, we just call the travelVia() method on the TravelConnector.
Subsequentlly we might add appropriate code for the other action phases.



<span id="dobjFor(TravelVia)"></span>

`dobjFor(TravelVia)`

[travel.t](../file/travel.t.html)\[[1465](../source/travel.t.html#1465)\]



The TravelVia action is supplied so game code can execute a TravelVia
action on a TravelConnector; there is no TRAVEL VIA command that can be
issued directly by a player, but a player command may be translated into
this action.



<span id="execTravel"></span>

`execTravel (actor, traveler, conn)`

[travel.t](../file/travel.t.html)\[[1199](../source/travel.t.html#1199)\]



Execute the travel for this actor via this connector



<span id="explainTravelBarrier"></span>

`explainTravelBarrier (actor)`

[travel.t](../file/travel.t.html)\[[1335](../source/travel.t.html#1335)\]



If canTravelerPass returns nil explainTravelBarrier should display a
message explaining why travel has been prohibited.



<span id="getDepartingDirection"></span>

`getDepartingDirection (traveler)`

[travel.t](../file/travel.t.html)\[[1450](../source/travel.t.html#1450)\]



Get the direction traveler needs to go in to traverse this connector
from traveler's current location.



<span id="getDestination"></span>

`getDestination (origin)`

[travel.t](../file/travel.t.html)\[[1130](../source/travel.t.html#1130)\]



The room to which this TravelConnector leads when it is traversed from
origin.



<span id="getTraveler"></span>

`getTraveler (actor)`

[travel.t](../file/travel.t.html)\[[1181](../source/travel.t.html#1181)\]



Get the traveler associated with this actor. Normally the traveler will
be the same as the actor, but if the actor is in a vehicle, then the
traveler will be the vehicle.



<span id="hasBeenTraversedBy"></span>

`hasBeenTraversedBy (traveler)`

[travel.t](../file/travel.t.html)\[[1275](../source/travel.t.html#1275)\]



Test whether this TravelConnector has been traversed by traveler (which
may be an actor, a vehicle, or something pushed through the
TravelConnector by an actor).



<span id="iobjFor(PushTravelThrough)"></span>

`iobjFor(PushTravelThrough)`

[travel.t](../file/travel.t.html)\[[1486](../source/travel.t.html#1486)\]



*no description available*



<span id="isConnectorVisible"></span>

`isConnectorVisible ( )`

[travel.t](../file/travel.t.html)\[[1112](../source/travel.t.html#1112)\]



A TravelConnector (or at least, the exit it represents) is visible if
it's apparent (i.e. not concealed in some way) and if the lighting
conditions are adequate, or if it's visible in the dark.



<span id="isDestinationKnown"></span>

`isDestinationKnown ( )`

[travel.t](../file/travel.t.html)\[[1141](../source/travel.t.html#1141)\]



Does the player char know where this travel connector leads? By default
s/he doesn't until s/he's visited its destination, but this could be
overridden for an area the PC is supposed to know well when the game
starts, such as their own house.



<span id="noteTraversal"></span>

`noteTraversal (actor)`

[travel.t](../file/travel.t.html)\[[1246](../source/travel.t.html#1246)\]



If the actor doing the traveling is the player character, display the
travelDesc. Note that although this might normally be a simple
description of the travel, the travelDesc method could also be used to
carry out any other side-effects of the travel via this connector.



<span id="sayActorFollowing"></span>

`sayActorFollowing (follower, leader)`

[travel.t](../file/travel.t.html)\[[1417](../source/travel.t.html#1417)\]



Display a message to say that follower is following leader in the
direction of this connector.



<span id="sayDeparting"></span>

`sayDeparting (traveler)`

[travel.t](../file/travel.t.html)\[[1396](../source/travel.t.html#1396)\]



Display a message to say that an actor is departing via this connector.
On the base class the default behaviour is to describe the departure via
a compass direction. The actor in question would normally be an NPC
visible to the player character.



<span id="sayNoDestination"></span>

`sayNoDestination ( )`

[travel.t](../file/travel.t.html)\[[1234](../source/travel.t.html#1234)\]



Display a message saying that this travel connector doesn't actually
lead anywhere; this may be needed if our destination is nil and our
noteTraversal() method doesn't display anything.



<span id="travelDesc"></span>

`travelDesc ( )`

[travel.t](../file/travel.t.html)\[[1345](../source/travel.t.html#1345)\]



Carry out any side effects of travel if the traveler is the player
character. Typically we might just display some text describing the
travel here, but this method could be used for any side-effects of the
travel. If the TravelConnector is mixed in with an EventList class then
the default behaviour is to call the doScript() method here to drive the
EventList.



<span id="travelVia"></span>

`travelVia (actor)`

[travel.t](../file/travel.t.html)\[[1155](../source/travel.t.html#1155)\]



Carrier out travel via this connector, first checking that travel
through this connector is permitted for this actor.



<span id="traversalMsg"></span>

`traversalMsg ( )`

[travel.t](../file/travel.t.html)\[[1438](../source/travel.t.html#1438)\]



Create a phrase describing the direction of travel through this
connector (e.g. 'to the north')



<span id="traversalTimeFrom"></span>

`traversalTimeFrom (origin)`

[objtime.t](../file/objtime.t.html)\[[360](../source/objtime.t.html#360)\]



If we want to vary the time to go through this TravelConnector depending
on where the traveler is starting from (only really relevant for rooms),
we can override this method instead. \[OBJTIME EXTENSION ONLY\]





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


