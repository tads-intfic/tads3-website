<span class="title">nounList(empty)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5272](../source/en_us.t.html#5272)\]

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

An empty noun list is one with no words at all. This is matched when a
command requires a noun list but the player doesn't include one; this
construct has "badness" because we only want to match it when we have no
choice.

`grammar `<span class="gramalt">[`nounList`](../object/nounList.html)`(empty)`</span>` :   `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`nounList(empty)`**  
`         `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`responseProd`](#responseProd)`  `

Inherited from `EmptyNounPhraseProd` :  
` `[`asker_`](../object/EmptyNounPhraseProd.html#asker_)`  `[`fallbackResponseProd`](../object/EmptyNounPhraseProd.html#fallbackResponseProd)`  `[`newMatch`](../object/EmptyNounPhraseProd.html#newMatch)`  `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `EmptyNounPhraseProd` :  
` `[`getImpliedObject`](../object/EmptyNounPhraseProd.html#getImpliedObject)`  `[`getOrigText`](../object/EmptyNounPhraseProd.html#getOrigText)`  `[`getOrigTokenList`](../object/EmptyNounPhraseProd.html#getOrigTokenList)`  `[`isEmptyPhrase`](../object/EmptyNounPhraseProd.html#isEmptyPhrase)`  `[`resolveNouns`](../object/EmptyNounPhraseProd.html#resolveNouns)`  `[`setPrompt`](../object/EmptyNounPhraseProd.html#setPrompt)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="responseProd"></span>

`responseProd`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5273](../source/en_us.t.html#5273)\]

<div class="desc">

*no description available*

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
