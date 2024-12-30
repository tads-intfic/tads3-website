[ReachProblemRemote]{.title}[class]{.type}

[senseRegion.t](../file/senseRegion.t.html)\[[1647](../source/senseRegion.t.html#1647)\]

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
The ReachProblemRemote should only be brought into play when an actor in
one room in a SenseRegion tries to touch an object in another room in
the SenseRegion when the SenseRegion defines autoGoTo as true. The
ReachProblemRemote will then be responsible for trying to move the actor
into the room containing the target object.

`class `**`ReachProblemRemote`**` :   `[`ReachProblem`](../object/ReachProblem.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ReachProblemRemote`**\
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

` `[`destRoom`](#destRoom)`  `[`origRoom`](#origRoom)`  `[`target`](#target)`  `

Inherited from `ReachProblem` :\
` `[`target_`](../object/ReachProblem.html#target_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`check`](#check)`  `[`construct`](#construct)`  `[`sayGoTo`](#sayGoTo)`  `[`tooFarAwayMsg`](#tooFarAwayMsg)`  `

Inherited from `ReachProblem` :\
` `[`verify`](../object/ReachProblem.html#verify)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#destRoom}

`destRoom`

[senseRegion.t](../file/senseRegion.t.html)\[[1656](../source/senseRegion.t.html#1656)\]

::: desc
*no description available*
:::

[]{#origRoom}

`origRoom`

[senseRegion.t](../file/senseRegion.t.html)\[[1655](../source/senseRegion.t.html#1655)\]

::: desc
*no description available*
:::

[]{#target}

`target`

[senseRegion.t](../file/senseRegion.t.html)\[[1657](../source/senseRegion.t.html#1657)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#check}

`check (allowImplicit)`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[1664](../source/senseRegion.t.html#1664)\]

::: desc
This check method may be called by the checkPreCondition method of the
touchObj PreCondition. Its effect is to try to move the actor into the
location of the object the actor is trying to touch.
:::

[]{#construct}

`construct (a, b)`[OVERRIDDEN]{.rem}

[senseRegion.t](../file/senseRegion.t.html)\[[1648](../source/senseRegion.t.html#1648)\]

::: desc
*no description available*
:::

[]{#sayGoTo}

`sayGoTo (destRoom)`

[senseRegion.t](../file/senseRegion.t.html)\[[1727](../source/senseRegion.t.html#1727)\]

::: desc
Report that we are trying to head to destRoom via an implicit action. We
do this separately from the normal implicit action report mechanism so
that this report is display before travel begins, not at the end of it
as it otherwise would be.
:::

[]{#tooFarAwayMsg}

`tooFarAwayMsg ( )`

[senseRegion.t](../file/senseRegion.t.html)\[[1715](../source/senseRegion.t.html#1715)\]

::: desc
The failure message to display if we can\'t attempt an implicit GoTo
action to move the actor.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
