---
layout: docs
---
<span class="title">DefaultCommandTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4288](../source/actor.t.html#4288)\]

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



DefaultTopic to match orders directed to this actor by the player
(character)

`class `**`DefaultCommandTopic`**` :   `[`CommandTopicHelper`](../object/CommandTopicHelper.html) [`DefaultTopic`](../object/DefaultTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultCommandTopic`**  
[`CommandTopicHelper`](../object/CommandTopicHelper.html)  
[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)  
`                         object`  
[`DefaultTopic`](../object/DefaultTopic.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList) [`matchObj`](#matchObj) [`matchScore`](#matchScore)

Inherited from `CommandTopicHelper` :  
[`allowAction`](../object/CommandTopicHelper.html#allowAction) [`myAction`](../object/CommandTopicHelper.html#myAction)



Inherited from `DefaultTopic` :  
[`exceptions`](../object/DefaultTopic.html#exceptions)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`convKeys`](../object/ActorTopicEntry.html#convKeys) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`getActor`](../object/ActorTopicEntry.html#getActor) [`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`name`](../object/ActorTopicEntry.html#name) [`suggestAs`](../object/ActorTopicEntry.html#suggestAs) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `CommandTopicHelper` :  
[`handleTopic`](../object/CommandTopicHelper.html#handleTopic)

Inherited from `LCommandTopicHelper` :  
[`actionPhrase`](../object/LCommandTopicHelper.html#actionPhrase) [`getName`](../object/LCommandTopicHelper.html#getName)

Inherited from `DefaultTopic` :  
[`avoidMatching`](../object/DefaultTopic.html#avoidMatching) [`matchTopic`](../object/DefaultTopic.html#matchTopic)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate) [`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable) [`buildName`](../object/ActorTopicEntry.html#buildName) [`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied) [`deactivate`](../object/ActorTopicEntry.html#deactivate) [`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics) [`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry) [`isReachable`](../object/ActorTopicEntry.html#isReachable) [`nodeActive`](../object/ActorTopicEntry.html#nodeActive) [`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics) [`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic) [`scoreBooster`](../object/TopicEntry.html#scoreBooster) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4289](../source/actor.t.html#4289)\]



*no description available*



<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4291](../source/actor.t.html#4291)\]



*no description available*



<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4290](../source/actor.t.html#4290)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


