---
---
<span class="title">GuidedInTravelState</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[2453](../source/extras.t.html#2453)\]

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

A subclass of the basic accompanying travel state specifically designed
for guided tours. This is almost the same as the basic accompanying
travel state, but provides customized messages to describe the departure
of our associated actor, which is the actor serving as the tour guide.

`class `**`GuidedInTravelState`**` :   `[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GuidedInTravelState`**  
`         `[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)  
`                 `[`ActorState`](../object/ActorState.html)  
`                         `[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                                 object`  
`                         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
`                                 `[`TopicDatabase`](../object/TopicDatabase.html)  
`                                         object`  
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

` `

Inherited from `AccompanyingInTravelState` :  
` `[`leadActor`](../object/AccompanyingInTravelState.html#leadActor)`  `[`nextState`](../object/AccompanyingInTravelState.html#nextState)`  `

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

` `[`sayDeparting`](#sayDeparting)`  `

Inherited from `AccompanyingInTravelState` :  
` `[`construct`](../object/AccompanyingInTravelState.html#construct)`  `[`initiateTopic`](../object/AccompanyingInTravelState.html#initiateTopic)`  `[`sayArrivingLocally`](../object/AccompanyingInTravelState.html#sayArrivingLocally)`  `[`sayDepartingDir`](../object/AccompanyingInTravelState.html#sayDepartingDir)`  `[`sayDepartingDownStairs`](../object/AccompanyingInTravelState.html#sayDepartingDownStairs)`  `[`sayDepartingLocally`](../object/AccompanyingInTravelState.html#sayDepartingLocally)`  `[`sayDepartingThroughPassage`](../object/AccompanyingInTravelState.html#sayDepartingThroughPassage)`  `[`sayDepartingUpStairs`](../object/AccompanyingInTravelState.html#sayDepartingUpStairs)`  `[`sayDepartingViaPath`](../object/AccompanyingInTravelState.html#sayDepartingViaPath)`  `[`specialDesc`](../object/AccompanyingInTravelState.html#specialDesc)`  `[`takeTurn`](../object/AccompanyingInTravelState.html#takeTurn)`  `

Inherited from `ActorState` :  
` `[`activateState`](../object/ActorState.html#activateState)`  `[`afterAction`](../object/ActorState.html#afterAction)`  `[`afterTravel`](../object/ActorState.html#afterTravel)`  `[`arrivingTurn`](../object/ActorState.html#arrivingTurn)`  `[`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc)`  `[`beforeAction`](../object/ActorState.html#beforeAction)`  `[`beforeTravel`](../object/ActorState.html#beforeTravel)`  `[`deactivateState`](../object/ActorState.html#deactivateState)`  `[`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc)`  `[`endConversation`](../object/ActorState.html#endConversation)`  `[`getActor`](../object/ActorState.html#getActor)`  `[`getNominalTraveler`](../object/ActorState.html#getNominalTraveler)`  `[`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList)`  `[`getTopicOwner`](../object/ActorState.html#getTopicOwner)`  `[`handleConversation`](../object/ActorState.html#handleConversation)`  `[`initializeActorState`](../object/ActorState.html#initializeActorState)`  `[`justFollowed`](../object/ActorState.html#justFollowed)`  `[`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse)`  `[`obeyCommand`](../object/ActorState.html#obeyCommand)`  `[`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc)`  `[`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents)`  `[`specialDescListWith`](../object/ActorState.html#specialDescListWith)`  `[`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor)`  `

Inherited from `TravelMessageHandler` :  
` `[`sayArriving`](../object/TravelMessageHandler.html#sayArriving)`  `[`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir)`  `[`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs)`  `[`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage)`  `[`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs)`  `[`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath)`  `[`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)`  `

Inherited from `ActorTopicDatabase` :  
` `[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)`  `

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

<span id="sayDeparting"></span>

`sayDeparting (conn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[2454](../source/extras.t.html#2454)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
