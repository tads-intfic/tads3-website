---
layout: docs
---
<span class="title">IndefiniteNounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2427](../source/parser.t.html#2427)\]

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



Noun phrase with an indefinite article

`class `**`IndefiniteNounProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`IndefiniteNounProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`IndefiniteNounProd`**  
[`ArbitraryNounProd`](../object/ArbitraryNounProd.html)  
[`qualifiedSingularNounPhrase(anyPlural)`](../object/qualifiedSingularNounPhrase(anyPlural).html)  
[`qualifiedSingularNounPhrase(arbitrary)`](../object/qualifiedSingularNounPhrase(arbitrary).html)  
[`qualifiedSingularNounPhrase(indefinite)`](../object/qualifiedSingularNounPhrase(indefinite).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`areAllEquiv`](#areAllEquiv)[`resolveMainPhrase`](#resolveMainPhrase)[`resolveNouns`](#resolveNouns)[`selectFromList`](#selectFromList)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="areAllEquiv"></span>

`areAllEquiv (lst)`

[parser.t](../file/parser.t.html)\[[2499](../source/parser.t.html#2499)\]



are all of the items in the resolve list equivalents?



<span id="resolveMainPhrase"></span>

`resolveMainPhrase (resolver, results)`

[parser.t](../file/parser.t.html)\[[2432](../source/parser.t.html#2432)\]



resolve the main phrase - this is separately overridable to allow
subclassing



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2438](../source/parser.t.html#2438)\]



by default, resolve the main noun phrase



<span id="selectFromList"></span>

`selectFromList (resolver, results, lst)`

[parser.t](../file/parser.t.html)\[[2525](../source/parser.t.html#2525)\]



Select an item from the list of potential matches, given the list sorted
from most likely to least likely (according to the resolver's ambiguous
match filter). We'll ask the resolver to make the selection, because
indefinite noun phrases can mean different things in different contexts.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


