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

<div class="fdesc">

The banner UI tracker. This object keeps track of the current user
interface display state; this object is transient because the
interpreter's user interface is not part of the persistence mechanism.

`transient `**`bannerUITracker`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`bannerUITracker`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`activeBanners_`](#activeBanners_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addBanner`](#addBanner)[`getTracker`](#getTracker)[`orderMatches`](#orderMatches)[`removeBanner`](#removeBanner)[`skipDescendants`](#skipDescendants)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="activeBanners_"></span>

`activeBanners_`

[banner.t](../file/banner.t.html)\[[745](../source/banner.t.html#745)\]

<div class="desc">

The vector of banners currently on the screen. This is a list of
transient BannerUIWindow objects, stored in the same order as the banner
layout list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addBanner"></span>

`addBanner (handle, ostr, id, parentID, where, other, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[505](../source/banner.t.html#505)\]

<div class="desc">

add a banner to the active display list

</div>

<span id="getTracker"></span>

`getTracker (win)`

[banner.t](../file/banner.t.html)\[[652](../source/banner.t.html#652)\]

<div class="desc">

get the BannerUIWindow tracker object for a given BannerWindow

</div>

<span id="orderMatches"></span>

`orderMatches (uiWin, where, otherID)`

[banner.t](../file/banner.t.html)\[[664](../source/banner.t.html#664)\]

<div class="desc">

check a BannerUIWindow to see if it matches the given layout order

</div>

<span id="removeBanner"></span>

`removeBanner (id)`

[banner.t](../file/banner.t.html)\[[618](../source/banner.t.html#618)\]

<div class="desc">

remove a banner from the active display list

</div>

<span id="skipDescendants"></span>

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[581](../source/banner.t.html#581)\]

<div class="desc">

Given an index in our list of active windows, skip the given item and
all items whose windows are descended from this window. We'll leave the
index positioned on the next entry in the list that isn't a descendant
of the window at the given index. Note that this skips not only children
but grandchildren (and so on) as well.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
