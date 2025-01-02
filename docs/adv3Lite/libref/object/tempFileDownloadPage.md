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

<div class="fdesc">

Temporary file download page. This page serves temporary files created
via inputFile() as HTTP downloads to the client.

`transient `**`tempFileDownloadPage`**` :   `[`WebResource`](../object/WebResource.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`tempFileDownloadPage`**  
`         `[`WebResource`](../object/WebResource.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`nextID`](#nextID)`  `[`vpath`](#vpath)`  `

Inherited from `WebResource` :  
` `[`group`](../object/WebResource.html#group)`  `[`priority`](../object/WebResource.html#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addFile`](#addFile)`  `[`processRequest`](#processRequest)`  `

Inherited from `WebResource` :  
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="nextID"></span>

`nextID`

[webui.t](../file/webui.t.html)\[[3359](../source/webui.t.html#3359)\]

<div class="desc">

next available ID

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3238](../source/webui.t.html#3238)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addFile"></span>

`addFile (fileType, client)`

[webui.t](../file/webui.t.html)\[[3319](../source/webui.t.html#3319)\]

<div class="desc">

add a file to our list of downloadable files

</div>

<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3239](../source/webui.t.html#3239)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
