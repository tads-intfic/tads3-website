[ReachProblem]{.title}[class]{.type}

[query.t](../file/query.t.html)\[[1055](../source/query.t.html#1055)\]

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
An object describing a reach problem; such objects are used by the Query
object to communicate problems with one object touching another to the
touchObj PreCondition (see also precond.t). ReachProblem objects are
normally created dynamicallty as required, although it is usually one of
the subclasses of ReachProblem that it used.

`class `**`ReachProblem`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ReachProblem`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ReachProblem`**\
`         `[`ReachProblemBlocker`](../object/ReachProblemBlocker.html)\
`         `[`ReachProblemCheckReach`](../object/ReachProblemCheckReach.html)\
`         `[`ReachProblemDistance`](../object/ReachProblemDistance.html)\
`         `[`ReachProblemReachOut`](../object/ReachProblemReachOut.html)\
`         `[`ReachProblemRemote`](../object/ReachProblemRemote.html)\
`         `[`ReachProblemVerifyReach`](../object/ReachProblemVerifyReach.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`target_`](#target_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`check`](#check)`  `[`construct`](#construct)`  `[`verify`](#verify)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#target_}

`target_`

[query.t](../file/query.t.html)\[[1083](../source/query.t.html#1083)\]

::: desc
The object we\'re trying to reach
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#check}

`check (allowImplicit)`

[query.t](../file/query.t.html)\[[1075](../source/query.t.html#1075)\]

::: desc
The check() method of a ReachProblem should check whether the target
object can be reached by the source object. If allowImplicit is true the
check method may attempt an implicit action to bring the target object
within reach.

Return true if the target object is within reach, and nil otherwise.

Note that the check() method of a ReachProblem will normally be called
from the checkPreCondition() method of touchObj.
:::

[]{#construct}

`construct (target)`

[query.t](../file/query.t.html)\[[1077](../source/query.t.html#1077)\]

::: desc
*no description available*
:::

[]{#verify}

`verify ( )`

[query.t](../file/query.t.html)\[[1062](../source/query.t.html#1062)\]

::: desc
Problems which reaching an object that occur at the verify stage and
which might affect the choice of object. If the verify() method of a
ReachProblem object wishes to rule out an action it should do so using
illogical(), inaccessible() or other such verification macros.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
