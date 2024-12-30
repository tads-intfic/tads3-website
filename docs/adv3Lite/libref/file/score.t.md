[score.t]{.title}[file]{.type}

[source file](../source/score.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
Lightly adapted for adv3Lite by Eric Eve

TADS 3 Library - scoring

This module defines objects related to keeping track of the player\'s
score, which indicates the player\'s progress through the game.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`Achievement`](../object/Achievement.html)`  `[`SimpleAchievement`](../object/SimpleAchievement.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`fullScoreLister`](../object/fullScoreLister.html)`  `[`libScore`](../object/libScore.html)`  `[`scoreNotifier`](../object/scoreNotifier.html)`  `[`scoreNotifySettingsItem`](../object/scoreNotifySettingsItem.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`addToScore`](#addToScore)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#addToScore}

`addToScore (points, desc)`

[score.t](../file/score.t.html)\[[327](../source/score.t.html#327)\]

::: desc
Add points to the total score. This is a convenience function that
simply calls libScore.addToScore\_().
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
