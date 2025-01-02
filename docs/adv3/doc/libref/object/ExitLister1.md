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

<div class="fdesc">

Basic room exit lister. This shows a list of the apparent exits from a
location.

The items to be listed are DestInfo objects.

`class `**`ExitLister`**` :   `[`Lister`](../object/Lister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExitLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`explicitExitLister`](../object/explicitExitLister.html)[`lookAroundExitLister`](../object/lookAroundExitLister.html)[`lookAroundTerseExitLister`](../object/lookAroundTerseExitLister.html)[`statuslineExitLister`](../object/statuslineExitLister.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`hasBackNameFlag`](#hasBackNameFlag)[`hasDestNameFlag`](#hasDestNameFlag)[`listerShowsDest`](#listerShowsDest)[`nextCustomFlag`](#nextCustomFlag)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`isListed`](#isListed)[`listCardinality`](#listCardinality)[`showListItem`](#showListItem)[`showListItemDirName`](#showListItemDirName)[`showListPrefixWide`](#showListPrefixWide)[`showListSeparator`](#showListSeparator)[`showListSuffixWide`](#showListSuffixWide)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed)[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)[`getContents`](../object/Lister.html#getContents)[`getFilteredList`](../object/Lister.html#getFilteredList)[`getListedContents`](../object/Lister.html#getListedContents)[`getListGrouping`](../object/Lister.html#getListGrouping)[`getTopLister`](../object/Lister.html#getTopLister)[`listSepEnd`](../object/Lister.html#listSepEnd)[`listSepMiddle`](../object/Lister.html#listSepMiddle)[`listSepTwo`](../object/Lister.html#listSepTwo)[`listWith`](../object/Lister.html#listWith)[`longListSepEnd`](../object/Lister.html#longListSepEnd)[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)[`longListSepTwo`](../object/Lister.html#longListSepTwo)[`showArrangedList`](../object/Lister.html#showArrangedList)[`showContentsList`](../object/Lister.html#showContentsList)[`showInlineContentsList`](../object/Lister.html#showInlineContentsList)[`showList`](../object/Lister.html#showList)[`showListAll`](../object/Lister.html#showListAll)[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)[`showListEmpty`](../object/Lister.html#showListEmpty)[`showListIndent`](../object/Lister.html#showListIndent)[`showListItemCounted`](../object/Lister.html#showListItemCounted)[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)[`showListSimple`](../object/Lister.html#showListSimple)[`showSeparateContents`](../object/Lister.html#showSeparateContents)[`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="hasBackNameFlag"></span>

`hasBackNameFlag`

[msg_neu.t](../file/msg_neu.t.html)\[[5339](../source/msg_neu.t.html#5339)\]

<div class="desc">

*no description available*

</div>

<span id="hasDestNameFlag"></span>

`hasDestNameFlag`

[msg_neu.t](../file/msg_neu.t.html)\[[5338](../source/msg_neu.t.html#5338)\]

<div class="desc">

My special options flag: at least one object in the list has a
destination name. The caller should set this flag in our options if
applicable.

</div>

<span id="listerShowsDest"></span>

`listerShowsDest`

[msg_neu.t](../file/msg_neu.t.html)\[[5331](../source/msg_neu.t.html#5331)\]

<div class="desc">

this lister shows destination names

</div>

<span id="nextCustomFlag"></span>

`nextCustomFlag`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5340](../source/msg_neu.t.html#5340)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5239](../source/msg_neu.t.html#5239)\]

<div class="desc">

*no description available*

</div>

<span id="listCardinality"></span>

`listCardinality (obj)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5240](../source/msg_neu.t.html#5240)\]

<div class="desc">

*no description available*

</div>

<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5242](../source/msg_neu.t.html#5242)\]

<div class="desc">

*no description available*

</div>

<span id="showListItemDirName"></span>

`showListItemDirName (obj, initCap)`

[msg_neu.t](../file/msg_neu.t.html)\[[5312](../source/msg_neu.t.html#5312)\]

<div class="desc">

show a direction name, hyperlinking it if appropriate

</div>

<span id="showListPrefixWide"></span>

`showListPrefixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5230](../source/msg_neu.t.html#5230)\]

<div class="desc">

*no description available*

</div>

<span id="showListSeparator"></span>

`showListSeparator (options, curItemNum, totalItems)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5282](../source/msg_neu.t.html#5282)\]

<div class="desc">

show the destination

</div>

<span id="showListSuffixWide"></span>

`showListSuffixWide (cnt, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[5237](../source/msg_neu.t.html#5237)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
