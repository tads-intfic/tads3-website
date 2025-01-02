---
layout: docs
---
<span class="title">PluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2092](../source/parser.t.html#2092)\]

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



Base class for a plural production

`class `**`PluralProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PluralProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PluralProd`**  
[`AllPluralProd`](../object/AllPluralProd.html)  
[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
[`DefinitePluralProd`](../object/DefinitePluralProd.html)  
[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)  
[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)  
[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)  
[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
[`BothPluralProd`](../object/BothPluralProd.html)  
[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`basicPluralResolveNouns`](#basicPluralResolveNouns)[`getVerifyKeepers`](#getVerifyKeepers)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="basicPluralResolveNouns"></span>

`basicPluralResolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2097](../source/parser.t.html#2097)\]



Basic plural noun resolution. We'll retrieve the matching objects and
filter them using filterPluralPhrase.



<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2137](../source/parser.t.html#2137)\]



Get the verify "keepers" for a plural phrase.

If the "filter plural matches" configuration flag is set to true, we'll
return the subset of items which are logical for this command. If the
filter flag is nil, we'll simply return the full set of vocabulary
matches without any filtering.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


