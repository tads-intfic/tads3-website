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

<div class="fdesc">

Actor Resolver. We use this to resolve the actor to whom a command is
directed: the actor must be in scope for the player character.

`class `**`ActorResolver`**` :   `[`Resolver`](../object/Resolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorResolver`**  
`         `[`Resolver`](../object/Resolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`whichMessageObject`](#whichMessageObject)`  `[`whichObject`](#whichObject)`  `

Inherited from `Resolver` :  
` `[`action_`](../object/Resolver.html#action_)`  `[`actor_`](../object/Resolver.html#actor_)`  `[`equivs_`](../object/Resolver.html#equivs_)`  `[`isGlobalScope`](../object/Resolver.html#isGlobalScope)`  `[`isSubResolver`](../object/Resolver.html#isSubResolver)`  `[`issuer_`](../object/Resolver.html#issuer_)`  `[`scope_`](../object/Resolver.html#scope_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)`  `[`filterPluralPhrase`](#filterPluralPhrase)`  `[`getAll`](#getAll)`  `[`getAllDefaults`](#getAllDefaults)`  `[`getDefaultObject`](#getDefaultObject)`  `[`getRawPronounAntecedent`](#getRawPronounAntecedent)`  `[`resolveUnknownNounPhrase`](#resolveUnknownNounPhrase)`  `

Inherited from `Resolver` :  
` `[`allowAll`](../object/Resolver.html#allowAll)`  `[`cacheScopeList`](../object/Resolver.html#cacheScopeList)`  `[`filterAll`](../object/Resolver.html#filterAll)`  `[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)`  `[`filterPossRank`](../object/Resolver.html#filterPossRank)`  `[`getAction`](../object/Resolver.html#getAction)`  `[`getPossessiveResolver`](../object/Resolver.html#getPossessiveResolver)`  `[`getPronounDefault`](../object/Resolver.html#getPronounDefault)`  `[`getQualifierResolver`](../object/Resolver.html#getQualifierResolver)`  `[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)`  `[`getScopeList`](../object/Resolver.html#getScopeList)`  `[`getTargetActor`](../object/Resolver.html#getTargetActor)`  `[`matchName`](../object/Resolver.html#matchName)`  `[`objInScope`](../object/Resolver.html#objInScope)`  `[`resetResolver`](../object/Resolver.html#resetResolver)`  `[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)`  `[`selectIndefinite`](../object/Resolver.html#selectIndefinite)`  `[`withGlobals`](../object/Resolver.html#withGlobals)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="whichMessageObject"></span>

`whichMessageObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1048](../source/resolver.t.html#1048)\]

<div class="desc">

*no description available*

</div>

<span id="whichObject"></span>

`whichObject`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1047](../source/resolver.t.html#1047)\]

<div class="desc">

we resolve target actors

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (issuingActor)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[883](../source/resolver.t.html#883)\]

<div class="desc">

*no description available*

</div>

<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[929](../source/resolver.t.html#929)\]

<div class="desc">

Filter an ambiguous list of objects. We will filter according to which
objects are most logical as targets of commands.

</div>

<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[976](../source/resolver.t.html#976)\]

<div class="desc">

Filter a plural list

</div>

<span id="getAll"></span>

`getAll (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[912](../source/resolver.t.html#912)\]

<div class="desc">

Get the "all" list - this is the list of objects that we should use when
the object of the command is the special word "all". By default, we'll
return everything in scope.

</div>

<span id="getAllDefaults"></span>

`getAllDefaults ( )`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[919](../source/resolver.t.html#919)\]

<div class="desc">

get the default object list

</div>

<span id="getDefaultObject"></span>

`getDefaultObject (np)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[987](../source/resolver.t.html#987)\]

<div class="desc">

get a default object

</div>

<span id="getRawPronounAntecedent"></span>

`getRawPronounAntecedent (typ)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[1004](../source/resolver.t.html#1004)\]

<div class="desc">

Get a raw pronoun antecedent list. Since we are resolving the target
actor, pronouns are relative to the issuing actor.

</div>

<span id="resolveUnknownNounPhrase"></span>

`resolveUnknownNounPhrase (tokList)`<span class="rem">OVERRIDDEN</span>

[resolver.t](../file/resolver.t.html)\[[994](../source/resolver.t.html#994)\]

<div class="desc">

resolve a noun phrase involving unknown words

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
