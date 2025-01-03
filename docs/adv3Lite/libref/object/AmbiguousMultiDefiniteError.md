---
layout: docs
---
<span class="title">AmbiguousMultiDefiniteError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5674](../source/parser.t.html#5674)\]

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



*no description available*

`class `**`AmbiguousMultiDefiniteError`**` :   `[`UnmatchedNounError`](../object/UnmatchedNounError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AmbiguousMultiDefiniteError`**  
[`UnmatchedNounError`](../object/UnmatchedNounError.html)  
[`ActorResolutionError`](../object/ActorResolutionError.html)  
[`ResolutionError`](../object/ResolutionError.html)  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curable`](#curable)



Inherited from `ActorResolutionError` :  
[`cmd`](../object/ActorResolutionError.html#cmd)

Inherited from `ResolutionError` :  
[`np`](../object/ResolutionError.html#np) [`txt`](../object/ResolutionError.html#txt)

Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell) [`errStage`](../object/ParseError.html#errStage)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`display`](#display)



Inherited from `ActorResolutionError` :  
[`construct`](../object/ActorResolutionError.html#construct)

Inherited from `ResolutionError` :  
[`rankCorrection`](../object/ResolutionError.html#rankCorrection)

Inherited from `ParseError` :  
[`tryCuring`](../object/ParseError.html#tryCuring)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curable"></span>

`curable`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5686](../source/parser.t.html#5686)\]



this is not really curable, but we need to say it is curable so that our
custom message is displayed. Would like to find a way to do this where
curable=nil



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5675](../source/parser.t.html#5675)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


