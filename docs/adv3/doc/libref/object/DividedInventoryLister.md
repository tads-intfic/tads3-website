---
layout: docs
---
<span class="title">DividedInventoryLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1603](../source/lister.t.html#1603)\]

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

"Divided" inventory lister. In 'wide' mode, this shows inventory in two
parts: the items being carried, and the items being worn. (We use the
standard single tree-style listing in 'tall' mode.)

`class `**`DividedInventoryLister`**` :   `[`InventoryLister`](../object/InventoryLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DividedInventoryLister`**  
[`InventoryLister`](../object/InventoryLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`actorInventoryLister`](../object/actorInventoryLister.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`carryingLister`](#carryingLister)[`singleSentenceMaxNouns`](#singleSentenceMaxNouns)[`wearingLister`](#wearingLister)



Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`showCombinedInventoryList`](#showCombinedInventoryList)[`showList`](#showList)

Inherited from `InventoryLister` :  
[`isListed`](../object/InventoryLister.html#isListed)[`showContentsList`](../object/InventoryLister.html#showContentsList)[`showInlineContentsList`](../object/InventoryLister.html#showInlineContentsList)[`showListItem`](../object/InventoryLister.html#showListItem)[`showListItemCounted`](../object/InventoryLister.html#showListItemCounted)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed)[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)[`getContents`](../object/Lister.html#getContents)[`getFilteredList`](../object/Lister.html#getFilteredList)[`getListedContents`](../object/Lister.html#getListedContents)[`getListGrouping`](../object/Lister.html#getListGrouping)[`getTopLister`](../object/Lister.html#getTopLister)[`listCardinality`](../object/Lister.html#listCardinality)[`listSepEnd`](../object/Lister.html#listSepEnd)[`listSepMiddle`](../object/Lister.html#listSepMiddle)[`listSepTwo`](../object/Lister.html#listSepTwo)[`listWith`](../object/Lister.html#listWith)[`longListSepEnd`](../object/Lister.html#longListSepEnd)[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)[`longListSepTwo`](../object/Lister.html#longListSepTwo)[`showArrangedList`](../object/Lister.html#showArrangedList)[`showListAll`](../object/Lister.html#showListAll)[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)[`showListEmpty`](../object/Lister.html#showListEmpty)[`showListIndent`](../object/Lister.html#showListIndent)[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)[`showListPrefixWide`](../object/Lister.html#showListPrefixWide)[`showListSeparator`](../object/Lister.html#showListSeparator)[`showListSimple`](../object/Lister.html#showListSimple)[`showListSuffixWide`](../object/Lister.html#showListSuffixWide)[`showSeparateContents`](../object/Lister.html#showSeparateContents)[`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="carryingLister"></span>

`carryingLister`

[lister.t](../file/lister.t.html)\[[1687](../source/lister.t.html#1687)\]

<div class="desc">

Our associated sub-listers for items begin carried and worn,
respectively. We'll use these to list our sublist of items being worn.

</div>

<span id="singleSentenceMaxNouns"></span>

`singleSentenceMaxNouns`

[lister.t](../file/lister.t.html)\[[1680](../source/lister.t.html#1680)\]

<div class="desc">

The recommended maximum number of number of noun phrases to show in the
single-sentence format. This should be used by the
showCombinedInventoryList() method to decide whether to display the
combined listing as a single sentence or as two separate sentences.

</div>

<span id="wearingLister"></span>

`wearingLister`

[lister.t](../file/lister.t.html)\[[1688](../source/lister.t.html#1688)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showCombinedInventoryList"></span>

`showCombinedInventoryList (parent, carrying, wearing)`

[lister.t](../file/lister.t.html)\[[1671](../source/lister.t.html#1671)\]

<div class="desc">

Show the combined listing. This must be provided by each
language-specific subclass. The inputs are the results (strings) of the
captured output of the sublistings of the items being carried and the
items being worn. These will be "raw" listings, without any prefix or
suffix text. This routine's job is to display the final output, adding
the framing text.

</div>

<span id="showList"></span>

`showList (pov, parent, lst, options, indent, infoTab, parentGroup)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1608](../source/lister.t.html#1608)\]

<div class="desc">

Show the list. We completely override the main lister method so that we
can show our two lists.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
