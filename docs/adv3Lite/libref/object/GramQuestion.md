[GramQuestion]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[1081](../source/parser.t.html#1081)\]

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
A GramQuestion is a question handler that parses an answer using a
grammar rule.

`class `**`GramQuestion`**` :   `[`Question`](../object/Question.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`GramQuestion`**\
`         `[`Question`](../object/Question.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`GramQuestion`**\
`         `[`YesNoQuestion`](../object/YesNoQuestion.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`answerFunc`](#answerFunc)`  `[`answerProd`](#answerProd)`  `

Inherited from `Question` :\
` `[`answerTemplate`](../object/Question.html#answerTemplate)`  `[`priority`](../object/Question.html#priority)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`makeCommand`](#makeCommand)`  `[`parseAnswer`](#parseAnswer)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#answerFunc}

`answerFunc`

[parser.t](../file/parser.t.html)\[[1120](../source/parser.t.html#1120)\]

::: desc
the callback function that carries out the reply action
:::

[]{#answerProd}

`answerProd`

[parser.t](../file/parser.t.html)\[[1117](../source/parser.t.html#1117)\]

::: desc
the GrammarProd rule that we use to parse the answer
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (prod, func)`

[parser.t](../file/parser.t.html)\[[1090](../source/parser.t.html#1090)\]

::: desc
Create a simple question. \'prod\' is the root GrammarProd to use for
parsing the reply. \'func\' is a callback function that carries out the
action of the answering the question. \'func\' is invoked with a single
argument giving the Command object representing the answer; you can get
the match tree from the Command if you need the parsed form of the
answer input.
:::

[]{#makeCommand}

`makeCommand (prod)`

[parser.t](../file/parser.t.html)\[[1114](../source/parser.t.html#1114)\]

::: desc
Create a Command object for a successful grammar match. \'prod\' is the
root match object of the grammar match. This returns a suitable Command
that carries out the action of answering the question.
:::

[]{#parseAnswer}

`parseAnswer (toks, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[1101](../source/parser.t.html#1101)\]

::: desc
Parse the answer. We\'ll match the token list against the grammar rule.
If we find a match, we\'ll call makeCommand() to create the command to
carry out the action of answering the question.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
