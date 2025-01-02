---
layout: docs
---
<span class="title">TopicResolver</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6332](../source/action.t.html#6332)\]

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

Topic Resolver

`class `**`TopicResolver`**` :   `[`Resolver`](../object/Resolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicResolver`**  
`         `[`Resolver`](../object/Resolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicResolver`**  
`         `[`ConvTopicResolver`](../object/ConvTopicResolver.html)  
`         `[`TActionTopicResolver`](../object/TActionTopicResolver.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`isGlobalScope`](#isGlobalScope)`  `[`qualifierResolver_`](#qualifierResolver_)`  `[`topicProd`](#topicProd)`  `

Inherited from `Resolver` :  
` `[`action_`](../object/Resolver.html#action_)`  `[`actor_`](../object/Resolver.html#actor_)`  `[`equivs_`](../object/Resolver.html#equivs_)`  `[`isSubResolver`](../object/Resolver.html#isSubResolver)`  `[`issuer_`](../object/Resolver.html#issuer_)`  `[`scope_`](../object/Resolver.html#scope_)`  `[`whichMessageObject`](../object/Resolver.html#whichMessageObject)`  `[`whichObject`](../object/Resolver.html#whichObject)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)`  `[`filterPluralPhrase`](#filterPluralPhrase)`  `[`filterPossRank`](#filterPossRank)`  `[`getAll`](#getAll)`  `[`getAllDefaults`](#getAllDefaults)`  `[`getDefaultObject`](#getDefaultObject)`  `[`getPossessiveResolver`](#getPossessiveResolver)`  `[`getQualifierResolver`](#getQualifierResolver)`  `[`noMatch`](#noMatch)`  `[`noMatchPoss`](#noMatchPoss)`  `[`noVocabMatch`](#noVocabMatch)`  `[`objInPhysicalScope`](#objInPhysicalScope)`  `[`objInScope`](#objInScope)`  `[`packageTopicList`](#packageTopicList)`  `[`resetResolver`](#resetResolver)`  `[`resolveTopic`](#resolveTopic)`  `[`resolveUnknownNounPhrase`](#resolveUnknownNounPhrase)`  `

Inherited from `Resolver` :  
` `[`allowAll`](../object/Resolver.html#allowAll)`  `[`cacheScopeList`](../object/Resolver.html#cacheScopeList)`  `[`filterAll`](../object/Resolver.html#filterAll)`  `[`filterAmbiguousEquivalents`](../object/Resolver.html#filterAmbiguousEquivalents)`  `[`getAction`](../object/Resolver.html#getAction)`  `[`getPronounDefault`](../object/Resolver.html#getPronounDefault)`  `[`getRawPronounAntecedent`](../object/Resolver.html#getRawPronounAntecedent)`  `[`getReflexiveBinding`](../object/Resolver.html#getReflexiveBinding)`  `[`getScopeList`](../object/Resolver.html#getScopeList)`  `[`getTargetActor`](../object/Resolver.html#getTargetActor)`  `[`matchName`](../object/Resolver.html#matchName)`  `[`resolvePronounAntecedent`](../object/Resolver.html#resolvePronounAntecedent)`  `[`selectIndefinite`](../object/Resolver.html#selectIndefinite)`  `[`withGlobals`](../object/Resolver.html#withGlobals)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isGlobalScope"></span>

`isGlobalScope`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6405](../source/action.t.html#6405)\]

<div class="desc">

our scope is global, because we don't limit the scope to the physical
senses

</div>

<span id="qualifierResolver_"></span>

`qualifierResolver_`

[action.t](../file/action.t.html)\[[6385](../source/action.t.html#6385)\]

<div class="desc">

our qualifier resolver

</div>

<span id="topicProd"></span>

`topicProd`

[action.t](../file/action.t.html)\[[6531](../source/action.t.html#6531)\]

<div class="desc">

the production match tree for the topic phrase we're resolving

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (action, issuingActor, targetActor, prod, which, qualifierResolver)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6333](../source/action.t.html#6333)\]

<div class="desc">

*no description available*

</div>

<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6459](../source/action.t.html#6459)\]

<div class="desc">

Filter an ambiguous noun list.

It is almost always undesirable from a user interface perspective to ask
for help disambiguating a topic phrase. In the first place, since all
topics tend to be in scope all the time, we might reveal too much about
the inner model of the story if we were to enumerate all of the topic
matches to a phrase. In the second place, topics are used in
conversational contexts, so it almost never make sense for the parser to
ask for clarification - the other member of the conversation might ask,
but not the parser. So, we'll always filter the list to the required
number, even if it means we choose arbitrarily.

As a first cut, we prefer objects that are physically in scope to those
not in scope: if the player is standing next to a control panel and
types "ask bob about control panel," it makes little sense to consider
any other control panels in the simulation.

As a second cut, we'll ask the actor to filter the list. Games that keep
track of the actor's knowledge can use this to filter according to
topics the actor is likely to know about.

</div>

<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6503](../source/action.t.html#6503)\]

<div class="desc">

filter a plural

</div>

<span id="filterPossRank"></span>

`filterPossRank (lst, num)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6431](../source/action.t.html#6431)\]

<div class="desc">

Filter an ambiguous noun phrase list using the strength of possessive
qualification, if any. For a topic phrase, we want to keep all of the
possibilities.

</div>

<span id="getAll"></span>

`getAll (np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6527](../source/action.t.html#6527)\]

<div class="desc">

we don't allow ALL or provide defaults

</div>

<span id="getAllDefaults"></span>

`getAllDefaults ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6528](../source/action.t.html#6528)\]

<div class="desc">

*no description available*

</div>

<span id="getDefaultObject"></span>

`getDefaultObject (np)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6515](../source/action.t.html#6515)\]

<div class="desc">

get a default object

</div>

<span id="getPossessiveResolver"></span>

`getPossessiveResolver ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6389](../source/action.t.html#6389)\]

<div class="desc">

*no description available*

</div>

<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6388](../source/action.t.html#6388)\]

<div class="desc">

get our qualifier resolver

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[action.t](../file/action.t.html)\[[6523](../source/action.t.html#6523)\]

<div class="desc">

*no description available*

</div>

<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[action.t](../file/action.t.html)\[[6524](../source/action.t.html#6524)\]

<div class="desc">

*no description available*

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[action.t](../file/action.t.html)\[[6522](../source/action.t.html#6522)\]

<div class="desc">

it's fine not to match a topic phrase

</div>

<span id="objInPhysicalScope"></span>

`objInPhysicalScope (obj)`

[action.t](../file/action.t.html)\[[6417](../source/action.t.html#6417)\]

<div class="desc">

Determine if an object is in physical scope. We'll accept anything
that's in physical scope, and we'll also accept any topic object that
the actor knows about.

Note that this isn't part of the basic Resolver interface. It's instead
provided as a service routine for our subclasses, so that they can
easily determine the physical scope of an object if needed.

</div>

<span id="objInScope"></span>

`objInScope (obj)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6399](../source/action.t.html#6399)\]

<div class="desc">

Determine if the object is in scope. We consider any vocabulary match to
be in scope for the purposes of a topic phrase, since the subject matter
of topics is mere references to things, not the things themselves; we
can, for example, ASK ABOUT things that aren't physically present, or
even about completely abstract ideas.

</div>

<span id="packageTopicList"></span>

`packageTopicList (lst, match)`

[action.t](../file/action.t.html)\[[6365](../source/action.t.html#6365)\]

<div class="desc">

package a resolved topic list - if it's not already represented as a
ResolvedTopic object, we'll apply that wrapping

</div>

<span id="resetResolver"></span>

`resetResolver ( )`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6352](../source/action.t.html#6352)\]

<div class="desc">

remember the resolver for qualifier phrases

</div>

<span id="resolveTopic"></span>

`resolveTopic (lst, requiredNum, np)`

[action.t](../file/action.t.html)\[[6478](../source/action.t.html#6478)\]

<div class="desc">

Resolve the topic phrase. This returns a ResolvedTopic object
encapsulating the resolution of the phrase.

This default base class implementation simply creates a resolved topic
list with the whole set of possible matches undifferentiated. Subclasses
for specialized actions might want to differentiate the items in the
list, based on things like the actor's knowledge so far or what's in
physical scope.

</div>

<span id="resolveUnknownNounPhrase"></span>

`resolveUnknownNounPhrase (tokList)`<span class="rem">OVERRIDDEN</span>

[action.t](../file/action.t.html)\[[6489](../source/action.t.html#6489)\]

<div class="desc">

Resolve an unknown phrase. We allow unknown words to be used in topics;
we simply return a ResolvedTopic that doesn't refer to any simulation
objects at all.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
