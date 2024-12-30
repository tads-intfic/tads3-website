[ObjectPreCondition]{.title}[class]{.type}

[precond.t](../file/precond.t.html)\[[731](../source/precond.t.html#731)\]

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
A pre-condition that applies to a specific, pre-determined object,
rather than the direct/indirect object of the command.

`class `**`ObjectPreCondition`**` :   `[`PreCondition`](../object/PreCondition.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ObjectPreCondition`**\
`         `[`PreCondition`](../object/PreCondition.html)\
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

` `[`cond_`](#cond_)`  `[`obj_`](#obj_)`  `[`preCondOrder`](#preCondOrder)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`checkPreCondition`](#checkPreCondition)`  `[`construct`](#construct)`  `[`verifyPreCondition`](#verifyPreCondition)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#cond_}

`cond_`

[precond.t](../file/precond.t.html)\[[762](../source/precond.t.html#762)\]

::: desc
the pre-condition we check
:::

[]{#obj_}

`obj_`

[precond.t](../file/precond.t.html)\[[759](../source/precond.t.html#759)\]

::: desc
the object we check with the condition
:::

[]{#preCondOrder}

`preCondOrder`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[756](../source/precond.t.html#756)\]

::: desc
use the same order as our underlying condition
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkPreCondition}

`checkPreCondition (obj, allowImplicit)`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[743](../source/precond.t.html#743)\]

::: desc
route our check to the pre-condition using our specific object
:::

[]{#construct}

`construct (obj, cond)`

[precond.t](../file/precond.t.html)\[[732](../source/precond.t.html#732)\]

::: desc
*no description available*
:::

[]{#verifyPreCondition}

`verifyPreCondition (obj)`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[750](../source/precond.t.html#750)\]

::: desc
route our verification check to the pre-condition
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
