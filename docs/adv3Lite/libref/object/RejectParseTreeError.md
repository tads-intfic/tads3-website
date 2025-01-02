---
---
<span class="title">RejectParseTreeError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5162](../source/parser.t.html#5162)\]

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

Rejected parsing structure. There are certain structures that are hard
to eliminate in the grammar, but which we don't want to accept
semantically. This error can be thrown when such a structure is
encountered. This effectively rules out a parse tree. It's not a
displayable error; the parser simply rules out these structures.

`class `**`RejectParseTreeError`**` :   `[`CommandError`](../object/CommandError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RejectParseTreeError`**  
`         `[`CommandError`](../object/CommandError.html)  
`                 `[`ParseError`](../object/ParseError.html)  
`                         `[`Exception`](../object/Exception.html)  
`                                 object`  
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

` `

Inherited from `CommandError` :  
` `[`cmd`](../object/CommandError.html#cmd)`  `[`errStage`](../object/CommandError.html#errStage)`  `

Inherited from `ParseError` :  
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`display`](#display)`  `

Inherited from `CommandError` :  
` `[`construct`](../object/CommandError.html#construct)`  `

Inherited from `ParseError` :  
` `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5163](../source/parser.t.html#5163)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
