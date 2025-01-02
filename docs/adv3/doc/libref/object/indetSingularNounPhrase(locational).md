---
layout: docs
---
<span class="title">indetSingularNounPhrase(locational)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5839](../source/en_us.t.html#5839)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



An indetermine noun phrase can specify a location for the object(s). The
location must be a singular noun phrase, but can itself be a fully
qualified noun phrase (so it can have possessives, articles, and
locational qualifiers of its own).

Note that we take 'that are' even though the noun phrase is singular,
because what we consider a singular noun phrase can have plural usage
("scissors", for example).

`grammar `<span class="gramalt">[`indetSingularNounPhrase`](../object/indetSingularNounPhrase.html)`(locational)`</span>` :   `[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`indetSingularNounPhrase(locational)`**  
[`ContainerNounPhraseProd`](../object/ContainerNounPhraseProd.html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `ContainerNounPhraseProd` :  
[`resolveNouns`](../object/ContainerNounPhraseProd.html#resolveNouns)

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



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


