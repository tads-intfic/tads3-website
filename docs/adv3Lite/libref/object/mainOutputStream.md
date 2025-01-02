---
layout: docs
---
<span class="title">mainOutputStream</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[540](../source/output.t.html#540)\]

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



The OutputStream for the main text area.

This object is transient because the output stream state is effectively
part of the interpreter user interface, which is not affected by save
and restore.

`transient `**`mainOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`mainOutputStream`**  
[`OutputStream`](../object/OutputStream.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curTranscript`](#curTranscript) [`myInputManager`](#myInputManager)

Inherited from `OutputStream` :  
[`filterList_`](../object/OutputStream.html#filterList_) [`justDidPara`](../object/OutputStream.html#justDidPara) [`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor) [`prefix`](../object/OutputStream.html#prefix)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`writeFromStream`](#writeFromStream)

Inherited from `OutputStream` :  
[`addOutputFilter`](../object/OutputStream.html#addOutputFilter) [`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow) [`applyFilters`](../object/OutputStream.html#applyFilters) [`applyTextFilters`](../object/OutputStream.html#applyTextFilters) [`captureOutput`](../object/OutputStream.html#captureOutput) [`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit) [`construct`](../object/OutputStream.html#construct) [`execute`](../object/OutputStream.html#execute) [`inputLineEnd`](../object/OutputStream.html#inputLineEnd) [`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter) [`setPrefix`](../object/OutputStream.html#setPrefix) [`watchForOutput`](../object/OutputStream.html#watchForOutput) [`writeToStream`](../object/OutputStream.html#writeToStream)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curTranscript"></span>

`curTranscript`

[output.t](../file/output.t.html)\[[549](../source/output.t.html#549)\]



the current command transcript



<span id="myInputManager"></span>

`myInputManager`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[546](../source/output.t.html#546)\]



The main text area is the same place where we normally read command
lines from the keyboard, so associate this output stream with the
primary input manager.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[552](../source/output.t.html#552)\]



we sit atop the system-level main console output stream





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


