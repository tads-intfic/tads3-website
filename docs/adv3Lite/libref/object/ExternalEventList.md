[ExternalEventList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[249](../source/eventList.t.html#249)\]

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
An \"external\" event list is one whose state is driven externally to
the script. Specifically, the state is \*not\* advanced by invoking the
script; the state is advanced exclusively by some external process (for
example, by a daemon that invokes the event list\'s advanceState()
method).

`class `**`ExternalEventList`**` :   `[`EventList`](../object/EventList.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ExternalEventList`**\
`         `[`EventList`](../object/EventList.html)\
`                 `[`Script`](../object/Script.html)\
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

` `

Inherited from `EventList` :\
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`scriptDone`](#scriptDone)`  `

Inherited from `EventList` :\
` `[`addItem`](../object/EventList.html#addItem)`  `[`advanceState`](../object/EventList.html#advanceState)`  `[`construct`](../object/EventList.html#construct)`  `[`doScript`](../object/EventList.html#doScript)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`resetList`](../object/EventList.html#resetList)`  `

Inherited from `Script` :\
` `[`getScriptState`](../object/Script.html#getScriptState)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#scriptDone}

`scriptDone ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[250](../source/eventList.t.html#250)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
