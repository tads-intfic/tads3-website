[RuntimeError]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[777](../source/_main.t.html#777)\]

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
RuntimeError exception class. The VM creates and throws an instance of
this class when any run-time error occurs. The VM explicitly sets the
exceptionMessage property to a string giving the VM error message for
the run-time error that occurred.

`class `**`RuntimeError`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`RuntimeError`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`RuntimeError`**\
`         `[`StorageServerError`](../object/StorageServerError.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`errno_`](#errno_)`  `[`exceptionMessage`](#exceptionMessage)`  `[`stack_`](#stack_)`  `

Inherited from `Exception` :\
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `[`isDebuggerSignal`](#isDebuggerSignal)`  `[`newRuntimeError`](#newRuntimeError)`  `

Inherited from `Exception` :\
` `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errno_}

`errno_`

[\_main.t](../file/_main.t.html)\[[828](../source/_main.t.html#828)\]

::: desc
the VM error number of the exception
:::

[]{#exceptionMessage}

`exceptionMessage`

[\_main.t](../file/_main.t.html)\[[831](../source/_main.t.html#831)\]

::: desc
the exception message, provided to us by the VM after creation
:::

[]{#stack_}

`stack_`

[\_main.t](../file/_main.t.html)\[[834](../source/_main.t.html#834)\]

::: desc
the stack trace, which we store at the time we\'re created
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (errno, ...)`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[778](../source/_main.t.html#778)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[\_main.t](../file/_main.t.html)\[[809](../source/_main.t.html#809)\]

::: desc
display the exception
:::

[]{#isDebuggerSignal}

`isDebuggerSignal ( )`

[\_main.t](../file/_main.t.html)\[[819](../source/_main.t.html#819)\]

::: desc
check to see if it\'s a debugger signal of some kind
:::

[]{#newRuntimeError}

`newRuntimeError (errno, msg)`

[\_main.t](../file/_main.t.html)\[[801](../source/_main.t.html#801)\]

::: desc
create a runtime error with a given error message
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
