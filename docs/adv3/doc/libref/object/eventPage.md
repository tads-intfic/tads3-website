---
layout: docs
---
<span class="title">eventPage</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[1397](../source/webui.t.html#1397)\]

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

getEvent request. This is the mechanism we use to "send" events to the
client. The client sends a getEvent request to us, and we simply put it
in a queue - we don't send back any response immediately. As soon as we
want to send an event to the client, we go through the queue of pending
getEvent requests, and reply to each one with the event we want to send.

**`eventPage`**` :   `[`WebResource`](../object/WebResource.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`eventPage`**  
`         `[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`vpath`](#vpath)`  `

Inherited from `WebResource` :  
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`processRequest`](#processRequest)`  `[`sendEvent`](#sendEvent)`  `[`sendEventTo`](#sendEventTo)`  `

Inherited from `WebResource` :  
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1398](../source/webui.t.html#1398)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1399](../source/webui.t.html#1399)\]

<div class="desc">

*no description available*

</div>

<span id="sendEvent"></span>

`sendEvent (msg)`

[webui.t](../file/webui.t.html)\[[1412](../source/webui.t.html#1412)\]

<div class="desc">

broadcast an event message to each client

</div>

<span id="sendEventTo"></span>

`sendEventTo (msg, client)`

[webui.t](../file/webui.t.html)\[[1422](../source/webui.t.html#1422)\]

<div class="desc">

send an event to a particular client

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
