---
layout: docs
---
<span class="title">TopicEntry</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2133](../source/actor.t.html#2133)\]

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

A topic database entry. Actors and actor state objects store topic
databases; a topic database is essentially a set of these entries.

A TopicEntry can go directly inside an Actor, in which case it's part of
the actor's global set of topics; or, it can go inside an ActorState, in
which case it's part of the state's database and is only active when the
state is active; or, it can go inside a TopicGroup, which is a set of
topics with a common controlling condition; or, it can go inside a
ConvNode, in which case it's in effect only when the conversation node
is active.

Each entry is a relationship between a topic, which is something that
can come up in an ASK or TELL action, and a handling for the topic. In
addition, each entry determines what kind or kinds of actions it
responds to.

Note that TopicEntry objects are \*not\* simulation objects. Rather,
these are abstract objects; they can be associated with simulation
objects via the matching mechanism, but these are separate from the
actual simulation objects. The reason for this separation is that a
given simulation object might have many different response - the
response could vary according to who's being asked the question, who's
asking, and what else is happening in the game.

An entry decides for itself if it matches a topic. By default, an entry
can match based on either a simulation object, which we'll match to
anything in the topic's "in scope" or "likely" match lists, or based on
a regular expression string, which we'll match to the actual topic text
entered in the player's command.

An entry can decide how strongly it matches a topic. The database will
choose the strongest match when multiple entries match the same topic.
The strength of the match is given by a numeric score; the higher the
score, the stronger the match. The match strength makes it easy to
specify a hierarchy of topics from specific to general, so that we
provide general responses to general topic areas, but can still respond
to particular topics areas more specifically. For example, we might want
to provide a specific match to the FROBNOZ SPELL object, talking about
that particular magic spell, but provide a generic '.\* spell' pattern
to response to questions about any old spell. We'd give the generic
pattern a lower score, so that the specific FROBNOZ SPELL response would
win when it matches, but we'd fall back on the generic pattern in other
cases.

`class `**`TopicEntry`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicEntry`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicEntry`**  
[`AltTopic`](../object/AltTopic.html)  
[`CommandTopic`](../object/CommandTopic.html)  
[`DefaultTopic`](../object/DefaultTopic.html)  
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
[`MiscTopic`](../object/MiscTopic.html)  
[`ActorByeTopic`](../object/ActorByeTopic.html)  
[`ActorHelloTopic`](../object/ActorHelloTopic.html)  
[`BoredByeTopic`](../object/BoredByeTopic.html)  
[`ByeTopic`](../object/ByeTopic.html)  
[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)  
[`HelloTopic`](../object/HelloTopic.html)  
[`ImpByeTopic`](../object/ImpByeTopic.html)  
[`ImpHelloTopic`](../object/ImpHelloTopic.html)  
[`LeaveByeTopic`](../object/LeaveByeTopic.html)  
[`YesNoTopic`](../object/YesNoTopic.html)  
[`NoTopic`](../object/NoTopic.html)  
[`YesTopic`](../object/YesTopic.html)  
[`SpecialTopic`](../object/SpecialTopic.html)  
[`ThingMatchTopic`](../object/ThingMatchTopic.html)  
[`GiveShowTopic`](../object/GiveShowTopic.html)  
[`GiveTopic`](../object/GiveTopic.html)  
[`ShowTopic`](../object/ShowTopic.html)  
[`InitiateTopic`](../object/InitiateTopic.html)  
[`TopicOrThingMatchTopic`](../object/TopicOrThingMatchTopic.html)  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
[`TopicMatchTopic`](../object/TopicMatchTopic.html)  
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

[`altTalkCount`](#altTalkCount)[`altTopicList`](#altTopicList)[`impliesGreeting`](#impliesGreeting)[`includeInList`](#includeInList)[`isActive`](#isActive)[`isConversational`](#isConversational)[`matchObj`](#matchObj)[`matchScore`](#matchScore)[`talkCount`](#talkCount)[`topicGroupActive`](#topicGroupActive)[`topicGroupScoreAdjustment`](#topicGroupScoreAdjustment)[`topicResponse`](#topicResponse)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addAltTopic`](#addAltTopic)[`addSuggestedTopic`](#addSuggestedTopic)[`addTopic`](#addTopic)[`adjustScore`](#adjustScore)[`anyAltIsActive`](#anyAltIsActive)[`breakTopicTie`](#breakTopicTie)[`checkIsActive`](#checkIsActive)[`deferToEntry`](#deferToEntry)[`getActor`](#getActor)[`getTopicOwner`](#getTopicOwner)[`handleTopic`](#handleTopic)[`initializeTopicEntry`](#initializeTopicEntry)[`isMatchPossible`](#isMatchPossible)[`matchTopic`](#matchTopic)[`noteAltInvocation`](#noteAltInvocation)[`noteInvocation`](#noteInvocation)[`setTopicPronouns`](#setTopicPronouns)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="altTalkCount"></span>

`altTalkCount`

[actor.t](../file/actor.t.html)\[[2317](../source/actor.t.html#2317)\]

<div class="desc">

The number of times this topic or any nested AltTopic has been invoked
by the player. Each time the player asks/tells/etc about this topic OR
any of its AltTopic children, we'll increment this count.

</div>

<span id="altTopicList"></span>

`altTopicList`

[actor.t](../file/actor.t.html)\[[2373](../source/actor.t.html#2373)\]

<div class="desc">

our list of AltTopic children

</div>

<span id="impliesGreeting"></span>

`impliesGreeting`

[actor.t](../file/actor.t.html)\[[2175](../source/actor.t.html#2175)\]

<div class="desc">

Do we imply a greeting? By default, all conversational topics imply a
greeting. We separate this out so that the implied greeting can be
controlled independently of whether or not we're actually
conversational, if desired.

</div>

<span id="includeInList"></span>

`includeInList`

[actor.t](../file/actor.t.html)\[[2294](../source/actor.t.html#2294)\]

<div class="desc">

The set of database lists we're part of. This is a list of property
pointers, giving the TopicDatabase properties of the lists we
participate in.

</div>

<span id="isActive"></span>

`isActive`

[actor.t](../file/actor.t.html)\[[2152](../source/actor.t.html#2152)\]

<div class="desc">

Is this topic active? This can be used to control how an actor can
respond without have to worry about adding and removing topics manually
at key events, or storing the topics in state objects. Sometimes, it's
easier to just put a topic entry in the actor's database from the start,
and test some condition dynamically when the topic is actually queried.
To do this, override this method to test the condition that determines
when the topic entry should become active. We'll never show the topic's
response when isActive returns nil. By default, we simply return true to
indicate that the topic entry is active.

</div>

<span id="isConversational"></span>

`isConversational`

[actor.t](../file/actor.t.html)\[[2167](../source/actor.t.html#2167)\]

<div class="desc">

Flag: we are a "conversational" topic. This is true by default. When
this is set to nil, a ConversationReadyState will NOT show its greeting
and will not enter its InConversationState to show this topic entry's
response.

This should be set to nil when the topic entry's response is
non-conversational, in which case a greeting would be undesirable. This
is appropriate for responses like "You don't think he'd want to talk
about that", where the response indicates that the player character
didn't even ask a question (or whatever).

</div>

<span id="matchObj"></span>

`matchObj`

[actor.t](../file/actor.t.html)\[[2138](../source/actor.t.html#2138)\]

<div class="desc">

My matching simulation object or objects. This can be either a single
object or a list of objects.

</div>

<span id="matchScore"></span>

`matchScore`

[actor.t](../file/actor.t.html)\[[2287](../source/actor.t.html#2287)\]

<div class="desc">

Our match strength score. By default, we'll use a score of 100, which is
just an arbitrary base score.

</div>

<span id="talkCount"></span>

`talkCount`

[actor.t](../file/actor.t.html)\[[2309](../source/actor.t.html#2309)\]

<div class="desc">

The number of times this topic has invoked by the player. Each time the
player asks/tells/etc about this topic, we'll increment this count.

</div>

<span id="topicGroupActive"></span>

`topicGroupActive`

[actor.t](../file/actor.t.html)\[[2370](../source/actor.t.html#2370)\]

<div class="desc">

check the group isActive status (for AltTopics nested within)

</div>

<span id="topicGroupScoreAdjustment"></span>

`topicGroupScoreAdjustment`

[actor.t](../file/actor.t.html)\[[2367](../source/actor.t.html#2367)\]

<div class="desc">

get the topic group score adjustment (for AltTopics nested within)

</div>

<span id="topicResponse"></span>

`topicResponse`

[actor.t](../file/actor.t.html)\[[2302](../source/actor.t.html#2302)\]

<div class="desc">

Our response. This is displayed when we're the topic entry selected to
handle an ASK or TELL. Each topic entry must override this to show our
response text (or, alternatively, an entry can override handleTopic so
that it doesn't call this property).

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addAltTopic"></span>

`addAltTopic (entry)`

[actor.t](../file/actor.t.html)\[[2360](../source/actor.t.html#2360)\]

<div class="desc">

Add an AltTopic entry. This is called by our AltTopic children during
initialization; we'll simply add the entry to our list of AltTopic
children.

</div>

<span id="addSuggestedTopic"></span>

`addSuggestedTopic (t)`

[actor.t](../file/actor.t.html)\[[2550](../source/actor.t.html#2550)\]

<div class="desc">

Add a suggested topic. A suggested topic can be nested within a topic
entry; doing this associates the suggested topic with the topic entry,
and automatically associates the suggested topic with the entry's actor
or actor state.

</div>

<span id="addTopic"></span>

`addTopic (entry)`

[actor.t](../file/actor.t.html)\[[2348](../source/actor.t.html#2348)\]

<div class="desc">

add a topic nested within us

</div>

<span id="adjustScore"></span>

`adjustScore (score)`

[actor.t](../file/actor.t.html)\[[2252](../source/actor.t.html#2252)\]

<div class="desc">

Adjust my score value for any hierarchical adjustments. We'll add the
score adjustment for each enclosing object.

</div>

<span id="anyAltIsActive"></span>

`anyAltIsActive ( )`

[actor.t](../file/actor.t.html)\[[2228](../source/actor.t.html#2228)\]

<div class="desc">

Check to see if any alternative in the alternative group is active. This
returns true if we're active or if any of our nested AltTopics is
active.

</div>

<span id="breakTopicTie"></span>

`breakTopicTie (matchList, topic, fromActor, toks)`

[actor.t](../file/actor.t.html)\[[2443](../source/actor.t.html#2443)\]

<div class="desc">

Break a tie among matching topics entries. The topic database searcher
calls this on each matching topic entry when it finds multiple entries
tied for first place, based on their match scores. This gives the
entries a chance to figure out which one is actually the best match for
the input, given the other entries that also matched.

This method returns a TopicEntry object - one of the objects from the
match list - if it has an opinion as to which one should take
precedence. It returns nil if it doesn't know or doesn't care. Returning
nil gives the other topics in the match list a chance to make the
selection. If all of the objects in the list return nil, the topic
database searcher simply picks one of the topic matches arbitrarily.

'matchList' is the list of tied TopicEntry objects. 'topic' is the
ResolvedTopic object from the parser, representing the player's input
phrase that we're matching. 'fromActor' is the actor performing the
command. 'toks' is a list of strings giving the word tokens of the noun
phrase.

The topic database searcher calls this method for each matching topic
entry in the case of a tie, and simply accepts the opinion of the first
one that expresses an opinion by returning a non-nil value. There's no
voting; whoever happens to get \*and use\* the first say also gets the
last word. We expect that this won't be a problem in practice: when this
comes up at all, it's because there are a couple of closely related
topic entries that are active in a particular context, and you need a
special bit of tweaking to pick the right one for a given input phrase.
Simply pick one of the involved entries and define this method there.

</div>

<span id="checkIsActive"></span>

`checkIsActive ( )`

[actor.t](../file/actor.t.html)\[[2205](../source/actor.t.html#2205)\]

<div class="desc">

Determine if this topic is active. This checks the isActive property,
and also takes into account our relationship to alternative entries for
the topic. Generally, you should \*define\* (override) isActive, and
\*call\* this method.

</div>

<span id="deferToEntry"></span>

`// deferToEntry (other)`<span class="rem">Interface description
only</span>

[actor.t](../file/actor.t.html)\[[2281](../source/actor.t.html#2281)\]

<div class="desc">

Check to see if we want to defer to the given topic from an inferior
topic database. By default, we never defer to a topic from an inferior
database: we choose a matching topic from the top database in the
hierarchy where we find a match.

The database hierarchy, for most purposes, starts with the ConvNode at
the highest level, then the ActorState, then the Actor. We search those
databases, in that order, and we take the first match we find. By
default, if there's another match in a lower-level database, it doesn't
matter what its matchScore is: we always pick the one from the
highest-level database where we find a match. You can override this
method to change this behavior.

We don't actually define this method here, because the presence of the
method is significant. If the method isn't defined at all, we won't
bother looking for a possible deferral, saving the trouble of searching
the other databases in the hierarchy.

</div>

<span id="getActor"></span>

`getActor ( )`

[actor.t](../file/actor.t.html)\[[2184](../source/actor.t.html#2184)\]

<div class="desc">

Get the actor associated with the topic, if any. By default, we'll
return our enclosing database's topic owner, if it's an actor - in
almost all cases, if there's any actor associated with a topic, it's
simply the owner of the database containing the topic.

</div>

<span id="getTopicOwner"></span>

`getTopicOwner ( )`

[actor.t](../file/actor.t.html)\[[2323](../source/actor.t.html#2323)\]

<div class="desc">

the owner of any AltTopic nested within me is the same as my own topic
owner, which we take from our location

</div>

<span id="handleTopic"></span>

`handleTopic (fromActor, topic)`

[actor.t](../file/actor.t.html)\[[2492](../source/actor.t.html#2492)\]

<div class="desc">

Handle the topic. This is called when we find that this is the best
topic entry for the current topic.

By default, we'll do one of two things:

\- If 'self' inherits from Script, then we'll simply invoke our
doScript() method. This makes it especially easy to set up a topic entry
that shows a series of responses: just add EventList or one of its
subclasses to the base class list when defining the topic, and define
the eventList property as a list of string responses. For example:

  
+ TopicEntry, StopEventList @blackBook  
\['\<q\>What makes you think I know anything about it?\</q\>  
he says, his voice shaking. ',  
'\<q\>No! You can\\t make me tell you!\</q\> he wails. ',  
'\<q\>All right, fine! I\\ll tell you, but I warn you,  
this is knowledge mortal men were never meant to know.\</q\> ',  
// and so on  
\]  
;

\- Otherwise, we'll call our topicResponse property, which should simply
be a double-quoted string to display. This is the simplest way to define
a topic with just one response.

Note that 'topic' will vary by subclass, depending on the type of
command used with the topic type. For example, for ASK and TELL
commands, 'topic' is a ResolvedTopic object; for GIVE and SHOW, it's a
simulation object (i.e., generally a Thing subclass).

</div>

<span id="initializeTopicEntry"></span>

`initializeTopicEntry ( )`

[actor.t](../file/actor.t.html)\[[2336](../source/actor.t.html#2336)\]

<div class="desc">

Initialize. If we have a location property, we'll assume that the
location is a topic database object, and we'll add ourselves to that
database.

</div>

<span id="isMatchPossible"></span>

`// isMatchPossible (actor, scopeList)`<span class="rem">Interface
description only</span>

[actor.t](../file/actor.t.html)\[[2408](../source/actor.t.html#2408)\]

<div class="desc">

Check to see if a match to this topic entry is \*possible\* right now
for the given actor. For most subclasses, this is inherently imprecise,
because the 'match' function simply isn't reversible in general: to know
if we can be matched, we'd have to determine if there's a non-empty set
of possible inputs that can match us. This method is complementary to
matchTopic(), so subclasses must override with a corresponding
implementation.

'actor' is the actor to whom we're making the suggestion. 'scopeList' is
the list of objects that are in scope for the actor.

The library only uses this to determine if a suggestion should be
offered. So, specialized topic instances with non-standard match rules
don't have to worry about this unless they're used as suggestions, or
unless the game itself needs this information for some other reason.

</div>

<span id="matchTopic"></span>

`// matchTopic (fromActor, topic)`<span class="rem">Interface
description only</span>

[actor.t](../file/actor.t.html)\[[2387](../source/actor.t.html#2387)\]

<div class="desc">

Match a topic. This is abstract in this base class; it must be defined
by each concrete subclass. This returns nil if there's no match, or an
integer value if there's a match. The higher the number's value, the
stronger the match.

This is abstract in the base class because the meaning of 'topic' varies
by subclass, according to which type of command it's used with. For
example, in ASK and TELL commands, 'topic' is a ResolvedTopic describing
the topic in the player's command; for GIVE and SHOW commands, it's the
resolved simulation object.

</div>

<span id="noteAltInvocation"></span>

`noteAltInvocation (fromActor, alt)`

[actor.t](../file/actor.t.html)\[[2532](../source/actor.t.html#2532)\]

<div class="desc">

Note that something in our entire alternative group has been invoked. We
count as a member of our own group, so this is invoked when we're
invoked; this is also invoked when any AltTopic child of ours is
invoked.

</div>

<span id="noteInvocation"></span>

`noteInvocation (fromActor)`

[actor.t](../file/actor.t.html)\[[2514](../source/actor.t.html#2514)\]

<div class="desc">

note that we've been invoked

</div>

<span id="setTopicPronouns"></span>

`setTopicPronouns (fromActor, topic)`

[actor.t](../file/actor.t.html)\[[2458](../source/actor.t.html#2458)\]

<div class="desc">

Set pronouns for the topic, if possible. If the topic corresponds to a
game-world object, then we should set the pronoun antecedent to the game
object. This must be handled per subclass because of the range of
possible meanings of 'topic'.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
