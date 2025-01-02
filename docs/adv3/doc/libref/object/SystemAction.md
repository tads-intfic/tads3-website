---
layout: docs
---
<span class="title">SystemAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6612](../source/action.t.html#6612)\]

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

System action. These actions are for out-of-game meta-verbs (save,
restore, undo). These verbs take no objects, must be performed by the
player (thus by the player character, not an NPC), and consume no game
clock time.

`class `**`SystemAction`**` :   `[`IAction`](../object/IAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SystemAction`**  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SystemAction`**  
[`AboutAction`](../object/AboutAction.html)  
[`predicate(About)`](../object/predicate(About).html)  
[`CreditsAction`](../object/CreditsAction.html)  
[`predicate(Credits)`](../object/predicate(Credits).html)  
[`ExitsModeAction`](../object/ExitsModeAction.html)  
[`predicate(ExitsMode)`](../object/predicate(ExitsMode).html)  
[`FileOpAction`](../object/FileOpAction.html)  
[`RecordAction`](../object/RecordAction.html)  
[`predicate(Record)`](../object/predicate(Record).html)  
[`RecordEventsAction`](../object/RecordEventsAction.html)  
[`predicate(RecordEvents)`](../object/predicate(RecordEvents).html)  
[`RecordStringAction`](../object/RecordStringAction.html)  
[`predicate(RecordString)`](../object/predicate(RecordString).html)  
[`RecordEventsStringAction`](../object/RecordEventsStringAction.html)  
[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)  
[`ReplayAction`](../object/ReplayAction.html)  
[`ReplayStringAction`](../object/ReplayStringAction.html)  
[`predicate(ReplayQuiet)`](../object/predicate(ReplayQuiet).html)  
[`predicate(ReplayString)`](../object/predicate(ReplayString).html)  
[`SaveAction`](../object/SaveAction.html)  
[`predicate(Save)`](../object/predicate(Save).html)  
[`SaveStringAction`](../object/SaveStringAction.html)  
[`predicate(SaveString)`](../object/predicate(SaveString).html)  
[`ScriptAction`](../object/ScriptAction.html)  
[`predicate(Script)`](../object/predicate(Script).html)  
[`ScriptStringAction`](../object/ScriptStringAction.html)  
[`predicate(ScriptString)`](../object/predicate(ScriptString).html)  
[`FootnoteAction`](../object/FootnoteAction.html)  
[`predicate(Footnote)`](../object/predicate(Footnote).html)  
[`FootnotesAction`](../object/FootnotesAction.html)  
[`FootnotesFullAction`](../object/FootnotesFullAction.html)  
[`predicate(FootnotesFull)`](../object/predicate(FootnotesFull).html)  
[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)  
[`predicate(FootnotesMedium)`](../object/predicate(FootnotesMedium).html)  
[`FootnotesOffAction`](../object/FootnotesOffAction.html)  
[`predicate(FootnotesOff)`](../object/predicate(FootnotesOff).html)  
[`FootnotesStatusAction`](../object/FootnotesStatusAction.html)  
[`predicate(FootnotesStatus)`](../object/predicate(FootnotesStatus).html)  
[`FullScoreAction`](../object/FullScoreAction.html)  
[`predicate(FullScore)`](../object/predicate(FullScore).html)  
[`HintAction`](../object/HintAction.html)  
[`predicate(Hint)`](../object/predicate(Hint).html)  
[`HintsOffAction`](../object/HintsOffAction.html)  
[`predicate(HintsOff)`](../object/predicate(HintsOff).html)  
[`InstructionsAction`](../object/InstructionsAction.html)  
[`predicate(instructions)`](../object/predicate(instructions).html)  
[`NotifyAction`](../object/NotifyAction.html)  
[`predicate(Notify)`](../object/predicate(Notify).html)  
[`NotifyOffAction`](../object/NotifyOffAction.html)  
[`predicate(NotifyOff)`](../object/predicate(NotifyOff).html)  
[`NotifyOnAction`](../object/NotifyOnAction.html)  
[`predicate(NotifyOn)`](../object/predicate(NotifyOn).html)  
[`PauseAction`](../object/PauseAction.html)  
[`predicate(Pause)`](../object/predicate(Pause).html)  
[`QuitAction`](../object/QuitAction.html)  
[`predicate(Quit)`](../object/predicate(Quit).html)  
[`RecordOffAction`](../object/RecordOffAction.html)  
[`predicate(RecordOff)`](../object/predicate(RecordOff).html)  
[`RestartAction`](../object/RestartAction.html)  
[`predicate(Restart)`](../object/predicate(Restart).html)  
[`RestoreAction`](../object/RestoreAction.html)  
[`predicate(Restore)`](../object/predicate(Restore).html)  
[`RestoreStringAction`](../object/RestoreStringAction.html)  
[`predicate(RestoreString)`](../object/predicate(RestoreString).html)  
[`RestoreDefaultsAction`](../object/RestoreDefaultsAction.html)  
[`predicate(RestoreDefaults)`](../object/predicate(RestoreDefaults).html)  
[`SaveDefaultsAction`](../object/SaveDefaultsAction.html)  
[`predicate(SaveDefaults)`](../object/predicate(SaveDefaults).html)  
[`ScoreAction`](../object/ScoreAction.html)  
[`predicate(Score)`](../object/predicate(Score).html)  
[`ScriptOffAction`](../object/ScriptOffAction.html)  
[`predicate(ScriptOff)`](../object/predicate(ScriptOff).html)  
[`TerseAction`](../object/TerseAction.html)  
[`predicate(Terse)`](../object/predicate(Terse).html)  
[`TipModeAction`](../object/TipModeAction.html)  
[`predicate(TipsOff)`](../object/predicate(TipsOff).html)  
[`predicate(TipsOn)`](../object/predicate(TipsOn).html)  
[`TopicsAction`](../object/TopicsAction.html)  
[`predicate(Topics)`](../object/predicate(Topics).html)  
[`UndoAction`](../object/UndoAction.html)  
[`predicate(Undo)`](../object/predicate(Undo).html)  
[`VerboseAction`](../object/VerboseAction.html)  
[`predicate(Verbose)`](../object/predicate(Verbose).html)  
[`VersionAction`](../object/VersionAction.html)  
[`predicate(Version)`](../object/predicate(Version).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actionTime`](#actionTime)



Inherited from `Action` :  
[`afterActionMainList`](../object/Action.html#afterActionMainList)[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)[`defaultForRecursion`](../object/Action.html#defaultForRecursion)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`implicitMsg`](../object/Action.html#implicitMsg)[`includeInUndo`](../object/Action.html#includeInUndo)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`iterationCanceled`](../object/Action.html#iterationCanceled)[`originalAction`](../object/Action.html#originalAction)[`parentAction`](../object/Action.html#parentAction)[`preCond`](../object/Action.html#preCond)[`predicateNounPhrases`](../object/Action.html#predicateNounPhrases)[`pronounOverride`](../object/Action.html#pronounOverride)[`remappedFrom`](../object/Action.html#remappedFrom)[`showDefaultReports`](../object/Action.html#showDefaultReports)[`synthParamID`](../object/Action.html#synthParamID)[`verbFlags`](../object/Action.html#verbFlags)[`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`execAction`](#execAction)[`execSystemAction`](#execSystemAction)[`getInputFile`](#getInputFile)

Inherited from `IAction` :  
[`doActionMain`](../object/IAction.html#doActionMain)[`resolveNouns`](../object/IAction.html#resolveNouns)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind)[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)[`afterAction`](../object/Action.html#afterAction)[`afterActionMain`](../object/Action.html#afterActionMain)[`announceActionObject`](../object/Action.html#announceActionObject)[`announceAllDefaultObjects`](../object/Action.html#announceAllDefaultObjects)[`announceDefaultObject`](../object/Action.html#announceDefaultObject)[`beforeAction`](../object/Action.html#beforeAction)[`beforeActionMain`](../object/Action.html#beforeActionMain)[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)[`callAfterActionMain`](../object/Action.html#callAfterActionMain)[`callCatchAllProp`](../object/Action.html#callCatchAllProp)[`callPreConditions`](../object/Action.html#callPreConditions)[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)[`callVerifyProp`](../object/Action.html#callVerifyProp)[`cancelIteration`](../object/Action.html#cancelIteration)[`checkAction`](../object/Action.html#checkAction)[`checkPreConditions`](../object/Action.html#checkPreConditions)[`checkRemapping`](../object/Action.html#checkRemapping)[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)[`createActionFrom`](../object/Action.html#createActionFrom)[`createActionInstance`](../object/Action.html#createActionInstance)[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)[`doAction`](../object/Action.html#doAction)[`doActionOnce`](../object/Action.html#doActionOnce)[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)[`filterFacets`](../object/Action.html#filterFacets)[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)[`finishResolveList`](../object/Action.html#finishResolveList)[`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding)[`getCurrentObjects`](../object/Action.html#getCurrentObjects)[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)[`getInfPhrase`](../object/Action.html#getInfPhrase)[`getMatchForRole`](../object/Action.html#getMatchForRole)[`getMessageParam`](../object/Action.html#getMessageParam)[`getNotifyTable`](../object/Action.html#getNotifyTable)[`getObjectForRole`](../object/Action.html#getObjectForRole)[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)[`getObjPreConditions`](../object/Action.html#getObjPreConditions)[`getObjResponseProd`](../object/Action.html#getObjResponseProd)[`getOriginalAction`](../object/Action.html#getOriginalAction)[`getOrigTokenList`](../object/Action.html#getOrigTokenList)[`getOtherObjectRole`](../object/Action.html#getOtherObjectRole)[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)[`getPreCondDescList`](../object/Action.html#getPreCondDescList)[`getPreCondPropForRole`](../object/Action.html#getPreCondPropForRole)[`getPredicate`](../object/Action.html#getPredicate)[`getPronounOverride`](../object/Action.html#getPronounOverride)[`getQuestionInf`](../object/Action.html#getQuestionInf)[`getRemappedFrom`](../object/Action.html#getRemappedFrom)[`getRemapPropForRole`](../object/Action.html#getRemapPropForRole)[`getResolvedObjList`](../object/Action.html#getResolvedObjList)[`getResolveInfo`](../object/Action.html#getResolveInfo)[`getRoleFromIndex`](../object/Action.html#getRoleFromIndex)[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)[`getVerbPhrase`](../object/Action.html#getVerbPhrase)[`getVerifyPropForRole`](../object/Action.html#getVerifyPropForRole)[`initTentative`](../object/Action.html#initTentative)[`isConversational`](../object/Action.html#isConversational)[`isNestedIn`](../object/Action.html#isNestedIn)[`isPartOf`](../object/Action.html#isPartOf)[`isRemapped`](../object/Action.html#isRemapped)[`makeResolveInfo`](../object/Action.html#makeResolveInfo)[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)[`noMatch`](../object/Action.html#noMatch)[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)[`objListPronoun`](../object/Action.html#objListPronoun)[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)[`recalcSenseContext`](../object/Action.html#recalcSenseContext)[`repeatAction`](../object/Action.html#repeatAction)[`resetAction`](../object/Action.html#resetAction)[`resolveAction`](../object/Action.html#resolveAction)[`resolvedObjectsInScope`](../object/Action.html#resolvedObjectsInScope)[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)[`saveActionForAgain`](../object/Action.html#saveActionForAgain)[`setCurrentObjects`](../object/Action.html#setCurrentObjects)[`setImplicit`](../object/Action.html#setImplicit)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`setNested`](../object/Action.html#setNested)[`setObjectMatches`](../object/Action.html#setObjectMatches)[`setOriginalAction`](../object/Action.html#setOriginalAction)[`setPronounOverride`](../object/Action.html#setPronounOverride)[`setRemapped`](../object/Action.html#setRemapped)[`setResolvedObjects`](../object/Action.html#setResolvedObjects)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`verifyAction`](../object/Action.html#verifyAction)[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)[`whatObj`](../object/Action.html#whatObj)[`whatTranslate`](../object/Action.html#whatTranslate)[`withVerifyResults`](../object/Action.html#withVerifyResults)[`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actionTime"></span>

`actionTime`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6661](../source/action.t.html#6661)\]

<div class="desc">

system actions consume no game time

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execAction"></span>

`execAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6614](../source/action.t.html#6614)\]

<div class="desc">

execute the action

</div>

<span id="execSystemAction"></span>

`execSystemAction ( )`

[action.t](../file/action.t.html)\[[6648](../source/action.t.html#6648)\]

<div class="desc">

each subclass must override this to perform its actual action

</div>

<span id="getInputFile"></span>

`getInputFile (prompt, dialogType, fileType, flags)`

[action.t](../file/action.t.html)\[[6655](../source/action.t.html#6655)\]

<div class="desc">

Ask for an input file. We call the input manager, which freezes the
real-time clock, displays the appropriate local file selector dialog,
and restarts the clock.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
