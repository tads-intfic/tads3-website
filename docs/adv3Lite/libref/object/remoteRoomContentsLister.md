---
---
<span class="title">remoteRoomContentsLister</span><span class="type">object</span>

[senseRegion.t](../file/senseRegion.t.html)\[[508](../source/senseRegion.t.html#508)\]

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

The default Lister for listing miscellaneous objects in a remote
location.

**`remoteRoomContentsLister`**` :   `[`ItemLister`](../object/ItemLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`remoteRoomContentsLister`**  
`         `[`ItemLister`](../object/ItemLister.html)  
`                 `[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`contentsListedProp`](#contentsListedProp)`  `

Inherited from `ItemLister` :  
` `[`listRecursively`](../object/ItemLister.html#listRecursively)`  `[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)`  `[`showSubListing`](../object/ItemLister.html#showSubListing)`  `[`showWornInfo`](../object/ItemLister.html#showWornInfo)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`listed`](#listed)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `

Inherited from `ItemLister` :  
` `[`listName`](../object/ItemLister.html#listName)`  `[`show`](../object/ItemLister.html#show)`  `[`showList`](../object/ItemLister.html#showList)`  `

Inherited from `Lister` :  
` `[`buildList`](../object/Lister.html#buildList)`  `[`listOrder`](../object/Lister.html#listOrder)`  `[`showListEmpty`](../object/Lister.html#showListEmpty)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="contentsListedProp"></span>

`contentsListedProp`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[526](../source/senseRegion.t.html#526)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[510](../source/senseRegion.t.html#510)\]

<div class="desc">

is the object listed in a LOOK AROUND description?

</div>

<span id="showListPrefix"></span>

`showListPrefix (lst, pl, irName)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[516](../source/senseRegion.t.html#516)\]

<div class="desc">

Show the list prefix. The irName parameter is the inRoomName(pov) passed
from Room.showRemoteMiscContents(pov).

</div>

<span id="showListSuffix"></span>

`showListSuffix (lst, pl, irName)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[521](../source/senseRegion.t.html#521)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
