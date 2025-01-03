---
layout: docs
---
<span class="title">ButProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1667](../source/parser.t.html#1667)\]

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



Basic "but" rule, which selects a list of plurals minus a list of
specifically excepted objects. This can be used to construct more
specific production classes for things like "everything but the book"
and "all books except the red ones".

In each grammar rule based on this class, the 'except\_' property must
be set to a suitable noun phrase for the exception list. We'll resolve
this list and remove the objects in it from our main list.

`class `**`ButProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ButProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ButProd`**  
[`EverythingButProd`](../object/EverythingButProd.html)  
[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)  
[`IndefiniteNounButProd`](../object/IndefiniteNounButProd.html)  
[`terminalNounPhrase(anyBut)`](../object/terminalNounPhrase(anyBut).html)  
[`ListButProd`](../object/ListButProd.html)  
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



[`filterFinalList`](#filterFinalList) [`flagAllExcepted`](#flagAllExcepted) [`getMainList`](#getMainList) [`resolveNouns`](#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="addedFlags"></span>

`addedFlags`

[parser.t](../file/parser.t.html)\[[1776](../source/parser.t.html#1776)\]



by default, add no extra flags to our resolved object list



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterFinalList"></span>

`filterFinalList (lst)`

[parser.t](../file/parser.t.html)\[[1773](../source/parser.t.html#1773)\]



filter the final list - by default we just return the same list



<span id="flagAllExcepted"></span>

`flagAllExcepted (resolver, results)`

[parser.t](../file/parser.t.html)\[[1770](../source/parser.t.html#1770)\]



flag an error - everything has been excluded by the 'but' list



<span id="getMainList"></span>

`getMainList (resolver, results)`

[parser.t](../file/parser.t.html)\[[1767](../source/parser.t.html#1767)\]



get my main list, which is the list of items to include



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1668](../source/parser.t.html#1668)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


