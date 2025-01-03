---
layout: docs
---
<span class="title">Attachable</span><span class="type">class</span>

[attachables.t](../file/attachables.t.html)\[[557](../source/attachables.t.html#557)\]

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



An Attachable is a NearbyAttachable that can be attached to more than
one thing at a time, like a length of cable connecting two devices.

`class `**`Attachable`**` :   `[`NearbyAttachable`](../object/NearbyAttachable.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Attachable`**  
[`NearbyAttachable`](../object/NearbyAttachable.html)  
[`SimpleAttachable`](../object/SimpleAttachable.html)  
[`Thing`](../object/Thing.html)  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                                                 object`  
[`Mentionable`](../object/Mentionable.html)  
[`LMentionable`](../object/LMentionable.html)  
`                                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`attachedTo`](#attachedTo)  [`attachedToList`](#attachedToList)  [`cannotAttachToMoreMsg`](#cannotAttachToMoreMsg)  [`maxAttachedTo`](#maxAttachedTo)  [`multiPluggable`](#multiPluggable)  `

Inherited from `NearbyAttachable` :  
` [`attachedLocation`](../object/NearbyAttachable.html#attachedLocation)  [`detachedLocation`](../object/NearbyAttachable.html#detachedLocation)  [`oldLocation`](../object/NearbyAttachable.html#oldLocation)  `

Inherited from `SimpleAttachable` :  
` [`allowableAttachments`](../object/SimpleAttachable.html#allowableAttachments)  [`allowOtherToMoveWhileAttached`](../object/SimpleAttachable.html#allowOtherToMoveWhileAttached)  [`alreadyAttachedMsg`](../object/SimpleAttachable.html#alreadyAttachedMsg)  [`attachmentLister`](../object/SimpleAttachable.html#attachmentLister)  [`attachments`](../object/SimpleAttachable.html#attachments)  [`canAttachToMe`](../object/SimpleAttachable.html#canAttachToMe)  [`canDetachFromMe`](../object/SimpleAttachable.html#canDetachFromMe)  [`cannotBeAttachedMsg`](../object/SimpleAttachable.html#cannotBeAttachedMsg)  [`cannotDetachFromMsg`](../object/SimpleAttachable.html#cannotDetachFromMsg)  [`cannotDetachMsg`](../object/SimpleAttachable.html#cannotDetachMsg)  [`isAttachable`](../object/SimpleAttachable.html#isAttachable)  [`isDetachable`](../object/SimpleAttachable.html#isDetachable)  [`isFirmAttachment`](../object/SimpleAttachable.html#isFirmAttachment)  [`isListed`](../object/SimpleAttachable.html#isListed)  [`notAttachedMsg`](../object/SimpleAttachable.html#notAttachedMsg)  [`notAttachedToThatMsg`](../object/SimpleAttachable.html#notAttachedToThatMsg)  [`nothingAttachedMsg`](../object/SimpleAttachable.html#nothingAttachedMsg)  [`okayAttachMsg`](../object/SimpleAttachable.html#okayAttachMsg)  [`okayDetachFromMsg`](../object/SimpleAttachable.html#okayDetachFromMsg)  [`okayDetachMsg`](../object/SimpleAttachable.html#okayDetachMsg)  `

Inherited from `Thing` :  
` [`actorAlreadyInMsg`](../object/Thing.html#actorAlreadyInMsg)  [`actorAlreadyOnMsg`](../object/Thing.html#actorAlreadyOnMsg)  [`actorNotInMsg`](../object/Thing.html#actorNotInMsg)  [`actorNotOnMsg`](../object/Thing.html#actorNotOnMsg)  [`allowPourIntoMe`](../object/Thing.html#allowPourIntoMe)  [`allowPourOntoMe`](../object/Thing.html#allowPourOntoMe)  [`alreadyCleanMsg`](../object/Thing.html#alreadyCleanMsg)  [`alreadyClosedMsg`](../object/Thing.html#alreadyClosedMsg)  [`alreadyFastenedMsg`](../object/Thing.html#alreadyFastenedMsg)  [`alreadyHasMsg`](../object/Thing.html#alreadyHasMsg)  [`alreadyHeldMsg`](../object/Thing.html#alreadyHeldMsg)  [`alreadyInMsg`](../object/Thing.html#alreadyInMsg)  [`alreadyLitMsg`](../object/Thing.html#alreadyLitMsg)  [`alreadyLockedMsg`](../object/Thing.html#alreadyLockedMsg)  [`alreadyMovedToMsg`](../object/Thing.html#alreadyMovedToMsg)  [`alreadyOnMsg`](../object/Thing.html#alreadyOnMsg)  [`alreadyOpenMsg`](../object/Thing.html#alreadyOpenMsg)  [`alreadyPresentMsg`](../object/Thing.html#alreadyPresentMsg)  [`alreadyThereMsg`](../object/Thing.html#alreadyThereMsg)  [`alreadyWornMsg`](../object/Thing.html#alreadyWornMsg)  [`autoGetOutToReach`](../object/Thing.html#autoGetOutToReach)  [`autoTakeOnFindHidden`](../object/Thing.html#autoTakeOnFindHidden)  [`autoUnlock`](../object/Thing.html#autoUnlock)  [`brightness`](../object/Thing.html#brightness)  [`brightnessForReading`](../object/Thing.html#brightnessForReading)  [`brightnessOff`](../object/Thing.html#brightnessOff)  [`brightnessOn`](../object/Thing.html#brightnessOn)  [`bulk`](../object/Thing.html#bulk)  [`bulkCapacity`](../object/Thing.html#bulkCapacity)  [`canAttackWithMe`](../object/Thing.html#canAttackWithMe)  [`canBurnWithMe`](../object/Thing.html#canBurnWithMe)  [`canCleanWithMe`](../object/Thing.html#canCleanWithMe)  [`canClimbDownMe`](../object/Thing.html#canClimbDownMe)  [`canClimbUpMe`](../object/Thing.html#canClimbUpMe)  [`canCutWithMe`](../object/Thing.html#canCutWithMe)  [`canDigWithMe`](../object/Thing.html#canDigWithMe)  [`canEnterOnMe`](../object/Thing.html#canEnterOnMe)  [`canFastenToMe`](../object/Thing.html#canFastenToMe)  [`canGoAlongMe`](../object/Thing.html#canGoAlongMe)  [`canGoThrougMe`](../object/Thing.html#canGoThrougMe)  [`canHearIn`](../object/Thing.html#canHearIn)  [`canHearOut`](../object/Thing.html#canHearOut)  [`canJumpOffMe`](../object/Thing.html#canJumpOffMe)  [`canJumpOverMe`](../object/Thing.html#canJumpOverMe)  [`canLieInMe`](../object/Thing.html#canLieInMe)  [`canLieOnMe`](../object/Thing.html#canLieOnMe)  [`canLockWithMe`](../object/Thing.html#canLockWithMe)  [`canLookBehindMe`](../object/Thing.html#canLookBehindMe)  [`canLookThroughMe`](../object/Thing.html#canLookThroughMe)  [`canLookUnderMe`](../object/Thing.html#canLookUnderMe)  [`canMoveToMe`](../object/Thing.html#canMoveToMe)  [`canMoveWithMe`](../object/Thing.html#canMoveWithMe)  [`cannotAttachMsg`](../object/Thing.html#cannotAttachMsg)  [`cannotAttachToMsg`](../object/Thing.html#cannotAttachToMsg)  [`cannotAttachToSelfMsg`](../object/Thing.html#cannotAttachToSelfMsg)  [`cannotAttackMsg`](../object/Thing.html#cannotAttackMsg)  [`cannotAttackWithMsg`](../object/Thing.html#cannotAttackWithMsg)  [`cannotAttackWithSelfMsg`](../object/Thing.html#cannotAttackWithSelfMsg)  [`cannotBoardMsg`](../object/Thing.html#cannotBoardMsg)  [`cannotBreakMsg`](../object/Thing.html#cannotBreakMsg)  [`cannotBurnMsg`](../object/Thing.html#cannotBurnMsg)  [`cannotBurnWithMsg`](../object/Thing.html#cannotBurnWithMsg)  [`cannotCleanMsg`](../object/Thing.html#cannotCleanMsg)  [`cannotCleanWithMsg`](../object/Thing.html#cannotCleanWithMsg)  [`cannotClimbDownMsg`](../object/Thing.html#cannotClimbDownMsg)  [`cannotClimbMsg`](../object/Thing.html#cannotClimbMsg)  [`cannotCloseMsg`](../object/Thing.html#cannotCloseMsg)  [`cannotConsultMsg`](../object/Thing.html#cannotConsultMsg)  [`cannotCutMsg`](../object/Thing.html#cannotCutMsg)  [`cannotCutWithMsg`](../object/Thing.html#cannotCutWithMsg)  [`cannotCutWithSelfMsg`](../object/Thing.html#cannotCutWithSelfMsg)  [`cannotDetachFromSelfMsg`](../object/Thing.html#cannotDetachFromSelfMsg)  [`cannotDigMsg`](../object/Thing.html#cannotDigMsg)  [`cannotDigWithMsg`](../object/Thing.html#cannotDigWithMsg)  [`cannotDigWithSelfMsg`](../object/Thing.html#cannotDigWithSelfMsg)  [`cannotDoffMsg`](../object/Thing.html#cannotDoffMsg)  [`cannotDrinkMsg`](../object/Thing.html#cannotDrinkMsg)  [`cannotDropMsg`](../object/Thing.html#cannotDropMsg)  [`cannotEatMsg`](../object/Thing.html#cannotEatMsg)  [`cannotEnterMsg`](../object/Thing.html#cannotEnterMsg)  [`cannotEnterOnMsg`](../object/Thing.html#cannotEnterOnMsg)  [`cannotExtinguishMsg`](../object/Thing.html#cannotExtinguishMsg)  [`cannotFastenMsg`](../object/Thing.html#cannotFastenMsg)  [`cannotFastenToMsg`](../object/Thing.html#cannotFastenToMsg)  [`cannotFastenToSelfMsg`](../object/Thing.html#cannotFastenToSelfMsg)  [`cannotFeelMsg`](../object/Thing.html#cannotFeelMsg)  [`cannotFlipMsg`](../object/Thing.html#cannotFlipMsg)  [`cannotFollowMsg`](../object/Thing.html#cannotFollowMsg)  [`cannotFollowSelfMsg`](../object/Thing.html#cannotFollowSelfMsg)  [`cannotGetInCarriedMsg`](../object/Thing.html#cannotGetInCarriedMsg)  [`cannotGetOnCarriedMsg`](../object/Thing.html#cannotGetOnCarriedMsg)  [`cannotGiveToMsg`](../object/Thing.html#cannotGiveToMsg)  [`cannotGiveToSelfMsg`](../object/Thing.html#cannotGiveToSelfMsg)  [`cannotGoAlongMsg`](../object/Thing.html#cannotGoAlongMsg)  [`cannotGoNearThereMsg`](../object/Thing.html#cannotGoNearThereMsg)  [`cannotGoThroughMsg`](../object/Thing.html#cannotGoThroughMsg)  [`cannotJumpOffMsg`](../object/Thing.html#cannotJumpOffMsg)  [`cannotJumpOverMsg`](../object/Thing.html#cannotJumpOverMsg)  [`cannotKissMsg`](../object/Thing.html#cannotKissMsg)  [`cannotLieInMsg`](../object/Thing.html#cannotLieInMsg)  [`cannotLieOnMsg`](../object/Thing.html#cannotLieOnMsg)  [`cannotLightMsg`](../object/Thing.html#cannotLightMsg)  [`cannotLockWithMsg`](../object/Thing.html#cannotLockWithMsg)  [`cannotLockWithSelfMsg`](../object/Thing.html#cannotLockWithSelfMsg)  [`cannotLookBehindMsg`](../object/Thing.html#cannotLookBehindMsg)  [`cannotLookThroughMsg`](../object/Thing.html#cannotLookThroughMsg)  [`cannotLookUnderMsg`](../object/Thing.html#cannotLookUnderMsg)  [`cannotMoveMsg`](../object/Thing.html#cannotMoveMsg)  [`cannotMoveToMsg`](../object/Thing.html#cannotMoveToMsg)  [`cannotMoveToSelfMsg`](../object/Thing.html#cannotMoveToSelfMsg)  [`cannotMoveWithMsg`](../object/Thing.html#cannotMoveWithMsg)  [`cannotMoveWithSelfMsg`](../object/Thing.html#cannotMoveWithSelfMsg)  [`cannotOpenMsg`](../object/Thing.html#cannotOpenMsg)  [`cannotPlugIntoMsg`](../object/Thing.html#cannotPlugIntoMsg)  [`cannotPlugIntoSelfMsg`](../object/Thing.html#cannotPlugIntoSelfMsg)  [`cannotPlugMsg`](../object/Thing.html#cannotPlugMsg)  [`cannotPourIntoMsg`](../object/Thing.html#cannotPourIntoMsg)  [`cannotPourIntoSelfMsg`](../object/Thing.html#cannotPourIntoSelfMsg)  [`cannotPourMsg`](../object/Thing.html#cannotPourMsg)  [`cannotPourOntoMsg`](../object/Thing.html#cannotPourOntoMsg)  [`cannotPourOntoSelfMsg`](../object/Thing.html#cannotPourOntoSelfMsg)  [`cannotPullMsg`](../object/Thing.html#cannotPullMsg)  [`cannotPurloinContainerMsg`](../object/Thing.html#cannotPurloinContainerMsg)  [`cannotPurloinRoomMsg`](../object/Thing.html#cannotPurloinRoomMsg)  [`cannotPurloinSelfMsg`](../object/Thing.html#cannotPurloinSelfMsg)  [`cannotPushDownMsg`](../object/Thing.html#cannotPushDownMsg)  [`cannotPushIntoMsg`](../object/Thing.html#cannotPushIntoMsg)  [`cannotPushMsg`](../object/Thing.html#cannotPushMsg)  [`cannotPushOwnContainerMsg`](../object/Thing.html#cannotPushOwnContainerMsg)  [`cannotPushThroughMsg`](../object/Thing.html#cannotPushThroughMsg)  [`cannotPushUpMsg`](../object/Thing.html#cannotPushUpMsg)  [`cannotPushViaSelfMsg`](../object/Thing.html#cannotPushViaSelfMsg)  [`cannotPutBehindMsg`](../object/Thing.html#cannotPutBehindMsg)  [`cannotPutInMsg`](../object/Thing.html#cannotPutInMsg)  [`cannotPutInSelfMsg`](../object/Thing.html#cannotPutInSelfMsg)  [`cannotPutMsg`](../object/Thing.html#cannotPutMsg)  [`cannotPutOnMsg`](../object/Thing.html#cannotPutOnMsg)  [`cannotPutUnderMsg`](../object/Thing.html#cannotPutUnderMsg)  [`cannotReadMsg`](../object/Thing.html#cannotReadMsg)  [`cannotRemoveMsg`](../object/Thing.html#cannotRemoveMsg)  [`cannotScrewMsg`](../object/Thing.html#cannotScrewMsg)  [`cannotScrewWithMsg`](../object/Thing.html#cannotScrewWithMsg)  [`cannotScrewWithSelfMsg`](../object/Thing.html#cannotScrewWithSelfMsg)  [`cannotSetMsg`](../object/Thing.html#cannotSetMsg)  [`cannotSetToMsg`](../object/Thing.html#cannotSetToMsg)  [`cannotShowToMsg`](../object/Thing.html#cannotShowToMsg)  [`cannotShowToSelfMsg`](../object/Thing.html#cannotShowToSelfMsg)  [`cannotSitInMsg`](../object/Thing.html#cannotSitInMsg)  [`cannotSitOnMsg`](../object/Thing.html#cannotSitOnMsg)  [`cannotSmellMsg`](../object/Thing.html#cannotSmellMsg)  [`cannotStandInMsg`](../object/Thing.html#cannotStandInMsg)  [`cannotStandOnMsg`](../object/Thing.html#cannotStandOnMsg)  [`cannotTakeFromSelfMsg`](../object/Thing.html#cannotTakeFromSelfMsg)  [`cannotTakeMsg`](../object/Thing.html#cannotTakeMsg)  [`cannotTakeMyContainerMsg`](../object/Thing.html#cannotTakeMyContainerMsg)  [`cannotTakeSelfMsg`](../object/Thing.html#cannotTakeSelfMsg)  [`cannotTalkToMsg`](../object/Thing.html#cannotTalkToMsg)  [`cannotTalkToSelfMsg`](../object/Thing.html#cannotTalkToSelfMsg)  [`cannotTasteMsg`](../object/Thing.html#cannotTasteMsg)  [`cannotThrowAtMsg`](../object/Thing.html#cannotThrowAtMsg)  [`cannotThrowAtSelfMsg`](../object/Thing.html#cannotThrowAtSelfMsg)  [`cannotThrowMsg`](../object/Thing.html#cannotThrowMsg)  [`cannotThrowToMsg`](../object/Thing.html#cannotThrowToMsg)  [`cannotThrowToSelfMsg`](../object/Thing.html#cannotThrowToSelfMsg)  [`cannotTurnMsg`](../object/Thing.html#cannotTurnMsg)  [`cannotTurnToMsg`](../object/Thing.html#cannotTurnToMsg)  [`cannotTurnWithMsg`](../object/Thing.html#cannotTurnWithMsg)  [`cannotTurnWithSelfMsg`](../object/Thing.html#cannotTurnWithSelfMsg)  [`cannotTypeOnMsg`](../object/Thing.html#cannotTypeOnMsg)  [`cannotUnfastenFromMsg`](../object/Thing.html#cannotUnfastenFromMsg)  [`cannotUnfastenFromSelfMsg`](../object/Thing.html#cannotUnfastenFromSelfMsg)  [`cannotUnfastenMsg`](../object/Thing.html#cannotUnfastenMsg)  [`cannotUnlockWithMsg`](../object/Thing.html#cannotUnlockWithMsg)  [`cannotUnlockWithSelfMsg`](../object/Thing.html#cannotUnlockWithSelfMsg)  [`cannotUnplugFromMsg`](../object/Thing.html#cannotUnplugFromMsg)  [`cannotUnplugFromSelfMsg`](../object/Thing.html#cannotUnplugFromSelfMsg)  [`cannotUnplugMsg`](../object/Thing.html#cannotUnplugMsg)  [`cannotUnscrewMsg`](../object/Thing.html#cannotUnscrewMsg)  [`cannotUnscrewWithMsg`](../object/Thing.html#cannotUnscrewWithMsg)  [`cannotUnscrewWithSelfMsg`](../object/Thing.html#cannotUnscrewWithSelfMsg)  [`cannotWearMsg`](../object/Thing.html#cannotWearMsg)  [`cannotWriteOnMsg`](../object/Thing.html#cannotWriteOnMsg)  [`canPlugIntoMe`](../object/Thing.html#canPlugIntoMe)  [`canPourIntoMe`](../object/Thing.html#canPourIntoMe)  [`canPourOntoMe`](../object/Thing.html#canPourOntoMe)  [`canPullTravel`](../object/Thing.html#canPullTravel)  [`canPushTravel`](../object/Thing.html#canPushTravel)  [`canPutBehindMe`](../object/Thing.html#canPutBehindMe)  [`canPutInMe`](../object/Thing.html#canPutInMe)  [`canPutUnderMe`](../object/Thing.html#canPutUnderMe)  [`canReachIn`](../object/Thing.html#canReachIn)  [`canReachOut`](../object/Thing.html#canReachOut)  [`canScrewWithMe`](../object/Thing.html#canScrewWithMe)  [`canSeeIn`](../object/Thing.html#canSeeIn)  [`canSeeOut`](../object/Thing.html#canSeeOut)  [`canSetMeTo`](../object/Thing.html#canSetMeTo)  [`canSitInMe`](../object/Thing.html#canSitInMe)  [`canSitOnMe`](../object/Thing.html#canSitOnMe)  [`canSmellIn`](../object/Thing.html#canSmellIn)  [`canSmellOut`](../object/Thing.html#canSmellOut)  [`canStandInMe`](../object/Thing.html#canStandInMe)  [`canStandOnMe`](../object/Thing.html#canStandOnMe)  [`canSupply`](../object/Thing.html#canSupply)  [`canTalkToMe`](../object/Thing.html#canTalkToMe)  [`canThrowAtMe`](../object/Thing.html#canThrowAtMe)  [`canThrowToMe`](../object/Thing.html#canThrowToMe)  [`canTurnMeTo`](../object/Thing.html#canTurnMeTo)  [`canTurnWithMe`](../object/Thing.html#canTurnWithMe)  [`canTypeOnMe`](../object/Thing.html#canTypeOnMe)  [`canUnfastenFromMe`](../object/Thing.html#canUnfastenFromMe)  [`canUnlockWithMe`](../object/Thing.html#canUnlockWithMe)  [`canUnplugFromMe`](../object/Thing.html#canUnplugFromMe)  [`canUnscrewWithMe`](../object/Thing.html#canUnscrewWithMe)  [`canWriteOnMe`](../object/Thing.html#canWriteOnMe)  [`checkAttackMsg`](../object/Thing.html#checkAttackMsg)  [`checkFeelMsg`](../object/Thing.html#checkFeelMsg)  [`checkKissMsg`](../object/Thing.html#checkKissMsg)  [`circularlyInMsg`](../object/Thing.html#circularlyInMsg)  [`collectiveGroups`](../object/Thing.html#collectiveGroups)  [`contents`](../object/Thing.html#contents)  [`contentsListed`](../object/Thing.html#contentsListed)  [`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)  [`contentsListedInLook`](../object/Thing.html#contentsListedInLook)  [`contentsListedInSearch`](../object/Thing.html#contentsListedInSearch)  [`contType`](../object/Thing.html#contType)  [`currentInterlocutor`](../object/Thing.html#currentInterlocutor)  [`curSetting`](../object/Thing.html#curSetting)  [`darkName`](../object/Thing.html#darkName)  [`decorationActions`](../object/Thing.html#decorationActions)  [`decorationActions`](../object/Thing.html#decorationActions)  [`defaultPosture`](../object/Thing.html#defaultPosture)  [`desc`](../object/Thing.html#desc)  [`directlyHeld`](../object/Thing.html#directlyHeld)  [`directlyIn`](../object/Thing.html#directlyIn)  [`directlyWorn`](../object/Thing.html#directlyWorn)  [`distinguishByContents`](../object/Thing.html#distinguishByContents)  [`dontNeedCleaningObjMsg`](../object/Thing.html#dontNeedCleaningObjMsg)  [`dropItemsBehind`](../object/Thing.html#dropItemsBehind)  [`dropItemsUnder`](../object/Thing.html#dropItemsUnder)  [`dropLocation`](../object/Thing.html#dropLocation)  [`enclosing`](../object/Thing.html#enclosing)  [`examined`](../object/Thing.html#examined)  [`examineListed`](../object/Thing.html#examineListed)  [`examineLister`](../object/Thing.html#examineLister)  [`exitLocation`](../object/Thing.html#exitLocation)  [`extContents`](../object/Thing.html#extContents)  [`familiar`](../object/Thing.html#familiar)  [`feelDesc`](../object/Thing.html#feelDesc)  [`findHiddenDest`](../object/Thing.html#findHiddenDest)  [`fluidName`](../object/Thing.html#fluidName)  [`futileToAttackMsg`](../object/Thing.html#futileToAttackMsg)  [`futileToKissMsg`](../object/Thing.html#futileToKissMsg)  [`getBulkHiddenBehind`](../object/Thing.html#getBulkHiddenBehind)  [`getBulkHiddenIn`](../object/Thing.html#getBulkHiddenIn)  [`getBulkHiddenUnder`](../object/Thing.html#getBulkHiddenUnder)  [`getFacets`](../object/Thing.html#getFacets)  [`getOutermostRoom`](../object/Thing.html#getOutermostRoom)  [`getOutToJump`](../object/Thing.html#getOutToJump)  [`getWeightHiddenBehind`](../object/Thing.html#getWeightHiddenBehind)  [`getWeightHiddenIn`](../object/Thing.html#getWeightHiddenIn)  [`getWeightHiddenUnder`](../object/Thing.html#getWeightHiddenUnder)  [`globalParamName`](../object/Thing.html#globalParamName)  [`groupOrder`](../object/Thing.html#groupOrder)  [`hearNothingMsg`](../object/Thing.html#hearNothingMsg)  [`hiddenBehind`](../object/Thing.html#hiddenBehind)  [`hiddenIn`](../object/Thing.html#hiddenIn)  [`hiddenUnder`](../object/Thing.html#hiddenUnder)  [`illuminationThreshold`](../object/Thing.html#illuminationThreshold)  [`inDarkDesc`](../object/Thing.html#inDarkDesc)  [`indirectLockableMsg`](../object/Thing.html#indirectLockableMsg)  [`initSpecialDesc`](../object/Thing.html#initSpecialDesc)  [`intContents`](../object/Thing.html#intContents)  [`interiorDesc`](../object/Thing.html#interiorDesc)  [`inventoryListed`](../object/Thing.html#inventoryListed)  [`isAttackable`](../object/Thing.html#isAttackable)  [`isBoardable`](../object/Thing.html#isBoardable)  [`isBreakable`](../object/Thing.html#isBreakable)  [`isBurnable`](../object/Thing.html#isBurnable)  [`isClean`](../object/Thing.html#isClean)  [`isCleanable`](../object/Thing.html#isCleanable)  [`isClimbable`](../object/Thing.html#isClimbable)  [`isCloseable`](../object/Thing.html#isCloseable)  [`isConsultable`](../object/Thing.html#isConsultable)  [`isCuttable`](../object/Thing.html#isCuttable)  [`isDecoration`](../object/Thing.html#isDecoration)  [`isDiggable`](../object/Thing.html#isDiggable)  [`isDoffable`](../object/Thing.html#isDoffable)  [`isDrinkable`](../object/Thing.html#isDrinkable)  [`isDroppable`](../object/Thing.html#isDroppable)  [`isEdible`](../object/Thing.html#isEdible)  [`isEnterable`](../object/Thing.html#isEnterable)  [`isExtinguishable`](../object/Thing.html#isExtinguishable)  [`isFastenable`](../object/Thing.html#isFastenable)  [`isFastened`](../object/Thing.html#isFastened)  [`isFeelable`](../object/Thing.html#isFeelable)  [`isFixed`](../object/Thing.html#isFixed)  [`isFlippable`](../object/Thing.html#isFlippable)  [`isFollowable`](../object/Thing.html#isFollowable)  [`isHidden`](../object/Thing.html#isHidden)  [`isInitialPlayerChar`](../object/Thing.html#isInitialPlayerChar)  [`isKissable`](../object/Thing.html#isKissable)  [`isLightable`](../object/Thing.html#isLightable)  [`isLit`](../object/Thing.html#isLit)  [`isLocked`](../object/Thing.html#isLocked)  [`isMoveable`](../object/Thing.html#isMoveable)  [`isOn`](../object/Thing.html#isOn)  [`isOpen`](../object/Thing.html#isOpen)  [`isOpenable`](../object/Thing.html#isOpenable)  [`isPlayerChar`](../object/Thing.html#isPlayerChar)  [`isPlugable`](../object/Thing.html#isPlugable)  [`isPourable`](../object/Thing.html#isPourable)  [`isProminentNoise`](../object/Thing.html#isProminentNoise)  [`isProminentSmell`](../object/Thing.html#isProminentSmell)  [`isPullable`](../object/Thing.html#isPullable)  [`isPushable`](../object/Thing.html#isPushable)  [`isReadable`](../object/Thing.html#isReadable)  [`isRemoveable`](../object/Thing.html#isRemoveable)  [`isScrewable`](../object/Thing.html#isScrewable)  [`isSettable`](../object/Thing.html#isSettable)  [`isSmellable`](../object/Thing.html#isSmellable)  [`isSwitchable`](../object/Thing.html#isSwitchable)  [`isTakeable`](../object/Thing.html#isTakeable)  [`isTasteable`](../object/Thing.html#isTasteable)  [`isThrowable`](../object/Thing.html#isThrowable)  [`isTransparent`](../object/Thing.html#isTransparent)  [`isTurnable`](../object/Thing.html#isTurnable)  [`isUnfastenable`](../object/Thing.html#isUnfastenable)  [`isUnplugable`](../object/Thing.html#isUnplugable)  [`isUnscrewable`](../object/Thing.html#isUnscrewable)  [`isVehicle`](../object/Thing.html#isVehicle)  [`isWearable`](../object/Thing.html#isWearable)  [`keyDoesntWorkMsg`](../object/Thing.html#keyDoesntWorkMsg)  [`keyList`](../object/Thing.html#keyList)  [`keyNotNeededMsg`](../object/Thing.html#keyNotNeededMsg)  [`kissRank`](../object/Thing.html#kissRank)  [`known`](../object/Thing.html#known)  [`knownKeyList`](../object/Thing.html#knownKeyList)  [`knownProp`](../object/Thing.html#knownProp)  [`lastSeenAt`](../object/Thing.html#lastSeenAt)  [`lieOnScore`](../object/Thing.html#lieOnScore)  [`lightSources`](../object/Thing.html#lightSources)  [`listableContents`](../object/Thing.html#listableContents)  [`listenDesc`](../object/Thing.html#listenDesc)  [`listenDescWithoutSource`](../object/Thing.html#listenDescWithoutSource)  [`listenDescWithSource`](../object/Thing.html#listenDescWithSource)  [`listOrder`](../object/Thing.html#listOrder)  [`listWith`](../object/Thing.html#listWith)  [`location`](../object/Thing.html#location)  [`lockability`](../object/Thing.html#lockability)  [`lockedMsg`](../object/Thing.html#lockedMsg)  [`lookBehindMsg`](../object/Thing.html#lookBehindMsg)  [`lookInMsg`](../object/Thing.html#lookInMsg)  [`lookListed`](../object/Thing.html#lookListed)  [`lookThroughMsg`](../object/Thing.html#lookThroughMsg)  [`lookUnderMsg`](../object/Thing.html#lookUnderMsg)  [`markInventoryAsSeen`](../object/Thing.html#markInventoryAsSeen)  [`matchPullOnly`](../object/Thing.html#matchPullOnly)  [`matchPushOnly`](../object/Thing.html#matchPushOnly)  [`maxBulkHiddenBehind`](../object/Thing.html#maxBulkHiddenBehind)  [`maxBulkHiddenIn`](../object/Thing.html#maxBulkHiddenIn)  [`maxBulkHiddenUnder`](../object/Thing.html#maxBulkHiddenUnder)  [`maxSingleBulk`](../object/Thing.html#maxSingleBulk)  [`maxSingleWeight`](../object/Thing.html#maxSingleWeight)  [`maxWeightHiddenBehind`](../object/Thing.html#maxWeightHiddenBehind)  [`maxWeightHiddenIn`](../object/Thing.html#maxWeightHiddenIn)  [`maxWeightHiddenUnder`](../object/Thing.html#maxWeightHiddenUnder)  [`mentioned`](../object/Thing.html#mentioned)  [`moved`](../object/Thing.html#moved)  [`movedTo`](../object/Thing.html#movedTo)  [`moveNoEffectMsg`](../object/Thing.html#moveNoEffectMsg)  [`mustBeCleanedWith`](../object/Thing.html#mustBeCleanedWith)  [`myInventoryLister`](../object/Thing.html#myInventoryLister)  [`myLookBehindLister`](../object/Thing.html#myLookBehindLister)  [`myLookInLister`](../object/Thing.html#myLookInLister)  [`myLookUnderLister`](../object/Thing.html#myLookUnderLister)  [`myOpeningContentsLister`](../object/Thing.html#myOpeningContentsLister)  [`myWornLister`](../object/Thing.html#myWornLister)  [`needsCleaning`](../object/Thing.html#needsCleaning)  [`noLongerTalkingToAnyoneMsg`](../object/Thing.html#noLongerTalkingToAnyoneMsg)  [`nominalContents`](../object/Thing.html#nominalContents)  [`noNeedToCleanMsg`](../object/Thing.html#noNeedToCleanMsg)  [`notFastenedMsg`](../object/Thing.html#notFastenedMsg)  [`notHoldingMsg`](../object/Thing.html#notHoldingMsg)  [`notImportantMsg`](../object/Thing.html#notImportantMsg)  [`notInMsg`](../object/Thing.html#notInMsg)  [`notLitMsg`](../object/Thing.html#notLitMsg)  [`notLockableMsg`](../object/Thing.html#notLockableMsg)  [`notLockedMsg`](../object/Thing.html#notLockedMsg)  [`notSwitchableMsg`](../object/Thing.html#notSwitchableMsg)  [`notTalkingToAnyoneMsg`](../object/Thing.html#notTalkingToAnyoneMsg)  [`notWornMsg`](../object/Thing.html#notWornMsg)  [`objInPrep`](../object/Thing.html#objInPrep)  [`objIntoPrep`](../object/Thing.html#objIntoPrep)  [`okayCleanMsg`](../object/Thing.html#okayCleanMsg)  [`okayGetOutOfMsg`](../object/Thing.html#okayGetOutOfMsg)  [`okayLieInMsg`](../object/Thing.html#okayLieInMsg)  [`okayLieOnMsg`](../object/Thing.html#okayLieOnMsg)  [`okayLockMsg`](../object/Thing.html#okayLockMsg)  [`okayOpenMsg`](../object/Thing.html#okayOpenMsg)  [`okayPushIntoMsg`](../object/Thing.html#okayPushIntoMsg)  [`okayPushOutOfMsg`](../object/Thing.html#okayPushOutOfMsg)  [`okaySetMsg`](../object/Thing.html#okaySetMsg)  [`okaySitInMsg`](../object/Thing.html#okaySitInMsg)  [`okaySitOnMsg`](../object/Thing.html#okaySitOnMsg)  [`okayStandInMsg`](../object/Thing.html#okayStandInMsg)  [`okayStandOnMsg`](../object/Thing.html#okayStandOnMsg)  [`okayUnlockMsg`](../object/Thing.html#okayUnlockMsg)  [`opacity`](../object/Thing.html#opacity)  [`opened`](../object/Thing.html#opened)  [`openStatusReportable`](../object/Thing.html#openStatusReportable)  [`owner`](../object/Thing.html#owner)  [`ownsContents`](../object/Thing.html#ownsContents)  [`paraBrksBtwnSubcontents`](../object/Thing.html#paraBrksBtwnSubcontents)  [`partOfYouMsg`](../object/Thing.html#partOfYouMsg)  [`posture`](../object/Thing.html#posture)  [`preCondActor`](../object/Thing.html#preCondActor)  [`pullNoEffectMsg`](../object/Thing.html#pullNoEffectMsg)  [`pushNoEffectMsg`](../object/Thing.html#pushNoEffectMsg)  [`readDesc`](../object/Thing.html#readDesc)  [`recognizableInDark`](../object/Thing.html#recognizableInDark)  [`remapActor`](../object/Thing.html#remapActor)  [`remapBehind`](../object/Thing.html#remapBehind)  [`remapIn`](../object/Thing.html#remapIn)  [`remapOn`](../object/Thing.html#remapOn)  [`remapProps`](../object/Thing.html#remapProps)  [`remapUnder`](../object/Thing.html#remapUnder)  [`roomContentsLister`](../object/Thing.html#roomContentsLister)  [`roomPart`](../object/Thing.html#roomPart)  [`roomPartDesc`](../object/Thing.html#roomPartDesc)  [`roomSubContentsLister`](../object/Thing.html#roomSubContentsLister)  [`roomTitle`](../object/Thing.html#roomTitle)  [`searchListed`](../object/Thing.html#searchListed)  [`seen`](../object/Thing.html#seen)  [`seenProp`](../object/Thing.html#seenProp)  [`shouldBeBroken`](../object/Thing.html#shouldBeBroken)  [`shouldNotBreakMsg`](../object/Thing.html#shouldNotBreakMsg)  [`shouldNotPourIntoMsg`](../object/Thing.html#shouldNotPourIntoMsg)  [`shouldNotPourOntoMsg`](../object/Thing.html#shouldNotPourOntoMsg)  [`sightSize`](../object/Thing.html#sightSize)  [`sitOnScore`](../object/Thing.html#sitOnScore)  [`smellDesc`](../object/Thing.html#smellDesc)  [`smellDescWithoutSource`](../object/Thing.html#smellDescWithoutSource)  [`smellDescWithSource`](../object/Thing.html#smellDescWithSource)  [`smellNothingMsg`](../object/Thing.html#smellNothingMsg)  [`smellObj`](../object/Thing.html#smellObj)  [`smellSize`](../object/Thing.html#smellSize)  [`soundObj`](../object/Thing.html#soundObj)  [`soundSize`](../object/Thing.html#soundSize)  [`specialDesc`](../object/Thing.html#specialDesc)  [`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)  [`specialDescListWith`](../object/Thing.html#specialDescListWith)  [`specialDescOrder`](../object/Thing.html#specialDescOrder)  [`stagingLocation`](../object/Thing.html#stagingLocation)  [`standOnScore`](../object/Thing.html#standOnScore)  [`stateDesc`](../object/Thing.html#stateDesc)  [`tasteDesc`](../object/Thing.html#tasteDesc)  [`throwFallsShortMsg`](../object/Thing.html#throwFallsShortMsg)  [`tooDarkToReadMsg`](../object/Thing.html#tooDarkToReadMsg)  [`tooDarkToSeeMsg`](../object/Thing.html#tooDarkToSeeMsg)  [`tooFarAwayToHearMsg`](../object/Thing.html#tooFarAwayToHearMsg)  [`tooFarAwayToReadMsg`](../object/Thing.html#tooFarAwayToReadMsg)  [`tooFarAwayToSeeDetailMsg`](../object/Thing.html#tooFarAwayToSeeDetailMsg)  [`tooFarAwayToSmellMsg`](../object/Thing.html#tooFarAwayToSmellMsg)  [`totalWeight`](../object/Thing.html#totalWeight)  [`turnLastExamined`](../object/Thing.html#turnLastExamined)  [`turnLastMoved`](../object/Thing.html#turnLastMoved)  [`turnLastMovedInto`](../object/Thing.html#turnLastMovedInto)  [`turnNoEffectMsg`](../object/Thing.html#turnNoEffectMsg)  [`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)  [`useKey_`](../object/Thing.html#useKey_)  [`useSpecialDesc`](../object/Thing.html#useSpecialDesc)  [`viaMode`](../object/Thing.html#viaMode)  [`visibleInDark`](../object/Thing.html#visibleInDark)  [`vocabLikelihood`](../object/Thing.html#vocabLikelihood)  [`weight`](../object/Thing.html#weight)  [`weightCapacity`](../object/Thing.html#weightCapacity)  [`withKeyMsg`](../object/Thing.html#withKeyMsg)  [`wornBy`](../object/Thing.html#wornBy)  `





Inherited from `Mentionable` :  
` [`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural)  [`disambigGroup`](../object/Mentionable.html#disambigGroup)  [`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases)  [`disambigName`](../object/Mentionable.html#disambigName)  [`disambigOrder`](../object/Mentionable.html#disambigOrder)  [`isHer`](../object/Mentionable.html#isHer)  [`isHim`](../object/Mentionable.html#isHim)  [`isIt`](../object/Mentionable.html#isIt)  [`massNoun`](../object/Mentionable.html#massNoun)  [`matchPhrases`](../object/Mentionable.html#matchPhrases)  [`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude)  [`name`](../object/Mentionable.html#name)  [`person`](../object/Mentionable.html#person)  [`plural`](../object/Mentionable.html#plural)  [`proper`](../object/Mentionable.html#proper)  [`qualified`](../object/Mentionable.html#qualified)  [`states`](../object/Mentionable.html#states)  [`vocab`](../object/Mentionable.html#vocab)  [`vocabWords`](../object/Mentionable.html#vocabWords)  `

Inherited from `LMentionable` :  
` [`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat)  [`alphaCharPat`](../object/LMentionable.html#alphaCharPat)  [`aName`](../object/LMentionable.html#aName)  [`apostPluralPat`](../object/LMentionable.html#apostPluralPat)  [`apostSPat`](../object/LMentionable.html#apostSPat)  [`deannotatePat`](../object/LMentionable.html#deannotatePat)  [`dictComp`](../object/LMentionable.html#dictComp)  [`dummyName`](../object/LMentionable.html#dummyName)  [`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat)  [`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords)  [`esPluralPat`](../object/LMentionable.html#esPluralPat)  [`firstWordPat`](../object/LMentionable.html#firstWordPat)  [`heName`](../object/LMentionable.html#heName)  [`herName`](../object/LMentionable.html#herName)  [`hersName`](../object/LMentionable.html#hersName)  [`himName`](../object/LMentionable.html#himName)  [`iesPluralPat`](../object/LMentionable.html#iesPluralPat)  [`irregularPlurals`](../object/LMentionable.html#irregularPlurals)  [`lastWordPat`](../object/LMentionable.html#lastWordPat)  [`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat)  [`menPluralPat`](../object/LMentionable.html#menPluralPat)  [`objInName`](../object/LMentionable.html#objInName)  [`objIntoName`](../object/LMentionable.html#objIntoName)  [`objName`](../object/LMentionable.html#objName)  [`objOutOfName`](../object/LMentionable.html#objOutOfName)  [`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat)  [`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat)  [`ownerNamed`](../object/LMentionable.html#ownerNamed)  [`pluralPat`](../object/LMentionable.html#pluralPat)  [`posPat`](../object/LMentionable.html#posPat)  [`possAdj`](../object/LMentionable.html#possAdj)  [`possEnding`](../object/LMentionable.html#possEnding)  [`possNoun`](../object/LMentionable.html#possNoun)  [`prepList`](../object/LMentionable.html#prepList)  [`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat)  [`prepWordPat`](../object/LMentionable.html#prepWordPat)  [`pronounMap`](../object/LMentionable.html#pronounMap)  [`properNamePat`](../object/LMentionable.html#properNamePat)  [`properPat`](../object/LMentionable.html#properPat)  [`reflexiveName`](../object/LMentionable.html#reflexiveName)  [`specialAOrAn`](../object/LMentionable.html#specialAOrAn)  [`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat)  [`thatName`](../object/LMentionable.html#thatName)  [`thatObjName`](../object/LMentionable.html#thatObjName)  [`theName`](../object/LMentionable.html#theName)  [`theObjName`](../object/LMentionable.html#theObjName)  [`trimPat`](../object/LMentionable.html#trimPat)  [`truncationLength`](../object/LMentionable.html#truncationLength)  [`weakWordPat`](../object/LMentionable.html#weakWordPat)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`allowAttach`](#allowAttach)  [`dobjFor(AttachTo)`](#dobjFor(AttachTo))  [`isAttachedTo`](#isAttachedTo)  [`makeAttachedTo`](#makeAttachedTo)  [`makeDetachedFrom`](#makeDetachedFrom)  [`reverseConnect`](#reverseConnect)  `

Inherited from `NearbyAttachable` :  
` [`afterAction`](../object/NearbyAttachable.html#afterAction)  [`beforeAction`](../object/NearbyAttachable.html#beforeAction)  `

Inherited from `SimpleAttachable` :  
` [`actionMoveInto`](../object/SimpleAttachable.html#actionMoveInto)  [`attachTo`](../object/SimpleAttachable.html#attachTo)  [`detachFrom`](../object/SimpleAttachable.html#detachFrom)  [`dobjFor(Detach)`](../object/SimpleAttachable.html#dobjFor(Detach))  [`dobjFor(DetachFrom)`](../object/SimpleAttachable.html#dobjFor(DetachFrom))  [`dobjFor(FastenTo)`](../object/SimpleAttachable.html#dobjFor(FastenTo))  [`dobjFor(Take)`](../object/SimpleAttachable.html#dobjFor(Take))  [`dobjFor(Unfasten)`](../object/SimpleAttachable.html#dobjFor(Unfasten))  [`dobjFor(UnfastenFrom)`](../object/SimpleAttachable.html#dobjFor(UnfastenFrom))  [`examineStatus`](../object/SimpleAttachable.html#examineStatus)  [`iobjFor(AttachTo)`](../object/SimpleAttachable.html#iobjFor(AttachTo))  [`iobjFor(DetachFrom)`](../object/SimpleAttachable.html#iobjFor(DetachFrom))  [`iobjFor(FastenTo)`](../object/SimpleAttachable.html#iobjFor(FastenTo))  [`iobjFor(UnfastenFrom)`](../object/SimpleAttachable.html#iobjFor(UnfastenFrom))  [`isAttachedToMe`](../object/SimpleAttachable.html#isAttachedToMe)  [`locType`](../object/SimpleAttachable.html#locType)  [`preinitThing`](../object/SimpleAttachable.html#preinitThing)  [`sayCannotMoveWhileAttached`](../object/SimpleAttachable.html#sayCannotMoveWhileAttached)  `

Inherited from `Thing` :  
` [`abcName`](../object/Thing.html#abcName)  [`accumulateBrightness`](../object/Thing.html#accumulateBrightness)  [`accumulatedBrightnessWithin`](../object/Thing.html#accumulatedBrightnessWithin)  [`actorAction`](../object/Thing.html#actorAction)  [`addToAllContents`](../object/Thing.html#addToAllContents)  [`addToContents`](../object/Thing.html#addToContents)  [`afterTravel`](../object/Thing.html#afterTravel)  [`allContents`](../object/Thing.html#allContents)  [`allowReachOut`](../object/Thing.html#allowReachOut)  [`aobjFor`](../object/Thing.html#aobjFor)  [`beforeMovePushable`](../object/Thing.html#beforeMovePushable)  [`beforeTravel`](../object/Thing.html#beforeTravel)  [`brightnessWithin`](../object/Thing.html#brightnessWithin)  [`byRoom`](../object/Thing.html#byRoom)  [`canHear`](../object/Thing.html#canHear)  [`cannotPushTravelMsg`](../object/Thing.html#cannotPushTravelMsg)  [`cannotReachOutMsg`](../object/Thing.html#cannotReachOutMsg)  [`canReach`](../object/Thing.html#canReach)  [`canSee`](../object/Thing.html#canSee)  [`canSmell`](../object/Thing.html#canSmell)  [`canTalkTo`](../object/Thing.html#canTalkTo)  [`checkDisplay`](../object/Thing.html#checkDisplay)  [`checkInsert`](../object/Thing.html#checkInsert)  [`checkPushTravel`](../object/Thing.html#checkPushTravel)  [`checkReach`](../object/Thing.html#checkReach)  [`checkReachIn`](../object/Thing.html#checkReachIn)  [`checkRemove`](../object/Thing.html#checkRemove)  [`checkRoomToHold`](../object/Thing.html#checkRoomToHold)  [`checkSetting`](../object/Thing.html#checkSetting)  [`childLocType`](../object/Thing.html#childLocType)  [`commonContainingParent`](../object/Thing.html#commonContainingParent)  [`commonInteriorParent`](../object/Thing.html#commonInteriorParent)  [`containerPath`](../object/Thing.html#containerPath)  [`containerPathBlock`](../object/Thing.html#containerPathBlock)  [`darkDesc`](../object/Thing.html#darkDesc)  [`describeMovePushable`](../object/Thing.html#describeMovePushable)  [`describePushTravel`](../object/Thing.html#describePushTravel)  [`directChildParent`](../object/Thing.html#directChildParent)  [`discover`](../object/Thing.html#discover)  [`display`](../object/Thing.html#display)  [`displayAlt`](../object/Thing.html#displayAlt)  [`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))  [`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))  [`dobjFor(Attach)`](../object/Thing.html#dobjFor(Attach))  [`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))  [`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))  [`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))  [`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))  [`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))  [`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))  [`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))  [`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))  [`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))  [`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))  [`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))  [`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))  [`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))  [`dobjFor(Cut)`](../object/Thing.html#dobjFor(Cut))  [`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))  [`dobjFor(Default)`](../object/Thing.html#dobjFor(Default))  [`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))  [`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))  [`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))  [`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))  [`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))  [`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))  [`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))  [`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))  [`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))  [`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))  [`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))  [`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))  [`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))  [`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))  [`dobjFor(GetOff)`](../object/Thing.html#dobjFor(GetOff))  [`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))  [`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))  [`dobjFor(GiveToImplicit)`](../object/Thing.html#dobjFor(GiveToImplicit))  [`dobjFor(GoAlong)`](../object/Thing.html#dobjFor(GoAlong))  [`dobjFor(GoNear)`](../object/Thing.html#dobjFor(GoNear))  [`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))  [`dobjFor(GoTo)`](../object/Thing.html#dobjFor(GoTo))  [`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))  [`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))  [`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))  [`dobjFor(LieIn)`](../object/Thing.html#dobjFor(LieIn))  [`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))  [`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))  [`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))  [`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))  [`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))  [`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))  [`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))  [`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))  [`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))  [`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))  [`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))  [`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))  [`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))  [`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))  [`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))  [`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))  [`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))  [`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))  [`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))  [`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))  [`dobjFor(Purloin)`](../object/Thing.html#dobjFor(Purloin))  [`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))  [`dobjFor(PushTravelClimbDown)`](../object/Thing.html#dobjFor(PushTravelClimbDown))  [`dobjFor(PushTravelClimbUp)`](../object/Thing.html#dobjFor(PushTravelClimbUp))  [`dobjFor(PushTravelDir)`](../object/Thing.html#dobjFor(PushTravelDir))  [`dobjFor(PushTravelEnter)`](../object/Thing.html#dobjFor(PushTravelEnter))  [`dobjFor(PushTravelGetOutOf)`](../object/Thing.html#dobjFor(PushTravelGetOutOf))  [`dobjFor(PushTravelThrough)`](../object/Thing.html#dobjFor(PushTravelThrough))  [`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))  [`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))  [`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))  [`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))  [`dobjFor(QueryAbout)`](../object/Thing.html#dobjFor(QueryAbout))  [`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))  [`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))  [`dobjFor(SayTo)`](../object/Thing.html#dobjFor(SayTo))  [`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))  [`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))  [`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))  [`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))  [`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))  [`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))  [`dobjFor(ShowToImplicit)`](../object/Thing.html#dobjFor(ShowToImplicit))  [`dobjFor(SitIn)`](../object/Thing.html#dobjFor(SitIn))  [`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))  [`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))  [`dobjFor(SmellSomething)`](../object/Thing.html#dobjFor(SmellSomething))  [`dobjFor(StandIn)`](../object/Thing.html#dobjFor(StandIn))  [`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))  [`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))  [`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))  [`dobjFor(SwitchOff)`](../object/Thing.html#dobjFor(SwitchOff))  [`dobjFor(SwitchOn)`](../object/Thing.html#dobjFor(SwitchOn))  [`dobjFor(SwitchVague)`](../object/Thing.html#dobjFor(SwitchVague))  [`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))  [`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))  [`dobjFor(TalkAbout)`](../object/Thing.html#dobjFor(TalkAbout))  [`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))  [`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))  [`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))  [`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))  [`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))  [`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))  [`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))  [`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))  [`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))  [`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))  [`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))  [`dobjFor(TypeOnVague)`](../object/Thing.html#dobjFor(TypeOnVague))  [`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))  [`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))  [`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))  [`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))  [`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))  [`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))  [`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))  [`dobjFor(WriteOn)`](../object/Thing.html#dobjFor(WriteOn))  [`doPushTravel`](../object/Thing.html#doPushTravel)  [`filterResolveList`](../object/Thing.html#filterResolveList)  [`findHidden`](../object/Thing.html#findHidden)  [`findPlausibleKey`](../object/Thing.html#findPlausibleKey)  [`firstContainerPathBlock`](../object/Thing.html#firstContainerPathBlock)  [`getBulkWithin`](../object/Thing.html#getBulkWithin)  [`getCarriedBulk`](../object/Thing.html#getCarriedBulk)  [`getCarriedWeight`](../object/Thing.html#getCarriedWeight)  [`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)  [`getWeightWithin`](../object/Thing.html#getWeightWithin)  [`handleCommand`](../object/Thing.html#handleCommand)  [`hasSeen`](../object/Thing.html#hasSeen)  [`hideFromAll`](../object/Thing.html#hideFromAll)  [`interiorParent`](../object/Thing.html#interiorParent)  [`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))  [`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))  [`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))  [`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))  [`iobjFor(Default)`](../object/Thing.html#iobjFor(Default))  [`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))  [`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))  [`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))  [`iobjFor(MoveTo)`](../object/Thing.html#iobjFor(MoveTo))  [`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))  [`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))  [`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))  [`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))  [`iobjFor(PushTravelClimbDown)`](../object/Thing.html#iobjFor(PushTravelClimbDown))  [`iobjFor(PushTravelClimbUp)`](../object/Thing.html#iobjFor(PushTravelClimbUp))  [`iobjFor(PushTravelEnter)`](../object/Thing.html#iobjFor(PushTravelEnter))  [`iobjFor(PushTravelGetOutOf)`](../object/Thing.html#iobjFor(PushTravelGetOutOf))  [`iobjFor(PushTravelThrough)`](../object/Thing.html#iobjFor(PushTravelThrough))  [`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))  [`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))  [`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))  [`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))  [`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))  [`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))  [`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))  [`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))  [`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))  [`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))  [`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))  [`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))  [`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))  [`isAudibleFrom`](../object/Thing.html#isAudibleFrom)  [`isChild`](../object/Thing.html#isChild)  [`isDirectChild`](../object/Thing.html#isDirectChild)  [`isDirectlyHeldBy`](../object/Thing.html#isDirectlyHeldBy)  [`isDirectlyIn`](../object/Thing.html#isDirectlyIn)  [`isDirectlyWornBy`](../object/Thing.html#isDirectlyWornBy)  [`isHeldBy`](../object/Thing.html#isHeldBy)  [`isIlluminated`](../object/Thing.html#isIlluminated)  [`isIn`](../object/Thing.html#isIn)  [`isInterior`](../object/Thing.html#isInterior)  [`isOrIsIn`](../object/Thing.html#isOrIsIn)  [`isOutside`](../object/Thing.html#isOutside)  [`isReadableFrom`](../object/Thing.html#isReadableFrom)  [`isSmellableFrom`](../object/Thing.html#isSmellableFrom)  [`isThereALightSourceIn`](../object/Thing.html#isThereALightSourceIn)  [`isVisibleFrom`](../object/Thing.html#isVisibleFrom)  [`isWornBy`](../object/Thing.html#isWornBy)  [`knowsAbout`](../object/Thing.html#knowsAbout)  [`listableContentsOf`](../object/Thing.html#listableContentsOf)  [`listContents`](../object/Thing.html#listContents)  [`listenDesc`](../object/Thing.html#listenDesc)  [`listRemoteContents`](../object/Thing.html#listRemoteContents)  [`listSubcontentsOf`](../object/Thing.html#listSubcontentsOf)  [`litWithin`](../object/Thing.html#litWithin)  [`locationWhich`](../object/Thing.html#locationWhich)  [`lookAroundWithin`](../object/Thing.html#lookAroundWithin)  [`makeCleaned`](../object/Thing.html#makeCleaned)  [`makeFastened`](../object/Thing.html#makeFastened)  [`makeLit`](../object/Thing.html#makeLit)  [`makeLocked`](../object/Thing.html#makeLocked)  [`makeMovedTo`](../object/Thing.html#makeMovedTo)  [`makeOn`](../object/Thing.html#makeOn)  [`makeOpen`](../object/Thing.html#makeOpen)  [`makeSetting`](../object/Thing.html#makeSetting)  [`makeWorn`](../object/Thing.html#makeWorn)  [`moveHidden`](../object/Thing.html#moveHidden)  [`moveInto`](../object/Thing.html#moveInto)  [`moveMLIntoAdd`](../object/Thing.html#moveMLIntoAdd)  [`moveMLOutOf`](../object/Thing.html#moveMLOutOf)  [`nestedLoc`](../object/Thing.html#nestedLoc)  [`nominalOwner`](../object/Thing.html#nominalOwner)  [`noteSeen`](../object/Thing.html#noteSeen)  [`notifyEvent`](../object/Thing.html#notifyEvent)  [`notifyInsert`](../object/Thing.html#notifyInsert)  [`notifyRemove`](../object/Thing.html#notifyRemove)  [`notifySightEvent`](../object/Thing.html#notifySightEvent)  [`notifySmellEvent`](../object/Thing.html#notifySmellEvent)  [`notifySoundEvent`](../object/Thing.html#notifySoundEvent)  [`notionalContents`](../object/Thing.html#notionalContents)  [`outermostParent`](../object/Thing.html#outermostParent)  [`outermostVisibleParent`](../object/Thing.html#outermostVisibleParent)  [`ownedBy`](../object/Thing.html#ownedBy)  [`pushTravelRevealItems`](../object/Thing.html#pushTravelRevealItems)  [`reachBlockedMsg`](../object/Thing.html#reachBlockedMsg)  [`remoteBrightness`](../object/Thing.html#remoteBrightness)  [`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)  [`remoteObjInName`](../object/Thing.html#remoteObjInName)  [`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)  [`removeFromContents`](../object/Thing.html#removeFromContents)  [`revealOnMove`](../object/Thing.html#revealOnMove)  [`roomHeadline`](../object/Thing.html#roomHeadline)  [`roomSubhead`](../object/Thing.html#roomSubhead)  [`sayCantBearMoreWeight`](../object/Thing.html#sayCantBearMoreWeight)  [`sayDontKnowHowToGetThere`](../object/Thing.html#sayDontKnowHowToGetThere)  [`sayDontKnowHowToReach`](../object/Thing.html#sayDontKnowHowToReach)  [`sayFindHidden`](../object/Thing.html#sayFindHidden)  [`sayPushTravel`](../object/Thing.html#sayPushTravel)  [`sayTooHeavy`](../object/Thing.html#sayTooHeavy)  [`sayTooHeavyToHide`](../object/Thing.html#sayTooHeavyToHide)  [`scoreObject`](../object/Thing.html#scoreObject)  [`setHasSeen`](../object/Thing.html#setHasSeen)  [`setKnown`](../object/Thing.html#setKnown)  [`setKnowsAbout`](../object/Thing.html#setKnowsAbout)  [`setSeen`](../object/Thing.html#setSeen)  [`shinesOut`](../object/Thing.html#shinesOut)  [`showConnectedMiscContents`](../object/Thing.html#showConnectedMiscContents)  [`showFirstConnectedSpecials`](../object/Thing.html#showFirstConnectedSpecials)  [`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)  [`showSecondConnectedSpecials`](../object/Thing.html#showSecondConnectedSpecials)  [`showSpecialDesc`](../object/Thing.html#showSpecialDesc)  [`showStatuslineExits`](../object/Thing.html#showStatuslineExits)  [`smellDesc`](../object/Thing.html#smellDesc)  [`statusName`](../object/Thing.html#statusName)  [`totalBulkIn`](../object/Thing.html#totalBulkIn)  [`totalWeightIn`](../object/Thing.html#totalWeightIn)  [`traceContainerPath`](../object/Thing.html#traceContainerPath)  [`travelVia`](../object/Thing.html#travelVia)  [`tryCheck`](../object/Thing.html#tryCheck)  [`tryMakingPosture`](../object/Thing.html#tryMakingPosture)  [`unmention`](../object/Thing.html#unmention)  [`unmentionRemoteContents`](../object/Thing.html#unmentionRemoteContents)  [`verifyActor`](../object/Thing.html#verifyActor)  [`verifyEnterPosture`](../object/Thing.html#verifyEnterPosture)  [`verifyPushTravel`](../object/Thing.html#verifyPushTravel)  [`wouldBeLitFor`](../object/Thing.html#wouldBeLitFor)  `

Inherited from `ReplaceRedirector` :  
` [`redirect`](../object/ReplaceRedirector.html#redirect)  `

Inherited from `Redirector` :  
` [`doInstead`](../object/Redirector.html#doInstead)  [`doNested`](../object/Redirector.html#doNested)  [`doOtherAction`](../object/Redirector.html#doOtherAction)  `

Inherited from `Mentionable` :  
` [`construct`](../object/Mentionable.html#construct)  [`matchName`](../object/Mentionable.html#matchName)  [`matchNameCommon`](../object/Mentionable.html#matchNameCommon)  [`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig)  [`phraseMatchName`](../object/Mentionable.html#phraseMatchName)  [`simpleMatchName`](../object/Mentionable.html#simpleMatchName)  `

Inherited from `LMentionable` :  
` [`addDictWord`](../object/LMentionable.html#addDictWord)  [`addVocab`](../object/LMentionable.html#addVocab)  [`addVocabWord`](../object/LMentionable.html#addVocabWord)  [`aNameFrom`](../object/LMentionable.html#aNameFrom)  [`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss)  [`classInit`](../object/LMentionable.html#classInit)  [`contify`](../object/LMentionable.html#contify)  [`distinguishedName`](../object/LMentionable.html#distinguishedName)  [`ifPronoun`](../object/LMentionable.html#ifPronoun)  [`inheritVocab`](../object/LMentionable.html#inheritVocab)  [`initVocab`](../object/LMentionable.html#initVocab)  [`initVocabWord`](../object/LMentionable.html#initVocabWord)  [`locify`](../object/LMentionable.html#locify)  [`matchPronoun`](../object/LMentionable.html#matchPronoun)  [`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom)  [`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom)  [`possessify`](../object/LMentionable.html#possessify)  [`pronoun`](../object/LMentionable.html#pronoun)  [`removeVocabWord`](../object/LMentionable.html#removeVocabWord)  [`replaceVocab`](../object/LMentionable.html#replaceVocab)  [`theNameFrom`](../object/LMentionable.html#theNameFrom)  [`theNameIs`](../object/LMentionable.html#theNameIs)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="attachedTo"></span>

`attachedTo`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[563](../source/attachables.t.html#563)\]



Strictly speaking, the attachedTo property of an Attachable is a bit
arbitrary when the Attachable is attached to more than one thing; we
arbitrarily choose the first thing in its attachedToList.



<span id="attachedToList"></span>

`attachedToList`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[569](../source/attachables.t.html#569)\]



The list of things to which I'm attached (as opposed to things attached
to me).



<span id="cannotAttachToMoreMsg"></span>

`cannotAttachToMoreMsg`

[attachables.t](../file/attachables.t.html)\[[634](../source/attachables.t.html#634)\]



*no description available*



<span id="maxAttachedTo"></span>

`maxAttachedTo`

[attachables.t](../file/attachables.t.html)\[[578](../source/attachables.t.html#578)\]



The maximum number of things I can be attached to at once. By default
this is 2, since probably the most commonly use for an Attachable is to
join or link two other things, but this can easily be overridden as
required. If you want there to be no limit to the number of things I can
be attached to at once, make maxAttachedTo nil.



<span id="multiPluggable"></span>

`multiPluggable`

[attachables.t](../file/attachables.t.html)\[[651](../source/attachables.t.html#651)\]



By default an Attachable can be plugged into more than one thing at a
time



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="allowAttach"></span>

`allowAttach (obj)`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[612](../source/attachables.t.html#612)\]



We allow attachment to another obj either for the inherited reason (that
obh is in my list of allowable attachements) or, if we want to reverse
the connection with obj, that obj can be attached to us.



<span id="dobjFor(AttachTo)"></span>

`dobjFor(AttachTo)`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[618](../source/attachables.t.html#618)\]



*no description available*



<span id="isAttachedTo"></span>

`isAttachedTo (obj)`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[642](../source/attachables.t.html#642)\]



I'm attached to obj in the broad sense of having an attachement
relationship with obj either if obj is attached to me or if obj is in
the list of things to which I'm attached.



<span id="makeAttachedTo"></span>

`makeAttachedTo (obj)`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[581](../source/attachables.t.html#581)\]



To make me attached to obj, add obj to my attachedTo list.



<span id="makeDetachedFrom"></span>

`makeDetachedFrom (obj)`<span class="rem">OVERRIDDEN</span>

[attachables.t](../file/attachables.t.html)\[[589](../source/attachables.t.html#589)\]



To make something detached from me, remove obj from my attachedTo list.



<span id="reverseConnect"></span>

`reverseConnect (obj)`

[attachables.t](../file/attachables.t.html)\[[602](../source/attachables.t.html#602)\]



Since an ATTACHABLE could potentially be in a many-to-many relationship,
we may sometimes want to control the order of connection (i.e. which is
considered to be the connected object and which the object it's
connected to). If reverseConnect(obj) returns true then we'll turn
CONNECT obj TO self into CONNECT self TO obj.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


