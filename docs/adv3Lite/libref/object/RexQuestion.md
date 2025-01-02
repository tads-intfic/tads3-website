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

<div class="fdesc">

A RexQuestion is a simple subclass of Question for parsing answers with
regular expressions.

`class `**`RexQuestion`**` :   `[`Question`](../object/Question.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RexQuestion`**  
[`Question`](../object/Question.html)  
`                 object`  
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

[`answerFunc`](#answerFunc)[`answerPat`](#answerPat)

Inherited from `Question` :  
[`answerTemplate`](../object/Question.html#answerTemplate)[`priority`](../object/Question.html#priority)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`parseAnswer`](#parseAnswer)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="answerFunc"></span>

`answerFunc`

[parser.t](../file/parser.t.html)\[[1196](../source/parser.t.html#1196)\]

<div class="desc">

the callback to invoke on answering

</div>

<span id="answerPat"></span>

`answerPat`

[parser.t](../file/parser.t.html)\[[1193](../source/parser.t.html#1193)\]

<div class="desc">

the regular expression pattern to match

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (pat, func)`

[parser.t](../file/parser.t.html)\[[1167](../source/parser.t.html#1167)\]

<div class="desc">

Create - 'pat' is the regular expression pattern, as either a string or
a RexPattern object. We'll parse an answer simply by matching it against
the regular expression; if we match, we'll take it as an answer. 'func'
is a callback function that we'll call to carry out the action of
answering the question. We'll invoke this with one argument giving the
literal text of the input.

</div>

<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1173](../source/parser.t.html#1173)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
