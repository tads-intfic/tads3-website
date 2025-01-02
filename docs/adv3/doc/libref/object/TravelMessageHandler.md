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

<div class="fdesc">

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TravelMessageHandler`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

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

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`getNominalTraveler`](#getNominalTraveler)[`sayArriving`](#sayArriving)[`sayArrivingDir`](#sayArrivingDir)[`sayArrivingDownStairs`](#sayArrivingDownStairs)[`sayArrivingLocally`](#sayArrivingLocally)[`sayArrivingThroughPassage`](#sayArrivingThroughPassage)[`sayArrivingUpStairs`](#sayArrivingUpStairs)[`sayArrivingViaPath`](#sayArrivingViaPath)[`sayDeparting`](#sayDeparting)[`sayDepartingDir`](#sayDepartingDir)[`sayDepartingDownStairs`](#sayDepartingDownStairs)[`sayDepartingLocally`](#sayDepartingLocally)[`sayDepartingThroughPassage`](#sayDepartingThroughPassage)[`sayDepartingUpStairs`](#sayDepartingUpStairs)[`sayDepartingViaPath`](#sayDepartingViaPath)[`sayTravelingRemotely`](#sayTravelingRemotely)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getNominalTraveler"></span>

`getNominalTraveler ( )`

[travel.t](../file/travel.t.html)\[[216](../source/travel.t.html#216)\]

<div class="desc">

Get the traveler for the purposes of arrival/departure messages.
Implementations that aren't themselves the travelers should override
this to supply the correct nominal traveler.

</div>

<span id="sayArriving"></span>

`sayArriving (conn)`

[travel.t](../file/travel.t.html)\[[219](../source/travel.t.html#219)\]

<div class="desc">

generic arrival/departure - for the base TravelConnector class

</div>

<span id="sayArrivingDir"></span>

`sayArrivingDir (dir, conn)`

[travel.t](../file/travel.t.html)\[[233](../source/travel.t.html#233)\]

<div class="desc">

directional arrival/departure - for RoomConnector

</div>

<span id="sayArrivingDownStairs"></span>

`sayArrivingDownStairs (conn)`

[travel.t](../file/travel.t.html)\[[255](../source/travel.t.html#255)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingLocally"></span>

`sayArrivingLocally (dest, conn)`

[travel.t](../file/travel.t.html)\[[223](../source/travel.t.html#223)\]

<div class="desc">

generic local arrival and departure messages

</div>

<span id="sayArrivingThroughPassage"></span>

`sayArrivingThroughPassage (conn)`

[travel.t](../file/travel.t.html)\[[237](../source/travel.t.html#237)\]

<div class="desc">

arrival/departure via a ThroughPassage

</div>

<span id="sayArrivingUpStairs"></span>

`sayArrivingUpStairs (conn)`

[travel.t](../file/travel.t.html)\[[253](../source/travel.t.html#253)\]

<div class="desc">

arrival/departure up/down stairs

</div>

<span id="sayArrivingViaPath"></span>

`sayArrivingViaPath (conn)`

[travel.t](../file/travel.t.html)\[[247](../source/travel.t.html#247)\]

<div class="desc">

arrival/departure via a PathPassage

</div>

<span id="sayDeparting"></span>

`sayDeparting (conn)`

[travel.t](../file/travel.t.html)\[[220](../source/travel.t.html#220)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingDir"></span>

`sayDepartingDir (dir, conn)`

[travel.t](../file/travel.t.html)\[[234](../source/travel.t.html#234)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingDownStairs"></span>

`sayDepartingDownStairs (conn)`

[travel.t](../file/travel.t.html)\[[259](../source/travel.t.html#259)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingLocally"></span>

`sayDepartingLocally (dest, conn)`

[travel.t](../file/travel.t.html)\[[225](../source/travel.t.html#225)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingThroughPassage"></span>

`sayDepartingThroughPassage (conn)`

[travel.t](../file/travel.t.html)\[[241](../source/travel.t.html#241)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingUpStairs"></span>

`sayDepartingUpStairs (conn)`

[travel.t](../file/travel.t.html)\[[257](../source/travel.t.html#257)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingViaPath"></span>

`sayDepartingViaPath (conn)`

[travel.t](../file/travel.t.html)\[[249](../source/travel.t.html#249)\]

<div class="desc">

*no description available*

</div>

<span id="sayTravelingRemotely"></span>

`sayTravelingRemotely (dest, conn)`

[travel.t](../file/travel.t.html)\[[229](../source/travel.t.html#229)\]

<div class="desc">

generic remote travel message

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
