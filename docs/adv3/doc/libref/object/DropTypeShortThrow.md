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



A drop-type descriptor for a "short throw," which occurs when the target
is too far away to reach with our throw (i.e., the thrown object falls
short of the target).

`class `**`DropTypeShortThrow`**` :   `[`DropTypeThrow`](../object/DropTypeThrow.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DropTypeShortThrow`**  
[`DropTypeThrow`](../object/DropTypeThrow.html)  
[`DropType`](../object/DropType.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `DropTypeThrow` :  
[`path_`](../object/DropTypeThrow.html#path_)[`target_`](../object/DropTypeThrow.html#target_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`getReportPrefix`](#getReportPrefix)[`standardReport`](#standardReport)





<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (target, path)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[844](../source/sense.t.html#844)\]



*no description available*



<span id="getReportPrefix"></span>

`getReportPrefix (obj, dest)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[860](../source/sense.t.html#860)\]



show the short-throw report



<span id="standardReport"></span>

`standardReport (obj, dest)`<span class="rem">OVERRIDDEN</span>

[sense.t](../file/sense.t.html)\[[853](../source/sense.t.html#853)\]



we care about the \*intended\* target, not the distance connector





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


