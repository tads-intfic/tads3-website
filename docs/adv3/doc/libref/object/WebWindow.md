---
layout: docs
---
<span class="title">WebWindow</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[1667](../source/webui.t.html#1667)\]

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

Web Window tracker. This is a game object that controls and remembers
the state of a "window" in the browser user interface. By "window", we
basically mean an HTML page, which might reside at the top level of the
browser itself, or inside an IFRAME element within an enclosing page.

Each WebWindow class corresponds to a particular HTML page that we serve
the client. The HTML page is the expression of the window in the
browser, and the WebWindow object is the expression of the same
information in the game program. The two are different facets of the
same conceptual UI object. The reason we need the two separate
expressions is that the server controls everything, but the client has
to do the actual display work, and the two parts of the program speak
different languages - the server is TADS, and the client is HTML.

The WebWindow object on the server lets us easily reconstruct the UI
state in a newly opened browser window, or when the user performs a page
refresh. This object's job is to send information to the client on
demand that allows the client to display the page in its current state.

Note that a given WebWindow/HTML page combination can be used more than
once within the same UI. The pages defined in the library are designed
to be generic and reusable, so you might use the same window class more
than once for different purposes within the UI. The library pages can
also be subclassed, by subclassing the WebWindow object and creating a
customized copy of the corresponding HTML page resource.

`class `**`WebWindow`**` :   `[`WebResourceResFile`](../object/WebResourceResFile.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebWindow`**  
[`WebResourceResFile`](../object/WebResourceResFile.html)  
[`WebResource`](../object/WebResource.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`WebWindow`**  
[`WebCommandWin`](../object/WebCommandWin.html)  
[`WebLayoutWindow`](../object/WebLayoutWindow.html)  
[`WebStatusWin`](../object/WebStatusWin.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`name`](#name)[`pathName`](#pathName)[`src`](#src)[`sthCtx`](#sthCtx)[`vpath`](#vpath)

Inherited from `WebResourceResFile` :  
[`binaryExts`](../object/WebResourceResFile.html#binaryExts)[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group)[`priority`](../object/WebResource.html#priority)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`clearWindow`](#clearWindow)[`flushWin`](#flushWin)[`getState`](#getState)[`processName`](#processName)[`sendWinEvent`](#sendWinEvent)[`sendWinEventTo`](#sendWinEventTo)[`winFromPath`](#winFromPath)[`write`](#write)

Inherited from `WebResourceResFile` :  
[`isTextFile`](../object/WebResourceResFile.html#isTextFile)[`matchRequest`](../object/WebResourceResFile.html#matchRequest)[`processRequest`](../object/WebResourceResFile.html#processRequest)

Inherited from `WebResource` :  
[`sendAck`](../object/WebResource.html#sendAck)[`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="name"></span>

`name`

[webui.t](../file/webui.t.html)\[[1750](../source/webui.t.html#1750)\]

<div class="desc">

the name of this window

</div>

<span id="pathName"></span>

`pathName`

[webui.t](../file/webui.t.html)\[[1753](../source/webui.t.html#1753)\]

<div class="desc">

the full path name of this window, in "win.sub.sub" format

</div>

<span id="src"></span>

`src`

[webui.t](../file/webui.t.html)\[[1689](../source/webui.t.html#1689)\]

<div class="desc">

The window's actual source location, as a resource path. A given
WebWindow subclass corresponds to a particular HMTL page, since the
class and the page are facets of the same conceptual object (one facet
is the browser expression, the other is the game program expression).

</div>

<span id="sthCtx"></span>

`sthCtx`

[webui.t](../file/webui.t.html)\[[1747](../source/webui.t.html#1747)\]

<div class="desc">

specialsToHtml context

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1680](../source/webui.t.html#1680)\]

<div class="desc">

The URL path to the window's HTML definition file, as seen by the
browser. For the pre-defined library window types, we expose the HTML
file in the root of the URL namespace - e.g., "/main.html". The files are
actually stored in the /webuires folder, but we expose them to the
browser as though they were in the root folder to make embedded object
references on the pages simpler. The browser figures the path to an
embedded object relative to the containing page, so by placing the
containing page in the root folder, embedded object paths don't have to
worry about referencing parent folders.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="clearWindow"></span>

`clearWindow ( )`

[webui.t](../file/webui.t.html)\[[1718](../source/webui.t.html#1718)\]

<div class="desc">

Clear the window. Subclasses must override this.

</div>

<span id="flushWin"></span>

`flushWin ( )`

[webui.t](../file/webui.t.html)\[[1707](../source/webui.t.html#1707)\]

<div class="desc">

Flush the window. This sends any buffered text to the UI.

</div>

<span id="getState"></span>

`getState (client)`

[webui.t](../file/webui.t.html)\[[1728](../source/webui.t.html#1728)\]

<div class="desc">

Get the window's current state. This returns a string containing an XML
fragment that describes the state of the window. This information is
sent to the HTML page when the browser asks for the current layout state
when first loaded or when the page is refreshed. The XML format for each
subclass is specific to the Javascript on the class's HTML page.

</div>

<span id="processName"></span>

`processName (n)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1692](../source/webui.t.html#1692)\]

<div class="desc">

process a request path referencing me into my actual resource path

</div>

<span id="sendWinEvent"></span>

`sendWinEvent (evt)`

[webui.t](../file/webui.t.html)\[[1731](../source/webui.t.html#1731)\]

<div class="desc">

send an event related to this window to all clients

</div>

<span id="sendWinEventTo"></span>

`sendWinEventTo (evt, client)`

[webui.t](../file/webui.t.html)\[[1741](../source/webui.t.html#1741)\]

<div class="desc">

send a window event to a specific client

</div>

<span id="winFromPath"></span>

`winFromPath (path)`

[webui.t](../file/webui.t.html)\[[1699](../source/webui.t.html#1699)\]

<div class="desc">

Resolve a window path name. For container windows, this should search
the sub-windows for the given path. By default, we match simply if the
path matches our name.

</div>

<span id="write"></span>

`write (txt)`

[webui.t](../file/webui.t.html)\[[1713](../source/webui.t.html#1713)\]

<div class="desc">

Write text to the window. Subclasses with stream-oriented APIs must
override this.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
