---
layout: docs
---
<span class="title">Thing</span><span class="type">class</span>

[thing.t](../file/thing.t.html)\[[1075](../source/thing.t.html#1075)\],
[en_us.t](../file/en_us.t.html)\[[684](../source/en_us.t.html#684)\]

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

Thing: the basic class for game objects. An object of this class
represents a physical object in the simulation.

*Modified in
[en_us.t](../file/en_us.t.html)\[[684](../source/en_us.t.html#684)\]:*  
Language-specific modifications for Thing. This class contains the
methods and properties of Thing that need to be replaced when the
library is translated to another language.

The properties and methods defined here should generally never be used
by language-independent library code, because everything defined here is
specific to English. Translators are thus free to change the entire
scheme defined here. For example, the notions of number and gender are
confined to the English part of the library; other language
implementations can completely replace these attributes, so they're not
constrained to emulate their own number and gender systems with the
English system.

`class `**`Thing`**` :   `[`VocabObject`](../object/VocabObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Thing`**  
[`VocabObject`](../object/VocabObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Thing`**  
[`Actor`](../object/Actor.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`BasicLocation`](../object/BasicLocation.html)  
[`NestedRoom`](../object/NestedRoom.html)  
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
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`BulkLimiter`](../object/BulkLimiter.html)  
[`BasicContainer`](../object/BasicContainer.html)  
[`Container`](../object/Container.html)  
[`Booth`](../object/Booth.html)  
[`Dispenser`](../object/Dispenser.html)  
[`Matchbook`](../object/Matchbook.html)  
[`OpenableContainer`](../object/OpenableContainer.html)  
[`KeyedContainer`](../object/KeyedContainer.html)  
[`LockableContainer`](../object/LockableContainer.html)  
[`RestrictedContainer`](../object/RestrictedContainer.html)  
[`SingleContainer`](../object/SingleContainer.html)  
[`StretchyContainer`](../object/StretchyContainer.html)  
[`SpaceOverlay`](../object/SpaceOverlay.html)  
[`RearContainer`](../object/RearContainer.html)  
[`RearSurface`](../object/RearSurface.html)  
[`RestrictedRearSurface`](../object/RestrictedRearSurface.html)  
[`RestrictedRearContainer`](../object/RestrictedRearContainer.html)  
[`Underside`](../object/Underside.html)  
[`RestrictedUnderside`](../object/RestrictedUnderside.html)  
[`Surface`](../object/Surface.html)  
[`Bed`](../object/Bed.html)  
[`Chair`](../object/Chair.html)  
[`Platform`](../object/Platform.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`RestrictedSurface`](../object/RestrictedSurface.html)  
[`Button`](../object/Button.html)  
[`CollectiveGroup`](../object/CollectiveGroup.html)  
[`ItemizingCollectiveGroup`](../object/ItemizingCollectiveGroup.html)  
[`ComplexContainer`](../object/ComplexContainer.html)  
[`Consultable`](../object/Consultable.html)  
[`Dispensable`](../object/Dispensable.html)  
[`FillMedium`](../object/FillMedium.html)  
[`Food`](../object/Food.html)  
[`Hidden`](../object/Hidden.html)  
[`Intangible`](../object/Intangible.html)  
[`DistanceConnector`](../object/DistanceConnector.html)  
[`SensoryEmanation`](../object/SensoryEmanation.html)  
[`Noise`](../object/Noise.html)  
[`SimpleNoise`](../object/SimpleNoise.html)  
[`Odor`](../object/Odor.html)  
[`SimpleOdor`](../object/SimpleOdor.html)  
[`Vaporous`](../object/Vaporous.html)  
[`Key`](../object/Key.html)  
[`Keyring`](../object/Keyring.html)  
[`Lever`](../object/Lever.html)  
[`SpringLever`](../object/SpringLever.html)  
[`LightSource`](../object/LightSource.html)  
[`Flashlight`](../object/Flashlight.html)  
[`FueledLightSource`](../object/FueledLightSource.html)  
[`Candle`](../object/Candle.html)  
[`Matchstick`](../object/Matchstick.html)  
[`NonPortable`](../object/NonPortable.html)  
[`Fixture`](../object/Fixture.html)  
[`Component`](../object/Component.html)  
[`ComplexComponent`](../object/ComplexComponent.html)  
[`ContainerDoor`](../object/ContainerDoor.html)  
[`CustomFixture`](../object/CustomFixture.html)  
[`Decoration`](../object/Decoration.html)  
[`Unthing`](../object/Unthing.html)  
[`Distant`](../object/Distant.html)  
[`Enterable`](../object/Enterable.html)  
[`EntryPortal`](../object/EntryPortal.html)  
[`Exitable`](../object/Exitable.html)  
[`ExitPortal`](../object/ExitPortal.html)  
[`NestedRoomFloor`](../object/NestedRoomFloor.html)  
[`NominalPlatform`](../object/NominalPlatform.html)  
[`Passage`](../object/Passage.html)  
[`Stairway`](../object/Stairway.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`ThroughPassage`](../object/ThroughPassage.html)  
[`BasicDoor`](../object/BasicDoor.html)  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`HiddenDoor`](../object/HiddenDoor.html)  
[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`RoomPart`](../object/RoomPart.html)  
[`DefaultWall`](../object/DefaultWall.html)  
[`Floor`](../object/Floor.html)  
[`SecretFixture`](../object/SecretFixture.html)  
[`Immovable`](../object/Immovable.html)  
[`CustomImmovable`](../object/CustomImmovable.html)  
[`Heavy`](../object/Heavy.html)  
[`TravelPushable`](../object/TravelPushable.html)  
[`UntakeableActor`](../object/UntakeableActor.html)  
[`Person`](../object/Person.html)  
[`OnOffControl`](../object/OnOffControl.html)  
[`Switch`](../object/Switch.html)  
[`Flashlight`](../object/Flashlight.html)  
[`Readable`](../object/Readable.html)  
[`Settable`](../object/Settable.html)  
[`Dial`](../object/Dial.html)  
[`LabeledDial`](../object/LabeledDial.html)  
[`NumberedDial`](../object/NumberedDial.html)  
[`TravelConnector`](../object/TravelConnector.html)  
[`AskConnector`](../object/AskConnector.html)  
[`DefaultAskConnector`](../object/DefaultAskConnector.html)  
[`Passage`](../object/Passage.html)  
[`Stairway`](../object/Stairway.html)  
[`StairwayDown`](../object/StairwayDown.html)  
[`StairwayUp`](../object/StairwayUp.html)  
[`ThroughPassage`](../object/ThroughPassage.html)  
[`BasicDoor`](../object/BasicDoor.html)  
[`Door`](../object/Door.html)  
[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
[`SecretDoor`](../object/SecretDoor.html)  
[`HiddenDoor`](../object/HiddenDoor.html)  
[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
[`PathPassage`](../object/PathPassage.html)  
[`RoomConnector`](../object/RoomConnector.html)  
[`OneWayRoomConnector`](../object/OneWayRoomConnector.html)  
[`RoomAutoConnector`](../object/RoomAutoConnector.html)  
[`Room`](../object/Room.html)  
[`DarkRoom`](../object/DarkRoom.html)  
[`FloorlessRoom`](../object/FloorlessRoom.html)  
[`OutdoorRoom`](../object/OutdoorRoom.html)  
[`ShipboardRoom`](../object/ShipboardRoom.html)  
[`TravelMessage`](../object/TravelMessage.html)  
[`DeadEndConnector`](../object/DeadEndConnector.html)  
[`NoTravelMessage`](../object/NoTravelMessage.html)  
[`FakeConnector`](../object/FakeConnector.html)  
[`Wearable`](../object/Wearable.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`lightProbe`](../object/lightProbe.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actorInAName`](#actorInAName)[`actorInName`](#actorInName)[`actorInPrep`](#actorInPrep)[`actorIntoName`](#actorIntoName)[`actorOutOfName`](#actorOutOfName)[`actorOutOfPrep`](#actorOutOfPrep)[`aDisambigName`](#aDisambigName)[`allStates`](#allStates)[`aName`](#aName)[`brightness`](#brightness)[`bulk`](#bulk)[`canBeHeard`](#canBeHeard)[`canBeSeen`](#canBeSeen)[`canBeSmelled`](#canBeSmelled)[`canBeTouched`](#canBeTouched)[`canMatchHer`](#canMatchHer)[`canMatchHim`](#canMatchHim)[`canMatchIt`](#canMatchIt)[`canMatchThem`](#canMatchThem)[`circularlyInMessage`](#circularlyInMessage)[`collectiveGroup`](#collectiveGroup)[`collectiveGroups`](#collectiveGroups)[`contents`](#contents)[`contentsListed`](#contentsListed)[`contentsListedInExamine`](#contentsListedInExamine)[`contentsListedSeparately`](#contentsListedSeparately)[`contentsLister`](#contentsLister)[`descContentsLister`](#descContentsLister)[`described`](#described)[`disambigEquivName`](#disambigEquivName)[`disambigName`](#disambigName)[`distantDesc`](#distantDesc)[`distantInitSpecialDesc`](#distantInitSpecialDesc)[`distantSpecialDesc`](#distantSpecialDesc)[`distinguishers`](#distinguishers)[`dummyName`](#dummyName)[`effectiveFollowLocation`](#effectiveFollowLocation)[`equivalenceKey`](#equivalenceKey)[`equivalentGrouper`](#equivalentGrouper)[`equivalentGrouperClass`](#equivalentGrouperClass)[`equivalentGrouperTable`](#equivalentGrouperTable)[`esEndingPat`](#esEndingPat)[`explicitVisualSenseInfo`](#explicitVisualSenseInfo)[`getState`](#getState)[`globalParamName`](#globalParamName)[`holdingIndex`](#holdingIndex)[`iesEndingPat`](#iesEndingPat)[`initDesc`](#initDesc)[`initNominalRoomPartLocation`](#initNominalRoomPartLocation)[`initSpecialDesc`](#initSpecialDesc)[`inlineContentsLister`](#inlineContentsLister)[`isEquivalent`](#isEquivalent)[`isHer`](#isHer)[`isHim`](#isHim)[`isInInitState`](#isInInitState)[`isKnown`](#isKnown)[`isLikelyCommandTarget`](#isLikelyCommandTarget)[`isListedAboardVehicle`](#isListedAboardVehicle)[`isMassNoun`](#isMassNoun)[`isPlural`](#isPlural)[`isProperName`](#isProperName)[`isQualifiedName`](#isQualifiedName)[`isThingConstructed`](#isThingConstructed)[`isTopLevel`](#isTopLevel)[`listName`](#listName)[`listWith`](#listWith)[`location`](#location)[`lookInLister`](#lookInLister)[`moved`](#moved)[`name`](#name)[`nameDoes`](#nameDoes)[`nameSays`](#nameSays)[`nameSees`](#nameSees)[`notTravelReadyMsg`](#notTravelReadyMsg)[`objectNotifyList`](#objectNotifyList)[`objInPrep`](#objInPrep)[`obscuredInitSpecialDesc`](#obscuredInitSpecialDesc)[`obscuredSpecialDesc`](#obscuredSpecialDesc)[`owner`](#owner)[`patElevenEighteen`](#patElevenEighteen)[`patIsAlpha`](#patIsAlpha)[`patLeadingTagOrQuote`](#patLeadingTagOrQuote)[`patOfPhrase`](#patOfPhrase)[`patOneLetterAnWord`](#patOneLetterAnWord)[`patOneLetterWord`](#patOneLetterWord)[`patSingleApostropheS`](#patSingleApostropheS)[`patTagOrQuoteChar`](#patTagOrQuoteChar)[`patUpperOrDigit`](#patUpperOrDigit)[`patVowelY`](#patVowelY)[`pluralDisambigName`](#pluralDisambigName)[`pluralName`](#pluralName)[`pronounSelector`](#pronounSelector)[`roomDarkName`](#roomDarkName)[`roomLocation`](#roomLocation)[`roomName`](#roomName)[`seen`](#seen)[`sightPresence`](#sightPresence)[`sightSize`](#sightSize)[`smellPresence`](#smellPresence)[`smellSize`](#smellSize)[`soundPresence`](#soundPresence)[`soundSize`](#soundSize)[`specialContentsLister`](#specialContentsLister)[`specialDesc`](#specialDesc)[`specialDescBeforeContents`](#specialDescBeforeContents)[`specialDescListWith`](#specialDescListWith)[`specialDescOrder`](#specialDescOrder)[`specialNominalRoomPartLocation`](#specialNominalRoomPartLocation)[`suppressAutoSeen`](#suppressAutoSeen)[`takeFromNotInMessage`](#takeFromNotInMessage)[`theDisambigName`](#theDisambigName)[`theName`](#theName)[`theNamePossNoun`](#theNamePossNoun)[`tmpAmbient_`](#tmpAmbient_)[`tmpAmbientFill_`](#tmpAmbientFill_)[`tmpAmbientWithin_`](#tmpAmbientWithin_)[`tmpFillMedium_`](#tmpFillMedium_)[`tmpObstructor_`](#tmpObstructor_)[`tmpObstructorWithin_`](#tmpObstructorWithin_)[`tmpPathIsIn_`](#tmpPathIsIn_)[`tmpTrans_`](#tmpTrans_)[`tmpTransWithin_`](#tmpTransWithin_)[`touchPresence`](#touchPresence)[`touchSize`](#touchSize)[`verbCan`](#verbCan)[`verbCannot`](#verbCannot)[`verbCant`](#verbCant)[`verbEndingSD`](#verbEndingSD)[`verbEndingSEd`](#verbEndingSEd)[`verbEndingSMessageBuilder_`](#verbEndingSMessageBuilder_)[`verbMust`](#verbMust)[`verbToCome`](#verbToCome)[`verbToDo`](#verbToDo)[`verbToGo`](#verbToGo)[`verbToLeave`](#verbToLeave)[`verbToSay`](#verbToSay)[`verbToSee`](#verbToSee)[`verbWill`](#verbWill)[`verbWont`](#verbWont)[`weight`](#weight)

Inherited from `VocabObject` :  
[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)[`pluralOrder`](../object/VocabObject.html#pluralOrder)[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)[`vocabWords`](../object/VocabObject.html#vocabWords)[`weakTokens`](../object/VocabObject.html#weakTokens)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`acceptCommand`](#acceptCommand)[`addAllContents`](#addAllContents)[`addDirectConnections`](#addDirectConnections)[`addObjectNotifyItem`](#addObjectNotifyItem)[`addToContents`](#addToContents)[`addToSenseInfoTable`](#addToSenseInfoTable)[`adjustLookAroundTable`](#adjustLookAroundTable)[`adjustThrowDestination`](#adjustThrowDestination)[`afterAction`](#afterAction)[`afterTravel`](#afterTravel)[`allContents`](#allContents)[`aNameFrom`](#aNameFrom)[`aNameObj`](#aNameObj)[`aNameOwnerLoc`](#aNameOwnerLoc)[`announceDefaultObject`](#announceDefaultObject)[`appendHeldContents`](#appendHeldContents)[`atmosphereList`](#atmosphereList)[`baseMoveInto`](#baseMoveInto)[`basicExamine`](#basicExamine)[`basicExamineFeel`](#basicExamineFeel)[`basicExamineListen`](#basicExamineListen)[`basicExamineSmell`](#basicExamineSmell)[`basicExamineTaste`](#basicExamineTaste)[`beforeAction`](#beforeAction)[`beforeTravel`](#beforeTravel)[`buildContainmentPaths`](#buildContainmentPaths)[`cacheAmbientInfo`](#cacheAmbientInfo)[`cacheSenseInfo`](#cacheSenseInfo)[`cacheSensePath`](#cacheSensePath)[`canBeHeardBy`](#canBeHeardBy)[`canBeSeenBy`](#canBeSeenBy)[`canBeSensed`](#canBeSensed)[`canBeSmelledBy`](#canBeSmelledBy)[`canBeTouchedBy`](#canBeTouchedBy)[`canDetailsBeSensed`](#canDetailsBeSensed)[`canHear`](#canHear)[`canMatchPronounType`](#canMatchPronounType)[`canMoveViaPath`](#canMoveViaPath)[`cannotGoShowExits`](#cannotGoShowExits)[`cannotReachObject`](#cannotReachObject)[`cannotSeeSmellSource`](#cannotSeeSmellSource)[`cannotSeeSoundSource`](#cannotSeeSoundSource)[`canOwn`](#canOwn)[`canSee`](#canSee)[`canSmell`](#canSmell)[`canThrowViaPath`](#canThrowViaPath)[`canTouch`](#canTouch)[`canTouchViaPath`](#canTouchViaPath)[`checkActorOutOfNested`](#checkActorOutOfNested)[`checkBulkChange`](#checkBulkChange)[`checkBulkChangeWithin`](#checkBulkChangeWithin)[`checkMoveViaPath`](#checkMoveViaPath)[`checkStagingLocation`](#checkStagingLocation)[`checkThrowViaPath`](#checkThrowViaPath)[`checkTouchViaPath`](#checkTouchViaPath)[`checkTravelerDirectlyInRoom`](#checkTravelerDirectlyInRoom)[`childInName`](#childInName)[`childInNameGen`](#childInNameGen)[`childInNameWithOwner`](#childInNameWithOwner)[`childInRemoteName`](#childInRemoteName)[`clearSenseInfo`](#clearSenseInfo)[`cloneForMultiInstanceContents`](#cloneForMultiInstanceContents)[`cloneMultiInstanceContents`](#cloneMultiInstanceContents)[`conjugateRegularVerb`](#conjugateRegularVerb)[`connectionTable`](#connectionTable)[`construct`](#construct)[`contentsInFixedIn`](#contentsInFixedIn)[`countDisambigName`](#countDisambigName)[`countListName`](#countListName)[`countName`](#countName)[`countNameFrom`](#countNameFrom)[`countNameOwnerLoc`](#countNameOwnerLoc)[`darkRoomContentsLister`](#darkRoomContentsLister)[`defaultDistantDesc`](#defaultDistantDesc)[`defaultObscuredDesc`](#defaultObscuredDesc)[`desc`](#desc)[`directionForConnector`](#directionForConnector)[`distantSmellDesc`](#distantSmellDesc)[`distantSoundDesc`](#distantSoundDesc)[`dobjFor(AskAbout)`](#dobjFor(AskAbout))[`dobjFor(AskFor)`](#dobjFor(AskFor))[`dobjFor(AskVague)`](#dobjFor(AskVague))[`dobjFor(AttachTo)`](#dobjFor(AttachTo))[`dobjFor(Attack)`](#dobjFor(Attack))[`dobjFor(AttackWith)`](#dobjFor(AttackWith))[`dobjFor(Board)`](#dobjFor(Board))[`dobjFor(Break)`](#dobjFor(Break))[`dobjFor(Burn)`](#dobjFor(Burn))[`dobjFor(BurnWith)`](#dobjFor(BurnWith))[`dobjFor(Clean)`](#dobjFor(Clean))[`dobjFor(CleanWith)`](#dobjFor(CleanWith))[`dobjFor(Climb)`](#dobjFor(Climb))[`dobjFor(ClimbDown)`](#dobjFor(ClimbDown))[`dobjFor(ClimbUp)`](#dobjFor(ClimbUp))[`dobjFor(Close)`](#dobjFor(Close))[`dobjFor(Consult)`](#dobjFor(Consult))[`dobjFor(ConsultAbout)`](#dobjFor(ConsultAbout))[`dobjFor(CutWith)`](#dobjFor(CutWith))[`dobjFor(Detach)`](#dobjFor(Detach))[`dobjFor(DetachFrom)`](#dobjFor(DetachFrom))[`dobjFor(Dig)`](#dobjFor(Dig))[`dobjFor(DigWith)`](#dobjFor(DigWith))[`dobjFor(Doff)`](#dobjFor(Doff))[`dobjFor(Drink)`](#dobjFor(Drink))[`dobjFor(Drop)`](#dobjFor(Drop))[`dobjFor(Eat)`](#dobjFor(Eat))[`dobjFor(Enter)`](#dobjFor(Enter))[`dobjFor(EnterOn)`](#dobjFor(EnterOn))[`dobjFor(Examine)`](#dobjFor(Examine))[`dobjFor(Extinguish)`](#dobjFor(Extinguish))[`dobjFor(Fasten)`](#dobjFor(Fasten))[`dobjFor(FastenTo)`](#dobjFor(FastenTo))[`dobjFor(Feel)`](#dobjFor(Feel))[`dobjFor(Flip)`](#dobjFor(Flip))[`dobjFor(Follow)`](#dobjFor(Follow))[`dobjFor(GetOffOf)`](#dobjFor(GetOffOf))[`dobjFor(GetOutOf)`](#dobjFor(GetOutOf))[`dobjFor(GiveTo)`](#dobjFor(GiveTo))[`dobjFor(GoThrough)`](#dobjFor(GoThrough))[`dobjFor(JumpOff)`](#dobjFor(JumpOff))[`dobjFor(JumpOver)`](#dobjFor(JumpOver))[`dobjFor(Kiss)`](#dobjFor(Kiss))[`dobjFor(LieOn)`](#dobjFor(LieOn))[`dobjFor(Light)`](#dobjFor(Light))[`dobjFor(ListenTo)`](#dobjFor(ListenTo))[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(LookBehind)`](#dobjFor(LookBehind))[`dobjFor(LookIn)`](#dobjFor(LookIn))[`dobjFor(LookThrough)`](#dobjFor(LookThrough))[`dobjFor(LookUnder)`](#dobjFor(LookUnder))[`dobjFor(Move)`](#dobjFor(Move))[`dobjFor(MoveTo)`](#dobjFor(MoveTo))[`dobjFor(MoveWith)`](#dobjFor(MoveWith))[`dobjFor(Open)`](#dobjFor(Open))[`dobjFor(PlugIn)`](#dobjFor(PlugIn))[`dobjFor(PlugInto)`](#dobjFor(PlugInto))[`dobjFor(Pour)`](#dobjFor(Pour))[`dobjFor(PourInto)`](#dobjFor(PourInto))[`dobjFor(PourOnto)`](#dobjFor(PourOnto))[`dobjFor(Pull)`](#dobjFor(Pull))[`dobjFor(Push)`](#dobjFor(Push))[`dobjFor(PushTravel)`](#dobjFor(PushTravel))[`dobjFor(PutBehind)`](#dobjFor(PutBehind))[`dobjFor(PutIn)`](#dobjFor(PutIn))[`dobjFor(PutOn)`](#dobjFor(PutOn))[`dobjFor(PutUnder)`](#dobjFor(PutUnder))[`dobjFor(Read)`](#dobjFor(Read))[`dobjFor(Remove)`](#dobjFor(Remove))[`dobjFor(Screw)`](#dobjFor(Screw))[`dobjFor(ScrewWith)`](#dobjFor(ScrewWith))[`dobjFor(Search)`](#dobjFor(Search))[`dobjFor(Set)`](#dobjFor(Set))[`dobjFor(SetTo)`](#dobjFor(SetTo))[`dobjFor(ShowTo)`](#dobjFor(ShowTo))[`dobjFor(SitOn)`](#dobjFor(SitOn))[`dobjFor(Smell)`](#dobjFor(Smell))[`dobjFor(StandOn)`](#dobjFor(StandOn))[`dobjFor(Strike)`](#dobjFor(Strike))[`dobjFor(Switch)`](#dobjFor(Switch))[`dobjFor(Take)`](#dobjFor(Take))[`dobjFor(TakeFrom)`](#dobjFor(TakeFrom))[`dobjFor(TalkTo)`](#dobjFor(TalkTo))[`dobjFor(Taste)`](#dobjFor(Taste))[`dobjFor(TellAbout)`](#dobjFor(TellAbout))[`dobjFor(TellVague)`](#dobjFor(TellVague))[`dobjFor(Throw)`](#dobjFor(Throw))[`dobjFor(ThrowAt)`](#dobjFor(ThrowAt))[`dobjFor(ThrowDir)`](#dobjFor(ThrowDir))[`dobjFor(ThrowTo)`](#dobjFor(ThrowTo))[`dobjFor(Turn)`](#dobjFor(Turn))[`dobjFor(TurnOff)`](#dobjFor(TurnOff))[`dobjFor(TurnOn)`](#dobjFor(TurnOn))[`dobjFor(TurnTo)`](#dobjFor(TurnTo))[`dobjFor(TurnWith)`](#dobjFor(TurnWith))[`dobjFor(TypeLiteralOn)`](#dobjFor(TypeLiteralOn))[`dobjFor(TypeOn)`](#dobjFor(TypeOn))[`dobjFor(Unfasten)`](#dobjFor(Unfasten))[`dobjFor(UnfastenFrom)`](#dobjFor(UnfastenFrom))[`dobjFor(Unlock)`](#dobjFor(Unlock))[`dobjFor(UnlockWith)`](#dobjFor(UnlockWith))[`dobjFor(Unplug)`](#dobjFor(Unplug))[`dobjFor(UnplugFrom)`](#dobjFor(UnplugFrom))[`dobjFor(Unscrew)`](#dobjFor(Unscrew))[`dobjFor(UnscrewWith)`](#dobjFor(UnscrewWith))[`dobjFor(Wear)`](#dobjFor(Wear))[`examineListContents`](#examineListContents)[`examineListContentsWith`](#examineListContentsWith)[`examineSpecialContents`](#examineSpecialContents)[`examineStatus`](#examineStatus)[`failCheck`](#failCheck)[`feelDesc`](#feelDesc)[`fillMedium`](#fillMedium)[`findOpaqueObstructor`](#findOpaqueObstructor)[`findTouchObstructor`](#findTouchObstructor)[`forEachConnectedContainer`](#forEachConnectedContainer)[`forEachContainer`](#forEachContainer)[`fromPOV`](#fromPOV)[`getAllForTakeFrom`](#getAllForTakeFrom)[`getAllPathsTo`](#getAllPathsTo)[`getAnnouncementDistinguisher`](#getAnnouncementDistinguisher)[`getBagAffinities`](#getBagAffinities)[`getBagsOfHolding`](#getBagsOfHolding)[`getBestDistinguisher`](#getBestDistinguisher)[`getBulk`](#getBulk)[`getBulkWithin`](#getBulkWithin)[`getCarryingActor`](#getCarryingActor)[`getCommonContainer`](#getCommonContainer)[`getCommonDirectContainer`](#getCommonDirectContainer)[`getConnectedContainers`](#getConnectedContainers)[`getConnectorTo`](#getConnectorTo)[`getContentsForExamine`](#getContentsForExamine)[`getDestName`](#getDestName)[`getDropDestination`](#getDropDestination)[`getEncumberingBulk`](#getEncumberingBulk)[`getEncumberingWeight`](#getEncumberingWeight)[`getExtraScopeItems`](#getExtraScopeItems)[`getHitFallDestination`](#getHitFallDestination)[`getIdentityObject`](#getIdentityObject)[`getInScopeDistinguisher`](#getInScopeDistinguisher)[`getListedContents`](#getListedContents)[`getLocPushTraveler`](#getLocPushTraveler)[`getLocTraveler`](#getLocTraveler)[`getMovePathTo`](#getMovePathTo)[`getNoise`](#getNoise)[`getNominalDropDestination`](#getNominalDropDestination)[`getNominalOwner`](#getNominalOwner)[`getObjectNotifyList`](#getObjectNotifyList)[`getOdor`](#getOdor)[`getOutermostRoom`](#getOutermostRoom)[`getOutermostVisibleRoom`](#getOutermostVisibleRoom)[`getRoomNotifyList`](#getRoomNotifyList)[`getRoomPartLocation`](#getRoomPartLocation)[`getStateWithInfo`](#getStateWithInfo)[`getStatuslineExitsHeight`](#getStatuslineExitsHeight)[`getThrowPathTo`](#getThrowPathTo)[`getTouchPathTo`](#getTouchPathTo)[`getTravelConnector`](#getTravelConnector)[`getVisualSenseInfo`](#getVisualSenseInfo)[`getWeight`](#getWeight)[`hasCollectiveGroup`](#hasCollectiveGroup)[`hideFromAll`](#hideFromAll)[`hideFromDefault`](#hideFromDefault)[`initializeEquivalent`](#initializeEquivalent)[`initializeLocation`](#initializeLocation)[`initializeThing`](#initializeThing)[`inRoomName`](#inRoomName)[`iobjFor(AttachTo)`](#iobjFor(AttachTo))[`iobjFor(AttackWith)`](#iobjFor(AttackWith))[`iobjFor(BurnWith)`](#iobjFor(BurnWith))[`iobjFor(CleanWith)`](#iobjFor(CleanWith))[`iobjFor(CutWith)`](#iobjFor(CutWith))[`iobjFor(DetachFrom)`](#iobjFor(DetachFrom))[`iobjFor(DigWith)`](#iobjFor(DigWith))[`iobjFor(FastenTo)`](#iobjFor(FastenTo))[`iobjFor(GiveTo)`](#iobjFor(GiveTo))[`iobjFor(LockWith)`](#iobjFor(LockWith))[`iobjFor(MoveWith)`](#iobjFor(MoveWith))[`iobjFor(PlugInto)`](#iobjFor(PlugInto))[`iobjFor(PourInto)`](#iobjFor(PourInto))[`iobjFor(PourOnto)`](#iobjFor(PourOnto))[`iobjFor(PutBehind)`](#iobjFor(PutBehind))[`iobjFor(PutIn)`](#iobjFor(PutIn))[`iobjFor(PutOn)`](#iobjFor(PutOn))[`iobjFor(PutUnder)`](#iobjFor(PutUnder))[`iobjFor(ScrewWith)`](#iobjFor(ScrewWith))[`iobjFor(ShowTo)`](#iobjFor(ShowTo))[`iobjFor(TakeFrom)`](#iobjFor(TakeFrom))[`iobjFor(ThrowAt)`](#iobjFor(ThrowAt))[`iobjFor(ThrowTo)`](#iobjFor(ThrowTo))[`iobjFor(TurnWith)`](#iobjFor(TurnWith))[`iobjFor(UnfastenFrom)`](#iobjFor(UnfastenFrom))[`iobjFor(UnlockWith)`](#iobjFor(UnlockWith))[`iobjFor(UnplugFrom)`](#iobjFor(UnplugFrom))[`iobjFor(UnscrewWith)`](#iobjFor(UnscrewWith))[`isActorTravelReady`](#isActorTravelReady)[`isComponentOf`](#isComponentOf)[`isDirectlyIn`](#isDirectlyIn)[`isHeldBy`](#isHeldBy)[`isIn`](#isIn)[`isInFixedIn`](#isInFixedIn)[`isListed`](#isListed)[`isListedInContents`](#isListedInContents)[`isListedInInventory`](#isListedInInventory)[`isListedInRoomPart`](#isListedInRoomPart)[`isLookAroundCeiling`](#isLookAroundCeiling)[`isNominallyIn`](#isNominallyIn)[`isNominallyInRoomPart`](#isNominallyInRoomPart)[`isOccludedBy`](#isOccludedBy)[`isOrIsIn`](#isOrIsIn)[`isOwnedBy`](#isOwnedBy)[`isShipboard`](#isShipboard)[`isVocabEquivalent`](#isVocabEquivalent)[`itIs`](#itIs)[`itNom`](#itNom)[`itObj`](#itObj)[`itPossAdj`](#itPossAdj)[`itPossNoun`](#itPossNoun)[`itVerb`](#itVerb)[`listCardinality`](#listCardinality)[`localDirectionLinkForConnector`](#localDirectionLinkForConnector)[`lookAround`](#lookAround)[`lookAroundPov`](#lookAroundPov)[`lookAroundWithin`](#lookAroundWithin)[`lookAroundWithinContents`](#lookAroundWithinContents)[`lookAroundWithinDesc`](#lookAroundWithinDesc)[`lookAroundWithinName`](#lookAroundWithinName)[`lookAroundWithinSense`](#lookAroundWithinSense)[`lookAroundWithinShowExits`](#lookAroundWithinShowExits)[`lookInDesc`](#lookInDesc)[`mainExamine`](#mainExamine)[`mainMoveInto`](#mainMoveInto)[`mapPushTravelHandlers`](#mapPushTravelHandlers)[`mapPushTravelHandlers`](#mapPushTravelHandlers)[`mapPushTravelHandlers`](#mapPushTravelHandlers)[`mapPushTravelHandlers`](#mapPushTravelHandlers)[`mapPushTravelHandlers`](#mapPushTravelHandlers)[`meetsObjHeld`](#meetsObjHeld)[`mergeSenseInfo`](#mergeSenseInfo)[`mergeSenseInfoTable`](#mergeSenseInfoTable)[`moveInto`](#moveInto)[`moveIntoForTravel`](#moveIntoForTravel)[`moveIntoNotifyPath`](#moveIntoNotifyPath)[`mustMoveObjInto`](#mustMoveObjInto)[`nameIs`](#nameIs)[`nameIsnt`](#nameIsnt)[`nameVerb`](#nameVerb)[`normalizePath`](#normalizePath)[`notePromptByOwnerLoc`](#notePromptByOwnerLoc)[`notePromptByPossAdj`](#notePromptByPossAdj)[`noteSeenBy`](#noteSeenBy)[`notifyInsert`](#notifyInsert)[`notifyMoveInto`](#notifyMoveInto)[`notifyMoveViaPath`](#notifyMoveViaPath)[`notifyRemove`](#notifyRemove)[`obscuredDesc`](#obscuredDesc)[`obscuredSmellDesc`](#obscuredSmellDesc)[`obscuredSoundDesc`](#obscuredSoundDesc)[`pluralNameFrom`](#pluralNameFrom)[`processThrow`](#processThrow)[`propHidesProp`](#propHidesProp)[`propWithPresent`](#propWithPresent)[`putInName`](#putInName)[`receiveDrop`](#receiveDrop)[`remoteDesc`](#remoteDesc)[`remoteInitSpecialDesc`](#remoteInitSpecialDesc)[`remoteRoomContentsLister`](#remoteRoomContentsLister)[`remoteSpecialDesc`](#remoteSpecialDesc)[`removeFromContents`](#removeFromContents)[`removeObjectNotifyItem`](#removeObjectNotifyItem)[`restoreLocation`](#restoreLocation)[`roomActorThereDesc`](#roomActorThereDesc)[`roomContentsLister`](#roomContentsLister)[`roomDaemon`](#roomDaemon)[`roomDarkDesc`](#roomDarkDesc)[`roomDesc`](#roomDesc)[`roomFirstDesc`](#roomFirstDesc)[`roomRemoteDesc`](#roomRemoteDesc)[`roomTravelPreCond`](#roomTravelPreCond)[`saveLocation`](#saveLocation)[`selectPathTo`](#selectPathTo)[`sendNotifyInsert`](#sendNotifyInsert)[`sendNotifyRemove`](#sendNotifyRemove)[`senseAmbientMax`](#senseAmbientMax)[`senseInfoTable`](#senseInfoTable)[`senseObj`](#senseObj)[`sensePathFromWithin`](#sensePathFromWithin)[`sensePathFromWithout`](#sensePathFromWithout)[`sensePathToContents`](#sensePathToContents)[`sensePathToLoc`](#sensePathToLoc)[`sensePresenceList`](#sensePresenceList)[`setAllSeenBy`](#setAllSeenBy)[`setContentsSeenBy`](#setContentsSeenBy)[`setGlobalParamName`](#setGlobalParamName)[`setVisualSenseInfo`](#setVisualSenseInfo)[`shineFromWithin`](#shineFromWithin)[`shineFromWithout`](#shineFromWithout)[`shineOnContents`](#shineOnContents)[`shineOnLoc`](#shineOnLoc)[`showDistantSpecialDesc`](#showDistantSpecialDesc)[`showDistantSpecialDescInContents`](#showDistantSpecialDescInContents)[`showInventoryContents`](#showInventoryContents)[`showInventoryItem`](#showInventoryItem)[`showInventoryItemCounted`](#showInventoryItemCounted)[`showListItem`](#showListItem)[`showListItemCounted`](#showListItemCounted)[`showListItemCountedGen`](#showListItemCountedGen)[`showListItemGen`](#showListItemGen)[`showObjectContents`](#showObjectContents)[`showObscuredSpecialDesc`](#showObscuredSpecialDesc)[`showObscuredSpecialDescInContents`](#showObscuredSpecialDescInContents)[`showRemoteSpecialDesc`](#showRemoteSpecialDesc)[`showRemoteSpecialDescInContents`](#showRemoteSpecialDescInContents)[`showSpecialDesc`](#showSpecialDesc)[`showSpecialDescInContents`](#showSpecialDescInContents)[`showSpecialDescInContentsWithInfo`](#showSpecialDescInContentsWithInfo)[`showSpecialDescWithInfo`](#showSpecialDescWithInfo)[`showStatuslineExits`](#showStatuslineExits)[`showWornItem`](#showWornItem)[`showWornItemCounted`](#showWornItemCounted)[`smellDesc`](#smellDesc)[`smellHereDesc`](#smellHereDesc)[`soundDesc`](#soundDesc)[`soundHereDesc`](#soundHereDesc)[`specialDescList`](#specialDescList)[`specialPathFrom`](#specialPathFrom)[`statusName`](#statusName)[`stopThrowViaPath`](#stopThrowViaPath)[`superHidesSuper`](#superHidesSuper)[`tasteDesc`](#tasteDesc)[`thatNom`](#thatNom)[`thatObj`](#thatObj)[`theNameFrom`](#theNameFrom)[`theNameObj`](#theNameObj)[`theNameOwnerLoc`](#theNameOwnerLoc)[`theNameWithOwner`](#theNameWithOwner)[`throwTargetCatch`](#throwTargetCatch)[`throwTargetHitWith`](#throwTargetHitWith)[`throwViaPath`](#throwViaPath)[`transmitAmbient`](#transmitAmbient)[`transSensingIn`](#transSensingIn)[`transSensingOut`](#transSensingOut)[`traversePath`](#traversePath)[`tryHolding`](#tryHolding)[`tryImplicitRemoveObstructor`](#tryImplicitRemoveObstructor)[`tryMovingObjInto`](#tryMovingObjInto)[`useInitDesc`](#useInitDesc)[`useInitSpecialDesc`](#useInitSpecialDesc)[`useSpecialDesc`](#useSpecialDesc)[`useSpecialDescInContents`](#useSpecialDescInContents)[`useSpecialDescInRoom`](#useSpecialDescInRoom)[`useSpecialDescInRoomPart`](#useSpecialDescInRoomPart)[`verbEndingEs`](#verbEndingEs)[`verbEndingIes`](#verbEndingIes)[`verbEndingS`](#verbEndingS)[`verbToHave`](#verbToHave)[`verbWas`](#verbWas)[`verifyFollowable`](#verifyFollowable)[`verifyInsert`](#verifyInsert)[`verifyMoveTo`](#verifyMoveTo)[`verifyRemove`](#verifyRemove)[`whatIf`](#whatIf)[`whatIfHeldBy`](#whatIfHeldBy)[`withVisualSenseInfo`](#withVisualSenseInfo)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary)[`expandPronounList`](../object/VocabObject.html#expandPronounList)[`filterResolveList`](../object/VocabObject.html#filterResolveList)[`getFacets`](../object/VocabObject.html#getFacets)[`inheritVocab`](../object/VocabObject.html#inheritVocab)[`initializeVocab`](../object/VocabObject.html#initializeVocab)[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)[`matchName`](../object/VocabObject.html#matchName)[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actorInAName"></span>

`actorInAName`

[en_us.t](../file/en_us.t.html)\[[1269](../source/en_us.t.html#1269)\]

<div class="desc">

*no description available*

</div>

<span id="actorInName"></span>

`actorInName`

[en_us.t](../file/en_us.t.html)\[[1268](../source/en_us.t.html#1268)\]

<div class="desc">

describe an actor as being in/being removed from/being moved into this
location

</div>

<span id="actorInPrep"></span>

`actorInPrep`

[en_us.t](../file/en_us.t.html)\[[1250](../source/en_us.t.html#1250)\]

<div class="desc">

Default preposition to use when an actor is in/on this object (as a
nested location), and full prepositional phrase, with no article and
with an indefinite article. By default, we use the objInPrep for actors
as well.

</div>

<span id="actorIntoName"></span>

`actorIntoName`

[en_us.t](../file/en_us.t.html)\[[1271](../source/en_us.t.html#1271)\]

<div class="desc">

*no description available*

</div>

<span id="actorOutOfName"></span>

`actorOutOfName`

[en_us.t](../file/en_us.t.html)\[[1270](../source/en_us.t.html#1270)\]

<div class="desc">

*no description available*

</div>

<span id="actorOutOfPrep"></span>

`actorOutOfPrep`

[en_us.t](../file/en_us.t.html)\[[1253](../source/en_us.t.html#1253)\]

<div class="desc">

preposition to use when an actor is being removed from this location

</div>

<span id="aDisambigName"></span>

`aDisambigName`

[en_us.t](../file/en_us.t.html)\[[903](../source/en_us.t.html#903)\]

<div class="desc">

The indefinite-article name for disambiguation prompts. We use the same
logic here as in theDisambigName.

</div>

<span id="allStates"></span>

`allStates`

[thing.t](../file/thing.t.html)\[[2153](../source/thing.t.html#2153)\]

<div class="desc">

Get a list of all of our possible states. For an object that can assume
varying states as represented by getState, this should return the list
of all possible states that the object can assume.

</div>

<span id="aName"></span>

`aName`

[en_us.t](../file/en_us.t.html)\[[1472](../source/en_us.t.html#1472)\]

<div class="desc">

My name with an indefinite article. By default, we figure out which
article to use (a, an, some) automatically.

In rare cases, the automatic determination might get it wrong, since
some English spellings defy all of the standard orthographic rules and
must simply be handled as special cases; for example, the algorithmic
determination doesn't know about silent-h words like "hour". When the
automatic determination gets it wrong, simply override this routine to
specify the correct article explicitly.

</div>

<span id="brightness"></span>

`brightness`

[thing.t](../file/thing.t.html)\[[4396](../source/thing.t.html#4396)\]

<div class="desc">

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

Note that the special value -1 is reserved as an invalid level, used to
flag certain events (such as the need to recalculate the ambient light
level from a new point of view).

Most objects do not give off light at all.

</div>

<span id="bulk"></span>

`bulk`

[thing.t](../file/thing.t.html)\[[3737](../source/thing.t.html#3737)\]

<div class="desc">

*no description available*

</div>

<span id="canBeHeard"></span>

`canBeHeard`

[thing.t](../file/thing.t.html)\[[6681](../source/thing.t.html#6681)\]

<div class="desc">

*no description available*

</div>

<span id="canBeSeen"></span>

`canBeSeen`

[thing.t](../file/thing.t.html)\[[6680](../source/thing.t.html#6680)\]

<div class="desc">

can the player character see/hear/smell/touch me?

</div>

<span id="canBeSmelled"></span>

`canBeSmelled`

[thing.t](../file/thing.t.html)\[[6682](../source/thing.t.html#6682)\]

<div class="desc">

*no description available*

</div>

<span id="canBeTouched"></span>

`canBeTouched`

[thing.t](../file/thing.t.html)\[[6683](../source/thing.t.html#6683)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchHer"></span>

`canMatchHer`

[en_us.t](../file/en_us.t.html)\[[737](../source/en_us.t.html#737)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchHim"></span>

`canMatchHim`

[en_us.t](../file/en_us.t.html)\[[736](../source/en_us.t.html#736)\]

<div class="desc">

Test to see if we can match the pronouns 'him', 'her', 'it', and 'them'.
By default, these simply test the corresponding isXxx flags (except
'canMatchThem', which tests 'isPlural' to see if the name has plural
usage).

</div>

<span id="canMatchIt"></span>

`canMatchIt`

[en_us.t](../file/en_us.t.html)\[[738](../source/en_us.t.html#738)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchThem"></span>

`canMatchThem`

[en_us.t](../file/en_us.t.html)\[[739](../source/en_us.t.html#739)\]

<div class="desc">

*no description available*

</div>

<span id="circularlyInMessage"></span>

`circularlyInMessage`

[thing.t](../file/thing.t.html)\[[7841](../source/thing.t.html#7841)\]

<div class="desc">

my message indicating that another object x cannot be put into me
because I'm already in x

</div>

<span id="collectiveGroup"></span>

`collectiveGroup`

[thing.t](../file/thing.t.html)\[[2513](../source/thing.t.html#2513)\]

<div class="desc">

Our collective group. Note - this property is obsolescent; it's
supported only for compatibility with old code. New games should use
'collectiveGroups' instead.

</div>

<span id="collectiveGroups"></span>

`collectiveGroups`

[thing.t](../file/thing.t.html)\[[2506](../source/thing.t.html#2506)\]

<div class="desc">

My associated "collective group" objects. A collective group is an
abstract object, not part of the simulation (i.e, not directly
manipulable by characters as a separate object) that can stand in for an
entire group of related objects in some actions. For example, we might
have a collective "money" object that stands in for any group of coins
and paper bills for "examine" commands, so that when the player says
something like "look at money" or "count money," we use the single
collective money object to handle the command rather than running the
command iteratively on each of the individual coins and bills present.

The value is a list because this object can be associated with more than
one collective group. For example, a diamond could be in a "treasure"
group as well as a "jewelry" group.

The associated collective objects are normally of class CollectiveGroup.
By default, if our 'collectiveGroup' property is not nil, our list
consists of that one item; otherwise we just use an empty list.

</div>

<span id="contents"></span>

`contents`

[thing.t](../file/thing.t.html)\[[4802](../source/thing.t.html#4802)\]

<div class="desc">

My contents. This is a list of the objects that this object directly
contains.

</div>

<span id="contentsListed"></span>

`contentsListed`

[thing.t](../file/thing.t.html)\[[1875](../source/thing.t.html#1875)\]

<div class="desc">

Determine if my contents are to be listed when I'm shown in a listing
(in a room description, inventory list, or a description of my
container).

Note that this doesn't affect listing my contents when I'm \*directly\*
examined - use contentsListedInExamine to control that.

By default, we'll list our contents in these situations if (1) we have
some kind of presence in the description of whatever it is the player is
looking at, either by being listed in the ordinary way (that is,
isListed is true) or in a custom way (via a specialDesc), and (2)
contentsListedInExamine is true. The reasoning behind this default is
that if the object itself shows up in the description, then we usually
want its contents to be mentioned as well, but if the object itself
isn't mentioned, then its contents probably shouldn't be, either. And in
any case, if the contents aren't listed even when we \*directly\*
examine the object, then we almost certainly don't want its contents
mentioned when we only indirectly mention the object in the course of
describing something enclosing it.

</div>

<span id="contentsListedInExamine"></span>

`contentsListedInExamine`

[thing.t](../file/thing.t.html)\[[1883](../source/thing.t.html#1883)\]

<div class="desc">

Determine if my contents are to be listed when I'm directly examined
(with an EXAMINE/LOOK AT command). By default, we \*always\* list our
contents when we're directly examined.

</div>

<span id="contentsListedSeparately"></span>

`contentsListedSeparately`

[thing.t](../file/thing.t.html)\[[1907](../source/thing.t.html#1907)\]

<div class="desc">

Determine if my contents are listed separately from my own list entry.
If this is true, then my contents will be listed in a separate sentence
from my own listing; for example, if 'self' is a box, we'll be listed
like so:

  
You are carrying a box. The box contains a key and a book.

By default, this is nil, which means that we list our contents
parenthetically after our name:

  
You are carrying a box (which contains a key and a book).

Using a separate listing is sometimes desirable for an object that will
routinely contain listable objects that in turn have listable contents
of their own, because it can help break up a long listing that would
otherwise use too many nested parentheticals.

Note that this only applies to "wide" listings; "tall" listings will
show contents in the indented tree format regardless of this setting.

</div>

<span id="contentsLister"></span>

`contentsLister`

[thing.t](../file/thing.t.html)\[[4444](../source/thing.t.html#4444)\]

<div class="desc">

My "contents lister." This is a Lister object that we use to display the
contents of this object for room descriptions, inventories, and the
like.

</div>

<span id="descContentsLister"></span>

`descContentsLister`

[thing.t](../file/thing.t.html)\[[4450](../source/thing.t.html#4450)\]

<div class="desc">

the Lister to use when showing my contents as part of my own description
(i.e., for Examine commands)

</div>

<span id="described"></span>

`described`

[thing.t](../file/thing.t.html)\[[1564](../source/thing.t.html#1564)\]

<div class="desc">

Flag: I've been desribed. This is nil by default; we set this to true
whenever the player explicitly examines the object.

</div>

<span id="disambigEquivName"></span>

`disambigEquivName`

[en_us.t](../file/en_us.t.html)\[[947](../source/en_us.t.html#947)\]

<div class="desc">

The name of the object, for the purposes of disambiguation prompts to
disambiguation among this object and basic equivalents of this object
(i.e., objects of the same class marked with isEquivalent=true).

This is used in disambiguation prompts in place of the actual text typed
by the user. For example, suppose the user types "\>take coin", then we
ask for help disambiguating, and the player types "\>gold". This narrows
things down to, say, three gold coins, but they're in different
locations so we need to ask for further disambiguation. Normally, we ask
"which gold do you mean", because the player typed "gold" in the input.
Once we're down to equivalents, we don't have to rely on the input text
any more, which is good because the input text could be fragmentary (as
in our present example). Since we have only equivalents, we can use the
actual name of the objects (they're all the same, after all). This
property gives the name we use.

For English, this is simply the object's ordinary disambiguation name.
This property is separate from 'name' and 'disambigName' for the sake of
languages that need to use an inflected form in this context.

</div>

<span id="disambigName"></span>

`disambigName`

[en_us.t](../file/en_us.t.html)\[[842](../source/en_us.t.html#842)\]

<div class="desc">

The name of the object, for the purposes of disambiguation prompts. This
should almost always be the object's ordinary name, so we return
self.name by default.

In rare cases, it might be desirable to override this. In particular, if
a game has two objects that are NOT defined as basic equivalents of one
another (which means that the parser will always ask for disambiguation
when the two are ambiguous with one another), but the two nonetheless
have identical 'name' properties, this property should be overridden for
one or both objects to give them different names. This will ensure that
we avoid asking questions of the form "which do you mean, the coin, or
the coin?". In most cases, non-equivalent objects will have distinct
'name' properties to begin with, so this is not usually an issue.

When overriding this method, take care to override theDisambigName,
aDisambigName, countDisambigName, and/or pluralDisambigName as needed.
Those routines must be overridden only when the default algorithms for
determining articles and plurals fail to work properly for the
disambigName (for example, the indefinite article algorithm fails with
silent-h words like "hour", so if disambigName is "hour", aDisambigName
must be overridden). In most cases, the automatic algorithms will
produce acceptable results, so the default implementations of these
other routines can be used without customization.

</div>

<span id="distantDesc"></span>

`// distantDesc`<span class="rem">Interface description only</span>

[thing.t](../file/thing.t.html)\[[2207](../source/thing.t.html#2207)\]

<div class="desc">

The default "distant" description. If this is defined for an object,
then we evaluate it to display the description when an actor explicitly
examines this object from a point of view where we have a "distant"
sight path to the object.

If this property is left undefined for an object, then we'll describe
this object when it's distant in one of two ways. If the object has its
'sightSize' property set to 'large', we'll display the ordinary 'desc',
because its large visual size makes its details visible at a distance.
If the 'sightSize' is anything else, we'll instead display the default
library message indicating that the object is too far away to see any
details.

To display a specific description when the object is distant, set this
to a double-quoted string, or to a method that displays a message.

</div>

<span id="distantInitSpecialDesc"></span>

`distantInitSpecialDesc`

[thing.t](../file/thing.t.html)\[[1460](../source/thing.t.html#1460)\]

<div class="desc">

*no description available*

</div>

<span id="distantSpecialDesc"></span>

`distantSpecialDesc`

[thing.t](../file/thing.t.html)\[[1195](../source/thing.t.html#1195)\]

<div class="desc">

The special descriptions to use under obscured and distant viewing
conditions. By default, these simply display the normal special
description, but these can be overridden if desired to show different
messages under these viewing conditions.

Note that if you override these alternative special descriptions, you
MUST also provide a base specialDesc. The library figures out whether or
not to show any sort of specialDesc first, based on the presence of a
non-nil specialDesc; only then does the library figure out which
particular variation to use.

Note that remoteSpecialDesc takes precedence over these methods. That
is, when 'self' is in a separate top-level room from the point-of-view
actor, we'll use remoteSpecialDesc to generate our description, even if
the sense path to 'self' is distant or obscured.

</div>

<span id="distinguishers"></span>

`distinguishers`

[thing.t](../file/thing.t.html)\[[2343](../source/thing.t.html#2343)\]

<div class="desc">

My Distinguisher list. This is a list of Distinguisher objects that can
be used to distinguish this object from other objects.

Distinguishers are listed in order of priority. The disambiguation
process looks for distinguishers capable of telling objects apart,
starting with the first in the list. The BasicDistinguisher is generally
first in every object's list, because any two objects can be told apart
if they come from different classes.

By default, each object has the "basic" distinguisher, which tells
objects apart on the basis of the "isEquivalent" property and their
superclasses; the ownership distinguisher, which tells objects apart
based on ownership; and the location distinguisher, which identifies
objects by their immediate containers.

</div>

<span id="dummyName"></span>

`dummyName`

[en_us.t](../file/en_us.t.html)\[[1920](../source/en_us.t.html#1920)\]

<div class="desc">

Dummy name - this simply displays nothing; it's used for cases where
messageBuilder substitutions want to refer to an object (for internal
bookkeeping) without actually showing the name of the object in the
output text. This should always simply return an empty string.

</div>

<span id="effectiveFollowLocation"></span>

`effectiveFollowLocation`

[thing.t](../file/thing.t.html)\[[3776](../source/thing.t.html#3776)\]

<div class="desc">

Get the effective location of an actor directly within me, for the
purposes of a "follow" command. To follow someone, we must have the same
effective follow location that the target had when we last observed the
target leaving.

For most objects, we simply defer to the location.

</div>

<span id="equivalenceKey"></span>

`equivalenceKey`

[en_us.t](../file/en_us.t.html)\[[855](../source/en_us.t.html#855)\]

<div class="desc">

The "equivalence key" is the value we use to group equivalent objects.
Note that we can only treat objects as equivalent when they're
explicitly marked with isEquivalent=true, so the equivalence key is
irrelevant for objects not so marked.

Since the main point of equivalence is to allow creation of groups of
like-named objects that are interchangeable in listings and in command
input, we use the basic disambiguation name as the equivalence key.

</div>

<span id="equivalentGrouper"></span>

`equivalentGrouper`

[thing.t](../file/thing.t.html)\[[4796](../source/thing.t.html#4796)\]

<div class="desc">

Our equivalent item grouper. During initialization, we will create an
equivalent grouper and store it in this property for each class object
that has instances marked with isEquivalent. Note that this is stored
with the class, because we want each of our equivalent instances to
share the same grouper object so that they are listed together as a
group.

</div>

<span id="equivalentGrouperClass"></span>

`equivalentGrouperClass`

[thing.t](../file/thing.t.html)\[[4786](../source/thing.t.html#4786)\]

<div class="desc">

my equivalence grouper class - when we initialize, we'll create a
grouper of this class and store it in equivalentGrouper

</div>

<span id="equivalentGrouperTable"></span>

`equivalentGrouperTable`

[thing.t](../file/thing.t.html)\[[4780](../source/thing.t.html#4780)\]

<div class="desc">

A static game-wide table of equivalence groups. This has a table of
ListGroupEquivalent-derived objects, keyed by equivalence name. Each
group of objects with the same equivalence name is listed in the same
group and so has the same grouper object.

</div>

<span id="esEndingPat"></span>

`esEndingPat`

[en_us.t](../file/en_us.t.html)\[[1145](../source/en_us.t.html#1145)\]

<div class="desc">

*no description available*

</div>

<span id="explicitVisualSenseInfo"></span>

`explicitVisualSenseInfo`

[thing.t](../file/thing.t.html)\[[6577](../source/thing.t.html#6577)\]

<div class="desc">

current explicit visual sense information overriding live value

</div>

<span id="getState"></span>

`getState`

[thing.t](../file/thing.t.html)\[[2145](../source/thing.t.html#2145)\]

<div class="desc">

Get our state - returns a ThingState object describing the state. By
default, we don't have varying states, so we simply return nil.

</div>

<span id="globalParamName"></span>

`globalParamName`

[thing.t](../file/thing.t.html)\[[1132](../source/thing.t.html#1132)\]

<div class="desc">

My global parameter name. This is a name that can be used in {xxx}
parameters in messages to refer directly to this object. This is nil by
default, which means we have no global parameter name. Define this to a
single-quoted string to set a global parameter name.

Global parameter names can be especially useful for objects whose names
change in the course of the game, such as actors who are known by one
name until introduced, after which they're known by another name. It's a
little nicer to write "{He/the bob}" than "\<\<bob.theName\>\>". We can
do this with a global parameter name, because it allows us to use {bob}
as a message parameter, even when the actor isn't involved directly in
any command.

Note that these parameter names are global, so no two objects are
allowed to have the same name. These names are also subordinate to the
parameter names in the current Action, so names that the actions define,
such as 'dobj' and 'actor', should usually be avoided.

</div>

<span id="holdingIndex"></span>

`holdingIndex`

[thing.t](../file/thing.t.html)\[[3729](../source/thing.t.html#3729)\]

<div class="desc">

When an actor takes me, the actor will assign me a holding index value,
which is simply a serial number indicating the order in which I was
picked up. This lets the actor determine which items have been held
longest: the item with the lowest holding index has been held the
longest.

</div>

<span id="iesEndingPat"></span>

`iesEndingPat`

[en_us.t](../file/en_us.t.html)\[[1144](../source/en_us.t.html#1144)\]

<div class="desc">

verb-ending patterns for figuring out which '-s' ending to add

</div>

<span id="initDesc"></span>

`initDesc`

[thing.t](../file/thing.t.html)\[[1472](../source/thing.t.html#1472)\]

<div class="desc">

If we define a non-nil initDesc, and the object is in its initial
description state (as indicated by isInInitState), then we'll use this
property instead of "desc" to describe the object when examined. This
can be used to customize the description the player sees in parallel to
initSpecialDesc.

</div>

<span id="initNominalRoomPartLocation"></span>

`initNominalRoomPartLocation`

[thing.t](../file/thing.t.html)\[[1832](../source/thing.t.html#1832)\]

<div class="desc">

Our initial room part location. By default, we set this to nil, which
means that we'll use the nominal drop destination of our actual initial
location when asked. If desired, this can be set to another part; for
example, if a poster is initially described as being "on the north
wall," this should set to the default north wall object.

</div>

<span id="initSpecialDesc"></span>

`initSpecialDesc`

[thing.t](../file/thing.t.html)\[[1444](../source/thing.t.html#1444)\]

<div class="desc">

If we define a non-nil initSpecialDesc, this property will be called to
describe the object in room listings as long as the object is in its
"initial" state (as determined by isInInitState: this is usually true
until the object is first moved to a new location). By default, objects
don't have initial descriptions.

If this is non-nil, and the object is portable, this will be used (as
long as the object is in its initial state) instead of showing the
object in an ordinary room-contents listing. This can be used to give
the object a special mention in its initial location in the game, rather
than letting the ordinary room-contents lister lump it in with all of
the other portable object lying around.

</div>

<span id="inlineContentsLister"></span>

`inlineContentsLister`

[thing.t](../file/thing.t.html)\[[4463](../source/thing.t.html#4463)\]

<div class="desc">

my "in-line" contents lister - this is the Lister object that we'll use
to display my contents parenthetically as part of my list entry in a
second-level contents listing

</div>

<span id="isEquivalent"></span>

`isEquivalent`

[thing.t](../file/thing.t.html)\[[2324](../source/thing.t.html#2324)\]

<div class="desc">

"Equivalence" flag. If this flag is set, then all objects with the same
immediate superclass will be considered interchangeable; such objects
will be listed collectively in messages (so we would display "five
coins" rather than "a coin, a coin, a coin, a coin, and a coin"), and
will be treated as equivalent in resolving noun phrases to objects in
user input.

By default, this property is nil, since we want most objects to be
treated as unique.

</div>

<span id="isHer"></span>

`isHer`

[en_us.t](../file/en_us.t.html)\[[714](../source/en_us.t.html#714)\]

<div class="desc">

*no description available*

</div>

<span id="isHim"></span>

`isHim`

[en_us.t](../file/en_us.t.html)\[[713](../source/en_us.t.html#713)\]

<div class="desc">

Flags indicating that the object should be referred to with gendered
pronouns (such as 'he' or 'she' rather than 'it').

Note that these flags aren't mutually exclusive, so it's legal for the
object to have both masculine and feminine usage. This can be useful
when creating collective objects that represent more than one
individual, for example.

</div>

<span id="isInInitState"></span>

`isInInitState`

[thing.t](../file/thing.t.html)\[[1486](../source/thing.t.html#1486)\]

<div class="desc">

Am I in my "initial state"? This is used to determine if we should show
the initial special description (initSpecialDesc) and initial examine
description (initDesc) when describing the object. By default, we
consider the object to be in its initial state until the first time it's
moved.

You can override this to achieve other effects. For example, if you want
to use the initial description only the first time the object is
examined, and then revert to the ordinary description, you could
override this to return (!described).

</div>

<span id="isKnown"></span>

`isKnown`

[thing.t](../file/thing.t.html)\[[1631](../source/thing.t.html#1631)\]

<div class="desc">

Flag: this object is explicitly "known" to actors in the game, even if
it's never been seen. This allows the object to be resolved as a topic
in ASK ABOUT commands and the like. Sometimes, actors know about an
object even before it's been seen - they might simply know about it from
background knowledge, or they might hear about it from another
character, for example.

Like the 'seen' property, this is merely the DEFAULT 'known' property
that we use for actors. Each actor can individually use a separate
property to track its own knowledge if it prefers; it can do this simply
by overriding its isKnownProp property.

</div>

<span id="isLikelyCommandTarget"></span>

`isLikelyCommandTarget`

[thing.t](../file/thing.t.html)\[[5704](../source/thing.t.html#5704)\]

<div class="desc">

by default, most objects are not logical targets for commands

</div>

<span id="isListedAboardVehicle"></span>

`isListedAboardVehicle`

[thing.t](../file/thing.t.html)\[[1705](../source/thing.t.html#1705)\]

<div class="desc">

by default, regular objects are not listed when they arrive aboard
vehicles (only actors are normally listed in this fashion)

</div>

<span id="isMassNoun"></span>

`isMassNoun`

[en_us.t](../file/en_us.t.html)\[[702](../source/en_us.t.html#702)\]

<div class="desc">

Flag that this is object's name is a "mass noun" - that is, a noun
denoting a continuous (effectively infinitely divisible) substance or
material, such as water, wood, or popcorn; and certain abstract
concepts, such as knowledge or beauty. Mass nouns are never rendered in
the plural, and use different determiners than ordinary ("count") nouns:
"some popcorn" vs "a kernel", for example.

</div>

<span id="isPlural"></span>

`isPlural`

[en_us.t](../file/en_us.t.html)\[[691](../source/en_us.t.html#691)\]

<div class="desc">

Flag that this object's name is rendered as a plural (this applies to
both a singular noun with plural usage, such as "pants" or "scissors,"
and an object used in the world model to represent a collection of
real-world objects, such as "shrubs").

</div>

<span id="isProperName"></span>

`isProperName`

[en_us.t](../file/en_us.t.html)\[[792](../source/en_us.t.html#792)\]

<div class="desc">

Proper name flag. This indicates that the 'name' property is the name of
a person or place. We consider proper names to be fully qualified, so we
don't add articles for variations on the name such as 'theName'.

</div>

<span id="isQualifiedName"></span>

`isQualifiedName`

[en_us.t](../file/en_us.t.html)\[[802](../source/en_us.t.html#802)\]

<div class="desc">

Qualified name flag. This indicates that the object name, as given by
the 'name' property, is already fully qualified, so doesn't need
qualification by an article like "the" or "a" when it appears in a
sentence. By default, a name is considered qualified if it's a proper
name, but this can be overridden to mark a non-proper name as qualified
when needed.

</div>

<span id="isThingConstructed"></span>

`isThingConstructed`

[thing.t](../file/thing.t.html)\[[1109](../source/thing.t.html#1109)\]

<div class="desc">

Have we been through Thing.construct() yet for this object? Note that
this will only be set for dynamically created instances (i.e., objects
created with 'new').

</div>

<span id="isTopLevel"></span>

`isTopLevel`

[thing.t](../file/thing.t.html)\[[4976](../source/thing.t.html#4976)\]

<div class="desc">

Is this a "top-level" location? A top-level location is an object which
doesn't have another container, so its 'location' property is nil, but
which is part of the game universe anyway. In most cases, a top-level
location is simply a Room, since the network of rooms makes up the
game's map.

If an object has no location and is not itself a top-level location,
then the object is not part of the game world. It's sometimes useful to
remove objects from the game world, such as when they're destroyed
within the context of the game.

</div>

<span id="listName"></span>

`listName`

[en_us.t](../file/en_us.t.html)\[[954](../source/en_us.t.html#954)\]

<div class="desc">

Single-item listing description. This is used to display the item when
it appears as a single (non-grouped) item in a list. By default, we just
show the indefinite article description.

</div>

<span id="listWith"></span>

`listWith`

[thing.t](../file/thing.t.html)\[[2543](../source/thing.t.html#2543)\]

<div class="desc">

"List Group" objects. This specifies a list of ListGroup objects that we
use to list this object in object listings, such as inventory lists and
room contents lists.

An object can be grouped in more than one way. When multiple groups are
specified here, the order is significant:

\- To the extent two groups entirely overlap, which is to say that one
of the pair entirely contains the other (for example, if every coin is a
kind of money, then the "money" listing group would contain every object
in the "coin" group, plus other objects as well: the coin group is a
subset of the money group), the groups must be listed from most general
to most specific (for our money/coin example, then, money would come
before coin in the group list).

\- When two groups do not overlap, then the earlier one in our list is
given higher priority.

By default, we return an empty list.

</div>

<span id="location"></span>

`location`

[thing.t](../file/thing.t.html)\[[4600](../source/thing.t.html#4600)\]

<div class="desc">

Every Thing has a location, which is the Thing that contains this
object. A Thing's location can only be a simple object reference, or
nil; it cannot be a list, and it cannot be a method.

If the location is nil, the object does not exist anywhere in the
simulation's physical model. A nil location can be used to remove an
object from the game world, temporarily or permanently.

In general, the 'location' property should be declared for each
statically defined object (explicitly or implicitly via the '+' syntax).
'location' is a private property - it should never be evaluated or
changed by any subclass or by any other object. Only Thing methods may
evaluate or change the 'location' property. So, you can declare a
'location' property when defining an object, but you should essentially
never refer to 'location' directly in any other context; instead, use
the location and containment methods (isIn, etc) when you want to know
an object's containment relationship to another object.

</div>

<span id="lookInLister"></span>

`lookInLister`

[thing.t](../file/thing.t.html)\[[4456](../source/thing.t.html#4456)\]

<div class="desc">

the Lister to use when showing my contents in response to a LookIn
command

</div>

<span id="moved"></span>

`moved`

[thing.t](../file/thing.t.html)\[[1516](../source/thing.t.html#1516)\]

<div class="desc">

Flag: I've been moved out of my initial location. Whenever we move the
object to a new location, we'll set this to true.

</div>

<span id="name"></span>

`name`

[en_us.t](../file/en_us.t.html)\[[812](../source/en_us.t.html#812)\]

<div class="desc">

The name of the object - this is a string giving the object's short
description, for constructing sentences that refer to the object by
name. Each instance should override this to define the name of the
object. This string should not contain any articles; we use this string
as the root to generate various forms of the object's name for use in
different places in sentences.

</div>

<span id="nameDoes"></span>

`nameDoes`

[en_us.t](../file/en_us.t.html)\[[1858](../source/en_us.t.html#1858)\]

<div class="desc">

*no description available*

</div>

<span id="nameSays"></span>

`nameSays`

[en_us.t](../file/en_us.t.html)\[[1865](../source/en_us.t.html#1865)\]

<div class="desc">

*no description available*

</div>

<span id="nameSees"></span>

`nameSees`

[en_us.t](../file/en_us.t.html)\[[1863](../source/en_us.t.html#1863)\]

<div class="desc">

*no description available*

</div>

<span id="notTravelReadyMsg"></span>

`notTravelReadyMsg`

[thing.t](../file/thing.t.html)\[[3432](../source/thing.t.html#3432)\]

<div class="desc">

explain the reason isActorTravelReady() returned nil

</div>

<span id="objectNotifyList"></span>

`objectNotifyList`

[thing.t](../file/thing.t.html)\[[7716](../source/thing.t.html#7716)\]

<div class="desc">

our list of registered notification items

</div>

<span id="objInPrep"></span>

`objInPrep`

[en_us.t](../file/en_us.t.html)\[[1242](../source/en_us.t.html#1242)\]

<div class="desc">

Default preposition to use when an object is in/on this object. By
default, we use 'in' as the preposition; subclasses can override to use
others (such as 'on' for a surface).

</div>

<span id="obscuredInitSpecialDesc"></span>

`obscuredInitSpecialDesc`

[thing.t](../file/thing.t.html)\[[1459](../source/thing.t.html#1459)\]

<div class="desc">

The initial descriptions to use under obscured and distant viewing
conditions. By default, these simply show the plain initSpecialDesc;
these can be overridden, if desired, to show alternative messages when
viewing conditions are less than ideal.

Note that in order for one of these alternative initial descriptions to
be shown, the regular initSpecialDesc MUST be defined, even if it's
never actually used. We make the decision to display these other
descriptions based on the existence of a non-nil initSpecialDesc, so
always define initSpecialDesc whenever these are defined.

</div>

<span id="obscuredSpecialDesc"></span>

`obscuredSpecialDesc`

[thing.t](../file/thing.t.html)\[[1196](../source/thing.t.html#1196)\]

<div class="desc">

*no description available*

</div>

<span id="owner"></span>

`owner`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[5288](../source/thing.t.html#5288)\]

<div class="desc">

My explicit owner. By default, objects do not have explicit owners,
which means that the owner at any given time is determined by the
object's location - my innermost container that can own me is my owner.

However, in some cases, an object is inherently owned by a particular
other object (usually an actor), and this is invariant even when the
object moves to a new location not within the owner. For such cases,
this property can be set to the explicit owner object, which will cause
self.isOwnedBy(obj) to return true if and only if obj == self.owner.

</div>

<span id="patElevenEighteen"></span>

`patElevenEighteen`

[en_us.t](../file/en_us.t.html)\[[1697](../source/en_us.t.html#1697)\]

<div class="desc">

*no description available*

</div>

<span id="patIsAlpha"></span>

`patIsAlpha`

[en_us.t](../file/en_us.t.html)\[[1696](../source/en_us.t.html#1696)\]

<div class="desc">

*no description available*

</div>

<span id="patLeadingTagOrQuote"></span>

`patLeadingTagOrQuote`

[en_us.t](../file/en_us.t.html)\[[1692](../source/en_us.t.html#1692)\]

<div class="desc">

*no description available*

</div>

<span id="patOfPhrase"></span>

`patOfPhrase`

[en_us.t](../file/en_us.t.html)\[[1822](../source/en_us.t.html#1822)\]

<div class="desc">

*no description available*

</div>

<span id="patOneLetterAnWord"></span>

`patOneLetterAnWord`

[en_us.t](../file/en_us.t.html)\[[1695](../source/en_us.t.html#1695)\]

<div class="desc">

*no description available*

</div>

<span id="patOneLetterWord"></span>

`patOneLetterWord`

[en_us.t](../file/en_us.t.html)\[[1694](../source/en_us.t.html#1694)\]

<div class="desc">

*no description available*

</div>

<span id="patSingleApostropheS"></span>

`patSingleApostropheS`

[en_us.t](../file/en_us.t.html)\[[1819](../source/en_us.t.html#1819)\]

<div class="desc">

some pre-compiled patterns for pluralName

</div>

<span id="patTagOrQuoteChar"></span>

`patTagOrQuoteChar`

[en_us.t](../file/en_us.t.html)\[[1691](../source/en_us.t.html#1691)\]

<div class="desc">

pre-compile some regular expressions for aName

</div>

<span id="patUpperOrDigit"></span>

`patUpperOrDigit`

[en_us.t](../file/en_us.t.html)\[[1820](../source/en_us.t.html#1820)\]

<div class="desc">

*no description available*

</div>

<span id="patVowelY"></span>

`patVowelY`

[en_us.t](../file/en_us.t.html)\[[1821](../source/en_us.t.html#1821)\]

<div class="desc">

*no description available*

</div>

<span id="pluralDisambigName"></span>

`pluralDisambigName`

[en_us.t](../file/en_us.t.html)\[[920](../source/en_us.t.html#920)\]

<div class="desc">

The plural name for disambiguation prompts. We use the same logic here
as in theDisambigName.

</div>

<span id="pluralName"></span>

`pluralName`

[en_us.t](../file/en_us.t.html)\[[1710](../source/en_us.t.html#1710)\]

<div class="desc">

Get the default plural name. By default, we'll use the algorithmic
plural determination, which is based on the spelling of the name.

The algorithm won't always get it right, since some English plurals are
irregular ("men", "children", "Attorneys General"). When the name
doesn't fit the regular spelling patterns for plurals, the object should
simply override this routine to return the correct plural name string.

</div>

<span id="pronounSelector"></span>

`pronounSelector`

[en_us.t](../file/en_us.t.html)\[[995](../source/en_us.t.html#995)\]

<div class="desc">

Get the 'pronoun selector' for the various pronoun methods. This
returns:

  
- singular neuter = 1  
- singular masculine = 2  
- singular feminine = 3  
- plural = 4

</div>

<span id="roomDarkName"></span>

`roomDarkName`

[thing.t](../file/thing.t.html)\[[2610](../source/thing.t.html#2610)\]

<div class="desc">

our interior room name when we're in the dark

</div>

<span id="roomLocation"></span>

`roomLocation`

[thing.t](../file/thing.t.html)\[[3624](../source/thing.t.html#3624)\]

<div class="desc">

Get my "room location." If 'self' is capable of holding actors, this
should return 'self'; otherwise, it should return the nearest enclosing
container that's a room location. By default, we simply return our
location's room location.

</div>

<span id="roomName"></span>

`roomName`

[thing.t](../file/thing.t.html)\[[2561](../source/thing.t.html#2561)\]

<div class="desc">

Our interior room name. This is the status line name we display when an
actor is within this object and can't see out to the enclosing room.
Since we can't rely on the enclosing room's status line name if we can't
see the enclosing room, we must provide one of our own.

By default, we'll use our regular name.

</div>

<span id="seen"></span>

`seen`

[thing.t](../file/thing.t.html)\[[1532](../source/thing.t.html#1532)\]

<div class="desc">

Flag: I've been seen by the player character. This is nil by default; we
set this to true whenever we show a room description from the player
character's perspective, and the object is visible. The object doesn't
actually have to be mentioned in the room description to be marked as
seen - it merely has to be visible to the player character.

Note that this is only the DEFAULT 'seen' property, which all Actor
objects use by default. The ACTUAL property that a given Actor uses
depends on the actor's seenProp, which allows a game to keep track
separately of what each actor has seen by using different 'seen'
properties for different actors.

</div>

<span id="sightPresence"></span>

`sightPresence`

[thing.t](../file/thing.t.html)\[[4434](../source/thing.t.html#4434)\]

<div class="desc">

Determine whether or not the object has a "presence" in each sense. An
object has a presence in a sense if an actor immediately adjacent to the
object could detect the object by the sense alone. For example, an
object has a "hearing presence" if it is making some kind of noise, and
does not if it is silent.

Presence in a given sense is an intrinsic (which does not imply
unchanging) property of the object, in that presence is independent of
the relationship to any given actor. If an alarm clock is ringing, it
has a hearing presence, unconditionally; it doesn't matter if the alarm
clock is sealed inside a sound-proof box, because whether or not a given
actor has a sense path to the object is a matter for a different
computation.

Note that presence doesn't control access: an actor might have access to
an object for a sense even if the object has no presence in the sense.
Presence indicates whether or not the object is actively emitting
sensory data that would make an actor aware of the object without
specifically trying to apply the sense to the object.

By default, an object is visible and touchable, but does not emit any
sound or odor.

</div>

<span id="sightSize"></span>

`sightSize`

[thing.t](../file/thing.t.html)\[[4404](../source/thing.t.html#4404)\]

<div class="desc">

Sense sizes of the object. Each object has an individual size for each
sense. By default, objects are medium for all senses; this allows them
to be sensed from a distance or through an obscuring medium, but doesn't
allow their details to be sensed.

</div>

<span id="smellPresence"></span>

`smellPresence`

[thing.t](../file/thing.t.html)\[[4436](../source/thing.t.html#4436)\]

<div class="desc">

*no description available*

</div>

<span id="smellSize"></span>

`smellSize`

[thing.t](../file/thing.t.html)\[[4406](../source/thing.t.html#4406)\]

<div class="desc">

*no description available*

</div>

<span id="soundPresence"></span>

`soundPresence`

[thing.t](../file/thing.t.html)\[[4435](../source/thing.t.html#4435)\]

<div class="desc">

*no description available*

</div>

<span id="soundSize"></span>

`soundSize`

[thing.t](../file/thing.t.html)\[[4405](../source/thing.t.html#4405)\]

<div class="desc">

*no description available*

</div>

<span id="specialContentsLister"></span>

`specialContentsLister`

[thing.t](../file/thing.t.html)\[[4471](../source/thing.t.html#4471)\]

<div class="desc">

My "special" contents lister. This is the Lister to use to display the
special descriptions for objects that have special descriptions when
we're showing a room description for this object.

</div>

<span id="specialDesc"></span>

`specialDesc`

[thing.t](../file/thing.t.html)\[[1175](../source/thing.t.html#1175)\]

<div class="desc">

"Special" description. This is the generic place to put a description of
the object that should appear in the containing room's full description.
If the object defines a special description, the object is NOT listed in
the basic contents list of the room, because listing it with the
contents would be redundant with the special description.

By default, we have no special description. If a special description is
desired, define this to a double-quoted string containing the special
description, or to a method that displays the special description.

</div>

<span id="specialDescBeforeContents"></span>

`specialDescBeforeContents`

[thing.t](../file/thing.t.html)\[[1256](../source/thing.t.html#1256)\]

<div class="desc">

Special description phase. We list special descriptions for a room's
full description in two phases: one phase before we show the room's
portable contents list, and another phase after we show the contents
list. This property controls the phase in which we show this item's
special description. This only affects special descriptions that are
shown with room descriptions; in other cases, such as "examine"
descriptions of objects, all of the special descriptions are usually
shown together.

By default, we show our special description (if any) before the room's
contents listing, because most special descriptions act like extensions
of the room's main description and thus should be grouped directly with
the room's descriptive text. Objects with special descriptions that are
meant to indicate more ephemeral properties of the location can override
this to be listed after the room's portable contents.

One situation where you usually will want to list a special description
after contents is when the special description applies to an item that's
contained in a portable item. Since the container will be listed with
the room contents, as it's portable, we'll usually want the special
description of this child item to show up after the contents listing, so
that it shows up after its container is mentioned.

Note that the specialDescOrder is secondary to this phase grouping,
because we essentially list special items in two separate groups.

</div>

<span id="specialDescListWith"></span>

`specialDescListWith`

[thing.t](../file/thing.t.html)\[[2550](../source/thing.t.html#2550)\]

<div class="desc">

Get the list group for my special description. This works like the
ordinary listWith, but is used to group me with other objects showing
special descriptions, rather than in ordinary listings.

</div>

<span id="specialDescOrder"></span>

`specialDescOrder`

[thing.t](../file/thing.t.html)\[[1224](../source/thing.t.html#1224)\]

<div class="desc">

List order for the special description. Whenever there's more than one
object showing a specialDesc at the same time (in a single room
description, for example), we'll use this to order the specialDesc
displays. We'll display in ascending order of this value. By default, we
use the same value for everything, so listing order is arbitrary; when
one specialDesc should appear before or after another, this property can
be used to control the relative ordering.

</div>

<span id="specialNominalRoomPartLocation"></span>

`specialNominalRoomPartLocation`

[thing.t](../file/thing.t.html)\[[1851](../source/thing.t.html#1851)\]

<div class="desc">

Our "special" room part location. By default, we set this to nil, which
means that we'll use the nominal drop destination of our actual current
location when asked.

This property has a function similar to initNominalRoomPartLocation, but
is used to describe the nominal room part container of the object has
been moved (and even before it's been moved, if
initNominalRoomPartLocation is nil).

It's rare for an object to have a special room part location after it's
been moved, because most games simply don't provide commands for things
like re-attaching a poster to a wall or re-hanging a fan from the
ceiling. When it is possible to move an object to a new special
location, though, this property can be used to flag its new special
location.

</div>

<span id="suppressAutoSeen"></span>

`suppressAutoSeen`

[thing.t](../file/thing.t.html)\[[1558](../source/thing.t.html#1558)\]

<div class="desc">

Flag: suppress the automatic setting of the "seen" status for this
object in room and object descriptions. Normally, we'll automatically
mark every visible object as seen (by calling gActor.setHasSeen())
whenever we do a LOOK AROUND. We'll also automatically mark as seen
every visible object within an object examined explicitly (such as with
EXAMINE, LOOK IN, LOOK ON, or OPEN). This property can override this
automatic status change: when this property is true, we will NOT mark
this object as seen in any of these cases. When this property is true,
the game must explicitly mark the object as seen, if and when desired,
by calling actor.setHasSeen().

Sometimes, an object is not meant to be immediately obvious. For
example, a puzzle box might have a hidden button that can't be seen on
casual examination. In these cases, you can use suppressAutoSeen to
ensure that the object won't be marked as seen merely by virtue of its
being visible at the time of a LOOK AROUND or EXAMINE command.

Note that this property does NOT affect the object's actual visibility
or other sensory attributes. This property merely controls the automatic
setting of the "seen" status of the object.

</div>

<span id="takeFromNotInMessage"></span>

`takeFromNotInMessage`

[thing.t](../file/thing.t.html)\[[8782](../source/thing.t.html#8782)\]

<div class="desc">

general message for "take from" when an object isn't in me

</div>

<span id="theDisambigName"></span>

`theDisambigName`

[en_us.t](../file/en_us.t.html)\[[896](../source/en_us.t.html#896)\]

<div class="desc">

The definite-article name for disambiguation prompts.

By default, if the disambiguation name is identical to the regular name
(i.e, the string returned by self.disambigName is the same as the string
returned by self.name), then we simply return self.theName. Since the
base name is the same in either case, presumably the definite article
names should be the same as well. This way, if the object overrides
theName to do something special, then we'll use the same
definite-article name for disambiguation prompts.

If the disambigName isn't the same as the regular name, then we'll apply
the same algorithm to the base disambigName that we normally do to the
regular name to produce the theName. This way, if the disambigName is
overridden, we'll use the overridden disambigName to produce the
definite-article version, using the standard definite-article algorithm.

Note that there's an aspect of this conditional approach that might not
be obvious. It might look as though the test is redundant: if name ==
disambigName, after all, and the default theName returns
theNameFrom(name), then this ought to be identical to returning
theNameFrom(disambigName). The subtlety is that theName could be
overridden to produce a custom result, in which case returning
theNameFrom(disambigName) would return something different, which
probably wouldn't be correct: the whole reason theName would be
overridden is that the algorithmic determination (theNameFrom) gets it
wrong. So, by calling theName directly when disambigName is the same as
name, we are assured that we pick up any override in theName.

Note that in rare cases, neither of these default approaches will
produce the right result; this will happen if the object uses a custom
disambigName, but that name doesn't fit the normal algorithmic pattern
for applying a definite article. In these cases, the object should
simply override this method to specify the custom name.

</div>

<span id="theName"></span>

`theName`

[en_us.t](../file/en_us.t.html)\[[1157](../source/en_us.t.html#1157)\]

<div class="desc">

Get the name with a definite article ("the box"). By default, we use our
standard definite article algorithm to apply an article to self.name.

The name returned must be in the nominative case (which makes no
difference unless the name is a pronoun, since in English ordinary nouns
don't vary according to how they're used in a sentence).

</div>

<span id="theNamePossNoun"></span>

`theNamePossNoun`

[en_us.t](../file/en_us.t.html)\[[1216](../source/en_us.t.html#1216)\]

<div class="desc">

TheName as a possessive noun (that is Bob's, that is yours). We simply
return the possessive adjective name, since the two forms are usually
identical in English (except for pronouns, where they sometimes differ:
"her" for the adjective vs "hers" for the noun).

</div>

<span id="tmpAmbient_"></span>

`tmpAmbient_`

[thing.t](../file/thing.t.html)\[[7512](../source/thing.t.html#7512)\]

<div class="desc">

Scratch-pad for calculating ambient energy level - valid only after
calcAmbience and until the game state changes in any way. This is for
internal use within the sense propagation methods only.

</div>

<span id="tmpAmbientFill_"></span>

`tmpAmbientFill_`

[thing.t](../file/thing.t.html)\[[7520](../source/thing.t.html#7520)\]

<div class="desc">

Last fill material traversed by the ambient sense energy in
tmpAmbient\_. We must keep track of this so that we can treat
consecutive traversals of the same fill material as equivalent to a
single traversal.

</div>

<span id="tmpAmbientWithin_"></span>

`tmpAmbientWithin_`

[thing.t](../file/thing.t.html)\[[7541](../source/thing.t.html#7541)\]

<div class="desc">

Scratch-pads for the ambient level, best transparency, and obstructor to
our \*interior\* surface. We keep track of these separately from the
exterior data so that we can tell what we look like from the persepctive
of an object within us.

</div>

<span id="tmpFillMedium_"></span>

`tmpFillMedium_`

[thing.t](../file/thing.t.html)\[[7558](../source/thing.t.html#7558)\]

<div class="desc">

My fill medium. We cache this during each sense path calculation, since
the fill medium calculation often requires traversing several
containment levels.

</div>

<span id="tmpObstructor_"></span>

`tmpObstructor_`

[thing.t](../file/thing.t.html)\[[7533](../source/thing.t.html#7533)\]

<div class="desc">

Scratch-pad for the obstructor that contributed to a non-transparent
path to this object in tmpTrans\_.

</div>

<span id="tmpObstructorWithin_"></span>

`tmpObstructorWithin_`

[thing.t](../file/thing.t.html)\[[7543](../source/thing.t.html#7543)\]

<div class="desc">

*no description available*

</div>

<span id="tmpPathIsIn_"></span>

`tmpPathIsIn_`

[thing.t](../file/thing.t.html)\[[7551](../source/thing.t.html#7551)\]

<div class="desc">

Scratch-pad for the sense path direction at this object. If this is
true, the sense path is pointing inward - that is, the path from the
source object to here is entering from outside me. Otherwise, the sense
path is pointing outward.

</div>

<span id="tmpTrans_"></span>

`tmpTrans_`

[thing.t](../file/thing.t.html)\[[7527](../source/thing.t.html#7527)\]

<div class="desc">

Scrach-pad for the best transparency level to this object from the
current point of view. This is used during cacheSenseInfo to keep track
of the sense path to this object.

</div>

<span id="tmpTransWithin_"></span>

`tmpTransWithin_`

[thing.t](../file/thing.t.html)\[[7542](../source/thing.t.html#7542)\]

<div class="desc">

*no description available*

</div>

<span id="touchPresence"></span>

`touchPresence`

[thing.t](../file/thing.t.html)\[[4437](../source/thing.t.html#4437)\]

<div class="desc">

*no description available*

</div>

<span id="touchSize"></span>

`touchSize`

[thing.t](../file/thing.t.html)\[[4407](../source/thing.t.html#4407)\]

<div class="desc">

*no description available*

</div>

<span id="verbCan"></span>

`verbCan`

[en_us.t](../file/en_us.t.html)\[[1867](../source/en_us.t.html#1867)\]

<div class="desc">

*no description available*

</div>

<span id="verbCannot"></span>

`verbCannot`

[en_us.t](../file/en_us.t.html)\[[1868](../source/en_us.t.html#1868)\]

<div class="desc">

*no description available*

</div>

<span id="verbCant"></span>

`verbCant`

[en_us.t](../file/en_us.t.html)\[[1869](../source/en_us.t.html#1869)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingSD"></span>

`verbEndingSD`

[en_us.t](../file/en_us.t.html)\[[1901](../source/en_us.t.html#1901)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingSEd"></span>

`verbEndingSEd`

[en_us.t](../file/en_us.t.html)\[[1902](../source/en_us.t.html#1902)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingSMessageBuilder_"></span>

`verbEndingSMessageBuilder_`

[en_us.t](../file/en_us.t.html)\[[1903](../source/en_us.t.html#1903)\]

<div class="desc">

*no description available*

</div>

<span id="verbMust"></span>

`verbMust`

[en_us.t](../file/en_us.t.html)\[[1866](../source/en_us.t.html#1866)\]

<div class="desc">

*no description available*

</div>

<span id="verbToCome"></span>

`verbToCome`

[en_us.t](../file/en_us.t.html)\[[1860](../source/en_us.t.html#1860)\]

<div class="desc">

*no description available*

</div>

<span id="verbToDo"></span>

`verbToDo`

[en_us.t](../file/en_us.t.html)\[[1857](../source/en_us.t.html#1857)\]

<div class="desc">

A few common irregular verbs and name-plus-verb constructs, defined for
convenience.

</div>

<span id="verbToGo"></span>

`verbToGo`

[en_us.t](../file/en_us.t.html)\[[1859](../source/en_us.t.html#1859)\]

<div class="desc">

*no description available*

</div>

<span id="verbToLeave"></span>

`verbToLeave`

[en_us.t](../file/en_us.t.html)\[[1861](../source/en_us.t.html#1861)\]

<div class="desc">

*no description available*

</div>

<span id="verbToSay"></span>

`verbToSay`

[en_us.t](../file/en_us.t.html)\[[1864](../source/en_us.t.html#1864)\]

<div class="desc">

*no description available*

</div>

<span id="verbToSee"></span>

`verbToSee`

[en_us.t](../file/en_us.t.html)\[[1862](../source/en_us.t.html#1862)\]

<div class="desc">

*no description available*

</div>

<span id="verbWill"></span>

`verbWill`

[en_us.t](../file/en_us.t.html)\[[1870](../source/en_us.t.html#1870)\]

<div class="desc">

*no description available*

</div>

<span id="verbWont"></span>

`verbWont`

[en_us.t](../file/en_us.t.html)\[[1871](../source/en_us.t.html#1871)\]

<div class="desc">

*no description available*

</div>

<span id="weight"></span>

`weight`

[thing.t](../file/thing.t.html)\[[3736](../source/thing.t.html#3736)\]

<div class="desc">

An object has "weight" and "bulk" specifying how heavy and how large the
object is. These are in arbitrary units, and by default everything has a
weight of 1 and a bulk of 1.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="acceptCommand"></span>

`acceptCommand (issuingActor)`

[thing.t](../file/thing.t.html)\[[5692](../source/thing.t.html#5692)\]

<div class="desc">

by default, objects don't accept commands

</div>

<span id="addAllContents"></span>

`addAllContents (vec)`

[thing.t](../file/thing.t.html)\[[4869](../source/thing.t.html#4869)\]

<div class="desc">

add myself and all of my contents, recursively including contents of
contents, to a vector

</div>

<span id="addDirectConnections"></span>

`addDirectConnections (tab)`

[thing.t](../file/thing.t.html)\[[5758](../source/thing.t.html#5758)\]

<div class="desc">

Add this item and its direct containment connections to the lookup
table. This must recursively add all connected objects that aren't
already in the table.

</div>

<span id="addObjectNotifyItem"></span>

`addObjectNotifyItem (obj)`

[thing.t](../file/thing.t.html)\[[7704](../source/thing.t.html#7704)\]

<div class="desc">

Add an item to our registered notification list for actions involving
this object as the direct object, indirect object, and so on.

Items can be added here if they must be notified of actions involving
this object regardless of the physical proximity of this item and the
notification item.

</div>

<span id="addToContents"></span>

`addToContents (obj)`

[thing.t](../file/thing.t.html)\[[5396](../source/thing.t.html#5396)\]

<div class="desc">

Add an object to my contents.

Note that this should NOT be overridden to cause side effects - if side
effects are desired when inserting a new object into my contents, use
notifyInsert(). This routine is not allowed to cause side effects
because it is sometimes necessary to bypass side effects when moving an
item.

</div>

<span id="addToSenseInfoTable"></span>

`addToSenseInfoTable (sense, tab)`

[thing.t](../file/thing.t.html)\[[6882](../source/thing.t.html#6882)\]

<div class="desc">

Add myself to a sense info table. This is called by senseInfoTable() for
each object connected by containment to the source object 'src', after
we've fully traversed the containment tree to initialize our
current-sense properties (tmpAmbient\_, tmpTrans\_, etc).

Our job is to figure out if 'src' can sense us, and add a SenseInfo
entry to the LookupTable 'tab' (which is keyed by object, hence our key
is simply 'self') if 'src' can indeed sense us.

Note that an object that wants to set up its own special sensory data
can do so by overriding this. This routine will only be called on
objects connected to 'src' by containment, though, so if an object
overrides this in order to implement a special sensory system that's
outside of the normal containment model, it must somehow ensure that it
gets included in the containment connection table in the first place.

</div>

<span id="adjustLookAroundTable"></span>

`adjustLookAroundTable (tab, pov, actor)`

[thing.t](../file/thing.t.html)\[[2977](../source/thing.t.html#2977)\]

<div class="desc">

Adjust the sense table a "look around" command. This is called after we
calculate the sense info table, but before we start describing any of
the room's contents, to give us a chance to remove any items we don't
want described (or, conceivably, to add any items we do want described
but which won't show up with the normal sense calculations).

By default, we simply remove the point-of-view object from the list, to
ensure that it's not included among the objects mentioned as being in
the room. We don't want to mention the point of view because the POV
object because a POV isn't normally in its own field of view.

</div>

<span id="adjustThrowDestination"></span>

`adjustThrowDestination (thrownObj, path)`

[thing.t](../file/thing.t.html)\[[3839](../source/thing.t.html#3839)\]

<div class="desc">

Adjust a drop destination chosen in a THROW. This is called on the
object that was chosen as the preliminary landing location for the
thrown object, as calculated by getHitFallDestination(), to give the
preliminary destination a chance to redirect the landing to another
object. For example, if the preliminary destination simply isn't a
suitable surface or container where a projectile could land, or it's not
big enough to hold the projectile, the preliminary destination could
override this method to redirect the landing to a more suitable object.

By default, we don't need to make any adjustment, so we simply return
'self' to indicate that this can be used as the actual destination.

</div>

<span id="afterAction"></span>

`afterAction ( )`

[thing.t](../file/thing.t.html)\[[7648](../source/thing.t.html#7648)\]

<div class="desc">

Receive notification that a command has just been performed. This is
called by the same rules as beforeAction(), but under the conditions
prevailing after the command has been completed.

</div>

<span id="afterTravel"></span>

`afterTravel (traveler, connector)`

[thing.t](../file/thing.t.html)\[[7673](../source/thing.t.html#7673)\]

<div class="desc">

Receive notification that a traveler has just arrived via
travelerTravelTo(). This notification is sent to each object connected
to the traveler by containment, in its new location, just after the
travel completes.

</div>

<span id="allContents"></span>

`allContents ( )`

[thing.t](../file/thing.t.html)\[[4836](../source/thing.t.html#4836)\]

<div class="desc">

Get a vector of all of my contents, recursively including contents of
contents.

</div>

<span id="aNameFrom"></span>

`aNameFrom (str)`

[en_us.t](../file/en_us.t.html)\[[1509](../source/en_us.t.html#1509)\]

<div class="desc">

Apply an indefinite article ("a box", "an orange", "some lint") to the
given name. We'll try to figure out which indefinite article to use
based on what kind of noun phrase we use for our name (singular, plural,
or a "mass noun" like "lint"), and our spelling.

By default, we'll use the article "a" if the name starts with a
consonant, or "an" if it starts with a vowel.

If the name starts with a "y", we'll look at the second letter; if it's
a consonant, we'll use "an", otherwise "a" (hence "an yttrium block" but
"a yellow brick").

If the object is marked as having plural usage, we will use "some" as
the article ("some pants" or "some shrubs").

Some objects will want to override the default behavior, because the
lexical rules about when to use "a" and "an" are not without exception.
For example, silent-"h" words ("honor") are written with "an", and "h"
words with a pronounced but weakly stressed initial "h" are sometimes
used with "an" ("an historian"). Also, some 'y' words might not follow
the generic 'y' rule.

'U' words are especially likely not to follow any lexical rule - any 'u'
word that sounds like it starts with 'y' should use 'a' rather than
'an', but there's no good way to figure that out just looking at the
spelling (consider "a universal symbol" and "an unimportant word", or "a
unanimous decision" and "an unassuming man"). We simply always use 'an'
for a word starting with 'u', but this will have to be overridden when
the 'u' sounds like 'y'.

</div>

<span id="aNameObj"></span>

`aNameObj ( )`

[en_us.t](../file/en_us.t.html)\[[1475](../source/en_us.t.html#1475)\]

<div class="desc">

the indefinite-article name in the objective case

</div>

<span id="aNameOwnerLoc"></span>

`aNameOwnerLoc (ownerPriority)`

[en_us.t](../file/en_us.t.html)\[[1364](../source/en_us.t.html#1364)\]

<div class="desc">

Get my name (in various forms) distinguished by my owner or location.

If the object has an owner, and either we're giving priority to the
owner or our immediate location is the same as the owner, we'll show
using a possessive form with the owner ("bob's flashlight"). Otherwise,
we'll show the name distinguished by our immediate container ("the
flashlight in the backpack").

These are used by the ownership and location distinguishers to list
objects according to owners in disambiguation lists. The ownership
distinguisher gives priority to naming by ownership, regardless of the
containment relationship between owner and self; the location
distinguisher gives priority to naming by location, showing the owner
only if the owner is the same as the location.

We will presume that objects with proper names are never
indistinguishable from other objects with proper names, so we won't
worry about cases like "Bob's Bill". This leaves us free to use
appropriate articles in all cases.

</div>

<span id="announceDefaultObject"></span>

`announceDefaultObject (whichObj, action, resolvedAllObjects)`

[thing.t](../file/thing.t.html)\[[3922](../source/thing.t.html#3922)\]

<div class="desc">

Announce myself as a default object for an action. By default, we'll
show the standard library message announcing a default.

</div>

<span id="appendHeldContents"></span>

`appendHeldContents (vec)`

[thing.t](../file/thing.t.html)\[[5160](../source/thing.t.html#5160)\]

<div class="desc">

Add to a vector all of my contents that are directly held when I'm being
directly held. This is used to add the direct contents of an item to
scope when the item itself is being directly held.

In most cases, we do nothing. Certain types of objects override this
because they consider their contents to be held if they're held. For
example, a keyring considers all of its keys to be held if the keyring
itself is held, because the keys are attached to the keyring rather than
contained within it.

</div>

<span id="atmosphereList"></span>

`atmosphereList ( )`

[thing.t](../file/thing.t.html)\[[3660](../source/thing.t.html#3660)\]

<div class="desc">

Our room atmospheric message list. This can be set to an EventList that
provides messages to be displayed while the player character is within
this object.

By default, if our container is visible to us, we'll use our container's
atmospheric messages. This can be overridden to provide our own
atmosphere list when the player character is in this object.

</div>

<span id="baseMoveInto"></span>

`baseMoveInto (newContainer)`

[thing.t](../file/thing.t.html)\[[5506](../source/thing.t.html#5506)\]

<div class="desc">

Base moveInto - this is the low-level containment changer; this routine
does not send any notifications to any containers, and does not mark the
object as moved. This form should be used only for internal
library-initiated state changes, since it bypasses all of the normal
side effects of moving an object to a new container.

</div>

<span id="basicExamine"></span>

`basicExamine ( )`

[thing.t](../file/thing.t.html)\[[8085](../source/thing.t.html#8085)\]

<div class="desc">

Perform the basic 'examine' action. This shows either the normal or
initial long description (the latter only if the object hasn't been
moved yet, and it has a special initial examine description), and marks
the object as having been described at least once.

</div>

<span id="basicExamineFeel"></span>

`basicExamineFeel ( )`

[thing.t](../file/thing.t.html)\[[8397](../source/thing.t.html#8397)\]

<div class="desc">

Basic examination of an object for touch. As with the basic taste
examination, we don't use an emanation object or distinguish
transparency levels, because feeling an object requires direct physical
contact.

</div>

<span id="basicExamineListen"></span>

`basicExamineListen (explicit)`

[thing.t](../file/thing.t.html)\[[8215](../source/thing.t.html#8215)\]

<div class="desc">

Basic examination of the object for sound. If the object has an
associated noise object, we'll describe it.

If 'explicit' is true, we'll show our soundDesc if we have no associated
Noise object; otherwise, we'll show nothing at all unless we have a
Noise object.

</div>

<span id="basicExamineSmell"></span>

`basicExamineSmell (explicit)`

[thing.t](../file/thing.t.html)\[[8298](../source/thing.t.html#8298)\]

<div class="desc">

Basic examination of the object for odor. If the object has an
associated odor object, we'll describe it.

</div>

<span id="basicExamineTaste"></span>

`basicExamineTaste ( )`

[thing.t](../file/thing.t.html)\[[8385](../source/thing.t.html#8385)\]

<div class="desc">

Basic examination of an object for taste. Unlike the smell/listen
examination routines, we don't bother using a separate sensory emanation
object for tasting, as tasting is always an explicit action, never
passive. Furthermore, since tasting requires direct physical contact
with the object, we don't differentiate levels of transparency or
distance.

</div>

<span id="beforeAction"></span>

`beforeAction ( )`

[thing.t](../file/thing.t.html)\[[7638](../source/thing.t.html#7638)\]

<div class="desc">

Receive notification that a command is about to be performed. This is
called on each object connected by containment with the actor performing
the command, and on any objects explicitly registered with the actor,
the actor's location and its locations up to the outermost container, or
the directly involved objects.

</div>

<span id="beforeTravel"></span>

`beforeTravel (traveler, connector)`

[thing.t](../file/thing.t.html)\[[7665](../source/thing.t.html#7665)\]

<div class="desc">

Receive notification that a traveler (an actor or a vehicle, for
example) is about to depart via travelerTravelTo(), OR that an actor is
about to move among nested locations via travelWithin(). This
notification is sent to each object connected to the traveler by
containment, just before the traveler departs.

If the traveler is traveling between top-level locations, 'connector' is
the TravelConnector object being traversed. If an actor is merely moving
between nested locations, 'connector' will be nil.

</div>

<span id="buildContainmentPaths"></span>

`buildContainmentPaths (vec, pathHere, obj)`

[thing.t](../file/thing.t.html)\[[6334](../source/thing.t.html#6334)\]

<div class="desc">

Service routine for getAllPathsTo: build a vector of the containment
paths starting with this object.

</div>

<span id="cacheAmbientInfo"></span>

`cacheAmbientInfo (objs, sense)`

[thing.t](../file/thing.t.html)\[[7006](../source/thing.t.html#7006)\]

<div class="desc">

Cache the ambient energy level at each object in the table. The list
must include everything connected by containment.

</div>

<span id="cacheSenseInfo"></span>

`cacheSenseInfo (objs, sense)`

[thing.t](../file/thing.t.html)\[[6984](../source/thing.t.html#6984)\]

<div class="desc">

Cache sensory information for all objects in the given list from the
point of view of self. This caches the ambient energy level at each
object, if the sense uses ambient energy, and the transparency and
obstructor on the best path in the sense to the object. 'objs' is the
connection table, as generated by connectionTable().

</div>

<span id="cacheSensePath"></span>

`cacheSensePath (sense)`

[thing.t](../file/thing.t.html)\[[7300](../source/thing.t.html#7300)\]

<div class="desc">

Cache the sense path for each object reachable from this point of view.
Fills in tmpTrans\_ and tmpObstructor\_ for each object with the best
transparency path from the object to me.

</div>

<span id="canBeHeardBy"></span>

`canBeHeardBy (actor)`

[thing.t](../file/thing.t.html)\[[6675](../source/thing.t.html#6675)\]

<div class="desc">

*no description available*

</div>

<span id="canBeSeenBy"></span>

`canBeSeenBy (actor)`

[thing.t](../file/thing.t.html)\[[6674](../source/thing.t.html#6674)\]

<div class="desc">

can the given actor see/hear/smell/touch me?

</div>

<span id="canBeSensed"></span>

`canBeSensed (sense, trans, ambient)`

[thing.t](../file/thing.t.html)\[[4489](../source/thing.t.html#4489)\]

<div class="desc">

Determine if I can be sensed under the given conditions. Returns true if
the object can be sensed, nil if not. If this method returns nil, this
object will not be considered in scope for the current conditions.

By default, we return nil if the ambient energy level for the object is
zero. If the ambient level is non-zero, we'll return true in
'transparent' conditions, nil for 'opaque', and we'll let the sense
decide via its canObjBeSensed() method for any other transparency
conditions. Note that 'ambient' as given here is the ambient level \*at
the object\*, not as seen along my sense path - so this should NOT be
given as the ambient value from a SenseInfo, which has already been
adjusted for the sense path.

</div>

<span id="canBeSmelledBy"></span>

`canBeSmelledBy (actor)`

[thing.t](../file/thing.t.html)\[[6676](../source/thing.t.html#6676)\]

<div class="desc">

*no description available*

</div>

<span id="canBeTouchedBy"></span>

`canBeTouchedBy (actor)`

[thing.t](../file/thing.t.html)\[[6677](../source/thing.t.html#6677)\]

<div class="desc">

*no description available*

</div>

<span id="canDetailsBeSensed"></span>

`canDetailsBeSensed (sense, info, pov)`

[thing.t](../file/thing.t.html)\[[4536](../source/thing.t.html#4536)\]

<div class="desc">

Determine if I can be sensed IN DETAIL in the given sense, with the
given SenseInfo description. By default, an object's details can be
sensed if the sense path is 'transparent' or 'attenuated', OR the
object's scale in the sense is 'large'.

</div>

<span id="canHear"></span>

`canHear (obj)`

[thing.t](../file/thing.t.html)\[[6670](../source/thing.t.html#6670)\]

<div class="desc">

*no description available*

</div>

<span id="canMatchPronounType"></span>

`canMatchPronounType (typ)`

[en_us.t](../file/en_us.t.html)\[[742](../source/en_us.t.html#742)\]

<div class="desc">

can we match the given PronounXxx pronoun type specifier?

</div>

<span id="canMoveViaPath"></span>

`canMoveViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6056](../source/thing.t.html#6056)\]

<div class="desc">

Determine if we can traverse this object for moving the given object via
a path. Calls checkMoveViaPath(), and returns true if checkMoveViaPath()
indicates success, nil if it indicates failure.

Note that this method should generally not be overridden; only
checkMoveViaPath() should usually need to be overridden.

</div>

<span id="cannotGoShowExits"></span>

`cannotGoShowExits (actor)`

[thing.t](../file/thing.t.html)\[[3435](../source/thing.t.html#3435)\]

<div class="desc">

show a list of exits as part of failed travel - defer to location

</div>

<span id="cannotReachObject"></span>

`cannotReachObject (obj)`

[thing.t](../file/thing.t.html)\[[5839](../source/thing.t.html#5839)\]

<div class="desc">

Display a message explaining why we are obstructing a sense path to the
given object.

</div>

<span id="cannotSeeSmellSource"></span>

`cannotSeeSmellSource (obj)`

[thing.t](../file/thing.t.html)\[[5861](../source/thing.t.html#5861)\]

<div class="desc">

explain why we cannot see the source of an odor

</div>

<span id="cannotSeeSoundSource"></span>

`cannotSeeSoundSource (obj)`

[thing.t](../file/thing.t.html)\[[5858](../source/thing.t.html#5858)\]

<div class="desc">

Display a message explaining that the source of a sound cannot be seen
because I am visually obstructing it. By default, we show nothing at
all; subclasses can override this to provide a better explanation when
possible.

</div>

<span id="canOwn"></span>

`canOwn (obj)`

[thing.t](../file/thing.t.html)\[[5331](../source/thing.t.html#5331)\]

<div class="desc">

Can I own the given object? By default, objects cannot own other
objects. This can be overridden when ownership is desired.

This doesn't determine that we \*do\* own the given object, but only
that we \*can\* own the given object.

</div>

<span id="canSee"></span>

`canSee (obj)`

[thing.t](../file/thing.t.html)\[[6669](../source/thing.t.html#6669)\]

<div class="desc">

Can I see/hear/smell the given object? By default, an object can "see"
(or "hear", etc) another if there's a clear path in the corresponding
basic sense to the other object. Note that actors override this, because
they have a subjective view of the senses: an actor might see in a
special infrared vision sense rather than (or in addition to) the normal
'sight' sense, for example.

</div>

<span id="canSmell"></span>

`canSmell (obj)`

[thing.t](../file/thing.t.html)\[[6671](../source/thing.t.html#6671)\]

<div class="desc">

*no description available*

</div>

<span id="canThrowViaPath"></span>

`canThrowViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6060](../source/thing.t.html#6060)\]

<div class="desc">

determine if we can throw an object via this path

</div>

<span id="canTouch"></span>

`canTouch (obj)`

[thing.t](../file/thing.t.html)\[[5899](../source/thing.t.html#5899)\]

<div class="desc">

Determine if I can touch the given object. By default, we can always
touch our immediate container; otherwise, we can touch anything with a
touch path that we can traverse.

</div>

<span id="canTouchViaPath"></span>

`canTouchViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6064](../source/thing.t.html#6064)\]

<div class="desc">

determine if we can reach out and touch an object via this path

</div>

<span id="checkActorOutOfNested"></span>

`checkActorOutOfNested (allowImplicit)`

[thing.t](../file/thing.t.html)\[[3604](../source/thing.t.html#3604)\]

<div class="desc">

Check, using pre-condition rules, that the actor is removed from this
nested location and moved to its exit destination.

This is called when the actor is attempting to move to an object outside
of this object while the actor is within this object (for example, if we
have a platform containing a box containing a chair, 'self' is the box,
and the actor is in the chair, an attempt to move to the platform will
trigger a call to box.checkActorOutOfNested).

By default, we're not a nested location, but we could \*contain\* nested
locations. So what we need to do is defer to the child object that
actually contains the actor, to let it figure out what it means to move
the actor out of itself.

</div>

<span id="checkBulkChange"></span>

`checkBulkChange ( )`

[thing.t](../file/thing.t.html)\[[4175](../source/thing.t.html#4175)\]

<div class="desc">

Check a proposed change in my bulk. When this is called, the new bulk
should already be in effect (the best way to do this when just making a
check is via whatIf).

This routine can be called during the 'check' or 'action' stages of
processing a command to determine if a change in my bulk would cause a
problem. If so, we'll add a failure report and exit the command.

By default, notify our immediate container of the change to see if
there's any objection. A change in an object's bulk typically only
aaffects its container or containers.

The usual way to invoke this routine in a 'check' or 'action' routine is
with something like this:

whatIf({: checkBulkChange()}, &inflated, true);

This checks to see if the change in my bulk implied by changing
self.inflated to true would present a problem for my container,
terminating with a reportFailure+exit if so.

</div>

<span id="checkBulkChangeWithin"></span>

`checkBulkChangeWithin (changingObj)`

[thing.t](../file/thing.t.html)\[[4197](../source/thing.t.html#4197)\]

<div class="desc">

Check a bulk change of one of my direct contents, given by obj. When
this is called, 'obj' will be (tentatively) set to reflect its proposed
new bulk; if this routine doesn't like the new bulk, it should issue a
failure report and exit the command, which will cancel the command that
would have caused the change and will prevent the proposed change from
taking effect.

By default, we'll do nothing; subclasses that are sensitive to the bulks
of their contents should override this.

</div>

<span id="checkMoveViaPath"></span>

`checkMoveViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6020](../source/thing.t.html#6020)\]

<div class="desc">

Determine if we can traverse self for moving the given object in the
given manner. This is used to determine if a containment connection path
can be used to move an object to a new location. Returns a CheckStatus
object indicating success if we can traverse self, failure if not.

By default, we'll simply return a success indicator. Subclasses might
want to override this for particular conditions. For example, containers
would normally override this to return nil when attempting to move an
object in or out of a closed container. Some special containers might
also want to override this to allow moving an object in or out only if
the object is below a certain size threshold, for example.

'obj' is the object being moved, and 'dest' is the destination of the
move.

'op' is one of the pathXxx operations - PathIn, PathOut, PathPeer -
specifying what kind of movement is being attempted. PathIn indicates
that we're moving 'obj' from outside self to inside self; PathOut
indicates the opposite. PathPeer indicates that we're moving 'obj'
entirely within self - this normally means that we've moved the object
out of one of our contents and will move it into another of our
contents.

</div>

<span id="checkStagingLocation"></span>

`checkStagingLocation (dest)`

[thing.t](../file/thing.t.html)\[[5674](../source/thing.t.html#5674)\]

<div class="desc">

Determine if I'm a valid staging location for the given nested room
destination 'dest'. This is called when the actor is attempting to enter
the nested room 'dest', and the travel handlers find that we're the
staging location for the room. (A "staging location" is the location the
actor is required to occupy immediately before moving into the
destination.)

If this object is a valid staging location, the routine should simply do
nothing. If this object isn't valid as a staging location, this routine
should display an appropriate message and terminate the command with
'exit'.

An arbitrary object can't be a staging location, simply because an actor
can't enter an arbitrary object. So, by default, we'll explain that we
can't enter this object. If the destination is contained within us,
we'll provide a more specific explanation indicating that the problem is
that the destination is within us.

</div>

<span id="checkThrowViaPath"></span>

`checkThrowViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6030](../source/thing.t.html#6030)\]

<div class="desc">

Determine if we can traverse this object for throwing the given object
in the given manner. By default, this returns the same thing as
canMoveViaPath, since throwing is in most cases the same as ordinary
movement. Objects can override this when throwing an object through this
path element should be treated differently from ordinary movement.

</div>

<span id="checkTouchViaPath"></span>

`checkTouchViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6045](../source/thing.t.html#6045)\]

<div class="desc">

Determine if we can traverse self in the given manner for the purposes
of 'obj' touching another object. 'obj' is usually an actor; this
determines if 'obj' is allowed to reach through this path element on the
way to touching another object.

By default, this returns the same thing as canMoveViaPath, since
touching is in most cases the same as ordinary movement of an object
from one location to another. Objects can overridet his when touching an
object through this path element should be treated differently from
moving an object.

</div>

<span id="checkTravelerDirectlyInRoom"></span>

`checkTravelerDirectlyInRoom (traveler, allowImplicit)`

[thing.t](../file/thing.t.html)\[[3582](../source/thing.t.html#3582)\]

<div class="desc">

Check that a traveler is directly in this room. By default, a Thing is
not a room, so a connector within a Thing actually requires the traveler
to be in the Thing's container, not in the Thing itself. So, defer to
our container.

</div>

<span id="childInName"></span>

`childInName (childName)`

[en_us.t](../file/en_us.t.html)\[[1308](../source/en_us.t.html#1308)\]

<div class="desc">

Get a description of an object within this object, describing the
object's location as this object. By default, we'll append "in
\<theName\>" to the given object name.

</div>

<span id="childInNameGen"></span>

`childInNameGen (childName, myName)`

[en_us.t](../file/en_us.t.html)\[[1338](../source/en_us.t.html#1338)\]

<div class="desc">

Base routine for generating childInName and related names. Takes the
name to use for the child and the name to use for me, and combines them
appropriately.

In most cases, this is the only one of the various childInName methods
that needs to be overridden per subclass, since the others are defined
in terms of this one. Note also that if the only thing you need to do is
change the preposition from 'in' to something else, you can just
override objInPrep instead.

</div>

<span id="childInNameWithOwner"></span>

`childInNameWithOwner (childName)`

[en_us.t](../file/en_us.t.html)\[[1317](../source/en_us.t.html#1317)\]

<div class="desc">

Get a description of an object within this object, showing the owner of
this object. This is similar to childInName, but explicitly shows the
owner of the containing object, if any: "the flashlight in bob's
backpack".

</div>

<span id="childInRemoteName"></span>

`childInRemoteName (childName, pov)`

[en_us.t](../file/en_us.t.html)\[[1324](../source/en_us.t.html#1324)\]

<div class="desc">

get a description of an object within this object, as seen from a remote
location

</div>

<span id="clearSenseInfo"></span>

`clearSenseInfo ( )`

[thing.t](../file/thing.t.html)\[[7491](../source/thing.t.html#7491)\]

<div class="desc">

Clear the sensory scratch-pad properties, in preparation for a sensory
calculation pass.

</div>

<span id="cloneForMultiInstanceContents"></span>

`cloneForMultiInstanceContents (loc)`

[thing.t](../file/thing.t.html)\[[5643](../source/thing.t.html#5643)\]

<div class="desc">

Create a clone for inclusion in MultiInstance contents. We'll
recursively clone our own contents.

</div>

<span id="cloneMultiInstanceContents"></span>

`cloneMultiInstanceContents ( )`

[thing.t](../file/thing.t.html)\[[5621](../source/thing.t.html#5621)\]

<div class="desc">

Clone this object for inclusion in a MultiInstance's contents tree. When
we clone an instance object for a MultiInstance, we'll also clone its
contents, and their contents, and so on. This routine creates a private
copy of all of our contents.

</div>

<span id="conjugateRegularVerb"></span>

`conjugateRegularVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[1078](../source/en_us.t.html#1078)\]

<div class="desc">

Conjugate a regular verb in the present or past tense for our person and
number.

In the present tense, this is pretty easy: we add an 's' for the third
person singular, and leave the verb unchanged for plural (it asks, they
ask). The only complication is that we must check some special cases to
add the -s suffix: -y -\> -ies (it carries), -o -\> -oes (it goes).

In the past tense, we can equally easily figure out when to use -d, -ed,
or -ied. However, we have a more serious problem: for some verbs, the
last consonant of the verb stem should be repeated (as in deter -\>
deterred), and for others it shouldn't (as in gather -\> gathered). To
figure out which rule applies, we would sometimes need to know whether
the last syllable is stressed, and unfortunately there is no easy way to
determine that programmatically.

Therefore, we do \*not\* handle the case where the last consonant is
repeated in the past tense. You shouldn't use this method for this case;
instead, treat it as you would handle an irregular verb, by explicitly
specifying the correct past tense form via the tSel macro. For example,
to generate the properly conjugated form of the verb "deter" for an
object named "thing", you could use an expression such as:

'deter' + tSel(thing.verbEndingS, 'red')

This would correctly generate "deter", "deters", or "deterred" depending
on the number of the object named "thing" and on the current narrative
tense.

</div>

<span id="connectionTable"></span>

`connectionTable ( )`

[thing.t](../file/thing.t.html)\[[5726](../source/thing.t.html#5726)\]

<div class="desc">

Generate a lookup table of all of the objects connected by containment
to this object. This table includes all containment connections, even
through closed containers and the like.

The table is keyed by object; the associated values are meaningless, as
all that matters is whether or not an object is in the table.

</div>

<span id="construct"></span>

`construct ( )`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[1080](../source/thing.t.html#1080)\]

<div class="desc">

on constructing a new Thing, initialize it as we would a statically
instantiated Thing

</div>

<span id="contentsInFixedIn"></span>

`contentsInFixedIn (loc)`

[thing.t](../file/thing.t.html)\[[5113](../source/thing.t.html#5113)\]

<div class="desc">

Are my contents within a fixed item that is within the given location?
By default, we return nil because we are not ourselves fixed.

</div>

<span id="countDisambigName"></span>

`countDisambigName (cnt)`

[en_us.t](../file/en_us.t.html)\[[909](../source/en_us.t.html#909)\]

<div class="desc">

The counted name for disambiguation prompts. We use the same logic here
as in theDisambigName.

</div>

<span id="countListName"></span>

`countListName (equivCount, pov, info)`

[thing.t](../file/thing.t.html)\[[2079](../source/thing.t.html#2079)\]

<div class="desc">

Single-item counted listing description. This is used to display an item
with a count of equivalent items ("four gold coins"). 'info' is the
sense information from the current point of view for 'self', which we
take to be representative of the sense information for all of the
equivalent items.

</div>

<span id="countName"></span>

`countName (count)`

[en_us.t](../file/en_us.t.html)\[[965](../source/en_us.t.html#965)\]

<div class="desc">

Return a string giving the "counted name" of the object - that is, a
phrase describing the given number of the object. For example, for a red
book, and a count of 5, we might return "five red books". By default, we
use countNameFrom() to construct a phrase from the count and either our
regular (singular) 'name' property or our 'pluralName' property,
according to whether count is 1 or more than 1.

</div>

<span id="countNameFrom"></span>

`countNameFrom (count, singularStr, pluralStr)`

[en_us.t](../file/en_us.t.html)\[[971](../source/en_us.t.html#971)\]

<div class="desc">

Returns a string giving a count applied to the name string. The name
must be given in both singular and plural forms.

</div>

<span id="countNameOwnerLoc"></span>

`countNameOwnerLoc (cnt, ownerPriority)`

[en_us.t](../file/en_us.t.html)\[[1408](../source/en_us.t.html#1408)\]

<div class="desc">

we have no owner - show as "the item in the location"

</div>

<span id="darkRoomContentsLister"></span>

`darkRoomContentsLister ( )`

[thing.t](../file/thing.t.html)\[[3312](../source/thing.t.html#3312)\]

<div class="desc">

Get my dark room contents lister - this is the Lister object we'll use
to display the room's self-illuminating contents when the room is dark.

</div>

<span id="defaultDistantDesc"></span>

`defaultDistantDesc ( )`

[thing.t](../file/thing.t.html)\[[2210](../source/thing.t.html#2210)\]

<div class="desc">

the default distant description

</div>

<span id="defaultObscuredDesc"></span>

`defaultObscuredDesc (obs)`

[thing.t](../file/thing.t.html)\[[2250](../source/thing.t.html#2250)\]

<div class="desc">

the default obscured description

</div>

<span id="desc"></span>

`desc ( )`

[thing.t](../file/thing.t.html)\[[2180](../source/thing.t.html#2180)\]

<div class="desc">

The default long description, which is displayed in response to an
explicit player request to examine the object. We'll use a generic
library message; most objects should override this to customize the
object's desription.

Note that we show this as a "default descriptive report," because this
default message indicates merely that there's nothing special to say
about the object. If we generate any additional description messages,
such as status reports ("it's open" or "it contains a gold key") or
special descriptions for things inside, we clearly \*do\* have something
special to say about the object, so we'll want to suppress the
nothing-special message. To accomplish this suppression, all we have to
do is report our generic description as a default descriptive report,
and the transcript will automatically filter it out if there are any
other reports for this same action.

Note that any time this is overridden by an object with any sort of
actual description, the override should NOT use defaultDescReport.
Instead, simply set this to display the descriptive message directly:

desc = "It's a big green box. "

</div>

<span id="directionForConnector"></span>

`directionForConnector (conn, actor)`

[thing.t](../file/thing.t.html)\[[3540](../source/thing.t.html#3540)\]

<div class="desc">

Find a direction linked to a given connector, for travel by the given
actor. Returns the first direction (as a Direction object) we find
linked to the connector, or nil if we don't find any direction linked to
it.

</div>

<span id="distantSmellDesc"></span>

`distantSmellDesc ( )`

[thing.t](../file/thing.t.html)\[[2277](../source/thing.t.html#2277)\]

<div class="desc">

distant smell description

</div>

<span id="distantSoundDesc"></span>

`distantSoundDesc ( )`

[thing.t](../file/thing.t.html)\[[2262](../source/thing.t.html#2262)\]

<div class="desc">

distant sound description

</div>

<span id="dobjFor(AskAbout)"></span>

`dobjFor(AskAbout)`

[thing.t](../file/thing.t.html)\[[9060](../source/thing.t.html#9060)\]

<div class="desc">

"Ask about" action

</div>

<span id="dobjFor(AskFor)"></span>

`dobjFor(AskFor)`

[thing.t](../file/thing.t.html)\[[8954](../source/thing.t.html#8954)\]

<div class="desc">

"Ask for" action

</div>

<span id="dobjFor(AskVague)"></span>

`dobjFor(AskVague)`

[thing.t](../file/thing.t.html)\[[9079](../source/thing.t.html#9079)\]

<div class="desc">

Vague "ask" and "tell" - these are for syntactically incorrect ASK and
TELL phrasings, so that we can provide better error feedback.

</div>

<span id="dobjFor(AttachTo)"></span>

`dobjFor(AttachTo)`

[thing.t](../file/thing.t.html)\[[9814](../source/thing.t.html#9814)\]

<div class="desc">

"AttachTo" action

</div>

<span id="dobjFor(Attack)"></span>

`dobjFor(Attack)`

[thing.t](../file/thing.t.html)\[[9130](../source/thing.t.html#9130)\]

<div class="desc">

"Attack" action.

</div>

<span id="dobjFor(AttackWith)"></span>

`dobjFor(AttackWith)`

[thing.t](../file/thing.t.html)\[[9141](../source/thing.t.html#9141)\]

<div class="desc">

"Attack with" action - attack with (presumably) a weapon.

</div>

<span id="dobjFor(Board)"></span>

`dobjFor(Board)`

[thing.t](../file/thing.t.html)\[[10092](../source/thing.t.html#10092)\]

<div class="desc">

"Board" action

</div>

<span id="dobjFor(Break)"></span>

`dobjFor(Break)`

[thing.t](../file/thing.t.html)\[[9854](../source/thing.t.html#9854)\]

<div class="desc">

"Break" action

</div>

<span id="dobjFor(Burn)"></span>

`dobjFor(Burn)`

[thing.t](../file/thing.t.html)\[[9767](../source/thing.t.html#9767)\]

<div class="desc">

"Burn". By default, we ask for something to use to burn the object,
since most objects are not self-igniting.

</div>

<span id="dobjFor(BurnWith)"></span>

`dobjFor(BurnWith)`

[thing.t](../file/thing.t.html)\[[9789](../source/thing.t.html#9789)\]

<div class="desc">

"Burn with"

</div>

<span id="dobjFor(Clean)"></span>

`dobjFor(Clean)`

[thing.t](../file/thing.t.html)\[[10037](../source/thing.t.html#10037)\]

<div class="desc">

"Clean" action

</div>

<span id="dobjFor(CleanWith)"></span>

`dobjFor(CleanWith)`

[thing.t](../file/thing.t.html)\[[10047](../source/thing.t.html#10047)\]

<div class="desc">

"CleanWith" action

</div>

<span id="dobjFor(Climb)"></span>

`dobjFor(Climb)`

[thing.t](../file/thing.t.html)\[[9881](../source/thing.t.html#9881)\]

<div class="desc">

"Climb", "climb up", and "climb down" actions

</div>

<span id="dobjFor(ClimbDown)"></span>

`dobjFor(ClimbDown)`

[thing.t](../file/thing.t.html)\[[9893](../source/thing.t.html#9893)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(ClimbUp)"></span>

`dobjFor(ClimbUp)`

[thing.t](../file/thing.t.html)\[[9887](../source/thing.t.html#9887)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Close)"></span>

`dobjFor(Close)`

[thing.t](../file/thing.t.html)\[[9913](../source/thing.t.html#9913)\]

<div class="desc">

"Close" action

</div>

<span id="dobjFor(Consult)"></span>

`dobjFor(Consult)`

[thing.t](../file/thing.t.html)\[[9667](../source/thing.t.html#9667)\]

<div class="desc">

"Consult" action

</div>

<span id="dobjFor(ConsultAbout)"></span>

`dobjFor(ConsultAbout)`

[thing.t](../file/thing.t.html)\[[9673](../source/thing.t.html#9673)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(CutWith)"></span>

`dobjFor(CutWith)`

[thing.t](../file/thing.t.html)\[[9864](../source/thing.t.html#9864)\]

<div class="desc">

"Cut with" action

</div>

<span id="dobjFor(Detach)"></span>

`dobjFor(Detach)`

[thing.t](../file/thing.t.html)\[[9844](../source/thing.t.html#9844)\]

<div class="desc">

"Detach" action

</div>

<span id="dobjFor(DetachFrom)"></span>

`dobjFor(DetachFrom)`

[thing.t](../file/thing.t.html)\[[9829](../source/thing.t.html#9829)\]

<div class="desc">

"DetachFrom" action

</div>

<span id="dobjFor(Dig)"></span>

`dobjFor(Dig)`

[thing.t](../file/thing.t.html)\[[9508](../source/thing.t.html#9508)\]

<div class="desc">

"Dig" action - by default, simply re-reoute to dig-with, since we
generally need a digging implement to dig in anything. Some objects
might want to override this to allow digging without any implement; a
sandy beach, for example, might allow digging in the sand without a
shovel.

</div>

<span id="dobjFor(DigWith)"></span>

`dobjFor(DigWith)`

[thing.t](../file/thing.t.html)\[[9519](../source/thing.t.html#9519)\]

<div class="desc">

"DigWith" action

</div>

<span id="dobjFor(Doff)"></span>

`dobjFor(Doff)`

[thing.t](../file/thing.t.html)\[[8934](../source/thing.t.html#8934)\]

<div class="desc">

"Doff" action

</div>

<span id="dobjFor(Drink)"></span>

`dobjFor(Drink)`

[thing.t](../file/thing.t.html)\[[9987](../source/thing.t.html#9987)\]

<div class="desc">

"Drink" action

</div>

<span id="dobjFor(Drop)"></span>

`dobjFor(Drop)`

[thing.t](../file/thing.t.html)\[[8788](../source/thing.t.html#8788)\]

<div class="desc">

"Drop" verb processing

</div>

<span id="dobjFor(Eat)"></span>

`dobjFor(Eat)`

[thing.t](../file/thing.t.html)\[[9973](../source/thing.t.html#9973)\]

<div class="desc">

"Eat" action

</div>

<span id="dobjFor(Enter)"></span>

`dobjFor(Enter)`

[thing.t](../file/thing.t.html)\[[10269](../source/thing.t.html#10269)\]

<div class="desc">

"Enter"

</div>

<span id="dobjFor(EnterOn)"></span>

`dobjFor(EnterOn)`

[thing.t](../file/thing.t.html)\[[9709](../source/thing.t.html#9709)\]

<div class="desc">

"Enter on" action

</div>

<span id="dobjFor(Examine)"></span>

`dobjFor(Examine)`

[thing.t](../file/thing.t.html)\[[8039](../source/thing.t.html#8039)\]

<div class="desc">

"Examine" action

</div>

<span id="dobjFor(Extinguish)"></span>

`dobjFor(Extinguish)`

[thing.t](../file/thing.t.html)\[[9804](../source/thing.t.html#9804)\]

<div class="desc">

"Extinguish"

</div>

<span id="dobjFor(Fasten)"></span>

`dobjFor(Fasten)`

[thing.t](../file/thing.t.html)\[[10119](../source/thing.t.html#10119)\]

<div class="desc">

"Fasten" action

</div>

<span id="dobjFor(FastenTo)"></span>

`dobjFor(FastenTo)`

[thing.t](../file/thing.t.html)\[[10129](../source/thing.t.html#10129)\]

<div class="desc">

"Fasten to" action

</div>

<span id="dobjFor(Feel)"></span>

`dobjFor(Feel)`

[thing.t](../file/thing.t.html)\[[8613](../source/thing.t.html#8613)\]

<div class="desc">

"Feel"

</div>

<span id="dobjFor(Flip)"></span>

`dobjFor(Flip)`

[thing.t](../file/thing.t.html)\[[9729](../source/thing.t.html#9729)\]

<div class="desc">

"Flip" action

</div>

<span id="dobjFor(Follow)"></span>

`dobjFor(Follow)`

[thing.t](../file/thing.t.html)\[[9092](../source/thing.t.html#9092)\]

<div class="desc">

"Follow" action

</div>

<span id="dobjFor(GetOffOf)"></span>

`dobjFor(GetOffOf)`

[thing.t](../file/thing.t.html)\[[10110](../source/thing.t.html#10110)\]

<div class="desc">

"Get off of" action

</div>

<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`

[thing.t](../file/thing.t.html)\[[10102](../source/thing.t.html#10102)\]

<div class="desc">

"Get out of" (unboard) action

</div>

<span id="dobjFor(GiveTo)"></span>

`dobjFor(GiveTo)`

[thing.t](../file/thing.t.html)\[[8972](../source/thing.t.html#8972)\]

<div class="desc">

"Give to" action

</div>

<span id="dobjFor(GoThrough)"></span>

`dobjFor(GoThrough)`

[thing.t](../file/thing.t.html)\[[10278](../source/thing.t.html#10278)\]

<div class="desc">

"Go through"

</div>

<span id="dobjFor(JumpOff)"></span>

`dobjFor(JumpOff)`

[thing.t](../file/thing.t.html)\[[9543](../source/thing.t.html#9543)\]

<div class="desc">

"jump off"

</div>

<span id="dobjFor(JumpOver)"></span>

`dobjFor(JumpOver)`

[thing.t](../file/thing.t.html)\[[9534](../source/thing.t.html#9534)\]

<div class="desc">

"jump over"

</div>

<span id="dobjFor(Kiss)"></span>

`dobjFor(Kiss)`

[thing.t](../file/thing.t.html)\[[8943](../source/thing.t.html#8943)\]

<div class="desc">

"Kiss"

</div>

<span id="dobjFor(LieOn)"></span>

`dobjFor(LieOn)`

[thing.t](../file/thing.t.html)\[[10072](../source/thing.t.html#10072)\]

<div class="desc">

"LieOn" action

</div>

<span id="dobjFor(Light)"></span>

`dobjFor(Light)`

[thing.t](../file/thing.t.html)\[[9760](../source/thing.t.html#9760)\]

<div class="desc">

"Light" action. By default, we treat this as equivalent to "burn".

</div>

<span id="dobjFor(ListenTo)"></span>

`dobjFor(ListenTo)`

[thing.t](../file/thing.t.html)\[[8560](../source/thing.t.html#8560)\]

<div class="desc">

"Listen to"

</div>

<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`

[thing.t](../file/thing.t.html)\[[9923](../source/thing.t.html#9923)\]

<div class="desc">

"Lock" action

</div>

<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`

[thing.t](../file/thing.t.html)\[[9943](../source/thing.t.html#9943)\]

<div class="desc">

"LockWith" action

</div>

<span id="dobjFor(LookBehind)"></span>

`dobjFor(LookBehind)`

[thing.t](../file/thing.t.html)\[[8539](../source/thing.t.html#8539)\]

<div class="desc">

"Look behind"

</div>

<span id="dobjFor(LookIn)"></span>

`dobjFor(LookIn)`

[thing.t](../file/thing.t.html)\[[8501](../source/thing.t.html#8501)\]

<div class="desc">

"Look in"

</div>

<span id="dobjFor(LookThrough)"></span>

`dobjFor(LookThrough)`

[thing.t](../file/thing.t.html)\[[8550](../source/thing.t.html#8550)\]

<div class="desc">

"Look through"

</div>

<span id="dobjFor(LookUnder)"></span>

`dobjFor(LookUnder)`

[thing.t](../file/thing.t.html)\[[8528](../source/thing.t.html#8528)\]

<div class="desc">

"Look under"

</div>

<span id="dobjFor(Move)"></span>

`dobjFor(Move)`

[thing.t](../file/thing.t.html)\[[9574](../source/thing.t.html#9574)\]

<div class="desc">

"Move" action

</div>

<span id="dobjFor(MoveTo)"></span>

`dobjFor(MoveTo)`

[thing.t](../file/thing.t.html)\[[9601](../source/thing.t.html#9601)\]

<div class="desc">

"MoveTo" action

</div>

<span id="dobjFor(MoveWith)"></span>

`dobjFor(MoveWith)`

[thing.t](../file/thing.t.html)\[[9585](../source/thing.t.html#9585)\]

<div class="desc">

"MoveWith" action

</div>

<span id="dobjFor(Open)"></span>

`dobjFor(Open)`

[thing.t](../file/thing.t.html)\[[9903](../source/thing.t.html#9903)\]

<div class="desc">

"Open" action

</div>

<span id="dobjFor(PlugIn)"></span>

`dobjFor(PlugIn)`

[thing.t](../file/thing.t.html)\[[10169](../source/thing.t.html#10169)\]

<div class="desc">

"PlugIn" action

</div>

<span id="dobjFor(PlugInto)"></span>

`dobjFor(PlugInto)`

[thing.t](../file/thing.t.html)\[[10179](../source/thing.t.html#10179)\]

<div class="desc">

"PlugInto" action

</div>

<span id="dobjFor(Pour)"></span>

`dobjFor(Pour)`

[thing.t](../file/thing.t.html)\[[9997](../source/thing.t.html#9997)\]

<div class="desc">

"Pour"

</div>

<span id="dobjFor(PourInto)"></span>

`dobjFor(PourInto)`

[thing.t](../file/thing.t.html)\[[10007](../source/thing.t.html#10007)\]

<div class="desc">

"Pour into"

</div>

<span id="dobjFor(PourOnto)"></span>

`dobjFor(PourOnto)`

[thing.t](../file/thing.t.html)\[[10022](../source/thing.t.html#10022)\]

<div class="desc">

"Pour onto"

</div>

<span id="dobjFor(Pull)"></span>

`dobjFor(Pull)`

[thing.t](../file/thing.t.html)\[[9563](../source/thing.t.html#9563)\]

<div class="desc">

"Pull" action

</div>

<span id="dobjFor(Push)"></span>

`dobjFor(Push)`

[thing.t](../file/thing.t.html)\[[9552](../source/thing.t.html#9552)\]

<div class="desc">

"Push" action

</div>

<span id="dobjFor(PushTravel)"></span>

`dobjFor(PushTravel)`

[thing.t](../file/thing.t.html)\[[10289](../source/thing.t.html#10289)\]

<div class="desc">

Push in Direction action - this is for commands like "push boulder
north" or "drag sled into cave".

</div>

<span id="dobjFor(PutBehind)"></span>

`dobjFor(PutBehind)`

[thing.t](../file/thing.t.html)\[[8909](../source/thing.t.html#8909)\]

<div class="desc">

"PutBehind" action

</div>

<span id="dobjFor(PutIn)"></span>

`dobjFor(PutIn)`

[thing.t](../file/thing.t.html)\[[8823](../source/thing.t.html#8823)\]

<div class="desc">

"Put In" verb processing. Default objects cannot contain other objects,
but they can be put in arbitrary containers.

</div>

<span id="dobjFor(PutOn)"></span>

`dobjFor(PutOn)`

[thing.t](../file/thing.t.html)\[[8861](../source/thing.t.html#8861)\]

<div class="desc">

"Put On" processing. Default objects cannot have other objects put on
them, but they can be put on surfaces.

</div>

<span id="dobjFor(PutUnder)"></span>

`dobjFor(PutUnder)`

[thing.t](../file/thing.t.html)\[[8893](../source/thing.t.html#8893)\]

<div class="desc">

"PutUnder" action

</div>

<span id="dobjFor(Read)"></span>

`dobjFor(Read)`

[thing.t](../file/thing.t.html)\[[8475](../source/thing.t.html#8475)\]

<div class="desc">

"Read"

</div>

<span id="dobjFor(Remove)"></span>

`dobjFor(Remove)`

[thing.t](../file/thing.t.html)\[[8701](../source/thing.t.html#8701)\]

<div class="desc">

"Remove" processing. We'll treat "remove dobj" as meaning "take dobj
from \<something\>", where \<something\> is elided and must be
determined.

This should be overridden in certain cases. For clothing, "remove dobj"
should be the same as "doff dobj". For removable components, this should
imply removing the component from its container.

</div>

<span id="dobjFor(Screw)"></span>

`dobjFor(Screw)`

[thing.t](../file/thing.t.html)\[[10219](../source/thing.t.html#10219)\]

<div class="desc">

"Screw" action

</div>

<span id="dobjFor(ScrewWith)"></span>

`dobjFor(ScrewWith)`

[thing.t](../file/thing.t.html)\[[10229](../source/thing.t.html#10229)\]

<div class="desc">

"ScrewWith" action

</div>

<span id="dobjFor(Search)"></span>

`dobjFor(Search)`

[thing.t](../file/thing.t.html)\[[8522](../source/thing.t.html#8522)\]

<div class="desc">

"Search". By default, we make "search obj" do the same thing as "look in
obj".

</div>

<span id="dobjFor(Set)"></span>

`dobjFor(Set)`

[thing.t](../file/thing.t.html)\[[9647](../source/thing.t.html#9647)\]

<div class="desc">

"Set" action

</div>

<span id="dobjFor(SetTo)"></span>

`dobjFor(SetTo)`

[thing.t](../file/thing.t.html)\[[9657](../source/thing.t.html#9657)\]

<div class="desc">

"SetTo" action

</div>

<span id="dobjFor(ShowTo)"></span>

`dobjFor(ShowTo)`

[thing.t](../file/thing.t.html)\[[8998](../source/thing.t.html#8998)\]

<div class="desc">

"Show to" action

</div>

<span id="dobjFor(SitOn)"></span>

`dobjFor(SitOn)`

[thing.t](../file/thing.t.html)\[[10062](../source/thing.t.html#10062)\]

<div class="desc">

"SitOn" action

</div>

<span id="dobjFor(Smell)"></span>

`dobjFor(Smell)`

[thing.t](../file/thing.t.html)\[[8575](../source/thing.t.html#8575)\]

<div class="desc">

"Smell"

</div>

<span id="dobjFor(StandOn)"></span>

`dobjFor(StandOn)`

[thing.t](../file/thing.t.html)\[[10082](../source/thing.t.html#10082)\]

<div class="desc">

"StandOn" action

</div>

<span id="dobjFor(Strike)"></span>

`dobjFor(Strike)`

[en_us.t](../file/en_us.t.html)\[[1949](../source/en_us.t.html#1949)\]

<div class="desc">

For the most part, "strike" has the same meaning as "hit", so define
this as a synonym for "attack" most objects. There are a few English
idioms where "strike" means something different, as in "strike match" or
"strike tent."

</div>

<span id="dobjFor(Switch)"></span>

`dobjFor(Switch)`

[thing.t](../file/thing.t.html)\[[9719](../source/thing.t.html#9719)\]

<div class="desc">

"Switch" action

</div>

<span id="dobjFor(Take)"></span>

`dobjFor(Take)`

[thing.t](../file/thing.t.html)\[[8631](../source/thing.t.html#8631)\]

<div class="desc">

"Take" action

</div>

<span id="dobjFor(TakeFrom)"></span>

`dobjFor(TakeFrom)`

[thing.t](../file/thing.t.html)\[[8717](../source/thing.t.html#8717)\]

<div class="desc">

"Take from" processing

</div>

<span id="dobjFor(TalkTo)"></span>

`dobjFor(TalkTo)`

[thing.t](../file/thing.t.html)\[[8963](../source/thing.t.html#8963)\]

<div class="desc">

"Talk to"

</div>

<span id="dobjFor(Taste)"></span>

`dobjFor(Taste)`

[thing.t](../file/thing.t.html)\[[8593](../source/thing.t.html#8593)\]

<div class="desc">

"Taste"

</div>

<span id="dobjFor(TellAbout)"></span>

`dobjFor(TellAbout)`

[thing.t](../file/thing.t.html)\[[9069](../source/thing.t.html#9069)\]

<div class="desc">

"Tell about" action

</div>

<span id="dobjFor(TellVague)"></span>

`dobjFor(TellVague)`

[thing.t](../file/thing.t.html)\[[9083](../source/thing.t.html#9083)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Throw)"></span>

`dobjFor(Throw)`

[thing.t](../file/thing.t.html)\[[9169](../source/thing.t.html#9169)\]

<div class="desc">

"Throw" action. By default, we'll simply re-route this to a "throw at"
action. Objects that can meaningfully be thrown without any specific
target can override this.

Note that we don't apply an preconditions or verification, since we
don't really do anything with the action ourselves. If an object
overrides this, it should add any preconditions and verifications that
are appropriate.

</div>

<span id="dobjFor(ThrowAt)"></span>

`dobjFor(ThrowAt)`

[thing.t](../file/thing.t.html)\[[9206](../source/thing.t.html#9206)\]

<div class="desc">

"Throw at" action

</div>

<span id="dobjFor(ThrowDir)"></span>

`dobjFor(ThrowDir)`

[thing.t](../file/thing.t.html)\[[9182](../source/thing.t.html#9182)\]

<div class="desc">

"Throw \<direction\>". By default, we simply reject this and explain
that the command to use is THROW AT. With one exception: we treat THROW
\<down\> as equivalent to THROW AT FLOOR, and use the default library
message for that command instead.

</div>

<span id="dobjFor(ThrowTo)"></span>

`dobjFor(ThrowTo)`

[thing.t](../file/thing.t.html)\[[9456](../source/thing.t.html#9456)\]

<div class="desc">

"Throw to" action

</div>

<span id="dobjFor(Turn)"></span>

`dobjFor(Turn)`

[thing.t](../file/thing.t.html)\[[9612](../source/thing.t.html#9612)\]

<div class="desc">

"Turn" action

</div>

<span id="dobjFor(TurnOff)"></span>

`dobjFor(TurnOff)`

[thing.t](../file/thing.t.html)\[[9749](../source/thing.t.html#9749)\]

<div class="desc">

"TurnOff" action

</div>

<span id="dobjFor(TurnOn)"></span>

`dobjFor(TurnOn)`

[thing.t](../file/thing.t.html)\[[9739](../source/thing.t.html#9739)\]

<div class="desc">

"TurnOn" action

</div>

<span id="dobjFor(TurnTo)"></span>

`dobjFor(TurnTo)`

[thing.t](../file/thing.t.html)\[[9622](../source/thing.t.html#9622)\]

<div class="desc">

"Turn to" action

</div>

<span id="dobjFor(TurnWith)"></span>

`dobjFor(TurnWith)`

[thing.t](../file/thing.t.html)\[[9632](../source/thing.t.html#9632)\]

<div class="desc">

"TurnWith" action

</div>

<span id="dobjFor(TypeLiteralOn)"></span>

`dobjFor(TypeLiteralOn)`

[thing.t](../file/thing.t.html)\[[9699](../source/thing.t.html#9699)\]

<div class="desc">

"Type \<literal\> on" action

</div>

<span id="dobjFor(TypeOn)"></span>

`dobjFor(TypeOn)`

[thing.t](../file/thing.t.html)\[[9683](../source/thing.t.html#9683)\]

<div class="desc">

"Type on" action

</div>

<span id="dobjFor(Unfasten)"></span>

`dobjFor(Unfasten)`

[thing.t](../file/thing.t.html)\[[10144](../source/thing.t.html#10144)\]

<div class="desc">

"Unfasten" action

</div>

<span id="dobjFor(UnfastenFrom)"></span>

`dobjFor(UnfastenFrom)`

[thing.t](../file/thing.t.html)\[[10154](../source/thing.t.html#10154)\]

<div class="desc">

"Unfasten from" action

</div>

<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`

[thing.t](../file/thing.t.html)\[[9933](../source/thing.t.html#9933)\]

<div class="desc">

"Unlock" action

</div>

<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`

[thing.t](../file/thing.t.html)\[[9958](../source/thing.t.html#9958)\]

<div class="desc">

"UnlockWith" action

</div>

<span id="dobjFor(Unplug)"></span>

`dobjFor(Unplug)`

[thing.t](../file/thing.t.html)\[[10194](../source/thing.t.html#10194)\]

<div class="desc">

"Unplug" action

</div>

<span id="dobjFor(UnplugFrom)"></span>

`dobjFor(UnplugFrom)`

[thing.t](../file/thing.t.html)\[[10204](../source/thing.t.html#10204)\]

<div class="desc">

"UnplugFrom" action

</div>

<span id="dobjFor(Unscrew)"></span>

`dobjFor(Unscrew)`

[thing.t](../file/thing.t.html)\[[10244](../source/thing.t.html#10244)\]

<div class="desc">

"Unscrew" action

</div>

<span id="dobjFor(UnscrewWith)"></span>

`dobjFor(UnscrewWith)`

[thing.t](../file/thing.t.html)\[[10254](../source/thing.t.html#10254)\]

<div class="desc">

"UnscrewWith" action

</div>

<span id="dobjFor(Wear)"></span>

`dobjFor(Wear)`

[thing.t](../file/thing.t.html)\[[8925](../source/thing.t.html#8925)\]

<div class="desc">

"Wear" action

</div>

<span id="examineListContents"></span>

`examineListContents ( )`

[thing.t](../file/thing.t.html)\[[8180](../source/thing.t.html#8180)\]

<div class="desc">

List my contents as part of Examine processing. We'll recursively list
contents of contents; this will ensure that even if we have no listable
contents, we'll list any listable contents of our contents.

</div>

<span id="examineListContentsWith"></span>

`examineListContentsWith (lister)`

[thing.t](../file/thing.t.html)\[[8187](../source/thing.t.html#8187)\]

<div class="desc">

list my contents for an "examine", using the given lister

</div>

<span id="examineSpecialContents"></span>

`examineSpecialContents ( )`

[thing.t](../file/thing.t.html)\[[8409](../source/thing.t.html#8409)\]

<div class="desc">

Show the special descriptions of any contents. We'll run through the
visible information list for the location; for any visible item inside
me that is using its special description, we'll display the special
description as a separate paragraph.

</div>

<span id="examineStatus"></span>

`examineStatus ( )`

[thing.t](../file/thing.t.html)\[[8168](../source/thing.t.html#8168)\]

<div class="desc">

Show any status associated with the object as part of the full
description. This is shown after the basicExamine() message, and is only
displayed if we can see full details of the object according to the
viewing conditions.

By default, we simply show our contents. Even though this base class
isn't set up as a container from the player's perspective, we could
contain components which are themselves containers. So, to ensure that
we properly describe any contents of our contents, we need to list our
children.

</div>

<span id="failCheck"></span>

`failCheck (msg, [params])`

[thing.t](../file/thing.t.html)\[[8029](../source/thing.t.html#8029)\]

<div class="desc">

Generic "check" failure routine. This displays the given failure
message, then performs an 'exit' to cancel the current command. 'msg' is
the message to display - it can be a single-quoted string with the
message text, or a property pointer. If 'msg' is a property pointer, any
necessary message parameters can be supplied as additional 'params'
arguments.

</div>

<span id="feelDesc"></span>

`feelDesc ( )`

[thing.t](../file/thing.t.html)\[[2296](../source/thing.t.html#2296)\]

<div class="desc">

The "feel description," which is the description displayed when an actor
explicitly feels the object. As with taste, we don't distinguish
transparency or distance.

</div>

<span id="fillMedium"></span>

`fillMedium ( )`

[thing.t](../file/thing.t.html)\[[6654](../source/thing.t.html#6654)\]

<div class="desc">

Get my "fill medium." This is an object of class FillMedium that
permeates our interior, such as fog or smoke. This object affects the
transmission of senses from one of our children to another, or between
our interior and exterior.

Note that the FillMedium object is usually a regular object in scope, so
that the player can refer to the fill medium. For example, if a room is
filled with fog, the player might want to be able to refer to the fog in
a command.

By default, our medium is the same as our parent's medium, on the
assumption that fill media diffuse throughout the location's interior.
Note, though, that Container overrides this so that a closed Container
is isolated from its parent's fill medium - think of a closed bottle
within a room filled with smoke. However, a fill medium doesn't expand
from a child into its containers - it only diffuses into nested
containers, never out.

An object at the outermost containment level has no fill medium by
default, so we return nil if our location is nil.

Note that, unlike the "surface" material, the fill medium is assumed to
be isotropic - that is, it has the same sense-passing characteristics
regardless of the direction in which the energy is traversing the
medium. Since we don't have any information in our containment model
about the positions of our objects relative to one another, we have no
way to express anisotropy in the fill medium among our children anyway.

Note further that energy going in or out of this object must traverse
both the fill medium and the surface of the object itself. Since we have
no other information on the relative positions of our contents, we can
only assume that they're uniformly distributed through our interior, so
it is necessary to traverse the same amount of fill material to go from
one child to any other or from a child to our inner surface.

As a sense is transmitted, several consecutive traversals of a single
fill material (i.e., a single object reference) will be treated as a
single traversal of the material. Since we don't have a notion of
distance in our containment model, we can't assume that we cover a
certain amount of distance just because we traverse a certain number of
containment levels. So, if we have three nested containment levels all
inheriting a single fill material from their outermost parent,
traversing from the inner container to the outer container will count as
a single traversal of the material.

</div>

<span id="findOpaqueObstructor"></span>

`findOpaqueObstructor (sense, obj)`

[thing.t](../file/thing.t.html)\[[6738](../source/thing.t.html#6738)\]

<div class="desc">

Find an opaque obstructor. This can be called immediately after calling
senseObj() when senseObj() indicates that the object is opaquely
obscured. We will find the nearest (by containment) object where the
sense status is non-opaque, and we'll return that object.

senseObj() by itself does not determine the obstructor when the sense
path is opaque, because doing so requires extra work. The sense path
calculator that senseObj() uses cuts off its search whenever it reaches
an opaque point, because beyond that point nothing can be sensed.

This can only be called immediately after calling senseObj() because we
re-use the same cached sense path information that senseObj() uses.

</div>

<span id="findTouchObstructor"></span>

`findTouchObstructor (obj)`

[thing.t](../file/thing.t.html)\[[5958](../source/thing.t.html#5958)\]

<div class="desc">

Find the object that prevents us from touching the given object.

</div>

<span id="forEachConnectedContainer"></span>

`forEachConnectedContainer (func, [args])`

[thing.t](../file/thing.t.html)\[[5594](../source/thing.t.html#5594)\]

<div class="desc">

Call a function on each \*connected\* container. For most objects, this
is the same as forEachContainer, but objects that don't connect their
containers for sense purposes would do nothing here.

</div>

<span id="forEachContainer"></span>

`forEachContainer (func, [args])`

[thing.t](../file/thing.t.html)\[[5581](../source/thing.t.html#5581)\]

<div class="desc">

Call a function on each container. If we have no location, we won't
invoke the function at all. We'll invoke the function as follows:

(func)(location, args...)

</div>

<span id="fromPOV"></span>

`fromPOV (actor, pov, propToCall, [args])`

[thing.t](../file/thing.t.html)\[[4562](../source/thing.t.html#4562)\]

<div class="desc">

Call a method on this object from the given point of view. We'll push
the current point of view, call the method, then restore the enclosing
point of view.

</div>

<span id="getAllForTakeFrom"></span>

`getAllForTakeFrom (scopeList)`

[thing.t](../file/thing.t.html)\[[4855](../source/thing.t.html#4855)\]

<div class="desc">

Get a list of objects suitable for matching ALL in TAKE ALL FROM
\<self\>. By default, this simply returns the list of everything in
scope that's directly inside 'self'.

</div>

<span id="getAllPathsTo"></span>

`getAllPathsTo (obj)`

[thing.t](../file/thing.t.html)\[[6299](../source/thing.t.html#6299)\]

<div class="desc">

Build a vector containing all of the possible paths we can traverse to
get from me to the given object. The return value is a vector of paths;
each path is a list of containment operations needed to get from here to
there.

Each path item in the vector is a list arranged like so:

\[obj, op, obj, op, obj\]

Each 'obj' is an object, and each 'op' is an operation enum (PathIn,
PathOut, PathPeer) that specifies how to get from the preceding object
to the next object. The first object in the list is always the starting
object (i.e., self), and the last is always the target object ('obj').

</div>

<span id="getAnnouncementDistinguisher"></span>

`getAnnouncementDistinguisher (lst)`

[thing.t](../file/thing.t.html)\[[2362](../source/thing.t.html#2362)\]

<div class="desc">

Get the distinguisher to use for printing this object's name in an
action announcement (such as a multi-object, default object, or
vague-match announcement). We check the global option setting to see if
we should actually use distinguishers for this; if so, we call
getInScopeDistinguisher() to find the correct distinguisher, otherwise
we use the "null" distinguisher, which simply lists objects by their
base names.

'lst' is the list of other objects from which we're trying to
differentiate 'self'. The reason 'lst' is given is that it lets us
choose the simplest name for each object that usefully distinguishes it;
to do this, we need to know exactly what we're distinguishing it from.

</div>

<span id="getBagAffinities"></span>

`getBagAffinities (lst)`

[thing.t](../file/thing.t.html)\[[4209](../source/thing.t.html#4209)\]

<div class="desc">

Get "bag of holding" affinities for the given list of objects. For each
item in the list, we'll get the item's bulk, and get each bag's affinity
for containing the item. We'll note the bag with the highest affinity.
Once we have the list, we'll put it in descending order of affinity, and
return the result as a vector.

</div>

<span id="getBagsOfHolding"></span>

`getBagsOfHolding (vec)`

[thing.t](../file/thing.t.html)\[[4352](../source/thing.t.html#4352)\]

<div class="desc">

Find all of the bags of holding contained within this object and add
them to the given vector. By default, we'll simply recurse into our
children so they can add their bags of holding.

</div>

<span id="getBestDistinguisher"></span>

`getBestDistinguisher (lst)`

[thing.t](../file/thing.t.html)\[[2385](../source/thing.t.html#2385)\]

<div class="desc">

Get a distinguisher that differentiates me from all of the other objects
in the given list, if possible, or from as many of the other objects as
possible.

</div>

<span id="getBulk"></span>

`getBulk ( )`

[thing.t](../file/thing.t.html)\[[3969](../source/thing.t.html#3969)\]

<div class="desc">

Calculate my total bulk. Most objects have a fixed external shape (and
thus bulk) that doesn't vary as contents are added or removed, so our
default implementation simply returns our intrinsic bulk without
considering any contents.

Some objects do change shape as contents are added. Such objects can
override this routine to provide the appropriate behavior. (We don't try
to provide a parameterized total bulk calculator here because there are
too many possible ways a container's bulk could be affected by its
contents or by other factors.)

If an object's bulk depends on its contents, the object should override
notifyInsert() so that it calls checkBulkChange() - this will ensure
that an object won't suddenly become too large for its container (or
holding actor).

</div>

<span id="getBulkWithin"></span>

`getBulkWithin ( )`

[thing.t](../file/thing.t.html)\[[3743](../source/thing.t.html#3743)\]

<div class="desc">

Calculate the bulk contained within this object. By default, we'll
simply add up the bulks of all of our contents.

</div>

<span id="getCarryingActor"></span>

`getCarryingActor ( )`

[thing.t](../file/thing.t.html)\[[5337](../source/thing.t.html#5337)\]

<div class="desc">

Get the carrying actor. This is the nearest enclosing location that's an
actor.

</div>

<span id="getCommonContainer"></span>

`getCommonContainer (obj)`

[thing.t](../file/thing.t.html)\[[4630](../source/thing.t.html#4630)\]

<div class="desc">

Get the container (direct or indirect) we have in common with the
object, if any.

</div>

<span id="getCommonDirectContainer"></span>

`getCommonDirectContainer (obj)`

[thing.t](../file/thing.t.html)\[[4607](../source/thing.t.html#4607)\]

<div class="desc">

Get the direct container we have in common with the given object, if
any. Returns at most one common container. Returns nil if there is no
common location.

</div>

<span id="getConnectedContainers"></span>

`getConnectedContainers ( )`

[thing.t](../file/thing.t.html)\[[5604](../source/thing.t.html#5604)\]

<div class="desc">

Get a list of all of my connected containers. This simply returns the
list that forEachConnectedContainer() iterates over.

</div>

<span id="getConnectorTo"></span>

`getConnectorTo (actor, dest)`

[thing.t](../file/thing.t.html)\[[3511](../source/thing.t.html#3511)\]

<div class="desc">

Search our direction list for a connector that will lead the given actor
to the given destination.

</div>

<span id="getContentsForExamine"></span>

`getContentsForExamine (lister, infoTab)`

[thing.t](../file/thing.t.html)\[[4954](../source/thing.t.html#4954)\]

<div class="desc">

Get the listed contents in a direct examination of this object. By
default, this simply returns a list of all of our direct contents that
are included in the info table.

</div>

<span id="getDestName"></span>

`getDestName (actor, origin)`

[thing.t](../file/thing.t.html)\[[3760](../source/thing.t.html#3760)\]

<div class="desc">

get my "destination name," for travel purposes; by default, we simply
defer to our location, if we have one

</div>

<span id="getDropDestination"></span>

`getDropDestination (obj, path)`

[thing.t](../file/thing.t.html)\[[3813](../source/thing.t.html#3813)\]

<div class="desc">

Get the destination for an object dropped within me. Ordinary objects
can't contain actors, so an actor can't directly drop something within a
regular Thing, but the same effect could occur if an actor throws a
projectile, since the projectile might reach either the target or an
intermediate obstruction, then bounce off and land in whatever contains
the object hit.

By default, objects dropped within us won't stay within us, but will
land in our container's drop destination.

'obj' is the object being dropped. In some cases, the drop destination
might differ according to the object; for example, if the floor is a
metal grating, a large object might land on the grating when dropped,
but a small object such as a coin might drop through the grating to the
room below. Note that 'obj' can be nil, if the caller simply wants to
determine the generic destination where a \*typical\* object would land
if dropped - this routine must therefore not assume that 'obj' is
non-nil.

'path' is the sense path (as returned by selectPathTo and the like)
traversed by the operation that's seeking the drop destination. For
ordinary single-location objects, the path is irrelevant, but this
information is sometimes useful for multi-location objects to let them
know which "side" we approached them from. Note that the path can be
nil, so this routine must not depend upon a path being supplied; if the
path is nil, the routine should assume that the ordinary "touch" sense
path from the current actor to 'self' is to be used, because the actor
is effectively reaching out and placing an object on self. This means
that when calling this routine, you can supply a nil path any time the
actor is simply dropping an object.

</div>

<span id="getEncumberingBulk"></span>

`getEncumberingBulk (actor)`

[thing.t](../file/thing.t.html)\[[3988](../source/thing.t.html#3988)\]

<div class="desc">

Calculate the amount of bulk that this object contributes towards
encumbering an actor directly holding the item. By default, this simply
returns my total bulk.

Some types of objects will override this to cause the object to
contribute more or less bulk to an actor holding the object. For
example, an article of clothing being worn by an actor typically
contributes no bulk at all to the actor's encumbrance, because an actor
wearing an item typically doesn't also have to hold on to the item. Or,
a small animal might encumber an actor more than its normal bulk because
it's squirming around trying to get free.

</div>

<span id="getEncumberingWeight"></span>

`getEncumberingWeight (actor)`

[thing.t](../file/thing.t.html)\[[4008](../source/thing.t.html#4008)\]

<div class="desc">

Calculate the amount of weight that this object contributes towards
encumbering an actor directly holding the item. By default, this simply
returns my total weight.

Note that we don't recursively sum the encumbering weights of our
contents - we simply sum the actual weights. We do it this way because
items within a container aren't being directly held by the actor, so any
difference between the encumbering and actual weights should not apply,
even though the actor is indirectly holding the items. If a subclass
does want the sum of the encumbering weights, it should override this to
make that calculation.

</div>

<span id="getExtraScopeItems"></span>

`getExtraScopeItems (actor)`

[thing.t](../file/thing.t.html)\[[5715](../source/thing.t.html#5715)\]

<div class="desc">

Get my extra scope items. This is a list of any items that we want to
add to command scope (i.e., the set of all items to which an actor is
allowed to refer with noun phrases) when we are ourselves in the command
scope. Returns a list of the items to add (or just \[\] if there are no
items to add).

By default, we add nothing.

</div>

<span id="getHitFallDestination"></span>

`getHitFallDestination (thrownObj, path)`

[thing.t](../file/thing.t.html)\[[9370](../source/thing.t.html#9370)\]

<div class="desc">

Get the "hit-and-fall" destination for a thrown object. This is called
when we interrupt a thrown object's trajectory because we're in the way
of its trajectory.

For example, if the actor is inside a cage, and tries to throw a
projectile at an object outside the cage, and the cage blocks the
projectile's passage, then this routine is called on the cage to
determine where the projectile ends up. The projectile's ultimate
destination is the hit-and-fall destination for the cage: it's where the
project ends up when it hits me and then falls to the ground, its
trajectory cut short.

'thrownObj' is the projectile thrown, 'self' is the target object, and
'path' is the path the projectile took to reach us. The path is of the
form returned by getThrowPathTo(). Note that the path could extend
beyond 'self', because the original target might have been a different
object - we could simply have interrupted the projectile's course.

</div>

<span id="getIdentityObject"></span>

`getIdentityObject ( )`

[thing.t](../file/thing.t.html)\[[4687](../source/thing.t.html#4687)\]

<div class="desc">

Get our "identity" object. This is the object that we appear to be an
inseparable part of.

In most cases, an object is its own identity object. However, there are
times when the object that a player sees isn't the same as the object
that the parser resolves, because we're modeling a single physical
object with several programming objects. For example, a complex
container has one or more secret internal program objects representing
the different sub-containers; as far as the player is concerned, all of
the sub-containers are just aspects of the parent complex container, not
separate object, so the sub-containers all have the identity of the
parent complex container.

By default, this is simply 'self'. Objects that take their effective
identities from other objects must override this accordingly.

</div>

<span id="getInScopeDistinguisher"></span>

`getInScopeDistinguisher ( )`

[thing.t](../file/thing.t.html)\[[2374](../source/thing.t.html#2374)\]

<div class="desc">

Get a distinguisher that differentiates me from all of the other objects
in scope, if possible, or at least from some of the other objects in
scope.

</div>

<span id="getListedContents"></span>

`getListedContents (lister, infoTab)`

[thing.t](../file/thing.t.html)\[[4939](../source/thing.t.html#4939)\]

<div class="desc">

Get my listed contents for recursive object descriptions. This returns
the list of the direct contents that we'll mention when we're examining
our container's container, a further enclosing container, or the
enclosing room.

By default, we'll return the same list we'll display on direct
examination of this object.

</div>

<span id="getLocPushTraveler"></span>

`getLocPushTraveler (trav, obj)`

[thing.t](../file/thing.t.html)\[[3379](../source/thing.t.html#3379)\]

<div class="desc">

Get the "location push traveler" - this is the object that's going to
travel for a push-travel action performed by a traveler within this
location. This is called by a traveler within this location to find out
if the location wants to be involved in the travel, as a vehicle might
be. By default, we let our location handle it, if we have one.

</div>

<span id="getLocTraveler"></span>

`getLocTraveler (trav, conn)`

[thing.t](../file/thing.t.html)\[[3362](../source/thing.t.html#3362)\]

<div class="desc">

Get the location traveler - this is the object that's actually going to
change location when a traveler within this location performs a travel
command to travel via the given connector. By default, we'll indicate
what our containing room indicates. (The enclosing room might be a
vehicle or an ordinary room; in any case, it'll know what to do, so we
merely have to ask it.)

We defer to our enclosing room by default because this allows for things
like a seat in a car: the actor is sitting in the seat and starts
traveling in the car, so the seat calls the enclosing room, which is the
car, and the car returns itself, since it's the car that will be
traveling.

</div>

<span id="getMovePathTo"></span>

`getMovePathTo (newLoc)`

[thing.t](../file/thing.t.html)\[[5971](../source/thing.t.html#5971)\]

<div class="desc">

Get the path for moving this object from its present location to the
given new container.

</div>

<span id="getNoise"></span>

`getNoise ( )`

[thing.t](../file/thing.t.html)\[[4808](../source/thing.t.html#4808)\]

<div class="desc">

Get my associated noise object. By default, this looks for an item of
class Noise directly within me.

</div>

<span id="getNominalDropDestination"></span>

`getNominalDropDestination ( )`

[thing.t](../file/thing.t.html)\[[3916](../source/thing.t.html#3916)\]

<div class="desc">

Get the nominal destination for an object dropped into this object. This
is used to report where an object ends up when the object is moved into
me by some indirect route, such as throwing the object.

By default, most objects simply return themselves, so we'll report
something like "obj lands {in/on} self". Some objects might want to
report a different object as the destination; for example, an indoor
room might want to report objects as falling onto the floor.

</div>

<span id="getNominalOwner"></span>

`getNominalOwner ( )`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[5306](../source/thing.t.html#5306)\]

<div class="desc">

Get the "nominal owner" of this object. This is the owner that we report
for the object if asked to distinguish this object from another via the
OwnershipDistinguisher. Note that the nominal owner is not necessarily
the only owner, because an object can have multiple owners in some
cases; however, the nominal owner must always be an owner, in that
isOwnedBy(getNominalOwner()) should always return true.

By default, if we have an explicit owner, we'll return that. Otherwise,
if our immediate container can own us, we'll return our immediate
container. Otherwise, we'll return our immediate container's nominal
owner. Note that this last case means that a dollar bill inside Bob's
wallet will be Bob's dollar bill, even if Bob's wallet is currently
being carried by another actor.

</div>

<span id="getObjectNotifyList"></span>

`getObjectNotifyList ( )`

[thing.t](../file/thing.t.html)\[[7689](../source/thing.t.html#7689)\]

<div class="desc">

Get my notification list - this is a list of objects on which we must
call beforeAction and afterAction when this object is involved in a
command as the direct object, indirect object, or any addition object
(other than as the actor performing the command).

The general notification mechanism always includes in the notification
list all of the objects connected by containment to the actor; this
method allows for explicit registration of additional objects that must
be notified when commands are performed on this object even when the
other objects are nowhere nearby.

</div>

<span id="getOdor"></span>

`getOdor ( )`

[thing.t](../file/thing.t.html)\[[4822](../source/thing.t.html#4822)\]

<div class="desc">

Get my associated odor object. By default, this looks for an item of
class Odor directly within me.

</div>

<span id="getOutermostRoom"></span>

`getOutermostRoom ( )`

[thing.t](../file/thing.t.html)\[[3318](../source/thing.t.html#3318)\]

<div class="desc">

Get the outermost containing room. We return our container, if we have
one, or self if not.

</div>

<span id="getOutermostVisibleRoom"></span>

`getOutermostVisibleRoom (pov)`

[thing.t](../file/thing.t.html)\[[3325](../source/thing.t.html#3325)\]

<div class="desc">

get the outermost room that's visible from the given point of view

</div>

<span id="getRoomNotifyList"></span>

`getRoomNotifyList ( )`

[thing.t](../file/thing.t.html)\[[3674](../source/thing.t.html#3674)\]

<div class="desc">

Get the notification list actions performed by actors within this
object. Ordinary objects don't have room notification lists, but we
might be part of a nested set of objects that includes rooms, so simply
look to our container for the notification list.

</div>

<span id="getRoomPartLocation"></span>

`getRoomPartLocation (part)`

[thing.t](../file/thing.t.html)\[[3632](../source/thing.t.html#3632)\]

<div class="desc">

Get the apparent location of one of our room parts (the floor, the
ceiling, etc). By default, we'll simply ask our container about it,
since a nested room by default doesn't have any of the standard room
parts.

</div>

<span id="getStateWithInfo"></span>

`getStateWithInfo (info, pov)`

[thing.t](../file/thing.t.html)\[[2128](../source/thing.t.html#2128)\]

<div class="desc">

Get the "listing state" of the object, given the visual sense
information for the object from the point of view for which we're
generating the listing. This returns a ThingState object describing the
object's state for the purposes of listings. This should return nil if
the object doesn't have varying states for listings.

By default, we return a list state if the visual sense path is
transparent or attenuated, or we have large visual scale. In other
cases, we assume that the details of the object are not visible under
the current sense conditions; since the list state is normally a detail
of the object, we don't return a list state when the details of the
object are not visible.

</div>

<span id="getStatuslineExitsHeight"></span>

`getStatuslineExitsHeight ( )`

[thing.t](../file/thing.t.html)\[[3449](../source/thing.t.html#3449)\]

<div class="desc">

get the status line exit lister height - defer to our location

</div>

<span id="getThrowPathTo"></span>

`getThrowPathTo (newLoc)`

[thing.t](../file/thing.t.html)\[[5985](../source/thing.t.html#5985)\]

<div class="desc">

Get the path for throwing this object from its present location to the
given target object.

</div>

<span id="getTouchPathTo"></span>

`getTouchPathTo (obj)`

[thing.t](../file/thing.t.html)\[[5868](../source/thing.t.html#5868)\]

<div class="desc">

Get the path for this object reaching out and touching the given object.
This can be used to determine whether or not an actor can touch the
given object.

</div>

<span id="getTravelConnector"></span>

`getTravelConnector (dir, actor)`

[thing.t](../file/thing.t.html)\[[3471](../source/thing.t.html#3471)\]

<div class="desc">

Get the travel connector from this location in the given direction.

Map all of the directional connections to their values in the enclosing
location, except for any explicitly defined in this object. (In most
cases, ordinary objects won't define any directional connectors
directly, since those connections usually apply only to top-level
rooms.)

If 'actor' is non-nil, we'll limit our search to enclosing locations
that the actor can currently see. If 'actor' is nil, we'll consider any
connector in any enclosing location, whether the actor can see the
enclosing location or not. It's useful to pass in a nil actor in cases
where we're interested in the structure of the map and not actual
travel, such as when constructing an automatic map or computing possible
courses between locations.

</div>

<span id="getVisualSenseInfo"></span>

`getVisualSenseInfo ( )`

[thing.t](../file/thing.t.html)\[[6505](../source/thing.t.html#6505)\]

<div class="desc">

Get the visual sense information for this object from the current global
point of view. If we have explicit sense information set with
setSenseInfo, we'll return that; otherwise, we'll calculate the current
sense information for the given point of view. Returns a SenseInfo
object giving the information.

</div>

<span id="getWeight"></span>

`getWeight ( )`

[thing.t](../file/thing.t.html)\[[3934](../source/thing.t.html#3934)\]

<div class="desc">

Calculate my total weight. Weight is generally inclusive of the weights
of contents or components, because anything inside an object normally
contributes to the object's total weight.

</div>

<span id="hasCollectiveGroup"></span>

`hasCollectiveGroup (g)`

[thing.t](../file/thing.t.html)\[[2519](../source/thing.t.html#2519)\]

<div class="desc">

Are we associated with the given collective group? We do if it's in our
collectiveGroups list.

</div>

<span id="hideFromAll"></span>

`hideFromAll (action)`

[thing.t](../file/thing.t.html)\[[1648](../source/thing.t.html#1648)\]

<div class="desc">

Hide from 'all' for a given action. If this returns true, this object
will never be included in 'all' lists for the given action class. This
should generally be set only for objects that serve some sort of
internal purpose and don't represent physical objects in the model
world. By default, objects are not hidden from 'all' lists.

Note that returning nil doesn't put the object into an 'all' list.
Rather, it simply \*leaves\* it in any 'all' list it should happen to be
in. Each action controls its own selection criteria for 'all', and
different verbs use different criteria. No matter how an action chooses
its 'all' list, though, an item will always be excluded if hideFromAll()
returns true for the item.

</div>

<span id="hideFromDefault"></span>

`hideFromDefault (action)`

[thing.t](../file/thing.t.html)\[[1655](../source/thing.t.html#1655)\]

<div class="desc">

Hide from defaulting for a given action. By default, we're hidden from
being used as a default object for a given action if we're hidden from
the action for 'all'.

</div>

<span id="initializeEquivalent"></span>

`initializeEquivalent ( )`

[thing.t](../file/thing.t.html)\[[4739](../source/thing.t.html#4739)\]

<div class="desc">

Initialize this class object for listing its instances that are marked
with isEquivalent. We'll initialize a list group that lists our
equivalent instances as a group.

Objects are grouped by their equivalence key - each set of objects with
the same key is part of the same group. The key is determined by the
language module, but is usually just the basic disambiguation name (the
'disambigName' property in English, for example).

</div>

<span id="initializeLocation"></span>

`initializeLocation ( )`

[thing.t](../file/thing.t.html)\[[4722](../source/thing.t.html#4722)\]

<div class="desc">

Initialize my location's contents list - add myself to my container
during initialization

</div>

<span id="initializeThing"></span>

`initializeThing ( )`

[thing.t](../file/thing.t.html)\[[4700](../source/thing.t.html#4700)\]

<div class="desc">

General initialization - this will be called during preinit so that we
can set up the initial values of any derived internal properties.

</div>

<span id="inRoomName"></span>

`inRoomName (pov)`

[en_us.t](../file/en_us.t.html)\[[1287](../source/en_us.t.html#1287)\]

<div class="desc">

A prepositional phrase that can be used to describe things that are in
this room as seen from a remote point of view. This should be something
along the lines of "in the airlock", "at the end of the alley", or "on
the lawn".

'pov' is the point of view from which we're seeing this room; this might
be

We use this phrase in cases where we need to describe things in this
room when viewed from a point of view outside of the room (i.e., in a
different top-level room). By default, we'll use our actorInName.

</div>

<span id="iobjFor(AttachTo)"></span>

`iobjFor(AttachTo)`

[thing.t](../file/thing.t.html)\[[9819](../source/thing.t.html#9819)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(AttackWith)"></span>

`iobjFor(AttackWith)`

[thing.t](../file/thing.t.html)\[[9152](../source/thing.t.html#9152)\]

<div class="desc">

it makes as much sense to attack any object as any other, but by default
attacking an object has no effect

</div>

<span id="iobjFor(BurnWith)"></span>

`iobjFor(BurnWith)`

[thing.t](../file/thing.t.html)\[[9794](../source/thing.t.html#9794)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(CleanWith)"></span>

`iobjFor(CleanWith)`

[thing.t](../file/thing.t.html)\[[10052](../source/thing.t.html#10052)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(CutWith)"></span>

`iobjFor(CutWith)`

[thing.t](../file/thing.t.html)\[[9871](../source/thing.t.html#9871)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(DetachFrom)"></span>

`iobjFor(DetachFrom)`

[thing.t](../file/thing.t.html)\[[9834](../source/thing.t.html#9834)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(DigWith)"></span>

`iobjFor(DigWith)`

[thing.t](../file/thing.t.html)\[[9524](../source/thing.t.html#9524)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(FastenTo)"></span>

`iobjFor(FastenTo)`

[thing.t](../file/thing.t.html)\[[10134](../source/thing.t.html#10134)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(GiveTo)"></span>

`iobjFor(GiveTo)`

[thing.t](../file/thing.t.html)\[[8988](../source/thing.t.html#8988)\]

<div class="desc">

inherit any further processing

</div>

<span id="iobjFor(LockWith)"></span>

`iobjFor(LockWith)`

[thing.t](../file/thing.t.html)\[[9948](../source/thing.t.html#9948)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(MoveWith)"></span>

`iobjFor(MoveWith)`

[thing.t](../file/thing.t.html)\[[9591](../source/thing.t.html#9591)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PlugInto)"></span>

`iobjFor(PlugInto)`

[thing.t](../file/thing.t.html)\[[10184](../source/thing.t.html#10184)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PourInto)"></span>

`iobjFor(PourInto)`

[thing.t](../file/thing.t.html)\[[10012](../source/thing.t.html#10012)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PourOnto)"></span>

`iobjFor(PourOnto)`

[thing.t](../file/thing.t.html)\[[10027](../source/thing.t.html#10027)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PutBehind)"></span>

`iobjFor(PutBehind)`

[thing.t](../file/thing.t.html)\[[8915](../source/thing.t.html#8915)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PutIn)"></span>

`iobjFor(PutIn)`

[thing.t](../file/thing.t.html)\[[8846](../source/thing.t.html#8846)\]

<div class="desc">

verify the transfer

</div>

<span id="iobjFor(PutOn)"></span>

`iobjFor(PutOn)`

[thing.t](../file/thing.t.html)\[[8879](../source/thing.t.html#8879)\]

<div class="desc">

verify the transfer

</div>

<span id="iobjFor(PutUnder)"></span>

`iobjFor(PutUnder)`

[thing.t](../file/thing.t.html)\[[8899](../source/thing.t.html#8899)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(ScrewWith)"></span>

`iobjFor(ScrewWith)`

[thing.t](../file/thing.t.html)\[[10234](../source/thing.t.html#10234)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(ShowTo)"></span>

`iobjFor(ShowTo)`

[thing.t](../file/thing.t.html)\[[9051](../source/thing.t.html#9051)\]

<div class="desc">

The actor performing the showing must also be visible to the indirect
object, otherwise the actor wouldn't be able to attract the indirect
object's attention to do the showing.

</div>

<span id="iobjFor(TakeFrom)"></span>

`iobjFor(TakeFrom)`

[thing.t](../file/thing.t.html)\[[8743](../source/thing.t.html#8743)\]

<div class="desc">

we've passed our checks, so process it as a regular "take"

</div>

<span id="iobjFor(ThrowAt)"></span>

`iobjFor(ThrowAt)`

[thing.t](../file/thing.t.html)\[[9231](../source/thing.t.html#9231)\]

<div class="desc">

process a 'throw' operation, finishing with hitting the target if we get
that far

</div>

<span id="iobjFor(ThrowTo)"></span>

`iobjFor(ThrowTo)`

[thing.t](../file/thing.t.html)\[[9477](../source/thing.t.html#9477)\]

<div class="desc">

process a 'throw' operation, finishing with the target trying to catch
the object if we get that far

</div>

<span id="iobjFor(TurnWith)"></span>

`iobjFor(TurnWith)`

[thing.t](../file/thing.t.html)\[[9637](../source/thing.t.html#9637)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(UnfastenFrom)"></span>

`iobjFor(UnfastenFrom)`

[thing.t](../file/thing.t.html)\[[10159](../source/thing.t.html#10159)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(UnlockWith)"></span>

`iobjFor(UnlockWith)`

[thing.t](../file/thing.t.html)\[[9963](../source/thing.t.html#9963)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(UnplugFrom)"></span>

`iobjFor(UnplugFrom)`

[thing.t](../file/thing.t.html)\[[10209](../source/thing.t.html#10209)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(UnscrewWith)"></span>

`iobjFor(UnscrewWith)`

[thing.t](../file/thing.t.html)\[[10259](../source/thing.t.html#10259)\]

<div class="desc">

*no description available*

</div>

<span id="isActorTravelReady"></span>

`isActorTravelReady (conn)`

[thing.t](../file/thing.t.html)\[[3418](../source/thing.t.html#3418)\]

<div class="desc">

Determine if the current gActor, who is directly in this location, is
"travel ready." This means that the actor is ready, as far as this
location is concerned, to traverse the given connector. By default,
we'll defer to our location.

Note that if you override this to return nil, you should also provide a
custom 'notTravelReadyMsg' property that explains the objection.

</div>

<span id="isComponentOf"></span>

`isComponentOf (obj)`

[thing.t](../file/thing.t.html)\[[4693](../source/thing.t.html#4693)\]

<div class="desc">

Am I a component of the given object? The base Thing is not a component
of anything, so we'll simply return nil.

</div>

<span id="isDirectlyIn"></span>

`isDirectlyIn (obj)`

[thing.t](../file/thing.t.html)\[[5059](../source/thing.t.html#5059)\]

<div class="desc">

Determine if I'm directly inside another Thing. Returns true if this
object is contained directly within obj. Returns nil if this object
isn't directly within obj, even if it is indirectly in obj (i.e., its
container is directly or indirectly in obj).

</div>

<span id="isHeldBy"></span>

`isHeldBy (actor)`

[thing.t](../file/thing.t.html)\[[5129](../source/thing.t.html#5129)\]

<div class="desc">

Determine if I'm "held" by an actor, for the purposes of being
manipulated in an action. In most cases, an object is considered held by
an actor if it's directly within the actor's inventory, because the
actor's direct inventory represents the contents of the actors hands (or
equivalent).

Some classes might override this to change the definition of "held" to
include things not directly in the actor's inventory or exclude things
directly in the inventory. For example, an item being worn is generally
not considered held even though it might be in the direct inventory, and
a key on a keyring is considered held if the keyring is being held.

</div>

<span id="isIn"></span>

`isIn (obj)`

[thing.t](../file/thing.t.html)\[[5000](../source/thing.t.html#5000)\]

<div class="desc">

Determine if I'm is inside another Thing. Returns true if this object is
contained within 'obj', directly or indirectly (that is, this returns
true if my immediate container is 'obj', OR my immediate container is in
'obj', recursively defined).

isIn(nil) returns true if this object is "outside" the game world, which
means that the object is not reachable from anywhere in the game map and
is thus not part of the simulation. This is the case if our outermost
container is NOT a top-level object, as indicated by its isTopLevel
property. If we're inside an object marked as a top-level object, or
we're inside an object that's inside a top-level object (and so on),
then we're part of the game world, so isIn(nil) will return nil. If our
outermost container is has a nil isTopLevel property, isIn(nil) will
return true.

Note that our notion of "in" is not limited to enclosing containment,
because the same containment hierarchy is used to represent all types of
containment relationships, including things being "on" other things and
part of other things.

</div>

<span id="isInFixedIn"></span>

`isInFixedIn (loc)`

[thing.t](../file/thing.t.html)\[[5099](../source/thing.t.html#5099)\]

<div class="desc">

Determine if this object is contained within an item fixed in place
within the given location. We'll check our container to see if its
contents are within an object fixed in place in the given location.

This is a rather specific check that might seem a bit odd, but for some
purposes it's useful to treat objects within fixed containers in a
location as though they were in the location itself, because fixtures of
a location are to some extent parts of the location.

</div>

<span id="isListed"></span>

`isListed ( )`

[thing.t](../file/thing.t.html)\[[1681](../source/thing.t.html#1681)\]

<div class="desc">

Determine if I'm to be listed at all in my room's description, and in
descriptions of objects containing my container.

Most objects should be listed normally, but some types of objects should
be suppressed from the normal room listing. For example, fixed-in-place
scenery objects are generally described in the custom message for the
containing room, so these are normally omitted from the listing of the
room's contents.

By default, we'll return the same thing as isListedInContents - that is,
if this object is to be listed when its \*direct\* container is
examined, it'll also be listed by default when any further enclosing
container (including the enclosing room) is described. Individual
objects can override this to use different rules.

Why would we want to be able to list an object when examining in its
direct container, but not when examining an enclosing container, or the
enclosing room? The most common reason is to control the level of
detail, to avoid overloading the broad description of the room and the
main things in it with every detail of every deeply-nested container.

</div>

<span id="isListedInContents"></span>

`isListedInContents ( )`

[thing.t](../file/thing.t.html)\[[1693](../source/thing.t.html#1693)\]

<div class="desc">

Determine if I'm listed in explicit "examine" and "look in" descriptions
of my direct container.

By default, we return true as long as we're not using our special
description in this particular context. Examining or looking in a
container will normally show special message for any contents of the
container, so we don't want to list the items with special descriptions
in the ordinary list as well.

</div>

<span id="isListedInInventory"></span>

`isListedInInventory ( )`

[thing.t](../file/thing.t.html)\[[1699](../source/thing.t.html#1699)\]

<div class="desc">

Determine if I'm listed in inventory listings. By default, we include
every item in an inventory list.

</div>

<span id="isListedInRoomPart"></span>

`isListedInRoomPart (part)`

[thing.t](../file/thing.t.html)\[[1713](../source/thing.t.html#1713)\]

<div class="desc">

Determine if I'm listed as being located in the given room part. We'll
first check to make sure the object is nominally contained in the room
part; if not, it's not listed in the room part. We'll then ask the room
part itself to make the final determination.

</div>

<span id="isLookAroundCeiling"></span>

`isLookAroundCeiling (actor, pov)`

[thing.t](../file/thing.t.html)\[[2738](../source/thing.t.html#2738)\]

<div class="desc">

Are we the "look around ceiling"? If so, it means that a LOOK AROUND for
an actor within this location (or from a point of view within this
location) will use our own interior description, via lookAroundWithin().
If we're not the ceiling, then we defer to our location, letting it
describe its interior.

By default, we're the ceiling if we're a top-level room (that is, we
have no enclosing location), OR it's not possible to see out to our
location. In either of these cases, we can't see anything outside of
this room, so we have to generate our own interior description. However,
if we do have a location that we can see, then we'll assume that this
object just represents a facet of its enclosing location, so the
enclosing location provides the room interior description.

In some cases, a room might want to provide its own LOOK AROUND interior
description directly even if its location is visible. For example, if
the player's inside a wooden booth with a small window that can see out
to the enclosing location, LOOK AROUND should probably describe the
interior of the booth rather than the enclosing location: even though
the exterior is technically visible, the booth clearly dominates the
view, from the player's perspective. In this case, we'd want to override
this routine to indicate that we're the LOOK AROUND ceiling, despite our
location's visibility.

</div>

<span id="isNominallyIn"></span>

`isNominallyIn (obj)`

[thing.t](../file/thing.t.html)\[[5070](../source/thing.t.html#5070)\]

<div class="desc">

Determine if I'm "nominally" inside the given Thing. Returns true if the
object is actually within the given object, OR the object is a room part
and I'm nominally in the room part.

</div>

<span id="isNominallyInRoomPart"></span>

`isNominallyInRoomPart (part)`

[thing.t](../file/thing.t.html)\[[1744](../source/thing.t.html#1744)\]

<div class="desc">

Determine if we're nominally in the given room part (floor, ceiling,
wall, etc). This returns true if we \*appear\* to be located directly
in/on the given room part object.

In most cases, a portable object might start out with a special initial
room part location, but once moved and then dropped somewhere, ends up
nominally in the nominal drop destination of the location where it was
dropped. For example, a poster might start out being nominally attached
to a wall, or a light bulb might be nominally hanging from the ceiling;
if these objects are taken and then dropped somewhere, they'll simply
end up on the floor.

Our default behavior models this. If we've never been moved, we'll
indicate that we're in our initial room part location, given by
initNominalRoomPartLocation. Once we've been moved (or if our
initNominalRoomPartLocation is nil), we'll figure out what the nominal
drop destination is for our current container, and then see if we appear
to be in that nominal drop destination.

</div>

<span id="isOccludedBy"></span>

`isOccludedBy (occluder, sense, pov)`

[thing.t](../file/thing.t.html)\[[6693](../source/thing.t.html#6693)\]

<div class="desc">

Am I occluded by the given Occluder when viewed in the given sense from
the given point of view? The default Occluder implementation calls this
on each object involved in the sense path to determine if it should
occlude the object. Returns true if we're occluded by the given
Occluder, nil if not. By default, we simply return nil to indicate that
we're not occluded.

</div>

<span id="isOrIsIn"></span>

`isOrIsIn (obj)`

[thing.t](../file/thing.t.html)\[[5106](../source/thing.t.html#5106)\]

<div class="desc">

Am I either inside 'obj', or equal to 'obj'?

</div>

<span id="isOwnedBy"></span>

`isOwnedBy (obj)`<span class="rem">OVERRIDDEN</span>

[thing.t](../file/thing.t.html)\[[5197](../source/thing.t.html#5197)\]

<div class="desc">

Determine if I'm "owned" by another object. By default, if we have an
explicit owner, then we are owned by 'obj' if and only if 'obj' is our
explicit owner; otherwise, if 'obj' is our immediate location, and our
immediate location can own us (as reported by obj.canOwn(self)), then
'obj' owns us; otherwise, 'obj' owns us if our immediate location CANNOT
own us AND our immediate location is owned by 'obj'. This last case is
tricky: it means that if we're inside something other than 'obj' that
can own us, such as another actor, then 'obj' doesn't own us because our
immediate location does; it also means that if we're inside an object
that has an explicit owner rather than an owner based on location, we
have the same explicit owner, so a dollar bill inside Bob's wallet which
is in turn being carried by Charlie is owned by Bob, not Charlie.

This is used to determine ownership for the purpose of possessives in
commands. Ownership is not always exclusive: it is possible for a given
object to have multiple owners in some cases. For example, if Bob and
Bill are both sitting on a couch, the couch could be referred to as
"bob's couch" or "bill's couch", so the couch is owned by both Bob and
Bill. It is also possible for an object to be unowned.

In most cases, ownership is a function of location (possession is
nine-tenths of the law, as they say), but not always; in some cases, an
object has a particular owner regardless of its location, such as "bob's
wallet". This default implementation allows for ownership by location,
as well as explicit ownership, with explicit ownership (as indicated by
the self.owner property) taking precedence.

</div>

<span id="isShipboard"></span>

`isShipboard ( )`

[thing.t](../file/thing.t.html)\[[3716](../source/thing.t.html#3716)\]

<div class="desc">

Are we aboard a ship? By default, we'll return our location's setting
for this property; if we have no location, we'll return nil. In general,
this should be overridden in shipboard rooms to return true.

The purpose of this property is to indicate to the travel system that
shipboard directions (fore, aft, port, starboard) make sense here. When
this returns true, and an actor attempts travel in a shipboard direction
that doesn't allow travel here, we'll use the standard noTravel message.
When this returns nil, attempting to move in a shipboard direction will
show a different response that indicates that such directions are not
meaningful when not aboard a ship of some kind.

Note that we look to our location unconditionally - we don't bother to
check to see if we're open, transparent, or anything like that, so we'll
check with our location even if the actor can't see the location. The
idea is that, no matter how nested within opaque containers we are, we
should still know that we're aboard a ship. This might not always be
appropriate; if the actor is magically transported into an opaque
container that happens to be aboard a ship somewhere, the actor probably
shouldn't think of the location as shipboard until escaping the
container, unless they'd know because of the rocking of the ship or some
other sensory factor that would come through the opaque container. When
the shipboard nature of an interior location should not be known to the
actor, this should simply be overridden to return nil.

</div>

<span id="isVocabEquivalent"></span>

`isVocabEquivalent (obj)`

[thing.t](../file/thing.t.html)\[[2473](../source/thing.t.html#2473)\]

<div class="desc">

Determine if I'm equivalent, for the purposes of command vocabulary, to
given object.

We'll run through our list of distinguishers and check with each one to
see if it can tell us apart from the other object. If we can find at
least one distinguisher that can tell us apart, we're not equivalent. If
we have no distinguisher that can tell us apart from the other object,
we're equivalent.

</div>

<span id="itIs"></span>

`itIs ( )`

[en_us.t](../file/en_us.t.html)\[[1026](../source/en_us.t.html#1026)\]

<div class="desc">

get a string with the appropriate pronoun for the object plus the
correct conjugation of 'to be'

</div>

<span id="itNom"></span>

`itNom ( )`

[en_us.t](../file/en_us.t.html)\[[1002](../source/en_us.t.html#1002)\]

<div class="desc">

get a string with the appropriate pronoun for the object for the
nominative case, objective case, possessive adjective, possessive noun

</div>

<span id="itObj"></span>

`itObj ( )`

[en_us.t](../file/en_us.t.html)\[[1003](../source/en_us.t.html#1003)\]

<div class="desc">

*no description available*

</div>

<span id="itPossAdj"></span>

`itPossAdj ( )`

[en_us.t](../file/en_us.t.html)\[[1004](../source/en_us.t.html#1004)\]

<div class="desc">

*no description available*

</div>

<span id="itPossNoun"></span>

`itPossNoun ( )`

[en_us.t](../file/en_us.t.html)\[[1005](../source/en_us.t.html#1005)\]

<div class="desc">

*no description available*

</div>

<span id="itVerb"></span>

`itVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[1040](../source/en_us.t.html#1040)\]

<div class="desc">

get a string with the appropriate pronoun for the object plus the
correct conjugation of the given regular verb for the appropriate person

</div>

<span id="listCardinality"></span>

`listCardinality (lister)`

[en_us.t](../file/en_us.t.html)\[[784](../source/en_us.t.html#784)\]

<div class="desc">

The grammatical cardinality of this item when it appears in a list. This
is used to ensure verb agreement when mentioning the item in a list of
items. ("Cardinality" is a fancy word for "how many items does this look
like").

English only distinguishes two degrees of cardinality in its grammar:
one, or many. That is, when constructing a sentence, the only thing the
grammar cares about is whether an object is singular or plural: IT IS on
the table, THEY ARE on the table. Since English only distinguishes these
two degrees, two is the same as a hundred is the same as a million for
grammatical purposes, so we'll consider our cardinality to be 2 if we're
plural, 1 otherwise.

Some languages don't express cardinality at all in their grammar, and
others distinguish cardinality in greater detail than just
singular-vs-plural, which is why this method has to be in the
language-specific part of the library.

</div>

<span id="localDirectionLinkForConnector"></span>

`localDirectionLinkForConnector (conn)`

[thing.t](../file/thing.t.html)\[[3559](../source/thing.t.html#3559)\]

<div class="desc">

Find the "local" direction link from this object to the given travel
connector. We'll only consider our own local direction links; we won't
consider enclosing objects.

</div>

<span id="lookAround"></span>

`lookAround (actor, verbose)`

[thing.t](../file/thing.t.html)\[[2659](../source/thing.t.html#2659)\]

<div class="desc">

Look around from the point of view of this object and on behalf of the
given actor. This can be used to generate a description as seen from
this object by the given actor, and is suitable for cases where the
actor can use this object as a sensing device. We simply pass this
through to lookAroundPov(), passing 'self' as the point-of-view object.

'verbose' is a combination of LookXxx flags (defined in adv3.h)
indicating what style of description we want. This can also be 'true',
in which case we'll show the standard verbose listing (LookRoomName \|
LookRoomDesc \| LookListSpecials \| LookListPortables); or 'nil', in
which case we'll use the standard terse listing (LookRoomName \|
LookListSpecials \| LookListPortables).

</div>

<span id="lookAroundPov"></span>

`lookAroundPov (actor, pov, verbose)`

[thing.t](../file/thing.t.html)\[[2692](../source/thing.t.html#2692)\]

<div class="desc">

Look around from within this object, looking from the given point of
view and on behalf of the given actor.

'actor' is the actor doing the looking, and 'pov' is the point of view
of the description. These are usually the same, but need not be. For
example, an actor could be looking at a room through a hole in the wall,
in which case the POV would be the object representing the "side" of the
hole in the room being described. Or, the actor could be observing a
remote room via a closed-circuit television system, in which case the
POV would be the camera in the remote room. (The POV is the physical
object receiving the photons in the location being described, so it's
the camera, not the TV monitor that the actor's looking at.)

'verbose' has the same meaning as it does in lookAround().

This routine checks to see if 'self' is the "look-around ceiling," which
is for most purposes the outermost visible container of this object; see
isLookAroundCeiling() for more. If this object is the look-around
ceiling, then we'll call lookAroundWithin() to generate the description
of the interior of 'self'; otherwise, we'll recursively defer to our
immediate container so that it can make the same test. In most cases,
the outermost visible container that actually generates the description
will be a Room or a NestedRoom.

</div>

<span id="lookAroundWithin"></span>

`lookAroundWithin (actor, pov, verbose)`

[thing.t](../file/thing.t.html)\[[2781](../source/thing.t.html#2781)\]

<div class="desc">

Provide a "room description" of the interior of this object. This
routine is primarily intended as a subroutine of lookAround() and
lookAroundPov() - most game code shouldn't need to call this routine
directly. Note that if you \*do\* call this routine directly, you
\*must\* set the global point-of-view variables, which you can do most
easily by calling this routine indirectly through the fromPOV() method.

The library calls this method when an actor performs a "look around"
command, and the actor is within this object, and the actor can't see
anything outside of this object; this can happen simply because we're a
top-level room, but it can also happen when we're a closed opaque
container or there's not enough light to see the enclosing location.

The parameters have the same meaning as they do in lookAroundPov().

Note that this method must be overridden if a room overrides the
standard mechanism for representing its contents list (i.e., it doesn't
store its complete set of direct contents in its 'contents' list
property).

In most cases, this routine will only be called in Room and NestedRoom
objects, because actors can normally only enter those types of objects.
However, it is possible to try to describe the interior of other types
of objects if (1) the game allows actors to enter other types of
objects, or (2) the game provides a non-actor point-of-view object, such
as a video camera, that can be placed in ordinary containers and which
transmit what they see for remote viewing.

</div>

<span id="lookAroundWithinContents"></span>

`lookAroundWithinContents (actor, illum, infoTab)`

[thing.t](../file/thing.t.html)\[[3079](../source/thing.t.html#3079)\]

<div class="desc">

Show my room contents for a "look around" description within this
object.

</div>

<span id="lookAroundWithinDesc"></span>

`lookAroundWithinDesc (actor, illum)`

[thing.t](../file/thing.t.html)\[[3032](../source/thing.t.html#3032)\]

<div class="desc">

Show our "look around" long description. This is used to display the
location's full description when we're providing the room description -
that is, when the actor doing the looking is inside me. This displays
only the room-specific portion of the room's description; it does not
display the status line or anything about the room's dynamic contents.

</div>

<span id="lookAroundWithinName"></span>

`lookAroundWithinName (actor, illum)`

[thing.t](../file/thing.t.html)\[[3003](../source/thing.t.html#3003)\]

<div class="desc">

Show my name for a "look around" command. This is used to display the
location name when we're providing the room description. 'illum' is the
ambient visual sense level at the point of view.

By default, we show our interior room name or interior dark room name,
as appropriate to the ambient light level at the point of view.

</div>

<span id="lookAroundWithinSense"></span>

`lookAroundWithinSense (actor, pov, sense, lister)`

[thing.t](../file/thing.t.html)\[[3233](../source/thing.t.html#3233)\]

<div class="desc">

Add to the room description a list of things we notice through a
specific sense. This is used to add things we can hear and smell to a
room description.

</div>

<span id="lookAroundWithinShowExits"></span>

`lookAroundWithinShowExits (actor, illum)`

[thing.t](../file/thing.t.html)\[[3267](../source/thing.t.html#3267)\]

<div class="desc">

Show the exits from this room as part of a description of the room, if
applicable. By default, if we have an exit lister object, we'll invoke
it to show the exits.

</div>

<span id="lookInDesc"></span>

`lookInDesc ( )`

[thing.t](../file/thing.t.html)\[[2187](../source/thing.t.html#2187)\]

<div class="desc">

Our LOOK IN description. This is shown when we explicitly LOOK IN the
object. By default, we just report that there's nothing unusual inside.

</div>

<span id="mainExamine"></span>

`mainExamine ( )`

[thing.t](../file/thing.t.html)\[[8062](../source/thing.t.html#8062)\]

<div class="desc">

Main examination processing. This is called with the current global POV
set to the actor performing the 'examine' command.

</div>

<span id="mainMoveInto"></span>

`mainMoveInto (newContainer)`

[thing.t](../file/thing.t.html)\[[5479](../source/thing.t.html#5479)\]

<div class="desc">

Main moveInto - this is the mid-level containment changer; this routine
sends notifications to the old and new container, but doesn't notify
anything along the connecting sense path.

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (PushTravelThrough, GoThrough)`

[thing.t](../file/thing.t.html)\[[10301](../source/thing.t.html#10301)\]

<div class="desc">

For all of the two-object forms, map these using our general push-travel
mapping. We do all of this mapping here, rather than in the action
definition, so that individual objects can change the meanings of these
verbs for special cases as appropriate.

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (PushTravelEnter, Enter)`

[thing.t](../file/thing.t.html)\[[10302](../source/thing.t.html#10302)\]

<div class="desc">

*no description available*

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (PushTravelGetOutOf, GetOutOf)`

[thing.t](../file/thing.t.html)\[[10303](../source/thing.t.html#10303)\]

<div class="desc">

*no description available*

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (PushTravelClimbUp, ClimbUp)`

[thing.t](../file/thing.t.html)\[[10304](../source/thing.t.html#10304)\]

<div class="desc">

*no description available*

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (PushTravelClimbDown, ClimbDown)`

[thing.t](../file/thing.t.html)\[[10305](../source/thing.t.html#10305)\]

<div class="desc">

*no description available*

</div>

<span id="meetsObjHeld"></span>

`meetsObjHeld (actor)`

[thing.t](../file/thing.t.html)\[[5147](../source/thing.t.html#5147)\]

<div class="desc">

Are we being held by the given actor for the purposes of the objHeld
precondition? By default, and in almost all cases, this simply returns
isHeldBy(). In some rare cases, it might make sense to consider an
object to meet the objHeld condition even if isHeldBy returns nil; for
example, an actor's hands and other body parts can't be considered to be
held, but they also don't need to be for any command operating on them.

</div>

<span id="mergeSenseInfo"></span>

`mergeSenseInfo (a, b)`

[thing.t](../file/thing.t.html)\[[7592](../source/thing.t.html#7592)\]

<div class="desc">

Merge two SenseInfo items. Chooses the "better" of the two items and
returns it, where "better" is defined as more transparent, or,
transparencies being equal, brighter in ambient energy.

</div>

<span id="mergeSenseInfoTable"></span>

`mergeSenseInfoTable (a, b)`

[thing.t](../file/thing.t.html)\[[7569](../source/thing.t.html#7569)\]

<div class="desc">

Merge two senseInfoTable tables. Merges the second table into the first.
If an object appears only in the first table, the entry is left
unchanged; if an object appears only in the second table, the entry is
added to the first table. If an object appears in both tables, we'll
keep the one with better detail or brightness, adding it to the first
table if it's the one in the second table.

</div>

<span id="moveInto"></span>

`moveInto (newContainer)`

[thing.t](../file/thing.t.html)\[[5448](../source/thing.t.html#5448)\]

<div class="desc">

Move this object to a new container. Before the move is actually
performed, we notify the items in the movement path of the change, then
we send notifyRemove and notifyInsert messages to the old and new
containment trees, respectively.

All notifications are sent before the object is actually moved. This
means that the current game state at the time of the notifications
reflects the state before the move.

</div>

<span id="moveIntoForTravel"></span>

`moveIntoForTravel (newContainer)`

[thing.t](../file/thing.t.html)\[[5465](../source/thing.t.html#5465)\]

<div class="desc">

Move this object to a new container as part of travel. This is almost
the same as the regular moveInto(), but does not attempt to calculate
and notify the sense path to the new location. We omit the path
notification because travel is done via travel connections, which are
not necessarily the same as sense connections.

</div>

<span id="moveIntoNotifyPath"></span>

`moveIntoNotifyPath (newContainer)`

[thing.t](../file/thing.t.html)\[[5526](../source/thing.t.html#5526)\]

<div class="desc">

Notify each element of the move path of a moveInto operation.

</div>

<span id="mustMoveObjInto"></span>

`mustMoveObjInto (obj)`

[thing.t](../file/thing.t.html)\[[5385](../source/thing.t.html#5385)\]

<div class="desc">

Report a failure of the condition that tryMovingObjInto tries to bring
into effect. By default, this simply says that the object must be in
'self'. Some objects might want to override this when they describe
containment specially; for example, an actor might want to say that the
actor "must be carrying" the object.

</div>

<span id="nameIs"></span>

`nameIs ( )`

[en_us.t](../file/en_us.t.html)\[[1826](../source/en_us.t.html#1826)\]

<div class="desc">

get my name plus a being verb ("the box is")

</div>

<span id="nameIsnt"></span>

`nameIsnt ( )`

[en_us.t](../file/en_us.t.html)\[[1829](../source/en_us.t.html#1829)\]

<div class="desc">

get my name plus a negative being verb ("the box isn't")

</div>

<span id="nameVerb"></span>

`nameVerb (verb)`

[en_us.t](../file/en_us.t.html)\[[1839](../source/en_us.t.html#1839)\]

<div class="desc">

My name with the given regular verb in agreement: in the present tense,
if my name has singular usage, we'll add 's' to the verb, otherwise we
won't. In the past tense, we'll add 'd' (or 'ed'). This can't be used
with irregular verbs, or with regular verbs that have the last consonant
repeated before the past -ed ending, such as "deter".

</div>

<span id="normalizePath"></span>

`normalizePath (path)`

[thing.t](../file/thing.t.html)\[[6441](../source/thing.t.html#6441)\]

<div class="desc">

"Normalize" a containment path to remove redundant containment
traversals.

First, we expand any sequence of in+out operations that take us out of
one root-level containment tree and into another to include a "through"
operation for the multi-location object being traversed. For example, if
'a' and 'c' do not share a common container, then we will turn this:

\[a PathIn b PathOut c\]

into this:

\[a PathIn b PathThrough b PathOut c\]

This will ensure that when we traverse the path, we will explicitly
traverse through the connector material of 'b'.

Second, we replace any sequence of out+in operations through a common
container with "peer" operations across the container's contents
directly. For example, a path that looks like this

\[a PathOut b PathIn c\]

will be normalized to this:

\[a PathPeer c\]

This means that we go directly from a to c, traversing through the fill
medium of their common container 'b' but not actually traversing out of
'b' and back into it.

</div>

<span id="notePromptByOwnerLoc"></span>

`notePromptByOwnerLoc (ownerPriority)`

[en_us.t](../file/en_us.t.html)\[[1433](../source/en_us.t.html#1433)\]

<div class="desc">

Note that I'm being used in a disambiguation prompt by owner/location.
If we're showing the owner, we'll set the antecedent for the owner's
pronoun, if the owner is a 'him' or 'her'; this allows the player to
refer back to our prompt text with appropriate pronouns.

</div>

<span id="notePromptByPossAdj"></span>

`notePromptByPossAdj ( )`

[en_us.t](../file/en_us.t.html)\[[1452](../source/en_us.t.html#1452)\]

<div class="desc">

Note that we're being used in a prompt question with our possessive
adjective. If we're a 'him' or a 'her', set our pronoun antecedent so
that the player's response to the prompt question can refer back to the
prompt text by pronoun.

</div>

<span id="noteSeenBy"></span>

`noteSeenBy (actor, prop)`

[thing.t](../file/thing.t.html)\[[1612](../source/thing.t.html#1612)\]

<div class="desc">

Note that I've been seen by the given actor, setting the given "seen"
property. This routine notifies the object that it's just been observed
by the given actor, allowing it to take any special action it wants to
take in such cases.

</div>

<span id="notifyInsert"></span>

`notifyInsert (obj, newCont)`

[thing.t](../file/thing.t.html)\[[7869](../source/thing.t.html#7869)\]

<div class="desc">

Receive notification that we are about to insert a new object into this
container. 'obj' is the object being moved, and 'newCont' is the new
direct container (which might be a child of ours). This is normally
called during the action() phase.

During moveInto(), this is called on the new container tree after
notifyRemove has been called on the old container tree. This routine can
cancel the move by displaying an explanatory message and calling 'exit'.

</div>

<span id="notifyMoveInto"></span>

`notifyMoveInto (newCont)`

[thing.t](../file/thing.t.html)\[[7889](../source/thing.t.html#7889)\]

<div class="desc">

Receive notification that I'm about to be moved to a new container. By
default, we do nothing; subclasses can override this to do any special
processing when this object is moved. This is normally called during the
action() phase.

During moveInto(), this routine is called after notifyRemove() and
notifyInsert() have been called on the old and new container trees
(respectively). This routine can cancel the move by displaying an
explanatory message and calling 'exit'.

This routine is the last in the notification sequence, so if this
routine doesn't cancel the move, then the move will definitely happen
(at least to the extent that we'll definitely call baseMoveInto() to
carry out the move).

</div>

<span id="notifyMoveViaPath"></span>

`notifyMoveViaPath (obj, dest, op)`

[thing.t](../file/thing.t.html)\[[6078](../source/thing.t.html#6078)\]

<div class="desc">

Check moving an object through this container via a path. This method is
called during moveInto to notify each element along a move path that the
movement is about to occur. We call checkMoveViaPath(); if it indicates
failure, we'll report the failure encoded in the status object and
terminate the command with 'exit'.

Note that this method should generally not be overridden; only
checkMoveViaPath() should usually need to be overridden.

</div>

<span id="notifyRemove"></span>

`notifyRemove (obj)`

[thing.t](../file/thing.t.html)\[[7854](../source/thing.t.html#7854)\]

<div class="desc">

Receive notification that we are about to remove an object from this
container. This is normally called during the action() phase.

When an object is about to be moved via moveInto(), the library calls
notifyRemove on the old container tree, then notifyInsert on the new
container tree, then notifyMoveInto on the object being moved. Any of
these routines can cancel the operation by displaying an explanatory
message and calling 'exit'.

</div>

<span id="obscuredDesc"></span>

`// obscuredDesc (obs)`<span class="rem">Interface description
only</span>

[thing.t](../file/thing.t.html)\[[2233](../source/thing.t.html#2233)\]

<div class="desc">

The "obscured" description. If this is defined for an object, then we
call it to display the description when an actor explicitly examines
this object from a point of view where we have an "obscured" sight path
to the object.

If this property is left undefined for an object, then we'll describe
this object when it's obscured in one of two ways. If the object has its
'sightSize' property set to 'large', we'll display the ordinary 'desc',
because its large visual size makes its details visible even when the
object is obscured. If the 'sightSize' is anything else, we'll instead
display the default library message indicating that the object is too
obscured to see any details.

To display a specific description when the object is visually obscured,
override this to a method that displays your message. 'obs' is the
object that's obstructing the view - this will be something on our sense
path, such as a dirty window, that the actor has to look through to see
'self'.

</div>

<span id="obscuredSmellDesc"></span>

`obscuredSmellDesc (obs)`

[thing.t](../file/thing.t.html)\[[2280](../source/thing.t.html#2280)\]

<div class="desc">

obscured smell description

</div>

<span id="obscuredSoundDesc"></span>

`obscuredSoundDesc (obs)`

[thing.t](../file/thing.t.html)\[[2265](../source/thing.t.html#2265)\]

<div class="desc">

obscured sound description

</div>

<span id="pluralNameFrom"></span>

`pluralNameFrom (str)`

[en_us.t](../file/en_us.t.html)\[[1725](../source/en_us.t.html#1725)\]

<div class="desc">

Get the plural form of the given name string. If the name ends in
anything other than 'y', we'll add an 's'; otherwise we'll replace the
'y' with 'ies'. We also handle abbreviations and individual letters
specially.

This can only deal with simple adjective-noun forms. For more
complicated forms, particularly for compound words, it must be
overridden (e.g., "Attorney General" -\> "Attorneys General",
"man-of-war" -\> "men-of-war"). Likewise, names with irregular plurals
('child' -\> 'children', 'man' -\> 'men') must be handled with
overrides.

</div>

<span id="processThrow"></span>

`processThrow (target, hitProp)`

[thing.t](../file/thing.t.html)\[[9244](../source/thing.t.html#9244)\]

<div class="desc">

Process a 'throw' command. This is common handling that can be used for
any sort of throwing (throw at, throw to, throw in, etc). The projectile
is self, and 'target' is the thing we're throwing at or to. 'hitProp' is
the property to call on 'target' if we reach the target.

</div>

<span id="propHidesProp"></span>

`propHidesProp (prop1, prop2)`

[thing.t](../file/thing.t.html)\[[7911](../source/thing.t.html#7911)\]

<div class="desc">

Determine if one property on this object effectively "hides" another.
This is a sort of override check for two distinct properties.

We look at the object to determine where prop1 and prop2 are defined in
the class hierarchy. If prop1 isn't defined, it definitely doesn't hide
prop2. If prop2 isn't defined, prop1 definitely hides it. If both are
defined, then prop1 hides prop2 if and only if it is defined at a point
in the class hierarchy that is "more specialized" than prop2. That is,
for prop1 to hide prop2, the class that defines prop1 must either be the
same as the class that defines prop2, or the class where prop1 is
defined must inherit from the class that defines prop2, or the class
where prop1 is defined must be earlier in a multiple inheritance list
than the class defining prop2.

</div>

<span id="propWithPresent"></span>

`propWithPresent (prop, [args])`

[en_us.t](../file/en_us.t.html)\[[1927](../source/en_us.t.html#1927)\]

<div class="desc">

Invoke a property (with an optional argument list) on this object while
temporarily switching to the present tense, and return the result.

</div>

<span id="putInName"></span>

`putInName ( )`

[en_us.t](../file/en_us.t.html)\[[1301](../source/en_us.t.html#1301)\]

<div class="desc">

Provide the prepositional phrase for an object being put into me. For a
container, for example, this would say "into the box"; for a surface, it
would say "onto the table." By default, we return our library message
given by our putDestMessage property; this default is suitable for most
cases, but individual objects can customize as needed. When customizing
this, be sure to make the phrase suitable for use in sentences like "You
put the book \<\<putInName\>\>" and "The book falls \<\<putInName\>\>" -
the phrase should be suitable for a verb indicating active motion by the
object being received.

</div>

<span id="receiveDrop"></span>

`receiveDrop (obj, desc)`

[thing.t](../file/thing.t.html)\[[3895](../source/thing.t.html#3895)\]

<div class="desc">

Receive a dropped object. This is called when we are the actual (not
nominal) drop destination for an object being dropped, thrown, or
otherwise discarded. This routine is responsible for carrying out the
drop operation, and reporting the result of the command.

'desc' is a "drop descriptor": an object of class DropType, which
describes how the object is being discarded. This can be a DropTypeDrop
for a DROP command, a DropTypeThrow for a THROW command, or custom types
defined by the game or by library extensions.

In most cases, the actual \*result\* of dropping the object will always
be the same for a given location, regardless of which command initiated
the drop, so this routine won't usually have to look at 'desc' at all to
figure out what happens.

However, the \*message\* we generate does usually vary according to the
drop type, because this is the report for the entire command. There are
three main ways of handling this variation.

\- First, you can check what kind of descriptor it is (using ofKind, for
example), and generate a custom message for each kind of descriptor. Be
aware that any library extensions you're using might have added new
DropType subclasses.

\- Second, experienced programmers might prefer the arguably cleaner OO
"visitor" pattern: treat 'desc' as a visitor, calling a single method
that you define for your custom message. You'll have to define that
custom method in each DropType subclass, of course.

\- Third, you can build a custom message by combining the standard
"message fragment" prefix provided by the drop descriptor with your own
suffix. The prefix will always be the start of a sentence describing
what the player did: "You drop the box", "The ball hits the wall and
bounces off", and so on. Since the fragment always has the form of the
start of a sentence, you can always add your own suffix: ", and falls to
the floor", for example, or ", and falls into the chasm". Note that if
you're using one of the other approaches above, you'll probably want to
combine that approach with this one to handle cases where you don't
recognize the drop descriptor type.

By default, we simply move the object into self and display the standard
message using the descriptor (we use the "visitor" pattern to display
that standard message). This can be overridden in cases where it's
necessary to move the object to a different location, or to invoke a
side effect.

</div>

<span id="remoteDesc"></span>

`// remoteDesc (pov)`<span class="rem">Interface description only</span>

[thing.t](../file/thing.t.html)\[[2247](../source/thing.t.html#2247)\]

<div class="desc">

The "remote" description. If this is defined for an object, then we call
it to display the description when an actor explicitly examines this
object from a separate top-level location. That is, when the actor's
outermost enclosing room is different from our own outermost enclosing
room, we'll use this description.

If this property is left undefined, then we'll describe this object when
it's distant as though it were in the same room. So, we'll select the
obscured, distant, or ordinary description, according to the sense path.

</div>

<span id="remoteInitSpecialDesc"></span>

`remoteInitSpecialDesc (actor)`

[thing.t](../file/thing.t.html)\[[1463](../source/thing.t.html#1463)\]

<div class="desc">

the initial remote special description

</div>

<span id="remoteRoomContentsLister"></span>

`remoteRoomContentsLister (other)`

[thing.t](../file/thing.t.html)\[[3305](../source/thing.t.html#3305)\]

<div class="desc">

Get my lister for the contents of the given remote room. A remote room
is a separate top-level room that an actor can see from its current
location; for example, if two top-level rooms are connected by a window,
so that an actor standing in one room can see into the other room, then
the other room is the remote room, from the actor's perspective.

This is called on the actor's outermost room to get the lister for
objects visible in the given remote room. This lets each room customize
the way it describes the objects in adjoining rooms as seen from its
point of view.

We provide a simple default lister that yields decent results in most
cases. However, it's often desirable to customize this, to be more
specific about how we see the items: "Through the window, you see..." or
"Further down the hall, you see...". An easy way to provide such custom
listings is to return a new CustomRoomLister, supplying the prefix and
suffix strings as parameters:

  
return new CustomRoomLister(  
'Further down the hall, {you/he} see{s}', '.');

</div>

<span id="remoteSpecialDesc"></span>

`remoteSpecialDesc (actor)`

[thing.t](../file/thing.t.html)\[[1212](../source/thing.t.html#1212)\]

<div class="desc">

The "remote" special description. This is the special description that
will be used when this object is not in the point-of-view actor's
current top-level room, but is visible in a connected room. For example,
if two top-level rooms are connected by a window, so that an actor in
one room can see the objects in the other room, this method will be used
to generate the description of the object when the actor is in the other
room, viewing this object through the window.

By default, we just use the special description. It's usually better to
customize this to describe the object from the given point of view.
'actor' is the point-of-view actor.

</div>

<span id="removeFromContents"></span>

`removeFromContents (obj)`

[thing.t](../file/thing.t.html)\[[5409](../source/thing.t.html#5409)\]

<div class="desc">

Remove an object from my contents.

Do NOT override this routine to cause side effects. If side effects are
desired when removing an object, use notifyRemove().

</div>

<span id="removeObjectNotifyItem"></span>

`removeObjectNotifyItem (obj)`

[thing.t](../file/thing.t.html)\[[7710](../source/thing.t.html#7710)\]

<div class="desc">

remove an item from the registered notification list

</div>

<span id="restoreLocation"></span>

`restoreLocation (oldLoc)`

[thing.t](../file/thing.t.html)\[[5432](../source/thing.t.html#5432)\]

<div class="desc">

Restore a previously saved location. Does not trigger any side effects.

</div>

<span id="roomActorThereDesc"></span>

`roomActorThereDesc (actor)`

[thing.t](../file/thing.t.html)\[[2628](../source/thing.t.html#2628)\]

<div class="desc">

Describe an actor in this location either from the point of view of a
separate top-level room, or at a distance. This is called when we're
showing a room description (for LOOK AROUND), and the given actor is in
a remote room or at a distance visually from the actor doing the
looking, and the given actor is contained within this room.

By default, if we have a location, and the actor doing the looking can
see out into the enclosing room, we'll defer to the location. Otherwise,
we'll show a default library message ("The actor is nearby").

</div>

<span id="roomContentsLister"></span>

`roomContentsLister ( )`

[thing.t](../file/thing.t.html)\[[3279](../source/thing.t.html#3279)\]

<div class="desc">

Get my lighted room contents lister - this is the Lister object that we
use to display the room's contents when the room is lit. We'll return
the default library room lister.

</div>

<span id="roomDaemon"></span>

`roomDaemon ( )`

[thing.t](../file/thing.t.html)\[[3644](../source/thing.t.html#3644)\]

<div class="desc">

By default, an object containing the player character will forward the
roomDaemon() call up to the container.

</div>

<span id="roomDarkDesc"></span>

`roomDarkDesc ( )`

[thing.t](../file/thing.t.html)\[[2613](../source/thing.t.html#2613)\]

<div class="desc">

show our interior description in the dark

</div>

<span id="roomDesc"></span>

`roomDesc ( )`

[thing.t](../file/thing.t.html)\[[2582](../source/thing.t.html#2582)\]

<div class="desc">

Show our interior description. We use this to generate the long "look"
description for the room when an actor is within this object and cannot
see the enclosing room.

Note that this is used ONLY when the actor cannot see the enclosing
room - when the enclosing room is visible (because the nested room is
something like a chair that doesn't enclose the actor, or can enclose
the actor but is open or transparent), then we'll simply use the
description of the enclosing room instead, adding a note to the short
name shown at the start of the room description indicating that the
actor is in the nested room.

By default, we'll show the appropriate "actor here" description for the
posture, so we'll say something like "You are sitting on the red chair"
or "You are in the phone booth." Instances can override this to
customize the description with something more detailed, if desired.

</div>

<span id="roomFirstDesc"></span>

`roomFirstDesc ( )`

[thing.t](../file/thing.t.html)\[[2591](../source/thing.t.html#2591)\]

<div class="desc">

Show our first-time room description. This is the description we show
when the actor is seeing our interior description for the first time. By
default, we just show the ordinary room description, but this can be
overridden to provide a special description the first time the actor
sees the room.

</div>

<span id="roomRemoteDesc"></span>

`roomRemoteDesc (actor)`

[thing.t](../file/thing.t.html)\[[2607](../source/thing.t.html#2607)\]

<div class="desc">

Show our remote viewing description. This is used when we show a
description of a room, via lookAroundWithin, and the actor who's viewing
the room is remote. Note that the library never does this itself, since
there's no command in the basic library that lets a player view a remote
room. However, a game might want to generate such a description to
handle a command like LOOK THROUGH KEYHOLE, so we provide this extra
description method for the game's use.

By default, we simply show the normal room description. You'll probably
want to override this any time you actually use it, though, to describe
what the actor sees from the remote point of view.

</div>

<span id="roomTravelPreCond"></span>

`roomTravelPreCond ( )`

[thing.t](../file/thing.t.html)\[[3395](../source/thing.t.html#3395)\]

<div class="desc">

Get the travel preconditions for an actor in this location. For ordinary
objects, we'll just defer to our container, if we have one.

</div>

<span id="saveLocation"></span>

`saveLocation ( )`

[thing.t](../file/thing.t.html)\[[5419](../source/thing.t.html#5419)\]

<div class="desc">

Save my location for later restoration. Returns a value suitable for
passing to restoreLocation.

</div>

<span id="selectPathTo"></span>

`selectPathTo (obj, traverseProp)`

[thing.t](../file/thing.t.html)\[[6106](../source/thing.t.html#6106)\]

<div class="desc">

Choose a path from this object to a given object. If no paths are
available, returns nil. If any paths exist, we'll find the shortest
usable one, calling the given property on each object in the path to
determine if the traversals are allowed.

If we can find a path, but there are no good paths, we'll return the
shortest unusable path. This can be useful for explaining why the
traversal is impossible.

</div>

<span id="sendNotifyInsert"></span>

`sendNotifyInsert (obj, newCont, msg)`

[thing.t](../file/thing.t.html)\[[7784](../source/thing.t.html#7784)\]

<div class="desc">

Send the given notification to each direct parent, each of their direct
parents, and so forth, stopping when we reach parents that we have in
common with our new location. We don't notify parents in common with new
location (or their parents).

This should always be called \*before\* a change of location is actually
put into effect, so that we will still be in our old container when this
is called. 'obj' is the object being inserted, and 'newCont' is the new
direct container.

</div>

<span id="sendNotifyRemove"></span>

`sendNotifyRemove (obj, newLoc, msg)`

[thing.t](../file/thing.t.html)\[[7751](../source/thing.t.html#7751)\]

<div class="desc">

Send the given notification to each direct parent, each of their direct
parents, and so forth, stopping when we reach parents that we have in
common with our new location. We don't notify parents in common with new
location (or their parents) because we're not actually removing the
object from the common parents.

</div>

<span id="senseAmbientMax"></span>

`senseAmbientMax (senses)`

[thing.t](../file/thing.t.html)\[[6943](../source/thing.t.html#6943)\]

<div class="desc">

Determine the highest ambient sense level at this object for any of the
given senses.

Note that this method changes certain global variables used during sense
and scope calculations. Because of this, be careful not to call this
method \*during\* sense or scope calculations. In particular, don't call
this from an object's canBeSensed() method or anything it calls. For
example, don't call this from a Hidden.discovered method.

</div>

<span id="senseInfoTable"></span>

`senseInfoTable (sense)`

[thing.t](../file/thing.t.html)\[[6818](../source/thing.t.html#6818)\]

<div class="desc">

Build a list of full information on all of the objects reachable from me
through the given sense, along with full information for each object's
sense characteristics.

We return a lookup table of each object that can be sensed (in the given
sense) from the point of view of 'self'. The key for each entry in the
table is an object, and the corresponding value is a SenseInfo object
describing the sense conditions for the object.

</div>

<span id="senseObj"></span>

`senseObj (sense, obj)`

[thing.t](../file/thing.t.html)\[[6706](../source/thing.t.html#6706)\]

<div class="desc">

Determine how well I can sense the given object. Returns a SenseInfo
object describing the sense path from my point of view to the object.

Note that, because 'distant', 'attenuated', and 'obscured' transparency
levels always compound (with one another and with themselves) to opaque,
there will never be more than a single obstructor in a path, because any
path with two or more obstructors would be an opaque path, and hence not
a path at all.

</div>

<span id="sensePathFromWithin"></span>

`sensePathFromWithin (fromChild, sense, trans, obs, fill)`

[thing.t](../file/thing.t.html)\[[7380](../source/thing.t.html#7380)\]

<div class="desc">

Build a path from an object within me.

</div>

<span id="sensePathFromWithout"></span>

`sensePathFromWithout (fromParent, sense, trans, obs, fill)`

[thing.t](../file/thing.t.html)\[[7469](../source/thing.t.html#7469)\]

<div class="desc">

Build a path from an object immediately containing me.

</div>

<span id="sensePathToContents"></span>

`sensePathToContents (sense, trans, obs, fill)`

[thing.t](../file/thing.t.html)\[[7332](../source/thing.t.html#7332)\]

<div class="desc">

Build a sense path to my contents

</div>

<span id="sensePathToLoc"></span>

`sensePathToLoc (sense, trans, obs, fill)`

[thing.t](../file/thing.t.html)\[[7319](../source/thing.t.html#7319)\]

<div class="desc">

Build a path to my location or locations

</div>

<span id="sensePresenceList"></span>

`sensePresenceList (sense)`

[thing.t](../file/thing.t.html)\[[6916](../source/thing.t.html#6916)\]

<div class="desc">

Build a list of the objects reachable from me through the given sense
and with a presence in the sense.

</div>

<span id="setAllSeenBy"></span>

`setAllSeenBy (infoTab, actor)`

[thing.t](../file/thing.t.html)\[[1596](../source/thing.t.html#1596)\]

<div class="desc">

Mark everything visible as having been seen. 'infoTab' is a LookupTable
of sight information, as returned by visibleInfoTable(). We'll mark
everything visible in the table as having been seen by the actor, EXCEPT
objects that have suppressAutoSeen set to true.

</div>

<span id="setContentsSeenBy"></span>

`setContentsSeenBy (infoTab, actor)`

[thing.t](../file/thing.t.html)\[[1576](../source/thing.t.html#1576)\]

<div class="desc">

Mark all visible contents of 'self' as having been seen. 'infoTab' is a
LookupTable of sight information, as returned by visibleInfoTable().
This should be called any time an object is examined in such a way that
its contents should be considered to have been seen.

We will NOT mark as seen any objects that have suppressAutoSeen set to
true.

</div>

<span id="setGlobalParamName"></span>

`setGlobalParamName (name)`

[thing.t](../file/thing.t.html)\[[1147](../source/thing.t.html#1147)\]

<div class="desc">

Set the global parameter name dynamically. If you need to add a new
global parameter name at run-time, call this rather than setting the
property directly, to ensure that the name is added to the message
builder's name table. You can also use this to delete an object's global
parameter name, by passing nil for the new name.

(You only need to use this method if you want to add or change a name
dynamically at run-time, because the library automatically initializes
the table for objects with globalParamName settings defined at
compile-time.)

</div>

<span id="setVisualSenseInfo"></span>

`setVisualSenseInfo (info)`

[thing.t](../file/thing.t.html)\[[6562](../source/thing.t.html#6562)\]

<div class="desc">

Set the explicit visual sense information; if this is not nil,
getVisualSenseInfo() will return this rather than calculating the live
value. Returns the old value, which is a SenseInfo or nil.

</div>

<span id="shineFromWithin"></span>

`shineFromWithin (fromChild, sense, ambient, fill)`

[thing.t](../file/thing.t.html)\[[7194](../source/thing.t.html#7194)\]

<div class="desc">

Transmit ambient energy from an object within me. This transmits to my
outer surface, and also to my own immediate children - in other words,
to the peers of the child shining on us. We need to transmit to the
source's peers right now, because it might degrade the ambient energy to
go out through our surface.

</div>

<span id="shineFromWithout"></span>

`shineFromWithout (fromParent, sense, level, fill)`

[thing.t](../file/thing.t.html)\[[7281](../source/thing.t.html#7281)\]

<div class="desc">

Transmit ambient energy from an object immediately containing me.

</div>

<span id="shineOnContents"></span>

`shineOnContents (sense, ambient, fill)`

[thing.t](../file/thing.t.html)\[[7127](../source/thing.t.html#7127)\]

<div class="desc">

Shine ambient energy at my surface onto my contents.

</div>

<span id="shineOnLoc"></span>

`shineOnLoc (sense, ambient, fill)`

[thing.t](../file/thing.t.html)\[[7114](../source/thing.t.html#7114)\]

<div class="desc">

Transmit ambient energy to my location or locations.

</div>

<span id="showDistantSpecialDesc"></span>

`showDistantSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1336](../source/thing.t.html#1336)\]

<div class="desc">

show the special description under distant viewing conditions

</div>

<span id="showDistantSpecialDescInContents"></span>

`showDistantSpecialDescInContents (actor, cont)`

[thing.t](../file/thing.t.html)\[[1424](../source/thing.t.html#1424)\]

<div class="desc">

*no description available*

</div>

<span id="showInventoryContents"></span>

`showInventoryContents (pov, lister, options, indent, infoTab)`

[thing.t](../file/thing.t.html)\[[4924](../source/thing.t.html#4924)\]

<div class="desc">

Show the contents of this object as part of an inventory listing. By
default, we simply use the same listing we do for the normal contents
listing.

</div>

<span id="showInventoryItem"></span>

`showInventoryItem (options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[2088](../source/thing.t.html#2088)\]

<div class="desc">

Show this item as part of an inventory list. By default, we'll show the
regular list item name.

</div>

<span id="showInventoryItemCounted"></span>

`showInventoryItemCounted (lst, options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[2093](../source/thing.t.html#2093)\]

<div class="desc">

show the item, using the inventory state name

</div>

<span id="showListItem"></span>

`showListItem (options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[1934](../source/thing.t.html#1934)\]

<div class="desc">

Show this item as part of a list. 'options' is a combination of ListXxx
flags indicating the type of listing. 'infoTab' is a lookup table of
SenseInfo objects giving the sense information for the point of view.

</div>

<span id="showListItemCounted"></span>

`showListItemCounted (lst, options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[1977](../source/thing.t.html#1977)\]

<div class="desc">

Show this item as part of a list, grouped with a count of
list-equivalent items.

</div>

<span id="showListItemCountedGen"></span>

`showListItemCountedGen (lst, options, pov, infoTab, stateNameProp)`

[thing.t](../file/thing.t.html)\[[1989](../source/thing.t.html#1989)\]

<div class="desc">

General routine to show this item as part of a list, grouped with a
count of list-equivalent items. 'stateNameProp' is the property of any
list state object that we should use to obtain the name of the listing
state.

</div>

<span id="showListItemGen"></span>

`showListItemGen (options, pov, infoTab, stateNameProp)`

[thing.t](../file/thing.t.html)\[[1945](../source/thing.t.html#1945)\]

<div class="desc">

General routine to show the item as part of a list. 'stateNameProp' is
the property to use in any listing state object to obtain the state
name.

</div>

<span id="showObjectContents"></span>

`showObjectContents (pov, lister, options, indent, infoTab)`

[thing.t](../file/thing.t.html)\[[4909](../source/thing.t.html#4909)\]

<div class="desc">

Show the contents of this object, as part of a recursive listing
generated as part of the description of our container, our container's
container, or any further enclosing container.

If the object has any contents, we'll display a listing of the contents.
This is used to display the object's contents as part of the description
of a room ("look around"), of an object ("examine box"), or of an
object's contents ("look in box").

'options' is the set of flags that we'll pass to showList(), and has the
same meaning as for that function.

'infoTab' is a lookup table of SenseInfo objects for the objects that
the actor to whom we're showing the contents listing can see via the
sight-like senses.

This method should be overridden by any object that doesn't store its
contents using a simple 'contents' list property.

</div>

<span id="showObscuredSpecialDesc"></span>

`showObscuredSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1327](../source/thing.t.html#1327)\]

<div class="desc">

show the special description under obscured viewing conditions

</div>

<span id="showObscuredSpecialDescInContents"></span>

`showObscuredSpecialDescInContents (actor, cont)`

[thing.t](../file/thing.t.html)\[[1422](../source/thing.t.html#1422)\]

<div class="desc">

*no description available*

</div>

<span id="showRemoteSpecialDesc"></span>

`showRemoteSpecialDesc (actor)`

[thing.t](../file/thing.t.html)\[[1345](../source/thing.t.html#1345)\]

<div class="desc">

show the remote special description

</div>

<span id="showRemoteSpecialDescInContents"></span>

`showRemoteSpecialDescInContents (actor, cont)`

[thing.t](../file/thing.t.html)\[[1426](../source/thing.t.html#1426)\]

<div class="desc">

*no description available*

</div>

<span id="showSpecialDesc"></span>

`showSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1314](../source/thing.t.html#1314)\]

<div class="desc">

Show the special description, if we have one. If we are using our
initial description, we'll show that; otherwise, if we have a
specialDesc property, we'll show that.

Note that the initial description overrides the specialDesc property
whenever useInitSpecialDesc() returns true. This allows an object to
have both an initial description that is used until the object is moved,
and a separate special description used thereafter.

</div>

<span id="showSpecialDescInContents"></span>

`showSpecialDescInContents (actor, cont)`

[thing.t](../file/thing.t.html)\[[1420](../source/thing.t.html#1420)\]

<div class="desc">

Show the special description in contents listings under various sense
conditions. By default, we'll use the corresponding special descriptions
for full room descriptions. These can be overridden to show special
versions of the description when we're examining particular containers,
if desired. 'actor' is the actor doing the looking.

</div>

<span id="showSpecialDescInContentsWithInfo"></span>

`showSpecialDescInContentsWithInfo (info, pov, cont)`

[thing.t](../file/thing.t.html)\[[1396](../source/thing.t.html#1396)\]

<div class="desc">

Show our special description as part of a parent's full description.

</div>

<span id="showSpecialDescWithInfo"></span>

`showSpecialDescWithInfo (info, pov)`

[thing.t](../file/thing.t.html)\[[1262](../source/thing.t.html#1262)\]

<div class="desc">

Show my special description, given a SenseInfo object for the visual
sense path from the point of view of the description.

</div>

<span id="showStatuslineExits"></span>

`showStatuslineExits ( )`

[thing.t](../file/thing.t.html)\[[3442](../source/thing.t.html#3442)\]

<div class="desc">

show exits in the statusline - defer to our location

</div>

<span id="showWornItem"></span>

`showWornItem (options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[2102](../source/thing.t.html#2102)\]

<div class="desc">

Show this item as part of a list of items being worn.

</div>

<span id="showWornItemCounted"></span>

`showWornItemCounted (lst, options, pov, infoTab)`

[thing.t](../file/thing.t.html)\[[2107](../source/thing.t.html#2107)\]

<div class="desc">

show the item, using the worn-listing state name

</div>

<span id="smellDesc"></span>

`smellDesc ( )`

[thing.t](../file/thing.t.html)\[[2274](../source/thing.t.html#2274)\]

<div class="desc">

The "smell description," which is the description displayed when an
actor explicitly smells the object. This is used when we have a
transparent sense path to the object, and we have no "emanation" object;
when we have an associated emanation object, we use its description
instead of this one.

</div>

<span id="smellHereDesc"></span>

`smellHereDesc ( )`

[thing.t](../file/thing.t.html)\[[2310](../source/thing.t.html#2310)\]

<div class="desc">

Show the smell/sound description for the object as part of a room
description. These are displayed when the object is in the room and it
has a presence in the corresponding sense. By default, these show
nothing.

In most cases, regular objects don't override these, because most
regular objects have no direct sensory presence of their own. Instead, a
Noise or Odor is created and added to the object's direct contents, and
the Noise or Odor provides the object's sense presence.

</div>

<span id="soundDesc"></span>

`soundDesc ( )`

[thing.t](../file/thing.t.html)\[[2259](../source/thing.t.html#2259)\]

<div class="desc">

The "sound description," which is the description displayed when an
actor explicitly listens to the object. This is used when we have a
transparent sense path and no associated "emanation" object; when we
have an associated emanation object, we use its description instead of
this one.

</div>

<span id="soundHereDesc"></span>

`soundHereDesc ( )`

[thing.t](../file/thing.t.html)\[[2311](../source/thing.t.html#2311)\]

<div class="desc">

*no description available*

</div>

<span id="specialDescList"></span>

`specialDescList (infoTab, cond)`

[thing.t](../file/thing.t.html)\[[8431](../source/thing.t.html#8431)\]

<div class="desc">

Given a visible object info table (from Actor.visibleInfoTable()), get
the list of objects, filtered by the given condition and sorted by
specialDescOrder.

</div>

<span id="specialPathFrom"></span>

`specialPathFrom (src, vec)`

[thing.t](../file/thing.t.html)\[[6328](../source/thing.t.html#6328)\]

<div class="desc">

Get a "special" path from the given starting object to me.
src.getAllPathsTo(obj) calls this on 'obj' when it can't find any actual
containment path from 'src' to 'obj'. If desired, this method should add
the path or paths to the vector 'vec'.

By default, we do nothing at all. The purpose of this routine is to
allow special objects that exist outside the normal containment model to
insinuate themselves into the sense model under special conditions of
their choosing.

</div>

<span id="statusName"></span>

`statusName (actor)`

[thing.t](../file/thing.t.html)\[[2950](../source/thing.t.html#2950)\]

<div class="desc">

Display the "status line" name of the room. This is normally a brief,
single-line description.

By long-standing convention, each location in a game usually has a
distinctive name that's displayed here. Players usually find these names
helpful in forming a mental map of the game.

By default, if we have an enclosing location, and the actor can see the
enclosing location, we'll defer to the location. Otherwise, we'll
display our roo interior name.

</div>

<span id="stopThrowViaPath"></span>

`stopThrowViaPath (projectile, path)`

[thing.t](../file/thing.t.html)\[[9341](../source/thing.t.html#9341)\]

<div class="desc">

Stop a 'throw' operation along a path. 'self' is the object in the path
that is impassable by 'projectile' according to canThrowViaPath(), and
'path' is the getThrowPathTo-style path of objects traversed in the
projectile's trajectory.

The return value is taken as a path traversal continuation indicator:
nil means to stop the traversal, which is to say that the 'throw'
command finishes here. If we don't really want to stop the traversal, we
can return 'true' to let the traversal continue.

By default, we'll stop the throw by doing the same thing we would have
done if we had successfully thrown the object at 'self' - the whole
reason we're stopping the throw is that we're in the way, so the effect
is the same as though we were the intended target to begin with. This is
the normal handling when we can't throw through 'obj' because 'obj' is a
closed container or is otherwise impassable by self when thrown. This
can be overridden to provide different handling if needed.

</div>

<span id="superHidesSuper"></span>

`superHidesSuper (s1, s2)`

[thing.t](../file/thing.t.html)\[[7962](../source/thing.t.html#7962)\]

<div class="desc">

Determine if a given superclass of ours hides another superclass of
ours, by being inherited (directly or indirectly) in our class list
ahead of the other.

</div>

<span id="tasteDesc"></span>

`tasteDesc ( )`

[thing.t](../file/thing.t.html)\[[2289](../source/thing.t.html#2289)\]

<div class="desc">

The "taste description," which is the description displayed when an
actor explicitly tastes the object. Note that, unlike sound and smell,
we don't distinguish levels of transparency or distance with taste,
because tasting an object requires direct physical contact with it.

</div>

<span id="thatNom"></span>

`thatNom ( )`

[en_us.t](../file/en_us.t.html)\[[1015](../source/en_us.t.html#1015)\]

<div class="desc">

demonstrative pronouns ('that' or 'those')

</div>

<span id="thatObj"></span>

`thatObj ( )`

[en_us.t](../file/en_us.t.html)\[[1020](../source/en_us.t.html#1020)\]

<div class="desc">

*no description available*

</div>

<span id="theNameFrom"></span>

`theNameFrom (str)`

[en_us.t](../file/en_us.t.html)\[[1173](../source/en_us.t.html#1173)\]

<div class="desc">

Generate the definite-article name from the given name string. If my
name is already qualified, don't add an article; otherwise, add a 'the'
as the prefixed definite article.

</div>

<span id="theNameObj"></span>

`theNameObj ( )`

[en_us.t](../file/en_us.t.html)\[[1166](../source/en_us.t.html#1166)\]

<div class="desc">

theName in objective case. In most cases, this is identical to the
normal theName, so we use that by default. This must be overridden if
theName is a pronoun (which is usually only the case for player
character actors; see our language-specific Actor modifications for
information on that case).

</div>

<span id="theNameOwnerLoc"></span>

`theNameOwnerLoc (ownerPriority)`

[en_us.t](../file/en_us.t.html)\[[1391](../source/en_us.t.html#1391)\]

<div class="desc">

we have no owner - show as "an item in the location"

</div>

<span id="theNameWithOwner"></span>

`theNameWithOwner ( )`

[en_us.t](../file/en_us.t.html)\[[1223](../source/en_us.t.html#1223)\]

<div class="desc">

theName with my nominal owner explicitly stated, if we have a nominal
owner: "your backpack," "Bob's flashlight." If we have no nominal owner,
this is simply my theName.

</div>

<span id="throwTargetCatch"></span>

`throwTargetCatch (obj, path)`

[thing.t](../file/thing.t.html)\[[9490](../source/thing.t.html#9490)\]

<div class="desc">

Process the effect of throwing the object 'obj' to the catcher 'self'.
By default, we'll simply move the projectile into self.

</div>

<span id="throwTargetHitWith"></span>

`throwTargetHitWith (projectile, path)`

[thing.t](../file/thing.t.html)\[[9310](../source/thing.t.html#9310)\]

<div class="desc">

Process the effect of throwing the object 'projectile' at the target
'self'. By default, we'll move the projectile to the target's drop
location, and display a message saying that there was no effect other
than the projectile dropping to the floor (or whatever it drops to).
'path' is the path we took to reach the target, as returned from
getThrowPathTo(); this lets us determine how we approached the target.

</div>

<span id="throwViaPath"></span>

`throwViaPath (obj, op, target, path)`

[thing.t](../file/thing.t.html)\[[9281](../source/thing.t.html#9281)\]

<div class="desc">

Carry out a 'throw' operation along a path. 'self' is the projectile;
'obj' is the path element being traversed, and 'op' is the operation
being used to traverse the element. 'target' is the object we're
throwing 'self' at. 'path' is the projectile's full path (in
getThrowPathTo format).

By default, we'll use the standard canThrowViaPath handling (which
invokes the even more basic checkThrowViaPath) to determine if we can
make this traversal. If so, we'll proceed with the throw; otherwise,
we'll stop the throw by calling stopThrowViaPath() and returning the
result.

</div>

<span id="transmitAmbient"></span>

`transmitAmbient (sense)`

[thing.t](../file/thing.t.html)\[[7066](../source/thing.t.html#7066)\]

<div class="desc">

Transmit my radiating energy to everything within reach of the sense.

</div>

<span id="transSensingIn"></span>

`transSensingIn (sense)`

[thing.t](../file/thing.t.html)\[[6584](../source/thing.t.html#6584)\]

<div class="desc">

Determine how accessible my contents are to a sense. Any items contained
within a Thing are considered external features of the Thing, hence they
are transparently accessible to all senses.

</div>

<span id="transSensingOut"></span>

`transSensingOut (sense)`

[thing.t](../file/thing.t.html)\[[6603](../source/thing.t.html#6603)\]

<div class="desc">

Determine how accessible peers of this object are to the contents of
this object, via a given sense. This has the same meaning as
transSensingIn(), but in the opposite direction: whereas
transSensingIn() determines how accessible my contents are from the
outside, this determines how accessible the outside is from the
contents.

By default, we simply return the same thing as transSensingIn(), since
most containers are symmetrical for sense passing from inside to outside
or outside to inside. However, we distinguish this as a separate method
so that asymmetrical containers can have different effects in the
different directions; for example, a box made of one-way mirrors might
be transparent when looking from the inside to the outside, but opaque
in the other direction.

</div>

<span id="traversePath"></span>

`traversePath (path, func)`

[thing.t](../file/thing.t.html)\[[6195](../source/thing.t.html#6195)\]

<div class="desc">

Traverse a containment connection path, calling the given function for
each element. In each call to the callback, 'obj' is the container
object being traversed, and 'op' is the operation being used to traverse
it.

At each stage, the callback returns true to continue the traversal, nil
if we are to stop the traversal.

Returns nil if any callback returns nil, true if all callbacks return
true.

</div>

<span id="tryHolding"></span>

`tryHolding ( )`

[thing.t](../file/thing.t.html)\[[5355](../source/thing.t.html#5355)\]

<div class="desc">

Try making the current command's actor hold me. By default, we'll simply
try a "take" command on the object.

</div>

<span id="tryImplicitRemoveObstructor"></span>

`tryImplicitRemoveObstructor (sense, obj)`

[thing.t](../file/thing.t.html)\[[5829](../source/thing.t.html#5829)\]

<div class="desc">

Try an implicit action that would remove this object as an obstructor to
'obj' from the perspective of the current actor in the given sense. This
is invoked when this object is acting as an obstructor between the
current actor and 'obj' for the given sense, and the caller wants to
perform a command that requires a clear sense path to the given object
in the given sense.

If it is possible to perform an implicit command that would clear the
obstruction, try performing the command, and return true. Otherwise,
simply return nil. The usual implied command rules should be followed
(which can be accomplished simply by using tryImplictAction() to execute
any implied command).

The particular type of command that would remove this obstructor can
vary by obstructor class. For a container, for example, an "open"
command is the usual remedy.

</div>

<span id="tryMovingObjInto"></span>

`tryMovingObjInto (obj)`

[thing.t](../file/thing.t.html)\[[5376](../source/thing.t.html#5376)\]

<div class="desc">

Try moving the given object into this object, with an implied command.
By default, since an ordinary Thing doesn't have a way of adding new
contents by a player command, this does nothing. Containers and other
objects that can hold new contents can override this as appropriate.

</div>

<span id="useInitDesc"></span>

`useInitDesc ( )`

[thing.t](../file/thing.t.html)\[[1508](../source/thing.t.html#1508)\]

<div class="desc">

Determine if I should be described on EXAMINE using my initial examine
description (initDesc). This returns true if I have an initial examine
desription that isn't nil, and I'm in my initial state. If this returns
nil, we'll show our ordinary description (given by the 'desc' property).

</div>

<span id="useInitSpecialDesc"></span>

`useInitSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1498](../source/thing.t.html#1498)\]

<div class="desc">

Determine whether or not I should be mentioned in my containing room's
description (on LOOK AROUND) using my initial special description
(initSpecialDesc). This returns true if I have an initial description
that isn't nil, and I'm in my initial state. If this returns nil, the
object should be described in room descriptions using the ordinary
generated message (either the specialDesc, if we have one, or the
ordinary mention in the list of portable room contents).

</div>

<span id="useSpecialDesc"></span>

`useSpecialDesc ( )`

[thing.t](../file/thing.t.html)\[[1358](../source/thing.t.html#1358)\]

<div class="desc">

Determine if we should use a special description. By default, we have a
special description if we have either a non-nil specialDesc property, or
we have an initial description.

</div>

<span id="useSpecialDescInContents"></span>

`useSpecialDescInContents (cont)`

[thing.t](../file/thing.t.html)\[[1382](../source/thing.t.html#1382)\]

<div class="desc">

Determine if we should use our special description in the given object's
contents listings, for the purposes of "examine \<cont\>" or "look in
\<cont\>". By default, we'll use our special description for a given
container if we'd use our special description in general, AND we're
actually inside the container being examined.

</div>

<span id="useSpecialDescInRoom"></span>

`useSpecialDescInRoom (room)`

[thing.t](../file/thing.t.html)\[[1372](../source/thing.t.html#1372)\]

<div class="desc">

Determine if we should use our special description in the given room's
LOOK AROUND description. By default, this simply returns
useSpecialDesc().

</div>

<span id="useSpecialDescInRoomPart"></span>

`useSpecialDescInRoomPart (part)`

[thing.t](../file/thing.t.html)\[[1798](../source/thing.t.html#1798)\]

<div class="desc">

Determine if I should show my special description with the description
of the given room part (floor, ceiling, wall, etc).

By default, we'll include our special description with a room part's
description if either (1) we are using our initial description, and our
initNominalRoomPartLocation is the given part; or (2) we are using our
special description, and our specialNominalRoomPartLocation is the given
part.

Note that, by default, we do NOT use our special description for the
"default" room part location - that is, for the nominal drop destination
for our containing room, which is where we end up by default, in the
absence of an initial or special room part location setting. We don't
use our special description in this default location because special
descriptions are most frequently used to describe an object that is
specially situated, and hence we don't want to assume a default
situation.

</div>

<span id="verbEndingEs"></span>

`verbEndingEs ( )`

[en_us.t](../file/en_us.t.html)\[[1910](../source/en_us.t.html#1910)\]

<div class="desc">

Verb endings (present or past) for regular '-es/-ed' and '-y/-ies/-ied'
verbs, agreeing with this object as the subject.

</div>

<span id="verbEndingIes"></span>

`verbEndingIes ( )`

[en_us.t](../file/en_us.t.html)\[[1911](../source/en_us.t.html#1911)\]

<div class="desc">

*no description available*

</div>

<span id="verbEndingS"></span>

`verbEndingS ( )`

[en_us.t](../file/en_us.t.html)\[[1900](../source/en_us.t.html#1900)\]

<div class="desc">

Verb endings for regular '-s' verbs, agreeing with this object as the
subject. We define several methods each of which handles the past tense
differently.

verbEndingS doesn't try to handle the past tense at all - use it only in
places where you know for certain that you'll never need the past tense
form, or in expressions constructed with the tSel macro: use verbEndingS
as the macro's first argument, and specify the past tense ending
explicitly as the second argument. For example, you could generate the
correctly conjugated form of the verb "to fit" for an object named "key"
with an expression such as:

'fit' + tSel(key.verbEndingS, 'ted')

This would generate 'fit', 'fits', or 'fitted' according to number and
tense.

verbEndingSD and verbEndingSEd return 'd' and 'ed' respectively in the
past tense.

verbEndingSMessageBuilder\_ is for internal use only: it assumes that
the correct ending to be displayed in the past tense is stored in
langMessageBuilder.pastEnding\_. It is used as part of the string
parameter substitution mechanism.

</div>

<span id="verbToHave"></span>

`verbToHave ( )`

[en_us.t](../file/en_us.t.html)\[[1851](../source/en_us.t.html#1851)\]

<div class="desc">

'have' verb agreeing with this object as subject

</div>

<span id="verbWas"></span>

`verbWas ( )`

[en_us.t](../file/en_us.t.html)\[[1848](../source/en_us.t.html#1848)\]

<div class="desc">

past tense being verb agreeing with object as subject

</div>

<span id="verifyFollowable"></span>

`verifyFollowable ( )`

[thing.t](../file/thing.t.html)\[[9120](../source/thing.t.html#9120)\]

<div class="desc">

Verify that I'm a followable object. By default, it's not logical to
follow an arbitrary object. If I'm not followable, this routine will
generate an appropriate illogical() explanation and return nil. If I'm
followable, we'll return true.

</div>

<span id="verifyInsert"></span>

`verifyInsert (obj, newCont)`

[thing.t](../file/thing.t.html)\[[7827](../source/thing.t.html#7827)\]

<div class="desc">

Verify insertion of an object into my contents. By default we allow it,
unless I'm already inside the other object. This is to be called only
during verification.

</div>

<span id="verifyMoveTo"></span>

`verifyMoveTo (newLoc)`

[thing.t](../file/thing.t.html)\[[7734](../source/thing.t.html#7734)\]

<div class="desc">

Verify a proposed change of location of this object from its current
container hierarchy to the given new container. We'll verify removal
from each container up to but not including a parent that's in common
with the new container - we stop upon reaching the common parent because
the object isn't leaving the common parent, but merely repositioned
around within it. We'll also verify insertion into each new parent from
the first non-common parent on down to the immediate new container.

This routine is called any time an actor action would cause this object
to be moved to a new container, so it is the common point at which to
intercept any action that would attempt to move the object.

</div>

<span id="verifyRemove"></span>

`verifyRemove (obj)`

[thing.t](../file/thing.t.html)\[[7818](../source/thing.t.html#7818)\]

<div class="desc">

Verify removal of an object from my contents or a child object's
contents. By default we allow the removal. This is to be called during
verification only, so gVerifyResult is valid when this is called.

</div>

<span id="whatIf"></span>

`whatIf (func, [changes])`

[thing.t](../file/thing.t.html)\[[4043](../source/thing.t.html#4043)\]

<div class="desc">

"What if" test. Make the given changes temporarily, bypassing any side
effects that would normally be associated with the changes; invokes the
given callback; then remove the changes. Returns the result of calling
the callback function.

The changes are expressed as pairs of argument values. The first value
in a pair is a property, and the second is a new value for the property.
For each pair, we'll set the given property to the given value. The
setting is direct - we don't invoke any method, because we don't want to
cause any side effects at this point; we're interested only in what the
world would look like if the given changes were to go into effect.

A special property value of 'moveInto' can be used to indicate that the
object should be moved into another object for the test. In this case,
the second element of the pair is not a value to be stored into the
moveInto property, but instead the value is a new location for the
object. We'll call the baseMoveInto method to move the object to the
given new location.

In any case, after making the changes, we'll invoke the given callback
function, which we'll call with no arguments.

Finally, on our way out, we'll restore the properties we changed to
their original values. We once again do this without any side effects.
Note that we restore the old values even if we exit with an exception.

</div>

<span id="whatIfHeldBy"></span>

`whatIfHeldBy (func, actor)`

[thing.t](../file/thing.t.html)\[[4143](../source/thing.t.html#4143)\]

<div class="desc">

Run a what-if test to see what would happen if this object were being
held directly by the given actor.

</div>

<span id="withVisualSenseInfo"></span>

`withVisualSenseInfo (pov, senseInfo, methodToCall, [args])`

[thing.t](../file/thing.t.html)\[[6528](../source/thing.t.html#6528)\]

<div class="desc">

Call a description method with explicit point-of-view and the related
point-of-view sense information. 'pov' is the point of view object,
which is usually an actor; 'senseInfo' is a SenseInfo object giving the
sense information for this object, which we'll use instead of
dynamically calculating the sense information for the duration of the
routine called.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
