[FiatLux]{.title}[object]{.type}

[debug.t](../file/debug.t.html)\[[192](../source/debug.t.html#192)\]

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
The FIAT LUX Action can be used to light up the player character (thus
bringing light to a dark location). Repeating the FIAT LUX action
removes the light from the player character

**`FiatLux`**` :   `[`IAction`](../object/IAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FiatLux`**\
`         `[`IAction`](../object/IAction.html)\
`                 `[`Action`](../object/Action.html)\
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                 `[`Redirector`](../object/Redirector.html)\
`                                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `IAction` :\
` `[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`beforeAction`](#beforeAction)`  `[`execAction`](#execAction)`  `[`turnSequence`](#turnSequence)`  `

Inherited from `IAction` :\
` `[`execCycle`](../object/IAction.html#execCycle)`  `[`execResolvedAction`](../object/IAction.html#execResolvedAction)`  `[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)`  `[`scoreObjects`](../object/IAction.html#scoreObjects)`  `[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#beforeAction}

`beforeAction ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[200](../source/debug.t.html#200)\]

::: desc
*no description available*
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[193](../source/debug.t.html#193)\]

::: desc
*no description available*
:::

[]{#turnSequence}

`turnSequence ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[201](../source/debug.t.html#201)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
