---
layout: docs
---
<span class="title">WebStatusWin</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[2575](../source/webui.t.html#2575)\]

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



Status line window

`class `**`WebStatusWin`**` :   `[`WebWindow`](../object/WebWindow.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebStatusWin`**  
[`WebWindow`](../object/WebWindow.html)  
[`WebResourceResFile`](../object/WebResourceResFile.html)  
[`WebResource`](../object/WebResource.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`statuslineBanner`](../object/statuslineBanner.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`deltas_`](#deltas_) [`src`](#src) [`txt_`](#txt_) [`vpath`](#vpath)

Inherited from `WebWindow` :  
[`name`](../object/WebWindow.html#name) [`pathName`](../object/WebWindow.html#pathName) [`sthCtx`](../object/WebWindow.html#sthCtx)

Inherited from `WebResourceResFile` :  
[`binaryExts`](../object/WebResourceResFile.html#binaryExts) [`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group) [`priority`](../object/WebResource.html#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`clearWindow`](#clearWindow) [`flushWin`](#flushWin) [`getState`](#getState) [`resize`](#resize) [`setStatus`](#setStatus) [`setStatusText`](#setStatusText) [`write`](#write)

Inherited from `WebWindow` :  
[`processName`](../object/WebWindow.html#processName) [`sendWinEvent`](../object/WebWindow.html#sendWinEvent) [`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo) [`winFromPath`](../object/WebWindow.html#winFromPath)

Inherited from `WebResourceResFile` :  
[`isTextFile`](../object/WebResourceResFile.html#isTextFile) [`matchRequest`](../object/WebResourceResFile.html#matchRequest) [`processRequest`](../object/WebResourceResFile.html#processRequest)

Inherited from `WebResource` :  
[`sendAck`](../object/WebResource.html#sendAck) [`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="deltas_"></span>

`deltas_`

[webui.t](../file/webui.t.html)\[[2684](../source/webui.t.html#2684)\]



do we have any deltas since the last flush?



<span id="src"></span>

`src`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2578](../source/webui.t.html#2578)\]



*no description available*



<span id="txt_"></span>

`txt_`

[webui.t](../file/webui.t.html)\[[2687](../source/webui.t.html#2687)\]



the current status message



<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2577](../source/webui.t.html#2577)\]



my request path and actual resource path



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="clearWindow"></span>

`clearWindow ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2644](../source/webui.t.html#2644)\]



clear the window



<span id="flushWin"></span>

`flushWin ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2650](../source/webui.t.html#2650)\]



flush pending text to the window



<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2678](../source/webui.t.html#2678)\]



get the current state to send to the browser



<span id="resize"></span>

`resize ( )`

[webui.t](../file/webui.t.html)\[[2675](../source/webui.t.html#2675)\]



Refigure the window size. The status line is generally set up to be
automatically sized to its contents, which requires that we tell the UI
when it's time to recalculate the layout to reflect the current contents
after a change.



<span id="setStatus"></span>

`setStatus (room, score?, turns?)`

[webui.t](../file/webui.t.html)\[[2589](../source/webui.t.html#2589)\]



Set the room and score/turns portions of the status line. This sets the
left side of the status line to the 'room' text (which can contain HTML
markups), and the right side to the the score/turns values, if present.
If the turn counter is omitted but the score value is present, we'll
just show the score value; otherwise we'll format these as
"score/turns". If no score value is present, we'll leave the right side
blank.



<span id="setStatusText"></span>

`setStatusText (msg)`

[webui.t](../file/webui.t.html)\[[2620](../source/webui.t.html#2620)\]



Set the text of the status line. This sets the entire status window to
the given HTML text, without any additional formatting.



<span id="write"></span>

`write (msg)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2634](../source/webui.t.html#2634)\]



add text to the status line
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


