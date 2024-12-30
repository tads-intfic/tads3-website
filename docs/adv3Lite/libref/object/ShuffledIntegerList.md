[ShuffledIntegerList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[678](../source/eventList.t.html#678)\]

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
A Shuffled Integer List is a special kind of Shuffled List that returns
integers in a given range. Like an ordinary Shuffled List, we\'ll return
integers in the given range in random order, but we\'ll only return each
integer once during a given round; when we exhaust the supply, we\'ll
reshuffle the set of integers and start over.

`class `**`ShuffledIntegerList`**` :   `[`ShuffledList`](../object/ShuffledList.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ShuffledIntegerList`**\
`         `[`ShuffledList`](../object/ShuffledList.html)\
`                 object`\
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

` `[`rangeMax`](#rangeMax)`  `[`rangeMin`](#rangeMin)`  `[`valueList`](#valueList)`  `

Inherited from `ShuffledList` :\
` `[`suppressRepeats`](../object/ShuffledList.html#suppressRepeats)`  `[`valuesAvail`](../object/ShuffledList.html#valuesAvail)`  `[`valuesVec`](../object/ShuffledList.html#valuesVec)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getNextValue`](#getNextValue)`  `

Inherited from `ShuffledList` :\
` `[`reshuffle`](../object/ShuffledList.html#reshuffle)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#rangeMax}

`rangeMax`

[eventList.t](../file/eventList.t.html)\[[684](../source/eventList.t.html#684)\]

::: desc
*no description available*
:::

[]{#rangeMin}

`rangeMin`

[eventList.t](../file/eventList.t.html)\[[683](../source/eventList.t.html#683)\]

::: desc
The minimum and maximum values for our range. Instances should define
these to the range desired.
:::

[]{#valueList}

`valueList`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[687](../source/eventList.t.html#687)\]

::: desc
initialize the value list on demand
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (rmin, rmax)`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[690](../source/eventList.t.html#690)\]

::: desc
construct with the given range
:::

[]{#getNextValue}

`getNextValue ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[697](../source/eventList.t.html#697)\]

::: desc
get the next value
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
