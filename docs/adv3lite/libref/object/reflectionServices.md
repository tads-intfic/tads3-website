---
layout: docs
---
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



Main reflection services object.

During pre-initialization, we'll plug this into the \_main module's
globals so that the \_main module will know it can use reflection
services.

**`reflectionServices`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`reflectionServices`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`reverseSymtab_`](#reverseSymtab_) [`symtab_`](#symtab_)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`formatStackFrame`](#formatStackFrame) [`valToSymbol`](#valToSymbol)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="reverseSymtab_"></span>

`reverseSymtab_`

[reflect.t](../file/reflect.t.html)\[[221](../source/reflect.t.html#221)\]



the global reverse-lookup symbol table



<span id="symtab_"></span>

`symtab_`

[reflect.t](../file/reflect.t.html)\[[218](../source/reflect.t.html#218)\]



the global symbol table



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[reflect.t](../file/reflect.t.html)\[[23](../source/reflect.t.html#23)\]



execute preinitialization



<span id="formatStackFrame"></span>

`formatStackFrame (fr, includeSourcePos)`

[reflect.t](../file/reflect.t.html)\[[132](../source/reflect.t.html#132)\]



Format a stack frame object (of class T3StackInfo).



<span id="valToSymbol"></span>

`valToSymbol (val)`

[reflect.t](../file/reflect.t.html)\[[56](../source/reflect.t.html#56)\]



Convert a value to a symbol, or to a string representation if it's not
of a symbolic type.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


