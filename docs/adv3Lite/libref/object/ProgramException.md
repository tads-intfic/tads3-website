[ProgramException]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[872](../source/_main.t.html#872)\]

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
A Program Exception terminates the entire program, passing an error
indication to the operating system. The VM doesn\'t provide a way to
specify the \*particular\* error code to return to the OS, as there\'s
no portable set of error codes; rather, the VM simply returns a code to
the OS that means generically that an error occurred, if there\'s any
such concept on the local operating system. The VM will normally display
this message just before it terminates the program, possibly with some
additional text mentioning that a program error occurred (such as
\"unhandled exception: \<your message\>\").

`class `**`ProgramException`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ProgramException`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
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

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (msg)`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[873](../source/_main.t.html#873)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[874](../source/_main.t.html#874)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
