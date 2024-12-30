[AgendaManager]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[5630](../source/actor.t.html#5630)\]

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
Base class for items (Actors and DefaultAgendaTopics) that can handle

`class `**`AgendaManager`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`AgendaManager`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`AgendaManager`**\
`         `[`Actor`](../object/Actor.html)\
`         `[`DefaultAgendaTopic`](../object/DefaultAgendaTopic.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`agendaList`](#agendaList)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addToAgenda`](#addToAgenda)`  `[`executeAgenda`](#executeAgenda)`  `[`removeFromAgenda`](#removeFromAgenda)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#agendaList}

`agendaList`

[actor.t](../file/actor.t.html)\[[5636](../source/actor.t.html#5636)\]

::: desc
Our agendaList is the list of AgendaItems we\'re ready to execute when
they\'re isReady property is true.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addToAgenda}

`addToAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[5643](../source/actor.t.html#5643)\]

::: desc
add an agenda item. We try to make this as author-proof as possible so
that the method will accept addToAgenda(item), addToAgenda(item1, item2,
\...) or addToAgenda(\[item1, item2,..\])
:::

[]{#executeAgenda}

`executeAgenda ( )`

[actor.t](../file/actor.t.html)\[[5696](../source/actor.t.html#5696)\]

::: desc
Execute the next item in our agenda, if there are any items in the
agenda that are ready to execute. We\'ll return true if we found an item
to execute, nil if not.
:::

[]{#removeFromAgenda}

`removeFromAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[5676](../source/actor.t.html#5676)\]

::: desc
remove one or more agenda items
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
