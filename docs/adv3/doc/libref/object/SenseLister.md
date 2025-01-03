---
layout: docs
---
<span class="title">SenseLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1772](../source/lister.t.html#1772)\]

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



Base class for sense listers, which list the items that can be sensed
for a command like "listen" or "smell".

`class `**`SenseLister`**` :   `[`ParagraphLister`](../object/ParagraphLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SenseLister`**  
[`ParagraphLister`](../object/ParagraphLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`inventoryListenLister`](../object/inventoryListenLister.html) [`inventorySmellLister`](../object/inventorySmellLister.html) [`roomListenLister`](../object/roomListenLister.html) [`roomSmellLister`](../object/roomSmellLister.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isListed`](#isListed) [`showListItemCounted`](#showListItemCounted)

Inherited from `ParagraphLister` :  
[`showListPrefixWide`](../object/ParagraphLister.html#showListPrefixWide) [`showListSeparator`](../object/ParagraphLister.html#showListSeparator)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListEmpty`](../object/Lister.html#showListEmpty) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItem`](../object/Lister.html#showListItem) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListSimple`](../object/Lister.html#showListSimple) [`showListSuffixWide`](../object/Lister.html#showListSuffixWide) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1774](../source/lister.t.html#1774)\]



show everything we're asked to list



<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1777](../source/lister.t.html#1777)\]



show a counted list item
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


