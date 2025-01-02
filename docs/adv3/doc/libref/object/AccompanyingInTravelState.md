---
layout: docs
---
<span class="title">AccompanyingInTravelState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5365](../source/actor.t.html#5365)\]

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



"Accompanying in-travel" state - this is an actor state used when an
actor is taking part in a group travel operation. This state lasts only
as long as the single turn - which belongs to the lead actor - that it
takes to carry out the group travel. Once our turn comes around, we'll
restore the actor to the previous state - or, we can set the actor to a
different state, if desired. Setting the actor to a different state is
useful when the group travel triggers a new scripted activity in the new
room.

`class `**`AccompanyingInTravelState`**` :   `[`ActorState`](../object/ActorState.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AccompanyingInTravelState`**  
[`ActorState`](../object/ActorState.html)  
[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                         object`  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`AccompanyingInTravelState`**  
[`GuidedInTravelState`](../object/GuidedInTravelState.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`leadActor`](#leadActor) [`nextState`](#nextState)

Inherited from `ActorState` :  
[`autoSuggest`](../object/ActorState.html#autoSuggest) [`getImpliedConvState`](../object/ActorState.html#getImpliedConvState) [`isInitState`](../object/ActorState.html#isInitState) [`location`](../object/ActorState.html#location) [`stateDesc`](../object/ActorState.html#stateDesc) [`stateSuggestedTopics`](../object/ActorState.html#stateSuggestedTopics)



Inherited from `ActorTopicDatabase` :  
[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics) [`askTopics`](../object/ActorTopicDatabase.html#askTopics) [`commandTopics`](../object/ActorTopicDatabase.html#commandTopics) [`giveTopics`](../object/ActorTopicDatabase.html#giveTopics) [`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics) [`miscTopics`](../object/ActorTopicDatabase.html#miscTopics) [`showTopics`](../object/ActorTopicDatabase.html#showTopics) [`specialTopics`](../object/ActorTopicDatabase.html#specialTopics) [`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions) [`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics) [`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`initiateTopic`](#initiateTopic) [`sayArrivingLocally`](#sayArrivingLocally) [`sayDeparting`](#sayDeparting) [`sayDepartingDir`](#sayDepartingDir) [`sayDepartingDownStairs`](#sayDepartingDownStairs) [`sayDepartingLocally`](#sayDepartingLocally) [`sayDepartingThroughPassage`](#sayDepartingThroughPassage) [`sayDepartingUpStairs`](#sayDepartingUpStairs) [`sayDepartingViaPath`](#sayDepartingViaPath) [`specialDesc`](#specialDesc) [`takeTurn`](#takeTurn)

Inherited from `ActorState` :  
[`activateState`](../object/ActorState.html#activateState) [`afterAction`](../object/ActorState.html#afterAction) [`afterTravel`](../object/ActorState.html#afterTravel) [`arrivingTurn`](../object/ActorState.html#arrivingTurn) [`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc) [`beforeAction`](../object/ActorState.html#beforeAction) [`beforeTravel`](../object/ActorState.html#beforeTravel) [`deactivateState`](../object/ActorState.html#deactivateState) [`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc) [`endConversation`](../object/ActorState.html#endConversation) [`getActor`](../object/ActorState.html#getActor) [`getNominalTraveler`](../object/ActorState.html#getNominalTraveler) [`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList) [`getTopicOwner`](../object/ActorState.html#getTopicOwner) [`handleConversation`](../object/ActorState.html#handleConversation) [`initializeActorState`](../object/ActorState.html#initializeActorState) [`justFollowed`](../object/ActorState.html#justFollowed) [`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse) [`obeyCommand`](../object/ActorState.html#obeyCommand) [`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc) [`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents) [`specialDescListWith`](../object/ActorState.html#specialDescListWith) [`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor)

Inherited from `TravelMessageHandler` :  
[`sayArriving`](../object/TravelMessageHandler.html#sayArriving) [`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir) [`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs) [`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage) [`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs) [`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath) [`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

Inherited from `ActorTopicDatabase` :  
[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic) [`addTopic`](../object/TopicDatabase.html#addTopic) [`addTopicToList`](../object/TopicDatabase.html#addTopicToList) [`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch) [`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse) [`handleTopic`](../object/TopicDatabase.html#handleTopic) [`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic) [`removeTopic`](../object/TopicDatabase.html#removeTopic) [`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList) [`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="leadActor"></span>

`leadActor`

[actor.t](../file/actor.t.html)\[[5377](../source/actor.t.html#5377)\]



the lead actor of the group travel



<span id="nextState"></span>

`nextState`

[actor.t](../file/actor.t.html)\[[5383](../source/actor.t.html#5383)\]



the next state - we'll switch our actor to this state after the travel
has been completed



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (actor, lead, next)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5366](../source/actor.t.html#5366)\]



*no description available*



<span id="initiateTopic"></span>

`initiateTopic (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5413](../source/actor.t.html#5413)\]



initiate a topic - defer to the next state



<span id="sayArrivingLocally"></span>

`sayArrivingLocally (dest, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5454](../source/actor.t.html#5454)\]



Describe local travel using our standard departure message as well. This
is used to describe our travel when our origin and destination locations
are both visible to the PC; in these cases, we don't describe the
departure separately because the whole process of travel from departure
to arrival is visible to the PC and thus is best handled with a single
message, which we generate here. In our case, since the "accompanying"
state describes even normal travel as though it were visible all along,
we can use our standard "departing" message to describe local travel as
well.



<span id="sayDeparting"></span>

`sayDeparting (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5435](../source/actor.t.html#5435)\]



Override our departure messages. When we're accompanying another actor
on a group travel, the lead actor will, as part of its turn, send each
accompanying actor (including us) on ahead. This means that the lead
actor will see us departing from the starting location, because we'll
leave before the lead actor has itself departed. Rather than using the
normal "Bob leaves to the west" departure report, customize the
departure reports to indicate specifically that we're going with the
lead actor. (Note that we only have to handle the departing messages,
since group travel always sends accompanying actors on ahead of the main
actor, hence the accompanying actors will always be seen departing, not
arriving.)

Note that all of these call our generic sayDeparting() method by
default, so a subclass can catch all of the departure types at once just
by overriding sayDeparting(). Overriding the individual methods is still
desirable, of course, if you want separate messages for the different
departure types.



<span id="sayDepartingDir"></span>

`sayDepartingDir (dir, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5437](../source/actor.t.html#5437)\]



*no description available*



<span id="sayDepartingDownStairs"></span>

`sayDepartingDownStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5441](../source/actor.t.html#5441)\]



*no description available*



<span id="sayDepartingLocally"></span>

`sayDepartingLocally (dest, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5455](../source/actor.t.html#5455)\]



*no description available*



<span id="sayDepartingThroughPassage"></span>

`sayDepartingThroughPassage (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5438](../source/actor.t.html#5438)\]



*no description available*



<span id="sayDepartingUpStairs"></span>

`sayDepartingUpStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5440](../source/actor.t.html#5440)\]



*no description available*



<span id="sayDepartingViaPath"></span>

`sayDepartingViaPath (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5439](../source/actor.t.html#5439)\]



*no description available*



<span id="specialDesc"></span>

`specialDesc ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5389](../source/actor.t.html#5389)\]



Show our "I am here" description. By default, we'll use the
arrivingWithDesc of the \*next\* state object.



<span id="takeTurn"></span>

`takeTurn ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5392](../source/actor.t.html#5392)\]



take our turn





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


