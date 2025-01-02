<span class="title">GramQuestion</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1081](../source/parser.t.html#1081)\]

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

A GramQuestion is a question handler that parses an answer using a
grammar rule.

`class `**`GramQuestion`**` :   `[`Question`](../object/Question.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GramQuestion`**  
`         `[`Question`](../object/Question.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`GramQuestion`**  
`         `[`YesNoQuestion`](../object/YesNoQuestion.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`answerFunc`](#answerFunc)`  `[`answerProd`](#answerProd)`  `

Inherited from `Question` :  
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `[`priority`](../object/Question.html#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`makeCommand`](#makeCommand)`  `[`parseAnswer`](#parseAnswer)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="answerFunc"></span>

`answerFunc`

[parser.t](../file/parser.t.html)\[[1120](../source/parser.t.html#1120)\]

<div class="desc">

the callback function that carries out the reply action

</div>

<span id="answerProd"></span>

`answerProd`

[parser.t](../file/parser.t.html)\[[1117](../source/parser.t.html#1117)\]

<div class="desc">

the GrammarProd rule that we use to parse the answer

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (prod, func)`

[parser.t](../file/parser.t.html)\[[1090](../source/parser.t.html#1090)\]

<div class="desc">

Create a simple question. 'prod' is the root GrammarProd to use for
parsing the reply. 'func' is a callback function that carries out the
action of the answering the question. 'func' is invoked with a single
argument giving the Command object representing the answer; you can get
the match tree from the Command if you need the parsed form of the
answer input.

</div>

<span id="makeCommand"></span>

`makeCommand (prod)`

[parser.t](../file/parser.t.html)\[[1114](../source/parser.t.html#1114)\]

<div class="desc">

Create a Command object for a successful grammar match. 'prod' is the
root match object of the grammar match. This returns a suitable Command
that carries out the action of answering the question.

</div>

<span id="parseAnswer"></span>

`parseAnswer (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1101](../source/parser.t.html#1101)\]

<div class="desc">

Parse the answer. We'll match the token list against the grammar rule.
If we find a match, we'll call makeCommand() to create the command to
carry out the action of answering the question.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
