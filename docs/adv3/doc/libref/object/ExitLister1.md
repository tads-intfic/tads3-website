---
layout: docs
---
<span class="title">ExitLister</span><span class="type">class</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5229](../source/msg_neu.t.html#5229)\]

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



Basic room exit lister. This shows a list of the apparent exits from a
location.

The items to be listed are DestInfo objects.

`class `**`ExitLister`**` :   `[`Lister`](../object/Lister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExitLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`explicitExitLister`](../object/explicitExitLister.html) [`lookAroundExitLister`](../object/lookAroundExitLister.html) [`lookAroundTerseExitLister`](../object/lookAroundTerseExitLister.html) [`statuslineExitLister`](../object/statuslineExitLister.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hasBackNameFlag`](#hasBackNameFlag) [`hasDestNameFlag`](#hasDestNameFlag) [`listerShowsDest`](#listerShowsDest) [`nextCustomFlag`](#nextCustomFlag)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isListed`](#isListed) [`listCardinality`](#listCardinality) [`showListItem`](#showListItem) [`showListItemDirName`](#showListItemDirName) [`showListPrefixWide`](#showListPrefixWide) [`showListSeparator`](#showListSeparator) [`showListSuffixWide`](#showListSuffixWide)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListEmpty`](../object/Lister.html#showListEmpty) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListPrefixTall`](../object/Lister.html#showListPrefixTall) [`showListSimple`](../object/Lister.html#showListSimple) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hasBackNameFlag"></span>

`hasBackNameFlag`

[msg_neu.t](../file/msg_neu.t.html)\[[5339](../source/msg_neu.t.html#5339)\]



*no description available*



<span id="hasDestNameFlag"></span>

`hasDestNameFlag`

[msg_neu.t](../file/msg_neu.t.html)\[[5338](../source/msg_neu.t.html#5338)\]



My special options flag: at least one object in the list has a
destination name. The caller should set this flag in our options if
applicable.



<span id="listerShowsDest"></span>

`listerShowsDest`

[msg_neu.t](../file/msg_neu.t.html)\[[5331](../source/msg_neu.t.html#5331)\]



this lister shows destination names



<span id="nextCustomFlag"></span>

`nextCustomFlag`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5340](../source/msg_neu.t.html#5340)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5239](../source/msg_neu.t.html#5239)\]



*no description available*



<span id="listCardinality"></span>

`listCardinality (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5240](../source/msg_neu.t.html#5240)\]



*no description available*



<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5242](../source/msg_neu.t.html#5242)\]



*no description available*



<span id="showListItemDirName"></span>

`showListItemDirName (obj, initCap)`

[msg_neu.t](../file/msg_neu.t.html)\[[5312](../source/msg_neu.t.html#5312)\]



show a direction name, hyperlinking it if appropriate



<span id="showListPrefixWide"></span>

`showListPrefixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5230](../source/msg_neu.t.html#5230)\]



*no description available*



<span id="showListSeparator"></span>

`showListSeparator (options, curItemNum, totalItems)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5282](../source/msg_neu.t.html#5282)\]



show the destination



<span id="showListSuffixWide"></span>

`showListSuffixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5237](../source/msg_neu.t.html#5237)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


