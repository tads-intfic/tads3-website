---
layout: docs
---
<span class="title">ThoughtManager</span><span class="type">class</span>

[thoughts.t](../file/thoughts.t.html)\[[20](../source/thoughts.t.html#20)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



The base clase for a thought manager object. To use this in a game
create a single object of this class and locate a number of Thought
objects in it (with the + notation) to represent responses to THINK
ABOUT

`class `**`ThoughtManager`**` :   [`PreinitObject`](../object/PreinitObject.html)   `[`TopicDatabase`](../object/TopicDatabase.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ThoughtManager`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`noThoughtMsg`](#noThoughtMsg)  [`thoughtList`](#thoughtList)  `

Inherited from `PreinitObject` :  
` [`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)  [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)  `

Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`execute`](#execute)  [`handleTopic`](#handleTopic)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  `

Inherited from `TopicDatabase` :  
` [`addTopic`](../object/TopicDatabase.html#addTopic)  [`getBestMatch`](../object/TopicDatabase.html#getBestMatch)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="noThoughtMsg"></span>

`noThoughtMsg`

[thoughts.t](../file/thoughts.t.html)\[[58](../source/thoughts.t.html#58)\]



The message to display when we don't find a matching Thought



<span id="thoughtList"></span>

`thoughtList`

[thoughts.t](../file/thoughts.t.html)\[[54](../source/thoughts.t.html#54)\]



The list of Thoughts associated with this ThoughtManager object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[thoughts.t](../file/thoughts.t.html)\[[23](../source/thoughts.t.html#23)\]



Carry out the ThoughtManager's preinitialization



<span id="handleTopic"></span>

`handleTopic (top)`

[thoughts.t](../file/thoughts.t.html)\[[39](../source/thoughts.t.html#39)\]



Handle a THINK ABOUT command.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


