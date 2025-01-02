<span class="title">RecordEventsStringAction</span><span class="type">class</span>

[actions.t](../file/actions.t.html)\[[1457](../source/actions.t.html#1457)\]

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

subclass of RecordString action that sets up an event script recording

`DefineAction(RecordEventsString, RecordStringAction)      `*`// original source text`*  
`class `**`RecordEventsStringAction`**` :   `[`RecordStringAction`](../object/RecordStringAction.html)`      `*`// after macro expansion`*

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RecordEventsStringAction`**  
`         `[`RecordStringAction`](../object/RecordStringAction.html)  
`                 `[`RecordAction`](../object/RecordAction.html)  
`                         `[`FileOpAction`](../object/FileOpAction.html)  
`                                 `[`SystemAction`](../object/SystemAction.html)  
`                                         `[`IAction`](../object/IAction.html)  
`                                                 `[`Action`](../object/Action.html)  
`                                                         `[`BasicProd`](../object/BasicProd.html)  
`                                                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`RecordEventsStringAction`**  
`         `[`predicate(RecordEventsString)`](../object/predicate(RecordEventsString).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`logFileType`](#logFileType)`  `

` `

Inherited from `RecordAction` :  
` `[`fileDisposition`](../object/RecordAction.html#fileDisposition)`  `[`filePromptMsg`](../object/RecordAction.html#filePromptMsg)`  `[`fileTypeID`](../object/RecordAction.html#fileTypeID)`  `

Inherited from `FileOpAction` :  
` `[`includeInUndo`](../object/FileOpAction.html#includeInUndo)`  `[`isRepeatable`](../object/FileOpAction.html#isRepeatable)`  `[`showCancelMsg`](../object/FileOpAction.html#showCancelMsg)`  `

Inherited from `SystemAction` :  
` `[`actionTime`](../object/SystemAction.html#actionTime)`  `

` `

Inherited from `Action` :  
` `[`afterActionMainList`](../object/Action.html#afterActionMainList)`  `[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)`  `[`defaultForRecursion`](../object/Action.html#defaultForRecursion)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`implicitMsg`](../object/Action.html#implicitMsg)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`iterationCanceled`](../object/Action.html#iterationCanceled)`  `[`originalAction`](../object/Action.html#originalAction)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`preCond`](../object/Action.html#preCond)`  `[`predicateNounPhrases`](../object/Action.html#predicateNounPhrases)`  `[`pronounOverride`](../object/Action.html#pronounOverride)`  `[`remappedFrom`](../object/Action.html#remappedFrom)`  `[`showDefaultReports`](../object/Action.html#showDefaultReports)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`verbFlags`](../object/Action.html#verbFlags)`  `[`verifiedOkay`](../object/Action.html#verifiedOkay)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `RecordStringAction` :  
` `[`execSystemAction`](../object/RecordStringAction.html#execSystemAction)`  `

Inherited from `RecordAction` :  
` `[`performFileOp`](../object/RecordAction.html#performFileOp)`  `[`setUpRecording`](../object/RecordAction.html#setUpRecording)`  `[`showCancelMsg`](../object/RecordAction.html#showCancelMsg)`  `

Inherited from `FileOpAction` :  
` `[`setUpFileOp`](../object/FileOpAction.html#setUpFileOp)`  `

Inherited from `SystemAction` :  
` `[`execAction`](../object/SystemAction.html#execAction)`  `[`getInputFile`](../object/SystemAction.html#getInputFile)`  `

Inherited from `IAction` :  
` `[`doActionMain`](../object/IAction.html#doActionMain)`  `[`resolveNouns`](../object/IAction.html#resolveNouns)`  `

Inherited from `Action` :  
` `[`actionOfKind`](../object/Action.html#actionOfKind)`  `[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`afterActionMain`](../object/Action.html#afterActionMain)`  `[`announceActionObject`](../object/Action.html#announceActionObject)`  `[`announceAllDefaultObjects`](../object/Action.html#announceAllDefaultObjects)`  `[`announceDefaultObject`](../object/Action.html#announceDefaultObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`beforeActionMain`](../object/Action.html#beforeActionMain)`  `[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)`  `[`callAfterActionMain`](../object/Action.html#callAfterActionMain)`  `[`callCatchAllProp`](../object/Action.html#callCatchAllProp)`  `[`callPreConditions`](../object/Action.html#callPreConditions)`  `[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)`  `[`callVerifyProp`](../object/Action.html#callVerifyProp)`  `[`cancelIteration`](../object/Action.html#cancelIteration)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkPreConditions`](../object/Action.html#checkPreConditions)`  `[`checkRemapping`](../object/Action.html#checkRemapping)`  `[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)`  `[`createActionFrom`](../object/Action.html#createActionFrom)`  `[`createActionInstance`](../object/Action.html#createActionInstance)`  `[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)`  `[`doAction`](../object/Action.html#doAction)`  `[`doActionOnce`](../object/Action.html#doActionOnce)`  `[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)`  `[`filterFacets`](../object/Action.html#filterFacets)`  `[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)`  `[`finishResolveList`](../object/Action.html#finishResolveList)`  `[`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding)`  `[`getCurrentObjects`](../object/Action.html#getCurrentObjects)`  `[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)`  `[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)`  `[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)`  `[`getInfPhrase`](../object/Action.html#getInfPhrase)`  `[`getMatchForRole`](../object/Action.html#getMatchForRole)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`getNotifyTable`](../object/Action.html#getNotifyTable)`  `[`getObjectForRole`](../object/Action.html#getObjectForRole)`  `[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)`  `[`getObjPreConditions`](../object/Action.html#getObjPreConditions)`  `[`getObjResponseProd`](../object/Action.html#getObjResponseProd)`  `[`getOriginalAction`](../object/Action.html#getOriginalAction)`  `[`getOrigTokenList`](../object/Action.html#getOrigTokenList)`  `[`getOtherObjectRole`](../object/Action.html#getOtherObjectRole)`  `[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)`  `[`getPreCondDescList`](../object/Action.html#getPreCondDescList)`  `[`getPreCondPropForRole`](../object/Action.html#getPreCondPropForRole)`  `[`getPredicate`](../object/Action.html#getPredicate)`  `[`getPronounOverride`](../object/Action.html#getPronounOverride)`  `[`getQuestionInf`](../object/Action.html#getQuestionInf)`  `[`getRemappedFrom`](../object/Action.html#getRemappedFrom)`  `[`getRemapPropForRole`](../object/Action.html#getRemapPropForRole)`  `[`getResolvedObjList`](../object/Action.html#getResolvedObjList)`  `[`getResolveInfo`](../object/Action.html#getResolveInfo)`  `[`getRoleFromIndex`](../object/Action.html#getRoleFromIndex)`  `[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)`  `[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)`  `[`getVerbPhrase`](../object/Action.html#getVerbPhrase)`  `[`getVerifyPropForRole`](../object/Action.html#getVerifyPropForRole)`  `[`initTentative`](../object/Action.html#initTentative)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isNestedIn`](../object/Action.html#isNestedIn)`  `[`isPartOf`](../object/Action.html#isPartOf)`  `[`isRemapped`](../object/Action.html#isRemapped)`  `[`makeResolveInfo`](../object/Action.html#makeResolveInfo)`  `[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)`  `[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)`  `[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)`  `[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)`  `[`noMatch`](../object/Action.html#noMatch)`  `[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)`  `[`objListPronoun`](../object/Action.html#objListPronoun)`  `[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)`  `[`recalcSenseContext`](../object/Action.html#recalcSenseContext)`  `[`repeatAction`](../object/Action.html#repeatAction)`  `[`resetAction`](../object/Action.html#resetAction)`  `[`resolveAction`](../object/Action.html#resolveAction)`  `[`resolvedObjectsInScope`](../object/Action.html#resolvedObjectsInScope)`  `[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)`  `[`saveActionForAgain`](../object/Action.html#saveActionForAgain)`  `[`setCurrentObjects`](../object/Action.html#setCurrentObjects)`  `[`setImplicit`](../object/Action.html#setImplicit)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`setNested`](../object/Action.html#setNested)`  `[`setObjectMatches`](../object/Action.html#setObjectMatches)`  `[`setOriginalAction`](../object/Action.html#setOriginalAction)`  `[`setPronounOverride`](../object/Action.html#setPronounOverride)`  `[`setRemapped`](../object/Action.html#setRemapped)`  `[`setResolvedObjects`](../object/Action.html#setResolvedObjects)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verifyAction`](../object/Action.html#verifyAction)`  `[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)`  `[`whatObj`](../object/Action.html#whatObj)`  `[`whatTranslate`](../object/Action.html#whatTranslate)`  `[`withVerifyResults`](../object/Action.html#withVerifyResults)`  `[`zeroActionTime`](../object/Action.html#zeroActionTime)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="logFileType"></span>

`logFileType`<span class="rem">OVERRIDDEN</span>

[actions.t](../file/actions.t.html)\[[1458](../source/actions.t.html#1458)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
