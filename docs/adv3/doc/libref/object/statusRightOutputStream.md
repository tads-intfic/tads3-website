---
layout: docs
---
<span class="title">statusRightOutputStream</span><span class="type">object</span>

[status.t](../file/status.t.html)\[[84](../source/status.t.html#84)\]

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



A special OutputStream for the right half of the status line (the
score/turn count area) in text mode. We use a separate stream for this
because we have to write this text with the special statusRight()
intrinsic in text mode.

We only use this stream when we use the old-style text-mode status line
interface, which explicitly separates the status line into a left part
and a right part. When we have the banner API available in the
interpreter, we'll use banners instead, since banners give us much more
flexibility.

`transient `**`statusRightOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`statusRightOutputStream`**  
[`OutputStream`](../object/OutputStream.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`buf_`](#buf_)

Inherited from `OutputStream` :  
[`filterList_`](../object/OutputStream.html#filterList_) [`justDidPara`](../object/OutputStream.html#justDidPara) [`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor) [`myInputManager`](../object/OutputStream.html#myInputManager)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`flushStream`](#flushStream) [`writeFromStream`](#writeFromStream)

Inherited from `OutputStream` :  
[`addOutputFilter`](../object/OutputStream.html#addOutputFilter) [`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow) [`applyFilters`](../object/OutputStream.html#applyFilters) [`applyTextFilters`](../object/OutputStream.html#applyTextFilters) [`captureOutput`](../object/OutputStream.html#captureOutput) [`construct`](../object/OutputStream.html#construct) [`execute`](../object/OutputStream.html#execute) [`inputLineEnd`](../object/OutputStream.html#inputLineEnd) [`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter) [`watchForOutput`](../object/OutputStream.html#watchForOutput) [`writeToStream`](../object/OutputStream.html#writeToStream)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="buf_"></span>

`buf_`

[status.t](../file/status.t.html)\[[109](../source/status.t.html#109)\]



our buffered text



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="flushStream"></span>

`flushStream ( )`

[status.t](../file/status.t.html)\[[99](../source/status.t.html#99)\]



Flush the buffer. This writes whatever we've buffered up to the right
half of the text-mode status line.



<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[status.t](../file/status.t.html)\[[89](../source/status.t.html#89)\]



Write from the stream. We simply buffer up text until we're asked to
display the final data.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


