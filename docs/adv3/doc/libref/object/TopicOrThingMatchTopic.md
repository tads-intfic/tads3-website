---
layout: docs
---
<span class="title">TopicOrThingMatchTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3139](../source/actor.t.html#3139)\]

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



A TopicEntry that can match a Thing or a Topic. This can be used to
combine ASK/TELL-type responses and GIVE/SHOW-type responses in a single
topic entry.

When this kind of topic is used as a suggested topic, note that you
should name the suggestion according to the least restrictive verb. This
is important because the suggestion will be active if any of the verbs
would allow it; to ensure that we suggest a verb that will actually
work, we should thus use the least restrictive verb. In practice, this
means you should use ASK or TELL as the suggestion name, because an
object merely has to be known to be used as a topic; it might be
possible to ASK/TELL about an object but not GIVE/SHOW the object,
because the object is known but not currently in scope.

`class `**`TopicOrThingMatchTopic`**` :   `[`ThingMatchTopic`](../object/ThingMatchTopic.html) [`TopicMatchTopic`](../object/TopicMatchTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicOrThingMatchTopic`**  
[`ThingMatchTopic`](../object/ThingMatchTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
[`TopicMatchTopic`](../object/TopicMatchTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TopicOrThingMatchTopic`**  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`includeInList`](../object/TopicEntry.html#includeInList) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchScore`](../object/TopicEntry.html#matchScore) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

Inherited from `TopicMatchTopic` :  
[`matchExactCase`](../object/TopicMatchTopic.html#matchExactCase) [`matchPattern`](../object/TopicMatchTopic.html#matchPattern)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isMatchPossible`](#isMatchPossible) [`matchTopic`](#matchTopic) [`setTopicPronouns`](#setTopicPronouns)



Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

Inherited from `TopicMatchTopic` :  
[`findMatchObj`](../object/TopicMatchTopic.html#findMatchObj)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3153](../source/actor.t.html#3153)\]



if we're being asked to match a ResolvedTopic, use the inherited
TopicMatchTopic handling; otherwise, use the inherited ThingMatchTopic
handling



<span id="matchTopic"></span>

`matchTopic (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3140](../source/actor.t.html#3140)\]



*no description available*



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3160](../source/actor.t.html#3160)\]



if a match is possible from either subclass, allow it
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


