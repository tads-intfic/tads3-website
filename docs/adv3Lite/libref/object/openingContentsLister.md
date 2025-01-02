---
layout: docs
---
<span class="title">openingContentsLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[342](../source/lister.t.html#342)\]

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



openingContentsLister displays the contents of an openable container
when it is first opened.

**`openingContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`openingContentsLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`listRecursively`](#listRecursively) [`showSubListing`](#showSubListing)

Inherited from `ItemLister` :  
[`contentsListedProp`](../object/ItemLister.html#contentsListedProp) [`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo) [`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`listed`](#listed) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`listName`](../object/ItemLister.html#listName) [`show`](../object/ItemLister.html#show) [`showList`](../object/ItemLister.html#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList) [`listOrder`](../object/Lister.html#listOrder)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="listRecursively"></span>

`listRecursively`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[350](../source/lister.t.html#350)\]



We don't want recursive listing with the openingContentsLister, since
this can produce odd results.



<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3262](../source/english.t.html#3262)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[344](../source/lister.t.html#344)\]



is the object listed in an EXAMINE description of its container?



<span id="showListEmpty"></span>

`showListEmpty (parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3257](../source/english.t.html#3257)\]



*no description available*



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3246](../source/english.t.html#3246)\]



*no description available*



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3252](../source/english.t.html#3252)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


