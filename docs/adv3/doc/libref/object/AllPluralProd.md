---
---
<span class="title">AllPluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2173](../source/parser.t.html#2173)\]

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

A plural phrase that explicitly selects all of matching objects. For
English, this would be a phrase like "all of the marbles". This type of
phrase matches all of the objects that match the name in the plural,
except that if we have a collective object and we also have objects that
are part of the collective (such as a bag of marbles and some individual
marbles), we'll omit the collective, and match only the individual
items.

Grammar rule instantiations in language modules should set property np\_
to the plural phrase match tree.

`class `**`AllPluralProd`**` :   `[`PluralProd`](../object/PluralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AllPluralProd`**  
`         `[`PluralProd`](../object/PluralProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`AllPluralProd`**  
`         `[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
`         `[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`filterForCollectives`](#filterForCollectives)`  `

` `

` `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getVerifyKeepers`](#getVerifyKeepers)`  `[`resolveNouns`](#resolveNouns)`  `

Inherited from `PluralProd` :  
` `[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="filterForCollectives"></span>

`filterForCollectives`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2187](../source/parser.t.html#2187)\]

<div class="desc">

prefer to keep individuals over collectives

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2184](../source/parser.t.html#2184)\]

<div class="desc">

since the player explicitly told us to use ALL of the matching objects,
keep everything in the verify list, logical or not

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2174](../source/parser.t.html#2174)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
