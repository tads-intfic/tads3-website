---
layout: docs
---
<span class="title">uiStatePage</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[1464](../source/webui.t.html#1464)\]

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



getState request. The web page can send this to get a full accounting of
the current state of the UI. It does this automatically when first
loaded, and again when the user manually refreshes the page.

We handle this by asking the main window to generate its state.

**`uiStatePage`**` :   `[`WebResource`](../object/WebResource.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`uiStatePage`**  
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

[webui.t](../file/webui.t.html)\[[1465](../source/webui.t.html#1465)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1466](../source/webui.t.html#1466)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


