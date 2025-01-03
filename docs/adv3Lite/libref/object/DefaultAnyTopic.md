---
layout: docs
---
<span class="title">DefaultAnyTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4080](../source/actor.t.html#4080)\]

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



A DefaultAnyTopic is a DefaultTopic that can match any kind of
conversational command, except for HELLO and GOODBYE (unless
matchGreetings is true.

`class `**`DefaultAnyTopic`**` :   `[`DefaultTopic`](../object/DefaultTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultAnyTopic`**  
[`DefaultTopic`](../object/DefaultTopic.html)  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                         object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DefaultAnyTopic`**  
[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)  
[`DefaultAnyNonSayTopic`](../object/DefaultAnyNonSayTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList) [`matchGreetings`](#matchGreetings) [`matchObj`](#matchObj)

Inherited from `DefaultTopic` :  
[`exceptions`](../object/DefaultTopic.html#exceptions) [`matchScore`](../object/DefaultTopic.html#matchScore)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`convKeys`](../object/ActorTopicEntry.html#convKeys) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`getActor`](../object/ActorTopicEntry.html#getActor) [`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`name`](../object/ActorTopicEntry.html#name) [`suggestAs`](../object/ActorTopicEntry.html#suggestAs) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)
Inherited from `TopicEntry` :  
[`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `DefaultTopic` :  
[`avoidMatching`](../object/DefaultTopic.html#avoidMatching) [`matchTopic`](../object/DefaultTopic.html#matchTopic)

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



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4085](../source/actor.t.html#4085)\]



DefaultAnyTopics are included in all the lists of their TopicDatabase
that contain lists of conversational responses.



<span id="matchGreetings"></span>

`matchGreetings`

[actor.t](../file/actor.t.html)\[[4103](../source/actor.t.html#4103)\]



Flag - should we match HELLO and BYE? By default we don't since many
DefaultAnyTopic responses won't be suitable for this purpose, but this
can be overridden to true for DefaultAnyTopics that should match HELLO
and BYE as well as other conversational commands.



<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4094](../source/actor.t.html#4094)\]



A DefaultAnyTopic matches any conversational command and should also
match Commands (where the matchObj will be an action); they can
optionally match HELLO and BYE as well.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


