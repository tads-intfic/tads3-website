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



Noun phrase with an indefinite article and an exclusion ("any of the
books except the red one")

`class `**`IndefiniteNounButProd`**` :   `[`ButProd`](../object/ButProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`IndefiniteNounButProd`**  
[`ButProd`](../object/ButProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`IndefiniteNounButProd`**  
[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`addedFlags`](#addedFlags)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterFinalList`](#filterFinalList)[`flagAllExcepted`](#flagAllExcepted)[`getMainList`](#getMainList)[`resolveMainPhrase`](#resolveMainPhrase)

Inherited from `ButProd` :  
[`resolveNouns`](../object/ButProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="addedFlags"></span>

`addedFlags`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2604](../source/parser.t.html#2604)\]



set the "unclear disambig" flag in our results, so we provide an
indication of which object we chose



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterFinalList"></span>

`filterFinalList (lst)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2594](../source/parser.t.html#2594)\]



filter the final list



<span id="flagAllExcepted"></span>

`flagAllExcepted (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2588](../source/parser.t.html#2588)\]



flag an error - everything has been excluded



<span id="getMainList"></span>

`getMainList (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2569](../source/parser.t.html#2569)\]



get our main list



<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2559](../source/parser.t.html#2559)\]



resolve our main phrase





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


