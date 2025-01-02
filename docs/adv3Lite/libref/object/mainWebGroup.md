---
layout: docs
---
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



The default web resource group. This is the default container for
WebResource objects.

**`mainWebGroup`**` :   `[`WebResourceGroup`](../object/WebResourceGroup.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`mainWebGroup`**  
[`WebResourceGroup`](../object/WebResourceGroup.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`priority`](#priority)

Inherited from `WebResourceGroup` :  
[`all`](../object/WebResourceGroup.html#all)[`contents`](../object/WebResourceGroup.html#contents)[`server`](../object/WebResourceGroup.html#server)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)[`isGroupFor`](#isGroupFor)

Inherited from `WebResourceGroup` :  
[`processRequest`](../object/WebResourceGroup.html#processRequest)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1316](../source/webui.t.html#1316)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`

[webui.t](../file/webui.t.html)\[[1325](../source/webui.t.html#1325)\]



At startup, put each WebResource object into the contents list for its
group.



<span id="isGroupFor"></span>

`isGroupFor (req)`<span class="rem">OVERRIDDEN</span>

[webui.t](../file/webui.t.html)\[[1315](../source/webui.t.html#1315)\]



the default group matches any server, but with low priority





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


