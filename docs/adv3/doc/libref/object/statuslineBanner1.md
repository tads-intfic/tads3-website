---
layout: docs
---
<span class="title">statuslineBanner</span><span class="type">object</span>

[console.t](../file/console.t.html)\[[273](../source/console.t.html#273)\]

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



The banner window for the status line.

**`statuslineBanner`**` :   `[`BannerWindow`](../object/BannerWindow.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`statuslineBanner`**  
[`BannerWindow`](../object/BannerWindow.html)  
[`OutputStreamWindow`](../object/OutputStreamWindow.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `BannerWindow` :  
[`align_`](../object/BannerWindow.html#align_) [`handle_`](../object/BannerWindow.html#handle_) [`id_`](../object/BannerWindow.html#id_) [`inited_`](../object/BannerWindow.html#inited_) [`parentID_`](../object/BannerWindow.html#parentID_) [`size_`](../object/BannerWindow.html#size_) [`sizeUnits_`](../object/BannerWindow.html#sizeUnits_) [`styleFlags_`](../object/BannerWindow.html#styleFlags_) [`windowType_`](../object/BannerWindow.html#windowType_)

Inherited from `OutputStreamWindow` :  
[`outputStream_`](../object/OutputStreamWindow.html#outputStream_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`initBannerWindow`](#initBannerWindow) [`removeBanner`](#removeBanner) [`setColorScheme`](#setColorScheme)

Inherited from `BannerWindow` :  
[`clearWindow`](../object/BannerWindow.html#clearWindow) [`construct`](../object/BannerWindow.html#construct) [`createOutputStreamObj`](../object/BannerWindow.html#createOutputStreamObj) [`createSystemBanner`](../object/BannerWindow.html#createSystemBanner) [`cursorTo`](../object/BannerWindow.html#cursorTo) [`flushBanner`](../object/BannerWindow.html#flushBanner) [`getBannerID`](../object/BannerWindow.html#getBannerID) [`setScreenColor`](../object/BannerWindow.html#setScreenColor) [`setSize`](../object/BannerWindow.html#setSize) [`setTextColor`](../object/BannerWindow.html#setTextColor) [`showBanner`](../object/BannerWindow.html#showBanner) [`showForRestore`](../object/BannerWindow.html#showForRestore) [`sizeToContents`](../object/BannerWindow.html#sizeToContents) [`updateForRestore`](../object/BannerWindow.html#updateForRestore) [`writeToBanner`](../object/BannerWindow.html#writeToBanner)

Inherited from `OutputStreamWindow` :  
[`captureOutput`](../object/OutputStreamWindow.html#captureOutput) [`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream) [`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="initBannerWindow"></span>

`initBannerWindow ( )`<span class="rem">OVERRIDDEN</span>

[console.t](../file/console.t.html)\[[285](../source/console.t.html#285)\]



initialize



<span id="removeBanner"></span>

`removeBanner ( )`<span class="rem">OVERRIDDEN</span>

[console.t](../file/console.t.html)\[[275](../source/console.t.html#275)\]



close the window



<span id="setColorScheme"></span>

`setColorScheme ( )`

[console.t](../file/console.t.html)\[[306](../source/console.t.html#306)\]



Set the color scheme. We simply show a \<BODY\> tag that selects the
parameterized colors STATUSBG and STATUSTEXT. (These are called
"parameterized" colors because they don't select specific colors, but
rather select whatever colors the interpreter wishes to use for the
status line. In many cases, the interpreter lets the user select these
colors via a Preferences dialog.)
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


