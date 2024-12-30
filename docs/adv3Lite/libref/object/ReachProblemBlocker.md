[ReachProblemBlocker]{.title}[class]{.type}

[query.t](../file/query.t.html)\[[1115](../source/query.t.html#1115)\]

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
A ReachProblem object for when access to the target is blocked by a
closed container along the path from the source to the target.

`class `**`ReachProblemBlocker`**` :   `[`ReachProblem`](../object/ReachProblem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ReachProblemBlocker`**\
`         `[`ReachProblem`](../object/ReachProblem.html)\
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

` `[`obstructor_`](#obstructor_)`  `

Inherited from `ReachProblem` :\
` `[`target_`](../object/ReachProblem.html#target_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`reachBlockedMsg`](#reachBlockedMsg)`  `[`verify`](#verify)`  `

Inherited from `ReachProblem` :\
` `[`check`](../object/ReachProblem.html#check)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#obstructor_}

`obstructor_`

[query.t](../file/query.t.html)\[[1134](../source/query.t.html#1134)\]

::: desc
The closed container that is preventing access to the target object the
actor is trying to reach.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (target, obstructor)`[OVERRIDDEN]{.rem}

[query.t](../file/query.t.html)\[[1136](../source/query.t.html#1136)\]

::: desc
*no description available*
:::

[]{#reachBlockedMsg}

`reachBlockedMsg ( )`

[query.t](../file/query.t.html)\[[1125](../source/query.t.html#1125)\]

::: desc
Delegate defining the message explaining that blocking is reached to the
blocking object.
:::

[]{#verify}

`verify ( )`[OVERRIDDEN]{.rem}

[query.t](../file/query.t.html)\[[1116](../source/query.t.html#1116)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
