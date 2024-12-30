[reportRules]{.title}[object]{.type}

[sysrules.t](../file/sysrules.t.html)\[[420](../source/sysrules.t.html#420)\]

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
The reportRules provide a convenient entry point to customize standard
action reports under particular circumstances. \[SYSRULES EXTENSION\]

**`reportRules`**` :   `[`RuleBook`](../object/RuleBook.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`reportRules`**\
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

`// contValue`[OVERRIDDEN]{.rem}[Interface description only]{.rem}

[sysrules.t](../file/sysrules.t.html)\[[432](../source/sysrules.t.html#432)\]

::: desc
This is the one RuleBook where we don\'t define contValue = nil, since
normally we\'ll want the first matching rule to stop execution of the
rulebook.
:::

[]{#currentAction}

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[425](../source/sysrules.t.html#425)\]

::: desc
The current action; this is set by the current action\'s report()
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
