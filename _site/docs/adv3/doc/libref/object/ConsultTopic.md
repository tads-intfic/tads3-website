<span class="title">ConsultTopic</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[1666](../source/objects.t.html#1666)\]

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

A consultation topic. You can place one or more of these inside a
Consultable object (using the 'location' property, or the '+' notation),
to create a database of topics that can be looked up in the consultable.

`class `**`ConsultTopic`**` :   `[`TopicMatchTopic`](../object/TopicMatchTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ConsultTopic`**  
`         `[`TopicMatchTopic`](../object/TopicMatchTopic.html)  
`                 `[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
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

` `[`includeInList`](#includeInList)`  `

Inherited from `TopicMatchTopic` :  
` `[`matchExactCase`](../object/TopicMatchTopic.html#matchExactCase)`  `[`matchPattern`](../object/TopicMatchTopic.html#matchPattern)`  `

Inherited from `TopicEntry` :  
` `[`altTalkCount`](../object/TopicEntry.html#altTalkCount)`  `[`altTopicList`](../object/TopicEntry.html#altTopicList)`  `[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)`  `[`isActive`](../object/TopicEntry.html#isActive)`  `[`isConversational`](../object/TopicEntry.html#isConversational)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`talkCount`](../object/TopicEntry.html#talkCount)`  `[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`setTopicPronouns`](#setTopicPronouns)`  `

Inherited from `TopicMatchTopic` :  
` `[`findMatchObj`](../object/TopicMatchTopic.html#findMatchObj)`  `[`isMatchPossible`](../object/TopicMatchTopic.html#isMatchPossible)`  `[`matchTopic`](../object/TopicMatchTopic.html#matchTopic)`  `

Inherited from `TopicEntry` :  
` `[`addAltTopic`](../object/TopicEntry.html#addAltTopic)`  `[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`adjustScore`](../object/TopicEntry.html#adjustScore)`  `[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)`  `[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)`  `[`checkIsActive`](../object/TopicEntry.html#checkIsActive)`  `[`deferToEntry`](../object/TopicEntry.html#deferToEntry)`  `[`getActor`](../object/TopicEntry.html#getActor)`  `[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)`  `[`handleTopic`](../object/TopicEntry.html#handleTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)`  `[`noteInvocation`](../object/TopicEntry.html#noteInvocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1668](../source/objects.t.html#1668)\]

<div class="desc">

include in the consultation list

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1674](../source/objects.t.html#1674)\]

<div class="desc">

don't set any pronouns for the topic - the consultable itself should be
the pronoun antecedent

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>