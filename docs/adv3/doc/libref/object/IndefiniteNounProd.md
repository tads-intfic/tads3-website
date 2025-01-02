<span class="title">IndefiniteNounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2427](../source/parser.t.html#2427)\]

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

Noun phrase with an indefinite article

`class `**`IndefiniteNounProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IndefiniteNounProd`**  
`         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`IndefiniteNounProd`**  
`         `[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)  
`                 `[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
`                 `[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
`         `[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`areAllEquiv`](#areAllEquiv)`  `[`resolveMainPhrase`](#resolveMainPhrase)`  `[`resolveNouns`](#resolveNouns)`  `[`selectFromList`](#selectFromList)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="areAllEquiv"></span>

`areAllEquiv (lst)`

[parser.t](../file/parser.t.html)\[[2499](../source/parser.t.html#2499)\]

<div class="desc">

are all of the items in the resolve list equivalents?

</div>

<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2432](../source/parser.t.html#2432)\]

<div class="desc">

resolve the main phrase - this is separately overridable to allow
subclassing

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2438](../source/parser.t.html#2438)\]

<div class="desc">

by default, resolve the main noun phrase

</div>

<span id="selectFromList"></span>

`selectFromList (resolver, results, lst)`

[parser.t](../file/parser.t.html)\[[2525](../source/parser.t.html#2525)\]

<div class="desc">

Select an item from the list of potential matches, given the list sorted
from most likely to least likely (according to the resolver's ambiguous
match filter). We'll ask the resolver to make the selection, because
indefinite noun phrases can mean different things in different contexts.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
