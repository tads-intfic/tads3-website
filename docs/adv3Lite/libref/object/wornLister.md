---
layout: docs
---
<span class="title">wornLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[178](../source/lister.t.html#178)\]

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



wornLister displays a list of items being worn.

**`wornLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`wornLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`showWornInfo`](#showWornInfo)  `

Inherited from `ItemLister` :  
` [`contentsListedProp`](../object/ItemLister.html#contentsListedProp)  [`listRecursively`](../object/ItemLister.html#listRecursively)  [`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)  [`showSubListing`](../object/ItemLister.html#showSubListing)  `



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`listed`](#listed)  [`showListEmpty`](#showListEmpty)  [`showListPrefix`](#showListPrefix)  [`showListSuffix`](#showListSuffix)  `

Inherited from `ItemLister` :  
` [`listName`](../object/ItemLister.html#listName)  [`show`](../object/ItemLister.html#show)  [`showList`](../object/ItemLister.html#showList)  `

Inherited from `Lister` :  
` [`buildList`](../object/Lister.html#buildList)  [`listOrder`](../object/Lister.html#listOrder)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="showWornInfo"></span>

`showWornInfo`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3096](../source/english.t.html#3096)\]



We don't want to show "(being worn)" after items listed after "You are
wearing" since this would clearly be redundant.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[180](../source/lister.t.html#180)\]



is the object listed in an inventory list?



<span id="showListEmpty"></span>

`showListEmpty (paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3087](../source/english.t.html#3087)\]



*no description available*



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3077](../source/english.t.html#3077)\]



*no description available*



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3082](../source/english.t.html#3082)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


