---
layout: docs
---
<span class="title">MajorAttachmentLister</span><span class="type">class</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5140](../source/msg_neu.t.html#5140)\]

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



The "major" attachment lister. This lists the objects which are attached
to a given parent Attachable, and for which the parent is the "major"
item in the relationship. The items in the list are described as being
attached to the parent.

`class `**`MajorAttachmentLister`**` :   `[`SimpleAttachmentLister`](../object/SimpleAttachmentLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MajorAttachmentLister`**  
[`SimpleAttachmentLister`](../object/SimpleAttachmentLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `SimpleAttachmentLister` :  
[`parent_`](../object/SimpleAttachmentLister.html#parent_)

Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isListed`](#isListed) [`showListPrefixWide`](#showListPrefixWide) [`showListSuffixWide`](#showListSuffixWide)

Inherited from `SimpleAttachmentLister` :  
[`construct`](../object/SimpleAttachmentLister.html#construct) [`showListEmpty`](../object/SimpleAttachmentLister.html#showListEmpty)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItem`](../object/Lister.html#showListItem) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListSeparator`](../object/Lister.html#showListSeparator) [`showListSimple`](../object/Lister.html#showListSimple) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5150](../source/msg_neu.t.html#5150)\]



ask the parent if we should list each item



<span id="showListPrefixWide"></span>

`showListPrefixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5141](../source/msg_neu.t.html#5141)\]



*no description available*



<span id="showListSuffixWide"></span>

`showListSuffixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5142](../source/msg_neu.t.html#5142)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


