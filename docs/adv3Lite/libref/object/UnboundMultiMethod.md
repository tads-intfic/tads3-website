[UnboundMultiMethod]{.title}[class]{.type}

[multmeth.t](../file/multmeth.t.html)\[[413](../source/multmeth.t.html#413)\]

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
Unbound multi-method exception. This is thrown when a call to resolve a
multi-method fails to find a binding, meaning that there\'s no
definition of the method that matches the types of the arguments.

`class `**`UnboundMultiMethod`**` :   `[`Exception`](../object/Exception.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`UnboundMultiMethod`**\
`         `[`Exception`](../object/Exception.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`UnboundMultiMethod`**\
`         `[`UnboundInheritedMultiMethod`](../object/UnboundInheritedMultiMethod.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`args_`](#args_)`  `[`func_`](#func_)`  `[`name_`](#name_)`  `

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

[]{#args_}

`args_`

[multmeth.t](../file/multmeth.t.html)\[[437](../source/multmeth.t.html#437)\]

::: desc
the number of arguments
:::

[]{#func_}

`func_`

[multmeth.t](../file/multmeth.t.html)\[[431](../source/multmeth.t.html#431)\]

::: desc
the base function pointer
:::

[]{#name_}

`name_`

[multmeth.t](../file/multmeth.t.html)\[[434](../source/multmeth.t.html#434)\]

::: desc
the symbol name of the base function
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (func, args)`[OVERRIDDEN]{.rem}

[multmeth.t](../file/multmeth.t.html)\[[414](../source/multmeth.t.html#414)\]

::: desc
*no description available*
:::

[]{#displayException}

`displayException ( )`[OVERRIDDEN]{.rem}

[multmeth.t](../file/multmeth.t.html)\[[425](../source/multmeth.t.html#425)\]

::: desc
display an error message describing the exception
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
