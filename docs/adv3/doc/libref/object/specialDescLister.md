---
layout: docs
---
<span class="title">specialDescLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[1417](../source/lister.t.html#1417)\]

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



Lister for objects in a room description with special descriptions. Each
special description gets its own paragraph, so this is based on the
paragraph lister.

**`specialDescLister`**` :   `[`ParagraphLister`](../object/ParagraphLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`specialDescLister`**  
[`ParagraphLister`](../object/ParagraphLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isListed`](#isListed) [`listWith`](#listWith) [`showListItem`](#showListItem)

Inherited from `ParagraphLister` :  
[`showListPrefixWide`](../object/ParagraphLister.html#showListPrefixWide) [`showListSeparator`](../object/ParagraphLister.html#showListSeparator)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListEmpty`](../object/Lister.html#showListEmpty) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListSimple`](../object/Lister.html#showListSimple) [`showListSuffixWide`](../object/Lister.html#showListSuffixWide) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1419](../source/lister.t.html#1419)\]



list everything



<span id="listWith"></span>

`listWith (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1429](../source/lister.t.html#1429)\]



use the object's special description grouper



<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1422](../source/lister.t.html#1422)\]



show a list item





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


