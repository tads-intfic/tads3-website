<span class="title">ActorHelloTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3345](../source/actor.t.html#3345)\]

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

Actor Hello topic - this handles greetings when an NPC initiates the
conversation.

`class `**`ActorHelloTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorHelloTopic`**  
`         `[`MiscTopic`](../object/MiscTopic.html)  
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

` `[`impliesGreeting`](#impliesGreeting)`  `[`includeInList`](#includeInList)`  `[`matchList`](#matchList)`  `[`matchScore`](#matchScore)`  `

` `

Inherited from `TopicEntry` :  
` `[`altTalkCount`](../object/TopicEntry.html#altTalkCount)`  `[`altTopicList`](../object/TopicEntry.html#altTopicList)`  `[`isActive`](../object/TopicEntry.html#isActive)`  `[`isConversational`](../object/TopicEntry.html#isConversational)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`talkCount`](../object/TopicEntry.html#talkCount)`  `[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`noteInvocation`](#noteInvocation)`  `

Inherited from `MiscTopic` :  
` `[`isMatchPossible`](../object/MiscTopic.html#isMatchPossible)`  `[`matchTopic`](../object/MiscTopic.html#matchTopic)`  `

Inherited from `TopicEntry` :  
` `[`addAltTopic`](../object/TopicEntry.html#addAltTopic)`  `[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`adjustScore`](../object/TopicEntry.html#adjustScore)`  `[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)`  `[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)`  `[`checkIsActive`](../object/TopicEntry.html#checkIsActive)`  `[`deferToEntry`](../object/TopicEntry.html#deferToEntry)`  `[`getActor`](../object/TopicEntry.html#getActor)`  `[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)`  `[`handleTopic`](../object/TopicEntry.html#handleTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)`  `[`setTopicPronouns`](../object/TopicEntry.html#setTopicPronouns)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="impliesGreeting"></span>

`impliesGreeting`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3351](../source/actor.t.html#3351)\]

<div class="desc">

this is a greeting, so we don't want to trigger another greeting

</div>

<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3346](../source/actor.t.html#3346)\]

<div class="desc">

*no description available*

</div>

<span id="matchList"></span>

`matchList`

[actor.t](../file/actor.t.html)\[[3347](../source/actor.t.html#3347)\]

<div class="desc">

*no description available*

</div>

<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3348](../source/actor.t.html#3348)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="noteInvocation"></span>

`noteInvocation (fromActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3357](../source/actor.t.html#3357)\]

<div class="desc">

if we use this as a greeting upon entering a ConvNode, we'll want to
stay in the node afterward

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
