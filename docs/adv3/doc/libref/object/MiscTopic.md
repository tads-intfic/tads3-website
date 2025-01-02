---
layout: docs
---
<span class="title">MiscTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3259](../source/actor.t.html#3259)\]

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



A base class for simple miscellaneous topics. These handle things like
YES, NO, HELLO, and GOODBYE, where the topic is entirely contained in
the verb, and there's no separate noun phrase needed to indicate the
topic.

`class `**`MiscTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MiscTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MiscTopic`**  
[`ActorByeTopic`](../object/ActorByeTopic.html)  
[`ActorHelloTopic`](../object/ActorHelloTopic.html)  
[`BoredByeTopic`](../object/BoredByeTopic.html)  
[`ByeTopic`](../object/ByeTopic.html)  
[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)  
[`HelloTopic`](../object/HelloTopic.html)  
[`ImpByeTopic`](../object/ImpByeTopic.html)  
[`ImpHelloTopic`](../object/ImpHelloTopic.html)  
[`LeaveByeTopic`](../object/LeaveByeTopic.html)  
[`YesNoTopic`](../object/YesNoTopic.html)  
[`NoTopic`](../object/NoTopic.html)  
[`YesTopic`](../object/YesTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)[`includeInList`](../object/TopicEntry.html#includeInList)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isMatchPossible`](#isMatchPossible)[`matchTopic`](#matchTopic)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)[`setTopicPronouns`](../object/TopicEntry.html#setTopicPronouns)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3273](../source/actor.t.html#3273)\]



a match is always possible for simple verb topics (since the player
could always type the verb)



<span id="matchTopic"></span>

`matchTopic (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3260](../source/actor.t.html#3260)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


