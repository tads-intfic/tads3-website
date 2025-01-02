---
layout: docs
---
<span class="title">ByeTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3371](../source/actor.t.html#3371)\]

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

A goodbye topic - this handles both explicit GOODBYE commands and
implied goodbyes. Implied goodbyes happen when a conversation ends
without an explicit GOODBYE command, such as when the player character
walks away from the NPC, or the NPC gets bored and wanders off, or the
NPC terminates the conversation of its own volition.

`class `**`ByeTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ByeTopic`**  
[`MiscTopic`](../object/MiscTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
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

[`impliesGreeting`](#impliesGreeting)[`includeInList`](#includeInList)[`matchList`](#matchList)



Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `MiscTopic` :  
[`isMatchPossible`](../object/MiscTopic.html#isMatchPossible)[`matchTopic`](../object/MiscTopic.html#matchTopic)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)[`setTopicPronouns`](../object/TopicEntry.html#setTopicPronouns)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="impliesGreeting"></span>

`impliesGreeting`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3385](../source/actor.t.html#3385)\]

<div class="desc">

If we're not already in a conversation when we say GOODBYE, don't bother
saying HELLO implicitly - if the player is saying GOODBYE explicitly,
she probably has the impression that there's some kind of interaction
already going on with the NPC. If we didn't override this, you'd get an
automatic HELLO followed by the explicit GOODBYE when not already in
conversation, which is a little weird.

</div>

<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3372](../source/actor.t.html#3372)\]

<div class="desc">

*no description available*

</div>

<span id="matchList"></span>

`matchList`

[actor.t](../file/actor.t.html)\[[3373](../source/actor.t.html#3373)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
