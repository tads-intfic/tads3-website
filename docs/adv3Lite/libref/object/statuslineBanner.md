---
---
<span class="title">statuslineBanner</span><span class="type">object</span>

[browser.t](../file/browser.t.html)\[[810](../source/browser.t.html#810)\]

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

The basic status line window. The "banner" in the name is historical,
because the traditional console UI implements the status line as a
banner window. We don't actually have banner windows in the Web UI; we
use iframes instead. But we keep the name to make it easier to port
games written for the traditional UI to the Web UI.

`transient `**`statuslineBanner`**` :   `[`WebStatusWin`](../object/WebStatusWin.html)`   `[`WebBannerWin`](../object/WebBannerWin.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`statuslineBanner`**  
`         `[`WebStatusWin`](../object/WebStatusWin.html)  
`                 `[`WebWindow`](../object/WebWindow.html)  
`                         `[`WebResourceResFile`](../object/WebResourceResFile.html)  
`                                 `[`WebResource`](../object/WebResource.html)  
`                                         object`  
`         `[`WebBannerWin`](../object/WebBannerWin.html)  
`                 `[`OutputStreamWindow`](../object/OutputStreamWindow.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `WebStatusWin` :  
` `[`deltas_`](../object/WebStatusWin.html#deltas_)`  `[`src`](../object/WebStatusWin.html#src)`  `[`txt_`](../object/WebStatusWin.html#txt_)`  `[`vpath`](../object/WebStatusWin.html#vpath)`  `

Inherited from `WebWindow` :  
` `[`name`](../object/WebWindow.html#name)`  `[`pathName`](../object/WebWindow.html#pathName)`  `[`sthCtx`](../object/WebWindow.html#sthCtx)`  `

Inherited from `WebResourceResFile` :  
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :  
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

` `

Inherited from `OutputStreamWindow` :  
` `[`outputStream_`](../object/OutputStreamWindow.html#outputStream_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `WebStatusWin` :  
` `[`clearWindow`](../object/WebStatusWin.html#clearWindow)`  `[`flushWin`](../object/WebStatusWin.html#flushWin)`  `[`getState`](../object/WebStatusWin.html#getState)`  `[`resize`](../object/WebStatusWin.html#resize)`  `[`setStatus`](../object/WebStatusWin.html#setStatus)`  `[`setStatusText`](../object/WebStatusWin.html#setStatusText)`  `[`write`](../object/WebStatusWin.html#write)`  `

Inherited from `WebWindow` :  
` `[`processName`](../object/WebWindow.html#processName)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`winFromPath`](../object/WebWindow.html#winFromPath)`  `

Inherited from `WebResourceResFile` :  
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :  
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

Inherited from `WebBannerWin` :  
` `[`createOutputStreamObj`](../object/WebBannerWin.html#createOutputStreamObj)`  `[`flushBanner`](../object/WebBannerWin.html#flushBanner)`  `[`init`](../object/WebBannerWin.html#init)`  `[`setSize`](../object/WebBannerWin.html#setSize)`  `[`sizeToContents`](../object/WebBannerWin.html#sizeToContents)`  `[`writeToBanner`](../object/WebBannerWin.html#writeToBanner)`  `

Inherited from `OutputStreamWindow` :  
` `[`captureOutput`](../object/OutputStreamWindow.html#captureOutput)`  `[`createOutputStream`](../object/OutputStreamWindow.html#createOutputStream)`  `[`setOutputStream`](../object/OutputStreamWindow.html#setOutputStream)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
