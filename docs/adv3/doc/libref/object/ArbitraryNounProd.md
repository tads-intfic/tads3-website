---
layout: docs
---
<span class="title">ArbitraryNounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2539](../source/parser.t.html#2539)\]

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

Noun phrase explicitly asking us to choose an object arbitrarily (with a
word like "any"). This is similar to the indefinite noun phrase, but
differs in that this phrase is \*explicitly\* arbitrary, rather than
merely indefinite.

`class `**`ArbitraryNounProd`**` :   `[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ArbitraryNounProd`**  
[`IndefiniteNounProd`](../object/IndefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ArbitraryNounProd`**  
[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`selectFromList`](#selectFromList)

Inherited from `IndefiniteNounProd` :  
[`areAllEquiv`](../object/IndefiniteNounProd.html#areAllEquiv)[`resolveMainPhrase`](../object/IndefiniteNounProd.html#resolveMainPhrase)[`resolveNouns`](../object/IndefiniteNounProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="selectFromList"></span>

`selectFromList (resolver, results, lst)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2546](../source/parser.t.html#2546)\]

<div class="desc">

Select an object from a list of potential matches. Since the choice is
explicitly arbitrary, we simply choose the first (they're in order from
most likely to least likely, so this will choose the most likely).

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
