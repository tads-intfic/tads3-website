<span class="title">SimpleLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1267](../source/lister.t.html#1267)\]

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

A SimpleLister provides simplified interfaces for creating formatted
lists.

`class `**`SimpleLister`**` :   `[`Lister`](../object/Lister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SimpleLister`**  
`         `[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`objectLister`](../object/objectLister.html)`  `[`stringLister`](../object/stringLister.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Lister` :  
` `[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`isListed`](#isListed)`  `[`makeSimpleList`](#makeSimpleList)`  `[`showSimpleList`](#showSimpleList)`  `

Inherited from `Lister` :  
` `[`contentsListed`](../object/Lister.html#contentsListed)`  `[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)`  `[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)`  `[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)`  `[`getContents`](../object/Lister.html#getContents)`  `[`getFilteredList`](../object/Lister.html#getFilteredList)`  `[`getListedContents`](../object/Lister.html#getListedContents)`  `[`getListGrouping`](../object/Lister.html#getListGrouping)`  `[`getTopLister`](../object/Lister.html#getTopLister)`  `[`listCardinality`](../object/Lister.html#listCardinality)`  `[`listSepEnd`](../object/Lister.html#listSepEnd)`  `[`listSepMiddle`](../object/Lister.html#listSepMiddle)`  `[`listSepTwo`](../object/Lister.html#listSepTwo)`  `[`listWith`](../object/Lister.html#listWith)`  `[`longListSepEnd`](../object/Lister.html#longListSepEnd)`  `[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)`  `[`longListSepTwo`](../object/Lister.html#longListSepTwo)`  `[`showArrangedList`](../object/Lister.html#showArrangedList)`  `[`showContentsList`](../object/Lister.html#showContentsList)`  `[`showInlineContentsList`](../object/Lister.html#showInlineContentsList)`  `[`showList`](../object/Lister.html#showList)`  `[`showListAll`](../object/Lister.html#showListAll)`  `[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `[`showListIndent`](../object/Lister.html#showListIndent)`  `[`showListItem`](../object/Lister.html#showListItem)`  `[`showListItemCounted`](../object/Lister.html#showListItemCounted)`  `[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)`  `[`showListPrefixWide`](../object/Lister.html#showListPrefixWide)`  `[`showListSeparator`](../object/Lister.html#showListSeparator)`  `[`showListSimple`](../object/Lister.html#showListSimple)`  `[`showListSuffixWide`](../object/Lister.html#showListSuffixWide)`  `[`showSeparateContents`](../object/Lister.html#showSeparateContents)`  `[`showTallListNewline`](../object/Lister.html#showTallListNewline)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1280](../source/lister.t.html#1280)\]

<div class="desc">

by default, everything given to a simple lister is listed

</div>

<span id="makeSimpleList"></span>

`makeSimpleList (lst)`

[lister.t](../file/lister.t.html)\[[1287](../source/lister.t.html#1287)\]

<div class="desc">

Format a simple list, but rather than displaying the result, return it
as a string. This simply displays the list as normal, but captures the
output as a string and returns it.

</div>

<span id="showSimpleList"></span>

`showSimpleList (lst)`

[lister.t](../file/lister.t.html)\[[1274](../source/lister.t.html#1274)\]

<div class="desc">

Show a formatted list given a list of items. This lets you create a
formatted list from an item list without worrying about visibility or
other factors that affect the full Lister interfaces.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>