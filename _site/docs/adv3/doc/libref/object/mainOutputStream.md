<span class="title">mainOutputStream</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[409](../source/output.t.html#409)\]

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

<div class="fdesc">

The OutputStream for the main text area.

This object is transient because the output stream state is effectively
part of the interpreter user interface, which is not affected by save
and restore.

`transient `**`mainOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`mainOutputStream`**  
`         `[`OutputStream`](../object/OutputStream.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curTranscript`](#curTranscript)`  `[`myInputManager`](#myInputManager)`  `

Inherited from `OutputStream` :  
` `[`filterList_`](../object/OutputStream.html#filterList_)`  `[`justDidPara`](../object/OutputStream.html#justDidPara)`  `[`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :  
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`construct`](../object/OutputStream.html#construct)`  `[`execute`](../object/OutputStream.html#execute)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curTranscript"></span>

`curTranscript`

[output.t](../file/output.t.html)\[[418](../source/output.t.html#418)\]

<div class="desc">

the current command transcript

</div>

<span id="myInputManager"></span>

`myInputManager`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[415](../source/output.t.html#415)\]

<div class="desc">

The main text area is the same place where we normally read command
lines from the keyboard, so associate this output stream with the
primary input manager.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[421](../source/output.t.html#421)\]

<div class="desc">

we sit atop the system-level main console output stream

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
