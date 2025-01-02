---
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

<div class="fdesc">

Pre-parser for special ConvNode-specific commands. When the player
character is talking to another character, and the NPC's current
ConvNode includes topics with their own commands, we'll check the
player's input to see if it matches any of these topics.

**`specialTopicPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`specialTopicPreParser`**  
`         `[`StringPreParser`](../object/StringPreParser.html)  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`aOrTPat`](#aOrTPat)`  `[`punctPat`](#punctPat)`  `

Inherited from `StringPreParser` :  
` `[`regList`](../object/StringPreParser.html#regList)`  `[`regListSorted`](../object/StringPreParser.html#regListSorted)`  `[`runOrder`](../object/StringPreParser.html#runOrder)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`doParsing`](#doParsing)`  `[`processInputStr`](#processInputStr)`  `

Inherited from `StringPreParser` :  
` `[`construct`](../object/StringPreParser.html#construct)`  `[`execute`](../object/StringPreParser.html#execute)`  `[`registerPreParser`](../object/StringPreParser.html#registerPreParser)`  `[`runAll`](../object/StringPreParser.html#runAll)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="aOrTPat"></span>

`aOrTPat`

[en_us.t](../file/en_us.t.html)\[[2731](../source/en_us.t.html#2731)\]

<div class="desc">

pattern for string starting with "A" or "T" verbs

</div>

<span id="punctPat"></span>

`punctPat`

[en_us.t](../file/en_us.t.html)\[[2735](../source/en_us.t.html#2735)\]

<div class="desc">

pattern to eliminate punctuation marks from the string

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1904](../source/actor.t.html#1904)\]

<div class="desc">

*no description available*

</div>

<span id="processInputStr"></span>

`processInputStr (str)`

[actor.t](../file/actor.t.html)\[[1939](../source/actor.t.html#1939)\],
[en_us.t](../file/en_us.t.html)\[[2714](../source/en_us.t.html#2714)\]

<div class="desc">

Process the input string, as desired, for special-topic parsing. This
method is for the language module's use; by default, we do nothing.

Language modules should override this to remove punctuation marks and to
do any other language-dependent processing to make the string parsable.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
