---
layout: docs
---
<span class="title">AltTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4744](../source/actor.t.html#4744)\]

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



An AltTopic is a TopicEntry that can be located inside another
TopicEntry; to provide an alternative response to the same
conversational commands when its isActive property is true. An AltTopic
takes precedence over its enclosing TopicEntry when its active property
is true, but otherwise takes most of its properties (apart from its
topicResponse) from the TopicEntry in which it is located. You can have
as many AltTopics as you like associated with any given TopicEntry; the
one that will be used will be the last to be defined for which isActive
is true.

`class `**`AltTopic`**` :   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AltTopic`**  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actionPhrase`](#actionPhrase) [`allowAction`](#allowAction) [`convKeys`](#convKeys) [`getActor`](#getActor) [`includeInList`](#includeInList) [`myAction`](#myAction) [`name`](#name) [`suggestAs`](#suggestAs)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`matchScore`](../object/TopicEntry.html#matchScore) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`matchTopic`](#matchTopic)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate) [`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable) [`buildName`](../object/ActorTopicEntry.html#buildName) [`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied) [`deactivate`](../object/ActorTopicEntry.html#deactivate) [`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics) [`handleTopic`](../object/ActorTopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry) [`isReachable`](../object/ActorTopicEntry.html#isReachable) [`nodeActive`](../object/ActorTopicEntry.html#nodeActive) [`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics) [`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic) [`scoreBooster`](../object/TopicEntry.html#scoreBooster) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actionPhrase"></span>

`actionPhrase`

[actor.t](../file/actor.t.html)\[[4759](../source/actor.t.html#4759)\]



*no description available*



<span id="allowAction"></span>

`allowAction`

[actor.t](../file/actor.t.html)\[[4757](../source/actor.t.html#4757)\]



*no description available*



<span id="convKeys"></span>

`convKeys`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4752](../source/actor.t.html#4752)\]



*no description available*



<span id="getActor"></span>

`getActor`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4750](../source/actor.t.html#4750)\]



By default we take most of our property values from the corresponding
property on the TopicEntry we're located in



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4753](../source/actor.t.html#4753)\]



*no description available*



<span id="myAction"></span>

`myAction`

[actor.t](../file/actor.t.html)\[[4758](../source/actor.t.html#4758)\]



*no description available*



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4754](../source/actor.t.html#4754)\]



*no description available*



<span id="suggestAs"></span>

`suggestAs`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4755](../source/actor.t.html#4755)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4766](../source/actor.t.html#4766)\]



We match if our location matches, but if it does match we add our
relative source text order to our location's match score to give us a
higher score the later we're defined after our associated TopicEntry.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


