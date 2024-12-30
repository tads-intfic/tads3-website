[ExtraHints]{.title}[object]{.type}

[actions.t](../file/actions.t.html)\[[335](../source/actions.t.html#335)\]

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

**`ExtraHints`**` :   `[`SystemAction`](../object/SystemAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ExtraHints`**\
`         `[`SystemAction`](../object/SystemAction.html)\
`                 `[`IAction`](../object/IAction.html)\
`                         `[`Action`](../object/Action.html)\
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                         `[`Redirector`](../object/Redirector.html)\
`                                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`extraHintsActive`](#extraHintsActive)`  `[`extraHintsCmd`](#extraHintsCmd)`  `[`hintsOff`](#hintsOff)`  `[`hintsOn`](#hintsOn)`  `[`onOff`](#onOff)`  `

Inherited from `SystemAction` :\
` `[`includeInUndo`](../object/SystemAction.html#includeInUndo)`  `[`isRepeatable`](../object/SystemAction.html#isRepeatable)`  `[`timeTaken`](../object/SystemAction.html#timeTaken)`  `[`turnsTaken`](../object/SystemAction.html#turnsTaken)`  `

Inherited from `IAction` :\
` `[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execAction`](#execAction)`  `[`onOrOff`](#onOrOff)`  `[`showExtraHintStatus`](#showExtraHintStatus)`  `

Inherited from `SystemAction` :\
` `[`afterAction`](../object/SystemAction.html#afterAction)`  `[`exec`](../object/SystemAction.html#exec)`  `[`execCycle`](../object/SystemAction.html#execCycle)`  `[`getInputFile`](../object/SystemAction.html#getInputFile)`  `[`turnSequence`](../object/SystemAction.html#turnSequence)`  `

Inherited from `IAction` :\
` `[`execResolvedAction`](../object/IAction.html#execResolvedAction)`  `[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)`  `[`scoreObjects`](../object/IAction.html#scoreObjects)`  `[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#extraHintsActive}

`extraHintsActive`

[actions.t](../file/actions.t.html)\[[381](../source/actions.t.html#381)\]

::: desc
*no description available*
:::

[]{#extraHintsCmd}

`extraHintsCmd`

[actions.t](../file/actions.t.html)\[[390](../source/actions.t.html#390)\]

::: desc
*no description available*
:::

[]{#hintsOff}

`hintsOff`

[actions.t](../file/actions.t.html)\[[387](../source/actions.t.html#387)\]

::: desc
*no description available*
:::

[]{#hintsOn}

`hintsOn`

[actions.t](../file/actions.t.html)\[[388](../source/actions.t.html#388)\]

::: desc
*no description available*
:::

[]{#onOff}

`onOff`

[actions.t](../file/actions.t.html)\[[385](../source/actions.t.html#385)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[actions.t](../file/actions.t.html)\[[336](../source/actions.t.html#336)\]

::: desc
*no description available*
:::

[]{#onOrOff}

`onOrOff (stat)`

[actions.t](../file/actions.t.html)\[[383](../source/actions.t.html#383)\]

::: desc
*no description available*
:::

[]{#showExtraHintStatus}

`showExtraHintStatus ( )`

[actions.t](../file/actions.t.html)\[[369](../source/actions.t.html#369)\]

::: desc
Routine to display message saying that extra hints are on or off.
Translators may want to override this method to display a message if it
can\'t readily be done in a CustomMessages object.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
