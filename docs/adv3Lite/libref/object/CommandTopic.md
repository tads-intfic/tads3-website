---
---
<span class="title">CommandTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3557](../source/actor.t.html#3557)\]

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

A CommandTopic is a TopicEntry that handles a command directed at this
actor (e.g. BOB, JUMP).

`class `**`CommandTopic`**` :   `[`CommandTopicHelper`](../object/CommandTopicHelper.html)`   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandTopic`**  
`         `[`CommandTopicHelper`](../object/CommandTopicHelper.html)  
`                 `[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)  
`                         object`  
`         `[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                         `[`Redirector`](../object/Redirector.html)  
`                                 object`  
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

` `[`includeInList`](#includeInList)`  `[`matchDobj`](#matchDobj)`  `[`matchIobj`](#matchIobj)`  `[`myAction`](#myAction)`  `

Inherited from `CommandTopicHelper` :  
` `[`allowAction`](../object/CommandTopicHelper.html#allowAction)`  `

` `

Inherited from `ActorTopicEntry` :  
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :  
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchTopic`](#matchTopic)`  `

Inherited from `CommandTopicHelper` :  
` `[`handleTopic`](../object/CommandTopicHelper.html#handleTopic)`  `

Inherited from `LCommandTopicHelper` :  
` `[`actionPhrase`](../object/LCommandTopicHelper.html#actionPhrase)`  `[`getName`](../object/LCommandTopicHelper.html#getName)`  `

Inherited from `ActorTopicEntry` :  
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`buildName`](../object/ActorTopicEntry.html#buildName)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

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

[actor.t](../file/actor.t.html)\[[3598](../source/actor.t.html#3598)\]

<div class="desc">

CommandTopics are included in the commandTopics list of their
ActorTopicDatabase

</div>

<span id="matchDobj"></span>

`matchDobj`

[actor.t](../file/actor.t.html)\[[3587](../source/actor.t.html#3587)\]

<div class="desc">

The direct and indirect objects I must match (individually or as one of
a list) if this CommandTopic is to be matched.

</div>

<span id="matchIobj"></span>

`matchIobj`

[actor.t](../file/actor.t.html)\[[3588](../source/actor.t.html#3588)\]

<div class="desc">

*no description available*

</div>

<span id="myAction"></span>

`myAction`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3591](../source/actor.t.html#3591)\]

<div class="desc">

the action I've just matched.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3558](../source/actor.t.html#3558)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
