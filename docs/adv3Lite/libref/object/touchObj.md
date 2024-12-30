[touchObj]{.title}[object]{.type}

[precond.t](../file/precond.t.html)\[[607](../source/precond.t.html#607)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A PreCondition to check that an object can be touched (which is likely
to be needed for any action that manipulated the object). This
Precondition farms out as much of the detailed checking as possible to
the Query object.

**`touchObj`**` :   `[`PreCondition`](../object/PreCondition.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`touchObj`**\
`         `[`PreCondition`](../object/PreCondition.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`preCondOrder`](#preCondOrder)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`checkPreCondition`](#checkPreCondition)`  `[`verifyPreCondition`](#verifyPreCondition)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#preCondOrder}

`preCondOrder`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[650](../source/precond.t.html#650)\]

::: desc
If we reach here we\'ve passed all the checks, so return true to
indicate success.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkPreCondition}

`checkPreCondition (obj, allowImplicit)`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[623](../source/precond.t.html#623)\],
[senseRegion.t](../file/senseRegion.t.html)\[[1735](../source/senseRegion.t.html#1735)\]

::: desc
Run the verify method of any issues we found
:::

[]{#verifyPreCondition}

`verifyPreCondition (obj)`[OVERRIDDEN]{.rem}

[precond.t](../file/precond.t.html)\[[608](../source/precond.t.html#608)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
