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



Client event request. Each client session object keeps a queue of
pending event requests, representing incoming "GET /webui/getEvent"
requests that have yet to be answered.

`class `**`ClientEventRequest`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ClientEventRequest`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`req`](#req) [`reqTimeout`](#reqTimeout)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="req"></span>

`req`

[webui.t](../file/webui.t.html)\[[776](../source/webui.t.html#776)\]



the underlying HTTPRequest object



<span id="reqTimeout"></span>

`reqTimeout`

[webui.t](../file/webui.t.html)\[[784](../source/webui.t.html#784)\]



The system time (ms ticks) when the request times out. If we don't have
an actual event to send in response by this time, the housekeeper will
generate a no-op reply just to let the client know that we're still
here.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (req)`

[webui.t](../file/webui.t.html)\[[769](../source/webui.t.html#769)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


