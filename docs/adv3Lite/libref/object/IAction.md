---
layout: docs
---
<span class="title">IAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[1090](../source/action.t.html#1090)\]

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

An IAction is an Action that doesn't directly act on any objects. At
least in this version of the library it works just like the base Action
class.

`class `**`IAction`**` :   `[`Action`](../object/Action.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IAction`**  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`IAction`**  
[`LiteralAction`](../object/LiteralAction.html)  
[`MiscConvAction`](../object/MiscConvAction.html)  
[`NumericAction`](../object/NumericAction.html)  
[`SystemAction`](../object/SystemAction.html)  
[`FileOpAction`](../object/FileOpAction.html)  
[`TopicAction`](../object/TopicAction.html)  
[`ImplicitConversationAction`](../object/ImplicitConversationAction.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`ClimbDownVague`](../object/ClimbDownVague.html)[`ClimbUpVague`](../object/ClimbUpVague.html)[`Continue`](../object/Continue.html)[`FiatLux`](../object/FiatLux.html)[`GetOut`](../object/GetOut.html)[`GoBack`](../object/GoBack.html)[`Goodbye`](../object/Goodbye.html)[`GoSomewhere`](../object/GoSomewhere.html)[`Hello`](../object/Hello.html)[`Inventory`](../object/Inventory.html)[`Jump`](../object/Jump.html)[`JumpOffIntransitive`](../object/JumpOffIntransitive.html)[`Lie`](../object/Lie.html)[`Listen`](../object/Listen.html)[`Look`](../object/Look.html)[`LookHere`](../object/LookHere.html)[`Sit`](../object/Sit.html)[`Sleep`](../object/Sleep.html)[`Smell`](../object/Smell.html)[`Stand`](../object/Stand.html)[`Think`](../object/Think.html)[`VagueTravel`](../object/VagueTravel.html)[`Wait`](../object/Wait.html)[`WhereAmI`](../object/WhereAmI.html)[`WhereGo`](../object/WhereGo.html)[`WhoAmI`](../object/WhoAmI.html)[`Yell`](../object/Yell.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`againRepeatsParse`](#againRepeatsParse)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed)[`advanceOnFailure`](../object/Action.html#advanceOnFailure)[`allowAll`](../object/Action.html#allowAll)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`failCheckMsg`](../object/Action.html#failCheckMsg)[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)[`includeInUndo`](../object/Action.html#includeInUndo)[`isConversational`](../object/Action.html#isConversational)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`oldRoom`](../object/Action.html#oldRoom)[`parentAction`](../object/Action.html#parentAction)[`parentAllowAll`](../object/Action.html#parentAllowAll)[`preCond`](../object/Action.html#preCond)[`redirectParent`](../object/Action.html#redirectParent)[`reportImplicitActions`](../object/Action.html#reportImplicitActions)[`scopeList`](../object/Action.html#scopeList)[`spellingPriority`](../object/Action.html#spellingPriority)[`synthParamID`](../object/Action.html#synthParamID)[`timeTaken`](../object/Action.html#timeTaken)[`turnsTaken`](../object/Action.html#turnsTaken)[`unhides`](../object/Action.html#unhides)[`verifyObj`](../object/Action.html#verifyObj)[`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`execCycle`](#execCycle)[`execResolvedAction`](#execResolvedAction)[`resolvedObjectsInScope`](#resolvedObjectsInScope)[`scoreObjects`](#scoreObjects)[`setResolvedObjects`](#setResolvedObjects)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)[`addImplicitTime`](../object/Action.html#addImplicitTime)[`advanceTime`](../object/Action.html#advanceTime)[`afterAction`](../object/Action.html#afterAction)[`announceObject`](../object/Action.html#announceObject)[`beforeAction`](../object/Action.html#beforeAction)[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)[`buildScopeList`](../object/Action.html#buildScopeList)[`checkAction`](../object/Action.html#checkAction)[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)[`commandNotPresent`](../object/Action.html#commandNotPresent)[`exec`](../object/Action.html#exec)[`execAction`](../object/Action.html#execAction)[`execGroup`](../object/Action.html#execGroup)[`getAll`](../object/Action.html#getAll)[`getAllUnhidden`](../object/Action.html#getAllUnhidden)[`getMessageParam`](../object/Action.html#getMessageParam)[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)[`reportAction`](../object/Action.html#reportAction)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`turnSequence`](../object/Action.html#turnSequence)[`verify`](../object/Action.html#verify)[`verifyObjRole`](../object/Action.html#verifyObjRole)[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="againRepeatsParse"></span>

`againRepeatsParse`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1095](../source/action.t.html#1095)\]

<div class="desc">

There's usually no point in parsing an IAction again when it's repeated
since there are no objects to have changed.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execCycle"></span>

`execCycle (cmd)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1143](../source/action.t.html#1143)\]

<div class="desc">

Otherwise, display the normal output from this action

</div>

<span id="execResolvedAction"></span>

`execResolvedAction ( )`

[action.t](../file/action.t.html)\[[1123](../source/action.t.html#1123)\]

<div class="desc">

These methods are provided to allow an IAction to be invoked as an
implicit action.

</div>

<span id="resolvedObjectsInScope"></span>

`resolvedObjectsInScope ( )`

[action.t](../file/action.t.html)\[[1175](../source/action.t.html#1175)\]

<div class="desc">

An IAction has no resolved objects, so we simply return true to indicate
that scope is not a problem.

</div>

<span id="scoreObjects"></span>

`scoreObjects (cmd, role, lst)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[1103](../source/action.t.html#1103)\]

<div class="desc">

For an IAction there's no point in trying to score anything but the
Actor object; attempting to score objects via their verify properties
will cause a run-time error, since IActions don't define verify
properties and the like.

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects ([objs])`

[action.t](../file/action.t.html)\[[1169](../source/action.t.html#1169)\]

<div class="desc">

Nothing to do here.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
