[TravelAction]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[1182](../source/action.t.html#1182)\]

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
A TravelAction is one that moves (or at least tries to move) the player
character from one place to another via a command like GO NORTH, or
EAST.

`class `**`TravelAction`**` :   `[`Action`](../object/Action.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TravelAction`**\
`         `[`Action`](../object/Action.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`Go`](../object/Go.html)`  `[`GoIn`](../object/GoIn.html)`  `[`GoOut`](../object/GoOut.html)`  `[`KeepGoing`](../object/KeepGoing.html)`  `[`Travel`](../object/Travel.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`baseActionClass`](#baseActionClass)`  `[`canUndo`](#canUndo)`  `[`direction`](#direction)`  `[`predefinedDirection`](#predefinedDirection)`  `

Inherited from `Action` :\
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`againRepeatsParse`](../object/Action.html#againRepeatsParse)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`includeInUndo`](../object/Action.html#includeInUndo)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`isRepeatable`](../object/Action.html#isRepeatable)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`timeTaken`](../object/Action.html#timeTaken)`  `[`turnsTaken`](../object/Action.html#turnsTaken)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doTravel`](#doTravel)`  `[`execAction`](#execAction)`  `[`execCycle`](#execCycle)`  `

Inherited from `Action` :\
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`afterAction`](../object/Action.html#afterAction)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`exec`](../object/Action.html#exec)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`scoreObjects`](../object/Action.html#scoreObjects)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`turnSequence`](../object/Action.html#turnSequence)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#baseActionClass}

`baseActionClass`

[action.t](../file/action.t.html)\[[1184](../source/action.t.html#1184)\]

::: desc
*no description available*
:::

[]{#canUndo}

`canUndo`

[action.t](../file/action.t.html)\[[1533](../source/action.t.html#1533)\]

::: desc
It\'s generally possible to undo a travel command.
:::

[]{#direction}

`direction`

[action.t](../file/action.t.html)\[[1530](../source/action.t.html#1530)\]

::: desc
The direction the actor wants to travel in. This is placed here by the
execCycle method and takes the form of A Direction object, e.g.
northDir.
:::

[]{#predefinedDirection}

`predefinedDirection`

[action.t](../file/action.t.html)\[[1214](../source/action.t.html#1214)\]

::: desc
Does this TravelAction already define a set direction on its direction
property (so we don\'t need to look to what direction object the command
refers)?
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doTravel}

`doTravel ( )`

[action.t](../file/action.t.html)\[[1299](../source/action.t.html#1299)\]

::: desc
Carry out travel in direction. For this purpose we first have to define
what the corresponding direction property of the actor\'s current
location refers to. If it\'s nil, no travel is possible, and we simply
display a refusal message. If it\'s an object we execute its travelVia()
method for the current actor. If it\'s a double-quoted string or a
method we execute it and make a note of where the actor ends up, if the
actor is the player character. If it\'s a single-quoted string we
display it.

Note that we only display the various messages announcing failure of
travel if the actor is the player character. We presumably don\'t want
to see these messages as the result of NPCs trying to move around the
map.
:::

[]{#execAction}

`execAction (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1220](../source/action.t.html#1220)\]

::: desc
Execute the travel command, first carrying out any implicit actions
needed to facilitate travel
:::

[]{#execCycle}

`execCycle (cmd)`[OVERRIDDEN]{.rem}

[action.t](../file/action.t.html)\[[1190](../source/action.t.html#1190)\]

::: desc
Use the inherited handling but first make a note of the direction the
actor wants to travel in.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::