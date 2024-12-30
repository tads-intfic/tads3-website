[TIAction]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[2210](../source/action.t.html#2210)\],
[english.t](../file/english.t.html)\[[5593](../source/english.t.html#5593)\]

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
A TIAction is an action that applies to both a direct object and an
indirect object. Since it inherits from TAction we only need to define
the additional methods and properties relating to the handling of
indirect objects.

*Modified in
[english.t](../file/english.t.html)\[[5593](../source/english.t.html#5593)\]:*\
return the complete phrase string

`class `**`TIAction`**` :   `[`TAction`](../object/TAction.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TIAction`**\
`         `[`TAction`](../object/TAction.html)\
`                 `[`Action`](../object/Action.html)\
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                 `[`Redirector`](../object/Redirector.html)\
`                                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TIAction`**\
`         `[`TIAAction`](../object/TIAAction.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`AttachTo`](../object/AttachTo.html)`  `[`AttackWith`](../object/AttackWith.html)`  `[`BurnWith`](../object/BurnWith.html)`  `[`CleanWith`](../object/CleanWith.html)`  `[`CutWith`](../object/CutWith.html)`  `[`DetachFrom`](../object/DetachFrom.html)`  `[`DigWith`](../object/DigWith.html)`  `[`DoNothing`](../object/DoNothing.html)`  `[`FastenTo`](../object/FastenTo.html)`  `[`GiveTo`](../object/GiveTo.html)`  `[`LockWith`](../object/LockWith.html)`  `[`MoveTo`](../object/MoveTo.html)`  `[`MoveWith`](../object/MoveWith.html)`  `[`PlugInto`](../object/PlugInto.html)`  `[`PourInto`](../object/PourInto.html)`  `[`PourOnto`](../object/PourOnto.html)`  `[`PushTravelClimbDown`](../object/PushTravelClimbDown.html)`  `[`PushTravelClimbUp`](../object/PushTravelClimbUp.html)`  `[`PushTravelEnter`](../object/PushTravelEnter.html)`  `[`PushTravelGetOutOf`](../object/PushTravelGetOutOf.html)`  `[`PushTravelThrough`](../object/PushTravelThrough.html)`  `[`PutBehind`](../object/PutBehind.html)`  `[`PutIn`](../object/PutIn.html)`  `[`PutOn`](../object/PutOn.html)`  `[`PutUnder`](../object/PutUnder.html)`  `[`ScrewWith`](../object/ScrewWith.html)`  `[`ShowTo`](../object/ShowTo.html)`  `[`TakeFrom`](../object/TakeFrom.html)`  `[`ThrowAt`](../object/ThrowAt.html)`  `[`ThrowTo`](../object/ThrowTo.html)`  `[`TurnWith`](../object/TurnWith.html)`  `[`UnfastenFrom`](../object/UnfastenFrom.html)`  `[`UnlockWith`](../object/UnlockWith.html)`  `[`UnplugFrom`](../object/UnplugFrom.html)`  `[`UnscrewWith`](../object/UnscrewWith.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`actionIobjProp`](#actionIobjProp)`  `[`checkIobjProp`](#checkIobjProp)`  `[`curIobj`](#curIobj)`  `[`ioActionList`](#ioActionList)`  `[`preCondIobjProp`](#preCondIobjProp)`  `[`resolveIobjFirst`](#resolveIobjFirst)`  `[`verIobjProp`](#verIobjProp)`  `

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

` `[`checkAction`](#checkAction)`  `[`doActionOnce`](#doActionOnce)`  `[`execAction`](#execAction)`  `[`execResolvedAction`](#execResolvedAction)`  `[`getMessageParam`](#getMessageParam)`  `[`getVerbPhrase`](#getVerbPhrase)`  `[`getVerbPhrase2`](#getVerbPhrase2)`  `[`reportAction`](#reportAction)`  `[`reset`](#reset)`  `[`resolvedObjectsInScope`](#resolvedObjectsInScope)`  `[`setResolvedObjects`](#setResolvedObjects)`  `

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

[]{#actionIobjProp}

`actionIobjProp`

[action.t](../file/action.t.html)\[[2219](../source/action.t.html#2219)\]

::: desc
*no description available*
:::

[]{#checkIobjProp}

`checkIobjProp`

[action.t](../file/action.t.html)\[[2218](../source/action.t.html#2218)\]

::: desc
*no description available*
:::

[]{#curIobj}

`curIobj`

[action.t](../file/action.t.html)\[[2213](../source/action.t.html#2213)\]

::: desc
The current indirect object of this action.
:::

[]{#ioActionList}

`ioActionList`

[action.t](../file/action.t.html)\[[2226](../source/action.t.html#2226)\]

::: desc
A list of the indirect objects that this actually actually ends up
acting on at the action stage.
:::

[]{#preCondIobjProp}

`preCondIobjProp`

[action.t](../file/action.t.html)\[[2220](../source/action.t.html#2220)\]

::: desc
*no description available*
:::

[]{#resolveIobjFirst}

`resolveIobjFirst`

[action.t](../file/action.t.html)\[[2232](../source/action.t.html#2232)\]

::: desc
Flag: should we resolve the indirect object of this action before the
direct object?
:::

[]{#verIobjProp}

`verIobjProp`

[action.t](../file/action.t.html)\[[2217](../source/action.t.html#2217)\]

::: desc
The various methods to call on the indirect object of this action.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkAction}

`checkAction (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2265](../source/action.t.html#2265)\]

::: desc
Carry out the check phase for this command.
:::

[]{#doActionOnce}

`doActionOnce ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2423](../source/action.t.html#2423)\]

::: desc
Execute the action phase of the action on both objects. Note that
although some TIActions can operate on multiple direct objects, none
defined in the library acts on multiple indirect objects, so there\'s
only minimal support for the latter possibility.
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2243](../source/action.t.html#2243)\]

::: desc
execute this action.
:::

[]{#execResolvedAction}

`execResolvedAction ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2350](../source/action.t.html#2350)\]

::: desc
Execute this action as a resolved action, that is once its direct and
indirect objects are known.
:::

[]{#getMessageParam}

`getMessageParam (objName)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2331](../source/action.t.html#2331)\]

::: desc
Get the message parameters relating to this action
:::

[]{#getVerbPhrase}

`getVerbPhrase (inf, ctx)`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[5595](../source/english.t.html#5595)\]

::: desc
get the verb phrase in infinitive or participle form
:::

[]{#getVerbPhrase2}

`getVerbPhrase2 (inf, vp, dobjText, dobjIsPronoun, iobjText)`

[english.t](../file/english.t.html)\[[5628](../source/english.t.html#5628)\]

::: desc
Get the verb phrase for a two-object (dobj + iobj) phrasing. This is a
class method, so that it can be reused by unrelated (i.e., non-TIAction)
classes that also use two-object syntax but with other internal
structures. This is the two-object equivalent of
TAction.getVerbPhrase1().
:::

[]{#reportAction}

`reportAction ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2314](../source/action.t.html#2314)\]

::: desc
Carry out the report phase for this action. If there\'s anything in the
ioActionList and we\'re not an implicit action, call the report method
on the indirect object. Then carry out the inherited handling (which
does the same on the direct object). Note that this method is called by
the current Command object once its finished iterating over all the
objects involved in the command.
:::

[]{#reset}

`reset ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2235](../source/action.t.html#2235)\]

::: desc
Reset the action variables to their initial state.
:::

[]{#resolvedObjectsInScope}

`resolvedObjectsInScope ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2298](../source/action.t.html#2298)\]

::: desc
Test whether both the direct and the indirect objects for this action
are in scope.
:::

[]{#setResolvedObjects}

`setResolvedObjects (dobj, iobj)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2288](../source/action.t.html#2288)\]

::: desc
Set the resolved objects for this action.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
