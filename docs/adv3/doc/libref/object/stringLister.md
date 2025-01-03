---
layout: docs
---
<span class="title">stringLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[1305](../source/lister.t.html#1305)\]

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



stringLister is a concrete SimpleLister for formatting lists of strings.
To use this lister, pass lists of single-quoted strings (instead of
simulation objects) to showSimpleList(), etc.

**`stringLister`**` :   `[`SimpleLister`](../object/SimpleLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`stringLister`**  
[`SimpleLister`](../object/SimpleLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getArrangedListCardinality`](#getArrangedListCardinality) [`showListItem`](#showListItem)

Inherited from `SimpleLister` :  
[`isListed`](../object/SimpleLister.html#isListed) [`makeSimpleList`](../object/SimpleLister.html#makeSimpleList) [`showSimpleList`](../object/SimpleLister.html#showSimpleList)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListEmpty`](../object/Lister.html#showListEmpty) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListPrefixWide`](../object/Lister.html#showListPrefixWide) [`showListSeparator`](../object/Lister.html#showListSeparator) [`showListSimple`](../object/Lister.html#showListSimple) [`showListSuffixWide`](../object/Lister.html#showListSuffixWide) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getArrangedListCardinality"></span>

`getArrangedListCardinality (singles, groups, groupTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1314](../source/lister.t.html#1314)\]



get the cardinality of an arranged list (we need to override this
because our items are strings, which don't have the normal object
properties that would let us count cardinality the usual way)



<span id="showListItem"></span>

`showListItem (str, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1307](../source/lister.t.html#1307)\]



show a list item - list items are strings, so simply 'say' them
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


