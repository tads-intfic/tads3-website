[SpecialsToHtmlState]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[1133](../source/_main.t.html#1133)\]

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
Stream state object for String.specialsToHtml().

`class `**`SpecialsToHtmlState`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SpecialsToHtmlState`**\
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

` `[`flags_`](#flags_)`  `[`tag_`](#tag_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`resetLine`](#resetLine)`  `[`resetState`](#resetState)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#flags_}

`flags_`

[\_main.t](../file/_main.t.html)\[[1170](../source/_main.t.html#1170)\]

::: desc
Internal output state flags at end of last string parsed. This is a
combination of bit flags:

0x0001 - last string ended within a line of text\
0x0002 - caps flag \'\\\^\' pending\
0x0004 - lowercase flag \'\\v\' pending\
0x0008 - last string ended within an HTML tag\
0x0010 - last string ended in double-quoted HTML tag attribute text\
0x0020 - last string ended in single-quoted HTML tag attribute text\
0x0040 - last string ended with an ordinary space\
0x0080 - last string ended with a quoted space \'\\ \'\
0x0100 - \<Q\> parity level: 0=double quotes, 1=single quotes\
0x0300 - distance from last \'\\t\' tab column (0..3)
:::

[]{#tag_}

`tag_`

[\_main.t](../file/_main.t.html)\[[1173](../source/_main.t.html#1173)\]

::: desc
tag in progress at end of last string parsed
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#resetLine}

`resetLine ( )`

[\_main.t](../file/_main.t.html)\[[1149](../source/_main.t.html#1149)\]

::: desc
Explicitly reset to the start of a line. This can be called after a
non-output operation that resets the line position, such as reading an
input line.
:::

[]{#resetState}

`resetState ( )`

[\_main.t](../file/_main.t.html)\[[1138](../source/_main.t.html#1138)\]

::: desc
Reset the state. This should be used when the output stream context is
reset, such as when clearing the window.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
