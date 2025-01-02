<span class="title">predicate(BurnWith)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[10342](../source/en_us.t.html#10342)\]

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

*no description available*

`VerbRule(BurnWith)      `*`// original source text`*  
`grammar `<span class="gramalt">[`predicate`](../object/predicate.html)`(BurnWith)`</span>` :   `[`BurnWithAction`](../object/BurnWithAction.html)`      `*`// after macro expansion`*

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`predicate(BurnWith)`**  
`         `[`BurnWithAction`](../object/BurnWithAction.html)  
`                 `[`TIAction`](../object/TIAction.html)  
`                         `[`TAction`](../object/TAction.html)  
`                                 `[`Action`](../object/Action.html)  
`                                         `[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
`                                 `[`Resolver`](../object/Resolver.html)  
`                                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`askDobjResponseProd`](#askDobjResponseProd)`  `[`askIobjResponseProd`](#askIobjResponseProd)`  `[`omitIobjInDobjQuery`](#omitIobjInDobjQuery)`  `[`verbPhrase`](#verbPhrase)`  `

Inherited from `BurnWithAction` :  
` `[`resolveFirst`](../object/BurnWithAction.html#resolveFirst)`  `

Inherited from `TIAction` :  
` `[`actionIobjProp`](../object/TIAction.html#actionIobjProp)`  `[`checkIobjProp`](../object/TIAction.html#checkIobjProp)`  `[`execFirst`](../object/TIAction.html#execFirst)`  `[`iobjCur_`](../object/TIAction.html#iobjCur_)`  `[`iobjInfoCur_`](../object/TIAction.html#iobjInfoCur_)`  `[`iobjList_`](../object/TIAction.html#iobjList_)`  `[`iobjMatch`](../object/TIAction.html#iobjMatch)`  `[`iobjResolver_`](../object/TIAction.html#iobjResolver_)`  `[`isPrepositionalPhrasing`](../object/TIAction.html#isPrepositionalPhrasing)`  `[`lastObjList_`](../object/TIAction.html#lastObjList_)`  `[`needAnaphoricBinding_`](../object/TIAction.html#needAnaphoricBinding_)`  `[`preCondIobjProp`](../object/TIAction.html#preCondIobjProp)`  `[`predicateNounPhrases`](../object/TIAction.html#predicateNounPhrases)`  `[`remapIobjProp`](../object/TIAction.html#remapIobjProp)`  `[`resolveFirstEmpty`](../object/TIAction.html#resolveFirstEmpty)`  `[`tentativeDobj_`](../object/TIAction.html#tentativeDobj_)`  `[`tentativeIobj_`](../object/TIAction.html#tentativeIobj_)`  `[`verIobjProp`](../object/TIAction.html#verIobjProp)`  `

Inherited from `TAction` :  
` `[`actionAllowsAll`](../object/TAction.html#actionAllowsAll)`  `[`actionDobjProp`](../object/TAction.html#actionDobjProp)`  `[`actor_`](../object/TAction.html#actor_)`  `[`checkDobjProp`](../object/TAction.html#checkDobjProp)`  `[`dobjCur_`](../object/TAction.html#dobjCur_)`  `[`dobjInfoCur_`](../object/TAction.html#dobjInfoCur_)`  `[`dobjList_`](../object/TAction.html#dobjList_)`  `[`dobjMatch`](../object/TAction.html#dobjMatch)`  `[`dobjResolver_`](../object/TAction.html#dobjResolver_)`  `[`issuer_`](../object/TAction.html#issuer_)`  `[`preCondDobjProp`](../object/TAction.html#preCondDobjProp)`  `[`remapDobjProp`](../object/TAction.html#remapDobjProp)`  `[`verDobjProp`](../object/TAction.html#verDobjProp)`  `[`whichMessageObject`](../object/TAction.html#whichMessageObject)`  `

Inherited from `Action` :  
` `[`actionTime`](../object/Action.html#actionTime)`  `[`afterActionMainList`](../object/Action.html#afterActionMainList)`  `[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)`  `[`defaultForRecursion`](../object/Action.html#defaultForRecursion)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`implicitMsg`](../object/Action.html#implicitMsg)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`iterationCanceled`](../object/Action.html#iterationCanceled)`  `[`originalAction`](../object/Action.html#originalAction)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`preCond`](../object/Action.html#preCond)`  `[`pronounOverride`](../object/Action.html#pronounOverride)`  `[`remappedFrom`](../object/Action.html#remappedFrom)`  `[`showDefaultReports`](../object/Action.html#showDefaultReports)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`verbFlags`](../object/Action.html#verbFlags)`  `[`verifiedOkay`](../object/Action.html#verifiedOkay)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

Inherited from `Resolver` :  
` `[`action_`](../object/Resolver.html#action_)`  `[`equivs_`](../object/Resolver.html#equivs_)`  `[`isGlobalScope`](../object/Resolver.html#isGlobalScope)`  `[`isSubResolver`](../object/Resolver.html#isSubResolver)`  `[`scope_`](../object/Resolver.html#scope_)`  `[`whichObject`](../object/Resolver.html#whichObject)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `BurnWithAction` :  
` `[`getAllIobj`](../object/BurnWithAction.html#getAllIobj)`  `

Inherited from `TIAction` :  
` `[`announceAllDefaultObjects`](../object/TIAction.html#announceAllDefaultObjects)`  `[`announceDefaultObject`](../object/TIAction.html#announceDefaultObject)`  `[`canIobjResolveTo`](../object/TIAction.html#canIobjResolveTo)`  `[`checkAction`](../object/TIAction.html#checkAction)`  `[`checkRemapping`](../object/TIAction.html#checkRemapping)`  `[`copyTentativeObjs`](../object/TIAction.html#copyTentativeObjs)`  `[`createForMissingIobj`](../object/TIAction.html#createForMissingIobj)`  `[`createIobjResolver`](../object/TIAction.html#createIobjResolver)`  `[`doActionMain`](../object/TIAction.html#doActionMain)`  `[`execAction`](../object/TIAction.html#execAction)`  `[`filterAmbiguousIobj`](../object/TIAction.html#filterAmbiguousIobj)`  `[`filterPluralIobj`](../object/TIAction.html#filterPluralIobj)`  `[`getAnaphoricBinding`](../object/TIAction.html#getAnaphoricBinding)`  `[`getCurrentObjects`](../object/TIAction.html#getCurrentObjects)`  `[`getDefaultIobj`](../object/TIAction.html#getDefaultIobj)`  `[`getIobj`](../object/TIAction.html#getIobj)`  `[`getIobjCount`](../object/TIAction.html#getIobjCount)`  `[`getIobjFlags`](../object/TIAction.html#getIobjFlags)`  `[`getIobjInfo`](../object/TIAction.html#getIobjInfo)`  `[`getIobjResolver`](../object/TIAction.html#getIobjResolver)`  `[`getIobjTokens`](../object/TIAction.html#getIobjTokens)`  `[`getIobjWords`](../object/TIAction.html#getIobjWords)`  `[`getMatchForRole`](../object/TIAction.html#getMatchForRole)`  `[`getMessageParam`](../object/TIAction.html#getMessageParam)`  `[`getObjectForRole`](../object/TIAction.html#getObjectForRole)`  `[`getObjResponseProd`](../object/TIAction.html#getObjResponseProd)`  `[`getOtherMessageObjectPronoun`](../object/TIAction.html#getOtherMessageObjectPronoun)`  `[`getOtherObjectRole`](../object/TIAction.html#getOtherObjectRole)`  `[`getPreCondDescList`](../object/TIAction.html#getPreCondDescList)`  `[`getPreCondPropForRole`](../object/TIAction.html#getPreCondPropForRole)`  `[`getQuestionInf`](../object/TIAction.html#getQuestionInf)`  `[`getRemapPropForRole`](../object/TIAction.html#getRemapPropForRole)`  `[`getResolvedIobjList`](../object/TIAction.html#getResolvedIobjList)`  `[`getResolvedObjList`](../object/TIAction.html#getResolvedObjList)`  `[`getResolveInfo`](../object/TIAction.html#getResolveInfo)`  `[`getRoleFromIndex`](../object/TIAction.html#getRoleFromIndex)`  `[`getTentativeDobj`](../object/TIAction.html#getTentativeDobj)`  `[`getTentativeIobj`](../object/TIAction.html#getTentativeIobj)`  `[`getVerbPhrase`](../object/TIAction.html#getVerbPhrase)`  `[`getVerbPhrase2`](../object/TIAction.html#getVerbPhrase2)`  `[`getVerifyPropForRole`](../object/TIAction.html#getVerifyPropForRole)`  `[`initForMissingDobj`](../object/TIAction.html#initForMissingDobj)`  `[`initForMissingIobj`](../object/TIAction.html#initForMissingIobj)`  `[`initTentative`](../object/TIAction.html#initTentative)`  `[`needRemappedAnnouncement`](../object/TIAction.html#needRemappedAnnouncement)`  `[`resetAction`](../object/TIAction.html#resetAction)`  `[`resolvedObjectsInScope`](../object/TIAction.html#resolvedObjectsInScope)`  `[`resolveNouns`](../object/TIAction.html#resolveNouns)`  `[`retryWithAmbiguousIobj`](../object/TIAction.html#retryWithAmbiguousIobj)`  `[`retryWithMissingIobj`](../object/TIAction.html#retryWithMissingIobj)`  `[`setCurrentObjects`](../object/TIAction.html#setCurrentObjects)`  `[`setObjectMatches`](../object/TIAction.html#setObjectMatches)`  `[`setPronounByInput`](../object/TIAction.html#setPronounByInput)`  `[`setResolvedIobj`](../object/TIAction.html#setResolvedIobj)`  `[`setResolvedObjects`](../object/TIAction.html#setResolvedObjects)`  `[`testRetryDefaultIobj`](../object/TIAction.html#testRetryDefaultIobj)`  `[`verifyAction`](../object/TIAction.html#verifyAction)`  `[`whatObj`](../object/TIAction.html#whatObj)`  `

Inherited from `TAction` :  
` `[`adjustDefaultObjectPrep`](../object/TAction.html#adjustDefaultObjectPrep)`  `[`canDobjResolveTo`](../object/TAction.html#canDobjResolveTo)`  `[`construct`](../object/TAction.html#construct)`  `[`createDobjResolver`](../object/TAction.html#createDobjResolver)`  `[`createForMissingDobj`](../object/TAction.html#createForMissingDobj)`  `[`createForRetry`](../object/TAction.html#createForRetry)`  `[`filterAmbiguousDobj`](../object/TAction.html#filterAmbiguousDobj)`  `[`filterPluralDobj`](../object/TAction.html#filterPluralDobj)`  `[`getAllDobj`](../object/TAction.html#getAllDobj)`  `[`getDefaultDobj`](../object/TAction.html#getDefaultDobj)`  `[`getDobj`](../object/TAction.html#getDobj)`  `[`getDobjCount`](../object/TAction.html#getDobjCount)`  `[`getDobjFlags`](../object/TAction.html#getDobjFlags)`  `[`getDobjInfo`](../object/TAction.html#getDobjInfo)`  `[`getDobjResolver`](../object/TAction.html#getDobjResolver)`  `[`getDobjTokens`](../object/TAction.html#getDobjTokens)`  `[`getDobjWords`](../object/TAction.html#getDobjWords)`  `[`getResolvedDobjList`](../object/TAction.html#getResolvedDobjList)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`initResolver`](../object/TAction.html#initResolver)`  `[`retryWithAmbiguousDobj`](../object/TAction.html#retryWithAmbiguousDobj)`  `[`retryWithMissingDobj`](../object/TAction.html#retryWithMissingDobj)`  `[`setResolvedDobj`](../object/TAction.html#setResolvedDobj)`  `[`testRetryDefaultDobj`](../object/TAction.html#testRetryDefaultDobj)`  `

Inherited from `Action` :  
` `[`actionOfKind`](../object/Action.html#actionOfKind)`  `[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`afterActionMain`](../object/Action.html#afterActionMain)`  `[`announceActionObject`](../object/Action.html#announceActionObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`beforeActionMain`](../object/Action.html#beforeActionMain)`  `[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)`  `[`callAfterActionMain`](../object/Action.html#callAfterActionMain)`  `[`callCatchAllProp`](../object/Action.html#callCatchAllProp)`  `[`callPreConditions`](../object/Action.html#callPreConditions)`  `[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)`  `[`callVerifyProp`](../object/Action.html#callVerifyProp)`  `[`cancelIteration`](../object/Action.html#cancelIteration)`  `[`checkPreConditions`](../object/Action.html#checkPreConditions)`  `[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)`  `[`createActionFrom`](../object/Action.html#createActionFrom)`  `[`createActionInstance`](../object/Action.html#createActionInstance)`  `[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)`  `[`doAction`](../object/Action.html#doAction)`  `[`doActionOnce`](../object/Action.html#doActionOnce)`  `[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)`  `[`filterFacets`](../object/Action.html#filterFacets)`  `[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)`  `[`finishResolveList`](../object/Action.html#finishResolveList)`  `[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)`  `[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)`  `[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)`  `[`getInfPhrase`](../object/Action.html#getInfPhrase)`  `[`getNotifyTable`](../object/Action.html#getNotifyTable)`  `[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)`  `[`getObjPreConditions`](../object/Action.html#getObjPreConditions)`  `[`getOriginalAction`](../object/Action.html#getOriginalAction)`  `[`getOrigTokenList`](../object/Action.html#getOrigTokenList)`  `[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)`  `[`getPredicate`](../object/Action.html#getPredicate)`  `[`getPronounOverride`](../object/Action.html#getPronounOverride)`  `[`getRemappedFrom`](../object/Action.html#getRemappedFrom)`  `[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)`  `[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isNestedIn`](../object/Action.html#isNestedIn)`  `[`isPartOf`](../object/Action.html#isPartOf)`  `[`isRemapped`](../object/Action.html#isRemapped)`  `[`makeResolveInfo`](../object/Action.html#makeResolveInfo)`  `[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)`  `[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)`  `[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)`  `[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)`  `[`noMatch`](../object/Action.html#noMatch)`  `[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)`  `[`objListPronoun`](../object/Action.html#objListPronoun)`  `[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)`  `[`recalcSenseContext`](../object/Action.html#recalcSenseContext)`  `[`repeatAction`](../object/Action.html#repeatAction)`  `[`resolveAction`](../object/Action.html#resolveAction)`  `[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)`  `[`saveActionForAgain`](../object/Action.html#saveActionForAgain)`  `[`setImplicit`](../object/Action.html#setImplicit)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`setNested`](../object/Action.html#setNested)`  `[`setOriginalAction`](../object/Action.html#setOriginalAction)`  `[`setPronounOverride`](../object/Action.html#setPronounOverride)`  `[`setRemapped`](../object/Action.html#setRemapped)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)`  `[`whatTranslate`](../object/Action.html#whatTranslate)`  `[`withVerifyResults`](../object/Action.html#withVerifyResults)`  `[`zeroActionTime`](../object/Action.html#zeroActionTime)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

Inherited from `Resolver` :  
` `[`allowAll`](../object/Resolver.html#allowAll)`  `[`cacheScopeList`](../object/Resolver.html#cacheScopeList)`  `[`filterAll`](../object/Resolver.html#filterAll)`  `[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)`  `[`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase)`  `[`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase)`  `[`filterPossRank`](../object/Resolver.html#filterPossRank)`  `[`getAction`](../object/Resolver.html#getAction)`  `[`getAll`](../object/Resolver.html#getAll)`  `[`getAllDefaults`](../object/Resolver.html#getAllDefaults)`  `[`getDefaultObject`](../object/Resolver.html#getDefaultObject)`  `[`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver)`  `[`getPronounDefault`](../object/Resolver.html#getPronounDefault)`  `[`getQualifierResolver`](../object/Resolver.html#getQualifierResolver)`  `[`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent)`  `[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)`  `[`getScopeList`](../object/Resolver.html#getScopeList)`  `[`getTargetActor`](../object/Resolver.html#getTargetActor)`  `[`matchName`](../object/Resolver.html#matchName)`  `[`objInScope`](../object/Resolver.html#objInScope)`  `[`resetResolver`](../object/Resolver.html#resetResolver)`  `[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)`  `[`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase)`  `[`selectIndefinite`](../object/Resolver.html#selectIndefinite)`  `[`withGlobals`](../object/Resolver.html#withGlobals)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="askDobjResponseProd"></span>

`askDobjResponseProd`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[10348](../source/en_us.t.html#10348)\]

<div class="desc">

*no description available*

</div>

<span id="askIobjResponseProd"></span>

`askIobjResponseProd`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[10349](../source/en_us.t.html#10349)\]

<div class="desc">

*no description available*

</div>

<span id="omitIobjInDobjQuery"></span>

`omitIobjInDobjQuery`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[10347](../source/en_us.t.html#10347)\]

<div class="desc">

*no description available*

</div>

<span id="verbPhrase"></span>

`verbPhrase`

[en_us.t](../file/en_us.t.html)\[[10346](../source/en_us.t.html#10346)\]

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
