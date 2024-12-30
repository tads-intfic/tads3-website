[ThoughtManager]{.title}[class]{.type}

[thoughts.t](../file/thoughts.t.html)\[[20](../source/thoughts.t.html#20)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The base clase for a thought manager object. To use this in a game
create a single object of this class and locate a number of Thought
objects in it (with the + notation) to represent responses to THINK
ABOUT

`class `**`ThoughtManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)`   `[`TopicDatabase`](../object/TopicDatabase.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ThoughtManager`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
`         `[`TopicDatabase`](../object/TopicDatabase.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`noThoughtMsg`](#noThoughtMsg)`  `[`thoughtList`](#thoughtList)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`handleTopic`](#handleTopic)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

Inherited from `TopicDatabase` :\
` `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`getBestMatch`](../object/TopicDatabase.html#getBestMatch)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#noThoughtMsg}

`noThoughtMsg`

[thoughts.t](../file/thoughts.t.html)\[[58](../source/thoughts.t.html#58)\]

::: desc
The message to display when we don\'t find a matching Thought
:::

[]{#thoughtList}

`thoughtList`

[thoughts.t](../file/thoughts.t.html)\[[54](../source/thoughts.t.html#54)\]

::: desc
The list of Thoughts associated with this ThoughtManager object
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[thoughts.t](../file/thoughts.t.html)\[[23](../source/thoughts.t.html#23)\]

::: desc
Carry out the ThoughtManager\'s preinitialization
:::

[]{#handleTopic}

`handleTopic (top)`

[thoughts.t](../file/thoughts.t.html)\[[39](../source/thoughts.t.html#39)\]

::: desc
Handle a THINK ABOUT command.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
