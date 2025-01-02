---
layout: docs
---
<span class="title">possessiveNounPhrase(its)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6801](../source/en_us.t.html#6801)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Possessive noun phrases. These are similar to possessive phrases, but
are stand-alone phrases that can act as nouns rather than as qualifiers
for other noun phrases. For example, for a first-person player
character, "mine" would be a possessive noun phrase referring to an
object owned by the player character.

Note that many of the words used for possessive nouns are the same as
for possessive adjectives - for example "his" is the same in either
case, as are "'s" words. However, we make the distinction internally
because the two have different grammatical uses, and some of the words
do differ ("her" vs "hers", for example).

`grammar `<span class="gramalt">[`possessiveNounPhrase`](../object/possessiveNounPhrase.html)`(its)`</span>` :   `[`ItsNounProd`](../object/ItsNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`possessiveNounPhrase(its)`**  
[`ItsNounProd`](../object/ItsNounProd.html)  
[`PossessivePronounNounProd`](../object/PossessivePronounNounProd.html)  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `ItsNounProd` :  
[`pronounType`](../object/ItsNounProd.html#pronounType)

Inherited from `PossessivePronounNounProd` :  
[`isPossessive`](../object/PossessivePronounNounProd.html#isPossessive)

Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  









Inherited from `PronounProd` :  
[`checkAnaphoricBinding`](../object/PronounProd.html#checkAnaphoricBinding) [`resolveNouns`](../object/PronounProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


