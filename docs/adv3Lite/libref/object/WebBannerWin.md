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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebBannerWin`**  
[`OutputStreamWindow`](../object/OutputStreamWindow.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



` [`statuslineBanner`](../object/statuslineBanner.html)  `
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `OutputStreamWindow` :  
` [`outputStream_`](../object/OutputStreamWindow.html#outputStream_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`createOutputStreamObj`](#createOutputStreamObj)  [`flushBanner`](#flushBanner)  [`init`](#init)  [`setSize`](#setSize)  [`sizeToContents`](#sizeToContents)  [`writeToBanner`](#writeToBanner)  `

Inherited from `OutputStreamWindow` :  
` [`captureOutput`](../object/OutputStreamWindow.html#captureOutput)  [`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream)  [`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="createOutputStreamObj"></span>

`createOutputStreamObj ( )`<span class="rem">OVERRIDDEN</span>

[browser.t](../file/browser.t.html)\[[748](../source/browser.t.html#748)\]



create our output stream subclass



<span id="flushBanner"></span>

`flushBanner ( )`

[browser.t](../file/browser.t.html)\[[754](../source/browser.t.html#754)\]



flush output



<span id="init"></span>

`init ( )`

[browser.t](../file/browser.t.html)\[[741](../source/browser.t.html#741)\]



Initialize. Call this when first displaying the window in the UI.



<span id="setSize"></span>

`setSize (siz, units, advisory)`

[browser.t](../file/browser.t.html)\[[770](../source/browser.t.html#770)\]



Banner window size settings. We simply ignore these; callers must rework
their layout logic for the Web UI, since the javascript layout system is
so different.



<span id="sizeToContents"></span>

`sizeToContents ( )`

[browser.t](../file/browser.t.html)\[[771](../source/browser.t.html#771)\]



*no description available*



<span id="writeToBanner"></span>

`writeToBanner (txt)`

[browser.t](../file/browser.t.html)\[[760](../source/browser.t.html#760)\]



write text
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


