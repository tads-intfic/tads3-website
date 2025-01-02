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

<div class="fdesc">

A pre-resolved \*ambiguous\* noun phrase. This is used when the game or
library wants to suggest a specific set of objects for a new action,
then ask which one to use.

`class `**`PreResolvedAmbigProd`**` :   `[`DefiniteNounProd`](../object/DefiniteNounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PreResolvedAmbigProd`**  
`         `[`DefiniteNounProd`](../object/DefiniteNounProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
`                 `[`AmbigResponseKeeper`](../object/AmbigResponseKeeper.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`asker_`](#asker_)`  `[`objs_`](#objs_)`  `[`phrase_`](#phrase_)`  `

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

Inherited from `AmbigResponseKeeper` :  
` `[`ambigResponses_`](../object/AmbigResponseKeeper.html#ambigResponses_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`resolveNouns`](#resolveNouns)`  `

Inherited from `DefiniteNounProd` :  
` `[`reduceDefinite`](../object/DefiniteNounProd.html#reduceDefinite)`  `[`resolveDefinite`](../object/DefiniteNounProd.html#resolveDefinite)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

Inherited from `AmbigResponseKeeper` :  
` `[`addAmbigResponse`](../object/AmbigResponseKeeper.html#addAmbigResponse)`  `[`getAmbigResponses`](../object/AmbigResponseKeeper.html#getAmbigResponses)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="asker_"></span>

`asker_`

[parser.t](../file/parser.t.html)\[[1921](../source/parser.t.html#1921)\]

<div class="desc">

the ResolveAsker to use when prompting for the selection

</div>

<span id="objs_"></span>

`objs_`

[parser.t](../file/parser.t.html)\[[1915](../source/parser.t.html#1915)\]

<div class="desc">

my pre-resolved list of ambiguous objects

</div>

<span id="phrase_"></span>

`phrase_`

[parser.t](../file/parser.t.html)\[[1918](../source/parser.t.html#1918)\]

<div class="desc">

the noun phrase to use in disambiguation questions

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (objs, asker, phrase)`

[parser.t](../file/parser.t.html)\[[1895](../source/parser.t.html#1895)\]

<div class="desc">

*no description available*

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1907](../source/parser.t.html#1907)\]

<div class="desc">

remember the noun phrase to use in disambiguation questions

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
