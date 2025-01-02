---
layout: docs
---
<span class="title">beforeRules</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[245](../source/sysrules.t.html#245)\]

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

The main function of the beforeRules is to carry out our before action
notifications.

**`beforeRules`**` :   `[`RuleBook`](../object/RuleBook.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`beforeRules`**  
`         `[`RuleBook`](../object/RuleBook.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`contValue`](#contValue)`  `[`currentAction`](#currentAction)`  `

Inherited from `RuleBook` :  
` `[`actor`](../object/RuleBook.html#actor)`  `[`contents`](../object/RuleBook.html#contents)`  `[`defaultVal`](../object/RuleBook.html#defaultVal)`  `[`matchObj`](../object/RuleBook.html#matchObj)`  `[`stopValue`](../object/RuleBook.html#stopValue)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `RuleBook` :  
` `[`addToContents`](../object/RuleBook.html#addToContents)`  `[`follow`](../object/RuleBook.html#follow)`  `[`initBook`](../object/RuleBook.html#initBook)`  `[`removeFromContents`](../object/RuleBook.html#removeFromContents)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="contValue"></span>

`contValue`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[246](../source/sysrules.t.html#246)\]

<div class="desc">

*no description available*

</div>

<span id="currentAction"></span>

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[252](../source/sysrules.t.html#252)\]

<div class="desc">

The current action; this is set by the current action's beforeAction()
method.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
