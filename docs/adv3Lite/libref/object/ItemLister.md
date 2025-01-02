---
layout: docs
---
<span class="title">ItemLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[115](../source/lister.t.html#115)\],
[english.t](../file/english.t.html)\[[2937](../source/english.t.html#2937)\]

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

An Item Lister is a lister used for listing physical items. Notice that
most of the specifics of the listers defined below are
language-specific, and so are defined in the language-specific part of
the library (e.g. in english.t).

*Modified in
[english.t](../file/english.t.html)\[[2937](../source/english.t.html#2937)\]:*  
Modifications to the ItemLister (the base class for listers that list
physical objects) for the English-language part of the library.

`class `**`ItemLister`**` :   `[`Lister`](../object/Lister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ItemLister`**  
[`Lister`](../object/Lister.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ItemLister`**  
[`CustomRoomLister`](../object/CustomRoomLister.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`descContentsLister`](../object/descContentsLister.html)[`inventoryLister`](../object/inventoryLister.html)[`inventoryTallLister`](../object/inventoryTallLister.html)[`lookContentsLister`](../object/lookContentsLister.html)[`lookInLister`](../object/lookInLister.html)[`lookLister`](../object/lookLister.html)[`openingContentsLister`](../object/openingContentsLister.html)[`remoteRoomContentsLister`](../object/remoteRoomContentsLister.html)[`remoteSubContentsLister`](../object/remoteSubContentsLister.html)[`simpleAttachmentLister`](../object/simpleAttachmentLister.html)[`subLister`](../object/subLister.html)[`wornLister`](../object/wornLister.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`contentsListedProp`](#contentsListedProp)[`listRecursively`](#listRecursively)[`showAdditionalInfo`](#showAdditionalInfo)[`showSubListing`](#showSubListing)[`showWornInfo`](#showWornInfo)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`listName`](#listName)[`show`](#show)[`showList`](#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList)[`listed`](../object/Lister.html#listed)[`listOrder`](../object/Lister.html#listOrder)[`showListEmpty`](../object/Lister.html#showListEmpty)[`showListPrefix`](../object/Lister.html#showListPrefix)[`showListSuffix`](../object/Lister.html#showListSuffix)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="contentsListedProp"></span>

`contentsListedProp`

[lister.t](../file/lister.t.html)\[[140](../source/lister.t.html#140)\]

<div class="desc">

The property on a Thing-derived container to test whether its contents
should be listed when listing with this lister

</div>

<span id="listRecursively"></span>

`listRecursively`

[lister.t](../file/lister.t.html)\[[146](../source/lister.t.html#146)\]

<div class="desc">

Flag, so we want to list contents of contents when using this lister; by
default we do.

</div>

<span id="showAdditionalInfo"></span>

`showAdditionalInfo`

[english.t](../file/english.t.html)\[[3015](../source/english.t.html#3015)\]

<div class="desc">

Flag: do we want to show additional information such as '(providing
light)' after the names of items listed in inventory. By default we do.

</div>

<span id="showSubListing"></span>

`showSubListing`

[english.t](../file/english.t.html)\[[3030](../source/english.t.html#3030)\]

<div class="desc">

Flag: do we want to show the contents of items listed in inventory (in
parentheses after the name, e.g. a bag (in which is a blue ball)). By
default we do.

</div>

<span id="showWornInfo"></span>

`showWornInfo`

[english.t](../file/english.t.html)\[[3023](../source/english.t.html#3023)\]

<div class="desc">

Flag: do we want to show (bveing worn) after items in an inventory list
that the player character is wearing. By default we do if we're showing
additional info.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="listName"></span>

`listName (o)`

[english.t](../file/english.t.html)\[[2954](../source/english.t.html#2954)\]

<div class="desc">

The listName is the aName of o plus any status-specific information we
might want to appear in the listing, such as '(providing light)'

</div>

<span id="show"></span>

`show (lst, parent, paraBrk, =, true)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[122](../source/lister.t.html#122)\]

<div class="desc">

Show a list of objects. 'lst' is the list of objects to show; 'parent'
parameter is the object whose contents are being listed, 'paraBrk'
defines whether or not we want a paragraph break after the list.

</div>

<span id="showList"></span>

`showList (lst, pl, parent)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2945](../source/english.t.html#2945)\]

<div class="desc">

For an item lister we use the listName method of the lister rather than
the aName property of the object to provide a name for the object; this
allows the lister to add status-specific information like '(providing
light)' or '(being worn)' to the name as it appears in the list.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
