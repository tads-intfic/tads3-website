---
---
<span class="title">objectRelations</span><span class="type">object</span>

[action.t](../file/action.t.html)\[[21](../source/action.t.html#21)\]

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

Object associations lists. We use this object to store some lookup
tables that we build during preinitialization to relate object usages
(DirectObject, IndirectObject) to certain properties.

**`objectRelations`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`objectRelations`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`actionAllProps`](#actionAllProps)`  `[`actionDefaultProps`](#actionDefaultProps)`  `[`checkAllProps`](#checkAllProps)`  `[`checkDefaultProps`](#checkDefaultProps)`  `[`preCondAllProps`](#preCondAllProps)`  `[`preCondDefaultProps`](#preCondDefaultProps)`  `[`verifyAllProps`](#verifyAllProps)`  `[`verifyDefaultProps`](#verifyDefaultProps)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actionAllProps"></span>

`actionAllProps`

[action.t](../file/action.t.html)\[[80](../source/action.t.html#80)\]

<div class="desc">

lookup table for catch-all action properties

</div>

<span id="actionDefaultProps"></span>

`actionDefaultProps`

[action.t](../file/action.t.html)\[[77](../source/action.t.html#77)\]

<div class="desc">

lookup table for default action properties

</div>

<span id="checkAllProps"></span>

`checkAllProps`

[action.t](../file/action.t.html)\[[74](../source/action.t.html#74)\]

<div class="desc">

lookup table for catch-all check properties

</div>

<span id="checkDefaultProps"></span>

`checkDefaultProps`

[action.t](../file/action.t.html)\[[71](../source/action.t.html#71)\]

<div class="desc">

lookup table for default check properties

</div>

<span id="preCondAllProps"></span>

`preCondAllProps`

[action.t](../file/action.t.html)\[[62](../source/action.t.html#62)\]

<div class="desc">

lookup table for catch-all precondition properties

</div>

<span id="preCondDefaultProps"></span>

`preCondDefaultProps`

[action.t](../file/action.t.html)\[[59](../source/action.t.html#59)\]

<div class="desc">

lookup table for default precondition properties

</div>

<span id="verifyAllProps"></span>

`verifyAllProps`

[action.t](../file/action.t.html)\[[68](../source/action.t.html#68)\]

<div class="desc">

lookup table for catch-all verification properties

</div>

<span id="verifyDefaultProps"></span>

`verifyDefaultProps`

[action.t](../file/action.t.html)\[[65](../source/action.t.html#65)\]

<div class="desc">

lookup table for default verification properties

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[23](../source/action.t.html#23)\]

<div class="desc">

preinitialization - build the lookup tables

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
