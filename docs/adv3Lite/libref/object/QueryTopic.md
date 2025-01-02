---
layout: docs
---
<span class="title">QueryTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4545](../source/actor.t.html#4545)\]

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

A QueryTopic is a kind of SpecialTopic that extends the range of
questions that the player (character) can ask an NPC from ASK ABOUT
so-and-so to ASK WHO/WHAT/WHY/WHERE/WHETHER/IF/HOW so-and-so. The type
of question to be matched (who/what/why/when etc.) needs to be defined
on a QueryTopic's qType property (so that it can be matched by the
QueryTopic's grammar). The remainder of the question is the Topic a
particular QueryTopic matches.

`class `**`QueryTopic`**` :   `[`SpecialTopic`](../object/SpecialTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`QueryTopic`**  
`         `[`SpecialTopic`](../object/SpecialTopic.html)  
`                 `[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                                 `[`Redirector`](../object/Redirector.html)  
`                                         object`  
`                         `[`TopicEntry`](../object/TopicEntry.html)  
`                                 object`  
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

` `[`includeInList`](#includeInList)`  `[`qtype`](#qtype)`  `

Inherited from `SpecialTopic` :  
` `[`askMatchObj`](../object/SpecialTopic.html#askMatchObj)`  `[`autoName`](../object/SpecialTopic.html#autoName)`  `[`rex`](../object/SpecialTopic.html#rex)`  `[`tellMatchObj`](../object/SpecialTopic.html#tellMatchObj)`  `

Inherited from `ActorTopicEntry` :  
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :  
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`buildName`](#buildName)`  `[`initializeTopicEntry`](#initializeTopicEntry)`  `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `ActorTopicEntry` :  
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

Inherited from `ReplaceRedirector` :  
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

Inherited from `TopicEntry` :  
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4646](../source/actor.t.html#4646)\]

<div class="desc">

A QueryTopic belongs in the queryTopics list of its TopicDatabase

</div>

<span id="qtype"></span>

`qtype`

[actor.t](../file/actor.t.html)\[[4578](../source/actor.t.html#4578)\]

<div class="desc">

The list of query types we match, e.g. 'where'. To match multiple types
list them divided by a vertical bar, e.g. 'if\|whether'

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildName"></span>

`buildName ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4622](../source/actor.t.html#4622)\]

<div class="desc">

When we build the name of a QueryTopic (for use in a list of topic
suggestions) we need to include the query type (qType).

</div>

<span id="initializeTopicEntry"></span>

`initializeTopicEntry ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4581](../source/actor.t.html#4581)\]

<div class="desc">

*no description available*

</div>

<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4551](../source/actor.t.html#4551)\]

<div class="desc">

Check whether this QueryTopic matches the question asked. For it to do
so it must match not only the topic but the qType (query type)

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
