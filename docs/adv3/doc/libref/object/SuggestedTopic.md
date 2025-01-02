---
layout: docs
---
<span class="title">SuggestedTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[1151](../source/actor.t.html#1151)\]

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

A "suggested" topic. These provide suggestions for things the player
might want to ASK or TELL another actor about. At certain times
(specifically, when starting a conversation with HELLO or TALK TO, or
when the player enters a TOPICS command to explicitly ask for a list of
topic suggestions), we'll look for these objects in the actor or actor
state for the actor to whom we're talking. We'll show a list of each
currently active suggestion we find. This gives the player some guidance
of what to talk about. For example:

\>talk to bob  
"Excuse me," you say.

Bob looks up from his newspaper. "Yes? Oh, you again."

(You'd like to ask him about the black book, the candle, and the bell,
and tell him about the crypt.)

Topic suggestions are entirely optional. Some authors don't like the
idea, since they think it's too much like a menu system, and just gives
away the solution to the game. If you don't want to have anything to do
with topic suggestions, we won't force you - simply don't define any
SuggestedTopic objects, and the library will never offer suggestions and
will even disable the TOPICS command.

If you do want to use topic suggestions, the easiest way to use this
class is to combine it using multiple inheritance with a TopicEntry
object. You just have to add SuggestedTopic to the superclass list for
your topic entry object, and give the suggested topic a name string
(using a property and format defined by the language-specific library)
to display in suggestions lists. Doing this, the suggestion will
automatically be enabled whenever the topic entry is available, and will
automatically be removed from the suggestions when the topic is invoked
in conversation (in other words, we'll only suggest asking about the
topic until it's been asked about once).

Topic suggestions can be associated with an actor or an actor state;
these are topics that a given character would like to talk to the
associated actor about. The association is a bit tricky: suggested topic
objects are stored with the actor being \*talked to\*. For example, if
we want to suggest topics that the player character might want to ASK
BILL ABOUT, we store these suggestions with \*Bill\*. We do NOT store
the suggestions with the player character. This might seem backwards at
first glance, since fundamentally the suggestions belong in the player
character's "brain" - they are, after all, things the player character
wants to talk about. In practice, though, there are two things that make
it easier to keep the information with the character being asked. First,
in most games, there's just one player character, so one of the two
actors in each association will always be the player character; by
storing the objects with the NPC, we can just let the PC be assumed as
the other actor as a default, saving us some typing that would be
necessary if we had to specify each object in the other direction.
Second, we keep the \*response\* objects associated with the character
being asked - that association is intuitive, at least. The thing is, we
can usually combine the suggestion and response into a single object,
saving another bunch of typing; if we didn't keep the suggestion with
the character being asked, we couldn't combine the suggestions and
responses this way, since they'd have to be associated with different
actors.

`class `**`SuggestedTopic`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SuggestedTopic`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SuggestedTopic`**  
[`SuggestedAskForTopic`](../object/SuggestedAskForTopic.html)  
[`SuggestedAskTopic`](../object/SuggestedAskTopic.html)  
[`SuggestedGiveTopic`](../object/SuggestedGiveTopic.html)  
[`SuggestedNoTopic`](../object/SuggestedNoTopic.html)  
[`SuggestedShowTopic`](../object/SuggestedShowTopic.html)  
[`SuggestedTellTopic`](../object/SuggestedTellTopic.html)  
[`SuggestedTopicTree`](../object/SuggestedTopicTree.html)  
[`SpecialTopic`](../object/SpecialTopic.html)  
[`SuggestedYesTopic`](../object/SuggestedYesTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`associatedTopic`](#associatedTopic)[`curiositySatisfied`](#curiositySatisfied)[`fullName`](#fullName)[`location`](#location)[`name`](#name)[`suggestionGroup`](#suggestionGroup)[`suggestTo`](#suggestTo)[`timesToSuggest`](#timesToSuggest)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`associatedTopicCanMatch`](#associatedTopicCanMatch)[`associatedTopicIsActive`](#associatedTopicIsActive)[`associatedTopicTalkCount`](#associatedTopicTalkCount)[`findEnclosingSuggestedTopic`](#findEnclosingSuggestedTopic)[`findOuterSuggestedTopic`](#findOuterSuggestedTopic)[`fromEnclosingSuggestedTopic`](#fromEnclosingSuggestedTopic)[`initializeSuggestedTopic`](#initializeSuggestedTopic)[`isSuggestionActive`](#isSuggestionActive)[`noteSuggestion`](#noteSuggestion)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="associatedTopic"></span>

`associatedTopic`

[actor.t](../file/actor.t.html)\[[1185](../source/actor.t.html#1185)\]

<div class="desc">

Our associated topic. In most cases, this will be initialized
automatically: if this suggested topic object is also a TopicEntry
object (using multiple inheritance), we'll set this during start-up to
'self', or if our location is a TopicEntry, we'll set this to our
location. This only needs to be initialized manually if neither of those
conditions is true.

</div>

<span id="curiositySatisfied"></span>

`curiositySatisfied`

[actor.t](../file/actor.t.html)\[[1316](../source/actor.t.html#1316)\]

<div class="desc">

Have we satisfied our curiosity about this topic? Returns true if so,
nil if not. We'll never suggest a topic when this returns true, because
this means that the player no longer feels the need to ask about the
topic.

</div>

<span id="fullName"></span>

`fullName`

[actor.t](../file/actor.t.html)\[[1174](../source/actor.t.html#1174)\]

<div class="desc">

The name of the suggestion. The rules for setting this vary by language;
in the English version, we'll display the fullName when we show a
stand-alone item, and the groupName when we appear in a list group (such
as a group of ASK ABOUT or TELL ABOUT suggestions).

In English, the fullName should be suitable for use after 'could': "You
could \<fullName\>, \<fullName\>, or \<fullName\>".

In English, the phrasing where the 'name' property is used depends on
the specific subclass, but it should usually be a qualified noun phrase
(that is, it should include a qualifier such as "a" or "the" or a
possessive). For ASK and TELL, for example, the 'name' should be
suitable for use after ABOUT: "You could ask him about \<the
lighthouse\>, \<Bob's black book\>, or \<the weather\>."

By default, we'll walk up our 'location' tree looking for another
suggested topic; if we find one, we'll use its corresponding name
values.

</div>

<span id="location"></span>

`location`

[actor.t](../file/actor.t.html)\[[1199](../source/actor.t.html#1199)\]

<div class="desc">

Set the location to the actor to ask or tell about this topic. This is
the target of the ASK ABOUT or TELL ABOUT command, NOT the actor who's
doing the asking. This can also be set to a TopicEntry object, in which
case we'll be associated with the actor with which the topic entry is
associated, and we'll also automatically tie the topic entry to this
suggestion.

Because we're using the location property, you can use the '+' notation
to add a suggested topic to the target actor, state objects, or topic
entry.

</div>

<span id="name"></span>

`name`

[actor.t](../file/actor.t.html)\[[1175](../source/actor.t.html#1175)\]

<div class="desc">

*no description available*

</div>

<span id="suggestionGroup"></span>

`suggestionGroup`

[actor.t](../file/actor.t.html)\[[1224](../source/actor.t.html#1224)\]

<div class="desc">

the ListGroup with which we're to list this suggestion

</div>

<span id="suggestTo"></span>

`suggestTo`

[actor.t](../file/actor.t.html)\[[1221](../source/actor.t.html#1221)\]

<div class="desc">

The actor who \*wants\* to ask or tell about this topic. Our location
property gives the actor to be asked or told, because we're associated
with the target actor - the same actor who has the TopicEntry
information for the topic. This property, in contrast, gives the actor
who's doing the asking.

By default, we return the player character; in most cases, you won't
have to override this. In most games, only the player character uses the
suggested topic mechanism, because there's no reason to suggest topics
for NPC's - they're just automata, after all, so if we want them to ask
something, we can just program them to ask it directly. Also, most games
have only one player character. Games that meet these criteria won't
ever have to override this. If you do have multiple player characters,
you'll probably want to override this for each suggested topic to
indicate which character wants to ask about the topic, as the different
player characters might have different things they'd want to talk about.

</div>

<span id="timesToSuggest"></span>

`timesToSuggest`

[actor.t](../file/actor.t.html)\[[1308](../source/actor.t.html#1308)\]

<div class="desc">

The number of times to suggest asking about our topic. When we've asked
about our associated topic this many times, we'll have satisfied our
curiosity. In most cases, we'll only want to suggest a topic until it's
asked about once, since most topics only have a single meaningful
response, so we'll use 1 as the default. This should be overridden in
cases where a topic will reveal more information when asked several
times. If this is nil, it means that there's no limit to the number of
times to suggest asking about this.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="associatedTopicCanMatch"></span>

`associatedTopicCanMatch (actor, scopeList)`

[actor.t](../file/actor.t.html)\[[1351](../source/actor.t.html#1351)\]

<div class="desc">

is it possible to match the associated topic?

</div>

<span id="associatedTopicIsActive"></span>

`associatedTopicIsActive ( )`

[actor.t](../file/actor.t.html)\[[1345](../source/actor.t.html#1345)\]

<div class="desc">

is the associated topic active?

</div>

<span id="associatedTopicTalkCount"></span>

`associatedTopicTalkCount ( )`

[actor.t](../file/actor.t.html)\[[1348](../source/actor.t.html#1348)\]

<div class="desc">

get the number of previous invocations of the associated topic

</div>

<span id="findEnclosingSuggestedTopic"></span>

`findEnclosingSuggestedTopic ( )`

[actor.t](../file/actor.t.html)\[[1227](../source/actor.t.html#1227)\]

<div class="desc">

find the nearest enclosing SuggestedTopic parent

</div>

<span id="findOuterSuggestedTopic"></span>

`findOuterSuggestedTopic ( )`

[actor.t](../file/actor.t.html)\[[1242](../source/actor.t.html#1242)\]

<div class="desc">

find the outermost enclosing SuggestedTopic parent

</div>

<span id="fromEnclosingSuggestedTopic"></span>

`fromEnclosingSuggestedTopic (prop, defaultVal)`

[actor.t](../file/actor.t.html)\[[1263](../source/actor.t.html#1263)\]

<div class="desc">

get a property from the nearest enclosing SuggestedTopic, or return the
given default value if there is no enclosing SuggestedTopic

</div>

<span id="initializeSuggestedTopic"></span>

`initializeSuggestedTopic ( )`

[actor.t](../file/actor.t.html)\[[1320](../source/actor.t.html#1320)\]

<div class="desc">

initialize - this is called automatically during pre-initialization

</div>

<span id="isSuggestionActive"></span>

`isSuggestionActive (actor, scopeList)`

[actor.t](../file/actor.t.html)\[[1282](../source/actor.t.html#1282)\]

<div class="desc">

Should we suggest this topic to the given actor? We'll return true if
the actor is the same actor for which this suggestion is intended, and
the associated topic entry is currently active, and we haven't already
satisfied our curiosity about the topic.

</div>

<span id="noteSuggestion"></span>

`noteSuggestion ( )`

[actor.t](../file/actor.t.html)\[[1359](../source/actor.t.html#1359)\]

<div class="desc">

Note that we're being shown in a topic inventory listing. By default, we
don't do anything here, but subclasses can use this to do any extra work
they want to do on being listed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
