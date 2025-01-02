---
layout: docs
---
<span class="title">IndefiniteNounButProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2557](../source/parser.t.html#2557)\]

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

Noun phrase with an indefinite article and an exclusion ("any of the
books except the red one")

`class `**`IndefiniteNounButProd`**` :   `[`ButProd`](../object/ButProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IndefiniteNounButProd`**  
`         `[`ButProd`](../object/ButProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`IndefiniteNounButProd`**  
`         `[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`addedFlags`](#addedFlags)`  `

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterFinalList`](#filterFinalList)`  `[`flagAllExcepted`](#flagAllExcepted)`  `[`getMainList`](#getMainList)`  `[`resolveMainPhrase`](#resolveMainPhrase)`  `

Inherited from `ButProd` :  
` `[`resolveNouns`](../object/ButProd.html#resolveNouns)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="addedFlags"></span>

`addedFlags`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2604](../source/parser.t.html#2604)\]

<div class="desc">

set the "unclear disambig" flag in our results, so we provide an
indication of which object we chose

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterFinalList"></span>

`filterFinalList (lst)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2594](../source/parser.t.html#2594)\]

<div class="desc">

filter the final list

</div>

<span id="flagAllExcepted"></span>

`flagAllExcepted (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2588](../source/parser.t.html#2588)\]

<div class="desc">

flag an error - everything has been excluded

</div>

<span id="getMainList"></span>

`getMainList (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2569](../source/parser.t.html#2569)\]

<div class="desc">

get our main list

</div>

<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2559](../source/parser.t.html#2559)\]

<div class="desc">

resolve our main phrase

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
