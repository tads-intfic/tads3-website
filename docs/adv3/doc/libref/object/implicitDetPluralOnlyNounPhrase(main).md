---
layout: docs
---
<span class="title">implicitDetPluralOnlyNounPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5941](../source/en_us.t.html#5941)\]

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



An implicit determiner plural phrase is an indeterminate plural phrase
without any extra determiner - i.e., the determiner is implicit. We'll
treat this the same way we do a plural explicitly determined with a
definite article, since this is the most natural interpretation in
English.

(This might seem like a pointless extra layer in the grammar, but it's
necessary for the resolution process to have a layer that explicitly
declares the phrase to be determined, even though the determiner is
implied in the structure. This extra layer is important because it
explicitly calls results.noteMatches(), which is needed for rankings and
the like.)

`grammar `<span class="gramalt">[`implicitDetPluralOnlyNounPhrase`](../object/implicitDetPluralOnlyNounPhrase.html)`(main)`</span>` :   `[`DefinitePluralProd`](../object/DefinitePluralProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`implicitDetPluralOnlyNounPhrase(main)`**  
[`DefinitePluralProd`](../object/DefinitePluralProd.html)  
[`PluralProd`](../object/PluralProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `DefinitePluralProd` :  
[`filterForCollectives`](../object/DefinitePluralProd.html#filterForCollectives)
Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `DefinitePluralProd` :  
[`resolveNouns`](../object/DefinitePluralProd.html#resolveNouns)

Inherited from `PluralProd` :  
[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns) [`getVerifyKeepers`](../object/PluralProd.html#getVerifyKeepers)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


