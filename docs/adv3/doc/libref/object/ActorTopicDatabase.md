---
layout: docs
---
<span class="title">ActorTopicDatabase</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[1004](../source/actor.t.html#1004)\]

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

A TopicDatabase for an Actor. This is used not only directly for an
Actor but also for an actor's sub-databases, in ActorState and ConvNode.

Actor topic databases field queries for the various types of topic-based
interactions an actor can participate in: ASK, TELL, SHOW, GIVE, and so
on.

Each actor has its own topic database, which means each actor can have
its own set of responses. Actor states can also have their own separate
topic databases; this makes it easy to make an actor's response to a
particular question vary according to the actor's state. Conversation
nodes can also have their own separate databases, which allows for
things like threaded conversations.

`class `**`ActorTopicDatabase`**` :   `[`TopicDatabase`](../object/TopicDatabase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorTopicDatabase`**  
`         `[`TopicDatabase`](../object/TopicDatabase.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ActorTopicDatabase`**  
`         `[`Actor`](../object/Actor.html)  
`                 `[`UntakeableActor`](../object/UntakeableActor.html)  
`                         `[`Person`](../object/Person.html)  
`         `[`ActorState`](../object/ActorState.html)  
`                 `[`AccompanyingInTravelState`](../object/AccompanyingInTravelState.html)  
`                         `[`GuidedInTravelState`](../object/GuidedInTravelState.html)  
`                 `[`AccompanyingState`](../object/AccompanyingState.html)  
`                         `[`GuidedTourState`](../object/GuidedTourState.html)  
`                 `[`ConversationReadyState`](../object/ConversationReadyState.html)  
`                 `[`HermitActorState`](../object/HermitActorState.html)  
`                 `[`InConversationState`](../object/InConversationState.html)  
`         `[`ConvNode`](../object/ConvNode.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`askForTopics`](#askForTopics)`  `[`askTopics`](#askTopics)`  `[`commandTopics`](#commandTopics)`  `[`giveTopics`](#giveTopics)`  `[`initiateTopics`](#initiateTopics)`  `[`miscTopics`](#miscTopics)`  `[`showTopics`](#showTopics)`  `[`specialTopics`](#specialTopics)`  `[`tellTopics`](#tellTopics)`  `

Inherited from `TopicDatabase` :  
` `[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions)`  `[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)`  `[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`initiateTopic`](#initiateTopic)`  `[`showTopicResponse`](#showTopicResponse)`  `

Inherited from `TopicDatabase` :  
` `[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`addTopicToList`](../object/TopicDatabase.html#addTopicToList)`  `[`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch)`  `[`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse)`  `[`getTopicOwner`](../object/TopicDatabase.html#getTopicOwner)`  `[`handleTopic`](../object/TopicDatabase.html#handleTopic)`  `[`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic)`  `[`removeTopic`](../object/TopicDatabase.html#removeTopic)`  `[`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList)`  `[`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="askForTopics"></span>

`askForTopics`

[actor.t](../file/actor.t.html)\[[1077](../source/actor.t.html#1077)\]

<div class="desc">

*no description available*

</div>

<span id="askTopics"></span>

`askTopics`

[actor.t](../file/actor.t.html)\[[1076](../source/actor.t.html#1076)\]

<div class="desc">

Our 'ask about', 'ask for', 'tell about', 'give', 'show', miscellaneous,
command, and self-initiated topic databases - these are vectors we
initialize as needed. Since every actor and every actor state has its
own separate topic database, it's likely that the bulk of these
databases will be empty, so we don't bother even creating a vector for a
topic list until the first topic is added. This means we have to be able
to cope with these being nil anywhere we use them.

</div>

<span id="commandTopics"></span>

`commandTopics`

[actor.t](../file/actor.t.html)\[[1082](../source/actor.t.html#1082)\]

<div class="desc">

*no description available*

</div>

<span id="giveTopics"></span>

`giveTopics`

[actor.t](../file/actor.t.html)\[[1080](../source/actor.t.html#1080)\]

<div class="desc">

*no description available*

</div>

<span id="initiateTopics"></span>

`initiateTopics`

[actor.t](../file/actor.t.html)\[[1083](../source/actor.t.html#1083)\]

<div class="desc">

*no description available*

</div>

<span id="miscTopics"></span>

`miscTopics`

[actor.t](../file/actor.t.html)\[[1081](../source/actor.t.html#1081)\]

<div class="desc">

*no description available*

</div>

<span id="showTopics"></span>

`showTopics`

[actor.t](../file/actor.t.html)\[[1079](../source/actor.t.html#1079)\]

<div class="desc">

*no description available*

</div>

<span id="specialTopics"></span>

`specialTopics`

[actor.t](../file/actor.t.html)\[[1086](../source/actor.t.html#1086)\]

<div class="desc">

our special command database

</div>

<span id="tellTopics"></span>

`tellTopics`

[actor.t](../file/actor.t.html)\[[1078](../source/actor.t.html#1078)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initiateTopic"></span>

`initiateTopic (obj)`

[actor.t](../file/actor.t.html)\[[1011](../source/actor.t.html#1011)\]

<div class="desc">

Initiate conversation on the given simulation object. If we can find an
InitiateTopic matching the given object, we'll show its topic response
and return true; if we can't find a topic to initiate, we'll simply
return nil.

</div>

<span id="showTopicResponse"></span>

`showTopicResponse (fromActor, topic, resp)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1031](../source/actor.t.html#1031)\]

<div class="desc">

show a topic response

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
