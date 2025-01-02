---
layout: docs
---
<span class="title">statusLeftOutputStream</span><span class="type">object</span>

[status.t](../file/status.t.html)\[[63](../source/status.t.html#63)\]

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



A special OutputStream for the left half of the status line (the short
description area) in text mode. We use a separate stream for this
because we must write the text using the output mode switching for the
status line.

We only use this stream when we use the old-style text-mode status line
interface, which explicitly separates the status line into a left part
and a right part. When we have the banner API available in the
interpreter, we'll use banners instead, since banners give us much more
flexibility.

`transient `**`statusLeftOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`statusLeftOutputStream`**  
[`OutputStream`](../object/OutputStream.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `OutputStream` :  
[`filterList_`](../object/OutputStream.html#filterList_) [`justDidPara`](../object/OutputStream.html#justDidPara) [`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor) [`myInputManager`](../object/OutputStream.html#myInputManager) [`prefix`](../object/OutputStream.html#prefix)

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



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[status.t](../file/status.t.html)\[[65](../source/status.t.html#65)\]



we sit atop the system-level main console output stream





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


