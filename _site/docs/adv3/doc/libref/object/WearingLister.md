<span class="title">WearingLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1590](../source/lister.t.html#1590)\]

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

Base class for worn-inventory listers. This lister uses a special
listing method to show the items, so that items being worn are shown
\*without\* the special '(being worn)' notation that might otherwise
appear in inventory listings.

`class `**`WearingLister`**` :   `[`InventoryLister`](../object/InventoryLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WearingLister`**  
`         `[`InventoryLister`](../object/InventoryLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`WearingLister`**  
`         `[`WearingSublister`](../object/WearingSublister.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `Lister` :  
` `[`nextCustomFlag`](../object/Lister.html#nextCustomFlag)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`showListItem`](#showListItem)`  `[`showListItemCounted`](#showListItemCounted)`  `

Inherited from `InventoryLister` :  
` `[`isListed`](../object/InventoryLister.html#isListed)`  `[`showContentsList`](../object/InventoryLister.html#showContentsList)`  `[`showInlineContentsList`](../object/InventoryLister.html#showInlineContentsList)`  `

Inherited from `Lister` :  
` `[`contentsListed`](../object/Lister.html#contentsListed)`  `[`contentsListedSeparately`](../object/Lister.html#contentsListedSeparately)`  `[`getArrangedListCardinality`](../object/Lister.html#getArrangedListCardinality)`  `[`getArrangedListNounPhraseCount`](../object/Lister.html#getArrangedListNounPhraseCount)`  `[`getContents`](../object/Lister.html#getContents)`  `[`getFilteredList`](../object/Lister.html#getFilteredList)`  `[`getListedContents`](../object/Lister.html#getListedContents)`  `[`getListGrouping`](../object/Lister.html#getListGrouping)`  `[`getTopLister`](../object/Lister.html#getTopLister)`  `[`listCardinality`](../object/Lister.html#listCardinality)`  `[`listSepEnd`](../object/Lister.html#listSepEnd)`  `[`listSepMiddle`](../object/Lister.html#listSepMiddle)`  `[`listSepTwo`](../object/Lister.html#listSepTwo)`  `[`listWith`](../object/Lister.html#listWith)`  `[`longListSepEnd`](../object/Lister.html#longListSepEnd)`  `[`longListSepMiddle`](../object/Lister.html#longListSepMiddle)`  `[`longListSepTwo`](../object/Lister.html#longListSepTwo)`  `[`showArrangedList`](../object/Lister.html#showArrangedList)`  `[`showList`](../object/Lister.html#showList)`  `[`showListAll`](../object/Lister.html#showListAll)`  `[`showListContentsPrefixTall`](../object/Lister.html#showListContentsPrefixTall)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `[`showListIndent`](../object/Lister.html#showListIndent)`  `[`showListPrefixTall`](../object/Lister.html#showListPrefixTall)`  `[`showListPrefixWide`](../object/Lister.html#showListPrefixWide)`  `[`showListSeparator`](../object/Lister.html#showListSeparator)`  `[`showListSimple`](../object/Lister.html#showListSimple)`  `[`showListSuffixWide`](../object/Lister.html#showListSuffixWide)`  `[`showSeparateContents`](../object/Lister.html#showSeparateContents)`  `[`showTallListNewline`](../object/Lister.html#showTallListNewline)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1592](../source/lister.t.html#1592)\]

<div class="desc">

show the list item using the "worn listing" name

</div>

<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1594](../source/lister.t.html#1594)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>