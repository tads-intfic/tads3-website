---
layout: docs
---
<span class="title">inputFilePage</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[3471](../source/webui.t.html#3471)\]

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



File dialog event page. This page is used by the IFDB Storage Server
file dialog to return information to the game UI. The IFDB dialog page
can't itself perform scripting actions on the enclosing dialog frame,
since it's being served from a different domain - browsers prohibit
cross-domain scripting for security reasons. The IFDB dialog must
therefore navigate back to a page within the game server domain in order
to return information through scripting. This is that page: when the
IFDB page is ready to return information, it navigates its frame to this
page, passing the return values in the request parameters. Since this
page is served by the game server, within the game server domain, the
browser allows it to use scripting actions on its enclosing frame. We
finish the job by dismissing the dialog in the UI.

**`inputFilePage`**` :   `[`WebResource`](../object/WebResource.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`inputFilePage`**  
[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`vpath`](#vpath)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group) [`priority`](../object/WebResource.html#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`processRequest`](#processRequest)

Inherited from `WebResource` :  
[`matchRequest`](../object/WebResource.html#matchRequest) [`sendAck`](../object/WebResource.html#sendAck) [`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3472](../source/webui.t.html#3472)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3473](../source/webui.t.html#3473)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


