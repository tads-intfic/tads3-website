---
layout: docs
---
<span class="title">BoredByeTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3922](../source/actor.t.html#3922)\]

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



A "bored" goodbye topic. This handles ONLY goodbyes that happen when the
actor we're talking terminates the conversation out of boredom (i.e.,
after a period of inactivity in the conversation).

Note that this is a subset of ImpByeTopic - ImpByeTopic handles "bored"
and "leaving" goodbyes, while this one handles only the "bored"
goodbyes. You can use this kind of topic if you want to differentiate
the responses to "bored" and "leaving" conversation endings.

`class `**`BoredByeTopic`**` :   `[`GreetingTopic`](../object/GreetingTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BoredByeTopic`**  
[`GreetingTopic`](../object/GreetingTopic.html)  
[`MiscTopic`](../object/MiscTopic.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`matchObj`](#matchObj) [`matchScore`](#matchScore)

Inherited from `GreetingTopic` :  
[`changeToState`](../object/GreetingTopic.html#changeToState) [`impliesGreeting`](../object/GreetingTopic.html#impliesGreeting) [`includeInList`](../object/GreetingTopic.html#includeInList)



Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`convKeys`](../object/ActorTopicEntry.html#convKeys) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`getActor`](../object/ActorTopicEntry.html#getActor) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`name`](../object/ActorTopicEntry.html#name) [`suggestAs`](../object/ActorTopicEntry.html#suggestAs) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `GreetingTopic` :  
[`handleTopic`](../object/GreetingTopic.html#handleTopic)

Inherited from `MiscTopic` :  
[`matchTopic`](../object/MiscTopic.html#matchTopic)

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



<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3924](../source/actor.t.html#3924)\]



A BoredByeTopic matches endConvBoredom only



<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3930](../source/actor.t.html#3930)\]



Give BoredByeTopic an even higher matchScore so that it takes precedence
over ImpByeTopic when both are present.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


