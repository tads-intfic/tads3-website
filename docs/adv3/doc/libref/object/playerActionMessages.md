---
layout: docs
---
<span class="title">playerActionMessages</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[2561](../source/msg_neu.t.html#2561)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Verb messages for standard library verb implementations for actions
performed by the player character. These return strings suitable for use
in VerifyResult objects as well as for action reports (defaultReport,
mainReport, and so on).

Most of these messages are generic enough to be used for player and
non-player character alike. However, some of the messages either are too
terse (such as the default reports) or are phrased awkwardly for NPC
use, so the NPC verb messages override those.

**`playerActionMessages`**` :   `[`MessageHelper`](../object/MessageHelper.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`playerActionMessages`**  
[`MessageHelper`](../object/MessageHelper.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`alreadyAttachedMsg`](#alreadyAttachedMsg)[`alreadyBurningMsg`](#alreadyBurningMsg)[`alreadyClosedMsg`](#alreadyClosedMsg)[`alreadyHoldingMsg`](#alreadyHoldingMsg)[`alreadyInLocMsg`](#alreadyInLocMsg)[`alreadyLockedMsg`](#alreadyLockedMsg)[`alreadyLyingMsg`](#alreadyLyingMsg)[`alreadyLyingOnMsg`](#alreadyLyingOnMsg)[`alreadyOpenMsg`](#alreadyOpenMsg)[`alreadyPulledMsg`](#alreadyPulledMsg)[`alreadyPushedMsg`](#alreadyPushedMsg)[`alreadyPutBehindMsg`](#alreadyPutBehindMsg)[`alreadyPutInMsg`](#alreadyPutInMsg)[`alreadyPutOnMsg`](#alreadyPutOnMsg)[`alreadyPutUnderMsg`](#alreadyPutUnderMsg)[`alreadySittingMsg`](#alreadySittingMsg)[`alreadySittingOnMsg`](#alreadySittingOnMsg)[`alreadyStandingMsg`](#alreadyStandingMsg)[`alreadyStandingOnMsg`](#alreadyStandingOnMsg)[`alreadySwitchedOffMsg`](#alreadySwitchedOffMsg)[`alreadySwitchedOnMsg`](#alreadySwitchedOnMsg)[`alreadyUnlockedMsg`](#alreadyUnlockedMsg)[`alreadyWearingMsg`](#alreadyWearingMsg)[`askVagueMsg`](#askVagueMsg)[`candleNotLitMsg`](#candleNotLitMsg)[`candleOutOfFuelMsg`](#candleOutOfFuelMsg)[`cannotAskSelfForMsg`](#cannotAskSelfForMsg)[`cannotAskSelfMsg`](#cannotAskSelfMsg)[`cannotAttachKeyToMsg`](#cannotAttachKeyToMsg)[`cannotAttachMsg`](#cannotAttachMsg)[`cannotAttachToMsg`](#cannotAttachToMsg)[`cannotAttachToSelfMsg`](#cannotAttachToSelfMsg)[`cannotBoardMsg`](#cannotBoardMsg)[`cannotBurnDobjWithMsg`](#cannotBurnDobjWithMsg)[`cannotBurnMsg`](#cannotBurnMsg)[`cannotBurnWithMsg`](#cannotBurnWithMsg)[`cannotCleanMsg`](#cannotCleanMsg)[`cannotCleanWithMsg`](#cannotCleanWithMsg)[`cannotClimbMsg`](#cannotClimbMsg)[`cannotCloseMsg`](#cannotCloseMsg)[`cannotConsultMsg`](#cannotConsultMsg)[`cannotCutWithMsg`](#cannotCutWithMsg)[`cannotDetachFromMsg`](#cannotDetachFromMsg)[`cannotDetachMsg`](#cannotDetachMsg)[`cannotDetachPermanentMsg`](#cannotDetachPermanentMsg)[`cannotDigMsg`](#cannotDigMsg)[`cannotDigWithMsg`](#cannotDigWithMsg)[`cannotDoFromHereMsg`](#cannotDoFromHereMsg)[`cannotDoThatMsg`](#cannotDoThatMsg)[`cannotDrinkMsg`](#cannotDrinkMsg)[`cannotEatMsg`](#cannotEatMsg)[`cannotEnterHeldMsg`](#cannotEnterHeldMsg)[`cannotEnterMsg`](#cannotEnterMsg)[`cannotEnterOnMsg`](#cannotEnterOnMsg)[`cannotExtinguishMsg`](#cannotExtinguishMsg)[`cannotFastenMsg`](#cannotFastenMsg)[`cannotFastenToMsg`](#cannotFastenToMsg)[`cannotFindTopicMsg`](#cannotFindTopicMsg)[`cannotFlipMsg`](#cannotFlipMsg)[`cannotFollowSelfMsg`](#cannotFollowSelfMsg)[`cannotGetOffOfMsg`](#cannotGetOffOfMsg)[`cannotGetOutMsg`](#cannotGetOutMsg)[`cannotGiveToItselfMsg`](#cannotGiveToItselfMsg)[`cannotGiveToMsg`](#cannotGiveToMsg)[`cannotGiveToSelfMsg`](#cannotGiveToSelfMsg)[`cannotGoBackMsg`](#cannotGoBackMsg)[`cannotGoThatWayInDarkMsg`](#cannotGoThatWayInDarkMsg)[`cannotGoThatWayMsg`](#cannotGoThatWayMsg)[`cannotGoThroughMsg`](#cannotGoThroughMsg)[`cannotJumpOffHereMsg`](#cannotJumpOffHereMsg)[`cannotJumpOffMsg`](#cannotJumpOffMsg)[`cannotJumpOverMsg`](#cannotJumpOverMsg)[`cannotKissMsg`](#cannotKissMsg)[`cannotKissSelfMsg`](#cannotKissSelfMsg)[`cannotLieOnMsg`](#cannotLieOnMsg)[`cannotLightMsg`](#cannotLightMsg)[`cannotLockMsg`](#cannotLockMsg)[`cannotLockWithMsg`](#cannotLockWithMsg)[`cannotLookBehindMsg`](#cannotLookBehindMsg)[`cannotLookInClosedMsg`](#cannotLookInClosedMsg)[`cannotLookThroughMsg`](#cannotLookThroughMsg)[`cannotLookUnderMsg`](#cannotLookUnderMsg)[`cannotMoveActorMsg`](#cannotMoveActorMsg)[`cannotMoveFixtureMsg`](#cannotMoveFixtureMsg)[`cannotMoveHeavyMsg`](#cannotMoveHeavyMsg)[`cannotMoveImmovableMsg`](#cannotMoveImmovableMsg)[`cannotMovePersonMsg`](#cannotMovePersonMsg)[`cannotMovePushableMsg`](#cannotMovePushableMsg)[`cannotMoveWithMsg`](#cannotMoveWithMsg)[`cannotOpenLockedMsg`](#cannotOpenLockedMsg)[`cannotOpenMsg`](#cannotOpenMsg)[`cannotPlugInMsg`](#cannotPlugInMsg)[`cannotPlugInToMsg`](#cannotPlugInToMsg)[`cannotPourIntoMsg`](#cannotPourIntoMsg)[`cannotPourMsg`](#cannotPourMsg)[`cannotPourOntoMsg`](#cannotPourOntoMsg)[`cannotPushTravelMsg`](#cannotPushTravelMsg)[`cannotPutActorMsg`](#cannotPutActorMsg)[`cannotPutBehindMsg`](#cannotPutBehindMsg)[`cannotPutBehindRestrictedMsg`](#cannotPutBehindRestrictedMsg)[`cannotPutBehindSelfMsg`](#cannotPutBehindSelfMsg)[`cannotPutFixtureMsg`](#cannotPutFixtureMsg)[`cannotPutHeavyMsg`](#cannotPutHeavyMsg)[`cannotPutImmovableMsg`](#cannotPutImmovableMsg)[`cannotPutInDispenserMsg`](#cannotPutInDispenserMsg)[`cannotPutInRestrictedMsg`](#cannotPutInRestrictedMsg)[`cannotPutInSelfMsg`](#cannotPutInSelfMsg)[`cannotPutOnRestrictedMsg`](#cannotPutOnRestrictedMsg)[`cannotPutOnSelfMsg`](#cannotPutOnSelfMsg)[`cannotPutPersonMsg`](#cannotPutPersonMsg)[`cannotPutPushableMsg`](#cannotPutPushableMsg)[`cannotPutUnderMsg`](#cannotPutUnderMsg)[`cannotPutUnderRestrictedMsg`](#cannotPutUnderRestrictedMsg)[`cannotPutUnderSelfMsg`](#cannotPutUnderSelfMsg)[`cannotRemoveHeldMsg`](#cannotRemoveHeldMsg)[`cannotReturnToDispenserMsg`](#cannotReturnToDispenserMsg)[`cannotScrewMsg`](#cannotScrewMsg)[`cannotScrewWithMsg`](#cannotScrewWithMsg)[`cannotSetToMsg`](#cannotSetToMsg)[`cannotShowToItselfMsg`](#cannotShowToItselfMsg)[`cannotShowToMsg`](#cannotShowToMsg)[`cannotShowToSelfMsg`](#cannotShowToSelfMsg)[`cannotSitOnMsg`](#cannotSitOnMsg)[`cannotSleepMsg`](#cannotSleepMsg)[`cannotStandOnMsg`](#cannotStandOnMsg)[`cannotStandOnPathMsg`](#cannotStandOnPathMsg)[`cannotSwitchMsg`](#cannotSwitchMsg)[`cannotTakeActorMsg`](#cannotTakeActorMsg)[`cannotTakeFixtureMsg`](#cannotTakeFixtureMsg)[`cannotTakeHeavyMsg`](#cannotTakeHeavyMsg)[`cannotTakeImmovableMsg`](#cannotTakeImmovableMsg)[`cannotTakeLocationMsg`](#cannotTakeLocationMsg)[`cannotTakePersonMsg`](#cannotTakePersonMsg)[`cannotTakePushableMsg`](#cannotTakePushableMsg)[`cannotTalkToSelfMsg`](#cannotTalkToSelfMsg)[`cannotTasteActorMsg`](#cannotTasteActorMsg)[`cannotTastePersonMsg`](#cannotTastePersonMsg)[`cannotTellSelfMsg`](#cannotTellSelfMsg)[`cannotThrowAtContentsMsg`](#cannotThrowAtContentsMsg)[`cannotThrowAtSelfMsg`](#cannotThrowAtSelfMsg)[`cannotThrowToMsg`](#cannotThrowToMsg)[`cannotTurnMsg`](#cannotTurnMsg)[`cannotTurnOffMsg`](#cannotTurnOffMsg)[`cannotTurnOnMsg`](#cannotTurnOnMsg)[`cannotTurnWithMsg`](#cannotTurnWithMsg)[`cannotTypeOnMsg`](#cannotTypeOnMsg)[`cannotUnboardMsg`](#cannotUnboardMsg)[`cannotUnfastenFromMsg`](#cannotUnfastenFromMsg)[`cannotUnfastenMsg`](#cannotUnfastenMsg)[`cannotUnlockMsg`](#cannotUnlockMsg)[`cannotUnlockWithMsg`](#cannotUnlockWithMsg)[`cannotUnplugFromMsg`](#cannotUnplugFromMsg)[`cannotUnplugMsg`](#cannotUnplugMsg)[`cannotUnscrewMsg`](#cannotUnscrewMsg)[`cannotUnscrewWithMsg`](#cannotUnscrewWithMsg)[`cutNoEffectMsg`](#cutNoEffectMsg)[`dontThrowDirMsg`](#dontThrowDirMsg)[`droppingSelfMsg`](#droppingSelfMsg)[`flashlightOnButDarkMsg`](#flashlightOnButDarkMsg)[`followAlreadyHereInDarkMsg`](#followAlreadyHereInDarkMsg)[`followAlreadyHereMsg`](#followAlreadyHereMsg)[`followUnknownMsg`](#followUnknownMsg)[`giveAlreadyHasMsg`](#giveAlreadyHasMsg)[`keyDoesNotFitLockMsg`](#keyDoesNotFitLockMsg)[`keyNotDetachableMsg`](#keyNotDetachableMsg)[`keyNotOnKeyringMsg`](#keyNotOnKeyringMsg)[`matchNotLitMsg`](#matchNotLitMsg)[`moveNoEffectMsg`](#moveNoEffectMsg)[`moveToNoEffectMsg`](#moveToNoEffectMsg)[`mustBeStandingMsg`](#mustBeStandingMsg)[`mustSpecifyTurnToMsg`](#mustSpecifyTurnToMsg)[`newlyDarkMsg`](#newlyDarkMsg)[`noKeyNeededMsg`](#noKeyNeededMsg)[`noRoomToLieMsg`](#noRoomToLieMsg)[`noRoomToSitMsg`](#noRoomToSitMsg)[`noRoomToStandMsg`](#noRoomToStandMsg)[`notAContainerMsg`](#notAContainerMsg)[`notASurfaceMsg`](#notASurfaceMsg)[`notAttachedToMsg`](#notAttachedToMsg)[`notAWeaponMsg`](#notAWeaponMsg)[`notCarryingMsg`](#notCarryingMsg)[`notDoffableMsg`](#notDoffableMsg)[`notFollowableMsg`](#notFollowableMsg)[`nothingBehindMsg`](#nothingBehindMsg)[`nothingBeyondDoorMsg`](#nothingBeyondDoorMsg)[`nothingInsideMsg`](#nothingInsideMsg)[`nothingThroughMsg`](#nothingThroughMsg)[`nothingThroughPassageMsg`](#nothingThroughPassageMsg)[`nothingToHearMsg`](#nothingToHearMsg)[`nothingToSmellMsg`](#nothingToSmellMsg)[`nothingUnderMsg`](#nothingUnderMsg)[`notOnPlatformMsg`](#notOnPlatformMsg)[`notWearableMsg`](#notWearableMsg)[`notWearingMsg`](#notWearingMsg)[`objNotForKeyringMsg`](#objNotForKeyringMsg)[`okayAttachToMsg`](#okayAttachToMsg)[`okayBurnCandleMsg`](#okayBurnCandleMsg)[`okayBurnMatchMsg`](#okayBurnMatchMsg)[`okayCloseMsg`](#okayCloseMsg)[`okayDetachFromMsg`](#okayDetachFromMsg)[`okayDoffMsg`](#okayDoffMsg)[`okayDropMsg`](#okayDropMsg)[`okayEatMsg`](#okayEatMsg)[`okayExtinguishCandleMsg`](#okayExtinguishCandleMsg)[`okayExtinguishMatchMsg`](#okayExtinguishMatchMsg)[`okayJumpMsg`](#okayJumpMsg)[`okayLockMsg`](#okayLockMsg)[`okayNotStandingOnMsg`](#okayNotStandingOnMsg)[`okayOpenMsg`](#okayOpenMsg)[`okayPullLeverMsg`](#okayPullLeverMsg)[`okayPullSpringLeverMsg`](#okayPullSpringLeverMsg)[`okayPushButtonMsg`](#okayPushButtonMsg)[`okayPushLeverMsg`](#okayPushLeverMsg)[`okayPutBehindMsg`](#okayPutBehindMsg)[`okayPutInMsg`](#okayPutInMsg)[`okayPutOnMsg`](#okayPutOnMsg)[`okayPutUnderMsg`](#okayPutUnderMsg)[`okayTakeMsg`](#okayTakeMsg)[`okayTurnOffMsg`](#okayTurnOffMsg)[`okayTurnOnMsg`](#okayTurnOnMsg)[`okayUnlockMsg`](#okayUnlockMsg)[`okayWearMsg`](#okayWearMsg)[`okayYellMsg`](#okayYellMsg)[`pullNoEffectMsg`](#pullNoEffectMsg)[`pushNoEffectMsg`](#pushNoEffectMsg)[`puttingSelfMsg`](#puttingSelfMsg)[`sayGoodbyeMsg`](#sayGoodbyeMsg)[`sayHelloMsg`](#sayHelloMsg)[`sayNoMsg`](#sayNoMsg)[`sayYesMsg`](#sayYesMsg)[`setToInvalidMsg`](#setToInvalidMsg)[`shouldNotBreakMsg`](#shouldNotBreakMsg)[`shouldNotThrowAtFloorMsg`](#shouldNotThrowAtFloorMsg)[`stairwayNotDownMsg`](#stairwayNotDownMsg)[`stairwayNotUpMsg`](#stairwayNotUpMsg)[`takeFromNotBehindMsg`](#takeFromNotBehindMsg)[`takeFromNotInActorMsg`](#takeFromNotInActorMsg)[`takeFromNotInMsg`](#takeFromNotInMsg)[`takeFromNotOnMsg`](#takeFromNotOnMsg)[`takeFromNotUnderMsg`](#takeFromNotUnderMsg)[`takingSelfMsg`](#takingSelfMsg)[`tellVagueMsg`](#tellVagueMsg)[`throwingSelfMsg`](#throwingSelfMsg)[`timePassesMsg`](#timePassesMsg)[`tooDarkMsg`](#tooDarkMsg)[`turnToInvalidMsg`](#turnToInvalidMsg)[`unknownHowToLockMsg`](#unknownHowToLockMsg)[`unknownHowToUnlockMsg`](#unknownHowToUnlockMsg)[`unlockRequiresKeyMsg`](#unlockRequiresKeyMsg)[`uselessToAttackMsg`](#uselessToAttackMsg)[`whereToGoMsg`](#whereToGoMsg)[`wrongAttachmentMsg`](#wrongAttachmentMsg)[`wrongDetachmentMsg`](#wrongDetachmentMsg)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`actorCannotSeeMsg`](#actorCannotSeeMsg)[`becomingTooLargeForActorMsg`](#becomingTooLargeForActorMsg)[`becomingTooLargeForContainerMsg`](#becomingTooLargeForContainerMsg)[`cannotBeWearingMsg`](#cannotBeWearingMsg)[`cannotDoFromMsg`](#cannotDoFromMsg)[`cannotEnterExitOnlyMsg`](#cannotEnterExitOnlyMsg)[`cannotFitIntoOpeningMsg`](#cannotFitIntoOpeningMsg)[`cannotFitOutOfOpeningMsg`](#cannotFitOutOfOpeningMsg)[`cannotFollowFromHereMsg`](#cannotFollowFromHereMsg)[`cannotGoThatWayInVehicleMsg`](#cannotGoThatWayInVehicleMsg)[`cannotGoThroughClosedDoorMsg`](#cannotGoThroughClosedDoorMsg)[`cannotHearMsg`](#cannotHearMsg)[`cannotMoveComponentMsg`](#cannotMoveComponentMsg)[`cannotMoveThroughClosedMsg`](#cannotMoveThroughClosedMsg)[`cannotMoveThroughContainerMsg`](#cannotMoveThroughContainerMsg)[`cannotMoveThroughMsg`](#cannotMoveThroughMsg)[`cannotPushObjectNestedMsg`](#cannotPushObjectNestedMsg)[`cannotPushObjectThatWayMsg`](#cannotPushObjectThatWayMsg)[`cannotPutComponentMsg`](#cannotPutComponentMsg)[`cannotReachIntoOpeningMsg`](#cannotReachIntoOpeningMsg)[`cannotReachObjectMsg`](#cannotReachObjectMsg)[`cannotReachOutOfOpeningMsg`](#cannotReachOutOfOpeningMsg)[`cannotReachThroughMsg`](#cannotReachThroughMsg)[`cannotSmellMsg`](#cannotSmellMsg)[`cannotTakeComponentMsg`](#cannotTakeComponentMsg)[`cannotTasteMsg`](#cannotTasteMsg)[`cannotThrowThroughMsg`](#cannotThrowThroughMsg)[`cannotTouchThroughClosedMsg`](#cannotTouchThroughClosedMsg)[`cannotTouchThroughContainerMsg`](#cannotTouchThroughContainerMsg)[`circularlyBehindMsg`](#circularlyBehindMsg)[`circularlyInMsg`](#circularlyInMsg)[`circularlyOnMsg`](#circularlyOnMsg)[`circularlyUnderMsg`](#circularlyUnderMsg)[`containerBecomingTooFullMsg`](#containerBecomingTooFullMsg)[`containerTooFullMsg`](#containerTooFullMsg)[`decorationNotImportantMsg`](#decorationNotImportantMsg)[`doorClosesBehindMsg`](#doorClosesBehindMsg)[`droppingObjMsg`](#droppingObjMsg)[`floorlessDropMsg`](#floorlessDropMsg)[`foundKeyOnKeyringMsg`](#foundKeyOnKeyringMsg)[`foundNoKeyOnKeyringMsg`](#foundNoKeyOnKeyringMsg)[`handsBecomingTooFullForMsg`](#handsBecomingTooFullForMsg)[`handsTooFullForMsg`](#handsTooFullForMsg)[`heardButNotSeenMsg`](#heardButNotSeenMsg)[`invalidStagingContainerActorMsg`](#invalidStagingContainerActorMsg)[`invalidStagingContainerMsg`](#invalidStagingContainerMsg)[`invalidStagingLocationMsg`](#invalidStagingLocationMsg)[`lookInVaporousMsg`](#lookInVaporousMsg)[`movedKeysToKeyringMsg`](#movedKeysToKeyringMsg)[`movedKeyToKeyringMsg`](#movedKeyToKeyringMsg)[`mustBeBurningMsg`](#mustBeBurningMsg)[`mustBeCarryingMsg`](#mustBeCarryingMsg)[`mustBeClosedMsg`](#mustBeClosedMsg)[`mustBeEmptyMsg`](#mustBeEmptyMsg)[`mustBeHoldingMsg`](#mustBeHoldingMsg)[`mustBeInMsg`](#mustBeInMsg)[`mustBeOpenMsg`](#mustBeOpenMsg)[`mustBeUnlockedMsg`](#mustBeUnlockedMsg)[`mustBeVisibleMsg`](#mustBeVisibleMsg)[`mustDetachMsg`](#mustDetachMsg)[`mustGetOnMsg`](#mustGetOnMsg)[`mustLieOnMsg`](#mustLieOnMsg)[`mustOpenDoorMsg`](#mustOpenDoorMsg)[`mustSitOnMsg`](#mustSitOnMsg)[`nestedRoomTooHighMsg`](#nestedRoomTooHighMsg)[`nestedRoomTooHighToExitMsg`](#nestedRoomTooHighToExitMsg)[`noiseSourceMsg`](#noiseSourceMsg)[`noResponseFromMsg`](#noResponseFromMsg)[`notAddressableMsg`](#notAddressableMsg)[`notInterestedMsg`](#notInterestedMsg)[`notWithIntangibleMsg`](#notWithIntangibleMsg)[`notWithVaporousMsg`](#notWithVaporousMsg)[`npcDescMsg`](#npcDescMsg)[`objCannotHearActorMsg`](#objCannotHearActorMsg)[`odorSourceMsg`](#odorSourceMsg)[`okayFollowInSightMsg`](#okayFollowInSightMsg)[`okayPostureChangeMsg`](#okayPostureChangeMsg)[`okayPushTravelMsg`](#okayPushTravelMsg)[`okaySetToMsg`](#okaySetToMsg)[`okayTurnToMsg`](#okayTurnToMsg)[`rearTooFullMsg`](#rearTooFullMsg)[`refuseCommand`](#refuseCommand)[`roomOkayPostureChangeMsg`](#roomOkayPostureChangeMsg)[`smelledButNotSeenMsg`](#smelledButNotSeenMsg)[`surfaceTooFullMsg`](#surfaceTooFullMsg)[`takenAndMovedToKeyringMsg`](#takenAndMovedToKeyringMsg)[`thingDescMsg`](#thingDescMsg)[`thingSmellDescMsg`](#thingSmellDescMsg)[`thingSoundDescMsg`](#thingSoundDescMsg)[`throwCatchMsg`](#throwCatchMsg)[`throwFallMsg`](#throwFallMsg)[`throwFallShortMsg`](#throwFallShortMsg)[`throwHitFallMsg`](#throwHitFallMsg)[`throwHitMsg`](#throwHitMsg)[`throwShortMsg`](#throwShortMsg)[`tooDistantMsg`](#tooDistantMsg)[`tooHeavyForActorMsg`](#tooHeavyForActorMsg)[`tooLargeForActorMsg`](#tooLargeForActorMsg)[`tooLargeForContainerMsg`](#tooLargeForContainerMsg)[`tooLargeForRearMsg`](#tooLargeForRearMsg)[`tooLargeForUndersideMsg`](#tooLargeForUndersideMsg)[`totalTooHeavyForMsg`](#totalTooHeavyForMsg)[`undersideTooFullMsg`](#undersideTooFullMsg)[`unthingNotHereMsg`](#unthingNotHereMsg)[`vehicleCannotDoFromMsg`](#vehicleCannotDoFromMsg)[`willNotCatchMsg`](#willNotCatchMsg)[`willNotLetGoMsg`](#willNotLetGoMsg)

Inherited from `MessageHelper` :  
[`askDisambigList`](../object/MessageHelper.html#askDisambigList)[`shortTIMsg`](../object/MessageHelper.html#shortTIMsg)[`shortTMsg`](../object/MessageHelper.html#shortTMsg)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="alreadyAttachedMsg"></span>

`alreadyAttachedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3827](../source/msg_neu.t.html#3827)\]

<div class="desc">

cannot attach because we're already attached to the given object

</div>

<span id="alreadyBurningMsg"></span>

`alreadyBurningMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3804](../source/msg_neu.t.html#3804)\]

<div class="desc">

object is already burning

</div>

<span id="alreadyClosedMsg"></span>

`alreadyClosedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3889](../source/msg_neu.t.html#3889)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyHoldingMsg"></span>

`alreadyHoldingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2877](../source/msg_neu.t.html#2877)\]

<div class="desc">

taking something already being held

</div>

<span id="alreadyInLocMsg"></span>

`alreadyInLocMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3983](../source/msg_neu.t.html#3983)\]

<div class="desc">

actor is already in a location

</div>

<span id="alreadyLockedMsg"></span>

`alreadyLockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3892](../source/msg_neu.t.html#3892)\]

<div class="desc">

already locked/unlocked

</div>

<span id="alreadyLyingMsg"></span>

`alreadyLyingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3990](../source/msg_neu.t.html#3990)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyLyingOnMsg"></span>

`alreadyLyingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3991](../source/msg_neu.t.html#3991)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyOpenMsg"></span>

`alreadyOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3888](../source/msg_neu.t.html#3888)\]

<div class="desc">

already open/closed

</div>

<span id="alreadyPulledMsg"></span>

`alreadyPulledMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3663](../source/msg_neu.t.html#3663)\]

<div class="desc">

lever is already in pulled state

</div>

<span id="alreadyPushedMsg"></span>

`alreadyPushedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3652](../source/msg_neu.t.html#3652)\]

<div class="desc">

lever is already in pushed state

</div>

<span id="alreadyPutBehindMsg"></span>

`alreadyPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2904](../source/msg_neu.t.html#2904)\]

<div class="desc">

we can't put the dobj behind the iobj because it's already there

</div>

<span id="alreadyPutInMsg"></span>

`alreadyPutInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2895](../source/msg_neu.t.html#2895)\]

<div class="desc">

we can't put the dobj in the iobj because it's already there

</div>

<span id="alreadyPutOnMsg"></span>

`alreadyPutOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2898](../source/msg_neu.t.html#2898)\]

<div class="desc">

we can't put the dobj on the iobj because it's already there

</div>

<span id="alreadyPutUnderMsg"></span>

`alreadyPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2901](../source/msg_neu.t.html#2901)\]

<div class="desc">

we can't put the dobj under the iobj because it's already there

</div>

<span id="alreadySittingMsg"></span>

`alreadySittingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3988](../source/msg_neu.t.html#3988)\]

<div class="desc">

*no description available*

</div>

<span id="alreadySittingOnMsg"></span>

`alreadySittingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3989](../source/msg_neu.t.html#3989)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyStandingMsg"></span>

`alreadyStandingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3986](../source/msg_neu.t.html#3986)\]

<div class="desc">

actor is already standing/sitting on/lying on

</div>

<span id="alreadyStandingOnMsg"></span>

`alreadyStandingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3987](../source/msg_neu.t.html#3987)\]

<div class="desc">

*no description available*

</div>

<span id="alreadySwitchedOffMsg"></span>

`alreadySwitchedOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3725](../source/msg_neu.t.html#3725)\]

<div class="desc">

*no description available*

</div>

<span id="alreadySwitchedOnMsg"></span>

`alreadySwitchedOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3724](../source/msg_neu.t.html#3724)\]

<div class="desc">

switch is already on/off

</div>

<span id="alreadyUnlockedMsg"></span>

`alreadyUnlockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3893](../source/msg_neu.t.html#3893)\]

<div class="desc">

*no description available*

</div>

<span id="alreadyWearingMsg"></span>

`alreadyWearingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2846](../source/msg_neu.t.html#2846)\]

<div class="desc">

already wearing item

</div>

<span id="askVagueMsg"></span>

`askVagueMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3581](../source/msg_neu.t.html#3581)\]

<div class="desc">

vague ASK/TELL (for ASK/TELL \<actor\> \<topic\> syntax errors)

</div>

<span id="candleNotLitMsg"></span>

`candleNotLitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3764](../source/msg_neu.t.html#3764)\]

<div class="desc">

extinguishing a candle that isn't lit

</div>

<span id="candleOutOfFuelMsg"></span>

`candleOutOfFuelMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3757](../source/msg_neu.t.html#3757)\]

<div class="desc">

trying to light a candle with no fuel

</div>

<span id="cannotAskSelfForMsg"></span>

`cannotAskSelfForMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3547](../source/msg_neu.t.html#3547)\]

<div class="desc">

can't ask yourself for anything

</div>

<span id="cannotAskSelfMsg"></span>

`cannotAskSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3543](../source/msg_neu.t.html#3543)\]

<div class="desc">

can't ask yourself about anything

</div>

<span id="cannotAttachKeyToMsg"></span>

`cannotAttachKeyToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3955](../source/msg_neu.t.html#3955)\]

<div class="desc">

cannot attach key (dobj) to (iobj)

</div>

<span id="cannotAttachMsg"></span>

`cannotAttachMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3817](../source/msg_neu.t.html#3817)\]

<div class="desc">

cannot attach object to object

</div>

<span id="cannotAttachToMsg"></span>

`cannotAttachToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3819](../source/msg_neu.t.html#3819)\]

<div class="desc">

*no description available*

</div>

<span id="cannotAttachToSelfMsg"></span>

`cannotAttachToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3823](../source/msg_neu.t.html#3823)\]

<div class="desc">

cannot attach to self

</div>

<span id="cannotBoardMsg"></span>

`cannotBoardMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3967](../source/msg_neu.t.html#3967)\]

<div class="desc">

*no description available*

</div>

<span id="cannotBurnDobjWithMsg"></span>

`cannotBurnDobjWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3800](../source/msg_neu.t.html#3800)\]

<div class="desc">

cannot burn this specific direct object with this specific iobj

</div>

<span id="cannotBurnMsg"></span>

`cannotBurnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3795](../source/msg_neu.t.html#3795)\]

<div class="desc">

cannot burn

</div>

<span id="cannotBurnWithMsg"></span>

`cannotBurnWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3796](../source/msg_neu.t.html#3796)\]

<div class="desc">

*no description available*

</div>

<span id="cannotCleanMsg"></span>

`cannotCleanMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3948](../source/msg_neu.t.html#3948)\]

<div class="desc">

cannot clean object

</div>

<span id="cannotCleanWithMsg"></span>

`cannotCleanWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3951](../source/msg_neu.t.html#3951)\]

<div class="desc">

*no description available*

</div>

<span id="cannotClimbMsg"></span>

`cannotClimbMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3879](../source/msg_neu.t.html#3879)\]

<div class="desc">

cannot climb object

</div>

<span id="cannotCloseMsg"></span>

`cannotCloseMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3884](../source/msg_neu.t.html#3884)\]

<div class="desc">

*no description available*

</div>

<span id="cannotConsultMsg"></span>

`cannotConsultMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3770](../source/msg_neu.t.html#3770)\]

<div class="desc">

cannot consult object

</div>

<span id="cannotCutWithMsg"></span>

`cannotCutWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3876](../source/msg_neu.t.html#3876)\]

<div class="desc">

can't use iobj to cut anything

</div>

<span id="cannotDetachFromMsg"></span>

`cannotDetachFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3857](../source/msg_neu.t.html#3857)\]

<div class="desc">

*no description available*

</div>

<span id="cannotDetachMsg"></span>

`cannotDetachMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3856](../source/msg_neu.t.html#3856)\]

<div class="desc">

cannot detach object from object

</div>

<span id="cannotDetachPermanentMsg"></span>

`cannotDetachPermanentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3861](../source/msg_neu.t.html#3861)\]

<div class="desc">

no obvious way to detach a permanent attachment

</div>

<span id="cannotDigMsg"></span>

`cannotDigMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2870](../source/msg_neu.t.html#2870)\]

<div class="desc">

cannot dig here

</div>

<span id="cannotDigWithMsg"></span>

`cannotDigWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2873](../source/msg_neu.t.html#2873)\]

<div class="desc">

not a digging implement

</div>

<span id="cannotDoFromHereMsg"></span>

`cannotDoFromHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3364](../source/msg_neu.t.html#3364)\]

<div class="desc">

cannot carry out a command from this location

</div>

<span id="cannotDoThatMsg"></span>

`cannotDoThatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2567](../source/msg_neu.t.html#2567)\]

<div class="desc">

generic "can't do that" message - this is used when verification fails
because an object doesn't define the action ("doXxx") method for the
verb

</div>

<span id="cannotDrinkMsg"></span>

`cannotDrinkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3944](../source/msg_neu.t.html#3944)\]

<div class="desc">

*no description available*

</div>

<span id="cannotEatMsg"></span>

`cannotEatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3943](../source/msg_neu.t.html#3943)\]

<div class="desc">

not edible/drinkable

</div>

<span id="cannotEnterHeldMsg"></span>

`cannotEnterHeldMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3976](../source/msg_neu.t.html#3976)\]

<div class="desc">

cannot sit/lie/stand on something being held

</div>

<span id="cannotEnterMsg"></span>

`cannotEnterMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4043](../source/msg_neu.t.html#4043)\]

<div class="desc">

cannot enter/go through

</div>

<span id="cannotEnterOnMsg"></span>

`cannotEnterOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3777](../source/msg_neu.t.html#3777)\]

<div class="desc">

cannot enter anything on object

</div>

<span id="cannotExtinguishMsg"></span>

`cannotExtinguishMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3807](../source/msg_neu.t.html#3807)\]

<div class="desc">

cannot extinguish

</div>

<span id="cannotFastenMsg"></span>

`cannotFastenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4019](../source/msg_neu.t.html#4019)\]

<div class="desc">

cannot fasten/unfasten

</div>

<span id="cannotFastenToMsg"></span>

`cannotFastenToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4020](../source/msg_neu.t.html#4020)\]

<div class="desc">

*no description available*

</div>

<span id="cannotFindTopicMsg"></span>

`cannotFindTopicMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3511](../source/msg_neu.t.html#3511)\]

<div class="desc">

failed to find a topic in a consultable object

</div>

<span id="cannotFlipMsg"></span>

`cannotFlipMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3783](../source/msg_neu.t.html#3783)\]

<div class="desc">

cannot flip object

</div>

<span id="cannotFollowSelfMsg"></span>

`cannotFollowSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3604](../source/msg_neu.t.html#3604)\]

<div class="desc">

cannot follow yourself

</div>

<span id="cannotGetOffOfMsg"></span>

`cannotGetOffOfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3969](../source/msg_neu.t.html#3969)\]

<div class="desc">

*no description available*

</div>

<span id="cannotGetOutMsg"></span>

`cannotGetOutMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3980](../source/msg_neu.t.html#3980)\]

<div class="desc">

cannot get out (of current location)

</div>

<span id="cannotGiveToItselfMsg"></span>

`cannotGiveToItselfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3559](../source/msg_neu.t.html#3559)\]

<div class="desc">

can't give something to itself

</div>

<span id="cannotGiveToMsg"></span>

`cannotGiveToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3571](../source/msg_neu.t.html#3571)\]

<div class="desc">

can't give/show something to a non-actor

</div>

<span id="cannotGiveToSelfMsg"></span>

`cannotGiveToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3555](../source/msg_neu.t.html#3555)\]

<div class="desc">

can't give yourself something

</div>

<span id="cannotGoBackMsg"></span>

`cannotGoBackMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3360](../source/msg_neu.t.html#3360)\]

<div class="desc">

we don't know the way back for a GO BACK

</div>

<span id="cannotGoThatWayInDarkMsg"></span>

`cannotGoThatWayInDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3356](../source/msg_neu.t.html#3356)\]

<div class="desc">

travel attempted in the dark in a direction with no exit

</div>

<span id="cannotGoThatWayMsg"></span>

`cannotGoThatWayMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3353](../source/msg_neu.t.html#3353)\]

<div class="desc">

travel attempted in a direction with no exit

</div>

<span id="cannotGoThroughMsg"></span>

`cannotGoThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4045](../source/msg_neu.t.html#4045)\]

<div class="desc">

*no description available*

</div>

<span id="cannotJumpOffHereMsg"></span>

`cannotJumpOffHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3507](../source/msg_neu.t.html#3507)\]

<div class="desc">

cannot jump off (with no direct object) from here

</div>

<span id="cannotJumpOffMsg"></span>

`cannotJumpOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3504](../source/msg_neu.t.html#3504)\]

<div class="desc">

cannot jump off object

</div>

<span id="cannotJumpOverMsg"></span>

`cannotJumpOverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3501](../source/msg_neu.t.html#3501)\]

<div class="desc">

cannot jump over object

</div>

<span id="cannotKissMsg"></span>

`cannotKissMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4134](../source/msg_neu.t.html#4134)\]

<div class="desc">

cannot kiss something

</div>

<span id="cannotKissSelfMsg"></span>

`cannotKissSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4141](../source/msg_neu.t.html#4141)\]

<div class="desc">

cannot kiss yourself

</div>

<span id="cannotLieOnMsg"></span>

`cannotLieOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3964](../source/msg_neu.t.html#3964)\]

<div class="desc">

*no description available*

</div>

<span id="cannotLightMsg"></span>

`cannotLightMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3792](../source/msg_neu.t.html#3792)\]

<div class="desc">

cannot light

</div>

<span id="cannotLockMsg"></span>

`cannotLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3899](../source/msg_neu.t.html#3899)\]

<div class="desc">

object is not lockable/unlockable

</div>

<span id="cannotLockWithMsg"></span>

`cannotLockWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3912](../source/msg_neu.t.html#3912)\]

<div class="desc">

object is not a key

</div>

<span id="cannotLookBehindMsg"></span>

`cannotLookBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2804](../source/msg_neu.t.html#2804)\]

<div class="desc">

this is an object we can't look behind/through

</div>

<span id="cannotLookInClosedMsg"></span>

`cannotLookInClosedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3896](../source/msg_neu.t.html#3896)\]

<div class="desc">

cannot look in container because it's closed

</div>

<span id="cannotLookThroughMsg"></span>

`cannotLookThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2806](../source/msg_neu.t.html#2806)\]

<div class="desc">

*no description available*

</div>

<span id="cannotLookUnderMsg"></span>

`cannotLookUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2805](../source/msg_neu.t.html#2805)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMoveActorMsg"></span>

`cannotMoveActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3006](../source/msg_neu.t.html#3006)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMoveFixtureMsg"></span>

`cannotMoveFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2910](../source/msg_neu.t.html#2910)\]

<div class="desc">

trying to move a Fixture to a new container by some means (take, drop,
put in, put on, etc)

</div>

<span id="cannotMoveHeavyMsg"></span>

`cannotMoveHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2925](../source/msg_neu.t.html#2925)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMoveImmovableMsg"></span>

`cannotMoveImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2920](../source/msg_neu.t.html#2920)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMovePersonMsg"></span>

`cannotMovePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3013](../source/msg_neu.t.html#3013)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMovePushableMsg"></span>

`cannotMovePushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2951](../source/msg_neu.t.html#2951)\]

<div class="desc">

*no description available*

</div>

<span id="cannotMoveWithMsg"></span>

`cannotMoveWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3692](../source/msg_neu.t.html#3692)\]

<div class="desc">

cannot use object as an implement to move something

</div>

<span id="cannotOpenLockedMsg"></span>

`cannotOpenLockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3905](../source/msg_neu.t.html#3905)\]

<div class="desc">

attempting to open a locked object

</div>

<span id="cannotOpenMsg"></span>

`cannotOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3883](../source/msg_neu.t.html#3883)\]

<div class="desc">

object is not openable/closable

</div>

<span id="cannotPlugInMsg"></span>

`cannotPlugInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4027](../source/msg_neu.t.html#4027)\]

<div class="desc">

cannot plug/unplug

</div>

<span id="cannotPlugInToMsg"></span>

`cannotPlugInToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4028](../source/msg_neu.t.html#4028)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPourIntoMsg"></span>

`cannotPourIntoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3811](../source/msg_neu.t.html#3811)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPourMsg"></span>

`cannotPourMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3810](../source/msg_neu.t.html#3810)\]

<div class="desc">

cannot pour/pour in/pour on

</div>

<span id="cannotPourOntoMsg"></span>

`cannotPourOntoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3813](../source/msg_neu.t.html#3813)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPushTravelMsg"></span>

`cannotPushTravelMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3682](../source/msg_neu.t.html#3682)\]

<div class="desc">

cannot push an object through travel

</div>

<span id="cannotPutActorMsg"></span>

`cannotPutActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3007](../source/msg_neu.t.html#3007)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutBehindMsg"></span>

`cannotPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3223](../source/msg_neu.t.html#3223)\]

<div class="desc">

nothing can be put behind the given object

</div>

<span id="cannotPutBehindRestrictedMsg"></span>

`cannotPutBehindRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3247](../source/msg_neu.t.html#3247)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutBehindSelfMsg"></span>

`cannotPutBehindSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3237](../source/msg_neu.t.html#3237)\]

<div class="desc">

trying to put something behind itself

</div>

<span id="cannotPutFixtureMsg"></span>

`cannotPutFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2916](../source/msg_neu.t.html#2916)\]

<div class="desc">

trying to put a Fixture in something

</div>

<span id="cannotPutHeavyMsg"></span>

`cannotPutHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2926](../source/msg_neu.t.html#2926)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutImmovableMsg"></span>

`cannotPutImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2921](../source/msg_neu.t.html#2921)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutInDispenserMsg"></span>

`cannotPutInDispenserMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3255](../source/msg_neu.t.html#3255)\]

<div class="desc">

wrong item type for dispenser

</div>

<span id="cannotPutInRestrictedMsg"></span>

`cannotPutInRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3241](../source/msg_neu.t.html#3241)\]

<div class="desc">

can't put something in/on/etc a restricted container/surface/etc

</div>

<span id="cannotPutInSelfMsg"></span>

`cannotPutInSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3227](../source/msg_neu.t.html#3227)\]

<div class="desc">

trying to put something in itself

</div>

<span id="cannotPutOnRestrictedMsg"></span>

`cannotPutOnRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3243](../source/msg_neu.t.html#3243)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutOnSelfMsg"></span>

`cannotPutOnSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3230](../source/msg_neu.t.html#3230)\]

<div class="desc">

trying to put something on itself

</div>

<span id="cannotPutPersonMsg"></span>

`cannotPutPersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3015](../source/msg_neu.t.html#3015)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutPushableMsg"></span>

`cannotPutPushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2955](../source/msg_neu.t.html#2955)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutUnderMsg"></span>

`cannotPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3219](../source/msg_neu.t.html#3219)\]

<div class="desc">

can't put anything under iobj

</div>

<span id="cannotPutUnderRestrictedMsg"></span>

`cannotPutUnderRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3245](../source/msg_neu.t.html#3245)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutUnderSelfMsg"></span>

`cannotPutUnderSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3233](../source/msg_neu.t.html#3233)\]

<div class="desc">

trying to put something under itself

</div>

<span id="cannotRemoveHeldMsg"></span>

`cannotRemoveHeldMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2963](../source/msg_neu.t.html#2963)\]

<div class="desc">

can't REMOVE something that's being held

</div>

<span id="cannotReturnToDispenserMsg"></span>

`cannotReturnToDispenserMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3251](../source/msg_neu.t.html#3251)\]

<div class="desc">

trying to return something to a remove-only dispenser

</div>

<span id="cannotScrewMsg"></span>

`cannotScrewMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4035](../source/msg_neu.t.html#4035)\]

<div class="desc">

cannot screw/unscrew

</div>

<span id="cannotScrewWithMsg"></span>

`cannotScrewWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4036](../source/msg_neu.t.html#4036)\]

<div class="desc">

*no description available*

</div>

<span id="cannotSetToMsg"></span>

`cannotSetToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3696](../source/msg_neu.t.html#3696)\]

<div class="desc">

cannot set object to setting

</div>

<span id="cannotShowToItselfMsg"></span>

`cannotShowToItselfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3567](../source/msg_neu.t.html#3567)\]

<div class="desc">

can't show something to itself

</div>

<span id="cannotShowToMsg"></span>

`cannotShowToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3572](../source/msg_neu.t.html#3572)\]

<div class="desc">

*no description available*

</div>

<span id="cannotShowToSelfMsg"></span>

`cannotShowToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3563](../source/msg_neu.t.html#3563)\]

<div class="desc">

can't show yourself something

</div>

<span id="cannotSitOnMsg"></span>

`cannotSitOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3962](../source/msg_neu.t.html#3962)\]

<div class="desc">

cannot sit/lie/stand/get on/get out of

</div>

<span id="cannotSleepMsg"></span>

`cannotSleepMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3959](../source/msg_neu.t.html#3959)\]

<div class="desc">

actor cannot sleep

</div>

<span id="cannotStandOnMsg"></span>

`cannotStandOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3966](../source/msg_neu.t.html#3966)\]

<div class="desc">

*no description available*

</div>

<span id="cannotStandOnPathMsg"></span>

`cannotStandOnPathMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3972](../source/msg_neu.t.html#3972)\]

<div class="desc">

standing on a PathPassage

</div>

<span id="cannotSwitchMsg"></span>

`cannotSwitchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3780](../source/msg_neu.t.html#3780)\]

<div class="desc">

cannot switch object

</div>

<span id="cannotTakeActorMsg"></span>

`cannotTakeActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3005](../source/msg_neu.t.html#3005)\]

<div class="desc">

try to take/move/put/taste an untakeable actor

</div>

<span id="cannotTakeFixtureMsg"></span>

`cannotTakeFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2913](../source/msg_neu.t.html#2913)\]

<div class="desc">

trying to take a Fixture

</div>

<span id="cannotTakeHeavyMsg"></span>

`cannotTakeHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2924](../source/msg_neu.t.html#2924)\]

<div class="desc">

trying to take/move/put a Heavy object

</div>

<span id="cannotTakeImmovableMsg"></span>

`cannotTakeImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2919](../source/msg_neu.t.html#2919)\]

<div class="desc">

trying to take/move/put an Immovable object

</div>

<span id="cannotTakeLocationMsg"></span>

`cannotTakeLocationMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2959](../source/msg_neu.t.html#2959)\]

<div class="desc">

can't take something while occupying it

</div>

<span id="cannotTakePersonMsg"></span>

`cannotTakePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3011](../source/msg_neu.t.html#3011)\]

<div class="desc">

trying to take/move/put/taste a person

</div>

<span id="cannotTakePushableMsg"></span>

`cannotTakePushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2949](../source/msg_neu.t.html#2949)\]

<div class="desc">

specialized Immovable messages for TravelPushables

</div>

<span id="cannotTalkToSelfMsg"></span>

`cannotTalkToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3539](../source/msg_neu.t.html#3539)\]

<div class="desc">

can't talk to yourself

</div>

<span id="cannotTasteActorMsg"></span>

`cannotTasteActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3008](../source/msg_neu.t.html#3008)\]

<div class="desc">

*no description available*

</div>

<span id="cannotTastePersonMsg"></span>

`cannotTastePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3017](../source/msg_neu.t.html#3017)\]

<div class="desc">

*no description available*

</div>

<span id="cannotTellSelfMsg"></span>

`cannotTellSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3551](../source/msg_neu.t.html#3551)\]

<div class="desc">

can't tell yourself about anything

</div>

<span id="cannotThrowAtContentsMsg"></span>

`cannotThrowAtContentsMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4053](../source/msg_neu.t.html#4053)\]

<div class="desc">

can't throw something at an object inside itself

</div>

<span id="cannotThrowAtSelfMsg"></span>

`cannotThrowAtSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4049](../source/msg_neu.t.html#4049)\]

<div class="desc">

can't throw something at itself

</div>

<span id="cannotThrowToMsg"></span>

`cannotThrowToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4123](../source/msg_neu.t.html#4123)\]

<div class="desc">

we're not a suitable target for THROW TO (because we're not an NPC)

</div>

<span id="cannotTurnMsg"></span>

`cannotTurnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3706](../source/msg_neu.t.html#3706)\]

<div class="desc">

cannot turn object

</div>

<span id="cannotTurnOffMsg"></span>

`cannotTurnOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3788](../source/msg_neu.t.html#3788)\]

<div class="desc">

*no description available*

</div>

<span id="cannotTurnOnMsg"></span>

`cannotTurnOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3786](../source/msg_neu.t.html#3786)\]

<div class="desc">

cannot turn object on/off

</div>

<span id="cannotTurnWithMsg"></span>

`cannotTurnWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3713](../source/msg_neu.t.html#3713)\]

<div class="desc">

cannot turn anything with object

</div>

<span id="cannotTypeOnMsg"></span>

`cannotTypeOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3774](../source/msg_neu.t.html#3774)\]

<div class="desc">

cannot type anything on object

</div>

<span id="cannotUnboardMsg"></span>

`cannotUnboardMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3968](../source/msg_neu.t.html#3968)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnfastenFromMsg"></span>

`cannotUnfastenFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4023](../source/msg_neu.t.html#4023)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnfastenMsg"></span>

`cannotUnfastenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4022](../source/msg_neu.t.html#4022)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnlockMsg"></span>

`cannotUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3901](../source/msg_neu.t.html#3901)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnlockWithMsg"></span>

`cannotUnlockWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3914](../source/msg_neu.t.html#3914)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnplugFromMsg"></span>

`cannotUnplugFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4031](../source/msg_neu.t.html#4031)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnplugMsg"></span>

`cannotUnplugMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4030](../source/msg_neu.t.html#4030)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnscrewMsg"></span>

`cannotUnscrewMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4038](../source/msg_neu.t.html#4038)\]

<div class="desc">

*no description available*

</div>

<span id="cannotUnscrewWithMsg"></span>

`cannotUnscrewWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4039](../source/msg_neu.t.html#4039)\]

<div class="desc">

*no description available*

</div>

<span id="cutNoEffectMsg"></span>

`cutNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3873](../source/msg_neu.t.html#3873)\]

<div class="desc">

cannot cut that

</div>

<span id="dontThrowDirMsg"></span>

`dontThrowDirMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4068](../source/msg_neu.t.html#4068)\]

<div class="desc">

THROW \<obj\> \<direction\> isn't supported; use THROW AT instead

</div>

<span id="droppingSelfMsg"></span>

`droppingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2886](../source/msg_neu.t.html#2886)\]

<div class="desc">

actor dropping self

</div>

<span id="flashlightOnButDarkMsg"></span>

`flashlightOnButDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3732](../source/msg_neu.t.html#3732)\]

<div class="desc">

flashlight is on but doesn't light up

</div>

<span id="followAlreadyHereInDarkMsg"></span>

`followAlreadyHereInDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3615](../source/msg_neu.t.html#3615)\]

<div class="desc">

following an object that we \*think\* is in our same location (in other
words, we're already in the location where we thought we last saw the
object go), but it's too dark to see if that's really true

</div>

<span id="followAlreadyHereMsg"></span>

`followAlreadyHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3607](../source/msg_neu.t.html#3607)\]

<div class="desc">

following an object that's in the same location as the actor

</div>

<span id="followUnknownMsg"></span>

`followUnknownMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3619](../source/msg_neu.t.html#3619)\]

<div class="desc">

trying to follow an object, but don't know where it went from here

</div>

<span id="giveAlreadyHasMsg"></span>

`giveAlreadyHasMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3536](../source/msg_neu.t.html#3536)\]

<div class="desc">

trying to give something to someone who already has the object

</div>

<span id="keyDoesNotFitLockMsg"></span>

`keyDoesNotFitLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3924](../source/msg_neu.t.html#3924)\]

<div class="desc">

the key (iobj) does not fit the lock (dobj)

</div>

<span id="keyNotDetachableMsg"></span>

`keyNotDetachableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3266](../source/msg_neu.t.html#3266)\]

<div class="desc">

can't detach key (with no iobj specified) because it's not on a ring

</div>

<span id="keyNotOnKeyringMsg"></span>

`keyNotOnKeyringMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3263](../source/msg_neu.t.html#3263)\]

<div class="desc">

the dobj isn't on the keyring

</div>

<span id="matchNotLitMsg"></span>

`matchNotLitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3746](../source/msg_neu.t.html#3746)\]

<div class="desc">

match not lit

</div>

<span id="moveNoEffectMsg"></span>

`moveNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3676](../source/msg_neu.t.html#3676)\]

<div class="desc">

moving object has no effect

</div>

<span id="moveToNoEffectMsg"></span>

`moveToNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3679](../source/msg_neu.t.html#3679)\]

<div class="desc">

cannot move object to other object

</div>

<span id="mustBeStandingMsg"></span>

`mustBeStandingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2667](../source/msg_neu.t.html#2667)\]

<div class="desc">

actor must be standing before doing that

</div>

<span id="mustSpecifyTurnToMsg"></span>

`mustSpecifyTurnToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3709](../source/msg_neu.t.html#3709)\]

<div class="desc">

must specify setting to turn object to

</div>

<span id="newlyDarkMsg"></span>

`newlyDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4144](../source/msg_neu.t.html#4144)\]

<div class="desc">

it is now dark at actor's location

</div>

<span id="noKeyNeededMsg"></span>

`noKeyNeededMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2664](../source/msg_neu.t.html#2664)\]

<div class="desc">

no key is needed to lock or unlock this object

</div>

<span id="noRoomToLieMsg"></span>

`noRoomToLieMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4001](../source/msg_neu.t.html#4001)\]

<div class="desc">

*no description available*

</div>

<span id="noRoomToSitMsg"></span>

`noRoomToSitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3999](../source/msg_neu.t.html#3999)\]

<div class="desc">

*no description available*

</div>

<span id="noRoomToStandMsg"></span>

`noRoomToStandMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3997](../source/msg_neu.t.html#3997)\]

<div class="desc">

no room to stand/sit/lie on dobj

</div>

<span id="notAContainerMsg"></span>

`notAContainerMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3212](../source/msg_neu.t.html#3212)\]

<div class="desc">

trying to put an object in a non-container

</div>

<span id="notASurfaceMsg"></span>

`notASurfaceMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3215](../source/msg_neu.t.html#3215)\]

<div class="desc">

trying to put an object on a non-surface

</div>

<span id="notAttachedToMsg"></span>

`notAttachedToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3865](../source/msg_neu.t.html#3865)\]

<div class="desc">

dobj isn't attached to iobj

</div>

<span id="notAWeaponMsg"></span>

`notAWeaponMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3640](../source/msg_neu.t.html#3640)\]

<div class="desc">

obj is not a weapon

</div>

<span id="notCarryingMsg"></span>

`notCarryingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2883](../source/msg_neu.t.html#2883)\]

<div class="desc">

dropping an object not being carried

</div>

<span id="notDoffableMsg"></span>

`notDoffableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2842](../source/msg_neu.t.html#2842)\]

<div class="desc">

doffing something that isn't wearable

</div>

<span id="notFollowableMsg"></span>

`notFollowableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3601](../source/msg_neu.t.html#3601)\]

<div class="desc">

not a followable object

</div>

<span id="nothingBehindMsg"></span>

`nothingBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2798](../source/msg_neu.t.html#2798)\]

<div class="desc">

*no description available*

</div>

<span id="nothingBeyondDoorMsg"></span>

`nothingBeyondDoorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2813](../source/msg_neu.t.html#2813)\]

<div class="desc">

there's nothing on the other side of a door we just opened

</div>

<span id="nothingInsideMsg"></span>

`nothingInsideMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2794](../source/msg_neu.t.html#2794)\]

<div class="desc">

generic messages for looking prepositionally

</div>

<span id="nothingThroughMsg"></span>

`nothingThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2800](../source/msg_neu.t.html#2800)\]

<div class="desc">

*no description available*

</div>

<span id="nothingThroughPassageMsg"></span>

`nothingThroughPassageMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2809](../source/msg_neu.t.html#2809)\]

<div class="desc">

looking through an open passage

</div>

<span id="nothingToHearMsg"></span>

`nothingToHearMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2821](../source/msg_neu.t.html#2821)\]

<div class="desc">

there's nothing here with a specific noise

</div>

<span id="nothingToSmellMsg"></span>

`nothingToSmellMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2817](../source/msg_neu.t.html#2817)\]

<div class="desc">

there's nothing here with a specific odor

</div>

<span id="nothingUnderMsg"></span>

`nothingUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2796](../source/msg_neu.t.html#2796)\]

<div class="desc">

*no description available*

</div>

<span id="notOnPlatformMsg"></span>

`notOnPlatformMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3994](../source/msg_neu.t.html#3994)\]

<div class="desc">

getting off something you're not on

</div>

<span id="notWearableMsg"></span>

`notWearableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2838](../source/msg_neu.t.html#2838)\]

<div class="desc">

an item is not wearable

</div>

<span id="notWearingMsg"></span>

`notWearingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2849](../source/msg_neu.t.html#2849)\]

<div class="desc">

not wearing (item being doffed)

</div>

<span id="objNotForKeyringMsg"></span>

`objNotForKeyringMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3259](../source/msg_neu.t.html#3259)\]

<div class="desc">

the dobj doesn't fit on this keyring

</div>

<span id="okayAttachToMsg"></span>

`okayAttachToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3850](../source/msg_neu.t.html#3850)\]

<div class="desc">

default message for successful Attachable attachment

</div>

<span id="okayBurnCandleMsg"></span>

`okayBurnCandleMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3761](../source/msg_neu.t.html#3761)\]

<div class="desc">

lighting a candle

</div>

<span id="okayBurnMatchMsg"></span>

`okayBurnMatchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3749](../source/msg_neu.t.html#3749)\]

<div class="desc">

lighting a match

</div>

<span id="okayCloseMsg"></span>

`okayCloseMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2860](../source/msg_neu.t.html#2860)\]

<div class="desc">

*no description available*

</div>

<span id="okayDetachFromMsg"></span>

`okayDetachFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3853](../source/msg_neu.t.html#3853)\]

<div class="desc">

default message for successful Attachable detachment

</div>

<span id="okayDoffMsg"></span>

`okayDoffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2855](../source/msg_neu.t.html#2855)\]

<div class="desc">

default response to 'doff obj'

</div>

<span id="okayDropMsg"></span>

`okayDropMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2971](../source/msg_neu.t.html#2971)\]

<div class="desc">

default 'drop' response

</div>

<span id="okayEatMsg"></span>

`okayEatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3736](../source/msg_neu.t.html#3736)\]

<div class="desc">

default acknowledgment for eating something

</div>

<span id="okayExtinguishCandleMsg"></span>

`okayExtinguishCandleMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3767](../source/msg_neu.t.html#3767)\]

<div class="desc">

extinguishing a candle

</div>

<span id="okayExtinguishMatchMsg"></span>

`okayExtinguishMatchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3753](../source/msg_neu.t.html#3753)\]

<div class="desc">

extinguishing a match

</div>

<span id="okayJumpMsg"></span>

`okayJumpMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3497](../source/msg_neu.t.html#3497)\]

<div class="desc">

"jump"

</div>

<span id="okayLockMsg"></span>

`okayLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2864](../source/msg_neu.t.html#2864)\]

<div class="desc">

default response to lock/unlock

</div>

<span id="okayNotStandingOnMsg"></span>

`okayNotStandingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4016](../source/msg_neu.t.html#4016)\]

<div class="desc">

default report for getting off of a platform

</div>

<span id="okayOpenMsg"></span>

`okayOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2858](../source/msg_neu.t.html#2858)\]

<div class="desc">

default response to open/close

</div>

<span id="okayPullLeverMsg"></span>

`okayPullLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3667](../source/msg_neu.t.html#3667)\]

<div class="desc">

default acknowledgment to pulling a lever

</div>

<span id="okayPullSpringLeverMsg"></span>

`okayPullSpringLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3671](../source/msg_neu.t.html#3671)\]

<div class="desc">

default acknowledgment to pulling a spring-loaded lever

</div>

<span id="okayPushButtonMsg"></span>

`okayPushButtonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3649](../source/msg_neu.t.html#3649)\]

<div class="desc">

default 'push button' acknowledgment

</div>

<span id="okayPushLeverMsg"></span>

`okayPushLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3656](../source/msg_neu.t.html#3656)\]

<div class="desc">

default acknowledgment to pushing a lever

</div>

<span id="okayPutBehindMsg"></span>

`okayPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3001](../source/msg_neu.t.html#3001)\]

<div class="desc">

default successful 'put behind' response

</div>

<span id="okayPutInMsg"></span>

`okayPutInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2989](../source/msg_neu.t.html#2989)\]

<div class="desc">

default successful 'put in' response

</div>

<span id="okayPutOnMsg"></span>

`okayPutOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2993](../source/msg_neu.t.html#2993)\]

<div class="desc">

default successful 'put on' response

</div>

<span id="okayPutUnderMsg"></span>

`okayPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2997](../source/msg_neu.t.html#2997)\]

<div class="desc">

default successful 'put under' response

</div>

<span id="okayTakeMsg"></span>

`okayTakeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2967](../source/msg_neu.t.html#2967)\]

<div class="desc">

default 'take' response

</div>

<span id="okayTurnOffMsg"></span>

`okayTurnOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3729](../source/msg_neu.t.html#3729)\]

<div class="desc">

*no description available*

</div>

<span id="okayTurnOnMsg"></span>

`okayTurnOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3728](../source/msg_neu.t.html#3728)\]

<div class="desc">

default acknowledgment for switching on/off

</div>

<span id="okayUnlockMsg"></span>

`okayUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2866](../source/msg_neu.t.html#2866)\]

<div class="desc">

*no description available*

</div>

<span id="okayWearMsg"></span>

`okayWearMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2852](../source/msg_neu.t.html#2852)\]

<div class="desc">

default response to 'wear obj'

</div>

<span id="okayYellMsg"></span>

`okayYellMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3494](../source/msg_neu.t.html#3494)\]

<div class="desc">

"yell"

</div>

<span id="pullNoEffectMsg"></span>

`pullNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3660](../source/msg_neu.t.html#3660)\]

<div class="desc">

pulling object has no effect

</div>

<span id="pushNoEffectMsg"></span>

`pushNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3646](../source/msg_neu.t.html#3646)\]

<div class="desc">

pushing object has no effect

</div>

<span id="puttingSelfMsg"></span>

`puttingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2889](../source/msg_neu.t.html#2889)\]

<div class="desc">

actor putting self in something

</div>

<span id="sayGoodbyeMsg"></span>

`sayGoodbyeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3479](../source/msg_neu.t.html#3479)\]

<div class="desc">

"goodbye" with no target actor

</div>

<span id="sayHelloMsg"></span>

`sayHelloMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3476](../source/msg_neu.t.html#3476)\]

<div class="desc">

"hello" with no target actor

</div>

<span id="sayNoMsg"></span>

`sayNoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3483](../source/msg_neu.t.html#3483)\]

<div class="desc">

*no description available*

</div>

<span id="sayYesMsg"></span>

`sayYesMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3482](../source/msg_neu.t.html#3482)\]

<div class="desc">

"yes"/"no" with no target actor

</div>

<span id="setToInvalidMsg"></span>

`setToInvalidMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3699](../source/msg_neu.t.html#3699)\]

<div class="desc">

invalid setting for generic Settable

</div>

<span id="shouldNotBreakMsg"></span>

`shouldNotBreakMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3869](../source/msg_neu.t.html#3869)\]

<div class="desc">

breaking object would serve no purpose

</div>

<span id="shouldNotThrowAtFloorMsg"></span>

`shouldNotThrowAtFloorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4064](../source/msg_neu.t.html#4064)\]

<div class="desc">

shouldn't throw something at the floor

</div>

<span id="stairwayNotDownMsg"></span>

`stairwayNotDownMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3470](../source/msg_neu.t.html#3470)\]

<div class="desc">

*no description available*

</div>

<span id="stairwayNotUpMsg"></span>

`stairwayNotUpMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3469](../source/msg_neu.t.html#3469)\]

<div class="desc">

the stairway does not go up/down

</div>

<span id="takeFromNotBehindMsg"></span>

`takeFromNotBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3335](../source/msg_neu.t.html#3335)\]

<div class="desc">

taking dobj from behind something, but dobj isn't behind iobj

</div>

<span id="takeFromNotInActorMsg"></span>

`takeFromNotInActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3339](../source/msg_neu.t.html#3339)\]

<div class="desc">

taking dobj from an actor, but actor doesn't have iobj

</div>

<span id="takeFromNotInMsg"></span>

`takeFromNotInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3325](../source/msg_neu.t.html#3325)\]

<div class="desc">

taking dobj from iobj, but dobj isn't in iobj

</div>

<span id="takeFromNotOnMsg"></span>

`takeFromNotOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3328](../source/msg_neu.t.html#3328)\]

<div class="desc">

taking dobj from surface, but dobj isn't on iobj

</div>

<span id="takeFromNotUnderMsg"></span>

`takeFromNotUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3331](../source/msg_neu.t.html#3331)\]

<div class="desc">

taking dobj from under something, but dobj isn't under iobj

</div>

<span id="takingSelfMsg"></span>

`takingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2880](../source/msg_neu.t.html#2880)\]

<div class="desc">

actor taking self ("take me")

</div>

<span id="tellVagueMsg"></span>

`tellVagueMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3583](../source/msg_neu.t.html#3583)\]

<div class="desc">

*no description available*

</div>

<span id="throwingSelfMsg"></span>

`throwingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2892](../source/msg_neu.t.html#2892)\]

<div class="desc">

actor throwing self

</div>

<span id="timePassesMsg"></span>

`timePassesMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3473](../source/msg_neu.t.html#3473)\]

<div class="desc">

"wait"

</div>

<span id="tooDarkMsg"></span>

`tooDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2577](../source/msg_neu.t.html#2577)\]

<div class="desc">

it's too dark to do that

</div>

<span id="turnToInvalidMsg"></span>

`turnToInvalidMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3717](../source/msg_neu.t.html#3717)\]

<div class="desc">

invalid setting for dial

</div>

<span id="unknownHowToLockMsg"></span>

`unknownHowToLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3918](../source/msg_neu.t.html#3918)\]

<div class="desc">

we don't know how to lock/unlock this

</div>

<span id="unknownHowToUnlockMsg"></span>

`unknownHowToUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3920](../source/msg_neu.t.html#3920)\]

<div class="desc">

*no description available*

</div>

<span id="unlockRequiresKeyMsg"></span>

`unlockRequiresKeyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3908](../source/msg_neu.t.html#3908)\]

<div class="desc">

object requires a key to unlock

</div>

<span id="uselessToAttackMsg"></span>

`uselessToAttackMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3643](../source/msg_neu.t.html#3643)\]

<div class="desc">

no effect attacking obj

</div>

<span id="whereToGoMsg"></span>

`whereToGoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3350](../source/msg_neu.t.html#3350)\]

<div class="desc">

must say which way to go

</div>

<span id="wrongAttachmentMsg"></span>

`wrongAttachmentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3834](../source/msg_neu.t.html#3834)\]

<div class="desc">

dobj and/or iobj can be attached to certain things, but not to each
other

</div>

<span id="wrongDetachmentMsg"></span>

`wrongDetachmentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3838](../source/msg_neu.t.html#3838)\]

<div class="desc">

dobj and iobj are attached, but they can't be taken apart

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="actorCannotSeeMsg"></span>

`actorCannotSeeMsg (actor, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3594](../source/msg_neu.t.html#3594)\]

<div class="desc">

actor cannot see object being shown to actor

</div>

<span id="becomingTooLargeForActorMsg"></span>

`becomingTooLargeForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3107](../source/msg_neu.t.html#3107)\]

<div class="desc">

the object is becoming too large for the actor to hold

</div>

<span id="becomingTooLargeForContainerMsg"></span>

`becomingTooLargeForContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3193](../source/msg_neu.t.html#3193)\]

<div class="desc">

the current action would make obj too large for its container

</div>

<span id="cannotBeWearingMsg"></span>

`cannotBeWearingMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2624](../source/msg_neu.t.html#2624)\]

<div class="desc">

must remove an article of clothing before a command

</div>

<span id="cannotDoFromMsg"></span>

`cannotDoFromMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3411](../source/msg_neu.t.html#3411)\]

<div class="desc">

cannot carry out a command from a nested room

</div>

<span id="cannotEnterExitOnlyMsg"></span>

`cannotEnterExitOnlyMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3447](../source/msg_neu.t.html#3447)\]

<div class="desc">

cannot enter an exit-only passage

</div>

<span id="cannotFitIntoOpeningMsg"></span>

`cannotFitIntoOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3045](../source/msg_neu.t.html#3045)\]

<div class="desc">

cannot fit obj into cont through cont's opening

</div>

<span id="cannotFitOutOfOpeningMsg"></span>

`cannotFitOutOfOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3053](../source/msg_neu.t.html#3053)\]

<div class="desc">

cannot fit obj out of cont through cont's opening

</div>

<span id="cannotFollowFromHereMsg"></span>

`cannotFollowFromHereMsg (srcLoc)`

[msg_neu.t](../file/msg_neu.t.html)\[[3626](../source/msg_neu.t.html#3626)\]

<div class="desc">

we're trying to follow an actor, but we last saw the actor in the given
other location, so we have to go there to follow

</div>

<span id="cannotGoThatWayInVehicleMsg"></span>

`cannotGoThatWayInVehicleMsg (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[3426](../source/msg_neu.t.html#3426)\]

<div class="desc">

cannot go that way in a vehicle

</div>

<span id="cannotGoThroughClosedDoorMsg"></span>

`cannotGoThroughClosedDoorMsg (door)`

[msg_neu.t](../file/msg_neu.t.html)\[[3367](../source/msg_neu.t.html#3367)\]

<div class="desc">

can't travel through a close door

</div>

<span id="cannotHearMsg"></span>

`cannotHearMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2603](../source/msg_neu.t.html#2603)\]

<div class="desc">

cannot hear object

</div>

<span id="cannotMoveComponentMsg"></span>

`cannotMoveComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2929](../source/msg_neu.t.html#2929)\]

<div class="desc">

trying to move a component object

</div>

<span id="cannotMoveThroughClosedMsg"></span>

`cannotMoveThroughClosedMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3037](../source/msg_neu.t.html#3037)\]

<div class="desc">

cannot move obj because cont is closed

</div>

<span id="cannotMoveThroughContainerMsg"></span>

`cannotMoveThroughContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3029](../source/msg_neu.t.html#3029)\]

<div class="desc">

cannot move obj in our out of container cont

</div>

<span id="cannotMoveThroughMsg"></span>

`cannotMoveThroughMsg (obj, obs)`

[msg_neu.t](../file/msg_neu.t.html)\[[3021](../source/msg_neu.t.html#3021)\]

<div class="desc">

cannot move obj through obstructor

</div>

<span id="cannotPushObjectNestedMsg"></span>

`cannotPushObjectNestedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3440](../source/msg_neu.t.html#3440)\]

<div class="desc">

cannot push an object to a nested room

</div>

<span id="cannotPushObjectThatWayMsg"></span>

`cannotPushObjectThatWayMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3433](../source/msg_neu.t.html#3433)\]

<div class="desc">

cannot push an object that way

</div>

<span id="cannotPutComponentMsg"></span>

`cannotPutComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2942](../source/msg_neu.t.html#2942)\]

<div class="desc">

trying to put a component in something

</div>

<span id="cannotReachIntoOpeningMsg"></span>

`cannotReachIntoOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3077](../source/msg_neu.t.html#3077)\]

<div class="desc">

actor cannot fit hand into cont through cont's opening

</div>

<span id="cannotReachObjectMsg"></span>

`cannotReachObjectMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2755](../source/msg_neu.t.html#2755)\]

<div class="desc">

cannot reach (i.e., touch) an object that is to be manipulated in a
command - this is a generic message used when we cannot identify the
specific reason that the object is in scope but cannot be touched

</div>

<span id="cannotReachOutOfOpeningMsg"></span>

`cannotReachOutOfOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3085](../source/msg_neu.t.html#3085)\]

<div class="desc">

actor cannot fit hand into cont through cont's opening

</div>

<span id="cannotReachThroughMsg"></span>

`cannotReachThroughMsg (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2762](../source/msg_neu.t.html#2762)\]

<div class="desc">

cannot reach an object through an obstructor

</div>

<span id="cannotSmellMsg"></span>

`cannotSmellMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2610](../source/msg_neu.t.html#2610)\]

<div class="desc">

cannot smell object

</div>

<span id="cannotTakeComponentMsg"></span>

`cannotTakeComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2935](../source/msg_neu.t.html#2935)\]

<div class="desc">

trying to take a component object

</div>

<span id="cannotTasteMsg"></span>

`cannotTasteMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2617](../source/msg_neu.t.html#2617)\]

<div class="desc">

cannot taste object

</div>

<span id="cannotThrowThroughMsg"></span>

`cannotThrowThroughMsg (target, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[4057](../source/msg_neu.t.html#4057)\]

<div class="desc">

can't throw through a sense connector

</div>

<span id="cannotTouchThroughClosedMsg"></span>

`cannotTouchThroughClosedMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3069](../source/msg_neu.t.html#3069)\]

<div class="desc">

actor 'obj' cannot reach through cont because cont is closed

</div>

<span id="cannotTouchThroughContainerMsg"></span>

`cannotTouchThroughContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3061](../source/msg_neu.t.html#3061)\]

<div class="desc">

actor 'obj' cannot reach in our out of container 'cont'

</div>

<span id="circularlyBehindMsg"></span>

`circularlyBehindMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3317](../source/msg_neu.t.html#3317)\]

<div class="desc">

putting y in x when x is already behind y

</div>

<span id="circularlyInMsg"></span>

`circularlyInMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3293](../source/msg_neu.t.html#3293)\]

<div class="desc">

putting y in x when x is already in y

</div>

<span id="circularlyOnMsg"></span>

`circularlyOnMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3301](../source/msg_neu.t.html#3301)\]

<div class="desc">

putting y in x when x is already on y

</div>

<span id="circularlyUnderMsg"></span>

`circularlyUnderMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3309](../source/msg_neu.t.html#3309)\]

<div class="desc">

putting y in x when x is already under y

</div>

<span id="containerBecomingTooFullMsg"></span>

`containerBecomingTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3204](../source/msg_neu.t.html#3204)\]

<div class="desc">

the current action would increase obj's bulk so that container is too
full

</div>

<span id="containerTooFullMsg"></span>

`containerTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3162](../source/msg_neu.t.html#3162)\]

<div class="desc">

container doesn't have room for object

</div>

<span id="decorationNotImportantMsg"></span>

`decorationNotImportantMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2708](../source/msg_neu.t.html#2708)\]

<div class="desc">

generic "that's not important" message for decorations

</div>

<span id="doorClosesBehindMsg"></span>

`doorClosesBehindMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3461](../source/msg_neu.t.html#3461)\]

<div class="desc">

door closes behind actor during travel through door

</div>

<span id="droppingObjMsg"></span>

`droppingObjMsg (dropobj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2975](../source/msg_neu.t.html#2975)\]

<div class="desc">

dropping an object

</div>

<span id="floorlessDropMsg"></span>

`floorlessDropMsg (dropobj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2982](../source/msg_neu.t.html#2982)\]

<div class="desc">

default receiveDrop suffix for floorless rooms

</div>

<span id="foundKeyOnKeyringMsg"></span>

`foundKeyOnKeyringMsg (ring, key)`

[msg_neu.t](../file/msg_neu.t.html)\[[3927](../source/msg_neu.t.html#3927)\]

<div class="desc">

found key on keyring

</div>

<span id="foundNoKeyOnKeyringMsg"></span>

`foundNoKeyOnKeyringMsg (ring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3935](../source/msg_neu.t.html#3935)\]

<div class="desc">

failed to find a key on keyring

</div>

<span id="handsBecomingTooFullForMsg"></span>

`handsBecomingTooFullForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3115](../source/msg_neu.t.html#3115)\]

<div class="desc">

the object is becoming large enough that the actor's hands are full

</div>

<span id="handsTooFullForMsg"></span>

`handsTooFullForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3100](../source/msg_neu.t.html#3100)\]

<div class="desc">

the actor doesn't have room to hold the object

</div>

<span id="heardButNotSeenMsg"></span>

`heardButNotSeenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2587](../source/msg_neu.t.html#2587)\]

<div class="desc">

object can be heard but not seen

</div>

<span id="invalidStagingContainerActorMsg"></span>

`invalidStagingContainerActorMsg (cont, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3383](../source/msg_neu.t.html#3383)\]

<div class="desc">

cannot carry out travel while 'cont' (an actor) is holding 'dest'

</div>

<span id="invalidStagingContainerMsg"></span>

`invalidStagingContainerMsg (cont, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3375](../source/msg_neu.t.html#3375)\]

<div class="desc">

cannot carry out travel while 'dest' is within 'cont'

</div>

<span id="invalidStagingLocationMsg"></span>

`invalidStagingLocationMsg (dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3391](../source/msg_neu.t.html#3391)\]

<div class="desc">

can't carry out travel because 'dest' isn't a valid staging location

</div>

<span id="lookInVaporousMsg"></span>

`lookInVaporousMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2743](../source/msg_neu.t.html#2743)\]

<div class="desc">

look in/look under/look through/look behind/search vaporous

</div>

<span id="movedKeysToKeyringMsg"></span>

`movedKeysToKeyringMsg (keyring, keys)`

[msg_neu.t](../file/msg_neu.t.html)\[[3284](../source/msg_neu.t.html#3284)\]

<div class="desc">

we moved several keys to a keyring automatically

</div>

<span id="movedKeyToKeyringMsg"></span>

`movedKeyToKeyringMsg (keyring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3277](../source/msg_neu.t.html#3277)\]

<div class="desc">

we attached a key to a keyring automatically

</div>

<span id="mustBeBurningMsg"></span>

`mustBeBurningMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3739](../source/msg_neu.t.html#3739)\]

<div class="desc">

object must be burning before doing that

</div>

<span id="mustBeCarryingMsg"></span>

`mustBeCarryingMsg (obj, actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2700](../source/msg_neu.t.html#2700)\]

<div class="desc">

actor must be holding the object before we can do that

</div>

<span id="mustBeClosedMsg"></span>

`mustBeClosedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2648](../source/msg_neu.t.html#2648)\]

<div class="desc">

object must be closed before doing that

</div>

<span id="mustBeEmptyMsg"></span>

`mustBeEmptyMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2632](../source/msg_neu.t.html#2632)\]

<div class="desc">

all contents must be removed from object before doing that

</div>

<span id="mustBeHoldingMsg"></span>

`mustBeHoldingMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2570](../source/msg_neu.t.html#2570)\]

<div class="desc">

must be holding something before a command

</div>

<span id="mustBeInMsg"></span>

`mustBeInMsg (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2692](../source/msg_neu.t.html#2692)\]

<div class="desc">

object must be in loc before doing that

</div>

<span id="mustBeOpenMsg"></span>

`mustBeOpenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2640](../source/msg_neu.t.html#2640)\]

<div class="desc">

object must be opened before doing that

</div>

<span id="mustBeUnlockedMsg"></span>

`mustBeUnlockedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2656](../source/msg_neu.t.html#2656)\]

<div class="desc">

object must be unlocked before doing that

</div>

<span id="mustBeVisibleMsg"></span>

`mustBeVisibleMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2580](../source/msg_neu.t.html#2580)\]

<div class="desc">

object must be visible

</div>

<span id="mustDetachMsg"></span>

`mustDetachMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3842](../source/msg_neu.t.html#3842)\]

<div class="desc">

must detach the object before proceeding

</div>

<span id="mustGetOnMsg"></span>

`mustGetOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2685](../source/msg_neu.t.html#2685)\]

<div class="desc">

must get on/in object

</div>

<span id="mustLieOnMsg"></span>

`mustLieOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2678](../source/msg_neu.t.html#2678)\]

<div class="desc">

must be lying on/in object

</div>

<span id="mustOpenDoorMsg"></span>

`mustOpenDoorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3454](../source/msg_neu.t.html#3454)\]

<div class="desc">

must open door before going that way

</div>

<span id="mustSitOnMsg"></span>

`mustSitOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2671](../source/msg_neu.t.html#2671)\]

<div class="desc">

must be sitting on/in chair

</div>

<span id="nestedRoomTooHighMsg"></span>

`nestedRoomTooHighMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3398](../source/msg_neu.t.html#3398)\]

<div class="desc">

destination is too high to enter from here

</div>

<span id="nestedRoomTooHighToExitMsg"></span>

`nestedRoomTooHighToExitMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3405](../source/msg_neu.t.html#3405)\]

<div class="desc">

enclosing room is too high to reach by GETTING OUT OF here

</div>

<span id="noiseSourceMsg"></span>

`noiseSourceMsg (src)`

[msg_neu.t](../file/msg_neu.t.html)\[[2824](../source/msg_neu.t.html#2824)\]

<div class="desc">

a sound appears to be coming from a source

</div>

<span id="noResponseFromMsg"></span>

`noResponseFromMsg (other)`

[msg_neu.t](../file/msg_neu.t.html)\[[3529](../source/msg_neu.t.html#3529)\]

<div class="desc">

actor won't respond to a request or other communicative gesture

</div>

<span id="notAddressableMsg"></span>

`notAddressableMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3522](../source/msg_neu.t.html#3522)\]

<div class="desc">

cannot talk to an object (because it makes no sense to do so)

</div>

<span id="notInterestedMsg"></span>

`notInterestedMsg (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[3575](../source/msg_neu.t.html#3575)\]

<div class="desc">

actor isn't interested in something being given/shown

</div>

<span id="notWithIntangibleMsg"></span>

`notWithIntangibleMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2729](../source/msg_neu.t.html#2729)\]

<div class="desc">

generic "no can do" message for intangibles

</div>

<span id="notWithVaporousMsg"></span>

`notWithVaporousMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2736](../source/msg_neu.t.html#2736)\]

<div class="desc">

generic failure message for varporous objects

</div>

<span id="npcDescMsg"></span>

`npcDescMsg (npc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2786](../source/msg_neu.t.html#2786)\]

<div class="desc">

default description of a non-player character

</div>

<span id="objCannotHearActorMsg"></span>

`objCannotHearActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3587](../source/msg_neu.t.html#3587)\]

<div class="desc">

object cannot hear actor

</div>

<span id="odorSourceMsg"></span>

`odorSourceMsg (src)`

[msg_neu.t](../file/msg_neu.t.html)\[[2831](../source/msg_neu.t.html#2831)\]

<div class="desc">

an odor appears to be coming from a source

</div>

<span id="okayFollowInSightMsg"></span>

`okayFollowInSightMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[3633](../source/msg_neu.t.html#3633)\]

<div class="desc">

acknowledge a 'follow' for a target that was in sight

</div>

<span id="okayPostureChangeMsg"></span>

`okayPostureChangeMsg (posture)`

[msg_neu.t](../file/msg_neu.t.html)\[[4005](../source/msg_neu.t.html#4005)\]

<div class="desc">

default report for standing up/sitting down/lying down

</div>

<span id="okayPushTravelMsg"></span>

`okayPushTravelMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3685](../source/msg_neu.t.html#3685)\]

<div class="desc">

acknowledge pushing an object through travel

</div>

<span id="okaySetToMsg"></span>

`okaySetToMsg (val)`

[msg_neu.t](../file/msg_neu.t.html)\[[3702](../source/msg_neu.t.html#3702)\]

<div class="desc">

default 'set to' acknowledgment

</div>

<span id="okayTurnToMsg"></span>

`okayTurnToMsg (val)`

[msg_neu.t](../file/msg_neu.t.html)\[[3720](../source/msg_neu.t.html#3720)\]

<div class="desc">

default 'turn to' acknowledgment

</div>

<span id="rearTooFullMsg"></span>

`rearTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3185](../source/msg_neu.t.html#3185)\]

<div class="desc">

rear surface/space doesn't have room for object

</div>

<span id="refuseCommand"></span>

`refuseCommand (targetActor, issuingActor)`

[msg_neu.t](../file/msg_neu.t.html)\[[3515](../source/msg_neu.t.html#3515)\]

<div class="desc">

an actor doesn't accept a command from another actor

</div>

<span id="roomOkayPostureChangeMsg"></span>

`roomOkayPostureChangeMsg (posture, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[4009](../source/msg_neu.t.html#4009)\]

<div class="desc">

default report for standing/sitting/lying in/on something

</div>

<span id="smelledButNotSeenMsg"></span>

`smelledButNotSeenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2595](../source/msg_neu.t.html#2595)\]

<div class="desc">

object can be smelled but not seen

</div>

<span id="surfaceTooFullMsg"></span>

`surfaceTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3169](../source/msg_neu.t.html#3169)\]

<div class="desc">

surface doesn't have room for object

</div>

<span id="takenAndMovedToKeyringMsg"></span>

`takenAndMovedToKeyringMsg (keyring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3269](../source/msg_neu.t.html#3269)\]

<div class="desc">

we took a key and attached it to a keyring

</div>

<span id="thingDescMsg"></span>

`thingDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2770](../source/msg_neu.t.html#2770)\]

<div class="desc">

generic long description of a Thing

</div>

<span id="thingSmellDescMsg"></span>

`thingSmellDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2782](../source/msg_neu.t.html#2782)\]

<div class="desc">

generic "smell" description of a Thing

</div>

<span id="thingSoundDescMsg"></span>

`thingSoundDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2778](../source/msg_neu.t.html#2778)\]

<div class="desc">

generic LISTEN TO description of a Thing

</div>

<span id="throwCatchMsg"></span>

`throwCatchMsg (obj, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4115](../source/msg_neu.t.html#4115)\]

<div class="desc">

target catches object

</div>

<span id="throwFallMsg"></span>

`throwFallMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4083](../source/msg_neu.t.html#4083)\]

<div class="desc">

thrown object lands on target

</div>

<span id="throwFallShortMsg"></span>

`throwFallShortMsg (projectile, target, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[4107](../source/msg_neu.t.html#4107)\]

<div class="desc">

thrown object falls short of distant target

</div>

<span id="throwHitFallMsg"></span>

`throwHitFallMsg (projectile, target, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[4090](../source/msg_neu.t.html#4090)\]

<div class="desc">

thrown object bounces off target and falls to destination

</div>

<span id="throwHitMsg"></span>

`throwHitMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4075](../source/msg_neu.t.html#4075)\]

<div class="desc">

thrown object bounces off target (short report)

</div>

<span id="throwShortMsg"></span>

`throwShortMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4099](../source/msg_neu.t.html#4099)\]

<div class="desc">

thrown object falls short of distant target (sentence prefix only)

</div>

<span id="tooDistantMsg"></span>

`tooDistantMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2722](../source/msg_neu.t.html#2722)\]

<div class="desc">

generic "that's too far away" message for Distant items

</div>

<span id="tooHeavyForActorMsg"></span>

`tooHeavyForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3123](../source/msg_neu.t.html#3123)\]

<div class="desc">

the object is too heavy (all by itself) for the actor to hold

</div>

<span id="tooLargeForActorMsg"></span>

`tooLargeForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3093](../source/msg_neu.t.html#3093)\]

<div class="desc">

the object is too large for the actor to hold

</div>

<span id="tooLargeForContainerMsg"></span>

`tooLargeForContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3141](../source/msg_neu.t.html#3141)\]

<div class="desc">

object is too large for container

</div>

<span id="tooLargeForRearMsg"></span>

`tooLargeForRearMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3155](../source/msg_neu.t.html#3155)\]

<div class="desc">

object is too large to fit behind object

</div>

<span id="tooLargeForUndersideMsg"></span>

`tooLargeForUndersideMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3148](../source/msg_neu.t.html#3148)\]

<div class="desc">

object is too large to fit under object

</div>

<span id="totalTooHeavyForMsg"></span>

`totalTooHeavyForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3133](../source/msg_neu.t.html#3133)\]

<div class="desc">

the object is too heavy (in combination with everything else being
carried) for the actor to pick up

</div>

<span id="undersideTooFullMsg"></span>

`undersideTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3177](../source/msg_neu.t.html#3177)\]

<div class="desc">

underside doesn't have room for object

</div>

<span id="unthingNotHereMsg"></span>

`unthingNotHereMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2715](../source/msg_neu.t.html#2715)\]

<div class="desc">

generic "you don't see that" message for "unthings"

</div>

<span id="vehicleCannotDoFromMsg"></span>

`vehicleCannotDoFromMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3418](../source/msg_neu.t.html#3418)\]

<div class="desc">

cannot carry out a command from within a vehicle in a nested room

</div>

<span id="willNotCatchMsg"></span>

`willNotCatchMsg (catcher)`

[msg_neu.t](../file/msg_neu.t.html)\[[4126](../source/msg_neu.t.html#4126)\]

<div class="desc">

target does not want to catch anything

</div>

<span id="willNotLetGoMsg"></span>

`willNotLetGoMsg (holder, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3343](../source/msg_neu.t.html#3343)\]

<div class="desc">

actor won't let go of a possession

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
