[menuOutputStream]{.title}[object]{.type}

[menusys.t](../file/menusys.t.html)\[[84](../source/menusys.t.html#84)\]

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
Menu output stream. We run topic contents through this output stream to
allow topics to use the special paragraph and style tag markups.

`transient `**`menuOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`menuOutputStream`**\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`buf_`](#buf_)`  `

Inherited from `OutputStream` :\
` `[`filterList_`](../object/OutputStream.html#filterList_)`  `[`justDidPara`](../object/OutputStream.html#justDidPara)`  `[`justDidParaSuppressor`](../object/OutputStream.html#justDidParaSuppressor)`  `[`myInputManager`](../object/OutputStream.html#myInputManager)`  `[`prefix`](../object/OutputStream.html#prefix)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`captureOutput`](#captureOutput)`  `[`execute`](#execute)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :\
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)`  `[`construct`](../object/OutputStream.html#construct)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`setPrefix`](../object/OutputStream.html#setPrefix)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#buf_}

`buf_`

[menusys.t](../file/menusys.t.html)\[[125](../source/menusys.t.html#125)\]

::: desc
our capture buffer (a StringBuffer object)
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#captureOutput}

`captureOutput (val)`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[90](../source/menusys.t.html#90)\]

::: desc
Process a function call through the stream. If the function generates
any output, we capture it. If the function simply returns text, we run
it through the filters.
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[115](../source/menusys.t.html#115)\]

::: desc
initialize
:::

[]{#writeFromStream}

`writeFromStream (txt)`[OVERRIDDEN]{.rem}

[menusys.t](../file/menusys.t.html)\[[112](../source/menusys.t.html#112)\]

::: desc
we capture our output to a string buffer
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
