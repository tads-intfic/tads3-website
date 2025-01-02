---
layout: docs
---
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



no match for token

`class `**`TokErrorNoMatch`**` :   `[`TokenizerError`](../object/TokenizerError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TokErrorNoMatch`**  
[`TokenizerError`](../object/TokenizerError.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curChar_`](#curChar_) [`remainingStr_`](#remainingStr_)



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`displayException`](#displayException)



Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curChar_"></span>

`curChar_`

[tok.t](../file/tok.t.html)\[[59](../source/tok.t.html#59)\]



current character (first character of remainingStr\_)



<span id="remainingStr_"></span>

`remainingStr_`

[tok.t](../file/tok.t.html)\[[56](../source/tok.t.html#56)\]



The remainder of the string. This is the part that couldn't be matched;
we were successful in matching up to this point.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (str)`<span class="rem">OVERRIDDEN</span>

[tok.t](../file/tok.t.html)\[[36](../source/tok.t.html#36)\]



*no description available*



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[tok.t](../file/tok.t.html)\[[49](../source/tok.t.html#49)\]



for convenience, separately remember the single character that we don't
recognize - this is simply the first character of the rest of the line





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


