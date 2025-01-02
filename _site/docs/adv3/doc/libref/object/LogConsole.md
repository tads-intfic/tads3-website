<span class="title">LogConsole</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[1876](../source/output.t.html#1876)\]

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

<div class="fdesc">

Log Console output stream. This is a simple wrapper for the system log
console, which allows console-style output to be captured to a file,
with full processing (HTML expansion, word wrapping, etc) but without
displaying anything to the game window.

This class should always be instantiated with transient instances, since
the underlying system object doesn't participate in save/restore
operations.

`class `**`LogConsole`**` :   `[`OutputStream`](../object/OutputStream.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LogConsole`**  
`         `[`OutputStream`](../object/OutputStream.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`handle_`](#handle_)`  `

Inherited from `OutputStream` :  
` `[`filterList_`](../object/OutputStream.html#filterList_)`  `[`justDidPara`](../object/OutputStream.html#justDidPara)`  `[`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)`  `[`myInputManager`](../object/OutputStream.html#myInputManager)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`captureToFile`](#captureToFile)`  `[`closeConsole`](#closeConsole)`  `[`construct`](#construct)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :  
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`execute`](../object/OutputStream.html#execute)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="handle_"></span>

`handle_`

[output.t](../file/output.t.html)\[[1936](../source/output.t.html#1936)\]

<div class="desc">

our system log console handle

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="captureToFile"></span>

`captureToFile (filename, charset, width, func)`

[output.t](../file/output.t.html)\[[1884](../source/output.t.html#1884)\]

<div class="desc">

Utility method: create a log file, set up to capture all console output
to the log file, run the given callback function, and then close the log
file and restore the console output. This can be used as a simple means
of creating a file that captures the output of a command.

</div>

<span id="closeConsole"></span>

`closeConsole ( )`

[output.t](../file/output.t.html)\[[1919](../source/output.t.html#1919)\]

<div class="desc">

Close the console. This closes the underlying system log console, which
closes the operating system file. No further text can be written to the
console after it's closed.

</div>

<span id="construct"></span>

`construct (filename, charset, width)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1899](../source/output.t.html#1899)\]

<div class="desc">

create a log console

</div>

<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1933](../source/output.t.html#1933)\]

<div class="desc">

low-level stream writer - write to our system log console

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>