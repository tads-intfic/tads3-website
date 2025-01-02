<span class="title">ActorByeTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3959](../source/actor.t.html#3959)\]

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

An "actor" goodbye topic. This handles ONLY goodbyes that happen when
the NPC terminates the conversation of its own volition via
npc.endConversation().

`class `**`ActorByeTopic`**` :   `[`GreetingTopic`](../object/GreetingTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorByeTopic`**  
`         `[`GreetingTopic`](../object/GreetingTopic.html)  
`                 `[`MiscTopic`](../object/MiscTopic.html)  
`                         `[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                                         `[`Redirector`](../object/Redirector.html)  
`                                                 object`  
`                                 `[`TopicEntry`](../object/TopicEntry.html)  
`                                         object`  
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

` `[`matchObj`](#matchObj)`  `[`matchScore`](#matchScore)`  `

Inherited from `GreetingTopic` :  
` `[`changeToState`](../object/GreetingTopic.html#changeToState)`  `[`impliesGreeting`](../object/GreetingTopic.html#impliesGreeting)`  `[`includeInList`](../object/GreetingTopic.html#includeInList)`  `

` `

Inherited from `ActorTopicEntry` :  
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :  
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `GreetingTopic` :  
` `[`handleTopic`](../object/GreetingTopic.html#handleTopic)`  `

Inherited from `MiscTopic` :  
` `[`matchTopic`](../object/MiscTopic.html#matchTopic)`  `

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

<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3961](../source/actor.t.html#3961)\]

<div class="desc">

An ActorByeTopic matches endConvActor only

</div>

<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3967](../source/actor.t.html#3967)\]

<div class="desc">

Give BoredByeTopic an even higher matchScore so that it takes precedence
over ImpByeTopic when both are present.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
