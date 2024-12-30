[Scene]{.title}[class]{.type}

[scene.t](../file/scene.t.html)\[[98](../source/scene.t.html#98)\],
[scenetopic.t](../file/scenetopic.t.html)\[[7](../source/scenetopic.t.html#7)\]

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
A Scene is an object that represents a slice of time that starts and
ends according to specified conditions, and which can define what
happens when it starts and ends and also what happens each turn when it
is happening.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[7](../source/scenetopic.t.html#7)\]:*\
Modifications to Scene for the SCENETOPIC EXTENSION

`class `**`Scene`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Scene`**\
`         object`\
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

` `[`endedAt`](#endedAt)`  `[`endsWhen`](#endsWhen)`  `[`hasHappened`](#hasHappened)`  `[`howEnded`](#howEnded)`  `[`isHappening`](#isHappening)`  `[`notifySingleActor`](#notifySingleActor)`  `[`recurring`](#recurring)`  `[`startedAt`](#startedAt)`  `[`startsWhen`](#startsWhen)`  `[`timesHappened`](#timesHappened)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`afterAction`](#afterAction)`  `[`beforeAction`](#beforeAction)`  `[`eachTurn`](#eachTurn)`  `[`end`](#end)`  `[`notifyActors`](#notifyActors)`  `[`start`](#start)`  `[`whenEnding`](#whenEnding)`  `[`whenStarting`](#whenStarting)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#endedAt}

`endedAt`

[scene.t](../file/scene.t.html)\[[129](../source/scene.t.html#129)\]

::: desc
The turn this scene ended at
:::

[]{#endsWhen}

`endsWhen`

[scene.t](../file/scene.t.html)\[[110](../source/scene.t.html#110)\]

::: desc
an expression or method that evaluates to something other than nil when
you want the scene to end
:::

[]{#hasHappened}

`hasHappened`

[scene.t](../file/scene.t.html)\[[185](../source/scene.t.html#185)\]

::: desc
Flag to show whether this scene has ever happened.
:::

[]{#howEnded}

`howEnded`

[scene.t](../file/scene.t.html)\[[191](../source/scene.t.html#191)\]

::: desc
A user defined flag showing how the scene ended
:::

[]{#isHappening}

`isHappening`

[scene.t](../file/scene.t.html)\[[123](../source/scene.t.html#123)\]

::: desc
Is this scene currently taking place? (Game code should treat this as
read-only)
:::

[]{#notifySingleActor}

`notifySingleActor`

[scenetopic.t](../file/scenetopic.t.html)\[[73](../source/scenetopic.t.html#73)\]

::: desc
Flag (for use with SceneTopic extension): do we want to trigger a
SceneTopic response from every actor the player char can talk to, or
only the first one we find? By default we assume we want a response from
only one actor. Note that the Actor notificationOrder property can be
defined so that we can select which Actor this will be (the one with the
lowest notificationOrder). \[SCENETOPIC EXTENSION\]
:::

[]{#recurring}

`recurring`

[scene.t](../file/scene.t.html)\[[117](../source/scene.t.html#117)\]

::: desc
Normally a scene will only occur once. Set recurring to true if you want
the scene to start again every time its startsWhen condition is true.
:::

[]{#startedAt}

`startedAt`

[scene.t](../file/scene.t.html)\[[126](../source/scene.t.html#126)\]

::: desc
The turn this scene started at
:::

[]{#startsWhen}

`startsWhen`

[scene.t](../file/scene.t.html)\[[104](../source/scene.t.html#104)\]

::: desc
An expression or method that evaluates to true when you want the scene
to start
:::

[]{#timesHappened}

`timesHappened`

[scene.t](../file/scene.t.html)\[[188](../source/scene.t.html#188)\]

::: desc
The numbter of times this scene has happened.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#afterAction}

`afterAction ( )`

[scene.t](../file/scene.t.html)\[[203](../source/scene.t.html#203)\]

::: desc
This method is called on every active Scene just after an action has
taken place. By default we do nothing here.
:::

[]{#beforeAction}

`beforeAction ( )`

[scene.t](../file/scene.t.html)\[[197](../source/scene.t.html#197)\]

::: desc
This method is called on every active Scene just before an action is
about to take place. By default we do nothing here.
:::

[]{#eachTurn}

`eachTurn ( )`

[scene.t](../file/scene.t.html)\[[182](../source/scene.t.html#182)\]

::: desc
Routine to execute every turn this scene is in progress.
:::

[]{#end}

`end ( )`

[scene.t](../file/scene.t.html)\[[154](../source/scene.t.html#154)\],
[scenetopic.t](../file/scenetopic.t.html)\[[11](../source/scenetopic.t.html#11)\]

::: desc
The method executed when this Scene ends. Game code should normally
override whenStarting() rather than this method.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[11](../source/scenetopic.t.html#11)\]:*\
Modified for SceneTopic Extension to notify any actor that we can talk
to that this scene has ended.
:::

[]{#notifyActors}

`notifyActors (prop)`

[scenetopic.t](../file/scenetopic.t.html)\[[32](../source/scenetopic.t.html#32)\]

::: desc
Notify any actor that we can talk to that this scene has started
:::

[]{#start}

`start ( )`

[scene.t](../file/scene.t.html)\[[135](../source/scene.t.html#135)\],
[scenetopic.t](../file/scenetopic.t.html)\[[23](../source/scenetopic.t.html#23)\]

::: desc
The method executed when this Scene starts. Game code should normally
override whenStarting() rather than this method.

*Modified in
[scenetopic.t](../file/scenetopic.t.html)\[[23](../source/scenetopic.t.html#23)\]:*\
Modified for SceneTopic Extension to notify any actor that we can talk
to that this scene has started.
:::

[]{#whenEnding}

`whenEnding ( )`

[scene.t](../file/scene.t.html)\[[179](../source/scene.t.html#179)\]

::: desc
Routine to execute when this scene ends
:::

[]{#whenStarting}

`whenStarting ( )`

[scene.t](../file/scene.t.html)\[[176](../source/scene.t.html#176)\]

::: desc
Routine to execute when this scene starts
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
