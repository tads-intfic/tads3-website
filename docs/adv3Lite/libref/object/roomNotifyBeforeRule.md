[roomNotifyBeforeRule]{.title}[object]{.type}

[sysrules.t](../file/sysrules.t.html)\[[312](../source/sysrules.t.html#312)\]

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
Call roomBeforeAction() on the current actor\'s location, and
regionBeforeAction() on all the regions it\'s in.

**`roomNotifyBeforeRule`**` :   `[`BeforeRule`](../object/BeforeRule.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`roomNotifyBeforeRule`**\
`         `[`BeforeRule`](../object/BeforeRule.html)\
`                 `[`Rule`](../object/Rule.html)\
`                         object`\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`priority`](#priority)`  `

Inherited from `BeforeRule` :\
` `[`currentAction`](../object/BeforeRule.html#currentAction)`  `[`location`](../object/BeforeRule.html#location)`  `

Inherited from `Rule` :\
` `[`action`](../object/Rule.html#action)`  `[`actor`](../object/Rule.html#actor)`  `[`aobj`](../object/Rule.html#aobj)`  `[`dobj`](../object/Rule.html#dobj)`  `[`during`](../object/Rule.html#during)`  `[`execAfter`](../object/Rule.html#execAfter)`  `[`execBefore`](../object/Rule.html#execBefore)`  `[`iobj`](../object/Rule.html#iobj)`  `[`isActive`](../object/Rule.html#isActive)`  `[`matchObj`](../object/Rule.html#matchObj)`  `[`present`](../object/Rule.html#present)`  `[`rulebook`](../object/Rule.html#rulebook)`  `[`rulebooks`](../object/Rule.html#rulebooks)`  `[`specificity`](../object/Rule.html#specificity)`  `[`stopValue`](../object/Rule.html#stopValue)`  `[`where`](../object/Rule.html#where)`  `[`who`](../object/Rule.html#who)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`follow`](#follow)`  `

` `

Inherited from `Rule` :\
` `[`activate`](../object/Rule.html#activate)`  `[`addTo`](../object/Rule.html#addTo)`  `[`calcSpecficity`](../object/Rule.html#calcSpecficity)`  `[`compareTo`](../object/Rule.html#compareTo)`  `[`deactivate`](../object/Rule.html#deactivate)`  `[`initializeRule`](../object/Rule.html#initializeRule)`  `[`matchConditions`](../object/Rule.html#matchConditions)`  `[`moveInto`](../object/Rule.html#moveInto)`  `[`removeFrom`](../object/Rule.html#removeFrom)`  `[`runAfter`](../object/Rule.html#runAfter)`  `[`runBefore`](../object/Rule.html#runBefore)`  `[`setRulebook`](../object/Rule.html#setRulebook)`  `[`when`](../object/Rule.html#when)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#priority}

`priority`[OVERRIDDEN]{.rem}

[sysrules.t](../file/sysrules.t.html)\[[322](../source/sysrules.t.html#322)\]

::: desc
Call roomBeforeAction() on the current actor\'s location, and
regionBeforeAction() on all the regions it\'s in.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#follow}

`follow ( )`[OVERRIDDEN]{.rem}

[sysrules.t](../file/sysrules.t.html)\[[313](../source/sysrules.t.html#313)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
