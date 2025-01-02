---
layout: docs
---
<span class="title">nounPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6059](../source/en_us.t.html#6059)\]

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

Noun Phrase. This is the basic noun phrase, which serves as a building
block for complete noun phrases. This type of noun phrase can be
qualified with articles, quantifiers, and possessives, and can be used
to construct possessives via the addition of "'s" at the end of the
phrase.

In most cases, custom noun phrase rules should be added to this
production, as long as qualification (with numbers, articles, and
possessives) is allowed. For a custom noun phrase rule that cannot be
qualified, a completeNounPhrase rule should be added instead.

`grammar `<span class="gramalt">[`nounPhrase`](../object/nounPhrase.html)`(main)`</span>` :   `[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`nounPhrase(main)`**  
`         `[`LayeredNounPhraseProd`](../object/LayeredNounPhraseProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `LayeredNounPhraseProd` :  
` `[`resolveNouns`](../object/LayeredNounPhraseProd.html#resolveNouns)`  `

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

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
