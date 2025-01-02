---
layout: docs
---
<span class="title">apostropheSPreParser</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[5489](../source/english.t.html#5489)\]

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



Possibly a temporary measure to replace the apostrophe in possessives in
certain words in the player's input with a carat in order to enable
matching vocab.

**`apostropheSPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`apostropheSPreParser`**  
[`StringPreParser`](../object/StringPreParser.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`possTab`](#possTab)

Inherited from `StringPreParser` :  
[`isActive`](../object/StringPreParser.html#isActive)[`regList`](../object/StringPreParser.html#regList)[`regListSorted`](../object/StringPreParser.html#regListSorted)[`runOrder`](../object/StringPreParser.html#runOrder)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addEntry`](#addEntry)[`doParsing`](#doParsing)

Inherited from `StringPreParser` :  
[`construct`](../object/StringPreParser.html#construct)[`execute`](../object/StringPreParser.html#execute)[`registerPreParser`](../object/StringPreParser.html#registerPreParser)[`runAll`](../object/StringPreParser.html#runAll)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="possTab"></span>

`possTab`

[english.t](../file/english.t.html)\[[5514](../source/english.t.html#5514)\]



If we haven't created a LookupTable there aren't any words to check for,
so we can just return the string unaltered.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addEntry"></span>

`addEntry (key, val)`

[english.t](../file/english.t.html)\[[5516](../source/english.t.html#5516)\]



*no description available*



<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[5490](../source/english.t.html#5490)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 20/06/2013 from adv3Lite version 0.91


