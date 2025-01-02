<span class="title">action.t</span><span class="type">file</span>

[source file](../source/action.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
action.t This module forms part of the adv3Lite library (c) 2012-13 Eric
Eve

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`Action`](../object/Action.html)`  `[`IAction`](../object/IAction.html)`  `[`LiteralAction`](../object/LiteralAction.html)`  `[`LiteralTAction`](../object/LiteralTAction.html)`  `[`NumericAction`](../object/NumericAction.html)`  `[`NumericTAction`](../object/NumericTAction.html)`  `[`PostRestoreObject`](../object/PostRestoreObject.html)`  `[`PostUndoObject`](../object/PostUndoObject.html)`  `[`PreRestartObject`](../object/PreRestartObject.html)`  `[`PreSaveObject`](../object/PreSaveObject.html)`  `[`SystemAction`](../object/SystemAction.html)`  `[`TAction`](../object/TAction.html)`  `[`TIAction`](../object/TIAction.html)`  `[`TopicAction`](../object/TopicAction.html)`  `[`TopicTAction`](../object/TopicTAction.html)`  `[`TravelAction`](../object/TravelAction.html)`  `[`VerifyResult`](../object/VerifyResult.html)`  `
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`askChooseObject`](#askChooseObject)`  `[`askMissingObject`](#askMissingObject)`  `[`execNestedAction`](#execNestedAction)`  `[`nestedAction`](#nestedAction)`  `[`nestedActorAction`](#nestedActorAction)`  `[`noHalt`](#noHalt)`  `[`notePronounAntecedent`](#notePronounAntecedent)`  `[`replaceAction`](#replaceAction)`  `[`replaceActorAction`](#replaceActorAction)`  `[`tryImplicitAction`](#tryImplicitAction)`  `[`tryImplicitActorAction`](#tryImplicitActorAction)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="askChooseObject"></span>

`askChooseObject (action, role, msg)`

[action.t](../file/action.t.html)\[[3251](../source/action.t.html#3251)\]

<div class="desc">

This function displays msg, which should be a message inviting the
player to choose a suitable object for action in role (DirectObject,
IndirectObject or AccessoryObject). The action will then be performed
using the selected object in role.

</div>

<span id="askMissingObject"></span>

`askMissingObject (action, role)`

[action.t](../file/action.t.html)\[[3093](../source/action.t.html#3093)\]

<div class="desc">

Ask for a missing object to fulfil role in action. First see if there's
a uniquely best match to fill the role, and if so execute the action
with that object. Otherwise ask the player to supply an object.

</div>

<span id="execNestedAction"></span>

`execNestedAction (isReplacement, actor, action, [objs])`

[action.t](../file/action.t.html)\[[2965](../source/action.t.html#2965)\]

<div class="desc">

Execute a fully-constructed nested action.

'isReplacement' indicates whether the action is a full replacement or an
ordinary nested action. If it's a replacement, then we use the game time
taken by the replacement, and set the enclosing action (i.e., the
current gAction) to take zero time. If it's an ordinary nested action,
then we consider the nested action to take zero time, using the current
action's time as the overall command time.

'isRemapping' indicates whether or not this is a remapped action. If
we're remapping from one action to another, this will be true; for any
other kind of nested or replacement action, this should be nil.

</div>

<span id="nestedAction"></span>

`nestedAction (action, [objs])`

[action.t](../file/action.t.html)\[[2944](../source/action.t.html#2944)\]

<div class="desc">

Run a nested action for the current actor.

</div>

<span id="nestedActorAction"></span>

`nestedActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2938](../source/action.t.html#2938)\]

<div class="desc">

Run a nested action; execution of the parent action continues once the
nested action is complete.

</div>

<span id="noHalt"></span>

`noHalt ( )`

[action.t](../file/action.t.html)\[[1542](../source/action.t.html#1542)\]

<div class="desc">

This function can be called from a check nethod to prevent the display
of text from within the check method halting the action. Calling it from
anywhere else will have no effect. It's use is in conjunction with the
TAction class defined immediatelty below.

</div>

<span id="notePronounAntecedent"></span>

`notePronounAntecedent ([objlist])`

[action.t](../file/action.t.html)\[[3350](../source/action.t.html#3350)\]

<div class="desc">

Note the objects in objlist as potential pronoun antecedents

</div>

<span id="replaceAction"></span>

`replaceAction (action, [objs])`

[action.t](../file/action.t.html)\[[2913](../source/action.t.html#2913)\]

<div class="desc">

Run a replacement action.

</div>

<span id="replaceActorAction"></span>

`replaceActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2923](../source/action.t.html#2923)\]

<div class="desc">

Run a replacement action for another actor.

</div>

<span id="tryImplicitAction"></span>

`tryImplicitAction (action, [objs])`

[action.t](../file/action.t.html)\[[2798](../source/action.t.html#2798)\]

<div class="desc">

Try action as an implicit action with \[objs\] as its objects

</div>

<span id="tryImplicitActorAction"></span>

`tryImplicitActorAction (actor, action, [objs])`

[action.t](../file/action.t.html)\[[2878](../source/action.t.html#2878)\]

<div class="desc">

Have an actor other than the current gActor try an implicit action (e.g.
if an npc moving as the result of an AgendaItem needs to implicitly open
a door to proceed): actor is the actor performing the action, action is
the action object to be performs, \[objs\] is the list of objects (if
any) on which the action is to be performed.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>