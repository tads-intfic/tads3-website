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

<div class="fdesc">

"Style tag" filter. This is an output filter that expands our special
style tags in output text.

**`styleTagFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)`   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`styleTagFilter`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`tagPattern`](#tagPattern)`  `[`tagTable`](#tagTable)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`filterText`](#filterText)`  `[`translateTag`](#translateTag)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="tagPattern"></span>

`tagPattern`

[output.t](../file/output.t.html)\[[927](../source/output.t.html#927)\]

<div class="desc">

pre-compile our frequently-used tag search pattern

</div>

<span id="tagTable"></span>

`tagTable`

[output.t](../file/output.t.html)\[[1035](../source/output.t.html#1035)\]

<div class="desc">

Our tag translation table. We'll initialize this during preinit to a
lookup table with all of the defined StyleTag objects.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1017](../source/output.t.html#1017)\]

<div class="desc">

preinitialization

</div>

<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[931](../source/output.t.html#931)\]

<div class="desc">

filter for a style tag

</div>

<span id="translateTag"></span>

`translateTag (tag)`

[output.t](../file/output.t.html)\[[994](../source/output.t.html#994)\]

<div class="desc">

Translate a tag

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
