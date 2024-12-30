[bannerUITracker]{.title}[object]{.type}

[banner.t](../file/banner.t.html)\[[503](../source/banner.t.html#503)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The banner UI tracker. This object keeps track of the current user
interface display state; this object is transient because the
interpreter\'s user interface is not part of the persistence mechanism.

`transient `**`bannerUITracker`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`bannerUITracker`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`activeBanners_`](#activeBanners_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addBanner`](#addBanner)`  `[`getTracker`](#getTracker)`  `[`orderMatches`](#orderMatches)`  `[`removeBanner`](#removeBanner)`  `[`skipDescendants`](#skipDescendants)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#activeBanners_}

`activeBanners_`

[banner.t](../file/banner.t.html)\[[745](../source/banner.t.html#745)\]

::: desc
The vector of banners currently on the screen. This is a list of
transient BannerUIWindow objects, stored in the same order as the banner
layout list.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addBanner}

`addBanner (handle, ostr, id, parentID, where, other, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[505](../source/banner.t.html#505)\]

::: desc
add a banner to the active display list
:::

[]{#getTracker}

`getTracker (win)`

[banner.t](../file/banner.t.html)\[[652](../source/banner.t.html#652)\]

::: desc
get the BannerUIWindow tracker object for a given BannerWindow
:::

[]{#orderMatches}

`orderMatches (uiWin, where, otherID)`

[banner.t](../file/banner.t.html)\[[664](../source/banner.t.html#664)\]

::: desc
check a BannerUIWindow to see if it matches the given layout order
:::

[]{#removeBanner}

`removeBanner (id)`

[banner.t](../file/banner.t.html)\[[618](../source/banner.t.html#618)\]

::: desc
remove a banner from the active display list
:::

[]{#skipDescendants}

`skipDescendants (idx)`

[banner.t](../file/banner.t.html)\[[581](../source/banner.t.html#581)\]

::: desc
Given an index in our list of active windows, skip the given item and
all items whose windows are descended from this window. We\'ll leave the
index positioned on the next entry in the list that isn\'t a descendant
of the window at the given index. Note that this skips not only children
but grandchildren (and so on) as well.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
