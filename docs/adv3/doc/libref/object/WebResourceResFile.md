---
layout: docs
---
<span class="title">WebResourceResFile</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[980](../source/webui.t.html#980)\]

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



A resource file request handler. This handles a request by sending the
contents of the resource file matching the given name.

To expose a bundled game resource as a Web object that the client can
access and download via HTTP, simply create an instance of this class,
and set the virtual path (the vpath property) to the resource name. See
coverArtResource below for an example - that object creates a URL for
the Cover Art image so that the browser can download and display it.

You can expose \*all\* bundled resources in the entire game simply by
creating an object like this:

  
WebResourceResFile  
vpath = static new RexPattern('/')  
;

That creates a URL mapping that matches \*any\* URL path that
corresponds to a bundled resource name. The library intentionally
doesn't provide an object like this by default, as a security measure;
the default configuration as a rule tries to err on the side of caution,
and in this case the cautious thing to do is to hide everything by
default. There's really no system-level security risk in exposing all
resources, since the only files available as resources are files you
explicitly bundle into the build anyway; but even so, some resources
might be for internal use within the game, so we don't want to just
assume that everything should be downloadable.

You can also expose resources on a directory-by-directory basis, simply
by specifying a longer path prefix:

  
WebResourceResFile  
vpath = static new RexPattern('/graphics/')  
;

Again, the library doesn't define anything like this by default, since
we don't want to impose any assumptions about how your resources are
organized.

`class `**`WebResourceResFile`**` :   `[`WebResource`](../object/WebResource.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebResourceResFile`**  
[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`WebResourceResFile`**  
[`WebWindow`](../object/WebWindow.html)  
[`WebCommandWin`](../object/WebCommandWin.html)  
[`WebLayoutWindow`](../object/WebLayoutWindow.html)  
[`WebStatusWin`](../object/WebStatusWin.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`coverArtResource`](../object/coverArtResource.html) [`webMainWin`](../object/webMainWin.html) [`webuiResources`](../object/webuiResources.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`binaryExts`](#binaryExts) [`browserExtToMime`](#browserExtToMime)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group) [`priority`](../object/WebResource.html#priority) [`vpath`](../object/WebResource.html#vpath)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isTextFile`](#isTextFile) [`matchRequest`](#matchRequest) [`processName`](#processName) [`processRequest`](#processRequest)

Inherited from `WebResource` :  
[`sendAck`](../object/WebResource.html#sendAck) [`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="binaryExts"></span>

`binaryExts`

[webui.t](../file/webui.t.html)\[[1083](../source/webui.t.html#1083)\]



table of common binary file extensions



<span id="browserExtToMime"></span>

`browserExtToMime`

[webui.t](../file/webui.t.html)\[[1043](../source/webui.t.html#1043)\]



extension to MIME type map for important browser file types



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isTextFile"></span>

`isTextFile (fname)`

[webui.t](../file/webui.t.html)\[[1061](../source/webui.t.html#1061)\]



Determine if the given file is a text file or a binary file. By default,
we base the determination solely on the filename suffix, checking the
extension against a list of common file types.



<span id="matchRequest"></span>

`matchRequest (query, req)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[986](../source/webui.t.html#986)\]



Match a request. A resource file resource matches if we match the
virtual path setting for the resource, and the requested resource file
exists.



<span id="processName"></span>

`processName (n)`

[webui.t](../file/webui.t.html)\[[1054](../source/webui.t.html#1054)\]



Process the name. This takes the path string from the query, and returns
the resource file name to look for. By default, we simply return the
same name specified by the client, minus the leading '/' (since resource
paths are always relative).



<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[992](../source/webui.t.html#992)\]



process the request: send the resource file's contents
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


