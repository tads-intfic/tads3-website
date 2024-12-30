[WebWinOutputStream]{.title}[class]{.type}

[browser.t](../file/browser.t.html)\[[777](../source/browser.t.html#777)\]

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
Output stream for web banner windows

`class `**`WebWinOutputStream`**` :   `[`OutputStream`](../object/OutputStream.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`WebWinOutputStream`**\
`         `[`OutputStream`](../object/OutputStream.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
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

` `[`win_`](#win_)`  `

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

` `[`construct`](#construct)`  `[`execute`](#execute)`  `[`writeFromStream`](#writeFromStream)`  `

Inherited from `OutputStream` :\
` `[`addOutputFilter`](../object/OutputStream.html#addOutputFilter)`  `[`addOutputFilterBelow`](../object/OutputStream.html#addOutputFilterBelow)`  `[`applyFilters`](../object/OutputStream.html#applyFilters)`  `[`applyTextFilters`](../object/OutputStream.html#applyTextFilters)`  `[`captureOutput`](../object/OutputStream.html#captureOutput)`  `[`captureOutputIgnoreExit`](../object/OutputStream.html#captureOutputIgnoreExit)`  `[`inputLineEnd`](../object/OutputStream.html#inputLineEnd)`  `[`removeOutputFilter`](../object/OutputStream.html#removeOutputFilter)`  `[`setPrefix`](../object/OutputStream.html#setPrefix)`  `[`watchForOutput`](../object/OutputStream.html#watchForOutput)`  `[`writeToStream`](../object/OutputStream.html#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#win_}

`win_`

[browser.t](../file/browser.t.html)\[[799](../source/browser.t.html#799)\]

::: desc
our status line window
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (win)`[OVERRIDDEN]{.rem}

[browser.t](../file/browser.t.html)\[[779](../source/browser.t.html#779)\]

::: desc
construct
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[browser.t](../file/browser.t.html)\[[789](../source/browser.t.html#789)\]

::: desc
ignore preinit - we\'re always created dynamically
:::

[]{#writeFromStream}

`writeFromStream (txt)`[OVERRIDDEN]{.rem}

[browser.t](../file/browser.t.html)\[[792](../source/browser.t.html#792)\]

::: desc
write to the underlying window
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
