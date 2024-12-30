[TIAAction]{.title}[class]{.type}

[tiaaction.t](../file/tiaaction.t.html)\[[27](../source/tiaaction.t.html#27)\]

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
DEFINED IN TIAACTION EXTENSION. A TIAAction is one that has three
objects (direct, indirect and indirect), such as PUT COIN IN SLOT WITH
TWEEZERS.

`class `**`TIAAction`**` :   `[`TIAction`](../object/TIAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TIAAction`**\
`         `[`TIAction`](../object/TIAction.html)\
`                 `[`TAction`](../object/TAction.html)\
`                         `[`Action`](../object/Action.html)\
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                         `[`Redirector`](../object/Redirector.html)\
`                                                 object`\
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

` `[`actionAobjProp`](#actionAobjProp)`  `[`aoActionList`](#aoActionList)`  `[`checkAobjProp`](#checkAobjProp)`  `[`curAobj`](#curAobj)`  `[`preCondAobjProp`](#preCondAobjProp)`  `[`reportAobjProp`](#reportAobjProp)`  `[`verAobjProp`](#verAobjProp)`  `

Inherited from `TIAction` :\
` `[`actionIobjProp`](../object/TIAction.html#actionIobjProp)`  `[`checkIobjProp`](../object/TIAction.html#checkIobjProp)`  `[`curIobj`](../object/TIAction.html#curIobj)`  `[`ioActionList`](../object/TIAction.html#ioActionList)`  `[`preCondIobjProp`](../object/TIAction.html#preCondIobjProp)`  `[`resolveIobjFirst`](../object/TIAction.html#resolveIobjFirst)`  `[`verIobjProp`](../object/TIAction.html#verIobjProp)`  `

Inherited from `TAction` :\
` `[`actionList`](../object/TAction.html#actionList)`  `[`announceMultiAction`](../object/TAction.html#announceMultiAction)`  `[`announceMultiCheck`](../object/TAction.html#announceMultiCheck)`  `[`announceMultiVerify`](../object/TAction.html#announceMultiVerify)`  `[`aqinfo`](../object/TAction.html#aqinfo)`  `[`curDobj`](../object/TAction.html#curDobj)`  `[`curObj`](../object/TAction.html#curObj)`  `[`dqinfo`](../object/TAction.html#dqinfo)`  `[`gActor`](../object/TAction.html#gActor)`  `[`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck)`  `[`iqinfo`](../object/TAction.html#iqinfo)`  `[`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg)`  `[`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess)`  `[`reportList`](../object/TAction.html#reportList)`  `[`signal`](../object/TAction.html#signal)`  `[`verifyTab`](../object/TAction.html#verifyTab)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`checkAction`](#checkAction)`  `[`doActionOnce`](#doActionOnce)`  `[`execAction`](#execAction)`  `[`execResolvedAction`](#execResolvedAction)`  `[`getMessageParam`](#getMessageParam)`  `[`reportAction`](#reportAction)`  `[`reset`](#reset)`  `[`resolvedObjectsInScope`](#resolvedObjectsInScope)`  `[`setResolvedObjects`](#setResolvedObjects)`  `

Inherited from `TIAction` :\
` `[`getVerbPhrase`](../object/TIAction.html#getVerbPhrase)`  `[`getVerbPhrase2`](../object/TIAction.html#getVerbPhrase2)`  `

Inherited from `TAction` :\
` `[`addVerifyResult`](../object/TAction.html#addVerifyResult)`  `[`check`](../object/TAction.html#check)`  `[`checkPreCond`](../object/TAction.html#checkPreCond)`  `[`doAction`](../object/TAction.html#doAction)`  `[`execCycle`](../object/TAction.html#execCycle)`  `[`getAll`](../object/TAction.html#getAll)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#actionAobjProp}

`actionAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[35](../source/tiaaction.t.html#35)\]

::: desc
*no description available*
:::

[]{#aoActionList}

`aoActionList`

[tiaaction.t](../file/tiaaction.t.html)\[[43](../source/tiaaction.t.html#43)\]

::: desc
A list of the accessory objects that this actually actually ends up
acting on at the action stage. \[TIAACTION EXTENSION\]
:::

[]{#checkAobjProp}

`checkAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[34](../source/tiaaction.t.html#34)\]

::: desc
*no description available*
:::

[]{#curAobj}

`curAobj`

[tiaaction.t](../file/tiaaction.t.html)\[[29](../source/tiaaction.t.html#29)\]

::: desc
The current accessory object of this action.
:::

[]{#preCondAobjProp}

`preCondAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[36](../source/tiaaction.t.html#36)\]

::: desc
*no description available*
:::

[]{#reportAobjProp}

`reportAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[37](../source/tiaaction.t.html#37)\]

::: desc
*no description available*
:::

[]{#verAobjProp}

`verAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[33](../source/tiaaction.t.html#33)\]

::: desc
The various methods to call on the accessory object of this action.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkAction}

`checkAction (cmd)`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[85](../source/tiaaction.t.html#85)\]

::: desc
\[TIAACTION EXTENSION\] Carry out the check phase for this command on
all three objects involved in the command.
:::

[]{#doActionOnce}

`doActionOnce ( )`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[252](../source/tiaaction.t.html#252)\]

::: desc
Execute the action phase of the action on both objects. Note that
although some TIAActions can operate on multiple direct objects, none
defined in the library acts on multiple indirect objects, so there\'s
only minimal support for the latter possibility. \[TIAACTION EXTENSION\]
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[54](../source/tiaaction.t.html#54)\]

::: desc
execute this action, noting the accessory object in addition to the
other two.
:::

[]{#execResolvedAction}

`execResolvedAction ( )`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[173](../source/tiaaction.t.html#173)\]

::: desc
Execute this action as a resolved action, that is once its direct,
indirect and accessory objects are known. \[TIAACTION EXTENSION\]
:::

[]{#getMessageParam}

`getMessageParam (objName)`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[154](../source/tiaaction.t.html#154)\]

::: desc
Get the message parameters relating to this action for all three
objects.
:::

[]{#reportAction}

`reportAction ( )`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[137](../source/tiaaction.t.html#137)\]

::: desc
Carry out the report phase for this action. If there\'s anything in the
aoActionList and we\'re not an implicit action, call the report method
on the indirect, then the indirect object and finally on the accessory
object). Note that this method is called by the current Command object
once its finished iterating over all the objects involved in the
command. \[TIAACTION EXTENSION\]
:::

[]{#reset}

`reset ( )`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[46](../source/tiaaction.t.html#46)\]

::: desc
Reset the action variables to their initial state, including the
accessory object.
:::

[]{#resolvedObjectsInScope}

`resolvedObjectsInScope ( )`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[121](../source/tiaaction.t.html#121)\]

::: desc
Test whether the direct, the indirect and the accessory objects for this
action are in scope. \[TIAACTION EXTENSION\]
:::

[]{#setResolvedObjects}

`setResolvedObjects (dobj, iobj, aobj)`[OVERRIDDEN]{.rem}

[tiaaction.t](../file/tiaaction.t.html)\[[110](../source/tiaaction.t.html#110)\]

::: desc
Set all three resolved objects for this action. \[TIAACTION EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
