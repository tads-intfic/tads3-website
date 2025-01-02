---
layout: docs
---
<span class="title">GiveShowTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3103](../source/actor.t.html#3103)\]

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



A GIVE/SHOW topic database entry.

Note that this base class is usable for any command that refers to a
simulation object. It's NOT suitable for ASK/TELL lists, or for other
commands that refer to topics, since we expect our 'topic' to be a
resolved simulation object.

`class `**`GiveShowTopic`**` :   `[`ThingMatchTopic`](../object/ThingMatchTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GiveShowTopic`**  
[`ThingMatchTopic`](../object/ThingMatchTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`GiveShowTopic`**  
[`GiveTopic`](../object/GiveTopic.html)  
[`ShowTopic`](../object/ShowTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList)



Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `ThingMatchTopic` :  
[`isMatchPossible`](../object/ThingMatchTopic.html#isMatchPossible)[`matchTopic`](../object/ThingMatchTopic.html#matchTopic)[`setTopicPronouns`](../object/ThingMatchTopic.html#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3105](../source/actor.t.html#3105)\]



include me in both the GIVE and SHOW lists



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


