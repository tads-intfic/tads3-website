---
layout: docs
---
<span class="title">DefaultTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3601](../source/actor.t.html#3601)\]

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



A default topic entry. This is an easy way to create an entry that will
be used as a last resort, if no other entry is found. This kind of entry
will match \*any\* topic, but with the lowest possible score, so it will
only be used if there's no other match for the topic.

It's a good idea to provide some variety in a character's default
responses, because it seems that in every real game session, the player
will at some point spend a while peppering an NPC with questions on
every topic that comes to mind. Usually, the player will think of many
things that the author didn't anticipate. The more things the author
covers, the better, but it's unrealistic to think that an author can
reasonably anticipate every topic, or even most topics, that players
will think of. So, we'll have a whole bunch of ASK, ASK, ASK commands
all at once, and much of the time we'll get a bunch of default responses
in a row. It gets tedious in these cases when the NPC repeats the same
default response over and over.

A simple but effective trick is to provide three or four random
variations on "I don't know that," customized for the character. This
makes the NPC seem less like a totally predictable robot, and it can
also be a convenient place to flesh out the character a bit. An easy way
to do this is to add ShuffledEventList to the superclass list of the
default topic entry, and provide a eventList list with the various
random responses. For example:

\+ DefaultAskTellTopic, ShuffledEventList  
\['Bob mutters something unintelligible and keeps fiddling with  
the radio. ',  
'Bob looks up from the radio for a second, but then goes back  
to adjusting the knobs. ',  
'Bob just keeps adjusting the radio, completely ignoring you. '\]  
;

It's important to be rather generic in default responses; in particular,
it's a bad idea to suggest that the NPC doesn't know about the topic.
From the author's perspective, it's easy to make the mistake of thinking
"this is a default response, so it'll only be used for topics that are
completely off in left field." Wrong! Sometimes the player will indeed
ask about completely random stuff, but in \*most\* cases, the player is
only asking because they think it's a reasonable thing to ask about.
Defaults that say things like "I don't know anything about that" or
"What a crazy thing to ask about" or "You must be stupid if you think I
know about that!" can make a game look poorly implemented, because these
will inevitably be shown in response to questions that the NPC really
ought to know about:

  
\>ask bob about his mother  
"I don't know anything about that!" \*.  
\>ask bob about his father  
"You'd have to be a moron to think I'd know about that!"

It's better to use responses that suggest that the NPC is uninterested,
or is hostile, or is preoccupied with something else, or doesn't
understand the question, or something else appropriate to the character.
If you can manage to make the response about the \*character\*, rather
than the topic, it'll reduce the chances that the response is jarringly
illogical.

`class `**`DefaultTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DefaultTopic`**  
[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)  
[`DefaultAskForTopic`](../object/DefaultAskForTopic.html)  
[`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html)  
[`DefaultAskTopic`](../object/DefaultAskTopic.html)  
[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)  
[`DefaultConsultTopic`](../object/DefaultConsultTopic.html)  
[`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html)  
[`DefaultGiveTopic`](../object/DefaultGiveTopic.html)  
[`DefaultInitiateTopic`](../object/DefaultInitiateTopic.html)  
[`DefaultShowTopic`](../object/DefaultShowTopic.html)  
[`DefaultTellTopic`](../object/DefaultTellTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`excludeMatch`](#excludeMatch) [`matchScore`](#matchScore)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`includeInList`](../object/TopicEntry.html#includeInList) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isMatchPossible`](#isMatchPossible) [`matchTopic`](#matchTopic) [`setTopicPronouns`](#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="excludeMatch"></span>

`excludeMatch`

[actor.t](../file/actor.t.html)\[[3612](../source/actor.t.html#3612)\]



A list of objects to exclude from the default match. This can be used to
create a default topic that matches everything EXCEPT a few specific
topics that are handled in enclosing topic databases. For example, if
you want to create a catch-all in a ConvNode's list of topics, but you
want a particular topic to escape the catch-all and be sent instead to
the Actor's topic database, you can put that topic in the exclude list
for the catch-all, making it a catch-almost-all.



<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3638](../source/actor.t.html#3638)\]



use a low default matching score



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3641](../source/actor.t.html#3641)\]



a match is always possible for a default topic



<span id="matchTopic"></span>

`matchTopic (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3615](../source/actor.t.html#3615)\]



match anything except topics in our exclude list



<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3644](../source/actor.t.html#3644)\]



set the topic pronoun
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


