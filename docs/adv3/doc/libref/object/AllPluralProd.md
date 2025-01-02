---
layout: docs
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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AllPluralProd`**  
[`PluralProd`](../object/PluralProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`AllPluralProd`**  
[`explicitDetPluralOnlyNounPhrase(definite)`](../object/explicitDetPluralOnlyNounPhrase(definite).html)  
[`qualifiedPluralNounPhrase(all)`](../object/qualifiedPluralNounPhrase(all).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`filterForCollectives`](#filterForCollectives)





Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getVerifyKeepers`](#getVerifyKeepers) [`resolveNouns`](#resolveNouns)

Inherited from `PluralProd` :  
[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="filterForCollectives"></span>

`filterForCollectives`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2187](../source/parser.t.html#2187)\]



prefer to keep individuals over collectives



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getVerifyKeepers"></span>

`getVerifyKeepers (results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2184](../source/parser.t.html#2184)\]



since the player explicitly told us to use ALL of the matching objects,
keep everything in the verify list, logical or not



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2174](../source/parser.t.html#2174)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


