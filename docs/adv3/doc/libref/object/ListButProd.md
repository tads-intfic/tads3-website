---
layout: docs
---
<span class="title">ListButProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1828](../source/parser.t.html#1828)\]

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



Base class for "list but" rules, which select everything in an
explicitly provided list minus a set of exceptions; for example, in
English, "take all of the books except the red ones".

Subclasses defining grammar rules must set the 'np\_' property to the
main noun list; we'll resolve this list to find the objects to be
included before exclusions are applied.

`class `**`ListButProd`**` :   `[`ButProd`](../object/ButProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ListButProd`**  
[`ButProd`](../object/ButProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ListButProd`**  
[`terminalNounPhrase(pluralExcept)`](../object/terminalNounPhrase(pluralExcept).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`addedFlags`](#addedFlags)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`flagAllExcepted`](#flagAllExcepted) [`getMainList`](#getMainList)

Inherited from `ButProd` :  
[`filterFinalList`](../object/ButProd.html#filterFinalList) [`resolveNouns`](../object/ButProd.html#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="addedFlags"></span>

`addedFlags`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1845](../source/parser.t.html#1845)\]



set the "unclear disambig" flag in our results, so we provide an
indication of which object we chose



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="flagAllExcepted"></span>

`flagAllExcepted (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1836](../source/parser.t.html#1836)\]



flag an error - everything has been excluded



<span id="getMainList"></span>

`getMainList (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1830](../source/parser.t.html#1830)\]



our main list is given by the 'np\_' subproduction
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


