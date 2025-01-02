---
layout: docs
---
<span class="title">TIAAction</span><span class="type">class</span>

[tiaaction.t](../file/tiaaction.t.html)\[[27](../source/tiaaction.t.html#27)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

DEFINED IN TIAACTION EXTENSION. A TIAAction is one that has three
objects (direct, indirect and indirect), such as PUT COIN IN SLOT WITH
TWEEZERS.

`class `**`TIAAction`**` :   `[`TIAction`](../object/TIAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TIAAction`**  
[`TIAction`](../object/TIAction.html)  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actionAobjProp`](#actionAobjProp)[`aoActionList`](#aoActionList)[`checkAobjProp`](#checkAobjProp)[`curAobj`](#curAobj)[`preCondAobjProp`](#preCondAobjProp)[`reportAobjProp`](#reportAobjProp)[`verAobjProp`](#verAobjProp)

Inherited from `TIAction` :  
[`actionIobjProp`](../object/TIAction.html#actionIobjProp)[`checkIobjProp`](../object/TIAction.html#checkIobjProp)[`curIobj`](../object/TIAction.html#curIobj)[`ioActionList`](../object/TIAction.html#ioActionList)[`preCondIobjProp`](../object/TIAction.html#preCondIobjProp)[`resolveIobjFirst`](../object/TIAction.html#resolveIobjFirst)[`verIobjProp`](../object/TIAction.html#verIobjProp)

Inherited from `TAction` :  
[`actionList`](../object/TAction.html#actionList)[`announceMultiAction`](../object/TAction.html#announceMultiAction)[`announceMultiCheck`](../object/TAction.html#announceMultiCheck)[`announceMultiVerify`](../object/TAction.html#announceMultiVerify)[`aqinfo`](../object/TAction.html#aqinfo)[`curDobj`](../object/TAction.html#curDobj)[`curObj`](../object/TAction.html#curObj)[`dqinfo`](../object/TAction.html#dqinfo)[`gActor`](../object/TAction.html#gActor)[`haltOnMessageInCheck`](../object/TAction.html#haltOnMessageInCheck)[`iqinfo`](../object/TAction.html#iqinfo)[`lastVerifyMsg`](../object/TAction.html#lastVerifyMsg)[`reportFailureAfterSuccess`](../object/TAction.html#reportFailureAfterSuccess)[`reportList`](../object/TAction.html#reportList)[`signal`](../object/TAction.html#signal)[`verifyTab`](../object/TAction.html#verifyTab)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed)[`advanceOnFailure`](../object/Action.html#advanceOnFailure)[`againRepeatsParse`](../object/Action.html#againRepeatsParse)[`allowAll`](../object/Action.html#allowAll)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`failCheckMsg`](../object/Action.html#failCheckMsg)[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)[`includeInUndo`](../object/Action.html#includeInUndo)[`isConversational`](../object/Action.html#isConversational)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`oldRoom`](../object/Action.html#oldRoom)[`parentAction`](../object/Action.html#parentAction)[`parentAllowAll`](../object/Action.html#parentAllowAll)[`preCond`](../object/Action.html#preCond)[`redirectParent`](../object/Action.html#redirectParent)[`reportImplicitActions`](../object/Action.html#reportImplicitActions)[`scopeList`](../object/Action.html#scopeList)[`spellingPriority`](../object/Action.html#spellingPriority)[`synthParamID`](../object/Action.html#synthParamID)[`timeTaken`](../object/Action.html#timeTaken)[`turnsTaken`](../object/Action.html#turnsTaken)[`unhides`](../object/Action.html#unhides)[`verifyObj`](../object/Action.html#verifyObj)[`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkAction`](#checkAction)[`doActionOnce`](#doActionOnce)[`execAction`](#execAction)[`execResolvedAction`](#execResolvedAction)[`getMessageParam`](#getMessageParam)[`reportAction`](#reportAction)[`reset`](#reset)[`resolvedObjectsInScope`](#resolvedObjectsInScope)[`setResolvedObjects`](#setResolvedObjects)

Inherited from `TIAction` :  
[`getVerbPhrase`](../object/TIAction.html#getVerbPhrase)[`getVerbPhrase2`](../object/TIAction.html#getVerbPhrase2)

Inherited from `TAction` :  
[`addVerifyResult`](../object/TAction.html#addVerifyResult)[`check`](../object/TAction.html#check)[`checkPreCond`](../object/TAction.html#checkPreCond)[`doAction`](../object/TAction.html#doAction)[`execCycle`](../object/TAction.html#execCycle)[`getAll`](../object/TAction.html#getAll)[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)[`makeScopeUniversal`](../object/TAction.html#makeScopeUniversal)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)[`addImplicitTime`](../object/Action.html#addImplicitTime)[`advanceTime`](../object/Action.html#advanceTime)[`afterAction`](../object/Action.html#afterAction)[`announceObject`](../object/Action.html#announceObject)[`beforeAction`](../object/Action.html#beforeAction)[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)[`buildScopeList`](../object/Action.html#buildScopeList)[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)[`commandNotPresent`](../object/Action.html#commandNotPresent)[`exec`](../object/Action.html#exec)[`execGroup`](../object/Action.html#execGroup)[`getAllUnhidden`](../object/Action.html#getAllUnhidden)[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)[`scoreObjects`](../object/Action.html#scoreObjects)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`turnSequence`](../object/Action.html#turnSequence)[`verify`](../object/Action.html#verify)[`verifyObjRole`](../object/Action.html#verifyObjRole)[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actionAobjProp"></span>

`actionAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[35](../source/tiaaction.t.html#35)\]

<div class="desc">

*no description available*

</div>

<span id="aoActionList"></span>

`aoActionList`

[tiaaction.t](../file/tiaaction.t.html)\[[43](../source/tiaaction.t.html#43)\]

<div class="desc">

A list of the accessory objects that this actually actually ends up
acting on at the action stage. \[TIAACTION EXTENSION\]

</div>

<span id="checkAobjProp"></span>

`checkAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[34](../source/tiaaction.t.html#34)\]

<div class="desc">

*no description available*

</div>

<span id="curAobj"></span>

`curAobj`

[tiaaction.t](../file/tiaaction.t.html)\[[29](../source/tiaaction.t.html#29)\]

<div class="desc">

The current accessory object of this action.

</div>

<span id="preCondAobjProp"></span>

`preCondAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[36](../source/tiaaction.t.html#36)\]

<div class="desc">

*no description available*

</div>

<span id="reportAobjProp"></span>

`reportAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[37](../source/tiaaction.t.html#37)\]

<div class="desc">

*no description available*

</div>

<span id="verAobjProp"></span>

`verAobjProp`

[tiaaction.t](../file/tiaaction.t.html)\[[33](../source/tiaaction.t.html#33)\]

<div class="desc">

The various methods to call on the accessory object of this action.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkAction"></span>

`checkAction (cmd)`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[85](../source/tiaaction.t.html#85)\]

<div class="desc">

\[TIAACTION EXTENSION\] Carry out the check phase for this command on
all three objects involved in the command.

</div>

<span id="doActionOnce"></span>

`doActionOnce ( )`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[252](../source/tiaaction.t.html#252)\]

<div class="desc">

Execute the action phase of the action on both objects. Note that
although some TIAActions can operate on multiple direct objects, none
defined in the library acts on multiple indirect objects, so there's
only minimal support for the latter possibility. \[TIAACTION EXTENSION\]

</div>

<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[54](../source/tiaaction.t.html#54)\]

<div class="desc">

execute this action, noting the accessory object in addition to the
other two.

</div>

<span id="execResolvedAction"></span>

`execResolvedAction ( )`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[173](../source/tiaaction.t.html#173)\]

<div class="desc">

Execute this action as a resolved action, that is once its direct,
indirect and accessory objects are known. \[TIAACTION EXTENSION\]

</div>

<span id="getMessageParam"></span>

`getMessageParam (objName)`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[154](../source/tiaaction.t.html#154)\]

<div class="desc">

Get the message parameters relating to this action for all three
objects.

</div>

<span id="reportAction"></span>

`reportAction ( )`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[137](../source/tiaaction.t.html#137)\]

<div class="desc">

Carry out the report phase for this action. If there's anything in the
aoActionList and we're not an implicit action, call the report method on
the indirect, then the indirect object and finally on the accessory
object). Note that this method is called by the current Command object
once its finished iterating over all the objects involved in the
command. \[TIAACTION EXTENSION\]

</div>

<span id="reset"></span>

`reset ( )`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[46](../source/tiaaction.t.html#46)\]

<div class="desc">

Reset the action variables to their initial state, including the
accessory object.

</div>

<span id="resolvedObjectsInScope"></span>

`resolvedObjectsInScope ( )`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[121](../source/tiaaction.t.html#121)\]

<div class="desc">

Test whether the direct, the indirect and the accessory objects for this
action are in scope. \[TIAACTION EXTENSION\]

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects (dobj, iobj, aobj)`<span class="rem">OVERRIDDEN</span>

[tiaaction.t](../file/tiaaction.t.html)\[[110](../source/tiaaction.t.html#110)\]

<div class="desc">

Set all three resolved objects for this action. \[TIAACTION EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
