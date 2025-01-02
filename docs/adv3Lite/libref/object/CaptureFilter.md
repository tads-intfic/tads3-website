---
---
<span class="title">CaptureFilter</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[818](../source/output.t.html#818)\]

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

Capture Filter. This is an output filter that simply captures all of the
text sent through the filter, sending nothing out to the underlying
stream.

The default implementation simply discards the incoming text. Subclasses
can keep track of the text in memory, in a file, or wherever desired.

`class `**`CaptureFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CaptureFilter`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CaptureFilter`**  
`         `[`StringCaptureFilter`](../object/StringCaptureFilter.html)  
`         `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterText`](#filterText)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[823](../source/output.t.html#823)\]

<div class="desc">

Filter the text. We simply discard the text, passing nothing through to
the underlying stream.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
