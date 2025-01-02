---
layout: docs
---
<span class="title">ClientEventRequest</span><span class="type">class</span>

[webui.t](../file/webui.t.html)\[[768](../source/webui.t.html#768)\]

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

Client event request. Each client session object keeps a queue of
pending event requests, representing incoming "GET /webui/getEvent"
requests that have yet to be answered.

`class `**`ClientEventRequest`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ClientEventRequest`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`req`](#req)[`reqTimeout`](#reqTimeout)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="req"></span>

`req`

[webui.t](../file/webui.t.html)\[[776](../source/webui.t.html#776)\]

<div class="desc">

the underlying HTTPRequest object

</div>

<span id="reqTimeout"></span>

`reqTimeout`

[webui.t](../file/webui.t.html)\[[784](../source/webui.t.html#784)\]

<div class="desc">

The system time (ms ticks) when the request times out. If we don't have
an actual event to send in response by this time, the housekeeper will
generate a no-op reply just to let the client know that we're still
here.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (req)`

[webui.t](../file/webui.t.html)\[[769](../source/webui.t.html#769)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
