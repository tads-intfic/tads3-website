<span class="title">BannerOutputStream</span><span class="type">class</span>

[banner.t](../file/banner.t.html)\[[461](../source/banner.t.html#461)\]

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

Banner Output Stream. This is a specialization of OutputStream that
writes to a banner window.

`class `**`BannerOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BannerOutputStream`**  
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

` `[`construct`](#construct)`  `[`execute`](#execute)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :  
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="handle_"></span>

`handle_`

[banner.t](../file/banner.t.html)\[[492](../source/banner.t.html#492)\]

<div class="desc">

our system-level banner window handle

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (handle)`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[463](../source/banner.t.html#463)\]

<div class="desc">

construct

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[473](../source/banner.t.html#473)\]

<div class="desc">

execute preinitialization

</div>

<span id="writeFromStream"></span>

`writeFromStream (txt)`<span class="rem">OVERRIDDEN</span>

[banner.t](../file/banner.t.html)\[[485](../source/banner.t.html#485)\]

<div class="desc">

write text from the stream to the interpreter I/O system

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
