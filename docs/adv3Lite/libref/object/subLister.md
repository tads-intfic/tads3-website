[subLister]{.title}[object]{.type}

[english.t](../file/english.t.html)\[[3105](../source/english.t.html#3105)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The subLister is used by other listers such as inventoryLister and
wornLister to show the contents of listed items in parentheses (e.g.
\'(in which is a pen, a pencil and a piece of paper). The depth of
nesting is limited by the maxNestingDepth property.

**`subLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`subLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`maxNestingDepth`](#maxNestingDepth)`  `[`nestingDepth`](#nestingDepth)`  `[`showSubListing`](#showSubListing)`  `

Inherited from `ItemLister` :\
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`buildList`](#buildList)`  `[`listed`](#listed)`  `[`showList`](#showList)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `

Inherited from `Lister` :\
` `[`listOrder`](../object/Lister.html#listOrder)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#maxNestingDepth}

`maxNestingDepth`

[english.t](../file/english.t.html)\[[3154](../source/english.t.html#3154)\]

::: desc
The maximum nesting depth this subLister is allowed to reach
:::

[]{#nestingDepth}

`nestingDepth`

[english.t](../file/english.t.html)\[[3157](../source/english.t.html#3157)\]

::: desc
The current nesting depth of this subLister
:::

[]{#showSubListing}

`showSubListing`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3160](../source/english.t.html#3160)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#buildList}

`buildList (lst)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3117](../source/english.t.html#3117)\]

::: desc
Construct the list contents from lst to a maximum nesting depth
:::

[]{#listed}

`listed (o)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3162](../source/english.t.html#3162)\]

::: desc
*no description available*
:::

[]{#showList}

`showList (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3148](../source/english.t.html#3148)\]

::: desc
Return the result
:::

[]{#showListEmpty}

`showListEmpty (paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3114](../source/english.t.html#3114)\]

::: desc
*no description available*
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3106](../source/english.t.html#3106)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3112](../source/english.t.html#3112)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
