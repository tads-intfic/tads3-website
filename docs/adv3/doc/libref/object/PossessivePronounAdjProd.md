---
layout: docs
---
<span class="title">PossessivePronounAdjProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2621](../source/parser.t.html#2621)\]

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

Possessive adjectives

`class `**`PossessivePronounAdjProd`**` :   `[`PronounProd`](../object/PronounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PossessivePronounAdjProd`**  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PossessivePronounAdjProd`**  
[`HerAdjProd`](../object/HerAdjProd.html)  
[`possessiveAdjPhrase(her)`](../object/possessiveAdjPhrase(her).html)  
[`HisAdjProd`](../object/HisAdjProd.html)  
[`possessiveAdjPhrase(his)`](../object/possessiveAdjPhrase(his).html)  
[`ItsAdjProd`](../object/ItsAdjProd.html)  
[`possessiveAdjPhrase(its)`](../object/possessiveAdjPhrase(its).html)  
[`MyAdjProd`](../object/MyAdjProd.html)  
[`possessiveAdjPhrase(my)`](../object/possessiveAdjPhrase(my).html)  
[`TheirAdjProd`](../object/TheirAdjProd.html)  
[`possessiveAdjPhrase(their)`](../object/possessiveAdjPhrase(their).html)  
[`YourAdjProd`](../object/YourAdjProd.html)  
[`possessiveAdjPhrase(your)`](../object/possessiveAdjPhrase(your).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`canBeAnaphor`](#canBeAnaphor)[`isPossessive`](#isPossessive)

Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural)[`pronounType`](../object/PronounProd.html#pronounType)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`checkAnaphorAgreement`](#checkAnaphorAgreement)[`checkAnaphoricBinding`](#checkAnaphoricBinding)[`getOrigMainText`](#getOrigMainText)

Inherited from `PronounProd` :  
[`resolveNouns`](../object/PronounProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="canBeAnaphor"></span>

`canBeAnaphor`

[parser.t](../file/parser.t.html)\[[2680](../source/parser.t.html#2680)\]

<div class="desc">

Can we be an anaphor? By default, we consider third-person possessive
pronouns to be anaphoric, and others to be non-anaphoric. For example,
in GIVE BOB MY BOOK, MY always refers to the speaker, so it's clearly
not anaphoric within the sentence.

</div>

<span id="isPossessive"></span>

`isPossessive`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2672](../source/parser.t.html#2672)\]

<div class="desc">

this is a possessive usage of the pronoun

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkAnaphorAgreement"></span>

`checkAnaphorAgreement (lst)`

[parser.t](../file/parser.t.html)\[[2691](../source/parser.t.html#2691)\]

<div class="desc">

Check agreement to a given anaphoric pronoun binding. The language
module should override this for each pronoun type to ensure that the
actual contents of the list agree in number and gender with this type of
pronoun. If so, return true; if not, return nil. It's not an error or a
ranking demerit if we don't agree; it just means that we'll fall back on
the regular pronoun antecedent rather than trying to use an anaphoric
binding.

</div>

<span id="checkAnaphoricBinding"></span>

`checkAnaphoricBinding (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2627](../source/parser.t.html#2627)\]

<div class="desc">

Possessive pronouns can refer to the earlier noun phrases of the same
predicate, which is to say that they're anaphoric. For example, in GIVE
BOB HIS BOOK, 'his' refers to Bob.

</div>

<span id="getOrigMainText"></span>

`getOrigMainText ( )`

[parser.t](../file/parser.t.html)\[[2697](../source/parser.t.html#2697)\]

<div class="desc">

By default, the "main text" of a possessive pronoun is the same as the
actual token text. Languages can override this as needed\>

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
