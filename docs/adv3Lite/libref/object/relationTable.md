---
layout: docs
---
<span class="title">relationTable</span><span class="type">object</span>

[relations.t](../file/relations.t.html)\[[439](../source/relations.t.html#439)\]

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



Used internally by the RELATIONS EXTENSION to keep track of which
relations correspond to which (string) names.

**`relationTable`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`relationTable`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`nameTab`](#nameTab)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`getRelation`](#getRelation) [`sayNoSuchRelation`](#sayNoSuchRelation)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="nameTab"></span>

`nameTab`

[relations.t](../file/relations.t.html)\[[446](../source/relations.t.html#446)\]



LookupTable to restore data relating names to relations. Each key is a
string containing a relation name. Each corresponding value is a
two-item list \[rel, type\] where rel is the name of the corresponding
relation object and type is either normalRelation or reverseRelation.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[relations.t](../file/relations.t.html)\[[452](../source/relations.t.html#452)\]



Go through all the relations in the game and add their names and
reverseNames to our nameTab.



<span id="getRelation"></span>

`getRelation (rel)`

[relations.t](../file/relations.t.html)\[[470](../source/relations.t.html#470)\]



Get the relation corresponding to a string version of its name. Return a
two-item list \[rel, type\] where rel is the name of the corresponding
relation object and type is either normalRelation or reverseRelation. \*



<span id="sayNoSuchRelation"></span>

`sayNoSuchRelation (rel)`

[relations.t](../file/relations.t.html)\[[485](../source/relations.t.html#485)\]



Message to display when there's no relation in our nameTab corresponding
to the name rel.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


