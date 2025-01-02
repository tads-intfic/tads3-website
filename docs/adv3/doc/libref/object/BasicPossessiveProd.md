---
layout: docs
---
<span class="title">BasicPossessiveProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2770](../source/parser.t.html#2770)\]

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



Basic possessive phrase. The grammar rules for these phrases must map
the possessive qualifier phrase to poss\_, and the noun phrase being
qualified to np\_. We are based on DefiniteNounProd because we resolve
the possessive qualifier as though it had a definite article.

The possessive production object poss\_ must define the method
getOrigMainText() to return the text of its noun phrase in a format
suitable for disambiguation prompts or error messages. In English, for
example, this means that the getOrigMainText() must omit the
apostrophe-S suffix if present.

`class `**`BasicPossessiveProd`**` :   `[`DefiniteNounProd`](../object/DefiniteNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicPossessiveProd`**  
[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`BasicPossessiveProd`**  
[`ButPossessiveProd`](../object/ButPossessiveProd.html)  
[`exceptNounPhrase(singlePossessive)`](../object/exceptNounPhrase(singlePossessive).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`PossessiveNounProd`](../object/PossessiveNounProd.html)  
[`qualifiedSingularNounPhrase(possessive)`](../object/qualifiedSingularNounPhrase(possessive).html)  
[`PossessivePluralProd`](../object/PossessivePluralProd.html)  
[`explicitDetPluralNounPhrase(possessive)`](../object/explicitDetPluralNounPhrase(possessive).html)  
[`explicitDetPluralOnlyNounPhrase(possessive)`](../object/explicitDetPluralOnlyNounPhrase(possessive).html)  
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



[`construct`](#construct)[`resolvePossessive`](#resolvePossessive)[`selectWithPossessive`](#selectWithPossessive)

Inherited from `DefiniteNounProd` :  
[`reduceDefinite`](../object/DefiniteNounProd.html#reduceDefinite)[`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)[`resolveNouns`](../object/DefiniteNounProd.html#resolveNouns)

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

[parser.t](../file/parser.t.html)\[[2979](../source/parser.t.html#2979)\]



our ambiguous response keeper



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`

[parser.t](../file/parser.t.html)\[[2779](../source/parser.t.html#2779)\]



To allow this class to be mixed with other classes that have mixed-in
ambiguous response keepers, create a separate object to hold our
ambiguous response keeper for the possessive phrase. We will never use
our own ambiguous response keeper properties, so those are available to
any other production class we're mixed into.



<span id="resolvePossessive"></span>

`resolvePossessive (resolver, results, num)`

[parser.t](../file/parser.t.html)\[[2795](../source/parser.t.html#2795)\]



Resolve the possessive, and perform preliminary resolution of the
qualified noun phrase. We find the owner object and reduce the resolved
objects for the qualified phrase to those owned by the owner.

If we fail, we return nil. Otherwise, we return a list of the
tentatively resolved objects. The caller can further resolve this list
as needed.



<span id="selectWithPossessive"></span>

`selectWithPossessive (resolver, results, lst, lstOrigText, num)`

[parser.t](../file/parser.t.html)\[[2830](../source/parser.t.html#2830)\]



Resolve the possessive, and reduce the given match list by selecting
only those items owned by the resolution of the possessive phrase.

'num' is the number of objects we want to select. If the noun phrase
being qualified is singular, this will be 1; if it's plural, this will
be nil, to indicate that there's no specific target quantity; if the
phrase is something like "bob's five books," the the number will be the
qualifying quantity (5, in this case).





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


