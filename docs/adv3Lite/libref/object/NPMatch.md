[NPMatch]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[3209](../source/parser.t.html#3209)\]

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
NPMatch is an object that describes one object matching a noun phrase.

`class `**`NPMatch`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NPMatch`**\
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

` `[`flags`](#flags)`  `[`match`](#match)`  `[`name`](#name)`  `[`np`](#np)`  `[`obj`](#obj)`  `[`score`](#score)`  `[`strength`](#strength)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#flags}

`flags`

[parser.t](../file/parser.t.html)\[[3264](../source/parser.t.html#3264)\]

::: desc
the selection/disambiguation flags (SelXxx)
:::

[]{#match}

`match`

[parser.t](../file/parser.t.html)\[[3258](../source/parser.t.html#3258)\]

::: desc
the match flags - this is a combination of MatchXxx flags as returned
from Mentionable.matchName()
:::

[]{#name}

`name`

[parser.t](../file/parser.t.html)\[[3278](../source/parser.t.html#3278)\]

::: desc
The name, for announcement purposes. This is filled in by the Command
during execution. The Command figures the name so that it\'s
distinguished from all of the other objects in the same noun role in the
command.
:::

[]{#np}

`np`

[parser.t](../file/parser.t.html)\[[3249](../source/parser.t.html#3249)\]

::: desc
the NounPhrase we matched
:::

[]{#obj}

`obj`

[parser.t](../file/parser.t.html)\[[3252](../source/parser.t.html#3252)\]

::: desc
the matching object
:::

[]{#score}

`score`

[parser.t](../file/parser.t.html)\[[3270](../source/parser.t.html#3270)\]

::: desc
Disambiguation score. This is a number assigned by the action in
scoreObjects().
:::

[]{#strength}

`strength`

[parser.t](../file/parser.t.html)\[[3261](../source/parser.t.html#3261)\]

::: desc
the match strength, for sorting the match list
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (np, obj, match)`

[parser.t](../file/parser.t.html)\[[3210](../source/parser.t.html#3210)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
