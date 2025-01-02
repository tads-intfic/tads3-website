---
layout: docs
---
<span class="title">guestConnectPage</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[1379](../source/webui.t.html#1379)\]

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

<div class="fdesc">

Guest connection request. This enables "switchboard" applications on
remote servers that keep track of multi-user game sessions, to show
users available sessions and connect new users to those sessions.

The first step in setting up a switchboard is for the game server to
register itself with the switchboard by sending a request on startup.
That part is external to us - that's not handled within the game program
but rather within the web server script that launches the game. Here,
then, we simply assume that this work is already done.

The second step is that the switchboard needs to check back with the
game server from time to time to see if it's still alive - essentially a
"ping" operation. We handle that here: if we respond to the request,
we're obviously still alive.

The third step is that we need to send the switchboard a URL that lets
secondary users ("guests") connect to the game session. We handle that
here as well: our reply body is the client connection URL.

**`guestConnectPage`**` :   `[`WebResource`](../object/WebResource.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`guestConnectPage`**  
[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`vpath`](#vpath)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group)[`priority`](../object/WebResource.html#priority)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`processRequest`](#processRequest)

Inherited from `WebResource` :  
[`matchRequest`](../object/WebResource.html#matchRequest)[`sendAck`](../object/WebResource.html#sendAck)[`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1380](../source/webui.t.html#1380)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1381](../source/webui.t.html#1381)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
