<span class="title">inputFileCancel</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[3501](../source/webui.t.html#3501)\]

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

Cancel the input dialog. This is called from the UI directly to cancel
the file selection, when the user closes the dialog through the
enclosing main page UI rather than from within the dialog. This is
useful if the dialog page fails to load, for example.

Note: the upload file dialog also uses this. The upload dialog is
basically a variation on the regular input file dialog.

**`inputFileCancel`**` :   `[`WebResource`](../object/WebResource.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`inputFileCancel`**  
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

` `[`processRequest`](#processRequest)`  `

Inherited from `WebResource` :  
` `[`matchRequest`](../object/WebResource.html#matchRequest)`  `[`sendAck`](../object/WebResource.html#sendAck)`  `[`sendXML`](../object/WebResource.html#sendXML)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="vpath"></span>

`vpath`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3502](../source/webui.t.html#3502)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="processRequest"></span>

`processRequest (req, query)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[3503](../source/webui.t.html#3503)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
