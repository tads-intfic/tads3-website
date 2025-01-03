---
layout: docs
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



TADS 3 Library - senses

This module defines objects and functions related to senses. This file
is language-independent.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`DistanceConnector`](../object/DistanceConnector.html) [`DropTypeShortThrow`](../object/DropTypeShortThrow.html) [`Material`](../object/Material.html) [`Occluder`](../object/Occluder.html) [`Sense`](../object/Sense.html) [`SenseConnector`](../object/SenseConnector.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`adventium`](../object/adventium.html) [`coarseMesh`](../object/coarseMesh.html) [`fineMesh`](../object/fineMesh.html) [`glass`](../object/glass.html) [`paper`](../object/paper.html) [`sight`](../object/sight.html) [`smell`](../object/smell.html) [`sound`](../object/sound.html) [`touch`](../object/touch.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`adjustBrightness`](#adjustBrightness) [`transparencyAdd`](#transparencyAdd) [`transparencyCompare`](#transparencyCompare)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="adjustBrightness"></span>

`adjustBrightness (br, trans)`

[sense.t](../file/sense.t.html)\[[383](../source/sense.t.html#383)\]



Given a brightness level and a transparency level, compute the
brightness as modified by the transparency level.



<span id="transparencyAdd"></span>

`transparencyAdd (a, b)`

[sense.t](../file/sense.t.html)\[[299](../source/sense.t.html#299)\]



"Add" two transparency levels, yielding a new transparency level. This
function can be used to determine the result of passing a sense through
multiple layers of material.



<span id="transparencyCompare"></span>

`transparencyCompare (a, b)`

[sense.t](../file/sense.t.html)\[[328](../source/sense.t.html#328)\]



Compare two transparency levels to determine which one is more
transparent. Returns 0 if the two levels are equally transparent, 1 if
the first one is more transparent, and -1 if the second one is more
transparent. The comparison follows this rule:

transparent \> attenuated \> distant == obscured \> opaque
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


