[ProxyActor]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[6738](../source/actor.t.html#6738)\]

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
The ProxyActor class can be used to continue the definition of a complex
actor over more than one file. Simply place a ProxyActor object at the
head of a second or subsequent file for the same actor and then set its
location to the Actor object its standing in for. You can then locate
TopicGroups, TopicEntries, ActorStates, AgendaItems, ConvNodes etc.,
within the ProxyActor just as if it were the Actor.

`class `**`ProxyActor`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ProxyActor`**\
`         object`\
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

` `[`active`](#active)`  `[`getActor`](#getActor)`  `[`location`](#location)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addTopic`](#addTopic)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`

[actor.t](../file/actor.t.html)\[[6749](../source/actor.t.html#6749)\]

::: desc
I am active if my location (i.e. my actor) is active).
:::

[]{#getActor}

`getActor`

[actor.t](../file/actor.t.html)\[[6740](../source/actor.t.html#6740)\]

::: desc
My Actor is my location
:::

[]{#location}

`location`

[actor.t](../file/actor.t.html)\[[6755](../source/actor.t.html#6755)\]

::: desc
Set the location to the Actor I\'m standing in for in a new file. This
can be done via the @ notation in the template.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addTopic}

`addTopic (obj)`

[actor.t](../file/actor.t.html)\[[6743](../source/actor.t.html#6743)\]

::: desc
Pass a call to addTopic() up to my actor
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
