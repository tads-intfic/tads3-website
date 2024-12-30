[SyncEventList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[321](../source/eventList.t.html#321)\]

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
A synchronized event list. This is an event list that takes its actions
from a separate event list object. We get our current state from the
other list, and advancing our state advances the other list\'s state in
lock step. Set \'masterObject\' to refer to the master list whose state
we synchronize with.

This can be useful, for example, when we have messages that reflect two
different points of view on the same events: the messages for each point
of view can be kept in a separate list, but the one list can be a slave
of the other to ensure that the two lists are based on a common state.

`class `**`SyncEventList`**` :   `[`EventList`](../object/EventList.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SyncEventList`**\
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

` `[`masterObject`](#masterObject)`  `

Inherited from `EventList` :\
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`advanceState`](#advanceState)`  `[`getScriptState`](#getScriptState)`  `[`scriptDone`](#scriptDone)`  `

Inherited from `EventList` :\
` `[`addItem`](../object/EventList.html#addItem)`  `[`construct`](../object/EventList.html#construct)`  `[`doScript`](../object/EventList.html#doScript)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`resetList`](../object/EventList.html#resetList)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#masterObject}

`masterObject`

[eventList.t](../file/eventList.t.html)\[[323](../source/eventList.t.html#323)\]

::: desc
my master event list object
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#advanceState}

`advanceState ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[329](../source/eventList.t.html#329)\]

::: desc
to advance my state, advance the master list\'s state
:::

[]{#getScriptState}

`getScriptState ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[326](../source/eventList.t.html#326)\]

::: desc
my state is simply the master list\'s state
:::

[]{#scriptDone}

`scriptDone ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[332](../source/eventList.t.html#332)\]

::: desc
let the master list take care of finishing a script step
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
