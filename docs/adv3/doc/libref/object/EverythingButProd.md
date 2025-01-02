---
layout: docs
---
<span class="title">EverythingButProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1786](../source/parser.t.html#1786)\]

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



Base class for "all but" rules, which select everything available except
for objects in a specified list of exceptions; for example, in English,
"take everything but the book".

`class `**`EverythingButProd`**` :   `[`ButProd`](../object/ButProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EverythingButProd`**  
[`ButProd`](../object/ButProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`EverythingButProd`**  
[`terminalNounPhrase(allBut)`](../object/terminalNounPhrase(allBut).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`addedFlags`](#addedFlags) [`filterForCollectives`](#filterForCollectives)





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

[parser.t](../file/parser.t.html)\[[1813](../source/parser.t.html#1813)\]



set the "always announce" flag for each item - the player didn't name
the selected items specifically, so always show what we chose



<span id="filterForCollectives"></span>

`filterForCollectives`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1816](../source/parser.t.html#1816)\]



match Collective objects instead of their individuals



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="flagAllExcepted"></span>

`flagAllExcepted (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1803](../source/parser.t.html#1803)\]



flag an error - our main list has been completely excluded



<span id="getMainList"></span>

`getMainList (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1788](../source/parser.t.html#1788)\]



our main list is given by the "all" list





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


