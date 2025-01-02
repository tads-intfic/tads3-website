<span class="title">ImpliedActorNounPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4168](../source/parser.t.html#4168)\]

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

An empty noun phrase production for verb phrasings that imply an actor,
but don't actually include one by name.

This is similar to EmptyNounPhraseProd, but has an important difference:
if the actor carrying out the command has a current or implied
conversation partner, then we choose the conversation partner as the
implied object. This is important in that we don't count the noun phrase
as technically missing in this case, for the purposes of command
ranking. This is useful for phrasings that inherently imply an actor
strongly enough that there should be no match-strength penalty for
leaving it out.

`class `**`ImpliedActorNounPhraseProd`**` :   `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ImpliedActorNounPhraseProd`**  
`         `[`EmptyNounPhraseProd`](../object/EmptyNounPhraseProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
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

` `

Inherited from `EmptyNounPhraseProd` :  
` `[`asker_`](../object/EmptyNounPhraseProd.html#asker_)`  `[`fallbackResponseProd`](../object/EmptyNounPhraseProd.html#fallbackResponseProd)`  `[`newMatch`](../object/EmptyNounPhraseProd.html#newMatch)`  `[`responseProd`](../object/EmptyNounPhraseProd.html#responseProd)`  `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getImpliedObject`](#getImpliedObject)`  `

Inherited from `EmptyNounPhraseProd` :  
` `[`getOrigText`](../object/EmptyNounPhraseProd.html#getOrigText)`  `[`getOrigTokenList`](../object/EmptyNounPhraseProd.html#getOrigTokenList)`  `[`isEmptyPhrase`](../object/EmptyNounPhraseProd.html#isEmptyPhrase)`  `[`resolveNouns`](../object/EmptyNounPhraseProd.html#resolveNouns)`  `[`setPrompt`](../object/EmptyNounPhraseProd.html#setPrompt)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getImpliedObject"></span>

`getImpliedObject (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4170](../source/parser.t.html#4170)\]

<div class="desc">

get my implied object

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
