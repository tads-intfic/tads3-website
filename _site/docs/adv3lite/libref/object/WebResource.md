<span class="title">WebResource</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[798](../source/webui.t.html#798)\]

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

A WebResource is a virtual file accessible via the HTTP server. Each
resource object has a path, which can be given as a simple string that
must be matched exactly, or as a RexPattern object with a regular
expression to be matched. Each object also has a "processRequest"
method, which the server invokes to answer the request when the path is
matched.

`class `**`WebResource`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebResource`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`WebResource`**  
`         `[`WebResourceResFile`](../object/WebResourceResFile.html)  
`                 `[`WebWindow`](../object/WebWindow.html)  
`                         `[`WebCommandWin`](../object/WebCommandWin.html)  
`                         `[`WebLayoutWindow`](../object/WebLayoutWindow.html)  
`                         `[`WebStatusWin`](../object/WebStatusWin.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`eventPage`](../object/eventPage.html)`  `[`flushEventsPage`](../object/flushEventsPage.html)`  `[`guestConnectPage`](../object/guestConnectPage.html)`  `[`inputDialogPage`](../object/inputDialogPage.html)`  `[`inputEventPage`](../object/inputEventPage.html)`  `[`inputFileCancel`](../object/inputFileCancel.html)`  `[`inputFilePage`](../object/inputFilePage.html)`  `[`inputLinePage`](../object/inputLinePage.html)`  `[`menuSysEventPage`](../object/menuSysEventPage.html)`  `[`morePromptDonePage`](../object/morePromptDonePage.html)`  `[`setPrefsPage`](../object/setPrefsPage.html)`  `[`setScreenNamePage`](../object/setScreenNamePage.html)`  `[`tempFileDownloadPage`](../object/tempFileDownloadPage.html)`  `[`uiStatePage`](../object/uiStatePage.html)`  `[`uploadFilePage`](../object/uploadFilePage.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`group`](#group)`  `[`priority`](#priority)`  `[`vpath`](#vpath)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchRequest`](#matchRequest)`  `[`processRequest`](#processRequest)`  `[`sendAck`](#sendAck)`  `[`sendXML`](#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="group"></span>

`group`

[webui.t](../file/webui.t.html)\[[865](../source/webui.t.html#865)\]

<div class="desc">

The group this resource is part of. This is the object that "contains"
the resource, via its 'contents' property; any object will work here,
since it's just a place to put the contents list for the resource group.

By default, we put all resources into the mainWebGroup object.

The point of the group is to allow different servers to use different
sets of resources, or to allow one server to use different resource sets
under different circumstances. When a server processes a request, it
does so by looking through the 'contents' list for a group of its
choice.

</div>

<span id="priority"></span>

`priority`

[webui.t](../file/webui.t.html)\[[849](../source/webui.t.html#849)\]

<div class="desc">

The priority of this resource. If the path is given as a regular
expression, a given request might match more than one resource. In such
cases, the matching resource with the highest priority is the one that's
actually used to process the request.

</div>

<span id="vpath"></span>

`vpath`

[webui.t](../file/webui.t.html)\[[827](../source/webui.t.html#827)\]

<div class="desc">

The virtual path to the resource. This is the apparent URL path to this
resource, as seen by the client.

URL paths follow the Unix file system conventions in terms of format,
but don't confuse the virtual path with an actual file system path. The
vpath doesn't have anything to do with the disk file system on the
server machine or anywhere else. That's why we call it "virtual" - it's
merely the apparent location, from the client's perspective.

When the server receives a request from the client, it looks at the URL
sent by the client to determine which WebResource object should handle
the request. The server does this by matching the resource path portion
of the URL to the virtual path of each WebResource, until it finds a
WebResource that matches. The resource path in the URL is the part of
the URL following the domain, and continuing up to but not including any
"?" query parameters. The resource path always starts with a slash "/".
For example, for the URL "http://192.168.1.15/test/path?param=1", the
resource path would be "/test/path".

The virtual path can be given as a string or as a RexPattern. If it's a
string, a URL resource path must match the virtual path exactly,
including upper/lower case. If the virtual path is given as a
RexPattern, the URL resource path will be matched to the pattern with
the usual regular expression rules.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchRequest"></span>

`matchRequest (query, req)`

[webui.t](../file/webui.t.html)\[[883](../source/webui.t.html#883)\]

<div class="desc">

Determine if this resource matches the given request. 'query' is the
parsed query from the request, as returned by req.parseQuery(). 'req' is
the HTTPRequest object representing the request; you can use this to
extract more information from the request, such as cookies or the
client's network address.

This method returns true if the request matches this resource, nil if
not.

You can override this to specify more complex matching rules than you
could achieve just by specifying the path string or RexPattern. For
example, you could make the request conditional on the time of day, past
request history, cookies in the request, parameters, etc.

</div>

<span id="processRequest"></span>

`processRequest (req, query)`

[webui.t](../file/webui.t.html)\[[837](../source/webui.t.html#837)\]

<div class="desc">

Process the request. This is invoked when we determine that this is the
highest priority resource object matching the request. 'req' is the
HTTPRequest object; 'query' is the parsed query data as returned by
req.parseQuery(). The query information is provided for convenience, in
case the result depends on the query parameters.

</div>

<span id="sendAck"></span>

`sendAck (req, xml, =, ', <, ok, /, >, ')`

[webui.t](../file/webui.t.html)\[[911](../source/webui.t.html#911)\]

<div class="desc">

Send a generic request acknowledgment or reply. This wraps the given XML
fragment in an XML document with the root type given by the last element
in our path name. If the 'xml' value is omitted, we send "\<ok/\>" by
default.

</div>

<span id="sendXML"></span>

`sendXML (req, root, xml)`

[webui.t](../file/webui.t.html)\[[932](../source/webui.t.html#932)\]

<div class="desc">

Send an XML reply. This wraps the given XML fragment in an XML document
with the given root element.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
