---
layout: docs
---
<span class="title">DefaultTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4031](../source/actor.t.html#4031)\]

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



A DefaultTopic is a kind of TopicEntry for use as a fallback when the
player attempts to discuss a topic that game code doesn't explicitly
cater for.

`class `**`DefaultTopic`**` :   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultTopic`**  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DefaultTopic`**  
[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)  
[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)  
[`DefaultAnyNonSayTopic`](../object/DefaultAnyNonSayTopic.html)  
[`DefaultAskForTopic`](../object/DefaultAskForTopic.html)  
[`DefaultAskQueryTopic`](../object/DefaultAskQueryTopic.html)  
[`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html)  
[`DefaultAskTopic`](../object/DefaultAskTopic.html)  
[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)  
[`DefaultConversationTopic`](../object/DefaultConversationTopic.html)  
[`DefaultNonSayTopic`](../object/DefaultNonSayTopic.html)  
[`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html)  
[`DefaultGiveTopic`](../object/DefaultGiveTopic.html)  
[`DefaultQueryTopic`](../object/DefaultQueryTopic.html)  
[`DefaultSayQueryTopic`](../object/DefaultSayQueryTopic.html)  
[`DefaultSayTellTalkTopic`](../object/DefaultSayTellTalkTopic.html)  
[`DefaultSayTellTopic`](../object/DefaultSayTellTopic.html)  
[`DefaultSayTopic`](../object/DefaultSayTopic.html)  
[`DefaultShowTopic`](../object/DefaultShowTopic.html)  
[`DefaultTalkTopic`](../object/DefaultTalkTopic.html)  
[`DefaultTellTalkTopic`](../object/DefaultTellTalkTopic.html)  
[`DefaultTellTopic`](../object/DefaultTellTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`exceptions`](#exceptions) [`matchObj`](#matchObj) [`matchScore`](#matchScore)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated) [`active`](../object/ActorTopicEntry.html#active) [`autoName`](../object/ActorTopicEntry.html#autoName) [`convKeys`](../object/ActorTopicEntry.html#convKeys) [`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused) [`getActor`](../object/ActorTopicEntry.html#getActor) [`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting) [`isConversational`](../object/ActorTopicEntry.html#isConversational) [`keyTopics`](../object/ActorTopicEntry.html#keyTopics) [`listOrder`](../object/ActorTopicEntry.html#listOrder) [`name`](../object/ActorTopicEntry.html#name) [`suggestAs`](../object/ActorTopicEntry.html#suggestAs) [`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`includeInList`](../object/TopicEntry.html#includeInList) [`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`avoidMatching`](#avoidMatching) [`matchTopic`](#matchTopic)

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



<span id="exceptions"></span>

`exceptions`

[actor.t](../file/actor.t.html)\[[4060](../source/actor.t.html#4060)\]



A list of topics we don't want this DefaultTopic to match, so matching
can fall through to another topic database to handle it (thereby
facilitating the common handling of some topics across ActorStates).



<span id="matchObj"></span>

`matchObj`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4033](../source/actor.t.html#4033)\]



A DefaultTopic matches any Thing or Topic or yes or no



<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4039](../source/actor.t.html#4039)\]



A DefaultTopic has a very low matchScore to allow anything more specific
to take precedence.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="avoidMatching"></span>

`avoidMatching (top)`

[actor.t](../file/actor.t.html)\[[4068](../source/actor.t.html#4068)\]



Do we want to avoid this DefaultTopic matching top, so that it can be
matched elsewhere? By default we do so if top is listed in our
exceptions.



<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4046](../source/actor.t.html#4046)\]



Don't match this DefaultTopic if top is one of the topics we want to
avoid matching. Otherwise carry out the inherited handling.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


