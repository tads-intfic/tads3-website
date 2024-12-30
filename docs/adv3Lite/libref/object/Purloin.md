[Purloin]{.title}[object]{.type}

[debug.t](../file/debug.t.html)\[[151](../source/debug.t.html#151)\]

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
The Purloin Action allows a game author to take any object in the game
while testing

**`Purloin`**` :   `[`TAction`](../object/TAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Purloin`**\
`         `[`TAction`](../object/TAction.html)\
`                 `[`Action`](../object/Action.html)\
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                 `[`Redirector`](../object/Redirector.html)\
`                                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`againRepeatsParse`](#againRepeatsParse)`  `[`unhides`](#unhides)`  `

Inherited from `TAction` :\
` `[`actionList`](../object/TAction.html#actionList)`  `[`announceMultiAction`](../object/TAction.html#announceMultiAction)`  `[`announceMultiCheck`](../object/TAction.html#announceMultiCheck)`  `[`announceMultiVerify`](../object/TAction.html#announceMultiVerify)`  `[`aqinfo`](../object/TAction.html#aqinfo)`  `[`curDobj`](../object/TAction.html#curDobj)`  `[`curObj`](../object/TAction.html#curObj)`  `[`dqinfo`](../object/TAction.html#dqinfo)`  `[`gActor`](../object/TAction.html#gActor)`  `[`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck)`  `[`iqinfo`](../object/TAction.html#iqinfo)`  `[`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg)`  `[`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess)`  `[`reportList`](../object/TAction.html#reportList)`  `[`signal`](../object/TAction.html#signal)`  `[`verifyTab`](../object/TAction.html#verifyTab)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addExtraScopeItems`](#addExtraScopeItems)`  `[`afterAction`](#afterAction)`  `[`beforeAction`](#beforeAction)`  `[`turnSequence`](#turnSequence)`  `

Inherited from `TAction` :\
` `[`addVerifyResult`](../object/TAction.html#addVerifyResult)`  `[`check`](../object/TAction.html#check)`  `[`checkAction`](../object/TAction.html#checkAction)`  `[`checkPreCond`](../object/TAction.html#checkPreCond)`  `[`doAction`](../object/TAction.html#doAction)`  `[`doActionOnce`](../object/TAction.html#doActionOnce)`  `[`execAction`](../object/TAction.html#execAction)`  `[`execCycle`](../object/TAction.html#execCycle)`  `[`execResolvedAction`](../object/TAction.html#execResolvedAction)`  `[`getAll`](../object/TAction.html#getAll)`  `[`getMessageParam`](../object/TAction.html#getMessageParam)`  `[`getVerbPhrase`](../object/TAction.html#getVerbPhrase)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)`  `[`reportAction`](../object/TAction.html#reportAction)`  `[`reset`](../object/TAction.html#reset)`  `[`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope)`  `[`setResolvedObjects`](../object/TAction.html#setResolvedObjects)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#againRepeatsParse}

`againRepeatsParse`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[152](../source/debug.t.html#152)\]

::: desc
*no description available*
:::

[]{#unhides}

`unhides`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[164](../source/debug.t.html#164)\]

::: desc
The Purloin action should work even on a hidden item
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addExtraScopeItems}

`addExtraScopeItems (whichRole?)`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[155](../source/debug.t.html#155)\]

::: desc
The PURLOIN action requires universal scope
:::

[]{#afterAction}

`afterAction ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[160](../source/debug.t.html#160)\]

::: desc
*no description available*
:::

[]{#beforeAction}

`beforeAction ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[159](../source/debug.t.html#159)\]

::: desc
*no description available*
:::

[]{#turnSequence}

`turnSequence ( )`[OVERRIDDEN]{.rem}

[debug.t](../file/debug.t.html)\[[161](../source/debug.t.html#161)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
