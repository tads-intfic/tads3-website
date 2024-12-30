[TakeFrom]{.title}[object]{.type}

[actions.t](../file/actions.t.html)\[[1350](../source/actions.t.html#1350)\]

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
*no description available*

**`TakeFrom`**` :   `[`TIAction`](../object/TIAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TakeFrom`**\
`         `[`TIAction`](../object/TIAction.html)\
`                 `[`TAction`](../object/TAction.html)\
`                         `[`Action`](../object/Action.html)\
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                         `[`Redirector`](../object/Redirector.html)\
`                                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`allowAll`](#allowAll)`  `

Inherited from `TIAction` :\
` `[`actionIobjProp`](../object/TIAction.html#actionIobjProp)`  `[`checkIobjProp`](../object/TIAction.html#checkIobjProp)`  `[`curIobj`](../object/TIAction.html#curIobj)`  `[`ioActionList`](../object/TIAction.html#ioActionList)`  `[`preCondIobjProp`](../object/TIAction.html#preCondIobjProp)`  `[`resolveIobjFirst`](../object/TIAction.html#resolveIobjFirst)`  `[`verIobjProp`](../object/TIAction.html#verIobjProp)`  `

Inherited from `TAction` :\
` `[`actionList`](../object/TAction.html#actionList)`  `[`announceMultiAction`](../object/TAction.html#announceMultiAction)`  `[`announceMultiCheck`](../object/TAction.html#announceMultiCheck)`  `[`announceMultiVerify`](../object/TAction.html#announceMultiVerify)`  `[`aqinfo`](../object/TAction.html#aqinfo)`  `[`curDobj`](../object/TAction.html#curDobj)`  `[`curObj`](../object/TAction.html#curObj)`  `[`dqinfo`](../object/TAction.html#dqinfo)`  `[`gActor`](../object/TAction.html#gActor)`  `[`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck)`  `[`iqinfo`](../object/TAction.html#iqinfo)`  `[`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg)`  `[`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess)`  `[`reportList`](../object/TAction.html#reportList)`  `[`signal`](../object/TAction.html#signal)`  `[`verifyTab`](../object/TAction.html#verifyTab)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`exec`](#exec)`  `[`getAll`](#getAll)`  `[`reportAction`](#reportAction)`  `

Inherited from `TIAction` :\
` `[`checkAction`](../object/TIAction.html#checkAction)`  `[`doActionOnce`](../object/TIAction.html#doActionOnce)`  `[`execAction`](../object/TIAction.html#execAction)`  `[`execResolvedAction`](../object/TIAction.html#execResolvedAction)`  `[`getMessageParam`](../object/TIAction.html#getMessageParam)`  `[`getVerbPhrase`](../object/TIAction.html#getVerbPhrase)`  `[`getVerbPhrase2`](../object/TIAction.html#getVerbPhrase2)`  `[`reset`](../object/TIAction.html#reset)`  `[`resolvedObjectsInScope`](../object/TIAction.html#resolvedObjectsInScope)`  `[`setResolvedObjects`](../object/TIAction.html#setResolvedObjects)`  `

Inherited from `TAction` :\
` `[`addVerifyResult`](../object/TAction.html#addVerifyResult)`  `[`check`](../object/TAction.html#check)`  `[`checkPreCond`](../object/TAction.html#checkPreCond)`  `[`doAction`](../object/TAction.html#doAction)`  `[`execCycle`](../object/TAction.html#execCycle)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowAll}

`allowAll`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[1385](../source/actions.t.html#1385)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#exec}

`exec (cmd)`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[1356](../source/actions.t.html#1356)\]

::: desc
If the command matched ALL filter out dobjs that aren\'t in the iobj by
not executing the command for them.
:::

[]{#getAll}

`getAll (cmd, role)`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[1380](../source/actions.t.html#1380)\]

::: desc
If the player tried to TAKE ALL FRMO IOBJ and there was nothing to take
we need to report this
:::

[]{#reportAction}

`reportAction ( )`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[1366](../source/actions.t.html#1366)\]

::: desc
Otherwise note the current dobj in any case
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::