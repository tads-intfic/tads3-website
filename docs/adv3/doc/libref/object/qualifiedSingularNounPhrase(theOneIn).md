---
layout: docs
---
<span class="title">qualifiedSingularNounPhrase(theOneIn)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5781](../source/en_us.t.html#5781)\]

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

<div class="fdesc">

A singular object specified only by its containment, with a definite
article.

`grammar `<span class="gramalt">[`qualifiedSingularNounPhrase`](../object/qualifiedSingularNounPhrase.html)`(theOneIn)`</span>` :   `[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`qualifiedSingularNounPhrase(theOneIn)`**  
[`VagueContainerDefiniteNounPhraseProd`](../object/VagueContainerDefiniteNounPhraseProd.html)  
[`VagueContainerNounPhraseProd`](../object/VagueContainerNounPhraseProd.html)  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`mainPhraseText`](#mainPhraseText)

Inherited from `VagueContainerDefiniteNounPhraseProd` :  
[`npKeeper`](../object/VagueContainerDefiniteNounPhraseProd.html#npKeeper)





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `VagueContainerDefiniteNounPhraseProd` :  
[`checkContentsList`](../object/VagueContainerDefiniteNounPhraseProd.html#checkContentsList)[`construct`](../object/VagueContainerDefiniteNounPhraseProd.html#construct)

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

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="mainPhraseText"></span>

`mainPhraseText`

[en_us.t](../file/en_us.t.html)\[[5791](../source/en_us.t.html#5791)\]

<div class="desc">

our main phrase is simply 'one' (so disambiguation prompts will read
"which one do you mean...")

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
