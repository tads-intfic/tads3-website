---
layout: docs
---
<span class="title">queryPreParser</span><span class="type">object</span>

[grammar.t](../file/grammar.t.html)\[[1824](../source/grammar.t.html#1824)\]

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



For queries, turn an apostrophe-s form into the underlying qtype plus is
so that the grammar defined immediately above can be matched.

**`queryPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`queryPreParser`**  
[`StringPreParser`](../object/StringPreParser.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `StringPreParser` :  
[`isActive`](../object/StringPreParser.html#isActive) [`regList`](../object/StringPreParser.html#regList) [`regListSorted`](../object/StringPreParser.html#regListSorted) [`runOrder`](../object/StringPreParser.html#runOrder)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doParsing`](#doParsing)

Inherited from `StringPreParser` :  
[`construct`](../object/StringPreParser.html#construct) [`execute`](../object/StringPreParser.html#execute) [`registerPreParser`](../object/StringPreParser.html#registerPreParser) [`runAll`](../object/StringPreParser.html#runAll)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[grammar.t](../file/grammar.t.html)\[[1825](../source/grammar.t.html#1825)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


