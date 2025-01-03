---
layout: docs
---
<span class="title">EmptyNounError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5178](../source/parser.t.html#5178)\],
[newbie.t](../file/newbie.t.html)\[[343](../source/newbie.t.html#343)\]

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



Empty noun slot error. This occurs when there are no noun phrases in a
functional slot in the predicate (e.g., when the player types "TAKE"
without a direct object).

`class `**`EmptyNounError`**` :   `[`CommandError`](../object/CommandError.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EmptyNounError`**  
[`CommandError`](../object/CommandError.html)  
[`ParseError`](../object/ParseError.html)  
[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curable`](#curable)

Inherited from `CommandError` :  
[`cmd`](../object/CommandError.html#cmd) [`errStage`](../object/CommandError.html#errStage)

Inherited from `ParseError` :  
[`allowOnRespell`](../object/ParseError.html#allowOnRespell)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`display`](#display) [`tryCuring`](#tryCuring)



Inherited from `ParseError` :  
[`rankCorrection`](../object/ParseError.html#rankCorrection)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException) [`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curable"></span>

`curable`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5220](../source/parser.t.html#5220)\]



we can cure by asking the player for the missing noun phrase



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (cmd, role)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5179](../source/parser.t.html#5179)\]



*no description available*



<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5186](../source/parser.t.html#5186)\],
[newbie.t](../file/newbie.t.html)\[[344](../source/newbie.t.html#344)\]



our message is a missing noun query (e.g., "What do want to open?")



<span id="tryCuring"></span>

`tryCuring (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5195](../source/parser.t.html#5195)\]



Try curing the error. After a missing noun query, the player can respond
with a simple noun phrase answering the question.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


