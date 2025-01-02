---
---
<span class="title">WebLayoutWindow</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[1778](../source/webui.t.html#1778)\]

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

Layout Window. This is a specialized Web Window tracker for our layout
page type, which is displayed using the resource file
webuires/layout.html. This page is designed as a container of more
specialized sub-window pages; its job is to divide up the window space
into IFRAME elements that display the sub-windows, and to manage the
geometry of the IFRAMEs.

The layout page is primarily designed to be the top-level page of the
web UI. The idea is to set up a layout page as the navigation URL for
the browser, so the layout page fills the browser window. You then
arrange your functional windows within the layout page - a command
window, a status line window, etc. This arrangement is similar to banner
window in HTML TADS, but IFRAMEs are considerably more flexible; for
example, they don't have to tile the main window, and you can size them
in the full range of units CSS provides.

Layout windows aren't limited to the top level, though. Since you can
put any HTML page within an IFRAME, you can put another layout window
within an IFRAME, to further subdivide the space inside the IFRAME.

`class `**`WebLayoutWindow`**` :   `[`WebWindow`](../object/WebWindow.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebLayoutWindow`**  
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

` `[`webMainWin`](../object/webMainWin.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`frames`](#frames)`  `[`src`](#src)`  `[`vpath`](#vpath)`  `

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

` `[`createFrame`](#createFrame)`  `[`flushWin`](#flushWin)`  `[`getState`](#getState)`  `[`winFromPath`](#winFromPath)`  `

Inherited from `WebWindow` :  
` `[`clearWindow`](../object/WebWindow.html#clearWindow)`  `[`processName`](../object/WebWindow.html#processName)`  `[`sendWinEvent`](../object/WebWindow.html#sendWinEvent)`  `[`sendWinEventTo`](../object/WebWindow.html#sendWinEventTo)`  `[`write`](../object/WebWindow.html#write)`  `

Inherited from `WebResourceResFile` :  
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :  
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="frames"></span>

`frames`

[webui.t](../file/webui.t.html)\[[1924](../source/webui.t.html#1924)\]

<div class="desc">

The table of active frames within this layout. This table is keyed by
window name; each entry is a list of \[win, pos\], where 'win' is the
WebWindow object for the window, and 'pos' is its position parameter.

</div>

<span id="src"></span>

`src`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1928](../source/webui.t.html#1928)\]

<div class="desc">

*no description available*

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1927](../source/webui.t.html#1927)\]

<div class="desc">

my virtual path and the actual resource file location

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createFrame"></span>

`createFrame (win, name, pos)`

[webui.t](../file/webui.t.html)\[[1873](../source/webui.t.html#1873)\]

<div class="desc">

Create a new window within the layout. This creates an IFRAME in the
browser, laid out according to the 'pos' argument, and displays the
given window object within the frame.

If the window already exists, this updates the window with the new
layout settings.

'win' is a WebWindow object that will be displayed within the IFRAME.
This method automatically loads the HTML resource from the WebWindow
into the new IFRAME.

'name' is the name of the window. Each window within a layout must have
a distinct name. This allows you to refer to the dimensions of other
windows in 'pos' parameters. The name should be alphanumeric.

'pos' is the layout position for the new frame. This is a string in this
format: 'left, top, width, height', where 'left' is the horizontal
position of the top left corner, 'top' is the vertical position of the
top left corner, 'width' is the width of the window, and 'height' is the
height. Each element can be specified as a Javascript-style arithmetic
expression. Within the expression, you can use a mix of any of the
following:

  
123 - a number, representing a number of pixels on the display  
5em - 5 'em' units, relative to the main BODY font in the window  
5en - 5 'en' units in the main BODY font  
5ex - 5 'ex' units in the main BODY font  
window.width - the width in pixels of the enclosing window  
window.height - the height in pixels of the enclosing window  
50% - percentage of the width or height of the enclosing window  
content.width - the width in pixels of the contents of the frame  
content.height - the height in pixels of the contents of the frame  
x.left - horizontal coordinate of leftmost edge of window 'x'  
x.right - horizontal coordinate of rightmost edge of window 'x'  
x.top - vertical coordinate of top edge of window 'x'  
x.bottom - vertical coordinate of bottom edge of window 'x'  
x.width - width in pixels of window 'x'  
x.height - height in pixels of window 'x'

The "window" dimensions refer to the \*enclosing\* window. If this
layout window is the main page of the UI, this is simply the browser
window itself. For a layout window nested within another frame, this is
the enclosing frame.

Percentage units apply to the enclosing window. When a percentage is
used in the 'left' or 'width' slot, it applies to the width of the
enclosing window; in the 'top' or 'height' slot, it applies to the
height.

The "content" dimensions refer to the contents of the frame we're
creating. This is the size of the contents as actually laid out in the
browser.

"x.left" and so on refer to the dimensions of other frames \*within this
same layout window\*. 'x' is the name of another window within the same
layout, as specified by the 'name' argument given when the window was
created.

</div>

<span id="flushWin"></span>

`flushWin ( )`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1894](../source/webui.t.html#1894)\]

<div class="desc">

Flush this window. For a layout window, we simply flush each child
window.

</div>

<span id="getState"></span>

`getState (client)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1903](../source/webui.t.html#1903)\]

<div class="desc">

Get the state.

</div>

<span id="winFromPath"></span>

`winFromPath (path)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1782](../source/webui.t.html#1782)\]

<div class="desc">

Resolve a window path name

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
