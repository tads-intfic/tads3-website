[SingletonIterator]{.title}[class]{.type}

[misc.t](../file/misc.t.html)\[[1668](../source/misc.t.html#1668)\]

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
A SingletonIterator is an implementation of the Iterator interface for
singleton values. This allows \'foreach\' to be used with arbitrary
objects, or even primitive values. The effect of iterating over a
singleton value with \'foreach\' using this iterator is simply to invoke
the loop once with the loop variable set to the singleton value.

`class `**`SingletonIterator`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SingletonIterator`**\
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

` `[`more_`](#more_)`  `[`val_`](#val_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getCurVal`](#getCurVal)`  `[`getKey`](#getKey)`  `[`getNext`](#getNext)`  `[`isNextAvailable`](#isNextAvailable)`  `[`resetIterator`](#resetIterator)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#more_}

`more_`

[misc.t](../file/misc.t.html)\[[1698](../source/misc.t.html#1698)\]

::: desc
do we have any more values to fetch?
:::

[]{#val_}

`val_`

[misc.t](../file/misc.t.html)\[[1695](../source/misc.t.html#1695)\]

::: desc
the singleton value we\'re \"iterating\" over
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (val)`

[misc.t](../file/misc.t.html)\[[1670](../source/misc.t.html#1670)\]

::: desc
construction: save the singleton value that we\'re \"iterating\" over
:::

[]{#getCurVal}

`getCurVal ( )`

[misc.t](../file/misc.t.html)\[[1692](../source/misc.t.html#1692)\]

::: desc
get the current value
:::

[]{#getKey}

`getKey ( )`

[misc.t](../file/misc.t.html)\[[1689](../source/misc.t.html#1689)\]

::: desc
get the current key; we have no keys, so use a fake key of nil
:::

[]{#getNext}

`getNext ( )`

[misc.t](../file/misc.t.html)\[[1673](../source/misc.t.html#1673)\]

::: desc
get the next value
:::

[]{#isNextAvailable}

`isNextAvailable ( )`

[misc.t](../file/misc.t.html)\[[1683](../source/misc.t.html#1683)\]

::: desc
is another item available?
:::

[]{#resetIterator}

`resetIterator ( )`

[misc.t](../file/misc.t.html)\[[1686](../source/misc.t.html#1686)\]

::: desc
reset: restore the flag that says the value is available
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
