[DefaultConsultTopic]{.title}[class]{.type}

[topicEntry.t](../file/topicEntry.t.html)\[[361](../source/topicEntry.t.html#361)\]

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
A DefaultConsultTopic is used to provide a response when a Consultable
is consulted about something not otherwise provided for.

`class `**`DefaultConsultTopic`**` :   `[`ConsultTopic`](../object/ConsultTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DefaultConsultTopic`**\
`         `[`ConsultTopic`](../object/ConsultTopic.html)\
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

` `[`isActive`](#isActive)`  `[`matchScore`](#matchScore)`  `

Inherited from `ConsultTopic` :\
` `[`includeInList`](../object/ConsultTopic.html#includeInList)`  `

Inherited from `TopicEntry` :\
` `[`active`](../object/TopicEntry.html#active)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `TopicEntry` :\
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isActive}

`isActive`[OVERRIDDEN]{.rem}

[topicEntry.t](../file/topicEntry.t.html)\[[383](../source/topicEntry.t.html#383)\]

::: desc
A DefaultConsultTopic is normally active
:::

[]{#matchScore}

`matchScore`[OVERRIDDEN]{.rem}

[topicEntry.t](../file/topicEntry.t.html)\[[380](../source/topicEntry.t.html#380)\]

::: desc
A DefaultConsultTopic has the lowest possible matchScore so that any
matching ConsultTopic will always take precedence.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#matchTopic}

`matchTopic (top)`[OVERRIDDEN]{.rem}

[topicEntry.t](../file/topicEntry.t.html)\[[364](../source/topicEntry.t.html#364)\]

::: desc
A DefaultConsultTopic matches anything, so just return our matchScore
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
