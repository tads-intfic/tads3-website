---
layout: docs
---
<span class="title">DropTypeShortThrow</span><span class="type">class</span>

[sense.t](../file/sense.t.html)\[[843](../source/sense.t.html#843)\]

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

A drop-type descriptor for a "short throw," which occurs when the target
is too far away to reach with our throw (i.e., the thrown object falls
short of the target).

`class `**`DropTypeShortThrow`**` :   `[`DropTypeThrow`](../object/DropTypeThrow.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DropTypeShortThrow`**  
`         `[`DropTypeThrow`](../object/DropTypeThrow.html)  
`                 `[`DropType`](../object/DropType.html)  
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

` `

Inherited from `DropTypeThrow` :  
` `[`path_`](../object/DropTypeThrow.html#path_)`  `[`target_`](../object/DropTypeThrow.html#target_)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getReportPrefix`](#getReportPrefix)`  `[`standardReport`](#standardReport)`  `

` `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (target, path)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[844](../source/sense.t.html#844)\]

<div class="desc">

*no description available*

</div>

<span id="getReportPrefix"></span>

`getReportPrefix (obj, dest)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[860](../source/sense.t.html#860)\]

<div class="desc">

show the short-throw report

</div>

<span id="standardReport"></span>

`standardReport (obj, dest)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[853](../source/sense.t.html#853)\]

<div class="desc">

we care about the \*intended\* target, not the distance connector

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
