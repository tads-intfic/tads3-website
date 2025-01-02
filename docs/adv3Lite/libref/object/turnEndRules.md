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

<div class="fdesc">

The turnEndRules execute the various things that need to happen at the
end of each turn, including the current location's roomDaemon, any
current Fuses and Daemons (via the eventManager), and advancing the turn
counter. Additional rules can be added if game code wants something else
to occur at the end of each turn. \[SYSRULES EXTENSION\]

**`turnEndRules`**` :   `[`RuleBook`](../object/RuleBook.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`turnEndRules`**  
`         `[`RuleBook`](../object/RuleBook.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`contValue`](#contValue)`  `[`priority`](#priority)`  `[`priority`](#priority)`  `[`priority`](#priority)`  `[`priority`](#priority)`  `

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

` `[`follow`](#follow)`  `[`follow`](#follow)`  `[`follow`](#follow)`  `

Inherited from `RuleBook` :  
` `[`addToContents`](../object/RuleBook.html#addToContents)`  `[`initBook`](../object/RuleBook.html#initBook)`  `[`removeFromContents`](../object/RuleBook.html#removeFromContents)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="contValue"></span>

`contValue`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[76](../source/sysrules.t.html#76)\]

<div class="desc">

*no description available*

</div>

<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[85](../source/sysrules.t.html#85)\]

<div class="desc">

*no description available*

</div>

<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[96](../source/sysrules.t.html#96)\]

<div class="desc">

Execute the player character's current location's roomDaemon. \[SYSRULES
EXTENSION\] + roomDaemonRule: Rule follow() {

</div>

<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[113](../source/sysrules.t.html#113)\]

<div class="desc">

If the events.t module is included, execute all current Daemons and
Fuses.

</div>

<span id="priority"></span>

`priority`

[sysrules.t](../file/sysrules.t.html)\[[123](../source/sysrules.t.html#123)\]

<div class="desc">

Advance the turn counter

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[81](../source/sysrules.t.html#81)\]

<div class="desc">

\[SYSRULES EXTENSION\] By default add a paragraph break before doing
anything else at the end of turn.

</div>

<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[104](../source/sysrules.t.html#104)\]

<div class="desc">

If the events.t module is included, execute all current Daemons and
Fuses \[SYSRULES EXTENSION\]

</div>

<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[118](../source/sysrules.t.html#118)\]

<div class="desc">

Advance the turn counter \[SYSRULES EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
