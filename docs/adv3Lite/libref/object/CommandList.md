[CommandList]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[823](../source/parser.t.html#823)\]

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
A CommandList is a set of potential parsings for a given input with a
given grammar.

`class `**`CommandList`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`CommandList`**\
`         object`\
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

` `[`cmd`](#cmd)`  `[`cmdLst`](#cmdLst)`  `[`curable`](#curable)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`acceptAny`](#acceptAny)`  `[`acceptCurable`](#acceptCurable)`  `[`construct`](#construct)`  `[`getBestCmd`](#getBestCmd)`  `[`getResErr`](#getResErr)`  `[`length`](#length)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cmd}

`cmd`

[parser.t](../file/parser.t.html)\[[1002](../source/parser.t.html#1002)\]

::: desc
Our resolved Command. This is the first parsing in our list that (in
priority order) we were able to resolve with no errors.
:::

[]{#cmdLst}

`cmdLst`

[parser.t](../file/parser.t.html)\[[996](../source/parser.t.html#996)\]

::: desc
our list of Command objects
:::

[]{#curable}

`curable`

[parser.t](../file/parser.t.html)\[[1009](../source/parser.t.html#1009)\]

::: desc
Our semi-resolved Command. When we can\'t find a command that resolves
without errors, we\'ll set this to the first one (in priority order)
that resolves with a curable error.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#acceptAny}

`acceptAny ( )`

[parser.t](../file/parser.t.html)\[[945](../source/parser.t.html#945)\]

::: desc
Accept ANY command, with or without a resolution error, curable or not.
We\'ll take the error-free resolution if we have one, otherwise the
resolution with a curable error, otherwise just the first parsing in
priority order.
:::

[]{#acceptCurable}

`acceptCurable ( )`

[parser.t](../file/parser.t.html)\[[929](../source/parser.t.html#929)\]

::: desc
Accept a curable resolution as the actual resolution. If we don\'t have
an error-free resolution, we\'ll set \'cmd\' to the curable resolution.
Returns true if we have any resolution, nil if not.
:::

[]{#construct}

`construct ([args])`

[parser.t](../file/parser.t.html)\[[834](../source/parser.t.html#834)\]

::: desc
new CommandList(prod, toks, dict, wrapper) - construct a new CommandList
object by parsing an input token list. \'prod\' is the GrammarProd to
parse against; \'toks\' is the token list; \'dict\' is the main parser
dictionary; \'wrapper\' is a callback function that maps a parse tree to
a Command object.

new CommandList(Command) - construct a CommandList containing a single
pre-resolved Command object.
:::

[]{#getBestCmd}

`getBestCmd ( )`

[parser.t](../file/parser.t.html)\[[957](../source/parser.t.html#957)\]

::: desc
Get the most promising command from the available parsings. This returns
the first successfully resolved command in priority order, if any;
otherwise the first command with a curable error, if any; otherwise the
first command in priority order.
:::

[]{#getResErr}

`getResErr ( )`

[parser.t](../file/parser.t.html)\[[980](../source/parser.t.html#980)\]

::: desc
Get the resolution error, if any. If we parsed but didn\'t resolve, this
returns the error from the first parsing in priority order.
:::

[]{#length}

`length ( )`

[parser.t](../file/parser.t.html)\[[922](../source/parser.t.html#922)\]

::: desc
number of parsings in the list
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
