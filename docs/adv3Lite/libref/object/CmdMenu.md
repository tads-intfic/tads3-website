---
layout: docs
---
<span class="title">CmdMenu</span><span class="type">object</span>

[cmdhelp.t](../file/cmdhelp.t.html)\[[41](../source/cmdhelp.t.html#41)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



*no description available*

**`CmdMenu`**` :   `[`SystemAction`](../object/SystemAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CmdMenu`**  
[`SystemAction`](../object/SystemAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`excludeCheckFailures`](#excludeCheckFailures)[`manipulationActions`](#manipulationActions)[`maxObjs`](#maxObjs)

Inherited from `SystemAction` :  
[`includeInUndo`](../object/SystemAction.html#includeInUndo)[`isRepeatable`](../object/SystemAction.html#isRepeatable)[`timeTaken`](../object/SystemAction.html#timeTaken)[`turnsTaken`](../object/SystemAction.html#turnsTaken)

Inherited from `IAction` :  
[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed)[`advanceOnFailure`](../object/Action.html#advanceOnFailure)[`allowAll`](../object/Action.html#allowAll)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`failCheckMsg`](../object/Action.html#failCheckMsg)[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)[`isConversational`](../object/Action.html#isConversational)[`isImplicit`](../object/Action.html#isImplicit)[`oldRoom`](../object/Action.html#oldRoom)[`parentAction`](../object/Action.html#parentAction)[`parentAllowAll`](../object/Action.html#parentAllowAll)[`preCond`](../object/Action.html#preCond)[`redirectParent`](../object/Action.html#redirectParent)[`reportImplicitActions`](../object/Action.html#reportImplicitActions)[`scopeList`](../object/Action.html#scopeList)[`spellingPriority`](../object/Action.html#spellingPriority)[`synthParamID`](../object/Action.html#synthParamID)[`unhides`](../object/Action.html#unhides)[`verifyObj`](../object/Action.html#verifyObj)[`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkInsert`](#checkInsert)[`execAction`](#execAction)[`passCheck`](#passCheck)[`showList`](#showList)[`showOptions`](#showOptions)

Inherited from `SystemAction` :  
[`afterAction`](../object/SystemAction.html#afterAction)[`exec`](../object/SystemAction.html#exec)[`execCycle`](../object/SystemAction.html#execCycle)[`getInputFile`](../object/SystemAction.html#getInputFile)[`turnSequence`](../object/SystemAction.html#turnSequence)

Inherited from `IAction` :  
[`execResolvedAction`](../object/IAction.html#execResolvedAction)[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)[`scoreObjects`](../object/IAction.html#scoreObjects)[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)[`addImplicitTime`](../object/Action.html#addImplicitTime)[`advanceTime`](../object/Action.html#advanceTime)[`announceObject`](../object/Action.html#announceObject)[`beforeAction`](../object/Action.html#beforeAction)[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)[`buildScopeList`](../object/Action.html#buildScopeList)[`checkAction`](../object/Action.html#checkAction)[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)[`commandNotPresent`](../object/Action.html#commandNotPresent)[`execGroup`](../object/Action.html#execGroup)[`getAll`](../object/Action.html#getAll)[`getAllUnhidden`](../object/Action.html#getAllUnhidden)[`getMessageParam`](../object/Action.html#getMessageParam)[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)[`reportAction`](../object/Action.html#reportAction)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`verify`](../object/Action.html#verify)[`verifyObjRole`](../object/Action.html#verifyObjRole)[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="excludeCheckFailures"></span>

`excludeCheckFailures`

[cmdhelp.t](../file/cmdhelp.t.html)\[[786](../source/cmdhelp.t.html#786)\]



We in any case rule out combinations of actions and objects that would
fail at the verify stage; flag - should we also rule out combinations
that fail at the check stage? By default we do.



<span id="manipulationActions"></span>

`manipulationActions`

[cmdhelp.t](../file/cmdhelp.t.html)\[[775](../source/cmdhelp.t.html#775)\]



A list of the actions we'll potentially suggest for option 4,
"Manipulate thing". Note that these must all be TActions.



<span id="maxObjs"></span>

`maxObjs`

[cmdhelp.t](../file/cmdhelp.t.html)\[[840](../source/cmdhelp.t.html#840)\]



The maximum number of objects in a list before we try to reduce that
list.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkInsert"></span>

`checkInsert (obj, cont, act)`

[cmdhelp.t](../file/cmdhelp.t.html)\[[810](../source/cmdhelp.t.html#810)\]



Check whether obj can be inserted in cont with the action act (which
will be one of PutIn, PutOn, PutUnder or PutBehind).



<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[cmdhelp.t](../file/cmdhelp.t.html)\[[109](../source/cmdhelp.t.html#109)\]



Carry out this action. This is the response to the player entering a
number at the command prompt. \[CMDHELP EXTENSION\]



<span id="passCheck"></span>

`passCheck (act, obj)`

[cmdhelp.t](../file/cmdhelp.t.html)\[[789](../source/cmdhelp.t.html#789)\]



Determine whether obj would pass the check stage of the act action.



<span id="showList"></span>

`showList (lst, cmd_str)`

[cmdhelp.t](../file/cmdhelp.t.html)\[[72](../source/cmdhelp.t.html#72)\]



Show a list of possible actions, where cmd_str is the name of the action
and lst a list of objects on which it might be tried. \* \[CMDHELP
EXTENSION\]



<span id="showOptions"></span>

`showOptions ( )`

[cmdhelp.t](../file/cmdhelp.t.html)\[[42](../source/cmdhelp.t.html#42)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


