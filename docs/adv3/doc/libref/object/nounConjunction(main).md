---
layout: docs
---
<span class="title">nounConjunction(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5212](../source/en_us.t.html#5212)\]

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



Noun conjunctions. These words and groups of words can be used to
separate noun phrases from one another. Note that these do not need to
be exclusive to noun phrases - these can occur as command conjunctions
as well; this list is separated from commandOrNounConjunction in case
there are conjunctions that can never be used as command conjunctions,
since such conjunctions, which can appear here, would not appear in
commandOrNounConjunctions.

`grammar `<span class="gramalt">[`nounConjunction`](../object/nounConjunction.html)`(main)`</span>` :   `[`BasicProd`](../object/BasicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`nounConjunction(main)`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isEndOfSentence`](#isEndOfSentence)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[en_us.t](../file/en_us.t.html)\[[5219](../source/en_us.t.html#5219)\]



these conjunctions do not end a sentence





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


