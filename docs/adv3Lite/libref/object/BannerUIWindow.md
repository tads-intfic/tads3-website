---
---
<span class="title">BannerUIWindow</span><span class="type">class</span>

[banner.t](../file/banner.t.html)\[[754](../source/banner.t.html#754)\]

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

A BannerUIWindow object. This keeps track of the transient UI state of a
banner window while it appears on the screen. We create only transient
instances of this class, since it tracks what's actually displayed at
any given time.

`class `**`BannerUIWindow`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BannerUIWindow`**  
`         object`  
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

` `[`align_`](#align_)`  `[`handle_`](#handle_)`  `[`id_`](#id_)`  `[`outputStream_`](#outputStream_)`  `[`parentID_`](#parentID_)`  `[`styleFlags_`](#styleFlags_)`  `[`win_`](#win_)`  `[`windowType_`](#windowType_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="align_"></span>

`align_`

[banner.t](../file/banner.t.html)\[[786](../source/banner.t.html#786)\]

<div class="desc">

*no description available*

</div>

<span id="handle_"></span>

`handle_`

[banner.t](../file/banner.t.html)\[[769](../source/banner.t.html#769)\]

<div class="desc">

the system-level banner handle

</div>

<span id="id_"></span>

`id_`

[banner.t](../file/banner.t.html)\[[772](../source/banner.t.html#772)\]

<div class="desc">

the banner's ID

</div>

<span id="outputStream_"></span>

`outputStream_`

[banner.t](../file/banner.t.html)\[[782](../source/banner.t.html#782)\]

<div class="desc">

The banner's output stream. Output streams are always transient, so hang
on to each active banner's stream so that we can plug it back in on
restore.

</div>

<span id="parentID_"></span>

`parentID_`

[banner.t](../file/banner.t.html)\[[775](../source/banner.t.html#775)\]

<div class="desc">

the parent banner's ID (nil if this is a top-level banner)

</div>

<span id="styleFlags_"></span>

`styleFlags_`

[banner.t](../file/banner.t.html)\[[787](../source/banner.t.html#787)\]

<div class="desc">

*no description available*

</div>

<span id="win_"></span>

`win_`

[banner.t](../file/banner.t.html)\[[794](../source/banner.t.html#794)\]

<div class="desc">

Scratch-pad for our association to our BannerWindow object. We only use
this during the RESTORE process, to tie the transient object back to the
proper persistent object.

</div>

<span id="windowType_"></span>

`windowType_`

[banner.t](../file/banner.t.html)\[[785](../source/banner.t.html#785)\]

<div class="desc">

creation parameters of the banner

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (handle, ostr, id, parentID, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[756](../source/banner.t.html#756)\]

<div class="desc">

construct

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
