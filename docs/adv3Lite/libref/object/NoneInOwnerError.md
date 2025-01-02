---
layout: docs
---
<span class="title">NoneInOwnerError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5436](../source/parser.t.html#5436)\]

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

The owner in a possessive phrase doesn't have any of the objects named.

`class `**`NoneInOwnerError`**` :   `[`ActorResolutionError`](../object/ActorResolutionError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NoneInOwnerError`**  
[`ActorResolutionError`](../object/ActorResolutionError.html)  
[`ResolutionError`](../object/ResolutionError.html)  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                                         object`  
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

[`possQual`](#possQual)

Inherited from `ActorResolutionError` :  
[`cmd`](../object/ActorResolutionError.html#cmd)

Inherited from `ResolutionError` :  
[`np`](../object/ResolutionError.html#np)[`txt`](../object/ResolutionError.html#txt)

Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell)[`curable`](../object/ParseError.html#curable)[`errStage`](../object/ParseError.html#errStage)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`display`](#display)



Inherited from `ResolutionError` :  
[`rankCorrection`](../object/ResolutionError.html#rankCorrection)

Inherited from `ParseError` :  
[`tryCuring`](../object/ParseError.html#tryCuring)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException)[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="possQual"></span>

`possQual`

[parser.t](../file/parser.t.html)\[[5444](../source/parser.t.html#5444)\]

<div class="desc">

the possessive qualifier

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (cmd, np, poss)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5437](../source/parser.t.html#5437)\]

<div class="desc">

*no description available*

</div>

<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5446](../source/parser.t.html#5446)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
