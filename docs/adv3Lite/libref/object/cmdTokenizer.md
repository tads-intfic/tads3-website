[cmdTokenizer]{.title}[object]{.type}

[tokens.t](../file/tokens.t.html)\[[66](../source/tokens.t.html#66)\]

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
Command tokenizer for US English. Other language modules should provide
their own tokenizers to allow for differences in punctuation and other
lexical elements.

\[Required\]

**`cmdTokenizer`**` :   `[`Tokenizer`](../object/Tokenizer.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`cmdTokenizer`**\
`         `[`Tokenizer`](../object/Tokenizer.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`endAssert`](#endAssert)`  `[`patAlphaDashAlpha`](#patAlphaDashAlpha)`  `[`patPunct`](#patPunct)`  `[`patSpelledTens`](#patSpelledTens)`  `[`patSpelledUnits`](#patSpelledUnits)`  `[`punctChars`](#punctChars)`  `[`rules_`](#rules_)`  `[`squote`](#squote)`  `[`wordPunct`](#wordPunct)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`acceptAbbrTok`](#acceptAbbrTok)`  `[`buildOrigText`](#buildOrigText)`  `[`tokCvtAbbr`](#tokCvtAbbr)`  `[`tokCvtApostropheS`](#tokCvtApostropheS)`  `[`tokCvtSpelledNumber`](#tokCvtSpelledNumber)`  `

Inherited from `Tokenizer` :\
` `[`deleteRule`](../object/Tokenizer.html#deleteRule)`  `[`deleteRuleAt`](../object/Tokenizer.html#deleteRuleAt)`  `[`insertRule`](../object/Tokenizer.html#insertRule)`  `[`insertRuleAt`](../object/Tokenizer.html#insertRuleAt)`  `[`tokCvtLower`](../object/Tokenizer.html#tokCvtLower)`  `[`tokCvtSkip`](../object/Tokenizer.html#tokCvtSkip)`  `[`tokenize`](../object/Tokenizer.html#tokenize)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#endAssert}

`endAssert`

[tokens.t](../file/tokens.t.html)\[[199](../source/tokens.t.html#199)\]

::: desc
end-of-token assertion
:::

[]{#patAlphaDashAlpha}

`patAlphaDashAlpha`

[tokens.t](../file/tokens.t.html)\[[258](../source/tokens.t.html#258)\]

::: desc
add the part after the hyphen
:::

[]{#patPunct}

`patPunct`

[tokens.t](../file/tokens.t.html)\[[375](../source/tokens.t.html#375)\]

::: desc
*no description available*
:::

[]{#patSpelledTens}

`patSpelledTens`

[tokens.t](../file/tokens.t.html)\[[371](../source/tokens.t.html#371)\]

::: desc
some pre-compiled regular expressions
:::

[]{#patSpelledUnits}

`patSpelledUnits`

[tokens.t](../file/tokens.t.html)\[[373](../source/tokens.t.html#373)\]

::: desc
*no description available*
:::

[]{#punctChars}

`punctChars`

[tokens.t](../file/tokens.t.html)\[[196](../source/tokens.t.html#196)\]

::: desc
token-separating punctuation marks, as an \<alpha\|x\|y\> pattern
:::

[]{#rules_}

`rules_`[OVERRIDDEN]{.rem}

[tokens.t](../file/tokens.t.html)\[[74](../source/tokens.t.html#74)\]

::: desc
The list of tokenizing rules. This isn\'t actually required to be
defined by the language module, since you \*could\* just use the default
rules inherited from the base Tokenizer class, but it\'s likely that
each language will have some quirks that require custom rules.
:::

[]{#squote}

`squote`

[tokens.t](../file/tokens.t.html)\[[206](../source/tokens.t.html#206)\]

::: desc
List of characters consisting a single quote mark. This includes regular
ASCII straight quotes as well as the unicode curly quotes. This is for
pasting into a \<alpha\|x\|y\> pattern.
:::

[]{#wordPunct}

`wordPunct`

[tokens.t](../file/tokens.t.html)\[[212](../source/tokens.t.html#212)\]

::: desc
list of acceptable punctuation marks within words; this is for pasting
into an \<alpha\|x\|y\> pattern
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#acceptAbbrTok}

`acceptAbbrTok (txt)`

[tokens.t](../file/tokens.t.html)\[[270](../source/tokens.t.html#270)\]

::: desc
Check to see if we want to accept an abbreviated token - this is a token
that ends in a period, which we use for abbreviated words like \"Mr.\"
or \"Ave.\" We\'ll accept the token only if it appears as given -
including the period - in the dictionary. Note that we ignore truncated
matches, since the only way we\'ll accept a period in a word token is as
the last character; there is thus no way that a token ending in a period
could be a truncation of any longer valid token.
:::

[]{#buildOrigText}

`buildOrigText (toks)`

[tokens.t](../file/tokens.t.html)\[[311](../source/tokens.t.html#311)\]

::: desc
Given a list of token strings, rebuild the original input string. We
can\'t recover the exact input string, because the tokenization process
throws away whitespace information, but we can at least come up with
something that will display cleanly and produce the same results when
run through the tokenizer.

\[Required\]
:::

[]{#tokCvtAbbr}

`tokCvtAbbr (txt, typ, toks)`

[tokens.t](../file/tokens.t.html)\[[290](../source/tokens.t.html#290)\]

::: desc
Process an abbreviated token.

When we find an abbreviation, we\'ll enter it with the abbreviated word
minus the trailing period, plus the period as a separate token. We\'ll
mark the period as an \"abbreviation period\" so that grammar rules will
be able to consider treating it as an abbreviation \-- but since it\'s
also a regular period, grammar rules that treat periods as regular
punctuation will also be able to try to match the result. This will
ensure that we try it both ways - as abbreviation and as a word with
punctuation - and pick the one that gives us the best result.
:::

[]{#tokCvtApostropheS}

`tokCvtApostropheS (txt, typ, toks)`

[tokens.t](../file/tokens.t.html)\[[220](../source/tokens.t.html#220)\]

::: desc
Handle an apostrophe-s word. We\'ll return this as two separate tokens:
one for the word preceding the apostrophe-s, and one for the
apostrophe-s itself.
:::

[]{#tokCvtSpelledNumber}

`tokCvtSpelledNumber (txt, typ, toks)`

[tokens.t](../file/tokens.t.html)\[[244](../source/tokens.t.html#244)\]

::: desc
Handle a spelled-out hyphenated number from 21 to 99. We\'ll return this
as three separate tokens: a word for the tens name, a word for the
hyphen, and a word for the units name.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
