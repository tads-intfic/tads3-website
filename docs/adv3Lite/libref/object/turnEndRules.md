---
layout: docs
---
<span class="title">turnEndRules</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[75](../source/sysrules.t.html#75)\]

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



The turnEndRules execute the various things that need to happen at the
end of each turn, including the current location's roomDaemon, any
current Fuses and Daemons (via the eventManager), and advancing the turn
counter. Additional rules can be added if game code wants something else
to occur at the end of each turn. \[SYSRULES EXTENSION\]

**`turnEndRules`**` :   `[`RuleBook`](../object/RuleBook.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`turnEndRules`**  
[`RuleBook`](../object/RuleBook.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`contValue`](#contValue) [`priority`](#priority) [`priority`](#priority) [`priority`](#priority) [`priority`](#priority)

Inherited from `RuleBook` :  
[`actor`](../object/RuleBook.html#actor) [`contents`](../object/RuleBook.html#contents) [`defaultVal`](../object/RuleBook.html#defaultVal) [`matchObj`](../object/RuleBook.html#matchObj) [`stopValue`](../object/RuleBook.html#stopValue)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`follow`](#follow) [`follow`](#follow) [`follow`](#follow)

Inherited from `RuleBook` :  
[`addToContents`](../object/RuleBook.html#addToContents) [`initBook`](../object/RuleBook.html#initBook) [`removeFromContents`](../object/RuleBook.html#removeFromContents)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec) [`execute`](../object/ModuleExecObject.html#execute)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="contValue"></span>

`contValue`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[76](../source/sysrules.t.html#76)\]



*no description available*



<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[85](../source/sysrules.t.html#85)\]



*no description available*



<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[96](../source/sysrules.t.html#96)\]



Execute the player character's current location's roomDaemon. \[SYSRULES
EXTENSION\] + roomDaemonRule: Rule follow() {



<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[113](../source/sysrules.t.html#113)\]



If the events.t module is included, execute all current Daemons and
Fuses.



<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[123](../source/sysrules.t.html#123)\]



Advance the turn counter



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[81](../source/sysrules.t.html#81)\]



\[SYSRULES EXTENSION\] By default add a paragraph break before doing
anything else at the end of turn.



<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[104](../source/sysrules.t.html#104)\]



If the events.t module is included, execute all current Daemons and
Fuses \[SYSRULES EXTENSION\]



<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[118](../source/sysrules.t.html#118)\]



Advance the turn counter \[SYSRULES EXTENSION\]
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


