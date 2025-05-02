---
layout: docs
---
<span class="title">SwitchableCaptureFilter</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[836](../source/output.t.html#836)\]

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



"Switchable" capture filter. This filter can have its blocking enabled
or disabled. When blocking is enabled, we capture everything, leaving
nothing to the underlying stream; when disabled, we pass everything
through to the underyling stream unchanged.

`class `**`SwitchableCaptureFilter`**` :   `[`CaptureFilter`](../object/CaptureFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SwitchableCaptureFilter`**  
[`CaptureFilter`](../object/CaptureFilter.html)  
[`OutputFilter`](../object/OutputFilter.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isBlocking`](#isBlocking)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText)





<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isBlocking"></span>

`isBlocking`

[output.t](../file/output.t.html)\[[852](../source/output.t.html#852)\]



Blocking enabled: if this is true, we'll capture all text passed through
us, leaving nothing to the underyling stream. Blocking is enabled by
default.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[838](../source/output.t.html#838)\]



filter the text





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


