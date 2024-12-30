[inventoryTallLister]{.title}[object]{.type}

[lister.t](../file/lister.t.html)\[[186](../source/lister.t.html#186)\]

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
inventoryTallLister for displaying an inventory list in TALL format.

**`inventoryTallLister`**` :   `[`ItemLister`](../object/ItemLister.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`inventoryTallLister`**\
`         `[`ItemLister`](../object/ItemLister.html)\
`                 `[`Lister`](../object/Lister.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contentsListedProp`](#contentsListedProp)`  `[`indentLevel`](#indentLevel)`  `[`listRecursively`](#listRecursively)`  `[`maxIndentLevel`](#maxIndentLevel)`  `

Inherited from `ItemLister` :\
` `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showSubListing`](../object/ItemLister.html#showSubListing)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`listed`](#listed)`  `[`listName`](#listName)`  `[`showContentsTall`](#showContentsTall)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :\
` `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :\
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contentsListedProp}

`contentsListedProp`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[307](../source/lister.t.html#307)\]

::: desc
The property on a Thing-derived container to test whether its contents
should be listed when listing with this lister
:::

[]{#indentLevel}

`indentLevel`

[lister.t](../file/lister.t.html)\[[298](../source/lister.t.html#298)\]

::: desc
The current indentation level for listing subcontents recursively
:::

[]{#listRecursively}

`listRecursively`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[313](../source/lister.t.html#313)\]

::: desc
Flag, so we want to list contents of contents when using this lister; by
default we do.
:::

[]{#maxIndentLevel}

`maxIndentLevel`

[lister.t](../file/lister.t.html)\[[301](../source/lister.t.html#301)\]

::: desc
The maximum level of indentation we want to allow for listed nested
subcontents.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#listed}

`listed (obj)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[188](../source/lister.t.html#188)\]

::: desc
is the object listed in an inventory list?
:::

[]{#listName}

`listName (o)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[276](../source/lister.t.html#276)\]

::: desc
A version of the listName method that doesn\'t list an items contents in
parenthesis after its name, which would be inappropriate to the tall
inventory format.
:::

[]{#showContentsTall}

`showContentsTall (lst, parent, paraBrk, =, true)`

[lister.t](../file/lister.t.html)\[[207](../source/lister.t.html#207)\]

::: desc
List the player\'s inventory in tall format, i.e., as a columnar list
with each item on a new line. This method may call itself recursively to
list subcontents (such as the visible contents of any containers in the
player character\'s inventory).
:::

[]{#showListEmpty}

`showListEmpty (paraCnt)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[319](../source/lister.t.html#319)\]

::: desc
*no description available*
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[315](../source/lister.t.html#315)\]

::: desc
*no description available*
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, paraCnt)`[OVERRIDDEN]{.rem}

[lister.t](../file/lister.t.html)\[[317](../source/lister.t.html#317)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
