---
layout: docs
---
<span class="title">compoundNounPhrase(simple)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6084](../source/en_us.t.html#6084)\]

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



Compound noun phrase. This is one or more noun phrases connected with
'of', as in "piece of paper". The part after the 'of' is another
compound noun phrase.

Note that this general rule does not allow the noun phrase after the
'of' to be qualified with an article or number, except that we make an
exception to allow a definite article. Other cases ("a piece of four
papers") do not generally make sense, so we won't attempt to support
them; instead, games can add as special cases new nounPhrase rules for
specific literal sequences where more complex grammar is necessary.

`grammar `<span class="gramalt">[`compoundNounPhrase`](../object/compoundNounPhrase.html)`(simple)`</span>` :   `[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`compoundNounPhrase(simple)`**  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getAdjustedTokens`](#getAdjustedTokens)[`getVocabMatchList`](#getVocabMatchList)

Inherited from `NounPhraseWithVocab` :  
[`combineWordMatches`](../object/NounPhraseWithVocab.html#combineWordMatches)[`combineWordMatchItems`](../object/NounPhraseWithVocab.html#combineWordMatchItems)[`dictMatchIsExact`](../object/NounPhraseWithVocab.html#dictMatchIsExact)[`dictMatchIsStronger`](../object/NounPhraseWithVocab.html#dictMatchIsStronger)[`filterDictMatches`](../object/NounPhraseWithVocab.html#filterDictMatches)[`getWordMatches`](../object/NounPhraseWithVocab.html#getWordMatches)[`inScopeMatches`](../object/NounPhraseWithVocab.html#inScopeMatches)[`intersectWordMatches`](../object/NounPhraseWithVocab.html#intersectWordMatches)[`resolveNouns`](../object/NounPhraseWithVocab.html#resolveNouns)[`resolveNounsMatchName`](../object/NounPhraseWithVocab.html#resolveNounsMatchName)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getAdjustedTokens"></span>

`getAdjustedTokens ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6090](../source/en_us.t.html#6090)\]



*no description available*



<span id="getVocabMatchList"></span>

`getVocabMatchList (resolver, results, extraFlags)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6086](../source/en_us.t.html#6086)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


