[openingContentsLister]{.title}[object]{.type}

[lister.t](../file/lister.t.html)\[[342](../source/lister.t.html#342)\]

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
openingContentsLister displays the contents of an openable container
when it is first opened.

**`openingContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`openingContentsLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`listRecursively`](#listRecursively)`  `[`showSubListing`](#showSubListing)`  `

Inherited from `ItemLister` :\
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`listed`](#listed)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#listRecursively}

`listRecursively`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[350](../source/lister.t.html#350)\]

::: desc
We don\'t want recursive listing with the openingContentsLister, since
this can produce odd results.
:::

[]{#showSubListing}

`showSubListing`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3262](../source/english.t.html#3262)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[344](../source/lister.t.html#344)\]

::: desc
is the object listed in an EXAMINE description of its container?
:::

[]{#showListEmpty}

`showListEmpty (parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3257](../source/english.t.html#3257)\]

::: desc
*no description available*
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3246](../source/english.t.html#3246)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3252](../source/english.t.html#3252)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
