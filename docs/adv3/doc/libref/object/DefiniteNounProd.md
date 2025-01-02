---
layout: docs
---
<span class="title">DefiniteNounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1996](../source/parser.t.html#1996)\]

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



Base class for noun phrase productions with definite articles.

`class `**`DefiniteNounProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html) [`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefiniteNounProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DefiniteNounProd`**  
[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
[`ButPossessiveProd`](../object/ButPossessiveProd.html)  
[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`PossessiveNounProd`](../object/PossessiveNounProd.html)  
[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
[`PossessivePluralProd`](../object/PossessivePluralProd.html)  
[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)  
[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
[`PreResolvedAmbigProd`](../object/PreResolvedAmbigProd.html)  
[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)  
[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)  
[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)  
[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)  
[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`reduceDefinite`](#reduceDefinite) [`resolveDefinite`](#resolveDefinite) [`resolveNouns`](#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `AmbigResponseKeeper` :  
[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse) [`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="reduceDefinite"></span>

`reduceDefinite (lst, resolver, results)`

[parser.t](../file/parser.t.html)\[[2086](../source/parser.t.html#2086)\]



Do any additional subclass-specific filtering to further reduce the list
before we decide whether or not we have sufficient specificity. We call
this just before deciding whether or not to prompt for more information
("which book do you mean...?"). By default, this simply returns the same
list unchanged; subclasses that have some further way of narrowing down
the options can use this opportunity to apply that extra narrowing.



<span id="resolveDefinite"></span>

`resolveDefinite (asker, origText, lst, responseKeeper, resolver, results)`

[parser.t](../file/parser.t.html)\[[2008](../source/parser.t.html#2008)\]



Resolve an underlying phrase using definite noun phrase rules.



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1997](../source/parser.t.html#1997)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


