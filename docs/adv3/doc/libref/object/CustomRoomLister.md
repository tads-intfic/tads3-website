---
layout: docs
---
<span class="title">CustomRoomLister</span><span class="type">class</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4469](../source/msg_neu.t.html#4469)\]

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



A simple customizable room lister. This can be used to create custom
listers for things like remote room contents listings. We act just like
any ordinary room lister, but we use custom prefix and suffix strings
provided during construction.

`class `**`CustomRoomLister`**` :   `[`Lister`](../object/Lister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CustomRoomLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`prefixStr`](#prefixStr) [`suffixStr`](#suffixStr)

Inherited from `Lister` :  
[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`showListPrefixTall`](#showListPrefixTall) [`showListPrefixWide`](#showListPrefixWide) [`showListSuffixWide`](#showListSuffixWide)

Inherited from `Lister` :  
[`contentsListed`](../object/Lister.html#contentsListed) [`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately) [`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality) [`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount) [`getContents`](../object/Lister.html#getContents) [`getFilteredList`](../object/Lister.html#getFilteredList) [`getListedContents`](../object/Lister.html#getListedContents) [`getListGrouping`](../object/Lister.html#getListGrouping) [`getTopLister`](../object/Lister.html#getTopLister) [`isListed`](../object/Lister.html#isListed) [`listCardinality`](../object/Lister.html#listCardinality) [`listSepEnd`](../object/Lister.html#listSepEnd) [`listSepMiddle`](../object/Lister.html#listSepMiddle) [`listSepTwo`](../object/Lister.html#listSepTwo) [`listWith`](../object/Lister.html#listWith) [`longListSepEnd`](../object/Lister.html#longListSepEnd) [`longListSepMiddle`](../object/Lister.html#longListSepMiddle) [`longListSepTwo`](../object/Lister.html#longListSepTwo) [`showArrangedList`](../object/Lister.html#showArrangedList) [`showContentsList`](../object/Lister.html#showContentsList) [`showInlineContentsList`](../object/Lister.html#showInlineContentsList) [`showList`](../object/Lister.html#showList) [`showListAll`](../object/Lister.html#showListAll) [`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall) [`showListEmpty`](../object/Lister.html#showListEmpty) [`showListIndent`](../object/Lister.html#showListIndent) [`showListItem`](../object/Lister.html#showListItem) [`showListItemCounted`](../object/Lister.html#showListItemCounted) [`showListSeparator`](../object/Lister.html#showListSeparator) [`showListSimple`](../object/Lister.html#showListSimple) [`showSeparateContents`](../object/Lister.html#showSeparateContents) [`showTallListNewline`](../object/Lister.html#showTallListNewline)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="prefixStr"></span>

`prefixStr`

[msg_neu.t](../file/msg_neu.t.html)\[[4481](../source/msg_neu.t.html#4481)\]



our prefix and suffix strings



<span id="suffixStr"></span>

`suffixStr`

[msg_neu.t](../file/msg_neu.t.html)\[[4482](../source/msg_neu.t.html#4482)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (prefix, suffix)`

[msg_neu.t](../file/msg_neu.t.html)\[[4470](../source/msg_neu.t.html#4470)\]



*no description available*



<span id="showListPrefixTall"></span>

`showListPrefixTall (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4478](../source/msg_neu.t.html#4478)\]



*no description available*



<span id="showListPrefixWide"></span>

`showListPrefixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4476](../source/msg_neu.t.html#4476)\]



*no description available*



<span id="showListSuffixWide"></span>

`showListSuffixWide (itemCount, pov, parent)`<span class="rem">OVERRIDDEN</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4477](../source/msg_neu.t.html#4477)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


