[SpellingHistory]{.title}[class]{.type}

[spelling.t](../file/spelling.t.html)\[[437](../source/spelling.t.html#437)\]

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
SpellingHistory: this maintains the history of attempted spelling
corrections for the current command. We process each word separately, so
each word has its own entry in the history.

The point of maintaining a history is that it allows us to backtrack if
we decide that an earlier guess at a corrected word isn\'t going to
result in a working command after all. If an earlier correction had
other equally good options, we can go back and try the other options by
unwinding the history.

`class `**`SpellingHistory`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SpellingHistory`**\
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

` `[`corrections`](#corrections)`  `[`cstack`](#cstack)`  `[`parser`](#parser)`  `[`startTime`](#startTime)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`checkSpelling`](#checkSpelling)`  `[`clear`](#clear)`  `[`construct`](#construct)`  `[`hasCorrections`](#hasCorrections)`  `[`noteSpelling`](#noteSpelling)`  `[`rollback`](#rollback)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#corrections}

`corrections`

[spelling.t](../file/spelling.t.html)\[[772](../source/spelling.t.html#772)\]

::: desc
The indices of the words we\'ve corrected so far. We keep track of the
corrections we\'ve made so that we don\'t try to further correct a word
we\'ve already corrected. (We \*do\* try multiple candidates per slot,
but we do that by backtracking.)
:::

[]{#cstack}

`cstack`

[spelling.t](../file/spelling.t.html)\[[781](../source/spelling.t.html#781)\]

::: desc
The attempted correction stack. Each time we correct a word, we\'ll add
a SpellingCorrection item to the stack. If we decide a correction
didn\'t work after all (i.e., didn\'t yield a valid parsing), the stack
lets us retract it and try a different correction candidate.
:::

[]{#parser}

`parser`

[spelling.t](../file/spelling.t.html)\[[761](../source/spelling.t.html#761)\]

::: desc
our parser object
:::

[]{#startTime}

`startTime`

[spelling.t](../file/spelling.t.html)\[[764](../source/spelling.t.html#764)\]

::: desc
starting time (in GetTimeTicks time)
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkSpelling}

`checkSpelling (toks, err)`

[spelling.t](../file/spelling.t.html)\[[463](../source/spelling.t.html#463)\]

::: desc
Check for spelling errors in a token list, and attempt automatic
spelling correction. We\'ll scan the token list for a word that isn\'t
in the dictionary. If we find one, and spelling correction is enabled,
we\'ll attempt to automatically correct the error.

\'toks\' is the token list for the command line, and \'err\' is the
ParseError object indicating what error triggered the spelling check.

Returns a new token list if we correct a spelling error, nil otherwise.
:::

[]{#clear}

`clear ( )`

[spelling.t](../file/spelling.t.html)\[[786](../source/spelling.t.html#786)\]

::: desc
Clear the history
:::

[]{#construct}

`construct (parser)`

[spelling.t](../file/spelling.t.html)\[[438](../source/spelling.t.html#438)\]

::: desc
*no description available*
:::

[]{#hasCorrections}

`hasCorrections ( )`

[spelling.t](../file/spelling.t.html)\[[448](../source/spelling.t.html#448)\]

::: desc
have we made any corrections?
:::

[]{#noteSpelling}

`noteSpelling (newToks)`

[spelling.t](../file/spelling.t.html)\[[685](../source/spelling.t.html#685)\]

::: desc
Note spelling changes between the original token list and the given
token list.
:::

[]{#rollback}

`rollback (toks, err)`

[spelling.t](../file/spelling.t.html)\[[646](../source/spelling.t.html#646)\]

::: desc
Roll back spelling changes to the last one that actually improved
matters. \'toks\' is the latest token list, and \'err\' is the parsing
error that we encountered attempting to parse this token list.

If \'err\' is a curable error, we\'ll leave things as they are. The
curable error means that the token list is now well-formed, but is
missing some information we need to actually execute it. Since it\'s
well-formed, our spelling corrections must have made some kind of sense,
so we\'ll assume they were correct.

If the error isn\'t curable, though, our spelling corrections didn\'t
result in a working command. The way we pick candidate words tends to
give us lots of false matches, so the fact that we didn\'t end up with
meaningful syntax overall suggests that our guess for an individual word
was a spurious match.

To determine what we keep and what we roll back, we look at whether a
change improved the intelligibility of the command. There are basically
three stages of intelligibility that we can distinguish: (1) completely
unintelligible, (2) valid verb structure but unknown noun phrases, and
(3) valid verb structure AND resolvable noun phrases.

We want to keep any attempted spelling corrections that successfully
advanced us from one stage to the next, because the improved
intelligibility is pretty good evidence that our corrections were in
fact correct. We DON\'T want to keep any corrections that didn\'t
advance the process, because we can\'t tell if they actually helped.
We\'re intentionally conservative about spelling correction, because
spurious corrections are worse in an IF context than in most
applications. In IF, a spurious correction could be a spoiler, by
revealing the existence of a dictionary word too early in the game. To
reduce spurious corrections, we only accept corrections that actually
make the command more parseable.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
