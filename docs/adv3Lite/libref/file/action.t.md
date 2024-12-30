[action.t]{.title}[file]{.type}

[source file](../source/action.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
action.t This module forms part of the adv3Lite library (c) 2012-13 Eric
Eve
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`Action`](../object/Action.html)`  `[`IAction`](../object/IAction.html)`  `[`LiteralAction`](../object/LiteralAction.html)`  `[`LiteralTAction`](../object/LiteralTAction.html)`  `[`NumericAction`](../object/NumericAction.html)`  `[`NumericTAction`](../object/NumericTAction.html)`  `[`PostRestoreObject`](../object/PostRestoreObject.html)`  `[`PostUndoObject`](../object/PostUndoObject.html)`  `[`PreRestartObject`](../object/PreRestartObject.html)`  `[`PreSaveObject`](../object/PreSaveObject.html)`  `[`SystemAction`](../object/SystemAction.html)`  `[`TAction`](../object/TAction.html)`  `[`TIAction`](../object/TIAction.html)`  `[`TopicAction`](../object/TopicAction.html)`  `[`TopicTAction`](../object/TopicTAction.html)`  `[`TravelAction`](../object/TravelAction.html)`  `[`VerifyResult`](../object/VerifyResult.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

*(none)* []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`askChooseObject`](#askChooseObject)`  `[`askMissingObject`](#askMissingObject)`  `[`execNestedAction`](#execNestedAction)`  `[`nestedAction`](#nestedAction)`  `[`nestedActorAction`](#nestedActorAction)`  `[`noHalt`](#noHalt)`  `[`notePronounAntecedent`](#notePronounAntecedent)`  `[`replaceAction`](#replaceAction)`  `[`replaceActorAction`](#replaceActorAction)`  `[`tryImplicitAction`](#tryImplicitAction)`  `[`tryImplicitActorAction`](#tryImplicitActorAction)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#askChooseObject}

`askChooseObject (action, role, msg)`

[action.t](../file/action.t.html)\[[3251](../source/action.t.html#3251)\]

::: desc
This function displays msg, which should be a message inviting the
player to choose a suitable object for action in role (DirectObject,
IndirectObject or AccessoryObject). The action will then be performed
using the selected object in role.
:::

[]{#askMissingObject}

`askMissingObject (action, role)`

[action.t](../file/action.t.html)\[[3093](../source/action.t.html#3093)\]

::: desc
Ask for a missing object to fulfil role in action. First see if there\'s
a uniquely best match to fill the role, and if so execute the action
with that object. Otherwise ask the player to supply an object.
:::

[]{#execNestedAction}

`execNestedAction (isReplacement, actor, action, [objs])`

[action.t](../file/action.t.html)\[[2965](../source/action.t.html#2965)\]

::: desc
Execute a fully-constructed nested action.

\'isReplacement\' indicates whether the action is a full replacement or
an ordinary nested action. If it\'s a replacement, then we use the game
time taken by the replacement, and set the enclosing action (i.e., the
current gAction) to take zero time. If it\'s an ordinary nested action,
then we consider the nested action to take zero time, using the current
action\'s time as the overall command time.

\'isRemapping\' indicates whether or not this is a remapped action. If
we\'re remapping from one action to another, this will be true; for any
other kind of nested or replacement action, this should be nil.
:::

[]{#nestedAction}

`nestedAction (action, [objs])`

[action.t](../file/action.t.html)\[[2944](../source/action.t.html#2944)\]

::: desc
Run a nested action for the current actor.
:::

[]{#nestedActorAction}

`nestedActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2938](../source/action.t.html#2938)\]

::: desc
Run a nested action; execution of the parent action continues once the
nested action is complete.
:::

[]{#noHalt}

`noHalt ( )`

[action.t](../file/action.t.html)\[[1542](../source/action.t.html#1542)\]

::: desc
This function can be called from a check nethod to prevent the display
of text from within the check method halting the action. Calling it from
anywhere else will have no effect. It\'s use is in conjunction with the
TAction class defined immediatelty below.
:::

[]{#notePronounAntecedent}

`notePronounAntecedent ([objlist])`

[action.t](../file/action.t.html)\[[3350](../source/action.t.html#3350)\]

::: desc
Note the objects in objlist as potential pronoun antecedents
:::

[]{#replaceAction}

`replaceAction (action, [objs])`

[action.t](../file/action.t.html)\[[2913](../source/action.t.html#2913)\]

::: desc
Run a replacement action.
:::

[]{#replaceActorAction}

`replaceActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2923](../source/action.t.html#2923)\]

::: desc
Run a replacement action for another actor.
:::

[]{#tryImplicitAction}

`tryImplicitAction (action, [objs])`

[action.t](../file/action.t.html)\[[2798](../source/action.t.html#2798)\]

::: desc
Try action as an implicit action with \[objs\] as its objects
:::

[]{#tryImplicitActorAction}

`tryImplicitActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2878](../source/action.t.html#2878)\]

::: desc
Have an actor other than the current gActor try an implicit action (e.g.
if an npc moving as the result of an AgendaItem needs to implicitly open
a door to proceed): actor is the actor performing the action, action is
the action object to be performs, \[objs\] is the list of objects (if
any) on which the action is to be performed.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
