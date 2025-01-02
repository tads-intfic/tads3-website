---
layout: docs
---
<span class="title">poundNumberPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7677](../source/en_us.t.html#7677)\]

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



A number phrase preceded by a pound sign. We distinguish this kind of
number phrase from plain numbers, since this kind has a somewhat more
limited set of valid contexts.

`grammar `<span class="gramalt">[`poundNumberPhrase`](../object/poundNumberPhrase.html)`(main)`</span>` :   `[`NumberProd`](../object/NumberProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`poundNumberPhrase(main)`**  
[`NumberProd`](../object/NumberProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getStrVal`](#getStrVal)[`getval`](#getval)



Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getStrVal"></span>

`getStrVal ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[7689](../source/en_us.t.html#7689)\]



get the string value - we have a number token following the '#', so
simply return the part after the '#'



<span id="getval"></span>

`getval ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[7683](../source/en_us.t.html#7683)\]



get the numeric value - a tokPoundInt token has a pound sign followed by
digits, so the numeric value is the value of the substring following the
'#' sign





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


