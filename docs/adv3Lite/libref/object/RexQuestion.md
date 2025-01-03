---
layout: docs
---
<span class="title">RexQuestion</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1157](../source/parser.t.html#1157)\]

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



A RexQuestion is a simple subclass of Question for parsing answers with
regular expressions.

`class `**`RexQuestion`**` :   `[`Question`](../object/Question.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RexQuestion`**  
[`Question`](../object/Question.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`answerFunc`](#answerFunc) [`answerPat`](#answerPat)

Inherited from `Question` :  
[`answerTemplate`](../object/Question.html#answerTemplate) [`priority`](../object/Question.html#priority)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`parseAnswer`](#parseAnswer)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="answerFunc"></span>

`answerFunc`

[parser.t](../file/parser.t.html)\[[1196](../source/parser.t.html#1196)\]



the callback to invoke on answering



<span id="answerPat"></span>

`answerPat`

[parser.t](../file/parser.t.html)\[[1193](../source/parser.t.html#1193)\]



the regular expression pattern to match



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (pat, func)`

[parser.t](../file/parser.t.html)\[[1167](../source/parser.t.html#1167)\]



Create - 'pat' is the regular expression pattern, as either a string or
a RexPattern object. We'll parse an answer simply by matching it against
the regular expression; if we match, we'll take it as an answer. 'func'
is a callback function that we'll call to carry out the action of
answering the question. We'll invoke this with one argument giving the
literal text of the input.



<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1173](../source/parser.t.html#1173)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


