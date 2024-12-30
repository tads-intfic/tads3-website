[ActorTopicDatabase]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[2841](../source/actor.t.html#2841)\],
[scenetopic.t](../file/scenetopic.t.html)\[[78](../source/scenetopic.t.html#78)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A TopicDatabase is an object that can contain TopicEntries and return
the best match on request. ActorTopicDatabase is a specialization of
TopicDatabase for use with the conversation system, and is used as a
mix-in class in the list of classes from which Actor and ActorState
inherit.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[78](../source/scenetopic.t.html#78)\]:*\
Modifications to ActorTopicDatabase for SceneTopic extension

`class `**`ActorTopicDatabase`**` :   `[`TopicDatabase`](../object/TopicDatabase.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ActorTopicDatabase`**\
`         `[`TopicDatabase`](../object/TopicDatabase.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ActorTopicDatabase`**\
`         `[`Actor`](../object/Actor.html)\
`         `[`ActorState`](../object/ActorState.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`askForTopics`](#askForTopics)`  `[`askTopics`](#askTopics)`  `[`commandTopics`](#commandTopics)`  `[`defaultAgendaTopic`](#defaultAgendaTopic)`  `[`giveTopics`](#giveTopics)`  `[`initiateTopics`](#initiateTopics)`  `[`miscTopics`](#miscTopics)`  `[`queryTopics`](#queryTopics)`  `[`sayTopics`](#sayTopics)`  `[`sceneEndTopics`](#sceneEndTopics)`  `[`sceneStartTopics`](#sceneStartTopics)`  `[`showTopics`](#showTopics)`  `[`talkTopics`](#talkTopics)`  `[`tellTopics`](#tellTopics)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`initiateTopic`](#initiateTopic)`  `[`listableTopics`](#listableTopics)`  `

Inherited from `TopicDatabase` :\
` `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`getBestMatch`](../object/TopicDatabase.html#getBestMatch)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#askForTopics}

`askForTopics`

[actor.t](../file/actor.t.html)\[[2857](../source/actor.t.html#2857)\]

::: desc
*no description available*
:::

[]{#askTopics}

`askTopics`

[actor.t](../file/actor.t.html)\[[2851](../source/actor.t.html#2851)\]

::: desc
The various lists of TopicEntries located within this TopicDatabase. For
exampel the askTopics list would contain a list of all our AskTopics.
Note that the same TopicEntry can appear in more than one list; for
example an AskTellTopic would appear in both the askTopics list and the
tellTopics list, and a DefaultAnyTopic would appear in all the lists
apart from initiateTopics.
:::

[]{#commandTopics}

`commandTopics`

[actor.t](../file/actor.t.html)\[[2861](../source/actor.t.html#2861)\]

::: desc
*no description available*
:::

[]{#defaultAgendaTopic}

`defaultAgendaTopic`

[actor.t](../file/actor.t.html)\[[2921](../source/actor.t.html#2921)\]

::: desc
Obtain the identify of any DefaultAgendaTopic contained in this database
:::

[]{#giveTopics}

`giveTopics`

[actor.t](../file/actor.t.html)\[[2855](../source/actor.t.html#2855)\]

::: desc
*no description available*
:::

[]{#initiateTopics}

`initiateTopics`

[actor.t](../file/actor.t.html)\[[2859](../source/actor.t.html#2859)\]

::: desc
*no description available*
:::

[]{#miscTopics}

`miscTopics`

[actor.t](../file/actor.t.html)\[[2860](../source/actor.t.html#2860)\]

::: desc
*no description available*
:::

[]{#queryTopics}

`queryTopics`

[actor.t](../file/actor.t.html)\[[2854](../source/actor.t.html#2854)\]

::: desc
*no description available*
:::

[]{#sayTopics}

`sayTopics`

[actor.t](../file/actor.t.html)\[[2853](../source/actor.t.html#2853)\]

::: desc
*no description available*
:::

[]{#sceneEndTopics}

`sceneEndTopics`

[scenetopic.t](../file/scenetopic.t.html)\[[80](../source/scenetopic.t.html#80)\]

::: desc
*no description available*
:::

[]{#sceneStartTopics}

`sceneStartTopics`

[scenetopic.t](../file/scenetopic.t.html)\[[79](../source/scenetopic.t.html#79)\]

::: desc
*no description available*
:::

[]{#showTopics}

`showTopics`

[actor.t](../file/actor.t.html)\[[2856](../source/actor.t.html#2856)\]

::: desc
*no description available*
:::

[]{#talkTopics}

`talkTopics`

[actor.t](../file/actor.t.html)\[[2858](../source/actor.t.html#2858)\]

::: desc
*no description available*
:::

[]{#tellTopics}

`tellTopics`

[actor.t](../file/actor.t.html)\[[2852](../source/actor.t.html#2852)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#initiateTopic}

`initiateTopic (top)`

[actor.t](../file/actor.t.html)\[[2925](../source/actor.t.html#2925)\]

::: desc
Handle an InitiateTopic
:::

[]{#listableTopics}

`listableTopics ( )`

[actor.t](../file/actor.t.html)\[[2870](../source/actor.t.html#2870)\]

::: desc
Return a list of our listable topics, that is the topic entries located
within us that should be included in a topic inventory listing because
they are (a) currently reachable and (b) currently marked for listing.
The resulting list forms part of the list passed to the
suggestedTopicLister.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
