[actionTab]{.title}[object]{.type}

[debug.t](../file/debug.t.html)\[[118](../source/debug.t.html#118)\]

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
The actionTab object holds a table providing the names (as strings)
corresponding to the various Action objects, for use with the DEBUG
ACTIONS option.

**`actionTab`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`actionTab`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`ctab`](#ctab)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`symbolToVal`](#symbolToVal)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#ctab}

`ctab`

[debug.t](../file/debug.t.html)\[[130](../source/debug.t.html#130)\]

::: desc
A LookupTable of Actions and their corresponding string names
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[132](../source/debug.t.html#132)\]

::: desc
*no description available*
:::

[]{#symbolToVal}

`symbolToVal (val)`

[debug.t](../file/debug.t.html)\[[124](../source/debug.t.html#124)\]

::: desc
To return the string val corresponding to the Action val, simply look it
up in out ctab table
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
