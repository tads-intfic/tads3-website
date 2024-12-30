[PostRestoreObject]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[3438](../source/action.t.html#3438)\]

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
PostRestoreObject - every instance of this class is notified, via its
execute() method, immediately after we restore the game.

`class `**`PostRestoreObject`**` :   `[`ModuleExecObject`](../object/ModuleExecObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PostRestoreObject`**\
`         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`bannerTracker`](../object/bannerTracker.html)`  `[`inputManager`](../object/inputManager.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`restoreCode`](#restoreCode)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#restoreCode}

`restoreCode`

[action.t](../file/action.t.html)\[[3461](../source/action.t.html#3461)\]

::: desc
The \"restore code,\" which is the (normally integer) value passed as
the second argument to restoreGame(). The restore code gives us some
idea of what triggered the restoration. By default, we define the
following restore codes:

1 - the system is restoring a game as part of interpreter startup,
usually because the user explicitly specified a game to restore on the
interpreter command line or via a GUI shell mechanism, such as
double-clicking on a saved game file from the desktop.

2 - the user is explicitly restoring a game via a RESTORE command.

Games and library extensions can use their own additional restore codes
in their calls to restoreGame().
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
