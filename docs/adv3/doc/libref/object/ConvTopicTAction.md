---
layout: docs
---
<span class="title">ConvTopicTAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6072](../source/action.t.html#6072)\]

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



"Conversation" TopicTAction. Many TopicTAction verbs involve
conversation with an actor, who's specified as the direct object: ASK
\<actor\> ABOUT \<topic\>, TELL \<actor\> ABOUT \<topic\>, ASK \<actor\>
FOR \<topic\>. For these common cases, the most likely default direct
object is the last interlocutor of the actor performing the command -
that is, ASK ABOUT BOOK should by default be directed to whomever we
were speaking to last.

This subclass is suitable for such verbs. When asked for a default
direct object, we'll check for a current interlocutor, and use it as the
default if available. If no interlocutor is available, we'll inherit the
standard default handling.

`class `**`ConvTopicTAction`**` :   `[`TopicTAction`](../object/TopicTAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConvTopicTAction`**  
[`TopicTAction`](../object/TopicTAction.html)  
[`TopicActionBase`](../object/TopicActionBase.html)  
`                         object`  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
[`Resolver`](../object/Resolver.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ConvTopicTAction`**  
[`AskAboutAction`](../object/AskAboutAction.html)  
[`predicate(AskAbout)`](../object/predicate(AskAbout).html)  
[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)  
[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)  
[`AskForAction`](../object/AskForAction.html)  
[`predicate(AskFor)`](../object/predicate(AskFor).html)  
[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)  
[`TellAboutAction`](../object/TellAboutAction.html)  
[`predicate(TellAbout)`](../object/predicate(TellAbout).html)  
[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)  
[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `TopicTAction` :  
[`needAnaphoricBinding_`](../object/TopicTAction.html#needAnaphoricBinding_) [`predicateNounPhrases`](../object/TopicTAction.html#predicateNounPhrases) [`topicList_`](../object/TopicTAction.html#topicList_) [`topicResolver_`](../object/TopicTAction.html#topicResolver_) [`whichMessageObject`](../object/TopicTAction.html#whichMessageObject) [`whichMessageTopic`](../object/TopicTAction.html#whichMessageTopic) [`whichObject`](../object/TopicTAction.html#whichObject)

Inherited from `TopicActionBase` :  
[`topicQualResolver_`](../object/TopicActionBase.html#topicQualResolver_)

Inherited from `TAction` :  
[`actionAllowsAll`](../object/TAction.html#actionAllowsAll) [`actionDobjProp`](../object/TAction.html#actionDobjProp) [`actor_`](../object/TAction.html#actor_) [`askDobjResponseProd`](../object/TAction.html#askDobjResponseProd) [`checkDobjProp`](../object/TAction.html#checkDobjProp) [`dobjCur_`](../object/TAction.html#dobjCur_) [`dobjInfoCur_`](../object/TAction.html#dobjInfoCur_) [`dobjList_`](../object/TAction.html#dobjList_) [`dobjMatch`](../object/TAction.html#dobjMatch) [`dobjResolver_`](../object/TAction.html#dobjResolver_) [`issuer_`](../object/TAction.html#issuer_) [`preCondDobjProp`](../object/TAction.html#preCondDobjProp) [`remapDobjProp`](../object/TAction.html#remapDobjProp) [`verDobjProp`](../object/TAction.html#verDobjProp)

Inherited from `Action` :  
[`actionTime`](../object/Action.html#actionTime) [`afterActionMainList`](../object/Action.html#afterActionMainList) [`beforeAfterObjs`](../object/Action.html#beforeAfterObjs) [`defaultForRecursion`](../object/Action.html#defaultForRecursion) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`implicitMsg`](../object/Action.html#implicitMsg) [`includeInUndo`](../object/Action.html#includeInUndo) [`isImplicit`](../object/Action.html#isImplicit) [`isRepeatable`](../object/Action.html#isRepeatable) [`iterationCanceled`](../object/Action.html#iterationCanceled) [`originalAction`](../object/Action.html#originalAction) [`parentAction`](../object/Action.html#parentAction) [`preCond`](../object/Action.html#preCond) [`pronounOverride`](../object/Action.html#pronounOverride) [`remappedFrom`](../object/Action.html#remappedFrom) [`showDefaultReports`](../object/Action.html#showDefaultReports) [`synthParamID`](../object/Action.html#synthParamID) [`verbFlags`](../object/Action.html#verbFlags) [`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_) [`equivs_`](../object/Resolver.html#equivs_) [`isGlobalScope`](../object/Resolver.html#isGlobalScope) [`isSubResolver`](../object/Resolver.html#isSubResolver) [`scope_`](../object/Resolver.html#scope_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`createTopicResolver`](#createTopicResolver) [`getDefaultDobj`](#getDefaultDobj)

Inherited from `TopicTAction` :  
[`announceDefaultObject`](../object/TopicTAction.html#announceDefaultObject) [`filterTopic`](../object/TopicTAction.html#filterTopic) [`getAnaphoricBinding`](../object/TopicTAction.html#getAnaphoricBinding) [`getCurrentObjects`](../object/TopicTAction.html#getCurrentObjects) [`getMatchForRole`](../object/TopicTAction.html#getMatchForRole) [`getObjectForRole`](../object/TopicTAction.html#getObjectForRole) [`getOtherMessageObjectPronoun`](../object/TopicTAction.html#getOtherMessageObjectPronoun) [`getOtherObjectRole`](../object/TopicTAction.html#getOtherObjectRole) [`getQuestionInf`](../object/TopicTAction.html#getQuestionInf) [`getRoleFromIndex`](../object/TopicTAction.html#getRoleFromIndex) [`getVerbPhrase`](../object/TopicTAction.html#getVerbPhrase) [`initForMissingDobj`](../object/TopicTAction.html#initForMissingDobj) [`initForMissingTopic`](../object/TopicTAction.html#initForMissingTopic) [`resetAction`](../object/TopicTAction.html#resetAction) [`resolveNouns`](../object/TopicTAction.html#resolveNouns) [`retryWithMissingTopic`](../object/TopicTAction.html#retryWithMissingTopic) [`setCurrentObjects`](../object/TopicTAction.html#setCurrentObjects) [`setObjectMatches`](../object/TopicTAction.html#setObjectMatches) [`setResolvedObjects`](../object/TopicTAction.html#setResolvedObjects) [`whatObj`](../object/TopicTAction.html#whatObj)

Inherited from `TopicActionBase` :  
[`getMessageParam`](../object/TopicActionBase.html#getMessageParam) [`getTopic`](../object/TopicActionBase.html#getTopic) [`getTopicQualifierResolver`](../object/TopicActionBase.html#getTopicQualifierResolver) [`getTopicResolver`](../object/TopicActionBase.html#getTopicResolver) [`reparseMatchAsTopic`](../object/TopicActionBase.html#reparseMatchAsTopic) [`resolveTopic`](../object/TopicActionBase.html#resolveTopic) [`setResolvedTopic`](../object/TopicActionBase.html#setResolvedTopic) [`setTopicMatch`](../object/TopicActionBase.html#setTopicMatch)

Inherited from `TAction` :  
[`adjustDefaultObjectPrep`](../object/TAction.html#adjustDefaultObjectPrep) [`announceAllDefaultObjects`](../object/TAction.html#announceAllDefaultObjects) [`canDobjResolveTo`](../object/TAction.html#canDobjResolveTo) [`checkAction`](../object/TAction.html#checkAction) [`checkRemapping`](../object/TAction.html#checkRemapping) [`construct`](../object/TAction.html#construct) [`createDobjResolver`](../object/TAction.html#createDobjResolver) [`createForMissingDobj`](../object/TAction.html#createForMissingDobj) [`createForRetry`](../object/TAction.html#createForRetry) [`doActionMain`](../object/TAction.html#doActionMain) [`execAction`](../object/TAction.html#execAction) [`filterAmbiguousDobj`](../object/TAction.html#filterAmbiguousDobj) [`filterPluralDobj`](../object/TAction.html#filterPluralDobj) [`getAllDobj`](../object/TAction.html#getAllDobj) [`getDobj`](../object/TAction.html#getDobj) [`getDobjCount`](../object/TAction.html#getDobjCount) [`getDobjFlags`](../object/TAction.html#getDobjFlags) [`getDobjInfo`](../object/TAction.html#getDobjInfo) [`getDobjResolver`](../object/TAction.html#getDobjResolver) [`getDobjTokens`](../object/TAction.html#getDobjTokens) [`getDobjWords`](../object/TAction.html#getDobjWords) [`getObjResponseProd`](../object/TAction.html#getObjResponseProd) [`getPreCondDescList`](../object/TAction.html#getPreCondDescList) [`getPreCondPropForRole`](../object/TAction.html#getPreCondPropForRole) [`getRemapPropForRole`](../object/TAction.html#getRemapPropForRole) [`getResolvedDobjList`](../object/TAction.html#getResolvedDobjList) [`getResolvedObjList`](../object/TAction.html#getResolvedObjList) [`getResolveInfo`](../object/TAction.html#getResolveInfo) [`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1) [`getVerifyPropForRole`](../object/TAction.html#getVerifyPropForRole) [`initResolver`](../object/TAction.html#initResolver) [`initTentative`](../object/TAction.html#initTentative) [`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope) [`retryWithAmbiguousDobj`](../object/TAction.html#retryWithAmbiguousDobj) [`retryWithMissingDobj`](../object/TAction.html#retryWithMissingDobj) [`setResolvedDobj`](../object/TAction.html#setResolvedDobj) [`testRetryDefaultDobj`](../object/TAction.html#testRetryDefaultDobj) [`verifyAction`](../object/TAction.html#verifyAction)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind) [`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj) [`afterAction`](../object/Action.html#afterAction) [`afterActionMain`](../object/Action.html#afterActionMain) [`announceActionObject`](../object/Action.html#announceActionObject) [`beforeAction`](../object/Action.html#beforeAction) [`beforeActionMain`](../object/Action.html#beforeActionMain) [`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements) [`callAfterActionMain`](../object/Action.html#callAfterActionMain) [`callCatchAllProp`](../object/Action.html#callCatchAllProp) [`callPreConditions`](../object/Action.html#callPreConditions) [`callVerifyPreCond`](../object/Action.html#callVerifyPreCond) [`callVerifyProp`](../object/Action.html#callVerifyProp) [`cancelIteration`](../object/Action.html#cancelIteration) [`checkPreConditions`](../object/Action.html#checkPreConditions) [`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults) [`createActionFrom`](../object/Action.html#createActionFrom) [`createActionInstance`](../object/Action.html#createActionInstance) [`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver) [`doAction`](../object/Action.html#doAction) [`doActionOnce`](../object/Action.html#doActionOnce) [`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify) [`filterFacets`](../object/Action.html#filterFacets) [`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify) [`finishResolveList`](../object/Action.html#finishResolveList) [`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify) [`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase) [`getImplicitPhrase`](../object/Action.html#getImplicitPhrase) [`getInfPhrase`](../object/Action.html#getInfPhrase) [`getNotifyTable`](../object/Action.html#getNotifyTable) [`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList) [`getObjPreConditions`](../object/Action.html#getObjPreConditions) [`getOriginalAction`](../object/Action.html#getOriginalAction) [`getOrigTokenList`](../object/Action.html#getOrigTokenList) [`getParticiplePhrase`](../object/Action.html#getParticiplePhrase) [`getPredicate`](../object/Action.html#getPredicate) [`getPronounOverride`](../object/Action.html#getPronounOverride) [`getRemappedFrom`](../object/Action.html#getRemappedFrom) [`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap) [`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults) [`isConversational`](../object/Action.html#isConversational) [`isNestedIn`](../object/Action.html#isNestedIn) [`isPartOf`](../object/Action.html#isPartOf) [`isRemapped`](../object/Action.html#isRemapped) [`makeResolveInfo`](../object/Action.html#makeResolveInfo) [`makeResolveInfoList`](../object/Action.html#makeResolveInfoList) [`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject) [`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit) [`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject) [`noMatch`](../object/Action.html#noMatch) [`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter) [`objListPronoun`](../object/Action.html#objListPronoun) [`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject) [`recalcSenseContext`](../object/Action.html#recalcSenseContext) [`repeatAction`](../object/Action.html#repeatAction) [`resolveAction`](../object/Action.html#resolveAction) [`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers) [`saveActionForAgain`](../object/Action.html#saveActionForAgain) [`setImplicit`](../object/Action.html#setImplicit) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`setNested`](../object/Action.html#setNested) [`setOriginalAction`](../object/Action.html#setOriginalAction) [`setPronounOverride`](../object/Action.html#setPronounOverride) [`setRemapped`](../object/Action.html#setRemapped) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verifyHandlersExist`](../object/Action.html#verifyHandlersExist) [`whatTranslate`](../object/Action.html#whatTranslate) [`withVerifyResults`](../object/Action.html#withVerifyResults) [`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase) [`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase) [`filterPossRank`](../object/Resolver.html#filterPossRank) [`getAction`](../object/Resolver.html#getAction) [`getAll`](../object/Resolver.html#getAll) [`getAllDefaults`](../object/Resolver.html#getAllDefaults) [`getDefaultObject`](../object/Resolver.html#getDefaultObject) [`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getQualifierResolver`](../object/Resolver.html#getQualifierResolver) [`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`objInScope`](../object/Resolver.html#objInScope) [`resetResolver`](../object/Resolver.html#resetResolver) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="createTopicResolver"></span>

`createTopicResolver (issuingActor, targetActor)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6091](../source/action.t.html#6091)\]



Create the topic resolver. Use a conversational topic resolver for this
type of action.



<span id="getDefaultDobj"></span>

`getDefaultDobj (np, resolver)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6073](../source/action.t.html#6073)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


