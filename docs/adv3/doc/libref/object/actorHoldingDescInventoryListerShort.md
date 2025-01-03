---
layout: docs
---
<span class="title">actorHoldingDescInventoryListerShort</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4702](../source/msg_neu.t.html#4702)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



short form of non-player character description inventory lister

**`actorHoldingDescInventoryListerShort`**` :   `[`actorInventoryLister`](../object/actorInventoryLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`actorHoldingDescInventoryListerShort`**  
[`actorInventoryLister`](../object/actorInventoryLister.html)  
[`DividedInventoryLister`](../object/DividedInventoryLister.html)  
[`InventoryLister`](../object/InventoryLister.html)  
[`Lister`](../object/Lister.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `actorInventoryLister` :  
[`phraseSepPat`](../object/actorInventoryLister.html#phraseSepPat)

Inherited from `DividedInventoryLister` :  
[`carryingLister`](../object/DividedInventoryLister.html#carryingLister) [`singleSentenceMaxNouns`](../object/DividedInventoryLister.html#singleSentenceMaxNouns) [`wearingLister`](../object/DividedInventoryLister.html#wearingLister)



Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`showInventoryCarryingOnly`](#showInventoryCarryingOnly) [`showInventoryEmpty`](#showInventoryEmpty) [`showInventoryLongLists`](#showInventoryLongLists) [`showInventoryShortLists`](#showInventoryShortLists) [`showInventoryWearingOnly`](#showInventoryWearingOnly)

Inherited from `actorInventoryLister` :  
[`countPhrases`](../object/actorInventoryLister.html#countPhrases) [`showCombinedInventoryList`](../object/actorInventoryLister.html#showCombinedInventoryList) [`showListContentsPrefixTall`](../object/actorInventoryLister.html#showListContentsPrefixTall) [`showListEmpty`](../object/actorInventoryLister.html#showListEmpty) [`showListPrefixTall`](../object/actorInventoryLister.html#showListPrefixTall)

Inherited from `DividedInventoryLister` :  
[`showList`](../object/DividedInventoryLister.html#showList)

Inherited from `InventoryLister` :  
[`isListed`](../object/InventoryLister.html#isListed) [`showContentsList`](../object/InventoryLister.html#showContentsList) [`showInlineContentsList`](../object/InventoryLister.html#showInlineContentsList) [`showListItem`](../object/InventoryLister.html#showListItem) [`showListItemCounted`](../object/InventoryLister.html#showListItemCounted)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showListAll`](../object/Lister.html#showListAll) [`showListIndent`](../object/Lister.html#showListIndent) [`showListPrefixWide`](../object/Lister.html#showListPrefixWide) [`showListSeparator`](../object/Lister.html#showListSeparator) [`showListSimple`](../object/Lister.html#showListSimple) [`showListSuffixWide`](../object/Lister.html#showListSuffixWide) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="showInventoryCarryingOnly"></span>

`showInventoryCarryingOnly (parent, carrying)`

[msg_neu.t](../file/msg_neu.t.html)\[[4712](../source/msg_neu.t.html#4712)\]



we're carrying nothing but wearing some items



<span id="showInventoryEmpty"></span>

`showInventoryEmpty (parent)`

[msg_neu.t](../file/msg_neu.t.html)\[[4703](../source/msg_neu.t.html#4703)\]



*no description available*



<span id="showInventoryLongLists"></span>

`showInventoryLongLists (parent, carrying, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4725](../source/msg_neu.t.html#4725)\]



short lists - combine carried and worn in a single sentence



<span id="showInventoryShortLists"></span>

`showInventoryShortLists (parent, carrying, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4717](../source/msg_neu.t.html#4717)\]



we have only carried items to report



<span id="showInventoryWearingOnly"></span>

`showInventoryWearingOnly (parent, wearing)`

[msg_neu.t](../file/msg_neu.t.html)\[[4707](../source/msg_neu.t.html#4707)\]



empty inventory - saying nothing in an actor description
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


