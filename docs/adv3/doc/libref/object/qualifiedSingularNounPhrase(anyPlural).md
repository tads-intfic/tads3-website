---
layout: docs
---
<span class="title">qualifiedSingularNounPhrase(anyPlural)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5772](../source/en_us.t.html#5772)\]

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



A singular qualified noun phrase that arbitrarily selects from a plural
set. This is singular, even though the underlying noun phrase is plural,
because we're explicitly selecting one item.

`grammar `<span class="gramalt">[`qualifiedSingularNounPhrase`](../object/qualifiedSingularNounPhrase.html)`(anyPlural)`</span>` :   `[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`qualifiedSingularNounPhrase(anyPlural)`**  
[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)  
[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)  
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
Inherited from `ArbitraryNounProd` :  
[`selectFromList`](../object/ArbitraryNounProd.html#selectFromList)

Inherited from `IndefiniteNounProd` :  
[`areAllEquiv`](../object/IndefiniteNounProd.html#areAllEquiv) [`resolveMainPhrase`](../object/IndefiniteNounProd.html#resolveMainPhrase) [`resolveNouns`](../object/IndefiniteNounProd.html#resolveNouns)

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


