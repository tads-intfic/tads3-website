[ItemLister]{.title}[class]{.type}

[lister.t](../file/lister.t.html)\[[115](../source/lister.t.html#115)\],
[english.t](../file/english.t.html)\[[2937](../source/english.t.html#2937)\]

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
An Item Lister is a lister used for listing physical items. Notice that
most of the specifics of the listers defined below are
language-specific, and so are defined in the language-specific part of
the library (e.g. in english.t).

*Modified in
[english.t](../file/english.t.html)\[[2937](../source/english.t.html#2937)\]:*\
Modifications to the ItemLister (the base class for listers that list
physical objects) for the English-language part of the library.

`class `**`ItemLister`**` :   `[`Lister`](../object/Lister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ItemLister`**\
`         `[`Lister`](../object/Lister.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ItemLister`**\
`         `[`CustomRoomLister`](../object/CustomRoomLister.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`descContentsLister`](../object/descContentsLister.html)`  `[`inventoryLister`](../object/inventoryLister.html)`  `[`inventoryTallLister`](../object/inventoryTallLister.html)`  `[`lookContentsLister`](../object/lookContentsLister.html)`  `[`lookInLister`](../object/lookInLister.html)`  `[`lookLister`](../object/lookLister.html)`  `[`openingContentsLister`](../object/openingContentsLister.html)`  `[`remoteRoomContentsLister`](../object/remoteRoomContentsLister.html)`  `[`remoteSubContentsLister`](../object/remoteSubContentsLister.html)`  `[`simpleAttachmentLister`](../object/simpleAttachmentLister.html)`  `[`subLister`](../object/subLister.html)`  `[`wornLister`](../object/wornLister.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contentsListedProp`](#contentsListedProp)`  `[`listRecursively`](#listRecursively)`  `[`showAdditionalInfo`](#showAdditionalInfo)`  `[`showSubListing`](#showSubListing)`  `[`showWornInfo`](#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`listName`](#listName)`  `[`show`](#show)`  `[`showList`](#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listed`](../object/Lister.html#listed)`  `[`listOrder`](../object/Lister.html#listOrder)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `[`showListPrefix`](../object/Lister.html#showListPrefix)`  `[`showListSuffix`](../object/Lister.html#showListSuffix)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contentsListedProp}

`contentsListedProp`

[lister.t](../file/lister.t.html)\[[140](../source/lister.t.html#140)\]

::: desc
The property on a Thing-derived container to test whether its contents
should be listed when listing with this lister
:::

[]{#listRecursively}

`listRecursively`

[lister.t](../file/lister.t.html)\[[146](../source/lister.t.html#146)\]

::: desc
Flag, so we want to list contents of contents when using this lister; by
default we do.
:::

[]{#showAdditionalInfo}

`showAdditionalInfo`

[english.t](../file/english.t.html)\[[3015](../source/english.t.html#3015)\]

::: desc
Flag: do we want to show additional information such as \'(providing
light)\' after the names of items listed in inventory. By default we do.
:::

[]{#showSubListing}

`showSubListing`

[english.t](../file/english.t.html)\[[3030](../source/english.t.html#3030)\]

::: desc
Flag: do we want to show the contents of items listed in inventory (in
parentheses after the name, e.g. a bag (in which is a blue ball)). By
default we do.
:::

[]{#showWornInfo}

`showWornInfo`

[english.t](../file/english.t.html)\[[3023](../source/english.t.html#3023)\]

::: desc
Flag: do we want to show (bveing worn) after items in an inventory list
that the player character is wearing. By default we do if we\'re showing
additional info.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listName}

`listName (o)`

[english.t](../file/english.t.html)\[[2954](../source/english.t.html#2954)\]

::: desc
The listName is the aName of o plus any status-specific information we
might want to appear in the listing, such as \'(providing light)\'
:::

[]{#show}

`show (lst, parent, paraBrk, =, true)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[122](../source/lister.t.html#122)\]

::: desc
Show a list of objects. \'lst\' is the list of objects to show;
\'parent\' parameter is the object whose contents are being listed,
\'paraBrk\' defines whether or not we want a paragraph break after the
list.
:::

[]{#showList}

`showList (lst, pl, parent)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2945](../source/english.t.html#2945)\]

::: desc
For an item lister we use the listName method of the lister rather than
the aName property of the object to provide a name for the object; this
allows the lister to add status-specific information like \'(providing
light)\' or \'(being worn)\' to the name as it appears in the list.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
