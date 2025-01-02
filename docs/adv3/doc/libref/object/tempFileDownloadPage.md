---
layout: docs
---
<span class="title">tempFileDownloadPage</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[3237](../source/webui.t.html#3237)\]

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



Temporary file download page. This page serves temporary files created
via inputFile() as HTTP downloads to the client.

`transient `**`tempFileDownloadPage`**` :   `[`WebResource`](../object/WebResource.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`tempFileDownloadPage`**  
[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`nextID`](#nextID) [`vpath`](#vpath)

Inherited from `WebResource` :  
[`group`](../object/WebResource.html#group) [`priority`](../object/WebResource.html#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addFile`](#addFile) [`processRequest`](#processRequest)

Inherited from `WebResource` :  
[`matchRequest`](../object/WebResource.html#matchRequest) [`sendAck`](../object/WebResource.html#sendAck) [`sendXML`](../object/WebResource.html#sendXML)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="nextID"></span>

`nextID`

[webui.t](../file/webui.t.html)\[[3359](../source/webui.t.html#3359)\]



next available ID



<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3238](../source/webui.t.html#3238)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addFile"></span>

`addFile (fileType, client)`

[webui.t](../file/webui.t.html)\[[3319](../source/webui.t.html#3319)\]



add a file to our list of downloadable files



<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3239](../source/webui.t.html#3239)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


