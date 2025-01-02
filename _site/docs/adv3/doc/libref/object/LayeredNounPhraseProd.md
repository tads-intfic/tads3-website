<span class="title">LayeredNounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1293](../source/parser.t.html#1293)\]

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

Basic "layered" noun phrase production. It's often useful to define a
grammar rule that simply defers to an underlying grammar rule; we make
this simpler by defining this class that automatically delegates
resolveNouns to the underlying noun phrase given by the property np\_.

`class `**`LayeredNounPhraseProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LayeredNounPhraseProd`**  
`         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LayeredNounPhraseProd`**  
`         `[`completeNounPhrase(main)`](../object/completeNounPhrase(main).html)  
`         `[`completeNounPhraseWithoutAll(qualified)`](../object/completeNounPhraseWithoutAll(qualified).html)  
`         `[`detPluralNounPhrase(main)`](../object/detPluralNounPhrase(main).html)  
`         `[`detPluralOnlyNounPhrase(main)`](../object/detPluralOnlyNounPhrase(main).html)  
`         `[`indetPluralNounPhrase(basic)`](../object/indetPluralNounPhrase(basic).html)  
`         `[`indetPluralOnlyNounPhrase(basic)`](../object/indetPluralOnlyNounPhrase(basic).html)  
`         `[`indetSingularNounPhrase(basic)`](../object/indetSingularNounPhrase(basic).html)  
`         `[`nounPhrase(main)`](../object/nounPhrase(main).html)  
`         `[`pluralPhrase(main)`](../object/pluralPhrase(main).html)  
`         `[`possessiveAdjPhrase(npApostropheS)`](../object/possessiveAdjPhrase(npApostropheS).html)  
`         `[`possessiveAdjPhrase(ppApostropheS)`](../object/possessiveAdjPhrase(ppApostropheS).html)  
`         `[`possessiveNounPhrase(npApostropheS)`](../object/possessiveNounPhrase(npApostropheS).html)  
`         `[`qualifiedNounPhrase(main)`](../object/qualifiedNounPhrase(main).html)  
`         `[`qualifiedPluralNounPhrase(determiner)`](../object/qualifiedPluralNounPhrase(determiner).html)  
`         `[`singleNoun(normal)`](../object/singleNoun(normal).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`resolveNouns`](#resolveNouns)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1294](../source/parser.t.html#1294)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>