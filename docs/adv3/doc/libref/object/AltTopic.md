---
layout: docs
---
<span class="title">AltTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2668](../source/actor.t.html#2668)\]

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



An alternative topic entry. This makes it easy to define different
responses to a topic according to the game state; for example, we might
want to provide a different response for a topic after some event has
occurred, so that we can reflect knowledge of the event in the response.

A set of alternative topics is sort of like an inverted if-then-else.
You start by defining a normal TopicEntry (an AskTopic, or an
AskTellTopic, or whatever) for the basic response. Then, you add a
nested AltTopic located within the base topic; you can add another
AltTopic nested within the base topic, and another after that, and so
on. When we need to choose one of the topics, we'll choose the last one
that indicates it's active. So, the order of appearance is essentially
an override order: the first AltTopic overrides its parent TopicEntry,
and each subsequent AltTopic overrides its previous AltTopic.

\+ AskTellTopic @lighthouse "It's very tall.";  
++ AltTopic "Not really..." isActive=(...);  
++ AltTopic "Well, maybe..." isActive=(...);  
++ AltTopic "One more thing..." isActive=(...);

In this example, the response we'll show for ASK ABOUT LIGHTHOUSE will
always be the LAST entry of the group that's active. For example, if all
of the responses are active except for the very last one, then we'll
show the "Well, maybe" response, because it's the last active response.
If the main AskTellTopic is active, but none of the AltTopics are
active, we'll show the "It's very tall" main response, because it's the
last element of the group that's active.

Note that an AltTopic takes its matching information from its parent, so
you don't need to specify a matchObj or any other matching information
in an AltTopic. You merely need to provide the response text and the
isActive test.

`class `**`AltTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AltTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`altTalkCount`](#altTalkCount) [`altTopicOrder`](#altTopicOrder) [`impliesGreeting`](#impliesGreeting) [`includeInList`](#includeInList) [`isConversational`](#isConversational)

Inherited from `TopicEntry` :  
[`altTopicList`](../object/TopicEntry.html#altTopicList) [`isActive`](../object/TopicEntry.html#isActive) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchScore`](../object/TopicEntry.html#matchScore) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkIsActive`](#checkIsActive) [`initializeAltTopic`](#initializeAltTopic) [`isMatchPossible`](#isMatchPossible) [`matchPreParse`](#matchPreParse) [`matchTopic`](#matchTopic) [`noteInvocation`](#noteInvocation) [`setTopicPronouns`](#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="altTalkCount"></span>

`altTalkCount`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2756](../source/actor.t.html#2756)\]



our AltTopic counter is the AltTopic counter for the enclosing topic



<span id="altTopicOrder"></span>

`altTopicOrder`

[actor.t](../file/actor.t.html)\[[2742](../source/actor.t.html#2742)\]



Our relative order within our parent's list of alternatives. By default,
we simply return the source file ordering, which ensures that static
AltTopic objects (i.e., those defined directly in source files, not
dynamically created with 'new') will be ordered just as they're laid out
in the source file.



<span id="impliesGreeting"></span>

`impliesGreeting`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2730](../source/actor.t.html#2730)\]



take our implied-greeting status from our parent



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2685](../source/actor.t.html#2685)\]



include in the same lists as our parent



<span id="isConversational"></span>

`isConversational`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2733](../source/actor.t.html#2733)\]



take our conversational status from our parent



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkIsActive"></span>

`checkIsActive ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2700](../source/actor.t.html#2700)\]



Determine if this topic is active. An AltTopic is active if its own
isActive indicates true, AND none of its subsequent siblings are active.



<span id="initializeAltTopic"></span>

`initializeAltTopic ( )`

[actor.t](../file/actor.t.html)\[[2688](../source/actor.t.html#2688)\]



AltTopic initialization



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2674](../source/actor.t.html#2674)\]



we can match if our parent can match



<span id="matchPreParse"></span>

`matchPreParse (str, pstr)`

[actor.t](../file/actor.t.html)\[[2678](../source/actor.t.html#2678)\]



we can match a pre-parse string if our parent can



<span id="matchTopic"></span>

`matchTopic (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2670](../source/actor.t.html#2670)\]



we match if our parent matches, and with the same score



<span id="noteInvocation"></span>

`noteInvocation (fromActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2745](../source/actor.t.html#2745)\]



note invocation



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2681](../source/actor.t.html#2681)\]



set pronouns for the topic





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


