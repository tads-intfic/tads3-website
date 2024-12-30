[scoreNotifier]{.title}[object]{.type}

[score.t](../file/score.t.html)\[[234](../source/score.t.html#234)\]

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
Score notification daemon handler. We\'ll receive a checkNotification()
call each turn; we\'ll display a notification message each time the
score has changed since the last time we ran.

**`scoreNotifier`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`scoreNotifier`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`everNotified`](#everNotified)`  `[`lastScore`](#lastScore)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`basicScoreChange`](#basicScoreChange)`  `[`checkNotification`](#checkNotification)`  `[`firstScoreChange`](#firstScoreChange)`  `[`scoreChange`](#scoreChange)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#everNotified}

`everNotified`

[score.t](../file/score.t.html)\[[239](../source/score.t.html#239)\]

::: desc
we\'ve never generated a notification about the score before
:::

[]{#lastScore}

`lastScore`

[score.t](../file/score.t.html)\[[236](../source/score.t.html#236)\]

::: desc
the score as it was the last time we displayed a notification
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#basicScoreChange}

`basicScoreChange (delta)`

[score.t](../file/score.t.html)\[[306](../source/score.t.html#306)\]

::: desc
basic score change notification message - this is an internal service
routine for scoreChange and firstScoreChange
:::

[]{#checkNotification}

`checkNotification ( )`

[score.t](../file/score.t.html)\[[242](../source/score.t.html#242)\]

::: desc
daemon entrypoint
:::

[]{#firstScoreChange}

`firstScoreChange (delta)`

[score.t](../file/score.t.html)\[[290](../source/score.t.html#290)\]

::: desc
score change - first notification
:::

[]{#scoreChange}

`scoreChange (delta)`

[score.t](../file/score.t.html)\[[296](../source/score.t.html#296)\]

::: desc
score change - notification other than the first time
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
