[TopicDatabase]{.title}[class]{.type}

[topicEntry.t](../file/topicEntry.t.html)\[[186](../source/topicEntry.t.html#186)\]

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
A TopicDatabase is a container for TopicEntries that provides a method
for determining the TopicEntry that best matches a list of topics

`class `**`TopicDatabase`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TopicDatabase`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TopicDatabase`**\
`         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)\
`                 `[`Actor`](../object/Actor.html)\
`                 `[`ActorState`](../object/ActorState.html)\
`         `[`Consultable`](../object/Consultable.html)\
`         `[`ThoughtManager`](../object/ThoughtManager.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addTopic`](#addTopic)`  `[`getBestMatch`](#getBestMatch)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addTopic}

`addTopic (top)`

[topicEntry.t](../file/topicEntry.t.html)\[[244](../source/topicEntry.t.html#244)\]

::: desc
Add a topic entry to the appropriate list or list on this TopicDatabase.
:::

[]{#getBestMatch}

`getBestMatch (myList, requestedList)`

[topicEntry.t](../file/topicEntry.t.html)\[[192](../source/topicEntry.t.html#192)\]

::: desc
Find the topic entry among those supplied in myList that best matches at
least one of the topics passed in requestedList.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
