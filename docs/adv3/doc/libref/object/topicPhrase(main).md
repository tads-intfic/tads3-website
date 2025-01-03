---
layout: docs
---
<span class="title">topicPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7049](../source/en_us.t.html#7049)\]

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



A "topic" is a special type of noun phrase used in commands like "ask
\<actor\> about \<topic\>." We define a topic as simply an ordinary
single-noun phrase. We distinguish this in the grammar to allow games to
add special syntax for these.

`grammar `<span class="gramalt">[`topicPhrase`](../object/topicPhrase.html)`(main)`</span>` :   `[`TopicProd`](../object/TopicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`topicPhrase(main)`**  
[`TopicProd`](../object/TopicProd.html)  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  


Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `TopicProd` :  
[`getOrigText`](../object/TopicProd.html#getOrigText) [`getOrigTokenList`](../object/TopicProd.html#getOrigTokenList) [`resolveNouns`](../object/TopicProd.html#resolveNouns)



Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


