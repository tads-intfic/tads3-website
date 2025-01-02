---
layout: docs
---
<span class="title">InConversationState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4967](../source/actor.t.html#4967)\]

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



The "in-conversation" state. This works with ConversationReadyState to
handle transitions in and out of conversations. In this state, we are
actively engaged in a conversation.

Throughout this implementation, we assume that we only care about
conversations with a single character, specifically the player
character. There's generally no good reason to fully model conversations
between NPC's, since that kind of NPC activity is in most cases purely
pre-scripted and thus requires no special state tracking. Since we
generally only need to worry about tracking a conversation with the
player character, we don't bother with the possibility that we're
simultaneously in conversation with more than one other character.

`class `**`InConversationState`**` :   `[`ActorState`](../object/ActorState.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`InConversationState`**  
[`ActorState`](../object/ActorState.html)  
[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                         object`  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`attentionSpan`](#attentionSpan) [`nextState`](#nextState) [`previousState`](#previousState)

Inherited from `ActorState` :  
[`autoSuggest`](../object/ActorState.html#autoSuggest) [`getImpliedConvState`](../object/ActorState.html#getImpliedConvState) [`isInitState`](../object/ActorState.html#isInitState) [`location`](../object/ActorState.html#location) [`stateDesc`](../object/ActorState.html#stateDesc) [`stateSuggestedTopics`](../object/ActorState.html#stateSuggestedTopics)



Inherited from `ActorTopicDatabase` :  
[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics) [`askTopics`](../object/ActorTopicDatabase.html#askTopics) [`commandTopics`](../object/ActorTopicDatabase.html#commandTopics) [`giveTopics`](../object/ActorTopicDatabase.html#giveTopics) [`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics) [`miscTopics`](../object/ActorTopicDatabase.html#miscTopics) [`showTopics`](../object/ActorTopicDatabase.html#showTopics) [`specialTopics`](../object/ActorTopicDatabase.html#specialTopics) [`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions) [`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics) [`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`activateState`](#activateState) [`deactivateState`](#deactivateState) [`defaultGreetingResponse`](#defaultGreetingResponse) [`endConversation`](#endConversation) [`handleConversation`](#handleConversation) [`takeTurn`](#takeTurn)

Inherited from `ActorState` :  
[`afterAction`](../object/ActorState.html#afterAction) [`afterTravel`](../object/ActorState.html#afterTravel) [`arrivingTurn`](../object/ActorState.html#arrivingTurn) [`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc) [`beforeAction`](../object/ActorState.html#beforeAction) [`beforeTravel`](../object/ActorState.html#beforeTravel) [`construct`](../object/ActorState.html#construct) [`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc) [`getActor`](../object/ActorState.html#getActor) [`getNominalTraveler`](../object/ActorState.html#getNominalTraveler) [`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList) [`getTopicOwner`](../object/ActorState.html#getTopicOwner) [`initializeActorState`](../object/ActorState.html#initializeActorState) [`justFollowed`](../object/ActorState.html#justFollowed) [`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse) [`obeyCommand`](../object/ActorState.html#obeyCommand) [`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc) [`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents) [`specialDesc`](../object/ActorState.html#specialDesc) [`specialDescListWith`](../object/ActorState.html#specialDescListWith) [`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor)

Inherited from `TravelMessageHandler` :  
[`sayArriving`](../object/TravelMessageHandler.html#sayArriving) [`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir) [`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs) [`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally) [`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage) [`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs) [`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath) [`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting) [`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir) [`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs) [`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally) [`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage) [`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs) [`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath) [`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

Inherited from `ActorTopicDatabase` :  
[`initiateTopic`](../object/ActorTopicDatabase.html#initiateTopic) [`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic) [`addTopic`](../object/TopicDatabase.html#addTopic) [`addTopicToList`](../object/TopicDatabase.html#addTopicToList) [`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch) [`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse) [`handleTopic`](../object/TopicDatabase.html#handleTopic) [`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic) [`removeTopic`](../object/TopicDatabase.html#removeTopic) [`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList) [`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="attentionSpan"></span>

`attentionSpan`

[actor.t](../file/actor.t.html)\[[4979](../source/actor.t.html#4979)\]



Our attention span, in turns. This is the number of turns that we'll be
willing to stay in the conversation while the other character is
ignoring us. After the conversation has been idle this long, we'll
assume the other actor is no longer talking to us, so we'll terminate
the conversation ourselves.

If the NPC's doesn't have a limited attention span, set this property to
nil. This will prevent the NPC from ever disengaging of its own
volition.



<span id="nextState"></span>

`nextState`

[actor.t](../file/actor.t.html)\[[4987](../source/actor.t.html#4987)\]



The state to switch to when the conversation ends. Instances can
override this to select the next state. By default, we'll return to the
state that we were in immediately before the conversation started.



<span id="previousState"></span>

`previousState`

[actor.t](../file/actor.t.html)\[[5170](../source/actor.t.html#5170)\]



The previous state - this is the state we were in before the
conversation began, and the one we'll return to by default when the
conversation ends. We'll set this automatically on activation.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="activateState"></span>

`activateState (actor, oldState)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5118](../source/actor.t.html#5118)\]



activate this state



<span id="deactivateState"></span>

`deactivateState (actor, newState)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5152](../source/actor.t.html#5152)\]



deactivate this state



<span id="defaultGreetingResponse"></span>

`defaultGreetingResponse (actor)`

[actor.t](../file/actor.t.html)\[[5094](../source/actor.t.html#5094)\]



provide a default HELLO response, if we don't have a special TopicEntry
for it



<span id="endConversation"></span>

`endConversation (actor, reason)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5005](../source/actor.t.html#5005)\]



End the current conversation. 'reason' indicates why we're leaving the
conversation - this is one of the endConvXxx enums defined in adv3.h.

This method is a convenience only; you aren't required to call this
method to end the conversation, since you can simply switch to another
actor state directly if you prefer. This method's main purpose is to
display an appropriate message terminating the conversation while
switching to the new state. If you want to display your own message
directly from the code that's changing the state, there's no reason to
call this.

This returns true if we wish to allow the conversation to end, nil if
not.



<span id="handleConversation"></span>

`handleConversation (otherActor, topic, convType)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5051](../source/actor.t.html#5051)\]



handle a conversational command



<span id="takeTurn"></span>

`takeTurn ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5105](../source/actor.t.html#5105)\]



As our default response, point out that we're already at the actor's
service. (This isn't an error, because the other actor might not have
been talking to us, even though we thought we were talking to them.)





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


