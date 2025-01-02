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

<div class="fdesc">

A number phrase preceded by a pound sign. We distinguish this kind of
number phrase from plain numbers, since this kind has a somewhat more
limited set of valid contexts.

`grammar `<span class="gramalt">[`poundNumberPhrase`](../object/poundNumberPhrase.html)`(main)`</span>` :   `[`NumberProd`](../object/NumberProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`poundNumberPhrase(main)`**  
`         `[`NumberProd`](../object/NumberProd.html)  
`                 `[`BasicProd`](../object/BasicProd.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getStrVal`](#getStrVal)`  `[`getval`](#getval)`  `

` `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getStrVal"></span>

`getStrVal ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[7689](../source/en_us.t.html#7689)\]

<div class="desc">

get the string value - we have a number token following the '#', so
simply return the part after the '#'

</div>

<span id="getval"></span>

`getval ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[7683](../source/en_us.t.html#7683)\]

<div class="desc">

get the numeric value - a tokPoundInt token has a pound sign followed by
digits, so the numeric value is the value of the substring following the
'#' sign

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
