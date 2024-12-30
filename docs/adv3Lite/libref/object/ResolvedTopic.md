[ResolvedTopic]{.title}[class]{.type}

[parser.t](../file/parser.t.html)\[[3094](../source/parser.t.html#3094)\],
[english.t](../file/english.t.html)\[[2071](../source/english.t.html#2071)\]

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
*no description available*

*Modified in
[english.t](../file/english.t.html)\[[2071](../source/english.t.html#2071)\]:*\
Modification to the ResolvedTopic for use with the English-language
specific part of the library.

`class `**`ResolvedTopic`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ResolvedTopic`**\
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

` `[`aName`](#aName)`  `[`getBestMatch`](#getBestMatch)`  `[`getTopicText`](#getTopicText)`  `[`name`](#name)`  `[`person`](#person)`  `[`theName`](#theName)`  `[`tokens`](#tokens)`  `[`topicList`](#topicList)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getTopicText`](#getTopicText)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#aName}

`aName`

[parser.t](../file/parser.t.html)\[[3115](../source/parser.t.html#3115)\]

::: desc
*no description available*
:::

[]{#getBestMatch}

`getBestMatch`

[parser.t](../file/parser.t.html)\[[3112](../source/parser.t.html#3112)\]

::: desc
*no description available*
:::

[]{#getTopicText}

`getTopicText`

[parser.t](../file/parser.t.html)\[[3113](../source/parser.t.html#3113)\]

::: desc
*no description available*
:::

[]{#name}

`name`

[parser.t](../file/parser.t.html)\[[3116](../source/parser.t.html#3116)\]

::: desc
*no description available*
:::

[]{#person}

`person`

[parser.t](../file/parser.t.html)\[[3117](../source/parser.t.html#3117)\]

::: desc
*no description available*
:::

[]{#theName}

`theName`

[parser.t](../file/parser.t.html)\[[3114](../source/parser.t.html#3114)\]

::: desc
*no description available*
:::

[]{#tokens}

`tokens`

[parser.t](../file/parser.t.html)\[[3110](../source/parser.t.html#3110)\]

::: desc
*no description available*
:::

[]{#topicList}

`topicList`

[parser.t](../file/parser.t.html)\[[3109](../source/parser.t.html#3109)\]

::: desc
if our list of topics has more than one entry, sort it in ascending
order of length of name. That\'s because the shorter the name, the
closer it may be to what the player actually typed.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (lst, toks)`

[parser.t](../file/parser.t.html)\[[3095](../source/parser.t.html#3095)\]

::: desc
*no description available*
:::

[]{#getTopicText}

`getTopicText ( )`

[english.t](../file/english.t.html)\[[2078](../source/english.t.html#2078)\]

::: desc
The English Tokenizer separates apostrophe-S from the word it\'s part
of, so in restoring the original text we need to join any apostrophe-S
back to the word it was separated from.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
