---
layout: docs
---
<span class="title">PreResolvedAmbigProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1894](../source/parser.t.html#1894)\]

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



A pre-resolved \*ambiguous\* noun phrase. This is used when the game or
library wants to suggest a specific set of objects for a new action,
then ask which one to use.

`class `**`PreResolvedAmbigProd`**` :   `[`DefiniteNounProd`](../object/DefiniteNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PreResolvedAmbigProd`**  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`asker_`](#asker_) [`objs_`](#objs_) [`phrase_`](#phrase_)



Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

Inherited from `AmbigResponseKeeper` :  
[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`resolveNouns`](#resolveNouns)

Inherited from `DefiniteNounProd` :  
[`reduceDefinite`](../object/DefiniteNounProd.html#reduceDefinite) [`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

Inherited from `AmbigResponseKeeper` :  
[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse) [`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="asker_"></span>

`asker_`

[parser.t](../file/parser.t.html)\[[1921](../source/parser.t.html#1921)\]



the ResolveAsker to use when prompting for the selection



<span id="objs_"></span>

`objs_`

[parser.t](../file/parser.t.html)\[[1915](../source/parser.t.html#1915)\]



my pre-resolved list of ambiguous objects



<span id="phrase_"></span>

`phrase_`

[parser.t](../file/parser.t.html)\[[1918](../source/parser.t.html#1918)\]



the noun phrase to use in disambiguation questions



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (objs, asker, phrase)`

[parser.t](../file/parser.t.html)\[[1895](../source/parser.t.html#1895)\]



*no description available*



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1907](../source/parser.t.html#1907)\]



remember the noun phrase to use in disambiguation questions





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


