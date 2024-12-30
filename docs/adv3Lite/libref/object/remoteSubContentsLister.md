[remoteSubContentsLister]{.title}[object]{.type}

[senseRegion.t](../file/senseRegion.t.html)\[[533](../source/senseRegion.t.html#533)\]

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
The default Lister for listing the miscellaneous contents of objects in
a remote location.

**`remoteSubContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`remoteSubContentsLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contentsListedProp`](#contentsListedProp)`  `

Inherited from `ItemLister` :\
` `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showSubListing`](../object/ItemLister.html#showSubListing)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

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

[senseRegion.t](../file/senseRegion.t.html)\[[552](../source/senseRegion.t.html#552)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[535](../source/senseRegion.t.html#535)\]

::: desc
is the object listed in a LOOK AROUND description?
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, inParentName)`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[541](../source/senseRegion.t.html#541)\]

::: desc
Show the list prefix. The irName parameter is the inRoomName(pov) passed
from Room.showRemoteMiscContents(pov).
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, irName)`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[547](../source/senseRegion.t.html#547)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
