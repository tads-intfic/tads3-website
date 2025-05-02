---
layout: docs
---
<span class="title">preinitRulesRunner</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[23](../source/sysrules.t.html#23)\]

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



PreinitObject to run PreinitRules for SYSRULES EXTENSION.

**`preinitRulesRunner`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`preinitRulesRunner`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`execBeforeMe`](#execBeforeMe)

Inherited from `PreinitObject` :  
[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="execBeforeMe"></span>

`execBeforeMe`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[32](../source/sysrules.t.html#32)\]



Make sure we've initialized both the library and all the rules before we
try to run our rules.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[24](../source/sysrules.t.html#24)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


