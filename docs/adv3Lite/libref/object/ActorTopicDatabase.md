---
---
<span class="title">ActorTopicDatabase</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2841](../source/actor.t.html#2841)\],
[scenetopic.t](../file/scenetopic.t.html)\[[78](../source/scenetopic.t.html#78)\]

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

A TopicDatabase is an object that can contain TopicEntries and return
the best match on request. ActorTopicDatabase is a specialization of
TopicDatabase for use with the conversation system, and is used as a
mix-in class in the list of classes from which Actor and ActorState
inherit.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[78](../source/scenetopic.t.html#78)\]:*  
Modifications to ActorTopicDatabase for SceneTopic extension

`class `**`ActorTopicDatabase`**` :   `[`TopicDatabase`](../object/TopicDatabase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorTopicDatabase`**  
`         `[`TopicDatabase`](../object/TopicDatabase.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ActorTopicDatabase`**  
`         `[`Actor`](../object/Actor.html)  
`         `[`ActorState`](../object/ActorState.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`askForTopics`](#askForTopics)`  `[`askTopics`](#askTopics)`  `[`commandTopics`](#commandTopics)`  `[`defaultAgendaTopic`](#defaultAgendaTopic)`  `[`giveTopics`](#giveTopics)`  `[`initiateTopics`](#initiateTopics)`  `[`miscTopics`](#miscTopics)`  `[`queryTopics`](#queryTopics)`  `[`sayTopics`](#sayTopics)`  `[`sceneEndTopics`](#sceneEndTopics)`  `[`sceneStartTopics`](#sceneStartTopics)`  `[`showTopics`](#showTopics)`  `[`talkTopics`](#talkTopics)`  `[`tellTopics`](#tellTopics)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`initiateTopic`](#initiateTopic)`  `[`listableTopics`](#listableTopics)`  `

Inherited from `TopicDatabase` :  
` `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`getBestMatch`](../object/TopicDatabase.html#getBestMatch)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="askForTopics"></span>

`askForTopics`

[actor.t](../file/actor.t.html)\[[2857](../source/actor.t.html#2857)\]

<div class="desc">

*no description available*

</div>

<span id="askTopics"></span>

`askTopics`

[actor.t](../file/actor.t.html)\[[2851](../source/actor.t.html#2851)\]

<div class="desc">

The various lists of TopicEntries located within this TopicDatabase. For
exampel the askTopics list would contain a list of all our AskTopics.
Note that the same TopicEntry can appear in more than one list; for
example an AskTellTopic would appear in both the askTopics list and the
tellTopics list, and a DefaultAnyTopic would appear in all the lists
apart from initiateTopics.

</div>

<span id="commandTopics"></span>

`commandTopics`

[actor.t](../file/actor.t.html)\[[2861](../source/actor.t.html#2861)\]

<div class="desc">

*no description available*

</div>

<span id="defaultAgendaTopic"></span>

`defaultAgendaTopic`

[actor.t](../file/actor.t.html)\[[2921](../source/actor.t.html#2921)\]

<div class="desc">

Obtain the identify of any DefaultAgendaTopic contained in this database

</div>

<span id="giveTopics"></span>

`giveTopics`

[actor.t](../file/actor.t.html)\[[2855](../source/actor.t.html#2855)\]

<div class="desc">

*no description available*

</div>

<span id="initiateTopics"></span>

`initiateTopics`

[actor.t](../file/actor.t.html)\[[2859](../source/actor.t.html#2859)\]

<div class="desc">

*no description available*

</div>

<span id="miscTopics"></span>

`miscTopics`

[actor.t](../file/actor.t.html)\[[2860](../source/actor.t.html#2860)\]

<div class="desc">

*no description available*

</div>

<span id="queryTopics"></span>

`queryTopics`

[actor.t](../file/actor.t.html)\[[2854](../source/actor.t.html#2854)\]

<div class="desc">

*no description available*

</div>

<span id="sayTopics"></span>

`sayTopics`

[actor.t](../file/actor.t.html)\[[2853](../source/actor.t.html#2853)\]

<div class="desc">

*no description available*

</div>

<span id="sceneEndTopics"></span>

`sceneEndTopics`

[scenetopic.t](../file/scenetopic.t.html)\[[80](../source/scenetopic.t.html#80)\]

<div class="desc">

*no description available*

</div>

<span id="sceneStartTopics"></span>

`sceneStartTopics`

[scenetopic.t](../file/scenetopic.t.html)\[[79](../source/scenetopic.t.html#79)\]

<div class="desc">

*no description available*

</div>

<span id="showTopics"></span>

`showTopics`

[actor.t](../file/actor.t.html)\[[2856](../source/actor.t.html#2856)\]

<div class="desc">

*no description available*

</div>

<span id="talkTopics"></span>

`talkTopics`

[actor.t](../file/actor.t.html)\[[2858](../source/actor.t.html#2858)\]

<div class="desc">

*no description available*

</div>

<span id="tellTopics"></span>

`tellTopics`

[actor.t](../file/actor.t.html)\[[2852](../source/actor.t.html#2852)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="initiateTopic"></span>

`initiateTopic (top)`

[actor.t](../file/actor.t.html)\[[2925](../source/actor.t.html#2925)\]

<div class="desc">

Handle an InitiateTopic

</div>

<span id="listableTopics"></span>

`listableTopics ( )`

[actor.t](../file/actor.t.html)\[[2870](../source/actor.t.html#2870)\]

<div class="desc">

Return a list of our listable topics, that is the topic entries located
within us that should be included in a topic inventory listing because
they are (a) currently reachable and (b) currently marked for listing.
The resulting list forms part of the list passed to the
suggestedTopicLister.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
