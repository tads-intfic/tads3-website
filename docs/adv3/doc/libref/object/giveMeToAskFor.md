---
---
<span class="title">giveMeToAskFor</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2177](../source/actions.t.html#2177)\]

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

Define a global remapping to transform commands of the form "X, GIVE ME
Y" to the format "ME, ASK X FOR Y". This makes it easier to write the
code to handle these sorts of exchanges, since it means you only have to
write it in the ASK FOR handler.

**`giveMeToAskFor`**` :   `[`GlobalRemapping`](../object/GlobalRemapping.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`giveMeToAskFor`**  
`         `[`GlobalRemapping`](../object/GlobalRemapping.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `GlobalRemapping` :  
` `[`allGlobalRemappings`](../object/GlobalRemapping.html#allGlobalRemappings)`  `[`listNeedsSorting`](../object/GlobalRemapping.html#listNeedsSorting)`  `[`remappingOrder`](../object/GlobalRemapping.html#remappingOrder)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getRemapping`](#getRemapping)`  `

Inherited from `GlobalRemapping` :  
` `[`construct`](../object/GlobalRemapping.html#construct)`  `[`execute`](../object/GlobalRemapping.html#execute)`  `[`findGlobalRemapping`](../object/GlobalRemapping.html#findGlobalRemapping)`  `[`registerGlobalRemapping`](../object/GlobalRemapping.html#registerGlobalRemapping)`  `[`unregisterGlobalRemapping`](../object/GlobalRemapping.html#unregisterGlobalRemapping)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getRemapping"></span>

`getRemapping (issuingActor, targetActor, action)`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2184](../source/actions.t.html#2184)\]

<div class="desc">

Remap a command, if applicable. We look for commands of the form "X,
GIVE ME Y": we look for a GiveTo action whose indirect object is the
same as the issuing actor. When we find this form of command, we rewrite
it to "ME, ASK X FOR Y".

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
