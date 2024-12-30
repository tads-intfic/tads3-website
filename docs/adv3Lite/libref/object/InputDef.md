[InputDef]{.title}[class]{.type}

[input.t](../file/input.t.html)\[[23](../source/input.t.html#23)\]

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
Keyboard input parameter definition.

`class `**`InputDef`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`InputDef`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`InputDef`**\
`         `[`BasicInputDef`](../object/BasicInputDef.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`promptFunc`](#promptFunc)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`beginInputFont`](#beginInputFont)`  `[`endInputFont`](#endInputFont)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#promptFunc}

`promptFunc`

[input.t](../file/input.t.html)\[[30](../source/input.t.html#30)\]

::: desc
The prompt function. This is a function pointer (which is frequently
given as an anonymous function) or nil; if it\'s nil, we won\'t show any
prompt at all, otherwise we\'ll call the function pointer to display a
prompt as needed.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#beginInputFont}

`beginInputFont ( )`

[input.t](../file/input.t.html)\[[39](../source/input.t.html#39)\]

::: desc
Begin the input style. This should do anything required to set the font
to the desired attributes for the input text. By default, we\'ll simply
display \<.inputline\> to set up the default input style.
:::

[]{#endInputFont}

`endInputFont ( )`

[input.t](../file/input.t.html)\[[45](../source/input.t.html#45)\]

::: desc
End the input style. By default, we\'ll close the \<.inputline\> that we
opened in beginInputFont().
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
