<span class="title">mainWebGroup</span><span class="type">object</span>

[webui.t](../file/webui.t.html)\[[1313](../source/webui.t.html#1313)\]

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

The default web resource group. This is the default container for
WebResource objects.

**`mainWebGroup`**` :   `[`WebResourceGroup`](../object/WebResourceGroup.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`mainWebGroup`**  
`         `[`WebResourceGroup`](../object/WebResourceGroup.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`priority`](#priority)`  `

Inherited from `WebResourceGroup` :  
` `[`all`](../object/WebResourceGroup.html#all)`  `[`contents`](../object/WebResourceGroup.html#contents)`  `[`server`](../object/WebResourceGroup.html#server)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`isGroupFor`](#isGroupFor)`  `

Inherited from `WebResourceGroup` :  
` `[`processRequest`](../object/WebResourceGroup.html#processRequest)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1316](../source/webui.t.html#1316)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`

[webui.t](../file/webui.t.html)\[[1325](../source/webui.t.html#1325)\]

<div class="desc">

At startup, put each WebResource object into the contents list for its
group.

</div>

<span id="isGroupFor"></span>

`isGroupFor (req)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1315](../source/webui.t.html#1315)\]

<div class="desc">

the default group matches any server, but with low priority

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
