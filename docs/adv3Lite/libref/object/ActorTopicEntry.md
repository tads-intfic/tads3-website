---
layout: docs
---
<span class="title">ActorTopicEntry</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3058](../source/actor.t.html#3058)\]

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

An ActorTopicEntry is a specialization of TopicEntry for use with the
conversation system. ActorTopicEntries represent potential responses to
conversational commands like ASK BOB ABOUT LIGHTHOUSE or TELL GEORGE
ABOUT FIRE.

Since ActorTopicEntry inherits from ReplaceRedirector as well as
TopicEntry, its topicResponse() methods can make use of doInstead() and
doNested().

`class `**`ActorTopicEntry`**` :   `[`ReplaceRedirector`](../object/ReplaceRedirector.html)[`TopicEntry`](../object/TopicEntry.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorTopicEntry`**  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                         object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ActorTopicEntry`**  
[`AltTopic`](../object/AltTopic.html)  
[`AskAboutForTopic`](../object/AskAboutForTopic.html)  
[`AskForTopic`](../object/AskForTopic.html)  
[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)  
[`AskTellShowTopic`](../object/AskTellShowTopic.html)  
[`AskTellTopic`](../object/AskTellTopic.html)  
[`AskTopic`](../object/AskTopic.html)  
[`CommandTopic`](../object/CommandTopic.html)  
[`DefaultTopic`](../object/DefaultTopic.html)  
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
[`GiveShowTopic`](../object/GiveShowTopic.html)  
[`GiveTopic`](../object/GiveTopic.html)  
[`InitiateTopic`](../object/InitiateTopic.html)  
[`NodeContinuationTopic`](../object/NodeContinuationTopic.html)  
[`NodeEndCheck`](../object/NodeEndCheck.html)  
[`MiscTopic`](../object/MiscTopic.html)  
[`GreetingTopic`](../object/GreetingTopic.html)  
[`ActorByeTopic`](../object/ActorByeTopic.html)  
[`BoredByeTopic`](../object/BoredByeTopic.html)  
[`ByeTopic`](../object/ByeTopic.html)  
[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)  
[`HelloTopic`](../object/HelloTopic.html)  
[`ActorHelloTopic`](../object/ActorHelloTopic.html)  
[`ImpHelloTopic`](../object/ImpHelloTopic.html)  
[`ImpByeTopic`](../object/ImpByeTopic.html)  
[`LeaveByeTopic`](../object/LeaveByeTopic.html)  
[`HitTopic`](../object/HitTopic.html)  
[`KissTopic`](../object/KissTopic.html)  
[`NoTopic`](../object/NoTopic.html)  
[`TouchTopic`](../object/TouchTopic.html)  
[`YesNoTopic`](../object/YesNoTopic.html)  
[`YesTopic`](../object/YesTopic.html)  
[`SceneTopic`](../object/SceneTopic.html)  
[`SceneEndTopic`](../object/SceneEndTopic.html)  
[`SceneStartTopic`](../object/SceneStartTopic.html)  
[`ShowTopic`](../object/ShowTopic.html)  
[`SlaveTopic`](../object/SlaveTopic.html)  
[`SpecialTopic`](../object/SpecialTopic.html)  
[`QueryTopic`](../object/QueryTopic.html)  
[`SayTopic`](../object/SayTopic.html)  
[`TalkTopic`](../object/TalkTopic.html)  
[`AskTalkTopic`](../object/AskTalkTopic.html)  
[`AskTellTalkTopic`](../object/AskTellTalkTopic.html)  
[`TellTalkTopic`](../object/TellTalkTopic.html)  
[`TellTalkShowTopic`](../object/TellTalkShowTopic.html)  
[`TellTopic`](../object/TellTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`activated`](#activated)[`active`](#active)[`autoName`](#autoName)[`convKeys`](#convKeys)[`curiosityAroused`](#curiosityAroused)[`getActor`](#getActor)[`impliesGreeting`](#impliesGreeting)[`isConversational`](#isConversational)[`keyTopics`](#keyTopics)[`listOrder`](#listOrder)[`name`](#name)[`suggestAs`](#suggestAs)[`timesInvoked`](#timesInvoked)





Inherited from `TopicEntry` :  
[`includeInList`](../object/TopicEntry.html#includeInList)[`isActive`](../object/TopicEntry.html#isActive)[`matchExactCase`](../object/TopicEntry.html#matchExactCase)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchPattern`](../object/TopicEntry.html#matchPattern)[`matchScore`](../object/TopicEntry.html#matchScore)[`scoreBoost`](../object/TopicEntry.html#scoreBoost)[`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`activate`](#activate)[`addToConvKeyTable`](#addToConvKeyTable)[`buildName`](#buildName)[`curiositySatisfied`](#curiositySatisfied)[`deactivate`](#deactivate)[`getKeyTopics`](#getKeyTopics)[`handleTopic`](#handleTopic)[`initializeTopicEntry`](#initializeTopicEntry)[`isReachable`](#isReachable)[`nodeActive`](#nodeActive)[`showKeyTopics`](#showKeyTopics)[`timesToSuggest`](#timesToSuggest)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic)[`matchTopic`](../object/TopicEntry.html#matchTopic)[`scoreBooster`](../object/TopicEntry.html#scoreBooster)[`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="activated"></span>

`activated`

[actor.t](../file/actor.t.html)\[[3368](../source/actor.t.html#3368)\]

<div class="desc">

A flag that can be set with an \<.activate\> tag. It must be true for
this TopicEntry to be active, regardless of the value of isActive. It
starts out true by default, but it can be set to nil on TopicEntries
that you want to start out as inactive subsequently activate via an
activate tag.

</div>

<span id="active"></span>

`active`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3392](../source/actor.t.html#3392)\]

<div class="desc">

This TopicEntry is active if its own isActive property is true and its
activated property is true and if its location is active. This allows
the isActive conditions of individual TopicEntries to be combined with
that of any TopicGroups they're in. This property should not normally be
overridden in game code.

</div>

<span id="autoName"></span>

`autoName`

[actor.t](../file/actor.t.html)\[[3073](../source/actor.t.html#3073)\]

<div class="desc">

Set autoName to true to have this topic entry generate a name from its

</div>

<span id="convKeys"></span>

`convKeys`

[actor.t](../file/actor.t.html)\[[3099](../source/actor.t.html#3099)\]

<div class="desc">

A string or list of strings defining one or more groups to which this
topic entry belongs. Under certain circumstances an ActorTopicEntry may
be prioritized if its convKeys overlaps with the associated actor's
activeKeys.

</div>

<span id="curiosityAroused"></span>

`curiosityAroused`

[actor.t](../file/actor.t.html)\[[3210](../source/actor.t.html#3210)\]

<div class="desc">

We won't suggest this topic entry (if we ever suggest it at all) until
its curiosityAroused property by true. By default it normally is from
the start, but this can be overridden in individual cases if desired.

</div>

<span id="getActor"></span>

`getActor`

[actor.t](../file/actor.t.html)\[[3168](../source/actor.t.html#3168)\]

<div class="desc">

Our associated actor is our location's associated actor.

</div>

<span id="impliesGreeting"></span>

`impliesGreeting`

[actor.t](../file/actor.t.html)\[[3091](../source/actor.t.html#3091)\]

<div class="desc">

Normally a conversational command implies a greeting (that is, it should
trigger a greeting if a conversation is not already in process). This
needs to be overridden to nil on ActorTopicEntries that explicitly
handle greetings (HelloTopic and its subclasses) to avoid an infinite
loop.

</div>

<span id="isConversational"></span>

`isConversational`

[actor.t](../file/actor.t.html)\[[3082](../source/actor.t.html#3082)\]

<div class="desc">

An ActorTopicEntry is conversational (the default) if it results in an
actual conversational exchange. Change this to nil for ActorTopicEntries
that merely report why a conversational exchange did not take place
(e.g. "Bob ignores you" or "You think better of talking to George about
that.")

</div>

<span id="keyTopics"></span>

`keyTopics`

[actor.t](../file/actor.t.html)\[[3277](../source/actor.t.html#3277)\]

<div class="desc">

The keyTopics can contain a convKey or a list of convKeys, in which case
when this TopicEntry is triggered instead of responding directly it will
list topic suggestions that correspond to the convKeys defined here. For
example, a TopicEntry that responded to ASK BOB ABOUT TROUBLES could
define a keyTopics property of 'troubles' that triggered more specific
suggestions such as "You could ask when the troubles started, or what
the troubles were, or how the troubles ended", assuming that these
QueryTopics had a convKeys property of 'troubles'

If you want this TopicEntry to display its topicResponse in the normal
way, leave keyTopics as nil.

</div>

<span id="listOrder"></span>

`listOrder`

[actor.t](../file/actor.t.html)\[[3230](../source/actor.t.html#3230)\]

<div class="desc">

The order this TopicEntry appears in within its group in a list of
suggested topics. The higher this number, the later this topic will be
suggested. Note that this does not override the grouping of suggestions
into AskTopics, TellTopics, etc.

</div>

<span id="name"></span>

`name`

[actor.t](../file/actor.t.html)\[[3067](../source/actor.t.html#3067)\]

<div class="desc">

To make this a suggested topic, just give it a name under which it will
be suggested (of the kind that could follow 'You could ask about ' or
'You could tell him about ' or 'You could show him ' etc.). Note that
for QueryTopics and SayTopics that are specified with a matchObj the
library constructs this name automatically.

</div>

<span id="suggestAs"></span>

`suggestAs`

[actor.t](../file/actor.t.html)\[[3222](../source/actor.t.html#3222)\]

<div class="desc">

The suggestAs property can be overridden to change the list this topic
entry will be suggested as if you don't want it placed in the list the
library chooses by default. The allowed values are one of AskTopic,
TellTopic, GiveTopic, ShowTopic, or TalkTopic. Normally, though, the
library default will work perfectly well and you don't need to specify
this property. If you do it must be specified as a kind that this topic
entry can actually match, e.g. TellTopic for an AskTellTopic or
ShowTopic for a GiveShowTopic.

</div>

<span id="timesInvoked"></span>

`timesInvoked`

[actor.t](../file/actor.t.html)\[[3202](../source/actor.t.html#3202)\]

<div class="desc">

The number of times this topic entry has been invoked.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="activate"></span>

`activate ( )`

[actor.t](../file/actor.t.html)\[[3375](../source/actor.t.html#3375)\]

<div class="desc">

Activate this TopicEntry. This would normally be called in game code via
an \<.activate\> tag.

</div>

<span id="addToConvKeyTable"></span>

`addToConvKeyTable ( )`

[actor.t](../file/actor.t.html)\[[3113](../source/actor.t.html#3113)\]

<div class="desc">

Add this ActorTopicEntry to its associated actor's table of convKeys

</div>

<span id="buildName"></span>

`buildName ( )`

[actor.t](../file/actor.t.html)\[[3165](../source/actor.t.html#3165)\]

<div class="desc">

Construct the name of this ActorTopicEntry by using the theName property
of our first matchObj.

</div>

<span id="curiositySatisfied"></span>

`curiositySatisfied ( )`

[actor.t](../file/actor.t.html)\[[3193](../source/actor.t.html#3193)\]

<div class="desc">

Assuming this topic entry is ever suggested, it will continue to be
suggested until curiositySatisfied becomes true. By default this occurs
when the topic has been invoked timesToSuggest times. If, however, we
have any keyTopics we'll take our curiosity to be satisfied when our
keyTopics have all been satisfied.

</div>

<span id="deactivate"></span>

`deactivate ( )`

[actor.t](../file/actor.t.html)\[[3383](../source/actor.t.html#3383)\]

<div class="desc">

Deactivate this topic. This could typically be used from within the
topicResponse of an ActorTopicEntry you only want to use once (or in the
last entry in a StopEventList of an ActorTopicEntry). It can also be
called via a \<.deactivate key\> tag in combination with the convKeys.

</div>

<span id="getKeyTopics"></span>

`getKeyTopics (updateStatus)`

[actor.t](../file/actor.t.html)\[[3305](../source/actor.t.html#3305)\]

<div class="desc">

Obtain a list of the TopicEntries that match our keyTopics property.

</div>

<span id="handleTopic"></span>

`handleTopic ( )`

[actor.t](../file/actor.t.html)\[[3236](../source/actor.t.html#3236)\]

<div class="desc">

Handle this topic (if we're the ActorTopicEntry selected to respond to a
conversational command.

</div>

<span id="initializeTopicEntry"></span>

`initializeTopicEntry ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3141](../source/actor.t.html#3141)\]

<div class="desc">

Initialize this ActorTopicEntry (this is actually called at preinit)

</div>

<span id="isReachable"></span>

`isReachable ( )`

[actor.t](../file/actor.t.html)\[[3400](../source/actor.t.html#3400)\]

<div class="desc">

Determine whether this TopicEntry is currently reachable, i.e. whether
it could be reached if the player asked/told etc. about its matchObj on
the next turn.

</div>

<span id="nodeActive"></span>

`nodeActive ( )`

[actor.t](../file/actor.t.html)\[[3107](../source/actor.t.html#3107)\]

<div class="desc">

Test whether any of this Topic Entry's convKeys match those in the
Actor's activeKeys list (whether or not the latter has any entries).
This can be used in the isActive property to make this topic entry
\*only\* available when its convKeys are active.

</div>

<span id="showKeyTopics"></span>

`showKeyTopics ( )`

[actor.t](../file/actor.t.html)\[[3280](../source/actor.t.html#3280)\]

<div class="desc">

Show our suggested keyTopics, if keyTopics is defined.

</div>

<span id="timesToSuggest"></span>

`timesToSuggest ( )`

[actor.t](../file/actor.t.html)\[[3177](../source/actor.t.html#3177)\]

<div class="desc">

The number of times to suggest this topic entry, if we do suggest it. By
default this is either once (if we're not also an EventList) or the
number of items in our eventList (if we are an EventList). If you want
this topic entry to go on being suggested ad infinitum, set
timesToSuggest to nil.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
