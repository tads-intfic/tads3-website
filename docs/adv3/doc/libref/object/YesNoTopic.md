---
layout: docs
---
<span class="title">YesNoTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3513](../source/actor.t.html#3513)\]

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



A YES/NO topic. These handle YES and/or NO, which are normally used as
responses to questions posed by the NPC. YesNoTopic is the base class,
and can be used to create a single response for both YES and NO;
YesTopic provides a response just for YES; and NoTopic provides a
response just for NO. The only thing an instance of these classes should
normally need to specify is the response text (or a list of response
strings, by multiply inheriting from an EventList subclass as usual).

`class `**`YesNoTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`YesNoTopic`**  
[`MiscTopic`](../object/MiscTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`YesNoTopic`**  
[`NoTopic`](../object/NoTopic.html)  
[`YesTopic`](../object/YesTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList)[`matchList`](#matchList)



Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `MiscTopic` :  
[`isMatchPossible`](../object/MiscTopic.html#isMatchPossible)[`matchTopic`](../object/MiscTopic.html#matchTopic)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)[`setTopicPronouns`](../object/TopicEntry.html#setTopicPronouns)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3514](../source/actor.t.html#3514)\]



*no description available*



<span id="matchList"></span>

`matchList`

[actor.t](../file/actor.t.html)\[[3521](../source/actor.t.html#3521)\]



our list of matching topic objects - we'll only ever be asked to match
'yesTopicObj' (for YES inputs) or 'noTopicObj' (for NO inputs)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


