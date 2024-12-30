[wornLister]{.title}[object]{.type}

[lister.t](../file/lister.t.html)\[[178](../source/lister.t.html#178)\]

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
wornLister displays a list of items being worn.

**`wornLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`wornLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`showWornInfo`](#showWornInfo)`  `

Inherited from `ItemLister` :\
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showSubListing`](../object/ItemLister.html#showSubListing)`  `

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

[]{#showWornInfo}

`showWornInfo`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3096](../source/english.t.html#3096)\]

::: desc
We don\'t want to show \"(being worn)\" after items listed after \"You
are wearing\" since this would clearly be redundant.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[180](../source/lister.t.html#180)\]

::: desc
is the object listed in an inventory list?
:::

[]{#showListEmpty}

`showListEmpty (paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3087](../source/english.t.html#3087)\]

::: desc
*no description available*
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3077](../source/english.t.html#3077)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[3082](../source/english.t.html#3082)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
