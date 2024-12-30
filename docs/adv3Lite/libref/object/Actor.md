[Actor]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[26](../source/actor.t.html#26)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
An Actor is an object representing a living being (or something that
behaves like a living being, such as an intelligent robot), with which
the player character can potentially converse, and which can move around
and pursue his/her/its own agenda. This class is intended for the
implementation of NPCs (non-player characters).

`class `**`Actor`**` :   `[`EndConvBlocker`](../object/EndConvBlocker.html)`   `[`AgendaManager`](../object/AgendaManager.html)`   `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)`   `[`Thing`](../object/Thing.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Actor`**\
`         `[`EndConvBlocker`](../object/EndConvBlocker.html)\
`                 object`\
`         `[`AgendaManager`](../object/AgendaManager.html)\
`                 object`\
`         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)\
`                 `[`TopicDatabase`](../object/TopicDatabase.html)\
`                         object`\
`         `[`Thing`](../object/Thing.html)\
`                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                         `[`Redirector`](../object/Redirector.html)\
`                                 object`\
`                 `[`Mentionable`](../object/Mentionable.html)\
`                         `[`LMentionable`](../object/LMentionable.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`active`](#active)`  `[`activeKeys`](#activeKeys)`  `[`actorInformOverheard`](#actorInformOverheard)`  `[`actorStaysPutMsg`](#actorStaysPutMsg)`  `[`allNodes`](#allNodes)`  `[`allStates`](#allStates)`  `[`alreadyTalkingMsg`](#alreadyTalkingMsg)`  `[`attackResponseMsg`](#attackResponseMsg)`  `[`attentionSpan`](#attentionSpan)`  `[`autoImplicitSay`](#autoImplicitSay)`  `[`boredomAgendaItem`](#boredomAgendaItem)`  `[`boredomCount`](#boredomCount)`  `[`cannotAttackMsg`](#cannotAttackMsg)`  `[`cannotKissMsg`](#cannotKissMsg)`  `[`cannotTakeMsg`](#cannotTakeMsg)`  `[`canTalkToMe`](#canTalkToMe)`  `[`cantFollowFromHereMsg`](#cantFollowFromHereMsg)`  `[`canThrowToMe`](#canThrowToMe)`  `[`cantStartFromHereMsg`](#cantStartFromHereMsg)`  `[`contentsListed`](#contentsListed)`  `[`contType`](#contType)`  `[`conversedLastTurn`](#conversedLastTurn)`  `[`conversedThisTurn`](#conversedThisTurn)`  `[`convKeyTab`](#convKeyTab)`  `[`curState`](#curState)`  `[`defaultCountsAsSay`](#defaultCountsAsSay)`  `[`defaultSayResponse`](#defaultSayResponse)`  `[`dontKnowWhereGoneMsg`](#dontKnowWhereGoneMsg)`  `[`enableImplicitSay`](#enableImplicitSay)`  `[`fDaemon`](#fDaemon)`  `[`followActorMsg`](#followActorMsg)`  `[`followAgendaItem`](#followAgendaItem)`  `[`followFuseID`](#followFuseID)`  `[`informedNameTab`](#informedNameTab)`  `[`informOverheard`](#informOverheard)`  `[`isAttackable`](#isAttackable)`  `[`isFixed`](#isFixed)`  `[`keepPendingKeys`](#keepPendingKeys)`  `[`keysManaged`](#keysManaged)`  `[`kissRank`](#kissRank)`  `[`kissResponseMsg`](#kissResponseMsg)`  `[`lastConvTime`](#lastConvTime)`  `[`lastTravelInfo`](#lastTravelInfo)`  `[`noGoodbyeResponseMsg`](#noGoodbyeResponseMsg)`  `[`noHelloResponseMsg`](#noHelloResponseMsg)`  `[`noResponseMsg`](#noResponseMsg)`  `[`notificationOrder`](#notificationOrder)`  `[`ownsContents`](#ownsContents)`  `[`pcArrivalTurn`](#pcArrivalTurn)`  `[`pcConnector`](#pcConnector)`  `[`pcDefaultSayQuip`](#pcDefaultSayQuip)`  `[`pcJustArrived`](#pcJustArrived)`  `[`pendingAgendaList`](#pendingAgendaList)`  `[`pendingKeys`](#pendingKeys)`  `[`physicalTopicObjs`](#physicalTopicObjs)`  `[`refuseCommandMsg`](#refuseCommandMsg)`  `[`specialDescBeforeContents`](#specialDescBeforeContents)`  `[`stateDesc`](#stateDesc)`  `[`suggestionKey`](#suggestionKey)`  `[`touchResponseMsg`](#touchResponseMsg)`  `[`waitToSeeMsg`](#waitToSeeMsg)`  `

` `

Inherited from `AgendaManager` :\
` `[`agendaList`](../object/AgendaManager.html#agendaList)`  `

Inherited from `ActorTopicDatabase` :\
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`defaultAgendaTopic`](../object/ActorTopicDatabase.html#defaultAgendaTopic)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`queryTopics`](../object/ActorTopicDatabase.html#queryTopics)`  `[`sayTopics`](../object/ActorTopicDatabase.html#sayTopics)`  `[`sceneEndTopics`](../object/ActorTopicDatabase.html#sceneEndTopics)`  `[`sceneStartTopics`](../object/ActorTopicDatabase.html#sceneStartTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`talkTopics`](../object/ActorTopicDatabase.html#talkTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

` `

Inherited from `Thing` :\
` `[`actorAlreadyInMsg`](../object/Thing.html#actorAlreadyInMsg)`  `[`actorAlreadyOnMsg`](../object/Thing.html#actorAlreadyOnMsg)`  `[`actorNotInMsg`](../object/Thing.html#actorNotInMsg)`  `[`actorNotOnMsg`](../object/Thing.html#actorNotOnMsg)`  `[`allowPourIntoMe`](../object/Thing.html#allowPourIntoMe)`  `[`allowPourOntoMe`](../object/Thing.html#allowPourOntoMe)`  `[`alreadyCleanMsg`](../object/Thing.html#alreadyCleanMsg)`  `[`alreadyClosedMsg`](../object/Thing.html#alreadyClosedMsg)`  `[`alreadyFastenedMsg`](../object/Thing.html#alreadyFastenedMsg)`  `[`alreadyHasMsg`](../object/Thing.html#alreadyHasMsg)`  `[`alreadyHeldMsg`](../object/Thing.html#alreadyHeldMsg)`  `[`alreadyInMsg`](../object/Thing.html#alreadyInMsg)`  `[`alreadyLitMsg`](../object/Thing.html#alreadyLitMsg)`  `[`alreadyLockedMsg`](../object/Thing.html#alreadyLockedMsg)`  `[`alreadyMovedToMsg`](../object/Thing.html#alreadyMovedToMsg)`  `[`alreadyOnMsg`](../object/Thing.html#alreadyOnMsg)`  `[`alreadyOpenMsg`](../object/Thing.html#alreadyOpenMsg)`  `[`alreadyPresentMsg`](../object/Thing.html#alreadyPresentMsg)`  `[`alreadyThereMsg`](../object/Thing.html#alreadyThereMsg)`  `[`alreadyWornMsg`](../object/Thing.html#alreadyWornMsg)`  `[`autoGetOutToReach`](../object/Thing.html#autoGetOutToReach)`  `[`autoTakeOnFindHidden`](../object/Thing.html#autoTakeOnFindHidden)`  `[`autoUnlock`](../object/Thing.html#autoUnlock)`  `[`brightness`](../object/Thing.html#brightness)`  `[`brightnessForReading`](../object/Thing.html#brightnessForReading)`  `[`brightnessOff`](../object/Thing.html#brightnessOff)`  `[`brightnessOn`](../object/Thing.html#brightnessOn)`  `[`bulk`](../object/Thing.html#bulk)`  `[`bulkCapacity`](../object/Thing.html#bulkCapacity)`  `[`canAttachToMe`](../object/Thing.html#canAttachToMe)`  `[`canAttackWithMe`](../object/Thing.html#canAttackWithMe)`  `[`canBurnWithMe`](../object/Thing.html#canBurnWithMe)`  `[`canCleanWithMe`](../object/Thing.html#canCleanWithMe)`  `[`canClimbDownMe`](../object/Thing.html#canClimbDownMe)`  `[`canClimbUpMe`](../object/Thing.html#canClimbUpMe)`  `[`canCutWithMe`](../object/Thing.html#canCutWithMe)`  `[`canDetachFromMe`](../object/Thing.html#canDetachFromMe)`  `[`canDigWithMe`](../object/Thing.html#canDigWithMe)`  `[`canEnterOnMe`](../object/Thing.html#canEnterOnMe)`  `[`canFastenToMe`](../object/Thing.html#canFastenToMe)`  `[`canGoAlongMe`](../object/Thing.html#canGoAlongMe)`  `[`canGoThrougMe`](../object/Thing.html#canGoThrougMe)`  `[`canHearIn`](../object/Thing.html#canHearIn)`  `[`canHearOut`](../object/Thing.html#canHearOut)`  `[`canJumpOffMe`](../object/Thing.html#canJumpOffMe)`  `[`canJumpOverMe`](../object/Thing.html#canJumpOverMe)`  `[`canLieInMe`](../object/Thing.html#canLieInMe)`  `[`canLieOnMe`](../object/Thing.html#canLieOnMe)`  `[`canLockWithMe`](../object/Thing.html#canLockWithMe)`  `[`canLookBehindMe`](../object/Thing.html#canLookBehindMe)`  `[`canLookThroughMe`](../object/Thing.html#canLookThroughMe)`  `[`canLookUnderMe`](../object/Thing.html#canLookUnderMe)`  `[`canMoveToMe`](../object/Thing.html#canMoveToMe)`  `[`canMoveWithMe`](../object/Thing.html#canMoveWithMe)`  `[`cannotAttachMsg`](../object/Thing.html#cannotAttachMsg)`  `[`cannotAttachToMsg`](../object/Thing.html#cannotAttachToMsg)`  `[`cannotAttachToSelfMsg`](../object/Thing.html#cannotAttachToSelfMsg)`  `[`cannotAttackWithMsg`](../object/Thing.html#cannotAttackWithMsg)`  `[`cannotAttackWithSelfMsg`](../object/Thing.html#cannotAttackWithSelfMsg)`  `[`cannotBoardMsg`](../object/Thing.html#cannotBoardMsg)`  `[`cannotBreakMsg`](../object/Thing.html#cannotBreakMsg)`  `[`cannotBurnMsg`](../object/Thing.html#cannotBurnMsg)`  `[`cannotBurnWithMsg`](../object/Thing.html#cannotBurnWithMsg)`  `[`cannotCleanMsg`](../object/Thing.html#cannotCleanMsg)`  `[`cannotCleanWithMsg`](../object/Thing.html#cannotCleanWithMsg)`  `[`cannotClimbDownMsg`](../object/Thing.html#cannotClimbDownMsg)`  `[`cannotClimbMsg`](../object/Thing.html#cannotClimbMsg)`  `[`cannotCloseMsg`](../object/Thing.html#cannotCloseMsg)`  `[`cannotConsultMsg`](../object/Thing.html#cannotConsultMsg)`  `[`cannotCutMsg`](../object/Thing.html#cannotCutMsg)`  `[`cannotCutWithMsg`](../object/Thing.html#cannotCutWithMsg)`  `[`cannotCutWithSelfMsg`](../object/Thing.html#cannotCutWithSelfMsg)`  `[`cannotDetachFromMsg`](../object/Thing.html#cannotDetachFromMsg)`  `[`cannotDetachFromSelfMsg`](../object/Thing.html#cannotDetachFromSelfMsg)`  `[`cannotDetachMsg`](../object/Thing.html#cannotDetachMsg)`  `[`cannotDigMsg`](../object/Thing.html#cannotDigMsg)`  `[`cannotDigWithMsg`](../object/Thing.html#cannotDigWithMsg)`  `[`cannotDigWithSelfMsg`](../object/Thing.html#cannotDigWithSelfMsg)`  `[`cannotDoffMsg`](../object/Thing.html#cannotDoffMsg)`  `[`cannotDrinkMsg`](../object/Thing.html#cannotDrinkMsg)`  `[`cannotDropMsg`](../object/Thing.html#cannotDropMsg)`  `[`cannotEatMsg`](../object/Thing.html#cannotEatMsg)`  `[`cannotEnterMsg`](../object/Thing.html#cannotEnterMsg)`  `[`cannotEnterOnMsg`](../object/Thing.html#cannotEnterOnMsg)`  `[`cannotExtinguishMsg`](../object/Thing.html#cannotExtinguishMsg)`  `[`cannotFastenMsg`](../object/Thing.html#cannotFastenMsg)`  `[`cannotFastenToMsg`](../object/Thing.html#cannotFastenToMsg)`  `[`cannotFastenToSelfMsg`](../object/Thing.html#cannotFastenToSelfMsg)`  `[`cannotFeelMsg`](../object/Thing.html#cannotFeelMsg)`  `[`cannotFlipMsg`](../object/Thing.html#cannotFlipMsg)`  `[`cannotFollowMsg`](../object/Thing.html#cannotFollowMsg)`  `[`cannotFollowSelfMsg`](../object/Thing.html#cannotFollowSelfMsg)`  `[`cannotGetInCarriedMsg`](../object/Thing.html#cannotGetInCarriedMsg)`  `[`cannotGetOnCarriedMsg`](../object/Thing.html#cannotGetOnCarriedMsg)`  `[`cannotGiveToMsg`](../object/Thing.html#cannotGiveToMsg)`  `[`cannotGiveToSelfMsg`](../object/Thing.html#cannotGiveToSelfMsg)`  `[`cannotGoAlongMsg`](../object/Thing.html#cannotGoAlongMsg)`  `[`cannotGoNearThereMsg`](../object/Thing.html#cannotGoNearThereMsg)`  `[`cannotGoThroughMsg`](../object/Thing.html#cannotGoThroughMsg)`  `[`cannotJumpOffMsg`](../object/Thing.html#cannotJumpOffMsg)`  `[`cannotJumpOverMsg`](../object/Thing.html#cannotJumpOverMsg)`  `[`cannotLieInMsg`](../object/Thing.html#cannotLieInMsg)`  `[`cannotLieOnMsg`](../object/Thing.html#cannotLieOnMsg)`  `[`cannotLightMsg`](../object/Thing.html#cannotLightMsg)`  `[`cannotLockWithMsg`](../object/Thing.html#cannotLockWithMsg)`  `[`cannotLockWithSelfMsg`](../object/Thing.html#cannotLockWithSelfMsg)`  `[`cannotLookBehindMsg`](../object/Thing.html#cannotLookBehindMsg)`  `[`cannotLookThroughMsg`](../object/Thing.html#cannotLookThroughMsg)`  `[`cannotLookUnderMsg`](../object/Thing.html#cannotLookUnderMsg)`  `[`cannotMoveMsg`](../object/Thing.html#cannotMoveMsg)`  `[`cannotMoveToMsg`](../object/Thing.html#cannotMoveToMsg)`  `[`cannotMoveToSelfMsg`](../object/Thing.html#cannotMoveToSelfMsg)`  `[`cannotMoveWithMsg`](../object/Thing.html#cannotMoveWithMsg)`  `[`cannotMoveWithSelfMsg`](../object/Thing.html#cannotMoveWithSelfMsg)`  `[`cannotOpenMsg`](../object/Thing.html#cannotOpenMsg)`  `[`cannotPlugIntoMsg`](../object/Thing.html#cannotPlugIntoMsg)`  `[`cannotPlugIntoSelfMsg`](../object/Thing.html#cannotPlugIntoSelfMsg)`  `[`cannotPlugMsg`](../object/Thing.html#cannotPlugMsg)`  `[`cannotPourIntoMsg`](../object/Thing.html#cannotPourIntoMsg)`  `[`cannotPourIntoSelfMsg`](../object/Thing.html#cannotPourIntoSelfMsg)`  `[`cannotPourMsg`](../object/Thing.html#cannotPourMsg)`  `[`cannotPourOntoMsg`](../object/Thing.html#cannotPourOntoMsg)`  `[`cannotPourOntoSelfMsg`](../object/Thing.html#cannotPourOntoSelfMsg)`  `[`cannotPullMsg`](../object/Thing.html#cannotPullMsg)`  `[`cannotPurloinContainerMsg`](../object/Thing.html#cannotPurloinContainerMsg)`  `[`cannotPurloinRoomMsg`](../object/Thing.html#cannotPurloinRoomMsg)`  `[`cannotPurloinSelfMsg`](../object/Thing.html#cannotPurloinSelfMsg)`  `[`cannotPushDownMsg`](../object/Thing.html#cannotPushDownMsg)`  `[`cannotPushIntoMsg`](../object/Thing.html#cannotPushIntoMsg)`  `[`cannotPushMsg`](../object/Thing.html#cannotPushMsg)`  `[`cannotPushOwnContainerMsg`](../object/Thing.html#cannotPushOwnContainerMsg)`  `[`cannotPushThroughMsg`](../object/Thing.html#cannotPushThroughMsg)`  `[`cannotPushUpMsg`](../object/Thing.html#cannotPushUpMsg)`  `[`cannotPushViaSelfMsg`](../object/Thing.html#cannotPushViaSelfMsg)`  `[`cannotPutBehindMsg`](../object/Thing.html#cannotPutBehindMsg)`  `[`cannotPutInMsg`](../object/Thing.html#cannotPutInMsg)`  `[`cannotPutInSelfMsg`](../object/Thing.html#cannotPutInSelfMsg)`  `[`cannotPutMsg`](../object/Thing.html#cannotPutMsg)`  `[`cannotPutOnMsg`](../object/Thing.html#cannotPutOnMsg)`  `[`cannotPutUnderMsg`](../object/Thing.html#cannotPutUnderMsg)`  `[`cannotReadMsg`](../object/Thing.html#cannotReadMsg)`  `[`cannotRemoveMsg`](../object/Thing.html#cannotRemoveMsg)`  `[`cannotScrewMsg`](../object/Thing.html#cannotScrewMsg)`  `[`cannotScrewWithMsg`](../object/Thing.html#cannotScrewWithMsg)`  `[`cannotScrewWithSelfMsg`](../object/Thing.html#cannotScrewWithSelfMsg)`  `[`cannotSetMsg`](../object/Thing.html#cannotSetMsg)`  `[`cannotSetToMsg`](../object/Thing.html#cannotSetToMsg)`  `[`cannotShowToMsg`](../object/Thing.html#cannotShowToMsg)`  `[`cannotShowToSelfMsg`](../object/Thing.html#cannotShowToSelfMsg)`  `[`cannotSitInMsg`](../object/Thing.html#cannotSitInMsg)`  `[`cannotSitOnMsg`](../object/Thing.html#cannotSitOnMsg)`  `[`cannotSmellMsg`](../object/Thing.html#cannotSmellMsg)`  `[`cannotStandInMsg`](../object/Thing.html#cannotStandInMsg)`  `[`cannotStandOnMsg`](../object/Thing.html#cannotStandOnMsg)`  `[`cannotTakeFromSelfMsg`](../object/Thing.html#cannotTakeFromSelfMsg)`  `[`cannotTakeMyContainerMsg`](../object/Thing.html#cannotTakeMyContainerMsg)`  `[`cannotTakeSelfMsg`](../object/Thing.html#cannotTakeSelfMsg)`  `[`cannotTalkToMsg`](../object/Thing.html#cannotTalkToMsg)`  `[`cannotTalkToSelfMsg`](../object/Thing.html#cannotTalkToSelfMsg)`  `[`cannotTasteMsg`](../object/Thing.html#cannotTasteMsg)`  `[`cannotThrowAtMsg`](../object/Thing.html#cannotThrowAtMsg)`  `[`cannotThrowAtSelfMsg`](../object/Thing.html#cannotThrowAtSelfMsg)`  `[`cannotThrowMsg`](../object/Thing.html#cannotThrowMsg)`  `[`cannotThrowToMsg`](../object/Thing.html#cannotThrowToMsg)`  `[`cannotThrowToSelfMsg`](../object/Thing.html#cannotThrowToSelfMsg)`  `[`cannotTurnMsg`](../object/Thing.html#cannotTurnMsg)`  `[`cannotTurnToMsg`](../object/Thing.html#cannotTurnToMsg)`  `[`cannotTurnWithMsg`](../object/Thing.html#cannotTurnWithMsg)`  `[`cannotTurnWithSelfMsg`](../object/Thing.html#cannotTurnWithSelfMsg)`  `[`cannotTypeOnMsg`](../object/Thing.html#cannotTypeOnMsg)`  `[`cannotUnfastenFromMsg`](../object/Thing.html#cannotUnfastenFromMsg)`  `[`cannotUnfastenFromSelfMsg`](../object/Thing.html#cannotUnfastenFromSelfMsg)`  `[`cannotUnfastenMsg`](../object/Thing.html#cannotUnfastenMsg)`  `[`cannotUnlockWithMsg`](../object/Thing.html#cannotUnlockWithMsg)`  `[`cannotUnlockWithSelfMsg`](../object/Thing.html#cannotUnlockWithSelfMsg)`  `[`cannotUnplugFromMsg`](../object/Thing.html#cannotUnplugFromMsg)`  `[`cannotUnplugFromSelfMsg`](../object/Thing.html#cannotUnplugFromSelfMsg)`  `[`cannotUnplugMsg`](../object/Thing.html#cannotUnplugMsg)`  `[`cannotUnscrewMsg`](../object/Thing.html#cannotUnscrewMsg)`  `[`cannotUnscrewWithMsg`](../object/Thing.html#cannotUnscrewWithMsg)`  `[`cannotUnscrewWithSelfMsg`](../object/Thing.html#cannotUnscrewWithSelfMsg)`  `[`cannotWearMsg`](../object/Thing.html#cannotWearMsg)`  `[`cannotWriteOnMsg`](../object/Thing.html#cannotWriteOnMsg)`  `[`canPlugIntoMe`](../object/Thing.html#canPlugIntoMe)`  `[`canPourIntoMe`](../object/Thing.html#canPourIntoMe)`  `[`canPourOntoMe`](../object/Thing.html#canPourOntoMe)`  `[`canPullTravel`](../object/Thing.html#canPullTravel)`  `[`canPushTravel`](../object/Thing.html#canPushTravel)`  `[`canPutBehindMe`](../object/Thing.html#canPutBehindMe)`  `[`canPutInMe`](../object/Thing.html#canPutInMe)`  `[`canPutUnderMe`](../object/Thing.html#canPutUnderMe)`  `[`canReachIn`](../object/Thing.html#canReachIn)`  `[`canReachOut`](../object/Thing.html#canReachOut)`  `[`canScrewWithMe`](../object/Thing.html#canScrewWithMe)`  `[`canSeeIn`](../object/Thing.html#canSeeIn)`  `[`canSeeOut`](../object/Thing.html#canSeeOut)`  `[`canSetMeTo`](../object/Thing.html#canSetMeTo)`  `[`canSitInMe`](../object/Thing.html#canSitInMe)`  `[`canSitOnMe`](../object/Thing.html#canSitOnMe)`  `[`canSmellIn`](../object/Thing.html#canSmellIn)`  `[`canSmellOut`](../object/Thing.html#canSmellOut)`  `[`canStandInMe`](../object/Thing.html#canStandInMe)`  `[`canStandOnMe`](../object/Thing.html#canStandOnMe)`  `[`canSupply`](../object/Thing.html#canSupply)`  `[`canThrowAtMe`](../object/Thing.html#canThrowAtMe)`  `[`canTurnMeTo`](../object/Thing.html#canTurnMeTo)`  `[`canTurnWithMe`](../object/Thing.html#canTurnWithMe)`  `[`canTypeOnMe`](../object/Thing.html#canTypeOnMe)`  `[`canUnfastenFromMe`](../object/Thing.html#canUnfastenFromMe)`  `[`canUnlockWithMe`](../object/Thing.html#canUnlockWithMe)`  `[`canUnplugFromMe`](../object/Thing.html#canUnplugFromMe)`  `[`canUnscrewWithMe`](../object/Thing.html#canUnscrewWithMe)`  `[`canWriteOnMe`](../object/Thing.html#canWriteOnMe)`  `[`checkAttackMsg`](../object/Thing.html#checkAttackMsg)`  `[`checkFeelMsg`](../object/Thing.html#checkFeelMsg)`  `[`checkKissMsg`](../object/Thing.html#checkKissMsg)`  `[`circularlyInMsg`](../object/Thing.html#circularlyInMsg)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedInLook`](../object/Thing.html#contentsListedInLook)`  `[`contentsListedInSearch`](../object/Thing.html#contentsListedInSearch)`  `[`currentInterlocutor`](../object/Thing.html#currentInterlocutor)`  `[`curSetting`](../object/Thing.html#curSetting)`  `[`darkName`](../object/Thing.html#darkName)`  `[`decorationActions`](../object/Thing.html#decorationActions)`  `[`decorationActions`](../object/Thing.html#decorationActions)`  `[`defaultPosture`](../object/Thing.html#defaultPosture)`  `[`desc`](../object/Thing.html#desc)`  `[`directlyHeld`](../object/Thing.html#directlyHeld)`  `[`directlyIn`](../object/Thing.html#directlyIn)`  `[`directlyWorn`](../object/Thing.html#directlyWorn)`  `[`distinguishByContents`](../object/Thing.html#distinguishByContents)`  `[`dontNeedCleaningObjMsg`](../object/Thing.html#dontNeedCleaningObjMsg)`  `[`dropItemsBehind`](../object/Thing.html#dropItemsBehind)`  `[`dropItemsUnder`](../object/Thing.html#dropItemsUnder)`  `[`dropLocation`](../object/Thing.html#dropLocation)`  `[`enclosing`](../object/Thing.html#enclosing)`  `[`examined`](../object/Thing.html#examined)`  `[`examineListed`](../object/Thing.html#examineListed)`  `[`examineLister`](../object/Thing.html#examineLister)`  `[`exitLocation`](../object/Thing.html#exitLocation)`  `[`extContents`](../object/Thing.html#extContents)`  `[`familiar`](../object/Thing.html#familiar)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`findHiddenDest`](../object/Thing.html#findHiddenDest)`  `[`fluidName`](../object/Thing.html#fluidName)`  `[`futileToAttackMsg`](../object/Thing.html#futileToAttackMsg)`  `[`futileToKissMsg`](../object/Thing.html#futileToKissMsg)`  `[`getBulkHiddenBehind`](../object/Thing.html#getBulkHiddenBehind)`  `[`getBulkHiddenIn`](../object/Thing.html#getBulkHiddenIn)`  `[`getBulkHiddenUnder`](../object/Thing.html#getBulkHiddenUnder)`  `[`getFacets`](../object/Thing.html#getFacets)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutToJump`](../object/Thing.html#getOutToJump)`  `[`getWeightHiddenBehind`](../object/Thing.html#getWeightHiddenBehind)`  `[`getWeightHiddenIn`](../object/Thing.html#getWeightHiddenIn)`  `[`getWeightHiddenUnder`](../object/Thing.html#getWeightHiddenUnder)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`groupOrder`](../object/Thing.html#groupOrder)`  `[`hearNothingMsg`](../object/Thing.html#hearNothingMsg)`  `[`hiddenBehind`](../object/Thing.html#hiddenBehind)`  `[`hiddenIn`](../object/Thing.html#hiddenIn)`  `[`hiddenUnder`](../object/Thing.html#hiddenUnder)`  `[`illuminationThreshold`](../object/Thing.html#illuminationThreshold)`  `[`inDarkDesc`](../object/Thing.html#inDarkDesc)`  `[`indirectLockableMsg`](../object/Thing.html#indirectLockableMsg)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`intContents`](../object/Thing.html#intContents)`  `[`interiorDesc`](../object/Thing.html#interiorDesc)`  `[`inventoryListed`](../object/Thing.html#inventoryListed)`  `[`isAttachable`](../object/Thing.html#isAttachable)`  `[`isBoardable`](../object/Thing.html#isBoardable)`  `[`isBreakable`](../object/Thing.html#isBreakable)`  `[`isBurnable`](../object/Thing.html#isBurnable)`  `[`isClean`](../object/Thing.html#isClean)`  `[`isCleanable`](../object/Thing.html#isCleanable)`  `[`isClimbable`](../object/Thing.html#isClimbable)`  `[`isCloseable`](../object/Thing.html#isCloseable)`  `[`isConsultable`](../object/Thing.html#isConsultable)`  `[`isCuttable`](../object/Thing.html#isCuttable)`  `[`isDecoration`](../object/Thing.html#isDecoration)`  `[`isDetachable`](../object/Thing.html#isDetachable)`  `[`isDiggable`](../object/Thing.html#isDiggable)`  `[`isDoffable`](../object/Thing.html#isDoffable)`  `[`isDrinkable`](../object/Thing.html#isDrinkable)`  `[`isDroppable`](../object/Thing.html#isDroppable)`  `[`isEdible`](../object/Thing.html#isEdible)`  `[`isEnterable`](../object/Thing.html#isEnterable)`  `[`isExtinguishable`](../object/Thing.html#isExtinguishable)`  `[`isFastenable`](../object/Thing.html#isFastenable)`  `[`isFastened`](../object/Thing.html#isFastened)`  `[`isFeelable`](../object/Thing.html#isFeelable)`  `[`isFlippable`](../object/Thing.html#isFlippable)`  `[`isFollowable`](../object/Thing.html#isFollowable)`  `[`isHidden`](../object/Thing.html#isHidden)`  `[`isInitialPlayerChar`](../object/Thing.html#isInitialPlayerChar)`  `[`isKissable`](../object/Thing.html#isKissable)`  `[`isLightable`](../object/Thing.html#isLightable)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isLit`](../object/Thing.html#isLit)`  `[`isLocked`](../object/Thing.html#isLocked)`  `[`isMoveable`](../object/Thing.html#isMoveable)`  `[`isOn`](../object/Thing.html#isOn)`  `[`isOpen`](../object/Thing.html#isOpen)`  `[`isOpenable`](../object/Thing.html#isOpenable)`  `[`isPlayerChar`](../object/Thing.html#isPlayerChar)`  `[`isPlugable`](../object/Thing.html#isPlugable)`  `[`isPourable`](../object/Thing.html#isPourable)`  `[`isProminentNoise`](../object/Thing.html#isProminentNoise)`  `[`isProminentSmell`](../object/Thing.html#isProminentSmell)`  `[`isPullable`](../object/Thing.html#isPullable)`  `[`isPushable`](../object/Thing.html#isPushable)`  `[`isReadable`](../object/Thing.html#isReadable)`  `[`isRemoveable`](../object/Thing.html#isRemoveable)`  `[`isScrewable`](../object/Thing.html#isScrewable)`  `[`isSettable`](../object/Thing.html#isSettable)`  `[`isSmellable`](../object/Thing.html#isSmellable)`  `[`isSwitchable`](../object/Thing.html#isSwitchable)`  `[`isTakeable`](../object/Thing.html#isTakeable)`  `[`isTasteable`](../object/Thing.html#isTasteable)`  `[`isThrowable`](../object/Thing.html#isThrowable)`  `[`isTransparent`](../object/Thing.html#isTransparent)`  `[`isTurnable`](../object/Thing.html#isTurnable)`  `[`isUnfastenable`](../object/Thing.html#isUnfastenable)`  `[`isUnplugable`](../object/Thing.html#isUnplugable)`  `[`isUnscrewable`](../object/Thing.html#isUnscrewable)`  `[`isVehicle`](../object/Thing.html#isVehicle)`  `[`isWearable`](../object/Thing.html#isWearable)`  `[`keyDoesntWorkMsg`](../object/Thing.html#keyDoesntWorkMsg)`  `[`keyList`](../object/Thing.html#keyList)`  `[`keyNotNeededMsg`](../object/Thing.html#keyNotNeededMsg)`  `[`known`](../object/Thing.html#known)`  `[`knownKeyList`](../object/Thing.html#knownKeyList)`  `[`knownProp`](../object/Thing.html#knownProp)`  `[`lastSeenAt`](../object/Thing.html#lastSeenAt)`  `[`lieOnScore`](../object/Thing.html#lieOnScore)`  `[`lightSources`](../object/Thing.html#lightSources)`  `[`listableContents`](../object/Thing.html#listableContents)`  `[`listenDesc`](../object/Thing.html#listenDesc)`  `[`listenDescWithoutSource`](../object/Thing.html#listenDescWithoutSource)`  `[`listenDescWithSource`](../object/Thing.html#listenDescWithSource)`  `[`listOrder`](../object/Thing.html#listOrder)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lockability`](../object/Thing.html#lockability)`  `[`lockedMsg`](../object/Thing.html#lockedMsg)`  `[`lookBehindMsg`](../object/Thing.html#lookBehindMsg)`  `[`lookInMsg`](../object/Thing.html#lookInMsg)`  `[`lookListed`](../object/Thing.html#lookListed)`  `[`lookThroughMsg`](../object/Thing.html#lookThroughMsg)`  `[`lookUnderMsg`](../object/Thing.html#lookUnderMsg)`  `[`markInventoryAsSeen`](../object/Thing.html#markInventoryAsSeen)`  `[`matchPullOnly`](../object/Thing.html#matchPullOnly)`  `[`matchPushOnly`](../object/Thing.html#matchPushOnly)`  `[`maxBulkHiddenBehind`](../object/Thing.html#maxBulkHiddenBehind)`  `[`maxBulkHiddenIn`](../object/Thing.html#maxBulkHiddenIn)`  `[`maxBulkHiddenUnder`](../object/Thing.html#maxBulkHiddenUnder)`  `[`maxSingleBulk`](../object/Thing.html#maxSingleBulk)`  `[`maxSingleWeight`](../object/Thing.html#maxSingleWeight)`  `[`maxWeightHiddenBehind`](../object/Thing.html#maxWeightHiddenBehind)`  `[`maxWeightHiddenIn`](../object/Thing.html#maxWeightHiddenIn)`  `[`maxWeightHiddenUnder`](../object/Thing.html#maxWeightHiddenUnder)`  `[`mentioned`](../object/Thing.html#mentioned)`  `[`moved`](../object/Thing.html#moved)`  `[`movedTo`](../object/Thing.html#movedTo)`  `[`moveNoEffectMsg`](../object/Thing.html#moveNoEffectMsg)`  `[`mustBeCleanedWith`](../object/Thing.html#mustBeCleanedWith)`  `[`myInventoryLister`](../object/Thing.html#myInventoryLister)`  `[`myLookBehindLister`](../object/Thing.html#myLookBehindLister)`  `[`myLookInLister`](../object/Thing.html#myLookInLister)`  `[`myLookUnderLister`](../object/Thing.html#myLookUnderLister)`  `[`myOpeningContentsLister`](../object/Thing.html#myOpeningContentsLister)`  `[`myWornLister`](../object/Thing.html#myWornLister)`  `[`needsCleaning`](../object/Thing.html#needsCleaning)`  `[`noLongerTalkingToAnyoneMsg`](../object/Thing.html#noLongerTalkingToAnyoneMsg)`  `[`nominalContents`](../object/Thing.html#nominalContents)`  `[`noNeedToCleanMsg`](../object/Thing.html#noNeedToCleanMsg)`  `[`notFastenedMsg`](../object/Thing.html#notFastenedMsg)`  `[`notHoldingMsg`](../object/Thing.html#notHoldingMsg)`  `[`notImportantMsg`](../object/Thing.html#notImportantMsg)`  `[`notInMsg`](../object/Thing.html#notInMsg)`  `[`notLitMsg`](../object/Thing.html#notLitMsg)`  `[`notLockableMsg`](../object/Thing.html#notLockableMsg)`  `[`notLockedMsg`](../object/Thing.html#notLockedMsg)`  `[`notSwitchableMsg`](../object/Thing.html#notSwitchableMsg)`  `[`notTalkingToAnyoneMsg`](../object/Thing.html#notTalkingToAnyoneMsg)`  `[`notWornMsg`](../object/Thing.html#notWornMsg)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`objIntoPrep`](../object/Thing.html#objIntoPrep)`  `[`okayCleanMsg`](../object/Thing.html#okayCleanMsg)`  `[`okayGetOutOfMsg`](../object/Thing.html#okayGetOutOfMsg)`  `[`okayLieInMsg`](../object/Thing.html#okayLieInMsg)`  `[`okayLieOnMsg`](../object/Thing.html#okayLieOnMsg)`  `[`okayLockMsg`](../object/Thing.html#okayLockMsg)`  `[`okayOpenMsg`](../object/Thing.html#okayOpenMsg)`  `[`okayPushIntoMsg`](../object/Thing.html#okayPushIntoMsg)`  `[`okayPushOutOfMsg`](../object/Thing.html#okayPushOutOfMsg)`  `[`okaySetMsg`](../object/Thing.html#okaySetMsg)`  `[`okaySitInMsg`](../object/Thing.html#okaySitInMsg)`  `[`okaySitOnMsg`](../object/Thing.html#okaySitOnMsg)`  `[`okayStandInMsg`](../object/Thing.html#okayStandInMsg)`  `[`okayStandOnMsg`](../object/Thing.html#okayStandOnMsg)`  `[`okayUnlockMsg`](../object/Thing.html#okayUnlockMsg)`  `[`opacity`](../object/Thing.html#opacity)`  `[`opened`](../object/Thing.html#opened)`  `[`openStatusReportable`](../object/Thing.html#openStatusReportable)`  `[`owner`](../object/Thing.html#owner)`  `[`paraBrksBtwnSubcontents`](../object/Thing.html#paraBrksBtwnSubcontents)`  `[`partOfYouMsg`](../object/Thing.html#partOfYouMsg)`  `[`posture`](../object/Thing.html#posture)`  `[`preCondActor`](../object/Thing.html#preCondActor)`  `[`pullNoEffectMsg`](../object/Thing.html#pullNoEffectMsg)`  `[`pushNoEffectMsg`](../object/Thing.html#pushNoEffectMsg)`  `[`readDesc`](../object/Thing.html#readDesc)`  `[`recognizableInDark`](../object/Thing.html#recognizableInDark)`  `[`remapActor`](../object/Thing.html#remapActor)`  `[`remapBehind`](../object/Thing.html#remapBehind)`  `[`remapIn`](../object/Thing.html#remapIn)`  `[`remapOn`](../object/Thing.html#remapOn)`  `[`remapProps`](../object/Thing.html#remapProps)`  `[`remapUnder`](../object/Thing.html#remapUnder)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomPart`](../object/Thing.html#roomPart)`  `[`roomPartDesc`](../object/Thing.html#roomPartDesc)`  `[`roomSubContentsLister`](../object/Thing.html#roomSubContentsLister)`  `[`roomTitle`](../object/Thing.html#roomTitle)`  `[`searchListed`](../object/Thing.html#searchListed)`  `[`seen`](../object/Thing.html#seen)`  `[`seenProp`](../object/Thing.html#seenProp)`  `[`shouldBeBroken`](../object/Thing.html#shouldBeBroken)`  `[`shouldNotBreakMsg`](../object/Thing.html#shouldNotBreakMsg)`  `[`shouldNotPourIntoMsg`](../object/Thing.html#shouldNotPourIntoMsg)`  `[`shouldNotPourOntoMsg`](../object/Thing.html#shouldNotPourOntoMsg)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`sitOnScore`](../object/Thing.html#sitOnScore)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellDescWithoutSource`](../object/Thing.html#smellDescWithoutSource)`  `[`smellDescWithSource`](../object/Thing.html#smellDescWithSource)`  `[`smellNothingMsg`](../object/Thing.html#smellNothingMsg)`  `[`smellObj`](../object/Thing.html#smellObj)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundObj`](../object/Thing.html#soundObj)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialDescOrder`](../object/Thing.html#specialDescOrder)`  `[`stagingLocation`](../object/Thing.html#stagingLocation)`  `[`standOnScore`](../object/Thing.html#standOnScore)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`throwFallsShortMsg`](../object/Thing.html#throwFallsShortMsg)`  `[`tooDarkToReadMsg`](../object/Thing.html#tooDarkToReadMsg)`  `[`tooDarkToSeeMsg`](../object/Thing.html#tooDarkToSeeMsg)`  `[`tooFarAwayToHearMsg`](../object/Thing.html#tooFarAwayToHearMsg)`  `[`tooFarAwayToReadMsg`](../object/Thing.html#tooFarAwayToReadMsg)`  `[`tooFarAwayToSeeDetailMsg`](../object/Thing.html#tooFarAwayToSeeDetailMsg)`  `[`tooFarAwayToSmellMsg`](../object/Thing.html#tooFarAwayToSmellMsg)`  `[`totalWeight`](../object/Thing.html#totalWeight)`  `[`turnLastExamined`](../object/Thing.html#turnLastExamined)`  `[`turnLastMoved`](../object/Thing.html#turnLastMoved)`  `[`turnLastMovedInto`](../object/Thing.html#turnLastMovedInto)`  `[`turnNoEffectMsg`](../object/Thing.html#turnNoEffectMsg)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useKey_`](../object/Thing.html#useKey_)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`viaMode`](../object/Thing.html#viaMode)`  `[`visibleInDark`](../object/Thing.html#visibleInDark)`  `[`vocabLikelihood`](../object/Thing.html#vocabLikelihood)`  `[`weight`](../object/Thing.html#weight)`  `[`weightCapacity`](../object/Thing.html#weightCapacity)`  `[`withKeyMsg`](../object/Thing.html#withKeyMsg)`  `[`wornBy`](../object/Thing.html#wornBy)`  `

` `

` `

Inherited from `Mentionable` :\
` `[`ambiguouslyPlural`](../object/Mentionable.html#ambiguouslyPlural)`  `[`disambigGroup`](../object/Mentionable.html#disambigGroup)`  `[`disambigMatchPhrases`](../object/Mentionable.html#disambigMatchPhrases)`  `[`disambigName`](../object/Mentionable.html#disambigName)`  `[`disambigOrder`](../object/Mentionable.html#disambigOrder)`  `[`isHer`](../object/Mentionable.html#isHer)`  `[`isHim`](../object/Mentionable.html#isHim)`  `[`isIt`](../object/Mentionable.html#isIt)`  `[`massNoun`](../object/Mentionable.html#massNoun)`  `[`matchPhrases`](../object/Mentionable.html#matchPhrases)`  `[`matchPhrasesExclude`](../object/Mentionable.html#matchPhrasesExclude)`  `[`name`](../object/Mentionable.html#name)`  `[`person`](../object/Mentionable.html#person)`  `[`plural`](../object/Mentionable.html#plural)`  `[`proper`](../object/Mentionable.html#proper)`  `[`qualified`](../object/Mentionable.html#qualified)`  `[`states`](../object/Mentionable.html#states)`  `[`vocab`](../object/Mentionable.html#vocab)`  `[`vocabWords`](../object/Mentionable.html#vocabWords)`  `

Inherited from `LMentionable` :\
` `[`acronymPluralPat`](../object/LMentionable.html#acronymPluralPat)`  `[`alphaCharPat`](../object/LMentionable.html#alphaCharPat)`  `[`aName`](../object/LMentionable.html#aName)`  `[`apostPluralPat`](../object/LMentionable.html#apostPluralPat)`  `[`apostSPat`](../object/LMentionable.html#apostSPat)`  `[`deannotatePat`](../object/LMentionable.html#deannotatePat)`  `[`dictComp`](../object/LMentionable.html#dictComp)`  `[`dummyName`](../object/LMentionable.html#dummyName)`  `[`elevenEighteenPat`](../object/LMentionable.html#elevenEighteenPat)`  `[`emptyVocabWords`](../object/LMentionable.html#emptyVocabWords)`  `[`esPluralPat`](../object/LMentionable.html#esPluralPat)`  `[`firstWordPat`](../object/LMentionable.html#firstWordPat)`  `[`heName`](../object/LMentionable.html#heName)`  `[`herName`](../object/LMentionable.html#herName)`  `[`hersName`](../object/LMentionable.html#hersName)`  `[`himName`](../object/LMentionable.html#himName)`  `[`iesPluralPat`](../object/LMentionable.html#iesPluralPat)`  `[`irregularPlurals`](../object/LMentionable.html#irregularPlurals)`  `[`lastWordPat`](../object/LMentionable.html#lastWordPat)`  `[`leadingTagOrQuotePat`](../object/LMentionable.html#leadingTagOrQuotePat)`  `[`menPluralPat`](../object/LMentionable.html#menPluralPat)`  `[`objInName`](../object/LMentionable.html#objInName)`  `[`objIntoName`](../object/LMentionable.html#objIntoName)`  `[`objName`](../object/LMentionable.html#objName)`  `[`objOutOfName`](../object/LMentionable.html#objOutOfName)`  `[`oneLetterAnWordPat`](../object/LMentionable.html#oneLetterAnWordPat)`  `[`oneLetterWordPat`](../object/LMentionable.html#oneLetterWordPat)`  `[`ownerNamed`](../object/LMentionable.html#ownerNamed)`  `[`pluralPat`](../object/LMentionable.html#pluralPat)`  `[`posPat`](../object/LMentionable.html#posPat)`  `[`possAdj`](../object/LMentionable.html#possAdj)`  `[`possEnding`](../object/LMentionable.html#possEnding)`  `[`possNoun`](../object/LMentionable.html#possNoun)`  `[`prepList`](../object/LMentionable.html#prepList)`  `[`prepPhrasePat`](../object/LMentionable.html#prepPhrasePat)`  `[`prepWordPat`](../object/LMentionable.html#prepWordPat)`  `[`pronounMap`](../object/LMentionable.html#pronounMap)`  `[`properNamePat`](../object/LMentionable.html#properNamePat)`  `[`properPat`](../object/LMentionable.html#properPat)`  `[`reflexiveName`](../object/LMentionable.html#reflexiveName)`  `[`specialAOrAn`](../object/LMentionable.html#specialAOrAn)`  `[`tagOrQuotePat`](../object/LMentionable.html#tagOrQuotePat)`  `[`thatName`](../object/LMentionable.html#thatName)`  `[`thatObjName`](../object/LMentionable.html#thatObjName)`  `[`theName`](../object/LMentionable.html#theName)`  `[`theObjName`](../object/LMentionable.html#theObjName)`  `[`trimPat`](../object/LMentionable.html#trimPat)`  `[`truncationLength`](../object/LMentionable.html#truncationLength)`  `[`weakWordPat`](../object/LMentionable.html#weakWordPat)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`activatePendingAgenda`](#activatePendingAgenda)`  `[`actorAfterAction`](#actorAfterAction)`  `[`actorAfterTravel`](#actorAfterTravel)`  `[`actorArrivingTurn`](#actorArrivingTurn)`  `[`actorBeforeAction`](#actorBeforeAction)`  `[`actorBeforeTravel`](#actorBeforeTravel)`  `[`actorCanEndConversation`](#actorCanEndConversation)`  `[`actorRemoteSpecialDesc`](#actorRemoteSpecialDesc)`  `[`actorSay`](#actorSay)`  `[`actorSayHello`](#actorSayHello)`  `[`actorSpecialDesc`](#actorSpecialDesc)`  `[`addPendingKey`](#addPendingKey)`  `[`addToAllAgendas`](#addToAllAgendas)`  `[`addToBothAgendas`](#addToBothAgendas)`  `[`addToCurAgendas`](#addToCurAgendas)`  `[`addToPendingAgenda`](#addToPendingAgenda)`  `[`afterAction`](#afterAction)`  `[`afterTravel`](#afterTravel)`  `[`allowImplicitSay`](#allowImplicitSay)`  `[`allowOtherActorToTake`](#allowOtherActorToTake)`  `[`arouse`](#arouse)`  `[`arrivingTurn`](#arrivingTurn)`  `[`beforeAction`](#beforeAction)`  `[`beforeTravel`](#beforeTravel)`  `[`canCatchThrown`](#canCatchThrown)`  `[`canEndConversation`](#canEndConversation)`  `[`cannotTakeFromActorMsg`](#cannotTakeFromActorMsg)`  `[`condSay`](#condSay)`  `[`convAgendaReady`](#convAgendaReady)`  `[`curNodeIdx`](#curNodeIdx)`  `[`curNodeKey`](#curNodeKey)`  `[`curNodeObj`](#curNodeObj)`  `[`dobjFor(AskAbout)`](#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](#dobjFor(AskFor))`  `[`dobjFor(Attack)`](#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](#dobjFor(AttackWith))`  `[`dobjFor(Feel)`](#dobjFor(Feel))`  `[`dobjFor(Follow)`](#dobjFor(Follow))`  `[`dobjFor(Kiss)`](#dobjFor(Kiss))`  `[`dobjFor(QueryAbout)`](#dobjFor(QueryAbout))`  `[`dobjFor(SayTo)`](#dobjFor(SayTo))`  `[`dobjFor(TalkAbout)`](#dobjFor(TalkAbout))`  `[`dobjFor(TalkTo)`](#dobjFor(TalkTo))`  `[`dobjFor(TellAbout)`](#dobjFor(TellAbout))`  `[`endConversation`](#endConversation)`  `[`findBestResponse`](#findBestResponse)`  `[`followDaemon`](#followDaemon)`  `[`followFuse`](#followFuse)`  `[`getActor`](#getActor)`  `[`getBestMatch`](#getBestMatch)`  `[`handleCommand`](#handleCommand)`  `[`handleTopic`](#handleTopic)`  `[`informedAbout`](#informedAbout)`  `[`initiateTopic`](#initiateTopic)`  `[`iobjFor(GiveTo)`](#iobjFor(GiveTo))`  `[`iobjFor(ShowTo)`](#iobjFor(ShowTo))`  `[`iobjFor(ThrowTo)`](#iobjFor(ThrowTo))`  `[`makeActivated`](#makeActivated)`  `[`makeDeactivated`](#makeDeactivated)`  `[`manageKeys`](#manageKeys)`  `[`nilResponse`](#nilResponse)`  `[`noteConversed`](#noteConversed)`  `[`notifyRemove`](#notifyRemove)`  `[`remoteSpecialDesc`](#remoteSpecialDesc)`  `[`removeFromAllAgendas`](#removeFromAllAgendas)`  `[`removeFromBothAgendas`](#removeFromBothAgendas)`  `[`removeFromCurAgendas`](#removeFromCurAgendas)`  `[`removeFromPendingAgenda`](#removeFromPendingAgenda)`  `[`sayActorArriving`](#sayActorArriving)`  `[`sayActorCatches`](#sayActorCatches)`  `[`sayActorDeparting`](#sayActorDeparting)`  `[`sayActorDropsCatch`](#sayActorDropsCatch)`  `[`sayActorFollowing`](#sayActorFollowing)`  `[`sayActorFollowingMe`](#sayActorFollowingMe)`  `[`sayArriving`](#sayArriving)`  `[`sayDeparting`](#sayDeparting)`  `[`sayFollowing`](#sayFollowing)`  `[`sayGoodbye`](#sayGoodbye)`  `[`sayHeadAfterActor`](#sayHeadAfterActor)`  `[`sayHello`](#sayHello)`  `[`setFollowMeFuse`](#setFollowMeFuse)`  `[`setInformed`](#setInformed)`  `[`setState`](#setState)`  `[`showSuggestions`](#showSuggestions)`  `[`specialDesc`](#specialDesc)`  `[`startFollowing`](#startFollowing)`  `[`stopFollowing`](#stopFollowing)`  `[`takeTurn`](#takeTurn)`  `[`travelVia`](#travelVia)`  `

Inherited from `EndConvBlocker` :\
` `[`blockEndConv`](../object/EndConvBlocker.html#blockEndConv)`  `

Inherited from `AgendaManager` :\
` `[`addToAgenda`](../object/AgendaManager.html#addToAgenda)`  `[`executeAgenda`](../object/AgendaManager.html#executeAgenda)`  `[`removeFromAgenda`](../object/AgendaManager.html#removeFromAgenda)`  `

Inherited from `ActorTopicDatabase` :\
` `[`listableTopics`](../object/ActorTopicDatabase.html#listableTopics)`  `

Inherited from `TopicDatabase` :\
` `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `

Inherited from `Thing` :\
` `[`abcName`](../object/Thing.html#abcName)`  `[`accumulateBrightness`](../object/Thing.html#accumulateBrightness)`  `[`accumulatedBrightnessWithin`](../object/Thing.html#accumulatedBrightnessWithin)`  `[`actionMoveInto`](../object/Thing.html#actionMoveInto)`  `[`actorAction`](../object/Thing.html#actorAction)`  `[`addToAllContents`](../object/Thing.html#addToAllContents)`  `[`addToContents`](../object/Thing.html#addToContents)`  `[`allContents`](../object/Thing.html#allContents)`  `[`allowReachOut`](../object/Thing.html#allowReachOut)`  `[`aobjFor`](../object/Thing.html#aobjFor)`  `[`beforeMovePushable`](../object/Thing.html#beforeMovePushable)`  `[`brightnessWithin`](../object/Thing.html#brightnessWithin)`  `[`byRoom`](../object/Thing.html#byRoom)`  `[`canHear`](../object/Thing.html#canHear)`  `[`cannotPushTravelMsg`](../object/Thing.html#cannotPushTravelMsg)`  `[`cannotReachOutMsg`](../object/Thing.html#cannotReachOutMsg)`  `[`canReach`](../object/Thing.html#canReach)`  `[`canSee`](../object/Thing.html#canSee)`  `[`canSmell`](../object/Thing.html#canSmell)`  `[`canTalkTo`](../object/Thing.html#canTalkTo)`  `[`checkDisplay`](../object/Thing.html#checkDisplay)`  `[`checkInsert`](../object/Thing.html#checkInsert)`  `[`checkPushTravel`](../object/Thing.html#checkPushTravel)`  `[`checkReach`](../object/Thing.html#checkReach)`  `[`checkReachIn`](../object/Thing.html#checkReachIn)`  `[`checkRemove`](../object/Thing.html#checkRemove)`  `[`checkRoomToHold`](../object/Thing.html#checkRoomToHold)`  `[`checkSetting`](../object/Thing.html#checkSetting)`  `[`childLocType`](../object/Thing.html#childLocType)`  `[`commonContainingParent`](../object/Thing.html#commonContainingParent)`  `[`commonInteriorParent`](../object/Thing.html#commonInteriorParent)`  `[`containerPath`](../object/Thing.html#containerPath)`  `[`containerPathBlock`](../object/Thing.html#containerPathBlock)`  `[`darkDesc`](../object/Thing.html#darkDesc)`  `[`describeMovePushable`](../object/Thing.html#describeMovePushable)`  `[`describePushTravel`](../object/Thing.html#describePushTravel)`  `[`directChildParent`](../object/Thing.html#directChildParent)`  `[`discover`](../object/Thing.html#discover)`  `[`display`](../object/Thing.html#display)`  `[`displayAlt`](../object/Thing.html#displayAlt)`  `[`dobjFor(Attach)`](../object/Thing.html#dobjFor(Attach))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(Cut)`](../object/Thing.html#dobjFor(Cut))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Default)`](../object/Thing.html#dobjFor(Default))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(GetOff)`](../object/Thing.html#dobjFor(GetOff))`  `[`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GiveToImplicit)`](../object/Thing.html#dobjFor(GiveToImplicit))`  `[`dobjFor(GoAlong)`](../object/Thing.html#dobjFor(GoAlong))`  `[`dobjFor(GoNear)`](../object/Thing.html#dobjFor(GoNear))`  `[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))`  `[`dobjFor(GoTo)`](../object/Thing.html#dobjFor(GoTo))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(LieIn)`](../object/Thing.html#dobjFor(LieIn))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))`  `[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))`  `[`dobjFor(Purloin)`](../object/Thing.html#dobjFor(Purloin))`  `[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))`  `[`dobjFor(PushTravelClimbDown)`](../object/Thing.html#dobjFor(PushTravelClimbDown))`  `[`dobjFor(PushTravelClimbUp)`](../object/Thing.html#dobjFor(PushTravelClimbUp))`  `[`dobjFor(PushTravelDir)`](../object/Thing.html#dobjFor(PushTravelDir))`  `[`dobjFor(PushTravelEnter)`](../object/Thing.html#dobjFor(PushTravelEnter))`  `[`dobjFor(PushTravelGetOutOf)`](../object/Thing.html#dobjFor(PushTravelGetOutOf))`  `[`dobjFor(PushTravelThrough)`](../object/Thing.html#dobjFor(PushTravelThrough))`  `[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))`  `[`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))`  `[`dobjFor(ShowToImplicit)`](../object/Thing.html#dobjFor(ShowToImplicit))`  `[`dobjFor(SitIn)`](../object/Thing.html#dobjFor(SitIn))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(SmellSomething)`](../object/Thing.html#dobjFor(SmellSomething))`  `[`dobjFor(StandIn)`](../object/Thing.html#dobjFor(StandIn))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(SwitchOff)`](../object/Thing.html#dobjFor(SwitchOff))`  `[`dobjFor(SwitchOn)`](../object/Thing.html#dobjFor(SwitchOn))`  `[`dobjFor(SwitchVague)`](../object/Thing.html#dobjFor(SwitchVague))`  `[`dobjFor(Take)`](../object/Thing.html#dobjFor(Take))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))`  `[`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))`  `[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))`  `[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(TypeOnVague)`](../object/Thing.html#dobjFor(TypeOnVague))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`dobjFor(WriteOn)`](../object/Thing.html#dobjFor(WriteOn))`  `[`doPushTravel`](../object/Thing.html#doPushTravel)`  `[`examineStatus`](../object/Thing.html#examineStatus)`  `[`filterResolveList`](../object/Thing.html#filterResolveList)`  `[`findHidden`](../object/Thing.html#findHidden)`  `[`findPlausibleKey`](../object/Thing.html#findPlausibleKey)`  `[`firstContainerPathBlock`](../object/Thing.html#firstContainerPathBlock)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarriedBulk`](../object/Thing.html#getCarriedBulk)`  `[`getCarriedWeight`](../object/Thing.html#getCarriedWeight)`  `[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)`  `[`getWeightWithin`](../object/Thing.html#getWeightWithin)`  `[`hasSeen`](../object/Thing.html#hasSeen)`  `[`hideFromAll`](../object/Thing.html#hideFromAll)`  `[`interiorParent`](../object/Thing.html#interiorParent)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(Default)`](../object/Thing.html#iobjFor(Default))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveTo)`](../object/Thing.html#iobjFor(MoveTo))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PushTravelClimbDown)`](../object/Thing.html#iobjFor(PushTravelClimbDown))`  `[`iobjFor(PushTravelClimbUp)`](../object/Thing.html#iobjFor(PushTravelClimbUp))`  `[`iobjFor(PushTravelEnter)`](../object/Thing.html#iobjFor(PushTravelEnter))`  `[`iobjFor(PushTravelGetOutOf)`](../object/Thing.html#iobjFor(PushTravelGetOutOf))`  `[`iobjFor(PushTravelThrough)`](../object/Thing.html#iobjFor(PushTravelThrough))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isAudibleFrom`](../object/Thing.html#isAudibleFrom)`  `[`isChild`](../object/Thing.html#isChild)`  `[`isDirectChild`](../object/Thing.html#isDirectChild)`  `[`isDirectlyHeldBy`](../object/Thing.html#isDirectlyHeldBy)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isDirectlyWornBy`](../object/Thing.html#isDirectlyWornBy)`  `[`isHeldBy`](../object/Thing.html#isHeldBy)`  `[`isIlluminated`](../object/Thing.html#isIlluminated)`  `[`isIn`](../object/Thing.html#isIn)`  `[`isInterior`](../object/Thing.html#isInterior)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOutside`](../object/Thing.html#isOutside)`  `[`isReadableFrom`](../object/Thing.html#isReadableFrom)`  `[`isSmellableFrom`](../object/Thing.html#isSmellableFrom)`  `[`isThereALightSourceIn`](../object/Thing.html#isThereALightSourceIn)`  `[`isVisibleFrom`](../object/Thing.html#isVisibleFrom)`  `[`isWornBy`](../object/Thing.html#isWornBy)`  `[`knowsAbout`](../object/Thing.html#knowsAbout)`  `[`listableContentsOf`](../object/Thing.html#listableContentsOf)`  `[`listContents`](../object/Thing.html#listContents)`  `[`listenDesc`](../object/Thing.html#listenDesc)`  `[`listRemoteContents`](../object/Thing.html#listRemoteContents)`  `[`listSubcontentsOf`](../object/Thing.html#listSubcontentsOf)`  `[`litWithin`](../object/Thing.html#litWithin)`  `[`locationWhich`](../object/Thing.html#locationWhich)`  `[`locType`](../object/Thing.html#locType)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`makeCleaned`](../object/Thing.html#makeCleaned)`  `[`makeFastened`](../object/Thing.html#makeFastened)`  `[`makeLit`](../object/Thing.html#makeLit)`  `[`makeLocked`](../object/Thing.html#makeLocked)`  `[`makeMovedTo`](../object/Thing.html#makeMovedTo)`  `[`makeOn`](../object/Thing.html#makeOn)`  `[`makeOpen`](../object/Thing.html#makeOpen)`  `[`makeSetting`](../object/Thing.html#makeSetting)`  `[`makeWorn`](../object/Thing.html#makeWorn)`  `[`moveHidden`](../object/Thing.html#moveHidden)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveMLIntoAdd`](../object/Thing.html#moveMLIntoAdd)`  `[`moveMLOutOf`](../object/Thing.html#moveMLOutOf)`  `[`nestedLoc`](../object/Thing.html#nestedLoc)`  `[`nominalOwner`](../object/Thing.html#nominalOwner)`  `[`noteSeen`](../object/Thing.html#noteSeen)`  `[`notifyEvent`](../object/Thing.html#notifyEvent)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifySightEvent`](../object/Thing.html#notifySightEvent)`  `[`notifySmellEvent`](../object/Thing.html#notifySmellEvent)`  `[`notifySoundEvent`](../object/Thing.html#notifySoundEvent)`  `[`notionalContents`](../object/Thing.html#notionalContents)`  `[`outermostParent`](../object/Thing.html#outermostParent)`  `[`outermostVisibleParent`](../object/Thing.html#outermostVisibleParent)`  `[`ownedBy`](../object/Thing.html#ownedBy)`  `[`preinitThing`](../object/Thing.html#preinitThing)`  `[`pushTravelRevealItems`](../object/Thing.html#pushTravelRevealItems)`  `[`reachBlockedMsg`](../object/Thing.html#reachBlockedMsg)`  `[`remoteBrightness`](../object/Thing.html#remoteBrightness)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteObjInName`](../object/Thing.html#remoteObjInName)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`revealOnMove`](../object/Thing.html#revealOnMove)`  `[`roomHeadline`](../object/Thing.html#roomHeadline)`  `[`roomSubhead`](../object/Thing.html#roomSubhead)`  `[`sayCantBearMoreWeight`](../object/Thing.html#sayCantBearMoreWeight)`  `[`sayDontKnowHowToGetThere`](../object/Thing.html#sayDontKnowHowToGetThere)`  `[`sayDontKnowHowToReach`](../object/Thing.html#sayDontKnowHowToReach)`  `[`sayFindHidden`](../object/Thing.html#sayFindHidden)`  `[`sayPushTravel`](../object/Thing.html#sayPushTravel)`  `[`sayTooHeavy`](../object/Thing.html#sayTooHeavy)`  `[`sayTooHeavyToHide`](../object/Thing.html#sayTooHeavyToHide)`  `[`scoreObject`](../object/Thing.html#scoreObject)`  `[`setHasSeen`](../object/Thing.html#setHasSeen)`  `[`setKnown`](../object/Thing.html#setKnown)`  `[`setKnowsAbout`](../object/Thing.html#setKnowsAbout)`  `[`setSeen`](../object/Thing.html#setSeen)`  `[`shinesOut`](../object/Thing.html#shinesOut)`  `[`showConnectedMiscContents`](../object/Thing.html#showConnectedMiscContents)`  `[`showFirstConnectedSpecials`](../object/Thing.html#showFirstConnectedSpecials)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showSecondConnectedSpecials`](../object/Thing.html#showSecondConnectedSpecials)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`showStatuslineExits`](../object/Thing.html#showStatuslineExits)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`statusName`](../object/Thing.html#statusName)`  `[`totalBulkIn`](../object/Thing.html#totalBulkIn)`  `[`totalWeightIn`](../object/Thing.html#totalWeightIn)`  `[`traceContainerPath`](../object/Thing.html#traceContainerPath)`  `[`tryCheck`](../object/Thing.html#tryCheck)`  `[`tryMakingPosture`](../object/Thing.html#tryMakingPosture)`  `[`unmention`](../object/Thing.html#unmention)`  `[`unmentionRemoteContents`](../object/Thing.html#unmentionRemoteContents)`  `[`verifyActor`](../object/Thing.html#verifyActor)`  `[`verifyEnterPosture`](../object/Thing.html#verifyEnterPosture)`  `[`verifyPushTravel`](../object/Thing.html#verifyPushTravel)`  `[`wouldBeLitFor`](../object/Thing.html#wouldBeLitFor)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

Inherited from `Mentionable` :\
` `[`construct`](../object/Mentionable.html#construct)`  `[`matchName`](../object/Mentionable.html#matchName)`  `[`matchNameCommon`](../object/Mentionable.html#matchNameCommon)`  `[`matchNameDisambig`](../object/Mentionable.html#matchNameDisambig)`  `[`phraseMatchName`](../object/Mentionable.html#phraseMatchName)`  `[`simpleMatchName`](../object/Mentionable.html#simpleMatchName)`  `

Inherited from `LMentionable` :\
` `[`addDictWord`](../object/LMentionable.html#addDictWord)`  `[`addVocab`](../object/LMentionable.html#addVocab)`  `[`addVocabWord`](../object/LMentionable.html#addVocabWord)`  `[`aNameFrom`](../object/LMentionable.html#aNameFrom)`  `[`aNameFromPoss`](../object/LMentionable.html#aNameFromPoss)`  `[`classInit`](../object/LMentionable.html#classInit)`  `[`contify`](../object/LMentionable.html#contify)`  `[`distinguishedName`](../object/LMentionable.html#distinguishedName)`  `[`ifPronoun`](../object/LMentionable.html#ifPronoun)`  `[`inheritVocab`](../object/LMentionable.html#inheritVocab)`  `[`initVocab`](../object/LMentionable.html#initVocab)`  `[`initVocabWord`](../object/LMentionable.html#initVocabWord)`  `[`locify`](../object/LMentionable.html#locify)`  `[`matchPronoun`](../object/LMentionable.html#matchPronoun)`  `[`pluralNameFrom`](../object/LMentionable.html#pluralNameFrom)`  `[`pluralWordFrom`](../object/LMentionable.html#pluralWordFrom)`  `[`possessify`](../object/LMentionable.html#possessify)`  `[`pronoun`](../object/LMentionable.html#pronoun)`  `[`removeVocabWord`](../object/LMentionable.html#removeVocabWord)`  `[`replaceVocab`](../object/LMentionable.html#replaceVocab)`  `[`theNameFrom`](../object/LMentionable.html#theNameFrom)`  `[`theNameIs`](../object/LMentionable.html#theNameIs)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`

[actor.t](../file/actor.t.html)\[[2166](../source/actor.t.html#2166)\]

::: desc
This definition is needed for the TopicGroup implementation, and should
not normally be overridden in user game code. It allows TopicEntries and
TopicGroups to determine their own active status by reference to that of
their immediate location.
:::

[]{#activeKeys}

`activeKeys`

[actor.t](../file/actor.t.html)\[[732](../source/actor.t.html#732)\]

::: desc
If this list is not empty then the choice of topic entries to match will
be restricted to those whose convKeys property includes at least one of
the key values in this list.
:::

[]{#actorInformOverheard}

`actorInformOverheard`

[actor.t](../file/actor.t.html)\[[1844](../source/actor.t.html#1844)\]

::: desc
Should other actors who can notionally hear the PC talking to us
overhear when information is imparted to us when our current ActorState
is nil? By default they should.
:::

[]{#actorStaysPutMsg}

`actorStaysPutMsg`

[actor.t](../file/actor.t.html)\[[1330](../source/actor.t.html#1330)\]

::: desc
The message to display when this actor doesn\'t go anywhere when the
player character tries to follow this actor.
:::

[]{#allNodes}

`allNodes`

[actor.t](../file/actor.t.html)\[[1717](../source/actor.t.html#1717)\]

::: desc
A list of all ConvNodes associated with this actor. This is a list of
two element lists of the form \[node-name, node-obj\] where node-name is
the convKeys property of the node and node is the associated object.
:::

[]{#allStates}

`allStates`

[actor.t](../file/actor.t.html)\[[1965](../source/actor.t.html#1965)\]

::: desc
A list of all the ActorStates associated with this Actor; this is
populated by the preinitialization of the individual ActorStates.
:::

[]{#alreadyTalkingMsg}

`alreadyTalkingMsg`

[actor.t](../file/actor.t.html)\[[1952](../source/actor.t.html#1952)\]

::: desc
*no description available*
:::

[]{#attackResponseMsg}

`attackResponseMsg`

[actor.t](../file/actor.t.html)\[[2303](../source/actor.t.html#2303)\]

::: desc
The message to display if attacking goes ahead but no HitTopics have
been defined.
:::

[]{#attentionSpan}

`attentionSpan`

[actor.t](../file/actor.t.html)\[[1802](../source/actor.t.html#1802)\]

::: desc
The maximum value that our boredomCount can reach before we terminate a
conversation through \'boredom\', because we\'ve given up waiting for
the player character to say anything. A value of nil (the default)
meanns that we never terminate a conversation for this reason.
:::

[]{#autoImplicitSay}

`autoImplicitSay`

[actor.t](../file/actor.t.html)\[[1076](../source/actor.t.html#1076)\]

::: desc
Flag, do we want the allowImplicitSay() method to rule out the
interpretation of commands as implicit Say commands if there are no
available SayTopics for this actor? By default we do, but game code may
wish to override this if the results of handling player input in this
manner are felt to be inconsistent. If autoImplicitSay is set to nil
then allowImplicitSay() will simply return the value of
enableImplicitSay.
:::

[]{#boredomAgendaItem}

`boredomAgendaItem`

[actor.t](../file/actor.t.html)\[[1548](../source/actor.t.html#1548)\]

::: desc
our special \"boredom\" agenda item - this makes us initiate an end to
an active conversation when the PC has ignored us for a given number of
consecutive turns
:::

[]{#boredomCount}

`boredomCount`

[actor.t](../file/actor.t.html)\[[1793](../source/actor.t.html#1793)\]

::: desc
The count of how many turns have passed during which no conversation has
actually taken place when we\'re the player charater\'s current
interlocutor. This can be used to terminate the conversation through
\'boredom\' if the boredomCount exceeds our attention span.
:::

[]{#cannotAttackMsg}

`cannotAttackMsg`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2297](../source/actor.t.html#2297)\]

::: desc
The message to display if isAttackable is nil
:::

[]{#cannotKissMsg}

`cannotKissMsg`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2250](../source/actor.t.html#2250)\]

::: desc
The message to display if isKissable is nil
:::

[]{#cannotTakeMsg}

`cannotTakeMsg`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[171](../source/actor.t.html#171)\]

::: desc
The message to display when someone tries to take this actor.
:::

[]{#canTalkToMe}

`canTalkToMe`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2180](../source/actor.t.html#2180)\]

::: desc
In general we can talk to actors
:::

[]{#cantFollowFromHereMsg}

`cantFollowFromHereMsg`

[actor.t](../file/actor.t.html)\[[2500](../source/actor.t.html#2500)\]

::: desc
*no description available*
:::

[]{#canThrowToMe}

`canThrowToMe`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2351](../source/actor.t.html#2351)\]

::: desc
Unlike inaminate objects, actors can be the logical target of a ThrowTo
action
:::

[]{#cantStartFromHereMsg}

`cantStartFromHereMsg`

[actor.t](../file/actor.t.html)\[[2498](../source/actor.t.html#2498)\]

::: desc
*no description available*
:::

[]{#contentsListed}

`contentsListed`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[180](../source/actor.t.html#180)\]

::: desc
We don\'t normally list the contents of an Actor when Looking or
Examining.
:::

[]{#contType}

`contType`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[174](../source/actor.t.html#174)\]

::: desc
The (portable) contents of an actor are regarded as being carried.
:::

[]{#conversedLastTurn}

`conversedLastTurn`

[actor.t](../file/actor.t.html)\[[724](../source/actor.t.html#724)\]

::: desc
Did this actor converse with the player character on the previous turn?
He/she/it did so if our last conversation time is one less than the
game\'s current turn count.
:::

[]{#conversedThisTurn}

`conversedThisTurn`

[actor.t](../file/actor.t.html)\[[717](../source/actor.t.html#717)\]

::: desc
Has this actor conversed with the player character on the current turn?
He/she/it has done so if our last conversation time is the same as the
game\'s turn count.
:::

[]{#convKeyTab}

`convKeyTab`

[actor.t](../file/actor.t.html)\[[1638](../source/actor.t.html#1638)\]

::: desc
A Lookup Table holding conversation keys. Entries in this list take the
form tag -\> list of TopicEntries that match this tag (e.g. the key is a
convKey tag, expressed as a single-quoted string, and the value is a
list containing TopicEntries whose convKeys property contains that tag).
:::

[]{#curState}

`curState`

[actor.t](../file/actor.t.html)\[[33](../source/actor.t.html#33)\]

::: desc
Our current ActorState. This should normally be treated as a read-only
property; to change the current ActorState of an actor call the
setState() method.
:::

[]{#defaultCountsAsSay}

`defaultCountsAsSay`

[actor.t](../file/actor.t.html)\[[1066](../source/actor.t.html#1066)\]

::: desc
Do we want a DefaultTopic to count as a SayTopic for the purpose of
deciding whether to allow otherwise not understood commands being
interpreted as implicit SAY commands? By default we don\'t, since
that\'s most likely to be what game authors who don\'t explicitly define
SayTopics (or DefaultSayTopics) intend, but game code can override this,
either on individual actors or on the Actor class.
:::

[]{#defaultSayResponse}

`defaultSayResponse`

[actor.t](../file/actor.t.html)\[[2232](../source/actor.t.html#2232)\]

::: desc
*no description available*
:::

[]{#dontKnowWhereGoneMsg}

`dontKnowWhereGoneMsg`

[actor.t](../file/actor.t.html)\[[2496](../source/actor.t.html#2496)\]

::: desc
*no description available*
:::

[]{#enableImplicitSay}

`enableImplicitSay`

[actor.t](../file/actor.t.html)\[[1057](../source/actor.t.html#1057)\]

::: desc
User modifiable flag for use with the allowImplicitSay() method. Do we
ever want to allow implicit SAY commands for this actor? By default we
do allow this (true), since this has been the default library behaviour
up until now, but game authors can change this either on individual
Actors or by modifying the Actor class.
:::

[]{#fDaemon}

`fDaemon`

[actor.t](../file/actor.t.html)\[[1172](../source/actor.t.html#1172)\]

::: desc
Store the id of the daemon being used to make us follow the player char.
We can check whether this actor is currently following or not by testing
whether or not this is nil.
:::

[]{#followActorMsg}

`followActorMsg`

[actor.t](../file/actor.t.html)\[[1323](../source/actor.t.html#1323)\]

::: desc
Otherwise, let the connector handle it.
:::

[]{#followAgendaItem}

`followAgendaItem`

[actor.t](../file/actor.t.html)\[[1334](../source/actor.t.html#1334)\]

::: desc
Our currently executing FollowAgendaItem, if we have one.
:::

[]{#followFuseID}

`followFuseID`

[actor.t](../file/actor.t.html)\[[1254](../source/actor.t.html#1254)\]

::: desc
A note of our current following fuse, if we have one; this is used by
FollowAgendaItem to check whether the player character is ready to
follow us.
:::

[]{#informedNameTab}

`informedNameTab`

[actor.t](../file/actor.t.html)\[[1805](../source/actor.t.html#1805)\]

::: desc
Our look up table for things we\'ve been informed about
:::

[]{#informOverheard}

`informOverheard`

[actor.t](../file/actor.t.html)\[[1836](../source/actor.t.html#1836)\]

::: desc
Should other actors who can notionally hear the PC talking to us
overhear when information is imparted to us? I.e. should their
setInform() methods be called too? If we have a curState we use its
setting, otherwise we use the value of actorInformOverheard.
:::

[]{#isAttackable}

`isAttackable`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2280](../source/actor.t.html#2280)\]

::: desc
By default it\'s normally possible to attack an actor, even if we don\'t
want to allow it. Game code might want to override this to nil for
actors it\'s obviously futile to try attacking, such as ghosts, gods and
giants.
:::

[]{#isFixed}

`isFixed`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[167](../source/actor.t.html#167)\]

::: desc
By default actors can\'t be picked up and carried around by other actors
(though game authors can override this if they need to create a portable
actor).
:::

[]{#keepPendingKeys}

`keepPendingKeys`

[actor.t](../file/actor.t.html)\[[746](../source/actor.t.html#746)\]

::: desc
If keepPendingKeys is set to true (normally by a \<.convstay\> tag) then
retain the pending conversation keys (and hence the active ones) for the
next conversational turn.
:::

[]{#keysManaged}

`keysManaged`

[actor.t](../file/actor.t.html)\[[625](../source/actor.t.html#625)\]

::: desc
Flag; has the active/pending key management already been carried out on
this turn?
:::

[]{#kissRank}

`kissRank`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2263](../source/actor.t.html#2263)\]

::: desc
An Actor is a more likely target of a KISS action than is an animate
object.
:::

[]{#kissResponseMsg}

`kissResponseMsg`

[actor.t](../file/actor.t.html)\[[2257](../source/actor.t.html#2257)\]

::: desc
The default response of the actor to an attempt to kiss him/her/it where
this is not handled anywhere else, but allowKiss is true.
:::

[]{#lastConvTime}

`lastConvTime`

[actor.t](../file/actor.t.html)\[[710](../source/actor.t.html#710)\]

::: desc
The last turn on which this actor conversed with the player character.
We start out with a value of -1 to mean that we haven\'t conversed at
all.
:::

[]{#lastTravelInfo}

`lastTravelInfo`

[actor.t](../file/actor.t.html)\[[899](../source/actor.t.html#899)\]

::: desc
If the player character has seen this actor travel then lastTravelInfo
contains a two-element list comprising the room the actor was seen
travelling from and the connector by which the actor was seen
travelling.

Note that if you move an actor by authorial fiat using moveInto() (say)
when the player character can see the actor, you might want to update
lastTravelInfo manually to ensure that any subsequent FOLLOW command
still works properly, e.g.: \*.\
\"Bob storms out through the front door, slamming it behind him. \";\
bob.moveInto(nil);\
bob.lastTravelInfo = \[hall, frontDoor\]; \*. (If instead of or before
bob.moveInto(nil) you had written frontDoor.travelVia(bob), this
wouldn\'t be necessary, since it would be handled for you by
frontDoor.travelVia()).
:::

[]{#noGoodbyeResponseMsg}

`noGoodbyeResponseMsg`

[actor.t](../file/actor.t.html)\[[1955](../source/actor.t.html#1955)\]

::: desc
*no description available*
:::

[]{#noHelloResponseMsg}

`noHelloResponseMsg`

[actor.t](../file/actor.t.html)\[[1949](../source/actor.t.html#1949)\]

::: desc
The message to display when someone says hello to this actor but
there\'s no accessible HelloTopic defined.
:::

[]{#noResponseMsg}

`noResponseMsg`

[actor.t](../file/actor.t.html)\[[186](../source/actor.t.html#186)\]

::: desc
The default response of the actor to a conversational command that is
not handled anywhere else.
:::

[]{#notificationOrder}

`notificationOrder`

[actor.t](../file/actor.t.html)\[[2172](../source/actor.t.html#2172)\]

::: desc
This property can be used by extensions or game code that wants to
notify actors in some order of priority.
:::

[]{#ownsContents}

`ownsContents`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2158](../source/actor.t.html#2158)\]

::: desc
An actor generally owns its contents
:::

[]{#pcArrivalTurn}

`pcArrivalTurn`

[actor.t](../file/actor.t.html)\[[925](../source/actor.t.html#925)\]

::: desc
The turn on which the player character last arrived in our location
:::

[]{#pcConnector}

`pcConnector`

[actor.t](../file/actor.t.html)\[[878](../source/actor.t.html#878)\]

::: desc
The Travel Connector just traversed by the player character
:::

[]{#pcDefaultSayQuip}

`pcDefaultSayQuip`

[actor.t](../file/actor.t.html)\[[2235](../source/actor.t.html#2235)\]

::: desc
*no description available*
:::

[]{#pcJustArrived}

`pcJustArrived`

[actor.t](../file/actor.t.html)\[[928](../source/actor.t.html#928)\]

::: desc
Flag \-- has the player character just arrived?
:::

[]{#pendingAgendaList}

`pendingAgendaList`

[actor.t](../file/actor.t.html)\[[2062](../source/actor.t.html#2062)\]

::: desc
A list of agenda items to be added to our agenda at some later point.
The main purpose is to allow game code to set up a list of AgendaItems
(typically ConvAgendaItems) that become part of the actor\'s current
agenda when conversation is initiated via a HelloTopic.
:::

[]{#pendingKeys}

`pendingKeys`

[actor.t](../file/actor.t.html)\[[739](../source/actor.t.html#739)\]

::: desc
a list of the keys to be copied into the activeKeys property for use in
the next conversational turn. These are normally added by game code via
\<.convnode\> tags and the like in conversational output.
:::

[]{#physicalTopicObjs}

`physicalTopicObjs`

[actor.t](../file/actor.t.html)\[[421](../source/actor.t.html#421)\]

::: desc
List of objects corresponding to non-conversation TopicEntry types for
which an ActorState\'s noResponseMsg should not be used. We separate
this lost out here to allow game code to add other game-specific types
(e.g. hugTopicObj if the game implements a Hug Action and a HugTopic).
:::

[]{#refuseCommandMsg}

`refuseCommandMsg`

[actor.t](../file/actor.t.html)\[[313](../source/actor.t.html#313)\]

::: desc
The default message to use in response to a command directed to this
actor that is not handled in any other way.
:::

[]{#specialDescBeforeContents}

`specialDescBeforeContents`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[131](../source/actor.t.html#131)\]

::: desc
We normally list any actors after the miscellaneous contents of a room
:::

[]{#stateDesc}

`stateDesc`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[72](../source/actor.t.html#72)\]

::: desc
Our state-specific description, which is appended to our desc to give
our full description. By default we simply take this from our current
ActorState.
:::

[]{#suggestionKey}

`suggestionKey`

[actor.t](../file/actor.t.html)\[[1557](../source/actor.t.html#1557)\]

::: desc
If this is non-nil then a TOPICS command will use it to restrict the
topics suggested to those with this key in their convKeys property. This
could be used, for example, to provide a top-level \'menu\' of topics
when the full list would otherwise be overwhelming.
:::

[]{#touchResponseMsg}

`touchResponseMsg`

[actor.t](../file/actor.t.html)\[[2318](../source/actor.t.html#2318)\]

::: desc
*no description available*
:::

[]{#waitToSeeMsg}

`waitToSeeMsg`

[actor.t](../file/actor.t.html)\[[2492](../source/actor.t.html#2492)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#activatePendingAgenda}

`activatePendingAgenda ( )`

[actor.t](../file/actor.t.html)\[[2076](../source/actor.t.html#2076)\]

::: desc
Make our pending agenda items acting by moving them all from our
pendingAgendaList to all our actual agenda lists (on the actor and on
all our DefaultAgendaItems).
:::

[]{#actorAfterAction}

`actorAfterAction ( )`

[actor.t](../file/actor.t.html)\[[812](../source/actor.t.html#812)\]

::: desc
Give this actor a chance to respond just after an action prior to any
response from its current actor state. By default we do nothing, but
game code can easily override this without any risk of breaking the
state-dependent afterAction mechanism.
:::

[]{#actorAfterTravel}

`actorAfterTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[936](../source/actor.t.html#936)\]

::: desc
Give this actor a chance to react just after another actor travels in
addition to any reaction from its current actor state. By default we do
nothing, but game code can easily override this without any risk of
breaking the state-dependent afterTravel mechanism.
:::

[]{#actorArrivingTurn}

`actorArrivingTurn ( )`

[actor.t](../file/actor.t.html)\[[1397](../source/actor.t.html#1397)\]

::: desc
This method is executed when this actor has just followed the player
character to a new location and there is no current ActorState. By
default we do nothing.
:::

[]{#actorBeforeAction}

`actorBeforeAction ( )`

[actor.t](../file/actor.t.html)\[[789](../source/actor.t.html#789)\]

::: desc
Give this actor a chance to respond just before an action prior to any
response from its current actor state. By default we do nothing, but
game code can easily override this without any risk of breaking the
state-dependent beforeAction mechanism.
:::

[]{#actorBeforeTravel}

`actorBeforeTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[907](../source/actor.t.html#907)\]

::: desc
Give this actor a chance to react just before another actor travels in
addition to any reaction from its current actor state. By default we do
nothing, but game code can easily override this without any risk of
breaking the state-dependent beforeTravel mechanism.
:::

[]{#actorCanEndConversation}

`actorCanEndConversation (reason)`

[actor.t](../file/actor.t.html)\[[1010](../source/actor.t.html#1010)\]

::: desc
A state-independent check on whether this actor will allow the current
conversation to end on account of reason. By default we simply return
true to allow the conversation to end, but game code can override this
to return nil to disallow the ending of the conversation (presumably
under specific conditions).
:::

[]{#actorRemoteSpecialDesc}

`actorRemoteSpecialDesc (pov)`

[actor.t](../file/actor.t.html)\[[155](../source/actor.t.html#155)\]

::: desc
The remoteSpecialDesc to use if we don\'t have a current ActorState
(i.e. if curState is nil). By default we say the actor is in the remote
location.
:::

[]{#actorSay}

`actorSay (str)`

[actor.t](../file/actor.t.html)\[[649](../source/actor.t.html#649)\]

::: desc
This method can be called on the actor when we want to display the text
of one or both sides of a conversational exchange with the actor without
going through the TopicEntry mechanism to do so.
:::

[]{#actorSayHello}

`actorSayHello ( )`

[actor.t](../file/actor.t.html)\[[1883](../source/actor.t.html#1883)\]

::: desc
Have the actor greet the player character on the actor\'s initiative
:::

[]{#actorSpecialDesc}

`actorSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[113](../source/actor.t.html#113)\]

::: desc
The specialDesc to use if we don\'t have a current ActorState By default
we just display a message saying the actor is here or that the actor is
in a nested room.
:::

[]{#addPendingKey}

`addPendingKey (val)`

[actor.t](../file/actor.t.html)\[[752](../source/actor.t.html#752)\]

::: desc
Add a convkey value to our pending keys list (for use as an active key
:::

[]{#addToAllAgendas}

`addToAllAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[1998](../source/actor.t.html#1998)\]

::: desc
Add an agenda item both to myself and to any DefaultAgendaTopics either
directly in me or in any of my Actor States
:::

[]{#addToBothAgendas}

`addToBothAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[1987](../source/actor.t.html#1987)\]

::: desc
Add an agenda item to both myself and any DefaultAgendaTopic directly
within me.
:::

[]{#addToCurAgendas}

`addToCurAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[2012](../source/actor.t.html#2012)\]

::: desc
Add an agenda item to myself and to any DefaultAgendaTopios directly in
me or in my current ActorState.
:::

[]{#addToPendingAgenda}

`addToPendingAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[2065](../source/actor.t.html#2065)\]

::: desc
Add an item to our pending agenda list
:::

[]{#afterAction}

`afterAction ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[792](../source/actor.t.html#792)\]

::: desc
Notification that an action has just been carried out in our presence
:::

[]{#afterTravel}

`afterTravel (traveler, connector)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[913](../source/actor.t.html#913)\]

::: desc
Notification that travel has just taken place in our presence (usually
because an actor has just arrived in our location)
:::

[]{#allowImplicitSay}

`allowImplicitSay ( )`

[actor.t](../file/actor.t.html)\[[1017](../source/actor.t.html#1017)\]

::: desc
Do we want an otherwise not understood input (such as \"You\'re crazy\")
treated as an implicit SAY command (e.g., treated as SAY YOU\'RE CRAZY)
when the player character is in conversatiom with this Actor? Return
true if so or nil otherwise.
:::

[]{#allowOtherActorToTake}

`allowOtherActorToTake (obj)`

[actor.t](../file/actor.t.html)\[[2155](../source/actor.t.html#2155)\]

::: desc
Is another actor allowed to take obj from our inventory? By default we
return nil to disallow it for all objects.
:::

[]{#arouse}

`arouse (key)`

[actor.t](../file/actor.t.html)\[[1646](../source/actor.t.html#1646)\]

::: desc
Set the curiosityAroused flag to true for all topic entries with this
convKey. This allows topics to be suggested when and only when the
player character has some reason to be curious about them, even though
they were actually available before.
:::

[]{#arrivingTurn}

`arrivingTurn ( )`

[actor.t](../file/actor.t.html)\[[1381](../source/actor.t.html#1381)\]

::: desc
This method is executed when this actor has just followed the player
character to a new location.
:::

[]{#beforeAction}

`beforeAction ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[759](../source/actor.t.html#759)\]

::: desc
Notification that an action is about to be carried out in our presence
:::

[]{#beforeTravel}

`beforeTravel (traveler, connector)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[820](../source/actor.t.html#820)\]

::: desc
Notification that something else is about to travel. By default we defer
to out actor state, if we have one, but we also give the actor object a
chance to respond.
:::

[]{#canCatchThrown}

`canCatchThrown (obj)`

[actor.t](../file/actor.t.html)\[[2357](../source/actor.t.html#2357)\]

::: desc
We\'ll assume that actors can catch anything thrown at them by default,
but game code may wish to override this assumption.
:::

[]{#canEndConversation}

`canEndConversation (reason)`

[actor.t](../file/actor.t.html)\[[971](../source/actor.t.html#971)\]

::: desc
Is the actor willing for this conversation to be ended? We first check
the current actor state (if any) and then the actor object. If either
raises an object it should display a message saying what the objection
is (and then return nil). By default we simply return true, allowing the
conversation to end.
:::

[]{#cannotTakeFromActorMsg}

`cannotTakeFromActorMsg (obj)`

[actor.t](../file/actor.t.html)\[[2137](../source/actor.t.html#2137)\]

::: desc
Return a message saying that the actor cannot take obj from our
inventory.
:::

[]{#condSay}

`condSay (str)`

[actor.t](../file/actor.t.html)\[[679](../source/actor.t.html#679)\]

::: desc
Conditionally use actorSay() or say() to output str depending on whether
str appears to be something the actor says or simply a non-verbal
response (or lack of response). If str contains quote marks or the
sequence @@ we\'ll assume it\'s something the actor says (and strip out
the @@ that would simply be there to mark str as something the actor
says, perhaps reported in indirect speech.
:::

[]{#convAgendaReady}

`convAgendaReady (other)`

[actor.t](../file/actor.t.html)\[[1975](../source/actor.t.html#1975)\]

::: desc
Is this actor ready to invoke a ConvAgendaItem? We\'re ready if we
haven\'t conversed this term and we can speak to the other actor and
we\'re not at a conversation node. This method is used by the isReady
property of ConvAgendaItem (to save it having to make three separate
calls to getActor).
:::

[]{#curNodeIdx}

`curNodeIdx ( )`

[actor.t](../file/actor.t.html)\[[1724](../source/actor.t.html#1724)\]

::: desc
Service method used by curNodeKey() and curNodeObj() to identify the
current ConvNode object, if there is one.
:::

[]{#curNodeKey}

`curNodeKey ( )`

[actor.t](../file/actor.t.html)\[[1745](../source/actor.t.html#1745)\]

::: desc
The string name of our current convNode, if we have one.
:::

[]{#curNodeObj}

`curNodeObj ( )`

[actor.t](../file/actor.t.html)\[[1761](../source/actor.t.html#1761)\]

::: desc
The object representing our current convNode, if we have one.
:::

[]{#dobjFor(AskAbout)}

`dobjFor(AskAbout)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2190](../source/actor.t.html#2190)\]

::: desc
*no description available*
:::

[]{#dobjFor(AskFor)}

`dobjFor(AskFor)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2198](../source/actor.t.html#2198)\]

::: desc
*no description available*
:::

[]{#dobjFor(Attack)}

`dobjFor(Attack)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2305](../source/actor.t.html#2305)\]

::: desc
*no description available*
:::

[]{#dobjFor(AttackWith)}

`dobjFor(AttackWith)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2314](../source/actor.t.html#2314)\]

::: desc
*no description available*
:::

[]{#dobjFor(Feel)}

`dobjFor(Feel)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2320](../source/actor.t.html#2320)\]

::: desc
*no description available*
:::

[]{#dobjFor(Follow)}

`dobjFor(Follow)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2418](../source/actor.t.html#2418)\]

::: desc
*no description available*
:::

[]{#dobjFor(Kiss)}

`dobjFor(Kiss)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2265](../source/actor.t.html#2265)\]

::: desc
*no description available*
:::

[]{#dobjFor(QueryAbout)}

`dobjFor(QueryAbout)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2239](../source/actor.t.html#2239)\]

::: desc
*no description available*
:::

[]{#dobjFor(SayTo)}

`dobjFor(SayTo)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2224](../source/actor.t.html#2224)\]

::: desc
*no description available*
:::

[]{#dobjFor(TalkAbout)}

`dobjFor(TalkAbout)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2214](../source/actor.t.html#2214)\]

::: desc
*no description available*
:::

[]{#dobjFor(TalkTo)}

`dobjFor(TalkTo)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2182](../source/actor.t.html#2182)\]

::: desc
*no description available*
:::

[]{#dobjFor(TellAbout)}

`dobjFor(TellAbout)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2206](../source/actor.t.html#2206)\]

::: desc
*no description available*
:::

[]{#endConversation}

`endConversation (reason)`

[actor.t](../file/actor.t.html)\[[947](../source/actor.t.html#947)\]

::: desc
Terminate a conversation that\'s currently going on between this actor
and the player character. The reason parameter is the reason for ending
the conversation and can be one of endConvBye (the player character has
just said goodbye), endConvTravel (the player character is leaving the
location), endConvBoredom (this actor has become bored with waiting for
the player character to say anything) or endConvActor (this actor wishes
to terminate the conversation for some other reason of its own).
:::

[]{#findBestResponse}

`findBestResponse (prop, topic)`

[actor.t](../file/actor.t.html)\[[391](../source/actor.t.html#391)\]

::: desc
Find the best response to use for a conversational command directed to
this actor. prop would normally be a property pointer for the property
containing the appropriate list or lists of Topic Entries to test, and
topic is the Topic object we\'re trying to match.
:::

[]{#followDaemon}

`followDaemon ( )`

[actor.t](../file/actor.t.html)\[[1087](../source/actor.t.html#1087)\]

::: desc
Mechanism to allow this actor to follow the player char. We do this
rather simplistically by checking whether the player char is still in
our location and moving us to the player char\'s location if s/he is not
on the assumption that if the player char can get there in one turn, so
can we. On arriving in the player char\'s new location we announce that
we\'ve just followed the player char and then run the arrivingTurn
method on our current actor state (if we have one).
:::

[]{#followFuse}

`followFuse ( )`

[actor.t](../file/actor.t.html)\[[1261](../source/actor.t.html#1261)\]

::: desc
This method is executed right at the end of a turn on which the player
has issued a command to follow this actor, and carries out the travel to
follow this actor if the actor has traveled.
:::

[]{#getActor}

`getActor ( )`

[actor.t](../file/actor.t.html)\[[1785](../source/actor.t.html#1785)\]

::: desc
We supply a getActor method that returns self so that objects such as
TopicEntries that may be located either directly or indirectly in us can
get at their associated actor by simply calling getActor on their
immediate location; at some point such a chain of calls to
location.getActor will end here.
:::

[]{#getBestMatch}

`getBestMatch (prop, requestedList)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[325](../source/actor.t.html#325)\]

::: desc
Find the best response to the topic produced by the player\'s command.
prop is the xxxTopics list property we\'ll use to search for a matching
TopicEntry. We first search the current ActorState for a match and then,
only if we fail to find one, we search TopicEntries directly located in
the actor. First priority, however, is given to TopicEntries whose
convKeys match this actor\'s currentKeys (they match if the two lists
have at least one element in common).
:::

[]{#handleCommand}

`handleCommand (action)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[190](../source/actor.t.html#190)\]

::: desc
Handle a command (e.g. BOB, JUMP) directed at this actor.
:::

[]{#handleTopic}

`handleTopic (prop, topic, defaultProp, =, &, noResponseMsg)`

[actor.t](../file/actor.t.html)\[[429](../source/actor.t.html#429)\]

::: desc
Handle a conversational command where prop is a pointer to the property
containing the appropriate list of TopicEntries to search (e.g.
&askTopics), topic is the list of Topics to match, and defaultProp is
pointer to the property to invoke if we can\'t find a match.
:::

[]{#informedAbout}

`informedAbout (tag)`

[actor.t](../file/actor.t.html)\[[1825](../source/actor.t.html#1825)\]

::: desc
Determine whether this actor has been informed about tag. We return true
if there is a corresponding non-nil entry in our informedNameTab
:::

[]{#initiateTopic}

`initiateTopic (top)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2096](../source/actor.t.html#2096)\]

::: desc
Respond to an InitiateTopic triggered on this actor with top as the
matching object
:::

[]{#iobjFor(GiveTo)}

`iobjFor(GiveTo)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2330](../source/actor.t.html#2330)\]

::: desc
*no description available*
:::

[]{#iobjFor(ShowTo)}

`iobjFor(ShowTo)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2338](../source/actor.t.html#2338)\]

::: desc
*no description available*
:::

[]{#iobjFor(ThrowTo)}

`iobjFor(ThrowTo)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2361](../source/actor.t.html#2361)\]

::: desc
*no description available*
:::

[]{#makeActivated}

`makeActivated (key)`

[actor.t](../file/actor.t.html)\[[1669](../source/actor.t.html#1669)\]

::: desc
Set the activated flag to true for all topic entries with this convKey.
:::

[]{#makeDeactivated}

`makeDeactivated (key)`

[actor.t](../file/actor.t.html)\[[1693](../source/actor.t.html#1693)\]

::: desc
Set the activated flag to nil for all topic entries with this convKey.
:::

[]{#manageKeys}

`manageKeys ( )`

[actor.t](../file/actor.t.html)\[[601](../source/actor.t.html#601)\]

::: desc
Move pending keys to active keys and clear pending keys if need be. We
call this out as a separate method to allow it to be directly called
from elsewhere.
:::

[]{#nilResponse}

`nilResponse ( )`

[actor.t](../file/actor.t.html)\[[1959](../source/actor.t.html#1959)\]

::: desc
Do nothing if we can\'t fine a suitable Hello or Bye Topic/
:::

[]{#noteConversed}

`noteConversed ( )`

[actor.t](../file/actor.t.html)\[[628](../source/actor.t.html#628)\]

::: desc
Convenience method to note that conversation has occurred on this turn
:::

[]{#notifyRemove}

`notifyRemove (obj)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[2115](../source/actor.t.html#2115)\]

::: desc
The notifyRemove() method is triggered when actionMoveInto() tries to
move an object that\'s located within this actor. By default we don\'t
allow it since it typically represents an attempt by the player
character to take something from this actor\'s inventory.
:::

[]{#remoteSpecialDesc}

`remoteSpecialDesc (pov)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[143](../source/actor.t.html#143)\]

::: desc
The specialDesc of this actor when it is viewed from a remote location.
If we have a current ActorState we use its remoteSpecialDesc, otherwise
we use the actorRemoteSpecialDesc on the actor. Either way the pov
parameter is the point of view object from which this actor is being
viewed (normally the player char).

Note that this method is generally only relevant if the senseRegion
module is used.
:::

[]{#removeFromAllAgendas}

`removeFromAllAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[2035](../source/actor.t.html#2035)\]

::: desc
Remove an agenda Item both from this actor and from any associated
DefaultAgendaTopics directly within this actor or in any of its
ActorStates.
:::

[]{#removeFromBothAgendas}

`removeFromBothAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[2023](../source/actor.t.html#2023)\]

::: desc
Remove an agenda Item both from this actor and from any associated
DefaultAgendaTopics directly within this actor.
:::

[]{#removeFromCurAgendas}

`removeFromCurAgendas ([lst])`

[actor.t](../file/actor.t.html)\[[2049](../source/actor.t.html#2049)\]

::: desc
Remove an agenda item from myself and from any DefaultAgendaTopios
directly in me or in my current ActorState.
:::

[]{#removeFromPendingAgenda}

`removeFromPendingAgenda ([lst])`

[actor.t](../file/actor.t.html)\[[2085](../source/actor.t.html#2085)\]

::: desc
Remove one or more agenda items from our pending agenda
:::

[]{#sayActorArriving}

`sayActorArriving (fromLoc)`

[actor.t](../file/actor.t.html)\[[1419](../source/actor.t.html#1419)\]

::: desc
Default message to display when the player character sees this actor
arriving. We use a very plain-vanilla message here, since in practice
game code will generally want to override this.
:::

[]{#sayActorCatches}

`sayActorCatches (obj)`

[actor.t](../file/actor.t.html)\[[2404](../source/actor.t.html#2404)\]

::: desc
Display a message saying that this actor catches obj
:::

[]{#sayActorDeparting}

`sayActorDeparting (conn)`

[actor.t](../file/actor.t.html)\[[1368](../source/actor.t.html#1368)\]

::: desc
Method to display a message saying that this actor (normally an NPC
visible to the player character) is departing via conn (a
TravelConnector object, which may be a Room as well as a Door or other
kind of connector). Note that the default behaviour of
ActorState.sayDeparting is simply to call this method.
:::

[]{#sayActorDropsCatch}

`sayActorDropsCatch (obj)`

[actor.t](../file/actor.t.html)\[[2411](../source/actor.t.html#2411)\]

::: desc
Display a message saying that this actor failst to catch obj
:::

[]{#sayActorFollowing}

`sayActorFollowing (oldLoc, conn)`

[actor.t](../file/actor.t.html)\[[1198](../source/actor.t.html#1198)\]

::: desc
Display a message to say that we\'ve just followed the player character
to a new location from oldLoc. The library provides a default message
but this can be overridded as desired.
:::

[]{#sayActorFollowingMe}

`sayActorFollowingMe (conn)`

[actor.t](../file/actor.t.html)\[[1309](../source/actor.t.html#1309)\]

::: desc
The message to display when another actor follows this one.
:::

[]{#sayArriving}

`sayArriving (fromLoc)`

[actor.t](../file/actor.t.html)\[[1403](../source/actor.t.html#1403)\]

::: desc
The message to display when the player char sees this actor arriving
after traveling from loc.
:::

[]{#sayDeparting}

`sayDeparting (conn)`

[actor.t](../file/actor.t.html)\[[1350](../source/actor.t.html#1350)\]

::: desc
Display a message describing this actor\'s departure via conn. This
looks a bit circuitous in that this method calls the corresponding
method on the current ActorState, which by default calls our own
sayActorDeparting() method, which in turn calls sayDeparting on the
connector; the idea is to allow customization at any point with the
connector\'s sayDeparting() method simply providing a fallback to a
colourless default. Note, however, that game code shouldn\'t normally
override the actor\'s sayDeparting() method, but should instead
intervene either on the ActorState or on the actor\'s
sayActorDeparting() method. Note also that the purpose of this method is
to describe an NPC\'s departure from the point of view of the player
character, not to describe the player character\'s movements.
:::

[]{#sayFollowing}

`sayFollowing (oldLoc, conn)`

[actor.t](../file/actor.t.html)\[[1178](../source/actor.t.html#1178)\]

::: desc
Display a message to say that we\'ve just followed the player character
to a new location from oldLoc.
:::

[]{#sayGoodbye}

`sayGoodbye (reason, =, endConvBye)`

[actor.t](../file/actor.t.html)\[[1914](../source/actor.t.html#1914)\]

::: desc
Say goodbye to this actor (farewell from the player character). The
optional reason parameter is the reason we\'re saying goodbye, which
defaults to endConvBye (i.e. the player character saying goodbye)
:::

[]{#sayHeadAfterActor}

`sayHeadAfterActor (conn)`

[actor.t](../file/actor.t.html)\[[2485](../source/actor.t.html#2485)\]

::: desc
reset the lastTravelInfo now that it\'s been used and is no longer
relevant.
:::

[]{#sayHello}

`sayHello ( )`

[actor.t](../file/actor.t.html)\[[1851](../source/actor.t.html#1851)\]

::: desc
Say hello to the actor (when the greetin is initiated by the player
character)
:::

[]{#setFollowMeFuse}

`setFollowMeFuse ( )`

[actor.t](../file/actor.t.html)\[[1231](../source/actor.t.html#1231)\]

::: desc
Set the fuse to enable travel later on the same turn if this actor
travels in the meantime. This method is called when a FOLLOW command is
issed with this actor as its direct object.
:::

[]{#setInformed}

`setInformed (tag)`

[actor.t](../file/actor.t.html)\[[1813](../source/actor.t.html#1813)\]

::: desc
Note that we\'ve been informed of something, by adding it to our
informedNameTab. Tag is an arbitrary single-quoted string value used to
represent the information in question.
:::

[]{#setState}

`setState (stat)`

[actor.t](../file/actor.t.html)\[[39](../source/actor.t.html#39)\]

::: desc
Set our current ActorState to a new state (stat) or to no state at all
(if the stat parameter is supplied as nil).
:::

[]{#showSuggestions}

`showSuggestions (explicit, =, true, tag, =, (, pendingKeys, =, =, ], suggestionKey, :, pendingKeys)`

[actor.t](../file/actor.t.html)\[[1568](../source/actor.t.html#1568)\]

::: desc
Show a list of topics the player character might want to discuss with
this actor. The explicit flag is true if the player has explicitly
requested the topic list via a TOPICS command. The tag parameter can be
a single convKey tag or a list of convKey tags; if tag is nil or \'all\'
then we don\'t restrict the suggestions by tag, otherwise we restrict
the suggestions to those that match the tag (or one of the tags in the
list of tags).
:::

[]{#specialDesc}

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[81](../source/actor.t.html#81)\]

::: desc
Our specialDesc (used to describe us in room listing). By default we use
our ActorState\'s specialDesc if we have a current ActorState or else
our actorSpecialDesc if our current ActorState is nil. But if there\'s a
current FollowAgendaItem we let it handle the specialDesc instead.
:::

[]{#startFollowing}

`startFollowing ( )`

[actor.t](../file/actor.t.html)\[[1134](../source/actor.t.html#1134)\]

::: desc
Game code can call this method to instruct this actor to start following
the player char round the map
:::

[]{#stopFollowing}

`stopFollowing ( )`

[actor.t](../file/actor.t.html)\[[1148](../source/actor.t.html#1148)\]

::: desc
Game code can call this method to instruct this actor to stop following
the player char round the map.
:::

[]{#takeTurn}

`takeTurn ( )`

[actor.t](../file/actor.t.html)\[[1468](../source/actor.t.html#1468)\]

::: desc
The takeTurn() method is called on every Actor every turn to carry out a
number of housekeeping functions relating to the conversation and agenda
item systems.
:::

[]{#travelVia}

`travelVia (conn, announceArrival, =, true)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[1438](../source/actor.t.html#1438)\]

::: desc
Make this actor travel via the connector conn and report its departure.
If announceArrival is true (the default) we also announce the actor\'s
arrival (if it\'s visible to the player char).

To suppress the default arrival announcement altogether, supply the
second optional parameter as nil. In some cases it may be easier to do
this and supply your own custom arrival message after calling
travelVia() than to juggle with the various sayArriving() methods.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
