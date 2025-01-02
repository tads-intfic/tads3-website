---
layout: docs
---
<span class="title">GuidedTourState</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[2402](../source/extras.t.html#2402)\]

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



Guided Tour state. This provides a simple way of defining a "guided
tour," which is a series of locations to which we try to guide the
player character. We don't force the player character to travel as
specified; we merely try to lead the player. The actual travel is up to
the player.

Here's how this works. For each location on the guided tour, create one
of these state objects. Set escortDest to the travel connector to which
we're attempting to guide the player character from the current
location. Set stateAfterEscort to the state object for the next location
on the tour. Set stateDesc to something indicating that we're trying to
show the player to the next stop - something along the lines of "Bob
waits for you by the door." Set arrivingWithDesc to a message indicating
that we just showed up in the current location and are ready to show the
player to the next - "Bob goes to the door and waits for you to follow
him."

`class `**`GuidedTourState`**` :   `[`AccompanyingState`](../object/AccompanyingState.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GuidedTourState`**  
[`AccompanyingState`](../object/AccompanyingState.html)  
[`ActorState`](../object/ActorState.html)  
[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                                 object`  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`escortActor`](#escortActor) [`escortDest`](#escortDest) [`escortStateClass`](#escortStateClass) [`stateAfterEscort`](#stateAfterEscort)



Inherited from `ActorState` :  
[`autoSuggest`](../object/ActorState.html#autoSuggest) [`getImpliedConvState`](../object/ActorState.html#getImpliedConvState) [`isInitState`](../object/ActorState.html#isInitState) [`location`](../object/ActorState.html#location) [`stateDesc`](../object/ActorState.html#stateDesc) [`stateSuggestedTopics`](../object/ActorState.html#stateSuggestedTopics)



Inherited from `ActorTopicDatabase` :  
[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics) [`askTopics`](../object/ActorTopicDatabase.html#askTopics) [`commandTopics`](../object/ActorTopicDatabase.html#commandTopics) [`giveTopics`](../object/ActorTopicDatabase.html#giveTopics) [`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics) [`miscTopics`](../object/ActorTopicDatabase.html#miscTopics) [`showTopics`](../object/ActorTopicDatabase.html#showTopics) [`specialTopics`](../object/ActorTopicDatabase.html#specialTopics) [`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions) [`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics) [`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`accompanyTravel`](#accompanyTravel) [`getAccompanyingTravelState`](#getAccompanyingTravelState)

Inherited from `AccompanyingState` :  
[`beforeTravel`](../object/AccompanyingState.html#beforeTravel)

Inherited from `ActorState` :  
[`activateState`](../object/ActorState.html#activateState) [`afterAction`](../object/ActorState.html#afterAction) [`afterTravel`](../object/ActorState.html#afterTravel) [`arrivingTurn`](../object/ActorState.html#arrivingTurn) [`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc) [`beforeAction`](../object/ActorState.html#beforeAction) [`construct`](../object/ActorState.html#construct) [`deactivateState`](../object/ActorState.html#deactivateState) [`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc) [`endConversation`](../object/ActorState.html#endConversation) [`getActor`](../object/ActorState.html#getActor) [`getNominalTraveler`](../object/ActorState.html#getNominalTraveler) [`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList) [`getTopicOwner`](../object/ActorState.html#getTopicOwner) [`handleConversation`](../object/ActorState.html#handleConversation) [`initializeActorState`](../object/ActorState.html#initializeActorState) [`justFollowed`](../object/ActorState.html#justFollowed) [`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse) [`obeyCommand`](../object/ActorState.html#obeyCommand) [`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc) [`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents) [`specialDesc`](../object/ActorState.html#specialDesc) [`specialDescListWith`](../object/ActorState.html#specialDescListWith) [`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor) [`takeTurn`](../object/ActorState.html#takeTurn)

Inherited from `TravelMessageHandler` :  
[`sayArriving`](../object/TravelMessageHandler.html#sayArriving) [`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir) [`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs) [`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally) [`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage) [`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs) [`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath) [`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting) [`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir) [`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs) [`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally) [`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage) [`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs) [`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath) [`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

Inherited from `ActorTopicDatabase` :  
[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic) [`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic) [`addTopic`](../object/TopicDatabase.html#addTopic) [`addTopicToList`](../object/TopicDatabase.html#addTopicToList) [`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch) [`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse) [`handleTopic`](../object/TopicDatabase.html#handleTopic) [`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic) [`removeTopic`](../object/TopicDatabase.html#removeTopic) [`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList) [`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="escortActor"></span>

`escortActor`

[extras.t](../file/extras.t.html)\[[2414](../source/extras.t.html#2414)\]



the actor we're escorting - this is usually the player character



<span id="escortDest"></span>

`escortDest`

[extras.t](../file/extras.t.html)\[[2404](../source/extras.t.html#2404)\]



the travel connector we're trying to show the player into



<span id="escortStateClass"></span>

`escortStateClass`

[extras.t](../file/extras.t.html)\[[2424](../source/extras.t.html#2424)\]



The class we use for our actor state during the escort travel. By
default, we use the basic guided-tour accompanying travel state class,
but games will probably want to use a customized subclass of this basic
class in most cases. The main reason to use a custom subclass is to
provide customized messages to describe the departure of the escorting
actor.



<span id="stateAfterEscort"></span>

`stateAfterEscort`

[extras.t](../file/extras.t.html)\[[2411](../source/extras.t.html#2411)\]



The next state for our actor to assume after the travel. This should be
overridden and set to the state object for the next stop on the tour.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="accompanyTravel"></span>

`accompanyTravel (traveler, conn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[2430](../source/extras.t.html#2430)\]



we should accompany the travel if the actor we're guiding will be
traveling, and they're traveling to the next stop on our tour



<span id="getAccompanyingTravelState"></span>

`getAccompanyingTravelState (traveler, conn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[2439](../source/extras.t.html#2439)\]



get our accompanying state object - we'll create an instance of the
class specified in our escortStateClass property





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


