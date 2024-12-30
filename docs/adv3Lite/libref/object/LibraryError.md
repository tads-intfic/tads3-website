[LibraryError]{.title}[class]{.type}

[misc.t](../file/misc.t.html)\[[2061](../source/misc.t.html#2061)\]

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
Library error. This is a base class for internal errors within the
library.

`class `**`LibraryError`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`LibraryError`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`LibraryError`**\
`         `[`ArgumentMismatchError`](../object/ArgumentMismatchError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`display`](#display)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

Inherited from `Exception` :\
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#display}

`display`

[misc.t](../file/misc.t.html)\[[2076](../source/misc.t.html#2076)\]

::: desc
As a debugging aid, break into the debugger, if it\'s running. This
makes it easier during development to track down where errors are
occurring. This has no effect during normal execution in the
interpreter, since the interpreter ignores this call when the debugger
isn\'t present.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct ( )`[OVERRIDDEN]{.rem}

[misc.t](../file/misc.t.html)\[[2062](../source/misc.t.html#2062)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
