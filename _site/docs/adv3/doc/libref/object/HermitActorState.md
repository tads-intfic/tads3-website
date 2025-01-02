<span class="title">HermitActorState</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5228](../source/actor.t.html#5228)\]

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

A "hermit" actor state is a state where the actor is unresponsive to
conversational overtures (ASK ABOUT, TELL ABOUT, HELLO, GOODBYE, YES,
NO, SHOW TO, GIVE TO, and any orders directed to the actor). Any attempt
at conversation will be met with the 'noResponse' message.

`class `**`HermitActorState`**` :   `[`ActorState`](../object/ActorState.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`HermitActorState`**  
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

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`limitSuggestions`](#limitSuggestions)`  `

Inherited from `ActorState` :  
` `[`autoSuggest`](../object/ActorState.html#autoSuggest)`  `[`getImpliedConvState`](../object/ActorState.html#getImpliedConvState)`  `[`isInitState`](../object/ActorState.html#isInitState)`  `[`location`](../object/ActorState.html#location)`  `[`stateDesc`](../object/ActorState.html#stateDesc)`  `[`stateSuggestedTopics`](../object/ActorState.html#stateSuggestedTopics)`  `

` `

Inherited from `ActorTopicDatabase` :  
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`specialTopics`](../object/ActorTopicDatabase.html#specialTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

Inherited from `TopicDatabase` :  
` `[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)`  `[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`handleConversation`](#handleConversation)`  `[`noResponse`](#noResponse)`  `

Inherited from `ActorState` :  
` `[`activateState`](../object/ActorState.html#activateState)`  `[`afterAction`](../object/ActorState.html#afterAction)`  `[`afterTravel`](../object/ActorState.html#afterTravel)`  `[`arrivingTurn`](../object/ActorState.html#arrivingTurn)`  `[`arrivingWithDesc`](../object/ActorState.html#arrivingWithDesc)`  `[`beforeAction`](../object/ActorState.html#beforeAction)`  `[`beforeTravel`](../object/ActorState.html#beforeTravel)`  `[`construct`](../object/ActorState.html#construct)`  `[`deactivateState`](../object/ActorState.html#deactivateState)`  `[`distantSpecialDesc`](../object/ActorState.html#distantSpecialDesc)`  `[`endConversation`](../object/ActorState.html#endConversation)`  `[`getActor`](../object/ActorState.html#getActor)`  `[`getNominalTraveler`](../object/ActorState.html#getNominalTraveler)`  `[`getSuggestedTopicList`](../object/ActorState.html#getSuggestedTopicList)`  `[`getTopicOwner`](../object/ActorState.html#getTopicOwner)`  `[`initializeActorState`](../object/ActorState.html#initializeActorState)`  `[`justFollowed`](../object/ActorState.html#justFollowed)`  `[`notifyTopicResponse`](../object/ActorState.html#notifyTopicResponse)`  `[`obeyCommand`](../object/ActorState.html#obeyCommand)`  `[`remoteSpecialDesc`](../object/ActorState.html#remoteSpecialDesc)`  `[`showSpecialDescInContents`](../object/ActorState.html#showSpecialDescInContents)`  `[`specialDesc`](../object/ActorState.html#specialDesc)`  `[`specialDescListWith`](../object/ActorState.html#specialDescListWith)`  `[`suggestTopicsFor`](../object/ActorState.html#suggestTopicsFor)`  `[`takeTurn`](../object/ActorState.html#takeTurn)`  `

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

<span id="limitSuggestions"></span>

`limitSuggestions`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5278](../source/actor.t.html#5278)\]

<div class="desc">

Since the hermit state blocks topics from outside the state, don't offer
suggestions for other topics while in this state.

Note that you might sometimes want to override this to allow the usual
topic suggestions (by setting this to nil). In particular:

\- If it's not outwardly obvious that the actor is unresponsive, you'll
probably want to allow suggestions. Remember, TOPICS suggests topics
that the \*PC\* wants to talk about, not things the NPC is interested
in. If the PC doesn't necessarily know that the NPC won't respond, the
PC would still want to ask about those topics.

\- If the hermit state is to be short-lived, you might want to show the
topic suggestions even in the hermit state, so that the player is aware
that there are still useful topics to explore with the NPC. The player
might otherwise assume that the NPC is out of useful topics, and not
bother trying again later when the NPC becomes more responsive.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="handleConversation"></span>

`handleConversation (otherActor, topic, convType)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5251](../source/actor.t.html#5251)\]

<div class="desc">

all conversation actions get the same default response

</div>

<span id="noResponse"></span>

`noResponse ( )`

[actor.t](../file/actor.t.html)\[[5248](../source/actor.t.html#5248)\]

<div class="desc">

Show our response to any conversational command. We'll simply show the
standard "there's no response" message by default, but subclasses can
(and usually should) override this to explain what's really going on.
Note that this routine will be invoked for any sort of conversation
command, so any override needs to be generic enough that it's equally
good for ASK, TELL, and everything else.

Note that it's fairly easy to create a shuffled list of random messages,
if you want to add some variety to the actor's responses. To do this,
use an embedded ShuffledEventList:

myState: HermitActorState  
noResponse() { myList.doScript(); }  
myList: ShuffledEventList {  
\['message1', 'message2', 'message3'\] }  
;

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
