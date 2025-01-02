---
layout: docs
---
<span class="title">DropTypeThrow</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[327](../source/thing.t.html#327)\]

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



A drop-type descriptor for the THROW command. This object keeps track of
the target (the object that was hit by the projectile) and the
projectile's path to the target. The projectile is simply the direct
object.

`class `**`DropTypeThrow`**` :   `[`DropType`](../object/DropType.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DropTypeThrow`**  
[`DropType`](../object/DropType.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DropTypeThrow`**  
[`DropTypeShortThrow`](../object/DropTypeShortThrow.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`path_`](#path_) [`target_`](#target_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getReportPrefix`](#getReportPrefix) [`standardReport`](#standardReport)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="path_"></span>

`path_`

[thing.t](../file/thing.t.html)\[[363](../source/thing.t.html#363)\]



the path the projectile took to reach the target



<span id="target_"></span>

`target_`

[thing.t](../file/thing.t.html)\[[360](../source/thing.t.html#360)\]



the object that was hit by the projectile



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (target, path)`

[thing.t](../file/thing.t.html)\[[328](../source/thing.t.html#328)\]



*no description available*



<span id="getReportPrefix"></span>

`getReportPrefix (obj, dest)`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[353](../source/thing.t.html#353)\]



if the actual target and the nominal destination are the same, just say
that it lands on the destination; otherwise, say that it bounces off the
target and falls to the nominal destination



<span id="standardReport"></span>

`standardReport (obj, dest)`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[335](../source/thing.t.html#335)\]



remember the target and path





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


