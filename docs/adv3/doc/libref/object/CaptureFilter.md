---
layout: docs
---
<span class="title">CaptureFilter</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[690](../source/output.t.html#690)\]

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



Capture Filter. This is an output filter that simply captures all of the
text sent through the filter, sending nothing out to the underlying
stream.

The default implementation simply discards the incoming text. Subclasses
can keep track of the text in memory, in a file, or wherever desired.

`class `**`CaptureFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CaptureFilter`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CaptureFilter`**  
[`StringCaptureFilter`](../object/StringCaptureFilter.html)  
[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[695](../source/output.t.html#695)\]



Filter the text. We simply discard the text, passing nothing through to
the underlying stream.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


