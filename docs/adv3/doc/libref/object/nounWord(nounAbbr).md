---
layout: docs
---
<span class="title">nounWord(nounAbbr)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6648](../source/en_us.t.html#6648)\]

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



*no description available*

`grammar `<span class="gramalt">[`nounWord`](../object/nounWord.html)`(nounAbbr)`</span>` :   `[`NounWordProd`](../object/NounWordProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`nounWord(nounAbbr)`**  
[`NounWordProd`](../object/NounWordProd.html)  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getNounText`](#getNounText)

Inherited from `NounWordProd` :  
[`getAdjustedTokens`](../object/NounWordProd.html#getAdjustedTokens) [`getVocabMatchList`](../object/NounWordProd.html#getVocabMatchList)

Inherited from `NounPhraseWithVocab` :  
[`combineWordMatches`](../object/NounPhraseWithVocab.html#combineWordMatches) [`combineWordMatchItems`](../object/NounPhraseWithVocab.html#combineWordMatchItems) [`dictMatchIsExact`](../object/NounPhraseWithVocab.html#dictMatchIsExact) [`dictMatchIsStronger`](../object/NounPhraseWithVocab.html#dictMatchIsStronger) [`filterDictMatches`](../object/NounPhraseWithVocab.html#filterDictMatches) [`getWordMatches`](../object/NounPhraseWithVocab.html#getWordMatches) [`inScopeMatches`](../object/NounPhraseWithVocab.html#inScopeMatches) [`intersectWordMatches`](../object/NounPhraseWithVocab.html#intersectWordMatches) [`resolveNouns`](../object/NounPhraseWithVocab.html#resolveNouns) [`resolveNounsMatchName`](../object/NounPhraseWithVocab.html#resolveNounsMatchName)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getNounText"></span>

`getNounText ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6656](../source/en_us.t.html#6656)\]



for dictionary matching purposes, include the text of our noun with the
period attached - the period is part of the dictionary entry for an
abbreviated word





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


