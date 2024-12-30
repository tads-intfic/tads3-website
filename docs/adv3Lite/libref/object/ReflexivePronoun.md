[ReflexivePronoun]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4830](../source/parser.t.html#4830)\]

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
Base class for reflexive pronouns. These are pronouns like \"himself\"
that specifically refer to an antecedent in the same sentence, rather
than to an earlier sentence: ASK BOB ABOUT HIMSELF is an inquiry about
Bob, while ASK BOB ABOUT HIM refers to some male antecedent from an
earlier statement.

Note that the first- and second-person reflexives are generally not
needed in the parser. (We define them here anyway, because they\'re
useful for message generation.) The third-person reflexive pronouns have
distinct meanings in input from the corresponding ordinary pronouns, in
that they refer to noun phrases within the same command rather than in
earlier exchanges. In contrast, the second-person pronouns have the same
meaning in ordinary and reflexive forms, at least within the confines of
the IF parser: EXAMINE ME and EXAMINE MYSELF mean the same thing in all
typical IF command syntax.

`class `**`ReflexivePronoun`**` :   `[`Pronoun`](../object/Pronoun.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ReflexivePronoun`**\
`         `[`Pronoun`](../object/Pronoun.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`Herself`](../object/Herself.html)`  `[`Himself`](../object/Himself.html)`  `[`Itself`](../object/Itself.html)`  `[`Myself`](../object/Myself.html)`  `[`Ourselves`](../object/Ourselves.html)`  `[`Themselves`](../object/Themselves.html)`  `[`Yourself`](../object/Yourself.html)`  `[`Yourselves`](../object/Yourselves.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`all`](#all)`  `[`person`](#person)`  `[`pronoun`](#pronoun)`  `

Inherited from `Pronoun` :\
` `[`aName`](../object/Pronoun.html#aName)`  `[`ante`](../object/Pronoun.html#ante)`  `[`reflexive`](../object/Pronoun.html#reflexive)`  `[`theName`](../object/Pronoun.html#theName)`  `[`theObjName`](../object/Pronoun.html#theObjName)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`resolve`](#resolve)`  `

Inherited from `Pronoun` :\
` `[`matchObj`](../object/Pronoun.html#matchObj)`  `[`setAntecedents`](../object/Pronoun.html#setAntecedents)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#all}

`all`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4863](../source/parser.t.html#4863)\]

::: desc
Class property - list of all reflexive pronoun objects. This keeps the
reflexive pronouns in a separate list from the base Pronoun list.
:::

[]{#person}

`person`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4856](../source/parser.t.html#4856)\]

::: desc
my grammatical person is the same as my underlying pronoun\'s
:::

[]{#pronoun}

`pronoun`

[parser.t](../file/parser.t.html)\[[4853](../source/parser.t.html#4853)\]

::: desc
Get the corresponding ordinary (non-reflexive) form of the pronoun. For
example, for HIMSELF we\'d return HIM.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4832](../source/parser.t.html#4832)\]

::: desc
during construction, set the regular pronoun to point back at me
:::

[]{#resolve}

`resolve ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4847](../source/parser.t.html#4847)\]

::: desc
A reflexive pronoun binds to another noun phrase contained in the same
command, so we resolve using the parser\'s \"late binding\" scheme. We
invoke this by returning the ordinary (non-reflexive) pronoun object
representing the attributes that we match; upon seeing this, the parser
will know to come back to this pronoun after it\'s finished resolving
earlier phrases, and look for the appropriate pronoun binding within
those other phrases.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
