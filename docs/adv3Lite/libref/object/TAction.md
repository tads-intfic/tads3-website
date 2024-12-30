[TAction]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[1559](../source/action.t.html#1559)\],
[english.t](../file/english.t.html)\[[5497](../source/english.t.html#5497)\],
[signals.t](../file/signals.t.html)\[[336](../source/signals.t.html#336)\],
[sysrules.t](../file/sysrules.t.html)\[[476](../source/sysrules.t.html#476)\]

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
A TAction is an action that applies to a single direct object. Other
action classes that apply to more than one object, such as TIAction,
inherit from this class so some of the code needs to take that into
account.

`class `**`TAction`**` :   `[`Action`](../object/Action.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TAction`**\
`         `[`Action`](../object/Action.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TAction`**\
`         `[`LiteralTAction`](../object/LiteralTAction.html)\
`         `[`NumericTAction`](../object/NumericTAction.html)\
`         `[`TIAction`](../object/TIAction.html)\
`                 `[`TIAAction`](../object/TIAAction.html)\
`         `[`TopicTAction`](../object/TopicTAction.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`Attach`](../object/Attach.html)`  `[`Attack`](../object/Attack.html)`  `[`Board`](../object/Board.html)`  `[`Break`](../object/Break.html)`  `[`Burn`](../object/Burn.html)`  `[`Clean`](../object/Clean.html)`  `[`Climb`](../object/Climb.html)`  `[`ClimbDown`](../object/ClimbDown.html)`  `[`ClimbUp`](../object/ClimbUp.html)`  `[`Close`](../object/Close.html)`  `[`Cut`](../object/Cut.html)`  `[`Detach`](../object/Detach.html)`  `[`Dig`](../object/Dig.html)`  `[`Doff`](../object/Doff.html)`  `[`Drink`](../object/Drink.html)`  `[`Drop`](../object/Drop.html)`  `[`Eat`](../object/Eat.html)`  `[`Enter`](../object/Enter.html)`  `[`Examine`](../object/Examine.html)`  `[`ExamineOrGoTo`](../object/ExamineOrGoTo.html)`  `[`Extinguish`](../object/Extinguish.html)`  `[`Fasten`](../object/Fasten.html)`  `[`Feel`](../object/Feel.html)`  `[`Flip`](../object/Flip.html)`  `[`Follow`](../object/Follow.html)`  `[`GetOff`](../object/GetOff.html)`  `[`GetOutOf`](../object/GetOutOf.html)`  `[`GiveToImplicit`](../object/GiveToImplicit.html)`  `[`GoAlong`](../object/GoAlong.html)`  `[`GoNear`](../object/GoNear.html)`  `[`GoThrough`](../object/GoThrough.html)`  `[`GoTo`](../object/GoTo.html)`  `[`JumpOff`](../object/JumpOff.html)`  `[`JumpOver`](../object/JumpOver.html)`  `[`Kiss`](../object/Kiss.html)`  `[`LieIn`](../object/LieIn.html)`  `[`LieOn`](../object/LieOn.html)`  `[`Light`](../object/Light.html)`  `[`ListenTo`](../object/ListenTo.html)`  `[`Lock`](../object/Lock.html)`  `[`LookBehind`](../object/LookBehind.html)`  `[`LookIn`](../object/LookIn.html)`  `[`LookThrough`](../object/LookThrough.html)`  `[`LookUnder`](../object/LookUnder.html)`  `[`Move`](../object/Move.html)`  `[`Open`](../object/Open.html)`  `[`PlugIn`](../object/PlugIn.html)`  `[`Pour`](../object/Pour.html)`  `[`Pull`](../object/Pull.html)`  `[`Purloin`](../object/Purloin.html)`  `[`Push`](../object/Push.html)`  `[`PushTravelDir`](../object/PushTravelDir.html)`  `[`Read`](../object/Read.html)`  `[`Remove`](../object/Remove.html)`  `[`Screw`](../object/Screw.html)`  `[`Search`](../object/Search.html)`  `[`Set`](../object/Set.html)`  `[`ShowToImplicit`](../object/ShowToImplicit.html)`  `[`SitIn`](../object/SitIn.html)`  `[`SitOn`](../object/SitOn.html)`  `[`SmellSomething`](../object/SmellSomething.html)`  `[`StandIn`](../object/StandIn.html)`  `[`StandOn`](../object/StandOn.html)`  `[`Strike`](../object/Strike.html)`  `[`SwitchOff`](../object/SwitchOff.html)`  `[`SwitchOn`](../object/SwitchOn.html)`  `[`SwitchVague`](../object/SwitchVague.html)`  `[`Take`](../object/Take.html)`  `[`TalkTo`](../object/TalkTo.html)`  `[`Taste`](../object/Taste.html)`  `[`Throw`](../object/Throw.html)`  `[`ThrowDir`](../object/ThrowDir.html)`  `[`TravelVia`](../object/TravelVia.html)`  `[`Turn`](../object/Turn.html)`  `[`TypeOnVague`](../object/TypeOnVague.html)`  `[`Unfasten`](../object/Unfasten.html)`  `[`Unlock`](../object/Unlock.html)`  `[`Unplug`](../object/Unplug.html)`  `[`Unscrew`](../object/Unscrew.html)`  `[`Wear`](../object/Wear.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`actionList`](#actionList)`  `[`announceMultiAction`](#announceMultiAction)`  `[`announceMultiCheck`](#announceMultiCheck)`  `[`announceMultiVerify`](#announceMultiVerify)`  `[`aqinfo`](#aqinfo)`  `[`curDobj`](#curDobj)`  `[`curObj`](#curObj)`  `[`dqinfo`](#dqinfo)`  `[`gActor`](#gActor)`  `[`haltOnMessageInCheck`](#haltOnMessageInCheck)`  `[`iqinfo`](#iqinfo)`  `[`lastVerifyMsg`](#lastVerifyMsg)`  `[`reportFailureAfterSuccess`](#reportFailureAfterSuccess)`  `[`reportList`](#reportList)`  `[`signal`](#signal)`  `[`verifyTab`](#verifyTab)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addVerifyResult`](#addVerifyResult)`  `[`check`](#check)`  `[`checkAction`](#checkAction)`  `[`checkPreCond`](#checkPreCond)`  `[`doAction`](#doAction)`  `[`doActionOnce`](#doActionOnce)`  `[`execAction`](#execAction)`  `[`execCycle`](#execCycle)`  `[`execResolvedAction`](#execResolvedAction)`  `[`getAll`](#getAll)`  `[`getMessageParam`](#getMessageParam)`  `[`getVerbPhrase`](#getVerbPhrase)`  `[`getVerbPhrase1`](#getVerbPhrase1)`  `[`makeScopeUniversal`](#makeScopeUniversal)`  `[`reportAction`](#reportAction)`  `[`reset`](#reset)`  `[`resolvedObjectsInScope`](#resolvedObjectsInScope)`  `[`setResolvedObjects`](#setResolvedObjects)`  `

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

[]{#actionList}

`actionList`

[action.t](../file/action.t.html)\[[1571](../source/action.t.html#1571)\]

::: desc
A list of the direct objects of this action that make it to the action
stage.
:::

[]{#announceMultiAction}

`announceMultiAction`

[action.t](../file/action.t.html)\[[1593](../source/action.t.html#1593)\]

::: desc
set this property to true if you want to announce the object before the
action result when there\'s more than one object. If the action routine
summarizes the result at the end you don\'t want to do this so you
should then set this to nil.
:::

[]{#announceMultiCheck}

`announceMultiCheck`

[action.t](../file/action.t.html)\[[1774](../source/action.t.html#1774)\]

::: desc
Flag: do we want the object name to appear before a check stage failure
message if multiple objects are involved in the action. By default we
do, otherwise it might not be clear which object the message referes to.
:::

[]{#announceMultiVerify}

`announceMultiVerify`

[action.t](../file/action.t.html)\[[2059](../source/action.t.html#2059)\]

::: desc
Flag, do we want to announce the object name before the verify message
in cases where there\'s more direct object in the command? By default we
don\'t since verify messages generally make it clear enough which
objects they refer to.
:::

[]{#aqinfo}

`aqinfo`

[action.t](../file/action.t.html)\[[1630](../source/action.t.html#1630)\]

::: desc
*no description available*
:::

[]{#curDobj}

`curDobj`

[action.t](../file/action.t.html)\[[1596](../source/action.t.html#1596)\]

::: desc
The current direct object of this action
:::

[]{#curObj}

`curObj`

[action.t](../file/action.t.html)\[[1603](../source/action.t.html#1603)\]

::: desc
The current object being processed (in a TAction, always the curDObj; in
a TI Action either the curDobj or the curIOoj).
:::

[]{#dqinfo}

`dqinfo`

[action.t](../file/action.t.html)\[[1628](../source/action.t.html#1628)\]

::: desc
Information to allow the DEBUG ACTIONS command to express a complete
topic phrase
:::

[]{#gActor}

`gActor`

[sysrules.t](../file/sysrules.t.html)\[[527](../source/sysrules.t.html#527)\]

::: desc
Set the current actor to the player character at the start of the game
(to ensure we have a current actor defined).
:::

[]{#haltOnMessageInCheck}

`haltOnMessageInCheck`

[action.t](../file/action.t.html)\[[1806](../source/action.t.html#1806)\]

::: desc
This flag is used internally by the library to track whether the output
of any text from a check() should stop the action, which it normally
should. Game code should not directly override this property or change
its value, other than indrectly via the noHalt() function.
:::

[]{#iqinfo}

`iqinfo`

[action.t](../file/action.t.html)\[[1629](../source/action.t.html#1629)\]

::: desc
*no description available*
:::

[]{#lastVerifyMsg}

`lastVerifyMsg`

[action.t](../file/action.t.html)\[[1585](../source/action.t.html#1585)\]

::: desc
Store the last verify failure message so that if we get several
identical ones in a row, we don\'t keep repeating them
:::

[]{#reportFailureAfterSuccess}

`reportFailureAfterSuccess`

[action.t](../file/action.t.html)\[[1913](../source/action.t.html#1913)\]

::: desc
Flag: when a command processes multiple direct objects, do we want any
failed attempts to be reported after successful ones?
:::

[]{#reportList}

`reportList`

[action.t](../file/action.t.html)\[[1565](../source/action.t.html#1565)\]

::: desc
A list of the direct objects of this action that make it to the report
stage.
:::

[]{#signal}

`signal`

[signals.t](../file/signals.t.html)\[[341](../source/signals.t.html#341)\]

::: desc
The signal (if any) )o be emitted by the direct object of this action.
\[SIGNALS EXTENSION\]
:::

[]{#verifyTab}

`verifyTab`

[action.t](../file/action.t.html)\[[1578](../source/action.t.html#1578)\]

::: desc
A LookupTable containing the verify results for this action. This is
keyes on the object being verified, with the value being the worst
verify result encountered for that object so far.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addVerifyResult}

`addVerifyResult (verRes)`

[action.t](../file/action.t.html)\[[2077](../source/action.t.html#2077)\]

::: desc
Add a verify result to this action\'s verify table. This method is
normally called by one of the macros (logical, illogical, logicalRank,
etc.) use in an object\'s verify routine.
:::

[]{#check}

`check (obj, checkProp)`

[action.t](../file/action.t.html)\[[1812](../source/action.t.html#1812)\]

::: desc
Call the check method (checkProp) on the appropriate object (obj).
Return true to indicate that the action succeeds or nil otherwise
:::

[]{#checkAction}

`checkAction (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1782](../source/action.t.html#1782)\]

::: desc
Run the check phase of the action, both on the direct object and on any
preconditions.
:::

[]{#checkPreCond}

`checkPreCond (obj, preCondProp)`

[action.t](../file/action.t.html)\[[1916](../source/action.t.html#1916)\]

::: desc
Run the check stage on the preCondProp of obj
:::

[]{#doAction}

`doAction ( )`

[action.t](../file/action.t.html)\[[2040](../source/action.t.html#2040)\],
[signals.t](../file/signals.t.html)\[[347](../source/signals.t.html#347)\]

::: desc
Return true to tell our caller we succesfully completed the action.

*Modified in
[signals.t](../file/signals.t.html)\[[347](../source/signals.t.html#347)\]:*\
If this action defines an associated signal, then have the direct object
emit the signal after carrrying out out inherited handling. \[SIGNALS
EXTENSION\]
:::

[]{#doActionOnce}

`doActionOnce ( )`

[action.t](../file/action.t.html)\[[1971](../source/action.t.html#1971)\]

::: desc
Carry out the action phase on the direct object
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1684](../source/action.t.html#1684)\]

::: desc
Execute this action
:::

[]{#execCycle}

`execCycle (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1639](../source/action.t.html#1639)\]

::: desc
Execute the command cycle for this action. This differs from the base
Action class in not calling beforeAction directly, since the
beforeAction() notifications occur within the execResolvedAction method.
:::

[]{#execResolvedAction}

`execResolvedAction ( )`

[action.t](../file/action.t.html)\[[1708](../source/action.t.html#1708)\]

::: desc
Execute this action with a known direct object or objects. Call this
method when there\'s no need to resolve the objects used in the command
but we still want it to pass through every stage
:::

[]{#getAll}

`getAll (cmd, role)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2067](../source/action.t.html#2067)\]

::: desc
Return a list of direct objects corresponding to the word ALL in the
player\'s command. By default we return everything in scope that isn\'t
a a Room.
:::

[]{#getMessageParam}

`getMessageParam (objName)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2156](../source/action.t.html#2156)\]

::: desc
Get a message parameter object for the action. We define \'dobj\' as the
direct object, in addition to any inherited targets.
:::

[]{#getVerbPhrase}

`getVerbPhrase (inf, ctx)`

[english.t](../file/english.t.html)\[[5499](../source/english.t.html#5499)\]

::: desc
get the verb phrase in infinitive or participle form
:::

[]{#getVerbPhrase1}

`getVerbPhrase1 (inf, vp, dobjText, dobjIsPronoun)`

[english.t](../file/english.t.html)\[[5534](../source/english.t.html#5534)\]

::: desc
Given the text of the direct object phrase, build the verb phrase for a
one-object verb. This is a class method that can be used by other kinds
of verbs (i.e., non-TActions) that use phrasing like a single object.

\'inf\' is a flag indicating whether to use the infinitive form (true)
or the present participle form (nil); \'vp\' is the verbPhrase string;
\'dobjText\' is the direct object phrase\'s text; and \'dobjIsPronoun\'
is true if the dobj text is rendered as a pronoun.
:::

[]{#makeScopeUniversal}

`makeScopeUniversal ( )`

[action.t](../file/action.t.html)\[[2180](../source/action.t.html#2180)\]

::: desc
A convenience method for putting every game object in scope, which may
be appropriate for certain commands (not least, certain debugging
commands). It\'s intended to be called from addExtraScopeItems when
:::

[]{#reportAction}

`reportAction ( )`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[2122](../source/action.t.html#2122)\],
[sysrules.t](../file/sysrules.t.html)\[[494](../source/sysrules.t.html#494)\]

::: desc
reportAction() is called only after all the action routines have been
run and the list of dobjs acted on is known. It only does anything if
the action is not implicit. It can thus be used to summarize a list of
identical actions carried out on every object in reportList or to print
a report that is not wanted if the action is implicit. By default we
call the dobj\'s reportDobjProp to handle the report.

Note that this method is usually called from the current Command object
after its finished iterated over all the direct objects involved in the
command.

*Modified in
[sysrules.t](../file/sysrules.t.html)\[[494](../source/sysrules.t.html#494)\]:*\
MODIFIED FOR SYSRULES EXTENSION

reportAction() is called only after all the action routines have been
run and the list of dobjs acted on is known. It only does anything if
the action is not implicit. It can thus be used to summarize a list of
identical actions carried out on every object in reportList or to print
a report that is not wanted if the action is implicit. By default we
call the dobj\'s reportDobjProp to handle the report.

Note that this method is usually called from the current Command object
after its finished iterated over all the direct objects involved in the
command.

This modified version uses the reportRules rulebook to make it easy to
insert differently worded summary reports.
:::

[]{#reset}

`reset ( )`

[action.t](../file/action.t.html)\[[1609](../source/action.t.html#1609)\]

::: desc
Reset values to their starting state when an action is used to execute a
new command.
:::

[]{#resolvedObjectsInScope}

`resolvedObjectsInScope ( )`

[action.t](../file/action.t.html)\[[2146](../source/action.t.html#2146)\]

::: desc
Check whether the resolved objects for this action are in scope
:::

[]{#setResolvedObjects}

`setResolvedObjects (dobj)`

[action.t](../file/action.t.html)\[[2140](../source/action.t.html#2140)\]

::: desc
install the resolved objects in the action
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
