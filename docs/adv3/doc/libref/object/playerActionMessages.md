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



Verb messages for standard library verb implementations for actions
performed by the player character. These return strings suitable for use
in VerifyResult objects as well as for action reports (defaultReport,
mainReport, and so on).

Most of these messages are generic enough to be used for player and
non-player character alike. However, some of the messages either are too
terse (such as the default reports) or are phrased awkwardly for NPC
use, so the NPC verb messages override those.

**`playerActionMessages`**` :   `[`MessageHelper`](../object/MessageHelper.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`playerActionMessages`**  
[`MessageHelper`](../object/MessageHelper.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`alreadyAttachedMsg`](#alreadyAttachedMsg) [`alreadyBurningMsg`](#alreadyBurningMsg) [`alreadyClosedMsg`](#alreadyClosedMsg) [`alreadyHoldingMsg`](#alreadyHoldingMsg) [`alreadyInLocMsg`](#alreadyInLocMsg) [`alreadyLockedMsg`](#alreadyLockedMsg) [`alreadyLyingMsg`](#alreadyLyingMsg) [`alreadyLyingOnMsg`](#alreadyLyingOnMsg) [`alreadyOpenMsg`](#alreadyOpenMsg) [`alreadyPulledMsg`](#alreadyPulledMsg) [`alreadyPushedMsg`](#alreadyPushedMsg) [`alreadyPutBehindMsg`](#alreadyPutBehindMsg) [`alreadyPutInMsg`](#alreadyPutInMsg) [`alreadyPutOnMsg`](#alreadyPutOnMsg) [`alreadyPutUnderMsg`](#alreadyPutUnderMsg) [`alreadySittingMsg`](#alreadySittingMsg) [`alreadySittingOnMsg`](#alreadySittingOnMsg) [`alreadyStandingMsg`](#alreadyStandingMsg) [`alreadyStandingOnMsg`](#alreadyStandingOnMsg) [`alreadySwitchedOffMsg`](#alreadySwitchedOffMsg) [`alreadySwitchedOnMsg`](#alreadySwitchedOnMsg) [`alreadyUnlockedMsg`](#alreadyUnlockedMsg) [`alreadyWearingMsg`](#alreadyWearingMsg) [`askVagueMsg`](#askVagueMsg) [`candleNotLitMsg`](#candleNotLitMsg) [`candleOutOfFuelMsg`](#candleOutOfFuelMsg) [`cannotAskSelfForMsg`](#cannotAskSelfForMsg) [`cannotAskSelfMsg`](#cannotAskSelfMsg) [`cannotAttachKeyToMsg`](#cannotAttachKeyToMsg) [`cannotAttachMsg`](#cannotAttachMsg) [`cannotAttachToMsg`](#cannotAttachToMsg) [`cannotAttachToSelfMsg`](#cannotAttachToSelfMsg) [`cannotBoardMsg`](#cannotBoardMsg) [`cannotBurnDobjWithMsg`](#cannotBurnDobjWithMsg) [`cannotBurnMsg`](#cannotBurnMsg) [`cannotBurnWithMsg`](#cannotBurnWithMsg) [`cannotCleanMsg`](#cannotCleanMsg) [`cannotCleanWithMsg`](#cannotCleanWithMsg) [`cannotClimbMsg`](#cannotClimbMsg) [`cannotCloseMsg`](#cannotCloseMsg) [`cannotConsultMsg`](#cannotConsultMsg) [`cannotCutWithMsg`](#cannotCutWithMsg) [`cannotDetachFromMsg`](#cannotDetachFromMsg) [`cannotDetachMsg`](#cannotDetachMsg) [`cannotDetachPermanentMsg`](#cannotDetachPermanentMsg) [`cannotDigMsg`](#cannotDigMsg) [`cannotDigWithMsg`](#cannotDigWithMsg) [`cannotDoFromHereMsg`](#cannotDoFromHereMsg) [`cannotDoThatMsg`](#cannotDoThatMsg) [`cannotDrinkMsg`](#cannotDrinkMsg) [`cannotEatMsg`](#cannotEatMsg) [`cannotEnterHeldMsg`](#cannotEnterHeldMsg) [`cannotEnterMsg`](#cannotEnterMsg) [`cannotEnterOnMsg`](#cannotEnterOnMsg) [`cannotExtinguishMsg`](#cannotExtinguishMsg) [`cannotFastenMsg`](#cannotFastenMsg) [`cannotFastenToMsg`](#cannotFastenToMsg) [`cannotFindTopicMsg`](#cannotFindTopicMsg) [`cannotFlipMsg`](#cannotFlipMsg) [`cannotFollowSelfMsg`](#cannotFollowSelfMsg) [`cannotGetOffOfMsg`](#cannotGetOffOfMsg) [`cannotGetOutMsg`](#cannotGetOutMsg) [`cannotGiveToItselfMsg`](#cannotGiveToItselfMsg) [`cannotGiveToMsg`](#cannotGiveToMsg) [`cannotGiveToSelfMsg`](#cannotGiveToSelfMsg) [`cannotGoBackMsg`](#cannotGoBackMsg) [`cannotGoThatWayInDarkMsg`](#cannotGoThatWayInDarkMsg) [`cannotGoThatWayMsg`](#cannotGoThatWayMsg) [`cannotGoThroughMsg`](#cannotGoThroughMsg) [`cannotJumpOffHereMsg`](#cannotJumpOffHereMsg) [`cannotJumpOffMsg`](#cannotJumpOffMsg) [`cannotJumpOverMsg`](#cannotJumpOverMsg) [`cannotKissMsg`](#cannotKissMsg) [`cannotKissSelfMsg`](#cannotKissSelfMsg) [`cannotLieOnMsg`](#cannotLieOnMsg) [`cannotLightMsg`](#cannotLightMsg) [`cannotLockMsg`](#cannotLockMsg) [`cannotLockWithMsg`](#cannotLockWithMsg) [`cannotLookBehindMsg`](#cannotLookBehindMsg) [`cannotLookInClosedMsg`](#cannotLookInClosedMsg) [`cannotLookThroughMsg`](#cannotLookThroughMsg) [`cannotLookUnderMsg`](#cannotLookUnderMsg) [`cannotMoveActorMsg`](#cannotMoveActorMsg) [`cannotMoveFixtureMsg`](#cannotMoveFixtureMsg) [`cannotMoveHeavyMsg`](#cannotMoveHeavyMsg) [`cannotMoveImmovableMsg`](#cannotMoveImmovableMsg) [`cannotMovePersonMsg`](#cannotMovePersonMsg) [`cannotMovePushableMsg`](#cannotMovePushableMsg) [`cannotMoveWithMsg`](#cannotMoveWithMsg) [`cannotOpenLockedMsg`](#cannotOpenLockedMsg) [`cannotOpenMsg`](#cannotOpenMsg) [`cannotPlugInMsg`](#cannotPlugInMsg) [`cannotPlugInToMsg`](#cannotPlugInToMsg) [`cannotPourIntoMsg`](#cannotPourIntoMsg) [`cannotPourMsg`](#cannotPourMsg) [`cannotPourOntoMsg`](#cannotPourOntoMsg) [`cannotPushTravelMsg`](#cannotPushTravelMsg) [`cannotPutActorMsg`](#cannotPutActorMsg) [`cannotPutBehindMsg`](#cannotPutBehindMsg) [`cannotPutBehindRestrictedMsg`](#cannotPutBehindRestrictedMsg) [`cannotPutBehindSelfMsg`](#cannotPutBehindSelfMsg) [`cannotPutFixtureMsg`](#cannotPutFixtureMsg) [`cannotPutHeavyMsg`](#cannotPutHeavyMsg) [`cannotPutImmovableMsg`](#cannotPutImmovableMsg) [`cannotPutInDispenserMsg`](#cannotPutInDispenserMsg) [`cannotPutInRestrictedMsg`](#cannotPutInRestrictedMsg) [`cannotPutInSelfMsg`](#cannotPutInSelfMsg) [`cannotPutOnRestrictedMsg`](#cannotPutOnRestrictedMsg) [`cannotPutOnSelfMsg`](#cannotPutOnSelfMsg) [`cannotPutPersonMsg`](#cannotPutPersonMsg) [`cannotPutPushableMsg`](#cannotPutPushableMsg) [`cannotPutUnderMsg`](#cannotPutUnderMsg) [`cannotPutUnderRestrictedMsg`](#cannotPutUnderRestrictedMsg) [`cannotPutUnderSelfMsg`](#cannotPutUnderSelfMsg) [`cannotRemoveHeldMsg`](#cannotRemoveHeldMsg) [`cannotReturnToDispenserMsg`](#cannotReturnToDispenserMsg) [`cannotScrewMsg`](#cannotScrewMsg) [`cannotScrewWithMsg`](#cannotScrewWithMsg) [`cannotSetToMsg`](#cannotSetToMsg) [`cannotShowToItselfMsg`](#cannotShowToItselfMsg) [`cannotShowToMsg`](#cannotShowToMsg) [`cannotShowToSelfMsg`](#cannotShowToSelfMsg) [`cannotSitOnMsg`](#cannotSitOnMsg) [`cannotSleepMsg`](#cannotSleepMsg) [`cannotStandOnMsg`](#cannotStandOnMsg) [`cannotStandOnPathMsg`](#cannotStandOnPathMsg) [`cannotSwitchMsg`](#cannotSwitchMsg) [`cannotTakeActorMsg`](#cannotTakeActorMsg) [`cannotTakeFixtureMsg`](#cannotTakeFixtureMsg) [`cannotTakeHeavyMsg`](#cannotTakeHeavyMsg) [`cannotTakeImmovableMsg`](#cannotTakeImmovableMsg) [`cannotTakeLocationMsg`](#cannotTakeLocationMsg) [`cannotTakePersonMsg`](#cannotTakePersonMsg) [`cannotTakePushableMsg`](#cannotTakePushableMsg) [`cannotTalkToSelfMsg`](#cannotTalkToSelfMsg) [`cannotTasteActorMsg`](#cannotTasteActorMsg) [`cannotTastePersonMsg`](#cannotTastePersonMsg) [`cannotTellSelfMsg`](#cannotTellSelfMsg) [`cannotThrowAtContentsMsg`](#cannotThrowAtContentsMsg) [`cannotThrowAtSelfMsg`](#cannotThrowAtSelfMsg) [`cannotThrowToMsg`](#cannotThrowToMsg) [`cannotTurnMsg`](#cannotTurnMsg) [`cannotTurnOffMsg`](#cannotTurnOffMsg) [`cannotTurnOnMsg`](#cannotTurnOnMsg) [`cannotTurnWithMsg`](#cannotTurnWithMsg) [`cannotTypeOnMsg`](#cannotTypeOnMsg) [`cannotUnboardMsg`](#cannotUnboardMsg) [`cannotUnfastenFromMsg`](#cannotUnfastenFromMsg) [`cannotUnfastenMsg`](#cannotUnfastenMsg) [`cannotUnlockMsg`](#cannotUnlockMsg) [`cannotUnlockWithMsg`](#cannotUnlockWithMsg) [`cannotUnplugFromMsg`](#cannotUnplugFromMsg) [`cannotUnplugMsg`](#cannotUnplugMsg) [`cannotUnscrewMsg`](#cannotUnscrewMsg) [`cannotUnscrewWithMsg`](#cannotUnscrewWithMsg) [`cutNoEffectMsg`](#cutNoEffectMsg) [`dontThrowDirMsg`](#dontThrowDirMsg) [`droppingSelfMsg`](#droppingSelfMsg) [`flashlightOnButDarkMsg`](#flashlightOnButDarkMsg) [`followAlreadyHereInDarkMsg`](#followAlreadyHereInDarkMsg) [`followAlreadyHereMsg`](#followAlreadyHereMsg) [`followUnknownMsg`](#followUnknownMsg) [`giveAlreadyHasMsg`](#giveAlreadyHasMsg) [`keyDoesNotFitLockMsg`](#keyDoesNotFitLockMsg) [`keyNotDetachableMsg`](#keyNotDetachableMsg) [`keyNotOnKeyringMsg`](#keyNotOnKeyringMsg) [`matchNotLitMsg`](#matchNotLitMsg) [`moveNoEffectMsg`](#moveNoEffectMsg) [`moveToNoEffectMsg`](#moveToNoEffectMsg) [`mustBeStandingMsg`](#mustBeStandingMsg) [`mustSpecifyTurnToMsg`](#mustSpecifyTurnToMsg) [`newlyDarkMsg`](#newlyDarkMsg) [`noKeyNeededMsg`](#noKeyNeededMsg) [`noRoomToLieMsg`](#noRoomToLieMsg) [`noRoomToSitMsg`](#noRoomToSitMsg) [`noRoomToStandMsg`](#noRoomToStandMsg) [`notAContainerMsg`](#notAContainerMsg) [`notASurfaceMsg`](#notASurfaceMsg) [`notAttachedToMsg`](#notAttachedToMsg) [`notAWeaponMsg`](#notAWeaponMsg) [`notCarryingMsg`](#notCarryingMsg) [`notDoffableMsg`](#notDoffableMsg) [`notFollowableMsg`](#notFollowableMsg) [`nothingBehindMsg`](#nothingBehindMsg) [`nothingBeyondDoorMsg`](#nothingBeyondDoorMsg) [`nothingInsideMsg`](#nothingInsideMsg) [`nothingThroughMsg`](#nothingThroughMsg) [`nothingThroughPassageMsg`](#nothingThroughPassageMsg) [`nothingToHearMsg`](#nothingToHearMsg) [`nothingToSmellMsg`](#nothingToSmellMsg) [`nothingUnderMsg`](#nothingUnderMsg) [`notOnPlatformMsg`](#notOnPlatformMsg) [`notWearableMsg`](#notWearableMsg) [`notWearingMsg`](#notWearingMsg) [`objNotForKeyringMsg`](#objNotForKeyringMsg) [`okayAttachToMsg`](#okayAttachToMsg) [`okayBurnCandleMsg`](#okayBurnCandleMsg) [`okayBurnMatchMsg`](#okayBurnMatchMsg) [`okayCloseMsg`](#okayCloseMsg) [`okayDetachFromMsg`](#okayDetachFromMsg) [`okayDoffMsg`](#okayDoffMsg) [`okayDropMsg`](#okayDropMsg) [`okayEatMsg`](#okayEatMsg) [`okayExtinguishCandleMsg`](#okayExtinguishCandleMsg) [`okayExtinguishMatchMsg`](#okayExtinguishMatchMsg) [`okayJumpMsg`](#okayJumpMsg) [`okayLockMsg`](#okayLockMsg) [`okayNotStandingOnMsg`](#okayNotStandingOnMsg) [`okayOpenMsg`](#okayOpenMsg) [`okayPullLeverMsg`](#okayPullLeverMsg) [`okayPullSpringLeverMsg`](#okayPullSpringLeverMsg) [`okayPushButtonMsg`](#okayPushButtonMsg) [`okayPushLeverMsg`](#okayPushLeverMsg) [`okayPutBehindMsg`](#okayPutBehindMsg) [`okayPutInMsg`](#okayPutInMsg) [`okayPutOnMsg`](#okayPutOnMsg) [`okayPutUnderMsg`](#okayPutUnderMsg) [`okayTakeMsg`](#okayTakeMsg) [`okayTurnOffMsg`](#okayTurnOffMsg) [`okayTurnOnMsg`](#okayTurnOnMsg) [`okayUnlockMsg`](#okayUnlockMsg) [`okayWearMsg`](#okayWearMsg) [`okayYellMsg`](#okayYellMsg) [`pullNoEffectMsg`](#pullNoEffectMsg) [`pushNoEffectMsg`](#pushNoEffectMsg) [`puttingSelfMsg`](#puttingSelfMsg) [`sayGoodbyeMsg`](#sayGoodbyeMsg) [`sayHelloMsg`](#sayHelloMsg) [`sayNoMsg`](#sayNoMsg) [`sayYesMsg`](#sayYesMsg) [`setToInvalidMsg`](#setToInvalidMsg) [`shouldNotBreakMsg`](#shouldNotBreakMsg) [`shouldNotThrowAtFloorMsg`](#shouldNotThrowAtFloorMsg) [`stairwayNotDownMsg`](#stairwayNotDownMsg) [`stairwayNotUpMsg`](#stairwayNotUpMsg) [`takeFromNotBehindMsg`](#takeFromNotBehindMsg) [`takeFromNotInActorMsg`](#takeFromNotInActorMsg) [`takeFromNotInMsg`](#takeFromNotInMsg) [`takeFromNotOnMsg`](#takeFromNotOnMsg) [`takeFromNotUnderMsg`](#takeFromNotUnderMsg) [`takingSelfMsg`](#takingSelfMsg) [`tellVagueMsg`](#tellVagueMsg) [`throwingSelfMsg`](#throwingSelfMsg) [`timePassesMsg`](#timePassesMsg) [`tooDarkMsg`](#tooDarkMsg) [`turnToInvalidMsg`](#turnToInvalidMsg) [`unknownHowToLockMsg`](#unknownHowToLockMsg) [`unknownHowToUnlockMsg`](#unknownHowToUnlockMsg) [`unlockRequiresKeyMsg`](#unlockRequiresKeyMsg) [`uselessToAttackMsg`](#uselessToAttackMsg) [`whereToGoMsg`](#whereToGoMsg) [`wrongAttachmentMsg`](#wrongAttachmentMsg) [`wrongDetachmentMsg`](#wrongDetachmentMsg)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`actorCannotSeeMsg`](#actorCannotSeeMsg) [`becomingTooLargeForActorMsg`](#becomingTooLargeForActorMsg) [`becomingTooLargeForContainerMsg`](#becomingTooLargeForContainerMsg) [`cannotBeWearingMsg`](#cannotBeWearingMsg) [`cannotDoFromMsg`](#cannotDoFromMsg) [`cannotEnterExitOnlyMsg`](#cannotEnterExitOnlyMsg) [`cannotFitIntoOpeningMsg`](#cannotFitIntoOpeningMsg) [`cannotFitOutOfOpeningMsg`](#cannotFitOutOfOpeningMsg) [`cannotFollowFromHereMsg`](#cannotFollowFromHereMsg) [`cannotGoThatWayInVehicleMsg`](#cannotGoThatWayInVehicleMsg) [`cannotGoThroughClosedDoorMsg`](#cannotGoThroughClosedDoorMsg) [`cannotHearMsg`](#cannotHearMsg) [`cannotMoveComponentMsg`](#cannotMoveComponentMsg) [`cannotMoveThroughClosedMsg`](#cannotMoveThroughClosedMsg) [`cannotMoveThroughContainerMsg`](#cannotMoveThroughContainerMsg) [`cannotMoveThroughMsg`](#cannotMoveThroughMsg) [`cannotPushObjectNestedMsg`](#cannotPushObjectNestedMsg) [`cannotPushObjectThatWayMsg`](#cannotPushObjectThatWayMsg) [`cannotPutComponentMsg`](#cannotPutComponentMsg) [`cannotReachIntoOpeningMsg`](#cannotReachIntoOpeningMsg) [`cannotReachObjectMsg`](#cannotReachObjectMsg) [`cannotReachOutOfOpeningMsg`](#cannotReachOutOfOpeningMsg) [`cannotReachThroughMsg`](#cannotReachThroughMsg) [`cannotSmellMsg`](#cannotSmellMsg) [`cannotTakeComponentMsg`](#cannotTakeComponentMsg) [`cannotTasteMsg`](#cannotTasteMsg) [`cannotThrowThroughMsg`](#cannotThrowThroughMsg) [`cannotTouchThroughClosedMsg`](#cannotTouchThroughClosedMsg) [`cannotTouchThroughContainerMsg`](#cannotTouchThroughContainerMsg) [`circularlyBehindMsg`](#circularlyBehindMsg) [`circularlyInMsg`](#circularlyInMsg) [`circularlyOnMsg`](#circularlyOnMsg) [`circularlyUnderMsg`](#circularlyUnderMsg) [`containerBecomingTooFullMsg`](#containerBecomingTooFullMsg) [`containerTooFullMsg`](#containerTooFullMsg) [`decorationNotImportantMsg`](#decorationNotImportantMsg) [`doorClosesBehindMsg`](#doorClosesBehindMsg) [`droppingObjMsg`](#droppingObjMsg) [`floorlessDropMsg`](#floorlessDropMsg) [`foundKeyOnKeyringMsg`](#foundKeyOnKeyringMsg) [`foundNoKeyOnKeyringMsg`](#foundNoKeyOnKeyringMsg) [`handsBecomingTooFullForMsg`](#handsBecomingTooFullForMsg) [`handsTooFullForMsg`](#handsTooFullForMsg) [`heardButNotSeenMsg`](#heardButNotSeenMsg) [`invalidStagingContainerActorMsg`](#invalidStagingContainerActorMsg) [`invalidStagingContainerMsg`](#invalidStagingContainerMsg) [`invalidStagingLocationMsg`](#invalidStagingLocationMsg) [`lookInVaporousMsg`](#lookInVaporousMsg) [`movedKeysToKeyringMsg`](#movedKeysToKeyringMsg) [`movedKeyToKeyringMsg`](#movedKeyToKeyringMsg) [`mustBeBurningMsg`](#mustBeBurningMsg) [`mustBeCarryingMsg`](#mustBeCarryingMsg) [`mustBeClosedMsg`](#mustBeClosedMsg) [`mustBeEmptyMsg`](#mustBeEmptyMsg) [`mustBeHoldingMsg`](#mustBeHoldingMsg) [`mustBeInMsg`](#mustBeInMsg) [`mustBeOpenMsg`](#mustBeOpenMsg) [`mustBeUnlockedMsg`](#mustBeUnlockedMsg) [`mustBeVisibleMsg`](#mustBeVisibleMsg) [`mustDetachMsg`](#mustDetachMsg) [`mustGetOnMsg`](#mustGetOnMsg) [`mustLieOnMsg`](#mustLieOnMsg) [`mustOpenDoorMsg`](#mustOpenDoorMsg) [`mustSitOnMsg`](#mustSitOnMsg) [`nestedRoomTooHighMsg`](#nestedRoomTooHighMsg) [`nestedRoomTooHighToExitMsg`](#nestedRoomTooHighToExitMsg) [`noiseSourceMsg`](#noiseSourceMsg) [`noResponseFromMsg`](#noResponseFromMsg) [`notAddressableMsg`](#notAddressableMsg) [`notInterestedMsg`](#notInterestedMsg) [`notWithIntangibleMsg`](#notWithIntangibleMsg) [`notWithVaporousMsg`](#notWithVaporousMsg) [`npcDescMsg`](#npcDescMsg) [`objCannotHearActorMsg`](#objCannotHearActorMsg) [`odorSourceMsg`](#odorSourceMsg) [`okayFollowInSightMsg`](#okayFollowInSightMsg) [`okayPostureChangeMsg`](#okayPostureChangeMsg) [`okayPushTravelMsg`](#okayPushTravelMsg) [`okaySetToMsg`](#okaySetToMsg) [`okayTurnToMsg`](#okayTurnToMsg) [`rearTooFullMsg`](#rearTooFullMsg) [`refuseCommand`](#refuseCommand) [`roomOkayPostureChangeMsg`](#roomOkayPostureChangeMsg) [`smelledButNotSeenMsg`](#smelledButNotSeenMsg) [`surfaceTooFullMsg`](#surfaceTooFullMsg) [`takenAndMovedToKeyringMsg`](#takenAndMovedToKeyringMsg) [`thingDescMsg`](#thingDescMsg) [`thingSmellDescMsg`](#thingSmellDescMsg) [`thingSoundDescMsg`](#thingSoundDescMsg) [`throwCatchMsg`](#throwCatchMsg) [`throwFallMsg`](#throwFallMsg) [`throwFallShortMsg`](#throwFallShortMsg) [`throwHitFallMsg`](#throwHitFallMsg) [`throwHitMsg`](#throwHitMsg) [`throwShortMsg`](#throwShortMsg) [`tooDistantMsg`](#tooDistantMsg) [`tooHeavyForActorMsg`](#tooHeavyForActorMsg) [`tooLargeForActorMsg`](#tooLargeForActorMsg) [`tooLargeForContainerMsg`](#tooLargeForContainerMsg) [`tooLargeForRearMsg`](#tooLargeForRearMsg) [`tooLargeForUndersideMsg`](#tooLargeForUndersideMsg) [`totalTooHeavyForMsg`](#totalTooHeavyForMsg) [`undersideTooFullMsg`](#undersideTooFullMsg) [`unthingNotHereMsg`](#unthingNotHereMsg) [`vehicleCannotDoFromMsg`](#vehicleCannotDoFromMsg) [`willNotCatchMsg`](#willNotCatchMsg) [`willNotLetGoMsg`](#willNotLetGoMsg)

Inherited from `MessageHelper` :  
[`askDisambigList`](../object/MessageHelper.html#askDisambigList) [`shortTIMsg`](../object/MessageHelper.html#shortTIMsg) [`shortTMsg`](../object/MessageHelper.html#shortTMsg)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="alreadyAttachedMsg"></span>

`alreadyAttachedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3827](../source/msg_neu.t.html#3827)\]



cannot attach because we're already attached to the given object



<span id="alreadyBurningMsg"></span>

`alreadyBurningMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3804](../source/msg_neu.t.html#3804)\]



object is already burning



<span id="alreadyClosedMsg"></span>

`alreadyClosedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3889](../source/msg_neu.t.html#3889)\]



*no description available*



<span id="alreadyHoldingMsg"></span>

`alreadyHoldingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2877](../source/msg_neu.t.html#2877)\]



taking something already being held



<span id="alreadyInLocMsg"></span>

`alreadyInLocMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3983](../source/msg_neu.t.html#3983)\]



actor is already in a location



<span id="alreadyLockedMsg"></span>

`alreadyLockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3892](../source/msg_neu.t.html#3892)\]



already locked/unlocked



<span id="alreadyLyingMsg"></span>

`alreadyLyingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3990](../source/msg_neu.t.html#3990)\]



*no description available*



<span id="alreadyLyingOnMsg"></span>

`alreadyLyingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3991](../source/msg_neu.t.html#3991)\]



*no description available*



<span id="alreadyOpenMsg"></span>

`alreadyOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3888](../source/msg_neu.t.html#3888)\]



already open/closed



<span id="alreadyPulledMsg"></span>

`alreadyPulledMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3663](../source/msg_neu.t.html#3663)\]



lever is already in pulled state



<span id="alreadyPushedMsg"></span>

`alreadyPushedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3652](../source/msg_neu.t.html#3652)\]



lever is already in pushed state



<span id="alreadyPutBehindMsg"></span>

`alreadyPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2904](../source/msg_neu.t.html#2904)\]



we can't put the dobj behind the iobj because it's already there



<span id="alreadyPutInMsg"></span>

`alreadyPutInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2895](../source/msg_neu.t.html#2895)\]



we can't put the dobj in the iobj because it's already there



<span id="alreadyPutOnMsg"></span>

`alreadyPutOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2898](../source/msg_neu.t.html#2898)\]



we can't put the dobj on the iobj because it's already there



<span id="alreadyPutUnderMsg"></span>

`alreadyPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2901](../source/msg_neu.t.html#2901)\]



we can't put the dobj under the iobj because it's already there



<span id="alreadySittingMsg"></span>

`alreadySittingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3988](../source/msg_neu.t.html#3988)\]



*no description available*



<span id="alreadySittingOnMsg"></span>

`alreadySittingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3989](../source/msg_neu.t.html#3989)\]



*no description available*



<span id="alreadyStandingMsg"></span>

`alreadyStandingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3986](../source/msg_neu.t.html#3986)\]



actor is already standing/sitting on/lying on



<span id="alreadyStandingOnMsg"></span>

`alreadyStandingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3987](../source/msg_neu.t.html#3987)\]



*no description available*



<span id="alreadySwitchedOffMsg"></span>

`alreadySwitchedOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3725](../source/msg_neu.t.html#3725)\]



*no description available*



<span id="alreadySwitchedOnMsg"></span>

`alreadySwitchedOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3724](../source/msg_neu.t.html#3724)\]



switch is already on/off



<span id="alreadyUnlockedMsg"></span>

`alreadyUnlockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3893](../source/msg_neu.t.html#3893)\]



*no description available*



<span id="alreadyWearingMsg"></span>

`alreadyWearingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2846](../source/msg_neu.t.html#2846)\]



already wearing item



<span id="askVagueMsg"></span>

`askVagueMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3581](../source/msg_neu.t.html#3581)\]



vague ASK/TELL (for ASK/TELL \<actor\> \<topic\> syntax errors)



<span id="candleNotLitMsg"></span>

`candleNotLitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3764](../source/msg_neu.t.html#3764)\]



extinguishing a candle that isn't lit



<span id="candleOutOfFuelMsg"></span>

`candleOutOfFuelMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3757](../source/msg_neu.t.html#3757)\]



trying to light a candle with no fuel



<span id="cannotAskSelfForMsg"></span>

`cannotAskSelfForMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3547](../source/msg_neu.t.html#3547)\]



can't ask yourself for anything



<span id="cannotAskSelfMsg"></span>

`cannotAskSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3543](../source/msg_neu.t.html#3543)\]



can't ask yourself about anything



<span id="cannotAttachKeyToMsg"></span>

`cannotAttachKeyToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3955](../source/msg_neu.t.html#3955)\]



cannot attach key (dobj) to (iobj)



<span id="cannotAttachMsg"></span>

`cannotAttachMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3817](../source/msg_neu.t.html#3817)\]



cannot attach object to object



<span id="cannotAttachToMsg"></span>

`cannotAttachToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3819](../source/msg_neu.t.html#3819)\]



*no description available*



<span id="cannotAttachToSelfMsg"></span>

`cannotAttachToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3823](../source/msg_neu.t.html#3823)\]



cannot attach to self



<span id="cannotBoardMsg"></span>

`cannotBoardMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3967](../source/msg_neu.t.html#3967)\]



*no description available*



<span id="cannotBurnDobjWithMsg"></span>

`cannotBurnDobjWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3800](../source/msg_neu.t.html#3800)\]



cannot burn this specific direct object with this specific iobj



<span id="cannotBurnMsg"></span>

`cannotBurnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3795](../source/msg_neu.t.html#3795)\]



cannot burn



<span id="cannotBurnWithMsg"></span>

`cannotBurnWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3796](../source/msg_neu.t.html#3796)\]



*no description available*



<span id="cannotCleanMsg"></span>

`cannotCleanMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3948](../source/msg_neu.t.html#3948)\]



cannot clean object



<span id="cannotCleanWithMsg"></span>

`cannotCleanWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3951](../source/msg_neu.t.html#3951)\]



*no description available*



<span id="cannotClimbMsg"></span>

`cannotClimbMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3879](../source/msg_neu.t.html#3879)\]



cannot climb object



<span id="cannotCloseMsg"></span>

`cannotCloseMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3884](../source/msg_neu.t.html#3884)\]



*no description available*



<span id="cannotConsultMsg"></span>

`cannotConsultMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3770](../source/msg_neu.t.html#3770)\]



cannot consult object



<span id="cannotCutWithMsg"></span>

`cannotCutWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3876](../source/msg_neu.t.html#3876)\]



can't use iobj to cut anything



<span id="cannotDetachFromMsg"></span>

`cannotDetachFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3857](../source/msg_neu.t.html#3857)\]



*no description available*



<span id="cannotDetachMsg"></span>

`cannotDetachMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3856](../source/msg_neu.t.html#3856)\]



cannot detach object from object



<span id="cannotDetachPermanentMsg"></span>

`cannotDetachPermanentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3861](../source/msg_neu.t.html#3861)\]



no obvious way to detach a permanent attachment



<span id="cannotDigMsg"></span>

`cannotDigMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2870](../source/msg_neu.t.html#2870)\]



cannot dig here



<span id="cannotDigWithMsg"></span>

`cannotDigWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2873](../source/msg_neu.t.html#2873)\]



not a digging implement



<span id="cannotDoFromHereMsg"></span>

`cannotDoFromHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3364](../source/msg_neu.t.html#3364)\]



cannot carry out a command from this location



<span id="cannotDoThatMsg"></span>

`cannotDoThatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2567](../source/msg_neu.t.html#2567)\]



generic "can't do that" message - this is used when verification fails
because an object doesn't define the action ("doXxx") method for the
verb



<span id="cannotDrinkMsg"></span>

`cannotDrinkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3944](../source/msg_neu.t.html#3944)\]



*no description available*



<span id="cannotEatMsg"></span>

`cannotEatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3943](../source/msg_neu.t.html#3943)\]



not edible/drinkable



<span id="cannotEnterHeldMsg"></span>

`cannotEnterHeldMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3976](../source/msg_neu.t.html#3976)\]



cannot sit/lie/stand on something being held



<span id="cannotEnterMsg"></span>

`cannotEnterMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4043](../source/msg_neu.t.html#4043)\]



cannot enter/go through



<span id="cannotEnterOnMsg"></span>

`cannotEnterOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3777](../source/msg_neu.t.html#3777)\]



cannot enter anything on object



<span id="cannotExtinguishMsg"></span>

`cannotExtinguishMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3807](../source/msg_neu.t.html#3807)\]



cannot extinguish



<span id="cannotFastenMsg"></span>

`cannotFastenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4019](../source/msg_neu.t.html#4019)\]



cannot fasten/unfasten



<span id="cannotFastenToMsg"></span>

`cannotFastenToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4020](../source/msg_neu.t.html#4020)\]



*no description available*



<span id="cannotFindTopicMsg"></span>

`cannotFindTopicMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3511](../source/msg_neu.t.html#3511)\]



failed to find a topic in a consultable object



<span id="cannotFlipMsg"></span>

`cannotFlipMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3783](../source/msg_neu.t.html#3783)\]



cannot flip object



<span id="cannotFollowSelfMsg"></span>

`cannotFollowSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3604](../source/msg_neu.t.html#3604)\]



cannot follow yourself



<span id="cannotGetOffOfMsg"></span>

`cannotGetOffOfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3969](../source/msg_neu.t.html#3969)\]



*no description available*



<span id="cannotGetOutMsg"></span>

`cannotGetOutMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3980](../source/msg_neu.t.html#3980)\]



cannot get out (of current location)



<span id="cannotGiveToItselfMsg"></span>

`cannotGiveToItselfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3559](../source/msg_neu.t.html#3559)\]



can't give something to itself



<span id="cannotGiveToMsg"></span>

`cannotGiveToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3571](../source/msg_neu.t.html#3571)\]



can't give/show something to a non-actor



<span id="cannotGiveToSelfMsg"></span>

`cannotGiveToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3555](../source/msg_neu.t.html#3555)\]



can't give yourself something



<span id="cannotGoBackMsg"></span>

`cannotGoBackMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3360](../source/msg_neu.t.html#3360)\]



we don't know the way back for a GO BACK



<span id="cannotGoThatWayInDarkMsg"></span>

`cannotGoThatWayInDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3356](../source/msg_neu.t.html#3356)\]



travel attempted in the dark in a direction with no exit



<span id="cannotGoThatWayMsg"></span>

`cannotGoThatWayMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3353](../source/msg_neu.t.html#3353)\]



travel attempted in a direction with no exit



<span id="cannotGoThroughMsg"></span>

`cannotGoThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4045](../source/msg_neu.t.html#4045)\]



*no description available*



<span id="cannotJumpOffHereMsg"></span>

`cannotJumpOffHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3507](../source/msg_neu.t.html#3507)\]



cannot jump off (with no direct object) from here



<span id="cannotJumpOffMsg"></span>

`cannotJumpOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3504](../source/msg_neu.t.html#3504)\]



cannot jump off object



<span id="cannotJumpOverMsg"></span>

`cannotJumpOverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3501](../source/msg_neu.t.html#3501)\]



cannot jump over object



<span id="cannotKissMsg"></span>

`cannotKissMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4134](../source/msg_neu.t.html#4134)\]



cannot kiss something



<span id="cannotKissSelfMsg"></span>

`cannotKissSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4141](../source/msg_neu.t.html#4141)\]



cannot kiss yourself



<span id="cannotLieOnMsg"></span>

`cannotLieOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3964](../source/msg_neu.t.html#3964)\]



*no description available*



<span id="cannotLightMsg"></span>

`cannotLightMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3792](../source/msg_neu.t.html#3792)\]



cannot light



<span id="cannotLockMsg"></span>

`cannotLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3899](../source/msg_neu.t.html#3899)\]



object is not lockable/unlockable



<span id="cannotLockWithMsg"></span>

`cannotLockWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3912](../source/msg_neu.t.html#3912)\]



object is not a key



<span id="cannotLookBehindMsg"></span>

`cannotLookBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2804](../source/msg_neu.t.html#2804)\]



this is an object we can't look behind/through



<span id="cannotLookInClosedMsg"></span>

`cannotLookInClosedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3896](../source/msg_neu.t.html#3896)\]



cannot look in container because it's closed



<span id="cannotLookThroughMsg"></span>

`cannotLookThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2806](../source/msg_neu.t.html#2806)\]



*no description available*



<span id="cannotLookUnderMsg"></span>

`cannotLookUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2805](../source/msg_neu.t.html#2805)\]



*no description available*



<span id="cannotMoveActorMsg"></span>

`cannotMoveActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3006](../source/msg_neu.t.html#3006)\]



*no description available*



<span id="cannotMoveFixtureMsg"></span>

`cannotMoveFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2910](../source/msg_neu.t.html#2910)\]



trying to move a Fixture to a new container by some means (take, drop,
put in, put on, etc)



<span id="cannotMoveHeavyMsg"></span>

`cannotMoveHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2925](../source/msg_neu.t.html#2925)\]



*no description available*



<span id="cannotMoveImmovableMsg"></span>

`cannotMoveImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2920](../source/msg_neu.t.html#2920)\]



*no description available*



<span id="cannotMovePersonMsg"></span>

`cannotMovePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3013](../source/msg_neu.t.html#3013)\]



*no description available*



<span id="cannotMovePushableMsg"></span>

`cannotMovePushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2951](../source/msg_neu.t.html#2951)\]



*no description available*



<span id="cannotMoveWithMsg"></span>

`cannotMoveWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3692](../source/msg_neu.t.html#3692)\]



cannot use object as an implement to move something



<span id="cannotOpenLockedMsg"></span>

`cannotOpenLockedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3905](../source/msg_neu.t.html#3905)\]



attempting to open a locked object



<span id="cannotOpenMsg"></span>

`cannotOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3883](../source/msg_neu.t.html#3883)\]



object is not openable/closable



<span id="cannotPlugInMsg"></span>

`cannotPlugInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4027](../source/msg_neu.t.html#4027)\]



cannot plug/unplug



<span id="cannotPlugInToMsg"></span>

`cannotPlugInToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4028](../source/msg_neu.t.html#4028)\]



*no description available*



<span id="cannotPourIntoMsg"></span>

`cannotPourIntoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3811](../source/msg_neu.t.html#3811)\]



*no description available*



<span id="cannotPourMsg"></span>

`cannotPourMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3810](../source/msg_neu.t.html#3810)\]



cannot pour/pour in/pour on



<span id="cannotPourOntoMsg"></span>

`cannotPourOntoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3813](../source/msg_neu.t.html#3813)\]



*no description available*



<span id="cannotPushTravelMsg"></span>

`cannotPushTravelMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3682](../source/msg_neu.t.html#3682)\]



cannot push an object through travel



<span id="cannotPutActorMsg"></span>

`cannotPutActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3007](../source/msg_neu.t.html#3007)\]



*no description available*



<span id="cannotPutBehindMsg"></span>

`cannotPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3223](../source/msg_neu.t.html#3223)\]



nothing can be put behind the given object



<span id="cannotPutBehindRestrictedMsg"></span>

`cannotPutBehindRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3247](../source/msg_neu.t.html#3247)\]



*no description available*



<span id="cannotPutBehindSelfMsg"></span>

`cannotPutBehindSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3237](../source/msg_neu.t.html#3237)\]



trying to put something behind itself



<span id="cannotPutFixtureMsg"></span>

`cannotPutFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2916](../source/msg_neu.t.html#2916)\]



trying to put a Fixture in something



<span id="cannotPutHeavyMsg"></span>

`cannotPutHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2926](../source/msg_neu.t.html#2926)\]



*no description available*



<span id="cannotPutImmovableMsg"></span>

`cannotPutImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2921](../source/msg_neu.t.html#2921)\]



*no description available*



<span id="cannotPutInDispenserMsg"></span>

`cannotPutInDispenserMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3255](../source/msg_neu.t.html#3255)\]



wrong item type for dispenser



<span id="cannotPutInRestrictedMsg"></span>

`cannotPutInRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3241](../source/msg_neu.t.html#3241)\]



can't put something in/on/etc a restricted container/surface/etc



<span id="cannotPutInSelfMsg"></span>

`cannotPutInSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3227](../source/msg_neu.t.html#3227)\]



trying to put something in itself



<span id="cannotPutOnRestrictedMsg"></span>

`cannotPutOnRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3243](../source/msg_neu.t.html#3243)\]



*no description available*



<span id="cannotPutOnSelfMsg"></span>

`cannotPutOnSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3230](../source/msg_neu.t.html#3230)\]



trying to put something on itself



<span id="cannotPutPersonMsg"></span>

`cannotPutPersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3015](../source/msg_neu.t.html#3015)\]



*no description available*



<span id="cannotPutPushableMsg"></span>

`cannotPutPushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2955](../source/msg_neu.t.html#2955)\]



*no description available*



<span id="cannotPutUnderMsg"></span>

`cannotPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3219](../source/msg_neu.t.html#3219)\]



can't put anything under iobj



<span id="cannotPutUnderRestrictedMsg"></span>

`cannotPutUnderRestrictedMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3245](../source/msg_neu.t.html#3245)\]



*no description available*



<span id="cannotPutUnderSelfMsg"></span>

`cannotPutUnderSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3233](../source/msg_neu.t.html#3233)\]



trying to put something under itself



<span id="cannotRemoveHeldMsg"></span>

`cannotRemoveHeldMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2963](../source/msg_neu.t.html#2963)\]



can't REMOVE something that's being held



<span id="cannotReturnToDispenserMsg"></span>

`cannotReturnToDispenserMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3251](../source/msg_neu.t.html#3251)\]



trying to return something to a remove-only dispenser



<span id="cannotScrewMsg"></span>

`cannotScrewMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4035](../source/msg_neu.t.html#4035)\]



cannot screw/unscrew



<span id="cannotScrewWithMsg"></span>

`cannotScrewWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4036](../source/msg_neu.t.html#4036)\]



*no description available*



<span id="cannotSetToMsg"></span>

`cannotSetToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3696](../source/msg_neu.t.html#3696)\]



cannot set object to setting



<span id="cannotShowToItselfMsg"></span>

`cannotShowToItselfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3567](../source/msg_neu.t.html#3567)\]



can't show something to itself



<span id="cannotShowToMsg"></span>

`cannotShowToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3572](../source/msg_neu.t.html#3572)\]



*no description available*



<span id="cannotShowToSelfMsg"></span>

`cannotShowToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3563](../source/msg_neu.t.html#3563)\]



can't show yourself something



<span id="cannotSitOnMsg"></span>

`cannotSitOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3962](../source/msg_neu.t.html#3962)\]



cannot sit/lie/stand/get on/get out of



<span id="cannotSleepMsg"></span>

`cannotSleepMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3959](../source/msg_neu.t.html#3959)\]



actor cannot sleep



<span id="cannotStandOnMsg"></span>

`cannotStandOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3966](../source/msg_neu.t.html#3966)\]



*no description available*



<span id="cannotStandOnPathMsg"></span>

`cannotStandOnPathMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3972](../source/msg_neu.t.html#3972)\]



standing on a PathPassage



<span id="cannotSwitchMsg"></span>

`cannotSwitchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3780](../source/msg_neu.t.html#3780)\]



cannot switch object



<span id="cannotTakeActorMsg"></span>

`cannotTakeActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3005](../source/msg_neu.t.html#3005)\]



try to take/move/put/taste an untakeable actor



<span id="cannotTakeFixtureMsg"></span>

`cannotTakeFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2913](../source/msg_neu.t.html#2913)\]



trying to take a Fixture



<span id="cannotTakeHeavyMsg"></span>

`cannotTakeHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2924](../source/msg_neu.t.html#2924)\]



trying to take/move/put a Heavy object



<span id="cannotTakeImmovableMsg"></span>

`cannotTakeImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2919](../source/msg_neu.t.html#2919)\]



trying to take/move/put an Immovable object



<span id="cannotTakeLocationMsg"></span>

`cannotTakeLocationMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2959](../source/msg_neu.t.html#2959)\]



can't take something while occupying it



<span id="cannotTakePersonMsg"></span>

`cannotTakePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3011](../source/msg_neu.t.html#3011)\]



trying to take/move/put/taste a person



<span id="cannotTakePushableMsg"></span>

`cannotTakePushableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2949](../source/msg_neu.t.html#2949)\]



specialized Immovable messages for TravelPushables



<span id="cannotTalkToSelfMsg"></span>

`cannotTalkToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3539](../source/msg_neu.t.html#3539)\]



can't talk to yourself



<span id="cannotTasteActorMsg"></span>

`cannotTasteActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3008](../source/msg_neu.t.html#3008)\]



*no description available*



<span id="cannotTastePersonMsg"></span>

`cannotTastePersonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3017](../source/msg_neu.t.html#3017)\]



*no description available*



<span id="cannotTellSelfMsg"></span>

`cannotTellSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3551](../source/msg_neu.t.html#3551)\]



can't tell yourself about anything



<span id="cannotThrowAtContentsMsg"></span>

`cannotThrowAtContentsMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4053](../source/msg_neu.t.html#4053)\]



can't throw something at an object inside itself



<span id="cannotThrowAtSelfMsg"></span>

`cannotThrowAtSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4049](../source/msg_neu.t.html#4049)\]



can't throw something at itself



<span id="cannotThrowToMsg"></span>

`cannotThrowToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4123](../source/msg_neu.t.html#4123)\]



we're not a suitable target for THROW TO (because we're not an NPC)



<span id="cannotTurnMsg"></span>

`cannotTurnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3706](../source/msg_neu.t.html#3706)\]



cannot turn object



<span id="cannotTurnOffMsg"></span>

`cannotTurnOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3788](../source/msg_neu.t.html#3788)\]



*no description available*



<span id="cannotTurnOnMsg"></span>

`cannotTurnOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3786](../source/msg_neu.t.html#3786)\]



cannot turn object on/off



<span id="cannotTurnWithMsg"></span>

`cannotTurnWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3713](../source/msg_neu.t.html#3713)\]



cannot turn anything with object



<span id="cannotTypeOnMsg"></span>

`cannotTypeOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3774](../source/msg_neu.t.html#3774)\]



cannot type anything on object



<span id="cannotUnboardMsg"></span>

`cannotUnboardMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3968](../source/msg_neu.t.html#3968)\]



*no description available*



<span id="cannotUnfastenFromMsg"></span>

`cannotUnfastenFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4023](../source/msg_neu.t.html#4023)\]



*no description available*



<span id="cannotUnfastenMsg"></span>

`cannotUnfastenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4022](../source/msg_neu.t.html#4022)\]



*no description available*



<span id="cannotUnlockMsg"></span>

`cannotUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3901](../source/msg_neu.t.html#3901)\]



*no description available*



<span id="cannotUnlockWithMsg"></span>

`cannotUnlockWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3914](../source/msg_neu.t.html#3914)\]



*no description available*



<span id="cannotUnplugFromMsg"></span>

`cannotUnplugFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4031](../source/msg_neu.t.html#4031)\]



*no description available*



<span id="cannotUnplugMsg"></span>

`cannotUnplugMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4030](../source/msg_neu.t.html#4030)\]



*no description available*



<span id="cannotUnscrewMsg"></span>

`cannotUnscrewMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4038](../source/msg_neu.t.html#4038)\]



*no description available*



<span id="cannotUnscrewWithMsg"></span>

`cannotUnscrewWithMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4039](../source/msg_neu.t.html#4039)\]



*no description available*



<span id="cutNoEffectMsg"></span>

`cutNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3873](../source/msg_neu.t.html#3873)\]



cannot cut that



<span id="dontThrowDirMsg"></span>

`dontThrowDirMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4068](../source/msg_neu.t.html#4068)\]



THROW \<obj\> \<direction\> isn't supported; use THROW AT instead



<span id="droppingSelfMsg"></span>

`droppingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2886](../source/msg_neu.t.html#2886)\]



actor dropping self



<span id="flashlightOnButDarkMsg"></span>

`flashlightOnButDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3732](../source/msg_neu.t.html#3732)\]



flashlight is on but doesn't light up



<span id="followAlreadyHereInDarkMsg"></span>

`followAlreadyHereInDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3615](../source/msg_neu.t.html#3615)\]



following an object that we \*think\* is in our same location (in other
words, we're already in the location where we thought we last saw the
object go), but it's too dark to see if that's really true



<span id="followAlreadyHereMsg"></span>

`followAlreadyHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3607](../source/msg_neu.t.html#3607)\]



following an object that's in the same location as the actor



<span id="followUnknownMsg"></span>

`followUnknownMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3619](../source/msg_neu.t.html#3619)\]



trying to follow an object, but don't know where it went from here



<span id="giveAlreadyHasMsg"></span>

`giveAlreadyHasMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3536](../source/msg_neu.t.html#3536)\]



trying to give something to someone who already has the object



<span id="keyDoesNotFitLockMsg"></span>

`keyDoesNotFitLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3924](../source/msg_neu.t.html#3924)\]



the key (iobj) does not fit the lock (dobj)



<span id="keyNotDetachableMsg"></span>

`keyNotDetachableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3266](../source/msg_neu.t.html#3266)\]



can't detach key (with no iobj specified) because it's not on a ring



<span id="keyNotOnKeyringMsg"></span>

`keyNotOnKeyringMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3263](../source/msg_neu.t.html#3263)\]



the dobj isn't on the keyring



<span id="matchNotLitMsg"></span>

`matchNotLitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3746](../source/msg_neu.t.html#3746)\]



match not lit



<span id="moveNoEffectMsg"></span>

`moveNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3676](../source/msg_neu.t.html#3676)\]



moving object has no effect



<span id="moveToNoEffectMsg"></span>

`moveToNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3679](../source/msg_neu.t.html#3679)\]



cannot move object to other object



<span id="mustBeStandingMsg"></span>

`mustBeStandingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2667](../source/msg_neu.t.html#2667)\]



actor must be standing before doing that



<span id="mustSpecifyTurnToMsg"></span>

`mustSpecifyTurnToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3709](../source/msg_neu.t.html#3709)\]



must specify setting to turn object to



<span id="newlyDarkMsg"></span>

`newlyDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4144](../source/msg_neu.t.html#4144)\]



it is now dark at actor's location



<span id="noKeyNeededMsg"></span>

`noKeyNeededMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2664](../source/msg_neu.t.html#2664)\]



no key is needed to lock or unlock this object



<span id="noRoomToLieMsg"></span>

`noRoomToLieMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4001](../source/msg_neu.t.html#4001)\]



*no description available*



<span id="noRoomToSitMsg"></span>

`noRoomToSitMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3999](../source/msg_neu.t.html#3999)\]



*no description available*



<span id="noRoomToStandMsg"></span>

`noRoomToStandMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3997](../source/msg_neu.t.html#3997)\]



no room to stand/sit/lie on dobj



<span id="notAContainerMsg"></span>

`notAContainerMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3212](../source/msg_neu.t.html#3212)\]



trying to put an object in a non-container



<span id="notASurfaceMsg"></span>

`notASurfaceMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3215](../source/msg_neu.t.html#3215)\]



trying to put an object on a non-surface



<span id="notAttachedToMsg"></span>

`notAttachedToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3865](../source/msg_neu.t.html#3865)\]



dobj isn't attached to iobj



<span id="notAWeaponMsg"></span>

`notAWeaponMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3640](../source/msg_neu.t.html#3640)\]



obj is not a weapon



<span id="notCarryingMsg"></span>

`notCarryingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2883](../source/msg_neu.t.html#2883)\]



dropping an object not being carried



<span id="notDoffableMsg"></span>

`notDoffableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2842](../source/msg_neu.t.html#2842)\]



doffing something that isn't wearable



<span id="notFollowableMsg"></span>

`notFollowableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3601](../source/msg_neu.t.html#3601)\]



not a followable object



<span id="nothingBehindMsg"></span>

`nothingBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2798](../source/msg_neu.t.html#2798)\]



*no description available*



<span id="nothingBeyondDoorMsg"></span>

`nothingBeyondDoorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2813](../source/msg_neu.t.html#2813)\]



there's nothing on the other side of a door we just opened



<span id="nothingInsideMsg"></span>

`nothingInsideMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2794](../source/msg_neu.t.html#2794)\]



generic messages for looking prepositionally



<span id="nothingThroughMsg"></span>

`nothingThroughMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2800](../source/msg_neu.t.html#2800)\]



*no description available*



<span id="nothingThroughPassageMsg"></span>

`nothingThroughPassageMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2809](../source/msg_neu.t.html#2809)\]



looking through an open passage



<span id="nothingToHearMsg"></span>

`nothingToHearMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2821](../source/msg_neu.t.html#2821)\]



there's nothing here with a specific noise



<span id="nothingToSmellMsg"></span>

`nothingToSmellMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2817](../source/msg_neu.t.html#2817)\]



there's nothing here with a specific odor



<span id="nothingUnderMsg"></span>

`nothingUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2796](../source/msg_neu.t.html#2796)\]



*no description available*



<span id="notOnPlatformMsg"></span>

`notOnPlatformMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3994](../source/msg_neu.t.html#3994)\]



getting off something you're not on



<span id="notWearableMsg"></span>

`notWearableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2838](../source/msg_neu.t.html#2838)\]



an item is not wearable



<span id="notWearingMsg"></span>

`notWearingMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2849](../source/msg_neu.t.html#2849)\]



not wearing (item being doffed)



<span id="objNotForKeyringMsg"></span>

`objNotForKeyringMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3259](../source/msg_neu.t.html#3259)\]



the dobj doesn't fit on this keyring



<span id="okayAttachToMsg"></span>

`okayAttachToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3850](../source/msg_neu.t.html#3850)\]



default message for successful Attachable attachment



<span id="okayBurnCandleMsg"></span>

`okayBurnCandleMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3761](../source/msg_neu.t.html#3761)\]



lighting a candle



<span id="okayBurnMatchMsg"></span>

`okayBurnMatchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3749](../source/msg_neu.t.html#3749)\]



lighting a match



<span id="okayCloseMsg"></span>

`okayCloseMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2860](../source/msg_neu.t.html#2860)\]



*no description available*



<span id="okayDetachFromMsg"></span>

`okayDetachFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3853](../source/msg_neu.t.html#3853)\]



default message for successful Attachable detachment



<span id="okayDoffMsg"></span>

`okayDoffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2855](../source/msg_neu.t.html#2855)\]



default response to 'doff obj'



<span id="okayDropMsg"></span>

`okayDropMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2971](../source/msg_neu.t.html#2971)\]



default 'drop' response



<span id="okayEatMsg"></span>

`okayEatMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3736](../source/msg_neu.t.html#3736)\]



default acknowledgment for eating something



<span id="okayExtinguishCandleMsg"></span>

`okayExtinguishCandleMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3767](../source/msg_neu.t.html#3767)\]



extinguishing a candle



<span id="okayExtinguishMatchMsg"></span>

`okayExtinguishMatchMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3753](../source/msg_neu.t.html#3753)\]



extinguishing a match



<span id="okayJumpMsg"></span>

`okayJumpMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3497](../source/msg_neu.t.html#3497)\]



"jump"



<span id="okayLockMsg"></span>

`okayLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2864](../source/msg_neu.t.html#2864)\]



default response to lock/unlock



<span id="okayNotStandingOnMsg"></span>

`okayNotStandingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4016](../source/msg_neu.t.html#4016)\]



default report for getting off of a platform



<span id="okayOpenMsg"></span>

`okayOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2858](../source/msg_neu.t.html#2858)\]



default response to open/close



<span id="okayPullLeverMsg"></span>

`okayPullLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3667](../source/msg_neu.t.html#3667)\]



default acknowledgment to pulling a lever



<span id="okayPullSpringLeverMsg"></span>

`okayPullSpringLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3671](../source/msg_neu.t.html#3671)\]



default acknowledgment to pulling a spring-loaded lever



<span id="okayPushButtonMsg"></span>

`okayPushButtonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3649](../source/msg_neu.t.html#3649)\]



default 'push button' acknowledgment



<span id="okayPushLeverMsg"></span>

`okayPushLeverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3656](../source/msg_neu.t.html#3656)\]



default acknowledgment to pushing a lever



<span id="okayPutBehindMsg"></span>

`okayPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3001](../source/msg_neu.t.html#3001)\]



default successful 'put behind' response



<span id="okayPutInMsg"></span>

`okayPutInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2989](../source/msg_neu.t.html#2989)\]



default successful 'put in' response



<span id="okayPutOnMsg"></span>

`okayPutOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2993](../source/msg_neu.t.html#2993)\]



default successful 'put on' response



<span id="okayPutUnderMsg"></span>

`okayPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2997](../source/msg_neu.t.html#2997)\]



default successful 'put under' response



<span id="okayTakeMsg"></span>

`okayTakeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2967](../source/msg_neu.t.html#2967)\]



default 'take' response



<span id="okayTurnOffMsg"></span>

`okayTurnOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3729](../source/msg_neu.t.html#3729)\]



*no description available*



<span id="okayTurnOnMsg"></span>

`okayTurnOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3728](../source/msg_neu.t.html#3728)\]



default acknowledgment for switching on/off



<span id="okayUnlockMsg"></span>

`okayUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2866](../source/msg_neu.t.html#2866)\]



*no description available*



<span id="okayWearMsg"></span>

`okayWearMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2852](../source/msg_neu.t.html#2852)\]



default response to 'wear obj'



<span id="okayYellMsg"></span>

`okayYellMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3494](../source/msg_neu.t.html#3494)\]



"yell"



<span id="pullNoEffectMsg"></span>

`pullNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3660](../source/msg_neu.t.html#3660)\]



pulling object has no effect



<span id="pushNoEffectMsg"></span>

`pushNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3646](../source/msg_neu.t.html#3646)\]



pushing object has no effect



<span id="puttingSelfMsg"></span>

`puttingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2889](../source/msg_neu.t.html#2889)\]



actor putting self in something



<span id="sayGoodbyeMsg"></span>

`sayGoodbyeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3479](../source/msg_neu.t.html#3479)\]



"goodbye" with no target actor



<span id="sayHelloMsg"></span>

`sayHelloMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3476](../source/msg_neu.t.html#3476)\]



"hello" with no target actor



<span id="sayNoMsg"></span>

`sayNoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3483](../source/msg_neu.t.html#3483)\]



*no description available*



<span id="sayYesMsg"></span>

`sayYesMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3482](../source/msg_neu.t.html#3482)\]



"yes"/"no" with no target actor



<span id="setToInvalidMsg"></span>

`setToInvalidMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3699](../source/msg_neu.t.html#3699)\]



invalid setting for generic Settable



<span id="shouldNotBreakMsg"></span>

`shouldNotBreakMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3869](../source/msg_neu.t.html#3869)\]



breaking object would serve no purpose



<span id="shouldNotThrowAtFloorMsg"></span>

`shouldNotThrowAtFloorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4064](../source/msg_neu.t.html#4064)\]



shouldn't throw something at the floor



<span id="stairwayNotDownMsg"></span>

`stairwayNotDownMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3470](../source/msg_neu.t.html#3470)\]



*no description available*



<span id="stairwayNotUpMsg"></span>

`stairwayNotUpMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3469](../source/msg_neu.t.html#3469)\]



the stairway does not go up/down



<span id="takeFromNotBehindMsg"></span>

`takeFromNotBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3335](../source/msg_neu.t.html#3335)\]



taking dobj from behind something, but dobj isn't behind iobj



<span id="takeFromNotInActorMsg"></span>

`takeFromNotInActorMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3339](../source/msg_neu.t.html#3339)\]



taking dobj from an actor, but actor doesn't have iobj



<span id="takeFromNotInMsg"></span>

`takeFromNotInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3325](../source/msg_neu.t.html#3325)\]



taking dobj from iobj, but dobj isn't in iobj



<span id="takeFromNotOnMsg"></span>

`takeFromNotOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3328](../source/msg_neu.t.html#3328)\]



taking dobj from surface, but dobj isn't on iobj



<span id="takeFromNotUnderMsg"></span>

`takeFromNotUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3331](../source/msg_neu.t.html#3331)\]



taking dobj from under something, but dobj isn't under iobj



<span id="takingSelfMsg"></span>

`takingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2880](../source/msg_neu.t.html#2880)\]



actor taking self ("take me")



<span id="tellVagueMsg"></span>

`tellVagueMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3583](../source/msg_neu.t.html#3583)\]



*no description available*



<span id="throwingSelfMsg"></span>

`throwingSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2892](../source/msg_neu.t.html#2892)\]



actor throwing self



<span id="timePassesMsg"></span>

`timePassesMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3473](../source/msg_neu.t.html#3473)\]



"wait"



<span id="tooDarkMsg"></span>

`tooDarkMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[2577](../source/msg_neu.t.html#2577)\]



it's too dark to do that



<span id="turnToInvalidMsg"></span>

`turnToInvalidMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3717](../source/msg_neu.t.html#3717)\]



invalid setting for dial



<span id="unknownHowToLockMsg"></span>

`unknownHowToLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3918](../source/msg_neu.t.html#3918)\]



we don't know how to lock/unlock this



<span id="unknownHowToUnlockMsg"></span>

`unknownHowToUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3920](../source/msg_neu.t.html#3920)\]



*no description available*



<span id="unlockRequiresKeyMsg"></span>

`unlockRequiresKeyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3908](../source/msg_neu.t.html#3908)\]



object requires a key to unlock



<span id="uselessToAttackMsg"></span>

`uselessToAttackMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3643](../source/msg_neu.t.html#3643)\]



no effect attacking obj



<span id="whereToGoMsg"></span>

`whereToGoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3350](../source/msg_neu.t.html#3350)\]



must say which way to go



<span id="wrongAttachmentMsg"></span>

`wrongAttachmentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3834](../source/msg_neu.t.html#3834)\]



dobj and/or iobj can be attached to certain things, but not to each
other



<span id="wrongDetachmentMsg"></span>

`wrongDetachmentMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[3838](../source/msg_neu.t.html#3838)\]



dobj and iobj are attached, but they can't be taken apart



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="actorCannotSeeMsg"></span>

`actorCannotSeeMsg (actor, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3594](../source/msg_neu.t.html#3594)\]



actor cannot see object being shown to actor



<span id="becomingTooLargeForActorMsg"></span>

`becomingTooLargeForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3107](../source/msg_neu.t.html#3107)\]



the object is becoming too large for the actor to hold



<span id="becomingTooLargeForContainerMsg"></span>

`becomingTooLargeForContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3193](../source/msg_neu.t.html#3193)\]



the current action would make obj too large for its container



<span id="cannotBeWearingMsg"></span>

`cannotBeWearingMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2624](../source/msg_neu.t.html#2624)\]



must remove an article of clothing before a command



<span id="cannotDoFromMsg"></span>

`cannotDoFromMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3411](../source/msg_neu.t.html#3411)\]



cannot carry out a command from a nested room



<span id="cannotEnterExitOnlyMsg"></span>

`cannotEnterExitOnlyMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3447](../source/msg_neu.t.html#3447)\]



cannot enter an exit-only passage



<span id="cannotFitIntoOpeningMsg"></span>

`cannotFitIntoOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3045](../source/msg_neu.t.html#3045)\]



cannot fit obj into cont through cont's opening



<span id="cannotFitOutOfOpeningMsg"></span>

`cannotFitOutOfOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3053](../source/msg_neu.t.html#3053)\]



cannot fit obj out of cont through cont's opening



<span id="cannotFollowFromHereMsg"></span>

`cannotFollowFromHereMsg (srcLoc)`

[msg_neu.t](../file/msg_neu.t.html)\[[3626](../source/msg_neu.t.html#3626)\]



we're trying to follow an actor, but we last saw the actor in the given
other location, so we have to go there to follow



<span id="cannotGoThatWayInVehicleMsg"></span>

`cannotGoThatWayInVehicleMsg (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[3426](../source/msg_neu.t.html#3426)\]



cannot go that way in a vehicle



<span id="cannotGoThroughClosedDoorMsg"></span>

`cannotGoThroughClosedDoorMsg (door)`

[msg_neu.t](../file/msg_neu.t.html)\[[3367](../source/msg_neu.t.html#3367)\]



can't travel through a close door



<span id="cannotHearMsg"></span>

`cannotHearMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2603](../source/msg_neu.t.html#2603)\]



cannot hear object



<span id="cannotMoveComponentMsg"></span>

`cannotMoveComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2929](../source/msg_neu.t.html#2929)\]



trying to move a component object



<span id="cannotMoveThroughClosedMsg"></span>

`cannotMoveThroughClosedMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3037](../source/msg_neu.t.html#3037)\]



cannot move obj because cont is closed



<span id="cannotMoveThroughContainerMsg"></span>

`cannotMoveThroughContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3029](../source/msg_neu.t.html#3029)\]



cannot move obj in our out of container cont



<span id="cannotMoveThroughMsg"></span>

`cannotMoveThroughMsg (obj, obs)`

[msg_neu.t](../file/msg_neu.t.html)\[[3021](../source/msg_neu.t.html#3021)\]



cannot move obj through obstructor



<span id="cannotPushObjectNestedMsg"></span>

`cannotPushObjectNestedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3440](../source/msg_neu.t.html#3440)\]



cannot push an object to a nested room



<span id="cannotPushObjectThatWayMsg"></span>

`cannotPushObjectThatWayMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3433](../source/msg_neu.t.html#3433)\]



cannot push an object that way



<span id="cannotPutComponentMsg"></span>

`cannotPutComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2942](../source/msg_neu.t.html#2942)\]



trying to put a component in something



<span id="cannotReachIntoOpeningMsg"></span>

`cannotReachIntoOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3077](../source/msg_neu.t.html#3077)\]



actor cannot fit hand into cont through cont's opening



<span id="cannotReachObjectMsg"></span>

`cannotReachObjectMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2755](../source/msg_neu.t.html#2755)\]



cannot reach (i.e., touch) an object that is to be manipulated in a
command - this is a generic message used when we cannot identify the
specific reason that the object is in scope but cannot be touched



<span id="cannotReachOutOfOpeningMsg"></span>

`cannotReachOutOfOpeningMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3085](../source/msg_neu.t.html#3085)\]



actor cannot fit hand into cont through cont's opening



<span id="cannotReachThroughMsg"></span>

`cannotReachThroughMsg (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2762](../source/msg_neu.t.html#2762)\]



cannot reach an object through an obstructor



<span id="cannotSmellMsg"></span>

`cannotSmellMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2610](../source/msg_neu.t.html#2610)\]



cannot smell object



<span id="cannotTakeComponentMsg"></span>

`cannotTakeComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2935](../source/msg_neu.t.html#2935)\]



trying to take a component object



<span id="cannotTasteMsg"></span>

`cannotTasteMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2617](../source/msg_neu.t.html#2617)\]



cannot taste object



<span id="cannotThrowThroughMsg"></span>

`cannotThrowThroughMsg (target, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[4057](../source/msg_neu.t.html#4057)\]



can't throw through a sense connector



<span id="cannotTouchThroughClosedMsg"></span>

`cannotTouchThroughClosedMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3069](../source/msg_neu.t.html#3069)\]



actor 'obj' cannot reach through cont because cont is closed



<span id="cannotTouchThroughContainerMsg"></span>

`cannotTouchThroughContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3061](../source/msg_neu.t.html#3061)\]



actor 'obj' cannot reach in our out of container 'cont'



<span id="circularlyBehindMsg"></span>

`circularlyBehindMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3317](../source/msg_neu.t.html#3317)\]



putting y in x when x is already behind y



<span id="circularlyInMsg"></span>

`circularlyInMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3293](../source/msg_neu.t.html#3293)\]



putting y in x when x is already in y



<span id="circularlyOnMsg"></span>

`circularlyOnMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3301](../source/msg_neu.t.html#3301)\]



putting y in x when x is already on y



<span id="circularlyUnderMsg"></span>

`circularlyUnderMsg (x, y)`

[msg_neu.t](../file/msg_neu.t.html)\[[3309](../source/msg_neu.t.html#3309)\]



putting y in x when x is already under y



<span id="containerBecomingTooFullMsg"></span>

`containerBecomingTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3204](../source/msg_neu.t.html#3204)\]



the current action would increase obj's bulk so that container is too
full



<span id="containerTooFullMsg"></span>

`containerTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3162](../source/msg_neu.t.html#3162)\]



container doesn't have room for object



<span id="decorationNotImportantMsg"></span>

`decorationNotImportantMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2708](../source/msg_neu.t.html#2708)\]



generic "that's not important" message for decorations



<span id="doorClosesBehindMsg"></span>

`doorClosesBehindMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3461](../source/msg_neu.t.html#3461)\]



door closes behind actor during travel through door



<span id="droppingObjMsg"></span>

`droppingObjMsg (dropobj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2975](../source/msg_neu.t.html#2975)\]



dropping an object



<span id="floorlessDropMsg"></span>

`floorlessDropMsg (dropobj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2982](../source/msg_neu.t.html#2982)\]



default receiveDrop suffix for floorless rooms



<span id="foundKeyOnKeyringMsg"></span>

`foundKeyOnKeyringMsg (ring, key)`

[msg_neu.t](../file/msg_neu.t.html)\[[3927](../source/msg_neu.t.html#3927)\]



found key on keyring



<span id="foundNoKeyOnKeyringMsg"></span>

`foundNoKeyOnKeyringMsg (ring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3935](../source/msg_neu.t.html#3935)\]



failed to find a key on keyring



<span id="handsBecomingTooFullForMsg"></span>

`handsBecomingTooFullForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3115](../source/msg_neu.t.html#3115)\]



the object is becoming large enough that the actor's hands are full



<span id="handsTooFullForMsg"></span>

`handsTooFullForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3100](../source/msg_neu.t.html#3100)\]



the actor doesn't have room to hold the object



<span id="heardButNotSeenMsg"></span>

`heardButNotSeenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2587](../source/msg_neu.t.html#2587)\]



object can be heard but not seen



<span id="invalidStagingContainerActorMsg"></span>

`invalidStagingContainerActorMsg (cont, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3383](../source/msg_neu.t.html#3383)\]



cannot carry out travel while 'cont' (an actor) is holding 'dest'



<span id="invalidStagingContainerMsg"></span>

`invalidStagingContainerMsg (cont, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3375](../source/msg_neu.t.html#3375)\]



cannot carry out travel while 'dest' is within 'cont'



<span id="invalidStagingLocationMsg"></span>

`invalidStagingLocationMsg (dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[3391](../source/msg_neu.t.html#3391)\]



can't carry out travel because 'dest' isn't a valid staging location



<span id="lookInVaporousMsg"></span>

`lookInVaporousMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2743](../source/msg_neu.t.html#2743)\]



look in/look under/look through/look behind/search vaporous



<span id="movedKeysToKeyringMsg"></span>

`movedKeysToKeyringMsg (keyring, keys)`

[msg_neu.t](../file/msg_neu.t.html)\[[3284](../source/msg_neu.t.html#3284)\]



we moved several keys to a keyring automatically



<span id="movedKeyToKeyringMsg"></span>

`movedKeyToKeyringMsg (keyring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3277](../source/msg_neu.t.html#3277)\]



we attached a key to a keyring automatically



<span id="mustBeBurningMsg"></span>

`mustBeBurningMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3739](../source/msg_neu.t.html#3739)\]



object must be burning before doing that



<span id="mustBeCarryingMsg"></span>

`mustBeCarryingMsg (obj, actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[2700](../source/msg_neu.t.html#2700)\]



actor must be holding the object before we can do that



<span id="mustBeClosedMsg"></span>

`mustBeClosedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2648](../source/msg_neu.t.html#2648)\]



object must be closed before doing that



<span id="mustBeEmptyMsg"></span>

`mustBeEmptyMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2632](../source/msg_neu.t.html#2632)\]



all contents must be removed from object before doing that



<span id="mustBeHoldingMsg"></span>

`mustBeHoldingMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2570](../source/msg_neu.t.html#2570)\]



must be holding something before a command



<span id="mustBeInMsg"></span>

`mustBeInMsg (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2692](../source/msg_neu.t.html#2692)\]



object must be in loc before doing that



<span id="mustBeOpenMsg"></span>

`mustBeOpenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2640](../source/msg_neu.t.html#2640)\]



object must be opened before doing that



<span id="mustBeUnlockedMsg"></span>

`mustBeUnlockedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2656](../source/msg_neu.t.html#2656)\]



object must be unlocked before doing that



<span id="mustBeVisibleMsg"></span>

`mustBeVisibleMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2580](../source/msg_neu.t.html#2580)\]



object must be visible



<span id="mustDetachMsg"></span>

`mustDetachMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3842](../source/msg_neu.t.html#3842)\]



must detach the object before proceeding



<span id="mustGetOnMsg"></span>

`mustGetOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2685](../source/msg_neu.t.html#2685)\]



must get on/in object



<span id="mustLieOnMsg"></span>

`mustLieOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2678](../source/msg_neu.t.html#2678)\]



must be lying on/in object



<span id="mustOpenDoorMsg"></span>

`mustOpenDoorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3454](../source/msg_neu.t.html#3454)\]



must open door before going that way



<span id="mustSitOnMsg"></span>

`mustSitOnMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2671](../source/msg_neu.t.html#2671)\]



must be sitting on/in chair



<span id="nestedRoomTooHighMsg"></span>

`nestedRoomTooHighMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3398](../source/msg_neu.t.html#3398)\]



destination is too high to enter from here



<span id="nestedRoomTooHighToExitMsg"></span>

`nestedRoomTooHighToExitMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3405](../source/msg_neu.t.html#3405)\]



enclosing room is too high to reach by GETTING OUT OF here



<span id="noiseSourceMsg"></span>

`noiseSourceMsg (src)`

[msg_neu.t](../file/msg_neu.t.html)\[[2824](../source/msg_neu.t.html#2824)\]



a sound appears to be coming from a source



<span id="noResponseFromMsg"></span>

`noResponseFromMsg (other)`

[msg_neu.t](../file/msg_neu.t.html)\[[3529](../source/msg_neu.t.html#3529)\]



actor won't respond to a request or other communicative gesture



<span id="notAddressableMsg"></span>

`notAddressableMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3522](../source/msg_neu.t.html#3522)\]



cannot talk to an object (because it makes no sense to do so)



<span id="notInterestedMsg"></span>

`notInterestedMsg (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[3575](../source/msg_neu.t.html#3575)\]



actor isn't interested in something being given/shown



<span id="notWithIntangibleMsg"></span>

`notWithIntangibleMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2729](../source/msg_neu.t.html#2729)\]



generic "no can do" message for intangibles



<span id="notWithVaporousMsg"></span>

`notWithVaporousMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2736](../source/msg_neu.t.html#2736)\]



generic failure message for varporous objects



<span id="npcDescMsg"></span>

`npcDescMsg (npc)`

[msg_neu.t](../file/msg_neu.t.html)\[[2786](../source/msg_neu.t.html#2786)\]



default description of a non-player character



<span id="objCannotHearActorMsg"></span>

`objCannotHearActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3587](../source/msg_neu.t.html#3587)\]



object cannot hear actor



<span id="odorSourceMsg"></span>

`odorSourceMsg (src)`

[msg_neu.t](../file/msg_neu.t.html)\[[2831](../source/msg_neu.t.html#2831)\]



an odor appears to be coming from a source



<span id="okayFollowInSightMsg"></span>

`okayFollowInSightMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[3633](../source/msg_neu.t.html#3633)\]



acknowledge a 'follow' for a target that was in sight



<span id="okayPostureChangeMsg"></span>

`okayPostureChangeMsg (posture)`

[msg_neu.t](../file/msg_neu.t.html)\[[4005](../source/msg_neu.t.html#4005)\]



default report for standing up/sitting down/lying down



<span id="okayPushTravelMsg"></span>

`okayPushTravelMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3685](../source/msg_neu.t.html#3685)\]



acknowledge pushing an object through travel



<span id="okaySetToMsg"></span>

`okaySetToMsg (val)`

[msg_neu.t](../file/msg_neu.t.html)\[[3702](../source/msg_neu.t.html#3702)\]



default 'set to' acknowledgment



<span id="okayTurnToMsg"></span>

`okayTurnToMsg (val)`

[msg_neu.t](../file/msg_neu.t.html)\[[3720](../source/msg_neu.t.html#3720)\]



default 'turn to' acknowledgment



<span id="rearTooFullMsg"></span>

`rearTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3185](../source/msg_neu.t.html#3185)\]



rear surface/space doesn't have room for object



<span id="refuseCommand"></span>

`refuseCommand (targetActor, issuingActor)`

[msg_neu.t](../file/msg_neu.t.html)\[[3515](../source/msg_neu.t.html#3515)\]



an actor doesn't accept a command from another actor



<span id="roomOkayPostureChangeMsg"></span>

`roomOkayPostureChangeMsg (posture, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[4009](../source/msg_neu.t.html#4009)\]



default report for standing/sitting/lying in/on something



<span id="smelledButNotSeenMsg"></span>

`smelledButNotSeenMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2595](../source/msg_neu.t.html#2595)\]



object can be smelled but not seen



<span id="surfaceTooFullMsg"></span>

`surfaceTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3169](../source/msg_neu.t.html#3169)\]



surface doesn't have room for object



<span id="takenAndMovedToKeyringMsg"></span>

`takenAndMovedToKeyringMsg (keyring)`

[msg_neu.t](../file/msg_neu.t.html)\[[3269](../source/msg_neu.t.html#3269)\]



we took a key and attached it to a keyring



<span id="thingDescMsg"></span>

`thingDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2770](../source/msg_neu.t.html#2770)\]



generic long description of a Thing



<span id="thingSmellDescMsg"></span>

`thingSmellDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2782](../source/msg_neu.t.html#2782)\]



generic "smell" description of a Thing



<span id="thingSoundDescMsg"></span>

`thingSoundDescMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2778](../source/msg_neu.t.html#2778)\]



generic LISTEN TO description of a Thing



<span id="throwCatchMsg"></span>

`throwCatchMsg (obj, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4115](../source/msg_neu.t.html#4115)\]



target catches object



<span id="throwFallMsg"></span>

`throwFallMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4083](../source/msg_neu.t.html#4083)\]



thrown object lands on target



<span id="throwFallShortMsg"></span>

`throwFallShortMsg (projectile, target, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[4107](../source/msg_neu.t.html#4107)\]



thrown object falls short of distant target



<span id="throwHitFallMsg"></span>

`throwHitFallMsg (projectile, target, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[4090](../source/msg_neu.t.html#4090)\]



thrown object bounces off target and falls to destination



<span id="throwHitMsg"></span>

`throwHitMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4075](../source/msg_neu.t.html#4075)\]



thrown object bounces off target (short report)



<span id="throwShortMsg"></span>

`throwShortMsg (projectile, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[4099](../source/msg_neu.t.html#4099)\]



thrown object falls short of distant target (sentence prefix only)



<span id="tooDistantMsg"></span>

`tooDistantMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2722](../source/msg_neu.t.html#2722)\]



generic "that's too far away" message for Distant items



<span id="tooHeavyForActorMsg"></span>

`tooHeavyForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3123](../source/msg_neu.t.html#3123)\]



the object is too heavy (all by itself) for the actor to hold



<span id="tooLargeForActorMsg"></span>

`tooLargeForActorMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3093](../source/msg_neu.t.html#3093)\]



the object is too large for the actor to hold



<span id="tooLargeForContainerMsg"></span>

`tooLargeForContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3141](../source/msg_neu.t.html#3141)\]



object is too large for container



<span id="tooLargeForRearMsg"></span>

`tooLargeForRearMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3155](../source/msg_neu.t.html#3155)\]



object is too large to fit behind object



<span id="tooLargeForUndersideMsg"></span>

`tooLargeForUndersideMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3148](../source/msg_neu.t.html#3148)\]



object is too large to fit under object



<span id="totalTooHeavyForMsg"></span>

`totalTooHeavyForMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3133](../source/msg_neu.t.html#3133)\]



the object is too heavy (in combination with everything else being
carried) for the actor to pick up



<span id="undersideTooFullMsg"></span>

`undersideTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[3177](../source/msg_neu.t.html#3177)\]



underside doesn't have room for object



<span id="unthingNotHereMsg"></span>

`unthingNotHereMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[2715](../source/msg_neu.t.html#2715)\]



generic "you don't see that" message for "unthings"



<span id="vehicleCannotDoFromMsg"></span>

`vehicleCannotDoFromMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3418](../source/msg_neu.t.html#3418)\]



cannot carry out a command from within a vehicle in a nested room



<span id="willNotCatchMsg"></span>

`willNotCatchMsg (catcher)`

[msg_neu.t](../file/msg_neu.t.html)\[[4126](../source/msg_neu.t.html#4126)\]



target does not want to catch anything



<span id="willNotLetGoMsg"></span>

`willNotLetGoMsg (holder, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[3343](../source/msg_neu.t.html#3343)\]



actor won't let go of a possession





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


