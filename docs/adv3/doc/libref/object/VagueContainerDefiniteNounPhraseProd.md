---
layout: docs
---
<span class="title">VagueContainerDefiniteNounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3456](../source/parser.t.html#3456)\]

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



A definite vague container phrase. This selects a single object in a
given container ("the one in the box"). If more than one object is
present, we'll try to disambiguate it.

Grammar rules instantiating this class must set the property
'mainPhraseText' to the text to display for a disambiguation prompt
involving the main phrase.

`class `**`VagueContainerDefiniteNounPhraseProd`**` :   `[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VagueContainerDefiniteNounPhraseProd`**  
[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`VagueContainerDefiniteNounPhraseProd`**  
[`qualifiedSingularNounPhrase(theOneIn)`](../object/qualifiedSingularNounPhrase(theOneIn).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`npKeeper`](#npKeeper)





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkContentsList`](#checkContentsList)[`construct`](#construct)

Inherited from `VagueContainerNounPhraseProd` :  
[`resolveNouns`](../object/VagueContainerNounPhraseProd.html#resolveNouns)

Inherited from `DefiniteNounProd` :  
[`reduceDefinite`](../object/DefiniteNounProd.html#reduceDefinite)[`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `AmbigResponseKeeper` :  
[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse)[`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="npKeeper"></span>

`npKeeper`

[parser.t](../file/parser.t.html)\[[3505](../source/parser.t.html#3505)\]



our disambiguation result keeper



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkContentsList"></span>

`checkContentsList (resolver, results, lst, cont)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3464](../source/parser.t.html#3464)\]



check a contents list



<span id="construct"></span>

`construct ( )`

[parser.t](../file/parser.t.html)\[[3457](../source/parser.t.html#3457)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


