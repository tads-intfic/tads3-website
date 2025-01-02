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



An ErrorQuestion is a subclass of Question for curable parsing errors.

`class `**`ParseErrorQuestion`**` :   `[`Question`](../object/Question.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ParseErrorQuestion`**  
[`Question`](../object/Question.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`err`](#err) [`priority`](#priority)

Inherited from `Question` :  
[`answerTemplate`](../object/Question.html#answerTemplate)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`parseAnswer`](#parseAnswer)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="err"></span>

`err`

[parser.t](../file/parser.t.html)\[[1216](../source/parser.t.html#1216)\]



the curable ParseError that posed the question



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1224](../source/parser.t.html#1224)\]



Should we prioritize interpreting player input to a parser query as a
response to that query over interpreting it as a nea command (where the
latter is possible)? By default we do (since this seems more likely to
reflect player intention in this case), although game code can override
if desired.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (err)`

[parser.t](../file/parser.t.html)\[[1203](../source/parser.t.html#1203)\]



*no description available*



<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1209](../source/parser.t.html#1209)\]



remember the ParseError object





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


