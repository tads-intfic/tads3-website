---
layout: docs
---
<span class="title">PreCondition</span><span class="type">class</span>

[precond.t](../file/precond.t.html)\[[23](../source/precond.t.html#23)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



An action pre-condition object. Each condition of an action is
represented by a subclass of this class.

`class `**`PreCondition`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PreCondition`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PreCondition`**  
[`ObjectPreCondition`](../object/ObjectPreCondition.html)  
[`ObjOpenCondition`](../object/ObjOpenCondition.html)  
[`SameLocationCondition`](../object/SameLocationCondition.html)  
[`TouchObjCondition`](../object/TouchObjCondition.html)  
[`TravelerDirectlyInRoom`](../object/TravelerDirectlyInRoom.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`actorDirectlyInRoom`](../object/actorDirectlyInRoom.html)[`actorReadyToEnterNestedRoom`](../object/actorReadyToEnterNestedRoom.html)[`actorStanding`](../object/actorStanding.html)[`actorTravelReady`](../object/actorTravelReady.html)[`canTalkToObj`](../object/canTalkToObj.html)[`dropDestinationIsOuterRoom`](../object/dropDestinationIsOuterRoom.html)[`nearbyAttachableCond`](../object/nearbyAttachableCond.html)[`objAudible`](../object/objAudible.html)[`objBurning`](../object/objBurning.html)[`objClosed`](../object/objClosed.html)[`objEmpty`](../object/objEmpty.html)[`objHeld`](../object/objHeld.html)[`objNotAttached`](../object/objNotAttached.html)[`objNotWorn`](../object/objNotWorn.html)[`objSmellable`](../object/objSmellable.html)[`objUnlocked`](../object/objUnlocked.html)[`objVisible`](../object/objVisible.html)[`roomToHoldObj`](../object/roomToHoldObj.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`preCondOrder`](#preCondOrder)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkPreCondition`](#checkPreCondition)[`verifyPreCondition`](#verifyPreCondition)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="preCondOrder"></span>

`preCondOrder`

[precond.t](../file/precond.t.html)\[[67](../source/precond.t.html#67)\]



Precondition execution order. When we execute preconditions for a given
action, we'll sort the list of all applicable preconditions in ascending
execution order.

For the most part, the relative order of two preconditions is arbitrary.
In some unusual cases, though, the order is important, such as when
applying one precondition can destroy the conditions that the other
would try to create but not vice versa. When the order doesn't matter,
this can be left at the default setting.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkPreCondition"></span>

`checkPreCondition (obj, allowImplicit)`

[precond.t](../file/precond.t.html)\[[36](../source/precond.t.html#36)\]



Check the condition on the given object (which may be nil, if this
condition doesn't apply specifically to one of the objects in the
command). If it is possible to meet the condition with an implicit
command, and allowImplicit is true, try to execute the command. If the
condition cannot be met, report a failure and use 'exit' to terminate
the command.

If allowImplicit is nil, an implicit command may not be attempted. In
this case, if the condition is not met, we must simply report a failure
and use 'exit' to terminate the command.



<span id="verifyPreCondition"></span>

`verifyPreCondition (obj)`

[precond.t](../file/precond.t.html)\[[54](../source/precond.t.html#54)\]



Verify the condition. This is called during the object verification step
so that the pre-condition can add verifications of its own. This can be
used, for example, to add likelihood to objects that already meet the
condition. Note that it is generally not desirable to report illogical
for conditions that checkPreCondition() enforces, because doing so will
prevent checkPreCondition() from ever being reached and thus will
prevent checkPreCondition() from attempting to carry out implicit
actions to meet the condition.

'obj' is the object being checked. Note that because this is called
during verification, the explicitly passed-in object must be used in the
check rather than the current object in the global current action.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


