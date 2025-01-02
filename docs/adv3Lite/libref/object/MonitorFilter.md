---
layout: docs
---
<span class="title">MonitorFilter</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[791](../source/output.t.html#791)\]

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

Output monitor filter. This is a filter that leaves the filtered text
unchanged, but keeps track of whether any text was seen at all. Our
'outputFlag' is true if we've seen any output, nil if not.

`class `**`MonitorFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MonitorFilter`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
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

[`outputFlag`](#outputFlag)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`filterText`](#filterText)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="outputFlag"></span>

`outputFlag`

[output.t](../file/output.t.html)\[[804](../source/output.t.html#804)\]

<div class="desc">

flag: has any output occurred for this monitor yet?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[793](../source/output.t.html#793)\]

<div class="desc">

filter text

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
