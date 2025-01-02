---
layout: docs
---
<span class="title">extraHintManager</span><span class="type">object</span>

[hintsys.t](../file/hintsys.t.html)\[[876](../source/hintsys.t.html#876)\]

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

The extraHintManager carries out the work of starting and stopping the
display of ExtraHints, and determing which, if any, ExtraHint is ready
to be displayed.

**`extraHintManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`extraHintManager`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`activated`](#activated)`  `[`contents`](#contents)`  `[`daemonID`](#daemonID)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`activate`](#activate)`  `[`addToContents`](#addToContents)`  `[`cmdStr`](#cmdStr)`  `[`deactivate`](#deactivate)`  `[`execute`](#execute)`  `[`explainExtraHints`](#explainExtraHints)`  `[`extraHintsExist`](#extraHintsExist)`  `[`hintDaemon`](#hintDaemon)`  `[`removeFromContents`](#removeFromContents)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="activated"></span>

`activated`

[hintsys.t](../file/hintsys.t.html)\[[912](../source/hintsys.t.html#912)\]

<div class="desc">

The extraHintManager is activated if it has a running daemon

</div>

<span id="contents"></span>

`contents`

[hintsys.t](../file/hintsys.t.html)\[[929](../source/hintsys.t.html#929)\]

<div class="desc">

*no description available*

</div>

<span id="daemonID"></span>

`daemonID`

[hintsys.t](../file/hintsys.t.html)\[[909](../source/hintsys.t.html#909)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="activate"></span>

`activate ( )`

[hintsys.t](../file/hintsys.t.html)\[[879](../source/hintsys.t.html#879)\]

<div class="desc">

Start the Daemon that checks whether to display any ExtraHints.

</div>

<span id="addToContents"></span>

`addToContents (obj)`

[hintsys.t](../file/hintsys.t.html)\[[931](../source/hintsys.t.html#931)\]

<div class="desc">

*no description available*

</div>

<span id="cmdStr"></span>

`cmdStr (stat)`

[hintsys.t](../file/hintsys.t.html)\[[957](../source/hintsys.t.html#957)\]

<div class="desc">

*no description available*

</div>

<span id="deactivate"></span>

`deactivate ( )`

[hintsys.t](../file/hintsys.t.html)\[[900](../source/hintsys.t.html#900)\]

<div class="desc">

Stop the Daemon that checks whether to display any ExtraHints.

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[936](../source/hintsys.t.html#936)\]

<div class="desc">

Build a list of all ExtraHints in our contents property at PreInit

</div>

<span id="explainExtraHints"></span>

`explainExtraHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[948](../source/hintsys.t.html#948)\]

<div class="desc">

Finally sort the ExtraHints in descending order of priority

</div>

<span id="extraHintsExist"></span>

`extraHintsExist ( )`

[hintsys.t](../file/hintsys.t.html)\[[894](../source/hintsys.t.html#894)\]

<div class="desc">

Even if this module is included, there may be no ExtraHints defined in
the game, in which case we might want to check whether any ExtraHints
exist before offering them to the player.

</div>

<span id="hintDaemon"></span>

`hintDaemon ( )`

[hintsys.t](../file/hintsys.t.html)\[[920](../source/hintsys.t.html#920)\]

<div class="desc">

When we're active we run through every ExtraHint object in our contents
and run its doHint() method till either we run out of ExtraHint objects
or we find one that displays an extra hint, and so returns true.

</div>

<span id="removeFromContents"></span>

`removeFromContents (obj)`

[hintsys.t](../file/hintsys.t.html)\[[933](../source/hintsys.t.html#933)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
