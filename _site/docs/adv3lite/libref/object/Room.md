<span class="title">Room</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[22](../source/travel.t.html#22)\],
[senseRegion.t](../file/senseRegion.t.html)\[[220](../source/senseRegion.t.html#220)\],
[english.t](../file/english.t.html)\[[2185](../source/english.t.html#2185)\],
[objtime.t](../file/objtime.t.html)\[[370](../source/objtime.t.html#370)\],
[postures.t](../file/postures.t.html)\[[528](../source/postures.t.html#528)\],
[roomparts.t](../file/roomparts.t.html)\[[71](../source/roomparts.t.html#71)\],
[sensory.t](../file/sensory.t.html)\[[709](../source/sensory.t.html#709)\],
[symconn.t](../file/symconn.t.html)\[[18](../source/symconn.t.html#18)\],
[viewport.t](../file/viewport.t.html)\[[164](../source/viewport.t.html#164)\]

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

<div class="fdesc">

A Room is a top location in which the player character, other actors and
other objects may be located. It may represent any discrete unit of
space, not necessarily a room in a building. Normally actors may only
interact with objects in the same room as themselves, but the
senseRegion module allows us to define sensory connections between
rooms.

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[220](../source/senseRegion.t.html#220)\]:*  
modifications to Room to allow SenseRegions to work.

*Modified in
[english.t](../file/english.t.html)\[[2185](../source/english.t.html#2185)\]:*  
English language modifications to Room. Here we simply allow a Room to
take its vocab from its roomTitle property if vocab is not already
defined; this reduces the need to type the same text twice when the two
are effectively the same.

*Modified in
[objtime.t](../file/objtime.t.html)\[[370](../source/objtime.t.html#370)\]:*  
Modifications for OBJTIME extension, so make traversing a connector take
a certain amount of game time.

*Modified in
[postures.t](../file/postures.t.html)\[[528](../source/postures.t.html#528)\]:*  
Modifications to Room class for use with POSTURES EXTENSION.

*Modified in
[roomparts.t](../file/roomparts.t.html)\[[71](../source/roomparts.t.html#71)\]:*  
Modifications to the Room class to allow for room parts. Note that the
standard adv3Lite library already supplies a foor in every room defined
via its floorObj property. \[MODIFIED FOR ROOMPARTS EXTENSION\]

*Modified in
[sensory.t](../file/sensory.t.html)\[[709](../source/sensory.t.html#709)\]:*  
MODIFICATIONS FOR SENSORY EXTENSION

*Modified in
[symconn.t](../file/symconn.t.html)\[[18](../source/symconn.t.html#18)\]:*  
Modification to Room for SymConn (symmetrical connector) extension

*Modified in
[viewport.t](../file/viewport.t.html)\[[164](../source/viewport.t.html#164)\]:*  
Modifications to Room class for VIEWPORT EXTENSION

`class `**`Room`**` :   `[`TravelConnector`](../object/TravelConnector.html)`   `[`Thing`](../object/Thing.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Room`**  
`         `[`TravelConnector`](../object/TravelConnector.html)  
`                 object`  
`         `[`Thing`](../object/Thing.html)  
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                         `[`Redirector`](../object/Redirector.html)  
`                                 object`  
`                 `[`Mentionable`](../object/Mentionable.html)  
`                         `[`LMentionable`](../object/LMentionable.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Room`**  
`         `[`OutdoorRoom`](../object/OutdoorRoom.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`unknownDest_`](../object/unknownDest_.html)`  `[`varDest_`](../object/varDest_.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`aft`](#aft)`  `[`allowCompassDirections`](#allowCompassDirections)`  `[`allowDarkTravel`](#allowDarkTravel)`  `[`audibleRooms`](#audibleRooms)`  `[`autoBackConnections`](#autoBackConnections)`  `[`autoName`](#autoName)`  `[`canLieInMe`](#canLieInMe)`  `[`cannotGoThatWayInDarkMsg`](#cannotGoThatWayInDarkMsg)`  `[`cannotGoThatWayMsg`](#cannotGoThatWayMsg)`  `[`canSitInMe`](#canSitInMe)`  `[`canStandInMe`](#canStandInMe)`  `[`ceilingObj`](#ceilingObj)`  `[`contType`](#contType)`  `[`down`](#down)`  `[`east`](#east)`  `[`extraScopeItems`](#extraScopeItems)`  `[`floorObj`](#floorObj)`  `[`fore`](#fore)`  `[`in`](#in)`  `[`isDestinationKnown`](#isDestinationKnown)`  `[`isFixed`](#isFixed)`  `[`isLit`](#isLit)`  `[`isOpen`](#isOpen)`  `[`lastSeenAt`](#lastSeenAt)`  `[`linkedRooms`](#linkedRooms)`  `[`listOrder`](#listOrder)`  `[`north`](#north)`  `[`northeast`](#northeast)`  `[`northwest`](#northwest)`  `[`noScriptAfterListen`](#noScriptAfterListen)`  `[`out`](#out)`  `[`outermostParent`](#outermostParent)`  `[`port`](#port)`  `[`regions`](#regions)`  `[`remoteContentsLister`](#remoteContentsLister)`  `[`remoteMiscContentsList`](#remoteMiscContentsList)`  `[`remoteSecondSpecialList`](#remoteSecondSpecialList)`  `[`roomFirstDesc`](#roomFirstDesc)`  `[`roomsViewed`](#roomsViewed)`  `[`smellableRooms`](#smellableRooms)`  `[`south`](#south)`  `[`southeast`](#southeast)`  `[`southwest`](#southwest)`  `[`starboard`](#starboard)`  `[`talkableRooms`](#talkableRooms)`  `[`throwableRooms`](#throwableRooms)`  `[`up`](#up)`  `[`visibleRooms`](#visibleRooms)`  `[`visited`](#visited)`  `[`wallObjs`](#wallObjs)`  `[`west`](#west)`  `

Inherited from `TravelConnector` :  
` `[`destination`](../object/TravelConnector.html#destination)`  `[`isConnectorApparent`](../object/TravelConnector.html#isConnectorApparent)`  `[`isConnectorListed`](../object/TravelConnector.html#isConnectorListed)`  `[`PushTravelVia`](../object/TravelConnector.html#PushTravelVia)`  `[`suppressTravelDescForPushTravel`](../object/TravelConnector.html#suppressTravelDescForPushTravel)`  `[`transmitsLight`](../object/TravelConnector.html#transmitsLight)`  `[`travelBarriers`](../object/TravelConnector.html#travelBarriers)`  `[`traversalTime`](../object/TravelConnector.html#traversalTime)`  `[`traversed`](../object/TravelConnector.html#traversed)`  `[`traversedBy`](../object/TravelConnector.html#traversedBy)`  `

Inherited from `Thing` :  
` `[`actorAlreadyInMsg`](../object/Thing.html#actorAlreadyInMsg)`  `[`actorAlreadyOnMsg`](../object/Thing.html#actorAlreadyOnMsg)`  `[`actorNotInMsg`](../object/Thing.html#actorNotInMsg)`  `[`actorNotOnMsg`](../object/Thing.html#actorNotOnMsg)`  `[`allowPourIntoMe`](../object/Thing.html#allowPourIntoMe)`  `[`allowPourOntoMe`](../object/Thing.html#allowPourOntoMe)`  `[`alreadyCleanMsg`](../object/Thing.html#alreadyCleanMsg)`  `[`alreadyClosedMsg`](../object/Thing.html#alreadyClosedMsg)`  `[`alreadyFastenedMsg`](../object/Thing.html#alreadyFastenedMsg)`  `[`alreadyHasMsg`](../object/Thing.html#alreadyHasMsg)`  `[`alreadyHeldMsg`](../object/Thing.html#alreadyHeldMsg)`  `[`alreadyInMsg`](../object/Thing.html#alreadyInMsg)`  `[`alreadyLitMsg`](../object/Thing.html#alreadyLitMsg)`  `[`alreadyLockedMsg`](../object/Thing.html#alreadyLockedMsg)`  `[`alreadyMovedToMsg`](../object/Thing.html#alreadyMovedToMsg)`  `[`alreadyOnMsg`](../object/Thing.html#alreadyOnMsg)`  `[`alreadyOpenMsg`](../object/Thing.html#alreadyOpenMsg)`  `[`alreadyPresentMsg`](../object/Thing.html#alreadyPresentMsg)`  `[`alreadyThereMsg`](../object/Thing.html#alreadyThereMsg)`  `[`alreadyWornMsg`](../object/Thing.html#alreadyWornMsg)`  `[`autoGetOutToReach`](../object/Thing.html#autoGetOutToReach)`  `[`autoTakeOnFindHidden`](../object/Thing.html#autoTakeOnFindHidden)`  `[`autoUnlock`](../object/Thing.html#autoUnlock)`  `[`brightness`](../object/Thing.html#brightness)`  `[`brightnessForReading`](../object/Thing.html#brightnessForReading)`  `[`brightnessOff`](../object/Thing.html#brightnessOff)`  `[`brightnessOn`](../object/Thing.html#brightnessOn)`  `[`bulk`](../object/Thing.html#bulk)`  `[`bulkCapacity`](../object/Thing.html#bulkCapacity)`  `[`canAttachToMe`](../object/Thing.html#canAttachToMe)`  `[`canAttackWithMe`](../object/Thing.html#canAttackWithMe)`  `[`canBurnWithMe`](../object/Thing.html#canBurnWithMe)`  `[`canCleanWithMe`](../object/Thing.html#canCleanWithMe)`  `[`canClimbDownMe`](../object/Thing.html#canClimbDownMe)`  `[`canClimbUpMe`](../object/Thing.html#canClimbUpMe)`  `[`canCutWithMe`](../object/Thing.html#canCutWithMe)`  `[`canDetachFromMe`](../object/Thing.html#canDetachFromMe)`  `[`canDigWithMe`](../object/Thing.html#canDigWithMe)`  `[`canEnterOnMe`](../object/Thing.html#canEnterOnMe)`  `[`canFastenToMe`](../object/Thing.html#canFastenToMe)`  `[`canGoAlongMe`](../object/Thing.html#canGoAlongMe)`  `[`canGoThrougMe`](../object/Thing.html#canGoThrougMe)`  `[`canHearIn`](../object/Thing.html#canHearIn)`  `[`canHearOut`](../object/Thing.html#canHearOut)`  `[`canJumpOffMe`](../object/Thing.html#canJumpOffMe)`  `[`canJumpOverMe`](../object/Thing.html#canJumpOverMe)`  `[`canLieOnMe`](../object/Thing.html#canLieOnMe)`  `[`canLockWithMe`](../object/Thing.html#canLockWithMe)`  `[`canLookBehindMe`](../object/Thing.html#canLookBehindMe)`  `[`canLookThroughMe`](../object/Thing.html#canLookThroughMe)`  `[`canLookUnderMe`](../object/Thing.html#canLookUnderMe)`  `[`canMoveToMe`](../object/Thing.html#canMoveToMe)`  `[`canMoveWithMe`](../object/Thing.html#canMoveWithMe)`  `[`cannotAttachMsg`](../object/Thing.html#cannotAttachMsg)`  `[`cannotAttachToMsg`](../object/Thing.html#cannotAttachToMsg)`  `[`cannotAttachToSelfMsg`](../object/Thing.html#cannotAttachToSelfMsg)`  `[`cannotAttackMsg`](../object/Thing.html#cannotAttackMsg)`  `[`cannotAttackWithMsg`](../object/Thing.html#cannotAttackWithMsg)`  `[`cannotAttackWithSelfMsg`](../object/Thing.html#cannotAttackWithSelfMsg)`  `[`cannotBoardMsg`](../object/Thing.html#cannotBoardMsg)`  `[`cannotBreakMsg`](../object/Thing.html#cannotBreakMsg)`  `[`cannotBurnMsg`](../object/Thing.html#cannotBurnMsg)`  `[`cannotBurnWithMsg`](../object/Thing.html#cannotBurnWithMsg)`  `[`cannotCleanMsg`](../object/Thing.html#cannotCleanMsg)`  `[`cannotCleanWithMsg`](../object/Thing.html#cannotCleanWithMsg)`  `[`cannotClimbDownMsg`](../object/Thing.html#cannotClimbDownMsg)`  `[`cannotClimbMsg`](../object/Thing.html#cannotClimbMsg)`  `[`cannotCloseMsg`](../object/Thing.html#cannotCloseMsg)`  `[`cannotConsultMsg`](../object/Thing.html#cannotConsultMsg)`  `[`cannotCutMsg`](../object/Thing.html#cannotCutMsg)`  `[`cannotCutWithMsg`](../object/Thing.html#cannotCutWithMsg)`  `[`cannotCutWithSelfMsg`](../object/Thing.html#cannotCutWithSelfMsg)`  `[`cannotDetachFromMsg`](../object/Thing.html#cannotDetachFromMsg)`  `[`cannotDetachFromSelfMsg`](../object/Thing.html#cannotDetachFromSelfMsg)`  `[`cannotDetachMsg`](../object/Thing.html#cannotDetachMsg)`  `[`cannotDigMsg`](../object/Thing.html#cannotDigMsg)`  `[`cannotDigWithMsg`](../object/Thing.html#cannotDigWithMsg)`  `[`cannotDigWithSelfMsg`](../object/Thing.html#cannotDigWithSelfMsg)`  `[`cannotDoffMsg`](../object/Thing.html#cannotDoffMsg)`  `[`cannotDrinkMsg`](../object/Thing.html#cannotDrinkMsg)`  `[`cannotDropMsg`](../object/Thing.html#cannotDropMsg)`  `[`cannotEatMsg`](../object/Thing.html#cannotEatMsg)`  `[`cannotEnterMsg`](../object/Thing.html#cannotEnterMsg)`  `[`cannotEnterOnMsg`](../object/Thing.html#cannotEnterOnMsg)`  `[`cannotExtinguishMsg`](../object/Thing.html#cannotExtinguishMsg)`  `[`cannotFastenMsg`](../object/Thing.html#cannotFastenMsg)`  `[`cannotFastenToMsg`](../object/Thing.html#cannotFastenToMsg)`  `[`cannotFastenToSelfMsg`](../object/Thing.html#cannotFastenToSelfMsg)`  `[`cannotFeelMsg`](../object/Thing.html#cannotFeelMsg)`  `[`cannotFlipMsg`](../object/Thing.html#cannotFlipMsg)`  `[`cannotFollowMsg`](../object/Thing.html#cannotFollowMsg)`  `[`cannotFollowSelfMsg`](../object/Thing.html#cannotFollowSelfMsg)`  `[`cannotGetInCarriedMsg`](../object/Thing.html#cannotGetInCarriedMsg)`  `[`cannotGetOnCarriedMsg`](../object/Thing.html#cannotGetOnCarriedMsg)`  `[`cannotGiveToMsg`](../object/Thing.html#cannotGiveToMsg)`  `[`cannotGiveToSelfMsg`](../object/Thing.html#cannotGiveToSelfMsg)`  `[`cannotGoAlongMsg`](../object/Thing.html#cannotGoAlongMsg)`  `[`cannotGoNearThereMsg`](../object/Thing.html#cannotGoNearThereMsg)`  `[`cannotGoThroughMsg`](../object/Thing.html#cannotGoThroughMsg)`  `[`cannotJumpOffMsg`](../object/Thing.html#cannotJumpOffMsg)`  `[`cannotJumpOverMsg`](../object/Thing.html#cannotJumpOverMsg)`  `[`cannotKissMsg`](../object/Thing.html#cannotKissMsg)`  `[`cannotLieInMsg`](../object/Thing.html#cannotLieInMsg)`  `[`cannotLieOnMsg`](../object/Thing.html#cannotLieOnMsg)`  `[`cannotLightMsg`](../object/Thing.html#cannotLightMsg)`  `[`cannotLockWithMsg`](../object/Thing.html#cannotLockWithMsg)`  `[`cannotLockWithSelfMsg`](../object/Thing.html#cannotLockWithSelfMsg)`  `[`cannotLookBehindMsg`](../object/Thing.html#cannotLookBehindMsg)`  `[`cannotLookThroughMsg`](../object/Thing.html#cannotLookThroughMsg)`  `[`cannotLookUnderMsg`](../object/Thing.html#cannotLookUnderMsg)`  `[`cannotMoveMsg`](../object/Thing.html#cannotMoveMsg)`  `[`cannotMoveToMsg`](../object/Thing.html#cannotMoveToMsg)`  `[`cannotMoveToSelfMsg`](../object/Thing.html#cannotMoveToSelfMsg)`  `[`cannotMoveWithMsg`](../object/Thing.html#cannotMoveWithMsg)`  `[`cannotMoveWithSelfMsg`](../object/Thing.html#cannotMoveWithSelfMsg)`  `[`cannotOpenMsg`](../object/Thing.html#cannotOpenMsg)`  `[`cannotPlugIntoMsg`](../object/Thing.html#cannotPlugIntoMsg)`  `[`cannotPlugIntoSelfMsg`](../object/Thing.html#cannotPlugIntoSelfMsg)`  `[`cannotPlugMsg`](../object/Thing.html#cannotPlugMsg)`  `[`cannotPourIntoMsg`](../object/Thing.html#cannotPourIntoMsg)`  `[`cannotPourIntoSelfMsg`](../object/Thing.html#cannotPourIntoSelfMsg)`  `[`cannotPourMsg`](../object/Thing.html#cannotPourMsg)`  `[`cannotPourOntoMsg`](../object/Thing.html#cannotPourOntoMsg)`  `[`cannotPourOntoSelfMsg`](../object/Thing.html#cannotPourOntoSelfMsg)`  `[`cannotPullMsg`](../object/Thing.html#cannotPullMsg)`  `[`cannotPurloinContainerMsg`](../object/Thing.html#cannotPurloinContainerMsg)`  `[`cannotPurloinRoomMsg`](../object/Thing.html#cannotPurloinRoomMsg)`  `[`cannotPurloinSelfMsg`](../object/Thing.html#cannotPurloinSelfMsg)`  `[`cannotPushDownMsg`](../object/Thing.html#cannotPushDownMsg)`  `[`cannotPushIntoMsg`](../object/Thing.html#cannotPushIntoMsg)`  `[`cannotPushMsg`](../object/Thing.html#cannotPushMsg)`  `[`cannotPushOwnContainerMsg`](../object/Thing.html#cannotPushOwnContainerMsg)`  `[`cannotPushThroughMsg`](../object/Thing.html#cannotPushThroughMsg)`  `[`cannotPushUpMsg`](../object/Thing.html#cannotPushUpMsg)`  `[`cannotPushViaSelfMsg`](../object/Thing.html#cannotPushViaSelfMsg)`  `[`cannotPutBehindMsg`](../object/Thing.html#cannotPutBehindMsg)`  `[`cannotPutInMsg`](../object/Thing.html#cannotPutInMsg)`  `[`cannotPutInSelfMsg`](../object/Thing.html#cannotPutInSelfMsg)`  `[`cannotPutMsg`](../object/Thing.html#cannotPutMsg)`  `[`cannotPutOnMsg`](../object/Thing.html#cannotPutOnMsg)`  `[`cannotPutUnderMsg`](../object/Thing.html#cannotPutUnderMsg)`  `[`cannotReadMsg`](../object/Thing.html#cannotReadMsg)`  `[`cannotRemoveMsg`](../object/Thing.html#cannotRemoveMsg)`  `[`cannotScrewMsg`](../object/Thing.html#cannotScrewMsg)`  `[`cannotScrewWithMsg`](../object/Thing.html#cannotScrewWithMsg)`  `[`cannotScrewWithSelfMsg`](../object/Thing.html#cannotScrewWithSelfMsg)`  `[`cannotSetMsg`](../object/Thing.html#cannotSetMsg)`  `[`cannotSetToMsg`](../object/Thing.html#cannotSetToMsg)`  `[`cannotShowToMsg`](../object/Thing.html#cannotShowToMsg)`  `[`cannotShowToSelfMsg`](../object/Thing.html#cannotShowToSelfMsg)`  `[`cannotSitInMsg`](../object/Thing.html#cannotSitInMsg)`  `[`cannotSitOnMsg`](../object/Thing.html#cannotSitOnMsg)`  `[`cannotSmellMsg`](../object/Thing.html#cannotSmellMsg)`  `[`cannotStandInMsg`](../object/Thing.html#cannotStandInMsg)`  `[`cannotStandOnMsg`](../object/Thing.html#cannotStandOnMsg)`  `[`cannotTakeFromSelfMsg`](../object/Thing.html#cannotTakeFromSelfMsg)`  `[`cannotTakeMsg`](../object/Thing.html#cannotTakeMsg)`  `[`cannotTakeMyContainerMsg`](../object/Thing.html#cannotTakeMyContainerMsg)`  `[`cannotTakeSelfMsg`](../object/Thing.html#cannotTakeSelfMsg)`  `[`cannotTalkToMsg`](../object/Thing.html#cannotTalkToMsg)`  `[`cannotTalkToSelfMsg`](../object/Thing.html#cannotTalkToSelfMsg)`  `[`cannotTasteMsg`](../object/Thing.html#cannotTasteMsg)`  `[`cannotThrowAtMsg`](../object/Thing.html#cannotThrowAtMsg)`  `[`cannotThrowAtSelfMsg`](../object/Thing.html#cannotThrowAtSelfMsg)`  `[`cannotThrowMsg`](../object/Thing.html#cannotThrowMsg)`  `[`cannotThrowToMsg`](../object/Thing.html#cannotThrowToMsg)`  `[`cannotThrowToSelfMsg`](../object/Thing.html#cannotThrowToSelfMsg)`  `[`cannotTurnMsg`](../object/Thing.html#cannotTurnMsg)`  `[`cannotTurnToMsg`](../object/Thing.html#cannotTurnToMsg)`  `[`cannotTurnWithMsg`](../object/Thing.html#cannotTurnWithMsg)`  `[`cannotTurnWithSelfMsg`](../object/Thing.html#cannotTurnWithSelfMsg)`  `[`cannotTypeOnMsg`](../object/Thing.html#cannotTypeOnMsg)`  `[`cannotUnfastenFromMsg`](../object/Thing.html#cannotUnfastenFromMsg)`  `[`cannotUnfastenFromSelfMsg`](../object/Thing.html#cannotUnfastenFromSelfMsg)`  `[`cannotUnfastenMsg`](../object/Thing.html#cannotUnfastenMsg)`  `[`cannotUnlockWithMsg`](../object/Thing.html#cannotUnlockWithMsg)`  `[`cannotUnlockWithSelfMsg`](../object/Thing.html#cannotUnlockWithSelfMsg)`  `[`cannotUnplugFromMsg`](../object/Thing.html#cannotUnplugFromMsg)`  `[`cannotUnplugFromSelfMsg`](../object/Thing.html#cannotUnplugFromSelfMsg)`  `[`cannotUnplugMsg`](../object/Thing.html#cannotUnplugMsg)`  `[`cannotUnscrewMsg`](../object/Thing.html#cannotUnscrewMsg)`  `[`cannotUnscrewWithMsg`](../object/Thing.html#cannotUnscrewWithMsg)`  `[`cannotUnscrewWithSelfMsg`](../object/Thing.html#cannotUnscrewWithSelfMsg)`  `[`cannotWearMsg`](../object/Thing.html#cannotWearMsg)`  `[`cannotWriteOnMsg`](../object/Thing.html#cannotWriteOnMsg)`  `[`canPlugIntoMe`](../object/Thing.html#canPlugIntoMe)`  `[`canPourIntoMe`](../object/Thing.html#canPourIntoMe)`  `[`canPourOntoMe`](../object/Thing.html#canPourOntoMe)`  `[`canPullTravel`](../object/Thing.html#canPullTravel)`  `[`canPushTravel`](../object/Thing.html#canPushTravel)`  `[`canPutBehindMe`](../object/Thing.html#canPutBehindMe)`  `[`canPutInMe`](../object/Thing.html#canPutInMe)`  `[`canPutUnderMe`](../object/Thing.html#canPutUnderMe)`  `[`canReachIn`](../object/Thing.html#canReachIn)`  `[`canReachOut`](../object/Thing.html#canReachOut)`  `[`canScrewWithMe`](../object/Thing.html#canScrewWithMe)`  `[`canSeeIn`](../object/Thing.html#canSeeIn)`  `[`canSeeOut`](../object/Thing.html#canSeeOut)`  `[`canSetMeTo`](../object/Thing.html#canSetMeTo)`  `[`canSitOnMe`](../object/Thing.html#canSitOnMe)`  `[`canSmellIn`](../object/Thing.html#canSmellIn)`  `[`canSmellOut`](../object/Thing.html#canSmellOut)`  `[`canStandOnMe`](../object/Thing.html#canStandOnMe)`  `[`canSupply`](../object/Thing.html#canSupply)`  `[`canTalkToMe`](../object/Thing.html#canTalkToMe)`  `[`canThrowAtMe`](../object/Thing.html#canThrowAtMe)`  `[`canThrowToMe`](../object/Thing.html#canThrowToMe)`  `[`canTurnMeTo`](../object/Thing.html#canTurnMeTo)`  `[`canTurnWithMe`](../object/Thing.html#canTurnWithMe)`  `[`canTypeOnMe`](../object/Thing.html#canTypeOnMe)`  `[`canUnfastenFromMe`](../object/Thing.html#canUnfastenFromMe)`  `[`canUnlockWithMe`](../object/Thing.html#canUnlockWithMe)`  `[`canUnplugFromMe`](../object/Thing.html#canUnplugFromMe)`  `[`canUnscrewWithMe`](../object/Thing.html#canUnscrewWithMe)`  `[`canWriteOnMe`](../object/Thing.html#canWriteOnMe)`  `[`checkAttackMsg`](../object/Thing.html#checkAttackMsg)`  `[`checkFeelMsg`](../object/Thing.html#checkFeelMsg)`  `[`checkKissMsg`](../object/Thing.html#checkKissMsg)`  `[`circularlyInMsg`](../object/Thing.html#circularlyInMsg)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListed`](../object/Thing.html#contentsListed)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedInLook`](../object/Thing.html#contentsListedInLook)`  `[`contentsListedInSearch`](../object/Thing.html#contentsListedInSearch)`  `[`currentInterlocutor`](../object/Thing.html#currentInterlocutor)`  `[`curSetting`](../object/Thing.html#curSetting)`  `[`darkName`](../object/Thing.html#darkName)`  `[`decorationActions`](../object/Thing.html#decorationActions)`  `[`decorationActions`](../object/Thing.html#decorationActions)`  `[`defaultPosture`](../object/Thing.html#defaultPosture)`  `[`desc`](../object/Thing.html#desc)`  `[`directlyHeld`](../object/Thing.html#directlyHeld)`  `[`directlyIn`](../object/Thing.html#directlyIn)`  `[`directlyWorn`](../object/Thing.html#directlyWorn)`  `[`distinguishByContents`](../object/Thing.html#distinguishByContents)`  `[`dontNeedCleaningObjMsg`](../object/Thing.html#dontNeedCleaningObjMsg)`  `[`dropItemsBehind`](../object/Thing.html#dropItemsBehind)`  `[`dropItemsUnder`](../object/Thing.html#dropItemsUnder)`  `[`dropLocation`](../object/Thing.html#dropLocation)`  `[`enclosing`](../object/Thing.html#enclosing)`  `[`examined`](../object/Thing.html#examined)`  `[`examineListed`](../object/Thing.html#examineListed)`  `[`examineLister`](../object/Thing.html#examineLister)`  `[`exitLocation`](../object/Thing.html#exitLocation)`  `[`extContents`](../object/Thing.html#extContents)`  `[`familiar`](../object/Thing.html#familiar)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`findHiddenDest`](../object/Thing.html#findHiddenDest)`  `[`fluidName`](../object/Thing.html#fluidName)`  `[`futileToAttackMsg`](../object/Thing.html#futileToAttackMsg)`  `[`futileToKissMsg`](../object/Thing.html#futileToKissMsg)`  `[`getBulkHiddenBehind`](../object/Thing.html#getBulkHiddenBehind)`  `[`getBulkHiddenIn`](../object/Thing.html#getBulkHiddenIn)`  `[`getBulkHiddenUnder`](../object/Thing.html#getBulkHiddenUnder)`  `[`getFacets`](../object/Thing.html#getFacets)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutToJump`](../object/Thing.html#getOutToJump)`  `[`getWeightHiddenBehind`](../object/Thing.html#getWeightHiddenBehind)`  `[`getWeightHiddenIn`](../object/Thing.html#getWeightHiddenIn)`  `[`getWeightHiddenUnder`](../object/Thing.html#getWeightHiddenUnder)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`groupOrder`](../object/Thing.html#groupOrder)`  `[`hearNothingMsg`](../object/Thing.html#hearNothingMsg)`  `[`hiddenBehind`](../object/Thing.html#hiddenBehind)`  `[`hiddenIn`](../object/Thing.html#hiddenIn)`  `[`hiddenUnder`](../object/Thing.html#hiddenUnder)`  `[`illuminationThreshold`](../object/Thing.html#illuminationThreshold)`  `[`inDarkDesc`](../object/Thing.html#inDarkDesc)`  `[`indirectLockableMsg`](../object/Thing.html#indirectLockableMsg)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`intContents`](../object/Thing.html#intContents)`  `[`interiorDesc`](../object/Thing.html#interiorDesc)`  `[`inventoryListed`](../object/Thing.html#inventoryListed)`  `[`isAttachable`](../object/Thing.html#isAttachable)`  `[`isAttackable`](../object/Thing.html#isAttackable)`  `[`isBoardable`](../object/Thing.html#isBoardable)`  `[`isBreakable`](../object/Thing.html#isBreakable)`  `[`isBurnable`](../object/Thing.html#isBurnable)`  `[`isClean`](../object/Thing.html#isClean)`  `[`isCleanable`](../object/Thing.html#isCleanable)`  `[`isClimbable`](../object/Thing.html#isClimbable)`  `[`isCloseable`](../object/Thing.html#isCloseable)`  `[`isConsultable`](../object/Thing.html#isConsultable)`  `[`isCuttable`](../object/Thing.html#isCuttable)`  `[`isDecoration`](../object/Thing.html#isDecoration)`  `[`isDetachable`](../object/Thing.html#isDetachable)`  `[`isDiggable`](../object/Thing.html#isDiggable)`  `[`isDoffable`](../object/Thing.html#isDoffable)`  `[`isDrinkable`](../object/Thing.html#isDrinkable)`  `[`isDroppable`](../object/Thing.html#isDroppable)`  `[`isEdible`](../object/Thing.html#isEdible)`  `[`isEnterable`](../object/Thing.html#isEnterable)`  `[`isExtinguishable`](../object/Thing.html#isExtinguishable)`  `[`isFastenable`](../object/Thing.html#isFastenable)`  `[`isFastened`](../object/Thing.html#isFastened)`  `[`isFeelable`](../object/Thing.html#isFeelable)`  `[`isFlippable`](../object/Thing.html#isFlippable)`  `[`isFollowable`](../object/Thing.html#isFollowable)`  `[`isHidden`](../object/Thing.html#isHidden)`  `[`isInitialPlayerChar`](../object/Thing.html#isInitialPlayerChar)`  `[`isKissable`](../object/Thing.html#isKissable)`  `[`isLightable`](../object/Thing.html#isLightable)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isLocked`](../object/Thing.html#isLocked)`  `[`isMoveable`](../object/Thing.html#isMoveable)`  `[`isOn`](../object/Thing.html#isOn)`  `[`isOpenable`](../object/Thing.html#isOpenable)`  `[`isPlayerChar`](../object/Thing.html#isPlayerChar)`  `[`isPlugable`](../object/Thing.html#isPlugable)`  `[`isPourable`](../object/Thing.html#isPourable)`  `[`isProminentNoise`](../object/Thing.html#isProminentNoise)`  `[`isProminentSmell`](../object/Thing.html#isProminentSmell)`  `[`isPullable`](../object/Thing.html#isPullable)`  `[`isPushable`](../object/Thing.html#isPushable)`  `[`isReadable`](../object/Thing.html#isReadable)`  `[`isRemoveable`](../object/Thing.html#isRemoveable)`  `[`isScrewable`](../object/Thing.html#isScrewable)`  `[`isSettable`](../object/Thing.html#isSettable)`  `[`isSmellable`](../object/Thing.html#isSmellable)`  `[`isSwitchable`](../object/Thing.html#isSwitchable)`  `[`isTakeable`](../object/Thing.html#isTakeable)`  `[`isTasteable`](../object/Thing.html#isTasteable)`  `[`isThrowable`](../object/Thing.html#isThrowable)`  `[`isTransparent`](../object/Thing.html#isTransparent)`  `[`isTurnable`](../object/Thing.html#isTurnable)`  `[`isUnfastenable`](../object/Thing.html#isUnfastenable)`  `[`isUnplugable`](../object/Thing.html#isUnplugable)`  `[`isUnscrewable`](../object/Thing.html#isUnscrewable)`  `[`isVehicle`](../object/Thing.html#isVehicle)`  `[`isWearable`](../object/Thing.html#isWearable)`  `[`keyDoesntWorkMsg`](../object/Thing.html#keyDoesntWorkMsg)`  `[`keyList`](../object/Thing.html#keyList)`  `[`keyNotNeededMsg`](../object/Thing.html#keyNotNeededMsg)`  `[`kissRank`](../object/Thing.html#kissRank)`  `[`known`](../object/Thing.html#known)`  `[`knownKeyList`](../object/Thing.html#knownKeyList)`  `[`knownProp`](../object/Thing.html#knownProp)`  `[`lieOnScore`](../object/Thing.html#lieOnScore)`  `[`lightSources`](../object/Thing.html#lightSources)`  `[`listableContents`](../object/Thing.html#listableContents)`  `[`listenDesc`](../object/Thing.html#listenDesc)`  `[`listenDescWithoutSource`](../object/Thing.html#listenDescWithoutSource)`  `[`listenDescWithSource`](../object/Thing.html#listenDescWithSource)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lockability`](../object/Thing.html#lockability)`  `[`lockedMsg`](../object/Thing.html#lockedMsg)`  `[`lookBehindMsg`](../object/Thing.html#lookBehindMsg)`  `[`lookInMsg`](../object/Thing.html#lookInMsg)`  `[`lookListed`](../object/Thing.html#lookListed)`  `[`lookThroughMsg`](../object/Thing.html#lookThroughMsg)`  `[`lookUnderMsg`](../object/Thing.html#lookUnderMsg)`  `[`markInventoryAsSeen`](../object/Thing.html#markInventoryAsSeen)`  `[`matchPullOnly`](../object/Thing.html#matchPullOnly)`  `[`matchPushOnly`](../object/Thing.html#matchPushOnly)`  `[`maxBulkHiddenBehind`](../object/Thing.html#maxBulkHiddenBehind)`  `[`maxBulkHiddenIn`](../object/Thing.html#maxBulkHiddenIn)`  `[`maxBulkHiddenUnder`](../object/Thing.html#maxBulkHiddenUnder)`  `[`maxSingleBulk`](../object/Thing.html#maxSingleBulk)`  `[`maxSingleWeight`](../object/Thing.html#maxSingleWeight)`  `[`maxWeightHiddenBehind`](../object/Thing.html#maxWeightHiddenBehind)`  `[`maxWeightHiddenIn`](../object/Thing.html#maxWeightHiddenIn)`  `[`maxWeightHiddenUnder`](../object/Thing.html#maxWeightHiddenUnder)`  `[`mentioned`](../object/Thing.html#mentioned)`  `[`moved`](../object/Thing.html#moved)`  `[`movedTo`](../object/Thing.html#movedTo)`  `[`moveNoEffectMsg`](../object/Thing.html#moveNoEffectMsg)`  `[`mustBeCleanedWith`](../object/Thing.html#mustBeCleanedWith)`  `[`myInventoryLister`](../object/Thing.html#myInventoryLister)`  `[`myLookBehindLister`](../object/Thing.html#myLookBehindLister)`  `[`myLookInLister`](../object/Thing.html#myLookInLister)`  `[`myLookUnderLister`](../object/Thing.html#myLookUnderLister)`  `[`myOpeningContentsLister`](../object/Thing.html#myOpeningContentsLister)`  `[`myWornLister`](../object/Thing.html#myWornLister)`  `[`needsCleaning`](../object/Thing.html#needsCleaning)`  `[`noLongerTalkingToAnyoneMsg`](../object/Thing.html#noLongerTalkingToAnyoneMsg)`  `[`nominalContents`](../object/Thing.html#nominalContents)`  `[`noNeedToCleanMsg`](../object/Thing.html#noNeedToCleanMsg)`  `[`notFastenedMsg`](../object/Thing.html#notFastenedMsg)`  `[`notHoldingMsg`](../object/Thing.html#notHoldingMsg)`  `[`notImportantMsg`](../object/Thing.html#notImportantMsg)`  `[`notInMsg`](../object/Thing.html#notInMsg)`  `[`notLitMsg`](../object/Thing.html#notLitMsg)`  `[`notLockableMsg`](../object/Thing.html#notLockableMsg)`  `[`notLockedMsg`](../object/Thing.html#notLockedMsg)`  `[`notSwitchableMsg`](../object/Thing.html#notSwitchableMsg)`  `[`notTalkingToAnyoneMsg`](../object/Thing.html#notTalkingToAnyoneMsg)`  `[`notWornMsg`](../object/Thing.html#notWornMsg)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`objIntoPrep`](../object/Thing.html#objIntoPrep)`  `[`okayCleanMsg`](../object/Thing.html#okayCleanMsg)`  `[`okayGetOutOfMsg`](../object/Thing.html#okayGetOutOfMsg)`  `[`okayLieInMsg`](../object/Thing.html#okayLieInMsg)`  `[`okayLieOnMsg`](../object/Thing.html#okayLieOnMsg)`  `[`okayLockMsg`](../object/Thing.html#okayLockMsg)`  `[`okayOpenMsg`](../object/Thing.html#okayOpenMsg)`  `[`okayPushIntoMsg`](../object/Thing.html#okayPushIntoMsg)`  `[`okayPushOutOfMsg`](../object/Thing.html#okayPushOutOfMsg)`  `[`okaySetMsg`](../object/Thing.html#okaySetMsg)`  `[`okaySitInMsg`](../object/Thing.html#okaySitInMsg)`  `[`okaySitOnMsg`](../object/Thing.html#okaySitOnMsg)`  `[`okayStandInMsg`](../object/Thing.html#okayStandInMsg)`  `[`okayStandOnMsg`](../object/Thing.html#okayStandOnMsg)`  `[`okayUnlockMsg`](../object/Thing.html#okayUnlockMsg)`  `[`opacity`](../object/Thing.html#opacity)`  `[`opened`](../object/Thing.html#opened)`  `[`openStatusReportable`](../object/Thing.html#openStatusReportable)`  `[`owner`](../object/Thing.html#owner)`  `[`ownsContents`](../object/Thing.html#ownsContents)`  `[`paraBrksBtwnSubcontents`](../object/Thing.html#paraBrksBtwnSubcontents)`  `[`partOfYouMsg`](../object/Thing.html#partOfYouMsg)`  `[`posture`](../object/Thing.html#posture)`  `[`preCondActor`](../object/Thing.html#preCondActor)`  `[`pullNoEffectMsg`](../object/Thing.html#pullNoEffectMsg)`  `[`pushNoEffectMsg`](../object/Thing.html#pushNoEffectMsg)`  `[`readDesc`](../object/Thing.html#readDesc)`  `[`recognizableInDark`](../object/Thing.html#recognizableInDark)`  `[`remapActor`](../object/Thing.html#remapActor)`  `[`remapBehind`](../object/Thing.html#remapBehind)`  `[`remapIn`](../object/Thing.html#remapIn)`  `[`remapOn`](../object/Thing.html#remapOn)`  `[`remapProps`](../object/Thing.html#remapProps)`  `[`remapUnder`](../object/Thing.html#remapUnder)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomPart`](../object/Thing.html#roomPart)`  `[`roomPartDesc`](../object/Thing.html#roomPartDesc)`  `[`roomSubContentsLister`](../object/Thing.html#roomSubContentsLister)`  `[`roomTitle`](../object/Thing.html#roomTitle)`  `[`searchListed`](../object/Thing.html#searchListed)`  `[`seen`](../object/Thing.html#seen)`  `[`seenProp`](../object/Thing.html#seenProp)`  `[`shouldBeBroken`](../object/Thing.html#shouldBeBroken)`  `[`shouldNotBreakMsg`](../object/Thing.html#shouldNotBreakMsg)`  `[`shouldNotPourIntoMsg`](../object/Thing.html#shouldNotPourIntoMsg)`  `[`shouldNotPourOntoMsg`](../object/Thing.html#shouldNotPourOntoMsg)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`sitOnScore`](../object/Thing.html#sitOnScore)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellDescWithoutSource`](../object/Thing.html#smellDescWithoutSource)`  `[`smellDescWithSource`](../object/Thing.html#smellDescWithSource)`  `[`smellNothingMsg`](../object/Thing.html#smellNothingMsg)`  `[`smellObj`](../object/Thing.html#smellObj)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundObj`](../object/Thing.html#soundObj)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialDescOrder`](../object/Thing.html#specialDescOrder)`  `[`stagingLocation`](../object/Thing.html#stagingLocation)`  `[`standOnScore`](../object/Thing.html#standOnScore)`  `[`stateDesc`](../object/Thing.html#stateDesc)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`throwFallsShortMsg`](../object/Thing.html#throwFallsShortMsg)`  `[`tooDarkToReadMsg`](../object/Thing.html#tooDarkToReadMsg)`  `[`tooDarkToSeeMsg`](../object/Thing.html#tooDarkToSeeMsg)`  `[`tooFarAwayToHearMsg`](../object/Thing.html#tooFarAwayToHearMsg)`  `[`tooFarAwayToReadMsg`](../object/Thing.html#tooFarAwayToReadMsg)`  `[`tooFarAwayToSeeDetailMsg`](../object/Thing.html#tooFarAwayToSeeDetailMsg)`  `[`tooFarAwayToSmellMsg`](../object/Thing.html#tooFarAwayToSmellMsg)`  `[`totalWeight`](../object/Thing.html#totalWeight)`  `[`turnLastExamined`](../object/Thing.html#turnLastExamined)`  `[`turnLastMoved`](../object/Thing.html#turnLastMoved)`  `[`turnLastMovedInto`](../object/Thing.html#turnLastMovedInto)`  `[`turnNoEffectMsg`](../object/Thing.html#turnNoEffectMsg)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useKey_`](../object/Thing.html#useKey_)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`viaMode`](../object/Thing.html#viaMode)`  `[`visibleInDark`](../object/Thing.html#visibleInDark)`  `[`vocabLikelihood`](../object/Thing.html#vocabLikelihood)`  `[`weight`](../object/Thing.html#weight)`  `[`weightCapacity`](../object/Thing.html#weightCapacity)`  `[`withKeyMsg`](../object/Thing.html#withKeyMsg)`  `[`wornBy`](../object/Thing.html#wornBy)`  `

` `

` `

Inherited from `Mentionable` :  
` `[`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural)`  `[`disambigGroup`](../object/Mentionable.html#disambigGroup)`  `[`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases)`  `[`disambigName`](../object/Mentionable.html#disambigName)`  `[`disambigOrder`](../object/Mentionable.html#disambigOrder)`  `[`isHer`](../object/Mentionable.html#isHer)`  `[`isHim`](../object/Mentionable.html#isHim)`  `[`isIt`](../object/Mentionable.html#isIt)`  `[`massNoun`](../object/Mentionable.html#massNoun)`  `[`matchPhrases`](../object/Mentionable.html#matchPhrases)`  `[`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude)`  `[`name`](../object/Mentionable.html#name)`  `[`person`](../object/Mentionable.html#person)`  `[`plural`](../object/Mentionable.html#plural)`  `[`proper`](../object/Mentionable.html#proper)`  `[`qualified`](../object/Mentionable.html#qualified)`  `[`states`](../object/Mentionable.html#states)`  `[`vocab`](../object/Mentionable.html#vocab)`  `[`vocabWords`](../object/Mentionable.html#vocabWords)`  `

Inherited from `LMentionable` :  
` `[`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat)`  `[`alphaCharPat`](../object/LMentionable.html#alphaCharPat)`  `[`aName`](../object/LMentionable.html#aName)`  `[`apostPluralPat`](../object/LMentionable.html#apostPluralPat)`  `[`apostSPat`](../object/LMentionable.html#apostSPat)`  `[`deannotatePat`](../object/LMentionable.html#deannotatePat)`  `[`dictComp`](../object/LMentionable.html#dictComp)`  `[`dummyName`](../object/LMentionable.html#dummyName)`  `[`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat)`  `[`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords)`  `[`esPluralPat`](../object/LMentionable.html#esPluralPat)`  `[`firstWordPat`](../object/LMentionable.html#firstWordPat)`  `[`heName`](../object/LMentionable.html#heName)`  `[`herName`](../object/LMentionable.html#herName)`  `[`hersName`](../object/LMentionable.html#hersName)`  `[`himName`](../object/LMentionable.html#himName)`  `[`iesPluralPat`](../object/LMentionable.html#iesPluralPat)`  `[`irregularPlurals`](../object/LMentionable.html#irregularPlurals)`  `[`lastWordPat`](../object/LMentionable.html#lastWordPat)`  `[`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat)`  `[`menPluralPat`](../object/LMentionable.html#menPluralPat)`  `[`objInName`](../object/LMentionable.html#objInName)`  `[`objIntoName`](../object/LMentionable.html#objIntoName)`  `[`objName`](../object/LMentionable.html#objName)`  `[`objOutOfName`](../object/LMentionable.html#objOutOfName)`  `[`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat)`  `[`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat)`  `[`ownerNamed`](../object/LMentionable.html#ownerNamed)`  `[`pluralPat`](../object/LMentionable.html#pluralPat)`  `[`posPat`](../object/LMentionable.html#posPat)`  `[`possAdj`](../object/LMentionable.html#possAdj)`  `[`possEnding`](../object/LMentionable.html#possEnding)`  `[`possNoun`](../object/LMentionable.html#possNoun)`  `[`prepList`](../object/LMentionable.html#prepList)`  `[`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat)`  `[`prepWordPat`](../object/LMentionable.html#prepWordPat)`  `[`pronounMap`](../object/LMentionable.html#pronounMap)`  `[`properNamePat`](../object/LMentionable.html#properNamePat)`  `[`properPat`](../object/LMentionable.html#properPat)`  `[`reflexiveName`](../object/LMentionable.html#reflexiveName)`  `[`specialAOrAn`](../object/LMentionable.html#specialAOrAn)`  `[`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat)`  `[`thatName`](../object/LMentionable.html#thatName)`  `[`thatObjName`](../object/LMentionable.html#thatObjName)`  `[`theName`](../object/LMentionable.html#theName)`  `[`theObjName`](../object/LMentionable.html#theObjName)`  `[`trimPat`](../object/LMentionable.html#trimPat)`  `[`truncationLength`](../object/LMentionable.html#truncationLength)`  `[`weakWordPat`](../object/LMentionable.html#weakWordPat)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addExtraScopeItems`](#addExtraScopeItems)`  `[`addToRegions`](#addToRegions)`  `[`afterTravel`](#afterTravel)`  `[`allowShipboardDirections`](#allowShipboardDirections)`  `[`allRegions`](#allRegions)`  `[`beforeTravel`](#beforeTravel)`  `[`canHearInFrom`](#canHearInFrom)`  `[`canHearOutTo`](#canHearOutTo)`  `[`cannotGoThatWay`](#cannotGoThatWay)`  `[`cannotGoThatWayInDark`](#cannotGoThatWayInDark)`  `[`cannotReachTargetMsg`](#cannotReachTargetMsg)`  `[`canSeeInFrom`](#canSeeInFrom)`  `[`canSeeOutTo`](#canSeeOutTo)`  `[`canSmellInFrom`](#canSmellInFrom)`  `[`canSmellOutTo`](#canSmellOutTo)`  `[`describeRemotely`](#describeRemotely)`  `[`destination`](#destination)`  `[`dobjFor(Examine)`](#dobjFor(Examine))`  `[`dobjFor(GetOutOf)`](#dobjFor(GetOutOf))`  `[`examineStatus`](#examineStatus)`  `[`execTravel`](#execTravel)`  `[`getAllRegions`](#getAllRegions)`  `[`getConnector`](#getConnector)`  `[`getDirection`](#getDirection)`  `[`getDirectionTo`](#getDirectionTo)`  `[`getOutermostRoom`](#getOutermostRoom)`  `[`initVocab`](#initVocab)`  `[`inRoomName`](#inRoomName)`  `[`interiorDesc`](#interiorDesc)`  `[`interiorParent`](#interiorParent)`  `[`iobjFor(PushTravelGetOutOf)`](#iobjFor(PushTravelGetOutOf))`  `[`isIn`](#isIn)`  `[`litWithin`](#litWithin)`  `[`lookOnEnter`](#lookOnEnter)`  `[`notifyAfter`](#notifyAfter)`  `[`notifyBefore`](#notifyBefore)`  `[`notifyDeparture`](#notifyDeparture)`  `[`outermostVisibleParent`](#outermostVisibleParent)`  `[`preinitThing`](#preinitThing)`  `[`regionsInCommonWith`](#regionsInCommonWith)`  `[`remoteRoomListOrder`](#remoteRoomListOrder)`  `[`roomAfterAction`](#roomAfterAction)`  `[`roomBeforeAction`](#roomBeforeAction)`  `[`roomDaemon`](#roomDaemon)`  `[`roomRemoteDesc`](#roomRemoteDesc)`  `[`setDestInfo`](#setDestInfo)`  `[`showConnectedMiscContents`](#showConnectedMiscContents)`  `[`showFirstConnectedSpecials`](#showFirstConnectedSpecials)`  `[`showFirstRemoteSpecials`](#showFirstRemoteSpecials)`  `[`showRemoteMiscContents`](#showRemoteMiscContents)`  `[`showSecondConnectedSpecials`](#showSecondConnectedSpecials)`  `[`showSecondRemoteSpecials`](#showSecondRemoteSpecials)`  `[`showStatuslineExits`](#showStatuslineExits)`  `[`sortRoomSublist`](#sortRoomSublist)`  `[`statusName`](#statusName)`  `[`travelerEntering`](#travelerEntering)`  `[`travelerLeaving`](#travelerLeaving)`  `[`unmentionRemoteContents`](#unmentionRemoteContents)`  `[`updateSymVocab`](#updateSymVocab)`  `

Inherited from `TravelConnector` :  
` `[`afterTravelNotifications`](../object/TravelConnector.html#afterTravelNotifications)`  `[`beforeTravelNotifications`](../object/TravelConnector.html#beforeTravelNotifications)`  `[`canTravelerPass`](../object/TravelConnector.html#canTravelerPass)`  `[`checkPushTravel`](../object/TravelConnector.html#checkPushTravel)`  `[`checkTravelBarriers`](../object/TravelConnector.html#checkTravelBarriers)`  `[`dobjFor(GoThrough)`](../object/TravelConnector.html#dobjFor(GoThrough))`  `[`dobjFor(TravelVia)`](../object/TravelConnector.html#dobjFor(TravelVia))`  `[`explainTravelBarrier`](../object/TravelConnector.html#explainTravelBarrier)`  `[`getDepartingDirection`](../object/TravelConnector.html#getDepartingDirection)`  `[`getDestination`](../object/TravelConnector.html#getDestination)`  `[`getTraveler`](../object/TravelConnector.html#getTraveler)`  `[`hasBeenTraversedBy`](../object/TravelConnector.html#hasBeenTraversedBy)`  `[`iobjFor(PushTravelThrough)`](../object/TravelConnector.html#iobjFor(PushTravelThrough))`  `[`isConnectorVisible`](../object/TravelConnector.html#isConnectorVisible)`  `[`isDestinationKnown`](../object/TravelConnector.html#isDestinationKnown)`  `[`noteTraversal`](../object/TravelConnector.html#noteTraversal)`  `[`sayActorFollowing`](../object/TravelConnector.html#sayActorFollowing)`  `[`sayDeparting`](../object/TravelConnector.html#sayDeparting)`  `[`sayNoDestination`](../object/TravelConnector.html#sayNoDestination)`  `[`travelDesc`](../object/TravelConnector.html#travelDesc)`  `[`travelVia`](../object/TravelConnector.html#travelVia)`  `[`traversalMsg`](../object/TravelConnector.html#traversalMsg)`  `[`traversalTimeFrom`](../object/TravelConnector.html#traversalTimeFrom)`  `

Inherited from `Thing` :  
` `[`abcName`](../object/Thing.html#abcName)`  `[`accumulateBrightness`](../object/Thing.html#accumulateBrightness)`  `[`accumulatedBrightnessWithin`](../object/Thing.html#accumulatedBrightnessWithin)`  `[`actionMoveInto`](../object/Thing.html#actionMoveInto)`  `[`actorAction`](../object/Thing.html#actorAction)`  `[`addToAllContents`](../object/Thing.html#addToAllContents)`  `[`addToContents`](../object/Thing.html#addToContents)`  `[`afterAction`](../object/Thing.html#afterAction)`  `[`allContents`](../object/Thing.html#allContents)`  `[`allowReachOut`](../object/Thing.html#allowReachOut)`  `[`aobjFor`](../object/Thing.html#aobjFor)`  `[`beforeAction`](../object/Thing.html#beforeAction)`  `[`beforeMovePushable`](../object/Thing.html#beforeMovePushable)`  `[`brightnessWithin`](../object/Thing.html#brightnessWithin)`  `[`byRoom`](../object/Thing.html#byRoom)`  `[`canHear`](../object/Thing.html#canHear)`  `[`cannotPushTravelMsg`](../object/Thing.html#cannotPushTravelMsg)`  `[`cannotReachOutMsg`](../object/Thing.html#cannotReachOutMsg)`  `[`canReach`](../object/Thing.html#canReach)`  `[`canSee`](../object/Thing.html#canSee)`  `[`canSmell`](../object/Thing.html#canSmell)`  `[`canTalkTo`](../object/Thing.html#canTalkTo)`  `[`checkDisplay`](../object/Thing.html#checkDisplay)`  `[`checkInsert`](../object/Thing.html#checkInsert)`  `[`checkReach`](../object/Thing.html#checkReach)`  `[`checkReachIn`](../object/Thing.html#checkReachIn)`  `[`checkRemove`](../object/Thing.html#checkRemove)`  `[`checkRoomToHold`](../object/Thing.html#checkRoomToHold)`  `[`checkSetting`](../object/Thing.html#checkSetting)`  `[`childLocType`](../object/Thing.html#childLocType)`  `[`commonContainingParent`](../object/Thing.html#commonContainingParent)`  `[`commonInteriorParent`](../object/Thing.html#commonInteriorParent)`  `[`containerPath`](../object/Thing.html#containerPath)`  `[`containerPathBlock`](../object/Thing.html#containerPathBlock)`  `[`darkDesc`](../object/Thing.html#darkDesc)`  `[`describeMovePushable`](../object/Thing.html#describeMovePushable)`  `[`describePushTravel`](../object/Thing.html#describePushTravel)`  `[`directChildParent`](../object/Thing.html#directChildParent)`  `[`discover`](../object/Thing.html#discover)`  `[`display`](../object/Thing.html#display)`  `[`displayAlt`](../object/Thing.html#displayAlt)`  `[`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))`  `[`dobjFor(Attach)`](../object/Thing.html#dobjFor(Attach))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(Cut)`](../object/Thing.html#dobjFor(Cut))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Default)`](../object/Thing.html#dobjFor(Default))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))`  `[`dobjFor(GetOff)`](../object/Thing.html#dobjFor(GetOff))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GiveToImplicit)`](../object/Thing.html#dobjFor(GiveToImplicit))`  `[`dobjFor(GoAlong)`](../object/Thing.html#dobjFor(GoAlong))`  `[`dobjFor(GoNear)`](../object/Thing.html#dobjFor(GoNear))`  `[`dobjFor(GoTo)`](../object/Thing.html#dobjFor(GoTo))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))`  `[`dobjFor(LieIn)`](../object/Thing.html#dobjFor(LieIn))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))`  `[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))`  `[`dobjFor(Purloin)`](../object/Thing.html#dobjFor(Purloin))`  `[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))`  `[`dobjFor(PushTravelClimbDown)`](../object/Thing.html#dobjFor(PushTravelClimbDown))`  `[`dobjFor(PushTravelClimbUp)`](../object/Thing.html#dobjFor(PushTravelClimbUp))`  `[`dobjFor(PushTravelDir)`](../object/Thing.html#dobjFor(PushTravelDir))`  `[`dobjFor(PushTravelEnter)`](../object/Thing.html#dobjFor(PushTravelEnter))`  `[`dobjFor(PushTravelGetOutOf)`](../object/Thing.html#dobjFor(PushTravelGetOutOf))`  `[`dobjFor(PushTravelThrough)`](../object/Thing.html#dobjFor(PushTravelThrough))`  `[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))`  `[`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))`  `[`dobjFor(QueryAbout)`](../object/Thing.html#dobjFor(QueryAbout))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(SayTo)`](../object/Thing.html#dobjFor(SayTo))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))`  `[`dobjFor(ShowToImplicit)`](../object/Thing.html#dobjFor(ShowToImplicit))`  `[`dobjFor(SitIn)`](../object/Thing.html#dobjFor(SitIn))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(SmellSomething)`](../object/Thing.html#dobjFor(SmellSomething))`  `[`dobjFor(StandIn)`](../object/Thing.html#dobjFor(StandIn))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(SwitchOff)`](../object/Thing.html#dobjFor(SwitchOff))`  `[`dobjFor(SwitchOn)`](../object/Thing.html#dobjFor(SwitchOn))`  `[`dobjFor(SwitchVague)`](../object/Thing.html#dobjFor(SwitchVague))`  `[`dobjFor(Take)`](../object/Thing.html#dobjFor(Take))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TalkAbout)`](../object/Thing.html#dobjFor(TalkAbout))`  `[`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))`  `[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))`  `[`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))`  `[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))`  `[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(TypeOnVague)`](../object/Thing.html#dobjFor(TypeOnVague))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`dobjFor(WriteOn)`](../object/Thing.html#dobjFor(WriteOn))`  `[`doPushTravel`](../object/Thing.html#doPushTravel)`  `[`filterResolveList`](../object/Thing.html#filterResolveList)`  `[`findHidden`](../object/Thing.html#findHidden)`  `[`findPlausibleKey`](../object/Thing.html#findPlausibleKey)`  `[`firstContainerPathBlock`](../object/Thing.html#firstContainerPathBlock)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarriedBulk`](../object/Thing.html#getCarriedBulk)`  `[`getCarriedWeight`](../object/Thing.html#getCarriedWeight)`  `[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)`  `[`getWeightWithin`](../object/Thing.html#getWeightWithin)`  `[`handleCommand`](../object/Thing.html#handleCommand)`  `[`hasSeen`](../object/Thing.html#hasSeen)`  `[`hideFromAll`](../object/Thing.html#hideFromAll)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(Default)`](../object/Thing.html#iobjFor(Default))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveTo)`](../object/Thing.html#iobjFor(MoveTo))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PushTravelClimbDown)`](../object/Thing.html#iobjFor(PushTravelClimbDown))`  `[`iobjFor(PushTravelClimbUp)`](../object/Thing.html#iobjFor(PushTravelClimbUp))`  `[`iobjFor(PushTravelEnter)`](../object/Thing.html#iobjFor(PushTravelEnter))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isAudibleFrom`](../object/Thing.html#isAudibleFrom)`  `[`isChild`](../object/Thing.html#isChild)`  `[`isDirectChild`](../object/Thing.html#isDirectChild)`  `[`isDirectlyHeldBy`](../object/Thing.html#isDirectlyHeldBy)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isDirectlyWornBy`](../object/Thing.html#isDirectlyWornBy)`  `[`isHeldBy`](../object/Thing.html#isHeldBy)`  `[`isIlluminated`](../object/Thing.html#isIlluminated)`  `[`isInterior`](../object/Thing.html#isInterior)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOutside`](../object/Thing.html#isOutside)`  `[`isReadableFrom`](../object/Thing.html#isReadableFrom)`  `[`isSmellableFrom`](../object/Thing.html#isSmellableFrom)`  `[`isThereALightSourceIn`](../object/Thing.html#isThereALightSourceIn)`  `[`isVisibleFrom`](../object/Thing.html#isVisibleFrom)`  `[`isWornBy`](../object/Thing.html#isWornBy)`  `[`knowsAbout`](../object/Thing.html#knowsAbout)`  `[`listableContentsOf`](../object/Thing.html#listableContentsOf)`  `[`listContents`](../object/Thing.html#listContents)`  `[`listenDesc`](../object/Thing.html#listenDesc)`  `[`listRemoteContents`](../object/Thing.html#listRemoteContents)`  `[`listSubcontentsOf`](../object/Thing.html#listSubcontentsOf)`  `[`locationWhich`](../object/Thing.html#locationWhich)`  `[`locType`](../object/Thing.html#locType)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`makeCleaned`](../object/Thing.html#makeCleaned)`  `[`makeFastened`](../object/Thing.html#makeFastened)`  `[`makeLit`](../object/Thing.html#makeLit)`  `[`makeLocked`](../object/Thing.html#makeLocked)`  `[`makeMovedTo`](../object/Thing.html#makeMovedTo)`  `[`makeOn`](../object/Thing.html#makeOn)`  `[`makeOpen`](../object/Thing.html#makeOpen)`  `[`makeSetting`](../object/Thing.html#makeSetting)`  `[`makeWorn`](../object/Thing.html#makeWorn)`  `[`moveHidden`](../object/Thing.html#moveHidden)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveMLIntoAdd`](../object/Thing.html#moveMLIntoAdd)`  `[`moveMLOutOf`](../object/Thing.html#moveMLOutOf)`  `[`nestedLoc`](../object/Thing.html#nestedLoc)`  `[`nominalOwner`](../object/Thing.html#nominalOwner)`  `[`noteSeen`](../object/Thing.html#noteSeen)`  `[`notifyEvent`](../object/Thing.html#notifyEvent)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifyRemove`](../object/Thing.html#notifyRemove)`  `[`notifySightEvent`](../object/Thing.html#notifySightEvent)`  `[`notifySmellEvent`](../object/Thing.html#notifySmellEvent)`  `[`notifySoundEvent`](../object/Thing.html#notifySoundEvent)`  `[`notionalContents`](../object/Thing.html#notionalContents)`  `[`outermostParent`](../object/Thing.html#outermostParent)`  `[`ownedBy`](../object/Thing.html#ownedBy)`  `[`pushTravelRevealItems`](../object/Thing.html#pushTravelRevealItems)`  `[`reachBlockedMsg`](../object/Thing.html#reachBlockedMsg)`  `[`remoteBrightness`](../object/Thing.html#remoteBrightness)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteObjInName`](../object/Thing.html#remoteObjInName)`  `[`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`revealOnMove`](../object/Thing.html#revealOnMove)`  `[`roomHeadline`](../object/Thing.html#roomHeadline)`  `[`roomSubhead`](../object/Thing.html#roomSubhead)`  `[`sayCantBearMoreWeight`](../object/Thing.html#sayCantBearMoreWeight)`  `[`sayDontKnowHowToGetThere`](../object/Thing.html#sayDontKnowHowToGetThere)`  `[`sayDontKnowHowToReach`](../object/Thing.html#sayDontKnowHowToReach)`  `[`sayFindHidden`](../object/Thing.html#sayFindHidden)`  `[`sayPushTravel`](../object/Thing.html#sayPushTravel)`  `[`sayTooHeavy`](../object/Thing.html#sayTooHeavy)`  `[`sayTooHeavyToHide`](../object/Thing.html#sayTooHeavyToHide)`  `[`scoreObject`](../object/Thing.html#scoreObject)`  `[`setHasSeen`](../object/Thing.html#setHasSeen)`  `[`setKnown`](../object/Thing.html#setKnown)`  `[`setKnowsAbout`](../object/Thing.html#setKnowsAbout)`  `[`setSeen`](../object/Thing.html#setSeen)`  `[`shinesOut`](../object/Thing.html#shinesOut)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`totalBulkIn`](../object/Thing.html#totalBulkIn)`  `[`totalWeightIn`](../object/Thing.html#totalWeightIn)`  `[`traceContainerPath`](../object/Thing.html#traceContainerPath)`  `[`tryCheck`](../object/Thing.html#tryCheck)`  `[`tryMakingPosture`](../object/Thing.html#tryMakingPosture)`  `[`unmention`](../object/Thing.html#unmention)`  `[`verifyActor`](../object/Thing.html#verifyActor)`  `[`verifyEnterPosture`](../object/Thing.html#verifyEnterPosture)`  `[`verifyPushTravel`](../object/Thing.html#verifyPushTravel)`  `[`wouldBeLitFor`](../object/Thing.html#wouldBeLitFor)`  `

Inherited from `ReplaceRedirector` :  
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

Inherited from `Mentionable` :  
` `[`construct`](../object/Mentionable.html#construct)`  `[`matchName`](../object/Mentionable.html#matchName)`  `[`matchNameCommon`](../object/Mentionable.html#matchNameCommon)`  `[`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig)`  `[`phraseMatchName`](../object/Mentionable.html#phraseMatchName)`  `[`simpleMatchName`](../object/Mentionable.html#simpleMatchName)`  `

Inherited from `LMentionable` :  
` `[`addDictWord`](../object/LMentionable.html#addDictWord)`  `[`addVocab`](../object/LMentionable.html#addVocab)`  `[`addVocabWord`](../object/LMentionable.html#addVocabWord)`  `[`aNameFrom`](../object/LMentionable.html#aNameFrom)`  `[`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss)`  `[`classInit`](../object/LMentionable.html#classInit)`  `[`contify`](../object/LMentionable.html#contify)`  `[`distinguishedName`](../object/LMentionable.html#distinguishedName)`  `[`ifPronoun`](../object/LMentionable.html#ifPronoun)`  `[`inheritVocab`](../object/LMentionable.html#inheritVocab)`  `[`initVocabWord`](../object/LMentionable.html#initVocabWord)`  `[`locify`](../object/LMentionable.html#locify)`  `[`matchPronoun`](../object/LMentionable.html#matchPronoun)`  `[`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom)`  `[`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom)`  `[`possessify`](../object/LMentionable.html#possessify)`  `[`pronoun`](../object/LMentionable.html#pronoun)`  `[`removeVocabWord`](../object/LMentionable.html#removeVocabWord)`  `[`replaceVocab`](../object/LMentionable.html#replaceVocab)`  `[`theNameFrom`](../object/LMentionable.html#theNameFrom)`  `[`theNameIs`](../object/LMentionable.html#theNameIs)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="aft"></span>

`aft`

[travel.t](../file/travel.t.html)\[[51](../source/travel.t.html#51)\]

<div class="desc">

*no description available*

</div>

<span id="allowCompassDirections"></span>

`allowCompassDirections`

[travel.t](../file/travel.t.html)\[[59](../source/travel.t.html#59)\]

<div class="desc">

Are compass directions allowed for travel from this room? By default
we'll allow thema anywhere, but game code may wish to override this for
rooms that are aboard a vessel.

</div>

<span id="allowDarkTravel"></span>

`allowDarkTravel`

[travel.t](../file/travel.t.html)\[[303](../source/travel.t.html#303)\]

<div class="desc">

Normally we don't allow travel from this location if both it and the
destination are in darkness. To allow travel from this location in any
case set allowDarkTravel to true.

</div>

<span id="audibleRooms"></span>

`audibleRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[236](../source/senseRegion.t.html#236)\]

<div class="desc">

The lists of rooms we can smell, hear, talk or throw from/into from this
room.

</div>

<span id="autoBackConnections"></span>

`autoBackConnections`

[symconn.t](../file/symconn.t.html)\[[166](../source/symconn.t.html#166)\]

<div class="desc">

Flag - do we want the library (specifically the preInit method of Thing)
to automatically create connections back (in the reverse direction) from
any rooms our direction properties (directlt, or indirectly via a
TravelConnector) point to? By default we do (since that was the part of
the original purpose of the SymmConn extension) but game code can set
this to nil (either on the Room class or on individual rooms) to
suppress it if it's not wanted - which may be the case if the this
extension is being used for SymmConnectors rather than

</div>

<span id="autoName"></span>

`autoName`

[english.t](../file/english.t.html)\[[2204](../source/english.t.html#2204)\]

<div class="desc">

Flag: do we want this room to take its vocab (and hence its name) from
its roomTitle property if its vocab property isn't explicitly defined?
By default we do.

</div>

<span id="canLieInMe"></span>

`canLieInMe`<span class="rem">OVERRIDDEN</span>

[postures.t](../file/postures.t.html)\[[535](../source/postures.t.html#535)\]

<div class="desc">

*no description available*

</div>

<span id="cannotGoThatWayInDarkMsg"></span>

`cannotGoThatWayInDarkMsg`

[travel.t](../file/travel.t.html)\[[279](../source/travel.t.html#279)\]

<div class="desc">

The message to display when travel is attempted in the dark, either in a
direction for which no destination (or other handling) is defined, or in
a direction in which the exit is not visible in the dark.

</div>

<span id="cannotGoThatWayMsg"></span>

`cannotGoThatWayMsg`

[travel.t](../file/travel.t.html)\[[254](../source/travel.t.html#254)\]

<div class="desc">

The Message to display if travel is disallowed in any given direction
(because the corresponding direction property of the Room is nil).

</div>

<span id="canSitInMe"></span>

`canSitInMe`<span class="rem">OVERRIDDEN</span>

[postures.t](../file/postures.t.html)\[[534](../source/postures.t.html#534)\]

<div class="desc">

*no description available*

</div>

<span id="canStandInMe"></span>

`canStandInMe`<span class="rem">OVERRIDDEN</span>

[postures.t](../file/postures.t.html)\[[533](../source/postures.t.html#533)\]

<div class="desc">

By default we assume that an actor can sit, stand or lie in a room
\[DEFINED IN POSTURES EXTENSION\]

</div>

<span id="ceilingObj"></span>

`ceilingObj`

[roomparts.t](../file/roomparts.t.html)\[[77](../source/roomparts.t.html#77)\]

<div class="desc">

The ceilingObj property defines the object to be used for this Room's
ceiling. By default we use the defaultCeiling object defined below.
\[DEFINED IN ROOMPARTS EXTENSION\]

</div>

<span id="contType"></span>

`contType`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[397](../source/travel.t.html#397)\]

<div class="desc">

Anything in the Room is deemed to be inside it (this sounds tautologous,
but it's why we give Room a contType of In).

</div>

<span id="down"></span>

`down`

[travel.t](../file/travel.t.html)\[[42](../source/travel.t.html#42)\]

<div class="desc">

*no description available*

</div>

<span id="east"></span>

`east`

[travel.t](../file/travel.t.html)\[[38](../source/travel.t.html#38)\]

<div class="desc">

*no description available*

</div>

<span id="extraScopeItems"></span>

`extraScopeItems`

[travel.t](../file/travel.t.html)\[[567](../source/travel.t.html#567)\]

<div class="desc">

A list of extra items to be added to scope when an action is carried out
in this room.

</div>

<span id="floorObj"></span>

`floorObj`

[travel.t](../file/travel.t.html)\[[127](../source/travel.t.html#127)\]

<div class="desc">

Although we don't define room parts in general, we do give every Room a
floor so that the parser can refer to objects 'on the ground' when
asking disambiguation questions. By default we supply every Room with
the defaultGround MultiLoc object to represent its floor. You can if you
like replace this with a custom floor object in particular rooms, but
it's highly recommended that you define your custom floor to be of the
Floor class. It's also legal to define floorObj as nil on a Room that
represents an obviously floorless place, such as the top of a mast or
tree.

</div>

<span id="fore"></span>

`fore`

[travel.t](../file/travel.t.html)\[[52](../source/travel.t.html#52)\]

<div class="desc">

*no description available*

</div>

<span id="in"></span>

`in`

[travel.t](../file/travel.t.html)\[[43](../source/travel.t.html#43)\]

<div class="desc">

*no description available*

</div>

<span id="isDestinationKnown"></span>

`isDestinationKnown`

[travel.t](../file/travel.t.html)\[[111](../source/travel.t.html#111)\]

<div class="desc">

By default our destination is known if we've been visited

</div>

<span id="isFixed"></span>

`isFixed`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[88](../source/travel.t.html#88)\]

<div class="desc">

A Room is always fixed in place.

</div>

<span id="isLit"></span>

`isLit`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[85](../source/travel.t.html#85)\]

<div class="desc">

A Room is normally lit, but if we want a dark room we can override isLit
to nil.

</div>

<span id="isOpen"></span>

`isOpen`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[91](../source/travel.t.html#91)\]

<div class="desc">

A Room is always open

</div>

<span id="lastSeenAt"></span>

`lastSeenAt`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[570](../source/travel.t.html#570)\]

<div class="desc">

The location at which a Room was last seen is always itself.

</div>

<span id="linkedRooms"></span>

`linkedRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[245](../source/senseRegion.t.html#245)\]

<div class="desc">

The list of rooms to which we're linked by virtue of being in the same
SenseRegion.

</div>

<span id="listOrder"></span>

`// listOrder`<span class="rem">OVERRIDDEN</span><span class="rem">Interface
description only</span>

[senseRegion.t](../file/senseRegion.t.html)\[[473](../source/senseRegion.t.html#473)\]

<div class="desc">

listOrder is inherited from Thing with a default value of 100. For a
Room in a SenseRegion it can control the order in which other rooms in
the SenseRegion have their contents described (higher = later), although
this can be adjusted via the remoteRoomListOrder(pov) method.

</div>

<span id="north"></span>

`north`

[travel.t](../file/travel.t.html)\[[37](../source/travel.t.html#37)\]

<div class="desc">

The direction properties (north, south, etc.) define what happens when
travel is attempted in the corresponding direction. A direction property
may be defined as another Room (in which case traveling in the
corresponding direction takes the actor directly to that Room), or to a
TravelConnector (including a Door or Stairway), or to a single-quoted or
double-quoted string (which is then simply displayed) or to a method
(which is then executed). It is recommended that methods only be used
when the effect of attempted travel is something other than ordinary
travel; to impose conditions on travel or define the side-effects of
travel it's usually better to use a TravelConnector object.

</div>

<span id="northeast"></span>

`northeast`

[travel.t](../file/travel.t.html)\[[47](../source/travel.t.html#47)\]

<div class="desc">

*no description available*

</div>

<span id="northwest"></span>

`northwest`

[travel.t](../file/travel.t.html)\[[48](../source/travel.t.html#48)\]

<div class="desc">

*no description available*

</div>

<span id="noScriptAfterListen"></span>

`noScriptAfterListen`

[travel.t](../file/travel.t.html)\[[416](../source/travel.t.html#416)\]

<div class="desc">

Flag, do we want to prevent out script firing after a LISTEN command? By
default we do because otherwise the respose to a LISTEN command might
clash with an atmospheric message appearing on the same turn.

</div>

<span id="out"></span>

`out`

[travel.t](../file/travel.t.html)\[[44](../source/travel.t.html#44)\]

<div class="desc">

*no description available*

</div>

<span id="outermostParent"></span>

`outermostParent`

[travel.t](../file/travel.t.html)\[[247](../source/travel.t.html#247)\]

<div class="desc">

A Room's outermost parent is itself.

</div>

<span id="port"></span>

`port`

[travel.t](../file/travel.t.html)\[[49](../source/travel.t.html#49)\]

<div class="desc">

*no description available*

</div>

<span id="regions"></span>

`regions`

[travel.t](../file/travel.t.html)\[[423](../source/travel.t.html#423)\]

<div class="desc">

This room can optionally be in one or more regions. The regions property
hold the region or a list of regions I'm in.

</div>

<span id="remoteContentsLister"></span>

`remoteContentsLister`

[senseRegion.t](../file/senseRegion.t.html)\[[397](../source/senseRegion.t.html#397)\]

<div class="desc">

The contents lister to use to list this room's miscellaneous contents
when viewed from a remote location.

</div>

<span id="remoteMiscContentsList"></span>

`remoteMiscContentsList`

[senseRegion.t](../file/senseRegion.t.html)\[[280](../source/senseRegion.t.html#280)\]

<div class="desc">

*no description available*

</div>

<span id="remoteSecondSpecialList"></span>

`remoteSecondSpecialList`

[senseRegion.t](../file/senseRegion.t.html)\[[279](../source/senseRegion.t.html#279)\]

<div class="desc">

These properties are for the internal use of the remote listing
routines, and should normally be left alone by game code.

</div>

<span id="roomFirstDesc"></span>

`roomFirstDesc`

[travel.t](../file/travel.t.html)\[[727](../source/travel.t.html#727)\]

<div class="desc">

The description of this room to be used when it has not previously
examined (and is thus being described fot the first time). If this is
left as nil, we simply use the desc instead.

</div>

<span id="roomsViewed"></span>

`roomsViewed`

[viewport.t](../file/viewport.t.html)\[[176](../source/viewport.t.html#176)\]

<div class="desc">

The list of rooms viewed from Viewports from within this room. This
enables the player to refer to objects in rooms that have been viewed.
\[DEFINED ON VIEWPORT EXTENSION\]

</div>

<span id="smellableRooms"></span>

`smellableRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[237](../source/senseRegion.t.html#237)\]

<div class="desc">

*no description available*

</div>

<span id="south"></span>

`south`

[travel.t](../file/travel.t.html)\[[39](../source/travel.t.html#39)\]

<div class="desc">

*no description available*

</div>

<span id="southeast"></span>

`southeast`

[travel.t](../file/travel.t.html)\[[45](../source/travel.t.html#45)\]

<div class="desc">

*no description available*

</div>

<span id="southwest"></span>

`southwest`

[travel.t](../file/travel.t.html)\[[46](../source/travel.t.html#46)\]

<div class="desc">

*no description available*

</div>

<span id="starboard"></span>

`starboard`

[travel.t](../file/travel.t.html)\[[50](../source/travel.t.html#50)\]

<div class="desc">

*no description available*

</div>

<span id="talkableRooms"></span>

`talkableRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[238](../source/senseRegion.t.html#238)\]

<div class="desc">

*no description available*

</div>

<span id="throwableRooms"></span>

`throwableRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[239](../source/senseRegion.t.html#239)\]

<div class="desc">

*no description available*

</div>

<span id="up"></span>

`up`

[travel.t](../file/travel.t.html)\[[41](../source/travel.t.html#41)\]

<div class="desc">

*no description available*

</div>

<span id="visibleRooms"></span>

`visibleRooms`

[senseRegion.t](../file/senseRegion.t.html)\[[230](../source/senseRegion.t.html#230)\]

<div class="desc">

The list of rooms that are visible from this room. Ordinarily this list
is constructed at Preinit by any Sense Regions this room belongs to, so
shouldn't normally be manually adjusted by game code. It's conceivable
that game code could tweak these lists after Preinit, though, perhaps to
create a one-way connection (e.g. to model a high room that overlooks
lower ones)

</div>

<span id="visited"></span>

`visited`

[travel.t](../file/travel.t.html)\[[114](../source/travel.t.html#114)\]

<div class="desc">

Has this room been visited?

</div>

<span id="wallObjs"></span>

`wallObjs`

[roomparts.t](../file/roomparts.t.html)\[[86](../source/roomparts.t.html#86)\]

<div class="desc">

The wallObjs property defines the list of walls in this Room. By default
we define use the four default walls. Particular rooms that don't have
four walls (e.g. a length of passage) or which want to use custom wall
objects can override this. \[DEFINED IN ROOMPARTS EXTENSION\]

</div>

<span id="west"></span>

`west`

[travel.t](../file/travel.t.html)\[[40](../source/travel.t.html#40)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addExtraScopeItems"></span>

`addExtraScopeItems (action)`

[travel.t](../file/travel.t.html)\[[542](../source/travel.t.html#542)\],
[viewport.t](../file/viewport.t.html)\[[196](../source/viewport.t.html#196)\]

<div class="desc">

Add extra items into scope for the action. By default we simply add the
items from our extraScopeItems list together with those of any regions
we're it. This allows commonly visible items such as the sky to be added
to scope in dark outdoor rooms, for instance.

*Modified in
[viewport.t](../file/viewport.t.html)\[[196](../source/viewport.t.html#196)\]:*  
Once the player character has viewed remote rooms and their contents via
a Viewport, the player may want to refer to them in commands, if only to
examine them, so we need to add them to scope. \[MODIFIED FOR VIEWPORT
EXTENSION\]

</div>

<span id="addToRegions"></span>

`addToRegions ( )`

[travel.t](../file/travel.t.html)\[[435](../source/travel.t.html#435)\]

<div class="desc">

Add this room to the room list of all the regions it's in

</div>

<span id="afterTravel"></span>

`afterTravel (traveler, connector)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[356](../source/travel.t.html#356)\]

<div class="desc">

afterTravel(traveler, connector) is called on the room traveler has just
arrived in via connector.

</div>

<span id="allowShipboardDirections"></span>

`allowShipboardDirections ( )`

[travel.t](../file/travel.t.html)\[[68](../source/travel.t.html#68)\]

<div class="desc">

Are shipboard directions meaningful in this room? By default we'll make
them so if and only if this room defines at least one shipboard
directional exit. Game code may wish to modify this, for example, on the
hold of a ship that only defines an up direction but where shipboard
directions would still in principle be meaningful.

</div>

<span id="allRegions"></span>

`allRegions ( )`

[travel.t](../file/travel.t.html)\[[446](../source/travel.t.html#446)\]

<div class="desc">

The list of all the regions this room belongs to. This is calculated the
first time this property is queried and then stored in the property.

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[350](../source/travel.t.html#350)\]

<div class="desc">

beforeTravel(traveler, connector) is called on the room traveler is in
just as traveler is about to attempt travel via connector (a
TravelConnector object).

</div>

<span id="canHearInFrom"></span>

`canHearInFrom (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[435](../source/senseRegion.t.html#435)\]

<div class="desc">

Can we hear into this room from loc (i.e. can an actor in loc hear
something in this room?

</div>

<span id="canHearOutTo"></span>

`canHearOutTo (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[441](../source/senseRegion.t.html#441)\]

<div class="desc">

Can we hear out from this room to loc (i.e. can an actor in this room
hear something in loc)?

</div>

<span id="cannotGoThatWay"></span>

`cannotGoThatWay (dir)`

[travel.t](../file/travel.t.html)\[[264](../source/travel.t.html#264)\]

<div class="desc">

The method that is called when travel is attempted in a direction (given
the dir parameter) for which nothing is defined. By default we simply
display the cannotGoThatWayMsg followed by a list of exits, but this can
be overridden if desired, and different responses given for different
directions. Note that the dir parameter will be passed as a direction
object. e.g. northDir.

</div>

<span id="cannotGoThatWayInDark"></span>

`cannotGoThatWayInDark (dir)`

[travel.t](../file/travel.t.html)\[[288](../source/travel.t.html#288)\]

<div class="desc">

The method that's called when travel is attempted by an undefined or
invisible exit in the dark. By default we display the
cannotGoThatWayInDarkMsg followed by a list of visible exits, but game
code can override this.

</div>

<span id="cannotReachTargetMsg"></span>

`cannotReachTargetMsg (target)`

[travel.t](../file/travel.t.html)\[[675](../source/travel.t.html#675)\]

<div class="desc">

Optional method that returns a single-quoted string explaining why
target (normally an object in a remote location) cannot be reached from
this room. By default we just return the target's tooFarAwayMsg but this
can be overridden, for example, to return the same format of message for
every target that can't be reached from this room (e.g. "You can't reach
\[the target\] from the meadow. ") \]

</div>

<span id="canSeeInFrom"></span>

`canSeeInFrom (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[426](../source/senseRegion.t.html#426)\]

<div class="desc">

The following six methods take effect only if there would otherwise be a
sensory connection between the current room and loc due to their being
in the same SenseRegion.

Can we see into this room from loc?

</div>

<span id="canSeeOutTo"></span>

`canSeeOutTo (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[429](../source/senseRegion.t.html#429)\]

<div class="desc">

Can we see out of this room to loc?

</div>

<span id="canSmellInFrom"></span>

`canSmellInFrom (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[447](../source/senseRegion.t.html#447)\]

<div class="desc">

Can we smell into this room from loc (i.e. can an actor in loc smell
something in this room?

</div>

<span id="canSmellOutTo"></span>

`canSmellOutTo (loc)`

[senseRegion.t](../file/senseRegion.t.html)\[[453](../source/senseRegion.t.html#453)\]

<div class="desc">

Can we hear out from this room to loc (i.e. can an actor in this room
hear something in loc)?

</div>

<span id="describeRemotely"></span>

`describeRemotely ( )`

[viewport.t](../file/viewport.t.html)\[[230](../source/viewport.t.html#230)\]

<div class="desc">

\[DEFINED ON VIEWPORT EXTENSION\] Used for describing a Room when seen
through a Viewport.

</div>

<span id="destination"></span>

`destination ( )`

[travel.t](../file/travel.t.html)\[[108](../source/travel.t.html#108)\]

<div class="desc">

Since a Room provides the TravelConnector interface, we need to define
where it leads to when one attempts to travel via it; a Room always
leads to itself (i.e. traveling via a Room takes one to that Room).

</div>

<span id="dobjFor(Examine)"></span>

`dobjFor(Examine)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[642](../source/travel.t.html#642)\],
[viewport.t](../file/viewport.t.html)\[[214](../source/viewport.t.html#214)\]

<div class="desc">

Examining a Room is the same as looking around within it.

*Modified in
[viewport.t](../file/viewport.t.html)\[[214](../source/viewport.t.html#214)\]:*  
\[MODIFIED FOR VIEWPORT EXTENSION\]

</div>

<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[648](../source/travel.t.html#648)\]

<div class="desc">

Going out of a Room is the same as executing an OUT command

</div>

<span id="examineStatus"></span>

`examineStatus ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[639](../source/travel.t.html#639)\]

<div class="desc">

By default we don't want the examineStatus method of a Room to do
anything except displaying the stateDesc, should we have defined one. In
particular we don't want it to list the contents of the Room, since
Looking Around will do this anyway.

</div>

<span id="execTravel"></span>

`execTravel (actor, traveler, conn)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[138](../source/travel.t.html#138)\],
[objtime.t](../file/objtime.t.html)\[[372](../source/objtime.t.html#372)\]

<div class="desc">

When executing travel we move the traveler into the room. Then, if the
traveler is the player char we perform a look around in the room,
provided we should look around on entering the room. actor is the actor
doing the traveling, traveler is the traveler doing the traveling
(normally the same as actor unless actor is in a Vehicle, in which case
traveler will be the Vehicle) and conn is the TravelConnector the
vehicle is traversing in order to reach this room.

*Modified in
[objtime.t](../file/objtime.t.html)\[[372](../source/objtime.t.html#372)\]:*  
Modified in OBJTIME EXTENSION to add the traversal time for entering the
room.

</div>

<span id="getAllRegions"></span>

`getAllRegions ( )`

[travel.t](../file/travel.t.html)\[[454](../source/travel.t.html#454)\]

<div class="desc">

Calculate a list of all the regions this room belongs to

</div>

<span id="getConnector"></span>

`getConnector (prop)`

[travel.t](../file/travel.t.html)\[[684](../source/travel.t.html#684)\]

<div class="desc">

Get the connector object explictly or implicitly defined on prop, even
if it uses the asExit macro. If it's not an object, return nil;

</div>

<span id="getDirection"></span>

`getDirection (conn)`

[travel.t](../file/travel.t.html)\[[593](../source/travel.t.html#593)\]

<div class="desc">

The getDirection method returns the direction by which one would need to
travel from this room to travel via the connector conn (or nil if none
of the room's direction properties point to conn).

</div>

<span id="getDirectionTo"></span>

`getDirectionTo (dest)`

[travel.t](../file/travel.t.html)\[[611](../source/travel.t.html#611)\]

<div class="desc">

The getDirectionTo method returns the direction by which one would need
to travel from this room to travel to dest not via an UnlistedProxy
Connector (normally defined by the asExit() macro. If none of the room's
direction properties clearly leads to dest via a TravelConnector
including a Room) then return nil.

</div>

<span id="getOutermostRoom"></span>

`getOutermostRoom ( )`

[travel.t](../file/travel.t.html)\[[241](../source/travel.t.html#241)\]

<div class="desc">

A Room's outermost room is itself.

</div>

<span id="initVocab"></span>

`initVocab ( )`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2186](../source/english.t.html#2186)\]

<div class="desc">

*no description available*

</div>

<span id="inRoomName"></span>

`inRoomName (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[414](../source/senseRegion.t.html#414)\]

<div class="desc">

The name that's used to introduce a list of miscellaneous objects in
this room when viewed from a remote location containing the pov object
(normally the player character).

</div>

<span id="interiorDesc"></span>

`interiorDesc ( )`

[travel.t](../file/travel.t.html)\[[714](../source/travel.t.html#714)\]

<div class="desc">

If we've defined a roomFirstDesc and this room description hasn't been
displayed before, display our roomFirstDesc, otherwise display our desc.

</div>

<span id="interiorParent"></span>

`interiorParent ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[531](../source/travel.t.html#531)\]

<div class="desc">

A Room has no interiorParent since it's a top-level container.

</div>

<span id="iobjFor(PushTravelGetOutOf)"></span>

`iobjFor(PushTravelGetOutOf)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[657](../source/travel.t.html#657)\]

<div class="desc">

Pushing an object out of a Room is the same as pushing it via the OUT
exit.

</div>

<span id="isIn"></span>

`isIn (region)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[429](../source/travel.t.html#429)\]

<div class="desc">

A Room can't be in another Room or a Thing, but it can notionally be in
a Region, so we check to see if we're in the list of our regions.

</div>

<span id="litWithin"></span>

`litWithin ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[97](../source/travel.t.html#97)\]

<div class="desc">

A Room is lit within it it's illuminated (it's either lit itself or
contains a light source

</div>

<span id="lookOnEnter"></span>

`lookOnEnter (obj)`

[travel.t](../file/travel.t.html)\[[234](../source/travel.t.html#234)\],
[senseRegion.t](../file/senseRegion.t.html)\[[461](../source/senseRegion.t.html#461)\]

<div class="desc">

Should we look around on entering this room? By default we should; this
is overridden in senseRegion.t to provide for the possibility of a
"continuous space" implementation.

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[461](../source/senseRegion.t.html#461)\]:*  
Should we look around on entering this room? Normally we should, unless
both the room obj is travelling from and the room it's travelling to
(normally this room) both belong in a SenseRegion whose contSpace
property is true.

</div>

<span id="notifyAfter"></span>

`notifyAfter ( )`

[travel.t](../file/travel.t.html)\[[322](../source/travel.t.html#322)\]

<div class="desc">

Call the after action notifications on this room and its regions

</div>

<span id="notifyBefore"></span>

`notifyBefore ( )`

[travel.t](../file/travel.t.html)\[[308](../source/travel.t.html#308)\]

<div class="desc">

Call the before action notifications on this room and its regions

</div>

<span id="notifyDeparture"></span>

`notifyDeparture (traveler, dest)`

[travel.t](../file/travel.t.html)\[[474](../source/travel.t.html#474)\],
[sensory.t](../file/sensory.t.html)\[[714](../source/sensory.t.html#714)\],
[symconn.t](../file/symconn.t.html)\[[200](../source/symconn.t.html#200)\],
[viewport.t](../file/viewport.t.html)\[[182](../source/viewport.t.html#182)\]

<div class="desc">

Carry out the notifications for a traveler leaving this room to go to
dest.

*Modified in
[sensory.t](../file/sensory.t.html)\[[714](../source/sensory.t.html#714)\]:*  
Reset every SensoryEmanation in this room to its initial state when the
player character leaves this room. \[MODIFIED FOR SENSORY EXTENSION\]

*Modified in
[symconn.t](../file/symconn.t.html)\[[200](../source/symconn.t.html#200)\]:*  
Modified in SYMCONN EXTENSION to update the vocab on any SymPassages in
our destination.

*Modified in
[viewport.t](../file/viewport.t.html)\[[182](../source/viewport.t.html#182)\]:*  
Reset the list of rooms viewed when the player character leaves the
room. \[MODIFIED FOR VIEWPORT EXTENSION\]

</div>

<span id="outermostVisibleParent"></span>

`outermostVisibleParent ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[244](../source/travel.t.html#244)\]

<div class="desc">

A Room's outermost visible parent is itself.

</div>

<span id="preinitThing"></span>

`preinitThing ( )`<span class="rem">OVERRIDDEN</span>

[symconn.t](../file/symconn.t.html)\[[23](../source/symconn.t.html#23)\]

<div class="desc">

Modified for SYMCOMM EXTENSION to set up symmetrical connectors at
preinit.

</div>

<span id="regionsInCommonWith"></span>

`regionsInCommonWith (other)`

[travel.t](../file/travel.t.html)\[[465](../source/travel.t.html#465)\]

<div class="desc">

return a list of regions that both this room and other are common to.

</div>

<span id="remoteRoomListOrder"></span>

`remoteRoomListOrder (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[482](../source/senseRegion.t.html#482)\]

<div class="desc">

For a Room in a SenseRegion return the order in which other rooms in the
SenseRegion have their contents described (higher = later) from the
point of view of the pov object, which will normally be the room from
which the viewing, smelling or listening is being performed. By default
we just return the Room's listOrder.

</div>

<span id="roomAfterAction"></span>

`roomAfterAction ( )`

[travel.t](../file/travel.t.html)\[[342](../source/travel.t.html#342)\]

<div class="desc">

*no description available*

</div>

<span id="roomBeforeAction"></span>

`roomBeforeAction ( )`

[travel.t](../file/travel.t.html)\[[341](../source/travel.t.html#341)\]

<div class="desc">

roomBeforeAction and roomAfterAction are called just before and after
the action phases of the current action. Individual instances can

</div>

<span id="roomDaemon"></span>

`roomDaemon ( )`

[travel.t](../file/travel.t.html)\[[405](../source/travel.t.html#405)\]

<div class="desc">

This method is invoked on the player char's current room at the end of
every action. By default we run our doScript() method if we're also a
Script (that is, if the Room has been mixed in with an EventList class),
thereby facilitating the display of atmospheric messages.

</div>

<span id="roomRemoteDesc"></span>

`roomRemoteDesc (pov)`

[viewport.t](../file/viewport.t.html)\[[169](../source/viewport.t.html#169)\]

<div class="desc">

The roomRemoteDesc() is the description of the room as seen via a
Viewport from pov. \[DEFINED ON VIEWPORT EXTENSION\]

</div>

<span id="setDestInfo"></span>

`setDestInfo (dirn, dest)`

[travel.t](../file/travel.t.html)\[[583](../source/travel.t.html#583)\]

<div class="desc">

Convenience method to set information about the destination dirn from
this room. The dirn parameter should be specified as a direction object
(e.g. northDir) and the dest parameter as a room. Note this is only
meaningful for direction properties specified as methods (as opposed to
Rooms, Doors or other TravelConnectors or as strings), and is only
useful for priming the route finder at the start of the game before the
player has tried to go in this direction from this room. Once the player
tries this direction the dest info table will be overwritten with
information about where it actually leads.

</div>

<span id="showConnectedMiscContents"></span>

`showConnectedMiscContents (pov)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[269](../source/senseRegion.t.html#269)\]

<div class="desc">

List the miscellaneous contents of a remote room

</div>

<span id="showFirstConnectedSpecials"></span>

`showFirstConnectedSpecials (pov)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[251](../source/senseRegion.t.html#251)\]

<div class="desc">

Show the specialDescs of any items in the other rooms in our
SenseRegions, where specialDescBeforeContents is true

</div>

<span id="showFirstRemoteSpecials"></span>

`showFirstRemoteSpecials (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[290](../source/senseRegion.t.html#290)\]

<div class="desc">

In additional to showing the first (i.e. pre-miscellaneous) list of
items with specialDescs in remote locations, the
showFirstRemoteSpecials() method builds the other lists of objects for
the subsequent methods to use. pov is the point of view object
(typically the player character) from whose point of view the list is
being constructed.

</div>

<span id="showRemoteMiscContents"></span>

`showRemoteMiscContents (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[386](../source/senseRegion.t.html#386)\]

<div class="desc">

List the miscellaneous list of items in this remote location

</div>

<span id="showSecondConnectedSpecials"></span>

`showSecondConnectedSpecials (pov)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[262](../source/senseRegion.t.html#262)\]

<div class="desc">

Show the specialDescs of any items in the other rooms in our
SenseRegions, where specialDescBeforeContents is nil

</div>

<span id="showSecondRemoteSpecials"></span>

`showSecondRemoteSpecials (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[376](../source/senseRegion.t.html#376)\]

<div class="desc">

Show the removeSpecialDesc of each item in the second list of specials

</div>

<span id="showStatuslineExits"></span>

`showStatuslineExits ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[360](../source/travel.t.html#360)\]

<div class="desc">

show the exit list in the status line

</div>

<span id="sortRoomSublist"></span>

`sortRoomSublist (sublist, pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[491](../source/senseRegion.t.html#491)\]

<div class="desc">

Sort a sublist of rooms in ascending order of their
remoteRoomListOrder(pov) and return the result.

</div>

<span id="statusName"></span>

`statusName (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[369](../source/travel.t.html#369)\],
[postures.t](../file/postures.t.html)\[[541](../source/postures.t.html#541)\]

<div class="desc">

The name of the room as it appears in the status line.

*Modified in
[postures.t](../file/postures.t.html)\[[541](../source/postures.t.html#541)\]:*  
The name of the room as it appears in the status line. \[MODIFIED FOR
POSTURES EXTENSION to include the actor's posture\]

</div>

<span id="travelerEntering"></span>

`travelerEntering (traveler, origin)`

[travel.t](../file/travel.t.html)\[[527](../source/travel.t.html#527)\]

<div class="desc">

This method is invoked when traveler is about to enter this room from
origin.

</div>

<span id="travelerLeaving"></span>

`travelerLeaving (traveler, dest)`

[travel.t](../file/travel.t.html)\[[521](../source/travel.t.html#521)\]

<div class="desc">

This method is invoked when traveler is about to leave this room and go
to dest.

</div>

<span id="unmentionRemoteContents"></span>

`unmentionRemoteContents ( )`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[403](../source/senseRegion.t.html#403)\]

<div class="desc">

Reset the contents of all the remote rooms visible from this room to not
having been mentioned.

</div>

<span id="updateSymVocab"></span>

`updateSymVocab ( )`

[symconn.t](../file/symconn.t.html)\[[172](../source/symconn.t.html#172)\]

<div class="desc">

update the vocab of any SymPassages in our contents list that have
seperate room1Vocab and room2Vocab

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
