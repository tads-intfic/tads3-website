[ParseError]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[4939](../source/parser.t.html#4939)\]

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
ParseError is an Exception subclass for parsing errors.

`class `**`ParseError`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ParseError`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ParseError`**\
`         `[`BadMultiError`](../object/BadMultiError.html)\
`         `[`CommandError`](../object/CommandError.html)\
`                 `[`EmptyNounError`](../object/EmptyNounError.html)\
`                 `[`RejectParseTreeError`](../object/RejectParseTreeError.html)\
`         `[`NotUnderstoodError`](../object/NotUnderstoodError.html)\
`         `[`OopsError`](../object/OopsError.html)\
`                 `[`CantOopsError`](../object/CantOopsError.html)\
`         `[`ResolutionError`](../object/ResolutionError.html)\
`                 `[`ActorResolutionError`](../object/ActorResolutionError.html)\
`                         `[`InsufficientNounsError`](../object/InsufficientNounsError.html)\
`                         `[`NoneInLocationError`](../object/NoneInLocationError.html)\
`                         `[`NoneInOwnerError`](../object/NoneInOwnerError.html)\
`                         `[`NoneWithContentsError`](../object/NoneWithContentsError.html)\
`                         `[`UnmatchedNounError`](../object/UnmatchedNounError.html)\
`                                 `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)\
`                 `[`AmbiguousError`](../object/AmbiguousError.html)\
`                 `[`OrdinalRangeError`](../object/OrdinalRangeError.html)\
`                 `[`PronounError`](../object/PronounError.html)\
`                         `[`AntecedentScopeError`](../object/AntecedentScopeError.html)\
`                         `[`NoAntecedentError`](../object/NoAntecedentError.html)\
`                 `[`UnmatchedActorError`](../object/UnmatchedActorError.html)\
`         `[`UnknownWordError`](../object/UnknownWordError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`allowOnRespell`](#allowOnRespell)`  `[`curable`](#curable)`  `[`errStage`](#errStage)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`display`](#display)`  `[`rankCorrection`](#rankCorrection)`  `[`tryCuring`](#tryCuring)`  `

Inherited from `Exception` :\
` `[`construct`](../object/Exception.html#construct)`  `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#allowOnRespell}

`allowOnRespell`

[parser.t](../file/parser.t.html)\[[4972](../source/parser.t.html#4972)\]

::: desc
Is this error allowed on a spelling correction candidate? By default,
this is nil, meaning that this error invalidates a correction candidate.
We mostly reject spelling \"corrections\" that result in errors because
these are probably false positives: they probably replace a misspelled
word with one that\'s in the dictionary but that\'s still wrong.
However, there are a few curable errors where it can make sense to keep
a correction, such as an ambiguous noun phrase: that\'s so close to
being a working command that we probably have a good correction.
:::

[]{#curable}

`curable`

[parser.t](../file/parser.t.html)\[[4986](../source/parser.t.html#4986)\]

::: desc
Is this a \"curable\" error? A curable error is one that the user can
fix by answering a question, such as \"which one do you mean?\" or
\"what do you want to unlock it with?\"

When we find more than one grammar match to an input string, the parser
tries resolving each one, in order of the predicate match quality. If
one resolves without an error, the parser stops and uses that match. But
if \*none\* of the possible matches resolve without an error, the parser
picks a match with a curable error over one with an incurable error.
:::

[]{#errStage}

`errStage`

[parser.t](../file/parser.t.html)\[[5012](../source/parser.t.html#5012)\]

::: desc
The parsing \"stage\" of this error. We can distinguish three levels of
intelligibility as we work through the parsing process: (1) completely
unintelligible, (2) valid verb structure, and (3) resolved noun phrases.
This property tells us which stage we finish in when we encounter an
error of this type.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#display}

`display ( )`

[parser.t](../file/parser.t.html)\[[4943](../source/parser.t.html#4943)\]

::: desc
Display the error message
:::

[]{#rankCorrection}

`rankCorrection (toks, idx, dict)`

[parser.t](../file/parser.t.html)\[[4959](../source/parser.t.html#4959)\]

::: desc
Rank a spelling correction candidate for input that triggered this error
on parsing.

\'toks\' is the new token list, with the spelling correction applied;
\'idx\' is the index in the list of the corrected word. \'dict\' is the
Dictionary used for parsing.

Returns an integer value giving the ranking. The ranking is used for
sorting, so the scale is arbitrary - we simply take the highest ranking
item. The value 0 is special, though: it means that we should filter out
the candidate and not consider it at all.
:::

[]{#tryCuring}

`tryCuring (toks, dict)`

[parser.t](../file/parser.t.html)\[[5003](../source/parser.t.html#5003)\]

::: desc
Try curing this error with the user\'s answer to the error message. The
parser calls this when (a) the PREVIOUS command resulted in this error,
(b) this error is curable, and (c) the user typed something on the
CURRENT command that didn\'t parse as a valid new command. Since the new
input doesn\'t look like a valid command, the parser calls this to
determine if the input was instead meant as an answer to the question
posed by the last error.

If this new command is indeed a valid response to the error message, we
return a CommandList with the \"cured\" version of the command. This new
command list should supplement the command with the new information
provided by the reply. If not, we simply return nil.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::