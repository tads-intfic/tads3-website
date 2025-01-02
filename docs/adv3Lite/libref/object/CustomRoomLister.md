---
layout: docs
---
<span class="title">CustomRoomLister</span><span class="type">class</span>

[lister.t](../file/lister.t.html)\[[383](../source/lister.t.html#383)\]

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

A lister that can be readily customized to tailor the text before and
after a list of miscellaneous items in a room description.

`class `**`CustomRoomLister`**` :   `[`ItemLister`](../object/ItemLister.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CustomRoomLister`**  
[`ItemLister`](../object/ItemLister.html)  
[`Lister`](../object/Lister.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`prefix_`](#prefix_)[`showSubListing`](#showSubListing)[`suffix_`](#suffix_)

Inherited from `ItemLister` :  
[`contentsListedProp`](../object/ItemLister.html#contentsListedProp)[`listRecursively`](../object/ItemLister.html#listRecursively)[`showAdditionalInfo`](../object/ItemLister.html#showAdditionalInfo)[`showWornInfo`](../object/ItemLister.html#showWornInfo)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`listed`](#listed)[`showListPrefix`](#showListPrefix)[`showListSuffix`](#showListSuffix)

Inherited from `ItemLister` :  
[`listName`](../object/ItemLister.html#listName)[`show`](../object/ItemLister.html#show)[`showList`](../object/ItemLister.html#showList)

Inherited from `Lister` :  
[`buildList`](../object/Lister.html#buildList)[`listOrder`](../object/Lister.html#listOrder)[`showListEmpty`](../object/Lister.html#showListEmpty)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="prefix_"></span>

`prefix_`

[lister.t](../file/lister.t.html)\[[409](../source/lister.t.html#409)\]

<div class="desc">

*no description available*

</div>

<span id="showSubListing"></span>

`showSubListing`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[422](../source/lister.t.html#422)\]

<div class="desc">

*no description available*

</div>

<span id="suffix_"></span>

`suffix_`

[lister.t](../file/lister.t.html)\[[410](../source/lister.t.html#410)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (prefix, prefixMethod, :?, suffix, :?, suffixMethod, :?)`

[lister.t](../file/lister.t.html)\[[395](../source/lister.t.html#395)\]

<div class="desc">

In the simple form of the constructor, we just supply a string that will
form the prefix string for the lister. In the more sophisticated form we
can supply an additsion argument that's an anonymous method or function
that's used to show the list prefix or suffix, or else just the suffix
string.

</div>

<span id="listed"></span>

`listed (obj)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[386](../source/lister.t.html#386)\]

<div class="desc">

is the object listed in a LOOK AROUND description?

</div>

<span id="showListPrefix"></span>

`showListPrefix (lst, pl, irName)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[412](../source/lister.t.html#412)\]

<div class="desc">

*no description available*

</div>

<span id="showListSuffix"></span>

`showListSuffix (lst, pl, irName)`<span class="rem">OVERRIDDEN</span>

[lister.t](../file/lister.t.html)\[[417](../source/lister.t.html#417)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
