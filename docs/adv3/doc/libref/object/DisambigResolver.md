<span class="title">DisambigResolver</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[343](../source/disambig.t.html#343)\],
[en_us.t](../file/en_us.t.html)\[[3435](../source/en_us.t.html#3435)\]

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

Disambiguation Resolver. This is a special resolver that we use for
resolving disambiguation responses.

*Modified in
[en_us.t](../file/en_us.t.html)\[[3435](../source/en_us.t.html#3435)\]:*  
Custom disambiguation resolver.

`class `**`DisambigResolver`**` :   `[`InteractiveResolver`](../object/InteractiveResolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DisambigResolver`**  
`         `[`InteractiveResolver`](../object/InteractiveResolver.html)  
`                 `[`ProxyResolver`](../object/ProxyResolver.html)  
`                         object`  
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

` `[`allowAll`](#allowAll)`  `[`distinguisher`](#distinguisher)`  `[`fullMatchList`](#fullMatchList)`  `[`matchList`](#matchList)`  `[`matchText`](#matchText)`  `[`ordinalMatchList`](#ordinalMatchList)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)`  `[`filterPluralPhrase`](#filterPluralPhrase)`  `[`getAll`](#getAll)`  `[`getQualifierResolver`](#getQualifierResolver)`  `[`matchName`](#matchName)`  `[`objInScope`](#objInScope)`  `[`resolvePronounAntecedent`](#resolvePronounAntecedent)`  `[`selectIndefinite`](#selectIndefinite)`  `

Inherited from `InteractiveResolver` :  
` `[`getReflexiveBinding`](../object/InteractiveResolver.html#getReflexiveBinding)`  `[`resolvePronounAsTargetActor`](../object/InteractiveResolver.html#resolvePronounAsTargetActor)`  `

Inherited from `ProxyResolver` :  
` `[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)`  `[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowAll"></span>

`allowAll`

[disambig.t](../file/disambig.t.html)\[[389](../source/disambig.t.html#389)\]

<div class="desc">

we allow ALL in interactive disambiguation responses, regardless of the
verb, because we're just selecting from the list presented in the prompt
in these cases

</div>

<span id="distinguisher"></span>

`distinguisher`

[disambig.t](../file/disambig.t.html)\[[464](../source/disambig.t.html#464)\]

<div class="desc">

The distinguisher that was used to generate the prompt. Some
distinguishers can tell objects apart by other characteristics than just
their names, so when parsing we want to be able to give the
distinguisher a look at the input to see if the player is referring to
one of the distinguishing characteristics rather than the object's own
name.

</div>

<span id="fullMatchList"></span>

`fullMatchList`

[disambig.t](../file/disambig.t.html)\[[454](../source/disambig.t.html#454)\]

<div class="desc">

the full original match list, which might include items in scope beyond
those offered as interactive choices

</div>

<span id="matchList"></span>

`matchList`

[disambig.t](../file/disambig.t.html)\[[448](../source/disambig.t.html#448)\]

<div class="desc">

the original match list we are disambiguating, which includes all of the
objects offered as interactive choices, and might include
indistinguishable equivalents of offered items

</div>

<span id="matchText"></span>

`matchText`

[disambig.t](../file/disambig.t.html)\[[431](../source/disambig.t.html#431)\]

<div class="desc">

the text of the phrase we're disambiguating

</div>

<span id="ordinalMatchList"></span>

`ordinalMatchList`

[disambig.t](../file/disambig.t.html)\[[441](../source/disambig.t.html#441)\]

<div class="desc">

The "ordinal" match list: this includes the exact list offered as
interactive choices in the same order as they were shown in the prompt.
This list can be used to correlate ordinal responses to the prompt list,
since it contains exactly the items listed in the prompt. Note that this
list will only contain one of each indistinguishable object.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (matchText, ordinalMatchList, matchList, fullMatchList, resolver, dist)`<span class="rem">OVERRIDDEN</span>

[disambig.t](../file/disambig.t.html)\[[344](../source/disambig.t.html#344)\]

<div class="desc">

*no description available*

</div>

<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`

[disambig.t](../file/disambig.t.html)\[[395](../source/disambig.t.html#395)\]

<div class="desc">

filter an ambiguous noun list

</div>

<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`

[disambig.t](../file/disambig.t.html)\[[406](../source/disambig.t.html#406)\]

<div class="desc">

filter a plural noun list

</div>

<span id="getAll"></span>

`getAll (np)`

[disambig.t](../file/disambig.t.html)\[[392](../source/disambig.t.html#392)\]

<div class="desc">

for 'all', use the full current full match list

</div>

<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`

[disambig.t](../file/disambig.t.html)\[[373](../source/disambig.t.html#373)\]

<div class="desc">

Resolve qualifiers in the enclosing main scope, since qualifier phrases
in responses are not part of the narrowed list being disambiguated.

</div>

<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens)`

[disambig.t](../file/disambig.t.html)\[[362](../source/disambig.t.html#362)\]

<div class="desc">

Match an object's name. We'll send this to the distinguisher for
handling.

</div>

<span id="objInScope"></span>

`objInScope (obj)`

[disambig.t](../file/disambig.t.html)\[[379](../source/disambig.t.html#379)\]

<div class="desc">

Determine if an object is in scope. We pass this to the distinguisher to
decide.

</div>

<span id="resolvePronounAntecedent"></span>

`resolvePronounAntecedent (typ, np, results, poss)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3444](../source/en_us.t.html#3444)\]

<div class="desc">

Perform special resolution on pronouns used in interactive responses. If
the pronoun is HIM or HER, then look through the list of possible
matches for a matching gendered object, and use it as the result if we
find one. If we find more than one, then use the default handling
instead, treating the pronoun as referring back to the simple antecedent
previously set.

</div>

<span id="selectIndefinite"></span>

`selectIndefinite (results, lst, requiredNumber)`

[disambig.t](../file/disambig.t.html)\[[422](../source/disambig.t.html#422)\]

<div class="desc">

Select the match for an indefinite noun phrase. In interactive
disambiguation, an indefinite noun phrase simply narrows the list,
rather than selecting any match, so treat this as still ambiguous.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
