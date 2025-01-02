---
layout: docs
---
<span class="title">NounWordProd</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[6586](../source/en_us.t.html#6586)\]

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



A noun word. This can be either a simple 'noun' vocabulary word, or it
can be an abbreviated noun with a trailing abbreviation period.

`class `**`NounWordProd`**` :   `[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NounWordProd`**  
[`NounPhraseWithVocab`](../object/NounPhraseWithVocab.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`NounWordProd`**  
[`nounWord(noun)`](../object/nounWord(noun).html)  
[`nounWord(nounAbbr)`](../object/nounWord(nounAbbr).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getAdjustedTokens`](#getAdjustedTokens) [`getNounText`](#getNounText) [`getVocabMatchList`](#getVocabMatchList)

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



<span id="getAdjustedTokens"></span>

`getAdjustedTokens ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6635](../source/en_us.t.html#6635)\]



return the match list



<span id="getNounText"></span>

`getNounText ( )`

[en_us.t](../file/en_us.t.html)\[[6642](../source/en_us.t.html#6642)\]



the actual text of the noun to match to the dictionary



<span id="getVocabMatchList"></span>

`getVocabMatchList (resolver, results, extraFlags)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6587](../source/en_us.t.html#6587)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


