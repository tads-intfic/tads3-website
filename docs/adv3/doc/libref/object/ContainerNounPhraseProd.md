---
layout: docs
---
<span class="title">ContainerNounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3158](../source/parser.t.html#3158)\]

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



A noun phrase with explicit containment. Grammar rules based on this
class must set the property np\_ to the main noun phrase, and cont\_ to
the noun phrase giving the container.

We're based on the definite noun phrase production, because we need to
resolve the underlying container phrase to a singe, unambiguous object.

`class `**`ContainerNounPhraseProd`**` :   `[`DefiniteNounProd`](../object/DefiniteNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ContainerNounPhraseProd`**  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ContainerNounPhraseProd`**  
[`indetPluralNounPhrase(locational)`](../object/indetPluralNounPhrase(locational).html)  
[`indetPluralOnlyNounPhrase(locational)`](../object/indetPluralOnlyNounPhrase(locational).html)  
[`indetSingularNounPhrase(locational)`](../object/indetSingularNounPhrase(locational).html)  
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



[`resolveNouns`](#resolveNouns)

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



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3159](../source/parser.t.html#3159)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


