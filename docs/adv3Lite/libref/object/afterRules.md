---
layout: docs
---
<span class="title">afterRules</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[139](../source/sysrules.t.html#139)\]

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



Rulebook to carry out after action notifications. \[SYSRULES EXTENSION\]

**`afterRules`**` :   `[`RuleBook`](../object/RuleBook.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`afterRules`**  
[`RuleBook`](../object/RuleBook.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contValue`](#contValue) [`currentAction`](#currentAction)

Inherited from `RuleBook` :  
[`actor`](../object/RuleBook.html#actor) [`contents`](../object/RuleBook.html#contents) [`defaultVal`](../object/RuleBook.html#defaultVal) [`matchObj`](../object/RuleBook.html#matchObj) [`stopValue`](../object/RuleBook.html#stopValue)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `RuleBook` :  
[`addToContents`](../object/RuleBook.html#addToContents) [`follow`](../object/RuleBook.html#follow) [`initBook`](../object/RuleBook.html#initBook) [`removeFromContents`](../object/RuleBook.html#removeFromContents)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec) [`execute`](../object/ModuleExecObject.html#execute)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contValue"></span>

`contValue`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[140](../source/sysrules.t.html#140)\]



*no description available*



<span id="currentAction"></span>

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[146](../source/sysrules.t.html#146)\]



The current action; this is set by the current action's afterAction()
method.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


