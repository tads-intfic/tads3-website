[IAction]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[1090](../source/action.t.html#1090)\]

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
An IAction is an Action that doesn\'t directly act on any objects. At
least in this version of the library it works just like the base Action
class.

`class `**`IAction`**` :   `[`Action`](../object/Action.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`IAction`**\
`         `[`Action`](../object/Action.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`IAction`**\
`         `[`LiteralAction`](../object/LiteralAction.html)\
`         `[`MiscConvAction`](../object/MiscConvAction.html)\
`         `[`NumericAction`](../object/NumericAction.html)\
`         `[`SystemAction`](../object/SystemAction.html)\
`                 `[`FileOpAction`](../object/FileOpAction.html)\
`         `[`TopicAction`](../object/TopicAction.html)\
`                 `[`ImplicitConversationAction`](../object/ImplicitConversationAction.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`ClimbDownVague`](../object/ClimbDownVague.html)`  `[`ClimbUpVague`](../object/ClimbUpVague.html)`  `[`Continue`](../object/Continue.html)`  `[`FiatLux`](../object/FiatLux.html)`  `[`GetOut`](../object/GetOut.html)`  `[`GoBack`](../object/GoBack.html)`  `[`Goodbye`](../object/Goodbye.html)`  `[`GoSomewhere`](../object/GoSomewhere.html)`  `[`Hello`](../object/Hello.html)`  `[`Inventory`](../object/Inventory.html)`  `[`Jump`](../object/Jump.html)`  `[`JumpOffIntransitive`](../object/JumpOffIntransitive.html)`  `[`Lie`](../object/Lie.html)`  `[`Listen`](../object/Listen.html)`  `[`Look`](../object/Look.html)`  `[`LookHere`](../object/LookHere.html)`  `[`Sit`](../object/Sit.html)`  `[`Sleep`](../object/Sleep.html)`  `[`Smell`](../object/Smell.html)`  `[`Stand`](../object/Stand.html)`  `[`Think`](../object/Think.html)`  `[`VagueTravel`](../object/VagueTravel.html)`  `[`Wait`](../object/Wait.html)`  `[`WhereAmI`](../object/WhereAmI.html)`  `[`WhereGo`](../object/WhereGo.html)`  `[`WhoAmI`](../object/WhoAmI.html)`  `[`Yell`](../object/Yell.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`againRepeatsParse`](#againRepeatsParse)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`execCycle`](#execCycle)`  `[`execResolvedAction`](#execResolvedAction)`  `[`resolvedObjectsInScope`](#resolvedObjectsInScope)`  `[`scoreObjects`](#scoreObjects)`  `[`setResolvedObjects`](#setResolvedObjects)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execAction`](../object/Action.html#execAction)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

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

[action.t](../file/action.t.html)\[[1095](../source/action.t.html#1095)\]

::: desc
There\'s usually no point in parsing an IAction again when it\'s
repeated since there are no objects to have changed.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#execCycle}

`execCycle (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1143](../source/action.t.html#1143)\]

::: desc
Otherwise, display the normal output from this action
:::

[]{#execResolvedAction}

`execResolvedAction ( )`

[action.t](../file/action.t.html)\[[1123](../source/action.t.html#1123)\]

::: desc
These methods are provided to allow an IAction to be invoked as an
implicit action.
:::

[]{#resolvedObjectsInScope}

`resolvedObjectsInScope ( )`

[action.t](../file/action.t.html)\[[1175](../source/action.t.html#1175)\]

::: desc
An IAction has no resolved objects, so we simply return true to indicate
that scope is not a problem.
:::

[]{#scoreObjects}

`scoreObjects (cmd, role, lst)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1103](../source/action.t.html#1103)\]

::: desc
For an IAction there\'s no point in trying to score anything but the
Actor object; attempting to score objects via their verify properties
will cause a run-time error, since IActions don\'t define verify
properties and the like.
:::

[]{#setResolvedObjects}

`setResolvedObjects ([objs])`

[action.t](../file/action.t.html)\[[1169](../source/action.t.html#1169)\]

::: desc
Nothing to do here.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
