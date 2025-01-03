---
layout: docs
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



Object associations lists. We use this object to store some lookup
tables that we build during preinitialization to relate object usages
(DirectObject, IndirectObject) to certain properties.

**`objectRelations`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`objectRelations`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actionAllProps`](#actionAllProps) [`actionDefaultProps`](#actionDefaultProps) [`checkAllProps`](#checkAllProps) [`checkDefaultProps`](#checkDefaultProps) [`preCondAllProps`](#preCondAllProps) [`preCondDefaultProps`](#preCondDefaultProps) [`verifyAllProps`](#verifyAllProps) [`verifyDefaultProps`](#verifyDefaultProps)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actionAllProps"></span>

`actionAllProps`

[action.t](../file/action.t.html)\[[80](../source/action.t.html#80)\]



lookup table for catch-all action properties



<span id="actionDefaultProps"></span>

`actionDefaultProps`

[action.t](../file/action.t.html)\[[77](../source/action.t.html#77)\]



lookup table for default action properties



<span id="checkAllProps"></span>

`checkAllProps`

[action.t](../file/action.t.html)\[[74](../source/action.t.html#74)\]



lookup table for catch-all check properties



<span id="checkDefaultProps"></span>

`checkDefaultProps`

[action.t](../file/action.t.html)\[[71](../source/action.t.html#71)\]



lookup table for default check properties



<span id="preCondAllProps"></span>

`preCondAllProps`

[action.t](../file/action.t.html)\[[62](../source/action.t.html#62)\]



lookup table for catch-all precondition properties



<span id="preCondDefaultProps"></span>

`preCondDefaultProps`

[action.t](../file/action.t.html)\[[59](../source/action.t.html#59)\]



lookup table for default precondition properties



<span id="verifyAllProps"></span>

`verifyAllProps`

[action.t](../file/action.t.html)\[[68](../source/action.t.html#68)\]



lookup table for catch-all verification properties



<span id="verifyDefaultProps"></span>

`verifyDefaultProps`

[action.t](../file/action.t.html)\[[65](../source/action.t.html#65)\]



lookup table for default verification properties



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[23](../source/action.t.html#23)\]



preinitialization - build the lookup tables
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


