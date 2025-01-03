---
layout: docs
---
<span class="title">completeNounPhraseWithoutAll(themselves)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5612](../source/en_us.t.html#5612)\]

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



the result is required to be singular and ungendered

`grammar `<span class="gramalt">[`completeNounPhraseWithoutAll`](../object/completeNounPhraseWithoutAll.html)`(themselves)`</span>` :   `[`ThemselvesProd`](../object/ThemselvesProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`completeNounPhraseWithoutAll(themselves)`**  
[`ThemselvesProd`](../object/ThemselvesProd.html)  
[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `ThemselvesProd` :  
[`pronounType`](../object/ThemselvesProd.html#pronounType)



Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural) [`isPossessive`](../object/PronounProd.html#isPossessive)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkAgreement`](#checkAgreement)



Inherited from `ReflexivePronounProd` :  
[`resolveNouns`](../object/ReflexivePronounProd.html#resolveNouns)

Inherited from `PronounProd` :  
[`checkAnaphoricBinding`](../object/PronounProd.html#checkAnaphoricBinding)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkAgreement"></span>

`checkAgreement (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5616](../source/en_us.t.html#5616)\]



check agreement of our binding
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


