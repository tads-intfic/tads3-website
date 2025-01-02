---
layout: docs
---
<span class="title">DisambigPossessiveProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3079](../source/parser.t.html#3079)\]

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



Possessive phrase production for disambiguation. This base class can be
used for grammar productions that match possessive phrases in
disambiguation prompt ("which book do you mean...?") responses.

`class `**`DisambigPossessiveProd`**` :   `[`BasicPossessiveProd`](../object/BasicPossessiveProd.html) [`DisambigProd`](../object/DisambigProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DisambigPossessiveProd`**  
[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                                 object`  
[`DisambigProd`](../object/DisambigProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DisambigPossessiveProd`**  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`qualifiedList_`](#qualifiedList_)

Inherited from `BasicPossessiveProd` :  
[`npKeeper`](../object/BasicPossessiveProd.html#npKeeper)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`reduceDefinite`](#reduceDefinite) [`resolveNouns`](#resolveNouns)

Inherited from `BasicPossessiveProd` :  
[`construct`](../object/BasicPossessiveProd.html#construct) [`resolvePossessive`](../object/BasicPossessiveProd.html#resolvePossessive) [`selectWithPossessive`](../object/BasicPossessiveProd.html#selectWithPossessive)

Inherited from `DefiniteNounProd` :  
[`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `AmbigResponseKeeper` :  
[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse) [`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)

Inherited from `DisambigProd` :  
[`removeAmbigFlags`](../object/DisambigProd.html#removeAmbigFlags)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="qualifiedList_"></span>

`qualifiedList_`

[parser.t](../file/parser.t.html)\[[3145](../source/parser.t.html#3145)\]



the list of objects being qualified - this is the list of books, for
example, in "bob's books"



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="reduceDefinite"></span>

`reduceDefinite (lst, resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3122](../source/parser.t.html#3122)\]



Do extra filter during disambiguation. Since we have a list of objects
we're trying to qualify, we can look at that list to see if some of the
possible matches for the qualifier phrase are owners of things in the
qualified list.



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3080](../source/parser.t.html#3080)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


