---
layout: docs
---
<span class="title">styleTagFilter</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[925](../source/output.t.html#925)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



"Style tag" filter. This is an output filter that expands our special
style tags in output text.

**`styleTagFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`styleTagFilter`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`tagPattern`](#tagPattern)[`tagTable`](#tagTable)





Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)[`filterText`](#filterText)[`translateTag`](#translateTag)





Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="tagPattern"></span>

`tagPattern`

[output.t](../file/output.t.html)\[[927](../source/output.t.html#927)\]



pre-compile our frequently-used tag search pattern



<span id="tagTable"></span>

`tagTable`

[output.t](../file/output.t.html)\[[1035](../source/output.t.html#1035)\]



Our tag translation table. We'll initialize this during preinit to a
lookup table with all of the defined StyleTag objects.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1017](../source/output.t.html#1017)\]



preinitialization



<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[931](../source/output.t.html#931)\]



filter for a style tag



<span id="translateTag"></span>

`translateTag (tag)`

[output.t](../file/output.t.html)\[[994](../source/output.t.html#994)\]



Translate a tag





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


