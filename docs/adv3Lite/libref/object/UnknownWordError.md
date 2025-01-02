---
layout: docs
---
<span class="title">UnknownWordError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5085](../source/parser.t.html#5085)\],
[newbie.t](../file/newbie.t.html)\[[335](../source/newbie.t.html#335)\]

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

<div class="fdesc">

An UnknownWordError points out a word that's not in the game's
dictionary.

`class `**`UnknownWordError`**` :   `[`ParseError`](../object/ParseError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`UnknownWordError`**  
`         `[`ParseError`](../object/ParseError.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`badWord`](#badWord)`  `

Inherited from `ParseError` :  
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`display`](#display)`  `

Inherited from `ParseError` :  
` `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="badWord"></span>

`badWord`

[parser.t](../file/parser.t.html)\[[5106](../source/parser.t.html#5106)\]

<div class="desc">

the text of the unknown word

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (txt)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5086](../source/parser.t.html#5086)\]

<div class="desc">

*no description available*

</div>

<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5091](../source/parser.t.html#5091)\],
[newbie.t](../file/newbie.t.html)\[[336](../source/newbie.t.html#336)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
