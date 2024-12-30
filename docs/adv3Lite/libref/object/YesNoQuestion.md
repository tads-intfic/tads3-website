[YesNoQuestion]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1127](../source/parser.t.html#1127)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A YesNoQuestion is a simple subclass of Question for asking interactive
questions with Yes or No answers.

`class `**`YesNoQuestion`**` :   `[`GramQuestion`](../object/GramQuestion.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`YesNoQuestion`**\
`         `[`GramQuestion`](../object/GramQuestion.html)\
`                 `[`Question`](../object/Question.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`priority`](#priority)`  `

Inherited from `GramQuestion` :\
` `[`answerFunc`](../object/GramQuestion.html#answerFunc)`  `[`answerProd`](../object/GramQuestion.html#answerProd)`  `

Inherited from `Question` :\
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

Inherited from `GramQuestion` :\
` `[`makeCommand`](../object/GramQuestion.html#makeCommand)`  `[`parseAnswer`](../object/GramQuestion.html#parseAnswer)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1150](../source/parser.t.html#1150)\]

::: desc
parse Yes/No replies ahead of new commands, since we\'d otherwise never
get an answer - the parser would always match the reply to a
conversational verb instead
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (func)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1133](../source/parser.t.html#1133)\]

::: desc
Create - \'func\' is the callback function to invoke on answering the
question. This is invoked with one argument, true if the answer was Yes,
nil if the answer was No.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
