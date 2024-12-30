[beforeRules]{.title}[object]{.type}

[sysrules.t](../file/sysrules.t.html)\[[245](../source/sysrules.t.html#245)\]

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
The main function of the beforeRules is to carry out our before action
notifications.

**`beforeRules`**` :   `[`RuleBook`](../object/RuleBook.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`beforeRules`**\
`         `[`RuleBook`](../object/RuleBook.html)\
`                 `[`PreinitObject`](../object/PreinitObject.html)\
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`contValue`](#contValue)`  `[`currentAction`](#currentAction)`  `

Inherited from `RuleBook` :\
` `[`actor`](../object/RuleBook.html#actor)`  `[`contents`](../object/RuleBook.html#contents)`  `[`defaultVal`](../object/RuleBook.html#defaultVal)`  `[`matchObj`](../object/RuleBook.html#matchObj)`  `[`stopValue`](../object/RuleBook.html#stopValue)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

Inherited from `RuleBook` :\
` `[`addToContents`](../object/RuleBook.html#addToContents)`  `[`follow`](../object/RuleBook.html#follow)`  `[`initBook`](../object/RuleBook.html#initBook)`  `[`removeFromContents`](../object/RuleBook.html#removeFromContents)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `[`execute`](../object/ModuleExecObject.html#execute)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#contValue}

`contValue`[OVERRIDDEN]{.rem}

[sysrules.t](../file/sysrules.t.html)\[[246](../source/sysrules.t.html#246)\]

::: desc
*no description available*
:::

[]{#currentAction}

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[252](../source/sysrules.t.html#252)\]

::: desc
The current action; this is set by the current action\'s beforeAction()
method.
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
