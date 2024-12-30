[NoTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3724](../source/actor.t.html#3724)\]

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
A NoTopic is a TopicEntry that responds to NO or SAY NO

`class `**`NoTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NoTopic`**\
`         `[`MiscTopic`](../object/MiscTopic.html)\
`                 `[`ActorTopicEntry`](../object/ActorTopicEntry.html)\
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                 `[`Redirector`](../object/Redirector.html)\
`                                         object`\
`                         `[`TopicEntry`](../object/TopicEntry.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`includeInList`](#includeInList)`  `[`matchObj`](#matchObj)`  `[`name`](#name)`  `[`suggestAs`](#suggestAs)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `MiscTopic` :\
` `[`matchTopic`](../object/MiscTopic.html#matchTopic)`  `

Inherited from `ActorTopicEntry` :\
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`buildName`](../object/ActorTopicEntry.html#buildName)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)`  `[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

Inherited from `TopicEntry` :\
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#includeInList}

`includeInList`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3726](../source/actor.t.html#3726)\]

::: desc
NoTopics are included in the miscTopics list of their TopicDatabase
:::

[]{#matchObj}

`matchObj`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3729](../source/actor.t.html#3729)\]

::: desc
NoTopics match the noTopicObj
:::

[]{#name}

`name`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3735](../source/actor.t.html#3735)\]

::: desc
We give NoTopic a name so that it can be suggested in response to a
request to display a list of suggested topics.
:::

[]{#suggestAs}

`suggestAs`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3741](../source/actor.t.html#3741)\]

::: desc
We define the suggestAs property of the NoTopic so that the
suggestedTopicLister can readily separate it from YesTopics
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
