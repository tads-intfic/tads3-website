---
layout: docs
---
<span class="title">singleNoun(empty)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5415](../source/en_us.t.html#5415)\]

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



An empty single noun is one with no words at all. This is matched when a
command requires a noun list but the player doesn't include one; this
construct has "badness" because we only want to match it when we have no
choice.

`grammar `<span class="gramalt">[`singleNoun`](../object/singleNoun.html)`(empty)`</span>` :   `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`singleNoun(empty)`**  
[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fallbackResponseProd`](#fallbackResponseProd) [`responseProd`](#responseProd)

Inherited from `EmptyNounPhraseProd` :  
[`asker_`](../object/EmptyNounPhraseProd.html#asker_) [`newMatch`](../object/EmptyNounPhraseProd.html#newMatch)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `EmptyNounPhraseProd` :  
[`getImpliedObject`](../object/EmptyNounPhraseProd.html#getImpliedObject) [`getOrigText`](../object/EmptyNounPhraseProd.html#getOrigText) [`getOrigTokenList`](../object/EmptyNounPhraseProd.html#getOrigTokenList) [`isEmptyPhrase`](../object/EmptyNounPhraseProd.html#isEmptyPhrase) [`resolveNouns`](../object/EmptyNounPhraseProd.html#resolveNouns) [`setPrompt`](../object/EmptyNounPhraseProd.html#setPrompt)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fallbackResponseProd"></span>

`fallbackResponseProd`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5420](../source/en_us.t.html#5420)\]



the fallback responseProd, if we can't get one from the action



<span id="responseProd"></span>

`responseProd`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5417](../source/en_us.t.html#5417)\]



use a nil responseProd, so that we get the phrasing from the action



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


