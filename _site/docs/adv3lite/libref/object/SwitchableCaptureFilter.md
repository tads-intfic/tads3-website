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

<div class="fdesc">

"Switchable" capture filter. This filter can have its blocking enabled
or disabled. When blocking is enabled, we capture everything, leaving
nothing to the underlying stream; when disabled, we pass everything
through to the underyling stream unchanged.

`class `**`SwitchableCaptureFilter`**` :   `[`CaptureFilter`](../object/CaptureFilter.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SwitchableCaptureFilter`**  
`         `[`CaptureFilter`](../object/CaptureFilter.html)  
`                 `[`OutputFilter`](../object/OutputFilter.html)  
`                         object`  
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

` `[`isBlocking`](#isBlocking)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterText`](#filterText)`  `

` `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isBlocking"></span>

`isBlocking`

[output.t](../file/output.t.html)\[[852](../source/output.t.html#852)\]

<div class="desc">

Blocking enabled: if this is true, we'll capture all text passed through
us, leaving nothing to the underyling stream. Blocking is enabled by
default.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[838](../source/output.t.html#838)\]

<div class="desc">

filter the text

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
