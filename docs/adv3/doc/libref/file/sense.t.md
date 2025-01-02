---
---
<span class="title">sense.t</span><span class="type">file</span>

[source file](../source/sense.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

TADS 3 Library - senses

This module defines objects and functions related to senses. This file
is language-independent.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`DistanceConnector`](../object/DistanceConnector.html)`  `[`DropTypeShortThrow`](../object/DropTypeShortThrow.html)`  `[`Material`](../object/Material.html)`  `[`Occluder`](../object/Occluder.html)`  `[`Sense`](../object/Sense.html)`  `[`SenseConnector`](../object/SenseConnector.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`adventium`](../object/adventium.html)`  `[`coarseMesh`](../object/coarseMesh.html)`  `[`fineMesh`](../object/fineMesh.html)`  `[`glass`](../object/glass.html)`  `[`paper`](../object/paper.html)`  `[`sight`](../object/sight.html)`  `[`smell`](../object/smell.html)`  `[`sound`](../object/sound.html)`  `[`touch`](../object/touch.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`adjustBrightness`](#adjustBrightness)`  `[`transparencyAdd`](#transparencyAdd)`  `[`transparencyCompare`](#transparencyCompare)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="adjustBrightness"></span>

`adjustBrightness (br, trans)`

[sense.t](../file/sense.t.html)\[[383](../source/sense.t.html#383)\]

<div class="desc">

Given a brightness level and a transparency level, compute the
brightness as modified by the transparency level.

</div>

<span id="transparencyAdd"></span>

`transparencyAdd (a, b)`

[sense.t](../file/sense.t.html)\[[299](../source/sense.t.html#299)\]

<div class="desc">

"Add" two transparency levels, yielding a new transparency level. This
function can be used to determine the result of passing a sense through
multiple layers of material.

</div>

<span id="transparencyCompare"></span>

`transparencyCompare (a, b)`

[sense.t](../file/sense.t.html)\[[328](../source/sense.t.html#328)\]

<div class="desc">

Compare two transparency levels to determine which one is more
transparent. Returns 0 if the two levels are equally transparent, 1 if
the first one is more transparent, and -1 if the second one is more
transparent. The comparison follows this rule:

transparent \> attenuated \> distant == obscured \> opaque

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
