---
layout: docs
---
<span class="title">menuOutputStream</span><span class="type">object</span>

[menusys.t](../file/menusys.t.html)\[[84](../source/menusys.t.html#84)\]

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



Menu output stream. We run topic contents through this output stream to
allow topics to use the special paragraph and style tag markups.

`transient `**`menuOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`menuOutputStream`**  
[`OutputStream`](../object/OutputStream.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`buf_`](#buf_)

Inherited from `OutputStream` :  
[`filterList_`](../object/OutputStream.html#filterList_) [`justDidPara`](../object/OutputStream.html#justDidPara) [`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor) [`myInputManager`](../object/OutputStream.html#myInputManager) [`prefix`](../object/OutputStream.html#prefix)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`captureOutput`](#captureOutput) [`execute`](#execute) [`writeFromStream`](#writeFromStream)

Inherited from `OutputStream` :  
[`addOutputFilter`](../object/OutputStream.html#addOutputFilter) [`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow) [`applyFilters`](../object/OutputStream.html#applyFilters) [`applyTextFilters`](../object/OutputStream.html#applyTextFilters) [`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit) [`construct`](../object/OutputStream.html#construct) [`inputLineEnd`](../object/OutputStream.html#inputLineEnd) [`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter) [`setPrefix`](../object/OutputStream.html#setPrefix) [`watchForOutput`](../object/OutputStream.html#watchForOutput) [`writeToStream`](../object/OutputStream.html#writeToStream)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="buf_"></span>

`buf_`

[menusys.t](../file/menusys.t.html)\[[125](../source/menusys.t.html#125)\]



our capture buffer (a StringBuffer object)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="captureOutput"></span>

`captureOutput (val)`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[90](../source/menusys.t.html#90)\]



Process a function call through the stream. If the function generates
any output, we capture it. If the function simply returns text, we run
it through the filters.



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[115](../source/menusys.t.html#115)\]



initialize



<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[menusys.t](../file/menusys.t.html)\[[112](../source/menusys.t.html#112)\]



we capture our output to a string buffer
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


