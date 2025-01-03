---
layout: docs
---
<span class="title">BothPluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2611](../source/parser.t.html#2611)\]

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



A qualified plural phrase explicitly including two objects (such as, in
English, "both books").

`class `**`BothPluralProd`**` :   `[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BothPluralProd`**  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)  
[`PluralProd`](../object/PluralProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BothPluralProd`**  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  




Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getQuantity`](#getQuantity)

Inherited from `ExactQuantifiedPluralProd` :  
[`getVerifyKeepers`](../object/ExactQuantifiedPluralProd.html#getVerifyKeepers) [`selectExactCount`](../object/ExactQuantifiedPluralProd.html#selectExactCount)

Inherited from `QuantifiedPluralProd` :  
[`resolveMainPhrase`](../object/QuantifiedPluralProd.html#resolveMainPhrase) [`resolveNouns`](../object/QuantifiedPluralProd.html#resolveNouns)

Inherited from `PluralProd` :  
[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `AmbigResponseKeeper` :  
[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse) [`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getQuantity"></span>

`getQuantity ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2613](../source/parser.t.html#2613)\]



the quantity specified by a "both" phrase is 2
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


