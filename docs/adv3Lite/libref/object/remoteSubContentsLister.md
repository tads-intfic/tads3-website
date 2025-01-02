---
layout: docs
---
<span class="title">remoteSubContentsLister</span><span class="type">object</span>

[senseRegion.t](../file/senseRegion.t.html)\[[533](../source/senseRegion.t.html#533)\]

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



The default Lister for listing the miscellaneous contents of objects in
a remote location.

**`remoteSubContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`remoteSubContentsLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contentsListedProp`](#contentsListedProp)

Inherited from `ItemLister` :  
[`listRecursively`](../object/ItemLister.html#listRecursively)[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)[`showSubListing`](../object/ItemLister.html#showSubListing)[`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`listed`](#listed)[`showListPrefix`](#showListPrefix)[`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`listName`](../object/ItemLister.html#listName)[`show`](../object/ItemLister.html#show)[`showList`](../object/ItemLister.html#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList)[`listOrder`](../object/Lister.html#listOrder)[`showListEmpty`](../object/Lister.html#showListEmpty)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contentsListedProp"></span>

`contentsListedProp`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[552](../source/senseRegion.t.html#552)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[535](../source/senseRegion.t.html#535)\]



is the object listed in a LOOK AROUND description?



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, inParentName)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[541](../source/senseRegion.t.html#541)\]



Show the list prefix. The irName parameter is the inRoomName(pov) passed
from Room.showRemoteMiscContents(pov).



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, irName)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[547](../source/senseRegion.t.html#547)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


