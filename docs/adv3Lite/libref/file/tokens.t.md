[tokens.t]{.title}[file]{.type}

[source file](../source/tokens.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`cmdTokenizer`](../object/cmdTokenizer.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`concatTokens`](#concatTokens)`  `[`isWordToken`](#isWordToken)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#concatTokens}

`concatTokens (a, b)`

[tokens.t](../file/tokens.t.html)\[[45](../source/tokens.t.html#45)\]

::: desc
Concatenate two tokens. This takes two token elements in the same format
returned by Tokenizer.tokenize(), and returns a combined element in the
same format. The result should be as though the original pair of tokens
had been concatenated in the input string.
:::

[]{#isWordToken}

`isWordToken (tok)`

[tokens.t](../file/tokens.t.html)\[[32](../source/tokens.t.html#32)\]

::: desc
Is the given token a word? This receives a token element in the same
format returned by Tokenizer.tokenize(). Returns true if the token
represents a word that could be looked up in the dictionary, nil if
it\'s something else (such as punctuation, a number, or a quoted
literal).

\[Required\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
