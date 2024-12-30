[QueryTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[4545](../source/actor.t.html#4545)\]

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
A QueryTopic is a kind of SpecialTopic that extends the range of
questions that the player (character) can ask an NPC from ASK ABOUT
so-and-so to ASK WHO/WHAT/WHY/WHERE/WHETHER/IF/HOW so-and-so. The type
of question to be matched (who/what/why/when etc.) needs to be defined
on a QueryTopic\'s qType property (so that it can be matched by the
QueryTopic\'s grammar). The remainder of the question is the Topic a
particular QueryTopic matches.

`class `**`QueryTopic`**` :   `[`SpecialTopic`](../object/SpecialTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`QueryTopic`**\
`         `[`SpecialTopic`](../object/SpecialTopic.html)\
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

` `[`includeInList`](#includeInList)`  `[`qtype`](#qtype)`  `

Inherited from `SpecialTopic` :\
` `[`askMatchObj`](../object/SpecialTopic.html#askMatchObj)`  `[`autoName`](../object/SpecialTopic.html#autoName)`  `[`rex`](../object/SpecialTopic.html#rex)`  `[`tellMatchObj`](../object/SpecialTopic.html#tellMatchObj)`  `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`buildName`](#buildName)`  `[`initializeTopicEntry`](#initializeTopicEntry)`  `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

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

[actor.t](../file/actor.t.html)\[[4646](../source/actor.t.html#4646)\]

::: desc
A QueryTopic belongs in the queryTopics list of its TopicDatabase
:::

[]{#qtype}

`qtype`

[actor.t](../file/actor.t.html)\[[4578](../source/actor.t.html#4578)\]

::: desc
The list of query types we match, e.g. \'where\'. To match multiple
types list them divided by a vertical bar, e.g. \'if\|whether\'
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#buildName}

`buildName ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4622](../source/actor.t.html#4622)\]

::: desc
When we build the name of a QueryTopic (for use in a list of topic
suggestions) we need to include the query type (qType).
:::

[]{#initializeTopicEntry}

`initializeTopicEntry ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4581](../source/actor.t.html#4581)\]

::: desc
*no description available*
:::

[]{#matchTopic}

`matchTopic (top)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4551](../source/actor.t.html#4551)\]

::: desc
Check whether this QueryTopic matches the question asked. For it to do
so it must match not only the topic but the qType (query type)
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
