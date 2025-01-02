---
layout: docs
---
<span class="title">ThingMatchTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3036](../source/actor.t.html#3036)\]

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



A base class for topic entries that match simple simulation objects.

`class `**`ThingMatchTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ThingMatchTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ThingMatchTopic`**  
[`GiveShowTopic`](../object/GiveShowTopic.html)  
[`GiveTopic`](../object/GiveTopic.html)  
[`ShowTopic`](../object/ShowTopic.html)  
[`InitiateTopic`](../object/InitiateTopic.html)  
[`TopicOrThingMatchTopic`](../object/TopicOrThingMatchTopic.html)  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`includeInList`](../object/TopicEntry.html#includeInList) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchScore`](../object/TopicEntry.html#matchScore) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isMatchPossible`](#isMatchPossible) [`matchTopic`](#matchTopic) [`setTopicPronouns`](#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3068](../source/actor.t.html#3068)\]



It's possible for us to match if any of our matchObj objects are in
scope.



<span id="matchTopic"></span>

`matchTopic (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3041](../source/actor.t.html#3041)\]



Match the topic. We'll match the simulation object in 'obj' to our
matchObj object or list.



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3084](../source/actor.t.html#3084)\]



set the topic pronouns





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


