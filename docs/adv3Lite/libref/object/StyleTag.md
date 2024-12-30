[StyleTag]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[920](../source/output.t.html#920)\]

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
Style tag. This defines an HTML-like tag that can be used in output text
to display an author-customizable substitution string.

Each StyleTag object defines the name of the tag, which can be invoked
in output text using the syntax \"\<.name\>\" - we require the period
after the opening angle-bracket to plainly distinguish the sequence as a
style tag, not a regular HTML tag.

Each StyleTag also defines the text string that should be substituted
for each occurrence of the \"\<.name\>\" sequence in output text, and,
optionally, another string that is substituted for occurrences of the
\"closing\" version of the tag, invoked with the syntax \"\<./name\>\".

`class `**`StyleTag`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StyleTag`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`StyleTag`**\
`         `[`HtmlStyleTag`](../object/HtmlStyleTag.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`announceObjStyleTag`](../object/announceObjStyleTag.html)`  `[`assumeStyleTag`](../object/assumeStyleTag.html)`  `[`extraHintStyleTag`](../object/extraHintStyleTag.html)`  `[`notificationStyleTag`](../object/notificationStyleTag.html)`  `[`parserStyleTag`](../object/parserStyleTag.html)`  `[`roomcontentsStyleTag`](../object/roomcontentsStyleTag.html)`  `[`roomdescStyleTag`](../object/roomdescStyleTag.html)`  `[`roomnameStyleTag`](../object/roomnameStyleTag.html)`  `[`roomparaStyleTag`](../object/roomparaStyleTag.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`closeText`](#closeText)`  `[`openText`](#openText)`  `[`tagName`](#tagName)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `

*(none)* []{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#closeText}

`closeText`

[output.t](../file/output.t.html)\[[935](../source/output.t.html#935)\]

::: desc
Closing text - this is substituted for each instance of the tag with a
\'/\' prefix (\<./xxx\>). Note that non-container tags don\'t have
closing text at all.
:::

[]{#openText}

`openText`

[output.t](../file/output.t.html)\[[928](../source/output.t.html#928)\]

::: desc
opening text - this is substituted for each instance of the tag without
a \'/\' prefix
:::

[]{#tagName}

`tagName`

[output.t](../file/output.t.html)\[[922](../source/output.t.html#922)\]

::: desc
name of the tag - the tag appears in source text in \<.xxx\> notation
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
