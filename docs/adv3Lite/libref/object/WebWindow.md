[WebWindow]{.title}[class]{.type}

[webui.t](../file/webui.t.html)\[[1667](../source/webui.t.html#1667)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Web Window tracker. This is a game object that controls and remembers
the state of a \"window\" in the browser user interface. By \"window\",
we basically mean an HTML page, which might reside at the top level of
the browser itself, or inside an IFRAME element within an enclosing
page.

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
refresh. This object\'s job is to send information to the client on
demand that allows the client to display the page in its current state.

Note that a given WebWindow/HTML page combination can be used more than
once within the same UI. The pages defined in the library are designed
to be generic and reusable, so you might use the same window class more
than once for different purposes within the UI. The library pages can
also be subclassed, by subclassing the WebWindow object and creating a
customized copy of the corresponding HTML page resource.

`class `**`WebWindow`**` :   `[`WebResourceResFile`](../object/WebResourceResFile.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebWindow`**\
`         `[`WebResourceResFile`](../object/WebResourceResFile.html)\
`                 `[`WebResource`](../object/WebResource.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`WebWindow`**\
`         `[`WebCommandWin`](../object/WebCommandWin.html)\
`         `[`WebLayoutWindow`](../object/WebLayoutWindow.html)\
`         `[`WebStatusWin`](../object/WebStatusWin.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`name`](#name)`  `[`pathName`](#pathName)`  `[`src`](#src)`  `[`sthCtx`](#sthCtx)`  `[`vpath`](#vpath)`  `

Inherited from `WebResourceResFile` :\
` `[`binaryExts`](../object/WebResourceResFile.html#binaryExts)`  `[`browserExtToMime`](../object/WebResourceResFile.html#browserExtToMime)`  `

Inherited from `WebResource` :\
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`clearWindow`](#clearWindow)`  `[`flushWin`](#flushWin)`  `[`getState`](#getState)`  `[`processName`](#processName)`  `[`sendWinEvent`](#sendWinEvent)`  `[`sendWinEventTo`](#sendWinEventTo)`  `[`winFromPath`](#winFromPath)`  `[`write`](#write)`  `

Inherited from `WebResourceResFile` :\
` `[`isTextFile`](../object/WebResourceResFile.html#isTextFile)`  `[`matchRequest`](../object/WebResourceResFile.html#matchRequest)`  `[`processRequest`](../object/WebResourceResFile.html#processRequest)`  `

Inherited from `WebResource` :\
` `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#name}

`name`

[webui.t](../file/webui.t.html)\[[1750](../source/webui.t.html#1750)\]

::: desc
the name of this window
:::

[]{#pathName}

`pathName`

[webui.t](../file/webui.t.html)\[[1753](../source/webui.t.html#1753)\]

::: desc
the full path name of this window, in \"win.sub.sub\" format
:::

[]{#src}

`src`

[webui.t](../file/webui.t.html)\[[1689](../source/webui.t.html#1689)\]

::: desc
The window\'s actual source location, as a resource path. A given
WebWindow subclass corresponds to a particular HMTL page, since the
class and the page are facets of the same conceptual object (one facet
is the browser expression, the other is the game program expression).
:::

[]{#sthCtx}

`sthCtx`

[webui.t](../file/webui.t.html)\[[1747](../source/webui.t.html#1747)\]

::: desc
specialsToHtml context
:::

[]{#vpath}

`vpath`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1680](../source/webui.t.html#1680)\]

::: desc
The URL path to the window\'s HTML definition file, as seen by the
browser. For the pre-defined library window types, we expose the HTML
file in the root of the URL namespace - e.g., \"/main.htm\". The files
are actually stored in the /webuires folder, but we expose them to the
browser as though they were in the root folder to make embedded object
references on the pages simpler. The browser figures the path to an
embedded object relative to the containing page, so by placing the
containing page in the root folder, embedded object paths don\'t have to
worry about referencing parent folders.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#clearWindow}

`clearWindow ( )`

[webui.t](../file/webui.t.html)\[[1718](../source/webui.t.html#1718)\]

::: desc
Clear the window. Subclasses must override this.
:::

[]{#flushWin}

`flushWin ( )`

[webui.t](../file/webui.t.html)\[[1707](../source/webui.t.html#1707)\]

::: desc
Flush the window. This sends any buffered text to the UI.
:::

[]{#getState}

`getState (client)`

[webui.t](../file/webui.t.html)\[[1728](../source/webui.t.html#1728)\]

::: desc
Get the window\'s current state. This returns a string containing an XML
fragment that describes the state of the window. This information is
sent to the HTML page when the browser asks for the current layout state
when first loaded or when the page is refreshed. The XML format for each
subclass is specific to the Javascript on the class\'s HTML page.
:::

[]{#processName}

`processName (n)`[OVERRIDDEN]{.rem}

[webui.t](../file/webui.t.html)\[[1692](../source/webui.t.html#1692)\]

::: desc
process a request path referencing me into my actual resource path
:::

[]{#sendWinEvent}

`sendWinEvent (evt)`

[webui.t](../file/webui.t.html)\[[1731](../source/webui.t.html#1731)\]

::: desc
send an event related to this window to all clients
:::

[]{#sendWinEventTo}

`sendWinEventTo (evt, client)`

[webui.t](../file/webui.t.html)\[[1741](../source/webui.t.html#1741)\]

::: desc
send a window event to a specific client
:::

[]{#winFromPath}

`winFromPath (path)`

[webui.t](../file/webui.t.html)\[[1699](../source/webui.t.html#1699)\]

::: desc
Resolve a window path name. For container windows, this should search
the sub-windows for the given path. By default, we match simply if the
path matches our name.
:::

[]{#write}

`write (txt)`

[webui.t](../file/webui.t.html)\[[1713](../source/webui.t.html#1713)\]

::: desc
Write text to the window. Subclasses with stream-oriented APIs must
override this.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::