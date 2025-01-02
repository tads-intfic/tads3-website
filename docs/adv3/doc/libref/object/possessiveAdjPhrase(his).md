<span class="title">possessiveAdjPhrase(his)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[6728](../source/en_us.t.html#6728)\]

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

*no description available*

`grammar `<span class="gramalt">[`possessiveAdjPhrase`](../object/possessiveAdjPhrase.html)`(his)`</span>` :   `[`HisAdjProd`](../object/HisAdjProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`possessiveAdjPhrase(his)`**  
`         `[`HisAdjProd`](../object/HisAdjProd.html)  
`                 `[`PossessivePronounAdjProd`](../object/PossessivePronounAdjProd.html)  
`                         `[`PronounProd`](../object/PronounProd.html)  
`                                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                                         `[`BasicProd`](../object/BasicProd.html)  
`                                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `HisAdjProd` :  
` `[`pronounType`](../object/HisAdjProd.html#pronounType)`  `

Inherited from `PossessivePronounAdjProd` :  
` `[`canBeAnaphor`](../object/PossessivePronounAdjProd.html#canBeAnaphor)`  `[`isPossessive`](../object/PossessivePronounAdjProd.html#isPossessive)`  `

Inherited from `PronounProd` :  
` `[`isPlural`](../object/PronounProd.html#isPlural)`  `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkAnaphorAgreement`](#checkAnaphorAgreement)`  `

` `

Inherited from `PossessivePronounAdjProd` :  
` `[`checkAnaphoricBinding`](../object/PossessivePronounAdjProd.html#checkAnaphoricBinding)`  `[`getOrigMainText`](../object/PossessivePronounAdjProd.html#getOrigMainText)`  `

Inherited from `PronounProd` :  
` `[`resolveNouns`](../object/PronounProd.html#resolveNouns)`  `

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

<span id="checkAnaphorAgreement"></span>

`checkAnaphorAgreement (lst)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[6730](../source/en_us.t.html#6730)\]

<div class="desc">

we only agree with a singular masculine noun

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>