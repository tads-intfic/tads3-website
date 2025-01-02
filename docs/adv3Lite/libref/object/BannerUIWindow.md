---
layout: docs
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



A BannerUIWindow object. This keeps track of the transient UI state of a
banner window while it appears on the screen. We create only transient
instances of this class, since it tracks what's actually displayed at
any given time.

`class `**`BannerUIWindow`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BannerUIWindow`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`align_`](#align_)[`handle_`](#handle_)[`id_`](#id_)[`outputStream_`](#outputStream_)[`parentID_`](#parentID_)[`styleFlags_`](#styleFlags_)[`win_`](#win_)[`windowType_`](#windowType_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="align_"></span>

`align_`

[banner.t](../file/banner.t.html)\[[786](../source/banner.t.html#786)\]



*no description available*



<span id="handle_"></span>

`handle_`

[banner.t](../file/banner.t.html)\[[769](../source/banner.t.html#769)\]



the system-level banner handle



<span id="id_"></span>

`id_`

[banner.t](../file/banner.t.html)\[[772](../source/banner.t.html#772)\]



the banner's ID



<span id="outputStream_"></span>

`outputStream_`

[banner.t](../file/banner.t.html)\[[782](../source/banner.t.html#782)\]



The banner's output stream. Output streams are always transient, so hang
on to each active banner's stream so that we can plug it back in on
restore.



<span id="parentID_"></span>

`parentID_`

[banner.t](../file/banner.t.html)\[[775](../source/banner.t.html#775)\]



the parent banner's ID (nil if this is a top-level banner)



<span id="styleFlags_"></span>

`styleFlags_`

[banner.t](../file/banner.t.html)\[[787](../source/banner.t.html#787)\]



*no description available*



<span id="win_"></span>

`win_`

[banner.t](../file/banner.t.html)\[[794](../source/banner.t.html#794)\]



Scratch-pad for our association to our BannerWindow object. We only use
this during the RESTORE process, to tie the transient object back to the
proper persistent object.



<span id="windowType_"></span>

`windowType_`

[banner.t](../file/banner.t.html)\[[785](../source/banner.t.html#785)\]



creation parameters of the banner



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (handle, ostr, id, parentID, windowType, align, styleFlags)`

[banner.t](../file/banner.t.html)\[[756](../source/banner.t.html#756)\]



construct





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


