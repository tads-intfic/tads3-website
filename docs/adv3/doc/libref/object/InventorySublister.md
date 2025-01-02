---
layout: docs
---
<span class="title">InventorySublister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1703](../source/lister.t.html#1703)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Base class for the inventory sub-lister for items being carried. This is
a minor specialization of the basic inventory lister; in this version,
we omit any prefix, suffix, or empty messages, since we'll rely on the
caller to combine our raw listing with the raw 'wearing' listing to form
the full results.

This type of lister should normally only be used from within an
inventory lister. This type of lister assumes that it's part of a larger
listing controlled externally; for example, we don't show out-of-line
contents, since we assume the caller will be doing this.

`class `**`InventorySublister`**` :   `[`InventoryLister`](../object/InventoryLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`InventorySublister`**  
`         `[`InventoryLister`](../object/InventoryLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`actorCarryingSublister`](../object/actorCarryingSublister.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `Lister` :  
` `[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`showListEmpty`](#showListEmpty)`  `[`showListPrefixWide`](#showListPrefixWide)`  `[`showListSuffixWide`](#showListSuffixWide)`  `[`showSeparateContents`](#showSeparateContents)`  `

Inherited from `InventoryLister` :  
` `[`isListed`](../object/InventoryLister.html#isListed)`  `[`showContentsList`](../object/InventoryLister.html#showContentsList)`  `[`showInlineContentsList`](../object/InventoryLister.html#showInlineContentsList)`  `[`showListItem`](../object/InventoryLister.html#showListItem)`  `[`showListItemCounted`](../object/InventoryLister.html#showListItemCounted)`  `

Inherited from `Lister` :  
` `[`contentsListed`](../object/Lister.html#contentsListed)`  `[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)`  `[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)`  `[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)`  `[`getContents`](../object/Lister.html#getContents)`  `[`getFilteredList`](../object/Lister.html#getFilteredList)`  `[`getListedContents`](../object/Lister.html#getListedContents)`  `[`getListGrouping`](../object/Lister.html#getListGrouping)`  `[`getTopLister`](../object/Lister.html#getTopLister)`  `[`listCardinality`](../object/Lister.html#listCardinality)`  `[`listSepEnd`](../object/Lister.html#listSepEnd)`  `[`listSepMiddle`](../object/Lister.html#listSepMiddle)`  `[`listSepTwo`](../object/Lister.html#listSepTwo)`  `[`listWith`](../object/Lister.html#listWith)`  `[`longListSepEnd`](../object/Lister.html#longListSepEnd)`  `[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)`  `[`longListSepTwo`](../object/Lister.html#longListSepTwo)`  `[`showArrangedList`](../object/Lister.html#showArrangedList)`  `[`showList`](../object/Lister.html#showList)`  `[`showListAll`](../object/Lister.html#showListAll)`  `[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)`  `[`showListIndent`](../object/Lister.html#showListIndent)`  `[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)`  `[`showListSeparator`](../object/Lister.html#showListSeparator)`  `[`showListSimple`](../object/Lister.html#showListSimple)`  `[`showTallListNewline`](../object/Lister.html#showTallListNewline)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showListEmpty"></span>

`showListEmpty (pov, parent)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1707](../source/lister.t.html#1707)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1705](../source/lister.t.html#1705)\]

<div class="desc">

don't show any prefix, suffix, or 'empty' messages

</div>

<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1706](../source/lister.t.html#1706)\]

<div class="desc">

*no description available*

</div>

<span id="showSeparateContents"></span>

`showSeparateContents (pov, lst, options, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1710](../source/lister.t.html#1710)\]

<div class="desc">

don't show out-of-line contents

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
