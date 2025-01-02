---
layout: docs
---
<span class="title">ScriptOn</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2292](../source/actions.t.html#2292)\]

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

<div class="fdesc">

Turn scripting on. This creates a text file that contains a transcript
of all commands and responses from this point forward.

**`ScriptOn`**` :   `[`Action`](../object/Action.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ScriptOn`**  
[`Action`](../object/Action.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`fileDisposition`](#fileDisposition)[`filePromptMsg`](#filePromptMsg)[`fileTypeID`](#fileTypeID)[`scriptingOkay`](#scriptingOkay)[`scriptingOkayWebTemp`](#scriptingOkayWebTemp)

Inherited from `Action` :  
[`actionFailed`](../object/Action.html#actionFailed)[`advanceOnFailure`](../object/Action.html#advanceOnFailure)[`againRepeatsParse`](../object/Action.html#againRepeatsParse)[`allowAll`](../object/Action.html#allowAll)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`failCheckMsg`](../object/Action.html#failCheckMsg)[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)[`includeInUndo`](../object/Action.html#includeInUndo)[`isConversational`](../object/Action.html#isConversational)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`oldRoom`](../object/Action.html#oldRoom)[`parentAction`](../object/Action.html#parentAction)[`parentAllowAll`](../object/Action.html#parentAllowAll)[`preCond`](../object/Action.html#preCond)[`redirectParent`](../object/Action.html#redirectParent)[`reportImplicitActions`](../object/Action.html#reportImplicitActions)[`scopeList`](../object/Action.html#scopeList)[`spellingPriority`](../object/Action.html#spellingPriority)[`synthParamID`](../object/Action.html#synthParamID)[`timeTaken`](../object/Action.html#timeTaken)[`turnsTaken`](../object/Action.html#turnsTaken)[`unhides`](../object/Action.html#unhides)[`verifyObj`](../object/Action.html#verifyObj)[`wasIlluminated`](../object/Action.html#wasIlluminated)





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`performFileOp`](#performFileOp)[`setUpScripting`](#setUpScripting)[`showCancelMsg`](#showCancelMsg)

Inherited from `Action` :  
[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)[`addImplicitTime`](../object/Action.html#addImplicitTime)[`advanceTime`](../object/Action.html#advanceTime)[`afterAction`](../object/Action.html#afterAction)[`announceObject`](../object/Action.html#announceObject)[`beforeAction`](../object/Action.html#beforeAction)[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)[`buildScopeList`](../object/Action.html#buildScopeList)[`checkAction`](../object/Action.html#checkAction)[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)[`commandNotPresent`](../object/Action.html#commandNotPresent)[`exec`](../object/Action.html#exec)[`execAction`](../object/Action.html#execAction)[`execCycle`](../object/Action.html#execCycle)[`execGroup`](../object/Action.html#execGroup)[`getAll`](../object/Action.html#getAll)[`getAllUnhidden`](../object/Action.html#getAllUnhidden)[`getMessageParam`](../object/Action.html#getMessageParam)[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)[`reportAction`](../object/Action.html#reportAction)[`scoreObjects`](../object/Action.html#scoreObjects)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`turnSequence`](../object/Action.html#turnSequence)[`verify`](../object/Action.html#verify)[`verifyObjRole`](../object/Action.html#verifyObjRole)[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead)[`doNested`](../object/Redirector.html#doNested)[`doOtherAction`](../object/Redirector.html#doOtherAction)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="fileDisposition"></span>

`fileDisposition`

[actions.t](../file/actions.t.html)\[[2298](../source/actions.t.html#2298)\]

<div class="desc">

*no description available*

</div>

<span id="filePromptMsg"></span>

`filePromptMsg`

[actions.t](../file/actions.t.html)\[[2295](../source/actions.t.html#2295)\]

<div class="desc">

our file dialog parameters - ask for a log file to save

</div>

<span id="fileTypeID"></span>

`fileTypeID`

[actions.t](../file/actions.t.html)\[[2297](../source/actions.t.html#2297)\]

<div class="desc">

*no description available*

</div>

<span id="scriptingOkay"></span>

`scriptingOkay`

[actions.t](../file/actions.t.html)\[[2375](../source/actions.t.html#2375)\]

<div class="desc">

*no description available*

</div>

<span id="scriptingOkayWebTemp"></span>

`scriptingOkayWebTemp`

[actions.t](../file/actions.t.html)\[[2369](../source/actions.t.html#2369)\]

<div class="desc">

show an error, if acknowledgment is desired

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="performFileOp"></span>

`performFileOp (fname, ack)`

[actions.t](../file/actions.t.html)\[[2310](../source/actions.t.html#2310)\]

<div class="desc">

turn on scripting to the given file

</div>

<span id="setUpScripting"></span>

`setUpScripting (ack)`

[actions.t](../file/actions.t.html)\[[2307](../source/actions.t.html#2307)\]

<div class="desc">

set up scripting - this can be used to set up scripting
programmatically, in the course of carrying out another action

</div>

<span id="showCancelMsg"></span>

`showCancelMsg ( )`

[actions.t](../file/actions.t.html)\[[2301](../source/actions.t.html#2301)\]

<div class="desc">

show our cancellation mesasge

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
