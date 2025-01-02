---
layout: docs
---
<span class="title">ActorResolutionError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5300](../source/parser.t.html#5300)\]

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

ActorResolutionError - this is for resolution errors that are in the
context of what the target actor of the command (the addressee) can see.
These require the Command in addition to the noun phrase, since that
provides the target actor information.

`class `**`ActorResolutionError`**` :   `[`ResolutionError`](../object/ResolutionError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ActorResolutionError`**  
`         `[`ResolutionError`](../object/ResolutionError.html)  
`                 `[`ParseError`](../object/ParseError.html)  
`                         `[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ActorResolutionError`**  
`         `[`InsufficientNounsError`](../object/InsufficientNounsError.html)  
`         `[`NoneInLocationError`](../object/NoneInLocationError.html)  
`         `[`NoneInOwnerError`](../object/NoneInOwnerError.html)  
`         `[`NoneWithContentsError`](../object/NoneWithContentsError.html)  
`         `[`UnmatchedNounError`](../object/UnmatchedNounError.html)  
`                 `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cmd`](#cmd)`  `

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

<span id="cmd"></span>

`cmd`

[parser.t](../file/parser.t.html)\[[5308](../source/parser.t.html#5308)\]

<div class="desc">

the command that we were attempting to resolve

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5301](../source/parser.t.html#5301)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
