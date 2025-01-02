---
layout: docs
---
<span class="title">ParseErrorQuestion</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1202](../source/parser.t.html#1202)\]

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

An ErrorQuestion is a subclass of Question for curable parsing errors.

`class `**`ParseErrorQuestion`**` :   `[`Question`](../object/Question.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ParseErrorQuestion`**  
`         `[`Question`](../object/Question.html)  
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

` `[`err`](#err)`  `[`priority`](#priority)`  `

Inherited from `Question` :  
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`parseAnswer`](#parseAnswer)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="err"></span>

`err`

[parser.t](../file/parser.t.html)\[[1216](../source/parser.t.html#1216)\]

<div class="desc">

the curable ParseError that posed the question

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1224](../source/parser.t.html#1224)\]

<div class="desc">

Should we prioritize interpreting player input to a parser query as a
response to that query over interpreting it as a nea command (where the
latter is possible)? By default we do (since this seems more likely to
reflect player intention in this case), although game code can override
if desired.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (err)`

[parser.t](../file/parser.t.html)\[[1203](../source/parser.t.html#1203)\]

<div class="desc">

*no description available*

</div>

<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1209](../source/parser.t.html#1209)\]

<div class="desc">

remember the ParseError object

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
