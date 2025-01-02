<span class="title">InventoryLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[1547](../source/lister.t.html#1547)\]

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

Base class for inventory listers. This lister uses a special listing
method to show the items, so that items can be shown with special
notations in an inventory list that might not appear in other types of
listings.

`class `**`InventoryLister`**` :   `[`Lister`](../object/Lister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`InventoryLister`**  
`         `[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`InventoryLister`**  
`         `[`DividedInventoryLister`](../object/DividedInventoryLister.html)  
`         `[`InventorySublister`](../object/InventorySublister.html)  
`         `[`WearingLister`](../object/WearingLister.html)  
`                 `[`WearingSublister`](../object/WearingSublister.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`actorSingleInventoryLister`](../object/actorSingleInventoryLister.html)`  `
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

` `[`isListed`](#isListed)`  `[`showContentsList`](#showContentsList)`  `[`showInlineContentsList`](#showInlineContentsList)`  `[`showListItem`](#showListItem)`  `[`showListItemCounted`](#showListItemCounted)`  `

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

<span id="isListed"></span>

`isListed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1549](../source/lister.t.html#1549)\]

<div class="desc">

list items in inventory according to their isListedInInventory

</div>

<span id="showContentsList"></span>

`showContentsList (pov, obj, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1566](../source/lister.t.html#1566)\]

<div class="desc">

Show contents of the items in the inventory. We customize this so that
we can differentiate inventory contents lists from other contents lists.

</div>

<span id="showInlineContentsList"></span>

`showInlineContentsList (pov, obj, options, indent, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1576](../source/lister.t.html#1576)\]

<div class="desc">

Show the contents in-line, for an inventory listing.

</div>

<span id="showListItem"></span>

`showListItem (obj, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1555](../source/lister.t.html#1555)\]

<div class="desc">

Show list items using the inventory name, which might differ from the
regular nmae of the object.

</div>

<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[1558](../source/lister.t.html#1558)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
