---
layout: docs
---
<span class="title">GreetingTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3767](../source/actor.t.html#3767)\]

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



A GreetingTopic is a kind of TopicEntry used in greeting protocols
(saying Hello or Goodbye). Game code will not use this class directly
but will instead use one or more of its subclasses

`class `**`GreetingTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GreetingTopic`**  
[`MiscTopic`](../object/MiscTopic.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`GreetingTopic`**  
[`ActorByeTopic`](../object/ActorByeTopic.html)  
[`BoredByeTopic`](../object/BoredByeTopic.html)  
[`ByeTopic`](../object/ByeTopic.html)  
[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)  
[`HelloTopic`](../object/HelloTopic.html)  
[`ActorHelloTopic`](../object/ActorHelloTopic.html)  
[`ImpHelloTopic`](../object/ImpHelloTopic.html)  
[`ImpByeTopic`](../object/ImpByeTopic.html)  
[`LeaveByeTopic`](../object/LeaveByeTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`changeToState`](#changeToState)[`impliesGreeting`](#impliesGreeting)[`includeInList`](#includeInList)



Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated)[`active`](../object/ActorTopicEntry.html#active)[`autoName`](../object/ActorTopicEntry.html#autoName)[`convKeys`](../object/ActorTopicEntry.html#convKeys)[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)[`getActor`](../object/ActorTopicEntry.html#getActor)[`isConversational`](../object/ActorTopicEntry.html#isConversational)[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)[`listOrder`](../object/ActorTopicEntry.html#listOrder)[`name`](../object/ActorTopicEntry.html#name)[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive)[`matchExactCase`](../object/TopicEntry.html#matchExactCase)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchPattern`](../object/TopicEntry.html#matchPattern)[`matchScore`](../object/TopicEntry.html#matchScore)[`scoreBoost`](../object/TopicEntry.html#scoreBoost)[`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`handleTopic`](#handleTopic)

Inherited from `MiscTopic` :  
[`matchTopic`](../object/MiscTopic.html#matchTopic)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate)[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)[`buildName`](../object/ActorTopicEntry.html#buildName)[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)[`deactivate`](../object/ActorTopicEntry.html#deactivate)[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)[`isReachable`](../object/ActorTopicEntry.html#isReachable)[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic)[`scoreBooster`](../object/TopicEntry.html#scoreBooster)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="changeToState"></span>

`changeToState`

[actor.t](../file/actor.t.html)\[[3776](../source/actor.t.html#3776)\]



It may be that we want to change to a different actor state when we
begin or end a conversation. If so the changeToState property can be
used to specify which state to change to.



<span id="impliesGreeting"></span>

`impliesGreeting`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3769](../source/actor.t.html#3769)\]



*no description available*



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3768](../source/actor.t.html#3768)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="handleTopic"></span>

`handleTopic ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3782](../source/actor.t.html#3782)\]



Handling a GreetingTopic includes the requested state change, if
changeToState is defined





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


