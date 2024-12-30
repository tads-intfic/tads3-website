[TopicEntry]{.title}[class]{.type}

[topicEntry.t](../file/topicEntry.t.html)\[[16](../source/topicEntry.t.html#16)\]

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
TopicEntry is the base class for ConsultTopics and various kinds of
Conversation Topics. It can be used to match a particular topic and
output an appropriate response.

`class `**`TopicEntry`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TopicEntry`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TopicEntry`**\
`         `[`ActorTopicEntry`](../object/ActorTopicEntry.html)\
`                 `[`AltTopic`](../object/AltTopic.html)\
`                 `[`AskAboutForTopic`](../object/AskAboutForTopic.html)\
`                 `[`AskForTopic`](../object/AskForTopic.html)\
`                 `[`AskTellGiveShowTopic`](../object/AskTellGiveShowTopic.html)\
`                 `[`AskTellShowTopic`](../object/AskTellShowTopic.html)\
`                 `[`AskTellTopic`](../object/AskTellTopic.html)\
`                 `[`AskTopic`](../object/AskTopic.html)\
`                 `[`CommandTopic`](../object/CommandTopic.html)\
`                 `[`DefaultTopic`](../object/DefaultTopic.html)\
`                         `[`DefaultAnyTopic`](../object/DefaultAnyTopic.html)\
`                                 `[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)\
`                                 `[`DefaultAnyNonSayTopic`](../object/DefaultAnyNonSayTopic.html)\
`                         `[`DefaultAskForTopic`](../object/DefaultAskForTopic.html)\
`                         `[`DefaultAskQueryTopic`](../object/DefaultAskQueryTopic.html)\
`                         `[`DefaultAskTellTopic`](../object/DefaultAskTellTopic.html)\
`                         `[`DefaultAskTopic`](../object/DefaultAskTopic.html)\
`                         `[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)\
`                         `[`DefaultConversationTopic`](../object/DefaultConversationTopic.html)\
`                                 `[`DefaultNonSayTopic`](../object/DefaultNonSayTopic.html)\
`                         `[`DefaultGiveShowTopic`](../object/DefaultGiveShowTopic.html)\
`                         `[`DefaultGiveTopic`](../object/DefaultGiveTopic.html)\
`                         `[`DefaultQueryTopic`](../object/DefaultQueryTopic.html)\
`                         `[`DefaultSayQueryTopic`](../object/DefaultSayQueryTopic.html)\
`                         `[`DefaultSayTellTalkTopic`](../object/DefaultSayTellTalkTopic.html)\
`                         `[`DefaultSayTellTopic`](../object/DefaultSayTellTopic.html)\
`                         `[`DefaultSayTopic`](../object/DefaultSayTopic.html)\
`                         `[`DefaultShowTopic`](../object/DefaultShowTopic.html)\
`                         `[`DefaultTalkTopic`](../object/DefaultTalkTopic.html)\
`                         `[`DefaultTellTalkTopic`](../object/DefaultTellTalkTopic.html)\
`                         `[`DefaultTellTopic`](../object/DefaultTellTopic.html)\
`                 `[`GiveShowTopic`](../object/GiveShowTopic.html)\
`                 `[`GiveTopic`](../object/GiveTopic.html)\
`                 `[`InitiateTopic`](../object/InitiateTopic.html)\
`                         `[`NodeContinuationTopic`](../object/NodeContinuationTopic.html)\
`                         `[`NodeEndCheck`](../object/NodeEndCheck.html)\
`                 `[`MiscTopic`](../object/MiscTopic.html)\
`                         `[`GreetingTopic`](../object/GreetingTopic.html)\
`                                 `[`ActorByeTopic`](../object/ActorByeTopic.html)\
`                                 `[`BoredByeTopic`](../object/BoredByeTopic.html)\
`                                 `[`ByeTopic`](../object/ByeTopic.html)\
`                                 `[`HelloGoodbyeTopic`](../object/HelloGoodbyeTopic.html)\
`                                 `[`HelloTopic`](../object/HelloTopic.html)\
`                                         `[`ActorHelloTopic`](../object/ActorHelloTopic.html)\
`                                         `[`ImpHelloTopic`](../object/ImpHelloTopic.html)\
`                                 `[`ImpByeTopic`](../object/ImpByeTopic.html)\
`                                 `[`LeaveByeTopic`](../object/LeaveByeTopic.html)\
`                         `[`HitTopic`](../object/HitTopic.html)\
`                         `[`KissTopic`](../object/KissTopic.html)\
`                         `[`NoTopic`](../object/NoTopic.html)\
`                         `[`TouchTopic`](../object/TouchTopic.html)\
`                         `[`YesNoTopic`](../object/YesNoTopic.html)\
`                         `[`YesTopic`](../object/YesTopic.html)\
`                 `[`SceneTopic`](../object/SceneTopic.html)\
`                         `[`SceneEndTopic`](../object/SceneEndTopic.html)\
`                         `[`SceneStartTopic`](../object/SceneStartTopic.html)\
`                 `[`ShowTopic`](../object/ShowTopic.html)\
`                 `[`SlaveTopic`](../object/SlaveTopic.html)\
`                 `[`SpecialTopic`](../object/SpecialTopic.html)\
`                         `[`QueryTopic`](../object/QueryTopic.html)\
`                         `[`SayTopic`](../object/SayTopic.html)\
`                 `[`TalkTopic`](../object/TalkTopic.html)\
`                         `[`AskTalkTopic`](../object/AskTalkTopic.html)\
`                         `[`AskTellTalkTopic`](../object/AskTellTalkTopic.html)\
`                         `[`TellTalkTopic`](../object/TellTalkTopic.html)\
`                 `[`TellTalkShowTopic`](../object/TellTalkShowTopic.html)\
`                 `[`TellTopic`](../object/TellTopic.html)\
`         `[`ConsultTopic`](../object/ConsultTopic.html)\
`                 `[`DefaultConsultTopic`](../object/DefaultConsultTopic.html)\
`         `[`Thought`](../object/Thought.html)\
`                 `[`DefaultThought`](../object/DefaultThought.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`active`](#active)`  `[`includeInList`](#includeInList)`  `[`isActive`](#isActive)`  `[`matchExactCase`](#matchExactCase)`  `[`matchObj`](#matchObj)`  `[`matchPattern`](#matchPattern)`  `[`matchScore`](#matchScore)`  `[`scoreBoost`](#scoreBoost)`  `[`topicMatched`](#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addTopic`](#addTopic)`  `[`initializeTopicEntry`](#initializeTopicEntry)`  `[`matchTopic`](#matchTopic)`  `[`scoreBooster`](#scoreBooster)`  `[`topicResponse`](#topicResponse)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`

[topicEntry.t](../file/topicEntry.t.html)\[[172](../source/topicEntry.t.html#172)\]

::: desc
The active property is used internally by the library to determine
whether a TopicEntry is currently available for use. On the base
TopicEntry class a topic entry is active if its isActive property is
true, but this is not necessarily the case on the ActorTopicEntry
subclass defined in actor.t, which needs to distinguish between these
properties.

Game code should not normally need to override the active property.
:::

[]{#includeInList}

`includeInList`

[topicEntry.t](../file/topicEntry.t.html)\[[135](../source/topicEntry.t.html#135)\]

::: desc
The set of database lists we\'re part of. This is a list of one or more
property pointers, giving the TopicDatabase properties of the lists we
participate in.
:::

[]{#isActive}

`isActive`

[topicEntry.t](../file/topicEntry.t.html)\[[160](../source/topicEntry.t.html#160)\]

::: desc
Is this TopicEntry currently active? Game code can set a condition here
so that a TopicEntry only becomes active (i.e. available) under
particular circumstances.
:::

[]{#matchExactCase}

`matchExactCase`

[topicEntry.t](../file/topicEntry.t.html)\[[128](../source/topicEntry.t.html#128)\]

::: desc
Do we want to restrict this TopicEntry to an exact case match with its
matchPattern? By default we don\'t.
:::

[]{#matchObj}

`matchObj`

[topicEntry.t](../file/topicEntry.t.html)\[[110](../source/topicEntry.t.html#110)\]

::: desc
The object, topic or list of objects/topics that this TopicEntry
matches.
:::

[]{#matchPattern}

`matchPattern`

[topicEntry.t](../file/topicEntry.t.html)\[[122](../source/topicEntry.t.html#122)\]

::: desc
A regular expression that this TopicEntry might match, if it doesn\'t
match a matchObj. We don\'t need to define this if we\'ve defined a
matchObj.
:::

[]{#matchScore}

`matchScore`

[topicEntry.t](../file/topicEntry.t.html)\[[104](../source/topicEntry.t.html#104)\]

::: desc
Our matchScore is the base score we return if we match the topic
requested; this is used to determine whether we\'re the best match under
the circumstances. By default we use a value of 100.
:::

[]{#scoreBoost}

`scoreBoost`

[topicEntry.t](../file/topicEntry.t.html)\[[142](../source/topicEntry.t.html#142)\]

::: desc
A method or property that can be used to dynamically alter our score
according to circumstances if needed.
:::

[]{#topicMatched}

`topicMatched`

[topicEntry.t](../file/topicEntry.t.html)\[[115](../source/topicEntry.t.html#115)\]

::: desc
The topic that this TopicEntry actually matched (set by matchTopic()).
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addTopic}

`addTopic (top)`

[topicEntry.t](../file/topicEntry.t.html)\[[178](../source/topicEntry.t.html#178)\]

::: desc
If something located in us wants us to add it to our topic database,
pass the request up to our location (this is used by AltTopic).
:::

[]{#initializeTopicEntry}

`initializeTopicEntry ( )`

[topicEntry.t](../file/topicEntry.t.html)\[[76](../source/topicEntry.t.html#76)\]

::: desc
Initialize this Topic Entry (actually carried out at pre-init
:::

[]{#matchTopic}

`matchTopic (top)`

[topicEntry.t](../file/topicEntry.t.html)\[[24](../source/topicEntry.t.html#24)\]

::: desc
Determine how well this TopicEntry matches top (a Topic or Thing). If it
doesn\'t match at all we return nil, otherwise we return a numerical
score indicating the strength of the match so that a routine that\'s
looking for the best match can choose the one with the highest score.
:::

[]{#scoreBooster}

`scoreBooster ( )`

[topicEntry.t](../file/topicEntry.t.html)\[[144](../source/topicEntry.t.html#144)\]

::: desc
*no description available*
:::

[]{#topicResponse}

`topicResponse ( )`

[topicEntry.t](../file/topicEntry.t.html)\[[87](../source/topicEntry.t.html#87)\]

::: desc
Output our response to the topic. This can be typically be overridden to
a double-quoted string or method to output the required response.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
