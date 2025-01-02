<span class="title">PossessivePluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3012](../source/parser.t.html#3012)\]

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

Possessive phrase + plural noun phrase. The grammar rule must set poss\_
to the possessive and np\_ to the plural.

`class `**`PossessivePluralProd`**` :   `[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PossessivePluralProd`**  
`         `[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
`                 `[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
`                         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                                 `[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
`                         `[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PossessivePluralProd`**  
`         `[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
`         `[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `BasicPossessiveProd` :  
` `[`npKeeper`](../object/BasicPossessiveProd.html#npKeeper)`  `

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

` `[`resolveNouns`](#resolveNouns)`  `

Inherited from `BasicPossessiveProd` :  
` `[`construct`](../object/BasicPossessiveProd.html#construct)`  `[`resolvePossessive`](../object/BasicPossessiveProd.html#resolvePossessive)`  `[`selectWithPossessive`](../object/BasicPossessiveProd.html#selectWithPossessive)`  `

Inherited from `DefiniteNounProd` :  
` `[`reduceDefinite`](../object/DefiniteNounProd.html#reduceDefinite)`  `[`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

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

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3013](../source/parser.t.html#3013)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>