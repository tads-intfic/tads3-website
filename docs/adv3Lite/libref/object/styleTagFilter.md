[styleTagFilter]{.title}[object]{.type}

[output.t](../file/output.t.html)\[[1087](../source/output.t.html#1087)\]

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
\"Style tag\" filter. This is an output filter that expands our special
style tags in output text.

**`styleTagFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)`   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`styleTagFilter`**\
`         `[`OutputFilter`](../object/OutputFilter.html)\
`                 object`\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`tagPattern`](#tagPattern)`  `[`tagTable`](#tagTable)`  `

` `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execute`](#execute)`  `[`filterText`](#filterText)`  `[`translateTag`](#translateTag)`  `

` `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#tagPattern}

`tagPattern`

[output.t](../file/output.t.html)\[[1089](../source/output.t.html#1089)\]

::: desc
pre-compile our frequently-used tag search pattern
:::

[]{#tagTable}

`tagTable`

[output.t](../file/output.t.html)\[[1197](../source/output.t.html#1197)\]

::: desc
Our tag translation table. We\'ll initialize this during preinit to a
lookup table with all of the defined StyleTag objects.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[1179](../source/output.t.html#1179)\]

::: desc
preinitialization
:::

[]{#filterText}

`filterText (ostr, val)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[1093](../source/output.t.html#1093)\]

::: desc
filter for a style tag
:::

[]{#translateTag}

`translateTag (tag)`

[output.t](../file/output.t.html)\[[1156](../source/output.t.html#1156)\]

::: desc
Translate a tag
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
