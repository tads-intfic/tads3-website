---
layout: docs
---
<span class="title">ExactQuantifiedPluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2382](../source/parser.t.html#2382)\]

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

<div class="fdesc">

Exact quantified plural phrase. This is similar to the normal quantified
plural, but has the additional requirement of matching an unambiguous
set of the exact given number ("the five books" means that we expect to
find exactly five books matching the phrase - no fewer, and no more).

`class `**`ExactQuantifiedPluralProd`**` :   `[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)`   `[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExactQuantifiedPluralProd`**  
`         `[`QuantifiedPluralProd`](../object/QuantifiedPluralProd.html)  
`                 `[`PluralProd`](../object/PluralProd.html)  
`                         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                                 `[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
`         `[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ExactQuantifiedPluralProd`**  
`         `[`BothPluralProd`](../object/BothPluralProd.html)  
`                 `[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
`         `[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
`         `[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
`         `[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

Inherited from `AmbigResponseKeeper` :  
` `[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getVerifyKeepers`](#getVerifyKeepers)`  `[`selectExactCount`](#selectExactCount)`  `

Inherited from `QuantifiedPluralProd` :  
` `[`getQuantity`](../object/QuantifiedPluralProd.html#getQuantity)`  `[`resolveMainPhrase`](../object/QuantifiedPluralProd.html#resolveMainPhrase)`  `[`resolveNouns`](../object/QuantifiedPluralProd.html#resolveNouns)`  `

Inherited from `PluralProd` :  
` `[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

Inherited from `AmbigResponseKeeper` :  
` `[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse)`  `[`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2413](../source/parser.t.html#2413)\]

<div class="desc">

get the keepers in the verify stage

</div>

<span id="selectExactCount"></span>

`selectExactCount (lst, num, scopeList, resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2387](../source/parser.t.html#2387)\]

<div class="desc">

Select the desired number of matches. Since we want an exact set of
matches, we'll run disambiguation on the set.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
