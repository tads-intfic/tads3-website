---
layout: docs
---
<span class="title">ConvTopicResolver</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6553](../source/action.t.html#6553)\]

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



A topic resolver specialized for conversational actions (ASK ABOUT, TELL
ABOUT, etc). When we resolve the topic, we'll differentiate the
resolution to differentiate based on the knowledge of the actor who's
performing the command.

`class `**`ConvTopicResolver`**` :   `[`TopicResolver`](../object/TopicResolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConvTopicResolver`**  
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



[`objInConvScope`](#objInConvScope) [`resolveTopic`](#resolveTopic)

Inherited from `TopicResolver` :  
[`construct`](../object/TopicResolver.html#construct) [`filterAmbiguousNounPhrase`](../object/TopicResolver.html#filterAmbiguousNounPhrase) [`filterPluralPhrase`](../object/TopicResolver.html#filterPluralPhrase) [`filterPossRank`](../object/TopicResolver.html#filterPossRank) [`getAll`](../object/TopicResolver.html#getAll) [`getAllDefaults`](../object/TopicResolver.html#getAllDefaults) [`getDefaultObject`](../object/TopicResolver.html#getDefaultObject) [`getPossessiveResolver`](../object/TopicResolver.html#getPossessiveResolver) [`getQualifierResolver`](../object/TopicResolver.html#getQualifierResolver) [`noMatch`](../object/TopicResolver.html#noMatch) [`noMatchPoss`](../object/TopicResolver.html#noMatchPoss) [`noVocabMatch`](../object/TopicResolver.html#noVocabMatch) [`objInPhysicalScope`](../object/TopicResolver.html#objInPhysicalScope) [`objInScope`](../object/TopicResolver.html#objInScope) [`packageTopicList`](../object/TopicResolver.html#packageTopicList) [`resetResolver`](../object/TopicResolver.html#resetResolver) [`resolveUnknownNounPhrase`](../object/TopicResolver.html#resolveUnknownNounPhrase)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`getAction`](../object/Resolver.html#getAction) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="objInConvScope"></span>

`objInConvScope (obj)`

[action.t](../file/action.t.html)\[[6595](../source/action.t.html#6595)\]



Determine if an object is in "conversational" scope - this returns true
if the object is in physical scope or it's known to the actor performing
the command.



<span id="resolveTopic"></span>

`resolveTopic (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6560](../source/action.t.html#6560)\]



Resolve the topic phrase. We'll break up the vocabulary matches into
three sublists: the objects that are either in physical scope or known
to the actor performing the command; objects that the actor considers
likely topics; and everything else.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


