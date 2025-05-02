---
layout: docs
---
<span class="title">symVocabPreinit</span><span class="type">object</span>

[symconn.t](../file/symconn.t.html)\[[227](../source/symconn.t.html#227)\]

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



Ensure that the vocab of any SymPassages located in the player
character's starting location have the vocab appropriate to the side
from which they're viewed.

**`symVocabPreinit`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`symVocabPreinit`**  
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



[`exec`](#exec)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec) [`execute`](../object/ModuleExecObject.html#execute)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="execBeforeMe"></span>

`execBeforeMe`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[238](../source/symconn.t.html#238)\]



The updateSymVocab() method depends on MultiLocs (which includes
SymPassages) having already been added to their locations' contents
list, so we need to ensure that the initialization of MultiLocs has been
carried out first.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="exec"></span>

`exec ( )`

[symconn.t](../file/symconn.t.html)\[[228](../source/symconn.t.html#228)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


