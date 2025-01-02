<span class="title">AmbigResponseKeeper</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1974](../source/parser.t.html#1974)\]

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

Mix-in class for noun phrase productions that use
ResolveResults.ambiguousNounPhrase(). This mix-in provides the methods
that ambiguousNounPhrase() uses to keep track of past responses to the
disambiguation question.

`class `**`AmbigResponseKeeper`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AmbigResponseKeeper`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`AmbigResponseKeeper`**  
`         `[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
`                 `[`BasicPossessiveProd`](../object/BasicPossessiveProd.html)  
`                         `[`ButPossessiveProd`](../object/ButPossessiveProd.html)  
`                                 `[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
`                         `[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
`                                 `[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
`                         `[`PossessiveNounProd`](../object/PossessiveNounProd.html)  
`                                 `[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
`                         `[`PossessivePluralProd`](../object/PossessivePluralProd.html)  
`                                 `[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
`                                 `[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
`                 `[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)  
`                         `[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
`                         `[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
`                         `[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
`                 `[`PreResolvedAmbigProd`](../object/PreResolvedAmbigProd.html)  
`                 `[`qualifiedSingularNounPhrase(definite)`](../object/qualifiedSingularNounPhrase(definite).html)  
`                 `[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
`                         `[`AllInContainerNounPhraseProd`](../object/AllInContainerNounPhraseProd.html)  
`                                 `[`qualifiedPluralNounPhrase(theOnesIn)`](../object/qualifiedPluralNounPhrase(theOnesIn).html)  
`                         `[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)  
`                                 `[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
`                         `[`VagueContainerIndefiniteNounPhraseProd`](../object/VagueContainerIndefiniteNounPhraseProd.html)  
`                                 `[`qualifiedSingularNounPhrase(anyOneIn)`](../object/qualifiedSingularNounPhrase(anyOneIn).html)  
`         `[`ExactQuantifiedPluralProd`](../object/ExactQuantifiedPluralProd.html)  
`                 `[`BothPluralProd`](../object/BothPluralProd.html)  
`                         `[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
`                 `[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
`                 `[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
`                 `[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`ambigResponses_`](#ambigResponses_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addAmbigResponse`](#addAmbigResponse)`  `[`getAmbigResponses`](#getAmbigResponses)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="ambigResponses_"></span>

`ambigResponses_`

[parser.t](../file/parser.t.html)\[[1988](../source/parser.t.html#1988)\]

<div class="desc">

our list of saved interactive disambiguation responses

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addAmbigResponse"></span>

`addAmbigResponse (resp)`

[parser.t](../file/parser.t.html)\[[1975](../source/parser.t.html#1975)\]

<div class="desc">

*no description available*

</div>

<span id="getAmbigResponses"></span>

`getAmbigResponses ( )`

[parser.t](../file/parser.t.html)\[[1981](../source/parser.t.html#1981)\]

<div class="desc">

add an ambiguous response to our list

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>