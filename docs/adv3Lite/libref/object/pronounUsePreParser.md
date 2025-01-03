---
layout: docs
---
<span class="title">pronounUsePreParser</span><span class="type">object</span>

[newbie.t](../file/newbie.t.html)\[[513](../source/newbie.t.html#513)\]

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



Trap commands that start with a pronoun (e.g. I AM LOST or YOU ARE
SILLY) and advise the player that they are likely to be unproductive,
suggesting the format of commands that are more likely to work.

Note that we have to make exceptions that allow valid commands starting
with I where I is an abbreviation for INVENTORY, such as I itself, I
TALL and I WIDE. We also have to make exceptions when a conversation is
in progress, since the command could be a valid SayTopic.

**`pronounUsePreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`pronounUsePreParser`**  
[`StringPreParser`](../object/StringPreParser.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`pat`](#pat)  [`pat2`](#pat2)  [`pat3`](#pat3)  `

Inherited from `StringPreParser` :  
` [`isActive`](../object/StringPreParser.html#isActive)  [`regList`](../object/StringPreParser.html#regList)  [`regListSorted`](../object/StringPreParser.html#regListSorted)  [`runOrder`](../object/StringPreParser.html#runOrder)  `

Inherited from `PreinitObject` :  
` [`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)  [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)  `

Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`doParsing`](#doParsing)  `

Inherited from `StringPreParser` :  
` [`construct`](../object/StringPreParser.html#construct)  [`execute`](../object/StringPreParser.html#execute)  [`registerPreParser`](../object/StringPreParser.html#registerPreParser)  [`runAll`](../object/StringPreParser.html#runAll)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="pat"></span>

`pat`

[newbie.t](../file/newbie.t.html)\[[535](../source/newbie.t.html#535)\]



*no description available*



<span id="pat2"></span>

`pat2`

[newbie.t](../file/newbie.t.html)\[[538](../source/newbie.t.html#538)\]



*no description available*



<span id="pat3"></span>

`pat3`

[newbie.t](../file/newbie.t.html)\[[540](../source/newbie.t.html#540)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[newbie.t](../file/newbie.t.html)\[[514](../source/newbie.t.html#514)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


