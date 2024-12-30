[You]{.title}[object]{.type}

[parser.t](../file/parser.t.html)\[[4718](../source/parser.t.html#4718)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
You - the second-person singular. YOU always binds to the addressee of
the command: either the player character, or the actor being given
orders via a construct like ACTOR, DO THIS.

Binding to the PC is grammatically correct in a first-person narration,
because the PC is the narrator\'s ME and therefore the player\'s YOU.
It\'s less so in a second-person game: the PC is the narrator\'s YOU, so
the player\'s YOU ought to be the narrator. However, some players are
literal-minded about second-person narration, so rather than reflecting
the narrator\'s YOU into the player\'s ME, they simply say YOU too.
Fortunately, there\'s not any serious ambiguity here. The narrator is
typically not a game-world object, but is an entity that exists outside
the game world, so it\'s off-limits for discussion in commands. So YOU
can\'t mean the narrator. That means that if the player uses YOU at all,
they must mean the PC.

**`You`**` :   `[`Pronoun`](../object/Pronoun.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`You`**\
`         `[`Pronoun`](../object/Pronoun.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`person`](#person)`  `

Inherited from `Pronoun` :\
` `[`all`](../object/Pronoun.html#all)`  `[`aName`](../object/Pronoun.html#aName)`  `[`ante`](../object/Pronoun.html#ante)`  `[`reflexive`](../object/Pronoun.html#reflexive)`  `[`theName`](../object/Pronoun.html#theName)`  `[`theObjName`](../object/Pronoun.html#theObjName)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`resolve`](#resolve)`  `

Inherited from `Pronoun` :\
` `[`construct`](../object/Pronoun.html#construct)`  `[`matchObj`](../object/Pronoun.html#matchObj)`  `[`setAntecedents`](../object/Pronoun.html#setAntecedents)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#person}

`person`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4740](../source/parser.t.html#4740)\]

::: desc
this is a second-person pronoun
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#resolve}

`resolve ( )`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[4726](../source/parser.t.html#4726)\]

::: desc
The second-person pronoun binds to information contained within the
command itself, namely the addressee of the command, so we need to
resolve it using the parser\'s \"late binding\" scheme. That is, we
return \'self\' to tell the parser that it needs to go back and resolve
this pronoun after resolving other phrases.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::