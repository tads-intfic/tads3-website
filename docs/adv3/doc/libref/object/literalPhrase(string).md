---
---
<span class="title">literalPhrase(string)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7163](../source/en_us.t.html#7163)\]

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

A "literal" is essentially any phrase. This can include a quoted string,
a number, or any set of word tokens.

`grammar `<span class="gramalt">[`literalPhrase`](../object/literalPhrase.html)`(string)`</span>` :   `[`LiteralProd`](../object/LiteralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`literalPhrase(string)`**  
`         `[`LiteralProd`](../object/LiteralProd.html)  
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

` `[`getLiteralText`](#getLiteralText)`  `[`getTentativeLiteralText`](#getTentativeLiteralText)`  `[`resolveLiteral`](#resolveLiteral)`  `

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

<span id="getLiteralText"></span>

`getLiteralText (results, action, which)`

[en_us.t](../file/en_us.t.html)\[[7164](../source/en_us.t.html#7164)\]

<div class="desc">

*no description available*

</div>

<span id="getTentativeLiteralText"></span>

`getTentativeLiteralText ( )`

[en_us.t](../file/en_us.t.html)\[[7170](../source/en_us.t.html#7170)\]

<div class="desc">

get the text from our underlying quoted string

</div>

<span id="resolveLiteral"></span>

`resolveLiteral (results)`

[en_us.t](../file/en_us.t.html)\[[7179](../source/en_us.t.html#7179)\]

<div class="desc">

our result will never change, so our tentative text is the same as our
regular literal text

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
