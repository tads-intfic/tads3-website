---
layout: docs
---
<span class="title">DefaultAgendaTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4137](../source/actor.t.html#4137)\]

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

A DefaultAgendaTopic can be used to give the actor the opportunity to
seize the conversational initiative when the player enters a
conversational command for which there's no explicit match. Instead of
giving a bland default response the actor can instead respond with an
item from its own agenda, e.g. "Never mind that, what I really want to
know is...".

Items can be added to the agenda of a DefaultAgendaTopic by calling its
addToAgenda method. To obtain a reference to a DefaultAgendaTopic use
the defaultAgendaTopic property of the Actor or ActorState in which it
is located (note, therefore, that there should only be at most one of
these per Actor or Actor State).

Note that you should define the topicResponse or eventList property of a
DefaultAgendaTopic in case none of the agenda items in its agenda list
turn out to be executable.

`class `**`DefaultAgendaTopic`**` :   `[`AgendaManager`](../object/AgendaManager.html)[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DefaultAgendaTopic`**  
[`AgendaManager`](../object/AgendaManager.html)  
`                 object`  
[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)  
[`DefaultTopic`](../object/DefaultTopic.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
[`TopicEntry`](../object/TopicEntry.html)  
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

[`active`](#active)[`matchScore`](#matchScore)

Inherited from `AgendaManager` :  
[`agendaList`](../object/AgendaManager.html#agendaList)

Inherited from `DefaultAnyTopic` :  
[`includeInList`](../object/DefaultAnyTopic.html#includeInList)[`matchGreetings`](../object/DefaultAnyTopic.html#matchGreetings)[`matchObj`](../object/DefaultAnyTopic.html#matchObj)

Inherited from `DefaultTopic` :  
[`exceptions`](../object/DefaultTopic.html#exceptions)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated)[`autoName`](../object/ActorTopicEntry.html#autoName)[`convKeys`](../object/ActorTopicEntry.html#convKeys)[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)[`getActor`](../object/ActorTopicEntry.html#getActor)[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)[`isConversational`](../object/ActorTopicEntry.html#isConversational)[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)[`listOrder`](../object/ActorTopicEntry.html#listOrder)[`name`](../object/ActorTopicEntry.html#name)[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive)[`matchExactCase`](../object/TopicEntry.html#matchExactCase)[`matchPattern`](../object/TopicEntry.html#matchPattern)[`scoreBoost`](../object/TopicEntry.html#scoreBoost)[`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`handleTopic`](#handleTopic)

Inherited from `AgendaManager` :  
[`addToAgenda`](../object/AgendaManager.html#addToAgenda)[`executeAgenda`](../object/AgendaManager.html#executeAgenda)[`removeFromAgenda`](../object/AgendaManager.html#removeFromAgenda)



Inherited from `DefaultTopic` :  
[`avoidMatching`](../object/DefaultTopic.html#avoidMatching)[`matchTopic`](../object/DefaultTopic.html#matchTopic)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate)[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)[`buildName`](../object/ActorTopicEntry.html#buildName)[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)[`deactivate`](../object/ActorTopicEntry.html#deactivate)[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)[`isReachable`](../object/ActorTopicEntry.html#isReachable)[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic)[`scoreBooster`](../object/TopicEntry.html#scoreBooster)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4153](../source/actor.t.html#4153)\]

<div class="desc">

This kind of Default Topic is active only when it has any agenda items
to process.

</div>

<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4160](../source/actor.t.html#4160)\]

<div class="desc">

When this DefaultTopic is active we want it to take priority over over
DefaultTopics.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="handleTopic"></span>

`handleTopic ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4139](../source/actor.t.html#4139)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
