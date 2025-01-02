---
---
<span class="title">TopicProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1366](../source/parser.t.html#1366)\]

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

A topic is a noun phrase used in commands like "ask \<person\> about
\<topic\>." For our purposes, this works as an ordinary single noun
production.

`class `**`TopicProd`**` :   `[`SingleNounProd`](../object/SingleNounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicProd`**  
`         `[`SingleNounProd`](../object/SingleNounProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicProd`**  
`         `[`EmptyTopicPhraseProd`](../object/EmptyTopicPhraseProd.html)  
`         `[`PrepSingleTopicProd`](../object/PrepSingleTopicProd.html)  
`                 `[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)  
`         `[`topicPhrase(main)`](../object/topicPhrase(main).html)  
`         `[`topicPhrase(misc)`](../object/topicPhrase(misc).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

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

` `[`getOrigText`](#getOrigText)`  `[`getOrigTokenList`](#getOrigTokenList)`  `[`resolveNouns`](#resolveNouns)`  `

` `

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

<span id="getOrigText"></span>

`getOrigText ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1369](../source/parser.t.html#1369)\]

<div class="desc">

*no description available*

</div>

<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1368](../source/parser.t.html#1368)\]

<div class="desc">

get the original text and tokens from the underlying phrase

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1371](../source/parser.t.html#1371)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
