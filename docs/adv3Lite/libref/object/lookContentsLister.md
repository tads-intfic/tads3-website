[lookContentsLister]{.title}[object]{.type}

[lister.t](../file/lister.t.html)\[[162](../source/lister.t.html#162)\]

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
lookContentsLister is used to display a list of the contents of objects
in a room description.

**`lookContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`lookContentsLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contentsListedProp`](#contentsListedProp)`  `[`showSubListing`](#showSubListing)`  `

Inherited from `ItemLister` :\
` `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`listed`](#listed)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contentsListedProp}

`contentsListedProp`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[166](../source/lister.t.html#166)\]

::: desc
*no description available*
:::

[]{#showSubListing}

`showSubListing`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3237](../source/english.t.html#3237)\]

::: desc
Flag: Show a sublisting (i.e. the contents of the items in our immediate
contents, in parentheses after the name of the item, if the gameMain
option useParentheticalListing is true.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[164](../source/lister.t.html#164)\]

::: desc
is the object listed in a LOOK AROUND description?
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3222](../source/english.t.html#3222)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3227](../source/english.t.html#3227)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
