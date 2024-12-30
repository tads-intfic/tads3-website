[DirState]{.title}[object]{.type}

[english.t](../file/english.t.html)\[[2009](../source/english.t.html#2009)\]

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
DirState. This is useful for SymConnectors and the like, whose
directional vocab may change according to which direction they\'re
approached from.

**`DirState`**` :   `[`State`](../object/State.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DirState`**\
`         `[`State`](../object/State.html)\
`                 `[`LState`](../object/LState.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`adjectives`](#adjectives)`  `[`stateProp`](#stateProp)`  `

Inherited from `State` :\
` `[`all`](../object/State.html#all)`  `[`vocabTab`](../object/State.html#vocabTab)`  `[`vocabWords`](../object/State.html#vocabWords)`  `

Inherited from `LState` :\
` `[`additionalInfo`](../object/LState.html#additionalInfo)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`appliesTo`](#appliesTo)`  `

Inherited from `State` :\
` `[`classInit`](../object/State.html#classInit)`  `[`construct`](../object/State.html#construct)`  `[`getVocab`](../object/State.html#getVocab)`  `[`matchName`](../object/State.html#matchName)`  `

Inherited from `LState` :\
` `[`addToName`](../object/LState.html#addToName)`  `[`getAdditionalInfo`](../object/LState.html#getAdditionalInfo)`  `[`initWord`](../object/LState.html#initWord)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#adjectives}

`adjectives`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2011](../source/english.t.html#2011)\]

::: desc
*no description available*
:::

[]{#stateProp}

`stateProp`[OVERRIDDEN]{.rem}

[english.t](../file/english.t.html)\[[2010](../source/english.t.html#2010)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#appliesTo}

`appliesTo (obj)`[OVERRIDDEN]{.rem}

[symconn.t](../file/symconn.t.html)\[[217](../source/symconn.t.html#217)\]

::: desc
We exclude SymStairway because including \'up\' or \'down\' in its vocab
confuses the parser\'s interpretation of CLIMB UP and CLIMB DOWN.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
