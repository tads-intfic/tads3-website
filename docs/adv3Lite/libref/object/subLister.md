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



The subLister is used by other listers such as inventoryLister and
wornLister to show the contents of listed items in parentheses (e.g.
'(in which is a pen, a pencil and a piece of paper). The depth of
nesting is limited by the maxNestingDepth property.

**`subLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`subLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`maxNestingDepth`](#maxNestingDepth) [`nestingDepth`](#nestingDepth) [`showSubListing`](#showSubListing)

Inherited from `ItemLister` :  
[`contentsListedProp`](../object/ItemLister.html#contentsListedProp) [`listRecursively`](../object/ItemLister.html#listRecursively) [`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo) [`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`buildList`](#buildList) [`listed`](#listed) [`showList`](#showList) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`listName`](../object/ItemLister.html#listName) [`show`](../object/ItemLister.html#show)

Inherited from `Lister` :  
[`listOrder`](../object/Lister.html#listOrder)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="maxNestingDepth"></span>

`maxNestingDepth`

[english.t](../file/english.t.html)\[[3154](../source/english.t.html#3154)\]



The maximum nesting depth this subLister is allowed to reach



<span id="nestingDepth"></span>

`nestingDepth`

[english.t](../file/english.t.html)\[[3157](../source/english.t.html#3157)\]



The current nesting depth of this subLister



<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3160](../source/english.t.html#3160)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="buildList"></span>

`buildList (lst)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3117](../source/english.t.html#3117)\]



Construct the list contents from lst to a maximum nesting depth



<span id="listed"></span>

`listed (o)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3162](../source/english.t.html#3162)\]



*no description available*



<span id="showList"></span>

`showList (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3148](../source/english.t.html#3148)\]



Return the result



<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3114](../source/english.t.html#3114)\]



*no description available*



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3106](../source/english.t.html#3106)\]



*no description available*



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3112](../source/english.t.html#3112)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


