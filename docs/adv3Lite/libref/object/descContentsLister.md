---
layout: docs
---
<span class="title">descContentsLister</span><span class="type">object</span>

[lister.t](../file/lister.t.html)\[[331](../source/lister.t.html#331)\]

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



descContentsLister displays a list of miscellaneous contents of an
object being examined.

**`descContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`descContentsLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contentsListedProp`](#contentsListedProp) [`showSubListing`](#showSubListing)

Inherited from `ItemLister` :  
[`listRecursively`](../object/ItemLister.html#listRecursively) [`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo) [`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`listed`](#listed) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`listName`](../object/ItemLister.html#listName) [`show`](../object/ItemLister.html#show) [`showList`](../object/ItemLister.html#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList) [`listOrder`](../object/Lister.html#listOrder)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contentsListedProp"></span>

`contentsListedProp`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[335](../source/lister.t.html#335)\]



*no description available*



<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3214](../source/english.t.html#3214)\]



Flag: Show a sublisting (i.e. the contents of the items in our immediate
contents, in parentheses after the name of the item, if the gameMain
option useParentheticalListing is true.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[333](../source/lister.t.html#333)\]



is the object listed in an EXAMINE description of its container?



<span id="showListEmpty"></span>

`showListEmpty (parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3202](../source/english.t.html#3202)\]



If there's no contents to list, but the item whose contents we were
trying to list wants to report its open-or-closed status, simply state
that it's open or closed.



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3171](../source/english.t.html#3171)\]



*no description available*



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, paraCnt)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[3192](../source/english.t.html#3192)\]



Otherwise start the listing without explicitly mentioning that the
container is open.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


