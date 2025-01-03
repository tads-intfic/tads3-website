---
layout: docs
---
<span class="title">TActionTopicResolver</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6539](../source/action.t.html#6539)\]

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



A topic resolver specialized for TopicTActions - actions involving a
topic and a physical object, such as CONSULT ABOUT. For these topics,
we'll let the action handle the resolution.

`class `**`TActionTopicResolver`**` :   `[`TopicResolver`](../object/TopicResolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TActionTopicResolver`**  
[`TopicResolver`](../object/TopicResolver.html)  
[`Resolver`](../object/Resolver.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `TopicResolver` :  
[`isGlobalScope`](../object/TopicResolver.html#isGlobalScope) [`qualifierResolver_`](../object/TopicResolver.html#qualifierResolver_) [`topicProd`](../object/TopicResolver.html#topicProd)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_) [`actor_`](../object/Resolver.html#actor_) [`equivs_`](../object/Resolver.html#equivs_) [`isSubResolver`](../object/Resolver.html#isSubResolver) [`issuer_`](../object/Resolver.html#issuer_) [`scope_`](../object/Resolver.html#scope_) [`whichMessageObject`](../object/Resolver.html#whichMessageObject) [`whichObject`](../object/Resolver.html#whichObject)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`resolveTopic`](#resolveTopic)

Inherited from `TopicResolver` :  
[`construct`](../object/TopicResolver.html#construct) [`filterAmbiguousNounPhrase`](../object/TopicResolver.html#filterAmbiguousNounPhrase) [`filterPluralPhrase`](../object/TopicResolver.html#filterPluralPhrase) [`filterPossRank`](../object/TopicResolver.html#filterPossRank) [`getAll`](../object/TopicResolver.html#getAll) [`getAllDefaults`](../object/TopicResolver.html#getAllDefaults) [`getDefaultObject`](../object/TopicResolver.html#getDefaultObject) [`getPossessiveResolver`](../object/TopicResolver.html#getPossessiveResolver) [`getQualifierResolver`](../object/TopicResolver.html#getQualifierResolver) [`noMatch`](../object/TopicResolver.html#noMatch) [`noMatchPoss`](../object/TopicResolver.html#noMatchPoss) [`noVocabMatch`](../object/TopicResolver.html#noVocabMatch) [`objInPhysicalScope`](../object/TopicResolver.html#objInPhysicalScope) [`objInScope`](../object/TopicResolver.html#objInScope) [`packageTopicList`](../object/TopicResolver.html#packageTopicList) [`resetResolver`](../object/TopicResolver.html#resetResolver) [`resolveUnknownNounPhrase`](../object/TopicResolver.html#resolveUnknownNounPhrase)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`getAction`](../object/Resolver.html#getAction) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resolveTopic"></span>

`resolveTopic (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6540](../source/action.t.html#6540)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


