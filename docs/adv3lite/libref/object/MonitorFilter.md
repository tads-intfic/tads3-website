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



Output monitor filter. This is a filter that leaves the filtered text
unchanged, but keeps track of whether any text was seen at all. Our
'outputFlag' is true if we've seen any output, nil if not.

`class `**`MonitorFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MonitorFilter`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`outputFlag`](#outputFlag)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="outputFlag"></span>

`outputFlag`

[output.t](../file/output.t.html)\[[804](../source/output.t.html#804)\]



flag: has any output occurred for this monitor yet?



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[793](../source/output.t.html#793)\]



filter text





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


