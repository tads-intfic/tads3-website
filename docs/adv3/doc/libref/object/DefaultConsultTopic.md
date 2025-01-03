---
layout: docs
---
<span class="title">DefaultConsultTopic</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[1683](../source/objects.t.html#1683)\]

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



A default topic entry for a consultable. You can include one (or more)
of these in a consultable's database to provide a topic of last resort
that answers to any topics that aren't in the database themselves.

`class `**`DefaultConsultTopic`**` :   `[`DefaultTopic`](../object/DefaultTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultConsultTopic`**  
[`DefaultTopic`](../object/DefaultTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList)

Inherited from `DefaultTopic` :  
[`excludeMatch`](../object/DefaultTopic.html#excludeMatch) [`matchScore`](../object/DefaultTopic.html#matchScore)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setTopicPronouns`](#setTopicPronouns)

Inherited from `DefaultTopic` :  
[`isMatchPossible`](../object/DefaultTopic.html#isMatchPossible) [`matchTopic`](../object/DefaultTopic.html#matchTopic)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1684](../source/objects.t.html#1684)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1685](../source/objects.t.html#1685)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


