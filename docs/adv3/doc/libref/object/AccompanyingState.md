---
---
<span class="title">AccompanyingState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5286](../source/actor.t.html#5286)\]

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

The basic "accompanying" state. In this state, whenever the actor we're
accompanying travels to a location we want to follow, we'll travel at
the same time with the other actor.

`class `**`AccompanyingState`**` :   `[`ActorState`](../object/ActorState.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AccompanyingState`**  
`         `[`ActorState`](../object/ActorState.html)  
`                 `[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                         object`  
`                 `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
`                         `[`TopicDatabase`](../object/TopicDatabase.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`AccompanyingState`**  
`         `[`GuidedTourState`](../object/GuidedTourState.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `ActorState` :  
` `[`autoSuggest`](../object/ActorState.html#autoSuggest)`  `[`getImpliedConvState`](../object/ActorState.html#getImpliedConvState)`  `[`isInitState`](../object/ActorState.html#isInitState)`  `[`location`](../object/ActorState.html#location)`  `[`stateDesc`](../object/ActorState.html#stateDesc)`  `[`stateSuggestedTopics`](../object/ActorState.html#stateSuggestedTopics)`  `

` `

Inherited from `ActorTopicDatabase` :  
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`specialTopics`](../object/ActorTopicDatabase.html#specialTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

Inherited from `TopicDatabase` :  
` `[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions)`  `[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)`  `[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`accompanyTravel`](#accompanyTravel)`  `[`beforeTravel`](#beforeTravel)`  `[`getAccompanyingTravelState`](#getAccompanyingTravelState)`  `

Inherited from `ActorState` :  
` `[`activateState`](../object/ActorState.html#activateState)`  `[`afterAction`](../object/ActorState.html#afterAction)`  `[`afterTravel`](../object/ActorState.html#afterTravel)`  `[`arrivingTurn`](../object/ActorState.html#arrivingTurn)`  `[`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc)`  `[`beforeAction`](../object/ActorState.html#beforeAction)`  `[`construct`](../object/ActorState.html#construct)`  `[`deactivateState`](../object/ActorState.html#deactivateState)`  `[`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc)`  `[`endConversation`](../object/ActorState.html#endConversation)`  `[`getActor`](../object/ActorState.html#getActor)`  `[`getNominalTraveler`](../object/ActorState.html#getNominalTraveler)`  `[`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList)`  `[`getTopicOwner`](../object/ActorState.html#getTopicOwner)`  `[`handleConversation`](../object/ActorState.html#handleConversation)`  `[`initializeActorState`](../object/ActorState.html#initializeActorState)`  `[`justFollowed`](../object/ActorState.html#justFollowed)`  `[`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse)`  `[`obeyCommand`](../object/ActorState.html#obeyCommand)`  `[`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc)`  `[`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents)`  `[`specialDesc`](../object/ActorState.html#specialDesc)`  `[`specialDescListWith`](../object/ActorState.html#specialDescListWith)`  `[`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor)`  `[`takeTurn`](../object/ActorState.html#takeTurn)`  `

Inherited from `TravelMessageHandler` :  
` `[`sayArriving`](../object/TravelMessageHandler.html#sayArriving)`  `[`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir)`  `[`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs)`  `[`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally)`  `[`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage)`  `[`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs)`  `[`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath)`  `[`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting)`  `[`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir)`  `[`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs)`  `[`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally)`  `[`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage)`  `[`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs)`  `[`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath)`  `[`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)`  `

Inherited from `ActorTopicDatabase` :  
` `[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic)`  `[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)`  `

Inherited from `TopicDatabase` :  
` `[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`addTopicToList`](../object/TopicDatabase.html#addTopicToList)`  `[`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch)`  `[`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse)`  `[`handleTopic`](../object/TopicDatabase.html#handleTopic)`  `[`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic)`  `[`removeTopic`](../object/TopicDatabase.html#removeTopic)`  `[`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList)`  `[`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="accompanyTravel"></span>

`accompanyTravel (traveler, conn)`

[actor.t](../file/actor.t.html)\[[5302](../source/actor.t.html#5302)\]

<div class="desc">

Check to see if we are to accompany the given traveler on the given
travel. 'traveler' is the Traveler performing the travel, and 'conn' is
the connector that the traveler is about to take.

Note that 'traveler' is a Traveler object. This will simply be an Actor
(which is a kind of Traveler) when the actor is performing the travel
directly, but it could also be another kind of Traveler, such as a
Vehicle. This routine must determine whether to accompany other kinds of
actors.

By default, we'll return true to indicate that we want to accompany any
traveler anywhere they go. This should almost always be overridden in
practice to be more specific.

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5326](../source/actor.t.html#5326)\]

<div class="desc">

handle a before-travel notification for my actor

</div>

<span id="getAccompanyingTravelState"></span>

`getAccompanyingTravelState (traveler, connector)`

[actor.t](../file/actor.t.html)\[[5311](../source/actor.t.html#5311)\]

<div class="desc">

Get our accompanying state object. We'll create a basic accompanying
in-travel state object, returning to the current state when we're done.
'traveler' is the Traveler object that's performing the travel; this
might be an Actor, but could also be a Vehicle or other Traveler
subclass.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
