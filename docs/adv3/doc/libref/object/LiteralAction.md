---
layout: docs
---
<span class="title">LiteralAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[5257](../source/action.t.html#5257)\],
[en_us.t](../file/en_us.t.html)\[[8985](../source/en_us.t.html#8985)\]

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



An action with a literal phrase as its only object, such as "say \<any
text\>". We'll accept anything as the literal phrase - a number, a
quoted string, or arbitrary words - and treat them all simply as text.

The grammar rules that produce these actions must set literalMatch to
the literal phrase's match tree.

Because we don't have any actual resolved objects, we're based on
IAction. Subclasses that implement particular literal actions should
override execAction() to carry out the action; this method can call the
getLiteral() method of self to get a string giving the literal text.

*Modified in
[en_us.t](../file/en_us.t.html)\[[8985](../source/en_us.t.html#8985)\]:*  
English-specific additions for verbs taking a literal phrase as the sole
object.

`class `**`LiteralAction`**` :   `[`LiteralActionBase`](../object/LiteralActionBase.html)[`IAction`](../object/IAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LiteralAction`**  
[`LiteralActionBase`](../object/LiteralActionBase.html)  
`                 object`  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`LiteralAction`**  
[`OopsAction`](../object/OopsAction.html)  
[`predicate(Oops)`](../object/predicate(Oops).html)  
[`SpecialTopicAction`](../object/SpecialTopicAction.html)  
[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`predicateNounPhrases`](#predicateNounPhrases)[`verbPhrase`](#verbPhrase)

Inherited from `LiteralActionBase` :  
[`text_`](../object/LiteralActionBase.html#text_)



Inherited from `Action` :  
[`actionTime`](../object/Action.html#actionTime)[`afterActionMainList`](../object/Action.html#afterActionMainList)[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)[`defaultForRecursion`](../object/Action.html#defaultForRecursion)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`implicitMsg`](../object/Action.html#implicitMsg)[`includeInUndo`](../object/Action.html#includeInUndo)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`iterationCanceled`](../object/Action.html#iterationCanceled)[`originalAction`](../object/Action.html#originalAction)[`parentAction`](../object/Action.html#parentAction)[`preCond`](../object/Action.html#preCond)[`pronounOverride`](../object/Action.html#pronounOverride)[`remappedFrom`](../object/Action.html#remappedFrom)[`showDefaultReports`](../object/Action.html#showDefaultReports)[`synthParamID`](../object/Action.html#synthParamID)[`verbFlags`](../object/Action.html#verbFlags)[`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getQuestionInf`](#getQuestionInf)[`getVerbPhrase`](#getVerbPhrase)[`resolveNouns`](#resolveNouns)[`whatObj`](#whatObj)

Inherited from `LiteralActionBase` :  
[`getLiteral`](../object/LiteralActionBase.html#getLiteral)[`getMessageParam`](../object/LiteralActionBase.html#getMessageParam)[`setObjectMatches`](../object/LiteralActionBase.html#setObjectMatches)[`setResolvedObjects`](../object/LiteralActionBase.html#setResolvedObjects)

Inherited from `IAction` :  
[`doActionMain`](../object/IAction.html#doActionMain)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind)[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)[`afterAction`](../object/Action.html#afterAction)[`afterActionMain`](../object/Action.html#afterActionMain)[`announceActionObject`](../object/Action.html#announceActionObject)[`announceAllDefaultObjects`](../object/Action.html#announceAllDefaultObjects)[`announceDefaultObject`](../object/Action.html#announceDefaultObject)[`beforeAction`](../object/Action.html#beforeAction)[`beforeActionMain`](../object/Action.html#beforeActionMain)[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)[`callAfterActionMain`](../object/Action.html#callAfterActionMain)[`callCatchAllProp`](../object/Action.html#callCatchAllProp)[`callPreConditions`](../object/Action.html#callPreConditions)[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)[`callVerifyProp`](../object/Action.html#callVerifyProp)[`cancelIteration`](../object/Action.html#cancelIteration)[`checkAction`](../object/Action.html#checkAction)[`checkPreConditions`](../object/Action.html#checkPreConditions)[`checkRemapping`](../object/Action.html#checkRemapping)[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)[`createActionFrom`](../object/Action.html#createActionFrom)[`createActionInstance`](../object/Action.html#createActionInstance)[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)[`doAction`](../object/Action.html#doAction)[`doActionOnce`](../object/Action.html#doActionOnce)[`execAction`](../object/Action.html#execAction)[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)[`filterFacets`](../object/Action.html#filterFacets)[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)[`finishResolveList`](../object/Action.html#finishResolveList)[`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding)[`getCurrentObjects`](../object/Action.html#getCurrentObjects)[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)[`getInfPhrase`](../object/Action.html#getInfPhrase)[`getMatchForRole`](../object/Action.html#getMatchForRole)[`getNotifyTable`](../object/Action.html#getNotifyTable)[`getObjectForRole`](../object/Action.html#getObjectForRole)[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)[`getObjPreConditions`](../object/Action.html#getObjPreConditions)[`getObjResponseProd`](../object/Action.html#getObjResponseProd)[`getOriginalAction`](../object/Action.html#getOriginalAction)[`getOrigTokenList`](../object/Action.html#getOrigTokenList)[`getOtherObjectRole`](../object/Action.html#getOtherObjectRole)[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)[`getPreCondDescList`](../object/Action.html#getPreCondDescList)[`getPreCondPropForRole`](../object/Action.html#getPreCondPropForRole)[`getPredicate`](../object/Action.html#getPredicate)[`getPronounOverride`](../object/Action.html#getPronounOverride)[`getRemappedFrom`](../object/Action.html#getRemappedFrom)[`getRemapPropForRole`](../object/Action.html#getRemapPropForRole)[`getResolvedObjList`](../object/Action.html#getResolvedObjList)[`getResolveInfo`](../object/Action.html#getResolveInfo)[`getRoleFromIndex`](../object/Action.html#getRoleFromIndex)[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)[`getVerifyPropForRole`](../object/Action.html#getVerifyPropForRole)[`initTentative`](../object/Action.html#initTentative)[`isConversational`](../object/Action.html#isConversational)[`isNestedIn`](../object/Action.html#isNestedIn)[`isPartOf`](../object/Action.html#isPartOf)[`isRemapped`](../object/Action.html#isRemapped)[`makeResolveInfo`](../object/Action.html#makeResolveInfo)[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)[`noMatch`](../object/Action.html#noMatch)[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)[`objListPronoun`](../object/Action.html#objListPronoun)[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)[`recalcSenseContext`](../object/Action.html#recalcSenseContext)[`repeatAction`](../object/Action.html#repeatAction)[`resetAction`](../object/Action.html#resetAction)[`resolveAction`](../object/Action.html#resolveAction)[`resolvedObjectsInScope`](../object/Action.html#resolvedObjectsInScope)[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)[`saveActionForAgain`](../object/Action.html#saveActionForAgain)[`setCurrentObjects`](../object/Action.html#setCurrentObjects)[`setImplicit`](../object/Action.html#setImplicit)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`setNested`](../object/Action.html#setNested)[`setOriginalAction`](../object/Action.html#setOriginalAction)[`setPronounOverride`](../object/Action.html#setPronounOverride)[`setRemapped`](../object/Action.html#setRemapped)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`verifyAction`](../object/Action.html#verifyAction)[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)[`whatTranslate`](../object/Action.html#whatTranslate)[`withVerifyResults`](../object/Action.html#withVerifyResults)[`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="predicateNounPhrases"></span>

`predicateNounPhrases`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5280](../source/action.t.html#5280)\]



we have a literal phrase as our only noun phrase



<span id="verbPhrase"></span>

`verbPhrase`

[en_us.t](../file/en_us.t.html)\[[8987](../source/en_us.t.html#8987)\]



provide a base verbPhrase, in case an instance leaves it out



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getQuestionInf"></span>

`getQuestionInf (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9002](../source/en_us.t.html#9002)\]



handle this as though the literal were a direct object phrase



<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8996](../source/en_us.t.html#8996)\]



use the same processing as TAction



<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5262](../source/action.t.html#5262)\]



Resolve objects. We don't actually have any objects to resolve, but we
do have to get the text for the literal phrase.



<span id="whatObj"></span>

`whatObj (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[8990](../source/en_us.t.html#8990)\]



get an interrogative word for an object of the action





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


