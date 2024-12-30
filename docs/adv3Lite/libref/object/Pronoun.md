[Pronoun]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4599](../source/parser.t.html#4599)\],
[english.t](../file/english.t.html)\[[2213](../source/english.t.html#2213)\]

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
Base class for pronouns. We represent each type of pronoun with an
object, to abstract pronouns away from the vocabulary.

The base library defines a set of pronouns that are common to most
languages: It, Him, Her, Them, You, Y\'all, Me, and Us, plus reflexive
forms of It, Him, Her, and Them. Some languages might not employ all of
these (French, for example, has no neuter gender, so there\'s no
equivalent of It), and some might need additional pronouns (e.g., French
needs a feminine third-person plural). If a pronoun we define here has
no equivalent in a given language, the language module should simply
omit any grammar mentioning it. If the language has pronouns that
aren\'t in the basic set, the language module can provide definitions
for its own additional Pronoun objects, along with the corresponding
grammar rules.

The library itself only directly references one pronoun object: You. The
parser specifically references this pronoun because it binds to the
addressee of a command, which has a special role in the parsing process.
Apart from You, though, the library\'s use of pronouns is directed by
the grammar: if a given Pronoun doesn\'t appear in the grammar anywhere,
the library will never use it. (Other than in iterations over Pronoun
instances, anyway; but these will be harmless because the parser is just
trying to be inclusive.) This means that language modules are free to
ignore pronouns (other than You) from the standard set when they\'re not
a good match for the language\'s needs. For example, if you need
distinct Animate and Inanimate forms of Him and Her, you could simply
define four new Pronoun objects for these forms, and use them in place
of Him and Her throughout your grammar.

Note that these objects are NOT grammar rules or dictionary words. These
are abstract objects representing the \"binding\" of the pronouns -
basically the set of grammatical attributes (gender, number) that
determine whether a given noun phrase is a valid antecedent for a given
pronoun. That\'s why we don\'t define separate Pronoun objects the
different grammatical cases (nominative, accusative, dative, etc): case
is a feature of the grammar, and we\'re one step removed from that here.

*Modified in
[english.t](../file/english.t.html)\[[2213](../source/english.t.html#2213)\]:*\
Modifications to Pronoun to ensure that aName, theName and theObjName
return the appropriate results.

`class `**`Pronoun`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Pronoun`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Pronoun`**\
`         `[`ReflexivePronoun`](../object/ReflexivePronoun.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`Her`](../object/Her.html)`  `[`Him`](../object/Him.html)`  `[`It`](../object/It.html)`  `[`Me`](../object/Me.html)`  `[`Them`](../object/Them.html)`  `[`Us`](../object/Us.html)`  `[`Yall`](../object/Yall.html)`  `[`You`](../object/You.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`all`](#all)`  `[`aName`](#aName)`  `[`ante`](#ante)`  `[`person`](#person)`  `[`reflexive`](#reflexive)`  `[`theName`](#theName)`  `[`theObjName`](#theObjName)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`matchObj`](#matchObj)`  `[`resolve`](#resolve)`  `[`setAntecedents`](#setAntecedents)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#all}

`all`

[parser.t](../file/parser.t.html)\[[4663](../source/parser.t.html#4663)\]

::: desc
Class property - list of all regular Pronoun objects. (Note that this
excludes the reflexive pronouns, because the ReflexivePronoun class has
its own separate \'all\' list for its instances.)
:::

[]{#aName}

`aName`

[english.t](../file/english.t.html)\[[2214](../source/english.t.html#2214)\]

::: desc
*no description available*
:::

[]{#ante}

`ante`

[parser.t](../file/parser.t.html)\[[4650](../source/parser.t.html#4650)\]

::: desc
my antecedent or list of antecedents
:::

[]{#person}

`person`

[parser.t](../file/parser.t.html)\[[4620](../source/parser.t.html#4620)\]

::: desc
The grammatical person of the pronoun. Pronouns come in three persons:
first (me, us), second (you), and third (her, them). We represent these
as 1, 2, and 3.
:::

[]{#reflexive}

`reflexive`

[parser.t](../file/parser.t.html)\[[4656](../source/parser.t.html#4656)\]

::: desc
the corresponding reflexive pronoun, if any - this is set up
automatically during preinit
:::

[]{#theName}

`theName`

[english.t](../file/english.t.html)\[[2215](../source/english.t.html#2215)\]

::: desc
*no description available*
:::

[]{#theObjName}

`theObjName`

[english.t](../file/english.t.html)\[[2216](../source/english.t.html#2216)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct ( )`

[parser.t](../file/parser.t.html)\[[4666](../source/parser.t.html#4666)\]

::: desc
on initialization, add me to the master list of pronoun objects
:::

[]{#matchObj}

`matchObj (obj)`

[parser.t](../file/parser.t.html)\[[4644](../source/parser.t.html#4644)\]

::: desc
Does this pronoun match the given object or list of objects? By default,
we won\'t match lists, and we\'ll ask the object if it thinks we\'re a
match.
:::

[]{#resolve}

`resolve ( )`

[parser.t](../file/parser.t.html)\[[4613](../source/parser.t.html#4613)\]

::: desc
Resolve the pronoun during parsing. The usual way of doing this is to
return the list of antecedents we store as part of the pronoun object.
This lets each type of pronoun store an appropriate list of antecedents.

For a reflexive pronoun, return the Pronoun object for the ordinary form
of the pronoun. This tells the parser that it needs to find a match for
the pronoun within the command itself, rather than looking for an
external antecedent. Second person is inherently reflexive, in that it
refers to the addressee(s), so this should return \'self\' for a
second-person pronoun.
:::

[]{#setAntecedents}

`setAntecedents (obj)`

[parser.t](../file/parser.t.html)\[[4637](../source/parser.t.html#4637)\]

::: desc
Set the antecedent(s) for future pronoun usage based on the objects
mentioned in the current command input or narrative output. \'obj\' can
be a single antecedent object, or it can be a list. Even a singular
pronoun can have a list of antecedents: some commands have more than one
noun phrase, and there\'s no way of knowing which one the user might
want to refer to with a pronoun in a future command. We can\'t know
until we see the context of the future pronoun use. For example, UNLOCK
DOOR WITH KEY could be followed by OPEN IT, in which case IT is probably
the door; or by DROP IT, in which case IT is probably the key. The best
thing to do is to save both the door and the key as possible
antecedents, so that we can choose the most suitable object when we
actually see a pronoun in a subsequent command.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
