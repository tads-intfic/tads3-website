---
layout: docs
---
<span class="title">TIAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[3935](../source/action.t.html#3935)\],
[en_us.t](../file/en_us.t.html)\[[8600](../source/en_us.t.html#8600)\]

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

Transitive-with-indirect Action class - this is an action that takes
both a direct and indirect object. We subclass the basic one-object
action to add the indirect object handling.

*Modified in
[en_us.t](../file/en_us.t.html)\[[8600](../source/en_us.t.html#8600)\]:*  
English-specific additions for two-object verbs.

`class `**`TIAction`**` :   `[`TAction`](../object/TAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TIAction`**  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`Resolver`](../object/Resolver.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TIAction`**  
[`AttachToAction`](../object/AttachToAction.html)  
[`predicate(AttachTo)`](../object/predicate(AttachTo).html)  
[`predicate(AttachToWhat)`](../object/predicate(AttachToWhat).html)  
[`AttackWithAction`](../object/AttackWithAction.html)  
[`predicate(AttackWith)`](../object/predicate(AttackWith).html)  
[`BurnWithAction`](../object/BurnWithAction.html)  
[`predicate(BurnWith)`](../object/predicate(BurnWith).html)  
[`CleanWithAction`](../object/CleanWithAction.html)  
[`predicate(CleanWith)`](../object/predicate(CleanWith).html)  
[`CutWithAction`](../object/CutWithAction.html)  
[`predicate(CutWith)`](../object/predicate(CutWith).html)  
[`predicate(CutWithWhat)`](../object/predicate(CutWithWhat).html)  
[`DetachFromAction`](../object/DetachFromAction.html)  
[`predicate(DetachFrom)`](../object/predicate(DetachFrom).html)  
[`DigWithAction`](../object/DigWithAction.html)  
[`predicate(DigWith)`](../object/predicate(DigWith).html)  
[`FastenToAction`](../object/FastenToAction.html)  
[`predicate(FastenTo)`](../object/predicate(FastenTo).html)  
[`GiveToAction`](../object/GiveToAction.html)  
[`predicate(GiveTo)`](../object/predicate(GiveTo).html)  
[`predicate(GiveToType2)`](../object/predicate(GiveToType2).html)  
[`predicate(GiveToWhom)`](../object/predicate(GiveToWhom).html)  
[`LockWithAction`](../object/LockWithAction.html)  
[`predicate(LockWith)`](../object/predicate(LockWith).html)  
[`MoveToAction`](../object/MoveToAction.html)  
[`predicate(MoveTo)`](../object/predicate(MoveTo).html)  
[`MoveWithAction`](../object/MoveWithAction.html)  
[`predicate(MoveWith)`](../object/predicate(MoveWith).html)  
[`PlugIntoAction`](../object/PlugIntoAction.html)  
[`predicate(PlugInto)`](../object/predicate(PlugInto).html)  
[`predicate(PlugIntoWhat)`](../object/predicate(PlugIntoWhat).html)  
[`PourIntoAction`](../object/PourIntoAction.html)  
[`predicate(PourInto)`](../object/predicate(PourInto).html)  
[`PourOntoAction`](../object/PourOntoAction.html)  
[`predicate(PourOnto)`](../object/predicate(PourOnto).html)  
[`PushTravelViaIobjAction`](../object/PushTravelViaIobjAction.html)  
[`PushTravelClimbDownAction`](../object/PushTravelClimbDownAction.html)  
[`predicate(PushTravelClimbDown)`](../object/predicate(PushTravelClimbDown).html)  
[`PushTravelClimbUpAction`](../object/PushTravelClimbUpAction.html)  
[`predicate(PushTravelClimbUp)`](../object/predicate(PushTravelClimbUp).html)  
[`PushTravelEnterAction`](../object/PushTravelEnterAction.html)  
[`predicate(PushTravelEnter)`](../object/predicate(PushTravelEnter).html)  
[`PushTravelGetOutOfAction`](../object/PushTravelGetOutOfAction.html)  
[`predicate(PushTravelGetOutOf)`](../object/predicate(PushTravelGetOutOf).html)  
[`PushTravelThroughAction`](../object/PushTravelThroughAction.html)  
[`predicate(PushTravelThrough)`](../object/predicate(PushTravelThrough).html)  
[`PutBehindAction`](../object/PutBehindAction.html)  
[`predicate(PutBehind)`](../object/predicate(PutBehind).html)  
[`PutInAction`](../object/PutInAction.html)  
[`predicate(PutIn)`](../object/predicate(PutIn).html)  
[`predicate(PutInWhat)`](../object/predicate(PutInWhat).html)  
[`PutOnAction`](../object/PutOnAction.html)  
[`predicate(PutOn)`](../object/predicate(PutOn).html)  
[`PutUnderAction`](../object/PutUnderAction.html)  
[`predicate(PutUnder)`](../object/predicate(PutUnder).html)  
[`ScrewWithAction`](../object/ScrewWithAction.html)  
[`predicate(ScrewWith)`](../object/predicate(ScrewWith).html)  
[`ShowToAction`](../object/ShowToAction.html)  
[`predicate(ShowTo)`](../object/predicate(ShowTo).html)  
[`predicate(ShowToType2)`](../object/predicate(ShowToType2).html)  
[`predicate(ShowToWhom)`](../object/predicate(ShowToWhom).html)  
[`TakeFromAction`](../object/TakeFromAction.html)  
[`predicate(TakeFrom)`](../object/predicate(TakeFrom).html)  
[`ThrowAtAction`](../object/ThrowAtAction.html)  
[`predicate(ThrowAt)`](../object/predicate(ThrowAt).html)  
[`ThrowToAction`](../object/ThrowToAction.html)  
[`predicate(ThrowTo)`](../object/predicate(ThrowTo).html)  
[`predicate(ThrowToType2)`](../object/predicate(ThrowToType2).html)  
[`TurnWithAction`](../object/TurnWithAction.html)  
[`predicate(TurnWith)`](../object/predicate(TurnWith).html)  
[`UnfastenFromAction`](../object/UnfastenFromAction.html)  
[`predicate(UnfastenFrom)`](../object/predicate(UnfastenFrom).html)  
[`UnlockWithAction`](../object/UnlockWithAction.html)  
[`predicate(UnlockWith)`](../object/predicate(UnlockWith).html)  
[`UnplugFromAction`](../object/UnplugFromAction.html)  
[`predicate(UnplugFrom)`](../object/predicate(UnplugFrom).html)  
[`UnscrewWithAction`](../object/UnscrewWithAction.html)  
[`predicate(UnscrewWith)`](../object/predicate(UnscrewWith).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actionIobjProp`](#actionIobjProp)[`askIobjResponseProd`](#askIobjResponseProd)[`checkIobjProp`](#checkIobjProp)[`execFirst`](#execFirst)[`iobjCur_`](#iobjCur_)[`iobjInfoCur_`](#iobjInfoCur_)[`iobjList_`](#iobjList_)[`iobjMatch`](#iobjMatch)[`iobjResolver_`](#iobjResolver_)[`isPrepositionalPhrasing`](#isPrepositionalPhrasing)[`lastObjList_`](#lastObjList_)[`needAnaphoricBinding_`](#needAnaphoricBinding_)[`omitIobjInDobjQuery`](#omitIobjInDobjQuery)[`preCondIobjProp`](#preCondIobjProp)[`predicateNounPhrases`](#predicateNounPhrases)[`remapIobjProp`](#remapIobjProp)[`resolveFirst`](#resolveFirst)[`resolveFirstEmpty`](#resolveFirstEmpty)[`tentativeDobj_`](#tentativeDobj_)[`tentativeIobj_`](#tentativeIobj_)[`verIobjProp`](#verIobjProp)

Inherited from `TAction` :  
[`actionAllowsAll`](../object/TAction.html#actionAllowsAll)[`actionDobjProp`](../object/TAction.html#actionDobjProp)[`actor_`](../object/TAction.html#actor_)[`askDobjResponseProd`](../object/TAction.html#askDobjResponseProd)[`checkDobjProp`](../object/TAction.html#checkDobjProp)[`dobjCur_`](../object/TAction.html#dobjCur_)[`dobjInfoCur_`](../object/TAction.html#dobjInfoCur_)[`dobjList_`](../object/TAction.html#dobjList_)[`dobjMatch`](../object/TAction.html#dobjMatch)[`dobjResolver_`](../object/TAction.html#dobjResolver_)[`issuer_`](../object/TAction.html#issuer_)[`preCondDobjProp`](../object/TAction.html#preCondDobjProp)[`remapDobjProp`](../object/TAction.html#remapDobjProp)[`verDobjProp`](../object/TAction.html#verDobjProp)[`whichMessageObject`](../object/TAction.html#whichMessageObject)

Inherited from `Action` :  
[`actionTime`](../object/Action.html#actionTime)[`afterActionMainList`](../object/Action.html#afterActionMainList)[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)[`defaultForRecursion`](../object/Action.html#defaultForRecursion)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`implicitMsg`](../object/Action.html#implicitMsg)[`includeInUndo`](../object/Action.html#includeInUndo)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`iterationCanceled`](../object/Action.html#iterationCanceled)[`originalAction`](../object/Action.html#originalAction)[`parentAction`](../object/Action.html#parentAction)[`preCond`](../object/Action.html#preCond)[`pronounOverride`](../object/Action.html#pronounOverride)[`remappedFrom`](../object/Action.html#remappedFrom)[`showDefaultReports`](../object/Action.html#showDefaultReports)[`synthParamID`](../object/Action.html#synthParamID)[`verbFlags`](../object/Action.html#verbFlags)[`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_)[`equivs_`](../object/Resolver.html#equivs_)[`isGlobalScope`](../object/Resolver.html#isGlobalScope)[`isSubResolver`](../object/Resolver.html#isSubResolver)[`scope_`](../object/Resolver.html#scope_)[`whichObject`](../object/Resolver.html#whichObject)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`announceAllDefaultObjects`](#announceAllDefaultObjects)[`announceDefaultObject`](#announceDefaultObject)[`canIobjResolveTo`](#canIobjResolveTo)[`checkAction`](#checkAction)[`checkRemapping`](#checkRemapping)[`copyTentativeObjs`](#copyTentativeObjs)[`createForMissingIobj`](#createForMissingIobj)[`createIobjResolver`](#createIobjResolver)[`doActionMain`](#doActionMain)[`execAction`](#execAction)[`filterAmbiguousIobj`](#filterAmbiguousIobj)[`filterPluralIobj`](#filterPluralIobj)[`getAllIobj`](#getAllIobj)[`getAnaphoricBinding`](#getAnaphoricBinding)[`getCurrentObjects`](#getCurrentObjects)[`getDefaultIobj`](#getDefaultIobj)[`getIobj`](#getIobj)[`getIobjCount`](#getIobjCount)[`getIobjFlags`](#getIobjFlags)[`getIobjInfo`](#getIobjInfo)[`getIobjResolver`](#getIobjResolver)[`getIobjTokens`](#getIobjTokens)[`getIobjWords`](#getIobjWords)[`getMatchForRole`](#getMatchForRole)[`getMessageParam`](#getMessageParam)[`getObjectForRole`](#getObjectForRole)[`getObjResponseProd`](#getObjResponseProd)[`getOtherMessageObjectPronoun`](#getOtherMessageObjectPronoun)[`getOtherObjectRole`](#getOtherObjectRole)[`getPreCondDescList`](#getPreCondDescList)[`getPreCondPropForRole`](#getPreCondPropForRole)[`getQuestionInf`](#getQuestionInf)[`getRemapPropForRole`](#getRemapPropForRole)[`getResolvedIobjList`](#getResolvedIobjList)[`getResolvedObjList`](#getResolvedObjList)[`getResolveInfo`](#getResolveInfo)[`getRoleFromIndex`](#getRoleFromIndex)[`getTentativeDobj`](#getTentativeDobj)[`getTentativeIobj`](#getTentativeIobj)[`getVerbPhrase`](#getVerbPhrase)[`getVerbPhrase2`](#getVerbPhrase2)[`getVerifyPropForRole`](#getVerifyPropForRole)[`initForMissingDobj`](#initForMissingDobj)[`initForMissingIobj`](#initForMissingIobj)[`initTentative`](#initTentative)[`needRemappedAnnouncement`](#needRemappedAnnouncement)[`resetAction`](#resetAction)[`resolvedObjectsInScope`](#resolvedObjectsInScope)[`resolveNouns`](#resolveNouns)[`retryWithAmbiguousIobj`](#retryWithAmbiguousIobj)[`retryWithMissingIobj`](#retryWithMissingIobj)[`setCurrentObjects`](#setCurrentObjects)[`setObjectMatches`](#setObjectMatches)[`setPronounByInput`](#setPronounByInput)[`setResolvedIobj`](#setResolvedIobj)[`setResolvedObjects`](#setResolvedObjects)[`testRetryDefaultIobj`](#testRetryDefaultIobj)[`verifyAction`](#verifyAction)[`whatObj`](#whatObj)

Inherited from `TAction` :  
[`adjustDefaultObjectPrep`](../object/TAction.html#adjustDefaultObjectPrep)[`canDobjResolveTo`](../object/TAction.html#canDobjResolveTo)[`construct`](../object/TAction.html#construct)[`createDobjResolver`](../object/TAction.html#createDobjResolver)[`createForMissingDobj`](../object/TAction.html#createForMissingDobj)[`createForRetry`](../object/TAction.html#createForRetry)[`filterAmbiguousDobj`](../object/TAction.html#filterAmbiguousDobj)[`filterPluralDobj`](../object/TAction.html#filterPluralDobj)[`getAllDobj`](../object/TAction.html#getAllDobj)[`getDefaultDobj`](../object/TAction.html#getDefaultDobj)[`getDobj`](../object/TAction.html#getDobj)[`getDobjCount`](../object/TAction.html#getDobjCount)[`getDobjFlags`](../object/TAction.html#getDobjFlags)[`getDobjInfo`](../object/TAction.html#getDobjInfo)[`getDobjResolver`](../object/TAction.html#getDobjResolver)[`getDobjTokens`](../object/TAction.html#getDobjTokens)[`getDobjWords`](../object/TAction.html#getDobjWords)[`getResolvedDobjList`](../object/TAction.html#getResolvedDobjList)[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)[`initResolver`](../object/TAction.html#initResolver)[`retryWithAmbiguousDobj`](../object/TAction.html#retryWithAmbiguousDobj)[`retryWithMissingDobj`](../object/TAction.html#retryWithMissingDobj)[`setResolvedDobj`](../object/TAction.html#setResolvedDobj)[`testRetryDefaultDobj`](../object/TAction.html#testRetryDefaultDobj)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind)[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)[`afterAction`](../object/Action.html#afterAction)[`afterActionMain`](../object/Action.html#afterActionMain)[`announceActionObject`](../object/Action.html#announceActionObject)[`beforeAction`](../object/Action.html#beforeAction)[`beforeActionMain`](../object/Action.html#beforeActionMain)[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)[`callAfterActionMain`](../object/Action.html#callAfterActionMain)[`callCatchAllProp`](../object/Action.html#callCatchAllProp)[`callPreConditions`](../object/Action.html#callPreConditions)[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)[`callVerifyProp`](../object/Action.html#callVerifyProp)[`cancelIteration`](../object/Action.html#cancelIteration)[`checkPreConditions`](../object/Action.html#checkPreConditions)[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)[`createActionFrom`](../object/Action.html#createActionFrom)[`createActionInstance`](../object/Action.html#createActionInstance)[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)[`doAction`](../object/Action.html#doAction)[`doActionOnce`](../object/Action.html#doActionOnce)[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)[`filterFacets`](../object/Action.html#filterFacets)[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)[`finishResolveList`](../object/Action.html#finishResolveList)[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)[`getInfPhrase`](../object/Action.html#getInfPhrase)[`getNotifyTable`](../object/Action.html#getNotifyTable)[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)[`getObjPreConditions`](../object/Action.html#getObjPreConditions)[`getOriginalAction`](../object/Action.html#getOriginalAction)[`getOrigTokenList`](../object/Action.html#getOrigTokenList)[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)[`getPredicate`](../object/Action.html#getPredicate)[`getPronounOverride`](../object/Action.html#getPronounOverride)[`getRemappedFrom`](../object/Action.html#getRemappedFrom)[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)[`isConversational`](../object/Action.html#isConversational)[`isNestedIn`](../object/Action.html#isNestedIn)[`isPartOf`](../object/Action.html#isPartOf)[`isRemapped`](../object/Action.html#isRemapped)[`makeResolveInfo`](../object/Action.html#makeResolveInfo)[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)[`noMatch`](../object/Action.html#noMatch)[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)[`objListPronoun`](../object/Action.html#objListPronoun)[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)[`recalcSenseContext`](../object/Action.html#recalcSenseContext)[`repeatAction`](../object/Action.html#repeatAction)[`resolveAction`](../object/Action.html#resolveAction)[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)[`saveActionForAgain`](../object/Action.html#saveActionForAgain)[`setImplicit`](../object/Action.html#setImplicit)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`setNested`](../object/Action.html#setNested)[`setOriginalAction`](../object/Action.html#setOriginalAction)[`setPronounOverride`](../object/Action.html#setPronounOverride)[`setRemapped`](../object/Action.html#setRemapped)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)[`whatTranslate`](../object/Action.html#whatTranslate)[`withVerifyResults`](../object/Action.html#withVerifyResults)[`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll)[`cacheScopeList`](../object/Resolver.html#cacheScopeList)[`filterAll`](../object/Resolver.html#filterAll)[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)[`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase)[`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase)[`filterPossRank`](../object/Resolver.html#filterPossRank)[`getAction`](../object/Resolver.html#getAction)[`getAll`](../object/Resolver.html#getAll)[`getAllDefaults`](../object/Resolver.html#getAllDefaults)[`getDefaultObject`](../object/Resolver.html#getDefaultObject)[`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver)[`getPronounDefault`](../object/Resolver.html#getPronounDefault)[`getQualifierResolver`](../object/Resolver.html#getQualifierResolver)[`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent)[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)[`getScopeList`](../object/Resolver.html#getScopeList)[`getTargetActor`](../object/Resolver.html#getTargetActor)[`matchName`](../object/Resolver.html#matchName)[`objInScope`](../object/Resolver.html#objInScope)[`resetResolver`](../object/Resolver.html#resetResolver)[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)[`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase)[`selectIndefinite`](../object/Resolver.html#selectIndefinite)[`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actionIobjProp"></span>

`actionIobjProp`

[action.t](../file/action.t.html)\[[5174](../source/action.t.html#5174)\]

<div class="desc">

*no description available*

</div>

<span id="askIobjResponseProd"></span>

`askIobjResponseProd`

[action.t](../file/action.t.html)\[[4087](../source/action.t.html#4087)\]

<div class="desc">

The root production to use to parse missing indirect object responses.
By default, this is singleNoun, but individual actions can override this
as appropriate.

Note that language modules might want to override this to allow for
special responses. For example, in English, most verbs will want to
override this with a specialized production that allows the appropriate
preposition in the response.

</div>

<span id="checkIobjProp"></span>

`checkIobjProp`

[action.t](../file/action.t.html)\[[5173](../source/action.t.html#5173)\]

<div class="desc">

*no description available*

</div>

<span id="execFirst"></span>

`execFirst`

[action.t](../file/action.t.html)\[[4126](../source/action.t.html#4126)\]

<div class="desc">

Determine which object to call first for action processing. By default,
we execute in the same order as we resolve, but this can be overridden
if necessary.

</div>

<span id="iobjCur_"></span>

`iobjCur_`

[action.t](../file/action.t.html)\[[5149](../source/action.t.html#5149)\]

<div class="desc">

current indirect object being executed

</div>

<span id="iobjInfoCur_"></span>

`iobjInfoCur_`

[action.t](../file/action.t.html)\[[5152](../source/action.t.html#5152)\]

<div class="desc">

the full ResolveInfo associated with iobjCur\_

</div>

<span id="iobjList_"></span>

`iobjList_`

[action.t](../file/action.t.html)\[[5146](../source/action.t.html#5146)\]

<div class="desc">

the indirect object list

</div>

<span id="iobjMatch"></span>

`iobjMatch`

[action.t](../file/action.t.html)\[[5143](../source/action.t.html#5143)\]

<div class="desc">

the predicate grammar must assign the indirect object production tree to
iobjMatch

</div>

<span id="iobjResolver_"></span>

`iobjResolver_`

[action.t](../file/action.t.html)\[[5155](../source/action.t.html#5155)\]

<div class="desc">

my cached indirect object resolver

</div>

<span id="isPrepositionalPhrasing"></span>

`isPrepositionalPhrasing`

[en_us.t](../file/en_us.t.html)\[[8646](../source/en_us.t.html#8646)\]

<div class="desc">

For VerbRules: does this verb rule have a prepositional or structural
phrasing of the direct and indirect object slots? That is, are the
object slots determined by a prepositional marker, or purely by word
order? For most English verbs with two objects, the indirect object is
marked by a preposition: GIVE BOOK TO BOB, PUT BOOK IN BOX. There are a
few English verbs that don't include any prespositional markers for the
objects, though, and assign the noun phrase roles purely by the word
order: GIVE BOB BOOK, SHOW BOB BOOK, THROW BOB BOOK. We define these
phrasings with separate verb rules, which we mark with this property.

We use this in ranking verb matches. Non-prepositional verb structures
are especially prone to matching where they shouldn't, because we can
often find a way to pick out words to fill the slots in the absence of
any marker words. For example, GIVE GREEN BOOK could be interpreted as
GIVE BOOK TO GREEN, where GREEN is assumed to be an adjective-ending
noun phrase; but the player probably means to give the green book to
someone who they assumed would be filled in as a default. So, whenever
we find an interpretation that involves a non-prespositional phrasing,
we'll use this flag to know we should be suspicious of it and try
alternative phrasing first.

Most two-object verbs in English use prepositional markers, so we'll set
this as the default. Individual VerbRules that use purely structural
phrasing should override this.

</div>

<span id="lastObjList_"></span>

`lastObjList_`

[action.t](../file/action.t.html)\[[4500](../source/action.t.html#4500)\]

<div class="desc">

The last object list we resolved. We keep track of this so that we can
provide it as the anaphoric binding, if an anaphor binding is requested.

</div>

<span id="needAnaphoricBinding_"></span>

`needAnaphoricBinding_`

[action.t](../file/action.t.html)\[[4508](../source/action.t.html#4508)\]

<div class="desc">

Flag: we have been asked for an anaphoric binding, but we don't have a
binding available. We'll check this after resolving the first-resolved
noun phrase so that we can go back and re-resolve it again after
resolving the other noun phrase.

</div>

<span id="omitIobjInDobjQuery"></span>

`omitIobjInDobjQuery`

[en_us.t](../file/en_us.t.html)\[[8616](../source/en_us.t.html#8616)\]

<div class="desc">

Flag: omit the indirect object in a query for a missing direct object.
For many verbs, if we already know the indirect object and we need to
ask for the direct object, the query sounds best when it includes the
indirect object: "what do you want to put in it?" or "what do you want
to take from it?". This is the default phrasing.

However, the corresponding query for some verbs sounds weird: "what do
you want to dig in with it?" or "whom do you want to ask about it?". For
such actions, this property should be set to true to indicate that the
indirect object should be omitted from the queries, which will change
the phrasing to "what do you want to dig in", "whom do you want to ask",
and so on.

</div>

<span id="preCondIobjProp"></span>

`preCondIobjProp`

[action.t](../file/action.t.html)\[[5172](../source/action.t.html#5172)\]

<div class="desc">

*no description available*

</div>

<span id="predicateNounPhrases"></span>

`predicateNounPhrases`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4322](../source/action.t.html#4322)\]

<div class="desc">

we have a direct and indirect object

</div>

<span id="remapIobjProp"></span>

`remapIobjProp`

[action.t](../file/action.t.html)\[[5183](../source/action.t.html#5183)\]

<div class="desc">

Action-remap properties for the indirect object. By convention, the
remapper properties are named remapDobjAction and remapIobjAction, for
the direct and indirect objects, respectively, where Action is replaced
by the root name of the action.

</div>

<span id="resolveFirst"></span>

`resolveFirst`

[action.t](../file/action.t.html)\[[4107](../source/action.t.html#4107)\]

<div class="desc">

Resolution order - returns DirectObject or IndirectObject to indicate
which noun phrase to resolve first in resolveNouns(). By default, we'll
resolve the indirect object first, but individual actions can override
this to resolve in a non-default order.

</div>

<span id="resolveFirstEmpty"></span>

`resolveFirstEmpty`

[action.t](../file/action.t.html)\[[4119](../source/action.t.html#4119)\]

<div class="desc">

Empty phrase resolution order. This is similar to the standard
resolution order (resolveFirst), but is used only when both the direct
and indirect objects are empty phrases.

When both phrases are empty, we will either use a default or prompt
interactively for the missing phrase. In most cases, it is desirable to
prompt interactively for a missing direct object first, regardless of
the usual resolution order.

</div>

<span id="tentativeDobj_"></span>

`tentativeDobj_`

[action.t](../file/action.t.html)\[[5162](../source/action.t.html#5162)\]

<div class="desc">

The tentative direct and indirect object lists. A tentative list is
available for the later-resolved object while resolving the
earlier-resolved object.

</div>

<span id="tentativeIobj_"></span>

`tentativeIobj_`

[action.t](../file/action.t.html)\[[5163](../source/action.t.html#5163)\]

<div class="desc">

*no description available*

</div>

<span id="verIobjProp"></span>

`verIobjProp`

[action.t](../file/action.t.html)\[[5171](../source/action.t.html#5171)\]

<div class="desc">

Verification and action properties for the indirect object. By
convention, the verification method for the indirect object of a
two-object action is verIobjXxx; the check method is checkIobjXxx; and
the action method is actionIobjXxx.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="announceAllDefaultObjects"></span>

`announceAllDefaultObjects (allResolved)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8767](../source/en_us.t.html#8767)\]

<div class="desc">

announce all defaulted objects

</div>

<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, resolvedAllObjects)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8711](../source/en_us.t.html#8711)\]

<div class="desc">

announce a default object used with this action

</div>

<span id="canIobjResolveTo"></span>

`canIobjResolveTo (obj)`

[action.t](../file/action.t.html)\[[4135](../source/action.t.html#4135)\]

<div class="desc">

Can the indirect object potentially resolve to the given simulation
object? This only determines if the object is a \*syntactic\* match,
meaning that it can match at a vocabulary and grammar level. This
doesn't test it for logicalness or check that it's an otherwise valid
resolution.

</div>

<span id="checkAction"></span>

`checkAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4976](../source/action.t.html#4976)\]

<div class="desc">

Check the command.

For a two-object action, this first calls the catch-all 'check' methods
(the dobjFor(Default) and dobjFor(All) methods) on the two objects
(indirect object first), then calls the 'check' methods for this
specific action (direct object first).

</div>

<span id="checkRemapping"></span>

`checkRemapping ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4935](../source/action.t.html#4935)\]

<div class="desc">

Check for remapping

</div>

<span id="copyTentativeObjs"></span>

`copyTentativeObjs ( )`

[action.t](../file/action.t.html)\[[5122](../source/action.t.html#5122)\]

<div class="desc">

Copy one tentative object list to the other. This is useful when an
object's verifier for one TIAction wants to forward the call to the
other object verifier for a different TIAction.

</div>

<span id="createForMissingIobj"></span>

`createForMissingIobj (orig, asker)`

[action.t](../file/action.t.html)\[[4010](../source/action.t.html#4010)\]

<div class="desc">

Create an instance of this action for retrying a given single-object
action with a missing indirect object.

</div>

<span id="createIobjResolver"></span>

`createIobjResolver (issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[4544](../source/action.t.html#4544)\]

<div class="desc">

Create our indirect object resolver. By default, we'll use a basic
indirect object resolver.

</div>

<span id="doActionMain"></span>

`doActionMain ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4590](../source/action.t.html#4590)\]

<div class="desc">

Execute the action. We'll run through the execution sequence once for
each resolved object in our direct or indirect object list, depending on
which one is the list and which one is the singleton.

</div>

<span id="execAction"></span>

`execAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5008](../source/action.t.html#5008)\]

<div class="desc">

Execute the command.

</div>

<span id="filterAmbiguousIobj"></span>

`filterAmbiguousIobj (lst, requiredNum, np)`

[action.t](../file/action.t.html)\[[4560](../source/action.t.html#4560)\]

<div class="desc">

filter an ambiguous indirect object noun phrase

</div>

<span id="filterPluralIobj"></span>

`filterPluralIobj (lst, np)`

[action.t](../file/action.t.html)\[[4569](../source/action.t.html#4569)\]

<div class="desc">

filter a plural phrase

</div>

<span id="getAllIobj"></span>

`getAllIobj (actor, scopeList)`

[action.t](../file/action.t.html)\[[4554](../source/action.t.html#4554)\]

<div class="desc">

Resolve 'all' for the indirect object. By default, we'll return
everything in the scope list.

</div>

<span id="getAnaphoricBinding"></span>

`getAnaphoricBinding (typ)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4476](../source/action.t.html#4476)\]

<div class="desc">

Get the anaphoric binding for the noun phrase we're currently resolving.

</div>

<span id="getCurrentObjects"></span>

`getCurrentObjects ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5101](../source/action.t.html#5101)\]

<div class="desc">

Get the list of active objects. We have a direct and indirect object.

</div>

<span id="getDefaultIobj"></span>

`getDefaultIobj (np, resolver)`

[action.t](../file/action.t.html)\[[4577](../source/action.t.html#4577)\]

<div class="desc">

get the default indirect object

</div>

<span id="getIobj"></span>

`getIobj ( )`

[action.t](../file/action.t.html)\[[5072](../source/action.t.html#5072)\]

<div class="desc">

get the current indirect object being executed

</div>

<span id="getIobjCount"></span>

`getIobjCount ( )`

[action.t](../file/action.t.html)\[[5081](../source/action.t.html#5081)\]

<div class="desc">

get the number of direct objects

</div>

<span id="getIobjFlags"></span>

`getIobjFlags ( )`

[action.t](../file/action.t.html)\[[5078](../source/action.t.html#5078)\]

<div class="desc">

get the object resolution flags for the indirect object

</div>

<span id="getIobjInfo"></span>

`getIobjInfo ( )`

[action.t](../file/action.t.html)\[[5075](../source/action.t.html#5075)\]

<div class="desc">

get the full ResolveInfo associated with the current indirect object

</div>

<span id="getIobjResolver"></span>

`getIobjResolver (issuingActor, targetActor, reset)`

[action.t](../file/action.t.html)\[[4526](../source/action.t.html#4526)\]

<div class="desc">

get our indirect object resolver, or create one if we haven't already
cached one

</div>

<span id="getIobjTokens"></span>

`getIobjTokens ( )`

[action.t](../file/action.t.html)\[[5084](../source/action.t.html#5084)\]

<div class="desc">

get the original token list of the current indirect object phrase

</div>

<span id="getIobjWords"></span>

`getIobjWords ( )`

[action.t](../file/action.t.html)\[[5091](../source/action.t.html#5091)\]

<div class="desc">

get the original words (as a list of strings) of the current iobj

</div>

<span id="getMatchForRole"></span>

`getMatchForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4388](../source/action.t.html#4388)\]

<div class="desc">

get the match tree for the noun phrase in the given role

</div>

<span id="getMessageParam"></span>

`getMessageParam (objName)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5057](../source/action.t.html#5057)\]

<div class="desc">

Get a message parameter object for the action. We define 'dobj' as the
direct object and 'iobj' as the indirect object, in addition to any
inherited targets.

</div>

<span id="getObjectForRole"></span>

`getObjectForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4335](../source/action.t.html#4335)\]

<div class="desc">

get the resolved object in a given role

</div>

<span id="getObjResponseProd"></span>

`getObjResponseProd (resolver)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4090](../source/action.t.html#4090)\]

<div class="desc">

get the missing object response production for a given role

</div>

<span id="getOtherMessageObjectPronoun"></span>

`getOtherMessageObjectPronoun (which)`

[en_us.t](../file/en_us.t.html)\[[8852](../source/en_us.t.html#8852)\]

<div class="desc">

Get the pronoun for the message object in the given role.

</div>

<span id="getOtherObjectRole"></span>

`getOtherObjectRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4381](../source/action.t.html#4381)\]

<div class="desc">

get the OtherObject role for the given role

</div>

<span id="getPreCondDescList"></span>

`getPreCondDescList ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5041](../source/action.t.html#5041)\]

<div class="desc">

get the precondition descriptor list for the action

</div>

<span id="getPreCondPropForRole"></span>

`getPreCondPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4401](../source/action.t.html#4401)\]

<div class="desc">

get the 'preCond' property for a given object role

</div>

<span id="getQuestionInf"></span>

`getQuestionInf (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8777](../source/en_us.t.html#8777)\]

<div class="desc">

show the verb's basic infinitive form for an interrogative

</div>

<span id="getRemapPropForRole"></span>

`getRemapPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4407](../source/action.t.html#4407)\]

<div class="desc">

get the 'remap' property for a given object role

</div>

<span id="getResolvedIobjList"></span>

`getResolvedIobjList ( )`

[action.t](../file/action.t.html)\[[4420](../source/action.t.html#4420)\]

<div class="desc">

get the list of resolved indirect objects

</div>

<span id="getResolvedObjList"></span>

`getResolvedObjList (which)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4413](../source/action.t.html#4413)\]

<div class="desc">

get the list of resolved objects in the given role

</div>

<span id="getResolveInfo"></span>

`getResolveInfo (obj, oldRole)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4342](../source/action.t.html#4342)\]

<div class="desc">

get the ResolveInfo for the given resolved object

</div>

<span id="getRoleFromIndex"></span>

`getRoleFromIndex (idx)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4325](../source/action.t.html#4325)\]

<div class="desc">

get an object role

</div>

<span id="getTentativeDobj"></span>

`getTentativeDobj ( )`

[action.t](../file/action.t.html)\[[5136](../source/action.t.html#5136)\]

<div class="desc">

Get the tentative direct/indirect object resolution lists. A tentative
list is available for the later-resolved object while resolving the
earlier-resolved object.

</div>

<span id="getTentativeIobj"></span>

`getTentativeIobj ( )`

[action.t](../file/action.t.html)\[[5137](../source/action.t.html#5137)\]

<div class="desc">

*no description available*

</div>

<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8883](../source/en_us.t.html#8883)\]

<div class="desc">

get the verb phrase in infinitive or participle form

</div>

<span id="getVerbPhrase2"></span>

`getVerbPhrase2 (inf, vp, dobjText, dobjIsPronoun, iobjText)`

[en_us.t](../file/en_us.t.html)\[[8927](../source/en_us.t.html#8927)\]

<div class="desc">

Get the verb phrase for a two-object (dobj + iobj) phrasing. This is a
class method, so that it can be reused by unrelated (i.e., non-TIAction)
classes that also use two-object syntax but with other internal
structures. This is the two-object equivalent of
TAction.getVerbPhrase1().

</div>

<span id="getVerifyPropForRole"></span>

`getVerifyPropForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4395](../source/action.t.html#4395)\]

<div class="desc">

get the 'verify' property for a given object role

</div>

<span id="initForMissingDobj"></span>

`initForMissingDobj (orig)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4040](../source/action.t.html#4040)\]

<div class="desc">

Initialize the action for retrying with a missing direct object.

If we're trying a TIAction, we can only be coming from a TAction (since
that's the only kind of original action that can turn into a two-object,
at least in the base library). That means the original action already
has a direct object. Now, since we're asking for a MISSING direct
object, the only possibility is that the original action's direct object
is our INDIRECT object. For example: SWEEP WITH BROOM is turning into
SWEEP \<what\> WITH BROOM.

</div>

<span id="initForMissingIobj"></span>

`initForMissingIobj (orig)`

[action.t](../file/action.t.html)\[[4063](../source/action.t.html#4063)\]

<div class="desc">

Initialize the action for retrying with a missing indirect object.

We can only be coming from a TAction, so the TAction will have a direct
object already. Simply copy that as our own direct object. For example:
UNLOCK DOOR is turning into UNLOCK DOOR WITH \<what\>.

</div>

<span id="initTentative"></span>

`initTentative (issuingActor, targetActor, whichObj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4869](../source/action.t.html#4869)\]

<div class="desc">

initialize tentative resolutions for other noun phrases

</div>

<span id="needRemappedAnnouncement"></span>

`needRemappedAnnouncement (info)`

[action.t](../file/action.t.html)\[[4823](../source/action.t.html#4823)\]

<div class="desc">

Determine if we need to announce this action when the action was
remapped, based on the resolution information for one of our objects. We
need to announce a remapped action when either object had unclear
disambiguation or was defaulted.

</div>

<span id="resetAction"></span>

`resetAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[3936](../source/action.t.html#3936)\]

<div class="desc">

*no description available*

</div>

<span id="resolvedObjectsInScope"></span>

`resolvedObjectsInScope ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4511](../source/action.t.html#4511)\]

<div class="desc">

check that the resolved objects are in scope

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4145](../source/action.t.html#4145)\],
[en_us.t](../file/en_us.t.html)\[[8649](../source/en_us.t.html#8649)\]

<div class="desc">

resolve our noun phrases to objects

*Modified in
[en_us.t](../file/en_us.t.html)\[[8649](../source/en_us.t.html#8649)\]:*  
resolve noun phrases

</div>

<span id="retryWithAmbiguousIobj"></span>

`retryWithAmbiguousIobj (orig, objs, asker, objPhrase)`

[action.t](../file/action.t.html)\[[3966](../source/action.t.html#3966)\]

<div class="desc">

Retry an action as a two-object action with an ambiguous indirect
object. We'll ask which of the given possible objects is intended.

</div>

<span id="retryWithMissingIobj"></span>

`retryWithMissingIobj (orig, asker)`

[action.t](../file/action.t.html)\[[3955](../source/action.t.html#3955)\]

<div class="desc">

Retry a single-object action as a two-object action. We'll treat the
original action's direct object list as our direct object list, and
obtain an indirect object using the normal means (first looking for a
default, then prompting the player if we can't find a suitable default).
'orig' is the original single-object action.

This routine terminates with 'exit' if it doesn't throw some other
error.

</div>

<span id="setCurrentObjects"></span>

`setCurrentObjects (lst)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5107](../source/action.t.html#5107)\]

<div class="desc">

set the current objects

</div>

<span id="setObjectMatches"></span>

`setObjectMatches (dobj, iobj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4457](../source/action.t.html#4457)\]

<div class="desc">

manually set the unresolved object noun phrase match trees

</div>

<span id="setPronounByInput"></span>

`setPronounByInput (lst)`

[action.t](../file/action.t.html)\[[4766](../source/action.t.html#4766)\]

<div class="desc">

Set the pronoun according to the pronoun type actually used in the
input. For example, if we said PUT BOX ON IT, we want IT to continue
referring to whatever IT referred to before this command - we
specifically do NOT want IT to refer to the BOX in this case.

</div>

<span id="setResolvedIobj"></span>

`setResolvedIobj (iobj)`

[action.t](../file/action.t.html)\[[4443](../source/action.t.html#4443)\]

<div class="desc">

set a resolved iobj

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects (dobj, iobj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4433](../source/action.t.html#4433)\]

<div class="desc">

Manually set the resolved objects. We'll set our direct and indirect
objects.

</div>

<span id="testRetryDefaultIobj"></span>

`testRetryDefaultIobj (orig)`

[action.t](../file/action.t.html)\[[3989](../source/action.t.html#3989)\]

<div class="desc">

Test to see if askForIobj() would find a default indirect object.
Returns true if there's a default, nil if not. If this returns true,
then askForIobj() will simply take the default and proceed; otherwise,
it will have to actually ask the user for the missing information.

</div>

<span id="verifyAction"></span>

`verifyAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[4837](../source/action.t.html#4837)\]

<div class="desc">

Verify the action.

</div>

<span id="whatObj"></span>

`whatObj (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8685](../source/en_us.t.html#8685)\]

<div class="desc">

get the interrogative for one of our objects

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
