---
---
<span class="title">LiteralTAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[5311](../source/action.t.html#5311)\],
[en_us.t](../file/en_us.t.html)\[[9014](../source/en_us.t.html#9014)\]

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

An action with a direct object and a literal, such as "turn dial to
\<setting\>" or "type \<string\> on keypad". We'll accept anything as
the literal phrase - a number, a quoted string, or arbitrary words - and
treat them all simply as text.

The grammar rules that produce these actions must set dobjMatch to the
resolvable object of the command, and must set literalMatch to the
literal phrase's match tree. Note that we use dobjMatch as the
resolvable object even if the object serves grammatically as the
indirect object - this is a simplification, and the true grammatical
purpose of the object isn't important since there's only one true object
in the command.

When referring to objects by role (such as in remapTo), callers should
ALWAYS refer to the resolvable object as DirectObject, and the literal
phrase as IndirectObject.

Each subclass must set the property whichMessageLiteral to the
grammatical role (DirectObject, IndirectObject) the literal phrase plays
for message generation purposes. This only affects messages; it doesn't
affect anything else; in particular, regardless of the
whichMessageLiteral setting, callers should always refer to the literal
as IndirectObject when calling getObjectForRole() and the like, and
should always call getDobj() to get the resolved version of the
resolvable object phrase.

*Modified in
[en_us.t](../file/en_us.t.html)\[[9014](../source/en_us.t.html#9014)\]:*  
English-specific additions for verbs of a direct object and a literal
phrase.

`class `**`LiteralTAction`**` :   `[`LiteralActionBase`](../object/LiteralActionBase.html)`   `[`TAction`](../object/TAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LiteralTAction`**  
`         `[`LiteralActionBase`](../object/LiteralActionBase.html)  
`                 object`  
`         `[`TAction`](../object/TAction.html)  
`                 `[`Action`](../object/Action.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
`                 `[`Resolver`](../object/Resolver.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LiteralTAction`**  
`         `[`EnterOnAction`](../object/EnterOnAction.html)  
`                 `[`predicate(EnterOn)`](../object/predicate(EnterOn).html)  
`                 `[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)  
`         `[`SetToAction`](../object/SetToAction.html)  
`                 `[`predicate(SetTo)`](../object/predicate(SetTo).html)  
`         `[`TurnToAction`](../object/TurnToAction.html)  
`                 `[`predicate(TurnTo)`](../object/predicate(TurnTo).html)  
`         `[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)  
`                 `[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)  
`                 `[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`predicateNounPhrases`](#predicateNounPhrases)`  `[`whichMessageLiteral`](#whichMessageLiteral)`  `[`whichMessageObject`](#whichMessageObject)`  `[`whichObject`](#whichObject)`  `

Inherited from `LiteralActionBase` :  
` `[`text_`](../object/LiteralActionBase.html#text_)`  `

Inherited from `TAction` :  
` `[`actionAllowsAll`](../object/TAction.html#actionAllowsAll)`  `[`actionDobjProp`](../object/TAction.html#actionDobjProp)`  `[`actor_`](../object/TAction.html#actor_)`  `[`askDobjResponseProd`](../object/TAction.html#askDobjResponseProd)`  `[`checkDobjProp`](../object/TAction.html#checkDobjProp)`  `[`dobjCur_`](../object/TAction.html#dobjCur_)`  `[`dobjInfoCur_`](../object/TAction.html#dobjInfoCur_)`  `[`dobjList_`](../object/TAction.html#dobjList_)`  `[`dobjMatch`](../object/TAction.html#dobjMatch)`  `[`dobjResolver_`](../object/TAction.html#dobjResolver_)`  `[`issuer_`](../object/TAction.html#issuer_)`  `[`preCondDobjProp`](../object/TAction.html#preCondDobjProp)`  `[`remapDobjProp`](../object/TAction.html#remapDobjProp)`  `[`verDobjProp`](../object/TAction.html#verDobjProp)`  `

Inherited from `Action` :  
` `[`actionTime`](../object/Action.html#actionTime)`  `[`afterActionMainList`](../object/Action.html#afterActionMainList)`  `[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)`  `[`defaultForRecursion`](../object/Action.html#defaultForRecursion)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`implicitMsg`](../object/Action.html#implicitMsg)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`iterationCanceled`](../object/Action.html#iterationCanceled)`  `[`originalAction`](../object/Action.html#originalAction)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`preCond`](../object/Action.html#preCond)`  `[`pronounOverride`](../object/Action.html#pronounOverride)`  `[`remappedFrom`](../object/Action.html#remappedFrom)`  `[`showDefaultReports`](../object/Action.html#showDefaultReports)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`verbFlags`](../object/Action.html#verbFlags)`  `[`verifiedOkay`](../object/Action.html#verifiedOkay)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

Inherited from `Resolver` :  
` `[`action_`](../object/Resolver.html#action_)`  `[`equivs_`](../object/Resolver.html#equivs_)`  `[`isGlobalScope`](../object/Resolver.html#isGlobalScope)`  `[`isSubResolver`](../object/Resolver.html#isSubResolver)`  `[`scope_`](../object/Resolver.html#scope_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`announceDefaultObject`](#announceDefaultObject)`  `[`getCurrentObjects`](#getCurrentObjects)`  `[`getMatchForRole`](#getMatchForRole)`  `[`getObjectForRole`](#getObjectForRole)`  `[`getOtherMessageObjectPronoun`](#getOtherMessageObjectPronoun)`  `[`getOtherObjectRole`](#getOtherObjectRole)`  `[`getQuestionInf`](#getQuestionInf)`  `[`getRoleFromIndex`](#getRoleFromIndex)`  `[`getVerbPhrase`](#getVerbPhrase)`  `[`initForMissingDobj`](#initForMissingDobj)`  `[`initForMissingLiteral`](#initForMissingLiteral)`  `[`resolveNouns`](#resolveNouns)`  `[`retryWithMissingLiteral`](#retryWithMissingLiteral)`  `[`setCurrentObjects`](#setCurrentObjects)`  `[`setObjectMatches`](#setObjectMatches)`  `[`setResolvedObjects`](#setResolvedObjects)`  `[`whatObj`](#whatObj)`  `

Inherited from `LiteralActionBase` :  
` `[`getLiteral`](../object/LiteralActionBase.html#getLiteral)`  `[`getMessageParam`](../object/LiteralActionBase.html#getMessageParam)`  `

Inherited from `TAction` :  
` `[`adjustDefaultObjectPrep`](../object/TAction.html#adjustDefaultObjectPrep)`  `[`announceAllDefaultObjects`](../object/TAction.html#announceAllDefaultObjects)`  `[`canDobjResolveTo`](../object/TAction.html#canDobjResolveTo)`  `[`checkAction`](../object/TAction.html#checkAction)`  `[`checkRemapping`](../object/TAction.html#checkRemapping)`  `[`construct`](../object/TAction.html#construct)`  `[`createDobjResolver`](../object/TAction.html#createDobjResolver)`  `[`createForMissingDobj`](../object/TAction.html#createForMissingDobj)`  `[`createForRetry`](../object/TAction.html#createForRetry)`  `[`doActionMain`](../object/TAction.html#doActionMain)`  `[`execAction`](../object/TAction.html#execAction)`  `[`filterAmbiguousDobj`](../object/TAction.html#filterAmbiguousDobj)`  `[`filterPluralDobj`](../object/TAction.html#filterPluralDobj)`  `[`getAllDobj`](../object/TAction.html#getAllDobj)`  `[`getDefaultDobj`](../object/TAction.html#getDefaultDobj)`  `[`getDobj`](../object/TAction.html#getDobj)`  `[`getDobjCount`](../object/TAction.html#getDobjCount)`  `[`getDobjFlags`](../object/TAction.html#getDobjFlags)`  `[`getDobjInfo`](../object/TAction.html#getDobjInfo)`  `[`getDobjResolver`](../object/TAction.html#getDobjResolver)`  `[`getDobjTokens`](../object/TAction.html#getDobjTokens)`  `[`getDobjWords`](../object/TAction.html#getDobjWords)`  `[`getObjResponseProd`](../object/TAction.html#getObjResponseProd)`  `[`getPreCondDescList`](../object/TAction.html#getPreCondDescList)`  `[`getPreCondPropForRole`](../object/TAction.html#getPreCondPropForRole)`  `[`getRemapPropForRole`](../object/TAction.html#getRemapPropForRole)`  `[`getResolvedDobjList`](../object/TAction.html#getResolvedDobjList)`  `[`getResolvedObjList`](../object/TAction.html#getResolvedObjList)`  `[`getResolveInfo`](../object/TAction.html#getResolveInfo)`  `[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)`  `[`getVerifyPropForRole`](../object/TAction.html#getVerifyPropForRole)`  `[`initResolver`](../object/TAction.html#initResolver)`  `[`initTentative`](../object/TAction.html#initTentative)`  `[`resetAction`](../object/TAction.html#resetAction)`  `[`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope)`  `[`retryWithAmbiguousDobj`](../object/TAction.html#retryWithAmbiguousDobj)`  `[`retryWithMissingDobj`](../object/TAction.html#retryWithMissingDobj)`  `[`setResolvedDobj`](../object/TAction.html#setResolvedDobj)`  `[`testRetryDefaultDobj`](../object/TAction.html#testRetryDefaultDobj)`  `[`verifyAction`](../object/TAction.html#verifyAction)`  `

Inherited from `Action` :  
` `[`actionOfKind`](../object/Action.html#actionOfKind)`  `[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`afterActionMain`](../object/Action.html#afterActionMain)`  `[`announceActionObject`](../object/Action.html#announceActionObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`beforeActionMain`](../object/Action.html#beforeActionMain)`  `[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)`  `[`callAfterActionMain`](../object/Action.html#callAfterActionMain)`  `[`callCatchAllProp`](../object/Action.html#callCatchAllProp)`  `[`callPreConditions`](../object/Action.html#callPreConditions)`  `[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)`  `[`callVerifyProp`](../object/Action.html#callVerifyProp)`  `[`cancelIteration`](../object/Action.html#cancelIteration)`  `[`checkPreConditions`](../object/Action.html#checkPreConditions)`  `[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)`  `[`createActionFrom`](../object/Action.html#createActionFrom)`  `[`createActionInstance`](../object/Action.html#createActionInstance)`  `[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)`  `[`doAction`](../object/Action.html#doAction)`  `[`doActionOnce`](../object/Action.html#doActionOnce)`  `[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)`  `[`filterFacets`](../object/Action.html#filterFacets)`  `[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)`  `[`finishResolveList`](../object/Action.html#finishResolveList)`  `[`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding)`  `[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)`  `[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)`  `[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)`  `[`getInfPhrase`](../object/Action.html#getInfPhrase)`  `[`getNotifyTable`](../object/Action.html#getNotifyTable)`  `[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)`  `[`getObjPreConditions`](../object/Action.html#getObjPreConditions)`  `[`getOriginalAction`](../object/Action.html#getOriginalAction)`  `[`getOrigTokenList`](../object/Action.html#getOrigTokenList)`  `[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)`  `[`getPredicate`](../object/Action.html#getPredicate)`  `[`getPronounOverride`](../object/Action.html#getPronounOverride)`  `[`getRemappedFrom`](../object/Action.html#getRemappedFrom)`  `[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)`  `[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isNestedIn`](../object/Action.html#isNestedIn)`  `[`isPartOf`](../object/Action.html#isPartOf)`  `[`isRemapped`](../object/Action.html#isRemapped)`  `[`makeResolveInfo`](../object/Action.html#makeResolveInfo)`  `[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)`  `[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)`  `[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)`  `[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)`  `[`noMatch`](../object/Action.html#noMatch)`  `[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)`  `[`objListPronoun`](../object/Action.html#objListPronoun)`  `[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)`  `[`recalcSenseContext`](../object/Action.html#recalcSenseContext)`  `[`repeatAction`](../object/Action.html#repeatAction)`  `[`resolveAction`](../object/Action.html#resolveAction)`  `[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)`  `[`saveActionForAgain`](../object/Action.html#saveActionForAgain)`  `[`setImplicit`](../object/Action.html#setImplicit)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`setNested`](../object/Action.html#setNested)`  `[`setOriginalAction`](../object/Action.html#setOriginalAction)`  `[`setPronounOverride`](../object/Action.html#setPronounOverride)`  `[`setRemapped`](../object/Action.html#setRemapped)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)`  `[`whatTranslate`](../object/Action.html#whatTranslate)`  `[`withVerifyResults`](../object/Action.html#withVerifyResults)`  `[`zeroActionTime`](../object/Action.html#zeroActionTime)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

Inherited from `Resolver` :  
` `[`allowAll`](../object/Resolver.html#allowAll)`  `[`cacheScopeList`](../object/Resolver.html#cacheScopeList)`  `[`filterAll`](../object/Resolver.html#filterAll)`  `[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)`  `[`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase)`  `[`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase)`  `[`filterPossRank`](../object/Resolver.html#filterPossRank)`  `[`getAction`](../object/Resolver.html#getAction)`  `[`getAll`](../object/Resolver.html#getAll)`  `[`getAllDefaults`](../object/Resolver.html#getAllDefaults)`  `[`getDefaultObject`](../object/Resolver.html#getDefaultObject)`  `[`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver)`  `[`getPronounDefault`](../object/Resolver.html#getPronounDefault)`  `[`getQualifierResolver`](../object/Resolver.html#getQualifierResolver)`  `[`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent)`  `[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)`  `[`getScopeList`](../object/Resolver.html#getScopeList)`  `[`getTargetActor`](../object/Resolver.html#getTargetActor)`  `[`matchName`](../object/Resolver.html#matchName)`  `[`objInScope`](../object/Resolver.html#objInScope)`  `[`resetResolver`](../object/Resolver.html#resetResolver)`  `[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)`  `[`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase)`  `[`selectIndefinite`](../object/Resolver.html#selectIndefinite)`  `[`withGlobals`](../object/Resolver.html#withGlobals)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="predicateNounPhrases"></span>

`predicateNounPhrases`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5353](../source/action.t.html#5353)\]

<div class="desc">

we have a direct object and a literal phrase

</div>

<span id="whichMessageLiteral"></span>

`whichMessageLiteral`

[action.t](../file/action.t.html)\[[5480](../source/action.t.html#5480)\]

<div class="desc">

object role played by the literal phrase

</div>

<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5506](../source/action.t.html#5506)\]

<div class="desc">

What we call our direct object might actually be playing the grammatical
role of the indirect object - in order to inherit easily from TAction,
we call our resolved object our direct object, regardless of which
grammatical role it actually plays. For the most part it doesn't matter
which is which; but for the purposes of our resolver, we actually do
care about its real role. So, override the resolver method
whichMessageObject so that it returns whichever role is NOT served by
the topic object.

</div>

<span id="whichObject"></span>

`whichObject`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5494](../source/action.t.html#5494)\]

<div class="desc">

the true grammatical role of the resolved object is always the direct
object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, resolvedAllObjects)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9015](../source/en_us.t.html#9015)\]

<div class="desc">

*no description available*

</div>

<span id="getCurrentObjects"></span>

`getCurrentObjects ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5417](../source/action.t.html#5417)\]

<div class="desc">

Get a list of the current objects. We include only the direct object
here, since the literal text is not a resolved object but simply literal
text.

</div>

<span id="getMatchForRole"></span>

`getMatchForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5383](../source/action.t.html#5383)\]

<div class="desc">

get the match tree for the given role

</div>

<span id="getObjectForRole"></span>

`getObjectForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5373](../source/action.t.html#5373)\]

<div class="desc">

get the resolved object in a given role

</div>

<span id="getOtherMessageObjectPronoun"></span>

`getOtherMessageObjectPronoun (which)`

[en_us.t](../file/en_us.t.html)\[[9049](../source/en_us.t.html#9049)\]

<div class="desc">

When we want to show a verb infinitive phrase that involves a pronoun
for the literal phrase, refer to the literal as 'that' rather than 'it'
or anything else.

</div>

<span id="getOtherObjectRole"></span>

`getOtherObjectRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5366](../source/action.t.html#5366)\]

<div class="desc">

get the OtherObject role for the given role

</div>

<span id="getQuestionInf"></span>

`getQuestionInf (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9034](../source/en_us.t.html#9034)\]

<div class="desc">

use the same handling we use for a regular two-object action

</div>

<span id="getRoleFromIndex"></span>

`getRoleFromIndex (idx)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5356](../source/action.t.html#5356)\]

<div class="desc">

get an object role

</div>

<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9083](../source/en_us.t.html#9083)\]

<div class="desc">

We're asking about the resolved object, so the other pronoun is for the
literal phrase: always use 'that' to refer to the literal phrase.

</div>

<span id="initForMissingDobj"></span>

`initForMissingDobj (orig)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5453](../source/action.t.html#5453)\]

<div class="desc">

initialize with a missing direct object phrase

</div>

<span id="initForMissingLiteral"></span>

`initForMissingLiteral (orig)`

[action.t](../file/action.t.html)\[[5465](../source/action.t.html#5465)\]

<div class="desc">

initialize for a missing literal phrase

</div>

<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5315](../source/action.t.html#5315)\]

<div class="desc">

Resolve objects.

</div>

<span id="retryWithMissingLiteral"></span>

`retryWithMissingLiteral (orig)`

[action.t](../file/action.t.html)\[[5435](../source/action.t.html#5435)\]

<div class="desc">

Retry a single-object action as an action taking both an object and a
literal phrase. We'll treat the original action's direct object list as
our direct object list, and obtain a literal phrase interactively.

This routine terminates with 'exit' if it doesn't throw some other
error.

</div>

<span id="setCurrentObjects"></span>

`setCurrentObjects (lst)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5420](../source/action.t.html#5420)\]

<div class="desc">

set the current objects

</div>

<span id="setObjectMatches"></span>

`setObjectMatches (dobj, lit)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5403](../source/action.t.html#5403)\]

<div class="desc">

manually set the pre-resolved match trees

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects (dobj, txt)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5393](../source/action.t.html#5393)\]

<div class="desc">

manually set the resolved objects

</div>

<span id="whatObj"></span>

`whatObj (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9028](../source/en_us.t.html#9028)\]

<div class="desc">

Use the same handling as for a regular two-object action. We can only
default the actual object in this kind of verb; the actual object always
fills the DirectObject slot, but in message generation it might use a
different slot, so use the message generation slot here.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
