[World]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[10](../source/parser.t.html#10)\]

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
Temporary scaffolding for the game world. This gives us information on
scope, pronoun antecedents, and other information the parser needs from
the game world.

**`World`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`World`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`scope_`](#scope_)`  `[`universalScope`](#universalScope)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`buildUniversalScope`](#buildUniversalScope)`  `[`execute`](#execute)`  `[`scope`](#scope)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#scope_}

`scope_`

[parser.t](../file/parser.t.html)\[[25](../source/parser.t.html#25)\]

::: desc
cached scope list
:::

[]{#universalScope}

`universalScope`

[parser.t](../file/parser.t.html)\[[31](../source/parser.t.html#31)\]

::: desc
A list of all Mentionables in the game, useful for building scope lists
for resolving Topics.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#buildUniversalScope}

`buildUniversalScope ( )`

[parser.t](../file/parser.t.html)\[[33](../source/parser.t.html#33)\]

::: desc
*no description available*
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[40](../source/parser.t.html#40)\]

::: desc
*no description available*
:::

[]{#scope}

`scope ( )`

[parser.t](../file/parser.t.html)\[[14](../source/parser.t.html#14)\]

::: desc
Get the list of objects in scope
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
