[symVocabPreinit]{.title}[object]{.type}

[symconn.t](../file/symconn.t.html)\[[227](../source/symconn.t.html#227)\]

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
Ensure that the vocab of any SymPassages located in the player
character\'s starting location have the vocab appropriate to the side
from which they\'re viewed.

**`symVocabPreinit`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`symVocabPreinit`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`execBeforeMe`](#execBeforeMe)`  `

Inherited from `PreinitObject` :\
` `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`exec`](#exec)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#execBeforeMe}

`execBeforeMe`[OVERRIDDEN]{.rem}

[symconn.t](../file/symconn.t.html)\[[238](../source/symconn.t.html#238)\]

::: desc
The updateSymVocab() method depends on MultiLocs (which includes
SymPassages) having already been added to their locations\' contents
list, so we need to ensure that the initialization of MultiLocs has been
carried out first.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#exec}

`exec ( )`

[symconn.t](../file/symconn.t.html)\[[228](../source/symconn.t.html#228)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
