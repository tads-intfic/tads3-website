[CommandTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3557](../source/actor.t.html#3557)\]

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
A CommandTopic is a TopicEntry that handles a command directed at this
actor (e.g. BOB, JUMP).

`class `**`CommandTopic`**` :   `[`CommandTopicHelper`](../object/CommandTopicHelper.html)`   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CommandTopic`**\
`         `[`CommandTopicHelper`](../object/CommandTopicHelper.html)\
`                 `[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)\
`                         object`\
`         `[`ActorTopicEntry`](../object/ActorTopicEntry.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
`                 `[`TopicEntry`](../object/TopicEntry.html)\
`                         object`\
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

` `[`includeInList`](#includeInList)`  `[`matchDobj`](#matchDobj)`  `[`matchIobj`](#matchIobj)`  `[`myAction`](#myAction)`  `

Inherited from `CommandTopicHelper` :\
` `[`allowAction`](../object/CommandTopicHelper.html#allowAction)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`matchTopic`](#matchTopic)`  `

Inherited from `CommandTopicHelper` :\
` `[`handleTopic`](../object/CommandTopicHelper.html#handleTopic)`  `

Inherited from `LCommandTopicHelper` :\
` `[`actionPhrase`](../object/LCommandTopicHelper.html#actionPhrase)`  `[`getName`](../object/LCommandTopicHelper.html#getName)`  `

Inherited from `ActorTopicEntry` :\
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`buildName`](../object/ActorTopicEntry.html#buildName)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

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

[actor.t](../file/actor.t.html)\[[3598](../source/actor.t.html#3598)\]

::: desc
CommandTopics are included in the commandTopics list of their
ActorTopicDatabase
:::

[]{#matchDobj}

`matchDobj`

[actor.t](../file/actor.t.html)\[[3587](../source/actor.t.html#3587)\]

::: desc
The direct and indirect objects I must match (individually or as one of
a list) if this CommandTopic is to be matched.
:::

[]{#matchIobj}

`matchIobj`

[actor.t](../file/actor.t.html)\[[3588](../source/actor.t.html#3588)\]

::: desc
*no description available*
:::

[]{#myAction}

`myAction`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3591](../source/actor.t.html#3591)\]

::: desc
the action I\'ve just matched.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#matchTopic}

`matchTopic (top)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3558](../source/actor.t.html#3558)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
