---
layout: docs
---
<span class="title">quotedStringPhrase(main)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7092](../source/en_us.t.html#7092)\]

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

A "quoted string" phrase is a literal enclosed in single or double
quotes.

Note that this is a separate production from literalPhrase. This
production can be used when \*only\* a quoted string is allowed. The
literalPhrase production allows both quoted and unquoted text.

`grammar `<span class="gramalt">[`quotedStringPhrase`](../object/quotedStringPhrase.html)`(main)`</span>` :   `[`LiteralProd`](../object/LiteralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`quotedStringPhrase(main)`**  
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

` `[`getStringText`](#getStringText)`  `

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

<span id="getStringText"></span>

`getStringText ( )`

[en_us.t](../file/en_us.t.html)\[[7097](../source/en_us.t.html#7097)\]

<div class="desc">

get my string, with the quotes trimmed off (so we return simply the
contents of the string)

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
