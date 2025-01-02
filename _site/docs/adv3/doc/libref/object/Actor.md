<span class="title">Actor</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[5670](../source/actor.t.html#5670)\],
[en_us.t](../file/en_us.t.html)\[[2129](../source/en_us.t.html#2129)\]

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

An Actor is a living person, animal, or other entity with a will of its
own. Actors can usually be addressed with targeted commands ("bob, go
north"), and with commands like ASK ABOUT, TELL ABOUT, GIVE TO, and SHOW
TO.

Note that, by default, an Actor can be picked up and moved with commands
like TAKE, PUT IN, and so on. This is suitable for some kinds of actors
but not for others: it might make sense with a cat or a small dog, but
not with a bank guard or an orc. For an actor that can't be taken, use
the UntakeableActor or one of its subclasses.

An actor's contents are the things the actor is carrying or wearing.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2129](../source/en_us.t.html#2129)\]:*  
Language modifications for Actor.

An Actor has a "referral person" setting, which determines how we refer
to the actor; this is almost exclusively for the use of the player
character. The typical convention is that we refer to the player
character in the second person, but a game can override this on an
actor-by-actor basis.

`class `**`Actor`**` :   `[`Thing`](../object/Thing.html)`   `[`Schedulable`](../object/Schedulable.html)`   `[`Traveler`](../object/Traveler.html)`   `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Actor`**  
`         `[`Thing`](../object/Thing.html)  
`                 `[`VocabObject`](../object/VocabObject.html)  
`                         object`  
`         `[`Schedulable`](../object/Schedulable.html)  
`                 object`  
`         `[`Traveler`](../object/Traveler.html)  
`                 `[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                         object`  
`         `[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
`                 `[`TopicDatabase`](../object/TopicDatabase.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Actor`**  
`         `[`UntakeableActor`](../object/UntakeableActor.html)  
`                 `[`Person`](../object/Person.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`accompanyingActors`](#accompanyingActors)`  `[`actorNotifyList`](#actorNotifyList)`  `[`agendaList`](#agendaList)`  `[`antecedentTable`](#antecedentTable)`  `[`boredomAgendaItem`](#boredomAgendaItem)`  `[`boredomCount`](#boredomCount)`  `[`bulkCapacity`](#bulkCapacity)`  `[`canMatch3rdPerson`](#canMatch3rdPerson)`  `[`canMatchHer`](#canMatchHer)`  `[`canMatchHim`](#canMatchHim)`  `[`canMatchIt`](#canMatchIt)`  `[`canMatchThem`](#canMatchThem)`  `[`commandReferralPerson`](#commandReferralPerson)`  `[`communicationSenses`](#communicationSenses)`  `[`contentsListed`](#contentsListed)`  `[`convMgrID`](#convMgrID)`  `[`convNodeTab`](#convNodeTab)`  `[`curConvNode`](#curConvNode)`  `[`curState`](#curState)`  `[`excludeFromLookAroundList`](#excludeFromLookAroundList)`  `[`followables_`](#followables_)`  `[`followingActor`](#followingActor)`  `[`getTravelerActors`](#getTravelerActors)`  `[`getTravelerMotiveActors`](#getTravelerMotiveActors)`  `[`hearinglikeSenses`](#hearinglikeSenses)`  `[`holdingDescInventoryLister`](#holdingDescInventoryLister)`  `[`inventoryLister`](#inventoryLister)`  `[`isActor`](#isActor)`  `[`isLikelyCommandTarget`](#isLikelyCommandTarget)`  `[`isListed`](#isListed)`  `[`isListedAboardVehicle`](#isListedAboardVehicle)`  `[`isListedInContents`](#isListedInContents)`  `[`isListedInInventory`](#isListedInInventory)`  `[`issueCommandsSynchronously`](#issueCommandsSynchronously)`  `[`knownProp`](#knownProp)`  `[`lastConsulted`](#lastConsulted)`  `[`lastConvTime`](#lastConvTime)`  `[`lastDoorTraversed`](#lastDoorTraversed)`  `[`lastInterlocutor`](#lastInterlocutor)`  `[`lastTravelBack`](#lastTravelBack)`  `[`lastTravelDest`](#lastTravelDest)`  `[`locationBefore`](#locationBefore)`  `[`locationLitBefore`](#locationLitBefore)`  `[`maxSingleBulk`](#maxSingleBulk)`  `[`mostRecentAction`](#mostRecentAction)`  `[`name`](#name)`  `[`nextHoldingIndex`](#nextHoldingIndex)`  `[`nextRunTime`](#nextRunTime)`  `[`pcReferralPerson`](#pcReferralPerson)`  `[`pendingCommand`](#pendingCommand)`  `[`pendingConv`](#pendingConv)`  `[`pendingResponse`](#pendingResponse)`  `[`possAnaphorTable`](#possAnaphorTable)`  `[`posture`](#posture)`  `[`responseSetConvNode`](#responseSetConvNode)`  `[`revertTargetActorAtEndOfSentence`](#revertTargetActorAtEndOfSentence)`  `[`scheduleOrder`](#scheduleOrder)`  `[`scopeSenses`](#scopeSenses)`  `[`seenProp`](#seenProp)`  `[`sightlikeSenses`](#sightlikeSenses)`  `[`smelllikeSenses`](#smelllikeSenses)`  `[`specialDescBeforeContents`](#specialDescBeforeContents)`  `[`specialDescOrder`](#specialDescOrder)`  `[`specialTraveler`](#specialTraveler)`  `[`takeFromNotInMessage`](#takeFromNotInMessage)`  `[`waitingForActor`](#waitingForActor)`  `[`waitingForInfo`](#waitingForInfo)`  `[`weightCapacity`](#weightCapacity)`  `

Inherited from `Thing` :  
` `[`actorInAName`](../object/Thing.html#actorInAName)`  `[`actorInName`](../object/Thing.html#actorInName)`  `[`actorInPrep`](../object/Thing.html#actorInPrep)`  `[`actorIntoName`](../object/Thing.html#actorIntoName)`  `[`actorOutOfName`](../object/Thing.html#actorOutOfName)`  `[`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep)`  `[`aDisambigName`](../object/Thing.html#aDisambigName)`  `[`allStates`](../object/Thing.html#allStates)`  `[`aName`](../object/Thing.html#aName)`  `[`brightness`](../object/Thing.html#brightness)`  `[`bulk`](../object/Thing.html#bulk)`  `[`canBeHeard`](../object/Thing.html#canBeHeard)`  `[`canBeSeen`](../object/Thing.html#canBeSeen)`  `[`canBeSmelled`](../object/Thing.html#canBeSmelled)`  `[`canBeTouched`](../object/Thing.html#canBeTouched)`  `[`circularlyInMessage`](../object/Thing.html#circularlyInMessage)`  `[`collectiveGroup`](../object/Thing.html#collectiveGroup)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately)`  `[`contentsLister`](../object/Thing.html#contentsLister)`  `[`descContentsLister`](../object/Thing.html#descContentsLister)`  `[`described`](../object/Thing.html#described)`  `[`disambigEquivName`](../object/Thing.html#disambigEquivName)`  `[`disambigName`](../object/Thing.html#disambigName)`  `[`distantDesc`](../object/Thing.html#distantDesc)`  `[`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc)`  `[`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc)`  `[`distinguishers`](../object/Thing.html#distinguishers)`  `[`dummyName`](../object/Thing.html#dummyName)`  `[`effectiveFollowLocation`](../object/Thing.html#effectiveFollowLocation)`  `[`equivalenceKey`](../object/Thing.html#equivalenceKey)`  `[`equivalentGrouper`](../object/Thing.html#equivalentGrouper)`  `[`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass)`  `[`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable)`  `[`esEndingPat`](../object/Thing.html#esEndingPat)`  `[`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo)`  `[`getState`](../object/Thing.html#getState)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`holdingIndex`](../object/Thing.html#holdingIndex)`  `[`iesEndingPat`](../object/Thing.html#iesEndingPat)`  `[`initDesc`](../object/Thing.html#initDesc)`  `[`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`inlineContentsLister`](../object/Thing.html#inlineContentsLister)`  `[`isEquivalent`](../object/Thing.html#isEquivalent)`  `[`isHer`](../object/Thing.html#isHer)`  `[`isHim`](../object/Thing.html#isHim)`  `[`isInInitState`](../object/Thing.html#isInInitState)`  `[`isKnown`](../object/Thing.html#isKnown)`  `[`isMassNoun`](../object/Thing.html#isMassNoun)`  `[`isPlural`](../object/Thing.html#isPlural)`  `[`isProperName`](../object/Thing.html#isProperName)`  `[`isQualifiedName`](../object/Thing.html#isQualifiedName)`  `[`isThingConstructed`](../object/Thing.html#isThingConstructed)`  `[`isTopLevel`](../object/Thing.html#isTopLevel)`  `[`listName`](../object/Thing.html#listName)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lookInLister`](../object/Thing.html#lookInLister)`  `[`moved`](../object/Thing.html#moved)`  `[`nameDoes`](../object/Thing.html#nameDoes)`  `[`nameSays`](../object/Thing.html#nameSays)`  `[`nameSees`](../object/Thing.html#nameSees)`  `[`notTravelReadyMsg`](../object/Thing.html#notTravelReadyMsg)`  `[`objectNotifyList`](../object/Thing.html#objectNotifyList)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc)`  `[`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc)`  `[`owner`](../object/Thing.html#owner)`  `[`patElevenEighteen`](../object/Thing.html#patElevenEighteen)`  `[`patIsAlpha`](../object/Thing.html#patIsAlpha)`  `[`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote)`  `[`patOfPhrase`](../object/Thing.html#patOfPhrase)`  `[`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord)`  `[`patOneLetterWord`](../object/Thing.html#patOneLetterWord)`  `[`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS)`  `[`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar)`  `[`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit)`  `[`patVowelY`](../object/Thing.html#patVowelY)`  `[`pluralDisambigName`](../object/Thing.html#pluralDisambigName)`  `[`pluralName`](../object/Thing.html#pluralName)`  `[`pronounSelector`](../object/Thing.html#pronounSelector)`  `[`roomDarkName`](../object/Thing.html#roomDarkName)`  `[`roomLocation`](../object/Thing.html#roomLocation)`  `[`roomName`](../object/Thing.html#roomName)`  `[`seen`](../object/Thing.html#seen)`  `[`sightPresence`](../object/Thing.html#sightPresence)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`smellPresence`](../object/Thing.html#smellPresence)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundPresence`](../object/Thing.html#soundPresence)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialContentsLister`](../object/Thing.html#specialContentsLister)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation)`  `[`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen)`  `[`theDisambigName`](../object/Thing.html#theDisambigName)`  `[`theName`](../object/Thing.html#theName)`  `[`theNamePossNoun`](../object/Thing.html#theNamePossNoun)`  `[`tmpAmbient_`](../object/Thing.html#tmpAmbient_)`  `[`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_)`  `[`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_)`  `[`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_)`  `[`tmpObstructor_`](../object/Thing.html#tmpObstructor_)`  `[`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_)`  `[`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_)`  `[`tmpTrans_`](../object/Thing.html#tmpTrans_)`  `[`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_)`  `[`touchPresence`](../object/Thing.html#touchPresence)`  `[`touchSize`](../object/Thing.html#touchSize)`  `[`verbCan`](../object/Thing.html#verbCan)`  `[`verbCannot`](../object/Thing.html#verbCannot)`  `[`verbCant`](../object/Thing.html#verbCant)`  `[`verbEndingSD`](../object/Thing.html#verbEndingSD)`  `[`verbEndingSEd`](../object/Thing.html#verbEndingSEd)`  `[`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_)`  `[`verbMust`](../object/Thing.html#verbMust)`  `[`verbToCome`](../object/Thing.html#verbToCome)`  `[`verbToDo`](../object/Thing.html#verbToDo)`  `[`verbToGo`](../object/Thing.html#verbToGo)`  `[`verbToLeave`](../object/Thing.html#verbToLeave)`  `[`verbToSay`](../object/Thing.html#verbToSay)`  `[`verbToSee`](../object/Thing.html#verbToSee)`  `[`verbWill`](../object/Thing.html#verbWill)`  `[`verbWont`](../object/Thing.html#verbWont)`  `[`weight`](../object/Thing.html#weight)`  `

Inherited from `VocabObject` :  
` `[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)`  `[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)`  `[`pluralOrder`](../object/VocabObject.html#pluralOrder)`  `[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)`  `[`vocabWords`](../object/VocabObject.html#vocabWords)`  `[`weakTokens`](../object/VocabObject.html#weakTokens)`  `

Inherited from `Schedulable` :  
` `[`allSchedulables`](../object/Schedulable.html#allSchedulables)`  `[`gameClockTime`](../object/Schedulable.html#gameClockTime)`  `

` `

` `

Inherited from `ActorTopicDatabase` :  
` `[`askForTopics`](../object/ActorTopicDatabase.html#askForTopics)`  `[`askTopics`](../object/ActorTopicDatabase.html#askTopics)`  `[`commandTopics`](../object/ActorTopicDatabase.html#commandTopics)`  `[`giveTopics`](../object/ActorTopicDatabase.html#giveTopics)`  `[`initiateTopics`](../object/ActorTopicDatabase.html#initiateTopics)`  `[`miscTopics`](../object/ActorTopicDatabase.html#miscTopics)`  `[`showTopics`](../object/ActorTopicDatabase.html#showTopics)`  `[`specialTopics`](../object/ActorTopicDatabase.html#specialTopics)`  `[`tellTopics`](../object/ActorTopicDatabase.html#tellTopics)`  `

Inherited from `TopicDatabase` :  
` `[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions)`  `[`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics)`  `[`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive)`  `[`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`acceptCommand`](#acceptCommand)`  `[`acceptCommandBusy`](#acceptCommandBusy)`  `[`actorAction`](#actorAction)`  `[`actorActionFollow`](#actorActionFollow)`  `[`actorHereDesc`](#actorHereDesc)`  `[`actorListWith`](#actorListWith)`  `[`actorRoomNameStatus`](#actorRoomNameStatus)`  `[`actorThereDesc`](#actorThereDesc)`  `[`actorTravel`](#actorTravel)`  `[`actorVerifyFollow`](#actorVerifyFollow)`  `[`addAccompanyingActor`](#addAccompanyingActor)`  `[`addActorNotifyItem`](#addActorNotifyItem)`  `[`addBusyTime`](#addBusyTime)`  `[`addFirstPendingAction`](#addFirstPendingAction)`  `[`addFirstPendingCommand`](#addFirstPendingCommand)`  `[`addPendingAction`](#addPendingAction)`  `[`addPendingCommand`](#addPendingCommand)`  `[`addToAgenda`](#addToAgenda)`  `[`addToContents`](#addToContents)`  `[`adjustLookAroundTable`](#adjustLookAroundTable)`  `[`afterAction`](#afterAction)`  `[`afterTravel`](#afterTravel)`  `[`aName`](#aName)`  `[`aNameObj`](#aNameObj)`  `[`beforeAction`](#beforeAction)`  `[`beforeTravel`](#beforeTravel)`  `[`bestVisualInfo`](#bestVisualInfo)`  `[`calcScheduleOrder`](#calcScheduleOrder)`  `[`canBeTalkedTo`](#canBeTalkedTo)`  `[`canHear`](#canHear)`  `[`cannotFollow`](#cannotFollow)`  `[`cannotRespondToCommand`](#cannotRespondToCommand)`  `[`canOwn`](#canOwn)`  `[`canSee`](#canSee)`  `[`canSmell`](#canSmell)`  `[`canTalkTo`](#canTalkTo)`  `[`checkBulkChangeWithin`](#checkBulkChangeWithin)`  `[`checkDarkTravel`](#checkDarkTravel)`  `[`checkMovingTravelerInto`](#checkMovingTravelerInto)`  `[`checkReadyToEnterNestedRoom`](#checkReadyToEnterNestedRoom)`  `[`checkStagingLocation`](#checkStagingLocation)`  `[`checkTakeFromInventory`](#checkTakeFromInventory)`  `[`checkWaitingForActor`](#checkWaitingForActor)`  `[`conjugateRegularVerb`](#conjugateRegularVerb)`  `[`conversedThisTurn`](#conversedThisTurn)`  `[`copyPronounAntecedentsFrom`](#copyPronounAntecedentsFrom)`  `[`defaultAskForResponse`](#defaultAskForResponse)`  `[`defaultAskResponse`](#defaultAskResponse)`  `[`defaultCommandResponse`](#defaultCommandResponse)`  `[`defaultConvResponse`](#defaultConvResponse)`  `[`defaultGiveResponse`](#defaultGiveResponse)`  `[`defaultGoodbyeResponse`](#defaultGoodbyeResponse)`  `[`defaultGreetingResponse`](#defaultGreetingResponse)`  `[`defaultNoResponse`](#defaultNoResponse)`  `[`defaultShowResponse`](#defaultShowResponse)`  `[`defaultTellResponse`](#defaultTellResponse)`  `[`defaultYesResponse`](#defaultYesResponse)`  `[`descViaActorContainer`](#descViaActorContainer)`  `[`disembark`](#disembark)`  `[`distantSpecialDesc`](#distantSpecialDesc)`  `[`dobjFor(AskAbout)`](#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](#dobjFor(AskFor))`  `[`dobjFor(Drop)`](#dobjFor(Drop))`  `[`dobjFor(Kiss)`](#dobjFor(Kiss))`  `[`dobjFor(PutIn)`](#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](#dobjFor(PutUnder))`  `[`dobjFor(Take)`](#dobjFor(Take))`  `[`dobjFor(TalkTo)`](#dobjFor(TalkTo))`  `[`dobjFor(TellAbout)`](#dobjFor(TellAbout))`  `[`dobjFor(Throw)`](#dobjFor(Throw))`  `[`dobjFor(ThrowAt)`](#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](#dobjFor(ThrowDir))`  `[`dobjFor(ThrowTo)`](#dobjFor(ThrowTo))`  `[`endConversation`](#endConversation)`  `[`examineListContents`](#examineListContents)`  `[`examineStatus`](#examineStatus)`  `[`excludeFromLookAround`](#excludeFromLookAround)`  `[`executeActorTurn`](#executeActorTurn)`  `[`executeAgenda`](#executeAgenda)`  `[`executeTurn`](#executeTurn)`  `[`findVisualObstructor`](#findVisualObstructor)`  `[`forEachTravelingActor`](#forEachTravelingActor)`  `[`forgetPossAnaphors`](#forgetPossAnaphors)`  `[`getActionMessageObj`](#getActionMessageObj)`  `[`getActorNotifyList`](#getActorNotifyList)`  `[`getBulkHeld`](#getBulkHeld)`  `[`getCurrentInterlocutor`](#getCurrentInterlocutor)`  `[`getDefaultInterlocutor`](#getDefaultInterlocutor)`  `[`getDropDestination`](#getDropDestination)`  `[`getFollowables`](#getFollowables)`  `[`getFollowInfo`](#getFollowInfo)`  `[`getLookAroundName`](#getLookAroundName)`  `[`getParserDeferredMessageObj`](#getParserDeferredMessageObj)`  `[`getParserMessageObj`](#getParserMessageObj)`  `[`getPossAnaphor`](#getPossAnaphor)`  `[`getPronounAntecedent`](#getPronounAntecedent)`  `[`getPushTraveler`](#getPushTraveler)`  `[`getTopicOwner`](#getTopicOwner)`  `[`getTraveler`](#getTraveler)`  `[`getVisualAmbient`](#getVisualAmbient)`  `[`getWeightHeld`](#getWeightHeld)`  `[`goToSleep`](#goToSleep)`  `[`handleConversation`](#handleConversation)`  `[`hasSeen`](#hasSeen)`  `[`hideFromAll`](#hideFromAll)`  `[`hideFromDefault`](#hideFromDefault)`  `[`idleTurn`](#idleTurn)`  `[`impliedCommandMode`](#impliedCommandMode)`  `[`initializeActor`](#initializeActor)`  `[`initiateConversation`](#initiateConversation)`  `[`initiateTopic`](#initiateTopic)`  `[`inventorySense`](#inventorySense)`  `[`inventorySenseInfoTable`](#inventorySenseInfoTable)`  `[`iobjFor(GiveTo)`](#iobjFor(GiveTo))`  `[`iobjFor(ShowTo)`](#iobjFor(ShowTo))`  `[`iobjFor(ThrowTo)`](#iobjFor(ThrowTo))`  `[`isActorTraveling`](#isActorTraveling)`  `[`isLikelyTopic`](#isLikelyTopic)`  `[`isLocationLit`](#isLocationLit)`  `[`isPlayerChar`](#isPlayerChar)`  `[`knowsAbout`](#knowsAbout)`  `[`knowsTopic`](#knowsTopic)`  `[`listActorPosture`](#listActorPosture)`  `[`lookAround`](#lookAround)`  `[`makePosture`](#makePosture)`  `[`meetsObjHeld`](#meetsObjHeld)`  `[`mustMoveObjInto`](#mustMoveObjInto)`  `[`nonIdleTurn`](#nonIdleTurn)`  `[`noteConditionsAfter`](#noteConditionsAfter)`  `[`noteConditionsBefore`](#noteConditionsBefore)`  `[`noteConsultation`](#noteConsultation)`  `[`noteConvAction`](#noteConvAction)`  `[`noteConversation`](#noteConversation)`  `[`noteConversationFrom`](#noteConversationFrom)`  `[`noteObjectShown`](#noteObjectShown)`  `[`noteSeenBy`](#noteSeenBy)`  `[`notifyIssuerParseFailure`](#notifyIssuerParseFailure)`  `[`notifyParseFailure`](#notifyParseFailure)`  `[`notifyTopicResponse`](#notifyTopicResponse)`  `[`npcDesc`](#npcDesc)`  `[`obeyCommand`](#obeyCommand)`  `[`okayPostureChange`](#okayPostureChange)`  `[`orderingTime`](#orderingTime)`  `[`pcDesc`](#pcDesc)`  `[`postureDesc`](#postureDesc)`  `[`readyForTurn`](#readyForTurn)`  `[`referralPerson`](#referralPerson)`  `[`rememberLastDoor`](#rememberLastDoor)`  `[`rememberTravel`](#rememberTravel)`  `[`remoteSpecialDesc`](#remoteSpecialDesc)`  `[`removeActorNotifyItem`](#removeActorNotifyItem)`  `[`removeFromAgenda`](#removeFromAgenda)`  `[`reverseLastTravel`](#reverseLastTravel)`  `[`sayArriving`](#sayArriving)`  `[`sayArrivingDir`](#sayArrivingDir)`  `[`sayArrivingDownStairs`](#sayArrivingDownStairs)`  `[`sayArrivingLocally`](#sayArrivingLocally)`  `[`sayArrivingThroughPassage`](#sayArrivingThroughPassage)`  `[`sayArrivingUpStairs`](#sayArrivingUpStairs)`  `[`sayArrivingViaPath`](#sayArrivingViaPath)`  `[`sayDeparting`](#sayDeparting)`  `[`sayDepartingDir`](#sayDepartingDir)`  `[`sayDepartingDownStairs`](#sayDepartingDownStairs)`  `[`sayDepartingLocally`](#sayDepartingLocally)`  `[`sayDepartingThroughPassage`](#sayDepartingThroughPassage)`  `[`sayDepartingUpStairs`](#sayDepartingUpStairs)`  `[`sayDepartingViaPath`](#sayDepartingViaPath)`  `[`sayGoodbye`](#sayGoodbye)`  `[`sayHello`](#sayHello)`  `[`sayNo`](#sayNo)`  `[`saySpecialTopic`](#saySpecialTopic)`  `[`sayToActor`](#sayToActor)`  `[`sayTravelingRemotely`](#sayTravelingRemotely)`  `[`sayYes`](#sayYes)`  `[`scheduleInitiateConversation`](#scheduleInitiateConversation)`  `[`scopeList`](#scopeList)`  `[`scriptedTravelTo`](#scriptedTravelTo)`  `[`setConvNode`](#setConvNode)`  `[`setConvNodeReason`](#setConvNodeReason)`  `[`setCurState`](#setCurState)`  `[`setHasSeen`](#setHasSeen)`  `[`setHer`](#setHer)`  `[`setHim`](#setHim)`  `[`setIt`](#setIt)`  `[`setKnowsAbout`](#setKnowsAbout)`  `[`setPossAnaphor`](#setPossAnaphor)`  `[`setPossAnaphorObj`](#setPossAnaphorObj)`  `[`setPronoun`](#setPronoun)`  `[`setPronounAntecedent`](#setPronounAntecedent)`  `[`setPronounByType`](#setPronounByType)`  `[`setPronounMulti`](#setPronounMulti)`  `[`setPronounObj`](#setPronounObj)`  `[`setSpecialTraveler`](#setSpecialTraveler)`  `[`setThem`](#setThem)`  `[`showInventory`](#showInventory)`  `[`showInventoryWith`](#showInventoryWith)`  `[`showSpecialDescInContents`](#showSpecialDescInContents)`  `[`specialDesc`](#specialDesc)`  `[`specialDescListWith`](#specialDescListWith)`  `[`standUp`](#standUp)`  `[`suggestTopics`](#suggestTopics)`  `[`suggestTopicsFor`](#suggestTopicsFor)`  `[`trackFollowInfo`](#trackFollowInfo)`  `[`travelerName`](#travelerName)`  `[`travelerPreCond`](#travelerPreCond)`  `[`travelerTravelWithin`](#travelerTravelWithin)`  `[`travelTo`](#travelTo)`  `[`travelWithin`](#travelWithin)`  `[`tryMakingRoomToHold`](#tryMakingRoomToHold)`  `[`tryMovingObjInto`](#tryMovingObjInto)`  `[`unexcludeFromLookAround`](#unexcludeFromLookAround)`  `[`verifyFollowable`](#verifyFollowable)`  `[`verifyNotSelf`](#verifyNotSelf)`  `[`visibleInfoTable`](#visibleInfoTable)`  `[`visibleInfoTableFromPov`](#visibleInfoTableFromPov)`  `[`waitForIssuedCommand`](#waitForIssuedCommand)`  `[`wantsFollowInfo`](#wantsFollowInfo)`  `

Inherited from `Thing` :  
` `[`addAllContents`](../object/Thing.html#addAllContents)`  `[`addDirectConnections`](../object/Thing.html#addDirectConnections)`  `[`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem)`  `[`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable)`  `[`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination)`  `[`allContents`](../object/Thing.html#allContents)`  `[`aNameFrom`](../object/Thing.html#aNameFrom)`  `[`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc)`  `[`announceDefaultObject`](../object/Thing.html#announceDefaultObject)`  `[`appendHeldContents`](../object/Thing.html#appendHeldContents)`  `[`atmosphereList`](../object/Thing.html#atmosphereList)`  `[`baseMoveInto`](../object/Thing.html#baseMoveInto)`  `[`basicExamine`](../object/Thing.html#basicExamine)`  `[`basicExamineFeel`](../object/Thing.html#basicExamineFeel)`  `[`basicExamineListen`](../object/Thing.html#basicExamineListen)`  `[`basicExamineSmell`](../object/Thing.html#basicExamineSmell)`  `[`basicExamineTaste`](../object/Thing.html#basicExamineTaste)`  `[`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths)`  `[`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo)`  `[`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo)`  `[`cacheSensePath`](../object/Thing.html#cacheSensePath)`  `[`canBeHeardBy`](../object/Thing.html#canBeHeardBy)`  `[`canBeSeenBy`](../object/Thing.html#canBeSeenBy)`  `[`canBeSensed`](../object/Thing.html#canBeSensed)`  `[`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy)`  `[`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy)`  `[`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed)`  `[`canMatchPronounType`](../object/Thing.html#canMatchPronounType)`  `[`canMoveViaPath`](../object/Thing.html#canMoveViaPath)`  `[`cannotGoShowExits`](../object/Thing.html#cannotGoShowExits)`  `[`cannotReachObject`](../object/Thing.html#cannotReachObject)`  `[`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource)`  `[`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource)`  `[`canThrowViaPath`](../object/Thing.html#canThrowViaPath)`  `[`canTouch`](../object/Thing.html#canTouch)`  `[`canTouchViaPath`](../object/Thing.html#canTouchViaPath)`  `[`checkActorOutOfNested`](../object/Thing.html#checkActorOutOfNested)`  `[`checkBulkChange`](../object/Thing.html#checkBulkChange)`  `[`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath)`  `[`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath)`  `[`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath)`  `[`checkTravelerDirectlyInRoom`](../object/Thing.html#checkTravelerDirectlyInRoom)`  `[`childInName`](../object/Thing.html#childInName)`  `[`childInNameGen`](../object/Thing.html#childInNameGen)`  `[`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner)`  `[`childInRemoteName`](../object/Thing.html#childInRemoteName)`  `[`clearSenseInfo`](../object/Thing.html#clearSenseInfo)`  `[`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents)`  `[`connectionTable`](../object/Thing.html#connectionTable)`  `[`construct`](../object/Thing.html#construct)`  `[`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn)`  `[`countDisambigName`](../object/Thing.html#countDisambigName)`  `[`countListName`](../object/Thing.html#countListName)`  `[`countName`](../object/Thing.html#countName)`  `[`countNameFrom`](../object/Thing.html#countNameFrom)`  `[`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc)`  `[`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister)`  `[`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc)`  `[`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc)`  `[`desc`](../object/Thing.html#desc)`  `[`directionForConnector`](../object/Thing.html#directionForConnector)`  `[`distantSmellDesc`](../object/Thing.html#distantSmellDesc)`  `[`distantSoundDesc`](../object/Thing.html#distantSoundDesc)`  `[`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))`  `[`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf))`  `[`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))`  `[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))`  `[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))`  `[`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel))`  `[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague))`  `[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))`  `[`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff))`  `[`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`examineListContentsWith`](../object/Thing.html#examineListContentsWith)`  `[`examineSpecialContents`](../object/Thing.html#examineSpecialContents)`  `[`failCheck`](../object/Thing.html#failCheck)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`fillMedium`](../object/Thing.html#fillMedium)`  `[`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor)`  `[`findTouchObstructor`](../object/Thing.html#findTouchObstructor)`  `[`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer)`  `[`forEachContainer`](../object/Thing.html#forEachContainer)`  `[`fromPOV`](../object/Thing.html#fromPOV)`  `[`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom)`  `[`getAllPathsTo`](../object/Thing.html#getAllPathsTo)`  `[`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher)`  `[`getBagAffinities`](../object/Thing.html#getBagAffinities)`  `[`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding)`  `[`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher)`  `[`getBulk`](../object/Thing.html#getBulk)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarryingActor`](../object/Thing.html#getCarryingActor)`  `[`getCommonContainer`](../object/Thing.html#getCommonContainer)`  `[`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer)`  `[`getConnectedContainers`](../object/Thing.html#getConnectedContainers)`  `[`getConnectorTo`](../object/Thing.html#getConnectorTo)`  `[`getContentsForExamine`](../object/Thing.html#getContentsForExamine)`  `[`getDestName`](../object/Thing.html#getDestName)`  `[`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk)`  `[`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight)`  `[`getExtraScopeItems`](../object/Thing.html#getExtraScopeItems)`  `[`getHitFallDestination`](../object/Thing.html#getHitFallDestination)`  `[`getIdentityObject`](../object/Thing.html#getIdentityObject)`  `[`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher)`  `[`getListedContents`](../object/Thing.html#getListedContents)`  `[`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler)`  `[`getLocTraveler`](../object/Thing.html#getLocTraveler)`  `[`getMovePathTo`](../object/Thing.html#getMovePathTo)`  `[`getNoise`](../object/Thing.html#getNoise)`  `[`getNominalDropDestination`](../object/Thing.html#getNominalDropDestination)`  `[`getNominalOwner`](../object/Thing.html#getNominalOwner)`  `[`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList)`  `[`getOdor`](../object/Thing.html#getOdor)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom)`  `[`getRoomNotifyList`](../object/Thing.html#getRoomNotifyList)`  `[`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation)`  `[`getStateWithInfo`](../object/Thing.html#getStateWithInfo)`  `[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)`  `[`getThrowPathTo`](../object/Thing.html#getThrowPathTo)`  `[`getTouchPathTo`](../object/Thing.html#getTouchPathTo)`  `[`getTravelConnector`](../object/Thing.html#getTravelConnector)`  `[`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo)`  `[`getWeight`](../object/Thing.html#getWeight)`  `[`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup)`  `[`initializeEquivalent`](../object/Thing.html#initializeEquivalent)`  `[`initializeLocation`](../object/Thing.html#initializeLocation)`  `[`initializeThing`](../object/Thing.html#initializeThing)`  `[`inRoomName`](../object/Thing.html#inRoomName)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isActorTravelReady`](../object/Thing.html#isActorTravelReady)`  `[`isComponentOf`](../object/Thing.html#isComponentOf)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isHeldBy`](../object/Thing.html#isHeldBy)`  `[`isIn`](../object/Thing.html#isIn)`  `[`isInFixedIn`](../object/Thing.html#isInFixedIn)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isListedInContents`](../object/Thing.html#isListedInContents)`  `[`isListedInInventory`](../object/Thing.html#isListedInInventory)`  `[`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart)`  `[`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling)`  `[`isNominallyIn`](../object/Thing.html#isNominallyIn)`  `[`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart)`  `[`isOccludedBy`](../object/Thing.html#isOccludedBy)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOwnedBy`](../object/Thing.html#isOwnedBy)`  `[`isShipboard`](../object/Thing.html#isShipboard)`  `[`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent)`  `[`itIs`](../object/Thing.html#itIs)`  `[`itNom`](../object/Thing.html#itNom)`  `[`itObj`](../object/Thing.html#itObj)`  `[`itPossAdj`](../object/Thing.html#itPossAdj)`  `[`itPossNoun`](../object/Thing.html#itPossNoun)`  `[`itVerb`](../object/Thing.html#itVerb)`  `[`listCardinality`](../object/Thing.html#listCardinality)`  `[`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector)`  `[`lookAroundPov`](../object/Thing.html#lookAroundPov)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents)`  `[`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc)`  `[`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName)`  `[`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense)`  `[`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits)`  `[`lookInDesc`](../object/Thing.html#lookInDesc)`  `[`mainExamine`](../object/Thing.html#mainExamine)`  `[`mainMoveInto`](../object/Thing.html#mainMoveInto)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo)`  `[`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel)`  `[`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath)`  `[`nameIs`](../object/Thing.html#nameIs)`  `[`nameIsnt`](../object/Thing.html#nameIsnt)`  `[`nameVerb`](../object/Thing.html#nameVerb)`  `[`normalizePath`](../object/Thing.html#normalizePath)`  `[`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc)`  `[`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifyMoveInto`](../object/Thing.html#notifyMoveInto)`  `[`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath)`  `[`notifyRemove`](../object/Thing.html#notifyRemove)`  `[`obscuredDesc`](../object/Thing.html#obscuredDesc)`  `[`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc)`  `[`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc)`  `[`pluralNameFrom`](../object/Thing.html#pluralNameFrom)`  `[`processThrow`](../object/Thing.html#processThrow)`  `[`propHidesProp`](../object/Thing.html#propHidesProp)`  `[`propWithPresent`](../object/Thing.html#propWithPresent)`  `[`putInName`](../object/Thing.html#putInName)`  `[`receiveDrop`](../object/Thing.html#receiveDrop)`  `[`remoteDesc`](../object/Thing.html#remoteDesc)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem)`  `[`restoreLocation`](../object/Thing.html#restoreLocation)`  `[`roomActorThereDesc`](../object/Thing.html#roomActorThereDesc)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomDaemon`](../object/Thing.html#roomDaemon)`  `[`roomDarkDesc`](../object/Thing.html#roomDarkDesc)`  `[`roomDesc`](../object/Thing.html#roomDesc)`  `[`roomFirstDesc`](../object/Thing.html#roomFirstDesc)`  `[`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc)`  `[`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond)`  `[`saveLocation`](../object/Thing.html#saveLocation)`  `[`selectPathTo`](../object/Thing.html#selectPathTo)`  `[`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert)`  `[`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove)`  `[`senseAmbientMax`](../object/Thing.html#senseAmbientMax)`  `[`senseInfoTable`](../object/Thing.html#senseInfoTable)`  `[`senseObj`](../object/Thing.html#senseObj)`  `[`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin)`  `[`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout)`  `[`sensePathToContents`](../object/Thing.html#sensePathToContents)`  `[`sensePathToLoc`](../object/Thing.html#sensePathToLoc)`  `[`sensePresenceList`](../object/Thing.html#sensePresenceList)`  `[`setAllSeenBy`](../object/Thing.html#setAllSeenBy)`  `[`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy)`  `[`setGlobalParamName`](../object/Thing.html#setGlobalParamName)`  `[`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo)`  `[`shineFromWithin`](../object/Thing.html#shineFromWithin)`  `[`shineFromWithout`](../object/Thing.html#shineFromWithout)`  `[`shineOnContents`](../object/Thing.html#shineOnContents)`  `[`shineOnLoc`](../object/Thing.html#shineOnLoc)`  `[`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc)`  `[`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents)`  `[`showInventoryContents`](../object/Thing.html#showInventoryContents)`  `[`showInventoryItem`](../object/Thing.html#showInventoryItem)`  `[`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted)`  `[`showListItem`](../object/Thing.html#showListItem)`  `[`showListItemCounted`](../object/Thing.html#showListItemCounted)`  `[`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen)`  `[`showListItemGen`](../object/Thing.html#showListItemGen)`  `[`showObjectContents`](../object/Thing.html#showObjectContents)`  `[`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc)`  `[`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo)`  `[`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo)`  `[`showStatuslineExits`](../object/Thing.html#showStatuslineExits)`  `[`showWornItem`](../object/Thing.html#showWornItem)`  `[`showWornItemCounted`](../object/Thing.html#showWornItemCounted)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellHereDesc`](../object/Thing.html#smellHereDesc)`  `[`soundDesc`](../object/Thing.html#soundDesc)`  `[`soundHereDesc`](../object/Thing.html#soundHereDesc)`  `[`specialDescList`](../object/Thing.html#specialDescList)`  `[`specialPathFrom`](../object/Thing.html#specialPathFrom)`  `[`statusName`](../object/Thing.html#statusName)`  `[`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath)`  `[`superHidesSuper`](../object/Thing.html#superHidesSuper)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`thatNom`](../object/Thing.html#thatNom)`  `[`thatObj`](../object/Thing.html#thatObj)`  `[`theNameFrom`](../object/Thing.html#theNameFrom)`  `[`theNameObj`](../object/Thing.html#theNameObj)`  `[`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc)`  `[`theNameWithOwner`](../object/Thing.html#theNameWithOwner)`  `[`throwTargetCatch`](../object/Thing.html#throwTargetCatch)`  `[`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith)`  `[`throwViaPath`](../object/Thing.html#throwViaPath)`  `[`transmitAmbient`](../object/Thing.html#transmitAmbient)`  `[`transSensingIn`](../object/Thing.html#transSensingIn)`  `[`transSensingOut`](../object/Thing.html#transSensingOut)`  `[`traversePath`](../object/Thing.html#traversePath)`  `[`tryHolding`](../object/Thing.html#tryHolding)`  `[`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor)`  `[`useInitDesc`](../object/Thing.html#useInitDesc)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents)`  `[`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom)`  `[`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart)`  `[`verbEndingEs`](../object/Thing.html#verbEndingEs)`  `[`verbEndingIes`](../object/Thing.html#verbEndingIes)`  `[`verbEndingS`](../object/Thing.html#verbEndingS)`  `[`verbToHave`](../object/Thing.html#verbToHave)`  `[`verbWas`](../object/Thing.html#verbWas)`  `[`verifyInsert`](../object/Thing.html#verifyInsert)`  `[`verifyMoveTo`](../object/Thing.html#verifyMoveTo)`  `[`verifyRemove`](../object/Thing.html#verifyRemove)`  `[`whatIf`](../object/Thing.html#whatIf)`  `[`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy)`  `[`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)`  `

Inherited from `VocabObject` :  
` `[`addToDictionary`](../object/VocabObject.html#addToDictionary)`  `[`expandPronounList`](../object/VocabObject.html#expandPronounList)`  `[`filterResolveList`](../object/VocabObject.html#filterResolveList)`  `[`getFacets`](../object/VocabObject.html#getFacets)`  `[`inheritVocab`](../object/VocabObject.html#inheritVocab)`  `[`initializeVocab`](../object/VocabObject.html#initializeVocab)`  `[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)`  `[`matchName`](../object/VocabObject.html#matchName)`  `[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)`  `[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)`  `[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)`  `[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)`  `[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)`  `

Inherited from `Schedulable` :  
` `[`execute`](../object/Schedulable.html#execute)`  `[`getNextRunTime`](../object/Schedulable.html#getNextRunTime)`  `[`incNextRunTime`](../object/Schedulable.html#incNextRunTime)`  `

Inherited from `Traveler` :  
` `[`canTravelVia`](../object/Traveler.html#canTravelVia)`  `[`checkDirectlyInRoom`](../object/Traveler.html#checkDirectlyInRoom)`  `[`describeArrival`](../object/Traveler.html#describeArrival)`  `[`describeDeparture`](../object/Traveler.html#describeDeparture)`  `[`describeNpcArrival`](../object/Traveler.html#describeNpcArrival)`  `[`describeNpcDeparture`](../object/Traveler.html#describeNpcDeparture)`  `[`explainNoTravelVia`](../object/Traveler.html#explainNoTravelVia)`  `[`getNotifyTable`](../object/Traveler.html#getNotifyTable)`  `[`isTravelerCarrying`](../object/Traveler.html#isTravelerCarrying)`  `[`travelerLocName`](../object/Traveler.html#travelerLocName)`  `[`travelerRemoteLocName`](../object/Traveler.html#travelerRemoteLocName)`  `[`travelerSeenBy`](../object/Traveler.html#travelerSeenBy)`  `[`travelerTravelTo`](../object/Traveler.html#travelerTravelTo)`  `

Inherited from `TravelMessageHandler` :  
` `[`getNominalTraveler`](../object/TravelMessageHandler.html#getNominalTraveler)`  `

Inherited from `ActorTopicDatabase` :  
` `[`showTopicResponse`](../object/ActorTopicDatabase.html#showTopicResponse)`  `

Inherited from `TopicDatabase` :  
` `[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic)`  `[`addTopic`](../object/TopicDatabase.html#addTopic)`  `[`addTopicToList`](../object/TopicDatabase.html#addTopicToList)`  `[`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch)`  `[`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse)`  `[`handleTopic`](../object/TopicDatabase.html#handleTopic)`  `[`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic)`  `[`removeTopic`](../object/TopicDatabase.html#removeTopic)`  `[`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList)`  `[`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="accompanyingActors"></span>

`accompanyingActors`

[actor.t](../file/actor.t.html)\[[7816](../source/actor.t.html#7816)\]

<div class="desc">

My vector of actors who are accompanying me.

This is for internal bookkeeping only, and it applies to the current
travel only. This is NOT a general "follow mode" setting, and it
shouldn't be used to get me to follow another actor or another actor to
follow me. To make me accompany another actor, simply override
accompanyTravel() so that it returns a suitable ActorState object.

</div>

<span id="actorNotifyList"></span>

`actorNotifyList`

[actor.t](../file/actor.t.html)\[[8499](../source/actor.t.html#8499)\]

<div class="desc">

our list of registered actor notification items

</div>

<span id="agendaList"></span>

`agendaList`

[actor.t](../file/actor.t.html)\[[6922](../source/actor.t.html#6922)\]

<div class="desc">

The actor's "agenda." This is a list of AgendaItem objects that describe
things the actor wants to do of its own volition on its own turn.

</div>

<span id="antecedentTable"></span>

`antecedentTable`

[actor.t](../file/actor.t.html)\[[9953](../source/actor.t.html#9953)\]

<div class="desc">

Antecedent lookup table. Each actor keeps its own table of antecedents
indexed by pronoun type, so that we can simultaneously have different
antecedents for different pronouns.

</div>

<span id="boredomAgendaItem"></span>

`boredomAgendaItem`

[actor.t](../file/actor.t.html)\[[6929](../source/actor.t.html#6929)\]

<div class="desc">

our special "boredom" agenda item - this makes us initiate an end to an
active conversation when the PC has ignored us for a given number of
consecutive turns

</div>

<span id="boredomCount"></span>

`boredomCount`

[actor.t](../file/actor.t.html)\[[6831](../source/actor.t.html#6831)\]

<div class="desc">

Our conversational "boredom" counter. While we're in a conversation,
this tracks the number of turns since the last conversational command
from the actor we're talking to.

Note that this state is part of the actor, even though it's usually
managed by the InConversationState object. The state is stored with the
actor rather than with the state object because it really describes the
condition of the actor, not of the state object.

</div>

<span id="bulkCapacity"></span>

`bulkCapacity`

[actor.t](../file/actor.t.html)\[[6339](../source/actor.t.html#6339)\]

<div class="desc">

You can limit the cumulative amount of bulk an actor can hold, and the
maximum bulk of any one object the actor can hold, using bulkCapacity
and maxSingleBulk. These properties are analogous to the same ones in
Container.

A word of caution on these is in order. Many authors worry that it's
unrealistic if the player character can carry too much at one time, so
they'll fiddle with these properties to impose a carrying limit that
seems realistic. Be advised that authors love this sort of "realism" a
whole lot more than players do. Players almost universally don't care
about it, and in fact tend to hate the inventory juggling it inevitably
leads to. Juggling inventory isn't any fun for the player. Don't fool
yourself about this - the thoughts in the mind of a player who's
tediously carting objects back and forth three at a time will not
include admiration of your prowess at simulational realism. In contrast,
if you set the carrying limit to infinity, it's a rare player who will
even notice, and a much rarer player who'll complain about it.

If you really must insist on inventory limits, refer to the BagOfHolding
class for a solution that can salvage most of the "realism" that the
accountancy-inclined author craves, without creating undue inconvenience
for the player. BagOfHolding makes inventory limits palatable for the
player by essentially automating the required inventory juggling. In
fact, for most players, an inventory limit in conjunction with a bag of
holding is actually better than an unlimited inventory, since it
improves readability by keeping the direct inventory list to a
manageable size.

</div>

<span id="canMatch3rdPerson"></span>

`canMatch3rdPerson`

[en_us.t](../file/en_us.t.html)\[[2391](../source/en_us.t.html#2391)\]

<div class="desc">

Test to see if we can match a third-person pronoun ('it', 'him', 'her',
'them'). We can unless we're the player character and the player
character is referred to in the first or second person.

</div>

<span id="canMatchHer"></span>

`canMatchHer`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2382](../source/en_us.t.html#2382)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchHim"></span>

`canMatchHim`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2381](../source/en_us.t.html#2381)\]

<div class="desc">

Test to see if we can match the third-person pronouns. We'll match these
if our inherited test says we match them AND we can be referred to in
the third person.

</div>

<span id="canMatchIt"></span>

`canMatchIt`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2383](../source/en_us.t.html#2383)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchThem"></span>

`canMatchThem`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2384](../source/en_us.t.html#2384)\]

<div class="desc">

*no description available*

</div>

<span id="commandReferralPerson"></span>

`commandReferralPerson`

[actor.t](../file/actor.t.html)\[[6238](../source/actor.t.html#6238)\]

<div class="desc">

The referral person of the current command targeting the actor. This is
meaningful only when a command is being directed to this actor, and this
actor is an NPC.

The referral person depends on the specifics of the language. In
English, a command like "bob, go north" is a second-person command,
while "tell bob to go north" is a third-person command. The only reason
this is important is in interpreting what "you" means if it's used as an
object in the command. "tell bob to hit you" probably means that Bob
should hit the player character, while "bob, hit you" probably means
that Bob should hit himself.

</div>

<span id="communicationSenses"></span>

`communicationSenses`

[actor.t](../file/actor.t.html)\[[7574](../source/actor.t.html#7574)\]

<div class="desc">

Communication senses: these are the senses through which the actor can
communicate directly with other actors through commands and messages.

Conceptually, these senses are intended to be only those senses that the
actors would \*naturally\* use to communicate, because senses in this
list allow direct communications via the most ordinary game commands,
such as "bob, go east".

If some form of indirect communication is possible via a sense, but that
form is not something the actor would think of as the most natural,
default form of communication, it should \*not\* be in this list. For
example, two sighted persons who can see one another but cannot hear one
another could still communicate by writing messages on pieces of paper,
but they would ordinarily communicate by talking. In such a case, sound
should be in the list but sight should not be, because sight is not a
natural, default form of communications for the actors.

</div>

<span id="contentsListed"></span>

`contentsListed`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5948](../source/actor.t.html#5948)\]

<div class="desc">

the contents of an actor aren't listed in a room's description

</div>

<span id="convMgrID"></span>

`convMgrID`

[actor.t](../file/actor.t.html)\[[5778](../source/actor.t.html#5778)\]

<div class="desc">

conversation manager ID - this is assigned by the conversation manager
to map to and from output stream references to the actor; this is only
for internal use by the conversation manager

</div>

<span id="convNodeTab"></span>

`convNodeTab`

[actor.t](../file/actor.t.html)\[[5726](../source/actor.t.html#5726)\]

<div class="desc">

Our table of conversation nodes. At initialization, the conversation
manager scans all ConvNode instances and adds each one to its actor's
table. This table is keyed by the name of node, and the value for each
entry is the ConvNode object - this lets us look up the ConvNode object
by name. Because each actor has its own lookup table, ConvNode names
only have to be unique within the actor's set of ConvNodes.

</div>

<span id="curConvNode"></span>

`curConvNode`

[actor.t](../file/actor.t.html)\[[5715](../source/actor.t.html#5715)\]

<div class="desc">

Our current conversation node. This is a ConvNode object that keeps
track of the flow of the conversation.

</div>

<span id="curState"></span>

`curState`

[actor.t](../file/actor.t.html)\[[5690](../source/actor.t.html#5690)\]

<div class="desc">

Our current state. This is an ActorState object representing what we're
currently doing. Whenever the actor changes to a new state (for example,
because of a scripted activity), this can be changed to reflect the
actor's new state. The state object groups the parts of the actor's
description and other methods that tend to vary according to what the
actor's doing; it's easier to keep everything related to scripted
activities together in a state object than it is to handle all of the
variability with switch() statements of the like in methods directly in
the actor.

It's not necessary to initialize this if the actor doesn't take
advantage of the ActorState mechanism. If this isn't initialized for a
particular actor, we'll automatically create a default ActorState object
during pre-initialization.

</div>

<span id="excludeFromLookAroundList"></span>

`excludeFromLookAroundList`

[actor.t](../file/actor.t.html)\[[7483](../source/actor.t.html#7483)\]

<div class="desc">

Our list of objects explicitly excluded from 'look around'. These
objects will be suppressed from any sort of listing (including in the
room's contents list and in special descriptions) in 'look around' when
this actor is doing the looking.

</div>

<span id="followables_"></span>

`followables_`

[actor.t](../file/actor.t.html)\[[8158](../source/actor.t.html#8158)\]

<div class="desc">

Our list of followable information. Each entry in this list is a
FollowInfo object that tracks a particular followable.

</div>

<span id="followingActor"></span>

`followingActor`

[actor.t](../file/actor.t.html)\[[9235](../source/actor.t.html#9235)\]

<div class="desc">

If we're following an actor, this keeps track of the actor we're
following. NPC's can use this to follow around another actor whenever
possible.

</div>

<span id="getTravelerActors"></span>

`getTravelerActors`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6435](../source/actor.t.html#6435)\]

<div class="desc">

Get the actors involved in travel, when we're acting in our role as a
Traveler. When the Traveler is simply the Actor, the only actor involved
in the travel is 'self'.

</div>

<span id="getTravelerMotiveActors"></span>

`getTravelerMotiveActors`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6438](../source/actor.t.html#6438)\]

<div class="desc">

we're the self-motive actor doing the travel

</div>

<span id="hearinglikeSenses"></span>

`hearinglikeSenses`

[actor.t](../file/actor.t.html)\[[7546](../source/actor.t.html#7546)\]

<div class="desc">

Hearing-like senses. These are senses that the actor can use to hear
objects.

</div>

<span id="holdingDescInventoryLister"></span>

`holdingDescInventoryLister`

[actor.t](../file/actor.t.html)\[[8927](../source/actor.t.html#8927)\]

<div class="desc">

The Lister for inventory listings, for use in a full description of the
actor. By default, we use the "long form" inventory lister, on the
assumption that most actors have relatively lengthy descriptive text.
This can be overridden to use other formats; the short-form lister, for
example, is useful for actors with only brief descriptions.

</div>

<span id="inventoryLister"></span>

`inventoryLister`

[actor.t](../file/actor.t.html)\[[8917](../source/actor.t.html#8917)\]

<div class="desc">

The Lister object that we use for inventory listings. By default, we use
actorInventoryLister, but this can be overridden if desired to use a
different listing style.

</div>

<span id="isActor"></span>

`isActor`

[actor.t](../file/actor.t.html)\[[5672](../source/actor.t.html#5672)\]

<div class="desc">

flag: we're an actor

</div>

<span id="isLikelyCommandTarget"></span>

`isLikelyCommandTarget`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9506](../source/actor.t.html#9506)\]

<div class="desc">

By default, all actors are likely command targets. This should be
overridden for actors who are obviously not likely to accept commands of
any kind.

This is used to disambiguate target actors in commands, so this should
provide an indication of what should be obvious to a player, because the
purpose of this information is to guess what the player is likely to
take for granted in specifying a target actor.

</div>

<span id="isListed"></span>

`isListed`

[actor.t](../file/actor.t.html)\[[5943](../source/actor.t.html#5943)\]

<div class="desc">

Actors are not listed with the ordinary objects in a room's description.
However, an actor is listed as part of an inventory description.

</div>

<span id="isListedAboardVehicle"></span>

`isListedAboardVehicle`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6368](../source/actor.t.html#6368)\]

<div class="desc">

by default, actors are listed when they arrive aboard a vehicle

</div>

<span id="isListedInContents"></span>

`isListedInContents`

[actor.t](../file/actor.t.html)\[[5944](../source/actor.t.html#5944)\]

<div class="desc">

*no description available*

</div>

<span id="isListedInInventory"></span>

`isListedInInventory`

[actor.t](../file/actor.t.html)\[[5945](../source/actor.t.html#5945)\]

<div class="desc">

*no description available*

</div>

<span id="issueCommandsSynchronously"></span>

`issueCommandsSynchronously`

[actor.t](../file/actor.t.html)\[[7695](../source/actor.t.html#7695)\]

<div class="desc">

Flag: we wait for commands issued to other actors to complete before we
get another turn. If this is true, then whenever we issue a command to
another actor ("bob, go north"), we will not get another turn until the
other actor has finished executing the full set of commands we issued.

By default, this is true, which means that we wait for other actors to
finish all of the commands we issue before we take another turn.

If this is set to nil, we'll continue to take turns while the other
actor carries out our commands. In this case, the only time cost to us
of issuing a command is given by orderingTime(), which normally takes
one turn for issuing a command, regardless of the command's complexity.
Some games might wish to use this mode for interesting effects with
NPC's carrying out commands in parallel with the player, but it's an
unconventional style that some players might find confusing, so we don't
use this mode by default.

</div>

<span id="knownProp"></span>

`knownProp`

[actor.t](../file/actor.t.html)\[[8228](../source/actor.t.html#8228)\]

<div class="desc">

My 'known' property. By default, this is simply 'known', which means
that we don't distinguish who knows what.

As with 'seenProp' above, if you want to keep track of each NPC's
knowledge separately, you must override this property for each NPC who's
to have its own knowledge base to use a separate property name. For
example, if you want to keep track of what Bob knows individually, you
could define 'knownProp = &bobKnows' in Bob.

</div>

<span id="lastConsulted"></span>

`lastConsulted`

[actor.t](../file/actor.t.html)\[[6915](../source/actor.t.html#6915)\]

<div class="desc">

the object we most recently consulted

</div>

<span id="lastConvTime"></span>

`lastConvTime`

[actor.t](../file/actor.t.html)\[[6837](../source/actor.t.html#6837)\]

<div class="desc">

game-clock time (Schedulable.gameClockTime) of the last conversational
command addressed to us by the player character

</div>

<span id="lastDoorTraversed"></span>

`lastDoorTraversed`

[actor.t](../file/actor.t.html)\[[6700](../source/actor.t.html#6700)\]

<div class="desc">

the last door I traversed

</div>

<span id="lastInterlocutor"></span>

`lastInterlocutor`

[actor.t](../file/actor.t.html)\[[6818](../source/actor.t.html#6818)\]

<div class="desc">

The most recent actor that we've interacted with through a
conversational command (ASK, TELL, GIVE, SHOW, etc).

</div>

<span id="lastTravelBack"></span>

`lastTravelBack`

[actor.t](../file/actor.t.html)\[[6704](../source/actor.t.html#6704)\]

<div class="desc">

*no description available*

</div>

<span id="lastTravelDest"></span>

`lastTravelDest`

[actor.t](../file/actor.t.html)\[[6703](../source/actor.t.html#6703)\]

<div class="desc">

the destination and back connector for our last travel

</div>

<span id="locationBefore"></span>

`locationBefore`

[actor.t](../file/actor.t.html)\[[9000](../source/actor.t.html#9000)\]

<div class="desc">

conditions we noted in noteConditionsBefore()

</div>

<span id="locationLitBefore"></span>

`locationLitBefore`

[actor.t](../file/actor.t.html)\[[9001](../source/actor.t.html#9001)\]

<div class="desc">

*no description available*

</div>

<span id="maxSingleBulk"></span>

`maxSingleBulk`

[actor.t](../file/actor.t.html)\[[6340](../source/actor.t.html#6340)\]

<div class="desc">

*no description available*

</div>

<span id="mostRecentAction"></span>

`mostRecentAction`

[actor.t](../file/actor.t.html)\[[9147](../source/actor.t.html#9147)\]

<div class="desc">

the action the actor performed most recently

</div>

<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2131](../source/en_us.t.html#2131)\]

<div class="desc">

by default, use my pronoun for my name

</div>

<span id="nextHoldingIndex"></span>

`nextHoldingIndex`

[actor.t](../file/actor.t.html)\[[7293](../source/actor.t.html#7293)\]

<div class="desc">

Next available "holding index" value. Each time we pick up an item,
we'll assign it our current holding index value and then increment our
value. This gives us a simple way to keep track of the order in which we
picked up items we're carrying.

Note that we make the simplifying assumption that an object can be held
by only one actor at a time (multi-location items are generally not
portable), which means that we can use a simple property in each object
being held to store its holding index.

</div>

<span id="nextRunTime"></span>

`nextRunTime`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9004](../source/actor.t.html#9004)\]

<div class="desc">

let the actor have a turn as soon as the game starts

</div>

<span id="pcReferralPerson"></span>

`pcReferralPerson`

[actor.t](../file/actor.t.html)\[[6223](../source/actor.t.html#6223)\]

<div class="desc">

by default, refer to the player character in the second person

</div>

<span id="pendingCommand"></span>

`pendingCommand`

[actor.t](../file/actor.t.html)\[[9794](../source/actor.t.html#9794)\]

<div class="desc">

pending commands - this is a list of PendingCommandInfo objects

</div>

<span id="pendingConv"></span>

`pendingConv`

[actor.t](../file/actor.t.html)\[[5911](../source/actor.t.html#5911)\]

<div class="desc">

Our list of pending conversation initiators. In our takeTurn()
processing, we'll check this list for conversations that we can
initiate.

</div>

<span id="pendingResponse"></span>

`pendingResponse`

[actor.t](../file/actor.t.html)\[[9801](../source/actor.t.html#9801)\]

<div class="desc">

pending response - this is a single PendingResponseInfo object, which
we'll deliver as soon as the issuing actor is in a position to hear us

</div>

<span id="possAnaphorTable"></span>

`possAnaphorTable`

[actor.t](../file/actor.t.html)\[[9965](../source/actor.t.html#9965)\]

<div class="desc">

Possessive anaphor lookup table. In almost all cases, the possessive
anaphor for a given pronoun will be the same as the corresponding
regular pronoun: HIS indicates possession by HIM, for example. In a few
cases, though, the anaphoric quality of possessives takes precedence,
and these will differ. For example, in TELL BOB TO DROP HIS BOOK, "his"
refers back to Bob, while in TELL BOB TO HIT HIM, "him" refers to
whatever it referred to before the command.

</div>

<span id="posture"></span>

`posture`

[actor.t](../file/actor.t.html)\[[7322](../source/actor.t.html#7322)\]

<div class="desc">

My current "posture," which specifies how we're positioned with respect
to our container; this is one of the standard library posture enum
values (Standing, etc.) or another posture added by the game.

</div>

<span id="responseSetConvNode"></span>

`responseSetConvNode`

[actor.t](../file/actor.t.html)\[[5785](../source/actor.t.html#5785)\]

<div class="desc">

Flag indicating whether or not we've set a ConvNode in the course of the
current response. This is for use by the converstaion manager.

</div>

<span id="revertTargetActorAtEndOfSentence"></span>

`revertTargetActorAtEndOfSentence`

[actor.t](../file/actor.t.html)\[[7722](../source/actor.t.html#7722)\]

<div class="desc">

Flag: the "target actor" of the command line automatically reverts to
this actor at the end of a sentence, when this actor is the issuer of a
command. If this flag is nil, an explicit target actor stays in effect
until the next explicit target actor (or the end of the entire command
line, if no other explicit target actors are named); if this flag is
true, a target actor is in effect only until the end of a sentence.

Consider this command line:

\>Bob, go north and get fuel cell. Get log tape.

If this flag is nil, then the second sentence ("get log tape") is
interpreted as a command to Bob, because Bob is explicitly designated as
the target of the command, and this remains in effect until the end of
the entire command line.

If this flag is true, on the other hand, then the second sentence is
interpreted as a command to the player character, because the target
actor designation ("Bob,") lasts only until the end of the sentence.
Once a new sentence begins, we revert to the issuing actor (the player
character, since the command came from the player via the keyboard).

</div>

<span id="scheduleOrder"></span>

`scheduleOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9028](../source/actor.t.html#9028)\]

<div class="desc">

Scheduling order - this determines the order of execution when several
items are schedulable at the same game clock time.

We choose a scheduling order that schedules actors in this relative
order:

100 player character, ready to execute  
200 NPC, ready to execute  
300 player character, idle  
400 NPC, idle

An "idle" actor is one that is waiting for another character to complete
a command, or an NPC with no pending commands to perform. (For the
player character, it doesn't matter whether or not there's a pending
command, because if the PC has no pending command, we ask the player for
one.)

This ordering ensures that each actor gets a chance to run each turn,
but that actors with work to do go first, and other things being equal,
the player character goes ahead of NPC's.

</div>

<span id="scopeSenses"></span>

`scopeSenses`

[actor.t](../file/actor.t.html)\[[7514](../source/actor.t.html#7514)\]

<div class="desc">

The senses that determine scope for this actor. An actor might possess
only a subset of the defined sense.

By default, we give each actor all of the human senses that we define,
except touch. In general, merely being able to touch an object doesn't
put the object in scope, because if an object isn't noticed through some
other sense, touch would only make an object accessible if it's within
arm's reach, which for our purposes means that the object is being held
directly by the actor. Imagine an actor in a dark room: lots of things
might be touchable in the sense that there's no physical barrier to
touching them, but without some other sense to locate the objects, the
actor wouldn't have any way of knowing where to reach to touch things,
so they're not in scope. So, touch isn't a scope sense.

</div>

<span id="seenProp"></span>

`seenProp`

[actor.t](../file/actor.t.html)\[[8215](../source/actor.t.html#8215)\]

<div class="desc">

My 'seen' property. By default, this is simply 'seen', which means that
we don't distinguish who's seen what - in other words, there's a single,
global 'seen' flag per object, and if anyone's ever seen something, then
we consider that to mean everyone has seen it.

Some games might want to track each NPC's sight memory separately, or at
least they might want to track it individually for a few specific NPC's.
You can do this by making up a new property name for each NPC whose
sight memory you want to keep separate, and simply setting 'seenProp' to
that property name for each such NPC. For example, for Bob, you could
make the property bobHasSeen, so in Bob you'd define 'sightProp =
&bobHasSeen'.

</div>

<span id="sightlikeSenses"></span>

`sightlikeSenses`

[actor.t](../file/actor.t.html)\[[7540](../source/actor.t.html#7540)\]

<div class="desc">

"Sight-like" senses: these are the senses that operate like sight for
the actor, and which the actor can use to determine the names of objects
and the spatial relationships between objects. These senses should
operate passively, in the sense that they should tend to collect sensory
input continuously and without explicit action by the actor, the way
sight does and the way touch, for example, does not. These senses should
also operate instantly, in the sense that the sense can reasonably take
in most or all of a location at one time.

These senses are used to determine what objects should be listed in room
descriptions, for example.

By default, the only sight-like sense is sight, since other human senses
don't normally provide a clear picture of the spatial relationships
among objects. (Touch could with some degree of effort, but it can't
operate passively or instantly, since deliberate and time-consuming
action would be necessary.)

An actor can have more than one sight-like sense, in which case the
senses will act effectively as one sense that can reach the union of
objects reachable through the individual senses.

</div>

<span id="smelllikeSenses"></span>

`smelllikeSenses`

[actor.t](../file/actor.t.html)\[[7552](../source/actor.t.html#7552)\]

<div class="desc">

Smell-like senses. These are senses that the actor can use to smell
objects.

</div>

<span id="specialDescBeforeContents"></span>

`specialDescBeforeContents`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6063](../source/actor.t.html#6063)\]

<div class="desc">

By default, show the special description for an actor in the group of
special descriptions that come \*after\* the room's portable contents
listing. An actor's presence is usually a dynamic feature of a room, and
so we don't want to suggest that the actor is a permanent feature of the
room by describing the actor directly with the room's main description.

</div>

<span id="specialDescOrder"></span>

`specialDescOrder`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6082](../source/actor.t.html#6082)\]

<div class="desc">

By default, put all of the actor special descriptions after the special
descriptions of ordinary objects, by giving actors a higher listing
order value.

</div>

<span id="specialTraveler"></span>

`specialTraveler`

[actor.t](../file/actor.t.html)\[[6462](../source/actor.t.html#6462)\]

<div class="desc">

our special traveler

</div>

<span id="takeFromNotInMessage"></span>

`takeFromNotInMessage`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10047](../source/actor.t.html#10047)\]

<div class="desc">

show a "take from" message as indicating I don't have the dobj

</div>

<span id="waitingForActor"></span>

`waitingForActor`

[actor.t](../file/actor.t.html)\[[7785](../source/actor.t.html#7785)\]

<div class="desc">

Synchronous command processing: the target actor and dummy pending
command we're waiting for. When these are non-nil, we won't take another
turn until the given PendingCommandInfo has been removed from the given
target actor's command queue.

</div>

<span id="waitingForInfo"></span>

`waitingForInfo`

[actor.t](../file/actor.t.html)\[[7786](../source/actor.t.html#7786)\]

<div class="desc">

*no description available*

</div>

<span id="weightCapacity"></span>

`weightCapacity`

[actor.t](../file/actor.t.html)\[[6348](../source/actor.t.html#6348)\]

<div class="desc">

An actor can limit the cumulative amount of weight being held, using
weightCapacity. By default we make this so large that there is
effectively no limit to how much weight an actor can carry.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="acceptCommand"></span>

`acceptCommand (issuingActor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9529](../source/actor.t.html#9529)\]

<div class="desc">

Determine if we should accept a command. 'issuingActor' is the actor who
issued the command: if the player typed the command on the command line,
this will be the player character actor.

This routine performs only the simplest check, since it doesn't have
access to the specific action being performed. This is intended as a
first check, to allow us to bypass noun resolution if the actor simply
won't accept any command from the issuer.

Returns true to accept a command, nil to reject it. If this routine
returns nil, and the command came from the player character, a suitable
message should be displayed.

Note that most actors should not override this routine simply to express
the will of the actor to accept a command, since this routine performs a
number of checks for the physical ability of the actor to execute a
command from the issuer. To determine whether or not the actor should
obey physically valid commands from the issuer, override obeyCommand().

</div>

<span id="acceptCommandBusy"></span>

`acceptCommandBusy (issuingActor)`

[actor.t](../file/actor.t.html)\[[9573](../source/actor.t.html#9573)\]

<div class="desc">

Check to see if I'm busy with pending commands, and if so, whether or
not I should accept a new command. Returns true if we should accept a
command, nil if not. If we return nil, we must notify the issuer of the
rejection.

By default, we won't accept a command if we have any work pending.

</div>

<span id="actorAction"></span>

`actorAction ( )`

[actor.t](../file/actor.t.html)\[[8373](../source/actor.t.html#8373)\]

<div class="desc">

Perform any actor-specific processing for an action. The main command
processor invokes this on gActor after notifying nearby objects via
beforeAction(), but before carrying out the main action of the command.

</div>

<span id="actorActionFollow"></span>

`actorActionFollow (obj)`

[actor.t](../file/actor.t.html)\[[7990](../source/actor.t.html#7990)\]

<div class="desc">

Carry out a "follow" command being performed by this actor.

</div>

<span id="actorHereDesc"></span>

`actorHereDesc ( )`

[actor.t](../file/actor.t.html)\[[6117](../source/actor.t.html#6117)\]

<div class="desc">

Actor "I am here" description. This is displayed as part of the
description of a room - it describes the actor as being present in the
room. By default, we let the "nominal actor container" provide the
description.

</div>

<span id="actorListWith"></span>

`actorListWith ( )`

[actor.t](../file/actor.t.html)\[[6089](../source/actor.t.html#6089)\]

<div class="desc">

Get my listing group for my special description as part of a room
description. By default, we'll let our immediate location decide how
we're grouped.

</div>

<span id="actorRoomNameStatus"></span>

`actorRoomNameStatus (room)`

[actor.t](../file/actor.t.html)\[[6145](../source/actor.t.html#6145)\]

<div class="desc">

Show our status, as an addendum to the given room's name (this is the
room title, shown at the start of a room description and on the status
line). By default, we'll let our nominal actor container provide the
status, to indicate when we're standing/sitting/lying in a nested room.

In concrete terms, this generally adds a message such as "(sitting on
the chair)" to the name of a room if we're in a nested room within the
room. When we're standing in the main room, this generally adds nothing.

Note that we pass the room we're describing as the "container to ignore"
parameter, because we don't want to say something like "Phone Booth
(standing in the phone booth)" - that is, we don't want to mention the
nominal container again if the nominal container is what we're naming in
the first place.

</div>

<span id="actorThereDesc"></span>

`actorThereDesc ( )`

[actor.t](../file/actor.t.html)\[[6125](../source/actor.t.html#6125)\]

<div class="desc">

Actor's "I am over there" description. This is displayed in the room
description when the actor is visible, but is either in a separate
top-level room or is at a distance. By default, we let the "nominal
actor container" provide the description.

</div>

<span id="actorTravel"></span>

`actorTravel (traveler, connector)`

[actor.t](../file/actor.t.html)\[[8422](../source/actor.t.html#8422)\]

<div class="desc">

Receive notification that I'm initiating travel. This is called on the
actor performing the travel action before the travel is actually carried
out.

</div>

<span id="actorVerifyFollow"></span>

`actorVerifyFollow (obj)`

[actor.t](../file/actor.t.html)\[[7934](../source/actor.t.html#7934)\]

<div class="desc">

Verify a "follow" command being performed by this actor.

</div>

<span id="addAccompanyingActor"></span>

`addAccompanyingActor (actor)`

[actor.t](../file/actor.t.html)\[[7796](../source/actor.t.html#7796)\]

<div class="desc">

Add the given actor to the list of actors accompanying my travel on the
current turn. This does NOT set an actor in "follow mode" or "accompany
mode" or anything like that - don't use this to make an actor follow me
around. Instead, this makes the given actor go with us for the CURRENT
travel only - the travel we're already in the process of performing to
process the current TravelVia action.

</div>

<span id="addActorNotifyItem"></span>

`addActorNotifyItem (obj)`

[actor.t](../file/actor.t.html)\[[8487](../source/actor.t.html#8487)\]

<div class="desc">

Add an item to our registered notification items. These items are to
receive notifications when we're the actor performing a command.

Items can be added here if they must be notified of actions performed by
the actor even when the items aren't connected by containment with the
actor at the time of the action. All items connected to the actor by
containment are automatically notified of each action; only items that
must receive notification even when not in scope need to be registered
here.

</div>

<span id="addBusyTime"></span>

`addBusyTime (action, units)`

[actor.t](../file/actor.t.html)\[[9154](../source/actor.t.html#9154)\]

<div class="desc">

Add busy time. An action calls this when we are the actor performing the
action, and the action consumes game time. This marks us as busy for the
given time units.

</div>

<span id="addFirstPendingAction"></span>

`addFirstPendingAction (startOfSentence, issuer, action, [objs])`

[actor.t](../file/actor.t.html)\[[9785](../source/actor.t.html#9785)\]

<div class="desc">

Insert a resolved action at the start of our pending command list. The
new command is specified as a resolved Action object; it is added before
any commands already in our list.

</div>

<span id="addFirstPendingCommand"></span>

`addFirstPendingCommand (startOfSentence, issuer, toks)`

[actor.t](../file/actor.t.html)\[[9761](../source/actor.t.html#9761)\]

<div class="desc">

Insert a command at the head of our pending command list. The new
command is specified as a list of tokens to parse, and it is inserted
into our pending command list before any commands already in the list.

</div>

<span id="addPendingAction"></span>

`addPendingAction (startOfSentence, issuer, action, [objs])`

[actor.t](../file/actor.t.html)\[[9773](../source/actor.t.html#9773)\]

<div class="desc">

Add a resolved action to our pending command list. The new command is
specified as a resolved Action object; it is added after any commands
already in our list.

</div>

<span id="addPendingCommand"></span>

`addPendingCommand (startOfSentence, issuer, toks)`

[actor.t](../file/actor.t.html)\[[9748](../source/actor.t.html#9748)\]

<div class="desc">

Add a command to our pending command list. The new command is specified
as a list of tokens to be parsed, and it is added after any commands
already in our pending list.

</div>

<span id="addToAgenda"></span>

`addToAgenda (item)`

[actor.t](../file/actor.t.html)\[[6932](../source/actor.t.html#6932)\]

<div class="desc">

add an agenda item

</div>

<span id="addToContents"></span>

`addToContents (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7296](../source/actor.t.html#7296)\]

<div class="desc">

add an object to my contents

</div>

<span id="adjustLookAroundTable"></span>

`adjustLookAroundTable (tab, pov, actor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7443](../source/actor.t.html#7443)\]

<div class="desc">

Adjust a table of visible objects for 'look around'. By default, we
remove any explicitly excluded objects.

</div>

<span id="afterAction"></span>

`afterAction ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8382](../source/actor.t.html#8382)\]

<div class="desc">

Receive notification that a command has just been carried out in our
presence.

</div>

<span id="afterTravel"></span>

`afterTravel (traveler, connector)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8411](../source/actor.t.html#8411)\]

<div class="desc">

receive a notification that someone has just traveled here

</div>

<span id="aName"></span>

`aName ( )`

[en_us.t](../file/en_us.t.html)\[[2316](../source/en_us.t.html#2316)\]

<div class="desc">

Get the name with an indefinite article. Use the same rules of referral
person as for definite articles.

</div>

<span id="aNameObj"></span>

`aNameObj ( )`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2319](../source/en_us.t.html#2319)\]

<div class="desc">

aName in objective case

</div>

<span id="beforeAction"></span>

`beforeAction ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8349](../source/actor.t.html#8349)\]

<div class="desc">

Receive notification that a command is being carried out in our
presence.

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8389](../source/actor.t.html#8389)\]

<div class="desc">

receive a notification that someone is about to travel

</div>

<span id="bestVisualInfo"></span>

`bestVisualInfo (obj)`

[actor.t](../file/actor.t.html)\[[8559](../source/actor.t.html#8559)\]

<div class="desc">

Get the best (most transparent) sense information for one of our visual
senses to the given object.

</div>

<span id="calcScheduleOrder"></span>

`calcScheduleOrder ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9031](../source/actor.t.html#9031)\]

<div class="desc">

calculate the scheduling order

</div>

<span id="canBeTalkedTo"></span>

`canBeTalkedTo (talker, sense, info)`

[actor.t](../file/actor.t.html)\[[7663](../source/actor.t.html#7663)\]

<div class="desc">

Determine whether or not I can understand an attempt by another actor to
talk to me. 'talker' is the actor doing the talking. 'sense' is the
sense we're testing; this will always be a sense in our
communicationSenses list, and will always be a communications sense we
have in common with the other actor. 'info' is a SenseInfo object giving
information on the clarity of the sense path to the other actor.

We return true if we can understand the communication, nil if not. There
is no middle ground where we can partially understand; we can either
understand or not.

Note that this routine is concerned only with our ability to sense the
communication. The result here should NOT pay any attention to whether
or not we can actually communicate given a clear sense path - for
example, this routine should not reflect whether or not we have a spoken
language in common with the other actor.

This is a service method for canTalkTo. This is broken out as a separate
method so that individual actors can override the necessary conditions
for communications in particular senses.

</div>

<span id="canHear"></span>

`canHear (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8685](../source/actor.t.html#8685)\]

<div class="desc">

Determine if I can hear the given object.

</div>

<span id="cannotFollow"></span>

`cannotFollow ( )`

[actor.t](../file/actor.t.html)\[[9247](../source/actor.t.html#9247)\]

<div class="desc">

Handle a situation where we're trying to follow an actor but can't. By
default, this simply cancels our follow mode.

Actors might want to override this to be more tolerant. For example, an
actor might want to wait until five turns elapse to give up on
following, in case the target actor returns after a brief digression; or
an actor could stay in follow mode until it received other instructions,
or found something better to do.

</div>

<span id="cannotRespondToCommand"></span>

`cannotRespondToCommand (issuingActor, messageProp, args)`

[actor.t](../file/actor.t.html)\[[9912](../source/actor.t.html#9912)\]

<div class="desc">

We have a parser error to report to the player, but we cannot respond at
the moment because the player is not capable of hearing us (there is no
sense path for our communications senses from us to the player actor).
Defer reporting the message until later.

</div>

<span id="canOwn"></span>

`canOwn (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6354](../source/actor.t.html#6354)\]

<div class="desc">

Can I own the given object? By default, an actor can own anything.

</div>

<span id="canSee"></span>

`canSee (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8665](../source/actor.t.html#8665)\]

<div class="desc">

Determine if I can see the given object. This returns true if the object
can be sensed at all in one of my sight-like senses, nil if not.

</div>

<span id="canSmell"></span>

`canSmell (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8705](../source/actor.t.html#8705)\]

<div class="desc">

Determine if I can smell the given object.

</div>

<span id="canTalkTo"></span>

`canTalkTo (actor)`

[actor.t](../file/actor.t.html)\[[7592](../source/actor.t.html#7592)\]

<div class="desc">

Determine if I can communicate with the given character via a natural,
default form of communication that we share with the other character.
This determines if I can talk to the other character. We'll return true
if I can talk to the other actor, nil if not.

In order for the player character to issue a command to a non-player
character (as in "bob, go east"), the NPC must be able to sense the PC
via at least one communication sense that the two actors have in common.

Likewise, in order for a non-player character to say something to the
player, the player must be able to sense the NPC via at least one
communication sense that the two actors have in common.

</div>

<span id="checkBulkChangeWithin"></span>

`checkBulkChangeWithin (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7252](../source/actor.t.html#7252)\]

<div class="desc">

Check a bulk change of one of my direct contents.

</div>

<span id="checkDarkTravel"></span>

`checkDarkTravel (dest, connector)`

[actor.t](../file/actor.t.html)\[[6568](../source/actor.t.html#6568)\]

<div class="desc">

Check for travel in the dark. If we're in a dark room, and our
destination is a dark room, ask the connector for guidance.

Travel connectors normally call this before invoking our travelTo()
method to carry out the travel. The darkness check usually must be made
before any barrier checks.

</div>

<span id="checkMovingTravelerInto"></span>

`checkMovingTravelerInto (room, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6468](../source/actor.t.html#6468)\]

<div class="desc">

Try moving the actor into the given room in preparation for travel,
using pre-condition rules.

</div>

<span id="checkReadyToEnterNestedRoom"></span>

`checkReadyToEnterNestedRoom (dest, allowImplicit)`

[actor.t](../file/actor.t.html)\[[6479](../source/actor.t.html#6479)\]

<div class="desc">

Check to ensure the actor is ready to enter the given nested room, using
pre-condition rules. By default, we'll ask the given nested room to
handle it.

</div>

<span id="checkStagingLocation"></span>

`checkStagingLocation (dest)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6710](../source/actor.t.html#6710)\]

<div class="desc">

use a custom message for cases where we're holding a destination object
for BOARD, ENTER, etc

</div>

<span id="checkTakeFromInventory"></span>

`checkTakeFromInventory (actor, obj)`

[actor.t](../file/actor.t.html)\[[8459](../source/actor.t.html#8459)\]

<div class="desc">

Check to see if we want to allow another actor to take something from my
inventory. By default, we won't allow it - we'll always fail the
command.

</div>

<span id="checkWaitingForActor"></span>

`checkWaitingForActor ( )`

[actor.t](../file/actor.t.html)\[[9090](../source/actor.t.html#9090)\]

<div class="desc">

Check to see if we're waiting for another actor to do something. Return
true if so, nil if not. If we've been waiting for another actor, and the
actor has finished the task we've been waiting for since the last time
we checked, we'll clean up our internal state relating to the wait and
return nil.

</div>

<span id="conjugateRegularVerb"></span>

`conjugateRegularVerb (verb)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[2265](../source/en_us.t.html#2265)\]

<div class="desc">

Conjugate a regular verb in the present or past tense for our person and
number.

In the present tense, this is pretty easy: we add an 's' for the third
person singular, and leave the verb unchanged for every other case. The
only complication is that we must check some special cases to add the -s
suffix: -y -\> -ies, -o -\> -oes.

In the past tense, we use the inherited handling since the past tense
ending doesn't vary with person.

</div>

<span id="conversedThisTurn"></span>

`conversedThisTurn ( )`

[actor.t](../file/actor.t.html)\[[6845](../source/actor.t.html#6845)\]

<div class="desc">

Did we engage in any conversation on the current turn? This can be used
as a quick check in background activity scripts when we want to run a
step only in the absence of any conversation on the same turn.

</div>

<span id="copyPronounAntecedentsFrom"></span>

`copyPronounAntecedentsFrom (issuer)`

[actor.t](../file/actor.t.html)\[[10034](../source/actor.t.html#10034)\]

<div class="desc">

Copy pronoun antecedents from the given actor. This should be called
whenever an actor issues a command to us, so that pronouns in the
command are properly resolved relative to the issuer.

</div>

<span id="defaultAskForResponse"></span>

`defaultAskForResponse (byActor, obj)`

[actor.t](../file/actor.t.html)\[[10390](../source/actor.t.html#10390)\]

<div class="desc">

the default response for ASK FOR

</div>

<span id="defaultAskResponse"></span>

`defaultAskResponse (fromActor, topic)`

[actor.t](../file/actor.t.html)\[[10362](../source/actor.t.html#10362)\]

<div class="desc">

Show the default answer to a question - this is called when we're the
actor in ASK \<actor\> ABOUT \<topic\>, and we can't find a more
specific response for the given topic.

By default, we'll show the basic "there's no response" message. This
isn't a very good message in most cases, because it makes an actor
pretty frustratingly un-interactive, which gives the actor the
appearance of a cardboard cut-out. But there's not much better that the
library can do; the potential range of actors makes a more specific
default response impossible. If the default response were "I don't know
about that," it wouldn't work very well if the actor is someone who only
speaks Italian. So, the best we can do is this generally rather poor
default. But that doesn't mean that authors should resign themselves to
a poor default answer; instead, it means that actors should take care to
override this when defining an actor, because it's usually possible to
find a much better default for a \*specific\* actor.

The \*usual\* way of providing a default response is to define a
DefaultAskTopic (or a DefaultAskTellTopic) and put it in the actor's
topic database.

</div>

<span id="defaultCommandResponse"></span>

`defaultCommandResponse (fromActor, topic)`

[actor.t](../file/actor.t.html)\[[10402](../source/actor.t.html#10402)\]

<div class="desc">

default refusal of a command

</div>

<span id="defaultConvResponse"></span>

`defaultConvResponse (actor, topic, convType)`

[actor.t](../file/actor.t.html)\[[10307](../source/actor.t.html#10307)\]

<div class="desc">

Show a default response to a conversational action. By default, we'll
show the default response for our conversation type.

</div>

<span id="defaultGiveResponse"></span>

`defaultGiveResponse (byActor, topic)`

[actor.t](../file/actor.t.html)\[[10386](../source/actor.t.html#10386)\]

<div class="desc">

the default response for GIVE TO

</div>

<span id="defaultGoodbyeResponse"></span>

`defaultGoodbyeResponse (actor)`

[actor.t](../file/actor.t.html)\[[10336](../source/actor.t.html#10336)\]

<div class="desc">

show our default goodbye message

</div>

<span id="defaultGreetingResponse"></span>

`defaultGreetingResponse (actor)`

[actor.t](../file/actor.t.html)\[[10332](../source/actor.t.html#10332)\]

<div class="desc">

Show our default greeting message - this is used when the given another
actor greets us with HELLO or TALK TO, and we don't otherwise handle it
(such as via a topic database entry).

By default, we'll just show "there's no response" as a default message.
We'll show this in default mode, so that if the caller is going to show
a list of suggested conversation topics (which the 'hello' and 'talk to'
commands will normally try to do), the topic list will override the
"there's no response" default. In other words, we'll have one of these
two types of exchanges:

  
\>talk to bob  
There's no response

  
\>talk to bill  
You could ask him about the candle, the book, or the bell, or  
tell him about the crypt.

</div>

<span id="defaultNoResponse"></span>

`defaultNoResponse (fromActor)`

[actor.t](../file/actor.t.html)\[[10398](../source/actor.t.html#10398)\]

<div class="desc">

default response to being told NO

</div>

<span id="defaultShowResponse"></span>

`defaultShowResponse (byActor, topic)`

[actor.t](../file/actor.t.html)\[[10382](../source/actor.t.html#10382)\]

<div class="desc">

the default response for SHOW TO

</div>

<span id="defaultTellResponse"></span>

`defaultTellResponse (fromActor, topic)`

[actor.t](../file/actor.t.html)\[[10378](../source/actor.t.html#10378)\]

<div class="desc">

Show the default response to being told of a topic - this is called when
we're the actor in TELL \<actor\> ABOUT \<topic\>, and we can't find a
more specific response for the topic.

As with defaultAskResponse, this should almost always be overridden by
each actor, since the default response ("there's no response") doesn't
make the actor seem very dynamic.

The usual way of providing a default response is to define a
DefaultTellTopic (or a DefaultAskTellTopic) and put it in the actor's
topic database.

</div>

<span id="defaultYesResponse"></span>

`defaultYesResponse (fromActor)`

[actor.t](../file/actor.t.html)\[[10394](../source/actor.t.html#10394)\]

<div class="desc">

default response to being told YES

</div>

<span id="descViaActorContainer"></span>

`descViaActorContainer (prop, contToIgnore)`

[actor.t](../file/actor.t.html)\[[6171](../source/actor.t.html#6171)\]

<div class="desc">

Describe the actor via the "nominal actor container." The nominal
container is determined by our direct location.

'contToIgnore' is a container to ignore. If our nominal container is the
same as this object, we'll generate a description without a mention of a
container at all.

The reason we have the 'contToIgnore' parameter is that the caller might
already have reported our general location, and now merely wants to add
that we're standing or standing or whatever. In these cases, if we were
to say that we're sitting on or standing on that same object, it would
be redundant information: "Bob is in the garden, sitting in the garden."
The 'contToIgnore' parameter tells us the object that the caller has
already mentioned as our general location so that we don't re-report the
same thing. We need to know the actual object, rather than just the fact
that the caller mentioned a general location, because our general
location and the specific place we're standing or sitting or whatever
might not be the same: "Bob is in the garden, sitting in the lawn
chair."

</div>

<span id="disembark"></span>

`disembark ( )`

[actor.t](../file/actor.t.html)\[[7387](../source/actor.t.html#7387)\]

<div class="desc">

Disembark. This is used by the 'Get out' action to carry out the
command. By default, we'll let the room handle it.

</div>

<span id="distantSpecialDesc"></span>

`distantSpecialDesc ( )`

[actor.t](../file/actor.t.html)\[[6051](../source/actor.t.html#6051)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(AskAbout)"></span>

`dobjFor(AskAbout)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10230](../source/actor.t.html#10230)\]

<div class="desc">

also mark the visible contents of the object as having been seen

</div>

<span id="dobjFor(AskFor)"></span>

`dobjFor(AskFor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10123](../source/actor.t.html#10123)\]

<div class="desc">

cannot kiss oneself

</div>

<span id="dobjFor(Drop)"></span>

`dobjFor(Drop)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10073](../source/actor.t.html#10073)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Kiss)"></span>

`dobjFor(Kiss)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10112](../source/actor.t.html#10112)\]

<div class="desc">

do the normal work

</div>

<span id="dobjFor(PutIn)"></span>

`dobjFor(PutIn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10092](../source/actor.t.html#10092)\]

<div class="desc">

treat PUT SELF IN FOO as GET IN FOO

</div>

<span id="dobjFor(PutOn)"></span>

`dobjFor(PutOn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10074](../source/actor.t.html#10074)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PutUnder)"></span>

`dobjFor(PutUnder)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10075](../source/actor.t.html#10075)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Take)"></span>

`dobjFor(Take)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10072](../source/actor.t.html#10072)\]

<div class="desc">

For the basic physical manipulation verbs (TAKE, DROP, PUT ON, etc),
it's illogical to operate on myself, so check for this in verify().
Otherwise, handle these as we would ordinary objects, since we might be
able to manipulate other actors in the normal manner, especially actors
small enough that we can pick them up.

</div>

<span id="dobjFor(TalkTo)"></span>

`dobjFor(TalkTo)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10141](../source/actor.t.html#10141)\]

<div class="desc">

let the state object handle it

</div>

<span id="dobjFor(TellAbout)"></span>

`dobjFor(TellAbout)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10248](../source/actor.t.html#10248)\]

<div class="desc">

let our state object handle it

</div>

<span id="dobjFor(Throw)"></span>

`dobjFor(Throw)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10076](../source/actor.t.html#10076)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(ThrowAt)"></span>

`dobjFor(ThrowAt)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10077](../source/actor.t.html#10077)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(ThrowDir)"></span>

`dobjFor(ThrowDir)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10078](../source/actor.t.html#10078)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(ThrowTo)"></span>

`dobjFor(ThrowTo)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10079](../source/actor.t.html#10079)\]

<div class="desc">

*no description available*

</div>

<span id="endConversation"></span>

`endConversation ( )`

[actor.t](../file/actor.t.html)\[[5897](../source/actor.t.html#5897)\]

<div class="desc">

Break off our current conversation, of the NPC's own volition. This is
the opposite number of initiateConversation: this causes the NPC to
effectively say BYE on its own, rather than waiting for the PC to decide
to end the conversation.

This call is mostly useful when the actor's current state is an
InConversationState, since the main function of this routine is to
switch to an out-of-conversation state.

</div>

<span id="examineListContents"></span>

`examineListContents ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6037](../source/actor.t.html#6037)\]

<div class="desc">

examine my contents specially

</div>

<span id="examineStatus"></span>

`examineStatus ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5978](../source/actor.t.html#5978)\]

<div class="desc">

show our status

</div>

<span id="excludeFromLookAround"></span>

`excludeFromLookAround (obj)`

[actor.t](../file/actor.t.html)\[[7457](../source/actor.t.html#7457)\]

<div class="desc">

Add an object to the 'look around' exclusion list. Returns true if the
object was already in the list, nil if not.

</div>

<span id="executeActorTurn"></span>

`executeActorTurn ( )`

[actor.t](../file/actor.t.html)\[[9297](../source/actor.t.html#9297)\]

<div class="desc">

The main processing for an actor's turn. In most cases, subclasses
should override this method (rather than executeTurn) to specialize an
actor's turn processing.

</div>

<span id="executeAgenda"></span>

`executeAgenda ( )`

[actor.t](../file/actor.t.html)\[[6965](../source/actor.t.html#6965)\]

<div class="desc">

Execute the next item in our agenda, if there are any items in the
agenda that are ready to execute. We'll return true if we found an item
to execute, nil if not.

</div>

<span id="executeTurn"></span>

`executeTurn ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[9268](../source/actor.t.html#9268)\]

<div class="desc">

Execute one "turn" - this is a unit of time passing. The player
character generally is allowed to execute one command in the course of a
turn; a non-player character with a programmed task can perform an
increment of the task.

We set up an ActorTurnAction environment and invoke our
executeActorTurn() method. In most cases, subclasses should override
executeActorTurn() rather than this method, since overriding
executeTurn() directly will lose the action environment.

</div>

<span id="findVisualObstructor"></span>

`findVisualObstructor (obj)`

[actor.t](../file/actor.t.html)\[[8725](../source/actor.t.html#8725)\]

<div class="desc">

Find the object that prevents us from seeing the given object.

</div>

<span id="forEachTravelingActor"></span>

`forEachTravelingActor (func)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6424](../source/actor.t.html#6424)\]

<div class="desc">

invoke a callback on each actor traveling with the traveler

</div>

<span id="forgetPossAnaphors"></span>

`forgetPossAnaphors ( )`

[actor.t](../file/actor.t.html)\[[10022](../source/actor.t.html#10022)\]

<div class="desc">

forget the possessive anaphors

</div>

<span id="getActionMessageObj"></span>

`getActionMessageObj ( )`

[actor.t](../file/actor.t.html)\[[9835](../source/actor.t.html#9835)\]

<div class="desc">

Get the library message object for action responses. This is used to
generate library responses to verbs.

</div>

<span id="getActorNotifyList"></span>

`getActorNotifyList ( )`

[actor.t](../file/actor.t.html)\[[8470](../source/actor.t.html#8470)\]

<div class="desc">

Build a list of the objects that are explicitly registered to receive
notification when I'm the actor in a command.

</div>

<span id="getBulkHeld"></span>

`getBulkHeld ( )`

[actor.t](../file/actor.t.html)\[[7030](../source/actor.t.html#7030)\]

<div class="desc">

Calculate the amount of bulk I'm holding directly. By default, we'll
simply add up the "actor-encumbering bulk" of each of our direct
contents.

Note that we don't differentiate here based on whether or not an item is
being worn, or anything else - we deliberately leave such distinctions
up to the getEncumberingBulk routine, so that only the objects are in
the business of deciding how bulky they are under different
circumstances.

</div>

<span id="getCurrentInterlocutor"></span>

`getCurrentInterlocutor ( )`

[actor.t](../file/actor.t.html)\[[6765](../source/actor.t.html#6765)\]

<div class="desc">

Get the current interlocutor. By default, we'll address new
conversational commands (ASK ABOUT, TELL ABOUT, SHOW TO) to the last
conversational partner, if that actor is still within range.

</div>

<span id="getDefaultInterlocutor"></span>

`getDefaultInterlocutor ( )`

[actor.t](../file/actor.t.html)\[[6784](../source/actor.t.html#6784)\]

<div class="desc">

Get the default interlocutor. If there's a current interlocutor, and we
can still talk to that actor, then that's the default interlocutor. If
not, we'll return whatever actor is the default for a TALK TO command.
Note that TALK TO won't necessarily have a default actor; if it doesn't,
we'll simply return nil.

</div>

<span id="getDropDestination"></span>

`getDropDestination (objToDrop, path)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7490](../source/actor.t.html#7490)\]

<div class="desc">

Get the location into which objects should be moved when the actor drops
them with an explicit 'drop' command. By default, we return the drop
destination of our current container.

</div>

<span id="getFollowables"></span>

`getFollowables ( )`

[actor.t](../file/actor.t.html)\[[7823](../source/actor.t.html#7823)\]

<div class="desc">

Get the list of objects I can follow. This is a list of all of the
objects which I have seen departing a location - these are all in scope
for 'follow' commands.

</div>

<span id="getFollowInfo"></span>

`getFollowInfo (obj)`

[actor.t](../file/actor.t.html)\[[7918](../source/actor.t.html#7918)\]

<div class="desc">

Get information on what to do to make this actor follow the given
object. This returns a FollowInfo object that reports our last knowledge
of the given object's location and departure, or nil if we don't know
anything about how to follow the actor.

</div>

<span id="getLookAroundName"></span>

`getLookAroundName ( )`

[actor.t](../file/actor.t.html)\[[7432](../source/actor.t.html#7432)\]

<div class="desc">

Get my "look around" location name as a string. This returns a string
containing the location name that we display in the status line or at
the start of a "look around" description of my location.

</div>

<span id="getParserDeferredMessageObj"></span>

`getParserDeferredMessageObj ( )`

[actor.t](../file/actor.t.html)\[[9829](../source/actor.t.html#9829)\]

<div class="desc">

Get the deferred library message object for a parser message addressed
to the player character. We only use this to generate messages deferred
from non-player characters.

</div>

<span id="getParserMessageObj"></span>

`getParserMessageObj ( )`

[actor.t](../file/actor.t.html)\[[9807](../source/actor.t.html#9807)\]

<div class="desc">

get the library message object for a parser message addressed to the
player character

</div>

<span id="getPossAnaphor"></span>

`getPossAnaphor (typ)`

[actor.t](../file/actor.t.html)\[[10019](../source/actor.t.html#10019)\]

<div class="desc">

get a possessive anaphor value

</div>

<span id="getPronounAntecedent"></span>

`getPronounAntecedent (typ)`

[actor.t](../file/actor.t.html)\[[9995](../source/actor.t.html#9995)\]

<div class="desc">

look up a pronoun's value

</div>

<span id="getPushTraveler"></span>

`getPushTraveler (obj)`

[actor.t](../file/actor.t.html)\[[6401](../source/actor.t.html#6401)\]

<div class="desc">

Get the "push traveler" for the actor. This is the nominal traveler that
we want to use when the actor enters a command like PUSH BOX NORTH.
'obj' is the object we're trying to push.

</div>

<span id="getTopicOwner"></span>

`getTopicOwner ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8261](../source/actor.t.html#8261)\]

<div class="desc">

we are the owner of any TopicEntry objects contained within us

</div>

<span id="getTraveler"></span>

`getTraveler (conn)`

[actor.t](../file/actor.t.html)\[[6381](../source/actor.t.html#6381)\]

<div class="desc">

Get the object that's actually going to move when this actor travels via
the given connector. In most cases this is simply the actor; but when
the actor is in a vehicle, travel commands move the vehicle, not the
actor: the actor stays in the vehicle while the vehicle moves to a new
location. We determine this by asking our immediate location what it
thinks about the situation.

If we have a special traveler explicitly set, it overrides the traveler
indicated by the location.

</div>

<span id="getVisualAmbient"></span>

`getVisualAmbient ( )`

[actor.t](../file/actor.t.html)\[[8505](../source/actor.t.html#8505)\]

<div class="desc">

Get the ambient light level in the visual senses at this actor. This is
the ambient level at the actor.

</div>

<span id="getWeightHeld"></span>

`getWeightHeld ( )`

[actor.t](../file/actor.t.html)\[[7056](../source/actor.t.html#7056)\]

<div class="desc">

Calculate the total weight I'm holding. By default, we'll add up the
"actor-encumbering weight" of each of our direct contents.

Note that we deliberately only consider our direct contents. If any of
the items we are directly holding contain further items,
getEncumberingWeight will take their weights into account; this frees us
from needing any special knowledge of the internal structure of any
items we're holding, and puts that knowledge in the individual items
where it belongs.

</div>

<span id="goToSleep"></span>

`goToSleep ( )`

[actor.t](../file/actor.t.html)\[[7310](../source/actor.t.html#7310)\]

<div class="desc">

Go to sleep. This is used by the 'Sleep' action to carry out the
command. By default, we simply say that we're not sleepy; actors can
override this to cause other actions.

</div>

<span id="handleConversation"></span>

`handleConversation (actor, topic, convType)`

[actor.t](../file/actor.t.html)\[[10293](../source/actor.t.html#10293)\]

<div class="desc">

Handle a conversational command. All of the conversational actions
(HELLO, GOODBYE, YES, NO, ASK ABOUT, ASK FOR, TELL ABOUT, SHOW TO, GIVE
TO) are routed here when we're the target of the action (for example,
we're BOB in ASK BOB ABOUT TOPIC) AND the ActorState doesn't want to
handle the action.

</div>

<span id="hasSeen"></span>

`hasSeen (obj)`

[actor.t](../file/actor.t.html)\[[8161](../source/actor.t.html#8161)\]

<div class="desc">

determine if I've ever seen the given object

</div>

<span id="hideFromAll"></span>

`hideFromAll (action)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5922](../source/actor.t.html#5922)\]

<div class="desc">

Hide actors from 'all' by default. The kinds of actions that normally
apply to 'all' and the kinds that normally apply to actors have pretty
low overlap.

If a particular actor looks a lot like an inanimate object, it might
want to override this to participate in 'all' for most or all actions.

</div>

<span id="hideFromDefault"></span>

`hideFromDefault (action)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5929](../source/actor.t.html#5929)\]

<div class="desc">

don't hide actors from defaulting, though - it's frequently convenient
and appropriate to assume an actor by default, especially for commands
like GIVE TO and SHOW TO

</div>

<span id="idleTurn"></span>

`idleTurn ( )`

[actor.t](../file/actor.t.html)\[[9168](../source/actor.t.html#9168)\]

<div class="desc">

When it's our turn and we don't have any command to perform, we'll call
this routine, which can perform a scripted operation if desired.

</div>

<span id="impliedCommandMode"></span>

`impliedCommandMode ( )`

[actor.t](../file/actor.t.html)\[[6273](../source/actor.t.html#6273)\]

<div class="desc">

Implicit command handling style for this actor. There are two styles for
handling implied commands: "player" and "NPC", indicated by the enum
codes ModePlayer and ModeNPC, respectively.

In "player" mode, each implied command is announced with a description
of the command to be performed; DEFAULT responses are suppressed; and
failures are shown. Furthermore, interactive requests for more
information from the parser are allowed. Transcripts like this result:

\>open door  
(first opening the door)  
(first unlocking the door)  
What do you want to unlock it with?

In "NPC" mode, implied commands are treated as complete and separate
commands. They are not announced; default responses are shown; failures
are NOT shown; and interactive requests for more information are not
allowed. When an implied command fails in NPC mode, the parser acts as
though the command had never been attempted.

By default, we return ModePlayer if we're the player character, ModeNPC
if not (thus the respective names of the modes). Some authors might
prefer to use "player mode" for NPC's as well as for the player
character, which is why the various parts of the parser that care about
this mode consult this method rather than simply testing the PC/NPC
status of the actor.

</div>

<span id="initializeActor"></span>

`initializeActor ( )`

[actor.t](../file/actor.t.html)\[[8932](../source/actor.t.html#8932)\]

<div class="desc">

Perform library pre-initialization on the actor

</div>

<span id="initiateConversation"></span>

`initiateConversation (state, node)`

[actor.t](../file/actor.t.html)\[[5818](../source/actor.t.html#5818)\]

<div class="desc">

Initiate a conversation with the player character. This lets the NPC
initiate a conversation, in response to something the player character
does, or as part of the NPC's scripted activity. This is only be used
for situations where the NPC initiates the conversation - if the player
character initiates conversation with TALK TO, ASK, TELL, etc., we
handle the conversation through our normal handlers for those commands.

'state' is the ActorState to switch to for the conversation. This will
normally be an InConversationState object, but doesn't have to be.

You can pass nil for 'state' to use the current state's implied
conversational state. The implied conversational state of a
ConversationReadyState is the associated InConversationState; the
implied conversation state of any other state is simply the same state.

'node' is a ConvNode object, or a string naming a ConvNode object. We'll
make this our current conversation node. A valid conversation node is
required because we use this to generate the initial NPC greeting of the
conversation. In most cases, when the NPC initiates a conversation, it's
because the NPC wants to ask a question or otherwise say something
specific, so there should always be a conversational context implied,
thus the need for a ConvNode. If there's no need for a conversational
context, the NPC script code might just as well display the
conversational exchange as a plain old message, and not bother going to
all this trouble.

</div>

<span id="initiateTopic"></span>

`initiateTopic (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5853](../source/actor.t.html#5853)\]

<div class="desc">

Initiate a conversation based on the given simulation object. We'll look
for an InitiateTopic matching the given object, and if we can find one,
we'll show its topic response.

</div>

<span id="inventorySense"></span>

`inventorySense (sense, lister)`

[actor.t](../file/actor.t.html)\[[8890](../source/actor.t.html#8890)\]

<div class="desc">

Add to an inventory description a list of things we notice through a
specific sense.

</div>

<span id="inventorySenseInfoTable"></span>

`inventorySenseInfoTable ( )`

[actor.t](../file/actor.t.html)\[[8789](../source/actor.t.html#8789)\]

<div class="desc">

Build a lookup table of the objects that can be sensed for the purposes
of taking inventory. We'll include everything in the normal visual sense
table, plus everything directly held.

</div>

<span id="iobjFor(GiveTo)"></span>

`iobjFor(GiveTo)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10159](../source/actor.t.html#10159)\]

<div class="desc">

handle it as a 'hello' topic

</div>

<span id="iobjFor(ShowTo)"></span>

`iobjFor(ShowTo)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10183](../source/actor.t.html#10183)\]

<div class="desc">

let the state object handle it

</div>

<span id="iobjFor(ThrowTo)"></span>

`iobjFor(ThrowTo)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[10082](../source/actor.t.html#10082)\]

<div class="desc">

customize the message for THROW TO \<actor\>

</div>

<span id="isActorTraveling"></span>

`isActorTraveling (actor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6417](../source/actor.t.html#6417)\]

<div class="desc">

is an actor traveling with us?

</div>

<span id="isLikelyTopic"></span>

`isLikelyTopic (obj)`

[actor.t](../file/actor.t.html)\[[8254](../source/actor.t.html#8254)\]

<div class="desc">

Determine if the given object is a likely topic for a conversational
action performed by this actor. By default, we'll return true if the
topic is known, nil if not.

</div>

<span id="isLocationLit"></span>

`isLocationLit ( )`

[actor.t](../file/actor.t.html)\[[8532](../source/actor.t.html#8532)\]

<div class="desc">

Determine if my location is lit for my sight-like senses.

</div>

<span id="isPlayerChar"></span>

`isPlayerChar ( )`

[actor.t](../file/actor.t.html)\[[6241](../source/actor.t.html#6241)\]

<div class="desc">

determine if I'm the player character

</div>

<span id="knowsAbout"></span>

`knowsAbout (obj)`

[actor.t](../file/actor.t.html)\[[8195](../source/actor.t.html#8195)\]

<div class="desc">

Determine if I know about the given object. I know about an object if
it's specifically marked as known to me; I also know about the object if
I can see it now, or if I've ever seen it in the past.

</div>

<span id="knowsTopic"></span>

`knowsTopic (obj)`

[actor.t](../file/actor.t.html)\[[8243](../source/actor.t.html#8243)\]

<div class="desc">

Determine if the actor recognizes the given object as a "topic," which
is an object that represents some knowledge the actor can use in
conversations, consultations, and the like.

By default, we'll recognize any Topic object marked as known, and we'll
recognize any game object for which our knowsAbout(obj) returns true.
Games might wish to override this in some cases to limit or expand an
actor's knowledge according to what the actor has experienced of the
setting or story. Note that it's often easier to control actor knowledge
using the lower-level knowsAbout() and setKnowsAbout() methods, though.

</div>

<span id="listActorPosture"></span>

`listActorPosture (povActor)`

[actor.t](../file/actor.t.html)\[[7356](../source/actor.t.html#7356)\]

<div class="desc">

Describe the actor as part of the EXAMINE description of a nested room
containing the actor. 'povActor' is the actor doing the looking.

</div>

<span id="lookAround"></span>

`lookAround (verbose)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7413](../source/actor.t.html#7413)\]

<div class="desc">

Display a description of the actor's location from the actor's point of
view.

If 'verbose' is true, then we'll show the full description in all cases.
Otherwise, we'll show the full description if the actor hasn't seen the
location before, or the terse description if the actor has previously
seen the location.

</div>

<span id="makePosture"></span>

`makePosture (newPosture)`

[actor.t](../file/actor.t.html)\[[7398](../source/actor.t.html#7398)\]

<div class="desc">

Set our posture to the given status. By default, we'll simply set our
posture property to the new status, but actors can override this to
handle side effects of the change.

</div>

<span id="meetsObjHeld"></span>

`meetsObjHeld (actor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5936](../source/actor.t.html#5936)\]

<div class="desc">

We meet the objHeld precondition for ourself - that is, for any verb
that requires holding an object, we can be considered to be holding
ourself.

</div>

<span id="mustMoveObjInto"></span>

`mustMoveObjInto (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6306](../source/actor.t.html#6306)\]

<div class="desc">

desribe our containment of an object as carrying the object

</div>

<span id="nonIdleTurn"></span>

`nonIdleTurn ( )`

[actor.t](../file/actor.t.html)\[[9224](../source/actor.t.html#9224)\]

<div class="desc">

Receive notification that this is a non-idle turn. This is called
whenever a command in our pending command queue is about to be executed.

This method need not do anything at all, since the caller will take care
of running the pending command. The purpose of this method is to take
care of any changes an actor wants to make when it receives an explicit
command, as opposed to running its own autonomous activity.

By default, we cancel follow mode if it's in effect. It usually makes
sense for an explicit command to interrupt follow mode; follow mode is
usually started by an explicit command in the first place, so it is
usually sensible for a new command to replace the one that started
follow mode.

</div>

<span id="noteConditionsAfter"></span>

`noteConditionsAfter ( )`

[actor.t](../file/actor.t.html)\[[8972](../source/actor.t.html#8972)\]

<div class="desc">

Note conditions after an action or other event. By default, if we are
still in the same location we were in when noteConditionsBefore() was
last called, and the light/dark status has changed, we'll mention the
change in light/dark status.

</div>

<span id="noteConditionsBefore"></span>

`noteConditionsBefore ( )`

[actor.t](../file/actor.t.html)\[[8959](../source/actor.t.html#8959)\]

<div class="desc">

Note conditions before an action or other event. By default, we note our
location and light/dark status, so that we comment on any change in the
light/dark status after the event if we're still in the same location.

</div>

<span id="noteConsultation"></span>

`noteConsultation (obj)`

[actor.t](../file/actor.t.html)\[[6902](../source/actor.t.html#6902)\]

<div class="desc">

note that we're consulting an item

</div>

<span id="noteConvAction"></span>

`noteConvAction (other)`

[actor.t](../file/actor.t.html)\[[6883](../source/actor.t.html#6883)\]

<div class="desc">

Note that we're taking part in a conversational action with another
character. This is symmetrical - it could mean we're the initiator of
the conversation action or the target. We'll remember the person we're
talking to, and reset our conversation time counters so we know we've
conversed on this turn.

</div>

<span id="noteConversation"></span>

`noteConversation (other)`

[actor.t](../file/actor.t.html)\[[6855](../source/actor.t.html#6855)\]

<div class="desc">

Note that we're performing a conversational command targeting the given
actor. We'll make the actors point at each other with their
'lastInterlocutor' properties. This is called on the character
performing the conversation command: if the player types ASK BOB ABOUT
BOOK, this will be called on the player character actor, with 'other'
set to Bob.

</div>

<span id="noteConversationFrom"></span>

`noteConversationFrom (other)`

[actor.t](../file/actor.t.html)\[[6870](../source/actor.t.html#6870)\]

<div class="desc">

Note that another actor is issuing a conversational command targeting
us. For example, if the player types ASK BOB ABOUT BOOK, then this will
be called on Bob, with the player character actor as 'other'.

</div>

<span id="noteObjectShown"></span>

`noteObjectShown (obj)`

[actor.t](../file/actor.t.html)\[[10215](../source/actor.t.html#10215)\]

<div class="desc">

Note that the given object has been explicitly shown to me. By default,
we'll mark the object and its visible contents as having been seen by
me. This is called whenever we're the target of a SHOW TO or GIVE TO,
since presumably such an explicit act of calling our attention to an
object would make us consider the object as having been seen in the
future.

</div>

<span id="noteSeenBy"></span>

`noteSeenBy (actor, prop)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[8167](../source/actor.t.html#8167)\]

<div class="desc">

receive notification that another actor is observing us

</div>

<span id="notifyIssuerParseFailure"></span>

`notifyIssuerParseFailure (targetActor, messageProp, args)`

[actor.t](../file/actor.t.html)\[[9943](../source/actor.t.html#9943)\]

<div class="desc">

Receive notification that a command we sent to another NPC failed. This
is only called when one NPC sends a command to another NPC; this is
called on the issuer to let the issuer know that the target can't
perform the command because of the given resolution failure.

By default, we don't do anything here, because we don't have any default
code to send a command from one NPC to another. Any custom NPC actor
that sends a command to another NPC actor might want to use this to deal
with problems in processing those commands.

</div>

<span id="notifyParseFailure"></span>

`notifyParseFailure (issuingActor, messageProp, args)`

[actor.t](../file/actor.t.html)\[[9853](../source/actor.t.html#9853)\]

<div class="desc">

Notify an issuer that a command sent to us resulted in a parsing
failure. We are meant to reply to the issuer to let the issuer know
about the problem. messageProp is the libGlobal message property
describing the error, and args is a list with the (varargs) arguments to
the message property.

</div>

<span id="notifyTopicResponse"></span>

`notifyTopicResponse (fromActor, entry)`

[actor.t](../file/actor.t.html)\[[6908](../source/actor.t.html#6908)\]

<div class="desc">

Receive notification that a TopicEntry response in our database is being
invoked. We'll just pass this along to our current state.

</div>

<span id="npcDesc"></span>

`npcDesc ( )`

[actor.t](../file/actor.t.html)\[[6034](../source/actor.t.html#6034)\]

<div class="desc">

Show the description of this actor when this actor is a non-player
character.

This description should include only the constant, fixed description of
the character. Do not include information on what the actor is doing
right now, because that belongs in the ActorState object instead. When
we display the actor's description, we'll show this text, and then we'll
show the ActorState description as well; this combination approach makes
it easier to keep the description synchronized with any scripted
activities the actor is performing.

By default, we'll show this as a "default descriptive report," since it
simply says that there's nothing special to say. However, whenever this
is overridden with an actual description, you shouldn't bother to use
defaultDescReport - simply display the descriptive message directly:

npcDesc = "He's wearing a gorilla costume. "

</div>

<span id="obeyCommand"></span>

`obeyCommand (issuingActor, action)`

[actor.t](../file/actor.t.html)\[[9645](../source/actor.t.html#9645)\]

<div class="desc">

Determine whether or not we want to obey a command from the given actor
to perform the given action. We only get this far when we determine that
it's possible for us to accept a command, given the sense connections
between us and the issuing actor, and given our pending command queue.

When this routine is called, the action has been determined, and the
noun phrases have been resolved. However, we haven't actually started
processing the action yet, so the globals for the noun slots (gDobj,
gIobj, etc) are NOT available. If the routine needs to know which
objects are involved, it must obtain the full list of resolved objects
from the action (using, for example, getResolvedDobjList()).

When there's a list of objects to be processed (as in GET ALL), we
haven't started working on any one of them yet - this check is made once
for the entire command, and applies to the entire list of objects. If
the actor wants to respond specially to individual objects, you can do
that by overriding actorAction() instead of this routine.

This routine should display an appropriate message and return nil if the
command is not to be accepted, and should simply return true to accept
the command.

By default, we'll let our state object handle this.

Note that actors that override this might also need to override
wantsFollowInfo(), since an actor that accepts "follow" commands will
need to keep track of the movements of other actors if it is to carry
out any following.

</div>

<span id="okayPostureChange"></span>

`okayPostureChange ( )`

[actor.t](../file/actor.t.html)\[[7333](../source/actor.t.html#7333)\]

<div class="desc">

Get a default acknowledgment of a change to our posture. This should
acknowledge the posture so that it tells us the current posture. This is
used for a command such as "stand up" from a chair, so that we can
report the appropriate posture status in our acknowledgment; we might
end up being inside another nested container after standing up from the
chair, so we might not simply be standing when we're done.

</div>

<span id="orderingTime"></span>

`orderingTime (targetActor)`

[actor.t](../file/actor.t.html)\[[7733](../source/actor.t.html#7733)\]

<div class="desc">

The amount of time, in game clock units, it takes me to issue an order
to another actor. By default, it takes one unit (which is usually equal
to one turn) to issue a command to another actor. However, if we are
configured to wait for our issued commands to complete in full, the
ordering time is zero; we don't need any extra wait time in this case
because we'll wait the full length of the issued command to begin with.

</div>

<span id="pcDesc"></span>

`pcDesc ( )`

[actor.t](../file/actor.t.html)\[[6011](../source/actor.t.html#6011)\]

<div class="desc">

The default description when we examine this actor and the actor is
serving as the player character. This should generally not include any
temporary status information; just show constant, fixed features.

</div>

<span id="postureDesc"></span>

`postureDesc ( )`

[actor.t](../file/actor.t.html)\[[6003](../source/actor.t.html#6003)\]

<div class="desc">

Show my posture, as part of the full EXAMINE description of this actor.
We'll let our nominal actor container handle it.

</div>

<span id="readyForTurn"></span>

`readyForTurn ( )`

[actor.t](../file/actor.t.html)\[[9049](../source/actor.t.html#9049)\]

<div class="desc">

Determine if we're ready to do something on our turn. We're ready to do
something if we're not waiting for another actor to finish doing
something and either we're the player character or we already have a
pending command in our command queue.

</div>

<span id="referralPerson"></span>

`referralPerson ( )`

[actor.t](../file/actor.t.html)\[[6220](../source/actor.t.html#6220)\]

<div class="desc">

refer to the player character with my player character referral person,
and refer to all other characters in the third person

</div>

<span id="rememberLastDoor"></span>

`rememberLastDoor (obj)`

[actor.t](../file/actor.t.html)\[[6653](../source/actor.t.html#6653)\]

<div class="desc">

Remember the last door I traveled through. We use this information for
disambiguation, to boost the likelihood that an actor that just traveled
through a door is referring to the same door in a subsequent "close"
command.

</div>

<span id="rememberTravel"></span>

`rememberTravel (origin, dest, backConnector)`

[actor.t](../file/actor.t.html)\[[6661](../source/actor.t.html#6661)\]

<div class="desc">

Remember our most recent travel. If we know the back connector (i.e.,
the connector that reverses the travel we're performing), then we'll be
able to accept a GO BACK command to attempt to return to the previous
location.

</div>

<span id="remoteSpecialDesc"></span>

`remoteSpecialDesc (actor)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6052](../source/actor.t.html#6052)\]

<div class="desc">

*no description available*

</div>

<span id="removeActorNotifyItem"></span>

`removeActorNotifyItem (obj)`

[actor.t](../file/actor.t.html)\[[8493](../source/actor.t.html#8493)\]

<div class="desc">

remove an item from the registered notification list

</div>

<span id="removeFromAgenda"></span>

`removeFromAgenda (item)`

[actor.t](../file/actor.t.html)\[[6953](../source/actor.t.html#6953)\]

<div class="desc">

remove an agenda item

</div>

<span id="reverseLastTravel"></span>

`reverseLastTravel ( )`

[actor.t](../file/actor.t.html)\[[6675](../source/actor.t.html#6675)\]

<div class="desc">

Reverse the most recent travel. If we're still within the same
destination we reached in the last travel, and we know the connector we
arrived through (i.e., the "back connector" for the last travel, which
reverses the connector we took to get here), then try traveling via the
connector.

</div>

<span id="sayArriving"></span>

`sayArriving (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6729](../source/actor.t.html#6729)\]

<div class="desc">

Travel arrival/departure messages. Defer to the current state object on
all of these.

</div>

<span id="sayArrivingDir"></span>

`sayArrivingDir (dir, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6739](../source/actor.t.html#6739)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingDownStairs"></span>

`sayArrivingDownStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6753](../source/actor.t.html#6753)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingLocally"></span>

`sayArrivingLocally (dest, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6733](../source/actor.t.html#6733)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingThroughPassage"></span>

`sayArrivingThroughPassage (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6743](../source/actor.t.html#6743)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingUpStairs"></span>

`sayArrivingUpStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6751](../source/actor.t.html#6751)\]

<div class="desc">

*no description available*

</div>

<span id="sayArrivingViaPath"></span>

`sayArrivingViaPath (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6747](../source/actor.t.html#6747)\]

<div class="desc">

*no description available*

</div>

<span id="sayDeparting"></span>

`sayDeparting (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6731](../source/actor.t.html#6731)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingDir"></span>

`sayDepartingDir (dir, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6741](../source/actor.t.html#6741)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingDownStairs"></span>

`sayDepartingDownStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6757](../source/actor.t.html#6757)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingLocally"></span>

`sayDepartingLocally (dest, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6735](../source/actor.t.html#6735)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingThroughPassage"></span>

`sayDepartingThroughPassage (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6745](../source/actor.t.html#6745)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingUpStairs"></span>

`sayDepartingUpStairs (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6755](../source/actor.t.html#6755)\]

<div class="desc">

*no description available*

</div>

<span id="sayDepartingViaPath"></span>

`sayDepartingViaPath (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6749](../source/actor.t.html#6749)\]

<div class="desc">

*no description available*

</div>

<span id="sayGoodbye"></span>

`sayGoodbye (actor)`

[actor.t](../file/actor.t.html)\[[9661](../source/actor.t.html#9661)\]

<div class="desc">

*no description available*

</div>

<span id="sayHello"></span>

`sayHello (actor)`

[actor.t](../file/actor.t.html)\[[9660](../source/actor.t.html#9660)\]

<div class="desc">

Say hello/goodbye/yes/no to the given actor. We'll greet the target
actor is the target actor was specified (i.e., actor != self);
otherwise, we'll greet our current default conversational partner, if we
have one.

</div>

<span id="sayNo"></span>

`sayNo (actor)`

[actor.t](../file/actor.t.html)\[[9663](../source/actor.t.html#9663)\]

<div class="desc">

*no description available*

</div>

<span id="saySpecialTopic"></span>

`saySpecialTopic ( )`

[actor.t](../file/actor.t.html)\[[9715](../source/actor.t.html#9715)\]

<div class="desc">

Handle the XSPCLTOPIC pseudo-command. This command is generated by the
SpecialTopic pre-parser when it recognizes the player's input as
matching an active SpecialTopic's custom syntax. Our job is to route
this back to our current interlocutor's active ConvNode, so that it can
find the SpecialTopic that it matched in pre-parsing and show its
response.

</div>

<span id="sayToActor"></span>

`sayToActor (actor, topic, convType)`

[actor.t](../file/actor.t.html)\[[9666](../source/actor.t.html#9666)\]

<div class="desc">

handle one of the conversational addresses

</div>

<span id="sayTravelingRemotely"></span>

`sayTravelingRemotely (dest, conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6737](../source/actor.t.html#6737)\]

<div class="desc">

*no description available*

</div>

<span id="sayYes"></span>

`sayYes (actor)`

[actor.t](../file/actor.t.html)\[[9662](../source/actor.t.html#9662)\]

<div class="desc">

*no description available*

</div>

<span id="scheduleInitiateConversation"></span>

`scheduleInitiateConversation (state, node, turns)`

[actor.t](../file/actor.t.html)\[[5881](../source/actor.t.html#5881)\]

<div class="desc">

Schedule initiation of conversation. This allows the caller to set up a
conversation to start on a future turn. The conversation will start
after (1) the given number of turns has elapsed, and (2) the player
didn't target this actor with a conversational command on the same turn.
This allows us to set the NPC so that it \*wants\* to start a
conversation, and will do so as soon as it has a chance to get a word
in.

If 'turns' is zero, the conversation can start the next time the actor
takes a turn; so, if this is called during the PC's action processing,
the conversation can start on the same turn. Note that if this is called
during the actor's takeTurn() processing, it won't actually start the
conversation until the next turn, because that's the next time we'll
check the queue. If 'turns' is 1, then the player will get at least one
more command before the conversation will begin, and so on with higher
numbers.

</div>

<span id="scopeList"></span>

`scopeList ( )`

[actor.t](../file/actor.t.html)\[[8594](../source/actor.t.html#8594)\]

<div class="desc">

Build a list of all of the objects of which an actor is aware.

An actor is aware of an object if the object is within reach of the
actor's senses, and has some sort of presence in that sense. Note that
both of these conditions must be true for at least one sense possessed
by the actor; an object that is within earshot, but not within reach of
any other sense, is in scope only if the object is making some kind of
noise.

In addition, objects that the actor is holding (i.e., those contained by
the actor directly) are always in scope, regardless of their
reachability through any sense.

</div>

<span id="scriptedTravelTo"></span>

`scriptedTravelTo (dest)`

[actor.t](../file/actor.t.html)\[[6635](../source/actor.t.html#6635)\]

<div class="desc">

Perform scripted travel to the given adjacent location. This looks for a
directional connector in our current location whose destination is the
given location, and for a corresponding back-connector in the
destination location. If we can find the connectors, we'll perform the
travel using travelTo().

The purpose of this routine is to simplify scripted travel for simple
cases where directional connectors are available for the desired travel.
This routine is NOT suitable for intelligent goal-seeking NPC's who
automatically try to find their own routes, for two reasons. First, this
routine only lets an NPC move to an \*adjacent\* location; it won't try
to find a path between arbitrary locations. Second, this routine is
"omniscient": it doesn't take into account what the NPC knows about the
connections between locations, but simply finds a connector that
actually provides the desired travel.

What this routine \*is\* suitable for are cases where we have a
pre-scripted series of NPC travel actions, where we have a list of rooms
we want the NPC to visit in order. This routine simplifies this type of
scripting by automatically finding the connectors; the script only has
to specify the next location for the NPC to visit.

</div>

<span id="setConvNode"></span>

`setConvNode (node)`

[actor.t](../file/actor.t.html)\[[5729](../source/actor.t.html#5729)\]

<div class="desc">

set the current conversation node

</div>

<span id="setConvNodeReason"></span>

`setConvNodeReason (node, reason)`

[actor.t](../file/actor.t.html)\[[5732](../source/actor.t.html#5732)\]

<div class="desc">

set the current conversation node, with a reason code

</div>

<span id="setCurState"></span>

`setCurState (state)`

[actor.t](../file/actor.t.html)\[[5693](../source/actor.t.html#5693)\]

<div class="desc">

set the current state

</div>

<span id="setHasSeen"></span>

`setHasSeen (obj)`

[actor.t](../file/actor.t.html)\[[8164](../source/actor.t.html#8164)\]

<div class="desc">

mark the object to remember that I've seen it

</div>

<span id="setHer"></span>

`setHer (obj)`

[actor.t](../file/actor.t.html)\[[9983](../source/actor.t.html#9983)\]

<div class="desc">

set the antecedent for the feminine singular ("her")

</div>

<span id="setHim"></span>

`setHim (obj)`

[actor.t](../file/actor.t.html)\[[9977](../source/actor.t.html#9977)\]

<div class="desc">

set the antecedent for the masculine singular ("him")

</div>

<span id="setIt"></span>

`setIt (obj)`

[actor.t](../file/actor.t.html)\[[9971](../source/actor.t.html#9971)\]

<div class="desc">

set the antecedent for the neuter singular pronoun ("it" in English)

</div>

<span id="setKnowsAbout"></span>

`setKnowsAbout (obj)`

[actor.t](../file/actor.t.html)\[[8198](../source/actor.t.html#8198)\]

<div class="desc">

mark the object as known to me

</div>

<span id="setPossAnaphor"></span>

`setPossAnaphor (typ, val)`

[actor.t](../file/actor.t.html)\[[10012](../source/actor.t.html#10012)\]

<div class="desc">

set a possessive anaphor value

</div>

<span id="setPossAnaphorObj"></span>

`setPossAnaphorObj (obj)`

[en_us.t](../file/en_us.t.html)\[[2577](../source/en_us.t.html#2577)\]

<div class="desc">

set a possessive anaphor

</div>

<span id="setPronoun"></span>

`setPronoun (lst)`

[en_us.t](../file/en_us.t.html)\[[2410](../source/en_us.t.html#2410)\]

<div class="desc">

Set a pronoun antecedent to the given list of ResolveInfo objects.
Pronoun handling is language-specific, so this implementation is part of
the English library, not the generic library.

If only one object is present, we'll set the object to be the antecedent
of 'it', 'him', or 'her', according to the object's gender. We'll also
set the object as the single antecedent for 'them'.

If we have multiple objects present, we'll set the list to be the
antecedent of 'them', and we'll forget about any antecedent for 'it'.

Note that the input is a list of ResolveInfo objects, so we must pull
out the underlying game objects when setting the antecedents.

</div>

<span id="setPronounAntecedent"></span>

`setPronounAntecedent (typ, val)`

[actor.t](../file/actor.t.html)\[[10002](../source/actor.t.html#10002)\]

<div class="desc">

set a pronoun's antecedent value

</div>

<span id="setPronounByType"></span>

`setPronounByType (typ, lst)`

[en_us.t](../file/en_us.t.html)\[[2516](../source/en_us.t.html#2516)\]

<div class="desc">

Set a pronoun antecedent to the given ResolveInfo list, for the
specified type of pronoun. We don't have to worry about setting other
types of pronouns to this antecedent - we specifically want to set the
given pronoun type. This is language-dependent because we still have to
figure out the number (i.e. singular or plural) of the pronoun type.

</div>

<span id="setPronounMulti"></span>

`setPronounMulti ([args])`

[en_us.t](../file/en_us.t.html)\[[2463](../source/en_us.t.html#2463)\]

<div class="desc">

Set a pronoun to refer to multiple potential antecedents. This is used
when the verb has multiple noun slots - UNLOCK DOOR WITH KEY. For verbs
like this, we have no way of knowing in advance whether a future pronoun
will refer back to the direct object or the indirect object (etc) - we
could just assume that 'it' will refer to the direct object, but this
won't always be what the player intended. In natural English, pronoun
antecedents must often be inferred from context at the time of use - so
we use the same approach.

Pass an argument list consisting of ResolveInfo lists - that is, pass
one argument per noun slot in the verb, and make each argument a list of
ResolveInfo objects. In other words, you call this just as you would
setPronoun(), except you can pass more than one list argument.

We'll store the multiple objects as antecedents. When we need to resolve
a future singular pronoun, we'll figure out which of the multiple
antecedents is the most logical choice in the context of the pronoun's
usage.

</div>

<span id="setPronounObj"></span>

`setPronounObj (obj)`

[en_us.t](../file/en_us.t.html)\[[2535](../source/en_us.t.html#2535)\]

<div class="desc">

Set a pronoun antecedent to the given simulation object (usually an
object descended from Thing).

</div>

<span id="setSpecialTraveler"></span>

`setSpecialTraveler (traveler)`

[actor.t](../file/actor.t.html)\[[6447](../source/actor.t.html#6447)\]

<div class="desc">

Set the "special traveler." When this is set, we explicitly perform
travel through this object rather than through the traveler indicated by
our location. Returns the old value, so that the old value can be
restored when the caller has finished its need for the special traveler.

</div>

<span id="setThem"></span>

`setThem (lst)`

[actor.t](../file/actor.t.html)\[[9989](../source/actor.t.html#9989)\]

<div class="desc">

set the antecedent list for the ungendered plural pronoun ("them")

</div>

<span id="showInventory"></span>

`showInventory (tall)`

[actor.t](../file/actor.t.html)\[[8851](../source/actor.t.html#8851)\]

<div class="desc">

Show what the actor is carrying.

</div>

<span id="showInventoryWith"></span>

`showInventoryWith (tall, inventoryLister)`

[actor.t](../file/actor.t.html)\[[8867](../source/actor.t.html#8867)\]

<div class="desc">

Show what the actor is carrying, using the given listers.

Note that this method must be overridden if the actor does not use a
conventional 'contents' list property to store its full set of contents.

</div>

<span id="showSpecialDescInContents"></span>

`showSpecialDescInContents (actor, cont)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6071](../source/actor.t.html#6071)\]

<div class="desc">

When we're asked to show a special description as part of the
description of a containing object (which will usually be a nested room
of some kind), just show our posture in our container, rather than
showing our full "I am here" description.

</div>

<span id="specialDesc"></span>

`specialDesc ( )`

[actor.t](../file/actor.t.html)\[[6050](../source/actor.t.html#6050)\]

<div class="desc">

Always list actors specially, rather than as ordinary items in contents
listings. We'll send this to our current state object for processing,
since our "I am here" description tends to vary by state.

</div>

<span id="specialDescListWith"></span>

`specialDescListWith ( )`

[actor.t](../file/actor.t.html)\[[6053](../source/actor.t.html#6053)\]

<div class="desc">

*no description available*

</div>

<span id="standUp"></span>

`standUp ( )`

[actor.t](../file/actor.t.html)\[[7370](../source/actor.t.html#7370)\]

<div class="desc">

Stand up. This is used by the 'Stand' action to carry out the command.

</div>

<span id="suggestTopics"></span>

`suggestTopics (explicit)`

[actor.t](../file/actor.t.html)\[[8309](../source/actor.t.html#8309)\]

<div class="desc">

Suggest topics of conversation. This is called by the TOPICS command (in
which case 'explicit' is true), and whenever we first engage a character
in a stateful conversation (in which case 'explicit' is nil).

We'll show the list of suggested topics associated with our current
conversational partner. If there are no topics, we'll say nothing unless
'explicit' is true, in which case we'll simply say that there are no
topics that the player character is thinking about.

The purpose of this method is to let the game author keep an "inventory"
of topics with this actor for a given conversational partner. This
inventory is meant to represent the topics that on the player
character's mind - things the player character wants to talk about with
the other actor. Note that we're talking about what the player
\*character\* is thinking about - obviously we don't know what's on the
player's mind.

When we enter conversation, or when the player asks for advice, we'll
show this inventory. The idea is to help guide the player through a
conversation without the more heavy-handed device of a formal
conversation menu system, so that conversations have a more free-form
feel without leaving the player hunting in the dark for the magic ASK
ABOUT topic.

The TOPICS system is entirely optional. If a game doesn't specify any
SuggestedTopic objects, then this routine will simply never be called,
and the TOPICS command won't be allowed. Some authors think it gives
away too much to provide a list of topic suggestions like this, and
others don't like anything that smacks of a menu system because they
think it destroys the illusion created by the text-input command line
that the game is boundless. Authors who feel this way can just ignore
the TOPICS system. But be aware that the illusion of boundlessness isn't
always a good thing for players; hunting around for ASK ABOUT topics can
make the game's limits just as obvious, if not more so, by exposing the
vast number of inputs for which the actor doesn't have a good response.
Players aren't stupid - a string of variations on "I don't know about
that" is just as obviously mechanistic as a numbered list of menu
choices. Using the TOPICS system might be a good compromise for many
authors, since the topic list can help guide the player to the right
questions without making the player feel straitjacketed by a menu list.

</div>

<span id="suggestTopicsFor"></span>

`suggestTopicsFor (actor, explicit)`

[actor.t](../file/actor.t.html)\[[8339](../source/actor.t.html#8339)\]

<div class="desc">

Suggest topics that the given actor might want to talk to us about. The
given actor is almost always the player character, since generally NPC's
don't talk to one another using conversation commands (there'd be no
point; they're simple programmed automata, not full-blown AI's).

</div>

<span id="trackFollowInfo"></span>

`trackFollowInfo (obj, conn, from)`

[actor.t](../file/actor.t.html)\[[7879](../source/actor.t.html#7879)\]

<div class="desc">

Receive notification that an object is leaving its current location as a
result of the action we're currently processing. Actors (and possibly
other objects) will broadcast this notification to all Actor objects
connected in any way by containment when they move under their own power
(such as with Actor.travelTo) to a new location. We'll keep tracking
information if we are configured to keep tracking information for the
given object and we can see the given object. Note that this is called
when the object is still at the source end of the travel - the important
thing is that we see the object departing.

'obj' is the object that is seen to be leaving, and 'conn' is the
TravelConnector it is taking.

'conn' is the connector being traversed. If we're simply being observed
in this location (as in a call to setHasSeen), rather than being
observed to leave the location, the connector will be nil.

'from' is the effective starting location of the travel. This isn't
necessarily the departing object's location, since the departing object
could be inside a vehicle or some other kind of traveler object.

Note that this notification is sent only to actors with some sort of
containment connection to the object that's moving, because a
containment connection is necessary for there to be a sense connection.

</div>

<span id="travelerName"></span>

`travelerName (arriving)`

[en_us.t](../file/en_us.t.html)\[[2373](../source/en_us.t.html#2373)\]

<div class="desc">

Show my name for an arrival/departure message. If we've been seen before
by the player character, we'll show our definite name, otherwise our
indefinite name.

</div>

<span id="travelerPreCond"></span>

`travelerPreCond (conn)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6365](../source/actor.t.html#6365)\]

<div class="desc">

Get the preconditions for travel. By default, we'll add the standard
preconditions that the connector requires for actors.

Note that these preconditions apply only when the actor is the traveler.
If the actor is in a vehicle, so that the vehicle is the traveler in a
given travel operation, the vehicle's travelerPreCond conditions are
used instead of ours.

</div>

<span id="travelerTravelWithin"></span>

`travelerTravelWithin (actor, dest)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6517](../source/actor.t.html#6517)\]

<div class="desc">

Traveler interface: perform local travel, between nested rooms within a
single top-level location.

</div>

<span id="travelTo"></span>

`travelTo (dest, connector, backConnector)`

[actor.t](../file/actor.t.html)\[[6603](../source/actor.t.html#6603)\]

<div class="desc">

Travel to a new location.

</div>

<span id="travelWithin"></span>

`travelWithin (dest)`

[actor.t](../file/actor.t.html)\[[6500](../source/actor.t.html#6500)\]

<div class="desc">

Travel within a location, as from a room to a contained nested room.
This should generally be used in lieu of travelTo when traveling between
locations that are related directly by containment rather than with
TravelConnector objects.

Travel within a location is not restricted by darkness; we assume that
if the nested objects are in scope at all, travel among them is allowed.

This type of travel does not trigger calls to travelerLeaving() or
travelerArriving(). To mitigate this loss of notification, we call
actorTravelingWithin() on the source and destination objects.

</div>

<span id="tryMakingRoomToHold"></span>

`tryMakingRoomToHold (obj, allowImplicit)`

[actor.t](../file/actor.t.html)\[[7086](../source/actor.t.html#7086)\]

<div class="desc">

Try making room to hold the given object. This is called when checking
the "room to hold object" pre-condition, such as for the "take" verb.

If holding the new object would exceed the our maximum holding capacity,
we'll go through our inventory looking for objects that can reduce our
held bulk with implicit commands. Objects with holding affinities -
"bags of holding", keyrings, and the like - can implicitly shuffle the
actor's possessions in a manner that is neutral as far as the actor is
concerned, thereby reducing our active holding load.

Returns true if an implicit command was attempted, nil if not.

</div>

<span id="tryMovingObjInto"></span>

`tryMovingObjInto (obj)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[6283](../source/actor.t.html#6283)\]

<div class="desc">

Try moving the given object into this object. For an actor, this will do
one of two things. If 'self' is the actor performing the action that's
triggering this implied command, then we can achieve the goal simply by
taking the object. Otherwise, the way to get an object into my
possession is to have the actor performing the command give me the
object.

</div>

<span id="unexcludeFromLookAround"></span>

`unexcludeFromLookAround (obj)`

[actor.t](../file/actor.t.html)\[[7472](../source/actor.t.html#7472)\]

<div class="desc">

remove an object from the 'look around' exclusion list

</div>

<span id="verifyFollowable"></span>

`verifyFollowable ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[7926](../source/actor.t.html#7926)\]

<div class="desc">

By default, all actors are followable.

</div>

<span id="verifyNotSelf"></span>

`verifyNotSelf (msg)`

[actor.t](../file/actor.t.html)\[[10050](../source/actor.t.html#10050)\]

<div class="desc">

verify() handler to check against applying an action to 'self'

</div>

<span id="visibleInfoTable"></span>

`visibleInfoTable ( )`

[actor.t](../file/actor.t.html)\[[8750](../source/actor.t.html#8750)\]

<div class="desc">

Build a table of full sensory information for all of the objects visible
to the actor through the actor's sight-like senses. Returns a lookup
table with the same set of information as senseInfoTable().

</div>

<span id="visibleInfoTableFromPov"></span>

`visibleInfoTableFromPov (pov)`

[actor.t](../file/actor.t.html)\[[8761](../source/actor.t.html#8761)\]

<div class="desc">

Build a table of full sensory information for all of the objects visible
to me from a particular point of view through my sight-like senses.

</div>

<span id="waitForIssuedCommand"></span>

`waitForIssuedCommand (targetActor)`

[actor.t](../file/actor.t.html)\[[7747](../source/actor.t.html#7747)\]

<div class="desc">

Wait for completion of a command that we issued to another actor. The
parser calls this routine after each time we issue a command to another
actor.

If we're configured to wait for completion of orders given to other
actors before we get another turn, we'll set ourselves up in waiting
mode. Otherwise, we'll do nothing.

</div>

<span id="wantsFollowInfo"></span>

`wantsFollowInfo (obj)`

[actor.t](../file/actor.t.html)\[[7839](../source/actor.t.html#7839)\]

<div class="desc">

Do I track departing objects for following the given object?

By default, the player character tracks everyone, and NPC's track only
the actor they're presently tasked to follow. Most NPC's will never
accept 'follow' commands, so there's no need to track everyone all the
time; for efficiency, we take advantage of this assumption so that we
can avoid storing a bunch of tracking information that will never be
used.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
