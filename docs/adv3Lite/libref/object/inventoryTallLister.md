---
layout: docs
---
<span class="title">inventoryTallLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[186](../source/lister.t.html#186)\]

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



inventoryTallLister for displaying an inventory list in TALL format.

**`inventoryTallLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`inventoryTallLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contentsListedProp`](#contentsListedProp) [`indentLevel`](#indentLevel) [`listRecursively`](#listRecursively) [`maxIndentLevel`](#maxIndentLevel)

Inherited from `ItemLister` :  
[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo) [`showSubListing`](../object/ItemLister.html#showSubListing) [`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`listed`](#listed) [`listName`](#listName) [`showContentsTall`](#showContentsTall) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`show`](../object/ItemLister.html#show) [`showList`](../object/ItemLister.html#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList) [`listOrder`](../object/Lister.html#listOrder)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contentsListedProp"></span>

`contentsListedProp`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[307](../source/lister.t.html#307)\]



The property on a Thing-derived container to test whether its contents
should be listed when listing with this lister



<span id="indentLevel"></span>

`indentLevel`

[lister.t](../file/lister.t.html)\[[298](../source/lister.t.html#298)\]



The current indentation level for listing subcontents recursively



<span id="listRecursively"></span>

`listRecursively`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[313](../source/lister.t.html#313)\]



Flag, so we want to list contents of contents when using this lister; by
default we do.



<span id="maxIndentLevel"></span>

`maxIndentLevel`

[lister.t](../file/lister.t.html)\[[301](../source/lister.t.html#301)\]



The maximum level of indentation we want to allow for listed nested
subcontents.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[188](../source/lister.t.html#188)\]



is the object listed in an inventory list?



<span id="listName"></span>

`listName (o)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[276](../source/lister.t.html#276)\]



A version of the listName method that doesn't list an items contents in
parenthesis after its name, which would be inappropriate to the tall
inventory format.



<span id="showContentsTall"></span>

`showContentsTall (lst, parent, paraBrk, =, true)`

[lister.t](../file/lister.t.html)\[[207](../source/lister.t.html#207)\]



List the player's inventory in tall format, i.e., as a columnar list
with each item on a new line. This method may call itself recursively to
list subcontents (such as the visible contents of any containers in the
player character's inventory).



<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[319](../source/lister.t.html#319)\]



*no description available*



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[315](../source/lister.t.html#315)\]



*no description available*



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[317](../source/lister.t.html#317)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


