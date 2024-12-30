[ImpByeTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3897](../source/actor.t.html#3897)\]

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
An implied goodbye topic. This handles ONLY automatic (implied)
conversation endings, which happen when we walk away from an actor
we\'re talking to, or the other actor ends the conversation after being
ignored for too long, or the other actor ends the conversation of its
own volition via npc.endConversation().

We use a higher-than-default matchScore so that any time we have both a
ByeTopic and an ImpByeTopic that are both active, we\'ll choose the more
specific ImpByeTopic.

`class `**`ImpByeTopic`**` :   `[`GreetingTopic`](../object/GreetingTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ImpByeTopic`**\
`         `[`GreetingTopic`](../object/GreetingTopic.html)\
`                 `[`MiscTopic`](../object/MiscTopic.html)\
`                         `[`ActorTopicEntry`](../object/ActorTopicEntry.html)\
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                         `[`Redirector`](../object/Redirector.html)\
`                                                 object`\
`                                 `[`TopicEntry`](../object/TopicEntry.html)\
`                                         object`\
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

` `[`matchObj`](#matchObj)`  `[`matchScore`](#matchScore)`  `

Inherited from `GreetingTopic` :\
` `[`changeToState`](../object/GreetingTopic.html#changeToState)`  `[`impliesGreeting`](../object/GreetingTopic.html#impliesGreeting)`  `[`includeInList`](../object/GreetingTopic.html#includeInList)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `GreetingTopic` :\
` `[`handleTopic`](../object/GreetingTopic.html#handleTopic)`  `

Inherited from `MiscTopic` :\
` `[`matchTopic`](../object/MiscTopic.html#matchTopic)`  `

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

[]{#matchObj}

`matchObj`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3902](../source/actor.t.html#3902)\]

::: desc
The ImpByeTopic matches endConvLeave, endConvBoredom, or endConvActor
(but not endConvBye).
:::

[]{#matchScore}

`matchScore`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3908](../source/actor.t.html#3908)\]

::: desc
Give ImpByeTopic a high matchScore so that it takes precedence over
ByeTopic when both are present.
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
