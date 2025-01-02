<span class="title">Restore</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2742](../source/actions.t.html#2742)\]

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

Perform the save, using the filename given in our fname\_ parameter,
trimmed of quotes.

**`Restore`**` :   `[`SystemAction`](../object/SystemAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Restore`**  
`         `[`SystemAction`](../object/SystemAction.html)  
`                 `[`IAction`](../object/IAction.html)  
`                         `[`Action`](../object/Action.html)  
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                                         `[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`includeInUndo`](#includeInUndo)`  `

Inherited from `SystemAction` :  
` `[`isRepeatable`](../object/SystemAction.html#isRepeatable)`  `[`timeTaken`](../object/SystemAction.html#timeTaken)`  `[`turnsTaken`](../object/SystemAction.html#turnsTaken)`  `

Inherited from `IAction` :  
` `[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)`  `

Inherited from `Action` :  
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`askAndRestore`](#askAndRestore)`  `[`execAction`](#execAction)`  `[`filePromptFailed`](#filePromptFailed)`  `[`filePromptFailedMsg`](#filePromptFailedMsg)`  `[`performRestore`](#performRestore)`  `[`startupRestore`](#startupRestore)`  `

Inherited from `SystemAction` :  
` `[`afterAction`](../object/SystemAction.html#afterAction)`  `[`exec`](../object/SystemAction.html#exec)`  `[`execCycle`](../object/SystemAction.html#execCycle)`  `[`getInputFile`](../object/SystemAction.html#getInputFile)`  `[`turnSequence`](../object/SystemAction.html#turnSequence)`  `

Inherited from `IAction` :  
` `[`execResolvedAction`](../object/IAction.html#execResolvedAction)`  `[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)`  `[`scoreObjects`](../object/IAction.html#scoreObjects)`  `[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)`  `

Inherited from `Action` :  
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :  
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2954](../source/actions.t.html#2954)\]

<div class="desc">

There's no point in including this in undo. If the command succeeds,
it's not undoable itself, and there won't be any undo information in the
newly restored state. If the command fails, it won't make any changes to
the game state, so there won't be anything to undo.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="askAndRestore"></span>

`askAndRestore ( )`

[actions.t](../file/actions.t.html)\[[2762](../source/actions.t.html#2762)\]

<div class="desc">

Ask for a file and try to restore it. Returns true on success, nil on
failure. (Failure could indicate that the user chose to cancel out of
the file selector, that we couldn't find the file to restore, or that
the file isn't a valid saved state file. In any case, we show an
appropriate message on failure.)

</div>

<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[2743](../source/actions.t.html#2743)\]

<div class="desc">

*no description available*

</div>

<span id="filePromptFailed"></span>

`filePromptFailed ( )`

[actions.t](../file/actions.t.html)\[[2957](../source/actions.t.html#2957)\]

<div class="desc">

error showing the input file dialog (or character-mode equivalent)

</div>

<span id="filePromptFailedMsg"></span>

`filePromptFailedMsg (msg)`

[actions.t](../file/actions.t.html)\[[2965](../source/actions.t.html#2965)\]

<div class="desc">

error showing the input file dialog, with a system error message

</div>

<span id="performRestore"></span>

`performRestore (fname, code)`

[actions.t](../file/actions.t.html)\[[2872](../source/actions.t.html#2872)\]

<div class="desc">

Restore a file. 'code' is the restoreCode value for the
PostRestoreObject notifications. Returns true on success, nil on
failure.

</div>

<span id="startupRestore"></span>

`startupRestore (fname)`

[actions.t](../file/actions.t.html)\[[2833](../source/actions.t.html#2833)\]

<div class="desc">

Restore a game on startup. This can be called from mainRestore() to
restore a saved game directly as part of loading the game. (Most
interpreters provide a way of starting the interpreter directly with a
saved game to be restored, skipping the intermediate step of running the
game and using a RESTORE command.)

Returns true on success, nil on failure. On failure, the caller should
simply exit the program. On success, the caller should start the game
running, usually using runGame(), after showing any desired introductory
messages.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
