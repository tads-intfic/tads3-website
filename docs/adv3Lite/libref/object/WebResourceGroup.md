---
layout: docs
---
<span class="title">WebResourceGroup</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[1228](../source/webui.t.html#1228)\]

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

A WebResourceGroup is a container for WebResource objects. When a server
receives a request, it looks in its group list to find the resource
object that will handle the request.

`class `**`WebResourceGroup`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`WebResourceGroup`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`mainWebGroup`](../object/mainWebGroup.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`all`](#all)`  `[`contents`](#contents)`  `[`priority`](#priority)`  `[`server`](#server)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`isGroupFor`](#isGroupFor)`  `[`processRequest`](#processRequest)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="all"></span>

`all`

[webui.t](../file/webui.t.html)\[[1305](../source/webui.t.html#1305)\]

<div class="desc">

class property: list of all WebResourceGroup objects

</div>

<span id="contents"></span>

`contents`

[webui.t](../file/webui.t.html)\[[1267](../source/webui.t.html#1267)\]

<div class="desc">

the WebResource objects in the group

</div>

<span id="priority"></span>

`priority`

[webui.t](../file/webui.t.html)\[[1254](../source/webui.t.html#1254)\]

<div class="desc">

The priority of the group, relative to other groups. If the same server
matches multiple groups, this allows you to designate which group has
precedence. A higher value means higher priority.

</div>

<span id="server"></span>

`server`

[webui.t](../file/webui.t.html)\[[1264](../source/webui.t.html#1264)\]

<div class="desc">

The HTTPServer object or objects this group is associated with. The
general event processor uses this to route a request to the appropriate
resource group, by finding the group that's associated with the server
that received the request.

To associate a group with multiple servers, make this a list.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isGroupFor"></span>

`isGroupFor (req)`

[webui.t](../file/webui.t.html)\[[1234](../source/webui.t.html#1234)\]

<div class="desc">

Should this group handle the given request? By default, we say yes if
the server that received the request is associated with this group via
the group's 'server' property.

</div>

<span id="processRequest"></span>

`processRequest (req)`

[webui.t](../file/webui.t.html)\[[1274](../source/webui.t.html#1274)\]

<div class="desc">

Process a request. This looks for the highest priority matching resource
in the group, then hands the request to that resource for processing.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
