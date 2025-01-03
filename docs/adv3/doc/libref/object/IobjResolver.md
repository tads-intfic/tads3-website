---
layout: docs
---
<span class="title">IobjResolver</span><span class="type">class</span>

[resolver.t](../file/resolver.t.html)\[[783](../source/resolver.t.html#783)\]

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



Basic resolver for indirect objects

`class `**`IobjResolver`**` :   `[`Resolver`](../object/Resolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`IobjResolver`**  
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



[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase) [`filterPluralPhrase`](#filterPluralPhrase) [`getAll`](#getAll) [`getAllDefaults`](#getAllDefaults) [`getDefaultObject`](#getDefaultObject)

Inherited from `Resolver` :  
[`allowAll`](../object/Resolver.html#allowAll) [`cacheScopeList`](../object/Resolver.html#cacheScopeList) [`construct`](../object/Resolver.html#construct) [`filterAll`](../object/Resolver.html#filterAll) [`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents) [`filterPossRank`](../object/Resolver.html#filterPossRank) [`getAction`](../object/Resolver.html#getAction) [`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver) [`getPronounDefault`](../object/Resolver.html#getPronounDefault) [`getQualifierResolver`](../object/Resolver.html#getQualifierResolver) [`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent) [`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding) [`getScopeList`](../object/Resolver.html#getScopeList) [`getTargetActor`](../object/Resolver.html#getTargetActor) [`matchName`](../object/Resolver.html#matchName) [`objInScope`](../object/Resolver.html#objInScope) [`resetResolver`](../object/Resolver.html#resetResolver) [`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent) [`resolveUnknownNounPhrase`](../object/Resolver.html#resolveUnknownNounPhrase) [`selectIndefinite`](../object/Resolver.html#selectIndefinite) [`withGlobals`](../object/Resolver.html#withGlobals)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[788](../source/resolver.t.html#788)\]



*no description available*



<span id="whichObject"></span>

`whichObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[787](../source/resolver.t.html#787)\]



we resolve indirect objects for message generation purposes



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[812](../source/resolver.t.html#812)\]



filter an ambiguous noun phrase



<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[823](../source/resolver.t.html#823)\]



Filter a plural phrase to reduce the set to the logical subset, if
possible. If there is no logical subset, simply return the original set.



<span id="getAll"></span>

`getAll (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[791](../source/resolver.t.html#791)\]



resolve 'all' for the indirect object



<span id="getAllDefaults"></span>

`getAllDefaults ( )`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[802](../source/resolver.t.html#802)\]



get all possible default objects



<span id="getDefaultObject"></span>

`getDefaultObject (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[833](../source/resolver.t.html#833)\]



Get the default object or objects for this phrase. Since we resolve
indirect objects, we'll ask the action for a default indirect object.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


