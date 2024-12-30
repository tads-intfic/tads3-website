[descContentsLister]{.title}[object]{.type}

[lister.t](../file/lister.t.html)\[[331](../source/lister.t.html#331)\]

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
descContentsLister displays a list of miscellaneous contents of an
object being examined.

**`descContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`descContentsLister`**\
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

` `[`listed`](#listed)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contentsListedProp}

`contentsListedProp`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[335](../source/lister.t.html#335)\]

::: desc
*no description available*
:::

[]{#showSubListing}

`showSubListing`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3214](../source/english.t.html#3214)\]

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

[lister.t](../file/lister.t.html)\[[333](../source/lister.t.html#333)\]

::: desc
is the object listed in an EXAMINE description of its container?
:::

[]{#showListEmpty}

`showListEmpty (parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3202](../source/english.t.html#3202)\]

::: desc
If there\'s no contents to list, but the item whose contents we were
trying to list wants to report its open-or-closed status, simply state
that it\'s open or closed.
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3171](../source/english.t.html#3171)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3192](../source/english.t.html#3192)\]

::: desc
Otherwise start the listing without explicitly mentioning that the
container is open.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
