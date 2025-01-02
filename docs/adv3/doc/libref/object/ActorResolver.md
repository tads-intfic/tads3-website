---
layout: docs
---
<span class="title">ActorResolver</span><span class="type">class</span>

[resolver.t](../file/resolver.t.html)\[[882](../source/resolver.t.html#882)\]

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



Actor Resolver. We use this to resolve the actor to whom a command is
directed: the actor must be in scope for the player character.

`class `**`ActorResolver`**` :   `[`Resolver`](../object/Resolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ActorResolver`**  
[`Resolver`](../object/Resolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`whichMessageObject`](#whichMessageObject) [`whichObject`](#whichObject)

Inherited from `Resolver` :  
[`action_`](../object/Resolver.html#action_) [`actor_`](../object/Resolver.html#actor_) [`equivs_`](../object/Resolver.html#equivs_) [`isGlobalScope`](../object/Resolver.html#isGlobalScope) [`isSubResolver`](../object/Resolver.html#isSubResolver) [`issuer_`](../object/Resolver.html#issuer_) [`scope_`](../object/Resolver.html#scope_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase) [`filterPluralPhrase`](#filterPluralPhrase) [`getAll`](#getAll) [`getAllDefaults`](#getAllDefaults) [`getDefaultObject`](#getDefaultObject) [`getRawPronounAntecedent`](#getRawPronounAntecedent) [`resolveUnknownNounPhrase`](#resolveUnknownNounPhrase)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`filterPossRank`](../object/Resolver.html#filterPossRank) [`getAction`](../object/Resolver.html#getAction) [`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getQualifierResolver`](../object/Resolver.html#getQualifierResolver) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`objInScope`](../object/Resolver.html#objInScope) [`resetResolver`](../object/Resolver.html#resetResolver) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1048](../source/resolver.t.html#1048)\]



*no description available*



<span id="whichObject"></span>

`whichObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1047](../source/resolver.t.html#1047)\]



we resolve target actors



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (issuingActor)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[883](../source/resolver.t.html#883)\]



*no description available*



<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[929](../source/resolver.t.html#929)\]



Filter an ambiguous list of objects. We will filter according to which
objects are most logical as targets of commands.



<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[976](../source/resolver.t.html#976)\]



Filter a plural list



<span id="getAll"></span>

`getAll (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[912](../source/resolver.t.html#912)\]



Get the "all" list - this is the list of objects that we should use when
the object of the command is the special word "all". By default, we'll
return everything in scope.



<span id="getAllDefaults"></span>

`getAllDefaults ( )`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[919](../source/resolver.t.html#919)\]



get the default object list



<span id="getDefaultObject"></span>

`getDefaultObject (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[987](../source/resolver.t.html#987)\]



get a default object



<span id="getRawPronounAntecedent"></span>

`getRawPronounAntecedent (typ)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1004](../source/resolver.t.html#1004)\]



Get a raw pronoun antecedent list. Since we are resolving the target
actor, pronouns are relative to the issuing actor.



<span id="resolveUnknownNounPhrase"></span>

`resolveUnknownNounPhrase (tokList)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[994](../source/resolver.t.html#994)\]



resolve a noun phrase involving unknown words





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


