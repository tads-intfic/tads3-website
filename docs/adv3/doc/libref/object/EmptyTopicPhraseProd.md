<span class="title">EmptyTopicPhraseProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4275](../source/parser.t.html#4275)\]

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

Empty topic phrase production. This is the topic equivalent of
EmptyNounPhraseProd.

`class `**`EmptyTopicPhraseProd`**` :   `[`TopicProd`](../object/TopicProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`EmptyTopicPhraseProd`**  
`         `[`TopicProd`](../object/TopicProd.html)  
`                 `[`SingleNounProd`](../object/SingleNounProd.html)  
`                         `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                                 `[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
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

` `[`asker_`](#asker_)`  `[`newMatch`](#newMatch)`  `[`responseProd`](#responseProd)`  `

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

` `[`getOrigText`](#getOrigText)`  `[`getOrigTokenList`](#getOrigTokenList)`  `[`isEmptyPhrase`](#isEmptyPhrase)`  `[`resolveNouns`](#resolveNouns)`  `

` `

` `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="asker_"></span>

`asker_`

[parser.t](../file/parser.t.html)\[[4326](../source/parser.t.html#4326)\]

<div class="desc">

our ResolveAsker object - this is for customizing the prompt

</div>

<span id="newMatch"></span>

`newMatch`

[parser.t](../file/parser.t.html)\[[4317](../source/parser.t.html#4317)\]

<div class="desc">

our new underlying topic phrase

</div>

<span id="responseProd"></span>

`responseProd`

[parser.t](../file/parser.t.html)\[[4323](../source/parser.t.html#4323)\]

<div class="desc">

by default, parse our interactive response as an ordinary topic phrase

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getOrigText"></span>

`getOrigText ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4311](../source/parser.t.html#4311)\]

<div class="desc">

get my original text - use the new match tree if we have one

</div>

<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4305](../source/parser.t.html#4305)\]

<div class="desc">

get my tokens - use the underlying new match tree if we have one

</div>

<span id="isEmptyPhrase"></span>

`isEmptyPhrase ( )`

[parser.t](../file/parser.t.html)\[[4302](../source/parser.t.html#4302)\]

<div class="desc">

we're an empty phrase if we don't have a new topic yet

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4276](../source/parser.t.html#4276)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
