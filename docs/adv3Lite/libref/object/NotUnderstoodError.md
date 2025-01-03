---
layout: docs
---
<span class="title">NotUnderstoodError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5019](../source/parser.t.html#5019)\],
[newbie.t](../file/newbie.t.html)\[[327](../source/newbie.t.html#327)\]

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



The basic command-level parsing error. This occurs when we can't find a
grammar match to the overall command phrasing.

*Modified in
[newbie.t](../file/newbie.t.html)\[[327](../source/newbie.t.html#327)\]:*  
This game may be played by novice players. We'll try to keep track of
how many not-understood commands they enter, in case it helps us decide
whether they need help. The playerHelper object will use this
information to decide whether to offer help.

`class `**`NotUnderstoodError`**` :   `[`ParseError`](../object/ParseError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NotUnderstoodError`**  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell) [`curable`](../object/ParseError.html#curable) [`errStage`](../object/ParseError.html#errStage)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`display`](#display) [`rankCorrection`](#rankCorrection)

Inherited from `ParseError` :  
[`tryCuring`](../object/ParseError.html#tryCuring)

Inherited from `Exception` :  
[`construct`](../object/Exception.html#construct) [`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5020](../source/parser.t.html#5020)\],
[newbie.t](../file/newbie.t.html)\[[328](../source/newbie.t.html#328)\]



*no description available*



<span id="rankCorrection"></span>

`rankCorrection (toks, idx, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5037](../source/parser.t.html#5037)\]



This is a general verb syntax error, so our best candidates will words
that are used in verb phrases. The next best is a corrected word that's
used in any GrammarProd, since the problem might actually be in some
other structural part of the command phrase above the verb phrase (a
conjunction, for example).
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


