---
layout: docs
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



Base class for resolution errors involving pronouns

`class `**`PronounError`**` :   `[`ResolutionError`](../object/ResolutionError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PronounError`**  
[`ResolutionError`](../object/ResolutionError.html)  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PronounError`**  
[`AntecedentScopeError`](../object/AntecedentScopeError.html)  
[`NoAntecedentError`](../object/NoAntecedentError.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`pronoun`](#pronoun)

Inherited from `ResolutionError` :  
[`np`](../object/ResolutionError.html#np) [`txt`](../object/ResolutionError.html#txt)

Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell) [`curable`](../object/ParseError.html#curable) [`errStage`](../object/ParseError.html#errStage)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

Inherited from `ResolutionError` :  
[`rankCorrection`](../object/ResolutionError.html#rankCorrection)

Inherited from `ParseError` :  
[`display`](../object/ParseError.html#display) [`tryCuring`](../object/ParseError.html#tryCuring)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="pronoun"></span>

`pronoun`

[parser.t](../file/parser.t.html)\[[5358](../source/parser.t.html#5358)\]



the pronoun that caused the error, as a Pronoun object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (np, pro)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5351](../source/parser.t.html#5351)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


