---
---
<span class="title">PronounError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5350](../source/parser.t.html#5350)\]

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

Base class for resolution errors involving pronouns

`class `**`PronounError`**` :   `[`ResolutionError`](../object/ResolutionError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PronounError`**  
`         `[`ResolutionError`](../object/ResolutionError.html)  
`                 `[`ParseError`](../object/ParseError.html)  
`                         `[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PronounError`**  
`         `[`AntecedentScopeError`](../object/AntecedentScopeError.html)  
`         `[`NoAntecedentError`](../object/NoAntecedentError.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`pronoun`](#pronoun)`  `

Inherited from `ResolutionError` :  
` `[`np`](../object/ResolutionError.html#np)`  `[`txt`](../object/ResolutionError.html#txt)`  `

Inherited from `ParseError` :  
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

Inherited from `ResolutionError` :  
` `[`rankCorrection`](../object/ResolutionError.html#rankCorrection)`  `

Inherited from `ParseError` :  
` `[`display`](../object/ParseError.html#display)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="pronoun"></span>

`pronoun`

[parser.t](../file/parser.t.html)\[[5358](../source/parser.t.html#5358)\]

<div class="desc">

the pronoun that caused the error, as a Pronoun object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (np, pro)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5351](../source/parser.t.html#5351)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
