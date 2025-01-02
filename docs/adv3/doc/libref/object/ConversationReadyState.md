---
layout: docs
---
<span class="title">ConversationReadyState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4742](../source/actor.t.html#4742)\]

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



A "ready for conversation" state. This can be used as the base class for
actor states when the actor is receptive to conversation, and we want to
have the sense of a conversational context. The key feature that this
class provides is the ability to provide messages when engaging and
disengaging the conversation.

Note that this state is NOT required for conversation, since the basic
ActorState object accepts conversational commands like ASK, TELL, GIVE,
and TAKE. The special feature of the "conversation ready" state is that
we explicitly move the actor to a separate state when conversation
begins. This is especially appropriate for states in which the NPC is
actively carrying on some other activity; the conversation should
interrupt those states, so that the actor stops the other activity and
gives us its full attention.

This type of state can be associated with its in-conversation state
object in one of two ways. First, the inConvState property can be
explicitly set to point to the in-conversation state object. Second,
this object can be nested inside its in-conversation state object via
the 'location' property (so you can use the '+' syntax to put this
object inside its in-conversation state object). The 'ready' object goes
inside the 'conversing' object because a single 'conversing' object can
frequently be shared among several 'ready' states.

`class `**`ConversationReadyState`**` :   `[`ActorState`](../object/ActorState.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConversationReadyState`**  
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



[`getImpliedConvState`](#getImpliedConvState) [`inConvState`](#inConvState) [`stateSuggestedTopics`](#stateSuggestedTopics)

Inherited from `ActorState` :  
[`autoSuggest`](../object/ActorState.html#autoSuggest) [`isInitState`](../object/ActorState.html#isInitState) [`location`](../object/ActorState.html#location) [`stateDesc`](../object/ActorState.html#stateDesc)



Inherited from `ActorTopicDatabase` :  
[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics) [`askTopics`](../object/ActorTopicDatabase.html#askTopics) [`commandTopics`](../object/ActorTopicDatabase.html#commandTopics) [`giveTopics`](../object/ActorTopicDatabase.html#giveTopics) [`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics) [`miscTopics`](../object/ActorTopicDatabase.html#miscTopics) [`showTopics`](../object/ActorTopicDatabase.html#showTopics) [`specialTopics`](../object/ActorTopicDatabase.html#specialTopics) [`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions) [`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics) [`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`enterConversation`](#enterConversation) [`enterFromConversation`](#enterFromConversation) [`handleConversation`](#handleConversation) [`initializeActorState`](#initializeActorState) [`initiateTopic`](#initiateTopic) [`notifyTopicResponse`](#notifyTopicResponse) [`showGreetingMsg`](#showGreetingMsg)

Inherited from `ActorState` :  
[`activateState`](../object/ActorState.html#activateState) [`afterAction`](../object/ActorState.html#afterAction) [`afterTravel`](../object/ActorState.html#afterTravel) [`arrivingTurn`](../object/ActorState.html#arrivingTurn) [`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc) [`beforeAction`](../object/ActorState.html#beforeAction) [`beforeTravel`](../object/ActorState.html#beforeTravel) [`construct`](../object/ActorState.html#construct) [`deactivateState`](../object/ActorState.html#deactivateState) [`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc) [`endConversation`](../object/ActorState.html#endConversation) [`getActor`](../object/ActorState.html#getActor) [`getNominalTraveler`](../object/ActorState.html#getNominalTraveler) [`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList) [`getTopicOwner`](../object/ActorState.html#getTopicOwner) [`justFollowed`](../object/ActorState.html#justFollowed) [`obeyCommand`](../object/ActorState.html#obeyCommand) [`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc) [`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents) [`specialDesc`](../object/ActorState.html#specialDesc) [`specialDescListWith`](../object/ActorState.html#specialDescListWith) [`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor) [`takeTurn`](../object/ActorState.html#takeTurn)

Inherited from `TravelMessageHandler` :  
[`sayArriving`](../object/TravelMessageHandler.html#sayArriving) [`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir) [`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs) [`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally) [`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage) [`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs) [`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath) [`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting) [`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir) [`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs) [`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally) [`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage) [`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs) [`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath) [`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

Inherited from `ActorTopicDatabase` :  
[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic) [`addTopic`](../object/TopicDatabase.html#addTopic) [`addTopicToList`](../object/TopicDatabase.html#addTopicToList) [`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch) [`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse) [`handleTopic`](../object/TopicDatabase.html#handleTopic) [`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic) [`removeTopic`](../object/TopicDatabase.html#removeTopic) [`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList) [`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="getImpliedConvState"></span>

`getImpliedConvState`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4753](../source/actor.t.html#4753)\]



my implied conversational state is my in-conversation state



<span id="inConvState"></span>

`inConvState`

[actor.t](../file/actor.t.html)\[[4750](../source/actor.t.html#4750)\]



The associated in-conversation state. This should be set to an
InConversationState object that controls the actor's behavior while
carrying on a conversation. Note that the library will automatically set
this if the instance is nested (via its 'location' property) inside an
InConversationState object.



<span id="stateSuggestedTopics"></span>

`stateSuggestedTopics`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4934](../source/actor.t.html#4934)\]



Get this state's suggested topic list. ConversationReady states
shouldn't normally have topic entries of their own, since a
ConvversationReady state usually forwards conversation handling to its
corresponding in-conversation state. So, simply return the suggestion
list from our in-conversation state object.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="enterConversation"></span>

`enterConversation (actor, entry)`

[actor.t](../file/actor.t.html)\[[4899](../source/actor.t.html#4899)\]



Enter a conversation with the given actor, either explicitly (via HELLO
or TALK TO) or implicitly (by directly asking a question, etc). 'entry'
gives the TopicEntry that's triggering the implicit conversation entry;
if this is nil, it means that we're being triggered explicitly.



<span id="enterFromConversation"></span>

`enterFromConversation (actor, reason, oldNode)`

[actor.t](../file/actor.t.html)\[[4815](../source/actor.t.html#4815)\]



Enter this state from a conversation. This should show any message we
want to display when we're ending a conversation and switching from the
conversation to this state. 'reason' is the endConvXxx enum indicating
what triggered the termination of the conversation. 'oldNode' is the
ConvNode we were in just before we initiated the termination - we need
this information because we want to look in the ConvNode for a Bye topic
message to display, but we can't just look in the actor for the node
because it will already have been cleared out by the time we get here.

Games shouldn't normally override this method. Instead, simply create a
ByeTopic entry and put it inside the state object; we'll find the
ByeTopic and show its message for the goodbye.

If you want to distinguish between different types of goodbyes, you can
create an ImpByeTopic for any implied goodbye (i.e., the kind where the
other actor just walks away, or where we get bored of the other actor
ignoring us). You can also further differentiate by creating
BoredByeTopic and/or LeaveByeTopic objects to handle just those cases.
The regular ByeTopic will handle explicit GOODBYE commands, and the
others (ImpByeTopic, BoredByeTopic, LeaveByeTopic) will handle the
implied kinds.



<span id="handleConversation"></span>

`handleConversation (otherActor, topic, convType)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4839](../source/actor.t.html#4839)\]



handle a conversational action directed to our actor



<span id="initializeActorState"></span>

`initializeActorState ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4937](../source/actor.t.html#4937)\]



initialize the actor state object



<span id="initiateTopic"></span>

`initiateTopic (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4875](../source/actor.t.html#4875)\]



Initiate conversation based on the given simulation object. This is an
internal method that isn't usually called directly from game code; game
code usually calls the Actor's initiateTopic(), which calls this routine
to check for a topic that's part of the state object.



<span id="notifyTopicResponse"></span>

`notifyTopicResponse (fromActor, entry)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4886](../source/actor.t.html#4886)\]



Receive notification that a TopicEntry is being used (via its
handleTopic method) to respond to a command. If the TopicEntry is
conversational, automatically enter our in-conversation state.



<span id="showGreetingMsg"></span>

`showGreetingMsg (actor, explicit)`

[actor.t](../file/actor.t.html)\[[4783](../source/actor.t.html#4783)\]



Show our greeting message. If 'explicit' is true, it means that the
player character is greeting us through an explicit greeting command,
such as HELLO or TALK TO. Otherwise, the greeting is implied by some
other conversational action, such a ASK ABOUT or SHOW TO. We do nothing
by default; this should be overridden in most cases to show some sort of
exchange of pleasantries - something like this:

  
\>bob, hello  
"Hi, there," you say.

Bob looks up over his newspaper. "Oh, hello," he says, putting down the
paper. "What can I do for you?"

Note that games shouldn't usually override this method. Instead, you
should simply create a HelloTopic entry and put it inside the state
object; we'll find the HelloTopic and show its message as our greeting.

If you want to distinguish between explicit and implicit greetings, you
can create an ImpHelloTopic entry for implied greetings (i.e., the kind
of greeting that occurs automatically when the player jumps right into a
conversation with our actor using ASK ABOUT or the like, without
explicitly saying HELLO first). The regular HelloTopic will handle
explicit greetings, and the ImpHelloTopic will handle the implied kind.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


