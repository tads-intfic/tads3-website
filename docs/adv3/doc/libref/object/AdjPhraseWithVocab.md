---
layout: docs
---
<span class="title">AdjPhraseWithVocab</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[6457](../source/en_us.t.html#6457)\]

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



An AdjPhraseWithVocab is an English-specific subclass of
NounPhraseWithVocab, specifically for noun phrases that contain entirely
adjectives.

`class `**`AdjPhraseWithVocab`**` :   `[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AdjPhraseWithVocab`**  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`AdjPhraseWithVocab`**  
[`adjPhrase(adj)`](../object/adjPhrase(adj).html)  
[`adjWord(adj)`](../object/adjWord(adj).html)  
[`adjWord(adjAbbr)`](../object/adjWord(adjAbbr).html)  
[`adjWord(adjApostS)`](../object/adjWord(adjApostS).html)  
[`literalAdjPhrase(literalAdj)`](../object/literalAdjPhrase(literalAdj).html)  
[`literalAdjPhrase(number)`](../object/literalAdjPhrase(number).html)  
[`literalAdjPhrase(string)`](../object/literalAdjPhrase(string).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`adjVocabProp`](#adjVocabProp)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addNounMatchList`](#addNounMatchList)

Inherited from `NounPhraseWithVocab` :  
[`combineWordMatches`](../object/NounPhraseWithVocab.html#combineWordMatches)[`combineWordMatchItems`](../object/NounPhraseWithVocab.html#combineWordMatchItems)[`dictMatchIsExact`](../object/NounPhraseWithVocab.html#dictMatchIsExact)[`dictMatchIsStronger`](../object/NounPhraseWithVocab.html#dictMatchIsStronger)[`filterDictMatches`](../object/NounPhraseWithVocab.html#filterDictMatches)[`getAdjustedTokens`](../object/NounPhraseWithVocab.html#getAdjustedTokens)[`getVocabMatchList`](../object/NounPhraseWithVocab.html#getVocabMatchList)[`getWordMatches`](../object/NounPhraseWithVocab.html#getWordMatches)[`inScopeMatches`](../object/NounPhraseWithVocab.html#inScopeMatches)[`intersectWordMatches`](../object/NounPhraseWithVocab.html#intersectWordMatches)[`resolveNouns`](../object/NounPhraseWithVocab.html#resolveNouns)[`resolveNounsMatchName`](../object/NounPhraseWithVocab.html#resolveNounsMatchName)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="adjVocabProp"></span>

`adjVocabProp`

[en_us.t](../file/en_us.t.html)\[[6459](../source/en_us.t.html#6459)\]



the property for the adjective literal - this is usually adj\_



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addNounMatchList"></span>

`addNounMatchList (lst, resolver, results, extraFlags)`

[en_us.t](../file/en_us.t.html)\[[6466](../source/en_us.t.html#6466)\]



Add the vocabulary matches that we'd get if we were treating our
adjective as a noun. This combines the noun interpretation with a list
of matches we got for the adjective version.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


