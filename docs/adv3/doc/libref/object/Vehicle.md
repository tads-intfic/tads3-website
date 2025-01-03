---
layout: docs
---
<span class="title">Vehicle</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[6818](../source/travel.t.html#6818)\],
[en_us.t](../file/en_us.t.html)\[[2810](../source/en_us.t.html#2810)\]

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



A Vehicle is a special type of nested room that moves instead of the
actor in response to travel commands. When an actor in a vehicle types,
for example, "go north," the vehicle moves north, not the actor.

In most cases, a Vehicle should multiply inherit from one of the other
nested room subclasses to make it more specialized. For example, a
bicycle might inherit from Chair, so that actors can sit on the bike.

Note that because Vehicle inherits from NestedRoom, the OUT direction in
the vehicle by default means what it does in NestedRoom - specifically,
getting out of the vehicle. This is appropriate for vehicles where we'd
describe passengers as being inside the vehicle, such as a car or a
boat. However, if the vehicle is something you ride on, like a horse or
a bike, it's probably more appropriate for OUT to mean "ride the vehicle
out of the enclosing room." To get this effect, simply override the
"out" property and set it to nil; this will prevent the NestedRoom
definition from being inherited, which will make us look for the OUT
location of the enclosing room as the travel destination.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2810](../source/en_us.t.html#2810)\]:*  
English-specific Vehicle changes

`class `**`Vehicle`**` :   `[`NestedRoom`](../object/NestedRoom.html) [`Traveler`](../object/Traveler.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Vehicle`**  
[`NestedRoom`](../object/NestedRoom.html)  
[`BasicLocation`](../object/BasicLocation.html)  
[`Thing`](../object/Thing.html)  
[`VocabObject`](../object/VocabObject.html)  
`                                         object`  
[`Traveler`](../object/Traveler.html)  
[`TravelMessageHandler`](../object/TravelMessageHandler.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`aboardVehicleListerObj`](#aboardVehicleListerObj) [`getTravelerActors`](#getTravelerActors) [`getTravelerMotiveActors`](#getTravelerMotiveActors) [`out`](#out)

Inherited from `NestedRoom` :  
[`bulkCapacity`](../object/NestedRoom.html#bulkCapacity) [`exitDestination`](../object/NestedRoom.html#exitDestination) [`mustMoveIntoProp`](../object/NestedRoom.html#mustMoveIntoProp) [`roomName`](../object/NestedRoom.html#roomName) [`stagingLocations`](../object/NestedRoom.html#stagingLocations)

Inherited from `BasicLocation` :  
[`cannotGoThatWayMsg`](../object/BasicLocation.html#cannotGoThatWayMsg) [`defaultPosture`](../object/BasicLocation.html#defaultPosture) [`effectiveFollowLocation`](../object/BasicLocation.html#effectiveFollowLocation) [`listWithActorInTable`](../object/BasicLocation.html#listWithActorInTable) [`mustDefaultPostureProp`](../object/BasicLocation.html#mustDefaultPostureProp) [`notTravelReadyMsg`](../object/BasicLocation.html#notTravelReadyMsg) [`roomLocation`](../object/BasicLocation.html#roomLocation) [`roomNotifyList`](../object/BasicLocation.html#roomNotifyList) [`roomTravelPreCond`](../object/BasicLocation.html#roomTravelPreCond)

Inherited from `Thing` :  
[`actorInAName`](../object/Thing.html#actorInAName) [`actorInName`](../object/Thing.html#actorInName) [`actorInPrep`](../object/Thing.html#actorInPrep) [`actorIntoName`](../object/Thing.html#actorIntoName) [`actorOutOfName`](../object/Thing.html#actorOutOfName) [`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep) [`aDisambigName`](../object/Thing.html#aDisambigName) [`allStates`](../object/Thing.html#allStates) [`aName`](../object/Thing.html#aName) [`brightness`](../object/Thing.html#brightness) [`bulk`](../object/Thing.html#bulk) [`canBeHeard`](../object/Thing.html#canBeHeard) [`canBeSeen`](../object/Thing.html#canBeSeen) [`canBeSmelled`](../object/Thing.html#canBeSmelled) [`canBeTouched`](../object/Thing.html#canBeTouched) [`canMatchHer`](../object/Thing.html#canMatchHer) [`canMatchHim`](../object/Thing.html#canMatchHim) [`canMatchIt`](../object/Thing.html#canMatchIt) [`canMatchThem`](../object/Thing.html#canMatchThem) [`circularlyInMessage`](../object/Thing.html#circularlyInMessage) [`collectiveGroup`](../object/Thing.html#collectiveGroup) [`collectiveGroups`](../object/Thing.html#collectiveGroups) [`contents`](../object/Thing.html#contents) [`contentsListed`](../object/Thing.html#contentsListed) [`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine) [`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately) [`contentsLister`](../object/Thing.html#contentsLister) [`descContentsLister`](../object/Thing.html#descContentsLister) [`described`](../object/Thing.html#described) [`disambigEquivName`](../object/Thing.html#disambigEquivName) [`disambigName`](../object/Thing.html#disambigName) [`distantDesc`](../object/Thing.html#distantDesc) [`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc) [`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc) [`distinguishers`](../object/Thing.html#distinguishers) [`dummyName`](../object/Thing.html#dummyName) [`equivalenceKey`](../object/Thing.html#equivalenceKey) [`equivalentGrouper`](../object/Thing.html#equivalentGrouper) [`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass) [`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable) [`esEndingPat`](../object/Thing.html#esEndingPat) [`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo) [`getState`](../object/Thing.html#getState) [`globalParamName`](../object/Thing.html#globalParamName) [`holdingIndex`](../object/Thing.html#holdingIndex) [`iesEndingPat`](../object/Thing.html#iesEndingPat) [`initDesc`](../object/Thing.html#initDesc) [`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation) [`initSpecialDesc`](../object/Thing.html#initSpecialDesc) [`inlineContentsLister`](../object/Thing.html#inlineContentsLister) [`isEquivalent`](../object/Thing.html#isEquivalent) [`isHer`](../object/Thing.html#isHer) [`isHim`](../object/Thing.html#isHim) [`isInInitState`](../object/Thing.html#isInInitState) [`isKnown`](../object/Thing.html#isKnown) [`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget) [`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle) [`isMassNoun`](../object/Thing.html#isMassNoun) [`isPlural`](../object/Thing.html#isPlural) [`isProperName`](../object/Thing.html#isProperName) [`isQualifiedName`](../object/Thing.html#isQualifiedName) [`isThingConstructed`](../object/Thing.html#isThingConstructed) [`isTopLevel`](../object/Thing.html#isTopLevel) [`listName`](../object/Thing.html#listName) [`listWith`](../object/Thing.html#listWith) [`location`](../object/Thing.html#location) [`lookInLister`](../object/Thing.html#lookInLister) [`moved`](../object/Thing.html#moved) [`name`](../object/Thing.html#name) [`nameDoes`](../object/Thing.html#nameDoes) [`nameSays`](../object/Thing.html#nameSays) [`nameSees`](../object/Thing.html#nameSees) [`objectNotifyList`](../object/Thing.html#objectNotifyList) [`objInPrep`](../object/Thing.html#objInPrep) [`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc) [`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc) [`owner`](../object/Thing.html#owner) [`patElevenEighteen`](../object/Thing.html#patElevenEighteen) [`patIsAlpha`](../object/Thing.html#patIsAlpha) [`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote) [`patOfPhrase`](../object/Thing.html#patOfPhrase) [`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord) [`patOneLetterWord`](../object/Thing.html#patOneLetterWord) [`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS) [`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar) [`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit) [`patVowelY`](../object/Thing.html#patVowelY) [`pluralDisambigName`](../object/Thing.html#pluralDisambigName) [`pluralName`](../object/Thing.html#pluralName) [`pronounSelector`](../object/Thing.html#pronounSelector) [`roomDarkName`](../object/Thing.html#roomDarkName) [`seen`](../object/Thing.html#seen) [`sightPresence`](../object/Thing.html#sightPresence) [`sightSize`](../object/Thing.html#sightSize) [`smellPresence`](../object/Thing.html#smellPresence) [`smellSize`](../object/Thing.html#smellSize) [`soundPresence`](../object/Thing.html#soundPresence) [`soundSize`](../object/Thing.html#soundSize) [`specialContentsLister`](../object/Thing.html#specialContentsLister) [`specialDesc`](../object/Thing.html#specialDesc) [`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents) [`specialDescListWith`](../object/Thing.html#specialDescListWith) [`specialDescOrder`](../object/Thing.html#specialDescOrder) [`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation) [`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen) [`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage) [`theDisambigName`](../object/Thing.html#theDisambigName) [`theName`](../object/Thing.html#theName) [`theNamePossNoun`](../object/Thing.html#theNamePossNoun) [`tmpAmbient_`](../object/Thing.html#tmpAmbient_) [`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_) [`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_) [`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_) [`tmpObstructor_`](../object/Thing.html#tmpObstructor_) [`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_) [`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_) [`tmpTrans_`](../object/Thing.html#tmpTrans_) [`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_) [`touchPresence`](../object/Thing.html#touchPresence) [`touchSize`](../object/Thing.html#touchSize) [`verbCan`](../object/Thing.html#verbCan) [`verbCannot`](../object/Thing.html#verbCannot) [`verbCant`](../object/Thing.html#verbCant) [`verbEndingSD`](../object/Thing.html#verbEndingSD) [`verbEndingSEd`](../object/Thing.html#verbEndingSEd) [`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_) [`verbMust`](../object/Thing.html#verbMust) [`verbToCome`](../object/Thing.html#verbToCome) [`verbToDo`](../object/Thing.html#verbToDo) [`verbToGo`](../object/Thing.html#verbToGo) [`verbToLeave`](../object/Thing.html#verbToLeave) [`verbToSay`](../object/Thing.html#verbToSay) [`verbToSee`](../object/Thing.html#verbToSee) [`verbWill`](../object/Thing.html#verbWill) [`verbWont`](../object/Thing.html#verbWont) [`weight`](../object/Thing.html#weight)

Inherited from `VocabObject` :  
[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive) [`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder) [`pluralOrder`](../object/VocabObject.html#pluralOrder) [`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood) [`vocabWords`](../object/VocabObject.html#vocabWords) [`weakTokens`](../object/VocabObject.html#weakTokens)
<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkMovingTravelerInto`](#checkMovingTravelerInto) [`forEachTravelingActor`](#forEachTravelingActor) [`getLocPushTraveler`](#getLocPushTraveler) [`getLocTraveler`](#getLocTraveler) [`isActorTraveling`](#isActorTraveling) [`travelerName`](#travelerName) [`travelerPreCond`](#travelerPreCond)

Inherited from `NestedRoom` :  
[`cannotMoveActorOutOf`](../object/NestedRoom.html#cannotMoveActorOutOf) [`cannotMoveActorToStagingLocation`](../object/NestedRoom.html#cannotMoveActorToStagingLocation) [`checkActorInStagingLocation`](../object/NestedRoom.html#checkActorInStagingLocation) [`checkActorOutOfNested`](../object/NestedRoom.html#checkActorOutOfNested) [`checkActorReadyToEnterNestedRoom`](../object/NestedRoom.html#checkActorReadyToEnterNestedRoom) [`checkMovingActorInto`](../object/NestedRoom.html#checkMovingActorInto) [`chooseStagingLocation`](../object/NestedRoom.html#chooseStagingLocation) [`defaultStagingLocation`](../object/NestedRoom.html#defaultStagingLocation) [`disembarkRoom`](../object/NestedRoom.html#disembarkRoom) [`dobjFor(GetOutOf)`](../object/NestedRoom.html#dobjFor(GetOutOf)) [`dobjFor(Take)`](../object/NestedRoom.html#dobjFor(Take)) [`getExtraScopeItems`](../object/NestedRoom.html#getExtraScopeItems) [`isOwnedBy`](../object/NestedRoom.html#isOwnedBy) [`isStagingLocationKnown`](../object/NestedRoom.html#isStagingLocationKnown) [`makeStandingUp`](../object/NestedRoom.html#makeStandingUp) [`mapPushTravelIobj`](../object/NestedRoom.html#mapPushTravelIobj) [`removeFromNested`](../object/NestedRoom.html#removeFromNested) [`roomTravelPreCond`](../object/NestedRoom.html#roomTravelPreCond) [`tryMovingIntoNested`](../object/NestedRoom.html#tryMovingIntoNested) [`tryRemovingFromNested`](../object/NestedRoom.html#tryRemovingFromNested)

Inherited from `BasicLocation` :  
[`actorInGroupPrefix`](../object/BasicLocation.html#actorInGroupPrefix) [`actorInGroupSuffix`](../object/BasicLocation.html#actorInGroupSuffix) [`actorIsFamiliar`](../object/BasicLocation.html#actorIsFamiliar) [`actorKnowsDestination`](../object/BasicLocation.html#actorKnowsDestination) [`actorTravelingWithin`](../object/BasicLocation.html#actorTravelingWithin) [`addRoomNotifyItem`](../object/BasicLocation.html#addRoomNotifyItem) [`cannotGoShowExits`](../object/BasicLocation.html#cannotGoShowExits) [`cannotGoThatWay`](../object/BasicLocation.html#cannotGoThatWay) [`cannotGoThatWayInDark`](../object/BasicLocation.html#cannotGoThatWayInDark) [`cannotTravel`](../object/BasicLocation.html#cannotTravel) [`checkStagingLocation`](../object/BasicLocation.html#checkStagingLocation) [`checkTravelerDirectlyInRoom`](../object/BasicLocation.html#checkTravelerDirectlyInRoom) [`dispatchRoomDaemon`](../object/BasicLocation.html#dispatchRoomDaemon) [`enteringRoom`](../object/BasicLocation.html#enteringRoom) [`getDropDestination`](../object/BasicLocation.html#getDropDestination) [`getNominalActorContainer`](../object/BasicLocation.html#getNominalActorContainer) [`getNominalDropDestination`](../object/BasicLocation.html#getNominalDropDestination) [`getRoomNotifyList`](../object/BasicLocation.html#getRoomNotifyList) [`getStatuslineExitsHeight`](../object/BasicLocation.html#getStatuslineExitsHeight) [`isActorTravelReady`](../object/BasicLocation.html#isActorTravelReady) [`leavingRoom`](../object/BasicLocation.html#leavingRoom) [`listWithActorIn`](../object/BasicLocation.html#listWithActorIn) [`removeRoomNotifyItem`](../object/BasicLocation.html#removeRoomNotifyItem) [`roomActorHereDesc`](../object/BasicLocation.html#roomActorHereDesc) [`roomActorPostureDesc`](../object/BasicLocation.html#roomActorPostureDesc) [`roomActorStatus`](../object/BasicLocation.html#roomActorStatus) [`roomActorThereDesc`](../object/BasicLocation.html#roomActorThereDesc) [`roomAfterAction`](../object/BasicLocation.html#roomAfterAction) [`roomBeforeAction`](../object/BasicLocation.html#roomBeforeAction) [`roomDarkTravel`](../object/BasicLocation.html#roomDarkTravel) [`roomDesc`](../object/BasicLocation.html#roomDesc) [`roomListActorPosture`](../object/BasicLocation.html#roomListActorPosture) [`roomOkayPostureChange`](../object/BasicLocation.html#roomOkayPostureChange) [`showStatuslineExits`](../object/BasicLocation.html#showStatuslineExits) [`travelerArriving`](../object/BasicLocation.html#travelerArriving) [`travelerLeaving`](../object/BasicLocation.html#travelerLeaving) [`tryMakingDefaultPosture`](../object/BasicLocation.html#tryMakingDefaultPosture) [`tryMakingTravelReady`](../object/BasicLocation.html#tryMakingTravelReady) [`wouldBeLitFor`](../object/BasicLocation.html#wouldBeLitFor)

Inherited from `Thing` :  
[`acceptCommand`](../object/Thing.html#acceptCommand) [`addAllContents`](../object/Thing.html#addAllContents) [`addDirectConnections`](../object/Thing.html#addDirectConnections) [`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem) [`addToContents`](../object/Thing.html#addToContents) [`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable) [`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable) [`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination) [`afterAction`](../object/Thing.html#afterAction) [`afterTravel`](../object/Thing.html#afterTravel) [`allContents`](../object/Thing.html#allContents) [`aNameFrom`](../object/Thing.html#aNameFrom) [`aNameObj`](../object/Thing.html#aNameObj) [`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc) [`announceDefaultObject`](../object/Thing.html#announceDefaultObject) [`appendHeldContents`](../object/Thing.html#appendHeldContents) [`atmosphereList`](../object/Thing.html#atmosphereList) [`baseMoveInto`](../object/Thing.html#baseMoveInto) [`basicExamine`](../object/Thing.html#basicExamine) [`basicExamineFeel`](../object/Thing.html#basicExamineFeel) [`basicExamineListen`](../object/Thing.html#basicExamineListen) [`basicExamineSmell`](../object/Thing.html#basicExamineSmell) [`basicExamineTaste`](../object/Thing.html#basicExamineTaste) [`beforeAction`](../object/Thing.html#beforeAction) [`beforeTravel`](../object/Thing.html#beforeTravel) [`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths) [`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo) [`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo) [`cacheSensePath`](../object/Thing.html#cacheSensePath) [`canBeHeardBy`](../object/Thing.html#canBeHeardBy) [`canBeSeenBy`](../object/Thing.html#canBeSeenBy) [`canBeSensed`](../object/Thing.html#canBeSensed) [`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy) [`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy) [`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed) [`canHear`](../object/Thing.html#canHear) [`canMatchPronounType`](../object/Thing.html#canMatchPronounType) [`canMoveViaPath`](../object/Thing.html#canMoveViaPath) [`cannotReachObject`](../object/Thing.html#cannotReachObject) [`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource) [`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource) [`canOwn`](../object/Thing.html#canOwn) [`canSee`](../object/Thing.html#canSee) [`canSmell`](../object/Thing.html#canSmell) [`canThrowViaPath`](../object/Thing.html#canThrowViaPath) [`canTouch`](../object/Thing.html#canTouch) [`canTouchViaPath`](../object/Thing.html#canTouchViaPath) [`checkBulkChange`](../object/Thing.html#checkBulkChange) [`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin) [`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath) [`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath) [`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath) [`childInName`](../object/Thing.html#childInName) [`childInNameGen`](../object/Thing.html#childInNameGen) [`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner) [`childInRemoteName`](../object/Thing.html#childInRemoteName) [`clearSenseInfo`](../object/Thing.html#clearSenseInfo) [`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents) [`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents) [`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb) [`connectionTable`](../object/Thing.html#connectionTable) [`construct`](../object/Thing.html#construct) [`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn) [`countDisambigName`](../object/Thing.html#countDisambigName) [`countListName`](../object/Thing.html#countListName) [`countName`](../object/Thing.html#countName) [`countNameFrom`](../object/Thing.html#countNameFrom) [`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc) [`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister) [`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc) [`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc) [`desc`](../object/Thing.html#desc) [`directionForConnector`](../object/Thing.html#directionForConnector) [`distantSmellDesc`](../object/Thing.html#distantSmellDesc) [`distantSoundDesc`](../object/Thing.html#distantSoundDesc) [`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout)) [`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor)) [`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague)) [`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo)) [`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack)) [`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith)) [`dobjFor(Board)`](../object/Thing.html#dobjFor(Board)) [`dobjFor(Break)`](../object/Thing.html#dobjFor(Break)) [`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn)) [`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith)) [`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean)) [`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith)) [`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb)) [`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown)) [`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp)) [`dobjFor(Close)`](../object/Thing.html#dobjFor(Close)) [`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult)) [`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout)) [`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith)) [`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach)) [`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom)) [`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig)) [`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith)) [`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff)) [`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink)) [`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop)) [`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat)) [`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter)) [`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn)) [`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine)) [`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish)) [`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten)) [`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo)) [`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel)) [`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip)) [`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow)) [`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf)) [`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo)) [`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough)) [`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff)) [`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver)) [`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss)) [`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn)) [`dobjFor(Light)`](../object/Thing.html#dobjFor(Light)) [`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo)) [`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock)) [`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith)) [`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind)) [`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn)) [`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough)) [`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder)) [`dobjFor(Move)`](../object/Thing.html#dobjFor(Move)) [`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo)) [`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith)) [`dobjFor(Open)`](../object/Thing.html#dobjFor(Open)) [`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn)) [`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto)) [`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour)) [`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto)) [`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto)) [`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull)) [`dobjFor(Push)`](../object/Thing.html#dobjFor(Push)) [`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel)) [`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind)) [`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn)) [`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn)) [`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder)) [`dobjFor(Read)`](../object/Thing.html#dobjFor(Read)) [`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove)) [`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw)) [`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith)) [`dobjFor(Search)`](../object/Thing.html#dobjFor(Search)) [`dobjFor(Set)`](../object/Thing.html#dobjFor(Set)) [`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo)) [`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo)) [`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn)) [`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell)) [`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn)) [`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike)) [`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch)) [`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom)) [`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo)) [`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste)) [`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout)) [`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague)) [`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw)) [`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt)) [`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir)) [`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo)) [`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn)) [`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff)) [`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn)) [`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo)) [`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith)) [`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn)) [`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn)) [`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten)) [`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom)) [`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock)) [`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith)) [`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug)) [`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom)) [`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew)) [`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith)) [`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear)) [`examineListContents`](../object/Thing.html#examineListContents) [`examineListContentsWith`](../object/Thing.html#examineListContentsWith) [`examineSpecialContents`](../object/Thing.html#examineSpecialContents) [`examineStatus`](../object/Thing.html#examineStatus) [`failCheck`](../object/Thing.html#failCheck) [`feelDesc`](../object/Thing.html#feelDesc) [`fillMedium`](../object/Thing.html#fillMedium) [`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor) [`findTouchObstructor`](../object/Thing.html#findTouchObstructor) [`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer) [`forEachContainer`](../object/Thing.html#forEachContainer) [`fromPOV`](../object/Thing.html#fromPOV) [`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom) [`getAllPathsTo`](../object/Thing.html#getAllPathsTo) [`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher) [`getBagAffinities`](../object/Thing.html#getBagAffinities) [`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding) [`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher) [`getBulk`](../object/Thing.html#getBulk) [`getBulkWithin`](../object/Thing.html#getBulkWithin) [`getCarryingActor`](../object/Thing.html#getCarryingActor) [`getCommonContainer`](../object/Thing.html#getCommonContainer) [`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer) [`getConnectedContainers`](../object/Thing.html#getConnectedContainers) [`getConnectorTo`](../object/Thing.html#getConnectorTo) [`getContentsForExamine`](../object/Thing.html#getContentsForExamine) [`getDestName`](../object/Thing.html#getDestName) [`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk) [`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight) [`getHitFallDestination`](../object/Thing.html#getHitFallDestination) [`getIdentityObject`](../object/Thing.html#getIdentityObject) [`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher) [`getListedContents`](../object/Thing.html#getListedContents) [`getMovePathTo`](../object/Thing.html#getMovePathTo) [`getNoise`](../object/Thing.html#getNoise) [`getNominalOwner`](../object/Thing.html#getNominalOwner) [`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList) [`getOdor`](../object/Thing.html#getOdor) [`getOutermostRoom`](../object/Thing.html#getOutermostRoom) [`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom) [`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation) [`getStateWithInfo`](../object/Thing.html#getStateWithInfo) [`getThrowPathTo`](../object/Thing.html#getThrowPathTo) [`getTouchPathTo`](../object/Thing.html#getTouchPathTo) [`getTravelConnector`](../object/Thing.html#getTravelConnector) [`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo) [`getWeight`](../object/Thing.html#getWeight) [`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup) [`hideFromAll`](../object/Thing.html#hideFromAll) [`hideFromDefault`](../object/Thing.html#hideFromDefault) [`initializeEquivalent`](../object/Thing.html#initializeEquivalent) [`initializeLocation`](../object/Thing.html#initializeLocation) [`initializeThing`](../object/Thing.html#initializeThing) [`inRoomName`](../object/Thing.html#inRoomName) [`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo)) [`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith)) [`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith)) [`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith)) [`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith)) [`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom)) [`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith)) [`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo)) [`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo)) [`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith)) [`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith)) [`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto)) [`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto)) [`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto)) [`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind)) [`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn)) [`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn)) [`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder)) [`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith)) [`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo)) [`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom)) [`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt)) [`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo)) [`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith)) [`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom)) [`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith)) [`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom)) [`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith)) [`isComponentOf`](../object/Thing.html#isComponentOf) [`isDirectlyIn`](../object/Thing.html#isDirectlyIn) [`isHeldBy`](../object/Thing.html#isHeldBy) [`isIn`](../object/Thing.html#isIn) [`isInFixedIn`](../object/Thing.html#isInFixedIn) [`isListed`](../object/Thing.html#isListed) [`isListedInContents`](../object/Thing.html#isListedInContents) [`isListedInInventory`](../object/Thing.html#isListedInInventory) [`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart) [`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling) [`isNominallyIn`](../object/Thing.html#isNominallyIn) [`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart) [`isOccludedBy`](../object/Thing.html#isOccludedBy) [`isOrIsIn`](../object/Thing.html#isOrIsIn) [`isShipboard`](../object/Thing.html#isShipboard) [`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent) [`itIs`](../object/Thing.html#itIs) [`itNom`](../object/Thing.html#itNom) [`itObj`](../object/Thing.html#itObj) [`itPossAdj`](../object/Thing.html#itPossAdj) [`itPossNoun`](../object/Thing.html#itPossNoun) [`itVerb`](../object/Thing.html#itVerb) [`listCardinality`](../object/Thing.html#listCardinality) [`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector) [`lookAround`](../object/Thing.html#lookAround) [`lookAroundPov`](../object/Thing.html#lookAroundPov) [`lookAroundWithin`](../object/Thing.html#lookAroundWithin) [`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents) [`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc) [`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName) [`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense) [`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits) [`lookInDesc`](../object/Thing.html#lookInDesc) [`mainExamine`](../object/Thing.html#mainExamine) [`mainMoveInto`](../object/Thing.html#mainMoveInto) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`meetsObjHeld`](../object/Thing.html#meetsObjHeld) [`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo) [`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable) [`moveInto`](../object/Thing.html#moveInto) [`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel) [`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath) [`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto) [`nameIs`](../object/Thing.html#nameIs) [`nameIsnt`](../object/Thing.html#nameIsnt) [`nameVerb`](../object/Thing.html#nameVerb) [`normalizePath`](../object/Thing.html#normalizePath) [`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc) [`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj) [`noteSeenBy`](../object/Thing.html#noteSeenBy) [`notifyInsert`](../object/Thing.html#notifyInsert) [`notifyMoveInto`](../object/Thing.html#notifyMoveInto) [`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath) [`notifyRemove`](../object/Thing.html#notifyRemove) [`obscuredDesc`](../object/Thing.html#obscuredDesc) [`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc) [`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc) [`pluralNameFrom`](../object/Thing.html#pluralNameFrom) [`processThrow`](../object/Thing.html#processThrow) [`propHidesProp`](../object/Thing.html#propHidesProp) [`propWithPresent`](../object/Thing.html#propWithPresent) [`putInName`](../object/Thing.html#putInName) [`receiveDrop`](../object/Thing.html#receiveDrop) [`remoteDesc`](../object/Thing.html#remoteDesc) [`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc) [`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister) [`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc) [`removeFromContents`](../object/Thing.html#removeFromContents) [`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem) [`restoreLocation`](../object/Thing.html#restoreLocation) [`roomContentsLister`](../object/Thing.html#roomContentsLister) [`roomDaemon`](../object/Thing.html#roomDaemon) [`roomDarkDesc`](../object/Thing.html#roomDarkDesc) [`roomFirstDesc`](../object/Thing.html#roomFirstDesc) [`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc) [`saveLocation`](../object/Thing.html#saveLocation) [`selectPathTo`](../object/Thing.html#selectPathTo) [`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert) [`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove) [`senseAmbientMax`](../object/Thing.html#senseAmbientMax) [`senseInfoTable`](../object/Thing.html#senseInfoTable) [`senseObj`](../object/Thing.html#senseObj) [`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin) [`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout) [`sensePathToContents`](../object/Thing.html#sensePathToContents) [`sensePathToLoc`](../object/Thing.html#sensePathToLoc) [`sensePresenceList`](../object/Thing.html#sensePresenceList) [`setAllSeenBy`](../object/Thing.html#setAllSeenBy) [`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy) [`setGlobalParamName`](../object/Thing.html#setGlobalParamName) [`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo) [`shineFromWithin`](../object/Thing.html#shineFromWithin) [`shineFromWithout`](../object/Thing.html#shineFromWithout) [`shineOnContents`](../object/Thing.html#shineOnContents) [`shineOnLoc`](../object/Thing.html#shineOnLoc) [`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc) [`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents) [`showInventoryContents`](../object/Thing.html#showInventoryContents) [`showInventoryItem`](../object/Thing.html#showInventoryItem) [`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted) [`showListItem`](../object/Thing.html#showListItem) [`showListItemCounted`](../object/Thing.html#showListItemCounted) [`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen) [`showListItemGen`](../object/Thing.html#showListItemGen) [`showObjectContents`](../object/Thing.html#showObjectContents) [`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc) [`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents) [`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc) [`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents) [`showSpecialDesc`](../object/Thing.html#showSpecialDesc) [`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents) [`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo) [`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo) [`showWornItem`](../object/Thing.html#showWornItem) [`showWornItemCounted`](../object/Thing.html#showWornItemCounted) [`smellDesc`](../object/Thing.html#smellDesc) [`smellHereDesc`](../object/Thing.html#smellHereDesc) [`soundDesc`](../object/Thing.html#soundDesc) [`soundHereDesc`](../object/Thing.html#soundHereDesc) [`specialDescList`](../object/Thing.html#specialDescList) [`specialPathFrom`](../object/Thing.html#specialPathFrom) [`statusName`](../object/Thing.html#statusName) [`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath) [`superHidesSuper`](../object/Thing.html#superHidesSuper) [`tasteDesc`](../object/Thing.html#tasteDesc) [`thatNom`](../object/Thing.html#thatNom) [`thatObj`](../object/Thing.html#thatObj) [`theNameFrom`](../object/Thing.html#theNameFrom) [`theNameObj`](../object/Thing.html#theNameObj) [`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc) [`theNameWithOwner`](../object/Thing.html#theNameWithOwner) [`throwTargetCatch`](../object/Thing.html#throwTargetCatch) [`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith) [`throwViaPath`](../object/Thing.html#throwViaPath) [`transmitAmbient`](../object/Thing.html#transmitAmbient) [`transSensingIn`](../object/Thing.html#transSensingIn) [`transSensingOut`](../object/Thing.html#transSensingOut) [`traversePath`](../object/Thing.html#traversePath) [`tryHolding`](../object/Thing.html#tryHolding) [`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor) [`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto) [`useInitDesc`](../object/Thing.html#useInitDesc) [`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc) [`useSpecialDesc`](../object/Thing.html#useSpecialDesc) [`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents) [`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom) [`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart) [`verbEndingEs`](../object/Thing.html#verbEndingEs) [`verbEndingIes`](../object/Thing.html#verbEndingIes) [`verbEndingS`](../object/Thing.html#verbEndingS) [`verbToHave`](../object/Thing.html#verbToHave) [`verbWas`](../object/Thing.html#verbWas) [`verifyFollowable`](../object/Thing.html#verifyFollowable) [`verifyInsert`](../object/Thing.html#verifyInsert) [`verifyMoveTo`](../object/Thing.html#verifyMoveTo) [`verifyRemove`](../object/Thing.html#verifyRemove) [`whatIf`](../object/Thing.html#whatIf) [`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy) [`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary) [`expandPronounList`](../object/VocabObject.html#expandPronounList) [`filterResolveList`](../object/VocabObject.html#filterResolveList) [`getFacets`](../object/VocabObject.html#getFacets) [`inheritVocab`](../object/VocabObject.html#inheritVocab) [`initializeVocab`](../object/VocabObject.html#initializeVocab) [`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith) [`matchName`](../object/VocabObject.html#matchName) [`matchNameCommon`](../object/VocabObject.html#matchNameCommon) [`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig) [`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation) [`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive) [`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

Inherited from `Traveler` :  
[`canTravelVia`](../object/Traveler.html#canTravelVia) [`checkDirectlyInRoom`](../object/Traveler.html#checkDirectlyInRoom) [`describeArrival`](../object/Traveler.html#describeArrival) [`describeDeparture`](../object/Traveler.html#describeDeparture) [`describeNpcArrival`](../object/Traveler.html#describeNpcArrival) [`describeNpcDeparture`](../object/Traveler.html#describeNpcDeparture) [`explainNoTravelVia`](../object/Traveler.html#explainNoTravelVia) [`getNotifyTable`](../object/Traveler.html#getNotifyTable) [`isTravelerCarrying`](../object/Traveler.html#isTravelerCarrying) [`travelerLocName`](../object/Traveler.html#travelerLocName) [`travelerRemoteLocName`](../object/Traveler.html#travelerRemoteLocName) [`travelerSeenBy`](../object/Traveler.html#travelerSeenBy) [`travelerTravelTo`](../object/Traveler.html#travelerTravelTo) [`travelerTravelWithin`](../object/Traveler.html#travelerTravelWithin)

Inherited from `TravelMessageHandler` :  
[`getNominalTraveler`](../object/TravelMessageHandler.html#getNominalTraveler) [`sayArriving`](../object/TravelMessageHandler.html#sayArriving) [`sayArrivingDir`](../object/TravelMessageHandler.html#sayArrivingDir) [`sayArrivingDownStairs`](../object/TravelMessageHandler.html#sayArrivingDownStairs) [`sayArrivingLocally`](../object/TravelMessageHandler.html#sayArrivingLocally) [`sayArrivingThroughPassage`](../object/TravelMessageHandler.html#sayArrivingThroughPassage) [`sayArrivingUpStairs`](../object/TravelMessageHandler.html#sayArrivingUpStairs) [`sayArrivingViaPath`](../object/TravelMessageHandler.html#sayArrivingViaPath) [`sayDeparting`](../object/TravelMessageHandler.html#sayDeparting) [`sayDepartingDir`](../object/TravelMessageHandler.html#sayDepartingDir) [`sayDepartingDownStairs`](../object/TravelMessageHandler.html#sayDepartingDownStairs) [`sayDepartingLocally`](../object/TravelMessageHandler.html#sayDepartingLocally) [`sayDepartingThroughPassage`](../object/TravelMessageHandler.html#sayDepartingThroughPassage) [`sayDepartingUpStairs`](../object/TravelMessageHandler.html#sayDepartingUpStairs) [`sayDepartingViaPath`](../object/TravelMessageHandler.html#sayDepartingViaPath) [`sayTravelingRemotely`](../object/TravelMessageHandler.html#sayTravelingRemotely)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="aboardVehicleListerObj"></span>

`aboardVehicleListerObj`

[travel.t](../file/travel.t.html)\[[6998](../source/travel.t.html#6998)\]



the lister object we use to display the list of actors aboard, in
arrival and departure messages for the vehicle



<span id="getTravelerActors"></span>

`getTravelerActors`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6957](../source/travel.t.html#6957)\]



Get the actors involved in the travel. This is a list consisting of all
of the actors contained within the vehicle.



<span id="getTravelerMotiveActors"></span>

`getTravelerMotiveActors`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6964](../source/travel.t.html#6964)\]



there are no self-motive actors in a vehicle - the vehicle is doing the
travel, and the actors within are just moving along with it as cargo



<span id="out"></span>

`out`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6887](../source/travel.t.html#6887)\]



An OUT command while within a vehicle could mean one of two things:
either to GET OUT of the vehicle, or to ride/drive the vehicle out of
its enclosing location.

There's no good way of guessing which meaning the player intends, so we
have to choose one or the other. We choose the ride/drive interpretation
as the default, for two reasons. First, it seems to be what most players
expect. Second, the other interpretation leaves no standard way of
expressing the ride/drive meaning. We return nil here to indicate to the
OUT action that we want the enclosing location's 'out' connector to be
used while an actor is in the vehicle.

For some vehicles, it might be more appropriate for OUT to mean GET OUT.
In these cases, simply override this so that it returns nestedRoomOut.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkMovingTravelerInto"></span>

`checkMovingTravelerInto (room, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6979](../source/travel.t.html#6979)\]



Check, using pre-condition rules, that the traveler is in the given
room, moving the traveler to the room if possible.



<span id="forEachTravelingActor"></span>

`forEachTravelingActor (func)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6944](../source/travel.t.html#6944)\]



invoke a callback for each actor traveling with us



<span id="getLocPushTraveler"></span>

`getLocPushTraveler (trav, obj)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6899](../source/travel.t.html#6899)\]



Get the "location push traveler" - this is the traveler when a
push-travel command is performed by a traveler within this location. If
the object we're trying to push is within me, use the contained
traveler, since the contained traveler must be trying to push the object
around directly. If the object isn't inside me, then we're presumably
trying to use the vehicle to push around the object, so the traveler is
the vehicle or something containing the vehicle.



<span id="getLocTraveler"></span>

`getLocTraveler (trav, conn)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6824](../source/travel.t.html#6824)\]



When a traveler is in a vehicle, and the traveler performs a travel
command, the vehicle is what changes location; the contained traveler
simply stays put while the vehicle moves.



<span id="isActorTraveling"></span>

`isActorTraveling (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6941](../source/travel.t.html#6941)\]



Determine if an actor is traveling with me. The normal base class
implementation works, but it's more efficient just to check to see if
the actor is inside this object than to construct the entire nested
contents list just to check to see if the actor's in that list.



<span id="travelerName"></span>

`travelerName (arriving)`

[en_us.t](../file/en_us.t.html)\[[2815](../source/en_us.t.html#2815)\]



Display the name of the traveler, for use in an arrival or departure
message.



<span id="travelerPreCond"></span>

`travelerPreCond (conn)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6973](../source/travel.t.html#6973)\]



Traveler preconditions for the vehicle. By default, we add no
preconditions of our own, but specific vehicles might want to override
this. For example, a car might want to require that the doors are
closed, the engine is running, and the seatbelts are fastened before it
can travel.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


