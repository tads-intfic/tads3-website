[GreetingTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3767](../source/actor.t.html#3767)\]

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
A GreetingTopic is a kind of TopicEntry used in greeting protocols
(saying Hello or Goodbye). Game code will not use this class directly
but will instead use one or more of its subclasses

`class `**`GreetingTopic`**` :   `[`MiscTopic`](../object/MiscTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`GreetingTopic`**\
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

**`GreetingTopic`**\
`         `[`ActorByeTopic`](../object/ActorByeTopic.html)\
`         `[`BoredByeTopic`](../object/BoredByeTopic.html)\
`         `[`ByeTopic`](../object/ByeTopic.html)\
`         `[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)\
`         `[`HelloTopic`](../object/HelloTopic.html)\
`                 `[`ActorHelloTopic`](../object/ActorHelloTopic.html)\
`                 `[`ImpHelloTopic`](../object/ImpHelloTopic.html)\
`         `[`ImpByeTopic`](../object/ImpByeTopic.html)\
`         `[`LeaveByeTopic`](../object/LeaveByeTopic.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`changeToState`](#changeToState)`  `[`impliesGreeting`](#impliesGreeting)`  `[`includeInList`](#includeInList)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`handleTopic`](#handleTopic)`  `

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

[]{#changeToState}

`changeToState`

[actor.t](../file/actor.t.html)\[[3776](../source/actor.t.html#3776)\]

::: desc
It may be that we want to change to a different actor state when we
begin or end a conversation. If so the changeToState property can be
used to specify which state to change to.
:::

[]{#impliesGreeting}

`impliesGreeting`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3769](../source/actor.t.html#3769)\]

::: desc
*no description available*
:::

[]{#includeInList}

`includeInList`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3768](../source/actor.t.html#3768)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#handleTopic}

`handleTopic ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3782](../source/actor.t.html#3782)\]

::: desc
Handling a GreetingTopic includes the requested state change, if
changeToState is defined
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
