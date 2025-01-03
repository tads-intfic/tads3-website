---
layout: docs
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



A topic is a noun phrase used in commands like "ask \<person\> about
\<topic\>." For our purposes, this works as an ordinary single noun
production.

`class `**`TopicProd`**` :   `[`SingleNounProd`](../object/SingleNounProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicProd`**  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TopicProd`**  
[`EmptyTopicPhraseProd`](../object/EmptyTopicPhraseProd.html)  
[`PrepSingleTopicProd`](../object/PrepSingleTopicProd.html)  
[`aboutTopicPhrase(main)`](../object/aboutTopicPhrase(main).html)  
[`topicPhrase(main)`](../object/topicPhrase(main).html)  
[`topicPhrase(misc)`](../object/topicPhrase(misc).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getOrigText`](#getOrigText) [`getOrigTokenList`](#getOrigTokenList) [`resolveNouns`](#resolveNouns)



Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getOrigText"></span>

`getOrigText ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1369](../source/parser.t.html#1369)\]



*no description available*



<span id="getOrigTokenList"></span>

`getOrigTokenList ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1368](../source/parser.t.html#1368)\]



get the original text and tokens from the underlying phrase



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1371](../source/parser.t.html#1371)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


