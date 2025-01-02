---
layout: docs
---
<span class="title">DefaultConsultTopic</span><span class="type">class</span>

[topicEntry.t](../file/topicEntry.t.html)\[[361](../source/topicEntry.t.html#361)\]

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

A DefaultConsultTopic is used to provide a response when a Consultable
is consulted about something not otherwise provided for.

`class `**`DefaultConsultTopic`**` :   `[`ConsultTopic`](../object/ConsultTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DefaultConsultTopic`**  
`         `[`ConsultTopic`](../object/ConsultTopic.html)  
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

` `[`isActive`](#isActive)`  `[`matchScore`](#matchScore)`  `

Inherited from `ConsultTopic` :  
` `[`includeInList`](../object/ConsultTopic.html#includeInList)`  `

Inherited from `TopicEntry` :  
` `[`active`](../object/TopicEntry.html#active)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `TopicEntry` :  
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isActive"></span>

`isActive`<span class="rem">OVERRIDDEN</span>

[topicEntry.t](../file/topicEntry.t.html)\[[383](../source/topicEntry.t.html#383)\]

<div class="desc">

A DefaultConsultTopic is normally active

</div>

<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[topicEntry.t](../file/topicEntry.t.html)\[[380](../source/topicEntry.t.html#380)\]

<div class="desc">

A DefaultConsultTopic has the lowest possible matchScore so that any
matching ConsultTopic will always take precedence.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[topicEntry.t](../file/topicEntry.t.html)\[[364](../source/topicEntry.t.html#364)\]

<div class="desc">

A DefaultConsultTopic matches anything, so just return our matchScore

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
