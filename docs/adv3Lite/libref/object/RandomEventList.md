[RandomEventList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[339](../source/eventList.t.html#339)\],
[eventListItem.t](../file/eventListItem.t.html)\[[429](../source/eventListItem.t.html#429)\]

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
Randomized event list. This is similar to a regular event list, but
chooses an event at random each time it\'s invoked.

*Modified in
[eventListItem.t](../file/eventListItem.t.html)\[[429](../source/eventListItem.t.html#429)\]:*\
Reset our list to include the item we\'ve just added and clear out any
spent ones.

`class `**`RandomEventList`**` :   `[`RandomFiringScript`](../object/RandomFiringScript.html)`   `[`EventList`](../object/EventList.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`RandomEventList`**\
`         `[`RandomFiringScript`](../object/RandomFiringScript.html)\
`                 object`\
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

` `[`fireCt`](#fireCt)`  `

Inherited from `RandomFiringScript` :\
` `[`eventPercent`](../object/RandomFiringScript.html#eventPercent)`  `[`eventReduceAfter`](../object/RandomFiringScript.html#eventReduceAfter)`  `[`eventReduceTo`](../object/RandomFiringScript.html#eventReduceTo)`  `

Inherited from `EventList` :\
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doScript`](#doScript)`  `[`getNextRandom`](#getNextRandom)`  `

Inherited from `RandomFiringScript` :\
` `[`checkEventOdds`](../object/RandomFiringScript.html#checkEventOdds)`  `[`underusedReadyELIidx`](../object/RandomFiringScript.html#underusedReadyELIidx)`  `

Inherited from `EventList` :\
` `[`addItem`](../object/EventList.html#addItem)`  `[`advanceState`](../object/EventList.html#advanceState)`  `[`construct`](../object/EventList.html#construct)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`resetList`](../object/EventList.html#resetList)`  `[`scriptDone`](../object/EventList.html#scriptDone)`  `

Inherited from `Script` :\
` `[`getScriptState`](../object/Script.html#getScriptState)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#fireCt}

`fireCt`

[eventListItem.t](../file/eventListItem.t.html)\[[472](../source/eventListItem.t.html#472)\]

::: desc
The number of times we have fired on this \'cycle \'
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doScript}

`doScript ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[341](../source/eventList.t.html#341)\]

::: desc
process the next step of the script
:::

[]{#getNextRandom}

`getNextRandom ( )`

[eventList.t](../file/eventList.t.html)\[[365](../source/eventList.t.html#365)\],
[eventListItem.t](../file/eventListItem.t.html)\[[437](../source/eventListItem.t.html#437)\]

::: desc
Get the next random state. By default, we simply return a number from 1
to the number of entries in our event list. This is a separate method to
allow subclasses to customize the way the random number is selected.

*Modified in
[eventListItem.t](../file/eventListItem.t.html)\[[437](../source/eventListItem.t.html#437)\]:*\
Get the next random state. By default, we simply return a number from 1
to the number of entries in our event list. This is a separate method to
allow subclasses to customize the way the random number is selected.
However, if we have an unused EventListItem that\'s ready to fire, we
select that instead, to make sure it gets a look-in at the earliest
possible opportunity.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
