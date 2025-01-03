---
layout: docs
---
<span class="title">bannerUITracker</span><span class="type">object</span>

[banner.t](../file/banner.t.html)\[[503](../source/banner.t.html#503)\]

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



The banner UI tracker. This object keeps track of the current user
interface display state; this object is transient because the
interpreter's user interface is not part of the persistence mechanism.

`transient `**`bannerUITracker`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`bannerUITracker`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`activeBanners_`](#activeBanners_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`addBanner`](#addBanner)  [`getTracker`](#getTracker)  [`orderMatches`](#orderMatches)  [`removeBanner`](#removeBanner)  [`skipDescendants`](#skipDescendants)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="activeBanners_"></span>

`activeBanners_`

[banner.t](../file/banner.t.html)\[[745](../source/banner.t.html#745)\]



The vector of banners currently on the screen. This is a list of
transient BannerUIWindow objects, stored in the same order as the banner
layout list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addBanner"></span>

`addBanner (handle, ostr, id, parentID, where, other, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[505](../source/banner.t.html#505)\]



add a banner to the active display list



<span id="getTracker"></span>

`getTracker (win)`

[banner.t](../file/banner.t.html)\[[652](../source/banner.t.html#652)\]



get the BannerUIWindow tracker object for a given BannerWindow



<span id="orderMatches"></span>

`orderMatches (uiWin, where, otherID)`

[banner.t](../file/banner.t.html)\[[664](../source/banner.t.html#664)\]



check a BannerUIWindow to see if it matches the given layout order



<span id="removeBanner"></span>

`removeBanner (id)`

[banner.t](../file/banner.t.html)\[[618](../source/banner.t.html#618)\]



remove a banner from the active display list



<span id="skipDescendants"></span>

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[581](../source/banner.t.html#581)\]



Given an index in our list of active windows, skip the given item and
all items whose windows are descended from this window. We'll leave the
index positioned on the next entry in the list that isn't a descendant
of the window at the given index. Note that this skips not only children
but grandchildren (and so on) as well.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


