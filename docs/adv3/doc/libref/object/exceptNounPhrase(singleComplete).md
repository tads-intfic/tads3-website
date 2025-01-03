---
layout: docs
---
<span class="title">exceptNounPhrase(singleComplete)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[5386](../source/en_us.t.html#5386)\]

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



An "except" noun phrase is a normal "complete" noun phrase or a
possessive noun phrase that doesn't explicitly qualify another phrase
(for example, "all the coins but bob's" - the "bob's" is just a
possessive noun phrase without another noun phrase attached, since it
implicitly qualifies "the coins").

`grammar `<span class="gramalt">[`exceptNounPhrase`](../object/exceptNounPhrase.html)`(singleComplete)`</span>` :   `[`ExceptListProd`](../object/ExceptListProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`exceptNounPhrase(singleComplete)`**  
[`ExceptListProd`](../object/ExceptListProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`resolveNouns`](#resolveNouns)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[en_us.t](../file/en_us.t.html)\[[5388](../source/en_us.t.html#5388)\]



*no description available*
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


