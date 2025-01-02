<span class="title">YesNoQuestion</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1127](../source/parser.t.html#1127)\]

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

A YesNoQuestion is a simple subclass of Question for asking interactive
questions with Yes or No answers.

`class `**`YesNoQuestion`**` :   `[`GramQuestion`](../object/GramQuestion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`YesNoQuestion`**  
`         `[`GramQuestion`](../object/GramQuestion.html)  
`                 `[`Question`](../object/Question.html)  
`                         object`  
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

` `[`priority`](#priority)`  `

Inherited from `GramQuestion` :  
` `[`answerFunc`](../object/GramQuestion.html#answerFunc)`  `[`answerProd`](../object/GramQuestion.html#answerProd)`  `

Inherited from `Question` :  
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

Inherited from `GramQuestion` :  
` `[`makeCommand`](../object/GramQuestion.html#makeCommand)`  `[`parseAnswer`](../object/GramQuestion.html#parseAnswer)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1150](../source/parser.t.html#1150)\]

<div class="desc">

parse Yes/No replies ahead of new commands, since we'd otherwise never
get an answer - the parser would always match the reply to a
conversational verb instead

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (func)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1133](../source/parser.t.html#1133)\]

<div class="desc">

Create - 'func' is the callback function to invoke on answering the
question. This is invoked with one argument, true if the answer was Yes,
nil if the answer was No.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
