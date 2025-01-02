---
layout: docs
---
<span class="title">WebBannerWin</span><span class="type">class</span>

[browser.t](../file/browser.t.html)\[[737](../source/browser.t.html#737)\]

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

Web Banner Window. This is designed as a \*partial\* drop-in replacement
for the BannerWindow class, using Web UI windows as implemented in the
core TADS javascript client.

This class is designed to be mixed with a WebWindow subclass.

This isn't a complete replacement for BannerWindow, because the layout
model for the Web UI is different from the banner window model (the Web
UI model is better and more flexible). This class implements the parts
of the BannerWindow API related to the stream-oriented output to the
window, so you shouldn't have to change anything that writes HTML text
to the window. However, you will have to rework code that sets up the
window's layout to use the Web UI model.

`class `**`WebBannerWin`**` :   `[`OutputStreamWindow`](../object/OutputStreamWindow.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebBannerWin`**  
[`OutputStreamWindow`](../object/OutputStreamWindow.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`statuslineBanner`](../object/statuslineBanner.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `OutputStreamWindow` :  
[`outputStream_`](../object/OutputStreamWindow.html#outputStream_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`createOutputStreamObj`](#createOutputStreamObj)[`flushBanner`](#flushBanner)[`init`](#init)[`setSize`](#setSize)[`sizeToContents`](#sizeToContents)[`writeToBanner`](#writeToBanner)

Inherited from `OutputStreamWindow` :  
[`captureOutput`](../object/OutputStreamWindow.html#captureOutput)[`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream)[`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createOutputStreamObj"></span>

`createOutputStreamObj ( )`<span class="rem">OVERRIDDEN</span>

[browser.t](../file/browser.t.html)\[[748](../source/browser.t.html#748)\]

<div class="desc">

create our output stream subclass

</div>

<span id="flushBanner"></span>

`flushBanner ( )`

[browser.t](../file/browser.t.html)\[[754](../source/browser.t.html#754)\]

<div class="desc">

flush output

</div>

<span id="init"></span>

`init ( )`

[browser.t](../file/browser.t.html)\[[741](../source/browser.t.html#741)\]

<div class="desc">

Initialize. Call this when first displaying the window in the UI.

</div>

<span id="setSize"></span>

`setSize (siz, units, advisory)`

[browser.t](../file/browser.t.html)\[[770](../source/browser.t.html#770)\]

<div class="desc">

Banner window size settings. We simply ignore these; callers must rework
their layout logic for the Web UI, since the javascript layout system is
so different.

</div>

<span id="sizeToContents"></span>

`sizeToContents ( )`

[browser.t](../file/browser.t.html)\[[771](../source/browser.t.html#771)\]

<div class="desc">

*no description available*

</div>

<span id="writeToBanner"></span>

`writeToBanner (txt)`

[browser.t](../file/browser.t.html)\[[760](../source/browser.t.html#760)\]

<div class="desc">

write text

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
