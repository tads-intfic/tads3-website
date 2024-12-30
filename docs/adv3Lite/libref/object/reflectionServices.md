[reflectionServices]{.title}[object]{.type}

[reflect.t](../file/reflect.t.html)\[[21](../source/reflect.t.html#21)\]

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
Main reflection services object.

During pre-initialization, we\'ll plug this into the \_main module\'s
globals so that the \_main module will know it can use reflection
services.

**`reflectionServices`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`reflectionServices`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`reverseSymtab_`](#reverseSymtab_)`  `[`symtab_`](#symtab_)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`formatStackFrame`](#formatStackFrame)`  `[`valToSymbol`](#valToSymbol)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#reverseSymtab_}

`reverseSymtab_`

[reflect.t](../file/reflect.t.html)\[[221](../source/reflect.t.html#221)\]

::: desc
the global reverse-lookup symbol table
:::

[]{#symtab_}

`symtab_`

[reflect.t](../file/reflect.t.html)\[[218](../source/reflect.t.html#218)\]

::: desc
the global symbol table
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[reflect.t](../file/reflect.t.html)\[[23](../source/reflect.t.html#23)\]

::: desc
execute preinitialization
:::

[]{#formatStackFrame}

`formatStackFrame (fr, includeSourcePos)`

[reflect.t](../file/reflect.t.html)\[[132](../source/reflect.t.html#132)\]

::: desc
Format a stack frame object (of class T3StackInfo).
:::

[]{#valToSymbol}

`valToSymbol (val)`

[reflect.t](../file/reflect.t.html)\[[56](../source/reflect.t.html#56)\]

::: desc
Convert a value to a symbol, or to a string representation if it\'s not
of a symbolic type.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
