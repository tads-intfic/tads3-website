[extraHintManager]{.title}[object]{.type}

[hintsys.t](../file/hintsys.t.html)\[[876](../source/hintsys.t.html#876)\]

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
The extraHintManager carries out the work of starting and stopping the
display of ExtraHints, and determing which, if any, ExtraHint is ready
to be displayed.

**`extraHintManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`extraHintManager`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`activated`](#activated)`  `[`contents`](#contents)`  `[`daemonID`](#daemonID)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`activate`](#activate)`  `[`addToContents`](#addToContents)`  `[`cmdStr`](#cmdStr)`  `[`deactivate`](#deactivate)`  `[`execute`](#execute)`  `[`explainExtraHints`](#explainExtraHints)`  `[`extraHintsExist`](#extraHintsExist)`  `[`hintDaemon`](#hintDaemon)`  `[`removeFromContents`](#removeFromContents)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#activated}

`activated`

[hintsys.t](../file/hintsys.t.html)\[[912](../source/hintsys.t.html#912)\]

::: desc
The extraHintManager is activated if it has a running daemon
:::

[]{#contents}

`contents`

[hintsys.t](../file/hintsys.t.html)\[[929](../source/hintsys.t.html#929)\]

::: desc
*no description available*
:::

[]{#daemonID}

`daemonID`

[hintsys.t](../file/hintsys.t.html)\[[909](../source/hintsys.t.html#909)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#activate}

`activate ( )`

[hintsys.t](../file/hintsys.t.html)\[[879](../source/hintsys.t.html#879)\]

::: desc
Start the Daemon that checks whether to display any ExtraHints.
:::

[]{#addToContents}

`addToContents (obj)`

[hintsys.t](../file/hintsys.t.html)\[[931](../source/hintsys.t.html#931)\]

::: desc
*no description available*
:::

[]{#cmdStr}

`cmdStr (stat)`

[hintsys.t](../file/hintsys.t.html)\[[957](../source/hintsys.t.html#957)\]

::: desc
*no description available*
:::

[]{#deactivate}

`deactivate ( )`

[hintsys.t](../file/hintsys.t.html)\[[900](../source/hintsys.t.html#900)\]

::: desc
Stop the Daemon that checks whether to display any ExtraHints.
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[hintsys.t](../file/hintsys.t.html)\[[936](../source/hintsys.t.html#936)\]

::: desc
Build a list of all ExtraHints in our contents property at PreInit
:::

[]{#explainExtraHints}

`explainExtraHints ( )`

[hintsys.t](../file/hintsys.t.html)\[[948](../source/hintsys.t.html#948)\]

::: desc
Finally sort the ExtraHints in descending order of priority
:::

[]{#extraHintsExist}

`extraHintsExist ( )`

[hintsys.t](../file/hintsys.t.html)\[[894](../source/hintsys.t.html#894)\]

::: desc
Even if this module is included, there may be no ExtraHints defined in
the game, in which case we might want to check whether any ExtraHints
exist before offering them to the player.
:::

[]{#hintDaemon}

`hintDaemon ( )`

[hintsys.t](../file/hintsys.t.html)\[[920](../source/hintsys.t.html#920)\]

::: desc
When we\'re active we run through every ExtraHint object in our contents
and run its doHint() method till either we run out of ExtraHint objects
or we find one that displays an extra hint, and so returns true.
:::

[]{#removeFromContents}

`removeFromContents (obj)`

[hintsys.t](../file/hintsys.t.html)\[[933](../source/hintsys.t.html#933)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
