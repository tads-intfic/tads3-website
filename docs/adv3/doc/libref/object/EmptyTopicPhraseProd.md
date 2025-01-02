---
layout: docs
---
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



Empty topic phrase production. This is the topic equivalent of
EmptyNounPhraseProd.

`class `**`EmptyTopicPhraseProd`**` :   `[`TopicProd`](../object/TopicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EmptyTopicPhraseProd`**  
[`TopicProd`](../object/TopicProd.html)  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`asker_`](#asker_) [`newMatch`](#newMatch) [`responseProd`](#responseProd)





Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getOrigText`](#getOrigText) [`getOrigTokenList`](#getOrigTokenList) [`isEmptyPhrase`](#isEmptyPhrase) [`resolveNouns`](#resolveNouns)





Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="asker_"></span>

`asker_`

[parser.t](../file/parser.t.html)\[[4326](../source/parser.t.html#4326)\]



our ResolveAsker object - this is for customizing the prompt



<span id="newMatch"></span>

`newMatch`

[parser.t](../file/parser.t.html)\[[4317](../source/parser.t.html#4317)\]



our new underlying topic phrase



<span id="responseProd"></span>

`responseProd`

[parser.t](../file/parser.t.html)\[[4323](../source/parser.t.html#4323)\]



by default, parse our interactive response as an ordinary topic phrase



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getOrigText"></span>

`getOrigText ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4311](../source/parser.t.html#4311)\]



get my original text - use the new match tree if we have one



<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4305](../source/parser.t.html#4305)\]



get my tokens - use the underlying new match tree if we have one



<span id="isEmptyPhrase"></span>

`isEmptyPhrase ( )`

[parser.t](../file/parser.t.html)\[[4302](../source/parser.t.html#4302)\]



we're an empty phrase if we don't have a new topic yet



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4276](../source/parser.t.html#4276)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


