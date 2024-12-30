[englishCustomVocab]{.title}[object]{.type}

[english.t](../file/english.t.html)\[[2414](../source/english.t.html#2414)\]

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
Custom English vocabulary. Here we define a basic dictionary of
irregular plurals, a/an words, and verb parameters. Games that want to
save a little compiled file space might want to replace this with a set
that only defines the words actually needed in the game. Games are free
to define additional custom vocabulary words by adding their own
CustomVocab objects; the library will automatically find and merge them
into the dictionary during preinit.

**`englishCustomVocab`**` :   `[`CustomVocab`](../object/CustomVocab.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`englishCustomVocab`**\
`         `[`CustomVocab`](../object/CustomVocab.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`irregularPlurals`](#irregularPlurals)`  `[`specialAOrAn`](#specialAOrAn)`  `[`verbParams`](#verbParams)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#irregularPlurals}

`irregularPlurals`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2416](../source/english.t.html#2416)\]

::: desc
irregular plurals
:::

[]{#specialAOrAn}

`specialAOrAn`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2567](../source/english.t.html#2567)\]

::: desc
special-case \'a\' vs \'an\' words
:::

[]{#verbParams}

`verbParams`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2591](../source/english.t.html#2591)\]

::: desc
verb parameters, for {xxx} tokens in message strings
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
