[ResolutionError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[5230](../source/parser.t.html#5230)\]

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
Noun phrase resolution error. This is a special type of parsing error
that indicates that the problem is with resolving a noun phrase to
game-world objects.

`class `**`ResolutionError`**` :   `[`ParseError`](../object/ParseError.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ResolutionError`**\
`         `[`ParseError`](../object/ParseError.html)\
`                 `[`Exception`](../object/Exception.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ResolutionError`**\
`         `[`ActorResolutionError`](../object/ActorResolutionError.html)\
`                 `[`InsufficientNounsError`](../object/InsufficientNounsError.html)\
`                 `[`NoneInLocationError`](../object/NoneInLocationError.html)\
`                 `[`NoneInOwnerError`](../object/NoneInOwnerError.html)\
`                 `[`NoneWithContentsError`](../object/NoneWithContentsError.html)\
`                 `[`UnmatchedNounError`](../object/UnmatchedNounError.html)\
`                         `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)\
`         `[`AmbiguousError`](../object/AmbiguousError.html)\
`         `[`OrdinalRangeError`](../object/OrdinalRangeError.html)\
`         `[`PronounError`](../object/PronounError.html)\
`                 `[`AntecedentScopeError`](../object/AntecedentScopeError.html)\
`                 `[`NoAntecedentError`](../object/NoAntecedentError.html)\
`         `[`UnmatchedActorError`](../object/UnmatchedActorError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`np`](#np)`  `[`txt`](#txt)`  `

Inherited from `ParseError` :\
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`rankCorrection`](#rankCorrection)`  `

Inherited from `ParseError` :\
` `[`display`](../object/ParseError.html#display)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#np}

`np`

[parser.t](../file/parser.t.html)\[[5244](../source/parser.t.html#5244)\]

::: desc
the NounPhrase object for the errant phrase, if available
:::

[]{#txt}

`txt`

[parser.t](../file/parser.t.html)\[[5247](../source/parser.t.html#5247)\]

::: desc
the text of the errant phrase, if available
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (np)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5231](../source/parser.t.html#5231)\]

::: desc
*no description available*
:::

[]{#rankCorrection}

`rankCorrection (toks, idx, dict)`[OVERRIDDEN]{.rem}

[parser.t](../file/parser.t.html)\[[5258](../source/parser.t.html#5258)\]

::: desc
For a noun resolution error, our best bet for a spelling correction
would be a word associated with a game-world object. Only consider
in-scope objects when making the correction, to avoid spurious
corrections that give away information on objects the player has yet to
encounter. We\'ll also allow words that are used in non-predicate
grammar productions, since we might have a structural noun phrase word
(an article, pronoun, etc).
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
