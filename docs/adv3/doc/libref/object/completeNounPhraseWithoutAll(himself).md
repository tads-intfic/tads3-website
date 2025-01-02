---
layout: docs
---
<span class="title">completeNounPhraseWithoutAll(himself)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5631](../source/en_us.t.html#5631)\]

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



For 'themselves', allow anything; we could balk at this matching a
single object that isn't a mass noun, but that would be overly picky,
and it would probably reject at least a few things that really ought to
be acceptable. Besides, 'them' is the closest thing English has to a
singular gender-neutral pronoun, and some people intentionally use it as
such.

`grammar `<span class="gramalt">[`completeNounPhraseWithoutAll`](../object/completeNounPhraseWithoutAll.html)`(himself)`</span>` :   `[`HimselfProd`](../object/HimselfProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`completeNounPhraseWithoutAll(himself)`**  
[`HimselfProd`](../object/HimselfProd.html)  
[`ReflexivePronounProd`](../object/ReflexivePronounProd.html)  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `HimselfProd` :  
[`pronounType`](../object/HimselfProd.html#pronounType)



Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural)[`isPossessive`](../object/PronounProd.html#isPossessive)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkAgreement`](#checkAgreement)



Inherited from `ReflexivePronounProd` :  
[`resolveNouns`](../object/ReflexivePronounProd.html#resolveNouns)

Inherited from `PronounProd` :  
[`checkAnaphoricBinding`](../object/PronounProd.html#checkAnaphoricBinding)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkAgreement"></span>

`checkAgreement (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5633](../source/en_us.t.html#5633)\]



check agreement of our binding





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


