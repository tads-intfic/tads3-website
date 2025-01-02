---
layout: docs
---
<span class="title">TopicMatchTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2783](../source/actor.t.html#2783)\]

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

A "topic match" topic entry. This is a topic entry that matches topic
phrases in the grammar.

Handling topic phrases is a bit tricky, because they can't be resolved
to definitive game-world objects the way ordinary noun phrases can.
Topic phrases can refer to things that aren't physically present, but
which are known to the actor performing the command; they can refer to
abstract Topic objects, that have no physical existence in the game
world at all; and they can ever be arbitrary text that doesn't match any
vocabulary defined by the game.

Our strategy in matching topics is to first narrow the list down to the
physical and abstract game objects that both match the vocabulary used
in the command and are part of the memory of the actor performing the
command. That much is handled by the normal topic phrase resolution
rules, and gives us a list of possible matches. Then, given this
narrowed list of possibilities, we look through the list of objects that
we're associated with; we effectively intersect the two lists, and if
the result is non-empty, we consider it a match. Finally, we also
consider any regular expression that we're associated with; if we have
one, and the topic phrase text in the command matches the input, we'll
consider it a match.

`class `**`TopicMatchTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicMatchTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicMatchTopic`**  
[`AskTellTopic`](../object/AskTellTopic.html)  
[`AskAboutForTopic`](../object/AskAboutForTopic.html)  
[`AskForTopic`](../object/AskForTopic.html)  
[`AskTellAboutForTopic`](../object/AskTellAboutForTopic.html)  
[`AskTopic`](../object/AskTopic.html)  
[`TellTopic`](../object/TellTopic.html)  
[`ConsultTopic`](../object/ConsultTopic.html)  
[`TopicOrThingMatchTopic`](../object/TopicOrThingMatchTopic.html)  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`matchExactCase`](#matchExactCase)[`matchPattern`](#matchPattern)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)[`includeInList`](../object/TopicEntry.html#includeInList)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`findMatchObj`](#findMatchObj)[`isMatchPossible`](#isMatchPossible)[`matchTopic`](#matchTopic)[`setTopicPronouns`](#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="matchExactCase"></span>

`matchExactCase`

[actor.t](../file/actor.t.html)\[[2800](../source/actor.t.html#2800)\]

<div class="desc">

*no description available*

</div>

<span id="matchPattern"></span>

`matchPattern`

[actor.t](../file/actor.t.html)\[[2799](../source/actor.t.html#2799)\]

<div class="desc">

A regular expression pattern that we'll match to the actual topic text
as entered in the command. If 'matchExactCase' is true, we'll match the
exact text in its original upper/lower case rendering; otherwise, we'll
convert the player input to lower-case before matching it against the
pattern. In most cases, we'll want to match the input no matter what
combination of upper and lower case the player entered, so
matchExactCase is nil by default.

Note that both the object (or object list) and the regular expression
pattern can be included for a single topic entry object. This allows a
topic entry to match several different ways of entering the topic name,
or to match several different topics with the same response.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="findMatchObj"></span>

`findMatchObj (obj, rt)`

[actor.t](../file/actor.t.html)\[[2876](../source/actor.t.html#2876)\]

<div class="desc">

Match an individual item from our match list to the given ResolvedTopic
object. We'll check each object in the resolved topic's "in scope" and
"likely" lists.

</div>

<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2893](../source/actor.t.html#2893)\]

<div class="desc">

It's possible for us to match if any of our matchObj objects are known
to the actor. If we have no matchObj objects, we must be matching on a
regular expression or on a custom condition, so we can't speculate on
matchability; we'll simply return true in those cases.

</div>

<span id="matchTopic"></span>

`matchTopic (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2814](../source/actor.t.html#2814)\]

<div class="desc">

Match the topic. By default, we'll match to either the simulation object
or objects in matchObj, or the pattern in matchPattern. Note that we
always try both ways of matching, so a single AskTellTopic can define
both a pattern and an object list.

'topic' is a ResolvedTopic object describing the player's text input and
the list of objects that the parser matched to the text.

Subclasses can override this as desired to use other ways of matching.

</div>

<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2926](../source/actor.t.html#2926)\]

<div class="desc">

set the topic pronouns

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
