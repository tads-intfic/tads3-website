---
layout: docs
---
<span class="title">SingleNounProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1309](../source/parser.t.html#1309)\]

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



A single noun is sometimes required where, structurally, a list is not
allowed. Single nouns should not be used to prohibit lists where there
is no structural reason for the prohibition - these should be used only
where it doesn't make sense to use a list structurally.

`class `**`SingleNounProd`**` :   `[`NounPhraseProd`](../object/NounPhraseProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SingleNounProd`**  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`SingleNounProd`**  
[`PrepSingleNounProd`](../object/PrepSingleNounProd.html)  
[`atSingleNoun(main)`](../object/atSingleNoun(main).html)  
[`forSingleNoun(main)`](../object/forSingleNoun(main).html)  
[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)  
[`inSingleNoun(main)`](../object/inSingleNoun(main).html)  
[`onSingleNoun(main)`](../object/onSingleNoun(main).html)  
[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)  
[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)  
[`toSingleNoun(main)`](../object/toSingleNoun(main).html)  
[`withSingleNoun(main)`](../object/withSingleNoun(main).html)  
[`singleNounOnly(main)`](../object/singleNounOnly(main).html)  
[`TopicProd`](../object/TopicProd.html)  
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



[`resolveNouns`](#resolveNouns)

Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[1310](../source/parser.t.html#1310)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


