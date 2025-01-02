---
layout: docs
---
<span class="title">World</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[10](../source/parser.t.html#10)\]

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

Temporary scaffolding for the game world. This gives us information on
scope, pronoun antecedents, and other information the parser needs from
the game world.

**`World`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`World`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` [`scope_`](#scope_)  [`universalScope`](#universalScope)  `

Inherited from `PreinitObject` :  
` [`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)  [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)  `

Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` [`buildUniversalScope`](#buildUniversalScope)  [`execute`](#execute)  [`scope`](#scope)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="scope_"></span>

`scope_`

[parser.t](../file/parser.t.html)\[[25](../source/parser.t.html#25)\]

<div class="desc">

cached scope list

</div>

<span id="universalScope"></span>

`universalScope`

[parser.t](../file/parser.t.html)\[[31](../source/parser.t.html#31)\]

<div class="desc">

A list of all Mentionables in the game, useful for building scope lists
for resolving Topics.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="buildUniversalScope"></span>

`buildUniversalScope ( )`

[parser.t](../file/parser.t.html)\[[33](../source/parser.t.html#33)\]

<div class="desc">

*no description available*

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[40](../source/parser.t.html#40)\]

<div class="desc">

*no description available*

</div>

<span id="scope"></span>

`scope ( )`

[parser.t](../file/parser.t.html)\[[14](../source/parser.t.html#14)\]

<div class="desc">

Get the list of objects in scope

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
