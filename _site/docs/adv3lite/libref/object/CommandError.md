<span class="title">CommandError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5137](../source/parser.t.html#5137)\]

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

A CommandError is an error in parsing that occurs within the build
process for a Command object.

`class `**`CommandError`**` :   `[`ParseError`](../object/ParseError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandError`**  
`         `[`ParseError`](../object/ParseError.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandError`**  
`         `[`EmptyNounError`](../object/EmptyNounError.html)  
`         `[`RejectParseTreeError`](../object/RejectParseTreeError.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cmd`](#cmd)`  `[`errStage`](#errStage)`  `

Inherited from `ParseError` :  
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

Inherited from `ParseError` :  
` `[`display`](../object/ParseError.html#display)`  `[`rankCorrection`](../object/ParseError.html#rankCorrection)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cmd"></span>

`cmd`

[parser.t](../file/parser.t.html)\[[5145](../source/parser.t.html#5145)\]

<div class="desc">

the Command object where the error occurred

</div>

<span id="errStage"></span>

`errStage`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5152](../source/parser.t.html#5152)\]

<div class="desc">

these errors occur once we have a valid predicate structure, so we're in
stage 2 of the parsing when we encounter an error of this type

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5138](../source/parser.t.html#5138)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
