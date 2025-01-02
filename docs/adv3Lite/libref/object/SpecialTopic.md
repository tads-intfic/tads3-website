---
layout: docs
---
<span class="title">SpecialTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[4355](../source/actor.t.html#4355)\]

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

SpecialTopic is the base class for two kinds of TopicEntry that extend
the conversation system beyong basic ask/tell: SayTopic and QueryTopic.
The SpecialTopic class defines the common handling but is not used
directly in game code, which will use either SayTopic or QueryTopic

`class `**`SpecialTopic`**` :   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SpecialTopic`**  
[`ActorTopicEntry`](../object/ActorTopicEntry.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SpecialTopic`**  
[`QueryTopic`](../object/QueryTopic.html)  
[`SayTopic`](../object/SayTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`askMatchObj`](#askMatchObj)[`autoName`](#autoName)[`rex`](#rex)[`tellMatchObj`](#tellMatchObj)

Inherited from `ActorTopicEntry` :  
[`activated`](../object/ActorTopicEntry.html#activated)[`active`](../object/ActorTopicEntry.html#active)[`convKeys`](../object/ActorTopicEntry.html#convKeys)[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)[`getActor`](../object/ActorTopicEntry.html#getActor)[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)[`isConversational`](../object/ActorTopicEntry.html#isConversational)[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)[`listOrder`](../object/ActorTopicEntry.html#listOrder)[`name`](../object/ActorTopicEntry.html#name)[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)





Inherited from `TopicEntry` :  
[`includeInList`](../object/TopicEntry.html#includeInList)[`isActive`](../object/TopicEntry.html#isActive)[`matchExactCase`](../object/TopicEntry.html#matchExactCase)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchPattern`](../object/TopicEntry.html#matchPattern)[`matchScore`](../object/TopicEntry.html#matchScore)[`scoreBoost`](../object/TopicEntry.html#scoreBoost)[`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`initializeTopicEntry`](#initializeTopicEntry)

Inherited from `ActorTopicEntry` :  
[`activate`](../object/ActorTopicEntry.html#activate)[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)[`buildName`](../object/ActorTopicEntry.html#buildName)[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)[`deactivate`](../object/ActorTopicEntry.html#deactivate)[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)[`isReachable`](../object/ActorTopicEntry.html#isReachable)[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)

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

<span id="askMatchObj"></span>

`askMatchObj`

[actor.t](../file/actor.t.html)\[[4455](../source/actor.t.html#4455)\]

<div class="desc">

If we want this SpecialTopic also to match an ASK ABOUT command, define
the askMatchObj to hold the topic or list of topics that said ASK ABOUT
command should match here.

</div>

<span id="autoName"></span>

`autoName`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4468](../source/actor.t.html#4468)\]

<div class="desc">

For a SpeciallTopic make constructing a name property automatically the
default.

</div>

<span id="rex"></span>

`rex`

[actor.t](../file/actor.t.html)\[[4448](../source/actor.t.html#4448)\]

<div class="desc">

A Regular expression pattern to look for the kinds of characters we'd
expect to find in our matchPattern property if it actually represents a
regular expression for this TopicEntry to match. We use this to help
determine whether the matchPattern property contains a regex to match
our the vocab of a Topic object to create on the fly.

</div>

<span id="tellMatchObj"></span>

`tellMatchObj`

[actor.t](../file/actor.t.html)\[[4462](../source/actor.t.html#4462)\]

<div class="desc">

If we want this SpecialTopic also to match an TELL ABOUT command, define
the askMatchObj to hold the topic or list of topics that said TELL ABOUT
command should match here.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initializeTopicEntry"></span>

`initializeTopicEntry ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[4361](../source/actor.t.html#4361)\]

<div class="desc">

Carry out the initialization (actually preinitialization) of a
SpecialTopic

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
