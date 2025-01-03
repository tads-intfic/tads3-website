---
layout: docs
---
<span class="title">OrdinalRangeError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5695](../source/parser.t.html#5695)\]

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



Ordinal out of range. This occurs when the player replies to a
disambiguation query with an ordinal that's out of the bounds of the
offered list.

`class `**`OrdinalRangeError`**` :   `[`ResolutionError`](../object/ResolutionError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OrdinalRangeError`**  
[`ResolutionError`](../object/ResolutionError.html)  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`ordinal`](#ordinal)

Inherited from `ResolutionError` :  
[`np`](../object/ResolutionError.html#np) [`txt`](../object/ResolutionError.html#txt)

Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell) [`curable`](../object/ParseError.html#curable) [`errStage`](../object/ParseError.html#errStage)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`display`](#display)

Inherited from `ResolutionError` :  
[`rankCorrection`](../object/ResolutionError.html#rankCorrection)

Inherited from `ParseError` :  
[`tryCuring`](../object/ParseError.html#tryCuring)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="ordinal"></span>

`ordinal`

[parser.t](../file/parser.t.html)\[[5715](../source/parser.t.html#5715)\]



the ordinal, as an integer value (1=first, 2=second, etc)



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (np, ordinal)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5696](../source/parser.t.html#5696)\]



*no description available*



<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5702](../source/parser.t.html#5702)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


