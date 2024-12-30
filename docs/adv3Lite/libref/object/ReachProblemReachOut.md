[ReachProblemReachOut]{.title}[class]{.type}

[query.t](../file/query.t.html)\[[1188](../source/query.t.html#1188)\]

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
A ReachProblem object for when the actor can\'t reach the target from
the actor\'s (non top-level room) container.

`class `**`ReachProblemReachOut`**` :   `[`ReachProblem`](../object/ReachProblem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ReachProblemReachOut`**\
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

` `

Inherited from `ReachProblem` :\
` `[`target_`](../object/ReachProblem.html#target_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`check`](#check)`  `

Inherited from `ReachProblem` :\
` `[`construct`](../object/ReachProblem.html#construct)`  `[`verify`](../object/ReachProblem.html#verify)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#check}

`check (allowImplicit)`[OVERRIDDEN]{.rem}

[query.t](../file/query.t.html)\[[1194](../source/query.t.html#1194)\]

::: desc
If allowImplicit is true we can try moving the actor out of its
immediate container to see if this solves the problem. If it does,
return true; otherwise return nil.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
