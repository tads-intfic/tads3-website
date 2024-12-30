[emanationControl]{.title}[object]{.type}

[sensory.t](../file/sensory.t.html)\[[353](../source/sensory.t.html#353)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The object which drives emanation messages for Odors and Noises
\[DEFINED IN SENSORY EXTENSION\]

**`emanationControl`**` :   `[`InitObject`](../object/InitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`emanationControl`**\
`         `[`InitObject`](../object/InitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

` `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`canSense`](#canSense)`  `[`emanate`](#emanate)`  `[`execute`](#execute)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#canSense}

`canSense (pc, o)`

[sensory.t](../file/sensory.t.html)\[[432](../source/sensory.t.html#432)\]

::: desc
The pc can sense o if o is currently emanating and its a Noise the pc
can currently hear or an Odor the pc can currently smell. \[DEFINED IN
SENSORY EXTENSION\]
:::

[]{#emanate}

`emanate ( )`

[sensory.t](../file/sensory.t.html)\[[364](../source/sensory.t.html#364)\]

::: desc
Each turn, execute the emanate() method for every item in our list of
emanations. \[DEFINED IN SENSORY EXTENSION\]
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[sensory.t](../file/sensory.t.html)\[[355](../source/sensory.t.html#355)\]

::: desc
Set up our Daemon at the start of play. \[DEFINED IN SENSORY EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
