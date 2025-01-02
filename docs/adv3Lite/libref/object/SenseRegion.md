---
layout: docs
---
<span class="title">SenseRegion</span><span class="type">class</span>

[senseRegion.t](../file/senseRegion.t.html)\[[21](../source/senseRegion.t.html#21)\]

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



A SenseRegion is a special kind of Region allowing sensory connection
between rooms

`class `**`SenseRegion`**` :   `[`Region`](../object/Region.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SenseRegion`**  
[`Region`](../object/Region.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`autoGoTo`](#autoGoTo) [`canHearAcross`](#canHearAcross) [`canSeeAcross`](#canSeeAcross) [`canSmellAcross`](#canSmellAcross) [`canTalkAcross`](#canTalkAcross) [`canThrowAcross`](#canThrowAcross) [`contSpace`](#contSpace) [`fastGoTo`](#fastGoTo)

Inherited from `Region` :  
[`extraScopeItems`](../object/Region.html#extraScopeItems) [`familiar`](../object/Region.html#familiar) [`regions`](../object/Region.html#regions) [`roomList`](../object/Region.html#roomList) [`rooms`](../object/Region.html#rooms)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addExtraScopeItems`](#addExtraScopeItems) [`familiar`](#familiar) [`setFamiliarRooms`](#setFamiliarRooms)

Inherited from `Region` :  
[`addToContents`](../object/Region.html#addToContents) [`addToRoomList`](../object/Region.html#addToRoomList) [`allRegions`](../object/Region.html#allRegions) [`isCurrentlyWithin`](../object/Region.html#isCurrentlyWithin) [`isIn`](../object/Region.html#isIn) [`isOrIsIn`](../object/Region.html#isOrIsIn) [`makeRegionLists`](../object/Region.html#makeRegionLists) [`moveMLIntoAdd`](../object/Region.html#moveMLIntoAdd) [`moveMLOutOf`](../object/Region.html#moveMLOutOf) [`notifyAfter`](../object/Region.html#notifyAfter) [`notifyBefore`](../object/Region.html#notifyBefore) [`regionAfterAction`](../object/Region.html#regionAfterAction) [`regionAfterTravel`](../object/Region.html#regionAfterTravel) [`regionBeforeAction`](../object/Region.html#regionBeforeAction) [`regionBeforeTravel`](../object/Region.html#regionBeforeTravel) [`regionDaemon`](../object/Region.html#regionDaemon) [`removeFromContents`](../object/Region.html#removeFromContents) [`travelerEntering`](../object/Region.html#travelerEntering) [`travelerLeaving`](../object/Region.html#travelerLeaving)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="autoGoTo"></span>

`autoGoTo`

[senseRegion.t](../file/senseRegion.t.html)\[[187](../source/senseRegion.t.html#187)\]



Flag: do we want the touchObj PreCondition to move the actor from one
Room in the SenseRegion to another by implicit action to allow an actio
to proceed? By default we set this to the value of contSpace, since if
contSpace is true (i.e. we're using this SenseRegion to model a fairly
small continuous space, such as a room) it probably makes sense for
autoGoTo to be true as well, but it's nonetheless perfectly all right to
override the values of autoGoTo and contSpace independently.



<span id="canHearAcross"></span>

`canHearAcross`

[senseRegion.t](../file/senseRegion.t.html)\[[30](../source/senseRegion.t.html#30)\]



Is it possible to hear sounds (but not necessarily converse) in one room
from another in this SenseRegion?



<span id="canSeeAcross"></span>

`canSeeAcross`

[senseRegion.t](../file/senseRegion.t.html)\[[24](../source/senseRegion.t.html#24)\]



Is it possible to see from one room to another in this SenseRegion?



<span id="canSmellAcross"></span>

`canSmellAcross`

[senseRegion.t](../file/senseRegion.t.html)\[[33](../source/senseRegion.t.html#33)\]



Do smells travel from one room to another in this SenseRegion?



<span id="canTalkAcross"></span>

`canTalkAcross`

[senseRegion.t](../file/senseRegion.t.html)\[[45](../source/senseRegion.t.html#45)\]



By default actors have to be in the same room to be able to converse.
Even if sound can travel from one location to another that doesn't
necessarily mean that one could converse over that distance. The only
exception might be where a senseRegion models a relatively small area,
like two ends of a room.

Note that if canHearAcross is nil setting canTalkAcross to true will
have no effect.



<span id="canThrowAcross"></span>

`canThrowAcross`

[senseRegion.t](../file/senseRegion.t.html)\[[52](../source/senseRegion.t.html#52)\]



Are rooms in this SenseRegion close enough together to allow objects to
be thrown from one room to another; by default we'll assume not.



<span id="contSpace"></span>

`contSpace`

[senseRegion.t](../file/senseRegion.t.html)\[[210](../source/senseRegion.t.html#210)\]



Flag, do we want this SenseRegion to act as a continuous space (e.g.
representing parts of the same room, so that moving from one room to
another within this SenseRegion does not trigger a new room description,
thereby creating the impression that we have moved within the same room
rather than to another. This should probably be used sparingly and only
for SenseRegions representing a relatively small area, otherwise the
lack of a new room description (i.e. a LOOK AROUND) could be confusing
to the player.



<span id="fastGoTo"></span>

`fastGoTo`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[197](../source/senseRegion.t.html#197)\]



If our autoGoTo flag is set, our fastGoTo flag should normally also be
set so that autoGoTo works smoothly without breaks for CONTINUE commands
impeding the workings of an implicit GoTo. Note, however, that it's
perfectly okay to override fastGoTo to true on a SenseRegion for which
autoGoTo is nil; it just may not be such a good idea to do it the other
way round.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addExtraScopeItems"></span>

`addExtraScopeItems (action)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[112](../source/senseRegion.t.html#112)\]



Add everything to scope for all the rooms that belong to this
SenseRegion. We do this by sending a senseProbe into each of the rooms
and adding what would be in scope for that probe.



<span id="familiar"></span>

`familiar ( )`

[senseRegion.t](../file/senseRegion.t.html)\[[159](../source/senseRegion.t.html#159)\]



Since the PC should be able to see round the whole of a SenseRegion,
presumably the PC should also be able to find their way around a
SenseRegion once any of its rooms has been visited, even if the PC is
yet to visit the other rooms. We can achieve this effect by making the
SenseRegion familiar once any of its rooms has been visited, provided
there's line of sight across the rooms in the SenseRegion and the PC is
in a room in the SenseRegion which has light.



<span id="setFamiliarRooms"></span>

`setFamiliarRooms ( )`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[58](../source/senseRegion.t.html#58)\]



Use this method to carry out some additional initialization useful to
SenseRegions





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


