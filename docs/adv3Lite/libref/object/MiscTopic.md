[MiscTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[3608](../source/actor.t.html#3608)\]

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
A MiscTopic is an ActorTopicEntry that responds not to a conversational
command specifying a separate topic (such as ASK BOB ABOUT FRUIT) but
just to as simple command like YES, NO, HELLO or GOODBYE

`class `**`MiscTopic`**` :   `[`ActorTopicEntry`](../object/ActorTopicEntry.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MiscTopic`**\
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

**`MiscTopic`**\
`         `[`GreetingTopic`](../object/GreetingTopic.html)\
`                 `[`ActorByeTopic`](../object/ActorByeTopic.html)\
`                 `[`BoredByeTopic`](../object/BoredByeTopic.html)\
`                 `[`ByeTopic`](../object/ByeTopic.html)\
`                 `[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)\
`                 `[`HelloTopic`](../object/HelloTopic.html)\
`                         `[`ActorHelloTopic`](../object/ActorHelloTopic.html)\
`                         `[`ImpHelloTopic`](../object/ImpHelloTopic.html)\
`                 `[`ImpByeTopic`](../object/ImpByeTopic.html)\
`                 `[`LeaveByeTopic`](../object/LeaveByeTopic.html)\
`         `[`HitTopic`](../object/HitTopic.html)\
`         `[`KissTopic`](../object/KissTopic.html)\
`         `[`NoTopic`](../object/NoTopic.html)\
`         `[`TouchTopic`](../object/TouchTopic.html)\
`         `[`YesNoTopic`](../object/YesNoTopic.html)\
`         `[`YesTopic`](../object/YesTopic.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`includeInList`](../object/TopicEntry.html#includeInList)`  `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`matchTopic`](#matchTopic)`  `

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

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#matchTopic}

`matchTopic (obj)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[3614](../source/actor.t.html#3614)\]

::: desc
A MiscTopic isn\'t matched to a topic in the normal sense, but we
instead pass the routine an obj parameter to determine what particular
kind of MiscTopic (e.g. YesTopic or ByeTopic) we want to match.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
