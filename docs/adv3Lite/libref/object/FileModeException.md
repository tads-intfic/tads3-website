[FileModeException]{.title}[class]{.type}

[file.t](../file/file.t.html)\[[166](../source/file.t.html#166)\]

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
File mode error - this is thrown when an attempted operation is
incompatible with the file\'s mode. This is thrown under these
conditions:

\- writing to a file opened for read-only access\
- reading from a file opened for write-only access\
- calling readFile or writeFile on a raw-mode file\
- calling readBytes or writeBytes on a non-raw-mode file

`class `**`FileModeException`**` :   `[`FileException`](../object/FileException.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FileModeException`**\
`         `[`FileException`](../object/FileException.html)\
`                 `[`Exception`](../object/Exception.html)\
`                         object`\
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

` `

` `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`displayException`](#displayException)`  `

` `

Inherited from `Exception` :\
` `[`construct`](../object/Exception.html#construct)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[file.t](../file/file.t.html)\[[167](../source/file.t.html#167)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
