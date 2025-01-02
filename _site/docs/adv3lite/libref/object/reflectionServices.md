<span class="title">reflectionServices</span><span class="type">object</span>

[reflect.t](../file/reflect.t.html)\[[21](../source/reflect.t.html#21)\]

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

Main reflection services object.

During pre-initialization, we'll plug this into the \_main module's
globals so that the \_main module will know it can use reflection
services.

**`reflectionServices`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`reflectionServices`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`reverseSymtab_`](#reverseSymtab_)`  `[`symtab_`](#symtab_)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`formatStackFrame`](#formatStackFrame)`  `[`valToSymbol`](#valToSymbol)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="reverseSymtab_"></span>

`reverseSymtab_`

[reflect.t](../file/reflect.t.html)\[[221](../source/reflect.t.html#221)\]

<div class="desc">

the global reverse-lookup symbol table

</div>

<span id="symtab_"></span>

`symtab_`

[reflect.t](../file/reflect.t.html)\[[218](../source/reflect.t.html#218)\]

<div class="desc">

the global symbol table

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[23](../source/reflect.t.html#23)\]

<div class="desc">

execute preinitialization

</div>

<span id="formatStackFrame"></span>

`formatStackFrame (fr, includeSourcePos)`

[reflect.t](../file/reflect.t.html)\[[132](../source/reflect.t.html#132)\]

<div class="desc">

Format a stack frame object (of class T3StackInfo).

</div>

<span id="valToSymbol"></span>

`valToSymbol (val)`

[reflect.t](../file/reflect.t.html)\[[56](../source/reflect.t.html#56)\]

<div class="desc">

Convert a value to a symbol, or to a string representation if it's not
of a symbolic type.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
