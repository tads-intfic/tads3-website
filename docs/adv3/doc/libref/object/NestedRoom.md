---
layout: docs
---
<span class="title">NestedRoom</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[5590](../source/travel.t.html#5590)\]

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



A Nested Room is any object that isn't a room but which can contain an
actor: chairs, beds, platforms, vehicles, and the like.

An important property of nested rooms is that they're not full-fledged
rooms for the purposes of actor arrivals and departures. Specifically,
an actor moving from a room to a nested room within the room does not
trigger an actor.travelTo invocation, but simply moves the actor from
the containing room to the nested room. Moving from the nested room to
the containing room likewise triggers no actor.travelTo invocation. The
travelTo method is not applicable for intra-room travel because no
TravelConnector objects are traversed in such travel; we simply move in
and out of contained objects. To mitigate this loss of notification, we
instead call actor.travelWithin() when moving among nested locations.

By default, an actor attempting to travel from a nested location via a
directional command will simply attempt the travel as though the actor
were in the enclosing location.

`class `**`NestedRoom`**` :   `[`BasicLocation`](../object/BasicLocation.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NestedRoom`**  
[`BasicLocation`](../object/BasicLocation.html)  
[`Thing`](../object/Thing.html)  
[`VocabObject`](../object/VocabObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`NestedRoom`**  
[`BasicChair`](../object/BasicChair.html)  
[`BasicBed`](../object/BasicBed.html)  
[`BasicPlatform`](../object/BasicPlatform.html)  
[`Booth`](../object/Booth.html)  
[`Platform`](../object/Platform.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`HighNestedRoom`](../object/HighNestedRoom.html)  
[`Vehicle`](../object/Vehicle.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`bulkCapacity`](#bulkCapacity) [`exitDestination`](#exitDestination) [`mustMoveIntoProp`](#mustMoveIntoProp) [`out`](#out) [`roomName`](#roomName) [`stagingLocations`](#stagingLocations)

Inherited from `BasicLocation` :  
[`cannotGoThatWayMsg`](../object/BasicLocation.html#cannotGoThatWayMsg) [`defaultPosture`](../object/BasicLocation.html#defaultPosture) [`effectiveFollowLocation`](../object/BasicLocation.html#effectiveFollowLocation) [`listWithActorInTable`](../object/BasicLocation.html#listWithActorInTable) [`mustDefaultPostureProp`](../object/BasicLocation.html#mustDefaultPostureProp) [`notTravelReadyMsg`](../object/BasicLocation.html#notTravelReadyMsg) [`roomLocation`](../object/BasicLocation.html#roomLocation) [`roomNotifyList`](../object/BasicLocation.html#roomNotifyList) [`roomTravelPreCond`](../object/BasicLocation.html#roomTravelPreCond)

Inherited from `Thing` :  
[`actorInAName`](../object/Thing.html#actorInAName) [`actorInName`](../object/Thing.html#actorInName) [`actorInPrep`](../object/Thing.html#actorInPrep) [`actorIntoName`](../object/Thing.html#actorIntoName) [`actorOutOfName`](../object/Thing.html#actorOutOfName) [`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep) [`aDisambigName`](../object/Thing.html#aDisambigName) [`allStates`](../object/Thing.html#allStates) [`aName`](../object/Thing.html#aName) [`brightness`](../object/Thing.html#brightness) [`bulk`](../object/Thing.html#bulk) [`canBeHeard`](../object/Thing.html#canBeHeard) [`canBeSeen`](../object/Thing.html#canBeSeen) [`canBeSmelled`](../object/Thing.html#canBeSmelled) [`canBeTouched`](../object/Thing.html#canBeTouched) [`canMatchHer`](../object/Thing.html#canMatchHer) [`canMatchHim`](../object/Thing.html#canMatchHim) [`canMatchIt`](../object/Thing.html#canMatchIt) [`canMatchThem`](../object/Thing.html#canMatchThem) [`circularlyInMessage`](../object/Thing.html#circularlyInMessage) [`collectiveGroup`](../object/Thing.html#collectiveGroup) [`collectiveGroups`](../object/Thing.html#collectiveGroups) [`contents`](../object/Thing.html#contents) [`contentsListed`](../object/Thing.html#contentsListed) [`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine) [`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately) [`contentsLister`](../object/Thing.html#contentsLister) [`descContentsLister`](../object/Thing.html#descContentsLister) [`described`](../object/Thing.html#described) [`disambigEquivName`](../object/Thing.html#disambigEquivName) [`disambigName`](../object/Thing.html#disambigName) [`distantDesc`](../object/Thing.html#distantDesc) [`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc) [`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc) [`distinguishers`](../object/Thing.html#distinguishers) [`dummyName`](../object/Thing.html#dummyName) [`equivalenceKey`](../object/Thing.html#equivalenceKey) [`equivalentGrouper`](../object/Thing.html#equivalentGrouper) [`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass) [`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable) [`esEndingPat`](../object/Thing.html#esEndingPat) [`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo) [`getState`](../object/Thing.html#getState) [`globalParamName`](../object/Thing.html#globalParamName) [`holdingIndex`](../object/Thing.html#holdingIndex) [`iesEndingPat`](../object/Thing.html#iesEndingPat) [`initDesc`](../object/Thing.html#initDesc) [`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation) [`initSpecialDesc`](../object/Thing.html#initSpecialDesc) [`inlineContentsLister`](../object/Thing.html#inlineContentsLister) [`isEquivalent`](../object/Thing.html#isEquivalent) [`isHer`](../object/Thing.html#isHer) [`isHim`](../object/Thing.html#isHim) [`isInInitState`](../object/Thing.html#isInInitState) [`isKnown`](../object/Thing.html#isKnown) [`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget) [`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle) [`isMassNoun`](../object/Thing.html#isMassNoun) [`isPlural`](../object/Thing.html#isPlural) [`isProperName`](../object/Thing.html#isProperName) [`isQualifiedName`](../object/Thing.html#isQualifiedName) [`isThingConstructed`](../object/Thing.html#isThingConstructed) [`isTopLevel`](../object/Thing.html#isTopLevel) [`listName`](../object/Thing.html#listName) [`listWith`](../object/Thing.html#listWith) [`location`](../object/Thing.html#location) [`lookInLister`](../object/Thing.html#lookInLister) [`moved`](../object/Thing.html#moved) [`name`](../object/Thing.html#name) [`nameDoes`](../object/Thing.html#nameDoes) [`nameSays`](../object/Thing.html#nameSays) [`nameSees`](../object/Thing.html#nameSees) [`objectNotifyList`](../object/Thing.html#objectNotifyList) [`objInPrep`](../object/Thing.html#objInPrep) [`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc) [`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc) [`owner`](../object/Thing.html#owner) [`patElevenEighteen`](../object/Thing.html#patElevenEighteen) [`patIsAlpha`](../object/Thing.html#patIsAlpha) [`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote) [`patOfPhrase`](../object/Thing.html#patOfPhrase) [`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord) [`patOneLetterWord`](../object/Thing.html#patOneLetterWord) [`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS) [`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar) [`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit) [`patVowelY`](../object/Thing.html#patVowelY) [`pluralDisambigName`](../object/Thing.html#pluralDisambigName) [`pluralName`](../object/Thing.html#pluralName) [`pronounSelector`](../object/Thing.html#pronounSelector) [`roomDarkName`](../object/Thing.html#roomDarkName) [`seen`](../object/Thing.html#seen) [`sightPresence`](../object/Thing.html#sightPresence) [`sightSize`](../object/Thing.html#sightSize) [`smellPresence`](../object/Thing.html#smellPresence) [`smellSize`](../object/Thing.html#smellSize) [`soundPresence`](../object/Thing.html#soundPresence) [`soundSize`](../object/Thing.html#soundSize) [`specialContentsLister`](../object/Thing.html#specialContentsLister) [`specialDesc`](../object/Thing.html#specialDesc) [`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents) [`specialDescListWith`](../object/Thing.html#specialDescListWith) [`specialDescOrder`](../object/Thing.html#specialDescOrder) [`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation) [`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen) [`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage) [`theDisambigName`](../object/Thing.html#theDisambigName) [`theName`](../object/Thing.html#theName) [`theNamePossNoun`](../object/Thing.html#theNamePossNoun) [`tmpAmbient_`](../object/Thing.html#tmpAmbient_) [`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_) [`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_) [`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_) [`tmpObstructor_`](../object/Thing.html#tmpObstructor_) [`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_) [`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_) [`tmpTrans_`](../object/Thing.html#tmpTrans_) [`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_) [`touchPresence`](../object/Thing.html#touchPresence) [`touchSize`](../object/Thing.html#touchSize) [`verbCan`](../object/Thing.html#verbCan) [`verbCannot`](../object/Thing.html#verbCannot) [`verbCant`](../object/Thing.html#verbCant) [`verbEndingSD`](../object/Thing.html#verbEndingSD) [`verbEndingSEd`](../object/Thing.html#verbEndingSEd) [`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_) [`verbMust`](../object/Thing.html#verbMust) [`verbToCome`](../object/Thing.html#verbToCome) [`verbToDo`](../object/Thing.html#verbToDo) [`verbToGo`](../object/Thing.html#verbToGo) [`verbToLeave`](../object/Thing.html#verbToLeave) [`verbToSay`](../object/Thing.html#verbToSay) [`verbToSee`](../object/Thing.html#verbToSee) [`verbWill`](../object/Thing.html#verbWill) [`verbWont`](../object/Thing.html#verbWont) [`weight`](../object/Thing.html#weight)

Inherited from `VocabObject` :  
[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive) [`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder) [`pluralOrder`](../object/VocabObject.html#pluralOrder) [`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood) [`vocabWords`](../object/VocabObject.html#vocabWords) [`weakTokens`](../object/VocabObject.html#weakTokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`cannotMoveActorOutOf`](#cannotMoveActorOutOf) [`cannotMoveActorToStagingLocation`](#cannotMoveActorToStagingLocation) [`checkActorInStagingLocation`](#checkActorInStagingLocation) [`checkActorOutOfNested`](#checkActorOutOfNested) [`checkActorReadyToEnterNestedRoom`](#checkActorReadyToEnterNestedRoom) [`checkMovingActorInto`](#checkMovingActorInto) [`chooseStagingLocation`](#chooseStagingLocation) [`defaultStagingLocation`](#defaultStagingLocation) [`disembarkRoom`](#disembarkRoom) [`dobjFor(GetOutOf)`](#dobjFor(GetOutOf)) [`dobjFor(Take)`](#dobjFor(Take)) [`getExtraScopeItems`](#getExtraScopeItems) [`isOwnedBy`](#isOwnedBy) [`isStagingLocationKnown`](#isStagingLocationKnown) [`makeStandingUp`](#makeStandingUp) [`mapPushTravelIobj`](#mapPushTravelIobj) [`removeFromNested`](#removeFromNested) [`roomTravelPreCond`](#roomTravelPreCond) [`tryMovingIntoNested`](#tryMovingIntoNested) [`tryRemovingFromNested`](#tryRemovingFromNested)

Inherited from `BasicLocation` :  
[`actorInGroupPrefix`](../object/BasicLocation.html#actorInGroupPrefix) [`actorInGroupSuffix`](../object/BasicLocation.html#actorInGroupSuffix) [`actorIsFamiliar`](../object/BasicLocation.html#actorIsFamiliar) [`actorKnowsDestination`](../object/BasicLocation.html#actorKnowsDestination) [`actorTravelingWithin`](../object/BasicLocation.html#actorTravelingWithin) [`addRoomNotifyItem`](../object/BasicLocation.html#addRoomNotifyItem) [`cannotGoShowExits`](../object/BasicLocation.html#cannotGoShowExits) [`cannotGoThatWay`](../object/BasicLocation.html#cannotGoThatWay) [`cannotGoThatWayInDark`](../object/BasicLocation.html#cannotGoThatWayInDark) [`cannotTravel`](../object/BasicLocation.html#cannotTravel) [`checkStagingLocation`](../object/BasicLocation.html#checkStagingLocation) [`checkTravelerDirectlyInRoom`](../object/BasicLocation.html#checkTravelerDirectlyInRoom) [`dispatchRoomDaemon`](../object/BasicLocation.html#dispatchRoomDaemon) [`enteringRoom`](../object/BasicLocation.html#enteringRoom) [`getDropDestination`](../object/BasicLocation.html#getDropDestination) [`getNominalActorContainer`](../object/BasicLocation.html#getNominalActorContainer) [`getNominalDropDestination`](../object/BasicLocation.html#getNominalDropDestination) [`getRoomNotifyList`](../object/BasicLocation.html#getRoomNotifyList) [`getStatuslineExitsHeight`](../object/BasicLocation.html#getStatuslineExitsHeight) [`isActorTravelReady`](../object/BasicLocation.html#isActorTravelReady) [`leavingRoom`](../object/BasicLocation.html#leavingRoom) [`listWithActorIn`](../object/BasicLocation.html#listWithActorIn) [`removeRoomNotifyItem`](../object/BasicLocation.html#removeRoomNotifyItem) [`roomActorHereDesc`](../object/BasicLocation.html#roomActorHereDesc) [`roomActorPostureDesc`](../object/BasicLocation.html#roomActorPostureDesc) [`roomActorStatus`](../object/BasicLocation.html#roomActorStatus) [`roomActorThereDesc`](../object/BasicLocation.html#roomActorThereDesc) [`roomAfterAction`](../object/BasicLocation.html#roomAfterAction) [`roomBeforeAction`](../object/BasicLocation.html#roomBeforeAction) [`roomDarkTravel`](../object/BasicLocation.html#roomDarkTravel) [`roomDesc`](../object/BasicLocation.html#roomDesc) [`roomListActorPosture`](../object/BasicLocation.html#roomListActorPosture) [`roomOkayPostureChange`](../object/BasicLocation.html#roomOkayPostureChange) [`showStatuslineExits`](../object/BasicLocation.html#showStatuslineExits) [`travelerArriving`](../object/BasicLocation.html#travelerArriving) [`travelerLeaving`](../object/BasicLocation.html#travelerLeaving) [`tryMakingDefaultPosture`](../object/BasicLocation.html#tryMakingDefaultPosture) [`tryMakingTravelReady`](../object/BasicLocation.html#tryMakingTravelReady) [`wouldBeLitFor`](../object/BasicLocation.html#wouldBeLitFor)

Inherited from `Thing` :  
[`acceptCommand`](../object/Thing.html#acceptCommand) [`addAllContents`](../object/Thing.html#addAllContents) [`addDirectConnections`](../object/Thing.html#addDirectConnections) [`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem) [`addToContents`](../object/Thing.html#addToContents) [`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable) [`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable) [`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination) [`afterAction`](../object/Thing.html#afterAction) [`afterTravel`](../object/Thing.html#afterTravel) [`allContents`](../object/Thing.html#allContents) [`aNameFrom`](../object/Thing.html#aNameFrom) [`aNameObj`](../object/Thing.html#aNameObj) [`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc) [`announceDefaultObject`](../object/Thing.html#announceDefaultObject) [`appendHeldContents`](../object/Thing.html#appendHeldContents) [`atmosphereList`](../object/Thing.html#atmosphereList) [`baseMoveInto`](../object/Thing.html#baseMoveInto) [`basicExamine`](../object/Thing.html#basicExamine) [`basicExamineFeel`](../object/Thing.html#basicExamineFeel) [`basicExamineListen`](../object/Thing.html#basicExamineListen) [`basicExamineSmell`](../object/Thing.html#basicExamineSmell) [`basicExamineTaste`](../object/Thing.html#basicExamineTaste) [`beforeAction`](../object/Thing.html#beforeAction) [`beforeTravel`](../object/Thing.html#beforeTravel) [`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths) [`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo) [`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo) [`cacheSensePath`](../object/Thing.html#cacheSensePath) [`canBeHeardBy`](../object/Thing.html#canBeHeardBy) [`canBeSeenBy`](../object/Thing.html#canBeSeenBy) [`canBeSensed`](../object/Thing.html#canBeSensed) [`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy) [`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy) [`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed) [`canHear`](../object/Thing.html#canHear) [`canMatchPronounType`](../object/Thing.html#canMatchPronounType) [`canMoveViaPath`](../object/Thing.html#canMoveViaPath) [`cannotReachObject`](../object/Thing.html#cannotReachObject) [`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource) [`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource) [`canOwn`](../object/Thing.html#canOwn) [`canSee`](../object/Thing.html#canSee) [`canSmell`](../object/Thing.html#canSmell) [`canThrowViaPath`](../object/Thing.html#canThrowViaPath) [`canTouch`](../object/Thing.html#canTouch) [`canTouchViaPath`](../object/Thing.html#canTouchViaPath) [`checkBulkChange`](../object/Thing.html#checkBulkChange) [`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin) [`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath) [`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath) [`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath) [`childInName`](../object/Thing.html#childInName) [`childInNameGen`](../object/Thing.html#childInNameGen) [`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner) [`childInRemoteName`](../object/Thing.html#childInRemoteName) [`clearSenseInfo`](../object/Thing.html#clearSenseInfo) [`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents) [`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents) [`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb) [`connectionTable`](../object/Thing.html#connectionTable) [`construct`](../object/Thing.html#construct) [`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn) [`countDisambigName`](../object/Thing.html#countDisambigName) [`countListName`](../object/Thing.html#countListName) [`countName`](../object/Thing.html#countName) [`countNameFrom`](../object/Thing.html#countNameFrom) [`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc) [`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister) [`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc) [`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc) [`desc`](../object/Thing.html#desc) [`directionForConnector`](../object/Thing.html#directionForConnector) [`distantSmellDesc`](../object/Thing.html#distantSmellDesc) [`distantSoundDesc`](../object/Thing.html#distantSoundDesc) [`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout)) [`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor)) [`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague)) [`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo)) [`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack)) [`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith)) [`dobjFor(Board)`](../object/Thing.html#dobjFor(Board)) [`dobjFor(Break)`](../object/Thing.html#dobjFor(Break)) [`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn)) [`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith)) [`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean)) [`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith)) [`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb)) [`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown)) [`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp)) [`dobjFor(Close)`](../object/Thing.html#dobjFor(Close)) [`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult)) [`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout)) [`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith)) [`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach)) [`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom)) [`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig)) [`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith)) [`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff)) [`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink)) [`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop)) [`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat)) [`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter)) [`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn)) [`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine)) [`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish)) [`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten)) [`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo)) [`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel)) [`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip)) [`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow)) [`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf)) [`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo)) [`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough)) [`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff)) [`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver)) [`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss)) [`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn)) [`dobjFor(Light)`](../object/Thing.html#dobjFor(Light)) [`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo)) [`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock)) [`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith)) [`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind)) [`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn)) [`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough)) [`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder)) [`dobjFor(Move)`](../object/Thing.html#dobjFor(Move)) [`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo)) [`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith)) [`dobjFor(Open)`](../object/Thing.html#dobjFor(Open)) [`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn)) [`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto)) [`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour)) [`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto)) [`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto)) [`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull)) [`dobjFor(Push)`](../object/Thing.html#dobjFor(Push)) [`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel)) [`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind)) [`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn)) [`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn)) [`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder)) [`dobjFor(Read)`](../object/Thing.html#dobjFor(Read)) [`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove)) [`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw)) [`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith)) [`dobjFor(Search)`](../object/Thing.html#dobjFor(Search)) [`dobjFor(Set)`](../object/Thing.html#dobjFor(Set)) [`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo)) [`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo)) [`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn)) [`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell)) [`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn)) [`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike)) [`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch)) [`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom)) [`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo)) [`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste)) [`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout)) [`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague)) [`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw)) [`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt)) [`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir)) [`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo)) [`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn)) [`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff)) [`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn)) [`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo)) [`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith)) [`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn)) [`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn)) [`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten)) [`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom)) [`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock)) [`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith)) [`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug)) [`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom)) [`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew)) [`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith)) [`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear)) [`examineListContents`](../object/Thing.html#examineListContents) [`examineListContentsWith`](../object/Thing.html#examineListContentsWith) [`examineSpecialContents`](../object/Thing.html#examineSpecialContents) [`examineStatus`](../object/Thing.html#examineStatus) [`failCheck`](../object/Thing.html#failCheck) [`feelDesc`](../object/Thing.html#feelDesc) [`fillMedium`](../object/Thing.html#fillMedium) [`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor) [`findTouchObstructor`](../object/Thing.html#findTouchObstructor) [`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer) [`forEachContainer`](../object/Thing.html#forEachContainer) [`fromPOV`](../object/Thing.html#fromPOV) [`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom) [`getAllPathsTo`](../object/Thing.html#getAllPathsTo) [`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher) [`getBagAffinities`](../object/Thing.html#getBagAffinities) [`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding) [`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher) [`getBulk`](../object/Thing.html#getBulk) [`getBulkWithin`](../object/Thing.html#getBulkWithin) [`getCarryingActor`](../object/Thing.html#getCarryingActor) [`getCommonContainer`](../object/Thing.html#getCommonContainer) [`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer) [`getConnectedContainers`](../object/Thing.html#getConnectedContainers) [`getConnectorTo`](../object/Thing.html#getConnectorTo) [`getContentsForExamine`](../object/Thing.html#getContentsForExamine) [`getDestName`](../object/Thing.html#getDestName) [`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk) [`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight) [`getHitFallDestination`](../object/Thing.html#getHitFallDestination) [`getIdentityObject`](../object/Thing.html#getIdentityObject) [`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher) [`getListedContents`](../object/Thing.html#getListedContents) [`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler) [`getLocTraveler`](../object/Thing.html#getLocTraveler) [`getMovePathTo`](../object/Thing.html#getMovePathTo) [`getNoise`](../object/Thing.html#getNoise) [`getNominalOwner`](../object/Thing.html#getNominalOwner) [`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList) [`getOdor`](../object/Thing.html#getOdor) [`getOutermostRoom`](../object/Thing.html#getOutermostRoom) [`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom) [`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation) [`getStateWithInfo`](../object/Thing.html#getStateWithInfo) [`getThrowPathTo`](../object/Thing.html#getThrowPathTo) [`getTouchPathTo`](../object/Thing.html#getTouchPathTo) [`getTravelConnector`](../object/Thing.html#getTravelConnector) [`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo) [`getWeight`](../object/Thing.html#getWeight) [`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup) [`hideFromAll`](../object/Thing.html#hideFromAll) [`hideFromDefault`](../object/Thing.html#hideFromDefault) [`initializeEquivalent`](../object/Thing.html#initializeEquivalent) [`initializeLocation`](../object/Thing.html#initializeLocation) [`initializeThing`](../object/Thing.html#initializeThing) [`inRoomName`](../object/Thing.html#inRoomName) [`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo)) [`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith)) [`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith)) [`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith)) [`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith)) [`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom)) [`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith)) [`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo)) [`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo)) [`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith)) [`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith)) [`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto)) [`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto)) [`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto)) [`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind)) [`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn)) [`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn)) [`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder)) [`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith)) [`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo)) [`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom)) [`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt)) [`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo)) [`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith)) [`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom)) [`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith)) [`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom)) [`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith)) [`isComponentOf`](../object/Thing.html#isComponentOf) [`isDirectlyIn`](../object/Thing.html#isDirectlyIn) [`isHeldBy`](../object/Thing.html#isHeldBy) [`isIn`](../object/Thing.html#isIn) [`isInFixedIn`](../object/Thing.html#isInFixedIn) [`isListed`](../object/Thing.html#isListed) [`isListedInContents`](../object/Thing.html#isListedInContents) [`isListedInInventory`](../object/Thing.html#isListedInInventory) [`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart) [`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling) [`isNominallyIn`](../object/Thing.html#isNominallyIn) [`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart) [`isOccludedBy`](../object/Thing.html#isOccludedBy) [`isOrIsIn`](../object/Thing.html#isOrIsIn) [`isShipboard`](../object/Thing.html#isShipboard) [`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent) [`itIs`](../object/Thing.html#itIs) [`itNom`](../object/Thing.html#itNom) [`itObj`](../object/Thing.html#itObj) [`itPossAdj`](../object/Thing.html#itPossAdj) [`itPossNoun`](../object/Thing.html#itPossNoun) [`itVerb`](../object/Thing.html#itVerb) [`listCardinality`](../object/Thing.html#listCardinality) [`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector) [`lookAround`](../object/Thing.html#lookAround) [`lookAroundPov`](../object/Thing.html#lookAroundPov) [`lookAroundWithin`](../object/Thing.html#lookAroundWithin) [`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents) [`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc) [`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName) [`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense) [`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits) [`lookInDesc`](../object/Thing.html#lookInDesc) [`mainExamine`](../object/Thing.html#mainExamine) [`mainMoveInto`](../object/Thing.html#mainMoveInto) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`meetsObjHeld`](../object/Thing.html#meetsObjHeld) [`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo) [`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable) [`moveInto`](../object/Thing.html#moveInto) [`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel) [`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath) [`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto) [`nameIs`](../object/Thing.html#nameIs) [`nameIsnt`](../object/Thing.html#nameIsnt) [`nameVerb`](../object/Thing.html#nameVerb) [`normalizePath`](../object/Thing.html#normalizePath) [`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc) [`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj) [`noteSeenBy`](../object/Thing.html#noteSeenBy) [`notifyInsert`](../object/Thing.html#notifyInsert) [`notifyMoveInto`](../object/Thing.html#notifyMoveInto) [`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath) [`notifyRemove`](../object/Thing.html#notifyRemove) [`obscuredDesc`](../object/Thing.html#obscuredDesc) [`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc) [`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc) [`pluralNameFrom`](../object/Thing.html#pluralNameFrom) [`processThrow`](../object/Thing.html#processThrow) [`propHidesProp`](../object/Thing.html#propHidesProp) [`propWithPresent`](../object/Thing.html#propWithPresent) [`putInName`](../object/Thing.html#putInName) [`receiveDrop`](../object/Thing.html#receiveDrop) [`remoteDesc`](../object/Thing.html#remoteDesc) [`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc) [`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister) [`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc) [`removeFromContents`](../object/Thing.html#removeFromContents) [`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem) [`restoreLocation`](../object/Thing.html#restoreLocation) [`roomContentsLister`](../object/Thing.html#roomContentsLister) [`roomDaemon`](../object/Thing.html#roomDaemon) [`roomDarkDesc`](../object/Thing.html#roomDarkDesc) [`roomFirstDesc`](../object/Thing.html#roomFirstDesc) [`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc) [`saveLocation`](../object/Thing.html#saveLocation) [`selectPathTo`](../object/Thing.html#selectPathTo) [`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert) [`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove) [`senseAmbientMax`](../object/Thing.html#senseAmbientMax) [`senseInfoTable`](../object/Thing.html#senseInfoTable) [`senseObj`](../object/Thing.html#senseObj) [`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin) [`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout) [`sensePathToContents`](../object/Thing.html#sensePathToContents) [`sensePathToLoc`](../object/Thing.html#sensePathToLoc) [`sensePresenceList`](../object/Thing.html#sensePresenceList) [`setAllSeenBy`](../object/Thing.html#setAllSeenBy) [`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy) [`setGlobalParamName`](../object/Thing.html#setGlobalParamName) [`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo) [`shineFromWithin`](../object/Thing.html#shineFromWithin) [`shineFromWithout`](../object/Thing.html#shineFromWithout) [`shineOnContents`](../object/Thing.html#shineOnContents) [`shineOnLoc`](../object/Thing.html#shineOnLoc) [`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc) [`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents) [`showInventoryContents`](../object/Thing.html#showInventoryContents) [`showInventoryItem`](../object/Thing.html#showInventoryItem) [`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted) [`showListItem`](../object/Thing.html#showListItem) [`showListItemCounted`](../object/Thing.html#showListItemCounted) [`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen) [`showListItemGen`](../object/Thing.html#showListItemGen) [`showObjectContents`](../object/Thing.html#showObjectContents) [`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc) [`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents) [`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc) [`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents) [`showSpecialDesc`](../object/Thing.html#showSpecialDesc) [`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents) [`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo) [`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo) [`showWornItem`](../object/Thing.html#showWornItem) [`showWornItemCounted`](../object/Thing.html#showWornItemCounted) [`smellDesc`](../object/Thing.html#smellDesc) [`smellHereDesc`](../object/Thing.html#smellHereDesc) [`soundDesc`](../object/Thing.html#soundDesc) [`soundHereDesc`](../object/Thing.html#soundHereDesc) [`specialDescList`](../object/Thing.html#specialDescList) [`specialPathFrom`](../object/Thing.html#specialPathFrom) [`statusName`](../object/Thing.html#statusName) [`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath) [`superHidesSuper`](../object/Thing.html#superHidesSuper) [`tasteDesc`](../object/Thing.html#tasteDesc) [`thatNom`](../object/Thing.html#thatNom) [`thatObj`](../object/Thing.html#thatObj) [`theNameFrom`](../object/Thing.html#theNameFrom) [`theNameObj`](../object/Thing.html#theNameObj) [`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc) [`theNameWithOwner`](../object/Thing.html#theNameWithOwner) [`throwTargetCatch`](../object/Thing.html#throwTargetCatch) [`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith) [`throwViaPath`](../object/Thing.html#throwViaPath) [`transmitAmbient`](../object/Thing.html#transmitAmbient) [`transSensingIn`](../object/Thing.html#transSensingIn) [`transSensingOut`](../object/Thing.html#transSensingOut) [`traversePath`](../object/Thing.html#traversePath) [`tryHolding`](../object/Thing.html#tryHolding) [`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor) [`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto) [`useInitDesc`](../object/Thing.html#useInitDesc) [`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc) [`useSpecialDesc`](../object/Thing.html#useSpecialDesc) [`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents) [`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom) [`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart) [`verbEndingEs`](../object/Thing.html#verbEndingEs) [`verbEndingIes`](../object/Thing.html#verbEndingIes) [`verbEndingS`](../object/Thing.html#verbEndingS) [`verbToHave`](../object/Thing.html#verbToHave) [`verbWas`](../object/Thing.html#verbWas) [`verifyFollowable`](../object/Thing.html#verifyFollowable) [`verifyInsert`](../object/Thing.html#verifyInsert) [`verifyMoveTo`](../object/Thing.html#verifyMoveTo) [`verifyRemove`](../object/Thing.html#verifyRemove) [`whatIf`](../object/Thing.html#whatIf) [`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy) [`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary) [`expandPronounList`](../object/VocabObject.html#expandPronounList) [`filterResolveList`](../object/VocabObject.html#filterResolveList) [`getFacets`](../object/VocabObject.html#getFacets) [`inheritVocab`](../object/VocabObject.html#inheritVocab) [`initializeVocab`](../object/VocabObject.html#initializeVocab) [`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith) [`matchName`](../object/VocabObject.html#matchName) [`matchNameCommon`](../object/VocabObject.html#matchNameCommon) [`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig) [`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation) [`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive) [`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="bulkCapacity"></span>

`bulkCapacity`

[travel.t](../file/travel.t.html)\[[5634](../source/travel.t.html#5634)\]



The maximum bulk the room can hold. We'll define this to a large number
by default so that bulk isn't a concern.

Lower numbers here can be used, for example, to limit the seating
capacity of a chair.



<span id="exitDestination"></span>

`exitDestination`

[travel.t](../file/travel.t.html)\[[6132](../source/travel.t.html#6132)\]



Our exit destination. This is where an actor ends up when the actor is
immediately inside this nested room and uses a "get out of" or
equivalent command to exit the nested room.

By default, we'll use the default staging location as the exit
destination.



<span id="mustMoveIntoProp"></span>

`mustMoveIntoProp`

[travel.t](../file/travel.t.html)\[[5770](../source/travel.t.html#5770)\]



message property to use for reportFailure when tryMovingIntoNested fails



<span id="out"></span>

`out`

[travel.t](../file/travel.t.html)\[[5688](../source/travel.t.html#5688)\]



By default, 'out' within a nested room should take us out of the nested
room itself. The easy way to accomplish this is to set up a
'nestedRoomOut' connector for the nested room, which will automatically
try a GET OUT command. If we didn't do this, we'd \*usually\* pick up
the noTravelOut from our enclosing room, but only when the enclosing
room didn't override 'out' to point somewhere else. Explicitly setting
up a 'noTravelOut' here ensures that we'll consistently GET OUT of the
nested room even if the enclosing room has its own 'out' destination.

Note that nestedRoomOut shows as a listed exit in exit listings (for the
EXITS command and in the status line). If you don't want OUT to be
listed as an available exit for the nested room, you should override
this to use noTravelOut instead.



<span id="roomName"></span>

`roomName`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5600](../source/travel.t.html#5600)\]



Our interior room name. This is the status line name we display when an
actor is within this object and can't see out to the enclosing room.
Since we can't rely on the enclosing room's status line name if we can't
see the enclosing room, we must provide one of our own.

By default, we'll use our regular name.



<span id="stagingLocations"></span>

`stagingLocations`

[travel.t](../file/travel.t.html)\[[6122](../source/travel.t.html#6122)\]



The valid "staging locations" for this nested room. This is a list of
the rooms from which an actor can DIRECTLY reach this nested room; in
other words, the actor will be allowed to enter 'self', with no
intervening travel, if the actor is directly in any of these locations.

If the list is empty, there are no valid staging locations.

The point of listing staging locations is to make certain that the actor
has to go through one of these locations in order to get into this
nested room. This ensures that we enforce any conditions or trigger any
side effects of moving through the staging locations, so that a player
can't bypass a puzzle by trying to move directly from one location to
another without going through the required intermediate steps. Since we
always require that an actor go through one of our staging locations in
order to enter this nested room, and since we carry out the travel to
the staging location using implied commands (which are just ordinary
commands, entered and executed automatically by the parser), we can
avoid having to code any checks redudantly in both the staging locations
and any other nearby locations.

By default, an actor can only enter a nested room from the room's direct
container. For example, if a chair is on a stage, an actor must be
standing on the stage before the actor can sit on the chair.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="cannotMoveActorOutOf"></span>

`cannotMoveActorOutOf ( )`

[travel.t](../file/travel.t.html)\[[6087](../source/travel.t.html#6087)\]



Report that we are unable to move an actor out of this nested room,
because there's no valid 'exit destination'. This is called when we
attempt to GET OUT OF the nested room, and the 'exitDestination'
property is nil.



<span id="cannotMoveActorToStagingLocation"></span>

`cannotMoveActorToStagingLocation ( )`

[travel.t](../file/travel.t.html)\[[6075](../source/travel.t.html#6075)\]



Report that we are unable to move an actor to any staging location for
this nested room. By default, we'll generate the message "you can't do
that from here," but this can overridden to provide a more specific if
desired.



<span id="checkActorInStagingLocation"></span>

`checkActorInStagingLocation (allowImplicit)`

[travel.t](../file/travel.t.html)\[[5927](../source/travel.t.html#5927)\]



Check, using precondition rules, that the actor is in a valid "staging
location" for entering this nested room. We'll ensure that the actor is
directly in one of the locations in our stagingLocations list, running
an appropriate implicit command to move the actor to the first item in
that list if the actor isn't in any of them.

This isn't normally overridden in subclasses.



<span id="checkActorOutOfNested"></span>

`checkActorOutOfNested (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5862](../source/travel.t.html#5862)\]



Check, using pre-condition rules, that the actor is removed from this
nested location and moved to my immediate location. This is used to
enforce a precondition that the actor is in the enclosing location.

This isn't normally overridden in subclasses.



<span id="checkActorReadyToEnterNestedRoom"></span>

`checkActorReadyToEnterNestedRoom (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5889](../source/travel.t.html#5889)\]



Check, using pre-condition rules, that the actor is ready to enter this
room as a nested location.

This isn't normally overridden in subclasses.



<span id="checkMovingActorInto"></span>

`checkMovingActorInto (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5814](../source/travel.t.html#5814)\]



Try moving the actor into this location. This is used to move the actor
into this location as part of meeting preconditions, and we use the
normal precondition check protocol: we return nil if the condition
(actor is in this room) is already met; we return true if we
successfully execute an implied command to meet the condition; and we
report a failure message and terminate the command with 'exit' if we
don't know how to meet the condition or the implied command we try to
execute fails or fails to satisfy the condition.

This does not normally need to be overridden in subclasses.



<span id="chooseStagingLocation"></span>

`chooseStagingLocation ( )`

[travel.t](../file/travel.t.html)\[[6022](../source/travel.t.html#6022)\]



Choose an intermediate staging location, given the actor's current
location. This routine is called when the actor is attempting to move
into 'self', but isn't in any of the allowed staging locations for
'self'; this routine's purpose is to choose the staging location that
the actor should implicitly try to reach on the way to 'self'.

By default, we'll attempt to find the first of our staging locations
that indirectly contains the actor. (We know none of the staging
locations directly contains the actor, because if one did, we wouldn't
be called in the first place - we're only called when the actor isn't
already directly in one of our staging locations.) This approach is
appropriate when nested rooms are related purely by containment: if an
actor is in a nested room within one of our staging locations, we can
reach that staging location by having the actor get out of the more
deeply nested room.

However, this default approach is not appropriate when nested rooms are
related in some way other than simple containment. We don't have any
general framework for other types of nested room relationships, so this
routine must be overridden in such a case with special-purpose code
defining the special relationship.

If we fail to find any staging location indirectly containing the actor,
we'll return the result of defaultStagingLocation().



<span id="defaultStagingLocation"></span>

`defaultStagingLocation ( )`

[travel.t](../file/travel.t.html)\[[6050](../source/travel.t.html#6050)\]



The default staging location for this nested room. This is the staging
location we'll attempt to reach implicitly if the actor isn't in any of
the rooms in the stagingLocations list already. We'll return the first
element of our stagingLocations list for which isStagingLocationKnown
returns true.



<span id="disembarkRoom"></span>

`disembarkRoom ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5695](../source/travel.t.html#5695)\]



An actor is attempting to "get out" while in this location. By default,
we'll treat this as getting out of this object. This can be overridden
if "get out" should do something different.



<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6201](../source/travel.t.html#6201)\]



"get out of" action - exit the nested room



<span id="dobjFor(Take)"></span>

`dobjFor(Take)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6185](../source/travel.t.html#6185)\]



We cannot take a nested room that the actor is occupying



<span id="getExtraScopeItems"></span>

`getExtraScopeItems (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5663](../source/travel.t.html#5663)\]



Get the extra scope items within this room. Normally, the immediately
enclosing nested room is in scope for an actor in the room. So, if the
actor is directly in 'self', return 'self'.



<span id="isOwnedBy"></span>

`isOwnedBy (obj)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5645](../source/travel.t.html#5645)\]



Check for ownership. For a nested room, an actor can be taken to own the
nested room by virtue of being inside the room - the chair Bob is
sitting in can be called "bob's chair".

If we don't have an explicit owner, and the potential owner 'obj' is in
me and can own me, we'll report that 'obj' does in fact own me.
Otherwise, we'll defer to the inherited implementation.



<span id="isStagingLocationKnown"></span>

`isStagingLocationKnown (loc)`

[travel.t](../file/travel.t.html)\[[6154](../source/travel.t.html#6154)\]



Is the given staging location "known"? This returns true if the staging
location is usable as a default, nil if not. If this returns true, then
the location can be used in an implied command to move the actor to the
staging location in order to move the actor into self.

If this returns nil, no implied command will be attempted for this
possible staging location. This doesn't mean that an actor gets a free
pass through the staging location; on the contrary, it simply means that
we won't try any automatic command to move an actor to the staging
location, hence travel from a non-staging location to this nested room
will simply fail. This can be used when part of the puzzle is to figure
out that moving to the staging location is required in the first place:
if we allowed an implied command in such cases, we'd give away the
puzzle by solving it automatically.

By default, we'll treat all of our staging locations as known.



<span id="makeStandingUp"></span>

`makeStandingUp ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[5706](../source/travel.t.html#5706)\]



Make the actor stand up from this location. By default, we'll cause the
actor to travel (using travelWithin) to our container, and assume the
appropriate posture for the container.



<span id="mapPushTravelIobj"></span>

`mapPushTravelIobj (PushTravelGetOutOf, TravelVia)`

[travel.t](../file/travel.t.html)\[[6249](../source/travel.t.html#6249)\]



explicitly define the push-travel indirect object mappings



<span id="removeFromNested"></span>

`removeFromNested ( )`

[travel.t](../file/travel.t.html)\[[5796](../source/travel.t.html#5796)\]



Replace the current action with one that removes the actor from this
nested room. This is used to implement the GET OUT command when the
actor is directly in this nested room. In most cases, this should simply
be implemented with a call to replaceAction() with the appropriate
command.



<span id="roomTravelPreCond"></span>

`roomTravelPreCond ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[6162](../source/travel.t.html#6162)\]



Get the travel preconditions for an actor in this location. By default,
if we have a container, and the actor can see the container, we'll
return its travel preconditions; otherwise, we'll use our inherited
preconditions.



<span id="tryMovingIntoNested"></span>

`tryMovingIntoNested ( )`

[travel.t](../file/travel.t.html)\[[5760](../source/travel.t.html#5760)\]



Try an implied command to move the actor from outside of this nested
room into this nested room. This must be overridden in subclasses to
carry out the appropriate implied command. Returns the result of
tryImplicitAction().

This is called when we need to move an actor into this location as part
of an implied command. We use an overridable method because different
kinds of nested rooms have different commands for entering: SIT ON
CHAIR, LIE ON BED, GET IN CAR, RIDE BIKE, and so on. This should be
normally be overridden imply by calling tryImplicitAction() with the
appropriate command for the specific type of nested room, and returning
the result.



<span id="tryRemovingFromNested"></span>

`tryRemovingFromNested ( )`

[travel.t](../file/travel.t.html)\[[5783](../source/travel.t.html#5783)\]



Try an implied command to remove an actor from this location and place
the actor in my immediate containing location. This must be overridden
in subclasses to carry out the appropriate implied command. Returns the
result of tryImplicitAction().

This is essentially the reverse of tryMovingIntoNested(), and should in
most cases be implemented by calling tryImplicitAction() with the
appropriate command to get out of the room, and returning the result.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


