---
layout: docs
---
<span class="title">WebWinOutputStream</span><span class="type">class</span>

[browser.t](../file/browser.t.html)\[[777](../source/browser.t.html#777)\]

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



Output stream for web banner windows

`class `**`WebWinOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`WebWinOutputStream`**  
[`OutputStream`](../object/OutputStream.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`win_`](#win_)  `

Inherited from `OutputStream` :  
` [`filterList_`](../object/OutputStream.html#filterList_)  [`justDidPara`](../object/OutputStream.html#justDidPara)  [`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)  [`myInputManager`](../object/OutputStream.html#myInputManager)  [`prefix`](../object/OutputStream.html#prefix)  `

Inherited from `PreinitObject` :  
` [`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)  [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)  `

Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`construct`](#construct)  [`execute`](#execute)  [`writeFromStream`](#writeFromStream)  `

Inherited from `OutputStream` :  
` [`addOutputFilter`](../object/OutputStream.html#addOutputFilter)  [`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)  [`applyFilters`](../object/OutputStream.html#applyFilters)  [`applyTextFilters`](../object/OutputStream.html#applyTextFilters)  [`captureOutput`](../object/OutputStream.html#captureOutput)  [`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)  [`inputLineEnd`](../object/OutputStream.html#inputLineEnd)  [`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)  [`setPrefix`](../object/OutputStream.html#setPrefix)  [`watchForOutput`](../object/OutputStream.html#watchForOutput)  [`writeToStream`](../object/OutputStream.html#writeToStream)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="win_"></span>

`win_`

[browser.t](../file/browser.t.html)\[[799](../source/browser.t.html#799)\]



our status line window



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (win)`<span class="rem">OVERRIDDEN</span>

[browser.t](../file/browser.t.html)\[[779](../source/browser.t.html#779)\]



construct



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[browser.t](../file/browser.t.html)\[[789](../source/browser.t.html#789)\]



ignore preinit - we're always created dynamically



<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[browser.t](../file/browser.t.html)\[[792](../source/browser.t.html#792)\]



write to the underlying window
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


