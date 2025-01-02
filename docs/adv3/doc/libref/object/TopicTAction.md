---
layout: docs
---
<span class="title">TopicTAction</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[5786](../source/action.t.html#5786)\],
[en_us.t](../file/en_us.t.html)\[[9151](../source/en_us.t.html#9151)\]

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



An Action with a direct object and a topic, such as "ask \<actor\> about
\<topic\>". Topics differ from ordinary noun phrases in scope: rather
than resolving to simulation objects based on location, we resolve these
based on the actor's knowledge.

The grammar rules that produce these actions must set dobjMatch to the
resolvable object of the command (the \<actor\> in "ask \<actor\> about
\<topic\>"), and must set topicMatch to the topic match tree object,
which must be a TopicProd object. Note that, in some cases, the phrasing
might make the dobjMatch the indirect object, grammatically speaking:
"type \<topic\> on \<object\>"; even in such cases, use dobjMatch for
the resolvable object.

When we resolve the topic, we will always resolve it to a single object
of class ResolvedTopic. This contains the literal tokens of the original
command plus a list of simulation objects matching the topic name,
ordered from best to worst. This is different from the way most commands
work, since we do not resolve the topic to a simple game world object.
We keep all of this extra information because we don't want to perform
disambiguation in the normal fashion, but instead resolve as much as we
can with what we're given, and then give the specialized action code as
much information as we can to let the action code figure out how to
respond to the topic.

*Modified in
[en_us.t](../file/en_us.t.html)\[[9151](../source/en_us.t.html#9151)\]:*  
English-specific additions for verbs with topic phrases.

`class `**`TopicTAction`**` :   `[`TopicActionBase`](../object/TopicActionBase.html)[`TAction`](../object/TAction.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicTAction`**  
[`TopicActionBase`](../object/TopicActionBase.html)  
`                 object`  
[`TAction`](../object/TAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`Resolver`](../object/Resolver.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TopicTAction`**  
[`AskVagueAction`](../object/AskVagueAction.html)  
[`predicate(AskVague)`](../object/predicate(AskVague).html)  
[`predicate(TellVague)`](../object/predicate(TellVague).html)  
[`ConsultAboutAction`](../object/ConsultAboutAction.html)  
[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)  
[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)  
[`ConvTopicTAction`](../object/ConvTopicTAction.html)  
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
[`TellVagueAction`](../object/TellVagueAction.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`needAnaphoricBinding_`](#needAnaphoricBinding_)[`predicateNounPhrases`](#predicateNounPhrases)[`topicList_`](#topicList_)[`topicResolver_`](#topicResolver_)[`whichMessageObject`](#whichMessageObject)[`whichMessageTopic`](#whichMessageTopic)[`whichObject`](#whichObject)

Inherited from `TopicActionBase` :  
[`topicQualResolver_`](../object/TopicActionBase.html#topicQualResolver_)

Inherited from `TAction` :  
[`actionAllowsAll`](../object/TAction.html#actionAllowsAll)[`actionDobjProp`](../object/TAction.html#actionDobjProp)[`actor_`](../object/TAction.html#actor_)[`askDobjResponseProd`](../object/TAction.html#askDobjResponseProd)[`checkDobjProp`](../object/TAction.html#checkDobjProp)[`dobjCur_`](../object/TAction.html#dobjCur_)[`dobjInfoCur_`](../object/TAction.html#dobjInfoCur_)[`dobjList_`](../object/TAction.html#dobjList_)[`dobjMatch`](../object/TAction.html#dobjMatch)[`dobjResolver_`](../object/TAction.html#dobjResolver_)[`issuer_`](../object/TAction.html#issuer_)[`preCondDobjProp`](../object/TAction.html#preCondDobjProp)[`remapDobjProp`](../object/TAction.html#remapDobjProp)[`verDobjProp`](../object/TAction.html#verDobjProp)

Inherited from `Action` :  
[`actionTime`](../object/Action.html#actionTime)[`afterActionMainList`](../object/Action.html#afterActionMainList)[`beforeAfterObjs`](../object/Action.html#beforeAfterObjs)[`defaultForRecursion`](../object/Action.html#defaultForRecursion)[`extraMessageParams`](../object/Action.html#extraMessageParams)[`implicitMsg`](../object/Action.html#implicitMsg)[`includeInUndo`](../object/Action.html#includeInUndo)[`isImplicit`](../object/Action.html#isImplicit)[`isRepeatable`](../object/Action.html#isRepeatable)[`iterationCanceled`](../object/Action.html#iterationCanceled)[`originalAction`](../object/Action.html#originalAction)[`parentAction`](../object/Action.html#parentAction)[`preCond`](../object/Action.html#preCond)[`pronounOverride`](../object/Action.html#pronounOverride)[`remappedFrom`](../object/Action.html#remappedFrom)[`showDefaultReports`](../object/Action.html#showDefaultReports)[`synthParamID`](../object/Action.html#synthParamID)[`verbFlags`](../object/Action.html#verbFlags)[`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_)[`equivs_`](../object/Resolver.html#equivs_)[`isGlobalScope`](../object/Resolver.html#isGlobalScope)[`isSubResolver`](../object/Resolver.html#isSubResolver)[`scope_`](../object/Resolver.html#scope_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`announceDefaultObject`](#announceDefaultObject)[`createTopicResolver`](#createTopicResolver)[`filterTopic`](#filterTopic)[`getAnaphoricBinding`](#getAnaphoricBinding)[`getCurrentObjects`](#getCurrentObjects)[`getMatchForRole`](#getMatchForRole)[`getObjectForRole`](#getObjectForRole)[`getOtherMessageObjectPronoun`](#getOtherMessageObjectPronoun)[`getOtherObjectRole`](#getOtherObjectRole)[`getQuestionInf`](#getQuestionInf)[`getRoleFromIndex`](#getRoleFromIndex)[`getVerbPhrase`](#getVerbPhrase)[`initForMissingDobj`](#initForMissingDobj)[`initForMissingTopic`](#initForMissingTopic)[`resetAction`](#resetAction)[`resolveNouns`](#resolveNouns)[`retryWithMissingTopic`](#retryWithMissingTopic)[`setCurrentObjects`](#setCurrentObjects)[`setObjectMatches`](#setObjectMatches)[`setResolvedObjects`](#setResolvedObjects)[`whatObj`](#whatObj)

Inherited from `TopicActionBase` :  
[`getMessageParam`](../object/TopicActionBase.html#getMessageParam)[`getTopic`](../object/TopicActionBase.html#getTopic)[`getTopicQualifierResolver`](../object/TopicActionBase.html#getTopicQualifierResolver)[`getTopicResolver`](../object/TopicActionBase.html#getTopicResolver)[`reparseMatchAsTopic`](../object/TopicActionBase.html#reparseMatchAsTopic)[`resolveTopic`](../object/TopicActionBase.html#resolveTopic)[`setResolvedTopic`](../object/TopicActionBase.html#setResolvedTopic)[`setTopicMatch`](../object/TopicActionBase.html#setTopicMatch)

Inherited from `TAction` :  
[`adjustDefaultObjectPrep`](../object/TAction.html#adjustDefaultObjectPrep)[`announceAllDefaultObjects`](../object/TAction.html#announceAllDefaultObjects)[`canDobjResolveTo`](../object/TAction.html#canDobjResolveTo)[`checkAction`](../object/TAction.html#checkAction)[`checkRemapping`](../object/TAction.html#checkRemapping)[`construct`](../object/TAction.html#construct)[`createDobjResolver`](../object/TAction.html#createDobjResolver)[`createForMissingDobj`](../object/TAction.html#createForMissingDobj)[`createForRetry`](../object/TAction.html#createForRetry)[`doActionMain`](../object/TAction.html#doActionMain)[`execAction`](../object/TAction.html#execAction)[`filterAmbiguousDobj`](../object/TAction.html#filterAmbiguousDobj)[`filterPluralDobj`](../object/TAction.html#filterPluralDobj)[`getAllDobj`](../object/TAction.html#getAllDobj)[`getDefaultDobj`](../object/TAction.html#getDefaultDobj)[`getDobj`](../object/TAction.html#getDobj)[`getDobjCount`](../object/TAction.html#getDobjCount)[`getDobjFlags`](../object/TAction.html#getDobjFlags)[`getDobjInfo`](../object/TAction.html#getDobjInfo)[`getDobjResolver`](../object/TAction.html#getDobjResolver)[`getDobjTokens`](../object/TAction.html#getDobjTokens)[`getDobjWords`](../object/TAction.html#getDobjWords)[`getObjResponseProd`](../object/TAction.html#getObjResponseProd)[`getPreCondDescList`](../object/TAction.html#getPreCondDescList)[`getPreCondPropForRole`](../object/TAction.html#getPreCondPropForRole)[`getRemapPropForRole`](../object/TAction.html#getRemapPropForRole)[`getResolvedDobjList`](../object/TAction.html#getResolvedDobjList)[`getResolvedObjList`](../object/TAction.html#getResolvedObjList)[`getResolveInfo`](../object/TAction.html#getResolveInfo)[`getVerbPhrase1`](../object/TAction.html#getVerbPhrase1)[`getVerifyPropForRole`](../object/TAction.html#getVerifyPropForRole)[`initResolver`](../object/TAction.html#initResolver)[`initTentative`](../object/TAction.html#initTentative)[`resolvedObjectsInScope`](../object/TAction.html#resolvedObjectsInScope)[`retryWithAmbiguousDobj`](../object/TAction.html#retryWithAmbiguousDobj)[`retryWithMissingDobj`](../object/TAction.html#retryWithMissingDobj)[`setResolvedDobj`](../object/TAction.html#setResolvedDobj)[`testRetryDefaultDobj`](../object/TAction.html#testRetryDefaultDobj)[`verifyAction`](../object/TAction.html#verifyAction)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind)[`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj)[`afterAction`](../object/Action.html#afterAction)[`afterActionMain`](../object/Action.html#afterActionMain)[`announceActionObject`](../object/Action.html#announceActionObject)[`beforeAction`](../object/Action.html#beforeAction)[`beforeActionMain`](../object/Action.html#beforeActionMain)[`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements)[`callAfterActionMain`](../object/Action.html#callAfterActionMain)[`callCatchAllProp`](../object/Action.html#callCatchAllProp)[`callPreConditions`](../object/Action.html#callPreConditions)[`callVerifyPreCond`](../object/Action.html#callVerifyPreCond)[`callVerifyProp`](../object/Action.html#callVerifyProp)[`cancelIteration`](../object/Action.html#cancelIteration)[`checkPreConditions`](../object/Action.html#checkPreConditions)[`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults)[`createActionFrom`](../object/Action.html#createActionFrom)[`createActionInstance`](../object/Action.html#createActionInstance)[`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver)[`doAction`](../object/Action.html#doAction)[`doActionOnce`](../object/Action.html#doActionOnce)[`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify)[`filterFacets`](../object/Action.html#filterFacets)[`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify)[`finishResolveList`](../object/Action.html#finishResolveList)[`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify)[`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase)[`getImplicitPhrase`](../object/Action.html#getImplicitPhrase)[`getInfPhrase`](../object/Action.html#getInfPhrase)[`getNotifyTable`](../object/Action.html#getNotifyTable)[`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList)[`getObjPreConditions`](../object/Action.html#getObjPreConditions)[`getOriginalAction`](../object/Action.html#getOriginalAction)[`getOrigTokenList`](../object/Action.html#getOrigTokenList)[`getParticiplePhrase`](../object/Action.html#getParticiplePhrase)[`getPredicate`](../object/Action.html#getPredicate)[`getPronounOverride`](../object/Action.html#getPronounOverride)[`getRemappedFrom`](../object/Action.html#getRemappedFrom)[`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap)[`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults)[`isConversational`](../object/Action.html#isConversational)[`isNestedIn`](../object/Action.html#isNestedIn)[`isPartOf`](../object/Action.html#isPartOf)[`isRemapped`](../object/Action.html#isRemapped)[`makeResolveInfo`](../object/Action.html#makeResolveInfo)[`makeResolveInfoList`](../object/Action.html#makeResolveInfoList)[`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject)[`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit)[`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject)[`noMatch`](../object/Action.html#noMatch)[`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter)[`objListPronoun`](../object/Action.html#objListPronoun)[`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject)[`recalcSenseContext`](../object/Action.html#recalcSenseContext)[`repeatAction`](../object/Action.html#repeatAction)[`resolveAction`](../object/Action.html#resolveAction)[`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers)[`saveActionForAgain`](../object/Action.html#saveActionForAgain)[`setImplicit`](../object/Action.html#setImplicit)[`setMessageParam`](../object/Action.html#setMessageParam)[`setMessageParams`](../object/Action.html#setMessageParams)[`setNested`](../object/Action.html#setNested)[`setOriginalAction`](../object/Action.html#setOriginalAction)[`setPronounOverride`](../object/Action.html#setPronounOverride)[`setRemapped`](../object/Action.html#setRemapped)[`spPrefix`](../object/Action.html#spPrefix)[`spSuffix`](../object/Action.html#spSuffix)[`synthMessageParam`](../object/Action.html#synthMessageParam)[`verifyHandlersExist`](../object/Action.html#verifyHandlersExist)[`whatTranslate`](../object/Action.html#whatTranslate)[`withVerifyResults`](../object/Action.html#withVerifyResults)[`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll)[`cacheScopeList`](../object/Resolver.html#cacheScopeList)[`filterAll`](../object/Resolver.html#filterAll)[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)[`filterAmbiguousNounPhrase`](../object/Resolver.html#filterAmbiguousNounPhrase)[`filterPluralPhrase`](../object/Resolver.html#filterPluralPhrase)[`filterPossRank`](../object/Resolver.html#filterPossRank)[`getAction`](../object/Resolver.html#getAction)[`getAll`](../object/Resolver.html#getAll)[`getAllDefaults`](../object/Resolver.html#getAllDefaults)[`getDefaultObject`](../object/Resolver.html#getDefaultObject)[`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver)[`getPronounDefault`](../object/Resolver.html#getPronounDefault)[`getQualifierResolver`](../object/Resolver.html#getQualifierResolver)[`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent)[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)[`getScopeList`](../object/Resolver.html#getScopeList)[`getTargetActor`](../object/Resolver.html#getTargetActor)[`matchName`](../object/Resolver.html#matchName)[`objInScope`](../object/Resolver.html#objInScope)[`resetResolver`](../object/Resolver.html#resetResolver)[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)[`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase)[`selectIndefinite`](../object/Resolver.html#selectIndefinite)[`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="needAnaphoricBinding_"></span>

`needAnaphoricBinding_`

[action.t](../file/action.t.html)\[[5944](../source/action.t.html#5944)\]



Flag: we have been asked for an anaphoric binding, but we don't have a
binding available. We'll check this after resolving the first-resolved
noun phrase so that we can go back and re-resolve it again after
resolving the other noun phrase.



<span id="predicateNounPhrases"></span>

`predicateNounPhrases`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5947](../source/action.t.html#5947)\]



we have a direct object and a topic phrase



<span id="topicList_"></span>

`topicList_`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6026](../source/action.t.html#6026)\]



the resolved topic object list



<span id="topicResolver_"></span>

`topicResolver_`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6029](../source/action.t.html#6029)\]



my cached topic resolver



<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6054](../source/action.t.html#6054)\]



What we call our direct object might actually be playing the grammatical
role of the indirect object - in order to inherit easily from TAction,
we call our resolved object our direct object, regardless of which
grammatical role it actually plays. For the most part it doesn't matter
which is which; but for the purposes of our resolver, we actually do
care about its real role. So, override the resolver method
whichMessageObject so that it returns whichever role is NOT served by
the topic object.



<span id="whichMessageTopic"></span>

`whichMessageTopic`

[action.t](../file/action.t.html)\[[6032](../source/action.t.html#6032)\]



grammatical role played by topic phrase in generated messages



<span id="whichObject"></span>

`whichObject`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6042](../source/action.t.html#6042)\]



the true role of the resolved object is always as the direct object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, resolvedAllObjects)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9152](../source/en_us.t.html#9152)\]



*no description available*



<span id="createTopicResolver"></span>

`createTopicResolver (issuingActor, targetActor)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5908](../source/action.t.html#5908)\]



create our TAction topic resolver



<span id="filterTopic"></span>

`filterTopic (lst, np, resolver)`

[action.t](../file/action.t.html)\[[5848](../source/action.t.html#5848)\]



Filter the resolved topic. This is called by our TActionTopicResolver,
which refers the resolution back to us.



<span id="getAnaphoricBinding"></span>

`getAnaphoricBinding (typ)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5922](../source/action.t.html#5922)\]



In the topic phrase, we can use an anaphoric pronoun to refer back to
the direct object. Since we resolve the direct object phrase first, we
can simply return the direct object list as the binding. If the direct
object isn't resolved yet, make a note to come back and re-bind the
anaphor.



<span id="getCurrentObjects"></span>

`getCurrentObjects ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6013](../source/action.t.html#6013)\]



Get the list of active objects. We return only our direct object, since
our topic isn't actually a simulation object.



<span id="getMatchForRole"></span>

`getMatchForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5977](../source/action.t.html#5977)\]



get the match tree for the given role



<span id="getObjectForRole"></span>

`getObjectForRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5967](../source/action.t.html#5967)\]



get the resolved object in a given role



<span id="getOtherMessageObjectPronoun"></span>

`getOtherMessageObjectPronoun (which)`

[en_us.t](../file/en_us.t.html)\[[9177](../source/en_us.t.html#9177)\]



use the same handling as for a regular two-object action



<span id="getOtherObjectRole"></span>

`getOtherObjectRole (role)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5960](../source/action.t.html#5960)\]



get the OtherObject role for the given role



<span id="getQuestionInf"></span>

`getQuestionInf (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9171](../source/en_us.t.html#9171)\]



use the same handling we use for a regular two-object action



<span id="getRoleFromIndex"></span>

`getRoleFromIndex (idx)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5950](../source/action.t.html#5950)\]



get an object role



<span id="getVerbPhrase"></span>

`getVerbPhrase (inf, ctx)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9201](../source/en_us.t.html#9201)\]



return a generic pronoun for the topic



<span id="initForMissingDobj"></span>

`initForMissingDobj (orig)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5881](../source/action.t.html#5881)\]



initialize a new action we're retrying for a missing direct object



<span id="initForMissingTopic"></span>

`initForMissingTopic (orig)`

[action.t](../file/action.t.html)\[[5893](../source/action.t.html#5893)\]



initialize for retrying with a missing topic phrase



<span id="resetAction"></span>

`resetAction ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5790](../source/action.t.html#5790)\]



reset the action



<span id="resolveNouns"></span>

`resolveNouns (issuingActor, targetActor, results)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5802](../source/action.t.html#5802)\]



resolve our noun phrases to objects



<span id="retryWithMissingTopic"></span>

`retryWithMissingTopic (orig)`

[action.t](../file/action.t.html)\[[5863](../source/action.t.html#5863)\]



Retry a single-object action as an action taking both an object and a
topic phrase. We'll treat the original action's direct object list as
our direct object list, and we'll obtain a topic phrase interactively.

This routine terminates with 'exit' if it doesn't throw some other
error.



<span id="setCurrentObjects"></span>

`setCurrentObjects (lst)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6019](../source/action.t.html#6019)\]



set the current objects



<span id="setObjectMatches"></span>

`setObjectMatches (dobj, topic)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6000](../source/action.t.html#6000)\]



manually set the pre-resolved match trees



<span id="setResolvedObjects"></span>

`setResolvedObjects (dobj, topic)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[5990](../source/action.t.html#5990)\]



Manually set the resolved objects. We'll set our direct and indirect
objects.



<span id="whatObj"></span>

`whatObj (which)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[9165](../source/en_us.t.html#9165)\]



Use the same handling as for a regular two-object action. We can only
default the actual object in this kind of verb; the actual object always
fills the DirectObject slot, but in message generation it might use a
different slot, so use the message generation slot here.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


