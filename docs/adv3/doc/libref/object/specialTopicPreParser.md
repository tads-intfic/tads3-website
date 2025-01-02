---
layout: docs
---
<span class="title">specialTopicPreParser</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[1903](../source/actor.t.html#1903)\]

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



Pre-parser for special ConvNode-specific commands. When the player
character is talking to another character, and the NPC's current
ConvNode includes topics with their own commands, we'll check the
player's input to see if it matches any of these topics.

**`specialTopicPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`specialTopicPreParser`**  
[`StringPreParser`](../object/StringPreParser.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`aOrTPat`](#aOrTPat) [`punctPat`](#punctPat)

Inherited from `StringPreParser` :  
[`regList`](../object/StringPreParser.html#regList) [`regListSorted`](../object/StringPreParser.html#regListSorted) [`runOrder`](../object/StringPreParser.html#runOrder)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doParsing`](#doParsing) [`processInputStr`](#processInputStr)

Inherited from `StringPreParser` :  
[`construct`](../object/StringPreParser.html#construct) [`execute`](../object/StringPreParser.html#execute) [`registerPreParser`](../object/StringPreParser.html#registerPreParser) [`runAll`](../object/StringPreParser.html#runAll)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="aOrTPat"></span>

`aOrTPat`

[en_us.t](../file/en_us.t.html)\[[2731](../source/en_us.t.html#2731)\]



pattern for string starting with "A" or "T" verbs



<span id="punctPat"></span>

`punctPat`

[en_us.t](../file/en_us.t.html)\[[2735](../source/en_us.t.html#2735)\]



pattern to eliminate punctuation marks from the string



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1904](../source/actor.t.html#1904)\]



*no description available*



<span id="processInputStr"></span>

`processInputStr (str)`

[actor.t](../file/actor.t.html)\[[1939](../source/actor.t.html#1939)\],
[en_us.t](../file/en_us.t.html)\[[2714](../source/en_us.t.html#2714)\]



Process the input string, as desired, for special-topic parsing. This
method is for the language module's use; by default, we do nothing.

Language modules should override this to remove punctuation marks and to
do any other language-dependent processing to make the string parsable.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


