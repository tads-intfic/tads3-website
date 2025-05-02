---
layout: docs
---
<span class="title">SlaveTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4478](../source/actor.t.html#4478)\]

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



A SlaveTopic is a special kind of TopicEntry created by a SpecialTopic
to function as an AskTopic, TellTopic or AskTellTopic that produces the
same response at the SpecialTopic. Game code would not normally define
SlaveTopics directly

`class `**`SlaveTopic`**` :   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SlaveTopic`**  
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



[`initialized`](#initialized) [`masterObj`](#masterObj)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`convKeys`](../object/ActorTopicEntry.html#convKeys) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`getActor`](../object/ActorTopicEntry.html#getActor) [`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`name`](../object/ActorTopicEntry.html#name) [`suggestAs`](../object/ActorTopicEntry.html#suggestAs) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`includeInList`](../object/TopicEntry.html#includeInList) [`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`matchScore`](../object/TopicEntry.html#matchScore) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`handleTopic`](#handleTopic) [`initializeTopicEntry`](#initializeTopicEntry)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate) [`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable) [`buildName`](../object/ActorTopicEntry.html#buildName) [`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied) [`deactivate`](../object/ActorTopicEntry.html#deactivate) [`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics) [`isReachable`](../object/ActorTopicEntry.html#isReachable) [`nodeActive`](../object/ActorTopicEntry.html#nodeActive) [`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics) [`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic) [`matchTopic`](../object/TopicEntry.html#matchTopic) [`scoreBooster`](../object/TopicEntry.html#scoreBooster) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="initialized"></span>

`initialized`

[actor.t](../file/actor.t.html)\[[4534](../source/actor.t.html#4534)\]



Flag: has this SlaveTopic already been initialized.



<span id="masterObj"></span>

`masterObj`

[actor.t](../file/actor.t.html)\[[4531](../source/actor.t.html#4531)\]



Our masterObj is the SpecialTopic that created us



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (matchObj_, masterObj_, includeInList_)`

[actor.t](../file/actor.t.html)\[[4481](../source/actor.t.html#4481)\]



Construct a SlaveTopic



<span id="handleTopic"></span>

`handleTopic ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4528](../source/actor.t.html#4528)\]



To handle this topic we simply call the handleTopic method on our
masterObj (i.e. the SpecialTopic that created us)



<span id="initializeTopicEntry"></span>

`initializeTopicEntry ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4508](../source/actor.t.html#4508)\]



Carry out our initialization as a TopicEntry.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


