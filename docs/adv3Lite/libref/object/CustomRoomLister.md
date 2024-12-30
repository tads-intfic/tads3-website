[CustomRoomLister]{.title}[class]{.type}

[lister.t](../file/lister.t.html)\[[383](../source/lister.t.html#383)\]

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
A lister that can be readily customized to tailor the text before and
after a list of miscellaneous items in a room description.

`class `**`CustomRoomLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CustomRoomLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
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

` `[`prefix_`](#prefix_)`  `[`showSubListing`](#showSubListing)`  `[`suffix_`](#suffix_)`  `

Inherited from `ItemLister` :\
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`listed`](#listed)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#prefix_}

`prefix_`

[lister.t](../file/lister.t.html)\[[409](../source/lister.t.html#409)\]

::: desc
*no description available*
:::

[]{#showSubListing}

`showSubListing`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[422](../source/lister.t.html#422)\]

::: desc
*no description available*
:::

[]{#suffix_}

`suffix_`

[lister.t](../file/lister.t.html)\[[410](../source/lister.t.html#410)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (prefix, prefixMethod, :?, suffix, :?, suffixMethod, :?)`

[lister.t](../file/lister.t.html)\[[395](../source/lister.t.html#395)\]

::: desc
In the simple form of the constructor, we just supply a string that will
form the prefix string for the lister. In the more sophisticated form we
can supply an additsion argument that\'s an anonymous method or function
that\'s used to show the list prefix or suffix, or else just the suffix
string.
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[386](../source/lister.t.html#386)\]

::: desc
is the object listed in a LOOK AROUND description?
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, irName)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[412](../source/lister.t.html#412)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, irName)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[417](../source/lister.t.html#417)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
