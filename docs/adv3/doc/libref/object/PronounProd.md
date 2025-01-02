---
layout: docs
---
<span class="title">PronounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1398](../source/parser.t.html#1398)\]

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



Basic class for pronoun phrases. The specific pronouns are
language-dependent; each instance should define its pronounType property
to an appropriate PronounXxx constant.

`class `**`PronounProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PronounProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PronounProd`**  
[`HerProd`](../object/HerProd.html)  
[`completeNounPhraseWithoutAll(her)`](../object/completeNounPhraseWithoutAll(her).html)  
[`HimProd`](../object/HimProd.html)  
[`completeNounPhraseWithoutAll(him)`](../object/completeNounPhraseWithoutAll(him).html)  
[`ItProd`](../object/ItProd.html)  
[`completeNounPhraseWithoutAll(it)`](../object/completeNounPhraseWithoutAll(it).html)  
[`MeProd`](../object/MeProd.html)  
[`completeNounPhraseWithoutAll(me)`](../object/completeNounPhraseWithoutAll(me).html)  
[`PossessivePronounAdjProd`](../object/PossessivePronounAdjProd.html)  
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
[`PossessivePronounNounProd`](../object/PossessivePronounNounProd.html)  
[`HersNounProd`](../object/HersNounProd.html)  
[`possessiveNounPhrase(hers)`](../object/possessiveNounPhrase(hers).html)  
[`HisNounProd`](../object/HisNounProd.html)  
[`possessiveNounPhrase(his)`](../object/possessiveNounPhrase(his).html)  
[`ItsNounProd`](../object/ItsNounProd.html)  
[`possessiveNounPhrase(its)`](../object/possessiveNounPhrase(its).html)  
[`MineNounProd`](../object/MineNounProd.html)  
[`possessiveNounPhrase(mine)`](../object/possessiveNounPhrase(mine).html)  
[`TheirsNounProd`](../object/TheirsNounProd.html)  
[`possessiveNounPhrase(theirs)`](../object/possessiveNounPhrase(theirs).html)  
[`YoursNounProd`](../object/YoursNounProd.html)  
[`possessiveNounPhrase(yours)`](../object/possessiveNounPhrase(yours).html)  
[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)  
[`HerselfProd`](../object/HerselfProd.html)  
[`completeNounPhraseWithoutAll(herself)`](../object/completeNounPhraseWithoutAll(herself).html)  
[`HimselfProd`](../object/HimselfProd.html)  
[`completeNounPhraseWithoutAll(himself)`](../object/completeNounPhraseWithoutAll(himself).html)  
[`ItselfProd`](../object/ItselfProd.html)  
[`completeNounPhraseWithoutAll(itself)`](../object/completeNounPhraseWithoutAll(itself).html)  
[`ThemselvesProd`](../object/ThemselvesProd.html)  
[`completeNounPhraseWithoutAll(themselves)`](../object/completeNounPhraseWithoutAll(themselves).html)  
[`ThemProd`](../object/ThemProd.html)  
[`completeNounPhraseWithoutAll(them)`](../object/completeNounPhraseWithoutAll(them).html)  
[`YouProd`](../object/YouProd.html)  
[`completeNounPhraseWithoutAll(yourself)`](../object/completeNounPhraseWithoutAll(yourself).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isPlural`](#isPlural) [`isPossessive`](#isPossessive) [`pronounType`](#pronounType)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkAnaphoricBinding`](#checkAnaphoricBinding) [`resolveNouns`](#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isPlural"></span>

`isPlural`

[parser.t](../file/parser.t.html)\[[1481](../source/parser.t.html#1481)\]



Is this pronoun a singular or a plural? A pronoun like "it" or "he" is
singular, because it refers to a single antecedent; "them" is plural.
Language modules that define their own custom pronoun subclasses should
override this as needed.



<span id="isPossessive"></span>

`isPossessive`

[parser.t](../file/parser.t.html)\[[1473](../source/parser.t.html#1473)\]



is this a possessive usage?



<span id="pronounType"></span>

`pronounType`

[parser.t](../file/parser.t.html)\[[1470](../source/parser.t.html#1470)\]



our pronoun specifier - this must be set in each rule instance to one of
the PronounXxx constants to specify which pronoun to use when resolving
the pronoun phrase



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkAnaphoricBinding"></span>

`checkAnaphoricBinding (resolver, results)`

[parser.t](../file/parser.t.html)\[[1492](../source/parser.t.html#1492)\]



Check for an anaphoric binding. Returns a list (which is allowed to be
empty) if this can refer back to an earlier noun phrase in the same
command, nil if not. By default, we consider pronouns to be
non-anaphoric, meaning they refer to something from a previous sentence,
not something in this same sentence. In most languages, pronouns don't
refer to objects in other noun phrases within the same predicate unless
they're reflexive.



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1399](../source/parser.t.html#1399)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


