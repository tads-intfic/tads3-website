[libScore]{.title}[object]{.type}

[score.t](../file/score.t.html)\[[336](../source/score.t.html#336)\]

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
The main game score object.

**`libScore`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`libScore`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`fullScoreList`](#fullScoreList)`  `[`scoreNotify`](#scoreNotify)`  `[`totalScore`](#totalScore)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addToScore_`](#addToScore_)`  `[`calcMaxScore`](#calcMaxScore)`  `[`execute`](#execute)`  `[`runScoreNotifier`](#runScoreNotifier)`  `[`showFullScore`](#showFullScore)`  `[`showScore`](#showScore)`  `[`showScoreMessage`](#showScoreMessage)`  `[`showScoreNoMaxMessage`](#showScoreNoMaxMessage)`  `[`showScoreRank`](#showScoreRank)`  `[`showScoreRankMessage`](#showScoreRankMessage)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#fullScoreList}

`fullScoreList`

[score.t](../file/score.t.html)\[[511](../source/score.t.html#511)\]

::: desc
Vector for the full score achievement list. This is a list of all of the
Achievement objects awarded for accomplishments so far.
:::

[]{#scoreNotify}

`scoreNotify`

[score.t](../file/score.t.html)\[[521](../source/score.t.html#521)\]

::: desc
current score notification status - if on, we\'ll show a message at the
end of each turn where the score changes, otherwise we won\'t mention
anything
:::

[]{#totalScore}

`totalScore`

[score.t](../file/score.t.html)\[[514](../source/score.t.html#514)\]

::: desc
the total number of points scored so far
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addToScore_}

`addToScore_ (points, desc)`

[score.t](../file/score.t.html)\[[349](../source/score.t.html#349)\]

::: desc
Add to the score. \'points\' is the number of points to add to the
score, and \'desc\' is a string describing the reason the points are
being awarded, or an Achievement object describing the points.

We keep a list of each unique achievement. If \'desc\' is already in
this list, we\'ll simply add the given number of points to the existing
entry for the same description.

Note that, if \'desc\' is an Achievement object, it will match a
previous item only if it\'s exactly the same Achievement instance.
:::

[]{#calcMaxScore}

`calcMaxScore ( )`

[score.t](../file/score.t.html)\[[529](../source/score.t.html#529)\]

::: desc
Compute the sum of the maximum point values of the Achievement objects
in the game. Point values are optional in Achievement objects; if there
are no Achievement objects with non-nil point values, this will simply
return nil.
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[score.t](../file/score.t.html)\[[569](../source/score.t.html#569)\]

::: desc
execute pre-initialization
:::

[]{#runScoreNotifier}

`runScoreNotifier ( )`

[score.t](../file/score.t.html)\[[411](../source/score.t.html#411)\]

::: desc
Explicitly run the score notification daemon.
:::

[]{#showFullScore}

`showFullScore ( )`

[score.t](../file/score.t.html)\[[497](../source/score.t.html#497)\]

::: desc
Display the full score. \'explicit\' is true if the player asked for the
full score explicitly, as with a FULL SCORE command; if we\'re showing
the full score automatically in the course of some other action,
\'explicit\' should be nil.
:::

[]{#showScore}

`showScore ( )`

[score.t](../file/score.t.html)\[[420](../source/score.t.html#420)\]

::: desc
Show the simple score
:::

[]{#showScoreMessage}

`showScoreMessage (points, maxPoints, turns)`

[score.t](../file/score.t.html)\[[440](../source/score.t.html#440)\]

::: desc
show the basic score message
:::

[]{#showScoreNoMaxMessage}

`showScoreNoMaxMessage (points, turns)`

[score.t](../file/score.t.html)\[[449](../source/score.t.html#449)\]

::: desc
show the basic score message with no maximum
:::

[]{#showScoreRank}

`showScoreRank (points)`

[score.t](../file/score.t.html)\[[460](../source/score.t.html#460)\]

::: desc
show the score rank message
:::

[]{#showScoreRankMessage}

`showScoreRankMessage (msg)`

[score.t](../file/score.t.html)\[[485](../source/score.t.html#485)\]

::: desc
show the full message for a given score rank string
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
