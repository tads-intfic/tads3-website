---
layout: docs
---
<span class="title">HitTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3662](../source/actor.t.html#3662)\]

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



A HitTopic can be used to respond to HIT ACTOR (or ATTACK ACTOR, etc.),
provided the actor's allowAtack property has been overridden to true

`class `**`HitTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HitTopic`**  
[`MiscTopic`](../object/MiscTopic.html)  
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



[`impliesGreeting`](#impliesGreeting)[`includeInList`](#includeInList)[`isConversational`](#isConversational)[`matchObj`](#matchObj)



Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated)[`active`](../object/ActorTopicEntry.html#active)[`autoName`](../object/ActorTopicEntry.html#autoName)[`convKeys`](../object/ActorTopicEntry.html#convKeys)[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)[`getActor`](../object/ActorTopicEntry.html#getActor)[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)[`listOrder`](../object/ActorTopicEntry.html#listOrder)[`name`](../object/ActorTopicEntry.html#name)[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive)[`matchExactCase`](../object/TopicEntry.html#matchExactCase)[`matchPattern`](../object/TopicEntry.html#matchPattern)[`matchScore`](../object/TopicEntry.html#matchScore)[`scoreBoost`](../object/TopicEntry.html#scoreBoost)[`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `MiscTopic` :  
[`matchTopic`](../object/MiscTopic.html#matchTopic)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate)[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)[`buildName`](../object/ActorTopicEntry.html#buildName)[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)[`deactivate`](../object/ActorTopicEntry.html#deactivate)[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)[`isReachable`](../object/ActorTopicEntry.html#isReachable)[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic)[`scoreBooster`](../object/TopicEntry.html#scoreBooster)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="impliesGreeting"></span>

`impliesGreeting`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3679](../source/actor.t.html#3679)\]



Hitting someone does not trigger a greeting



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3667](../source/actor.t.html#3667)\]



HitTopics should be included in the miscTopics list of their
TopicDatabase (Actor or ActorState)



<span id="isConversational"></span>

`isConversational`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3676](../source/actor.t.html#3676)\]



Hitting someone is not normally regarded as form of conversational
exchange.



<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3670](../source/actor.t.html#3670)\]



HitTopics match the hitTopicObj



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


