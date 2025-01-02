---
layout: docs
---
<span class="title">npcActionMessages</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[4152](../source/msg_neu.t.html#4152)\]

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



Non-player character verb messages. By default, we inherit all of the
messages defined for the player character, but we override some that
must be rephrased slightly to make sense for NPC's.

**`npcActionMessages`**` :   `[`playerActionMessages`](../object/playerActionMessages.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`npcActionMessages`**  
[`playerActionMessages`](../object/playerActionMessages.html)  
[`MessageHelper`](../object/MessageHelper.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`alreadyFollowModeMsg`](#alreadyFollowModeMsg)[`cannotAskSelfForMsg`](#cannotAskSelfForMsg)[`cannotAskSelfMsg`](#cannotAskSelfMsg)[`cannotGiveToSelfMsg`](#cannotGiveToSelfMsg)[`cannotJumpOffHereMsg`](#cannotJumpOffHereMsg)[`cannotMoveFixtureMsg`](#cannotMoveFixtureMsg)[`cannotMoveHeavyMsg`](#cannotMoveHeavyMsg)[`cannotMoveImmovableMsg`](#cannotMoveImmovableMsg)[`cannotPutHeavyMsg`](#cannotPutHeavyMsg)[`cannotShowToSelfMsg`](#cannotShowToSelfMsg)[`cannotTakeHeavyMsg`](#cannotTakeHeavyMsg)[`cannotTalkToSelfMsg`](#cannotTalkToSelfMsg)[`cannotTellSelfMsg`](#cannotTellSelfMsg)[`keyDoesNotFitLockMsg`](#keyDoesNotFitLockMsg)[`moveNoEffectMsg`](#moveNoEffectMsg)[`moveToNoEffectMsg`](#moveToNoEffectMsg)[`objNotForKeyringMsg`](#objNotForKeyringMsg)[`okayAttachToMsg`](#okayAttachToMsg)[`okayCloseMsg`](#okayCloseMsg)[`okayDetachFromMsg`](#okayDetachFromMsg)[`okayDoffMsg`](#okayDoffMsg)[`okayDropMsg`](#okayDropMsg)[`okayExtinguishCandleMsg`](#okayExtinguishCandleMsg)[`okayFollowModeMsg`](#okayFollowModeMsg)[`okayLockMsg`](#okayLockMsg)[`okayNotStandingOnMsg`](#okayNotStandingOnMsg)[`okayOpenMsg`](#okayOpenMsg)[`okayPushButtonMsg`](#okayPushButtonMsg)[`okayPutBehindMsg`](#okayPutBehindMsg)[`okayPutInMsg`](#okayPutInMsg)[`okayPutOnMsg`](#okayPutOnMsg)[`okayPutUnderMsg`](#okayPutUnderMsg)[`okayTakeMsg`](#okayTakeMsg)[`okayTurnOffMsg`](#okayTurnOffMsg)[`okayTurnOnMsg`](#okayTurnOnMsg)[`okayUnlockMsg`](#okayUnlockMsg)[`okayWearMsg`](#okayWearMsg)[`pullNoEffectMsg`](#pullNoEffectMsg)[`pushNoEffectMsg`](#pushNoEffectMsg)[`shouldNotBreakMsg`](#shouldNotBreakMsg)[`takeFromNotBehindMsg`](#takeFromNotBehindMsg)[`takeFromNotInMsg`](#takeFromNotInMsg)[`takeFromNotOnMsg`](#takeFromNotOnMsg)[`takeFromNotUnderMsg`](#takeFromNotUnderMsg)[`timePassesMsg`](#timePassesMsg)[`whereToGoMsg`](#whereToGoMsg)

Inherited from `playerActionMessages` :  
[`alreadyAttachedMsg`](../object/playerActionMessages.html#alreadyAttachedMsg)[`alreadyBurningMsg`](../object/playerActionMessages.html#alreadyBurningMsg)[`alreadyClosedMsg`](../object/playerActionMessages.html#alreadyClosedMsg)[`alreadyHoldingMsg`](../object/playerActionMessages.html#alreadyHoldingMsg)[`alreadyInLocMsg`](../object/playerActionMessages.html#alreadyInLocMsg)[`alreadyLockedMsg`](../object/playerActionMessages.html#alreadyLockedMsg)[`alreadyLyingMsg`](../object/playerActionMessages.html#alreadyLyingMsg)[`alreadyLyingOnMsg`](../object/playerActionMessages.html#alreadyLyingOnMsg)[`alreadyOpenMsg`](../object/playerActionMessages.html#alreadyOpenMsg)[`alreadyPulledMsg`](../object/playerActionMessages.html#alreadyPulledMsg)[`alreadyPushedMsg`](../object/playerActionMessages.html#alreadyPushedMsg)[`alreadyPutBehindMsg`](../object/playerActionMessages.html#alreadyPutBehindMsg)[`alreadyPutInMsg`](../object/playerActionMessages.html#alreadyPutInMsg)[`alreadyPutOnMsg`](../object/playerActionMessages.html#alreadyPutOnMsg)[`alreadyPutUnderMsg`](../object/playerActionMessages.html#alreadyPutUnderMsg)[`alreadySittingMsg`](../object/playerActionMessages.html#alreadySittingMsg)[`alreadySittingOnMsg`](../object/playerActionMessages.html#alreadySittingOnMsg)[`alreadyStandingMsg`](../object/playerActionMessages.html#alreadyStandingMsg)[`alreadyStandingOnMsg`](../object/playerActionMessages.html#alreadyStandingOnMsg)[`alreadySwitchedOffMsg`](../object/playerActionMessages.html#alreadySwitchedOffMsg)[`alreadySwitchedOnMsg`](../object/playerActionMessages.html#alreadySwitchedOnMsg)[`alreadyUnlockedMsg`](../object/playerActionMessages.html#alreadyUnlockedMsg)[`alreadyWearingMsg`](../object/playerActionMessages.html#alreadyWearingMsg)[`askVagueMsg`](../object/playerActionMessages.html#askVagueMsg)[`candleNotLitMsg`](../object/playerActionMessages.html#candleNotLitMsg)[`candleOutOfFuelMsg`](../object/playerActionMessages.html#candleOutOfFuelMsg)[`cannotAttachKeyToMsg`](../object/playerActionMessages.html#cannotAttachKeyToMsg)[`cannotAttachMsg`](../object/playerActionMessages.html#cannotAttachMsg)[`cannotAttachToMsg`](../object/playerActionMessages.html#cannotAttachToMsg)[`cannotAttachToSelfMsg`](../object/playerActionMessages.html#cannotAttachToSelfMsg)[`cannotBoardMsg`](../object/playerActionMessages.html#cannotBoardMsg)[`cannotBurnDobjWithMsg`](../object/playerActionMessages.html#cannotBurnDobjWithMsg)[`cannotBurnMsg`](../object/playerActionMessages.html#cannotBurnMsg)[`cannotBurnWithMsg`](../object/playerActionMessages.html#cannotBurnWithMsg)[`cannotCleanMsg`](../object/playerActionMessages.html#cannotCleanMsg)[`cannotCleanWithMsg`](../object/playerActionMessages.html#cannotCleanWithMsg)[`cannotClimbMsg`](../object/playerActionMessages.html#cannotClimbMsg)[`cannotCloseMsg`](../object/playerActionMessages.html#cannotCloseMsg)[`cannotConsultMsg`](../object/playerActionMessages.html#cannotConsultMsg)[`cannotCutWithMsg`](../object/playerActionMessages.html#cannotCutWithMsg)[`cannotDetachFromMsg`](../object/playerActionMessages.html#cannotDetachFromMsg)[`cannotDetachMsg`](../object/playerActionMessages.html#cannotDetachMsg)[`cannotDetachPermanentMsg`](../object/playerActionMessages.html#cannotDetachPermanentMsg)[`cannotDigMsg`](../object/playerActionMessages.html#cannotDigMsg)[`cannotDigWithMsg`](../object/playerActionMessages.html#cannotDigWithMsg)[`cannotDoFromHereMsg`](../object/playerActionMessages.html#cannotDoFromHereMsg)[`cannotDoThatMsg`](../object/playerActionMessages.html#cannotDoThatMsg)[`cannotDrinkMsg`](../object/playerActionMessages.html#cannotDrinkMsg)[`cannotEatMsg`](../object/playerActionMessages.html#cannotEatMsg)[`cannotEnterHeldMsg`](../object/playerActionMessages.html#cannotEnterHeldMsg)[`cannotEnterMsg`](../object/playerActionMessages.html#cannotEnterMsg)[`cannotEnterOnMsg`](../object/playerActionMessages.html#cannotEnterOnMsg)[`cannotExtinguishMsg`](../object/playerActionMessages.html#cannotExtinguishMsg)[`cannotFastenMsg`](../object/playerActionMessages.html#cannotFastenMsg)[`cannotFastenToMsg`](../object/playerActionMessages.html#cannotFastenToMsg)[`cannotFindTopicMsg`](../object/playerActionMessages.html#cannotFindTopicMsg)[`cannotFlipMsg`](../object/playerActionMessages.html#cannotFlipMsg)[`cannotFollowSelfMsg`](../object/playerActionMessages.html#cannotFollowSelfMsg)[`cannotGetOffOfMsg`](../object/playerActionMessages.html#cannotGetOffOfMsg)[`cannotGetOutMsg`](../object/playerActionMessages.html#cannotGetOutMsg)[`cannotGiveToItselfMsg`](../object/playerActionMessages.html#cannotGiveToItselfMsg)[`cannotGiveToMsg`](../object/playerActionMessages.html#cannotGiveToMsg)[`cannotGoBackMsg`](../object/playerActionMessages.html#cannotGoBackMsg)[`cannotGoThatWayInDarkMsg`](../object/playerActionMessages.html#cannotGoThatWayInDarkMsg)[`cannotGoThatWayMsg`](../object/playerActionMessages.html#cannotGoThatWayMsg)[`cannotGoThroughMsg`](../object/playerActionMessages.html#cannotGoThroughMsg)[`cannotJumpOffMsg`](../object/playerActionMessages.html#cannotJumpOffMsg)[`cannotJumpOverMsg`](../object/playerActionMessages.html#cannotJumpOverMsg)[`cannotKissMsg`](../object/playerActionMessages.html#cannotKissMsg)[`cannotKissSelfMsg`](../object/playerActionMessages.html#cannotKissSelfMsg)[`cannotLieOnMsg`](../object/playerActionMessages.html#cannotLieOnMsg)[`cannotLightMsg`](../object/playerActionMessages.html#cannotLightMsg)[`cannotLockMsg`](../object/playerActionMessages.html#cannotLockMsg)[`cannotLockWithMsg`](../object/playerActionMessages.html#cannotLockWithMsg)[`cannotLookBehindMsg`](../object/playerActionMessages.html#cannotLookBehindMsg)[`cannotLookInClosedMsg`](../object/playerActionMessages.html#cannotLookInClosedMsg)[`cannotLookThroughMsg`](../object/playerActionMessages.html#cannotLookThroughMsg)[`cannotLookUnderMsg`](../object/playerActionMessages.html#cannotLookUnderMsg)[`cannotMoveActorMsg`](../object/playerActionMessages.html#cannotMoveActorMsg)[`cannotMovePersonMsg`](../object/playerActionMessages.html#cannotMovePersonMsg)[`cannotMovePushableMsg`](../object/playerActionMessages.html#cannotMovePushableMsg)[`cannotMoveWithMsg`](../object/playerActionMessages.html#cannotMoveWithMsg)[`cannotOpenLockedMsg`](../object/playerActionMessages.html#cannotOpenLockedMsg)[`cannotOpenMsg`](../object/playerActionMessages.html#cannotOpenMsg)[`cannotPlugInMsg`](../object/playerActionMessages.html#cannotPlugInMsg)[`cannotPlugInToMsg`](../object/playerActionMessages.html#cannotPlugInToMsg)[`cannotPourIntoMsg`](../object/playerActionMessages.html#cannotPourIntoMsg)[`cannotPourMsg`](../object/playerActionMessages.html#cannotPourMsg)[`cannotPourOntoMsg`](../object/playerActionMessages.html#cannotPourOntoMsg)[`cannotPushTravelMsg`](../object/playerActionMessages.html#cannotPushTravelMsg)[`cannotPutActorMsg`](../object/playerActionMessages.html#cannotPutActorMsg)[`cannotPutBehindMsg`](../object/playerActionMessages.html#cannotPutBehindMsg)[`cannotPutBehindRestrictedMsg`](../object/playerActionMessages.html#cannotPutBehindRestrictedMsg)[`cannotPutBehindSelfMsg`](../object/playerActionMessages.html#cannotPutBehindSelfMsg)[`cannotPutFixtureMsg`](../object/playerActionMessages.html#cannotPutFixtureMsg)[`cannotPutImmovableMsg`](../object/playerActionMessages.html#cannotPutImmovableMsg)[`cannotPutInDispenserMsg`](../object/playerActionMessages.html#cannotPutInDispenserMsg)[`cannotPutInRestrictedMsg`](../object/playerActionMessages.html#cannotPutInRestrictedMsg)[`cannotPutInSelfMsg`](../object/playerActionMessages.html#cannotPutInSelfMsg)[`cannotPutOnRestrictedMsg`](../object/playerActionMessages.html#cannotPutOnRestrictedMsg)[`cannotPutOnSelfMsg`](../object/playerActionMessages.html#cannotPutOnSelfMsg)[`cannotPutPersonMsg`](../object/playerActionMessages.html#cannotPutPersonMsg)[`cannotPutPushableMsg`](../object/playerActionMessages.html#cannotPutPushableMsg)[`cannotPutUnderMsg`](../object/playerActionMessages.html#cannotPutUnderMsg)[`cannotPutUnderRestrictedMsg`](../object/playerActionMessages.html#cannotPutUnderRestrictedMsg)[`cannotPutUnderSelfMsg`](../object/playerActionMessages.html#cannotPutUnderSelfMsg)[`cannotRemoveHeldMsg`](../object/playerActionMessages.html#cannotRemoveHeldMsg)[`cannotReturnToDispenserMsg`](../object/playerActionMessages.html#cannotReturnToDispenserMsg)[`cannotScrewMsg`](../object/playerActionMessages.html#cannotScrewMsg)[`cannotScrewWithMsg`](../object/playerActionMessages.html#cannotScrewWithMsg)[`cannotSetToMsg`](../object/playerActionMessages.html#cannotSetToMsg)[`cannotShowToItselfMsg`](../object/playerActionMessages.html#cannotShowToItselfMsg)[`cannotShowToMsg`](../object/playerActionMessages.html#cannotShowToMsg)[`cannotSitOnMsg`](../object/playerActionMessages.html#cannotSitOnMsg)[`cannotSleepMsg`](../object/playerActionMessages.html#cannotSleepMsg)[`cannotStandOnMsg`](../object/playerActionMessages.html#cannotStandOnMsg)[`cannotStandOnPathMsg`](../object/playerActionMessages.html#cannotStandOnPathMsg)[`cannotSwitchMsg`](../object/playerActionMessages.html#cannotSwitchMsg)[`cannotTakeActorMsg`](../object/playerActionMessages.html#cannotTakeActorMsg)[`cannotTakeFixtureMsg`](../object/playerActionMessages.html#cannotTakeFixtureMsg)[`cannotTakeImmovableMsg`](../object/playerActionMessages.html#cannotTakeImmovableMsg)[`cannotTakeLocationMsg`](../object/playerActionMessages.html#cannotTakeLocationMsg)[`cannotTakePersonMsg`](../object/playerActionMessages.html#cannotTakePersonMsg)[`cannotTakePushableMsg`](../object/playerActionMessages.html#cannotTakePushableMsg)[`cannotTasteActorMsg`](../object/playerActionMessages.html#cannotTasteActorMsg)[`cannotTastePersonMsg`](../object/playerActionMessages.html#cannotTastePersonMsg)[`cannotThrowAtContentsMsg`](../object/playerActionMessages.html#cannotThrowAtContentsMsg)[`cannotThrowAtSelfMsg`](../object/playerActionMessages.html#cannotThrowAtSelfMsg)[`cannotThrowToMsg`](../object/playerActionMessages.html#cannotThrowToMsg)[`cannotTurnMsg`](../object/playerActionMessages.html#cannotTurnMsg)[`cannotTurnOffMsg`](../object/playerActionMessages.html#cannotTurnOffMsg)[`cannotTurnOnMsg`](../object/playerActionMessages.html#cannotTurnOnMsg)[`cannotTurnWithMsg`](../object/playerActionMessages.html#cannotTurnWithMsg)[`cannotTypeOnMsg`](../object/playerActionMessages.html#cannotTypeOnMsg)[`cannotUnboardMsg`](../object/playerActionMessages.html#cannotUnboardMsg)[`cannotUnfastenFromMsg`](../object/playerActionMessages.html#cannotUnfastenFromMsg)[`cannotUnfastenMsg`](../object/playerActionMessages.html#cannotUnfastenMsg)[`cannotUnlockMsg`](../object/playerActionMessages.html#cannotUnlockMsg)[`cannotUnlockWithMsg`](../object/playerActionMessages.html#cannotUnlockWithMsg)[`cannotUnplugFromMsg`](../object/playerActionMessages.html#cannotUnplugFromMsg)[`cannotUnplugMsg`](../object/playerActionMessages.html#cannotUnplugMsg)[`cannotUnscrewMsg`](../object/playerActionMessages.html#cannotUnscrewMsg)[`cannotUnscrewWithMsg`](../object/playerActionMessages.html#cannotUnscrewWithMsg)[`cutNoEffectMsg`](../object/playerActionMessages.html#cutNoEffectMsg)[`dontThrowDirMsg`](../object/playerActionMessages.html#dontThrowDirMsg)[`droppingSelfMsg`](../object/playerActionMessages.html#droppingSelfMsg)[`flashlightOnButDarkMsg`](../object/playerActionMessages.html#flashlightOnButDarkMsg)[`followAlreadyHereInDarkMsg`](../object/playerActionMessages.html#followAlreadyHereInDarkMsg)[`followAlreadyHereMsg`](../object/playerActionMessages.html#followAlreadyHereMsg)[`followUnknownMsg`](../object/playerActionMessages.html#followUnknownMsg)[`giveAlreadyHasMsg`](../object/playerActionMessages.html#giveAlreadyHasMsg)[`keyNotDetachableMsg`](../object/playerActionMessages.html#keyNotDetachableMsg)[`keyNotOnKeyringMsg`](../object/playerActionMessages.html#keyNotOnKeyringMsg)[`matchNotLitMsg`](../object/playerActionMessages.html#matchNotLitMsg)[`mustBeStandingMsg`](../object/playerActionMessages.html#mustBeStandingMsg)[`mustSpecifyTurnToMsg`](../object/playerActionMessages.html#mustSpecifyTurnToMsg)[`newlyDarkMsg`](../object/playerActionMessages.html#newlyDarkMsg)[`noKeyNeededMsg`](../object/playerActionMessages.html#noKeyNeededMsg)[`noRoomToLieMsg`](../object/playerActionMessages.html#noRoomToLieMsg)[`noRoomToSitMsg`](../object/playerActionMessages.html#noRoomToSitMsg)[`noRoomToStandMsg`](../object/playerActionMessages.html#noRoomToStandMsg)[`notAContainerMsg`](../object/playerActionMessages.html#notAContainerMsg)[`notASurfaceMsg`](../object/playerActionMessages.html#notASurfaceMsg)[`notAttachedToMsg`](../object/playerActionMessages.html#notAttachedToMsg)[`notAWeaponMsg`](../object/playerActionMessages.html#notAWeaponMsg)[`notCarryingMsg`](../object/playerActionMessages.html#notCarryingMsg)[`notDoffableMsg`](../object/playerActionMessages.html#notDoffableMsg)[`notFollowableMsg`](../object/playerActionMessages.html#notFollowableMsg)[`nothingBehindMsg`](../object/playerActionMessages.html#nothingBehindMsg)[`nothingBeyondDoorMsg`](../object/playerActionMessages.html#nothingBeyondDoorMsg)[`nothingInsideMsg`](../object/playerActionMessages.html#nothingInsideMsg)[`nothingThroughMsg`](../object/playerActionMessages.html#nothingThroughMsg)[`nothingThroughPassageMsg`](../object/playerActionMessages.html#nothingThroughPassageMsg)[`nothingToHearMsg`](../object/playerActionMessages.html#nothingToHearMsg)[`nothingToSmellMsg`](../object/playerActionMessages.html#nothingToSmellMsg)[`nothingUnderMsg`](../object/playerActionMessages.html#nothingUnderMsg)[`notOnPlatformMsg`](../object/playerActionMessages.html#notOnPlatformMsg)[`notWearableMsg`](../object/playerActionMessages.html#notWearableMsg)[`notWearingMsg`](../object/playerActionMessages.html#notWearingMsg)[`okayBurnCandleMsg`](../object/playerActionMessages.html#okayBurnCandleMsg)[`okayBurnMatchMsg`](../object/playerActionMessages.html#okayBurnMatchMsg)[`okayEatMsg`](../object/playerActionMessages.html#okayEatMsg)[`okayExtinguishMatchMsg`](../object/playerActionMessages.html#okayExtinguishMatchMsg)[`okayJumpMsg`](../object/playerActionMessages.html#okayJumpMsg)[`okayPullLeverMsg`](../object/playerActionMessages.html#okayPullLeverMsg)[`okayPullSpringLeverMsg`](../object/playerActionMessages.html#okayPullSpringLeverMsg)[`okayPushLeverMsg`](../object/playerActionMessages.html#okayPushLeverMsg)[`okayYellMsg`](../object/playerActionMessages.html#okayYellMsg)[`puttingSelfMsg`](../object/playerActionMessages.html#puttingSelfMsg)[`sayGoodbyeMsg`](../object/playerActionMessages.html#sayGoodbyeMsg)[`sayHelloMsg`](../object/playerActionMessages.html#sayHelloMsg)[`sayNoMsg`](../object/playerActionMessages.html#sayNoMsg)[`sayYesMsg`](../object/playerActionMessages.html#sayYesMsg)[`setToInvalidMsg`](../object/playerActionMessages.html#setToInvalidMsg)[`shouldNotThrowAtFloorMsg`](../object/playerActionMessages.html#shouldNotThrowAtFloorMsg)[`stairwayNotDownMsg`](../object/playerActionMessages.html#stairwayNotDownMsg)[`stairwayNotUpMsg`](../object/playerActionMessages.html#stairwayNotUpMsg)[`takeFromNotInActorMsg`](../object/playerActionMessages.html#takeFromNotInActorMsg)[`takingSelfMsg`](../object/playerActionMessages.html#takingSelfMsg)[`tellVagueMsg`](../object/playerActionMessages.html#tellVagueMsg)[`throwingSelfMsg`](../object/playerActionMessages.html#throwingSelfMsg)[`tooDarkMsg`](../object/playerActionMessages.html#tooDarkMsg)[`turnToInvalidMsg`](../object/playerActionMessages.html#turnToInvalidMsg)[`unknownHowToLockMsg`](../object/playerActionMessages.html#unknownHowToLockMsg)[`unknownHowToUnlockMsg`](../object/playerActionMessages.html#unknownHowToUnlockMsg)[`unlockRequiresKeyMsg`](../object/playerActionMessages.html#unlockRequiresKeyMsg)[`uselessToAttackMsg`](../object/playerActionMessages.html#uselessToAttackMsg)[`wrongAttachmentMsg`](../object/playerActionMessages.html#wrongAttachmentMsg)[`wrongDetachmentMsg`](../object/playerActionMessages.html#wrongDetachmentMsg)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`cannotMoveComponentMsg`](#cannotMoveComponentMsg)[`containerTooFullMsg`](#containerTooFullMsg)[`okayPostureChangeMsg`](#okayPostureChangeMsg)[`okayTurnToMsg`](#okayTurnToMsg)[`roomOkayPostureChangeMsg`](#roomOkayPostureChangeMsg)[`surfaceTooFullMsg`](#surfaceTooFullMsg)[`tooLargeForContainerMsg`](#tooLargeForContainerMsg)[`tooLargeForRearMsg`](#tooLargeForRearMsg)[`tooLargeForUndersideMsg`](#tooLargeForUndersideMsg)

Inherited from `playerActionMessages` :  
[`actorCannotSeeMsg`](../object/playerActionMessages.html#actorCannotSeeMsg)[`becomingTooLargeForActorMsg`](../object/playerActionMessages.html#becomingTooLargeForActorMsg)[`becomingTooLargeForContainerMsg`](../object/playerActionMessages.html#becomingTooLargeForContainerMsg)[`cannotBeWearingMsg`](../object/playerActionMessages.html#cannotBeWearingMsg)[`cannotDoFromMsg`](../object/playerActionMessages.html#cannotDoFromMsg)[`cannotEnterExitOnlyMsg`](../object/playerActionMessages.html#cannotEnterExitOnlyMsg)[`cannotFitIntoOpeningMsg`](../object/playerActionMessages.html#cannotFitIntoOpeningMsg)[`cannotFitOutOfOpeningMsg`](../object/playerActionMessages.html#cannotFitOutOfOpeningMsg)[`cannotFollowFromHereMsg`](../object/playerActionMessages.html#cannotFollowFromHereMsg)[`cannotGoThatWayInVehicleMsg`](../object/playerActionMessages.html#cannotGoThatWayInVehicleMsg)[`cannotGoThroughClosedDoorMsg`](../object/playerActionMessages.html#cannotGoThroughClosedDoorMsg)[`cannotHearMsg`](../object/playerActionMessages.html#cannotHearMsg)[`cannotMoveThroughClosedMsg`](../object/playerActionMessages.html#cannotMoveThroughClosedMsg)[`cannotMoveThroughContainerMsg`](../object/playerActionMessages.html#cannotMoveThroughContainerMsg)[`cannotMoveThroughMsg`](../object/playerActionMessages.html#cannotMoveThroughMsg)[`cannotPushObjectNestedMsg`](../object/playerActionMessages.html#cannotPushObjectNestedMsg)[`cannotPushObjectThatWayMsg`](../object/playerActionMessages.html#cannotPushObjectThatWayMsg)[`cannotPutComponentMsg`](../object/playerActionMessages.html#cannotPutComponentMsg)[`cannotReachIntoOpeningMsg`](../object/playerActionMessages.html#cannotReachIntoOpeningMsg)[`cannotReachObjectMsg`](../object/playerActionMessages.html#cannotReachObjectMsg)[`cannotReachOutOfOpeningMsg`](../object/playerActionMessages.html#cannotReachOutOfOpeningMsg)[`cannotReachThroughMsg`](../object/playerActionMessages.html#cannotReachThroughMsg)[`cannotSmellMsg`](../object/playerActionMessages.html#cannotSmellMsg)[`cannotTakeComponentMsg`](../object/playerActionMessages.html#cannotTakeComponentMsg)[`cannotTasteMsg`](../object/playerActionMessages.html#cannotTasteMsg)[`cannotThrowThroughMsg`](../object/playerActionMessages.html#cannotThrowThroughMsg)[`cannotTouchThroughClosedMsg`](../object/playerActionMessages.html#cannotTouchThroughClosedMsg)[`cannotTouchThroughContainerMsg`](../object/playerActionMessages.html#cannotTouchThroughContainerMsg)[`circularlyBehindMsg`](../object/playerActionMessages.html#circularlyBehindMsg)[`circularlyInMsg`](../object/playerActionMessages.html#circularlyInMsg)[`circularlyOnMsg`](../object/playerActionMessages.html#circularlyOnMsg)[`circularlyUnderMsg`](../object/playerActionMessages.html#circularlyUnderMsg)[`containerBecomingTooFullMsg`](../object/playerActionMessages.html#containerBecomingTooFullMsg)[`decorationNotImportantMsg`](../object/playerActionMessages.html#decorationNotImportantMsg)[`doorClosesBehindMsg`](../object/playerActionMessages.html#doorClosesBehindMsg)[`droppingObjMsg`](../object/playerActionMessages.html#droppingObjMsg)[`floorlessDropMsg`](../object/playerActionMessages.html#floorlessDropMsg)[`foundKeyOnKeyringMsg`](../object/playerActionMessages.html#foundKeyOnKeyringMsg)[`foundNoKeyOnKeyringMsg`](../object/playerActionMessages.html#foundNoKeyOnKeyringMsg)[`handsBecomingTooFullForMsg`](../object/playerActionMessages.html#handsBecomingTooFullForMsg)[`handsTooFullForMsg`](../object/playerActionMessages.html#handsTooFullForMsg)[`heardButNotSeenMsg`](../object/playerActionMessages.html#heardButNotSeenMsg)[`invalidStagingContainerActorMsg`](../object/playerActionMessages.html#invalidStagingContainerActorMsg)[`invalidStagingContainerMsg`](../object/playerActionMessages.html#invalidStagingContainerMsg)[`invalidStagingLocationMsg`](../object/playerActionMessages.html#invalidStagingLocationMsg)[`lookInVaporousMsg`](../object/playerActionMessages.html#lookInVaporousMsg)[`movedKeysToKeyringMsg`](../object/playerActionMessages.html#movedKeysToKeyringMsg)[`movedKeyToKeyringMsg`](../object/playerActionMessages.html#movedKeyToKeyringMsg)[`mustBeBurningMsg`](../object/playerActionMessages.html#mustBeBurningMsg)[`mustBeCarryingMsg`](../object/playerActionMessages.html#mustBeCarryingMsg)[`mustBeClosedMsg`](../object/playerActionMessages.html#mustBeClosedMsg)[`mustBeEmptyMsg`](../object/playerActionMessages.html#mustBeEmptyMsg)[`mustBeHoldingMsg`](../object/playerActionMessages.html#mustBeHoldingMsg)[`mustBeInMsg`](../object/playerActionMessages.html#mustBeInMsg)[`mustBeOpenMsg`](../object/playerActionMessages.html#mustBeOpenMsg)[`mustBeUnlockedMsg`](../object/playerActionMessages.html#mustBeUnlockedMsg)[`mustBeVisibleMsg`](../object/playerActionMessages.html#mustBeVisibleMsg)[`mustDetachMsg`](../object/playerActionMessages.html#mustDetachMsg)[`mustGetOnMsg`](../object/playerActionMessages.html#mustGetOnMsg)[`mustLieOnMsg`](../object/playerActionMessages.html#mustLieOnMsg)[`mustOpenDoorMsg`](../object/playerActionMessages.html#mustOpenDoorMsg)[`mustSitOnMsg`](../object/playerActionMessages.html#mustSitOnMsg)[`nestedRoomTooHighMsg`](../object/playerActionMessages.html#nestedRoomTooHighMsg)[`nestedRoomTooHighToExitMsg`](../object/playerActionMessages.html#nestedRoomTooHighToExitMsg)[`noiseSourceMsg`](../object/playerActionMessages.html#noiseSourceMsg)[`noResponseFromMsg`](../object/playerActionMessages.html#noResponseFromMsg)[`notAddressableMsg`](../object/playerActionMessages.html#notAddressableMsg)[`notInterestedMsg`](../object/playerActionMessages.html#notInterestedMsg)[`notWithIntangibleMsg`](../object/playerActionMessages.html#notWithIntangibleMsg)[`notWithVaporousMsg`](../object/playerActionMessages.html#notWithVaporousMsg)[`npcDescMsg`](../object/playerActionMessages.html#npcDescMsg)[`objCannotHearActorMsg`](../object/playerActionMessages.html#objCannotHearActorMsg)[`odorSourceMsg`](../object/playerActionMessages.html#odorSourceMsg)[`okayFollowInSightMsg`](../object/playerActionMessages.html#okayFollowInSightMsg)[`okayPushTravelMsg`](../object/playerActionMessages.html#okayPushTravelMsg)[`okaySetToMsg`](../object/playerActionMessages.html#okaySetToMsg)[`rearTooFullMsg`](../object/playerActionMessages.html#rearTooFullMsg)[`refuseCommand`](../object/playerActionMessages.html#refuseCommand)[`smelledButNotSeenMsg`](../object/playerActionMessages.html#smelledButNotSeenMsg)[`takenAndMovedToKeyringMsg`](../object/playerActionMessages.html#takenAndMovedToKeyringMsg)[`thingDescMsg`](../object/playerActionMessages.html#thingDescMsg)[`thingSmellDescMsg`](../object/playerActionMessages.html#thingSmellDescMsg)[`thingSoundDescMsg`](../object/playerActionMessages.html#thingSoundDescMsg)[`throwCatchMsg`](../object/playerActionMessages.html#throwCatchMsg)[`throwFallMsg`](../object/playerActionMessages.html#throwFallMsg)[`throwFallShortMsg`](../object/playerActionMessages.html#throwFallShortMsg)[`throwHitFallMsg`](../object/playerActionMessages.html#throwHitFallMsg)[`throwHitMsg`](../object/playerActionMessages.html#throwHitMsg)[`throwShortMsg`](../object/playerActionMessages.html#throwShortMsg)[`tooDistantMsg`](../object/playerActionMessages.html#tooDistantMsg)[`tooHeavyForActorMsg`](../object/playerActionMessages.html#tooHeavyForActorMsg)[`tooLargeForActorMsg`](../object/playerActionMessages.html#tooLargeForActorMsg)[`totalTooHeavyForMsg`](../object/playerActionMessages.html#totalTooHeavyForMsg)[`undersideTooFullMsg`](../object/playerActionMessages.html#undersideTooFullMsg)[`unthingNotHereMsg`](../object/playerActionMessages.html#unthingNotHereMsg)[`vehicleCannotDoFromMsg`](../object/playerActionMessages.html#vehicleCannotDoFromMsg)[`willNotCatchMsg`](../object/playerActionMessages.html#willNotCatchMsg)[`willNotLetGoMsg`](../object/playerActionMessages.html#willNotLetGoMsg)

Inherited from `MessageHelper` :  
[`askDisambigList`](../object/MessageHelper.html#askDisambigList)[`shortTIMsg`](../object/MessageHelper.html#shortTIMsg)[`shortTMsg`](../object/MessageHelper.html#shortTMsg)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="alreadyFollowModeMsg"></span>

`alreadyFollowModeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4323](../source/msg_neu.t.html#4323)\]



note that we're already in "follow" mode



<span id="cannotAskSelfForMsg"></span>

`cannotAskSelfForMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4344](../source/msg_neu.t.html#4344)\]



*no description available*



<span id="cannotAskSelfMsg"></span>

`cannotAskSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4342](../source/msg_neu.t.html#4342)\]



*no description available*



<span id="cannotGiveToSelfMsg"></span>

`cannotGiveToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4348](../source/msg_neu.t.html#4348)\]



*no description available*



<span id="cannotJumpOffHereMsg"></span>

`cannotJumpOffHereMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4283](../source/msg_neu.t.html#4283)\]



cannot jump off (with no direct object) from here



<span id="cannotMoveFixtureMsg"></span>

`cannotMoveFixtureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4157](../source/msg_neu.t.html#4157)\]



trying to move a Fixture/Immovable



<span id="cannotMoveHeavyMsg"></span>

`cannotMoveHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4163](../source/msg_neu.t.html#4163)\]



*no description available*



<span id="cannotMoveImmovableMsg"></span>

`cannotMoveImmovableMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4158](../source/msg_neu.t.html#4158)\]



*no description available*



<span id="cannotPutHeavyMsg"></span>

`cannotPutHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4165](../source/msg_neu.t.html#4165)\]



*no description available*



<span id="cannotShowToSelfMsg"></span>

`cannotShowToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4350](../source/msg_neu.t.html#4350)\]



*no description available*



<span id="cannotTakeHeavyMsg"></span>

`cannotTakeHeavyMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4161](../source/msg_neu.t.html#4161)\]



trying to take/move/put a Heavy object



<span id="cannotTalkToSelfMsg"></span>

`cannotTalkToSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4340](../source/msg_neu.t.html#4340)\]



the PC's responses to conversational actions applied to oneself need
some reworking for NPC's



<span id="cannotTellSelfMsg"></span>

`cannotTellSelfMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4346](../source/msg_neu.t.html#4346)\]



*no description available*



<span id="keyDoesNotFitLockMsg"></span>

`keyDoesNotFitLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4316](../source/msg_neu.t.html#4316)\]



the key (iobj) does not fit the lock (dobj)



<span id="moveNoEffectMsg"></span>

`moveNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4215](../source/msg_neu.t.html#4215)\]



*no description available*



<span id="moveToNoEffectMsg"></span>

`moveToNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4217](../source/msg_neu.t.html#4217)\]



*no description available*



<span id="objNotForKeyringMsg"></span>

`objNotForKeyringMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4263](../source/msg_neu.t.html#4263)\]



the dobj doesn't fit on this keyring



<span id="okayAttachToMsg"></span>

`okayAttachToMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4329](../source/msg_neu.t.html#4329)\]



acknowledge attachment



<span id="okayCloseMsg"></span>

`okayCloseMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4204](../source/msg_neu.t.html#4204)\]



*no description available*



<span id="okayDetachFromMsg"></span>

`okayDetachFromMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4333](../source/msg_neu.t.html#4333)\]



acknowledge detachment



<span id="okayDoffMsg"></span>

`okayDoffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4200](../source/msg_neu.t.html#4200)\]



default successful response to 'doff obj'



<span id="okayDropMsg"></span>

`okayDropMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4179](../source/msg_neu.t.html#4179)\]



default successful 'drop' response



<span id="okayExtinguishCandleMsg"></span>

`okayExtinguishCandleMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4326](../source/msg_neu.t.html#4326)\]



extinguishing a candle



<span id="okayFollowModeMsg"></span>

`okayFollowModeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4320](../source/msg_neu.t.html#4320)\]



acknowledge entering "follow" mode



<span id="okayLockMsg"></span>

`okayLockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4207](../source/msg_neu.t.html#4207)\]



default successful responses to lock/unlock



<span id="okayNotStandingOnMsg"></span>

`okayNotStandingOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4302](../source/msg_neu.t.html#4302)\]



report for getting off a platform



<span id="okayOpenMsg"></span>

`okayOpenMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4203](../source/msg_neu.t.html#4203)\]



default successful responses to open/close



<span id="okayPushButtonMsg"></span>

`okayPushButtonMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4309](../source/msg_neu.t.html#4309)\]



default 'push button' acknowledgment



<span id="okayPutBehindMsg"></span>

`okayPutBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4192](../source/msg_neu.t.html#4192)\]



default successful 'put behind' response



<span id="okayPutInMsg"></span>

`okayPutInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4182](../source/msg_neu.t.html#4182)\]



default successful 'put in' response



<span id="okayPutOnMsg"></span>

`okayPutOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4185](../source/msg_neu.t.html#4185)\]



default successful 'put on' response



<span id="okayPutUnderMsg"></span>

`okayPutUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4188](../source/msg_neu.t.html#4188)\]



default successful 'put under' response



<span id="okayTakeMsg"></span>

`okayTakeMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4176](../source/msg_neu.t.html#4176)\]



default successful 'take' response



<span id="okayTurnOffMsg"></span>

`okayTurnOffMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4313](../source/msg_neu.t.html#4313)\]



*no description available*



<span id="okayTurnOnMsg"></span>

`okayTurnOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4312](../source/msg_neu.t.html#4312)\]



default acknowledgment for switching on/off



<span id="okayUnlockMsg"></span>

`okayUnlockMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4208](../source/msg_neu.t.html#4208)\]



*no description available*



<span id="okayWearMsg"></span>

`okayWearMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4196](../source/msg_neu.t.html#4196)\]



default succesful response to 'wear obj'



<span id="pullNoEffectMsg"></span>

`pullNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4213](../source/msg_neu.t.html#4213)\]



*no description available*



<span id="pushNoEffectMsg"></span>

`pushNoEffectMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4211](../source/msg_neu.t.html#4211)\]



push/pull/move with no effect



<span id="shouldNotBreakMsg"></span>

`shouldNotBreakMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4287](../source/msg_neu.t.html#4287)\]



should not break object



<span id="takeFromNotBehindMsg"></span>

`takeFromNotBehindMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4279](../source/msg_neu.t.html#4279)\]



taking dobj from behind something, but dobj isn't behind iobj



<span id="takeFromNotInMsg"></span>

`takeFromNotInMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4267](../source/msg_neu.t.html#4267)\]



taking dobj from iobj, but dobj isn't in iobj



<span id="takeFromNotOnMsg"></span>

`takeFromNotOnMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4271](../source/msg_neu.t.html#4271)\]



taking dobj from surface, but dobj isn't on iobj



<span id="takeFromNotUnderMsg"></span>

`takeFromNotUnderMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4275](../source/msg_neu.t.html#4275)\]



taking dobj under something, but dobj isn't under iobj



<span id="timePassesMsg"></span>

`timePassesMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4154](../source/msg_neu.t.html#4154)\]



"wait"



<span id="whereToGoMsg"></span>

`whereToGoMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[4219](../source/msg_neu.t.html#4219)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="cannotMoveComponentMsg"></span>

`cannotMoveComponentMsg (loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[4169](../source/msg_neu.t.html#4169)\]



trying to move a component object



<span id="containerTooFullMsg"></span>

`containerTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[4247](../source/msg_neu.t.html#4247)\]



container doesn't have room for object



<span id="okayPostureChangeMsg"></span>

`okayPostureChangeMsg (posture)`

[msg_neu.t](../file/msg_neu.t.html)\[[4291](../source/msg_neu.t.html#4291)\]



report for standing up/sitting down/lying down



<span id="okayTurnToMsg"></span>

`okayTurnToMsg (val)`

[msg_neu.t](../file/msg_neu.t.html)\[[4305](../source/msg_neu.t.html#4305)\]



default 'turn to' acknowledgment



<span id="roomOkayPostureChangeMsg"></span>

`roomOkayPostureChangeMsg (posture, obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[4295](../source/msg_neu.t.html#4295)\]



report for standing/sitting/lying in/on something



<span id="surfaceTooFullMsg"></span>

`surfaceTooFullMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[4255](../source/msg_neu.t.html#4255)\]



surface doesn't have room for object



<span id="tooLargeForContainerMsg"></span>

`tooLargeForContainerMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[4223](../source/msg_neu.t.html#4223)\]



object is too large for container



<span id="tooLargeForRearMsg"></span>

`tooLargeForRearMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[4239](../source/msg_neu.t.html#4239)\]



object is too large to fit behind something



<span id="tooLargeForUndersideMsg"></span>

`tooLargeForUndersideMsg (obj, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[4231](../source/msg_neu.t.html#4231)\]



object is too large for underside





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


