---
layout: docs
---
<span class="title">Thing</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[979](../source/thing.t.html#979)\],
[senseRegion.t](../file/senseRegion.t.html)\[[560](../source/senseRegion.t.html#560)\],
[english.t](../file/english.t.html)\[[2125](../source/english.t.html#2125)\],
[brightness.t](../file/brightness.t.html)\[[34](../source/brightness.t.html#34)\],
[cmdhelp.t](../file/cmdhelp.t.html)\[[855](../source/cmdhelp.t.html#855)\],
[postures.t](../file/postures.t.html)\[[114](../source/postures.t.html#114)\],
[roomparts.t](../file/roomparts.t.html)\[[154](../source/roomparts.t.html#154)\],
[sensory.t](../file/sensory.t.html)\[[561](../source/sensory.t.html#561)\],
[signals.t](../file/signals.t.html)\[[201](../source/signals.t.html#201)\],
[tiaaction.t](../file/tiaaction.t.html)\[[380](../source/tiaaction.t.html#380)\],
[weight.t](../file/weight.t.html)\[[15](../source/weight.t.html#15)\]

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



Thing is the base class for all game objects that represent physical
objects which can be interacted with in the game world. All such
physical objects are either Things or based on a subclass of Thing.

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[560](../source/senseRegion.t.html#560)\]:*  
Modifications to Thing to support the other mods required for use with
SenseRegion.

*Modified in
[english.t](../file/english.t.html)\[[2125](../source/english.t.html#2125)\]:*  
English modifications for Thing. This adds some methods that vary by
language, so they can't be defined in the generic Thing class.

*Modified in
[cmdhelp.t](../file/cmdhelp.t.html)\[[855](../source/cmdhelp.t.html#855)\]:*  
Modifications to Thing for the CMDHELP EXTENSION

*Modified in
[postures.t](../file/postures.t.html)\[[114](../source/postures.t.html#114)\]:*  
Modifications to Thing needed for the POSTURES EXTENSION.

*Modified in
[roomparts.t](../file/roomparts.t.html)\[[154](../source/roomparts.t.html#154)\]:*  
Modifications to Thing to allow things to be associated with room parts.
Note that a Thing associated with a room part should be directly located
in the room, not in the room part. \[MODIFIED FOR ROOMPARTS EXTENSION\]

*Modified in
[sensory.t](../file/sensory.t.html)\[[561](../source/sensory.t.html#561)\]:*  
Modifications to Thing to work with the \<i\>SENSORY EXTENSION\</i\>

*Modified in
[tiaaction.t](../file/tiaaction.t.html)\[[380](../source/tiaaction.t.html#380)\]:*  
MODIFICATION TO THING FOR TIAACTION EXTENSION

*Modified in
[weight.t](../file/weight.t.html)\[[15](../source/weight.t.html#15)\]:*  
Modifications to Thing class for WEIGHT extension

`class `**`Thing`**` :   `[`ReplaceRedirector`](../object/ReplaceRedirector.html) [`Mentionable`](../object/Mentionable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Thing`**  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                         object`  
[`Mentionable`](../object/Mentionable.html)  
[`LMentionable`](../object/LMentionable.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Thing`**  
[`Actor`](../object/Actor.html)  
[`Button`](../object/Button.html)  
[`Collective`](../object/Collective.html)  
[`DispensingCollective`](../object/DispensingCollective.html)  
[`Consultable`](../object/Consultable.html)  
[`Container`](../object/Container.html)  
[`Booth`](../object/Booth.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
[`Door`](../object/Door.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`Fixture`](../object/Fixture.html)  
[`CollectiveGroup`](../object/CollectiveGroup.html)  
[`MobileCollectiveGroup`](../object/MobileCollectiveGroup.html)  
[`Component`](../object/Component.html)  
[`ContainerDoor`](../object/ContainerDoor.html)  
[`Decoration`](../object/Decoration.html)  
[`Distant`](../object/Distant.html)  
[`RoomPart`](../object/RoomPart.html)  
[`Ceiling`](../object/Ceiling.html)  
[`DefaultWall`](../object/DefaultWall.html)  
[`SensoryEmanation`](../object/SensoryEmanation.html)  
[`Noise`](../object/Noise.html)  
[`SimpleNoise`](../object/SimpleNoise.html)  
[`Odor`](../object/Odor.html)  
[`SimpleOdor`](../object/SimpleOdor.html)  
[`Unthing`](../object/Unthing.html)  
[`Enterable`](../object/Enterable.html)  
[`Heavy`](../object/Heavy.html)  
[`Floor`](../object/Floor.html)  
[`Food`](../object/Food.html)  
[`Immovable`](../object/Immovable.html)  
[`Key`](../object/Key.html)  
[`Lever`](../object/Lever.html)  
[`MinorItem`](../object/MinorItem.html)  
[`Passage`](../object/Passage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`Player`](../object/Player.html)  
[`RearContainer`](../object/RearContainer.html)  
[`Room`](../object/Room.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`Settable`](../object/Settable.html)  
[`Dial`](../object/Dial.html)  
[`NumberedDial`](../object/NumberedDial.html)  
[`SimpleAttachable`](../object/SimpleAttachable.html)  
[`AttachableComponent`](../object/AttachableComponent.html)  
[`NearbyAttachable`](../object/NearbyAttachable.html)  
[`Attachable`](../object/Attachable.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`SubComponent`](../object/SubComponent.html)  
[`Surface`](../object/Surface.html)  
[`Platform`](../object/Platform.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`Switch`](../object/Switch.html)  
[`Flashlight`](../object/Flashlight.html)  
[`SymPassage`](../object/SymPassage.html)  
[`SymDoor`](../object/SymDoor.html)  
[`SymPathPassage`](../object/SymPathPassage.html)  
[`SymStairway`](../object/SymStairway.html)  
[`Underside`](../object/Underside.html)  
[`Wearable`](../object/Wearable.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`dummy_`](../object/dummy_.html) [`lightProbe_`](../object/lightProbe_.html) [`pluralDummy_`](../object/pluralDummy_.html) [`scopeProbe_`](../object/scopeProbe_.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actorAlreadyInMsg`](#actorAlreadyInMsg) [`actorAlreadyOnMsg`](#actorAlreadyOnMsg) [`actorNotInMsg`](#actorNotInMsg) [`actorNotOnMsg`](#actorNotOnMsg) [`allowPourIntoMe`](#allowPourIntoMe) [`allowPourOntoMe`](#allowPourOntoMe) [`alreadyCleanMsg`](#alreadyCleanMsg) [`alreadyClosedMsg`](#alreadyClosedMsg) [`alreadyFastenedMsg`](#alreadyFastenedMsg) [`alreadyHasMsg`](#alreadyHasMsg) [`alreadyHeldMsg`](#alreadyHeldMsg) [`alreadyInMsg`](#alreadyInMsg) [`alreadyLitMsg`](#alreadyLitMsg) [`alreadyLockedMsg`](#alreadyLockedMsg) [`alreadyMovedToMsg`](#alreadyMovedToMsg) [`alreadyOnMsg`](#alreadyOnMsg) [`alreadyOpenMsg`](#alreadyOpenMsg) [`alreadyPresentMsg`](#alreadyPresentMsg) [`alreadyThereMsg`](#alreadyThereMsg) [`alreadyWornMsg`](#alreadyWornMsg) [`autoGetOutToReach`](#autoGetOutToReach) [`autoTakeOnFindHidden`](#autoTakeOnFindHidden) [`autoUnlock`](#autoUnlock) [`brightness`](#brightness) [`brightnessForReading`](#brightnessForReading) [`brightnessOff`](#brightnessOff) [`brightnessOn`](#brightnessOn) [`bulk`](#bulk) [`bulkCapacity`](#bulkCapacity) [`canAttachToMe`](#canAttachToMe) [`canAttackWithMe`](#canAttackWithMe) [`canBurnWithMe`](#canBurnWithMe) [`canCleanWithMe`](#canCleanWithMe) [`canClimbDownMe`](#canClimbDownMe) [`canClimbUpMe`](#canClimbUpMe) [`canCutWithMe`](#canCutWithMe) [`canDetachFromMe`](#canDetachFromMe) [`canDigWithMe`](#canDigWithMe) [`canEnterOnMe`](#canEnterOnMe) [`canFastenToMe`](#canFastenToMe) [`canGoAlongMe`](#canGoAlongMe) [`canGoThrougMe`](#canGoThrougMe) [`canHearIn`](#canHearIn) [`canHearOut`](#canHearOut) [`canJumpOffMe`](#canJumpOffMe) [`canJumpOverMe`](#canJumpOverMe) [`canLieInMe`](#canLieInMe) [`canLieOnMe`](#canLieOnMe) [`canLockWithMe`](#canLockWithMe) [`canLookBehindMe`](#canLookBehindMe) [`canLookThroughMe`](#canLookThroughMe) [`canLookUnderMe`](#canLookUnderMe) [`canMoveToMe`](#canMoveToMe) [`canMoveWithMe`](#canMoveWithMe) [`cannotAttachMsg`](#cannotAttachMsg) [`cannotAttachToMsg`](#cannotAttachToMsg) [`cannotAttachToSelfMsg`](#cannotAttachToSelfMsg) [`cannotAttackMsg`](#cannotAttackMsg) [`cannotAttackWithMsg`](#cannotAttackWithMsg) [`cannotAttackWithSelfMsg`](#cannotAttackWithSelfMsg) [`cannotBoardMsg`](#cannotBoardMsg) [`cannotBreakMsg`](#cannotBreakMsg) [`cannotBurnMsg`](#cannotBurnMsg) [`cannotBurnWithMsg`](#cannotBurnWithMsg) [`cannotCleanMsg`](#cannotCleanMsg) [`cannotCleanWithMsg`](#cannotCleanWithMsg) [`cannotClimbDownMsg`](#cannotClimbDownMsg) [`cannotClimbMsg`](#cannotClimbMsg) [`cannotCloseMsg`](#cannotCloseMsg) [`cannotConsultMsg`](#cannotConsultMsg) [`cannotCutMsg`](#cannotCutMsg) [`cannotCutWithMsg`](#cannotCutWithMsg) [`cannotCutWithSelfMsg`](#cannotCutWithSelfMsg) [`cannotDetachFromMsg`](#cannotDetachFromMsg) [`cannotDetachFromSelfMsg`](#cannotDetachFromSelfMsg) [`cannotDetachMsg`](#cannotDetachMsg) [`cannotDigMsg`](#cannotDigMsg) [`cannotDigWithMsg`](#cannotDigWithMsg) [`cannotDigWithSelfMsg`](#cannotDigWithSelfMsg) [`cannotDoffMsg`](#cannotDoffMsg) [`cannotDrinkMsg`](#cannotDrinkMsg) [`cannotDropMsg`](#cannotDropMsg) [`cannotEatMsg`](#cannotEatMsg) [`cannotEnterMsg`](#cannotEnterMsg) [`cannotEnterOnMsg`](#cannotEnterOnMsg) [`cannotExtinguishMsg`](#cannotExtinguishMsg) [`cannotFastenMsg`](#cannotFastenMsg) [`cannotFastenToMsg`](#cannotFastenToMsg) [`cannotFastenToSelfMsg`](#cannotFastenToSelfMsg) [`cannotFeelMsg`](#cannotFeelMsg) [`cannotFlipMsg`](#cannotFlipMsg) [`cannotFollowMsg`](#cannotFollowMsg) [`cannotFollowSelfMsg`](#cannotFollowSelfMsg) [`cannotGetInCarriedMsg`](#cannotGetInCarriedMsg) [`cannotGetOnCarriedMsg`](#cannotGetOnCarriedMsg) [`cannotGiveToMsg`](#cannotGiveToMsg) [`cannotGiveToSelfMsg`](#cannotGiveToSelfMsg) [`cannotGoAlongMsg`](#cannotGoAlongMsg) [`cannotGoNearThereMsg`](#cannotGoNearThereMsg) [`cannotGoThroughMsg`](#cannotGoThroughMsg) [`cannotJumpOffMsg`](#cannotJumpOffMsg) [`cannotJumpOverMsg`](#cannotJumpOverMsg) [`cannotKissMsg`](#cannotKissMsg) [`cannotLieInMsg`](#cannotLieInMsg) [`cannotLieOnMsg`](#cannotLieOnMsg) [`cannotLightMsg`](#cannotLightMsg) [`cannotLockWithMsg`](#cannotLockWithMsg) [`cannotLockWithSelfMsg`](#cannotLockWithSelfMsg) [`cannotLookBehindMsg`](#cannotLookBehindMsg) [`cannotLookThroughMsg`](#cannotLookThroughMsg) [`cannotLookUnderMsg`](#cannotLookUnderMsg) [`cannotMoveMsg`](#cannotMoveMsg) [`cannotMoveToMsg`](#cannotMoveToMsg) [`cannotMoveToSelfMsg`](#cannotMoveToSelfMsg) [`cannotMoveWithMsg`](#cannotMoveWithMsg) [`cannotMoveWithSelfMsg`](#cannotMoveWithSelfMsg) [`cannotOpenMsg`](#cannotOpenMsg) [`cannotPlugIntoMsg`](#cannotPlugIntoMsg) [`cannotPlugIntoSelfMsg`](#cannotPlugIntoSelfMsg) [`cannotPlugMsg`](#cannotPlugMsg) [`cannotPourIntoMsg`](#cannotPourIntoMsg) [`cannotPourIntoSelfMsg`](#cannotPourIntoSelfMsg) [`cannotPourMsg`](#cannotPourMsg) [`cannotPourOntoMsg`](#cannotPourOntoMsg) [`cannotPourOntoSelfMsg`](#cannotPourOntoSelfMsg) [`cannotPullMsg`](#cannotPullMsg) [`cannotPurloinContainerMsg`](#cannotPurloinContainerMsg) [`cannotPurloinRoomMsg`](#cannotPurloinRoomMsg) [`cannotPurloinSelfMsg`](#cannotPurloinSelfMsg) [`cannotPushDownMsg`](#cannotPushDownMsg) [`cannotPushIntoMsg`](#cannotPushIntoMsg) [`cannotPushMsg`](#cannotPushMsg) [`cannotPushOwnContainerMsg`](#cannotPushOwnContainerMsg) [`cannotPushThroughMsg`](#cannotPushThroughMsg) [`cannotPushUpMsg`](#cannotPushUpMsg) [`cannotPushViaSelfMsg`](#cannotPushViaSelfMsg) [`cannotPutBehindMsg`](#cannotPutBehindMsg) [`cannotPutInMsg`](#cannotPutInMsg) [`cannotPutInSelfMsg`](#cannotPutInSelfMsg) [`cannotPutMsg`](#cannotPutMsg) [`cannotPutOnMsg`](#cannotPutOnMsg) [`cannotPutUnderMsg`](#cannotPutUnderMsg) [`cannotReadMsg`](#cannotReadMsg) [`cannotRemoveMsg`](#cannotRemoveMsg) [`cannotScrewMsg`](#cannotScrewMsg) [`cannotScrewWithMsg`](#cannotScrewWithMsg) [`cannotScrewWithSelfMsg`](#cannotScrewWithSelfMsg) [`cannotSetMsg`](#cannotSetMsg) [`cannotSetToMsg`](#cannotSetToMsg) [`cannotShowToMsg`](#cannotShowToMsg) [`cannotShowToSelfMsg`](#cannotShowToSelfMsg) [`cannotSitInMsg`](#cannotSitInMsg) [`cannotSitOnMsg`](#cannotSitOnMsg) [`cannotSmellMsg`](#cannotSmellMsg) [`cannotStandInMsg`](#cannotStandInMsg) [`cannotStandOnMsg`](#cannotStandOnMsg) [`cannotTakeFromSelfMsg`](#cannotTakeFromSelfMsg) [`cannotTakeMsg`](#cannotTakeMsg) [`cannotTakeMyContainerMsg`](#cannotTakeMyContainerMsg) [`cannotTakeSelfMsg`](#cannotTakeSelfMsg) [`cannotTalkToMsg`](#cannotTalkToMsg) [`cannotTalkToSelfMsg`](#cannotTalkToSelfMsg) [`cannotTasteMsg`](#cannotTasteMsg) [`cannotThrowAtMsg`](#cannotThrowAtMsg) [`cannotThrowAtSelfMsg`](#cannotThrowAtSelfMsg) [`cannotThrowMsg`](#cannotThrowMsg) [`cannotThrowToMsg`](#cannotThrowToMsg) [`cannotThrowToSelfMsg`](#cannotThrowToSelfMsg) [`cannotTurnMsg`](#cannotTurnMsg) [`cannotTurnToMsg`](#cannotTurnToMsg) [`cannotTurnWithMsg`](#cannotTurnWithMsg) [`cannotTurnWithSelfMsg`](#cannotTurnWithSelfMsg) [`cannotTypeOnMsg`](#cannotTypeOnMsg) [`cannotUnfastenFromMsg`](#cannotUnfastenFromMsg) [`cannotUnfastenFromSelfMsg`](#cannotUnfastenFromSelfMsg) [`cannotUnfastenMsg`](#cannotUnfastenMsg) [`cannotUnlockWithMsg`](#cannotUnlockWithMsg) [`cannotUnlockWithSelfMsg`](#cannotUnlockWithSelfMsg) [`cannotUnplugFromMsg`](#cannotUnplugFromMsg) [`cannotUnplugFromSelfMsg`](#cannotUnplugFromSelfMsg) [`cannotUnplugMsg`](#cannotUnplugMsg) [`cannotUnscrewMsg`](#cannotUnscrewMsg) [`cannotUnscrewWithMsg`](#cannotUnscrewWithMsg) [`cannotUnscrewWithSelfMsg`](#cannotUnscrewWithSelfMsg) [`cannotWearMsg`](#cannotWearMsg) [`cannotWriteOnMsg`](#cannotWriteOnMsg) [`canPlugIntoMe`](#canPlugIntoMe) [`canPourIntoMe`](#canPourIntoMe) [`canPourOntoMe`](#canPourOntoMe) [`canPullTravel`](#canPullTravel) [`canPushTravel`](#canPushTravel) [`canPutBehindMe`](#canPutBehindMe) [`canPutInMe`](#canPutInMe) [`canPutUnderMe`](#canPutUnderMe) [`canReachIn`](#canReachIn) [`canReachOut`](#canReachOut) [`canScrewWithMe`](#canScrewWithMe) [`canSeeIn`](#canSeeIn) [`canSeeOut`](#canSeeOut) [`canSetMeTo`](#canSetMeTo) [`canSitInMe`](#canSitInMe) [`canSitOnMe`](#canSitOnMe) [`canSmellIn`](#canSmellIn) [`canSmellOut`](#canSmellOut) [`canStandInMe`](#canStandInMe) [`canStandOnMe`](#canStandOnMe) [`canSupply`](#canSupply) [`canTalkToMe`](#canTalkToMe) [`canThrowAtMe`](#canThrowAtMe) [`canThrowToMe`](#canThrowToMe) [`canTurnMeTo`](#canTurnMeTo) [`canTurnWithMe`](#canTurnWithMe) [`canTypeOnMe`](#canTypeOnMe) [`canUnfastenFromMe`](#canUnfastenFromMe) [`canUnlockWithMe`](#canUnlockWithMe) [`canUnplugFromMe`](#canUnplugFromMe) [`canUnscrewWithMe`](#canUnscrewWithMe) [`canWriteOnMe`](#canWriteOnMe) [`checkAttackMsg`](#checkAttackMsg) [`checkFeelMsg`](#checkFeelMsg) [`checkKissMsg`](#checkKissMsg) [`circularlyInMsg`](#circularlyInMsg) [`collectiveGroups`](#collectiveGroups) [`contents`](#contents) [`contentsListed`](#contentsListed) [`contentsListedInExamine`](#contentsListedInExamine) [`contentsListedInLook`](#contentsListedInLook) [`contentsListedInSearch`](#contentsListedInSearch) [`contType`](#contType) [`currentInterlocutor`](#currentInterlocutor) [`curSetting`](#curSetting) [`darkName`](#darkName) [`decorationActions`](#decorationActions) [`decorationActions`](#decorationActions) [`defaultPosture`](#defaultPosture) [`desc`](#desc) [`directlyHeld`](#directlyHeld) [`directlyIn`](#directlyIn) [`directlyWorn`](#directlyWorn) [`distinguishByContents`](#distinguishByContents) [`dontNeedCleaningObjMsg`](#dontNeedCleaningObjMsg) [`dropItemsBehind`](#dropItemsBehind) [`dropItemsUnder`](#dropItemsUnder) [`dropLocation`](#dropLocation) [`enclosing`](#enclosing) [`examined`](#examined) [`examineListed`](#examineListed) [`examineLister`](#examineLister) [`exitLocation`](#exitLocation) [`extContents`](#extContents) [`familiar`](#familiar) [`feelDesc`](#feelDesc) [`findHiddenDest`](#findHiddenDest) [`fluidName`](#fluidName) [`futileToAttackMsg`](#futileToAttackMsg) [`futileToKissMsg`](#futileToKissMsg) [`getBulkHiddenBehind`](#getBulkHiddenBehind) [`getBulkHiddenIn`](#getBulkHiddenIn) [`getBulkHiddenUnder`](#getBulkHiddenUnder) [`getFacets`](#getFacets) [`getOutermostRoom`](#getOutermostRoom) [`getOutToJump`](#getOutToJump) [`getWeightHiddenBehind`](#getWeightHiddenBehind) [`getWeightHiddenIn`](#getWeightHiddenIn) [`getWeightHiddenUnder`](#getWeightHiddenUnder) [`globalParamName`](#globalParamName) [`groupOrder`](#groupOrder) [`hearNothingMsg`](#hearNothingMsg) [`hiddenBehind`](#hiddenBehind) [`hiddenIn`](#hiddenIn) [`hiddenUnder`](#hiddenUnder) [`illuminationThreshold`](#illuminationThreshold) [`inDarkDesc`](#inDarkDesc) [`indirectLockableMsg`](#indirectLockableMsg) [`initSpecialDesc`](#initSpecialDesc) [`intContents`](#intContents) [`interiorDesc`](#interiorDesc) [`inventoryListed`](#inventoryListed) [`isAttachable`](#isAttachable) [`isAttackable`](#isAttackable) [`isBoardable`](#isBoardable) [`isBreakable`](#isBreakable) [`isBurnable`](#isBurnable) [`isClean`](#isClean) [`isCleanable`](#isCleanable) [`isClimbable`](#isClimbable) [`isCloseable`](#isCloseable) [`isConsultable`](#isConsultable) [`isCuttable`](#isCuttable) [`isDecoration`](#isDecoration) [`isDetachable`](#isDetachable) [`isDiggable`](#isDiggable) [`isDoffable`](#isDoffable) [`isDrinkable`](#isDrinkable) [`isDroppable`](#isDroppable) [`isEdible`](#isEdible) [`isEnterable`](#isEnterable) [`isExtinguishable`](#isExtinguishable) [`isFastenable`](#isFastenable) [`isFastened`](#isFastened) [`isFeelable`](#isFeelable) [`isFixed`](#isFixed) [`isFlippable`](#isFlippable) [`isFollowable`](#isFollowable) [`isHidden`](#isHidden) [`isInitialPlayerChar`](#isInitialPlayerChar) [`isKissable`](#isKissable) [`isLightable`](#isLightable) [`isListed`](#isListed) [`isLit`](#isLit) [`isLocked`](#isLocked) [`isMoveable`](#isMoveable) [`isOn`](#isOn) [`isOpen`](#isOpen) [`isOpenable`](#isOpenable) [`isPlayerChar`](#isPlayerChar) [`isPlugable`](#isPlugable) [`isPourable`](#isPourable) [`isProminentNoise`](#isProminentNoise) [`isProminentSmell`](#isProminentSmell) [`isPullable`](#isPullable) [`isPushable`](#isPushable) [`isReadable`](#isReadable) [`isRemoveable`](#isRemoveable) [`isScrewable`](#isScrewable) [`isSettable`](#isSettable) [`isSmellable`](#isSmellable) [`isSwitchable`](#isSwitchable) [`isTakeable`](#isTakeable) [`isTasteable`](#isTasteable) [`isThrowable`](#isThrowable) [`isTransparent`](#isTransparent) [`isTurnable`](#isTurnable) [`isUnfastenable`](#isUnfastenable) [`isUnplugable`](#isUnplugable) [`isUnscrewable`](#isUnscrewable) [`isVehicle`](#isVehicle) [`isWearable`](#isWearable) [`keyDoesntWorkMsg`](#keyDoesntWorkMsg) [`keyList`](#keyList) [`keyNotNeededMsg`](#keyNotNeededMsg) [`kissRank`](#kissRank) [`known`](#known) [`knownKeyList`](#knownKeyList) [`knownProp`](#knownProp) [`lastSeenAt`](#lastSeenAt) [`lieOnScore`](#lieOnScore) [`lightSources`](#lightSources) [`listableContents`](#listableContents) [`listenDesc`](#listenDesc) [`listenDescWithoutSource`](#listenDescWithoutSource) [`listenDescWithSource`](#listenDescWithSource) [`listOrder`](#listOrder) [`listWith`](#listWith) [`location`](#location) [`lockability`](#lockability) [`lockedMsg`](#lockedMsg) [`lookBehindMsg`](#lookBehindMsg) [`lookInMsg`](#lookInMsg) [`lookListed`](#lookListed) [`lookThroughMsg`](#lookThroughMsg) [`lookUnderMsg`](#lookUnderMsg) [`markInventoryAsSeen`](#markInventoryAsSeen) [`matchPullOnly`](#matchPullOnly) [`matchPushOnly`](#matchPushOnly) [`maxBulkHiddenBehind`](#maxBulkHiddenBehind) [`maxBulkHiddenIn`](#maxBulkHiddenIn) [`maxBulkHiddenUnder`](#maxBulkHiddenUnder) [`maxSingleBulk`](#maxSingleBulk) [`maxSingleWeight`](#maxSingleWeight) [`maxWeightHiddenBehind`](#maxWeightHiddenBehind) [`maxWeightHiddenIn`](#maxWeightHiddenIn) [`maxWeightHiddenUnder`](#maxWeightHiddenUnder) [`mentioned`](#mentioned) [`moved`](#moved) [`movedTo`](#movedTo) [`moveNoEffectMsg`](#moveNoEffectMsg) [`mustBeCleanedWith`](#mustBeCleanedWith) [`myInventoryLister`](#myInventoryLister) [`myLookBehindLister`](#myLookBehindLister) [`myLookInLister`](#myLookInLister) [`myLookUnderLister`](#myLookUnderLister) [`myOpeningContentsLister`](#myOpeningContentsLister) [`myWornLister`](#myWornLister) [`needsCleaning`](#needsCleaning) [`noLongerTalkingToAnyoneMsg`](#noLongerTalkingToAnyoneMsg) [`nominalContents`](#nominalContents) [`noNeedToCleanMsg`](#noNeedToCleanMsg) [`notFastenedMsg`](#notFastenedMsg) [`notHoldingMsg`](#notHoldingMsg) [`notImportantMsg`](#notImportantMsg) [`notInMsg`](#notInMsg) [`notLitMsg`](#notLitMsg) [`notLockableMsg`](#notLockableMsg) [`notLockedMsg`](#notLockedMsg) [`notSwitchableMsg`](#notSwitchableMsg) [`notTalkingToAnyoneMsg`](#notTalkingToAnyoneMsg) [`notWornMsg`](#notWornMsg) [`objInPrep`](#objInPrep) [`objIntoPrep`](#objIntoPrep) [`okayCleanMsg`](#okayCleanMsg) [`okayGetOutOfMsg`](#okayGetOutOfMsg) [`okayLieInMsg`](#okayLieInMsg) [`okayLieOnMsg`](#okayLieOnMsg) [`okayLockMsg`](#okayLockMsg) [`okayOpenMsg`](#okayOpenMsg) [`okayPushIntoMsg`](#okayPushIntoMsg) [`okayPushOutOfMsg`](#okayPushOutOfMsg) [`okaySetMsg`](#okaySetMsg) [`okaySitInMsg`](#okaySitInMsg) [`okaySitOnMsg`](#okaySitOnMsg) [`okayStandInMsg`](#okayStandInMsg) [`okayStandOnMsg`](#okayStandOnMsg) [`okayUnlockMsg`](#okayUnlockMsg) [`opacity`](#opacity) [`opened`](#opened) [`openStatusReportable`](#openStatusReportable) [`owner`](#owner) [`ownsContents`](#ownsContents) [`paraBrksBtwnSubcontents`](#paraBrksBtwnSubcontents) [`partOfYouMsg`](#partOfYouMsg) [`posture`](#posture) [`preCondActor`](#preCondActor) [`pullNoEffectMsg`](#pullNoEffectMsg) [`pushNoEffectMsg`](#pushNoEffectMsg) [`readDesc`](#readDesc) [`recognizableInDark`](#recognizableInDark) [`remapActor`](#remapActor) [`remapBehind`](#remapBehind) [`remapIn`](#remapIn) [`remapOn`](#remapOn) [`remapProps`](#remapProps) [`remapUnder`](#remapUnder) [`roomContentsLister`](#roomContentsLister) [`roomPart`](#roomPart) [`roomPartDesc`](#roomPartDesc) [`roomSubContentsLister`](#roomSubContentsLister) [`roomTitle`](#roomTitle) [`searchListed`](#searchListed) [`seen`](#seen) [`seenProp`](#seenProp) [`shouldBeBroken`](#shouldBeBroken) [`shouldNotBreakMsg`](#shouldNotBreakMsg) [`shouldNotPourIntoMsg`](#shouldNotPourIntoMsg) [`shouldNotPourOntoMsg`](#shouldNotPourOntoMsg) [`sightSize`](#sightSize) [`sitOnScore`](#sitOnScore) [`smellDesc`](#smellDesc) [`smellDescWithoutSource`](#smellDescWithoutSource) [`smellDescWithSource`](#smellDescWithSource) [`smellNothingMsg`](#smellNothingMsg) [`smellObj`](#smellObj) [`smellSize`](#smellSize) [`soundObj`](#soundObj) [`soundSize`](#soundSize) [`specialDesc`](#specialDesc) [`specialDescBeforeContents`](#specialDescBeforeContents) [`specialDescListWith`](#specialDescListWith) [`specialDescOrder`](#specialDescOrder) [`stagingLocation`](#stagingLocation) [`standOnScore`](#standOnScore) [`stateDesc`](#stateDesc) [`tasteDesc`](#tasteDesc) [`throwFallsShortMsg`](#throwFallsShortMsg) [`tooDarkToReadMsg`](#tooDarkToReadMsg) [`tooDarkToSeeMsg`](#tooDarkToSeeMsg) [`tooFarAwayToHearMsg`](#tooFarAwayToHearMsg) [`tooFarAwayToReadMsg`](#tooFarAwayToReadMsg) [`tooFarAwayToSeeDetailMsg`](#tooFarAwayToSeeDetailMsg) [`tooFarAwayToSmellMsg`](#tooFarAwayToSmellMsg) [`totalWeight`](#totalWeight) [`turnLastExamined`](#turnLastExamined) [`turnLastMoved`](#turnLastMoved) [`turnLastMovedInto`](#turnLastMovedInto) [`turnNoEffectMsg`](#turnNoEffectMsg) [`useInitSpecialDesc`](#useInitSpecialDesc) [`useKey_`](#useKey_) [`useSpecialDesc`](#useSpecialDesc) [`viaMode`](#viaMode) [`visibleInDark`](#visibleInDark) [`vocabLikelihood`](#vocabLikelihood) [`weight`](#weight) [`weightCapacity`](#weightCapacity) [`withKeyMsg`](#withKeyMsg) [`wornBy`](#wornBy)





Inherited from `Mentionable` :  
[`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural) [`disambigGroup`](../object/Mentionable.html#disambigGroup) [`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases) [`disambigName`](../object/Mentionable.html#disambigName) [`disambigOrder`](../object/Mentionable.html#disambigOrder) [`isHer`](../object/Mentionable.html#isHer) [`isHim`](../object/Mentionable.html#isHim) [`isIt`](../object/Mentionable.html#isIt) [`massNoun`](../object/Mentionable.html#massNoun) [`matchPhrases`](../object/Mentionable.html#matchPhrases) [`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude) [`name`](../object/Mentionable.html#name) [`person`](../object/Mentionable.html#person) [`plural`](../object/Mentionable.html#plural) [`proper`](../object/Mentionable.html#proper) [`qualified`](../object/Mentionable.html#qualified) [`states`](../object/Mentionable.html#states) [`vocab`](../object/Mentionable.html#vocab) [`vocabWords`](../object/Mentionable.html#vocabWords)

Inherited from `LMentionable` :  
[`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat) [`alphaCharPat`](../object/LMentionable.html#alphaCharPat) [`aName`](../object/LMentionable.html#aName) [`apostPluralPat`](../object/LMentionable.html#apostPluralPat) [`apostSPat`](../object/LMentionable.html#apostSPat) [`deannotatePat`](../object/LMentionable.html#deannotatePat) [`dictComp`](../object/LMentionable.html#dictComp) [`dummyName`](../object/LMentionable.html#dummyName) [`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat) [`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords) [`esPluralPat`](../object/LMentionable.html#esPluralPat) [`firstWordPat`](../object/LMentionable.html#firstWordPat) [`heName`](../object/LMentionable.html#heName) [`herName`](../object/LMentionable.html#herName) [`hersName`](../object/LMentionable.html#hersName) [`himName`](../object/LMentionable.html#himName) [`iesPluralPat`](../object/LMentionable.html#iesPluralPat) [`irregularPlurals`](../object/LMentionable.html#irregularPlurals) [`lastWordPat`](../object/LMentionable.html#lastWordPat) [`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat) [`menPluralPat`](../object/LMentionable.html#menPluralPat) [`objInName`](../object/LMentionable.html#objInName) [`objIntoName`](../object/LMentionable.html#objIntoName) [`objName`](../object/LMentionable.html#objName) [`objOutOfName`](../object/LMentionable.html#objOutOfName) [`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat) [`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat) [`ownerNamed`](../object/LMentionable.html#ownerNamed) [`pluralPat`](../object/LMentionable.html#pluralPat) [`posPat`](../object/LMentionable.html#posPat) [`possAdj`](../object/LMentionable.html#possAdj) [`possEnding`](../object/LMentionable.html#possEnding) [`possNoun`](../object/LMentionable.html#possNoun) [`prepList`](../object/LMentionable.html#prepList) [`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat) [`prepWordPat`](../object/LMentionable.html#prepWordPat) [`pronounMap`](../object/LMentionable.html#pronounMap) [`properNamePat`](../object/LMentionable.html#properNamePat) [`properPat`](../object/LMentionable.html#properPat) [`reflexiveName`](../object/LMentionable.html#reflexiveName) [`specialAOrAn`](../object/LMentionable.html#specialAOrAn) [`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat) [`thatName`](../object/LMentionable.html#thatName) [`thatObjName`](../object/LMentionable.html#thatObjName) [`theName`](../object/LMentionable.html#theName) [`theObjName`](../object/LMentionable.html#theObjName) [`trimPat`](../object/LMentionable.html#trimPat) [`truncationLength`](../object/LMentionable.html#truncationLength) [`weakWordPat`](../object/LMentionable.html#weakWordPat)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`abcName`](#abcName) [`accumulateBrightness`](#accumulateBrightness) [`accumulatedBrightnessWithin`](#accumulatedBrightnessWithin) [`actionMoveInto`](#actionMoveInto) [`actorAction`](#actorAction) [`addToAllContents`](#addToAllContents) [`addToContents`](#addToContents) [`afterAction`](#afterAction) [`afterTravel`](#afterTravel) [`allContents`](#allContents) [`allowReachOut`](#allowReachOut) [`aobjFor`](#aobjFor) [`beforeAction`](#beforeAction) [`beforeMovePushable`](#beforeMovePushable) [`beforeTravel`](#beforeTravel) [`brightnessWithin`](#brightnessWithin) [`byRoom`](#byRoom) [`canHear`](#canHear) [`cannotPushTravelMsg`](#cannotPushTravelMsg) [`cannotReachOutMsg`](#cannotReachOutMsg) [`canReach`](#canReach) [`canSee`](#canSee) [`canSmell`](#canSmell) [`canTalkTo`](#canTalkTo) [`checkDisplay`](#checkDisplay) [`checkInsert`](#checkInsert) [`checkPushTravel`](#checkPushTravel) [`checkReach`](#checkReach) [`checkReachIn`](#checkReachIn) [`checkRemove`](#checkRemove) [`checkRoomToHold`](#checkRoomToHold) [`checkSetting`](#checkSetting) [`childLocType`](#childLocType) [`commonContainingParent`](#commonContainingParent) [`commonInteriorParent`](#commonInteriorParent) [`containerPath`](#containerPath) [`containerPathBlock`](#containerPathBlock) [`darkDesc`](#darkDesc) [`describeMovePushable`](#describeMovePushable) [`describePushTravel`](#describePushTravel) [`directChildParent`](#directChildParent) [`discover`](#discover) [`display`](#display) [`displayAlt`](#displayAlt) [`dobjFor(AskAbout)`](#dobjFor(AskAbout)) [`dobjFor(AskFor)`](#dobjFor(AskFor)) [`dobjFor(Attach)`](#dobjFor(Attach)) [`dobjFor(AttachTo)`](#dobjFor(AttachTo)) [`dobjFor(Attack)`](#dobjFor(Attack)) [`dobjFor(AttackWith)`](#dobjFor(AttackWith)) [`dobjFor(Board)`](#dobjFor(Board)) [`dobjFor(Break)`](#dobjFor(Break)) [`dobjFor(Burn)`](#dobjFor(Burn)) [`dobjFor(BurnWith)`](#dobjFor(BurnWith)) [`dobjFor(Clean)`](#dobjFor(Clean)) [`dobjFor(CleanWith)`](#dobjFor(CleanWith)) [`dobjFor(Climb)`](#dobjFor(Climb)) [`dobjFor(ClimbDown)`](#dobjFor(ClimbDown)) [`dobjFor(ClimbUp)`](#dobjFor(ClimbUp)) [`dobjFor(Close)`](#dobjFor(Close)) [`dobjFor(ConsultAbout)`](#dobjFor(ConsultAbout)) [`dobjFor(Cut)`](#dobjFor(Cut)) [`dobjFor(CutWith)`](#dobjFor(CutWith)) [`dobjFor(Default)`](#dobjFor(Default)) [`dobjFor(Detach)`](#dobjFor(Detach)) [`dobjFor(DetachFrom)`](#dobjFor(DetachFrom)) [`dobjFor(Dig)`](#dobjFor(Dig)) [`dobjFor(DigWith)`](#dobjFor(DigWith)) [`dobjFor(Doff)`](#dobjFor(Doff)) [`dobjFor(Drink)`](#dobjFor(Drink)) [`dobjFor(Drop)`](#dobjFor(Drop)) [`dobjFor(Eat)`](#dobjFor(Eat)) [`dobjFor(Enter)`](#dobjFor(Enter)) [`dobjFor(EnterOn)`](#dobjFor(EnterOn)) [`dobjFor(Examine)`](#dobjFor(Examine)) [`dobjFor(Extinguish)`](#dobjFor(Extinguish)) [`dobjFor(Fasten)`](#dobjFor(Fasten)) [`dobjFor(FastenTo)`](#dobjFor(FastenTo)) [`dobjFor(Feel)`](#dobjFor(Feel)) [`dobjFor(Flip)`](#dobjFor(Flip)) [`dobjFor(Follow)`](#dobjFor(Follow)) [`dobjFor(GetOff)`](#dobjFor(GetOff)) [`dobjFor(GetOutOf)`](#dobjFor(GetOutOf)) [`dobjFor(GiveTo)`](#dobjFor(GiveTo)) [`dobjFor(GiveToImplicit)`](#dobjFor(GiveToImplicit)) [`dobjFor(GoAlong)`](#dobjFor(GoAlong)) [`dobjFor(GoNear)`](#dobjFor(GoNear)) [`dobjFor(GoThrough)`](#dobjFor(GoThrough)) [`dobjFor(GoTo)`](#dobjFor(GoTo)) [`dobjFor(JumpOff)`](#dobjFor(JumpOff)) [`dobjFor(JumpOver)`](#dobjFor(JumpOver)) [`dobjFor(Kiss)`](#dobjFor(Kiss)) [`dobjFor(LieIn)`](#dobjFor(LieIn)) [`dobjFor(LieOn)`](#dobjFor(LieOn)) [`dobjFor(LieOn)`](#dobjFor(LieOn)) [`dobjFor(Light)`](#dobjFor(Light)) [`dobjFor(ListenTo)`](#dobjFor(ListenTo)) [`dobjFor(Lock)`](#dobjFor(Lock)) [`dobjFor(LockWith)`](#dobjFor(LockWith)) [`dobjFor(LookBehind)`](#dobjFor(LookBehind)) [`dobjFor(LookIn)`](#dobjFor(LookIn)) [`dobjFor(LookThrough)`](#dobjFor(LookThrough)) [`dobjFor(LookUnder)`](#dobjFor(LookUnder)) [`dobjFor(Move)`](#dobjFor(Move)) [`dobjFor(MoveTo)`](#dobjFor(MoveTo)) [`dobjFor(MoveWith)`](#dobjFor(MoveWith)) [`dobjFor(Open)`](#dobjFor(Open)) [`dobjFor(PlugIn)`](#dobjFor(PlugIn)) [`dobjFor(PlugInto)`](#dobjFor(PlugInto)) [`dobjFor(Pour)`](#dobjFor(Pour)) [`dobjFor(PourInto)`](#dobjFor(PourInto)) [`dobjFor(PourOnto)`](#dobjFor(PourOnto)) [`dobjFor(Pull)`](#dobjFor(Pull)) [`dobjFor(Purloin)`](#dobjFor(Purloin)) [`dobjFor(Push)`](#dobjFor(Push)) [`dobjFor(PushTravelClimbDown)`](#dobjFor(PushTravelClimbDown)) [`dobjFor(PushTravelClimbUp)`](#dobjFor(PushTravelClimbUp)) [`dobjFor(PushTravelDir)`](#dobjFor(PushTravelDir)) [`dobjFor(PushTravelEnter)`](#dobjFor(PushTravelEnter)) [`dobjFor(PushTravelGetOutOf)`](#dobjFor(PushTravelGetOutOf)) [`dobjFor(PushTravelThrough)`](#dobjFor(PushTravelThrough)) [`dobjFor(PutBehind)`](#dobjFor(PutBehind)) [`dobjFor(PutIn)`](#dobjFor(PutIn)) [`dobjFor(PutOn)`](#dobjFor(PutOn)) [`dobjFor(PutUnder)`](#dobjFor(PutUnder)) [`dobjFor(QueryAbout)`](#dobjFor(QueryAbout)) [`dobjFor(Read)`](#dobjFor(Read)) [`dobjFor(Remove)`](#dobjFor(Remove)) [`dobjFor(SayTo)`](#dobjFor(SayTo)) [`dobjFor(Screw)`](#dobjFor(Screw)) [`dobjFor(ScrewWith)`](#dobjFor(ScrewWith)) [`dobjFor(Search)`](#dobjFor(Search)) [`dobjFor(Set)`](#dobjFor(Set)) [`dobjFor(SetTo)`](#dobjFor(SetTo)) [`dobjFor(ShowTo)`](#dobjFor(ShowTo)) [`dobjFor(ShowToImplicit)`](#dobjFor(ShowToImplicit)) [`dobjFor(SitIn)`](#dobjFor(SitIn)) [`dobjFor(SitOn)`](#dobjFor(SitOn)) [`dobjFor(SitOn)`](#dobjFor(SitOn)) [`dobjFor(SmellSomething)`](#dobjFor(SmellSomething)) [`dobjFor(StandIn)`](#dobjFor(StandIn)) [`dobjFor(StandOn)`](#dobjFor(StandOn)) [`dobjFor(StandOn)`](#dobjFor(StandOn)) [`dobjFor(Strike)`](#dobjFor(Strike)) [`dobjFor(SwitchOff)`](#dobjFor(SwitchOff)) [`dobjFor(SwitchOn)`](#dobjFor(SwitchOn)) [`dobjFor(SwitchVague)`](#dobjFor(SwitchVague)) [`dobjFor(Take)`](#dobjFor(Take)) [`dobjFor(TakeFrom)`](#dobjFor(TakeFrom)) [`dobjFor(TakeFrom)`](#dobjFor(TakeFrom)) [`dobjFor(TalkAbout)`](#dobjFor(TalkAbout)) [`dobjFor(TalkTo)`](#dobjFor(TalkTo)) [`dobjFor(Taste)`](#dobjFor(Taste)) [`dobjFor(TellAbout)`](#dobjFor(TellAbout)) [`dobjFor(Throw)`](#dobjFor(Throw)) [`dobjFor(ThrowAt)`](#dobjFor(ThrowAt)) [`dobjFor(ThrowDir)`](#dobjFor(ThrowDir)) [`dobjFor(ThrowTo)`](#dobjFor(ThrowTo)) [`dobjFor(Turn)`](#dobjFor(Turn)) [`dobjFor(TurnTo)`](#dobjFor(TurnTo)) [`dobjFor(TurnWith)`](#dobjFor(TurnWith)) [`dobjFor(TypeOn)`](#dobjFor(TypeOn)) [`dobjFor(TypeOnVague)`](#dobjFor(TypeOnVague)) [`dobjFor(Unfasten)`](#dobjFor(Unfasten)) [`dobjFor(UnfastenFrom)`](#dobjFor(UnfastenFrom)) [`dobjFor(Unlock)`](#dobjFor(Unlock)) [`dobjFor(UnlockWith)`](#dobjFor(UnlockWith)) [`dobjFor(Unplug)`](#dobjFor(Unplug)) [`dobjFor(UnplugFrom)`](#dobjFor(UnplugFrom)) [`dobjFor(Unscrew)`](#dobjFor(Unscrew)) [`dobjFor(UnscrewWith)`](#dobjFor(UnscrewWith)) [`dobjFor(Wear)`](#dobjFor(Wear)) [`dobjFor(WriteOn)`](#dobjFor(WriteOn)) [`doPushTravel`](#doPushTravel) [`examineStatus`](#examineStatus) [`filterResolveList`](#filterResolveList) [`findHidden`](#findHidden) [`findPlausibleKey`](#findPlausibleKey) [`firstContainerPathBlock`](#firstContainerPathBlock) [`getBulkWithin`](#getBulkWithin) [`getCarriedBulk`](#getCarriedBulk) [`getCarriedWeight`](#getCarriedWeight) [`getStatuslineExitsHeight`](#getStatuslineExitsHeight) [`getWeightWithin`](#getWeightWithin) [`handleCommand`](#handleCommand) [`hasSeen`](#hasSeen) [`hideFromAll`](#hideFromAll) [`interiorParent`](#interiorParent) [`iobjFor(AttachTo)`](#iobjFor(AttachTo)) [`iobjFor(AttackWith)`](#iobjFor(AttackWith)) [`iobjFor(BurnWith)`](#iobjFor(BurnWith)) [`iobjFor(CleanWith)`](#iobjFor(CleanWith)) [`iobjFor(CutWith)`](#iobjFor(CutWith)) [`iobjFor(Default)`](#iobjFor(Default)) [`iobjFor(DetachFrom)`](#iobjFor(DetachFrom)) [`iobjFor(DigWith)`](#iobjFor(DigWith)) [`iobjFor(FastenTo)`](#iobjFor(FastenTo)) [`iobjFor(GiveTo)`](#iobjFor(GiveTo)) [`iobjFor(LockWith)`](#iobjFor(LockWith)) [`iobjFor(MoveTo)`](#iobjFor(MoveTo)) [`iobjFor(MoveWith)`](#iobjFor(MoveWith)) [`iobjFor(PlugInto)`](#iobjFor(PlugInto)) [`iobjFor(PourInto)`](#iobjFor(PourInto)) [`iobjFor(PourOnto)`](#iobjFor(PourOnto)) [`iobjFor(PushTravelClimbDown)`](#iobjFor(PushTravelClimbDown)) [`iobjFor(PushTravelClimbUp)`](#iobjFor(PushTravelClimbUp)) [`iobjFor(PushTravelEnter)`](#iobjFor(PushTravelEnter)) [`iobjFor(PushTravelGetOutOf)`](#iobjFor(PushTravelGetOutOf)) [`iobjFor(PushTravelThrough)`](#iobjFor(PushTravelThrough)) [`iobjFor(PutBehind)`](#iobjFor(PutBehind)) [`iobjFor(PutIn)`](#iobjFor(PutIn)) [`iobjFor(PutOn)`](#iobjFor(PutOn)) [`iobjFor(PutUnder)`](#iobjFor(PutUnder)) [`iobjFor(ScrewWith)`](#iobjFor(ScrewWith)) [`iobjFor(ShowTo)`](#iobjFor(ShowTo)) [`iobjFor(TakeFrom)`](#iobjFor(TakeFrom)) [`iobjFor(ThrowAt)`](#iobjFor(ThrowAt)) [`iobjFor(ThrowTo)`](#iobjFor(ThrowTo)) [`iobjFor(TurnWith)`](#iobjFor(TurnWith)) [`iobjFor(UnfastenFrom)`](#iobjFor(UnfastenFrom)) [`iobjFor(UnlockWith)`](#iobjFor(UnlockWith)) [`iobjFor(UnplugFrom)`](#iobjFor(UnplugFrom)) [`iobjFor(UnscrewWith)`](#iobjFor(UnscrewWith)) [`isAudibleFrom`](#isAudibleFrom) [`isChild`](#isChild) [`isDirectChild`](#isDirectChild) [`isDirectlyHeldBy`](#isDirectlyHeldBy) [`isDirectlyIn`](#isDirectlyIn) [`isDirectlyWornBy`](#isDirectlyWornBy) [`isHeldBy`](#isHeldBy) [`isIlluminated`](#isIlluminated) [`isIn`](#isIn) [`isInterior`](#isInterior) [`isOrIsIn`](#isOrIsIn) [`isOutside`](#isOutside) [`isReadableFrom`](#isReadableFrom) [`isSmellableFrom`](#isSmellableFrom) [`isThereALightSourceIn`](#isThereALightSourceIn) [`isVisibleFrom`](#isVisibleFrom) [`isWornBy`](#isWornBy) [`knowsAbout`](#knowsAbout) [`listableContentsOf`](#listableContentsOf) [`listContents`](#listContents) [`listenDesc`](#listenDesc) [`listRemoteContents`](#listRemoteContents) [`listSubcontentsOf`](#listSubcontentsOf) [`litWithin`](#litWithin) [`locationWhich`](#locationWhich) [`locType`](#locType) [`lookAroundWithin`](#lookAroundWithin) [`makeCleaned`](#makeCleaned) [`makeFastened`](#makeFastened) [`makeLit`](#makeLit) [`makeLocked`](#makeLocked) [`makeMovedTo`](#makeMovedTo) [`makeOn`](#makeOn) [`makeOpen`](#makeOpen) [`makeSetting`](#makeSetting) [`makeWorn`](#makeWorn) [`moveHidden`](#moveHidden) [`moveInto`](#moveInto) [`moveMLIntoAdd`](#moveMLIntoAdd) [`moveMLOutOf`](#moveMLOutOf) [`nestedLoc`](#nestedLoc) [`nominalOwner`](#nominalOwner) [`noteSeen`](#noteSeen) [`notifyEvent`](#notifyEvent) [`notifyInsert`](#notifyInsert) [`notifyRemove`](#notifyRemove) [`notifySightEvent`](#notifySightEvent) [`notifySmellEvent`](#notifySmellEvent) [`notifySoundEvent`](#notifySoundEvent) [`notionalContents`](#notionalContents) [`outermostParent`](#outermostParent) [`outermostVisibleParent`](#outermostVisibleParent) [`ownedBy`](#ownedBy) [`preinitThing`](#preinitThing) [`pushTravelRevealItems`](#pushTravelRevealItems) [`reachBlockedMsg`](#reachBlockedMsg) [`remoteBrightness`](#remoteBrightness) [`remoteInitSpecialDesc`](#remoteInitSpecialDesc) [`remoteObjInName`](#remoteObjInName) [`remoteSpecialDesc`](#remoteSpecialDesc) [`removeFromContents`](#removeFromContents) [`revealOnMove`](#revealOnMove) [`roomHeadline`](#roomHeadline) [`roomSubhead`](#roomSubhead) [`sayCantBearMoreWeight`](#sayCantBearMoreWeight) [`sayDontKnowHowToGetThere`](#sayDontKnowHowToGetThere) [`sayDontKnowHowToReach`](#sayDontKnowHowToReach) [`sayFindHidden`](#sayFindHidden) [`sayPushTravel`](#sayPushTravel) [`sayTooHeavy`](#sayTooHeavy) [`sayTooHeavyToHide`](#sayTooHeavyToHide) [`scoreObject`](#scoreObject) [`setHasSeen`](#setHasSeen) [`setKnown`](#setKnown) [`setKnowsAbout`](#setKnowsAbout) [`setSeen`](#setSeen) [`shinesOut`](#shinesOut) [`showConnectedMiscContents`](#showConnectedMiscContents) [`showFirstConnectedSpecials`](#showFirstConnectedSpecials) [`showRemoteSpecialDesc`](#showRemoteSpecialDesc) [`showSecondConnectedSpecials`](#showSecondConnectedSpecials) [`showSpecialDesc`](#showSpecialDesc) [`showStatuslineExits`](#showStatuslineExits) [`smellDesc`](#smellDesc) [`statusName`](#statusName) [`totalBulkIn`](#totalBulkIn) [`totalWeightIn`](#totalWeightIn) [`traceContainerPath`](#traceContainerPath) [`travelVia`](#travelVia) [`tryCheck`](#tryCheck) [`tryMakingPosture`](#tryMakingPosture) [`unmention`](#unmention) [`unmentionRemoteContents`](#unmentionRemoteContents) [`verifyActor`](#verifyActor) [`verifyEnterPosture`](#verifyEnterPosture) [`verifyPushTravel`](#verifyPushTravel) [`wouldBeLitFor`](#wouldBeLitFor)

Inherited from `ReplaceRedirector` :  
[`redirect`](../object/ReplaceRedirector.html#redirect)

Inherited from `Redirector` :  
[`doInstead`](../object/Redirector.html#doInstead) [`doNested`](../object/Redirector.html#doNested) [`doOtherAction`](../object/Redirector.html#doOtherAction)

Inherited from `Mentionable` :  
[`construct`](../object/Mentionable.html#construct) [`matchName`](../object/Mentionable.html#matchName) [`matchNameCommon`](../object/Mentionable.html#matchNameCommon) [`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig) [`phraseMatchName`](../object/Mentionable.html#phraseMatchName) [`simpleMatchName`](../object/Mentionable.html#simpleMatchName)

Inherited from `LMentionable` :  
[`addDictWord`](../object/LMentionable.html#addDictWord) [`addVocab`](../object/LMentionable.html#addVocab) [`addVocabWord`](../object/LMentionable.html#addVocabWord) [`aNameFrom`](../object/LMentionable.html#aNameFrom) [`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss) [`classInit`](../object/LMentionable.html#classInit) [`contify`](../object/LMentionable.html#contify) [`distinguishedName`](../object/LMentionable.html#distinguishedName) [`ifPronoun`](../object/LMentionable.html#ifPronoun) [`inheritVocab`](../object/LMentionable.html#inheritVocab) [`initVocab`](../object/LMentionable.html#initVocab) [`initVocabWord`](../object/LMentionable.html#initVocabWord) [`locify`](../object/LMentionable.html#locify) [`matchPronoun`](../object/LMentionable.html#matchPronoun) [`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom) [`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom) [`possessify`](../object/LMentionable.html#possessify) [`pronoun`](../object/LMentionable.html#pronoun) [`removeVocabWord`](../object/LMentionable.html#removeVocabWord) [`replaceVocab`](../object/LMentionable.html#replaceVocab) [`theNameFrom`](../object/LMentionable.html#theNameFrom) [`theNameIs`](../object/LMentionable.html#theNameIs)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actorAlreadyInMsg"></span>

`actorAlreadyInMsg`

[thing.t](../file/thing.t.html)\[[6591](../source/thing.t.html#6591)\]



*no description available*



<span id="actorAlreadyOnMsg"></span>

`actorAlreadyOnMsg`

[thing.t](../file/thing.t.html)\[[6458](../source/thing.t.html#6458)\]



*no description available*



<span id="actorNotInMsg"></span>

`actorNotInMsg`

[thing.t](../file/thing.t.html)\[[6658](../source/thing.t.html#6658)\]



*no description available*



<span id="actorNotOnMsg"></span>

`actorNotOnMsg`

[thing.t](../file/thing.t.html)\[[6659](../source/thing.t.html#6659)\]



*no description available*



<span id="allowPourIntoMe"></span>

`allowPourIntoMe`

[thing.t](../file/thing.t.html)\[[8226](../source/thing.t.html#8226)\]



While it's possible to pour stuff into any container, we probably don't
want to allow it on most of them



<span id="allowPourOntoMe"></span>

`allowPourOntoMe`

[thing.t](../file/thing.t.html)\[[8178](../source/thing.t.html#8178)\]



The allowPourOntoMe property controls whether we want allow anything to
be poured onto this thing (even if it's possible). By default we don't.



<span id="alreadyCleanMsg"></span>

`alreadyCleanMsg`

[thing.t](../file/thing.t.html)\[[7056](../source/thing.t.html#7056)\]



*no description available*



<span id="alreadyClosedMsg"></span>

`alreadyClosedMsg`

[thing.t](../file/thing.t.html)\[[4838](../source/thing.t.html#4838)\]



*no description available*



<span id="alreadyFastenedMsg"></span>

`alreadyFastenedMsg`

[thing.t](../file/thing.t.html)\[[7688](../source/thing.t.html#7688)\]



*no description available*



<span id="alreadyHasMsg"></span>

`alreadyHasMsg`

[thing.t](../file/thing.t.html)\[[8981](../source/thing.t.html#8981)\]



*no description available*



<span id="alreadyHeldMsg"></span>

`alreadyHeldMsg`

[thing.t](../file/thing.t.html)\[[4236](../source/thing.t.html#4236)\]



*no description available*



<span id="alreadyInMsg"></span>

`alreadyInMsg`

[thing.t](../file/thing.t.html)\[[5431](../source/thing.t.html#5431)\]



Handled on iobj



<span id="alreadyLitMsg"></span>

`alreadyLitMsg`

[thing.t](../file/thing.t.html)\[[6893](../source/thing.t.html#6893)\]



*no description available*



<span id="alreadyLockedMsg"></span>

`alreadyLockedMsg`

[thing.t](../file/thing.t.html)\[[5896](../source/thing.t.html#5896)\]



Remap the lock action to our remapIn object if we're not lockable but we
have a lockable remapIn object (i.e. an associated container).



<span id="alreadyMovedToMsg"></span>

`alreadyMovedToMsg`

[thing.t](../file/thing.t.html)\[[6861](../source/thing.t.html#6861)\]



*no description available*



<span id="alreadyOnMsg"></span>

`alreadyOnMsg`

[thing.t](../file/thing.t.html)\[[6185](../source/thing.t.html#6185)\]



*no description available*



<span id="alreadyOpenMsg"></span>

`alreadyOpenMsg`

[thing.t](../file/thing.t.html)\[[4795](../source/thing.t.html#4795)\]



*no description available*



<span id="alreadyPresentMsg"></span>

`alreadyPresentMsg`

[thing.t](../file/thing.t.html)\[[7544](../source/thing.t.html#7544)\]



*no description available*



<span id="alreadyThereMsg"></span>

`alreadyThereMsg`

[thing.t](../file/thing.t.html)\[[7542](../source/thing.t.html#7542)\]



*no description available*



<span id="alreadyWornMsg"></span>

`alreadyWornMsg`

[thing.t](../file/thing.t.html)\[[6318](../source/thing.t.html#6318)\]



*no description available*



<span id="autoGetOutToReach"></span>

`autoGetOutToReach`

[thing.t](../file/thing.t.html)\[[3489](../source/thing.t.html#3489)\]



If an actor within me cannot reach an object from me, should the actor
automatically try to get out of me?



<span id="autoTakeOnFindHidden"></span>

`autoTakeOnFindHidden`

[thing.t](../file/thing.t.html)\[[4974](../source/thing.t.html#4974)\]



If the actor finds something in a hiddenPrep list and there's nowhere
obvious for it go, should he take it? By default the actor should take
it if the object he's found it in/under/behind is fixed in place.



<span id="autoUnlock"></span>

`autoUnlock`

[thing.t](../file/thing.t.html)\[[4720](../source/thing.t.html#4720)\]



Flag, do we want to attempt to unlock this item it it's locked when we
try to open it?



<span id="brightness"></span>

`brightness`

[brightness.t](../file/brightness.t.html)\[[79](../source/brightness.t.html#79)\]



\[BRIGHTNESS EXTENSION\]

The strength of the light the object is giving off, if indeed it is
giving off light. This value should be one of the following:

0: The object is giving off no light at all.

1: The object is self-illuminating, but doesn't give off enough light to
illuminate any other objects. This is suitable for something like an LED
digital clock.

2: The object gives off dim light. This level is bright enough to
illuminate nearby objects, but not enough to go through obscuring media,
and not enough for certain activities requiring strong lighting, such as
reading.

3: The object gives off medium light. This level is bright enough to
illuminate nearby objects, and is enough for most activities, including
reading and the like. Traveling through an obscuring medium reduces this
level to dim (2).

4: The object gives off strong light. This level is bright enough to
illuminate nearby objects, and travel through an obscuring medium
reduces it to medium light (3).

There is nothing to stop game code using a higher value still to model a
a super-powerful light source if that seems suitable to the situation
being modelled in the game, but this probably will only rarely be
necessary.

Note that the special value -1 is reserved as an invalid level, used to
flag certain events (such as the need to recalculate the ambient light
level from a new point of view).

Most objects do not give off light at all.

Return the appropriate on/off brightness, depending on whether or not
we're currently lit



<span id="brightnessForReading"></span>

`brightnessForReading`

[brightness.t](../file/brightness.t.html)\[[375](../source/brightness.t.html#375)\]



The brightness needed for us to be able to read this object (as opposed
to merely examine it) By default we'll set this at 3 (the brightness
used by adv3) but game code can overrife this to some other value if
desired. \[BRIGHTNESS EXTENSION\]



<span id="brightnessOff"></span>

`brightnessOff`

[brightness.t](../file/brightness.t.html)\[[43](../source/brightness.t.html#43)\]



Our brightness when unlit. This would normally be 0, but if we're
visible in the dark it will be 1. \[BRIGHTNESS EXTENSION\]



<span id="brightnessOn"></span>

`brightnessOn`

[brightness.t](../file/brightness.t.html)\[[37](../source/brightness.t.html#37)\]



Our brightness when lit \[BRIGHTNESS EXTENSION\]



<span id="bulk"></span>

`bulk`

[thing.t](../file/thing.t.html)\[[2052](../source/thing.t.html#2052)\]



This object's bulk, in arbitrary units (game authors should devise their
own bulk scale according to the needs of their game).



<span id="bulkCapacity"></span>

`bulkCapacity`

[thing.t](../file/thing.t.html)\[[2058](../source/thing.t.html#2058)\]



The maximum bulk that can be contained in this Thing. We set a very
large number by default.



<span id="canAttachToMe"></span>

`canAttachToMe`

[thing.t](../file/thing.t.html)\[[7575](../source/thing.t.html#7575)\]



*no description available*



<span id="canAttackWithMe"></span>

`canAttackWithMe`

[thing.t](../file/thing.t.html)\[[4609](../source/thing.t.html#4609)\]



By default we can't use most things as weapons



<span id="canBurnWithMe"></span>

`canBurnWithMe`

[thing.t](../file/thing.t.html)\[[6279](../source/thing.t.html#6279)\]



By default we assume most things can't be used to burn other things
with.



<span id="canCleanWithMe"></span>

`canCleanWithMe`

[thing.t](../file/thing.t.html)\[[7106](../source/thing.t.html#7106)\]



We assume most objects aren't suitable for cleaning other objects with.
Since the dobj is resolved first canCleanWithMe could be a method that
checks whether the proposed iobj is suitable for cleaning gDobj; but a
better way of doing it might be to list suitable objects in the
mustBeCleanedWith property.



<span id="canClimbDownMe"></span>

`canClimbDownMe`

[thing.t](../file/thing.t.html)\[[6384](../source/thing.t.html#6384)\]



*no description available*



<span id="canClimbUpMe"></span>

`canClimbUpMe`

[thing.t](../file/thing.t.html)\[[6369](../source/thing.t.html#6369)\]



*no description available*



<span id="canCutWithMe"></span>

`canCutWithMe`

[thing.t](../file/thing.t.html)\[[4946](../source/thing.t.html#4946)\]



Most things can't be used to cut other things with



<span id="canDetachFromMe"></span>

`canDetachFromMe`

[thing.t](../file/thing.t.html)\[[7629](../source/thing.t.html#7629)\]



*no description available*



<span id="canDigWithMe"></span>

`canDigWithMe`

[thing.t](../file/thing.t.html)\[[7143](../source/thing.t.html#7143)\]



Most objects aren't suitable digging instruments



<span id="canEnterOnMe"></span>

`canEnterOnMe`

[thing.t](../file/thing.t.html)\[[8061](../source/thing.t.html#8061)\]



Entering something on means ENTER FOO ON BAR where FOO is a string
literal and BAR is an object such as a computer terminal. Most objects
can't be entered on in this sense.



<span id="canFastenToMe"></span>

`canFastenToMe`

[thing.t](../file/thing.t.html)\[[7702](../source/thing.t.html#7702)\]



*no description available*



<span id="canGoAlongMe"></span>

`canGoAlongMe`

[thing.t](../file/thing.t.html)\[[5330](../source/thing.t.html#5330)\]



Most things cannot be gone along



<span id="canGoThrougMe"></span>

`canGoThrougMe`

[thing.t](../file/thing.t.html)\[[5313](../source/thing.t.html#5313)\]



Most things cannot be gone through



<span id="canHearIn"></span>

`canHearIn`

[thing.t](../file/thing.t.html)\[[3391](../source/thing.t.html#3391)\]



Can we hear in from my exterior to my interior? That is, can an observer
on the outside of this container hear a sound source on the inside?

By default, we can hear in for all containers, since most materials
transmit at least some sound even if they're opaque to light. For a
soundproof material (a glass booth, say), you could override this to
make it (!enclosing) instead.



<span id="canHearOut"></span>

`canHearOut`

[thing.t](../file/thing.t.html)\[[3403](../source/thing.t.html#3403)\]



Can we hear out from my interior to my exterior? That is, can an
observer on the inside of this container hear a sound source on the
outside?

By default, we can hear out for all containers, since most materials
transmit at least some sound even if they're opaque to light. For a
soundproof material (a glass both, say), you could override this to make
it (!enclosing) instead.



<span id="canJumpOffMe"></span>

`canJumpOffMe`

[thing.t](../file/thing.t.html)\[[7951](../source/thing.t.html#7951)\]



It should be possible to jump off something if and only if the actor is
on it in the first place.



<span id="canJumpOverMe"></span>

`canJumpOverMe`

[thing.t](../file/thing.t.html)\[[7982](../source/thing.t.html#7982)\]



It usually isn't possible (or at least useful) to jump over things.



<span id="canLieInMe"></span>

`canLieInMe`

[postures.t](../file/postures.t.html)\[[134](../source/postures.t.html#134)\]



*no description available*



<span id="canLieOnMe"></span>

`canLieOnMe`

[thing.t](../file/thing.t.html)\[[6483](../source/thing.t.html#6483)\]



*no description available*



<span id="canLockWithMe"></span>

`canLockWithMe`

[thing.t](../file/thing.t.html)\[[5903](../source/thing.t.html#5903)\]



Usually, if something can be used to unlock things it can also be used
to lock them



<span id="canLookBehindMe"></span>

`canLookBehindMe`

[thing.t](../file/thing.t.html)\[[5194](../source/thing.t.html#5194)\]



By default we make it possible to look behind things, but there could be
many things it makes no sense to try to look behind.



<span id="canLookThroughMe"></span>

`canLookThroughMe`

[thing.t](../file/thing.t.html)\[[5290](../source/thing.t.html#5290)\]



By default we make it possible to look through things, but there may
well be things you obviously couldn't look through.



<span id="canLookUnderMe"></span>

`canLookUnderMe`

[thing.t](../file/thing.t.html)\[[5103](../source/thing.t.html#5103)\]



We can look under most things, but there are some things (houses, the
ground, sunlight) it might not make much sense to try looking under.



<span id="canMoveToMe"></span>

`canMoveToMe`

[thing.t](../file/thing.t.html)\[[6833](../source/thing.t.html#6833)\]



In general there's no reason why most objects can't be moved to.



<span id="canMoveWithMe"></span>

`canMoveWithMe`

[thing.t](../file/thing.t.html)\[[6766](../source/thing.t.html#6766)\]



Most things can't be used to move other things with. Note that since the
dobj is resolved first, objects or subclasses could override this with a
method that returns true or nil depending on the identity of the dobj.



<span id="cannotAttachMsg"></span>

`cannotAttachMsg`

[thing.t](../file/thing.t.html)\[[7591](../source/thing.t.html#7591)\]



*no description available*



<span id="cannotAttachToMsg"></span>

`cannotAttachToMsg`

[thing.t](../file/thing.t.html)\[[7593](../source/thing.t.html#7593)\]



*no description available*



<span id="cannotAttachToSelfMsg"></span>

`cannotAttachToSelfMsg`

[thing.t](../file/thing.t.html)\[[7596](../source/thing.t.html#7596)\]



*no description available*



<span id="cannotAttackMsg"></span>

`cannotAttackMsg`

[thing.t](../file/thing.t.html)\[[4568](../source/thing.t.html#4568)\]



*no description available*



<span id="cannotAttackWithMsg"></span>

`cannotAttackWithMsg`

[thing.t](../file/thing.t.html)\[[4615](../source/thing.t.html#4615)\]



*no description available*



<span id="cannotAttackWithSelfMsg"></span>

`cannotAttackWithSelfMsg`

[thing.t](../file/thing.t.html)\[[4612](../source/thing.t.html#4612)\]



*no description available*



<span id="cannotBoardMsg"></span>

`cannotBoardMsg`

[thing.t](../file/thing.t.html)\[[6457](../source/thing.t.html#6457)\]



*no description available*



<span id="cannotBreakMsg"></span>

`cannotBreakMsg`

[thing.t](../file/thing.t.html)\[[4642](../source/thing.t.html#4642)\]



*no description available*



<span id="cannotBurnMsg"></span>

`cannotBurnMsg`

[thing.t](../file/thing.t.html)\[[6291](../source/thing.t.html#6291)\]



*no description available*



<span id="cannotBurnWithMsg"></span>

`cannotBurnWithMsg`

[thing.t](../file/thing.t.html)\[[6293](../source/thing.t.html#6293)\]



*no description available*



<span id="cannotCleanMsg"></span>

`cannotCleanMsg`

[thing.t](../file/thing.t.html)\[[7053](../source/thing.t.html#7053)\]



*no description available*



<span id="cannotCleanWithMsg"></span>

`cannotCleanWithMsg`

[thing.t](../file/thing.t.html)\[[7119](../source/thing.t.html#7119)\]



*no description available*



<span id="cannotClimbDownMsg"></span>

`cannotClimbDownMsg`

[thing.t](../file/thing.t.html)\[[6397](../source/thing.t.html#6397)\]



*no description available*



<span id="cannotClimbMsg"></span>

`cannotClimbMsg`

[thing.t](../file/thing.t.html)\[[6382](../source/thing.t.html#6382)\]



*no description available*



<span id="cannotCloseMsg"></span>

`cannotCloseMsg`

[thing.t](../file/thing.t.html)\[[4837](../source/thing.t.html#4837)\]



*no description available*



<span id="cannotConsultMsg"></span>

`cannotConsultMsg`

[thing.t](../file/thing.t.html)\[[8121](../source/thing.t.html#8121)\]



*no description available*



<span id="cannotCutMsg"></span>

`cannotCutMsg`

[thing.t](../file/thing.t.html)\[[4962](../source/thing.t.html#4962)\]



*no description available*



<span id="cannotCutWithMsg"></span>

`cannotCutWithMsg`

[thing.t](../file/thing.t.html)\[[4964](../source/thing.t.html#4964)\]



*no description available*



<span id="cannotCutWithSelfMsg"></span>

`cannotCutWithSelfMsg`

[thing.t](../file/thing.t.html)\[[4966](../source/thing.t.html#4966)\]



*no description available*



<span id="cannotDetachFromMsg"></span>

`cannotDetachFromMsg`

[thing.t](../file/thing.t.html)\[[7641](../source/thing.t.html#7641)\]



*no description available*



<span id="cannotDetachFromSelfMsg"></span>

`cannotDetachFromSelfMsg`

[thing.t](../file/thing.t.html)\[[7644](../source/thing.t.html#7644)\]



*no description available*



<span id="cannotDetachMsg"></span>

`cannotDetachMsg`

[thing.t](../file/thing.t.html)\[[7612](../source/thing.t.html#7612)\]



*no description available*



<span id="cannotDigMsg"></span>

`cannotDigMsg`

[thing.t](../file/thing.t.html)\[[7174](../source/thing.t.html#7174)\]



*no description available*



<span id="cannotDigWithMsg"></span>

`cannotDigWithMsg`

[thing.t](../file/thing.t.html)\[[7176](../source/thing.t.html#7176)\]



*no description available*



<span id="cannotDigWithSelfMsg"></span>

`cannotDigWithSelfMsg`

[thing.t](../file/thing.t.html)\[[7178](../source/thing.t.html#7178)\]



*no description available*



<span id="cannotDoffMsg"></span>

`cannotDoffMsg`

[thing.t](../file/thing.t.html)\[[6352](../source/thing.t.html#6352)\]



*no description available*



<span id="cannotDrinkMsg"></span>

`cannotDrinkMsg`

[thing.t](../file/thing.t.html)\[[6975](../source/thing.t.html#6975)\]



*no description available*



<span id="cannotDropMsg"></span>

`cannotDropMsg`

[thing.t](../file/thing.t.html)\[[4427](../source/thing.t.html#4427)\]



The message to display if something can't be dropped.



<span id="cannotEatMsg"></span>

`cannotEatMsg`

[thing.t](../file/thing.t.html)\[[6957](../source/thing.t.html#6957)\]



*no description available*



<span id="cannotEnterMsg"></span>

`cannotEnterMsg`

[thing.t](../file/thing.t.html)\[[6590](../source/thing.t.html#6590)\]



*no description available*



<span id="cannotEnterOnMsg"></span>

`cannotEnterOnMsg`

[thing.t](../file/thing.t.html)\[[8080](../source/thing.t.html#8080)\]



*no description available*



<span id="cannotExtinguishMsg"></span>

`cannotExtinguishMsg`

[thing.t](../file/thing.t.html)\[[6933](../source/thing.t.html#6933)\]



*no description available*



<span id="cannotFastenMsg"></span>

`cannotFastenMsg`

[thing.t](../file/thing.t.html)\[[7685](../source/thing.t.html#7685)\]



*no description available*



<span id="cannotFastenToMsg"></span>

`cannotFastenToMsg`

[thing.t](../file/thing.t.html)\[[7718](../source/thing.t.html#7718)\]



*no description available*



<span id="cannotFastenToSelfMsg"></span>

`cannotFastenToSelfMsg`

[thing.t](../file/thing.t.html)\[[7721](../source/thing.t.html#7721)\]



*no description available*



<span id="cannotFeelMsg"></span>

`cannotFeelMsg`

[thing.t](../file/thing.t.html)\[[4132](../source/thing.t.html#4132)\]



*no description available*



<span id="cannotFlipMsg"></span>

`cannotFlipMsg`

[thing.t](../file/thing.t.html)\[[6249](../source/thing.t.html#6249)\]



*no description available*



<span id="cannotFollowMsg"></span>

`cannotFollowMsg`

[thing.t](../file/thing.t.html)\[[4522](../source/thing.t.html#4522)\]



*no description available*



<span id="cannotFollowSelfMsg"></span>

`cannotFollowSelfMsg`

[thing.t](../file/thing.t.html)\[[4525](../source/thing.t.html#4525)\]



*no description available*



<span id="cannotGetInCarriedMsg"></span>

`cannotGetInCarriedMsg`

[thing.t](../file/thing.t.html)\[[6594](../source/thing.t.html#6594)\]



*no description available*



<span id="cannotGetOnCarriedMsg"></span>

`cannotGetOnCarriedMsg`

[thing.t](../file/thing.t.html)\[[6461](../source/thing.t.html#6461)\]



*no description available*



<span id="cannotGiveToMsg"></span>

`cannotGiveToMsg`

[thing.t](../file/thing.t.html)\[[8997](../source/thing.t.html#8997)\]



*no description available*



<span id="cannotGiveToSelfMsg"></span>

`cannotGiveToSelfMsg`

[thing.t](../file/thing.t.html)\[[9000](../source/thing.t.html#9000)\]



*no description available*



<span id="cannotGoAlongMsg"></span>

`cannotGoAlongMsg`

[thing.t](../file/thing.t.html)\[[5343](../source/thing.t.html#5343)\]



*no description available*



<span id="cannotGoNearThereMsg"></span>

`cannotGoNearThereMsg`

[thing.t](../file/thing.t.html)\[[9195](../source/thing.t.html#9195)\]



*no description available*



<span id="cannotGoThroughMsg"></span>

`cannotGoThroughMsg`

[thing.t](../file/thing.t.html)\[[5326](../source/thing.t.html#5326)\]



*no description available*



<span id="cannotJumpOffMsg"></span>

`cannotJumpOffMsg`

[thing.t](../file/thing.t.html)\[[7979](../source/thing.t.html#7979)\]



Jumping off something has much the same effect as getting off it, i.e.
moving the actor to our exitLocation.



<span id="cannotJumpOverMsg"></span>

`cannotJumpOverMsg`

[thing.t](../file/thing.t.html)\[[8000](../source/thing.t.html#8000)\]



*no description available*



<span id="cannotKissMsg"></span>

`cannotKissMsg`

[thing.t](../file/thing.t.html)\[[7932](../source/thing.t.html#7932)\]



*no description available*



<span id="cannotLieInMsg"></span>

`cannotLieInMsg`

[postures.t](../file/postures.t.html)\[[463](../source/postures.t.html#463)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="cannotLieOnMsg"></span>

`cannotLieOnMsg`

[thing.t](../file/thing.t.html)\[[6546](../source/thing.t.html#6546)\]



*no description available*



<span id="cannotLightMsg"></span>

`cannotLightMsg`

[thing.t](../file/thing.t.html)\[[6891](../source/thing.t.html#6891)\]



*no description available*



<span id="cannotLockWithMsg"></span>

`cannotLockWithMsg`

[thing.t](../file/thing.t.html)\[[5920](../source/thing.t.html#5920)\]



*no description available*



<span id="cannotLockWithSelfMsg"></span>

`cannotLockWithSelfMsg`

[thing.t](../file/thing.t.html)\[[5923](../source/thing.t.html#5923)\]



*no description available*



<span id="cannotLookBehindMsg"></span>

`cannotLookBehindMsg`

[thing.t](../file/thing.t.html)\[[5279](../source/thing.t.html#5279)\]



*no description available*



<span id="cannotLookThroughMsg"></span>

`cannotLookThroughMsg`

[thing.t](../file/thing.t.html)\[[5306](../source/thing.t.html#5306)\]



*no description available*



<span id="cannotLookUnderMsg"></span>

`cannotLookUnderMsg`

[thing.t](../file/thing.t.html)\[[5183](../source/thing.t.html#5183)\]



*no description available*



<span id="cannotMoveMsg"></span>

`cannotMoveMsg`

[thing.t](../file/thing.t.html)\[[6736](../source/thing.t.html#6736)\]



*no description available*



<span id="cannotMoveToMsg"></span>

`cannotMoveToMsg`

[thing.t](../file/thing.t.html)\[[6855](../source/thing.t.html#6855)\]



*no description available*



<span id="cannotMoveToSelfMsg"></span>

`cannotMoveToSelfMsg`

[thing.t](../file/thing.t.html)\[[6858](../source/thing.t.html#6858)\]



*no description available*



<span id="cannotMoveWithMsg"></span>

`cannotMoveWithMsg`

[thing.t](../file/thing.t.html)\[[6783](../source/thing.t.html#6783)\]



*no description available*



<span id="cannotMoveWithSelfMsg"></span>

`cannotMoveWithSelfMsg`

[thing.t](../file/thing.t.html)\[[6786](../source/thing.t.html#6786)\]



*no description available*



<span id="cannotOpenMsg"></span>

`cannotOpenMsg`

[thing.t](../file/thing.t.html)\[[4794](../source/thing.t.html#4794)\]



*no description available*



<span id="cannotPlugIntoMsg"></span>

`cannotPlugIntoMsg`

[thing.t](../file/thing.t.html)\[[7821](../source/thing.t.html#7821)\]



*no description available*



<span id="cannotPlugIntoSelfMsg"></span>

`cannotPlugIntoSelfMsg`

[thing.t](../file/thing.t.html)\[[7819](../source/thing.t.html#7819)\]



*no description available*



<span id="cannotPlugMsg"></span>

`cannotPlugMsg`

[thing.t](../file/thing.t.html)\[[7817](../source/thing.t.html#7817)\]



*no description available*



<span id="cannotPourIntoMsg"></span>

`cannotPourIntoMsg`

[thing.t](../file/thing.t.html)\[[8253](../source/thing.t.html#8253)\]



*no description available*



<span id="cannotPourIntoSelfMsg"></span>

`cannotPourIntoSelfMsg`

[thing.t](../file/thing.t.html)\[[8251](../source/thing.t.html#8251)\]



*no description available*



<span id="cannotPourMsg"></span>

`cannotPourMsg`

[thing.t](../file/thing.t.html)\[[8247](../source/thing.t.html#8247)\]



*no description available*



<span id="cannotPourOntoMsg"></span>

`cannotPourOntoMsg`

[thing.t](../file/thing.t.html)\[[8255](../source/thing.t.html#8255)\]



*no description available*



<span id="cannotPourOntoSelfMsg"></span>

`cannotPourOntoSelfMsg`

[thing.t](../file/thing.t.html)\[[8249](../source/thing.t.html#8249)\]



*no description available*



<span id="cannotPullMsg"></span>

`cannotPullMsg`

[thing.t](../file/thing.t.html)\[[5384](../source/thing.t.html#5384)\]



*no description available*



<span id="cannotPurloinContainerMsg"></span>

`cannotPurloinContainerMsg`

[thing.t](../file/thing.t.html)\[[9166](../source/thing.t.html#9166)\]



*no description available*



<span id="cannotPurloinRoomMsg"></span>

`cannotPurloinRoomMsg`

[thing.t](../file/thing.t.html)\[[9164](../source/thing.t.html#9164)\]



*no description available*



<span id="cannotPurloinSelfMsg"></span>

`cannotPurloinSelfMsg`

[thing.t](../file/thing.t.html)\[[9162](../source/thing.t.html#9162)\]



Note that the player char has seen the purloined item. Not doing this
can make it appear that the player character doesn't know about an
object that's in his/her inventory.



<span id="cannotPushDownMsg"></span>

`cannotPushDownMsg`

[thing.t](../file/thing.t.html)\[[8839](../source/thing.t.html#8839)\]



*no description available*



<span id="cannotPushIntoMsg"></span>

`cannotPushIntoMsg`

[thing.t](../file/thing.t.html)\[[8751](../source/thing.t.html#8751)\]



*no description available*



<span id="cannotPushMsg"></span>

`cannotPushMsg`

[thing.t](../file/thing.t.html)\[[5362](../source/thing.t.html#5362)\]



*no description available*



<span id="cannotPushOwnContainerMsg"></span>

`cannotPushOwnContainerMsg`

[thing.t](../file/thing.t.html)\[[8403](../source/thing.t.html#8403)\]



*no description available*



<span id="cannotPushThroughMsg"></span>

`cannotPushThroughMsg`

[thing.t](../file/thing.t.html)\[[8705](../source/thing.t.html#8705)\]



*no description available*



<span id="cannotPushUpMsg"></span>

`cannotPushUpMsg`

[thing.t](../file/thing.t.html)\[[8815](../source/thing.t.html#8815)\]



*no description available*



<span id="cannotPushViaSelfMsg"></span>

`cannotPushViaSelfMsg`

[thing.t](../file/thing.t.html)\[[8406](../source/thing.t.html#8406)\]



*no description available*



<span id="cannotPutBehindMsg"></span>

`cannotPutBehindMsg`

[thing.t](../file/thing.t.html)\[[5744](../source/thing.t.html#5744)\]



If we're actually a rear-like object (i.e. if our contType is Behind)
then something put behind us can be moved inside us. Otherwise, all we
can do with something put behind us is to add it to our hiddenBehind
list and move it off-stage.



<span id="cannotPutInMsg"></span>

`cannotPutInMsg`

[thing.t](../file/thing.t.html)\[[5558](../source/thing.t.html#5558)\]



If we're actually a container-like object (i.e. if our contType is In)
then something put in us can be moved inside us. Otherwise, all we can
do with something put in us is to add it to our hiddenIn list and move
it off-stage.



<span id="cannotPutInSelfMsg"></span>

`cannotPutInSelfMsg`

[thing.t](../file/thing.t.html)\[[5437](../source/thing.t.html#5437)\]



*no description available*



<span id="cannotPutMsg"></span>

`cannotPutMsg`

[thing.t](../file/thing.t.html)\[[5394](../source/thing.t.html#5394)\]



The most usual reason why we can't put something somewhere is that we
can't pick it up in the first place, so by default we'll just copy
cannotPutMsg from cannotTakeMsg.



<span id="cannotPutOnMsg"></span>

`cannotPutOnMsg`

[thing.t](../file/thing.t.html)\[[5467](../source/thing.t.html#5467)\]



*no description available*



<span id="cannotPutUnderMsg"></span>

`cannotPutUnderMsg`

[thing.t](../file/thing.t.html)\[[5651](../source/thing.t.html#5651)\]



If we're actually an underside-like object (i.e. if our contType is
Under) then something put under us can be moved inside us. Otherwise,
all we can do with something put under us is to add it to our
hiddenUnder list and move it off-stage.



<span id="cannotReadMsg"></span>

`cannotReadMsg`

[thing.t](../file/thing.t.html)\[[4497](../source/thing.t.html#4497)\]



*no description available*



<span id="cannotRemoveMsg"></span>

`cannotRemoveMsg`

[thing.t](../file/thing.t.html)\[[6701](../source/thing.t.html#6701)\]



Note that this message should never display in an English-language game
since removeDoer will intercept the action before it gets to this point.



<span id="cannotScrewMsg"></span>

`cannotScrewMsg`

[thing.t](../file/thing.t.html)\[[8343](../source/thing.t.html#8343)\]



*no description available*



<span id="cannotScrewWithMsg"></span>

`cannotScrewWithMsg`

[thing.t](../file/thing.t.html)\[[8345](../source/thing.t.html#8345)\]



*no description available*



<span id="cannotScrewWithSelfMsg"></span>

`cannotScrewWithSelfMsg`

[thing.t](../file/thing.t.html)\[[8347](../source/thing.t.html#8347)\]



*no description available*



<span id="cannotSetMsg"></span>

`cannotSetMsg`

[thing.t](../file/thing.t.html)\[[8021](../source/thing.t.html#8021)\]



*no description available*



<span id="cannotSetToMsg"></span>

`cannotSetToMsg`

[thing.t](../file/thing.t.html)\[[7419](../source/thing.t.html#7419)\]



*no description available*



<span id="cannotShowToMsg"></span>

`cannotShowToMsg`

[thing.t](../file/thing.t.html)\[[9028](../source/thing.t.html#9028)\]



*no description available*



<span id="cannotShowToSelfMsg"></span>

`cannotShowToSelfMsg`

[thing.t](../file/thing.t.html)\[[9031](../source/thing.t.html#9031)\]



*no description available*



<span id="cannotSitInMsg"></span>

`cannotSitInMsg`

[postures.t](../file/postures.t.html)\[[431](../source/postures.t.html#431)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="cannotSitOnMsg"></span>

`cannotSitOnMsg`

[thing.t](../file/thing.t.html)\[[6544](../source/thing.t.html#6544)\]



*no description available*



<span id="cannotSmellMsg"></span>

`cannotSmellMsg`

[thing.t](../file/thing.t.html)\[[4059](../source/thing.t.html#4059)\]



*no description available*



<span id="cannotStandInMsg"></span>

`cannotStandInMsg`

[postures.t](../file/postures.t.html)\[[396](../source/postures.t.html#396)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="cannotStandOnMsg"></span>

`cannotStandOnMsg`

[thing.t](../file/thing.t.html)\[[6542](../source/thing.t.html#6542)\]



*no description available*



<span id="cannotTakeFromSelfMsg"></span>

`cannotTakeFromSelfMsg`

[thing.t](../file/thing.t.html)\[[7224](../source/thing.t.html#7224)\]



*no description available*



<span id="cannotTakeMsg"></span>

`cannotTakeMsg`

[thing.t](../file/thing.t.html)\[[4233](../source/thing.t.html#4233)\]



Report that we've been taken. Note that if the action causes several
items to be taken, this method will only be called on the final item,
and will need to report on all the items taken.



<span id="cannotTakeMyContainerMsg"></span>

`cannotTakeMyContainerMsg`

[thing.t](../file/thing.t.html)\[[4239](../source/thing.t.html#4239)\]



*no description available*



<span id="cannotTakeSelfMsg"></span>

`cannotTakeSelfMsg`

[thing.t](../file/thing.t.html)\[[4241](../source/thing.t.html#4241)\]



*no description available*



<span id="cannotTalkToMsg"></span>

`cannotTalkToMsg`

[thing.t](../file/thing.t.html)\[[8955](../source/thing.t.html#8955)\]



*no description available*



<span id="cannotTalkToSelfMsg"></span>

`cannotTalkToSelfMsg`

[thing.t](../file/thing.t.html)\[[8958](../source/thing.t.html#8958)\]



*no description available*



<span id="cannotTasteMsg"></span>

`cannotTasteMsg`

[thing.t](../file/thing.t.html)\[[4102](../source/thing.t.html#4102)\]



*no description available*



<span id="cannotThrowAtMsg"></span>

`cannotThrowAtMsg`

[thing.t](../file/thing.t.html)\[[7292](../source/thing.t.html#7292)\]



Particular instances will nearly always need to override with a less
generic and more plausible refusal message.



<span id="cannotThrowAtSelfMsg"></span>

`cannotThrowAtSelfMsg`

[thing.t](../file/thing.t.html)\[[7295](../source/thing.t.html#7295)\]



*no description available*



<span id="cannotThrowMsg"></span>

`cannotThrowMsg`

[thing.t](../file/thing.t.html)\[[4679](../source/thing.t.html#4679)\]



The default result of throwing something in a compass direction is that
it lands in the dropLocation of its outermost room.



<span id="cannotThrowToMsg"></span>

`cannotThrowToMsg`

[thing.t](../file/thing.t.html)\[[7327](../source/thing.t.html#7327)\]



*no description available*



<span id="cannotThrowToSelfMsg"></span>

`cannotThrowToSelfMsg`

[thing.t](../file/thing.t.html)\[[7330](../source/thing.t.html#7330)\]



*no description available*



<span id="cannotTurnMsg"></span>

`cannotTurnMsg`

[thing.t](../file/thing.t.html)\[[4871](../source/thing.t.html#4871)\]



*no description available*



<span id="cannotTurnToMsg"></span>

`cannotTurnToMsg`

[thing.t](../file/thing.t.html)\[[7381](../source/thing.t.html#7381)\]



*no description available*



<span id="cannotTurnWithMsg"></span>

`cannotTurnWithMsg`

[thing.t](../file/thing.t.html)\[[4915](../source/thing.t.html#4915)\]



*no description available*



<span id="cannotTurnWithSelfMsg"></span>

`cannotTurnWithSelfMsg`

[thing.t](../file/thing.t.html)\[[4918](../source/thing.t.html#4918)\]



*no description available*



<span id="cannotTypeOnMsg"></span>

`cannotTypeOnMsg`

[thing.t](../file/thing.t.html)\[[8053](../source/thing.t.html#8053)\]



*no description available*



<span id="cannotUnfastenFromMsg"></span>

`cannotUnfastenFromMsg`

[thing.t](../file/thing.t.html)\[[7770](../source/thing.t.html#7770)\]



*no description available*



<span id="cannotUnfastenFromSelfMsg"></span>

`cannotUnfastenFromSelfMsg`

[thing.t](../file/thing.t.html)\[[7773](../source/thing.t.html#7773)\]



*no description available*



<span id="cannotUnfastenMsg"></span>

`cannotUnfastenMsg`

[thing.t](../file/thing.t.html)\[[7767](../source/thing.t.html#7767)\]



*no description available*



<span id="cannotUnlockWithMsg"></span>

`cannotUnlockWithMsg`

[thing.t](../file/thing.t.html)\[[5850](../source/thing.t.html#5850)\]



*no description available*



<span id="cannotUnlockWithSelfMsg"></span>

`cannotUnlockWithSelfMsg`

[thing.t](../file/thing.t.html)\[[5853](../source/thing.t.html#5853)\]



*no description available*



<span id="cannotUnplugFromMsg"></span>

`cannotUnplugFromMsg`

[thing.t](../file/thing.t.html)\[[7860](../source/thing.t.html#7860)\]



*no description available*



<span id="cannotUnplugFromSelfMsg"></span>

`cannotUnplugFromSelfMsg`

[thing.t](../file/thing.t.html)\[[7857](../source/thing.t.html#7857)\]



*no description available*



<span id="cannotUnplugMsg"></span>

`cannotUnplugMsg`

[thing.t](../file/thing.t.html)\[[7854](../source/thing.t.html#7854)\]



*no description available*



<span id="cannotUnscrewMsg"></span>

`cannotUnscrewMsg`

[thing.t](../file/thing.t.html)\[[8348](../source/thing.t.html#8348)\]



*no description available*



<span id="cannotUnscrewWithMsg"></span>

`cannotUnscrewWithMsg`

[thing.t](../file/thing.t.html)\[[8350](../source/thing.t.html#8350)\]



*no description available*



<span id="cannotUnscrewWithSelfMsg"></span>

`cannotUnscrewWithSelfMsg`

[thing.t](../file/thing.t.html)\[[8352](../source/thing.t.html#8352)\]



*no description available*



<span id="cannotWearMsg"></span>

`cannotWearMsg`

[thing.t](../file/thing.t.html)\[[6317](../source/thing.t.html#6317)\]



*no description available*



<span id="cannotWriteOnMsg"></span>

`cannotWriteOnMsg`

[thing.t](../file/thing.t.html)\[[8099](../source/thing.t.html#8099)\]



*no description available*



<span id="canPlugIntoMe"></span>

`canPlugIntoMe`

[thing.t](../file/thing.t.html)\[[7782](../source/thing.t.html#7782)\]



*no description available*



<span id="canPourIntoMe"></span>

`canPourIntoMe`

[thing.t](../file/thing.t.html)\[[8219](../source/thing.t.html#8219)\]



Presumably it's possible by default to pour something into me if I'm a
container; but this could be overridden simply to true for objects like
the sea or a river.



<span id="canPourOntoMe"></span>

`canPourOntoMe`

[thing.t](../file/thing.t.html)\[[8172](../source/thing.t.html#8172)\]



Most things can probably have something poured onto them in principle,
though we might want to prevent it in practice. The canPourOntoMe
property controls whether it's possible to pour onto this thing.



<span id="canPullTravel"></span>

`canPullTravel`

[thing.t](../file/thing.t.html)\[[8419](../source/thing.t.html#8419)\]



Normally we don't distinguish PushTravel from PullTravel, but if we want
something to be pushable between rooms but not pullable, or vice versa,
we can set these to different values.



<span id="canPushTravel"></span>

`canPushTravel`

[thing.t](../file/thing.t.html)\[[8412](../source/thing.t.html#8412)\]



By default we can't push travel most things. Push Travel means pushing
an object from one place to another and traveling with it.



<span id="canPutBehindMe"></span>

`canPutBehindMe`

[thing.t](../file/thing.t.html)\[[2347](../source/thing.t.html#2347)\]



Flag: can under objects be placed behind us? By default they can if our
contType is Behind. If this is set to true and our contType is not
Behind, anything placed behind us will be treated as hidden behind.



<span id="canPutInMe"></span>

`canPutInMe`

[thing.t](../file/thing.t.html)\[[2354](../source/thing.t.html#2354)\]



Flag: can under objects be placed inside us? By default they can if our
contType is In. If this is set to true and our contType is not In,
anything placed in us will be treated as hidden in.



<span id="canPutUnderMe"></span>

`canPutUnderMe`

[thing.t](../file/thing.t.html)\[[2340](../source/thing.t.html#2340)\]



Flag: can under objects be placed under us? By default they can if our
contType is Under. If this is set to true and our contType is not Under,
anything placed under us will be treated as hidden under.



<span id="canReachIn"></span>

`canReachIn`

[thing.t](../file/thing.t.html)\[[3433](../source/thing.t.html#3433)\]



Can we reach in from my exterior to my interior? That is, can an
observer outside this object reach something inside of it? By default,
we can reach in if we're non-enclosing.



<span id="canReachOut"></span>

`canReachOut`

[thing.t](../file/thing.t.html)\[[3426](../source/thing.t.html#3426)\]



Can we reach out from my interior to my exterior? That is, can an
observer inside this object reach something outside of it? By default,
we can reach out if we're non-enclosing.



<span id="canScrewWithMe"></span>

`canScrewWithMe`

[thing.t](../file/thing.t.html)\[[8267](../source/thing.t.html#8267)\]



Most things can't be used to screw other things with.



<span id="canSeeIn"></span>

`canSeeIn`

[thing.t](../file/thing.t.html)\[[3371](../source/thing.t.html#3371)\]



Can we see in from my exterior to my interior? That is, can an observer
outside of this object see things located within it? By default, we can
see in from outside if we're transparent or we're non-enclosing.



<span id="canSeeOut"></span>

`canSeeOut`

[thing.t](../file/thing.t.html)\[[3379](../source/thing.t.html#3379)\]



Can we see out from my interior to my exterior? That is, can an observer
inside this object see things located outside of it? By default, we can
see out from inside if we're transparent or we're non-enclosing.



<span id="canSetMeTo"></span>

`canSetMeTo`

[thing.t](../file/thing.t.html)\[[7384](../source/thing.t.html#7384)\]



*no description available*



<span id="canSitInMe"></span>

`canSitInMe`

[postures.t](../file/postures.t.html)\[[133](../source/postures.t.html#133)\]



*no description available*



<span id="canSitOnMe"></span>

`canSitOnMe`

[thing.t](../file/thing.t.html)\[[6482](../source/thing.t.html#6482)\]



Although we don't track postures as such, some objects may be better
choices than other for sitting on (e.g. chairs), lying on (e.g. beds)
and standing on (e.g. rugs), so we allow these to be tested for
individually at the verify stage.

Note that none of these three properties (canSitOnMe, canLieOnMe,
canStandOnMe) should normally be overridden to simply true, since they
cannot make it possible to sit, lie or stand on something for which
isBoardable is not true (or which contType is not On).



<span id="canSmellIn"></span>

`canSmellIn`

[thing.t](../file/thing.t.html)\[[3411](../source/thing.t.html#3411)\]



Can we smell in (from an observer on my exterior to an odor source on my
interior)? By default, we can smell in if we're non-enclosing, since
most solid materials aren't very permeable to scents (at human
sensitivities, at least).



<span id="canSmellOut"></span>

`canSmellOut`

[thing.t](../file/thing.t.html)\[[3419](../source/thing.t.html#3419)\]



Can we smell out (from an observer on my interior to an odor source on
my exterior)? By default, we can smell out if we're non-enclosing, since
most solid materials aren't very permeable to scents (at human
sensitivities, at least).



<span id="canStandInMe"></span>

`canStandInMe`

[postures.t](../file/postures.t.html)\[[132](../source/postures.t.html#132)\]



By default we can't stand, sit or lie in anything. \[POSTURES
EXTENSION\]



<span id="canStandOnMe"></span>

`canStandOnMe`

[thing.t](../file/thing.t.html)\[[6484](../source/thing.t.html#6484)\]



*no description available*



<span id="canSupply"></span>

`canSupply`

[thing.t](../file/thing.t.html)\[[7230](../source/thing.t.html#7230)\]



Flag, can we supply more items from us that are currently in scope? By
default we can't; but a DispensingCollective may be able to.



<span id="canTalkToMe"></span>

`canTalkToMe`

[thing.t](../file/thing.t.html)\[[8858](../source/thing.t.html#8858)\]



We don't bother to define isAskable etc. properties since we assume that
no inanimate object can be conversed with, and that game code will use
the Actor class to allow conversation. In any case since there's never
any difficult in talking about oneself, the various illogicalSelf checks
aren't needed.

Indeed, the handling of conversational commands on Thing is minimal;
they are simply ruled out at the verify stage, since most Things can't
converse. The implementation of these actions that allows conversation
to take place is on the Actor class. We do however define a canTalkToMe
property so that Actor can use the verify handling defined on Thing by
just overriding it.

Things can't be talked to, so game code shouldn't normally override this
property; it's there to be overridden on the Actor class.



<span id="canThrowAtMe"></span>

`canThrowAtMe`

[thing.t](../file/thing.t.html)\[[7256](../source/thing.t.html#7256)\]



Most objects can the target of a throw, but it's conceivable that some
might be obviously unsuitable



<span id="canThrowToMe"></span>

`canThrowToMe`

[thing.t](../file/thing.t.html)\[[7309](../source/thing.t.html#7309)\]



Most objects cannot have things thrown to then, since this would imply
that they might be able to catch them, which only animate objects can
do.



<span id="canTurnMeTo"></span>

`canTurnMeTo`

[thing.t](../file/thing.t.html)\[[7335](../source/thing.t.html#7335)\]



*no description available*



<span id="canTurnWithMe"></span>

`canTurnWithMe`

[thing.t](../file/thing.t.html)\[[4898](../source/thing.t.html#4898)\]



By default things can't be used to turn other things with



<span id="canTypeOnMe"></span>

`canTypeOnMe`

[thing.t](../file/thing.t.html)\[[8024](../source/thing.t.html#8024)\]



Most things can't be typed on.



<span id="canUnfastenFromMe"></span>

`canUnfastenFromMe`

[thing.t](../file/thing.t.html)\[[7754](../source/thing.t.html#7754)\]



*no description available*



<span id="canUnlockWithMe"></span>

`canUnlockWithMe`

[thing.t](../file/thing.t.html)\[[5833](../source/thing.t.html#5833)\]



Most things can't be used to unlock with. In practice there's probably
little point in overriding this property since if you do want to use
something to unlock other things with, you'd use the Key class.



<span id="canUnplugFromMe"></span>

`canUnplugFromMe`

[thing.t](../file/thing.t.html)\[[7824](../source/thing.t.html#7824)\]



*no description available*



<span id="canUnscrewWithMe"></span>

`canUnscrewWithMe`

[thing.t](../file/thing.t.html)\[[8308](../source/thing.t.html#8308)\]



*no description available*



<span id="canWriteOnMe"></span>

`canWriteOnMe`

[thing.t](../file/thing.t.html)\[[8084](../source/thing.t.html#8084)\]



Most things can't be written on.



<span id="checkAttackMsg"></span>

`checkAttackMsg`

[thing.t](../file/thing.t.html)\[[4565](../source/thing.t.html#4565)\]



If we want Attack to fail at the check stage we can supply a message
explaining why.



<span id="checkFeelMsg"></span>

`checkFeelMsg`

[thing.t](../file/thing.t.html)\[[4140](../source/thing.t.html#4140)\]



This property can be defined to display a message at the check stage
(and so stop the FEEL action there). Normally checkFeelMsg would be
defined as a double-quoted string, but it can also be defined as a
double-quoted string or a method that displays some text.



<span id="checkKissMsg"></span>

`checkKissMsg`

[thing.t](../file/thing.t.html)\[[7939](../source/thing.t.html#7939)\]



If we want Kissing to fail at the check stage we can supply a message
here explaining why. This is most simply given as a single-quoted
string, but a double-quoted string or method will also work.



<span id="circularlyInMsg"></span>

`circularlyInMsg`

[thing.t](../file/thing.t.html)\[[5434](../source/thing.t.html#5434)\]



*no description available*



<span id="collectiveGroups"></span>

`collectiveGroups`

[thing.t](../file/thing.t.html)\[[3183](../source/thing.t.html#3183)\]



CollectiveGroup, or a list of CollectiveGroups, to which this item
belongs.



<span id="contents"></span>

`contents`

[thing.t](../file/thing.t.html)\[[2403](../source/thing.t.html#2403)\]



The list of things directly contained by this object



<span id="contentsListed"></span>

`contentsListed`

[thing.t](../file/thing.t.html)\[[1917](../source/thing.t.html#1917)\]



Flag: should this item's contents be listed? This can be used to control
both contentsListedInLook and contentsListedInExamine.



<span id="contentsListedInExamine"></span>

`contentsListedInExamine`

[thing.t](../file/thing.t.html)\[[1929](../source/thing.t.html#1929)\]



Flag: should this item's contents be listed when its container is
examined.



<span id="contentsListedInLook"></span>

`contentsListedInLook`

[thing.t](../file/thing.t.html)\[[1923](../source/thing.t.html#1923)\]



Flag: should this item's contents be listed as part of a room
description (when looking around).



<span id="contentsListedInSearch"></span>

`contentsListedInSearch`

[thing.t](../file/thing.t.html)\[[1936](../source/thing.t.html#1936)\]



Flag, should this item's contents be listed when it is searched (by
default this is simply true, since it would be odd to have a container
that failed to reveal its contents when searched).



<span id="contType"></span>

`contType`

[thing.t](../file/thing.t.html)\[[2399](../source/thing.t.html#2399)\]



This object's containment type - that is, the locType for direct
children. This is given as one of the spatial relation types (In, On,
Under, Behind etc).



<span id="currentInterlocutor"></span>

`currentInterlocutor`

[thing.t](../file/thing.t.html)\[[3690](../source/thing.t.html#3690)\]



The currentInterlocutor is the Actor this object is currently in
conversation with. This property is only relevant on gPlayerChar, but it
is defined here rather than on Actor since the player char can be of
kind Thing.



<span id="curSetting"></span>

`curSetting`

[thing.t](../file/thing.t.html)\[[7378](../source/thing.t.html#7378)\]



The value we're currently set to.



<span id="darkName"></span>

`darkName`

[thing.t](../file/thing.t.html)\[[1017](../source/thing.t.html#1017)\]



The name to display at the head of a room description when it's dark



<span id="decorationActions"></span>

`decorationActions`

[thing.t](../file/thing.t.html)\[[3916](../source/thing.t.html#3916)\]



The list of actions this object will respond to specifically if
isDecoration is true. All other actions will be handled by
dobjFor(Default) and/or iobjFor(Default). Game code can override this
list (usually to expand it) for decorations that are required to handle
additional actions.

If we're compiling for debugging, it will be useful to allow the GONEAR
command with Decorations for testing purposes, but this can't be
included in a release build without causing a compilation error, so we
define the decorationActions property with different lists of actions
depending on whether we're compiling for debugging or release.



<span id="decorationActions"></span>

`decorationActions`

[thing.t](../file/thing.t.html)\[[3918](../source/thing.t.html#3918)\]



*no description available*



<span id="defaultPosture"></span>

`defaultPosture`

[postures.t](../file/postures.t.html)\[[129](../source/postures.t.html#129)\]



The posture that's adopted by default by an actor entering or boarding
this this. \[DEFINED IN POSTURES EXTENSION\]



<span id="desc"></span>

`desc`

[thing.t](../file/thing.t.html)\[[1638](../source/thing.t.html#1638)\]



The description of this Thing that's displayed when it's examined.
Normally this would be defined as a double-quoted string, but in more
complicated cases you could also define it as a method that displays
some text.



<span id="directlyHeld"></span>

`directlyHeld`

[thing.t](../file/thing.t.html)\[[2317](../source/thing.t.html#2317)\]



Get everything I'm directly holding, which is everything in my immediate
contents which is neither fixed in place nor being worn.



<span id="directlyIn"></span>

`directlyIn`

[thing.t](../file/thing.t.html)\[[3295](../source/thing.t.html#3295)\]



get everything that's directly in me



<span id="directlyWorn"></span>

`directlyWorn`

[thing.t](../file/thing.t.html)\[[2331](../source/thing.t.html#2331)\]



get everything I'm directly wearing



<span id="distinguishByContents"></span>

`distinguishByContents`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[2391](../source/thing.t.html#2391)\]



Can I be distinguished in parser messages by my contents? If so, we can
be distinguished (in parser messages) from similar objects by our
contents, or lack thereof: "bucket of water" vs "empty bucket". If this
is true, our nominalContents property determines the contents we display
for this.



<span id="dontNeedCleaningObjMsg"></span>

`dontNeedCleaningObjMsg`

[thing.t](../file/thing.t.html)\[[7063](../source/thing.t.html#7063)\]



*no description available*



<span id="dropItemsBehind"></span>

`dropItemsBehind`

[thing.t](../file/thing.t.html)\[[4247](../source/thing.t.html#4247)\]



Flag, should any items behind me be left behind when I'm moved; by
default, they should.



<span id="dropItemsUnder"></span>

`dropItemsUnder`

[thing.t](../file/thing.t.html)\[[4253](../source/thing.t.html#4253)\]



Flag, should any items behind me be left behind when I'm moved; by
default, they should.



<span id="dropLocation"></span>

`dropLocation`

[thing.t](../file/thing.t.html)\[[4430](../source/thing.t.html#4430)\]



The location in which something dropped in me should land.



<span id="enclosing"></span>

`enclosing`

[thing.t](../file/thing.t.html)\[[3363](../source/thing.t.html#3363)\]



Do we fully enclose our interior contents (true), or only partially
(nil)? By default, we assume that our contents are fully enclosed. This
can be set to nil for objects that represent spaces that are open on one
side, such as a nook in a rock or a create without a lid.

For an object that's sometimes fully enclosing and sometimes not, such
as a cabinet with a door that can be opened and closed, this should be
overridden with a method that figures the current value based on the
open/closed state.

Note that this only applies to our \*interior\* contents, such as
contents of location type In. Contents that are atop the object or
otherwise arranged around the exterior aren't affected by this.



<span id="examined"></span>

`examined`

[thing.t](../file/thing.t.html)\[[3606](../source/thing.t.html#3606)\]



Have we been examined? This is set to true when the player character
examines the object. For a room, LOOK AROUND counts as examination, as
does triggering a room description by traveling into the room.



<span id="examineListed"></span>

`examineListed`

[thing.t](../file/thing.t.html)\[[1906](../source/thing.t.html#1906)\]



Flag: is this item listed when its container is examined.



<span id="examineLister"></span>

`examineLister`

[thing.t](../file/thing.t.html)\[[1674](../source/thing.t.html#1674)\]



The lister to use to list an item's contents when it's examined.



<span id="exitLocation"></span>

`exitLocation`

[thing.t](../file/thing.t.html)\[[6609](../source/thing.t.html#6609)\]



Our exitLocation is the location an actor should be moved to when s/he
gets off/out of us.



<span id="extContents"></span>

`extContents`

[thing.t](../file/thing.t.html)\[[2664](../source/thing.t.html#2664)\]



Get my list of unenclosed direct contents. This is the subset of my
direct contents that have exterior location types (On, Outside, Behind,
Under).



<span id="familiar"></span>

`familiar`

[thing.t](../file/thing.t.html)\[[3637](../source/thing.t.html#3637)\]



Whether the player character knows of the existence of this object, if
if it hasn't been seen. Set to true for objects that the player
character should be familiar with at the start of play, or make true
when the PC learns of them.



<span id="feelDesc"></span>

`feelDesc`

[thing.t](../file/thing.t.html)\[[1963](../source/thing.t.html#1963)\]



The description displayed in response to a FEEL command



<span id="findHiddenDest"></span>

`findHiddenDest`

[thing.t](../file/thing.t.html)\[[4982](../source/thing.t.html#4982)\]



Where should an item that's been hidden in/under/behind something be
moved to when its found? If it's taken, move into the actor; otherwise
move it to the location of the object it's just been found
in/under/behind.



<span id="fluidName"></span>

`fluidName`

[thing.t](../file/thing.t.html)\[[8137](../source/thing.t.html#8137)\]



Sometimes we may have a container, such as an oilcan, from which we want
to pour a liquid, such as oil, and we're using the same object to do
duty for both. We can then use the fluidName property to say 'the oil'
rather than 'the oilcan' in messages that refer specifically to pouring
the liquid.



<span id="futileToAttackMsg"></span>

`futileToAttackMsg`

[thing.t](../file/thing.t.html)\[[4592](../source/thing.t.html#4592)\]



In case isAttackable is changed to true but no other handling is added,
we need to provide some kind of default report.



<span id="futileToKissMsg"></span>

`futileToKissMsg`

[thing.t](../file/thing.t.html)\[[7930](../source/thing.t.html#7930)\]



It's more logical to kiss actors, so we give the Kiss action a lower
logical rank on ordinary things.



<span id="getBulkHiddenBehind"></span>

`getBulkHiddenBehind`

[thing.t](../file/thing.t.html)\[[2226](../source/thing.t.html#2226)\]



*no description available*



<span id="getBulkHiddenIn"></span>

`getBulkHiddenIn`

[thing.t](../file/thing.t.html)\[[2225](../source/thing.t.html#2225)\]



*no description available*



<span id="getBulkHiddenUnder"></span>

`getBulkHiddenUnder`

[thing.t](../file/thing.t.html)\[[2224](../source/thing.t.html#2224)\]



The total bulk of items hidden in, under or behind this object



<span id="getFacets"></span>

`getFacets`

[thing.t](../file/thing.t.html)\[[3788](../source/thing.t.html#3788)\]



A list of objects that are facets of this object, and so can be referred
to with the same pronoun.



<span id="getOutermostRoom"></span>

`getOutermostRoom`

[thing.t](../file/thing.t.html)\[[2783](../source/thing.t.html#2783)\]



Our outermost room, i.e. the top level Room in which we are indirectly
or directly contained.



<span id="getOutToJump"></span>

`getOutToJump`

[thing.t](../file/thing.t.html)\[[7945](../source/thing.t.html#7945)\]



Flag, if this is a nested room, should an actor get out of it before
executing an intransitive Jump command. By default it should.



<span id="getWeightHiddenBehind"></span>

`getWeightHiddenBehind`

[weight.t](../file/weight.t.html)\[[143](../source/weight.t.html#143)\]



*no description available*



<span id="getWeightHiddenIn"></span>

`getWeightHiddenIn`

[weight.t](../file/weight.t.html)\[[142](../source/weight.t.html#142)\]



*no description available*



<span id="getWeightHiddenUnder"></span>

`getWeightHiddenUnder`

[weight.t](../file/weight.t.html)\[[141](../source/weight.t.html#141)\]



The total weight of items hidden in, under or behind this object
\[WEIGHT EXTENSION\]



<span id="globalParamName"></span>

`globalParamName`

[thing.t](../file/thing.t.html)\[[2000](../source/thing.t.html#2000)\]



Our globalParamName is an arbitrary string value that can be used to
refer to this thing in a message substitution parameter; for code
readability it may be a good idea to make this a string representation
of our programmatic name (where we want to define it at all).



<span id="groupOrder"></span>

`groupOrder`

[thing.t](../file/thing.t.html)\[[3177](../source/thing.t.html#3177)\]



Group order. This gives the relative order of this item within its list
group.



<span id="hearNothingMsg"></span>

`hearNothingMsg`

[thing.t](../file/thing.t.html)\[[4092](../source/thing.t.html#4092)\]



*no description available*



<span id="hiddenBehind"></span>

`hiddenBehind`

[thing.t](../file/thing.t.html)\[[2201](../source/thing.t.html#2201)\]



A list of objects that are treated as hidden behind this one. A LOOK
BEHIND command will list them and move them into the enclosing room. It
follows that objects placed in this property should not be given an
initial location. This should deal with the most common reason for
wanting items to be placed behind things (i.e. to hide them). Note, the
items in the hiddenBehind property should also be revealed when the
player moves the hiding item.



<span id="hiddenIn"></span>

`hiddenIn`

[thing.t](../file/thing.t.html)\[[2209](../source/thing.t.html#2209)\]



A list of objects that are treated as hidden inside this one. A LOOK IN
command will list them and move them into the enclosing room (or in this
one if we're a container). It follows that objects placed in this
property should not be given an initial location.



<span id="hiddenUnder"></span>

`hiddenUnder`

[thing.t](../file/thing.t.html)\[[2190](../source/thing.t.html#2190)\]



A list of objects that are treated as hidden under this one. A LOOK
UNDER command will list them and move them into the enclosing room. It
follows that objects placed in this property should not be given an
initial location. This should deal with the most common reason for
wanting items to be placed under things (i.e. to hide them). Note, the
items in the hiddenUnder property should also be revealed when the
player moves the hiding item.



<span id="illuminationThreshold"></span>

`illuminationThreshold`

[brightness.t](../file/brightness.t.html)\[[369](../source/brightness.t.html#369)\]



\[BRIGHTNESS EXTENSION\]

The illumination threshold is the available brightness (returned by the
brightnessWithin method) that needs to be exceeded in our interior to be
able to examine objects or look around or satisfy other visibility
criteris (mostly where the objVisible precondition is applies to the
current action). The default illuminationThreshold is 1, which mimics
the behaviour of both the adv3 library and the adv3Lite library in the
absence of this extension.



<span id="inDarkDesc"></span>

`inDarkDesc`

[thing.t](../file/thing.t.html)\[[2024](../source/thing.t.html#2024)\]



An optional description to be displayed instead of our normal desc and
any status information (such as our contents) if we're examined in a
dark room and visibleInDark is true. Note that if visibleInDark is nil
inDarkDesc will never be used.



<span id="indirectLockableMsg"></span>

`indirectLockableMsg`

[thing.t](../file/thing.t.html)\[[5825](../source/thing.t.html#5825)\]



*no description available*



<span id="initSpecialDesc"></span>

`initSpecialDesc`

[thing.t](../file/thing.t.html)\[[1809](../source/thing.t.html#1809)\]



A specialDesc that's shown until this item has been moved



<span id="intContents"></span>

`intContents`

[thing.t](../file/thing.t.html)\[[2657](../source/thing.t.html#2657)\]



Get my list of enclosed direct contents. This is the subset of my direct
contents that have interior location types (In).



<span id="interiorDesc"></span>

`interiorDesc`

[thing.t](../file/thing.t.html)\[[1038](../source/thing.t.html#1038)\]



The "inside" description. This is displayed when an actor LOOKS AROUND
from within this object. Note that this applies not only to top-level
rooms but also to things like chairs, platforms, and booths that can
contain an actor. By default, we simply show the ordinary EXAMINE
description (or the darkDesc if there's no illumination). Non-room
containers such as chairs or booths should usually override this to
provide the view from inside the object, which usually differs from the
ordinary EXAMINE description. For a top-level room, you don't usually
override this, since the only description needed for a room is normally
the LOOK AROUND perspective.



<span id="inventoryListed"></span>

`inventoryListed`

[thing.t](../file/thing.t.html)\[[1903](../source/thing.t.html#1903)\]



Flag: is this item listed in an inventory listing.



<span id="isAttachable"></span>

`isAttachable`

[thing.t](../file/thing.t.html)\[[7552](../source/thing.t.html#7552)\]



By default most things can't be attached to any things. The base
handling of ATTACH and DETACH on Thing merely rules them out at the
verify stage. The SimpleAttachable and NearbyAttachable classes define
in the optional attachables.t module provide fuller handling.



<span id="isAttackable"></span>

`isAttackable`

[thing.t](../file/thing.t.html)\[[4533](../source/thing.t.html#4533)\]



Although in theory we can attack almost anything, in practice there's
seldom reason to do so.



<span id="isBoardable"></span>

`isBoardable`

[thing.t](../file/thing.t.html)\[[2361](../source/thing.t.html#2361)\]



Can an actor enter (get in or on) this object. Note that for such an
action to be allowing the contType must also match the proposed action.



<span id="isBreakable"></span>

`isBreakable`

[thing.t](../file/thing.t.html)\[[4623](../source/thing.t.html#4623)\]



By default treat everything as breakable, but there are somethings that
clearly aren't like sunbeams, sounds and mountains.



<span id="isBurnable"></span>

`isBurnable`

[thing.t](../file/thing.t.html)\[[6253](../source/thing.t.html#6253)\]



By default we assume most things aren't burnable



<span id="isClean"></span>

`isClean`

[thing.t](../file/thing.t.html)\[[6986](../source/thing.t.html#6986)\]



Assume most things start out not as clean as they could be



<span id="isCleanable"></span>

`isCleanable`

[thing.t](../file/thing.t.html)\[[6983](../source/thing.t.html#6983)\]



Most things probably could be cleaned, even if they're not worth
cleaning in practice. Some things like a mountain or the moon probably
can't be cleaned and could reasonably define isCleanable = nil.



<span id="isClimbable"></span>

`isClimbable`

[thing.t](../file/thing.t.html)\[[6357](../source/thing.t.html#6357)\]



Most things can't be climbed



<span id="isCloseable"></span>

`isCloseable`

[thing.t](../file/thing.t.html)\[[4800](../source/thing.t.html#4800)\]



By default something is closeable if it's openable



<span id="isConsultable"></span>

`isConsultable`

[thing.t](../file/thing.t.html)\[[8102](../source/thing.t.html#8102)\]



Most things aren't consultable



<span id="isCuttable"></span>

`isCuttable`

[thing.t](../file/thing.t.html)\[[4921](../source/thing.t.html#4921)\]



By default things can't be cut



<span id="isDecoration"></span>

`isDecoration`

[thing.t](../file/thing.t.html)\[[3900](../source/thing.t.html#3900)\]



If I declare this object to be a decoration (i.e. isDecoration = true)
then its default behaviour will be to display its notImportantMsg for
every action except Examine or GoTo. We can extend the actions it will
respond to by adding them to the list in the decorationActions property.



<span id="isDetachable"></span>

`isDetachable`

[thing.t](../file/thing.t.html)\[[7599](../source/thing.t.html#7599)\]



*no description available*



<span id="isDiggable"></span>

`isDiggable`

[thing.t](../file/thing.t.html)\[[7122](../source/thing.t.html#7122)\]



Most things are not suitable for digging in



<span id="isDoffable"></span>

`isDoffable`

[thing.t](../file/thing.t.html)\[[6322](../source/thing.t.html#6322)\]



By default we assume that something's doffable if it's wearable



<span id="isDrinkable"></span>

`isDrinkable`

[thing.t](../file/thing.t.html)\[[6960](../source/thing.t.html#6960)\]



Most things aren't drinkable



<span id="isDroppable"></span>

`isDroppable`

[thing.t](../file/thing.t.html)\[[4424](../source/thing.t.html#4424)\]



By default we can drop anything that's held



<span id="isEdible"></span>

`isEdible`

[thing.t](../file/thing.t.html)\[[2365](../source/thing.t.html#2365)\]



Flag: Can this thing be eaten



<span id="isEnterable"></span>

`isEnterable`

[thing.t](../file/thing.t.html)\[[6553](../source/thing.t.html#6553)\]



Flag, can we enter (i.e. get inside) this thing? For most objects, we
can't



<span id="isExtinguishable"></span>

`isExtinguishable`

[thing.t](../file/thing.t.html)\[[6903](../source/thing.t.html#6903)\]



Most things are extinguishable if they're lit, but some things (like the
sun or a nuclear explosion) might conceivably not be. Note that this
property should only be set to nil for things that couldn't be
extinguished even if they were lit (the flames of Hell, for example,
which might be considered undousable for all eternity, if you're bent on
writing an infernal game).



<span id="isFastenable"></span>

`isFastenable`

[thing.t](../file/thing.t.html)\[[7652](../source/thing.t.html#7652)\]



Fasten by itself presumably refers to objects like seat-belts. There are
not many such fastenable objects so we may things not fastenable by
default.



<span id="isFastened"></span>

`isFastened`

[thing.t](../file/thing.t.html)\[[7655](../source/thing.t.html#7655)\]



Most things start out unfastened.



<span id="isFeelable"></span>

`isFeelable`

[thing.t](../file/thing.t.html)\[[4129](../source/thing.t.html#4129)\]



By default we can try feeling most things, but there may be some things
it would be inappropriate to try feeling (like a blazing fire or Aunt
Mable) or somethings that cannot be felt (like a ray of light).



<span id="isFixed"></span>

`isFixed`

[thing.t](../file/thing.t.html)\[[1883](../source/thing.t.html#1883)\]



Flag to indicate whether this item is portable (nil) or fixed in place
(true). If it's fixed in place it can't be picked up or moved around (by
player commands).



<span id="isFlippable"></span>

`isFlippable`

[thing.t](../file/thing.t.html)\[[6238](../source/thing.t.html#6238)\]



Since FLIP X is often synonymous with SWITCH X , by default we make
something flippable if it's switchable.



<span id="isFollowable"></span>

`isFollowable`

[thing.t](../file/thing.t.html)\[[4504](../source/thing.t.html#4504)\]



Flag: can this object be followed? Most inanimate objects cannot, so the
default value is nil.



<span id="isHidden"></span>

`isHidden`

[thing.t](../file/thing.t.html)\[[2242](../source/thing.t.html#2242)\]



Flag, do we want to treat this object as hidden from view (so that the
player can't interact with it)?



<span id="isInitialPlayerChar"></span>

`isInitialPlayerChar`

[thing.t](../file/thing.t.html)\[[2675](../source/thing.t.html#2675)\]



Am I the Thing object that starts out as the initial player character?
For just about every Thing this will not the case, but this can be
overridden to true on the one Thing, Player or Actor object that is
meant to represent the initial player character. Note, however, that if
gameMain already defines a non-nil initialPlayerChar property, this will
be used to identify the initial player character object whatever the
value of the isInitialPlayerChar on any other object.



<span id="isKissable"></span>

`isKissable`

[thing.t](../file/thing.t.html)\[[7885](../source/thing.t.html#7885)\]



We can try kissing most things, even if it isn't very rewarding



<span id="isLightable"></span>

`isLightable`

[thing.t](../file/thing.t.html)\[[2032](../source/thing.t.html#2032)\]



Is this object lightable (via a player command)? Note that setting this
property to true also automatically makes the LitUnlit State applicable
to this object, allowing it to be referred to as 'lit' or 'unlit' as
appropriate.



<span id="isListed"></span>

`isListed`

[thing.t](../file/thing.t.html)\[[1895](../source/thing.t.html#1895)\]



A global isListed property that can be used to set the value of all the
others. By default we're listed if we're not fixed in place.



<span id="isLit"></span>

`isLit`

[thing.t](../file/thing.t.html)\[[2007](../source/thing.t.html#2007)\]



Is this object lit, i.e. providing sufficient light to see not only this
object but other objects in the vicinity by.



<span id="isLocked"></span>

`isLocked`

[thing.t](../file/thing.t.html)\[[2272](../source/thing.t.html#2272)\]



Flag: is this object currently locked. By default we start out locked if
we're lockable.



<span id="isMoveable"></span>

`isMoveable`

[thing.t](../file/thing.t.html)\[[6711](../source/thing.t.html#6711)\]



By default we assume anything fixed isn't moveable. That's not
necessarily the case since we may be able to move something by pushing
it around (say) even if we can't pick it up.



<span id="isOn"></span>

`isOn`

[thing.t](../file/thing.t.html)\[[2290](../source/thing.t.html#2290)\]



is this item currently switched on?



<span id="isOpen"></span>

`isOpen`

[thing.t](../file/thing.t.html)\[[4696](../source/thing.t.html#4696)\]



Is this object open. By default we'll make Things open so that their
interiors (if they have any) are accessible, unless they're openable, in
which case we'll assume they start out closed.



<span id="isOpenable"></span>

`isOpenable`

[thing.t](../file/thing.t.html)\[[4689](../source/thing.t.html#4689)\]



Is this object openable. If this property is set to true then this
object can be open and closed via the OPEN and CLOSE commands. Note that
setting this property to true also automatically makes the OpenClosed
State apply to this object, so that it can be referred to as 'open' or
'closed' accordingly.



<span id="isPlayerChar"></span>

`isPlayerChar`

[thing.t](../file/thing.t.html)\[[3861](../source/thing.t.html#3861)\]



Is this object the player character?



<span id="isPlugable"></span>

`isPlugable`

[thing.t](../file/thing.t.html)\[[7781](../source/thing.t.html#7781)\]



Most things can't be plugged into other things or have other things
plugged into them.



<span id="isPourable"></span>

`isPourable`

[thing.t](../file/thing.t.html)\[[8127](../source/thing.t.html#8127)\]



Most things aren't pourable (they can't be poured into or onto other
things.



<span id="isProminentNoise"></span>

`isProminentNoise`

[thing.t](../file/thing.t.html)\[[1972](../source/thing.t.html#1972)\]



Is the this object's listenDesc displayed in response to an intransitive
LISTEN command? (Only relevant if listenDesc is not nil)



<span id="isProminentSmell"></span>

`isProminentSmell`

[thing.t](../file/thing.t.html)\[[1960](../source/thing.t.html#1960)\]



Is the this object's smellDesc displayed in response to an intransitive
SMELL command? (Only relevant if smellDesc is not nil)



<span id="isPullable"></span>

`isPullable`

[thing.t](../file/thing.t.html)\[[5368](../source/thing.t.html#5368)\]



We can at least try to pull most things.



<span id="isPushable"></span>

`isPushable`

[thing.t](../file/thing.t.html)\[[5347](../source/thing.t.html#5347)\]



We can at least try to push most things.



<span id="isReadable"></span>

`isReadable`

[thing.t](../file/thing.t.html)\[[4475](../source/thing.t.html#4475)\]



By default an object is readable if it defines a non-nil readDesc



<span id="isRemoveable"></span>

`isRemoveable`

[thing.t](../file/thing.t.html)\[[6693](../source/thing.t.html#6693)\]



By default an object is removeable if it's takeable



<span id="isScrewable"></span>

`isScrewable`

[thing.t](../file/thing.t.html)\[[8264](../source/thing.t.html#8264)\]



Most things can't be screwed



<span id="isSettable"></span>

`isSettable`

[thing.t](../file/thing.t.html)\[[8004](../source/thing.t.html#8004)\]



Most things aren't settable.



<span id="isSmellable"></span>

`isSmellable`

[thing.t](../file/thing.t.html)\[[4056](../source/thing.t.html#4056)\]



By default everything is smellable, but you can override this to nil if
something isn't



<span id="isSwitchable"></span>

`isSwitchable`

[thing.t](../file/thing.t.html)\[[2287](../source/thing.t.html#2287)\]



Can this object be switched on and off?



<span id="isTakeable"></span>

`isTakeable`

[thing.t](../file/thing.t.html)\[[4169](../source/thing.t.html#4169)\]



By default a Thing is takeable if it's not fixed in place



<span id="isTasteable"></span>

`isTasteable`

[thing.t](../file/thing.t.html)\[[4098](../source/thing.t.html#4098)\]



By default everything is tasteable, but there might well be things the
that it would not be appropriate to taste.



<span id="isThrowable"></span>

`isThrowable`

[thing.t](../file/thing.t.html)\[[4648](../source/thing.t.html#4648)\]



By default something is throwable unless it's fixed in place.



<span id="isTransparent"></span>

`isTransparent`

[thing.t](../file/thing.t.html)\[[3345](../source/thing.t.html#3345)\]



Are we transparent to light? If this is true, then an observer outside
this object can see through it to objects on its interior, and an
observer inside can see through to objects on its exterior.

This property controls transparency symmetrically (looking in from
outside and looking out from within). The library also lets you control
transparency asymmetrically, using canSeeIn and canSeeOut. Those values
are by default derived from this one, but you can override them
separately to create something like a one-way mirror.



<span id="isTurnable"></span>

`isTurnable`

[thing.t](../file/thing.t.html)\[[4846](../source/thing.t.html#4846)\]



By default we make everything turnable, but lots of things clearly won't
be.



<span id="isUnfastenable"></span>

`isUnfastenable`

[thing.t](../file/thing.t.html)\[[7723](../source/thing.t.html#7723)\]



*no description available*



<span id="isUnplugable"></span>

`isUnplugable`

[thing.t](../file/thing.t.html)\[[7823](../source/thing.t.html#7823)\]



*no description available*



<span id="isUnscrewable"></span>

`isUnscrewable`

[thing.t](../file/thing.t.html)\[[8307](../source/thing.t.html#8307)\]



*no description available*



<span id="isVehicle"></span>

`isVehicle`

[thing.t](../file/thing.t.html)\[[3144](../source/thing.t.html#3144)\]



Flag; is this Thing a vehicle for an actor? If so then issuing a travel
command while in this vehicle will call this vehicle to travel



<span id="isWearable"></span>

`isWearable`

[thing.t](../file/thing.t.html)\[[2296](../source/thing.t.html#2296)\]



is this object something that can be worn



<span id="keyDoesntWorkMsg"></span>

`keyDoesntWorkMsg`

[thing.t](../file/thing.t.html)\[[6152](../source/thing.t.html#6152)\]



If we've found a possible key but it doesn't actually work on this
object, report that we're trying this key but it doesn't work.



<span id="keyList"></span>

`keyList`

[thing.t](../file/thing.t.html)\[[5752](../source/thing.t.html#5752)\]



A list of Keys that can be used to lock or unlock this Thing. Any Keys
in this list will cause this Thing to be added to the plausible and
actual lock lists of that Key at PreInit. This provides an alternative
way of specifying the relation between locks and keys.



<span id="keyNotNeededMsg"></span>

`keyNotNeededMsg`

[thing.t](../file/thing.t.html)\[[5823](../source/thing.t.html#5823)\]



*no description available*



<span id="kissRank"></span>

`kissRank`

[thing.t](../file/thing.t.html)\[[7891](../source/thing.t.html#7891)\]



The logical rank assigned to kissing this object if kissing is allowed.
Kissing an inanimate object is less likely than kissing an Actor.



<span id="known"></span>

`known`

[thing.t](../file/thing.t.html)\[[3672](../source/thing.t.html#3672)\]



Test whether this Thing is known to the player character.



<span id="knownKeyList"></span>

`knownKeyList`

[thing.t](../file/thing.t.html)\[[5758](../source/thing.t.html#5758)\]



A list of Keys that the player character starts out knowing at the start
of the game can lock our unlock this Thing.



<span id="knownProp"></span>

`knownProp`

[thing.t](../file/thing.t.html)\[[3681](../source/thing.t.html#3681)\]



If we want to track whether characters other than than the player char
know about or have seen this object, we can define knownProp and
seenProp as the properties used by this Thing to track what it knows
about and has seen.



<span id="lastSeenAt"></span>

`lastSeenAt`

[thing.t](../file/thing.t.html)\[[3622](../source/thing.t.html#3622)\]



The last location where the player character saw this object. Whenever
the object is described or listed in the description of a room or
another object, we set this to the object's location at that time.



<span id="lieOnScore"></span>

`lieOnScore`

[thing.t](../file/thing.t.html)\[[6499](../source/thing.t.html#6499)\]



*no description available*



<span id="lightSources"></span>

`lightSources`

[brightness.t](../file/brightness.t.html)\[[287](../source/brightness.t.html#287)\]



The list of lightSources and their adjusted (for opacity and/or
distance) brightness generated by the most recent call to
brightnessWithin(). Each element in the list is itself a two-element
list of the form \[obj, adjustedBrightness\] where obj is the object
providing light and adjustedBrightness is the brightness of that object
adjusted for transmission through distance or partial opacity.
\[BRIGHTNESS EXTENSION\]



<span id="listableContents"></span>

`listableContents`

[thing.t](../file/thing.t.html)\[[1980](../source/thing.t.html#1980)\]



The subset of our contents that should be listed.



<span id="listenDesc"></span>

`listenDesc`

[thing.t](../file/thing.t.html)\[[1966](../source/thing.t.html#1966)\]



The description displayed in response to a LISTEN command



<span id="listenDescWithoutSource"></span>

`listenDescWithoutSource`

[sensory.t](../file/sensory.t.html)\[[635](../source/sensory.t.html#635)\]



The response to LISTENing TO this object when the actor can't see us.
\[DEFINED IN SENSORY EXTENSION\]



<span id="listenDescWithSource"></span>

`listenDescWithSource`

[sensory.t](../file/sensory.t.html)\[[629](../source/sensory.t.html#629)\]



The response to LISTENing TO this object when the actor can see us.
\[DEFINED IN SENSORY EXTENSION\]



<span id="listOrder"></span>

`listOrder`

[thing.t](../file/thing.t.html)\[[3165](../source/thing.t.html#3165)\]



Listing order. This is an integer giving the relative position of this
item in a miscellaneous item list. The list is sorted in ascending order
of this value.



<span id="listWith"></span>

`listWith`

[thing.t](../file/thing.t.html)\[[3171](../source/thing.t.html#3171)\]



List group. At the moment this does nothing, but it has been retained
from the Mercury library for possible future use.



<span id="location"></span>

`location`

[thing.t](../file/thing.t.html)\[[2414](../source/thing.t.html#2414)\]



The location of this object, i.e. this object's immediate container
(which may be another Thing, a Room, or an Actor such as the player
char). Note that while you should specify the initial location of an
object via this property you should never directly alter this property
in game code thereafter; to change the location on object during the the
course of a game use the moveInto(loc) or actionMoveInto(loc) method.



<span id="lockability"></span>

`lockability`

[thing.t](../file/thing.t.html)\[[2266](../source/thing.t.html#2266)\]



The lockability property determines whether this object is lockable and
if so how. The possible values are notLockable, lockableWithoutKey,
lockableWithKey and indirectLockable.



<span id="lockedMsg"></span>

`lockedMsg`

[thing.t](../file/thing.t.html)\[[4796](../source/thing.t.html#4796)\]



*no description available*



<span id="lookBehindMsg"></span>

`lookBehindMsg`

[thing.t](../file/thing.t.html)\[[5282](../source/thing.t.html#5282)\]



*no description available*



<span id="lookInMsg"></span>

`lookInMsg`

[thing.t](../file/thing.t.html)\[[5069](../source/thing.t.html#5069)\]



By default our lookInMsg just says the actor finds nothing of interest
in us; this could be overridden for an objecy with a more interesting
interior.



<span id="lookListed"></span>

`lookListed`

[thing.t](../file/thing.t.html)\[[1900](../source/thing.t.html#1900)\]



Flag: is this item listed in a room description (when looking around).



<span id="lookThroughMsg"></span>

`lookThroughMsg`

[thing.t](../file/thing.t.html)\[[5309](../source/thing.t.html#5309)\]



*no description available*



<span id="lookUnderMsg"></span>

`lookUnderMsg`

[thing.t](../file/thing.t.html)\[[5186](../source/thing.t.html#5186)\]



*no description available*



<span id="markInventoryAsSeen"></span>

`markInventoryAsSeen`

[thing.t](../file/thing.t.html)\[[1944](../source/thing.t.html#1944)\]



Flag, if our contType is Carrier (i.e. we're an Actor), should our
contents be marked as seen even though it hasn't been listed in a room
description? By default this is set to true, on the basis that the
inventory (and parts) of an actor would normally be in plain sight.



<span id="matchPullOnly"></span>

`matchPullOnly`

[thing.t](../file/thing.t.html)\[[8396](../source/thing.t.html#8396)\]



Check if the player specifically asked to PULL this object somewhere. In
the main library we assume not, but language-specific code will need to
override to check what that player's command actually said.



<span id="matchPushOnly"></span>

`matchPushOnly`

[thing.t](../file/thing.t.html)\[[8388](../source/thing.t.html#8388)\]



Check if the player specifically asked to PUSH this object somewhere. In
the main library we assume not, but language-specific code will need to
override to check what that player's command actually said.



<span id="maxBulkHiddenBehind"></span>

`maxBulkHiddenBehind`

[thing.t](../file/thing.t.html)\[[2220](../source/thing.t.html#2220)\]



*no description available*



<span id="maxBulkHiddenIn"></span>

`maxBulkHiddenIn`

[thing.t](../file/thing.t.html)\[[2221](../source/thing.t.html#2221)\]



*no description available*



<span id="maxBulkHiddenUnder"></span>

`maxBulkHiddenUnder`

[thing.t](../file/thing.t.html)\[[2219](../source/thing.t.html#2219)\]



The maximum bulk that can be hidden under, behind or in this object,
assuming that the player can put anything there at all. Note that this
only affects what the player can place there with PUT IN, PUT UNDER and
PUT BEHIND commands, not what can be defined there initially or moved
there programmatically.



<span id="maxSingleBulk"></span>

`maxSingleBulk`

[thing.t](../file/thing.t.html)\[[2066](../source/thing.t.html#2066)\]



The maximum bulk that a single item may have to be inserted into (onto,
under, behind) this object; by default this is the same as the bulk
capacity, but you could set a lower value, e.g. to model a bottle with a
narrow neck.



<span id="maxSingleWeight"></span>

`maxSingleWeight`

[weight.t](../file/weight.t.html)\[[41](../source/weight.t.html#41)\]



The maximum weight of any single item we can contain \[WEIGHT EXTENSION



<span id="maxWeightHiddenBehind"></span>

`maxWeightHiddenBehind`

[weight.t](../file/weight.t.html)\[[137](../source/weight.t.html#137)\]



*no description available*



<span id="maxWeightHiddenIn"></span>

`maxWeightHiddenIn`

[weight.t](../file/weight.t.html)\[[138](../source/weight.t.html#138)\]



*no description available*



<span id="maxWeightHiddenUnder"></span>

`maxWeightHiddenUnder`

[weight.t](../file/weight.t.html)\[[136](../source/weight.t.html#136)\]



The maximum weight that can be hidden under, behind or in this object,
assuming that the player can put anything there at all. Note that this
only affects what the player can place there with PUT IN, PUT UNDER and
PUT BEHIND commands, not what can be defined there initially or moved
there programmatically. \[WEIGHT EXTENSION\]



<span id="mentioned"></span>

`mentioned`

[thing.t](../file/thing.t.html)\[[1778](../source/thing.t.html#1778)\]



Has this item been mentioned yet in a room description. Note that this
flag is used internally by the library; it shouldn't normally be
necessary to manipulate it directly from game code.



<span id="moved"></span>

`moved`

[thing.t](../file/thing.t.html)\[[3598](../source/thing.t.html#3598)\]



Has this object ever been moved by the player character? This is set to
true when the PC takes the object or puts it somewhere.



<span id="movedTo"></span>

`movedTo`

[thing.t](../file/thing.t.html)\[[6827](../source/thing.t.html#6827)\]



The notional location (other object) this object has been moved to as
the result of a MoveTo command.



<span id="moveNoEffectMsg"></span>

`moveNoEffectMsg`

[thing.t](../file/thing.t.html)\[[6758](../source/thing.t.html#6758)\]



*no description available*



<span id="mustBeCleanedWith"></span>

`mustBeCleanedWith`

[thing.t](../file/thing.t.html)\[[6995](../source/thing.t.html#6995)\]



If this is non-nil then this is an object or a list of objects that must
be/can be used to clean this object.



<span id="myInventoryLister"></span>

`myInventoryLister`

[thing.t](../file/thing.t.html)\[[3707](../source/thing.t.html#3707)\]



The lister to use when listing this object's inventory. By default we
use the standard inventory lister for the default WIDE inventory listing
and the inventoryTallLister for the TALL inventory listing.



<span id="myLookBehindLister"></span>

`myLookBehindLister`

[thing.t](../file/thing.t.html)\[[5275](../source/thing.t.html#5275)\]



The lister to use when listing the objects behind me in response to a
LOOK BEHIND command. By default we use the lookInLister.



<span id="myLookInLister"></span>

`myLookInLister`

[thing.t](../file/thing.t.html)\[[5060](../source/thing.t.html#5060)\]



The lister to use when listing the objects inside me in response to a
LOOK IN command. By default we use the lookInLister.



<span id="myLookUnderLister"></span>

`myLookUnderLister`

[thing.t](../file/thing.t.html)\[[5180](../source/thing.t.html#5180)\]



The lister to use when listing the objects under me in response to a
LOOK UNDER command. By default we use the lookInLister.



<span id="myOpeningContentsLister"></span>

`myOpeningContentsLister`

[thing.t](../file/thing.t.html)\[[4789](../source/thing.t.html#4789)\]



The lister to use when listing my contents when I'm opened. By default
we use the openingContentsLister.



<span id="myWornLister"></span>

`myWornLister`

[thing.t](../file/thing.t.html)\[[3710](../source/thing.t.html#3710)\]



The lister to use when listing what this object is wearing.



<span id="needsCleaning"></span>

`needsCleaning`

[thing.t](../file/thing.t.html)\[[6989](../source/thing.t.html#6989)\]



But that most things don't actually need cleaning in the game



<span id="noLongerTalkingToAnyoneMsg"></span>

`noLongerTalkingToAnyoneMsg`

[thing.t](../file/thing.t.html)\[[9094](../source/thing.t.html#9094)\]



*no description available*



<span id="nominalContents"></span>

`nominalContents`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[2382](../source/thing.t.html#2382)\]



My nominal contents is the special contents item we can use in naming
the object. This is useful for containers whose identities come
primarily from their contents, such as a vessel for liquids or a box of
loose files. Returns an object that qualifies the name: a "water" object
for BOX OF WATER, a "files" object for BOX OF FILES. Nil means that the
object isn't named by its contents.

Note that this is always a single object (or nil), not the whole list of
contents. We can only be named by one content object. (So you can't have
a "box of books and papers" by having separate nominal contents objects
for the books and the papers; although you could fake it by creating a
"books and papers" object.)



<span id="noNeedToCleanMsg"></span>

`noNeedToCleanMsg`

[thing.t](../file/thing.t.html)\[[7059](../source/thing.t.html#7059)\]



*no description available*



<span id="notFastenedMsg"></span>

`notFastenedMsg`

[thing.t](../file/thing.t.html)\[[7775](../source/thing.t.html#7775)\]



*no description available*



<span id="notHoldingMsg"></span>

`notHoldingMsg`

[thing.t](../file/thing.t.html)\[[4471](../source/thing.t.html#4471)\]



And I can't drop something that game code has deemed to be not droppable
for some other reason.



<span id="notImportantMsg"></span>

`notImportantMsg`

[thing.t](../file/thing.t.html)\[[3943](../source/thing.t.html#3943)\]



*no description available*



<span id="notInMsg"></span>

`notInMsg`

[thing.t](../file/thing.t.html)\[[7222](../source/thing.t.html#7222)\]



We're also a poor choice if none of the tentative direct objects is in
our list of notional contents



<span id="notLitMsg"></span>

`notLitMsg`

[thing.t](../file/thing.t.html)\[[6930](../source/thing.t.html#6930)\]



*no description available*



<span id="notLockableMsg"></span>

`notLockableMsg`

[thing.t](../file/thing.t.html)\[[5821](../source/thing.t.html#5821)\]



If we are lockable with key, then were a good choice of object for an
UnlockWith action provided we're currently locked.



<span id="notLockedMsg"></span>

`notLockedMsg`

[thing.t](../file/thing.t.html)\[[5826](../source/thing.t.html#5826)\]



*no description available*



<span id="notSwitchableMsg"></span>

`notSwitchableMsg`

[thing.t](../file/thing.t.html)\[[6183](../source/thing.t.html#6183)\]



*no description available*



<span id="notTalkingToAnyoneMsg"></span>

`notTalkingToAnyoneMsg`

[thing.t](../file/thing.t.html)\[[9091](../source/thing.t.html#9091)\]



*no description available*



<span id="notWornMsg"></span>

`notWornMsg`

[thing.t](../file/thing.t.html)\[[6354](../source/thing.t.html#6354)\]



*no description available*



<span id="objInPrep"></span>

`objInPrep`

[thing.t](../file/thing.t.html)\[[2039](../source/thing.t.html#2039)\]



The preposition that should be used to describe containment within this
thing (e.g. 'in', 'on' , 'under' or 'behind'). By default we get this
from our contType.



<span id="objIntoPrep"></span>

`objIntoPrep`

[thing.t](../file/thing.t.html)\[[2046](../source/thing.t.html#2046)\]



The preposition that should be used to describe movement to within this
thing (e.g. 'into', 'onto' , 'under' or 'behind'). By default we get
this from our contType.



<span id="okayCleanMsg"></span>

`okayCleanMsg`

[thing.t](../file/thing.t.html)\[[7066](../source/thing.t.html#7066)\]



*no description available*



<span id="okayGetOutOfMsg"></span>

`okayGetOutOfMsg`

[thing.t](../file/thing.t.html)\[[6656](../source/thing.t.html#6656)\]



*no description available*



<span id="okayLieInMsg"></span>

`okayLieInMsg`

[postures.t](../file/postures.t.html)\[[460](../source/postures.t.html#460)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="okayLieOnMsg"></span>

`okayLieOnMsg`

[postures.t](../file/postures.t.html)\[[275](../source/postures.t.html#275)\]



\[DEFINED IN POSTURES EXTENSION\]



<span id="okayLockMsg"></span>

`okayLockMsg`

[thing.t](../file/thing.t.html)\[[6079](../source/thing.t.html#6079)\]



Make us locked.



<span id="okayOpenMsg"></span>

`okayOpenMsg`

[thing.t](../file/thing.t.html)\[[4791](../source/thing.t.html#4791)\]



*no description available*



<span id="okayPushIntoMsg"></span>

`okayPushIntoMsg`

[thing.t](../file/thing.t.html)\[[8723](../source/thing.t.html#8723)\]



*no description available*



<span id="okayPushOutOfMsg"></span>

`okayPushOutOfMsg`

[thing.t](../file/thing.t.html)\[[8791](../source/thing.t.html#8791)\]



*no description available*



<span id="okaySetMsg"></span>

`okaySetMsg`

[thing.t](../file/thing.t.html)\[[7416](../source/thing.t.html#7416)\]



*no description available*



<span id="okaySitInMsg"></span>

`okaySitInMsg`

[postures.t](../file/postures.t.html)\[[428](../source/postures.t.html#428)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="okaySitOnMsg"></span>

`okaySitOnMsg`

[postures.t](../file/postures.t.html)\[[243](../source/postures.t.html#243)\]



\[DEFINED IN POSTURES EXTENSION\]



<span id="okayStandInMsg"></span>

`okayStandInMsg`

[postures.t](../file/postures.t.html)\[[399](../source/postures.t.html#399)\]



\[MODIFIED FOR POSTURES EXTENSION\]



<span id="okayStandOnMsg"></span>

`okayStandOnMsg`

[postures.t](../file/postures.t.html)\[[212](../source/postures.t.html#212)\]



\[DEFINED IN POSTURES EXTENSION\]



<span id="okayUnlockMsg"></span>

`okayUnlockMsg`

[thing.t](../file/thing.t.html)\[[6000](../source/thing.t.html#6000)\]



Make us unlocked.



<span id="opacity"></span>

`opacity`

[brightness.t](../file/brightness.t.html)\[[93](../source/brightness.t.html#93)\]



\[BRIGHTNESS EXTENSION\]

Our opacity is the extent to which we reduce the brightness of any light
that passes through us. An opacity of 4 or more will cut off the
brightest light, while an opacity of 0 means we're transparent. By
default we have an opacity of 0 if we're transparent and 4 otherwise.

Note that if we want any light to penetrate us at all we should set
transparency to true (we're at least somewhat light permeable) and then
set opacity to some suitable value (if we don't want it to be zero,
which is otherwise the default for a transparent object).



<span id="opened"></span>

`opened`

[thing.t](../file/thing.t.html)\[[4714](../source/thing.t.html#4714)\]



Flag, has this object ever been opened. Note that this is nil for an
object that starts out open but has never been closed and opened again.



<span id="openStatusReportable"></span>

`openStatusReportable`

[thing.t](../file/thing.t.html)\[[1786](../source/thing.t.html#1786)\]



Do we want this object to report whether it's open? By default we do if
it's both openable and open.



<span id="owner"></span>

`owner`

[thing.t](../file/thing.t.html)\[[3205](../source/thing.t.html#3205)\]



The owner or owners of the object. This is for resolving possessives in
the player's input, such as BOB'S WALLET. By default, an object has no
explicit owner, so this is an empty list.

This should only return the \*explicit\* owner(s), not an implied
locational owner. For example, if Bob is holding a key, it's implicitly
BOB'S KEY. However, the key may or may not still be Bob's after he drops
it. If the key is something that's understood to belong to Bob, whether
it's currently in his physical possession or not, then this routine
would return Bob; otherwise it would return nil.

An object can have multiple explicit owners, in which case it'll be
recognized with a possessive qualifier for any of the owners. The first
owner in the list is the nominal owner, meaning its the one we'll use if
we're called upon to display the object's name with a possessive phrase.



<span id="ownsContents"></span>

`ownsContents`

[thing.t](../file/thing.t.html)\[[3224](../source/thing.t.html#3224)\]



Are we the nominal owner of the objects we contain? This controls
whether or not we can be chosen as the nominal owner of a contained
object for display purposes. If a contained object has no explicit
owner, it can still be implicitly owned by an actor carrying it, or by
another suitable container. (Note that this only applies as a default.
When an item in our contents has an explicit owner, that will override
the implied container ownership for that item. So, for example, Bob can
be carrying Bill's wallet wallet, and as long as the wallet has its
explicit owner set, we'll still describe it as Bill's despite its
location.)

By default, most objects are not nominal owners. Actors generally should
set this to true, so that (for example) anything Bob is carrying can be
described as Bob's. Something with contType = Carrier is likely to be an
actor and hence something that can own its contents.



<span id="paraBrksBtwnSubcontents"></span>

`paraBrksBtwnSubcontents`

[thing.t](../file/thing.t.html)\[[1540](../source/thing.t.html#1540)\]



Do we want paragraph breaks between the listings of subcontents (i.e.
the contents of this item's contents)? By default we take our value from
the global setting on gameMain.



<span id="partOfYouMsg"></span>

`partOfYouMsg`

[thing.t](../file/thing.t.html)\[[4472](../source/thing.t.html#4472)\]



*no description available*



<span id="posture"></span>

`posture`

[postures.t](../file/postures.t.html)\[[123](../source/postures.t.html#123)\]



The posture currently adopted by this Thing. We define this on Thing
rather than Actor mainly because the player character can be a Thing,
but it could also use to describe the metaphorical posture of inanimate
objects (A rug lies on the floor, the jug sits on the rug, the tall
grandfather clock stands by the door). \[DEFINED IN POSTURES EXTENSION\]



<span id="preCondActor"></span>

`preCondActor`

[thing.t](../file/thing.t.html)\[[3963](../source/thing.t.html#3963)\]



*no description available*



<span id="pullNoEffectMsg"></span>

`pullNoEffectMsg`

[thing.t](../file/thing.t.html)\[[5387](../source/thing.t.html#5387)\]



*no description available*



<span id="pushNoEffectMsg"></span>

`pushNoEffectMsg`

[thing.t](../file/thing.t.html)\[[5365](../source/thing.t.html#5365)\]



*no description available*



<span id="readDesc"></span>

`readDesc`

[thing.t](../file/thing.t.html)\[[1951](../source/thing.t.html#1951)\]



The text we display in response to a READ command. This can be nil (if
we're not readable), a single-quoted string, a double-quoted string



<span id="recognizableInDark"></span>

`recognizableInDark`

[thing.t](../file/thing.t.html)\[[1011](../source/thing.t.html#1011)\]



Can the player character recognize this room (enough to know its name
and have a rough idea of its location) in the dark? (If so then looking
around in this room in the dark makes it visited and familiar, otherwise
it doesn't).



<span id="remapActor"></span>

`remapActor`

[thing.t](../file/thing.t.html)\[[3961](../source/thing.t.html#3961)\]



If our contType isn't Carrier we're unlikely to be an actor, so we're a
poor choice of object if the parser has to select an actor, typically
when the player has entered a command targeted at an NPC.



<span id="remapBehind"></span>

`remapBehind`

[thing.t](../file/thing.t.html)\[[2154](../source/thing.t.html#2154)\]



If non-nil, remapUnder specified the object that acts as our proxy rear,
i.e. the object to which any PUT BEHIND or LOOK BEHIND action directed
at us will be redirected.



<span id="remapIn"></span>

`remapIn`

[thing.t](../file/thing.t.html)\[[2134](../source/thing.t.html#2134)\]



If remapIn is not nil, a LOOK IN, PUT IN, OPEN, CLOSE, LOCK or UNLOCK
command performed on this Thing will be redirected to the object
specified on remapIn. In other words, remapIn specifies the object that
acts as our proxy container.



<span id="remapOn"></span>

`remapOn`

[thing.t](../file/thing.t.html)\[[2140](../source/thing.t.html#2140)\]



If non-nil, remapOn speficies the object that acts as our proxy surface,
in other words the object to which PUT ON will be redirected.



<span id="remapProps"></span>

`remapProps`

[thing.t](../file/thing.t.html)\[[2125](../source/thing.t.html#2125)\]



The list of possible remap props



<span id="remapUnder"></span>

`remapUnder`

[thing.t](../file/thing.t.html)\[[2147](../source/thing.t.html#2147)\]



If non-nil, remapUnder specified the object that acts as our proxy
underside, i.e. the object to which any PUT UNDER or LOOK UNDER action
directed at us will be redirected.



<span id="roomContentsLister"></span>

`roomContentsLister`

[thing.t](../file/thing.t.html)\[[1095](../source/thing.t.html#1095)\]



The contents lister to use for listing this room's miscellaneous
contents. By default we use the standard lookLister but this can be
overridden to use a CustomRoomLister (say) to provide just about any
wording we like.



<span id="roomPart"></span>

`roomPart`

[roomparts.t](../file/roomparts.t.html)\[[164](../source/roomparts.t.html#164)\]



The room part (e.g. defaultNorthWall) with which we're notionally
associated. \[DEFINED IN ROOMPARTS EXTENSION\]



<span id="roomPartDesc"></span>

`roomPartDesc`

[roomparts.t](../file/roomparts.t.html)\[[170](../source/roomparts.t.html#170)\]



The description of ourselves to be displayed when our associated
roomPart is examined. \[DEFINED IN ROOMPARTS EXTENSION\]



<span id="roomSubContentsLister"></span>

`roomSubContentsLister`

[thing.t](../file/thing.t.html)\[[1102](../source/thing.t.html#1102)\]



The contents lister to use for listing this room's miscellaneous
subcontents. By default we use the standard lookContentsLister but this
can be overridden.



<span id="roomTitle"></span>

`roomTitle`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[1014](../source/thing.t.html#1014)\]



The name to display at the head of a room description



<span id="searchListed"></span>

`searchListed`

[thing.t](../file/thing.t.html)\[[1911](../source/thing.t.html#1911)\]



Flag: is this item listed when is container is searched (or looked in).



<span id="seen"></span>

`seen`

[thing.t](../file/thing.t.html)\[[3614](../source/thing.t.html#3614)\]



Have we been seen? This is set to true the first time the object is
described or listed in a room description or the description of another
object (such as LOOK IN this object's container).



<span id="seenProp"></span>

`seenProp`

[thing.t](../file/thing.t.html)\[[3682](../source/thing.t.html#3682)\]



*no description available*



<span id="shouldBeBroken"></span>

`shouldBeBroken`

[thing.t](../file/thing.t.html)\[[4626](../source/thing.t.html#4626)\]



Probably most things shouldn't be broken though.



<span id="shouldNotBreakMsg"></span>

`shouldNotBreakMsg`

[thing.t](../file/thing.t.html)\[[4645](../source/thing.t.html#4645)\]



*no description available*



<span id="shouldNotPourIntoMsg"></span>

`shouldNotPourIntoMsg`

[thing.t](../file/thing.t.html)\[[8257](../source/thing.t.html#8257)\]



*no description available*



<span id="shouldNotPourOntoMsg"></span>

`shouldNotPourOntoMsg`

[thing.t](../file/thing.t.html)\[[8260](../source/thing.t.html#8260)\]



*no description available*



<span id="sightSize"></span>

`sightSize`

[senseRegion.t](../file/senseRegion.t.html)\[[794](../source/senseRegion.t.html#794)\]



The sightSize can be small, medium or large and controls how visible
this object is from a remote location. If it's small, it can't be seen
from a remote location at all. It it's medium, the object can be seen,
but it's not possible to discern any detail. If it's large, it can be
seen and described. Note that this behaviour is only the default,
however, since it can be changed by overriding the isVisibleFrom() and
remoteDesc() methods. Note also that sightSize is not related to the
bulk property (unless you override sightSize to make it so).



<span id="sitOnScore"></span>

`sitOnScore`

[thing.t](../file/thing.t.html)\[[6498](../source/thing.t.html#6498)\]



As well as ruling out certain objects for sitting, lying or standing on,
we can also give them a score for each of these postures; e.g. a bed may
be particularly suitable for lying on (although you could lie on the
sofa) while a chair may be particularly suitable for sitting on (though
you could sit on the bed.

By default we'll give each posture a score of 100, the normal logical
verify score. Note that these scores have no effect if the corresponding
can xxxOnMe property is nil.



<span id="smellDesc"></span>

`smellDesc`

[thing.t](../file/thing.t.html)\[[1954](../source/thing.t.html#1954)\]



The description displayed in response to a SMELL command



<span id="smellDescWithoutSource"></span>

`smellDescWithoutSource`

[sensory.t](../file/sensory.t.html)\[[609](../source/sensory.t.html#609)\]



The response to SMELLing this object when the actor can't see us.
\[DEFINED IN SENSORY EXTENSION\]



<span id="smellDescWithSource"></span>

`smellDescWithSource`

[sensory.t](../file/sensory.t.html)\[[603](../source/sensory.t.html#603)\]



The response to SMELLing this object when the actor can see us.
\[DEFINED IN SENSORY EXTENSION\]



<span id="smellNothingMsg"></span>

`smellNothingMsg`

[thing.t](../file/thing.t.html)\[[4078](../source/thing.t.html#4078)\]



*no description available*



<span id="smellObj"></span>

`smellObj`

[sensory.t](../file/sensory.t.html)\[[702](../source/sensory.t.html#702)\]



Our associated Odor object, if we have one \[SENSORY EXTENSION\]



<span id="smellSize"></span>

`smellSize`

[senseRegion.t](../file/senseRegion.t.html)\[[810](../source/senseRegion.t.html#810)\]



The smellSize can be small, medium or large. By default something is
smellable from a remote location either if its smellSize is large or if
it smellSize is not small and its remoteSmellDesc() method has been
defined. Overriding isSmellableFrom(pov) may change these rules.



<span id="soundObj"></span>

`soundObj`

[sensory.t](../file/sensory.t.html)\[[705](../source/sensory.t.html#705)\]



Our associated Noise object, if we have one. \[SENSORY EXTENSION\]



<span id="soundSize"></span>

`soundSize`

[senseRegion.t](../file/senseRegion.t.html)\[[802](../source/senseRegion.t.html#802)\]



The soundSize can be small, medium or large. By default something is
audible from a remote location either if its soundSize is large or if it
soundSize is not small and its remoteListenDesc() method has been
defined. Overriding isAudibleFrom(pov) may change these rules.



<span id="specialDesc"></span>

`specialDesc`

[thing.t](../file/thing.t.html)\[[1795](../source/thing.t.html#1795)\]



If present, a description of this object shown in a separate paragraph
in the listing of the contents of a Room. If specialDesc is defined then
this paragraph will be displayed regardless of the value of isListed.



<span id="specialDescBeforeContents"></span>

`specialDescBeforeContents`

[thing.t](../file/thing.t.html)\[[1833](../source/thing.t.html#1833)\]



Is this item listed before or after the list of miscellaneous contents
in the room. By default we'll show the specialDesc of items before
miscellaneous items in a room description but afterwards otherwise: this
places specialDescs in a more logical order in relation to the text of
listers used to list the contents of obejcts other than rooms.



<span id="specialDescListWith"></span>

`specialDescListWith`

[thing.t](../file/thing.t.html)\[[1836](../source/thing.t.html#1836)\]



For possible future use; at the moment this doesn't do anything



<span id="specialDescOrder"></span>

`specialDescOrder`

[thing.t](../file/thing.t.html)\[[1824](../source/thing.t.html#1824)\]



The specialDescOrder property controls where in a series of specialDesc
paragraphs this item is mentioned: the higher the number, the later it
will come relative to other items. Note that this does not override the
specialDescBeforeContents setting.



<span id="stagingLocation"></span>

`stagingLocation`

[thing.t](../file/thing.t.html)\[[6612](../source/thing.t.html#6612)\]



Our staging location is where we need to be to get on/in us



<span id="standOnScore"></span>

`standOnScore`

[thing.t](../file/thing.t.html)\[[6500](../source/thing.t.html#6500)\]



*no description available*



<span id="stateDesc"></span>

`stateDesc`

[thing.t](../file/thing.t.html)\[[1645](../source/thing.t.html#1645)\]



The state-specific description of this object, which is appended to its
desc when examined. This is defined as a single-quoted string to make it
easy to change at run-time.



<span id="tasteDesc"></span>

`tasteDesc`

[thing.t](../file/thing.t.html)\[[1975](../source/thing.t.html#1975)\]



The description displayed in response to a TASTE command



<span id="throwFallsShortMsg"></span>

`throwFallsShortMsg`

[thing.t](../file/thing.t.html)\[[7333](../source/thing.t.html#7333)\]



*no description available*



<span id="tooDarkToReadMsg"></span>

`tooDarkToReadMsg`

[brightness.t](../file/brightness.t.html)\[[395](../source/brightness.t.html#395)\]



The message to display if there's not enough light to read this item.
\[BRIGHTNESS EXTENSION\]



<span id="tooDarkToSeeMsg"></span>

`tooDarkToSeeMsg`

[thing.t](../file/thing.t.html)\[[4050](../source/thing.t.html#4050)\]



The message to display when it's too dark to see anything



<span id="tooFarAwayToHearMsg"></span>

`tooFarAwayToHearMsg`

[senseRegion.t](../file/senseRegion.t.html)\[[962](../source/senseRegion.t.html#962)\]



Otherwise say this object is too far away for the actor to hear.



<span id="tooFarAwayToReadMsg"></span>

`tooFarAwayToReadMsg`

[senseRegion.t](../file/senseRegion.t.html)\[[981](../source/senseRegion.t.html#981)\]



*no description available*



<span id="tooFarAwayToSeeDetailMsg"></span>

`tooFarAwayToSeeDetailMsg`

[senseRegion.t](../file/senseRegion.t.html)\[[907](../source/senseRegion.t.html#907)\]



Otherwise say this object is too far away for the actor to see any
detail.



<span id="tooFarAwayToSmellMsg"></span>

`tooFarAwayToSmellMsg`

[senseRegion.t](../file/senseRegion.t.html)\[[1036](../source/senseRegion.t.html#1036)\]



Otherwise say this object is too far away for the actor to smell.



<span id="totalWeight"></span>

`totalWeight`

[weight.t](../file/weight.t.html)\[[20](../source/weight.t.html#20)\]



Our total weight, including the weight of our contents \[WEIGHT
EXTENSION



<span id="turnLastExamined"></span>

`turnLastExamined`

[cmdhelp.t](../file/cmdhelp.t.html)\[[873](../source/cmdhelp.t.html#873)\]



*no description available*



<span id="turnLastMoved"></span>

`turnLastMoved`

[cmdhelp.t](../file/cmdhelp.t.html)\[[856](../source/cmdhelp.t.html#856)\]



*no description available*



<span id="turnLastMovedInto"></span>

`turnLastMovedInto`

[cmdhelp.t](../file/cmdhelp.t.html)\[[857](../source/cmdhelp.t.html#857)\]



*no description available*



<span id="turnNoEffectMsg"></span>

`turnNoEffectMsg`

[thing.t](../file/thing.t.html)\[[4874](../source/thing.t.html#4874)\]



*no description available*



<span id="useInitSpecialDesc"></span>

`useInitSpecialDesc`

[thing.t](../file/thing.t.html)\[[1816](../source/thing.t.html#1816)\]



By default we use the initSpecialDesc until the object has been moved,
but this can be overridden with some other condition.



<span id="useKey_"></span>

`useKey_`

[thing.t](../file/thing.t.html)\[[6154](../source/thing.t.html#6154)\]



*no description available*



<span id="useSpecialDesc"></span>

`useSpecialDesc`

[thing.t](../file/thing.t.html)\[[1805](../source/thing.t.html#1805)\]



Should the specialDesc be used? Normally we use the specialDesc if we
have one, but we may want to override this for particular cases. For
example, if we want an item to have a paragraph to itself until it's
moved we could define useSpecialDesc = (!moved) \[making it equivalent
to initSpecialDesc\]. Note that the useSpecialDesc property only has any
effect if specialDesc is not nil.



<span id="viaMode"></span>

`viaMode`

[thing.t](../file/thing.t.html)\[[8399](../source/thing.t.html#8399)\]



*no description available*



<span id="visibleInDark"></span>

`visibleInDark`

[thing.t](../file/thing.t.html)\[[2016](../source/thing.t.html#2016)\]



Is this object visible in the dark without (necessarily) providing
enough light to see anything else by, e.g. the night sky.



<span id="vocabLikelihood"></span>

`vocabLikelihood`

[thing.t](../file/thing.t.html)\[[3781](../source/thing.t.html#3781)\]



A property that can be used to boost this object being chosen by the
parser, other things being equal; it can be used as a tie-breaker
between two objects that otherwise have the same verification scores.
Game code should normally use fairly small values for this property, say
between -20 and +20, to prevent overriding the verification score.



<span id="weight"></span>

`weight`

[weight.t](../file/weight.t.html)\[[17](../source/weight.t.html#17)\]



Our own weight, not counting the weight of our contents \[WEIGHT
EXTENSION\]



<span id="weightCapacity"></span>

`weightCapacity`

[weight.t](../file/weight.t.html)\[[38](../source/weight.t.html#38)\]



The total weight we're capable of containing \[WEIGHT EXTENSION



<span id="withKeyMsg"></span>

`withKeyMsg`

[thing.t](../file/thing.t.html)\[[6081](../source/thing.t.html#6081)\]



*no description available*



<span id="wornBy"></span>

`wornBy`

[thing.t](../file/thing.t.html)\[[2302](../source/thing.t.html#2302)\]



If this object is currently being worn by someone, the wornBy property
contains the identity of the person wearing it.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="abcName"></span>

`abcName (action, role)`

[english.t](../file/english.t.html)\[[2169](../source/english.t.html#2169)\]



Announce Best Choice name. This can be used in those rare cases where
you want to override the name the parser uses to describe an object when
announcing its best choice of object. For example, if you have a bottle
of wine from which you can fill a glass, you might prefer '(with wine
from the bottle)' to '(with the bottle of wine)' following FILL GLASS;
action is the action being carried out for which the object has been
chosen and role(DirectObject or IndirectObject) is the role the chosen
object is playing in the action. By default this method just returns
theName.



<span id="accumulateBrightness"></span>

`accumulateBrightness (maxBrightness)`

[brightness.t](../file/brightness.t.html)\[[326](../source/brightness.t.html#326)\]



\[BRIGHTNESS EXTENSION\] The accumulateBrightness() method is a stub (or
hook) for a user-defined algorithm for accumulating the brightness of
multiple ligjt sources if this is desired. By default we simply return
the value of the maxBrightness parameter that is passed to us (which is
the brightness returned by the latest call to brightnessWithin()), but
game code can override this method to provide some other calculation of
accumulated brightness by iterating over the list of objects and their
adjusted brightnesses in our lightSources property.

Note that accumulateBrightness is provided to allow it to be readily
overridden by game code, but is not designed to be directly called from
game code, which should call it only via accumulatedBrightnessWithin();



<span id="accumulatedBrightnessWithin"></span>

`accumulatedBrightnessWithin ( )`

[brightness.t](../file/brightness.t.html)\[[296](../source/brightness.t.html#296)\]



\[BRIGHTNESS EXTENSION\] This is little more than a hook for user code
to provide its own means of accumulating the brightness from multiple
light sources.



<span id="actionMoveInto"></span>

`actionMoveInto (newCont)`

[thing.t](../file/thing.t.html)\[[2476](../source/thing.t.html#2476)\],
[cmdhelp.t](../file/cmdhelp.t.html)\[[863](../source/cmdhelp.t.html#863)\],
[roomparts.t](../file/roomparts.t.html)\[[178](../source/roomparts.t.html#178)\],
[signals.t](../file/signals.t.html)\[[275](../source/signals.t.html#275)\]



Move into generated by a user action, which includes notifications

*Modified in
[cmdhelp.t](../file/cmdhelp.t.html)\[[863](../source/cmdhelp.t.html#863)\]:*  
Modified for CMDHELP EXTENSION. Note the last turns on which this object
was moved and on which something was moved into this object.

*Modified in
[roomparts.t](../file/roomparts.t.html)\[[178](../source/roomparts.t.html#178)\]:*  
We modify actionMoveInto here so that an action that results in moving
an object (e.g. taking a picture that's notionally hanging on a wall)
removes the association between the object and its room part. \[MODIFIED
FOR ROOMPARTS EXTENSION\]

*Modified in
[signals.t](../file/signals.t.html)\[[275](../source/signals.t.html#275)\]:*  
emit a actmoveSignal or unlitSignal when this object moved as part of
action handling. \[SIGNALS EXTENSION\]



<span id="actorAction"></span>

`actorAction ( )`

[thing.t](../file/thing.t.html)\[[3843](../source/thing.t.html#3843)\]



The before action handling on this Thing if it's the current actor. We
define it here rather than on Actor since the player character can be a
Thing. By default we do nothing.



<span id="addToAllContents"></span>

`addToAllContents (vec, lst)`

[thing.t](../file/thing.t.html)\[[3286](../source/thing.t.html#3286)\]



*no description available*



<span id="addToContents"></span>

`addToContents (obj, vec?)`

[thing.t](../file/thing.t.html)\[[2423](../source/thing.t.html#2423)\]



Add an item to this object's contents. Normally this method is used
internally in the library than directly by game code. If the vec
parameter is supplied, the object added to our contents is also added to
vec; again this is intended primarily for internal use by the library.



<span id="afterAction"></span>

`afterAction ( )`

[thing.t](../file/thing.t.html)\[[3858](../source/thing.t.html#3858)\]



After action notification on this Thing; this is triggered whenever an
action has just been performed when we're in scope. The action we'd test
for here would normally be one that \*doesn't\* involve this Thing.



<span id="afterTravel"></span>

`afterTravel (traveler, connector)`

[thing.t](../file/thing.t.html)\[[3802](../source/thing.t.html#3802)\]



After travel notification. This is called just after traveler has
traveled via connector.



<span id="allContents"></span>

`allContents ( )`

[thing.t](../file/thing.t.html)\[[3277](../source/thing.t.html#3277)\]



Return a list of everything that's directly or indirectly contained
within us.



<span id="allowReachOut"></span>

`allowReachOut (obj)`

[thing.t](../file/thing.t.html)\[[3481](../source/thing.t.html#3481)\]



Check whether the actor can reach out of this object to touch obj, if
obj is not in this object.



<span id="aobjFor"></span>

`aobjFor (Default)`

[tiaaction.t](../file/tiaaction.t.html)\[[382](../source/tiaaction.t.html#382)\]



Defined on TIAAction extension.



<span id="beforeAction"></span>

`beforeAction ( )`

[thing.t](../file/thing.t.html)\[[3851](../source/thing.t.html#3851)\]



Before action notification on this Thing; this is triggered whenever an
action is about to be performed when we're in scope (and could be used
to veto the action with an exit macro). The action we'd test for here
would normally be one that \*doesn't\* involve this Thing.



<span id="beforeMovePushable"></span>

`beforeMovePushable (connector, dir)`

[thing.t](../file/thing.t.html)\[[8584](../source/thing.t.html#8584)\]



Use the travelVia() method of the iobj to move the dobj to its new
location.



<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[thing.t](../file/thing.t.html)\[[3795](../source/thing.t.html#3795)\]



Before travel notification. This is called just before traveler attempts
to travel via connector. By default we do nothing



<span id="brightnessWithin"></span>

`brightnessWithin ( )`

[brightness.t](../file/brightness.t.html)\[[111](../source/brightness.t.html#111)\]



How bright is it within us (assuming, in practice, that we're either a
Room or an enterable container (aka Booth)? \[BRIGHTNESS EXTENSION\]



<span id="byRoom"></span>

`byRoom (arg)`

[thing.t](../file/thing.t.html)\[[3882](../source/thing.t.html#3882)\]



This method is primarily intended for use with the symconn extension,
where it is redefined, but other code may find a use for it.



<span id="canHear"></span>

`canHear (obj)`

[thing.t](../file/thing.t.html)\[[2565](../source/thing.t.html#2565)\]



Is obj audible from us?



<span id="cannotPushTravelMsg"></span>

`cannotPushTravelMsg ( )`

[thing.t](../file/thing.t.html)\[[8506](../source/thing.t.html#8506)\]



Display a message explaining that push travel is not possible



<span id="cannotReachOutMsg"></span>

`cannotReachOutMsg (target)`

[thing.t](../file/thing.t.html)\[[3522](../source/thing.t.html#3522)\]



Return a message (single-quoted string) explaining why target can't be
reached from inside this Thing (when this Thing is typically some kind
of nested room such as a Booth or Platform).



<span id="canReach"></span>

`canReach (obj)`

[thing.t](../file/thing.t.html)\[[2571](../source/thing.t.html#2571)\]



Is obj reachable (by touch) from us?



<span id="canSee"></span>

`canSee (obj)`

[thing.t](../file/thing.t.html)\[[2562](../source/thing.t.html#2562)\]



Is obj visible from us?



<span id="canSmell"></span>

`canSmell (obj)`

[thing.t](../file/thing.t.html)\[[2568](../source/thing.t.html#2568)\]



Is obj smellable from us?



<span id="canTalkTo"></span>

`canTalkTo (other)`

[thing.t](../file/thing.t.html)\[[3697](../source/thing.t.html#3697)\]



Can this Thing (which might be the Player Char for instance) talk to
other?



<span id="checkDisplay"></span>

`checkDisplay (prop)`

[thing.t](../file/thing.t.html)\[[1766](../source/thing.t.html#1766)\]



Check if displaying prop could possibly produce any output. The only
tests we apply here is that prop is not defined as nil.



<span id="checkInsert"></span>

`checkInsert (obj)`

[thing.t](../file/thing.t.html)\[[2099](../source/thing.t.html#2099)\],
[weight.t](../file/weight.t.html)\[[48](../source/weight.t.html#48)\]



Check whether an item can be inserted into this object, or whether doing
so would either exceed the total bulk capacity of the object or the
maximum bulk allowed for a single item.

*Modified in
[weight.t](../file/weight.t.html)\[[48](../source/weight.t.html#48)\]:*  
Check whether obj can be inserted into us without exceeding our bulk and
weight constraints. \[WEIGHT EXTENSION\]



<span id="checkPushTravel"></span>

`checkPushTravel ( )`

[thing.t](../file/thing.t.html)\[[8516](../source/thing.t.html#8516)\]



Check the travel barriers on the indirect object of the action



<span id="checkReach"></span>

`checkReach (actor)`

[thing.t](../file/thing.t.html)\[[3457](../source/thing.t.html#3457)\]



Check whether the actor can reach (touch) this object. If this method
displays anything (which should be the reason this object can't be
touched) then the object can't be reached. Note that this only has any
effect when the touchObj preCondition is defined.



<span id="checkReachIn"></span>

`checkReachIn (actor, target?)`

[thing.t](../file/thing.t.html)\[[3471](../source/thing.t.html#3471)\]



Check whether an actor can reach inside this object (for reasons other
that it enclosing its contents; e.g. because it's out of reach). If this
method displays anything (which should be the reason the interior of
this object can't be reached) then disallow reaching inside. Note that
this only has any effect when the touchObj preCondition is defined on
this object. By default we can reach inside if we can reach this object
and not otherwise. If the optional target parameter is supplied, it's
the object that actor is trying to reach.



<span id="checkRemove"></span>

`checkRemove (obj)`

[thing.t](../file/thing.t.html)\[[2520](../source/thing.t.html#2520)\]



checkRemove is called from the check stage of an action (typically TAKE)
that might remove obj from me. If it wants to object to the removal of
the object, it should simply display a message explaining why. By
default we call the same method our container to check whether anything
in our containment hierarchy objects to the removal. If this method is
overridden in game code it may only need to call inherited(obj) on any
branch that doesn't itself object to the removal.



<span id="checkRoomToHold"></span>

`checkRoomToHold ( )`

[thing.t](../file/thing.t.html)\[[4394](../source/thing.t.html#4394)\],
[weight.t](../file/weight.t.html)\[[99](../source/weight.t.html#99)\]



Check that the actor has enough spare bulkCapacity to add this item to
his/her inventory. Since by default everything has a bulk of zero and a
very large bulkCapacity, by default there will be no effective
restriction on what an actor (and in particular the player char) can
carry, but game authors may often wish to give portable items bulk in
the interests of realism and may wish to impose an inventory limit by
bulk by reducing the bulkCapacity of the player char.

*Modified in
[weight.t](../file/weight.t.html)\[[99](../source/weight.t.html#99)\]:*  
Check whether the actor has the bulk and weight capacity to hold us.
\[WEIGHT EXTENSION\]



<span id="checkSetting"></span>

`checkSetting (val)`

[thing.t](../file/thing.t.html)\[[7375](../source/thing.t.html#7375)\]



If the setting is valid, do nothing. If it's invalid display a message
explaining why. We do nothing here but this is overridden on the
Settable class, which may be easier to use than providing your own
implementation on Thing.



<span id="childLocType"></span>

`childLocType (child)`

[thing.t](../file/thing.t.html)\[[2844](../source/thing.t.html#2844)\]



Get the containment relationship between 'child' and 'self'. This
returns the containment type of the immediate child of 'self' that
contains 'child'.



<span id="commonContainingParent"></span>

`commonContainingParent (other)`

[thing.t](../file/thing.t.html)\[[2863](../source/thing.t.html#2863)\]



Find the nearest common containing parent of self and other. Unlike
commonInteriorParent this doesn't take account of the type of
containment (it can be In, On, Under, Behind or anything else) just so
long as we find a common parent in the containment hierarchy.



<span id="commonInteriorParent"></span>

`commonInteriorParent (other)`

[thing.t](../file/thing.t.html)\[[2902](../source/thing.t.html#2902)\]



Find the nearest common interior parent of self and other. This finds
the nearest parent that both self and other are inside of.



<span id="containerPath"></span>

`containerPath (other)`

[thing.t](../file/thing.t.html)\[[2947](../source/thing.t.html#2947)\]



Get the interior containment path from 'self' to 'other'. This returns a
list containing three elements. The first element is a sublist giving
the interior containers you have to traverse outwards from self up to
the common interior parent. The second element is the common container;
this will be nil if the two objects are in separate rooms. The third
element is a sublist giving the containers you have to traverse inwards
from the common parent to other.



<span id="containerPathBlock"></span>

`containerPathBlock (other, inProp, outProp)`

[thing.t](../file/thing.t.html)\[[3026](../source/thing.t.html#3026)\]



Search for a "blockage" along the container path between 'self' and
'other'. 'outProp' and 'inProp' are "can" properties (&canSeeOut,
&canReachIn, etc) that test a container to see whether we can
see/reach/hear/etc in or out of the container.

We trace the containment path, using traceContainerPath(). For each
outbound container on the path, we evaluate the container's outProp
property: if this is nil, we add that container to the blockage list.
Next, if there's no common parent, we add the outermost room containing
'self' to the list. Next, we trace the inbound path, evaluating each
container's inProp property: if nil, we add that container to the
blockage list.

Finally, we return the blockage list. This is a vector giving all of the
blockages we found, in the order we encountered them.



<span id="darkDesc"></span>

`darkDesc ( )`

[thing.t](../file/thing.t.html)\[[1020](../source/thing.t.html#1020)\]



The description of the room when it's dark



<span id="describeMovePushable"></span>

`describeMovePushable (connector, dest)`

[thing.t](../file/thing.t.html)\[[8647](../source/thing.t.html#8647)\]



Otherwise do nothing, because our 'connector' must be a string or method
that explains why travel that way isn't possible.



<span id="describePushTravel"></span>

`describePushTravel (via)`

[thing.t](../file/thing.t.html)\[[8663](../source/thing.t.html#8663)\]



This message, called on the direct object of a PushTravel command (i.e.
the object being pushed) is displayed just before travel takes place. It
is used when the PushTravel command also involves an indirect object,
e.g. a Passage, Door or Stairway the direct object is being pushed
through, up or down. The via parameter is the preposition relevant to
the kind of pushing, e.g. Into, Through or Up.



<span id="directChildParent"></span>

`directChildParent (other)`

[thing.t](../file/thing.t.html)\[[2826](../source/thing.t.html#2826)\]



Find the immediate child of 'self' that contains 'other'. If 'other' is
directly in 'self', we return 'other'; otherwise, we return an object
directly within 'self' that contains 'obj', directly or indirectly. If
'other' is not within 'self', we return nil.



<span id="discover"></span>

`discover (stat, =, true)`

[thing.t](../file/thing.t.html)\[[2249](../source/thing.t.html#2249)\],
[signals.t](../file/signals.t.html)\[[221](../source/signals.t.html#221)\]



Make a hidden item unhidden. If the method is called with the optional
parameter and the parameter is nil, i.e. discover(nil), the method
instead hides the object.

*Modified in
[signals.t](../file/signals.t.html)\[[221](../source/signals.t.html#221)\]:*  
emit a discoverSignal or undiscoverSignal when this object is discovered
or undiscovered. SIGNALS EXTENSION\]



<span id="display"></span>

`display (prop)`

[thing.t](../file/thing.t.html)\[[1682](../source/thing.t.html#1682)\]



Attempt to display prop appropriately according to it data type
(single-quoted string, double-quoted string, integer or code). The prop
parameter must be provided as a property pointer.



<span id="displayAlt"></span>

`displayAlt (prop, altMsg?)`

[thing.t](../file/thing.t.html)\[[1731](../source/thing.t.html#1731)\]



Attempt to display the message defined in the property prop, and return
true if anything is displayed. Otherwise, if the altMsg parameter is
supplied (either as a single-quoted string or as a property pointer)
display it instead, and then in any case return nil to tell the caller
that nothing was displayed by prop.

This method is primarily for use with properties such as smellDesc and
listenDesc for which alternatives may need to be displayed if they don't
display anything.



<span id="dobjFor(AskAbout)"></span>

`dobjFor(AskAbout)`

[thing.t](../file/thing.t.html)\[[8861](../source/thing.t.html#8861)\]



*no description available*



<span id="dobjFor(AskFor)"></span>

`dobjFor(AskFor)`

[thing.t](../file/thing.t.html)\[[8874](../source/thing.t.html#8874)\]



*no description available*



<span id="dobjFor(Attach)"></span>

`dobjFor(Attach)`

[thing.t](../file/thing.t.html)\[[7554](../source/thing.t.html#7554)\]



*no description available*



<span id="dobjFor(AttachTo)"></span>

`dobjFor(AttachTo)`

[thing.t](../file/thing.t.html)\[[7565](../source/thing.t.html#7565)\]



*no description available*



<span id="dobjFor(Attack)"></span>

`dobjFor(Attack)`

[thing.t](../file/thing.t.html)\[[4535](../source/thing.t.html#4535)\]



*no description available*



<span id="dobjFor(AttackWith)"></span>

`dobjFor(AttackWith)`

[thing.t](../file/thing.t.html)\[[4570](../source/thing.t.html#4570)\]



*no description available*



<span id="dobjFor(Board)"></span>

`dobjFor(Board)`

[thing.t](../file/thing.t.html)\[[6425](../source/thing.t.html#6425)\],
[postures.t](../file/postures.t.html)\[[282](../source/postures.t.html#282)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[282](../source/postures.t.html#282)\]:*  
If an actor Boards something, we need to know what posture the actor
ends up in; we use the new location's default posture. \[MODIFIED FOR
POSTURES EXTENSION\]



<span id="dobjFor(Break)"></span>

`dobjFor(Break)`

[thing.t](../file/thing.t.html)\[[4628](../source/thing.t.html#4628)\]



*no description available*



<span id="dobjFor(Burn)"></span>

`dobjFor(Burn)`

[thing.t](../file/thing.t.html)\[[6255](../source/thing.t.html#6255)\]



*no description available*



<span id="dobjFor(BurnWith)"></span>

`dobjFor(BurnWith)`

[thing.t](../file/thing.t.html)\[[6265](../source/thing.t.html#6265)\]



*no description available*



<span id="dobjFor(Clean)"></span>

`dobjFor(Clean)`

[thing.t](../file/thing.t.html)\[[7012](../source/thing.t.html#7012)\]



The handling of the Clean action is possibly more elaborate than it
needs to be by default, and game code may wish to override it with a
different implementation, but the aim is to provide a framework that
covers some common cases.

An object starts out with isClean = nil. Cleaning the object makes
isClean true (at which point it doesn't need cleaning again).

If an object needs another object to be cleaned with (e.g. if in order
to clean the window you need a wet sponge to clean it with), this can be
defined by setting mustBeCleanedWith to an object or a list of objects
that can be used to clean this direct object.



<span id="dobjFor(CleanWith)"></span>

`dobjFor(CleanWith)`

[thing.t](../file/thing.t.html)\[[7068](../source/thing.t.html#7068)\]



*no description available*



<span id="dobjFor(Climb)"></span>

`dobjFor(Climb)`

[thing.t](../file/thing.t.html)\[[6359](../source/thing.t.html#6359)\]



*no description available*



<span id="dobjFor(ClimbDown)"></span>

`dobjFor(ClimbDown)`

[thing.t](../file/thing.t.html)\[[6386](../source/thing.t.html#6386)\]



*no description available*



<span id="dobjFor(ClimbUp)"></span>

`dobjFor(ClimbUp)`

[thing.t](../file/thing.t.html)\[[6371](../source/thing.t.html#6371)\]



*no description available*



<span id="dobjFor(Close)"></span>

`dobjFor(Close)`

[thing.t](../file/thing.t.html)\[[4802](../source/thing.t.html#4802)\]



*no description available*



<span id="dobjFor(ConsultAbout)"></span>

`dobjFor(ConsultAbout)`

[thing.t](../file/thing.t.html)\[[8109](../source/thing.t.html#8109)\]



The base handling on Thing merely rules out the Consult action at the
verify stage. For a fuller implementation that allows consulting use the
Consultable class.



<span id="dobjFor(Cut)"></span>

`dobjFor(Cut)`

[thing.t](../file/thing.t.html)\[[4923](../source/thing.t.html#4923)\]



*no description available*



<span id="dobjFor(CutWith)"></span>

`dobjFor(CutWith)`

[thing.t](../file/thing.t.html)\[[4935](../source/thing.t.html#4935)\]



*no description available*



<span id="dobjFor(Default)"></span>

`dobjFor(Default)`

[thing.t](../file/thing.t.html)\[[3926](../source/thing.t.html#3926)\]



Our handling of any action of which we're the direct or indirect action
that's not in our list of decorationActions when our isDecoration
property is true. By default we just stop the action at the verify stage
and display our notImportantMsg.



<span id="dobjFor(Detach)"></span>

`dobjFor(Detach)`

[thing.t](../file/thing.t.html)\[[7601](../source/thing.t.html#7601)\]



*no description available*



<span id="dobjFor(DetachFrom)"></span>

`dobjFor(DetachFrom)`

[thing.t](../file/thing.t.html)\[[7615](../source/thing.t.html#7615)\]



*no description available*



<span id="dobjFor(Dig)"></span>

`dobjFor(Dig)`

[thing.t](../file/thing.t.html)\[[7124](../source/thing.t.html#7124)\]



*no description available*



<span id="dobjFor(DigWith)"></span>

`dobjFor(DigWith)`

[thing.t](../file/thing.t.html)\[[7151](../source/thing.t.html#7151)\]



For DigWith we merely provide verify handlers that rule out the action
wih the default values of isDiggable and canDigWithMe. The library
cannot model the effect of digging in general, so it's up to game code
to implement this on particular objects as required.



<span id="dobjFor(Doff)"></span>

`dobjFor(Doff)`

[thing.t](../file/thing.t.html)\[[6324](../source/thing.t.html#6324)\]



*no description available*



<span id="dobjFor(Drink)"></span>

`dobjFor(Drink)`

[thing.t](../file/thing.t.html)\[[6962](../source/thing.t.html#6962)\]



*no description available*



<span id="dobjFor(Drop)"></span>

`dobjFor(Drop)`

[thing.t](../file/thing.t.html)\[[4432](../source/thing.t.html#4432)\]



*no description available*



<span id="dobjFor(Eat)"></span>

`dobjFor(Eat)`

[thing.t](../file/thing.t.html)\[[6936](../source/thing.t.html#6936)\]



*no description available*



<span id="dobjFor(Enter)"></span>

`dobjFor(Enter)`

[thing.t](../file/thing.t.html)\[[6557](../source/thing.t.html#6557)\],
[postures.t](../file/postures.t.html)\[[470](../source/postures.t.html#470)\]



Treat Enter X as equivalent to Get In X

*Modified in
[postures.t](../file/postures.t.html)\[[470](../source/postures.t.html#470)\]:*  
When an actor enters something we need to determine what posture the
actor ends up in. \[MODIFIED FOR POSTURES EXTENSION\]



<span id="dobjFor(EnterOn)"></span>

`dobjFor(EnterOn)`

[thing.t](../file/thing.t.html)\[[8069](../source/thing.t.html#8069)\]



The base handling is simply to rule out EnterOn at verify. There's no
further handling the library can provide for a 'general' case so it's up
to game code to define it for specific cases.



<span id="dobjFor(Examine)"></span>

`dobjFor(Examine)`

[thing.t](../file/thing.t.html)\[[3968](../source/thing.t.html#3968)\],
[senseRegion.t](../file/senseRegion.t.html)\[[862](../source/senseRegion.t.html#862)\],
[cmdhelp.t](../file/cmdhelp.t.html)\[[879](../source/cmdhelp.t.html#879)\]



Now the handling for specific actions

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[862](../source/senseRegion.t.html#862)\]:*  
Modify the effect of Examine to show the remoteDesc if appropriate, or
else our regular desc if our sightSize is large, or else a message to
say we're too far away to see any detail. If we're in the same room as
the actor, simply carry out the regular (inherited) method.

*Modified in
[cmdhelp.t](../file/cmdhelp.t.html)\[[879](../source/cmdhelp.t.html#879)\]:*  
Modified for CMDHELP EXTENSION. Note the last turn on which this object
was examined.



<span id="dobjFor(Extinguish)"></span>

`dobjFor(Extinguish)`

[thing.t](../file/thing.t.html)\[[6905](../source/thing.t.html#6905)\]



*no description available*



<span id="dobjFor(Fasten)"></span>

`dobjFor(Fasten)`

[thing.t](../file/thing.t.html)\[[7664](../source/thing.t.html#7664)\]



*no description available*



<span id="dobjFor(FastenTo)"></span>

`dobjFor(FastenTo)`

[thing.t](../file/thing.t.html)\[[7692](../source/thing.t.html#7692)\]



*no description available*



<span id="dobjFor(Feel)"></span>

`dobjFor(Feel)`

[thing.t](../file/thing.t.html)\[[4142](../source/thing.t.html#4142)\]



*no description available*



<span id="dobjFor(Flip)"></span>

`dobjFor(Flip)`

[thing.t](../file/thing.t.html)\[[6240](../source/thing.t.html#6240)\]



*no description available*



<span id="dobjFor(Follow)"></span>

`dobjFor(Follow)`

[thing.t](../file/thing.t.html)\[[4506](../source/thing.t.html#4506)\]



*no description available*



<span id="dobjFor(GetOff)"></span>

`dobjFor(GetOff)`

[thing.t](../file/thing.t.html)\[[6614](../source/thing.t.html#6614)\],
[postures.t](../file/postures.t.html)\[[309](../source/postures.t.html#309)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[309](../source/postures.t.html#309)\]:*  
If an actor gets off something, we need to know what posture the actor
ends up in. We use the new location's defaultPosture. \[MODIFIED FOR
POSTURES EXTENSION\]



<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`

[thing.t](../file/thing.t.html)\[[6634](../source/thing.t.html#6634)\],
[postures.t](../file/postures.t.html)\[[490](../source/postures.t.html#490)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[490](../source/postures.t.html#490)\]:*  
When an actor gets out of something we need to determine what posture
the actor ends up in. We use the new location's default posture.
\[MODIFIED FOR POSTURES EXTENSION\]



<span id="dobjFor(GiveTo)"></span>

`dobjFor(GiveTo)`

[thing.t](../file/thing.t.html)\[[8961](../source/thing.t.html#8961)\]



*no description available*



<span id="dobjFor(GiveToImplicit)"></span>

`dobjFor(GiveToImplicit)`

[thing.t](../file/thing.t.html)\[[9062](../source/thing.t.html#9062)\]



*no description available*



<span id="dobjFor(GoAlong)"></span>

`dobjFor(GoAlong)`

[thing.t](../file/thing.t.html)\[[5332](../source/thing.t.html#5332)\]



*no description available*



<span id="dobjFor(GoNear)"></span>

`dobjFor(GoNear)`

[thing.t](../file/thing.t.html)\[[9173](../source/thing.t.html#9173)\]



The GoNear action allows the player character to teleport around the
map.



<span id="dobjFor(GoThrough)"></span>

`dobjFor(GoThrough)`

[thing.t](../file/thing.t.html)\[[5315](../source/thing.t.html#5315)\]



*no description available*



<span id="dobjFor(GoTo)"></span>

`dobjFor(GoTo)`

[thing.t](../file/thing.t.html)\[[7426](../source/thing.t.html#7426)\]



The GoTo action allows the player character to navigate the map through
the use of commands such as GO TO LOUNGE.



<span id="dobjFor(JumpOff)"></span>

`dobjFor(JumpOff)`

[thing.t](../file/thing.t.html)\[[7953](../source/thing.t.html#7953)\]



*no description available*



<span id="dobjFor(JumpOver)"></span>

`dobjFor(JumpOver)`

[thing.t](../file/thing.t.html)\[[7988](../source/thing.t.html#7988)\]



The base handling of JumpOver is simply to rule it out at the verify
stage.



<span id="dobjFor(Kiss)"></span>

`dobjFor(Kiss)`

[thing.t](../file/thing.t.html)\[[7893](../source/thing.t.html#7893)\]



*no description available*



<span id="dobjFor(LieIn)"></span>

`dobjFor(LieIn)`

[thing.t](../file/thing.t.html)\[[6603](../source/thing.t.html#6603)\],
[postures.t](../file/postures.t.html)\[[437](../source/postures.t.html#437)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[437](../source/postures.t.html#437)\]:*  
LieIn is handled much like StandIn \[MODIFIED FOR POSTURES EXTENSION\]



<span id="dobjFor(LieOn)"></span>

`dobjFor(LieOn)`

[thing.t](../file/thing.t.html)\[[6469](../source/thing.t.html#6469)\],
[postures.t](../file/postures.t.html)\[[251](../source/postures.t.html#251)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[251](../source/postures.t.html#251)\]:*  
Modification for LieOn handling \[DEFINED IN POSTURES EXTENSION\] If the
actor is already on the dobj, we just try to change the actor's posture
to lying. Otherwise we first move the actor to the dobj and then change
the actor's posture to lying.



<span id="dobjFor(LieOn)"></span>

`dobjFor(LieOn)`

[thing.t](../file/thing.t.html)\[[6528](../source/thing.t.html#6528)\]



*no description available*



<span id="dobjFor(Light)"></span>

`dobjFor(Light)`

[thing.t](../file/thing.t.html)\[[6867](../source/thing.t.html#6867)\]



Lighting an object makes it a light source by making its isLit property
true.



<span id="dobjFor(ListenTo)"></span>

`dobjFor(ListenTo)`

[thing.t](../file/thing.t.html)\[[4080](../source/thing.t.html#4080)\],
[senseRegion.t](../file/senseRegion.t.html)\[[916](../source/senseRegion.t.html#916)\],
[sensory.t](../file/sensory.t.html)\[[642](../source/sensory.t.html#642)\]



*no description available*

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[916](../source/senseRegion.t.html#916)\]:*  
Modify the effect of ListenTo to show the remoteListenDesc if
appropriate, or else our regular listenDesc if our soundSize is large,
or else a message to say we're too far away to hear. If we're in the
same room as the actor, simply carry out the regular (inherited) method.

*Modified in
[sensory.t](../file/sensory.t.html)\[[642](../source/sensory.t.html#642)\]:*  
\[MODIFIED FOR SENSORY EXTENSION\] If I have an associated Noise object
which isn't emanating, assume I have fallen silent, otherwise carry out
the inherited handling.



<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`

[thing.t](../file/thing.t.html)\[[6002](../source/thing.t.html#6002)\]



*no description available*



<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`

[thing.t](../file/thing.t.html)\[[5855](../source/thing.t.html#5855)\]



*no description available*



<span id="dobjFor(LookBehind)"></span>

`dobjFor(LookBehind)`

[thing.t](../file/thing.t.html)\[[5196](../source/thing.t.html#5196)\]



*no description available*



<span id="dobjFor(LookIn)"></span>

`dobjFor(LookIn)`

[thing.t](../file/thing.t.html)\[[4984](../source/thing.t.html#4984)\]



*no description available*



<span id="dobjFor(LookThrough)"></span>

`dobjFor(LookThrough)`

[thing.t](../file/thing.t.html)\[[5292](../source/thing.t.html#5292)\]



*no description available*



<span id="dobjFor(LookUnder)"></span>

`dobjFor(LookUnder)`

[thing.t](../file/thing.t.html)\[[5106](../source/thing.t.html#5106)\]



*no description available*



<span id="dobjFor(Move)"></span>

`dobjFor(Move)`

[thing.t](../file/thing.t.html)\[[6718](../source/thing.t.html#6718)\]



Moving an object is generally possible if the object is portable, but
there's no obvious effect, so by default this action does nothing except
say it's done nothing.



<span id="dobjFor(MoveTo)"></span>

`dobjFor(MoveTo)`

[thing.t](../file/thing.t.html)\[[6801](../source/thing.t.html#6801)\]



MoveTo is a more complex case than MOVE or MOVE WITH. In this
implementation we assume that it represents moving the direct object to
the vicinity of the indirect object, and so we track the object it's
been moved to.

This might be useful, say, if you wanted the player to have to MOVE the
chair TO the bookcase before being able to reach the top shelf by
standing on the chair, since you could then check the value of the
chair's movedTo property before deciding whether the top shelf was
accesssible.



<span id="dobjFor(MoveWith)"></span>

`dobjFor(MoveWith)`

[thing.t](../file/thing.t.html)\[[6738](../source/thing.t.html#6738)\]



*no description available*



<span id="dobjFor(Open)"></span>

`dobjFor(Open)`

[thing.t](../file/thing.t.html)\[[4723](../source/thing.t.html#4723)\]



*no description available*



<span id="dobjFor(PlugIn)"></span>

`dobjFor(PlugIn)`

[thing.t](../file/thing.t.html)\[[7862](../source/thing.t.html#7862)\]



*no description available*



<span id="dobjFor(PlugInto)"></span>

`dobjFor(PlugInto)`

[thing.t](../file/thing.t.html)\[[7790](../source/thing.t.html#7790)\]



The base handling of PlugInto on Thing merely rules it out at the verify
stage. A fuller implementation is provided by the PlugAttachable class
in the optional attachables module.



<span id="dobjFor(Pour)"></span>

`dobjFor(Pour)`

[thing.t](../file/thing.t.html)\[[8145](../source/thing.t.html#8145)\]



The base handling of Pour, PourOnto and PourInto is simply to rule out
all three actions at the verify stage. Game code that wants to allow
these actions on specific objects will need to provide further handling
for them.



<span id="dobjFor(PourInto)"></span>

`dobjFor(PourInto)`

[thing.t](../file/thing.t.html)\[[8204](../source/thing.t.html#8204)\]



*no description available*



<span id="dobjFor(PourOnto)"></span>

`dobjFor(PourOnto)`

[thing.t](../file/thing.t.html)\[[8155](../source/thing.t.html#8155)\]



*no description available*



<span id="dobjFor(Pull)"></span>

`dobjFor(Pull)`

[thing.t](../file/thing.t.html)\[[5370](../source/thing.t.html#5370)\]



*no description available*



<span id="dobjFor(Purloin)"></span>

`dobjFor(Purloin)`

[thing.t](../file/thing.t.html)\[[9105](../source/thing.t.html#9105)\]



PURLOIN allows the player to move any portable object in the game
directly into his/her inventory, wherever it is currently. We don't
allow absolutely anything to be purloined, as this could cause chaos.



<span id="dobjFor(Push)"></span>

`dobjFor(Push)`

[thing.t](../file/thing.t.html)\[[5349](../source/thing.t.html#5349)\]



*no description available*



<span id="dobjFor(PushTravelClimbDown)"></span>

`dobjFor(PushTravelClimbDown)`

[thing.t](../file/thing.t.html)\[[8817](../source/thing.t.html#8817)\]



*no description available*



<span id="dobjFor(PushTravelClimbUp)"></span>

`dobjFor(PushTravelClimbUp)`

[thing.t](../file/thing.t.html)\[[8793](../source/thing.t.html#8793)\]



*no description available*



<span id="dobjFor(PushTravelDir)"></span>

`dobjFor(PushTravelDir)`

[thing.t](../file/thing.t.html)\[[8425](../source/thing.t.html#8425)\]



PushTravelDir handles pushing an object in a particular direction, e.g.
PUSH BOX NORTH



<span id="dobjFor(PushTravelEnter)"></span>

`dobjFor(PushTravelEnter)`

[thing.t](../file/thing.t.html)\[[8715](../source/thing.t.html#8715)\]



PushTravelEnter handles commands like PUSH BOX INTO COFFIN, where the
indirect object is a Booth-like object. The syntactically identical
command for pushing things into an Enterable (e.g. PUSH BOX INTO HOUSE
where HOUSE represents the outside of a separate location) is handled on
the Enterable class.



<span id="dobjFor(PushTravelGetOutOf)"></span>

`dobjFor(PushTravelGetOutOf)`

[thing.t](../file/thing.t.html)\[[8753](../source/thing.t.html#8753)\]



*no description available*



<span id="dobjFor(PushTravelThrough)"></span>

`dobjFor(PushTravelThrough)`

[thing.t](../file/thing.t.html)\[[8684](../source/thing.t.html#8684)\]



PushTravelThrough handles pushing something through something, such as a
door or archway. Most of the actual handling is dealt with by the common
routines defined above.



<span id="dobjFor(PutBehind)"></span>

`dobjFor(PutBehind)`

[thing.t](../file/thing.t.html)\[[5653](../source/thing.t.html#5653)\]



*no description available*



<span id="dobjFor(PutIn)"></span>

`dobjFor(PutIn)`

[thing.t](../file/thing.t.html)\[[5469](../source/thing.t.html#5469)\]



*no description available*



<span id="dobjFor(PutOn)"></span>

`dobjFor(PutOn)`

[thing.t](../file/thing.t.html)\[[5396](../source/thing.t.html#5396)\]



*no description available*



<span id="dobjFor(PutUnder)"></span>

`dobjFor(PutUnder)`

[thing.t](../file/thing.t.html)\[[5560](../source/thing.t.html#5560)\]



*no description available*



<span id="dobjFor(QueryAbout)"></span>

`dobjFor(QueryAbout)`

[thing.t](../file/thing.t.html)\[[8915](../source/thing.t.html#8915)\]



*no description available*



<span id="dobjFor(Read)"></span>

`dobjFor(Read)`

[thing.t](../file/thing.t.html)\[[4477](../source/thing.t.html#4477)\],
[senseRegion.t](../file/senseRegion.t.html)\[[969](../source/senseRegion.t.html#969)\],
[brightness.t](../file/brightness.t.html)\[[382](../source/brightness.t.html#382)\]



*no description available*

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[969](../source/senseRegion.t.html#969)\]:*  
Modify the effect of a Read action to prevent this item being read from
a remote location unless isReadableFrom(gActor) is true.

*Modified in
[brightness.t](../file/brightness.t.html)\[[382](../source/brightness.t.html#382)\]:*  
If the available light is less than the light we need to read this item
(its brightnessForReading) then stop the read action at the check stage
by displaying our tooDarkToReadMsg.



<span id="dobjFor(Remove)"></span>

`dobjFor(Remove)`

[thing.t](../file/thing.t.html)\[[6668](../source/thing.t.html#6668)\]



We'll take REMOVE to mean DOFF when it's dobj is worn and TAKE
otherwise. This handling will be dealt with by removeDoer insteadof
remap, since this form of remap has now been discontinued. See english.t
for removeDoer (which seems to be a language-specific construct)



<span id="dobjFor(SayTo)"></span>

`dobjFor(SayTo)`

[thing.t](../file/thing.t.html)\[[8902](../source/thing.t.html#8902)\]



*no description available*



<span id="dobjFor(Screw)"></span>

`dobjFor(Screw)`

[thing.t](../file/thing.t.html)\[[8274](../source/thing.t.html#8274)\]



In the base handling we simply rule out Screw and Unscrew actions at the
verify stage. It's up to game code to provide specific handling for
objects that can be screwed and unscrewed.



<span id="dobjFor(ScrewWith)"></span>

`dobjFor(ScrewWith)`

[thing.t](../file/thing.t.html)\[[8284](../source/thing.t.html#8284)\]



*no description available*



<span id="dobjFor(Search)"></span>

`dobjFor(Search)`

[thing.t](../file/thing.t.html)\[[6704](../source/thing.t.html#6704)\]



Treat SEARCH as equivalent to LOOK IN



<span id="dobjFor(Set)"></span>

`dobjFor(Set)`

[thing.t](../file/thing.t.html)\[[8010](../source/thing.t.html#8010)\]



The Set command by itself doesn't do much. By default we just rule it
out at the verify stage.



<span id="dobjFor(SetTo)"></span>

`dobjFor(SetTo)`

[thing.t](../file/thing.t.html)\[[7386](../source/thing.t.html#7386)\]



*no description available*



<span id="dobjFor(ShowTo)"></span>

`dobjFor(ShowTo)`

[thing.t](../file/thing.t.html)\[[9002](../source/thing.t.html#9002)\]



*no description available*



<span id="dobjFor(ShowToImplicit)"></span>

`dobjFor(ShowToImplicit)`

[thing.t](../file/thing.t.html)\[[9034](../source/thing.t.html#9034)\]



*no description available*



<span id="dobjFor(SitIn)"></span>

`dobjFor(SitIn)`

[thing.t](../file/thing.t.html)\[[6602](../source/thing.t.html#6602)\],
[postures.t](../file/postures.t.html)\[[405](../source/postures.t.html#405)\]



*no description available*

*Modified in
[postures.t](../file/postures.t.html)\[[405](../source/postures.t.html#405)\]:*  
SitIn is handled much like StandIn \[MODIFIED FOR POSTURES EXTENSION\]



<span id="dobjFor(SitOn)"></span>

`dobjFor(SitOn)`

[thing.t](../file/thing.t.html)\[[6468](../source/thing.t.html#6468)\],
[postures.t](../file/postures.t.html)\[[220](../source/postures.t.html#220)\]



*no description available*



<span id="dobjFor(SitOn)"></span>

`dobjFor(SitOn)`

[thing.t](../file/thing.t.html)\[[6515](../source/thing.t.html#6515)\]



*no description available*



<span id="dobjFor(SmellSomething)"></span>

`dobjFor(SmellSomething)`

[thing.t](../file/thing.t.html)\[[4061](../source/thing.t.html#4061)\],
[senseRegion.t](../file/senseRegion.t.html)\[[990](../source/senseRegion.t.html#990)\],
[sensory.t](../file/sensory.t.html)\[[663](../source/sensory.t.html#663)\]



*no description available*

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[990](../source/senseRegion.t.html#990)\]:*  
Modify the effect of SmellSomething to show the remoteSmellDesc if
appropriate, or else our regular smellDesc if our smellSize is large, or
else a message to say we're too far away to smell. If we're in the same
room as the actor, simply carry out the regular (inherited) method.

*Modified in
[sensory.t](../file/sensory.t.html)\[[663](../source/sensory.t.html#663)\]:*  
\[MODIFIED FOR SENSORY EXTENSION\] If I have an associated Odor object
which isn't emanating, assume I no longer smell of anything, otherwise
carry out the inherited handling.



<span id="dobjFor(StandIn)"></span>

`dobjFor(StandIn)`

[thing.t](../file/thing.t.html)\[[6601](../source/thing.t.html#6601)\],
[postures.t](../file/postures.t.html)\[[355](../source/postures.t.html#355)\]



By default we'll treat standing, sitting or lying IN something as simply
equivalent to entering it.

*Modified in
[postures.t](../file/postures.t.html)\[[355](../source/postures.t.html#355)\]:*  
\[MODIFIED FOR POSTURES EXTENSION\]



<span id="dobjFor(StandOn)"></span>

`dobjFor(StandOn)`

[thing.t](../file/thing.t.html)\[[6467](../source/thing.t.html#6467)\],
[postures.t](../file/postures.t.html)\[[182](../source/postures.t.html#182)\]



Since we don't track postures in this library we'll treat STAND ON as
equivalent to BOARD

*Modified in
[postures.t](../file/postures.t.html)\[[182](../source/postures.t.html#182)\]:*  
Modification for StandOn handling \[DEFINED IN POSTURES EXTENSION\] If
the actor is already on the dobj, we just try to change the actor's
posture to standing. Otherwise we first move the actor to the dobj and
then change the actor's posture to standing.



<span id="dobjFor(StandOn)"></span>

`dobjFor(StandOn)`

[thing.t](../file/thing.t.html)\[[6502](../source/thing.t.html#6502)\]



*no description available*



<span id="dobjFor(Strike)"></span>

`dobjFor(Strike)`

[thing.t](../file/thing.t.html)\[[4617](../source/thing.t.html#4617)\]



*no description available*



<span id="dobjFor(SwitchOff)"></span>

`dobjFor(SwitchOff)`

[thing.t](../file/thing.t.html)\[[6187](../source/thing.t.html#6187)\]



*no description available*



<span id="dobjFor(SwitchOn)"></span>

`dobjFor(SwitchOn)`

[thing.t](../file/thing.t.html)\[[6158](../source/thing.t.html#6158)\]



*no description available*



<span id="dobjFor(SwitchVague)"></span>

`dobjFor(SwitchVague)`

[thing.t](../file/thing.t.html)\[[6214](../source/thing.t.html#6214)\]



*no description available*



<span id="dobjFor(Take)"></span>

`dobjFor(Take)`

[thing.t](../file/thing.t.html)\[[4171](../source/thing.t.html#4171)\]



*no description available*



<span id="dobjFor(TakeFrom)"></span>

`dobjFor(TakeFrom)`

[thing.t](../file/thing.t.html)\[[7186](../source/thing.t.html#7186)\]



We treat TAKE FROM as equivalent to TAKE except at the verify stage,
where we first check that the direct object is actually in the indirect
object.



<span id="dobjFor(TakeFrom)"></span>

`dobjFor(TakeFrom)`

[thing.t](../file/thing.t.html)\[[7188](../source/thing.t.html#7188)\]



*no description available*



<span id="dobjFor(TalkAbout)"></span>

`dobjFor(TalkAbout)`

[thing.t](../file/thing.t.html)\[[8928](../source/thing.t.html#8928)\]



*no description available*



<span id="dobjFor(TalkTo)"></span>

`dobjFor(TalkTo)`

[thing.t](../file/thing.t.html)\[[8941](../source/thing.t.html#8941)\]



*no description available*



<span id="dobjFor(Taste)"></span>

`dobjFor(Taste)`

[thing.t](../file/thing.t.html)\[[4104](../source/thing.t.html#4104)\]



*no description available*



<span id="dobjFor(TellAbout)"></span>

`dobjFor(TellAbout)`

[thing.t](../file/thing.t.html)\[[8888](../source/thing.t.html#8888)\]



*no description available*



<span id="dobjFor(Throw)"></span>

`dobjFor(Throw)`

[thing.t](../file/thing.t.html)\[[6399](../source/thing.t.html#6399)\]



*no description available*



<span id="dobjFor(ThrowAt)"></span>

`dobjFor(ThrowAt)`

[thing.t](../file/thing.t.html)\[[7232](../source/thing.t.html#7232)\]



*no description available*



<span id="dobjFor(ThrowDir)"></span>

`dobjFor(ThrowDir)`

[thing.t](../file/thing.t.html)\[[4650](../source/thing.t.html#4650)\]



*no description available*



<span id="dobjFor(ThrowTo)"></span>

`dobjFor(ThrowTo)`

[thing.t](../file/thing.t.html)\[[7297](../source/thing.t.html#7297)\]



*no description available*



<span id="dobjFor(Turn)"></span>

`dobjFor(Turn)`

[thing.t](../file/thing.t.html)\[[4849](../source/thing.t.html#4849)\]



*no description available*



<span id="dobjFor(TurnTo)"></span>

`dobjFor(TurnTo)`

[thing.t](../file/thing.t.html)\[[7342](../source/thing.t.html#7342)\]



Turning something To is setting it to a value by rotating it, such as
turning a dial to point to a particular number.



<span id="dobjFor(TurnWith)"></span>

`dobjFor(TurnWith)`

[thing.t](../file/thing.t.html)\[[4876](../source/thing.t.html#4876)\]



*no description available*



<span id="dobjFor(TypeOn)"></span>

`dobjFor(TypeOn)`

[thing.t](../file/thing.t.html)\[[8042](../source/thing.t.html#8042)\]



*no description available*



<span id="dobjFor(TypeOnVague)"></span>

`dobjFor(TypeOnVague)`

[thing.t](../file/thing.t.html)\[[8032](../source/thing.t.html#8032)\]



The base handling of both the vague (TYPE ON X) and specific (TYPE FOO
ON X) forms of TypeOn is simply to rule them out at the verify stage.
Game code that needs objects that can be typed on is responsible for
handling these actions in custom code.



<span id="dobjFor(Unfasten)"></span>

`dobjFor(Unfasten)`

[thing.t](../file/thing.t.html)\[[7725](../source/thing.t.html#7725)\]



*no description available*



<span id="dobjFor(UnfastenFrom)"></span>

`dobjFor(UnfastenFrom)`

[thing.t](../file/thing.t.html)\[[7741](../source/thing.t.html#7741)\]



*no description available*



<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`

[thing.t](../file/thing.t.html)\[[5926](../source/thing.t.html#5926)\]



*no description available*



<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`

[thing.t](../file/thing.t.html)\[[5766](../source/thing.t.html#5766)\]



Note: we don't use isLockable, because this is not a binary property;
there are different kings of lockability and defining an isLockable
property in addition would only confuse things and might break the
logic.



<span id="dobjFor(Unplug)"></span>

`dobjFor(Unplug)`

[thing.t](../file/thing.t.html)\[[7873](../source/thing.t.html#7873)\]



*no description available*



<span id="dobjFor(UnplugFrom)"></span>

`dobjFor(UnplugFrom)`

[thing.t](../file/thing.t.html)\[[7826](../source/thing.t.html#7826)\]



*no description available*



<span id="dobjFor(Unscrew)"></span>

`dobjFor(Unscrew)`

[thing.t](../file/thing.t.html)\[[8310](../source/thing.t.html#8310)\]



*no description available*



<span id="dobjFor(UnscrewWith)"></span>

`dobjFor(UnscrewWith)`

[thing.t](../file/thing.t.html)\[[8320](../source/thing.t.html#8320)\]



*no description available*



<span id="dobjFor(Wear)"></span>

`dobjFor(Wear)`

[thing.t](../file/thing.t.html)\[[6295](../source/thing.t.html#6295)\]



*no description available*



<span id="dobjFor(WriteOn)"></span>

`dobjFor(WriteOn)`

[thing.t](../file/thing.t.html)\[[8087](../source/thing.t.html#8087)\]



By default we simply rule out writing on things at the verify stage.



<span id="doPushTravel"></span>

`doPushTravel (via)`

[thing.t](../file/thing.t.html)\[[8530](../source/thing.t.html#8530)\]



Carry out the push travel on the direct object of the action.



<span id="examineStatus"></span>

`examineStatus ( )`

[thing.t](../file/thing.t.html)\[[1651](../source/thing.t.html#1651)\]



Additional information to display after our desc in response to an
EXAMINE command.



<span id="filterResolveList"></span>

`filterResolveList (np, cmd, mode)`<span class="rem">OVERRIDDEN</span>

[senseRegion.t](../file/senseRegion.t.html)\[[1067](../source/senseRegion.t.html#1067)\]



For certain actions like EXAMINE there's no point trying to carry them
out on something that can't be seen (remotely) if there are other things
that can be seen that matched the player's command.



<span id="findHidden"></span>

`findHidden (prop, prep)`

[thing.t](../file/thing.t.html)\[[5078](../source/thing.t.html#5078)\]



If there's something hidden in the dobj but nowhere obvious to move it
to then by default we move everything from the hiddenIn list to the
actor's inventory and announce that the actor has taken it. We call this
out as a separate method to make it easy to override if desired.



<span id="findPlausibleKey"></span>

`findPlausibleKey (silent, =, nil)`

[thing.t](../file/thing.t.html)\[[6088](../source/thing.t.html#6088)\]



Find a key among the actor's possessions that might plausibly lock or
unlock us. If the silent parameter is true, then don't report a failed
attempt.



<span id="firstContainerPathBlock"></span>

`firstContainerPathBlock (other, inProp, outProp)`

[thing.t](../file/thing.t.html)\[[3047](../source/thing.t.html#3047)\]



Get the first blockage in a container path. This calls
containerPathBlock() and returns the first blockage in the list, or nil
if there's no blockage.



<span id="getBulkWithin"></span>

`getBulkWithin ( )`

[thing.t](../file/thing.t.html)\[[2070](../source/thing.t.html#2070)\]



Calculate the total bulk of the items contained within this object.



<span id="getCarriedBulk"></span>

`getCarriedBulk ( )`

[thing.t](../file/thing.t.html)\[[2083](../source/thing.t.html#2083)\]



Calculate the total bulk carried by an actor, which excludes the bulk of
any items currently worn or anything fixed in place.



<span id="getCarriedWeight"></span>

`getCarriedWeight ( )`

[weight.t](../file/weight.t.html)\[[32](../source/weight.t.html#32)\]



The total weight of the items we're carrying, excluding anything worn or
anything fixed in place. \[WEIGHT EXTENSION



<span id="getStatuslineExitsHeight"></span>

`getStatuslineExitsHeight ( )`

[thing.t](../file/thing.t.html)\[[1603](../source/thing.t.html#1603)\]



Get the estimated height, in lines of text, of the exits display's
contribution to the status line. This is used to calculate the extra
height we need in the status line, if any, to display the exit list. If
we're not configured to display exits in the status line, this should
return zero.



<span id="getWeightWithin"></span>

`getWeightWithin ( )`

[weight.t](../file/weight.t.html)\[[23](../source/weight.t.html#23)\]



The total weight of our contents, excluding our own weight. \[WEIGHT
EXTENSION\]



<span id="handleCommand"></span>

`handleCommand (action)`

[thing.t](../file/thing.t.html)\[[3831](../source/thing.t.html#3831)\]



Handle a command directed to this open (e.g. BALL, GET IN BOX). Since
inanimate objects generally can't respond to commands we simply display
a message announcing the futility of issuing one. This method is
overridden on Actor to allow Actors to respond to commands via
CommandTopics.



<span id="hasSeen"></span>

`hasSeen (obj)`

[thing.t](../file/thing.t.html)\[[3661](../source/thing.t.html#3661)\]



Test whether this Thing has seen obbj.



<span id="hideFromAll"></span>

`hideFromAll (action)`

[thing.t](../file/thing.t.html)\[[3876](../source/thing.t.html#3876)\]



To exclude this item from the list of objects to be acted upon when the
player types a command with ALL for action, override this method to
return true for the action or actions concerned. Note that this
exclusion is applied after the action has constructed its own list of
objects that ALL should apply to, and can only be used to make further
exclusions.

It shouldn't be necessary to use this method very often, since the
normal approach will be to override the getAll() method on the
appropriate action. It may be useful to use this method to handle
exceptional cases, however.



<span id="interiorParent"></span>

`interiorParent ( )`

[thing.t](../file/thing.t.html)\[[2786](../source/thing.t.html#2786)\]



*no description available*



<span id="iobjFor(AttachTo)"></span>

`iobjFor(AttachTo)`

[thing.t](../file/thing.t.html)\[[7577](../source/thing.t.html#7577)\]



*no description available*



<span id="iobjFor(AttackWith)"></span>

`iobjFor(AttackWith)`

[thing.t](../file/thing.t.html)\[[4594](../source/thing.t.html#4594)\]



*no description available*



<span id="iobjFor(BurnWith)"></span>

`iobjFor(BurnWith)`

[thing.t](../file/thing.t.html)\[[6281](../source/thing.t.html#6281)\]



*no description available*



<span id="iobjFor(CleanWith)"></span>

`iobjFor(CleanWith)`

[thing.t](../file/thing.t.html)\[[7108](../source/thing.t.html#7108)\]



*no description available*



<span id="iobjFor(CutWith)"></span>

`iobjFor(CutWith)`

[thing.t](../file/thing.t.html)\[[4948](../source/thing.t.html#4948)\]



*no description available*



<span id="iobjFor(Default)"></span>

`iobjFor(Default)`

[thing.t](../file/thing.t.html)\[[3934](../source/thing.t.html#3934)\]



*no description available*



<span id="iobjFor(DetachFrom)"></span>

`iobjFor(DetachFrom)`

[thing.t](../file/thing.t.html)\[[7631](../source/thing.t.html#7631)\]



*no description available*



<span id="iobjFor(DigWith)"></span>

`iobjFor(DigWith)`

[thing.t](../file/thing.t.html)\[[7161](../source/thing.t.html#7161)\]



*no description available*



<span id="iobjFor(FastenTo)"></span>

`iobjFor(FastenTo)`

[thing.t](../file/thing.t.html)\[[7704](../source/thing.t.html#7704)\]



*no description available*



<span id="iobjFor(GiveTo)"></span>

`iobjFor(GiveTo)`

[thing.t](../file/thing.t.html)\[[8983](../source/thing.t.html#8983)\]



*no description available*



<span id="iobjFor(LockWith)"></span>

`iobjFor(LockWith)`

[thing.t](../file/thing.t.html)\[[5905](../source/thing.t.html#5905)\]



*no description available*



<span id="iobjFor(MoveTo)"></span>

`iobjFor(MoveTo)`

[thing.t](../file/thing.t.html)\[[6835](../source/thing.t.html#6835)\]



*no description available*



<span id="iobjFor(MoveWith)"></span>

`iobjFor(MoveWith)`

[thing.t](../file/thing.t.html)\[[6768](../source/thing.t.html#6768)\]



*no description available*



<span id="iobjFor(PlugInto)"></span>

`iobjFor(PlugInto)`

[thing.t](../file/thing.t.html)\[[7805](../source/thing.t.html#7805)\]



*no description available*



<span id="iobjFor(PourInto)"></span>

`iobjFor(PourInto)`

[thing.t](../file/thing.t.html)\[[8228](../source/thing.t.html#8228)\]



*no description available*



<span id="iobjFor(PourOnto)"></span>

`iobjFor(PourOnto)`

[thing.t](../file/thing.t.html)\[[8182](../source/thing.t.html#8182)\]



*no description available*



<span id="iobjFor(PushTravelClimbDown)"></span>

`iobjFor(PushTravelClimbDown)`

[thing.t](../file/thing.t.html)\[[8825](../source/thing.t.html#8825)\]



*no description available*



<span id="iobjFor(PushTravelClimbUp)"></span>

`iobjFor(PushTravelClimbUp)`

[thing.t](../file/thing.t.html)\[[8801](../source/thing.t.html#8801)\]



*no description available*



<span id="iobjFor(PushTravelEnter)"></span>

`iobjFor(PushTravelEnter)`

[thing.t](../file/thing.t.html)\[[8725](../source/thing.t.html#8725)\]



*no description available*



<span id="iobjFor(PushTravelGetOutOf)"></span>

`iobjFor(PushTravelGetOutOf)`

[thing.t](../file/thing.t.html)\[[8767](../source/thing.t.html#8767)\]



*no description available*



<span id="iobjFor(PushTravelThrough)"></span>

`iobjFor(PushTravelThrough)`

[thing.t](../file/thing.t.html)\[[8692](../source/thing.t.html#8692)\]



*no description available*



<span id="iobjFor(PutBehind)"></span>

`iobjFor(PutBehind)`

[thing.t](../file/thing.t.html)\[[5689](../source/thing.t.html#5689)\],
[weight.t](../file/weight.t.html)\[[201](../source/weight.t.html#201)\]



Handled by iobj

*Modified in
[weight.t](../file/weight.t.html)\[[201](../source/weight.t.html#201)\]:*  
Modifications to PutBehind handling to check for weight hidden behind
this item. \[WEIGHT EXTENSION\]



<span id="iobjFor(PutIn)"></span>

`iobjFor(PutIn)`

[thing.t](../file/thing.t.html)\[[5505](../source/thing.t.html#5505)\],
[weight.t](../file/weight.t.html)\[[159](../source/weight.t.html#159)\]



handled on iobj

*Modified in
[weight.t](../file/weight.t.html)\[[159](../source/weight.t.html#159)\]:*  
Modifications to PutIn handling to check for weight hidden inside this
item. \[WEIGHT EXTENSION\]



<span id="iobjFor(PutOn)"></span>

`iobjFor(PutOn)`

[thing.t](../file/thing.t.html)\[[5439](../source/thing.t.html#5439)\]



*no description available*



<span id="iobjFor(PutUnder)"></span>

`iobjFor(PutUnder)`

[thing.t](../file/thing.t.html)\[[5597](../source/thing.t.html#5597)\],
[weight.t](../file/weight.t.html)\[[180](../source/weight.t.html#180)\]



Handled by iobj

*Modified in
[weight.t](../file/weight.t.html)\[[180](../source/weight.t.html#180)\]:*  
Modifications to PutUnder handling to check for weight hidden under this
item. \[WEIGHT EXTENSION\]



<span id="iobjFor(ScrewWith)"></span>

`iobjFor(ScrewWith)`

[thing.t](../file/thing.t.html)\[[8294](../source/thing.t.html#8294)\]



*no description available*



<span id="iobjFor(ShowTo)"></span>

`iobjFor(ShowTo)`

[thing.t](../file/thing.t.html)\[[9015](../source/thing.t.html#9015)\]



*no description available*



<span id="iobjFor(TakeFrom)"></span>

`iobjFor(TakeFrom)`

[thing.t](../file/thing.t.html)\[[7202](../source/thing.t.html#7202)\]



*no description available*



<span id="iobjFor(ThrowAt)"></span>

`iobjFor(ThrowAt)`

[thing.t](../file/thing.t.html)\[[7258](../source/thing.t.html#7258)\],
[senseRegion.t](../file/senseRegion.t.html)\[[1039](../source/senseRegion.t.html#1039)\]



*no description available*

*Modified in
[senseRegion.t](../file/senseRegion.t.html)\[[1039](../source/senseRegion.t.html#1039)\]:*  
Modify the effects of throwing something at this object



<span id="iobjFor(ThrowTo)"></span>

`iobjFor(ThrowTo)`

[thing.t](../file/thing.t.html)\[[7311](../source/thing.t.html#7311)\]



*no description available*



<span id="iobjFor(TurnWith)"></span>

`iobjFor(TurnWith)`

[thing.t](../file/thing.t.html)\[[4900](../source/thing.t.html#4900)\]



*no description available*



<span id="iobjFor(UnfastenFrom)"></span>

`iobjFor(UnfastenFrom)`

[thing.t](../file/thing.t.html)\[[7756](../source/thing.t.html#7756)\]



*no description available*



<span id="iobjFor(UnlockWith)"></span>

`iobjFor(UnlockWith)`

[thing.t](../file/thing.t.html)\[[5835](../source/thing.t.html#5835)\]



*no description available*



<span id="iobjFor(UnplugFrom)"></span>

`iobjFor(UnplugFrom)`

[thing.t](../file/thing.t.html)\[[7840](../source/thing.t.html#7840)\]



*no description available*



<span id="iobjFor(UnscrewWith)"></span>

`iobjFor(UnscrewWith)`

[thing.t](../file/thing.t.html)\[[8330](../source/thing.t.html#8330)\]



*no description available*



<span id="isAudibleFrom"></span>

`isAudibleFrom (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[766](../source/senseRegion.t.html#766)\]



Is this item audible from the remote location containing pov? By default
it is if it's soundSize is not small, but this can be overridden, for
example to vary with the pov.



<span id="isChild"></span>

`isChild (obj, typ)`

[thing.t](../file/thing.t.html)\[[2584](../source/thing.t.html#2584)\]



Are we a containment "child" of the given object with the given location
type? This returns true if our location is the given object and our
locType is the given type, or our location is a containment child of the
given object with the given type.

'typ' is a LocType giving the relationship to test for, or nil. If it's
nil, we'll return true if we have any containment relationship to 'obj'.



<span id="isDirectChild"></span>

`isDirectChild (obj, typ)`

[thing.t](../file/thing.t.html)\[[2603](../source/thing.t.html#2603)\]



Are we a direct containment child of the given object with the given
containment type? 'typ' is a LocType giving the relationship to test
for, or nil. If it's nil, we'll return true if we have any direct
containment relationship with 'obj'.



<span id="isDirectlyHeldBy"></span>

`isDirectlyHeldBy (obj)`

[thing.t](../file/thing.t.html)\[[2311](../source/thing.t.html#2311)\]



are we directly held by the given object?



<span id="isDirectlyIn"></span>

`isDirectlyIn (cont)`

[thing.t](../file/thing.t.html)\[[2618](../source/thing.t.html#2618)\]



Are we directly in cont?



<span id="isDirectlyWornBy"></span>

`isDirectlyWornBy (obj)`

[thing.t](../file/thing.t.html)\[[2328](../source/thing.t.html#2328)\]



are we directly worn by the given object?



<span id="isHeldBy"></span>

`isHeldBy (obj)`

[thing.t](../file/thing.t.html)\[[3133](../source/thing.t.html#3133)\]



are we held by the given object, directly or indirectly?



<span id="isIlluminated"></span>

`isIlluminated ( )`

[thing.t](../file/thing.t.html)\[[1044](../source/thing.t.html#1044)\],
[brightness.t](../file/brightness.t.html)\[[341](../source/brightness.t.html#341)\]



If we're a room, are we illuminated (is there enough light for an actor
within us to see by)?

*Modified in
[brightness.t](../file/brightness.t.html)\[[341](../source/brightness.t.html#341)\]:*  
\[BRIGHTNESS EXTENSION\]

Change the definition of having sufficient light to see by to have an
accumulated brightess within greater than our illumination threshold. We
only do this if the light probe is off-stage, however, since otherwise
we'll cause a stack overflow via a circular reference while the
brightnessWithin is being calculated; if the lightProbe\_ is in use we
accordingly fall back on the inherited handling. (This will need looking
at since it prevents recogition of a light source in a remote location
in the same SenseRegion).



<span id="isIn"></span>

`isIn (cont)`

[thing.t](../file/thing.t.html)\[[2633](../source/thing.t.html#2633)\]



Are we in cont?



<span id="isInterior"></span>

`isInterior (obj)`

[thing.t](../file/thing.t.html)\[[2804](../source/thing.t.html#2804)\]



Am I on the inside of the given object? This returns true if our
relationship to the given object is an interior location type.



<span id="isOrIsIn"></span>

`isOrIsIn (cont)`

[thing.t](../file/thing.t.html)\[[2648](../source/thing.t.html#2648)\]



Are either oont or in cont ?



<span id="isOutside"></span>

`isOutside (obj)`

[thing.t](../file/thing.t.html)\[[3125](../source/thing.t.html#3125)\]



are we on the exterior of the given object, directly or indirectly?



<span id="isReadableFrom"></span>

`isReadableFrom (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[782](../source/senseRegion.t.html#782)\]



Assuming this item is readable at all, is it readable from the remote
location containing pov? By default we assume this is the case if and
only if the item's sightSize is large, but this can be overridden, for
example for a large item with small lettering.



<span id="isSmellableFrom"></span>

`isSmellableFrom (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[773](../source/senseRegion.t.html#773)\]



Is this item smellable from the remote location containing pov? By
default it is if it's smellSize is not small, but this can be
overridden, for example to vary with the pov.



<span id="isThereALightSourceIn"></span>

`isThereALightSourceIn (lst)`

[thing.t](../file/thing.t.html)\[[1065](../source/thing.t.html#1065)\]



Determine (recursively) whether lst contains a light source; i.e.
whether any of the items within list is lit or whether any of the
visible contents of any of the items in lst it lit.



<span id="isVisibleFrom"></span>

`isVisibleFrom (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[758](../source/senseRegion.t.html#758)\]



Is this item visible from the remote location containing pov? By default
it is if it's sightSize is not small, but this can be overridden, for
example to vary with the pov.



<span id="isWornBy"></span>

`isWornBy (obj)`

[thing.t](../file/thing.t.html)\[[2321](../source/thing.t.html#2321)\]



are we worn by the given object, directly or indirectly?



<span id="knowsAbout"></span>

`knowsAbout (obj)`

[thing.t](../file/thing.t.html)\[[3667](../source/thing.t.html#3667)\]



Test whether this Thing knows about obj, which it does either if it has
seen this obj or its knownProp (by default, familiar) is true.



<span id="listableContentsOf"></span>

`listableContentsOf (cont)`

[thing.t](../file/thing.t.html)\[[1983](../source/thing.t.html#1983)\]



The subset of the contents of cont that should be listed.



<span id="listContents"></span>

`listContents (lister, =, &, roomContentsLister)`

[thing.t](../file/thing.t.html)\[[1170](../source/thing.t.html#1170)\]



List the contents of this object using lister.



<span id="listenDesc"></span>

`listenDesc ( )`

[sensory.t](../file/sensory.t.html)\[[617](../source/sensory.t.html#617)\]



By default we split our listenDesc into listenDescWithoutSource (when
the player character can't hear us) and listenDescWithSource (when the
pc can). If we don't need this distinction we can override this method
directly. \[MODIFIED FOR SENSORY EXTENSION\]



<span id="listRemoteContents"></span>

`listRemoteContents (lst, lister, pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[598](../source/senseRegion.t.html#598)\]



List contents as seen from a remote location



<span id="listSubcontentsOf"></span>

`listSubcontentsOf (contList, lister, =, &, examineLister)`

[thing.t](../file/thing.t.html)\[[1351](../source/thing.t.html#1351)\]



List the contents of every item in contList, recursively listing the
contents of contents all the way down the containment tree. The contList
parameter can also be passed as a singleton object.



<span id="litWithin"></span>

`litWithin ( )`

[thing.t](../file/thing.t.html)\[[3566](../source/thing.t.html#3566)\],
[brightness.t](../file/brightness.t.html)\[[353](../source/brightness.t.html#353)\]



Is this object's interior lit? an object if the object itself is a light
source, or anything directly inside shines outwards, or we can see out
from within and our location shines inwards.

*Modified in
[brightness.t](../file/brightness.t.html)\[[353](../source/brightness.t.html#353)\]:*  
For the purposes of the BRIGHTNESS EXTENSION, litWithin() should return
the same result as isIlluminated.



<span id="locationWhich"></span>

`locationWhich (func)`

[thing.t](../file/thing.t.html)\[[3320](../source/thing.t.html#3320)\]



*no description available*



<span id="locType"></span>

`locType ( )`

[thing.t](../file/thing.t.html)\[[3082](../source/thing.t.html#3082)\]



Our location type with respect to our immediate container; e.g. are we
In, On, Under or Behind it?



<span id="lookAroundWithin"></span>

`lookAroundWithin ( )`

[thing.t](../file/thing.t.html)\[[1110](../source/thing.t.html#1110)\]



Look around within this Thing (Room or Booth) to provide a full
description of this location as seen from within, including our headline
name, our internal description, and a listing of our visible contents.



<span id="makeCleaned"></span>

`makeCleaned (stat)`

[thing.t](../file/thing.t.html)\[[7050](../source/thing.t.html#7050)\]



Carry out the effects of cleaning. By default we just set the value of
the isClean property, but game code could override this to carry out any
side effects of cleaning, such as revealing the inscription on a dirty
old gravestone.



<span id="makeFastened"></span>

`makeFastened (stat)`

[thing.t](../file/thing.t.html)\[[7662](../source/thing.t.html#7662)\]



Make something fastened or unfastened. By default we just change the
value of its isFastened property, but game code could override this to
provide further side-effects on particular objects.



<span id="makeLit"></span>

`makeLit (stat)`

[thing.t](../file/thing.t.html)\[[2010](../source/thing.t.html#2010)\],
[english.t](../file/english.t.html)\[[2148](../source/english.t.html#2148)\],
[signals.t](../file/signals.t.html)\[[211](../source/signals.t.html#211)\]



Make this object lit or unlit

*Modified in
[english.t](../file/english.t.html)\[[2148](../source/english.t.html#2148)\]:*  
Check whether we need to add or remove the LitUnlit State from our list
of states.

*Modified in
[signals.t](../file/signals.t.html)\[[211](../source/signals.t.html#211)\]:*  
emit a litSignal or unlitSignal when this object is lit or unlit.
\[SIGNALS EXTENSION\]



<span id="makeLocked"></span>

`makeLocked (stat)`

[thing.t](../file/thing.t.html)\[[2279](../source/thing.t.html#2279)\],
[signals.t](../file/signals.t.html)\[[231](../source/signals.t.html#231)\]



Make us locked or ublocked. We define this as a method so that
subclasses such as Door can override to produce side effects (such as
locking or unlocking the other side).

*Modified in
[signals.t](../file/signals.t.html)\[[231](../source/signals.t.html#231)\]:*  
emit a lockSignal or unlockSignal when this object is locked or
unlocked. \[SIGNALS EXTENSION\]



<span id="makeMovedTo"></span>

`makeMovedTo (loc)`

[thing.t](../file/thing.t.html)\[[6830](../source/thing.t.html#6830)\]



Cause this object to be moved to loc



<span id="makeOn"></span>

`makeOn (stat)`

[thing.t](../file/thing.t.html)\[[2293](../source/thing.t.html#2293)\],
[signals.t](../file/signals.t.html)\[[241](../source/signals.t.html#241)\]



switch this item on or off

*Modified in
[signals.t](../file/signals.t.html)\[[241](../source/signals.t.html#241)\]:*  
emit an onSignal or offSignal when this object is turned on or off
\[SIGNALS EXTENSION\]



<span id="makeOpen"></span>

`makeOpen (stat)`

[thing.t](../file/thing.t.html)\[[4703](../source/thing.t.html#4703)\],
[signals.t](../file/signals.t.html)\[[297](../source/signals.t.html#297)\]



Make us open or closed. We define this as a method so that subclasses
such as Door can override to produce side effects (such as opening or
closing the other side).

*Modified in
[signals.t](../file/signals.t.html)\[[297](../source/signals.t.html#297)\]:*  
emit an openSignal or closeSignal when this object is open or closed.
\[SIGNALS EXTENSION\]



<span id="makeSetting"></span>

`makeSetting (val)`

[thing.t](../file/thing.t.html)\[[7413](../source/thing.t.html#7413)\]



This would be a good place to put code to validate the setting



<span id="makeWorn"></span>

`makeWorn (stat)`

[thing.t](../file/thing.t.html)\[[2308](../source/thing.t.html#2308)\],
[signals.t](../file/signals.t.html)\[[251](../source/signals.t.html#251)\]



Make this object worn or not worn. If this object is worn, note who it's
worn by. If stat is nil the object is no longer being worn.

*Modified in
[signals.t](../file/signals.t.html)\[[251](../source/signals.t.html#251)\]:*  
emit a wornSignal or doffSignal when this object is worn or doffed
(taken off). \[SIGNALS EXTENSION\]



<span id="moveHidden"></span>

`moveHidden (prop, loc)`

[thing.t](../file/thing.t.html)\[[4374](../source/thing.t.html#4374)\]



Service method: move everything in the prop property to loc and mark it
as seen.



<span id="moveInto"></span>

`moveInto (newCont)`

[thing.t](../file/thing.t.html)\[[2451](../source/thing.t.html#2451)\],
[signals.t](../file/signals.t.html)\[[264](../source/signals.t.html#264)\]



Basic moveInto for moving an object from one container to another by
programmatic fiat.

*Modified in
[signals.t](../file/signals.t.html)\[[264](../source/signals.t.html#264)\]:*  
emit a moveSignal when this object is moved. \[SIGNALS EXTENSION\]



<span id="moveMLIntoAdd"></span>

`moveMLIntoAdd (ml)`

[thing.t](../file/thing.t.html)\[[2538](../source/thing.t.html#2538)\]



Move a MultiLoc (ml) into this additional Thing or Room, by adding it to
this thing's contents list and adding the Thing to ml's locationList.



<span id="moveMLOutOf"></span>

`moveMLOutOf (ml)`

[thing.t](../file/thing.t.html)\[[2552](../source/thing.t.html#2552)\]



Move a MultiLoc (ml) out of this object, by removing it from our
contents list and removing us from its locationList.



<span id="nestedLoc"></span>

`nestedLoc (actor)`

[postures.t](../file/postures.t.html)\[[516](../source/postures.t.html#516)\]



MODIFIED FOR POSTURES EXTENSION to include the actor's posture



<span id="nominalOwner"></span>

`nominalOwner ( )`

[thing.t](../file/thing.t.html)\[[3231](../source/thing.t.html#3231)\]



Get my nominal owner. If we have an explicit owner, we'll return the
first explicit owner. Otherwise, we'll look for a container that has
ownsContents = true, and return the first such container.



<span id="noteSeen"></span>

`noteSeen ( )`

[thing.t](../file/thing.t.html)\[[3625](../source/thing.t.html#3625)\],
[signals.t](../file/signals.t.html)\[[286](../source/signals.t.html#286)\]



Note that we've been seen and where we were last seen

*Modified in
[signals.t](../file/signals.t.html)\[[286](../source/signals.t.html#286)\]:*  
emit a seenSignal or unlitSignal when this object is seen. \[SIGNALS
EXTENSION\]



<span id="notifyEvent"></span>

`notifyEvent (event, source)`

[sensory.t](../file/sensory.t.html)\[[583](../source/sensory.t.html#583)\]



Our common handler for SensoryEvents; it may often be more convenient to
use this than to write separate handlers for each kind of SensoryEvent,
since in any case the event parameter (containing the SensoryEvent
that's just been triggered) tells us what kind of SensoryEvent it is.
The source parameter is the object associated with the event. \[DEFINED
IN SENSORY EXTENSION\]



<span id="notifyInsert"></span>

`notifyInsert (obj)`

[thing.t](../file/thing.t.html)\[[2530](../source/thing.t.html#2530)\]



Receive notification that obj is about to be inserted into us; by
default we do nothing.



<span id="notifyRemove"></span>

`notifyRemove (obj)`

[thing.t](../file/thing.t.html)\[[2510](../source/thing.t.html#2510)\]



Receive notification that obj is about to be removed from inside us; by
default we do nothing. Do NOT use this method to prevent the removal of
the object from us; use checkRemove(obj) instead.



<span id="notifySightEvent"></span>

`notifySightEvent (event, source)`

[sensory.t](../file/sensory.t.html)\[[573](../source/sensory.t.html#573)\]



Our reaction to a SightEvent. By default we defer to the common handler.



<span id="notifySmellEvent"></span>

`notifySmellEvent (event, source)`

[sensory.t](../file/sensory.t.html)\[[570](../source/sensory.t.html#570)\]



Our reaction to a SmellEvent. By default we defer to the common handler.



<span id="notifySoundEvent"></span>

`notifySoundEvent (event, source)`

[sensory.t](../file/sensory.t.html)\[[567](../source/sensory.t.html#567)\]



The methods that define our reactions to SoundEvents, SmellEvents and
SightEvents respectively. By default all three methods defer to a common
handler. \[DEFINED IN SENSORY EXTENSION\]



<span id="notionalContents"></span>

`notionalContents ( )`

[thing.t](../file/thing.t.html)\[[2163](../source/thing.t.html#2163)\]



Our notional total contents is our normal contents plus anything
contained in any of our remapXX objects representing our associated
proxy container, surface, underside and rear, excluding anything in a
closed opaque container (which would not be visible).



<span id="outermostParent"></span>

`outermostParent ( )`

[thing.t](../file/thing.t.html)\[[3119](../source/thing.t.html#3119)\]



Get my outermost parent. This is simply our ancestor in the location
tree that has no location itself.



<span id="outermostVisibleParent"></span>

`outermostVisibleParent ( )`

[thing.t](../file/thing.t.html)\[[3054](../source/thing.t.html#3054)\]



*no description available*



<span id="ownedBy"></span>

`ownedBy (obj)`

[thing.t](../file/thing.t.html)\[[3255](../source/thing.t.html#3255)\]



Does the given object own me, explicitly or implicitly? This returns
true if 'obj' is in my 'owner' list, but it can also return true if
there's merely an implied ownership relationship. Location can imply
ownership: BOB'S KEY could refer to the key that Bob is holding, whether
or not it would continue to be considered his key if he were to drop it.

We return true if 'obj' is an explicit owner, OR self is contained
within 'obj', OR self is contained within an object owned by 'obj'. (The
latter case is for things like BOB'S TWENTY DOLLAR BILL, which is Bob's
by virtue of being inside a wallet explicitly owned by Bob.)



<span id="preinitThing"></span>

`preinitThing ( )`

[thing.t](../file/thing.t.html)\[[2678](../source/thing.t.html#2678)\]



Carry out the preinitialization of a Thing



<span id="pushTravelRevealItems"></span>

`pushTravelRevealItems ( )`

[thing.t](../file/thing.t.html)\[[8481](../source/thing.t.html#8481)\]



*no description available*



<span id="reachBlockedMsg"></span>

`reachBlockedMsg (target)`

[thing.t](../file/thing.t.html)\[[3498](../source/thing.t.html#3498)\]



Return a message explaining why an object outside me can't reach one
inside (or vice versa); this will normally be triggered by an attempt to
reach an object inside a closed transparent container. The method is
defined here to make it easier to customize the message on the container
that's doing the blocking.



<span id="remoteBrightness"></span>

`remoteBrightness (pov)`

[brightness.t](../file/brightness.t.html)\[[102](../source/brightness.t.html#102)\]



\[BRIGHTNESS EXTENSION\]

Our remote brightness when viewed from pov, where pov is in a remote
location. By default we just return our brightness, but game code may
wish to override when, for example, we're a torch/flashlight that's been
dropped on the far side of a field at night.



<span id="remoteInitSpecialDesc"></span>

`remoteInitSpecialDesc (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[751](../source/senseRegion.t.html#751)\]



Our remoteInitSpecialDesc, used when viewing this item from a remote
location.By default we just show our ordinary initSpecialDesc, but in
practice we'll normally want to override this.



<span id="remoteObjInName"></span>

`remoteObjInName (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[853](../source/senseRegion.t.html#853)\]



The name given to this object when it's the container for another object
viewed remotely, e.g. 'in the distant bucket' as opposed to just 'in the
bucket'. By default we just use the objInName.



<span id="remoteSpecialDesc"></span>

`remoteSpecialDesc (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[744](../source/senseRegion.t.html#744)\]



Our remoteSpecialDesc is the paragraph describing this item in a room
description when viewed from a remote location containing the pov
object. By default we just show our ordinary specialDesc, but in
practice we'll normally want to override this.



<span id="removeFromContents"></span>

`removeFromContents (obj, vec?)`

[thing.t](../file/thing.t.html)\[[2437](../source/thing.t.html#2437)\]



Remove an item to this object's contents. Normally this method is used
internally in the library than directly by game code. If the vec
parameter is supplied, the object removed from our contents is also
removed from vec; again this is intended primarily for internal use by
the library.



<span id="revealOnMove"></span>

`revealOnMove ( )`

[thing.t](../file/thing.t.html)\[[4267](../source/thing.t.html#4267)\]



List and move into an appropriate location any item that was hidden
behind or under us. We place this in a separate method so it can be
conveniently called by other actions that move an object, or overridden
by particular objects that want a different handling.

Note that we don't provide any handling for the hiddenIn property here,
on the assumption that items hidden in something may well stay there
when it's moved; but this method can always be overridden to provide
custom behaviour.



<span id="roomHeadline"></span>

`roomHeadline (pov)`

[thing.t](../file/thing.t.html)\[[992](../source/thing.t.html#992)\]



The title of this room to be displayed at the start of a room
description, or in the status line.



<span id="roomSubhead"></span>

`// roomSubhead (pov)`<span class="rem">Interface description
only</span>

[thing.t](../file/thing.t.html)\[[3157](../source/thing.t.html#3157)\],
[english.t](../file/english.t.html)\[[2133](../source/english.t.html#2133)\],
[postures.t](../file/postures.t.html)\[[510](../source/postures.t.html#510)\]



The nested room subhead. This shows a little addendum to the room
headline when the point-of-view actor is inside an object within the
main room, such as a chair or platform. This usually shows something of
the form "(in the chair)". Note that only the \*immediate\* container is
shown; if the actor is in a chair in a booth on a stage, we normally
only mention the chair.

We leave this to the language library to define, since the exact syntax
varies by language.

*Modified in
[english.t](../file/english.t.html)\[[2133](../source/english.t.html#2133)\]:*  
Show the nested room subhead. This shows the actor's immediate container
as an addendum to the room name in the room description headline.

\[Required\]

*Modified in
[postures.t](../file/postures.t.html)\[[510](../source/postures.t.html#510)\]:*  
Include the actor's posture in the subheading (e.g. '(sitting on the
chair)') \[MODIFIED FOR POSTURES EXTENSION\]



<span id="sayCantBearMoreWeight"></span>

`sayCantBearMoreWeight (obj)`

[weight.t](../file/weight.t.html)\[[86](../source/weight.t.html#86)\]



Display a message saying that we can't bear any more weight. \[WEIGHT
EXTENSION\]



<span id="sayDontKnowHowToGetThere"></span>

`sayDontKnowHowToGetThere ( )`

[thing.t](../file/thing.t.html)\[[7534](../source/thing.t.html#7534)\]



We make these two sayDontKnowHowTo... methods separate methods so that
they can be reused on the Distant class without having to repeat the
DMsg() definitions.



<span id="sayDontKnowHowToReach"></span>

`sayDontKnowHowToReach ( )`

[thing.t](../file/thing.t.html)\[[7537](../source/thing.t.html#7537)\]



*no description available*



<span id="sayFindHidden"></span>

`sayFindHidden (prop, prep)`

[thing.t](../file/thing.t.html)\[[5092](../source/thing.t.html#5092)\]



Report what was found hidded in/under/behind us. We make this a separate
method so that it can be easily customized on individual objects.



<span id="sayPushTravel"></span>

`sayPushTravel (dir)`

[thing.t](../file/thing.t.html)\[[8473](../source/thing.t.html#8473)\]



Display a message saying we pushed the direct object in a particular
direction.



<span id="sayTooHeavy"></span>

`sayTooHeavy (obj)`

[weight.t](../file/weight.t.html)\[[76](../source/weight.t.html#76)\]



Display a message saying that obj is too heavy to be inserted in us.
\[WEIGHT EXTENSION\]



<span id="sayTooHeavyToHide"></span>

`sayTooHeavyToHide (obj, insType)`

[weight.t](../file/weight.t.html)\[[222](../source/weight.t.html#222)\]



Display a message to say that obj is too heavy to fit in/on/under us,
where insType is In, On or Under. \[WEIGHT EXTENSION\]



<span id="scoreObject"></span>

`scoreObject (cmd, role, lst, m)`

[thing.t](../file/thing.t.html)\[[3752](../source/thing.t.html#3752)\]



Score this object for disambiguation. When a noun phrase is ambiguous
(for example, the phrase matches multiple in-scope objects, and we have
to choose just one), the parser calls this routine on each object it's
considering as a match.

Our job here is to read the player's mind. The question before us is:
did the player mean \*this\* object when typing this noun phrase?
Obviously we can't really know what's in the player's mind, but in many
cases we can make an educated guess based on what ought to make the most
sense in context. The context in this case is the state of the simulated
game world, as it's portrayed to the player. That last bit is important:
be cognizant of what the player is \*meant\* to know at this point.
DON'T base the score on information that the player isn't supposed to
know, though: that could give away secrets that the player is meant to
discover on her own.

Before this routine is called, the Action has already assigned an
initial score to each object, but this routine can override the initial
score by assigning its own score value. This routine is most useful in
cases where a particular object has a special affinity for a verb, or
for the verb in combination with particular other objects involved in
the command.

'cmd' is the Command object. 'role' is the noun phrase's role in the
command (DirectObject, IndirectObject, etc). 'lst' is a list of NPMatch
objects identifying the objects that matched the noun phrase. 'm' is the
NPMatch object for self.

To override or adjust the score, simply set m.score to the new value.
This routine is also free to override the scores of any other objects in
the list, if needed.

By default, we don't make any adjustment - we simply accept the initial
score calculated by the Action, by leaving m.score unchanged.

See Action.scoreObjects() for full details.



<span id="setHasSeen"></span>

`setHasSeen (obj)`

[thing.t](../file/thing.t.html)\[[3655](../source/thing.t.html#3655)\]



Mark this Thing as having seen obj.



<span id="setKnown"></span>

`setKnown ( )`

[thing.t](../file/thing.t.html)\[[3652](../source/thing.t.html#3652)\]



Mark the player character as knowing about us (i.e. this Thing)



<span id="setKnowsAbout"></span>

`setKnowsAbout (obj)`

[thing.t](../file/thing.t.html)\[[3649](../source/thing.t.html#3649)\]



Mark this Thing as knowing about obj.



<span id="setSeen"></span>

`setSeen ( )`

[thing.t](../file/thing.t.html)\[[3658](../source/thing.t.html#3658)\]



Mark the player character as having seen this Thing.



<span id="shinesOut"></span>

`shinesOut ( )`

[thing.t](../file/thing.t.html)\[[3539](../source/thing.t.html#3539)\]



Does this object shine light outwards? This determines if the object is
a light source to objects outside of it. Light shines out from an object
if the object itself is a light source, or one of its direct exterior
contents shines out, or its contents are visible from the outside and
one of its direct interior contents shines out.



<span id="showConnectedMiscContents"></span>

`showConnectedMiscContents (pov)`

[thing.t](../file/thing.t.html)\[[1566](../source/thing.t.html#1566)\]



*no description available*



<span id="showFirstConnectedSpecials"></span>

`showFirstConnectedSpecials (pov)`

[thing.t](../file/thing.t.html)\[[1565](../source/thing.t.html#1565)\]



*no description available*



<span id="showRemoteSpecialDesc"></span>

`showRemoteSpecialDesc (pov)`

[senseRegion.t](../file/senseRegion.t.html)\[[566](../source/senseRegion.t.html#566)\]



Show our remoteSpecialDesc, i.e. the version of our specialDesc that
should be seen when this item is viewed from a remote location.



<span id="showSecondConnectedSpecials"></span>

`showSecondConnectedSpecials (pov)`

[thing.t](../file/thing.t.html)\[[1567](../source/thing.t.html#1567)\]



*no description available*



<span id="showSpecialDesc"></span>

`showSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1840](../source/thing.t.html#1840)\]



Show our specialDesc or initSpecialDesc, as appropriate



<span id="showStatuslineExits"></span>

`showStatuslineExits ( )`

[thing.t](../file/thing.t.html)\[[1612](../source/thing.t.html#1612)\]



Show our exits in the status line



<span id="smellDesc"></span>

`smellDesc ( )`

[sensory.t](../file/sensory.t.html)\[[591](../source/sensory.t.html#591)\]



By default we split our smellDesc into smellDescWithoutSource (when the
player character can't see us) and smellDescWithSource (when the pc
can). If we don't need this distinction we can override this method
directly. \[MODIFIED FOR SENSORY EXTENSION\]



<span id="statusName"></span>

`statusName (actor)`

[thing.t](../file/thing.t.html)\[[1581](../source/thing.t.html#1581)\]



Display the "status line" name of the room. This is normally a brief,
single-line description.

By long-standing convention, each location in a game usually has a
distinctive name that's displayed here. Players usually find these names
helpful in forming a mental map of the game.

By default, if we have an enclosing location, and the actor can see the
enclosing location, we'll defer to the location. Otherwise, we'll
display our roo interior name.



<span id="totalBulkIn"></span>

`totalBulkIn (lst)`

[thing.t](../file/thing.t.html)\[[2229](../source/thing.t.html#2229)\]



Calculate the total bulk of the items in lst



<span id="totalWeightIn"></span>

`totalWeightIn (lst)`

[weight.t](../file/weight.t.html)\[[146](../source/weight.t.html#146)\]



Calculate the total weight of the items in lst \[WEIGHT EXTENSION\]



<span id="traceContainerPath"></span>

`traceContainerPath (other, outFunc, parentFunc, inFunc)`

[thing.t](../file/thing.t.html)\[[2982](../source/thing.t.html#2982)\]



Trace the interior containment path from 'self' to 'other'.

We'll start by working up the containment tree from 'self' to the
nearest interior container we have in common with 'other' - that is, the
nearest object that contains both 'self' and 'other' with an interior
location type for each object. For each container BELOW the common
parent, we call outFunc(container).

Next, we call parentFunc(container) on the common container. If there is
no common container, we call parentFunc(nil).

Next, we work back down the containment tree from the common parent to
'other'. For each container below the common parent, we call
inFunc(container).



<span id="travelVia"></span>

`travelVia (conn, announceArrival, =, true)`

[thing.t](../file/thing.t.html)\[[3809](../source/thing.t.html#3809)\]



Cause this Thing to travel via the connector conn. This method is
supplied in case travelVia is called on a Thing which is not an Actor,
although it's Actor that has the full implementation.



<span id="tryCheck"></span>

`tryCheck (prop)`

[thing.t](../file/thing.t.html)\[[3302](../source/thing.t.html#3302)\]



Run a check method passed as a property pointer in the prop parameter
and return any string it tried to display



<span id="tryMakingPosture"></span>

`tryMakingPosture (pos)`

[postures.t](../file/postures.t.html)\[[140](../source/postures.t.html#140)\]



Attempt to make this Thing adopt the posture pos (without changing
location). \[DEFINED IN POSTURES EXTENSION\]



<span id="unmention"></span>

`unmention (lst)`

[thing.t](../file/thing.t.html)\[[1547](../source/thing.t.html#1547)\]



Mark everything item in lst as not mentioned , and carry on down the
containment tree marking the contents of every item in lst as not
mentioned.



<span id="unmentionRemoteContents"></span>

`unmentionRemoteContents ( )`

[thing.t](../file/thing.t.html)\[[1564](../source/thing.t.html#1564)\]



The next four methods are provided so that listContents() can call them,
but they do nothing in the core library. They are overridden in
senseRegion.t (for use if senseRegion.t is included in the build).



<span id="verifyActor"></span>

`verifyActor ( )`

[thing.t](../file/thing.t.html)\[[3950](../source/thing.t.html#3950)\]



Next deal with what happens if this object is being tested as a
potential actor



<span id="verifyEnterPosture"></span>

`verifyEnterPosture (pos)`

[postures.t](../file/postures.t.html)\[[329](../source/postures.t.html#329)\]



Common verify routine for standing, sitting or lying IN something, where
pos is the posture to be adopted. \[DEFINED IN POSTURES EXTENSION\]



<span id="verifyPushTravel"></span>

`verifyPushTravel (via)`

[thing.t](../file/thing.t.html)\[[8361](../source/thing.t.html#8361)\]



Common handler for verifying push travel actions. The via parameter may
be a preposition object (such as Through) defining what kind of push
traveling the actor is trying to do (e.g. through a door or up some
stairs).



<span id="wouldBeLitFor"></span>

`wouldBeLitFor (actor)`

[thing.t](../file/thing.t.html)\[[1621](../source/thing.t.html#1621)\]



Would this location be lit for actor. By default it would if it's
illuminated.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


