[FileSyncException]{.title}[class]{.type}

[file.t](../file/file.t.html)\[[135](../source/file.t.html#135)\]

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
File synchronization exception. This is thrown when an operation (such
as a read or write) is attempted during normal execution on a file
object that was originally opened during pre-initialization. A file
object created during pre-initialization can\'t be used to access the
file during ordinary execution, since the state of the external file
might have changed since the pre-init session ended. In such cases, a
new file object must be created instead.

`class `**`FileSyncException`**` :   `[`FileException`](../object/FileException.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FileSyncException`**\
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

[file.t](../file/file.t.html)\[[136](../source/file.t.html#136)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
