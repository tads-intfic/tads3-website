<span class="title">TokErrorNoMatch</span><span class="type">class</span>

[tok.t](../file/tok.t.html)\[[35](../source/tok.t.html#35)\]

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

no match for token

`class `**`TokErrorNoMatch`**` :   `[`TokenizerError`](../object/TokenizerError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TokErrorNoMatch`**  
`         `[`TokenizerError`](../object/TokenizerError.html)  
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

` `[`curChar_`](#curChar_)`  `[`remainingStr_`](#remainingStr_)`  `

` `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

` `

Inherited from `Exception` :  
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curChar_"></span>

`curChar_`

[tok.t](../file/tok.t.html)\[[59](../source/tok.t.html#59)\]

<div class="desc">

current character (first character of remainingStr\_)

</div>

<span id="remainingStr_"></span>

`remainingStr_`

[tok.t](../file/tok.t.html)\[[56](../source/tok.t.html#56)\]

<div class="desc">

The remainder of the string. This is the part that couldn't be matched;
we were successful in matching up to this point.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (str)`<span class="rem">OVERRIDDEN</span>

[tok.t](../file/tok.t.html)\[[36](../source/tok.t.html#36)\]

<div class="desc">

*no description available*

</div>

<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[tok.t](../file/tok.t.html)\[[49](../source/tok.t.html#49)\]

<div class="desc">

for convenience, separately remember the single character that we don't
recognize - this is simply the first character of the rest of the line

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>