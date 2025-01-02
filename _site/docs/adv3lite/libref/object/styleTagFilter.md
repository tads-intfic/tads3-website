<span class="title">styleTagFilter</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[1087](../source/output.t.html#1087)\]

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

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

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

[output.t](../file/output.t.html)\[[1089](../source/output.t.html#1089)\]

<div class="desc">

pre-compile our frequently-used tag search pattern

</div>

<span id="tagTable"></span>

`tagTable`

[output.t](../file/output.t.html)\[[1197](../source/output.t.html#1197)\]

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

[output.t](../file/output.t.html)\[[1179](../source/output.t.html#1179)\]

<div class="desc">

preinitialization

</div>

<span id="filterText"></span>

`filterText (ostr, val)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1093](../source/output.t.html#1093)\]

<div class="desc">

filter for a style tag

</div>

<span id="translateTag"></span>

`translateTag (tag)`

[output.t](../file/output.t.html)\[[1156](../source/output.t.html#1156)\]

<div class="desc">

Translate a tag

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
