---
layout: docs
---
<span class="title">subLister</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[3105](../source/english.t.html#3105)\]

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

<div class="fdesc">

The subLister is used by other listers such as inventoryLister and
wornLister to show the contents of listed items in parentheses (e.g.
'(in which is a pen, a pencil and a piece of paper). The depth of
nesting is limited by the maxNestingDepth property.

**`subLister`**` :   `[`ItemLister`](../object/ItemLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`subLister`**  
`         `[`ItemLister`](../object/ItemLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`maxNestingDepth`](#maxNestingDepth)`  `[`nestingDepth`](#nestingDepth)`  `[`showSubListing`](#showSubListing)`  `

Inherited from `ItemLister` :  
` `[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)`  `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`buildList`](#buildList)`  `[`listed`](#listed)`  `[`showList`](#showList)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :  
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `

Inherited from `Lister` :  
` `[`listOrder`](../object/Lister.html#listOrder)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="maxNestingDepth"></span>

`maxNestingDepth`

[english.t](../file/english.t.html)\[[3154](../source/english.t.html#3154)\]

<div class="desc">

The maximum nesting depth this subLister is allowed to reach

</div>

<span id="nestingDepth"></span>

`nestingDepth`

[english.t](../file/english.t.html)\[[3157](../source/english.t.html#3157)\]

<div class="desc">

The current nesting depth of this subLister

</div>

<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3160](../source/english.t.html#3160)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildList"></span>

`buildList (lst)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3117](../source/english.t.html#3117)\]

<div class="desc">

Construct the list contents from lst to a maximum nesting depth

</div>

<span id="listed"></span>

`listed (o)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3162](../source/english.t.html#3162)\]

<div class="desc">

*no description available*

</div>

<span id="showList"></span>

`showList (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3148](../source/english.t.html#3148)\]

<div class="desc">

Return the result

</div>

<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3114](../source/english.t.html#3114)\]

<div class="desc">

*no description available*

</div>

<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3106](../source/english.t.html#3106)\]

<div class="desc">

*no description available*

</div>

<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3112](../source/english.t.html#3112)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
