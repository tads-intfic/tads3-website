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

<div class="fdesc">

Noun conjunctions. These words and groups of words can be used to
separate noun phrases from one another. Note that these do not need to
be exclusive to noun phrases - these can occur as command conjunctions
as well; this list is separated from commandOrNounConjunction in case
there are conjunctions that can never be used as command conjunctions,
since such conjunctions, which can appear here, would not appear in
commandOrNounConjunctions.

`grammar `<span class="gramalt">[`nounConjunction`](../object/nounConjunction.html)`(main)`</span>` :   `[`BasicProd`](../object/BasicProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`nounConjunction(main)`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`isEndOfSentence`](#isEndOfSentence)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isEndOfSentence"></span>

`isEndOfSentence ( )`

[en_us.t](../file/en_us.t.html)\[[5219](../source/en_us.t.html#5219)\]

<div class="desc">

these conjunctions do not end a sentence

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
