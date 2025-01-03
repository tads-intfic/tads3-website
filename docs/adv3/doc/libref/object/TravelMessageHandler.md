---
layout: docs
---
<span class="title">TravelMessageHandler</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[210](../source/travel.t.html#210)\]

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



Travel Message Handler. This contains a set of messages that are
specific to different types of TravelConnector objects, to describe NPC
arrivals and departures via these connectors when the NPC's are in view
of the player character.

This base class implements the methods simply by calling the
corresponding gLibMessages message methods.

The purpose of providing this variety of connector-specific handlers is
to make it easy for individual travelers to customize the
arrival/departure messages for specific connector subclasses. These
messages sometimes benefit from customization for specific
traveler/connector combinations; the easiest way to enable such granular
customization is to make it possible to override a message per connector
type on the traveler object.

`class `**`TravelMessageHandler`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TravelMessageHandler`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TravelMessageHandler`**  
[`ActorState`](../object/ActorState.html)  
[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)  
[`GuidedInTravelState`](../object/GuidedInTravelState.html)  
[`AccompanyingState`](../object/AccompanyingState.html)  
[`GuidedTourState`](../object/GuidedTourState.html)  
[`ConversationReadyState`](../object/ConversationReadyState.html)  
[`HermitActorState`](../object/HermitActorState.html)  
[`InConversationState`](../object/InConversationState.html)  
[`Traveler`](../object/Traveler.html)  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`Vehicle`](../object/Vehicle.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getNominalTraveler`](#getNominalTraveler) [`sayArriving`](#sayArriving) [`sayArrivingDir`](#sayArrivingDir) [`sayArrivingDownStairs`](#sayArrivingDownStairs) [`sayArrivingLocally`](#sayArrivingLocally) [`sayArrivingThroughPassage`](#sayArrivingThroughPassage) [`sayArrivingUpStairs`](#sayArrivingUpStairs) [`sayArrivingViaPath`](#sayArrivingViaPath) [`sayDeparting`](#sayDeparting) [`sayDepartingDir`](#sayDepartingDir) [`sayDepartingDownStairs`](#sayDepartingDownStairs) [`sayDepartingLocally`](#sayDepartingLocally) [`sayDepartingThroughPassage`](#sayDepartingThroughPassage) [`sayDepartingUpStairs`](#sayDepartingUpStairs) [`sayDepartingViaPath`](#sayDepartingViaPath) [`sayTravelingRemotely`](#sayTravelingRemotely)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getNominalTraveler"></span>

`getNominalTraveler ( )`

[travel.t](../file/travel.t.html)\[[216](../source/travel.t.html#216)\]



Get the traveler for the purposes of arrival/departure messages.
Implementations that aren't themselves the travelers should override
this to supply the correct nominal traveler.



<span id="sayArriving"></span>

`sayArriving (conn)`

[travel.t](../file/travel.t.html)\[[219](../source/travel.t.html#219)\]



generic arrival/departure - for the base TravelConnector class



<span id="sayArrivingDir"></span>

`sayArrivingDir (dir, conn)`

[travel.t](../file/travel.t.html)\[[233](../source/travel.t.html#233)\]



directional arrival/departure - for RoomConnector



<span id="sayArrivingDownStairs"></span>

`sayArrivingDownStairs (conn)`

[travel.t](../file/travel.t.html)\[[255](../source/travel.t.html#255)\]



*no description available*



<span id="sayArrivingLocally"></span>

`sayArrivingLocally (dest, conn)`

[travel.t](../file/travel.t.html)\[[223](../source/travel.t.html#223)\]



generic local arrival and departure messages



<span id="sayArrivingThroughPassage"></span>

`sayArrivingThroughPassage (conn)`

[travel.t](../file/travel.t.html)\[[237](../source/travel.t.html#237)\]



arrival/departure via a ThroughPassage



<span id="sayArrivingUpStairs"></span>

`sayArrivingUpStairs (conn)`

[travel.t](../file/travel.t.html)\[[253](../source/travel.t.html#253)\]



arrival/departure up/down stairs



<span id="sayArrivingViaPath"></span>

`sayArrivingViaPath (conn)`

[travel.t](../file/travel.t.html)\[[247](../source/travel.t.html#247)\]



arrival/departure via a PathPassage



<span id="sayDeparting"></span>

`sayDeparting (conn)`

[travel.t](../file/travel.t.html)\[[220](../source/travel.t.html#220)\]



*no description available*



<span id="sayDepartingDir"></span>

`sayDepartingDir (dir, conn)`

[travel.t](../file/travel.t.html)\[[234](../source/travel.t.html#234)\]



*no description available*



<span id="sayDepartingDownStairs"></span>

`sayDepartingDownStairs (conn)`

[travel.t](../file/travel.t.html)\[[259](../source/travel.t.html#259)\]



*no description available*



<span id="sayDepartingLocally"></span>

`sayDepartingLocally (dest, conn)`

[travel.t](../file/travel.t.html)\[[225](../source/travel.t.html#225)\]



*no description available*



<span id="sayDepartingThroughPassage"></span>

`sayDepartingThroughPassage (conn)`

[travel.t](../file/travel.t.html)\[[241](../source/travel.t.html#241)\]



*no description available*



<span id="sayDepartingUpStairs"></span>

`sayDepartingUpStairs (conn)`

[travel.t](../file/travel.t.html)\[[257](../source/travel.t.html#257)\]



*no description available*



<span id="sayDepartingViaPath"></span>

`sayDepartingViaPath (conn)`

[travel.t](../file/travel.t.html)\[[249](../source/travel.t.html#249)\]



*no description available*



<span id="sayTravelingRemotely"></span>

`sayTravelingRemotely (dest, conn)`

[travel.t](../file/travel.t.html)\[[229](../source/travel.t.html#229)\]



generic remote travel message
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


