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



A WebResourceGroup is a container for WebResource objects. When a server
receives a request, it looks in its group list to find the resource
object that will handle the request.

`class `**`WebResourceGroup`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebResourceGroup`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



` [`mainWebGroup`](../object/mainWebGroup.html)  `
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`all`](#all)  [`contents`](#contents)  [`priority`](#priority)  [`server`](#server)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`isGroupFor`](#isGroupFor)  [`processRequest`](#processRequest)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="all"></span>

`all`

[webui.t](../file/webui.t.html)\[[1305](../source/webui.t.html#1305)\]



class property: list of all WebResourceGroup objects



<span id="contents"></span>

`contents`

[webui.t](../file/webui.t.html)\[[1267](../source/webui.t.html#1267)\]



the WebResource objects in the group



<span id="priority"></span>

`priority`

[webui.t](../file/webui.t.html)\[[1254](../source/webui.t.html#1254)\]



The priority of the group, relative to other groups. If the same server
matches multiple groups, this allows you to designate which group has
precedence. A higher value means higher priority.



<span id="server"></span>

`server`

[webui.t](../file/webui.t.html)\[[1264](../source/webui.t.html#1264)\]



The HTTPServer object or objects this group is associated with. The
general event processor uses this to route a request to the appropriate
resource group, by finding the group that's associated with the server
that received the request.

To associate a group with multiple servers, make this a list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isGroupFor"></span>

`isGroupFor (req)`

[webui.t](../file/webui.t.html)\[[1234](../source/webui.t.html#1234)\]



Should this group handle the given request? By default, we say yes if
the server that received the request is associated with this group via
the group's 'server' property.



<span id="processRequest"></span>

`processRequest (req)`

[webui.t](../file/webui.t.html)\[[1274](../source/webui.t.html#1274)\]



Process a request. This looks for the highest priority matching resource
in the group, then hands the request to that resource for processing.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


