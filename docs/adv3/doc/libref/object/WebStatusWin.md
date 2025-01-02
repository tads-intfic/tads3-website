---
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

<div class="fdesc">

Status line window

`class `**`WebStatusWin`**` :   `[`WebWindow`](../object/WebWindow.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebStatusWin`**  
`         `[`WebWindow`](../object/WebWindow.html)  
`                 `[`WebResourceResFile`](../object/WebResourceResFile.html)  
`                         `[`WebResource`](../object/WebResource.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`statuslineBanner`](../object/statuslineBanner.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`deltas_`](#deltas_)`  `[`src`](#src)`  `[`txt_`](#txt_)`  `[`vpath`](#vpath)`  `

Inherited from `WebWindow` :  
` `[`name`](../object/WebWindow.html#name)`  `[`pathName`](../object/WebWindow.html#pathName)`  `[`sthCtx`](../object/WebWindow.html#sthCtx)`  `

Inherited from `WebResourceResFile` :  
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :  
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`clearWindow`](#clearWindow)`  `[`flushWin`](#flushWin)`  `[`getState`](#getState)`  `[`resize`](#resize)`  `[`setStatus`](#setStatus)`  `[`setStatusText`](#setStatusText)`  `[`write`](#write)`  `

Inherited from `WebWindow` :  
` `[`processName`](../object/WebWindow.html#processName)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`winFromPath`](../object/WebWindow.html#winFromPath)`  `

Inherited from `WebResourceResFile` :  
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :  
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="deltas_"></span>

`deltas_`

[webui.t](../file/webui.t.html)\[[2684](../source/webui.t.html#2684)\]

<div class="desc">

do we have any deltas since the last flush?

</div>

<span id="src"></span>

`src`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2578](../source/webui.t.html#2578)\]

<div class="desc">

*no description available*

</div>

<span id="txt_"></span>

`txt_`

[webui.t](../file/webui.t.html)\[[2687](../source/webui.t.html#2687)\]

<div class="desc">

the current status message

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2577](../source/webui.t.html#2577)\]

<div class="desc">

my request path and actual resource path

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="clearWindow"></span>

`clearWindow ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2644](../source/webui.t.html#2644)\]

<div class="desc">

clear the window

</div>

<span id="flushWin"></span>

`flushWin ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2650](../source/webui.t.html#2650)\]

<div class="desc">

flush pending text to the window

</div>

<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2678](../source/webui.t.html#2678)\]

<div class="desc">

get the current state to send to the browser

</div>

<span id="resize"></span>

`resize ( )`

[webui.t](../file/webui.t.html)\[[2675](../source/webui.t.html#2675)\]

<div class="desc">

Refigure the window size. The status line is generally set up to be
automatically sized to its contents, which requires that we tell the UI
when it's time to recalculate the layout to reflect the current contents
after a change.

</div>

<span id="setStatus"></span>

`setStatus (room, score?, turns?)`

[webui.t](../file/webui.t.html)\[[2589](../source/webui.t.html#2589)\]

<div class="desc">

Set the room and score/turns portions of the status line. This sets the
left side of the status line to the 'room' text (which can contain HTML
markups), and the right side to the the score/turns values, if present.
If the turn counter is omitted but the score value is present, we'll
just show the score value; otherwise we'll format these as
"score/turns". If no score value is present, we'll leave the right side
blank.

</div>

<span id="setStatusText"></span>

`setStatusText (msg)`

[webui.t](../file/webui.t.html)\[[2620](../source/webui.t.html#2620)\]

<div class="desc">

Set the text of the status line. This sets the entire status window to
the given HTML text, without any additional formatting.

</div>

<span id="write"></span>

`write (msg)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[2634](../source/webui.t.html#2634)\]

<div class="desc">

add text to the status line

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
