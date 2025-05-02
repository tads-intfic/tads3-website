---
layout: docs
---
<span class="title">decimalPreParser</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[5971](../source/english.t.html#5971)\]

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



Preparser to catch numbers entered with a decimal point, so that the
decimal point is not treated as terminating a sentence in the command.
This works by wrapping the number in double quote marks, so any code
that wants to do anything with the decimal number will first have to
strip off the quotes.

**`decimalPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`decimalPreParser`**  
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

[english.t](../file/english.t.html)\[[5972](../source/english.t.html#5972)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


