---
layout: docs
---
<span class="title">ItProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1502](../source/parser.t.html#1502)\]

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



For simplicity, define subclasses of PronounProd for the basic set of
pronouns found in most languages. Language-specific grammar definitions
can choose to use these or not, and can add their own extra subclasses
as needed for types of pronouns we don't define here.

`class `**`ItProd`**` :   `[`PronounProd`](../object/PronounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ItProd`**  
[`PronounProd`](../object/PronounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ItProd`**  
[`completeNounPhraseWithoutAll(it)`](../object/completeNounPhraseWithoutAll(it).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`pronounType`](#pronounType)

Inherited from `PronounProd` :  
[`isPlural`](../object/PronounProd.html#isPlural)[`isPossessive`](../object/PronounProd.html#isPossessive)

Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `PronounProd` :  
[`checkAnaphoricBinding`](../object/PronounProd.html#checkAnaphoricBinding)[`resolveNouns`](../object/PronounProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="pronounType"></span>

`pronounType`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1503](../source/parser.t.html#1503)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


