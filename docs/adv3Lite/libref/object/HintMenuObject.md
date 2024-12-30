[HintMenuObject]{.title}[class]{.type}

[hintsys.t](../file/hintsys.t.html)\[[181](../source/hintsys.t.html#181)\]

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
A basic hint menu object. This is an abstract base class that
encapsulates some behavior common to different hint menu classes.

`class `**`HintMenuObject`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`HintMenuObject`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`HintMenuObject`**\
`         `[`Goal`](../object/Goal.html)\
`         `[`HintLongTopicItem`](../object/HintLongTopicItem.html)\
`         `[`HintMenu`](../object/HintMenu.html)\
`                 `[`TopHintMenu`](../object/TopHintMenu.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`topicOrder`](#topicOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`compareForTopicSort`](#compareForTopicSort)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#topicOrder}

`topicOrder`

[hintsys.t](../file/hintsys.t.html)\[[191](../source/hintsys.t.html#191)\]

::: desc
The topic order. When we\'re about to show a list of open topics, we\'ll
sort the list in ascending order of this property, then in ascending
order of title. By default, we set this order value to 1000; if
individual goals don\'t override this, then they\'ll simply be sorted
lexically by topic name. This can be used if there\'s some basis other
than alphabetical order for sorting the list.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#compareForTopicSort}

`compareForTopicSort (other)`

[hintsys.t](../file/hintsys.t.html)\[[202](../source/hintsys.t.html#202)\]

::: desc
Compare this goal to another, for the purposes of sorting a list of
topics. Returns a positive number if this goal sorts after the other
one, a negative number if this goal sorts before the other one, 0 if the
relative order is arbitrary.

By default, we\'ll sort by topicOrder if the topicOrder values are
different, otherwise alphabetically by title.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
