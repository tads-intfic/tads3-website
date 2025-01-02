---
---
<span class="title">BasicLocation</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[3468](../source/travel.t.html#3468)\]

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

A basic location - this is the base class for locations that can contain
actors.

`class `**`BasicLocation`**` :   `[`Thing`](../object/Thing.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BasicLocation`**  
`         `[`Thing`](../object/Thing.html)  
`                 `[`VocabObject`](../object/VocabObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`BasicLocation`**  
`         `[`NestedRoom`](../object/NestedRoom.html)  
`                 `[`BasicChair`](../object/BasicChair.html)  
`                         `[`BasicBed`](../object/BasicBed.html)  
`                                 `[`BasicPlatform`](../object/BasicPlatform.html)  
`                                         `[`Booth`](../object/Booth.html)  
`                                         `[`Platform`](../object/Platform.html)  
`                                                 `[`NominalPlatform`](../object/NominalPlatform.html)  
`                                 `[`Bed`](../object/Bed.html)  
`                         `[`Chair`](../object/Chair.html)  
`                 `[`HighNestedRoom`](../object/HighNestedRoom.html)  
`                 `[`Vehicle`](../object/Vehicle.html)  
`         `[`Room`](../object/Room.html)  
`                 `[`DarkRoom`](../object/DarkRoom.html)  
`                 `[`FloorlessRoom`](../object/FloorlessRoom.html)  
`                 `[`OutdoorRoom`](../object/OutdoorRoom.html)  
`                 `[`ShipboardRoom`](../object/ShipboardRoom.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cannotGoThatWayMsg`](#cannotGoThatWayMsg)`  `[`defaultPosture`](#defaultPosture)`  `[`effectiveFollowLocation`](#effectiveFollowLocation)`  `[`listWithActorInTable`](#listWithActorInTable)`  `[`mustDefaultPostureProp`](#mustDefaultPostureProp)`  `[`notTravelReadyMsg`](#notTravelReadyMsg)`  `[`roomLocation`](#roomLocation)`  `[`roomNotifyList`](#roomNotifyList)`  `[`roomTravelPreCond`](#roomTravelPreCond)`  `

Inherited from `Thing` :  
` `[`actorInAName`](../object/Thing.html#actorInAName)`  `[`actorInName`](../object/Thing.html#actorInName)`  `[`actorInPrep`](../object/Thing.html#actorInPrep)`  `[`actorIntoName`](../object/Thing.html#actorIntoName)`  `[`actorOutOfName`](../object/Thing.html#actorOutOfName)`  `[`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep)`  `[`aDisambigName`](../object/Thing.html#aDisambigName)`  `[`allStates`](../object/Thing.html#allStates)`  `[`aName`](../object/Thing.html#aName)`  `[`brightness`](../object/Thing.html#brightness)`  `[`bulk`](../object/Thing.html#bulk)`  `[`canBeHeard`](../object/Thing.html#canBeHeard)`  `[`canBeSeen`](../object/Thing.html#canBeSeen)`  `[`canBeSmelled`](../object/Thing.html#canBeSmelled)`  `[`canBeTouched`](../object/Thing.html#canBeTouched)`  `[`canMatchHer`](../object/Thing.html#canMatchHer)`  `[`canMatchHim`](../object/Thing.html#canMatchHim)`  `[`canMatchIt`](../object/Thing.html#canMatchIt)`  `[`canMatchThem`](../object/Thing.html#canMatchThem)`  `[`circularlyInMessage`](../object/Thing.html#circularlyInMessage)`  `[`collectiveGroup`](../object/Thing.html#collectiveGroup)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListed`](../object/Thing.html#contentsListed)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately)`  `[`contentsLister`](../object/Thing.html#contentsLister)`  `[`descContentsLister`](../object/Thing.html#descContentsLister)`  `[`described`](../object/Thing.html#described)`  `[`disambigEquivName`](../object/Thing.html#disambigEquivName)`  `[`disambigName`](../object/Thing.html#disambigName)`  `[`distantDesc`](../object/Thing.html#distantDesc)`  `[`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc)`  `[`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc)`  `[`distinguishers`](../object/Thing.html#distinguishers)`  `[`dummyName`](../object/Thing.html#dummyName)`  `[`equivalenceKey`](../object/Thing.html#equivalenceKey)`  `[`equivalentGrouper`](../object/Thing.html#equivalentGrouper)`  `[`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass)`  `[`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable)`  `[`esEndingPat`](../object/Thing.html#esEndingPat)`  `[`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo)`  `[`getState`](../object/Thing.html#getState)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`holdingIndex`](../object/Thing.html#holdingIndex)`  `[`iesEndingPat`](../object/Thing.html#iesEndingPat)`  `[`initDesc`](../object/Thing.html#initDesc)`  `[`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`inlineContentsLister`](../object/Thing.html#inlineContentsLister)`  `[`isEquivalent`](../object/Thing.html#isEquivalent)`  `[`isHer`](../object/Thing.html#isHer)`  `[`isHim`](../object/Thing.html#isHim)`  `[`isInInitState`](../object/Thing.html#isInInitState)`  `[`isKnown`](../object/Thing.html#isKnown)`  `[`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget)`  `[`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle)`  `[`isMassNoun`](../object/Thing.html#isMassNoun)`  `[`isPlural`](../object/Thing.html#isPlural)`  `[`isProperName`](../object/Thing.html#isProperName)`  `[`isQualifiedName`](../object/Thing.html#isQualifiedName)`  `[`isThingConstructed`](../object/Thing.html#isThingConstructed)`  `[`isTopLevel`](../object/Thing.html#isTopLevel)`  `[`listName`](../object/Thing.html#listName)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lookInLister`](../object/Thing.html#lookInLister)`  `[`moved`](../object/Thing.html#moved)`  `[`name`](../object/Thing.html#name)`  `[`nameDoes`](../object/Thing.html#nameDoes)`  `[`nameSays`](../object/Thing.html#nameSays)`  `[`nameSees`](../object/Thing.html#nameSees)`  `[`objectNotifyList`](../object/Thing.html#objectNotifyList)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc)`  `[`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc)`  `[`owner`](../object/Thing.html#owner)`  `[`patElevenEighteen`](../object/Thing.html#patElevenEighteen)`  `[`patIsAlpha`](../object/Thing.html#patIsAlpha)`  `[`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote)`  `[`patOfPhrase`](../object/Thing.html#patOfPhrase)`  `[`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord)`  `[`patOneLetterWord`](../object/Thing.html#patOneLetterWord)`  `[`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS)`  `[`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar)`  `[`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit)`  `[`patVowelY`](../object/Thing.html#patVowelY)`  `[`pluralDisambigName`](../object/Thing.html#pluralDisambigName)`  `[`pluralName`](../object/Thing.html#pluralName)`  `[`pronounSelector`](../object/Thing.html#pronounSelector)`  `[`roomDarkName`](../object/Thing.html#roomDarkName)`  `[`roomName`](../object/Thing.html#roomName)`  `[`seen`](../object/Thing.html#seen)`  `[`sightPresence`](../object/Thing.html#sightPresence)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`smellPresence`](../object/Thing.html#smellPresence)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundPresence`](../object/Thing.html#soundPresence)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialContentsLister`](../object/Thing.html#specialContentsLister)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialDescOrder`](../object/Thing.html#specialDescOrder)`  `[`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation)`  `[`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen)`  `[`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage)`  `[`theDisambigName`](../object/Thing.html#theDisambigName)`  `[`theName`](../object/Thing.html#theName)`  `[`theNamePossNoun`](../object/Thing.html#theNamePossNoun)`  `[`tmpAmbient_`](../object/Thing.html#tmpAmbient_)`  `[`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_)`  `[`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_)`  `[`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_)`  `[`tmpObstructor_`](../object/Thing.html#tmpObstructor_)`  `[`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_)`  `[`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_)`  `[`tmpTrans_`](../object/Thing.html#tmpTrans_)`  `[`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_)`  `[`touchPresence`](../object/Thing.html#touchPresence)`  `[`touchSize`](../object/Thing.html#touchSize)`  `[`verbCan`](../object/Thing.html#verbCan)`  `[`verbCannot`](../object/Thing.html#verbCannot)`  `[`verbCant`](../object/Thing.html#verbCant)`  `[`verbEndingSD`](../object/Thing.html#verbEndingSD)`  `[`verbEndingSEd`](../object/Thing.html#verbEndingSEd)`  `[`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_)`  `[`verbMust`](../object/Thing.html#verbMust)`  `[`verbToCome`](../object/Thing.html#verbToCome)`  `[`verbToDo`](../object/Thing.html#verbToDo)`  `[`verbToGo`](../object/Thing.html#verbToGo)`  `[`verbToLeave`](../object/Thing.html#verbToLeave)`  `[`verbToSay`](../object/Thing.html#verbToSay)`  `[`verbToSee`](../object/Thing.html#verbToSee)`  `[`verbWill`](../object/Thing.html#verbWill)`  `[`verbWont`](../object/Thing.html#verbWont)`  `[`weight`](../object/Thing.html#weight)`  `

Inherited from `VocabObject` :  
` `[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)`  `[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)`  `[`pluralOrder`](../object/VocabObject.html#pluralOrder)`  `[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)`  `[`vocabWords`](../object/VocabObject.html#vocabWords)`  `[`weakTokens`](../object/VocabObject.html#weakTokens)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`actorInGroupPrefix`](#actorInGroupPrefix)`  `[`actorInGroupSuffix`](#actorInGroupSuffix)`  `[`actorIsFamiliar`](#actorIsFamiliar)`  `[`actorKnowsDestination`](#actorKnowsDestination)`  `[`actorTravelingWithin`](#actorTravelingWithin)`  `[`addRoomNotifyItem`](#addRoomNotifyItem)`  `[`cannotGoShowExits`](#cannotGoShowExits)`  `[`cannotGoThatWay`](#cannotGoThatWay)`  `[`cannotGoThatWayInDark`](#cannotGoThatWayInDark)`  `[`cannotTravel`](#cannotTravel)`  `[`checkActorOutOfNested`](#checkActorOutOfNested)`  `[`checkActorReadyToEnterNestedRoom`](#checkActorReadyToEnterNestedRoom)`  `[`checkMovingActorInto`](#checkMovingActorInto)`  `[`checkStagingLocation`](#checkStagingLocation)`  `[`checkTravelerDirectlyInRoom`](#checkTravelerDirectlyInRoom)`  `[`disembarkRoom`](#disembarkRoom)`  `[`dispatchRoomDaemon`](#dispatchRoomDaemon)`  `[`enteringRoom`](#enteringRoom)`  `[`getDropDestination`](#getDropDestination)`  `[`getExtraScopeItems`](#getExtraScopeItems)`  `[`getNominalActorContainer`](#getNominalActorContainer)`  `[`getNominalDropDestination`](#getNominalDropDestination)`  `[`getRoomNotifyList`](#getRoomNotifyList)`  `[`getStatuslineExitsHeight`](#getStatuslineExitsHeight)`  `[`isActorTravelReady`](#isActorTravelReady)`  `[`leavingRoom`](#leavingRoom)`  `[`listWithActorIn`](#listWithActorIn)`  `[`makeStandingUp`](#makeStandingUp)`  `[`removeRoomNotifyItem`](#removeRoomNotifyItem)`  `[`roomActorHereDesc`](#roomActorHereDesc)`  `[`roomActorPostureDesc`](#roomActorPostureDesc)`  `[`roomActorStatus`](#roomActorStatus)`  `[`roomActorThereDesc`](#roomActorThereDesc)`  `[`roomAfterAction`](#roomAfterAction)`  `[`roomBeforeAction`](#roomBeforeAction)`  `[`roomDarkTravel`](#roomDarkTravel)`  `[`roomDesc`](#roomDesc)`  `[`roomListActorPosture`](#roomListActorPosture)`  `[`roomOkayPostureChange`](#roomOkayPostureChange)`  `[`showStatuslineExits`](#showStatuslineExits)`  `[`travelerArriving`](#travelerArriving)`  `[`travelerLeaving`](#travelerLeaving)`  `[`tryMakingDefaultPosture`](#tryMakingDefaultPosture)`  `[`tryMakingTravelReady`](#tryMakingTravelReady)`  `[`wouldBeLitFor`](#wouldBeLitFor)`  `

Inherited from `Thing` :  
` `[`acceptCommand`](../object/Thing.html#acceptCommand)`  `[`addAllContents`](../object/Thing.html#addAllContents)`  `[`addDirectConnections`](../object/Thing.html#addDirectConnections)`  `[`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem)`  `[`addToContents`](../object/Thing.html#addToContents)`  `[`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable)`  `[`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable)`  `[`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination)`  `[`afterAction`](../object/Thing.html#afterAction)`  `[`afterTravel`](../object/Thing.html#afterTravel)`  `[`allContents`](../object/Thing.html#allContents)`  `[`aNameFrom`](../object/Thing.html#aNameFrom)`  `[`aNameObj`](../object/Thing.html#aNameObj)`  `[`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc)`  `[`announceDefaultObject`](../object/Thing.html#announceDefaultObject)`  `[`appendHeldContents`](../object/Thing.html#appendHeldContents)`  `[`atmosphereList`](../object/Thing.html#atmosphereList)`  `[`baseMoveInto`](../object/Thing.html#baseMoveInto)`  `[`basicExamine`](../object/Thing.html#basicExamine)`  `[`basicExamineFeel`](../object/Thing.html#basicExamineFeel)`  `[`basicExamineListen`](../object/Thing.html#basicExamineListen)`  `[`basicExamineSmell`](../object/Thing.html#basicExamineSmell)`  `[`basicExamineTaste`](../object/Thing.html#basicExamineTaste)`  `[`beforeAction`](../object/Thing.html#beforeAction)`  `[`beforeTravel`](../object/Thing.html#beforeTravel)`  `[`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths)`  `[`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo)`  `[`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo)`  `[`cacheSensePath`](../object/Thing.html#cacheSensePath)`  `[`canBeHeardBy`](../object/Thing.html#canBeHeardBy)`  `[`canBeSeenBy`](../object/Thing.html#canBeSeenBy)`  `[`canBeSensed`](../object/Thing.html#canBeSensed)`  `[`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy)`  `[`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy)`  `[`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed)`  `[`canHear`](../object/Thing.html#canHear)`  `[`canMatchPronounType`](../object/Thing.html#canMatchPronounType)`  `[`canMoveViaPath`](../object/Thing.html#canMoveViaPath)`  `[`cannotReachObject`](../object/Thing.html#cannotReachObject)`  `[`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource)`  `[`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource)`  `[`canOwn`](../object/Thing.html#canOwn)`  `[`canSee`](../object/Thing.html#canSee)`  `[`canSmell`](../object/Thing.html#canSmell)`  `[`canThrowViaPath`](../object/Thing.html#canThrowViaPath)`  `[`canTouch`](../object/Thing.html#canTouch)`  `[`canTouchViaPath`](../object/Thing.html#canTouchViaPath)`  `[`checkBulkChange`](../object/Thing.html#checkBulkChange)`  `[`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin)`  `[`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath)`  `[`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath)`  `[`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath)`  `[`childInName`](../object/Thing.html#childInName)`  `[`childInNameGen`](../object/Thing.html#childInNameGen)`  `[`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner)`  `[`childInRemoteName`](../object/Thing.html#childInRemoteName)`  `[`clearSenseInfo`](../object/Thing.html#clearSenseInfo)`  `[`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents)`  `[`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb)`  `[`connectionTable`](../object/Thing.html#connectionTable)`  `[`construct`](../object/Thing.html#construct)`  `[`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn)`  `[`countDisambigName`](../object/Thing.html#countDisambigName)`  `[`countListName`](../object/Thing.html#countListName)`  `[`countName`](../object/Thing.html#countName)`  `[`countNameFrom`](../object/Thing.html#countNameFrom)`  `[`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc)`  `[`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister)`  `[`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc)`  `[`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc)`  `[`desc`](../object/Thing.html#desc)`  `[`directionForConnector`](../object/Thing.html#directionForConnector)`  `[`distantSmellDesc`](../object/Thing.html#distantSmellDesc)`  `[`distantSoundDesc`](../object/Thing.html#distantSoundDesc)`  `[`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))`  `[`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))`  `[`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf))`  `[`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))`  `[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))`  `[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))`  `[`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel))`  `[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))`  `[`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch))`  `[`dobjFor(Take)`](../object/Thing.html#dobjFor(Take))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))`  `[`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague))`  `[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))`  `[`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))`  `[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))`  `[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))`  `[`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff))`  `[`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`examineListContents`](../object/Thing.html#examineListContents)`  `[`examineListContentsWith`](../object/Thing.html#examineListContentsWith)`  `[`examineSpecialContents`](../object/Thing.html#examineSpecialContents)`  `[`examineStatus`](../object/Thing.html#examineStatus)`  `[`failCheck`](../object/Thing.html#failCheck)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`fillMedium`](../object/Thing.html#fillMedium)`  `[`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor)`  `[`findTouchObstructor`](../object/Thing.html#findTouchObstructor)`  `[`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer)`  `[`forEachContainer`](../object/Thing.html#forEachContainer)`  `[`fromPOV`](../object/Thing.html#fromPOV)`  `[`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom)`  `[`getAllPathsTo`](../object/Thing.html#getAllPathsTo)`  `[`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher)`  `[`getBagAffinities`](../object/Thing.html#getBagAffinities)`  `[`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding)`  `[`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher)`  `[`getBulk`](../object/Thing.html#getBulk)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarryingActor`](../object/Thing.html#getCarryingActor)`  `[`getCommonContainer`](../object/Thing.html#getCommonContainer)`  `[`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer)`  `[`getConnectedContainers`](../object/Thing.html#getConnectedContainers)`  `[`getConnectorTo`](../object/Thing.html#getConnectorTo)`  `[`getContentsForExamine`](../object/Thing.html#getContentsForExamine)`  `[`getDestName`](../object/Thing.html#getDestName)`  `[`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk)`  `[`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight)`  `[`getHitFallDestination`](../object/Thing.html#getHitFallDestination)`  `[`getIdentityObject`](../object/Thing.html#getIdentityObject)`  `[`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher)`  `[`getListedContents`](../object/Thing.html#getListedContents)`  `[`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler)`  `[`getLocTraveler`](../object/Thing.html#getLocTraveler)`  `[`getMovePathTo`](../object/Thing.html#getMovePathTo)`  `[`getNoise`](../object/Thing.html#getNoise)`  `[`getNominalOwner`](../object/Thing.html#getNominalOwner)`  `[`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList)`  `[`getOdor`](../object/Thing.html#getOdor)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom)`  `[`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation)`  `[`getStateWithInfo`](../object/Thing.html#getStateWithInfo)`  `[`getThrowPathTo`](../object/Thing.html#getThrowPathTo)`  `[`getTouchPathTo`](../object/Thing.html#getTouchPathTo)`  `[`getTravelConnector`](../object/Thing.html#getTravelConnector)`  `[`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo)`  `[`getWeight`](../object/Thing.html#getWeight)`  `[`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup)`  `[`hideFromAll`](../object/Thing.html#hideFromAll)`  `[`hideFromDefault`](../object/Thing.html#hideFromDefault)`  `[`initializeEquivalent`](../object/Thing.html#initializeEquivalent)`  `[`initializeLocation`](../object/Thing.html#initializeLocation)`  `[`initializeThing`](../object/Thing.html#initializeThing)`  `[`inRoomName`](../object/Thing.html#inRoomName)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isComponentOf`](../object/Thing.html#isComponentOf)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isHeldBy`](../object/Thing.html#isHeldBy)`  `[`isIn`](../object/Thing.html#isIn)`  `[`isInFixedIn`](../object/Thing.html#isInFixedIn)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isListedInContents`](../object/Thing.html#isListedInContents)`  `[`isListedInInventory`](../object/Thing.html#isListedInInventory)`  `[`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart)`  `[`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling)`  `[`isNominallyIn`](../object/Thing.html#isNominallyIn)`  `[`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart)`  `[`isOccludedBy`](../object/Thing.html#isOccludedBy)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOwnedBy`](../object/Thing.html#isOwnedBy)`  `[`isShipboard`](../object/Thing.html#isShipboard)`  `[`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent)`  `[`itIs`](../object/Thing.html#itIs)`  `[`itNom`](../object/Thing.html#itNom)`  `[`itObj`](../object/Thing.html#itObj)`  `[`itPossAdj`](../object/Thing.html#itPossAdj)`  `[`itPossNoun`](../object/Thing.html#itPossNoun)`  `[`itVerb`](../object/Thing.html#itVerb)`  `[`listCardinality`](../object/Thing.html#listCardinality)`  `[`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector)`  `[`lookAround`](../object/Thing.html#lookAround)`  `[`lookAroundPov`](../object/Thing.html#lookAroundPov)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents)`  `[`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc)`  `[`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName)`  `[`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense)`  `[`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits)`  `[`lookInDesc`](../object/Thing.html#lookInDesc)`  `[`mainExamine`](../object/Thing.html#mainExamine)`  `[`mainMoveInto`](../object/Thing.html#mainMoveInto)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`meetsObjHeld`](../object/Thing.html#meetsObjHeld)`  `[`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo)`  `[`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel)`  `[`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath)`  `[`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto)`  `[`nameIs`](../object/Thing.html#nameIs)`  `[`nameIsnt`](../object/Thing.html#nameIsnt)`  `[`nameVerb`](../object/Thing.html#nameVerb)`  `[`normalizePath`](../object/Thing.html#normalizePath)`  `[`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc)`  `[`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj)`  `[`noteSeenBy`](../object/Thing.html#noteSeenBy)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifyMoveInto`](../object/Thing.html#notifyMoveInto)`  `[`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath)`  `[`notifyRemove`](../object/Thing.html#notifyRemove)`  `[`obscuredDesc`](../object/Thing.html#obscuredDesc)`  `[`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc)`  `[`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc)`  `[`pluralNameFrom`](../object/Thing.html#pluralNameFrom)`  `[`processThrow`](../object/Thing.html#processThrow)`  `[`propHidesProp`](../object/Thing.html#propHidesProp)`  `[`propWithPresent`](../object/Thing.html#propWithPresent)`  `[`putInName`](../object/Thing.html#putInName)`  `[`receiveDrop`](../object/Thing.html#receiveDrop)`  `[`remoteDesc`](../object/Thing.html#remoteDesc)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister)`  `[`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem)`  `[`restoreLocation`](../object/Thing.html#restoreLocation)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomDaemon`](../object/Thing.html#roomDaemon)`  `[`roomDarkDesc`](../object/Thing.html#roomDarkDesc)`  `[`roomFirstDesc`](../object/Thing.html#roomFirstDesc)`  `[`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc)`  `[`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond)`  `[`saveLocation`](../object/Thing.html#saveLocation)`  `[`selectPathTo`](../object/Thing.html#selectPathTo)`  `[`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert)`  `[`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove)`  `[`senseAmbientMax`](../object/Thing.html#senseAmbientMax)`  `[`senseInfoTable`](../object/Thing.html#senseInfoTable)`  `[`senseObj`](../object/Thing.html#senseObj)`  `[`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin)`  `[`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout)`  `[`sensePathToContents`](../object/Thing.html#sensePathToContents)`  `[`sensePathToLoc`](../object/Thing.html#sensePathToLoc)`  `[`sensePresenceList`](../object/Thing.html#sensePresenceList)`  `[`setAllSeenBy`](../object/Thing.html#setAllSeenBy)`  `[`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy)`  `[`setGlobalParamName`](../object/Thing.html#setGlobalParamName)`  `[`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo)`  `[`shineFromWithin`](../object/Thing.html#shineFromWithin)`  `[`shineFromWithout`](../object/Thing.html#shineFromWithout)`  `[`shineOnContents`](../object/Thing.html#shineOnContents)`  `[`shineOnLoc`](../object/Thing.html#shineOnLoc)`  `[`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc)`  `[`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents)`  `[`showInventoryContents`](../object/Thing.html#showInventoryContents)`  `[`showInventoryItem`](../object/Thing.html#showInventoryItem)`  `[`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted)`  `[`showListItem`](../object/Thing.html#showListItem)`  `[`showListItemCounted`](../object/Thing.html#showListItemCounted)`  `[`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen)`  `[`showListItemGen`](../object/Thing.html#showListItemGen)`  `[`showObjectContents`](../object/Thing.html#showObjectContents)`  `[`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc)`  `[`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents)`  `[`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo)`  `[`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo)`  `[`showWornItem`](../object/Thing.html#showWornItem)`  `[`showWornItemCounted`](../object/Thing.html#showWornItemCounted)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellHereDesc`](../object/Thing.html#smellHereDesc)`  `[`soundDesc`](../object/Thing.html#soundDesc)`  `[`soundHereDesc`](../object/Thing.html#soundHereDesc)`  `[`specialDescList`](../object/Thing.html#specialDescList)`  `[`specialPathFrom`](../object/Thing.html#specialPathFrom)`  `[`statusName`](../object/Thing.html#statusName)`  `[`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath)`  `[`superHidesSuper`](../object/Thing.html#superHidesSuper)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`thatNom`](../object/Thing.html#thatNom)`  `[`thatObj`](../object/Thing.html#thatObj)`  `[`theNameFrom`](../object/Thing.html#theNameFrom)`  `[`theNameObj`](../object/Thing.html#theNameObj)`  `[`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc)`  `[`theNameWithOwner`](../object/Thing.html#theNameWithOwner)`  `[`throwTargetCatch`](../object/Thing.html#throwTargetCatch)`  `[`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith)`  `[`throwViaPath`](../object/Thing.html#throwViaPath)`  `[`transmitAmbient`](../object/Thing.html#transmitAmbient)`  `[`transSensingIn`](../object/Thing.html#transSensingIn)`  `[`transSensingOut`](../object/Thing.html#transSensingOut)`  `[`traversePath`](../object/Thing.html#traversePath)`  `[`tryHolding`](../object/Thing.html#tryHolding)`  `[`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor)`  `[`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto)`  `[`useInitDesc`](../object/Thing.html#useInitDesc)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents)`  `[`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom)`  `[`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart)`  `[`verbEndingEs`](../object/Thing.html#verbEndingEs)`  `[`verbEndingIes`](../object/Thing.html#verbEndingIes)`  `[`verbEndingS`](../object/Thing.html#verbEndingS)`  `[`verbToHave`](../object/Thing.html#verbToHave)`  `[`verbWas`](../object/Thing.html#verbWas)`  `[`verifyFollowable`](../object/Thing.html#verifyFollowable)`  `[`verifyInsert`](../object/Thing.html#verifyInsert)`  `[`verifyMoveTo`](../object/Thing.html#verifyMoveTo)`  `[`verifyRemove`](../object/Thing.html#verifyRemove)`  `[`whatIf`](../object/Thing.html#whatIf)`  `[`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy)`  `[`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)`  `

Inherited from `VocabObject` :  
` `[`addToDictionary`](../object/VocabObject.html#addToDictionary)`  `[`expandPronounList`](../object/VocabObject.html#expandPronounList)`  `[`filterResolveList`](../object/VocabObject.html#filterResolveList)`  `[`getFacets`](../object/VocabObject.html#getFacets)`  `[`inheritVocab`](../object/VocabObject.html#inheritVocab)`  `[`initializeVocab`](../object/VocabObject.html#initializeVocab)`  `[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)`  `[`matchName`](../object/VocabObject.html#matchName)`  `[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)`  `[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)`  `[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)`  `[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)`  `[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cannotGoThatWayMsg"></span>

`cannotGoThatWayMsg`

[travel.t](../file/travel.t.html)\[[4232](../source/travel.t.html#4232)\]

<div class="desc">

The message to display when it's not possible to travel in a given
direction from this room; this is either a single-quoted string or an
actor action messages property (by default, it's the latter, giving a
default library message).

</div>

<span id="defaultPosture"></span>

`defaultPosture`

[travel.t](../file/travel.t.html)\[[3695](../source/travel.t.html#3695)\]

<div class="desc">

Default posture for an actor in the location. This is the posture
assumed by an actor when moving out of a nested room within this
location.

</div>

<span id="effectiveFollowLocation"></span>

`effectiveFollowLocation`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[4268](../source/travel.t.html#4268)\]

<div class="desc">

Get the effective location of an actor directly within me, for the
purposes of a "follow" command. To follow someone, we must have the same
effective follow location that the target had when we last observed the
target leaving.

For most rooms, this is simply the room itself.

</div>

<span id="listWithActorInTable"></span>

`listWithActorInTable`

[travel.t](../file/travel.t.html)\[[3503](../source/travel.t.html#3503)\]

<div class="desc">

our listWithActorIn table - this gets initialized to a LookupTable as
soon as we need one (in listWithActorIn)

</div>

<span id="mustDefaultPostureProp"></span>

`mustDefaultPostureProp`

[travel.t](../file/travel.t.html)\[[3698](../source/travel.t.html#3698)\]

<div class="desc">

failure report we issue when we can't return to default posture

</div>

<span id="notTravelReadyMsg"></span>

`notTravelReadyMsg`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3840](../source/travel.t.html#3840)\]

<div class="desc">

the message explaining what we must do to be travel-ready

</div>

<span id="roomLocation"></span>

`roomLocation`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3988](../source/travel.t.html#3988)\]

<div class="desc">

Get the room location. Since we're capable of holding actors, we are our
own room location.

</div>

<span id="roomNotifyList"></span>

`roomNotifyList`

[travel.t](../file/travel.t.html)\[[3982](../source/travel.t.html#3982)\]

<div class="desc">

our list of registered notification items

</div>

<span id="roomTravelPreCond"></span>

`roomTravelPreCond`

[travel.t](../file/travel.t.html)\[[4258](../source/travel.t.html#4258)\]

<div class="desc">

Get preconditions for travel for an actor in this location. These
preconditions should be applied by any command that will involve travel
from this location. By default, we impose no additional requirements.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="actorInGroupPrefix"></span>

`actorInGroupPrefix (pov, posture, remote, lst)`

[travel.t](../file/travel.t.html)\[[3621](../source/travel.t.html#3621)\]

<div class="desc">

Prefix and suffix messages for listing a group of actors nominally in
this location. 'posture' is the posture of the actors. 'remote' is the
outermost visible room containing the actors, but only if that room is
remote from the point-of-view actor; if everything is local, this will
be nil. 'lst' is the list of actors being listed. By default, we'll just
show the standard library messages.

</div>

<span id="actorInGroupSuffix"></span>

`actorInGroupSuffix (pov, posture, remote, lst)`

[travel.t](../file/travel.t.html)\[[3629](../source/travel.t.html#3629)\]

<div class="desc">

*no description available*

</div>

<span id="actorIsFamiliar"></span>

`actorIsFamiliar (actor)`

[travel.t](../file/travel.t.html)\[[4154](../source/travel.t.html#4154)\]

<div class="desc">

Is the actor familiar with this location? In other words, is the actor
supposed to know the location well at the start of the game?

This should return true if the actor is familiar with this location, nil
if not. By default, we return nil, since actors are not by default
familiar with any locations.

The purpose of this routine is to determine if the actor is meant to
know the location well, within the context of the game, even before the
game starts. For example, if an area in the game is an actor's own
house, the actor would naturally be familiar, within the context of the
game, with the locations making up the house.

Note that this routine doesn't need to "learn" based on the events of
the game. The familiarity here is meant only to model the actor's
knowledge as of the start of the game.

</div>

<span id="actorKnowsDestination"></span>

`actorKnowsDestination (actor, conn)`

[travel.t](../file/travel.t.html)\[[4122](../source/travel.t.html#4122)\]

<div class="desc">

Determine if the given actor has "intrinsic" knowledge of the
destination of the given travel connector leading away from this
location. This knowledge is independent of any memory the actor has of
actual travel through the connector in the course of the game, which we
track separately via the TravelConnector's travel memory mechanism.

There are two main reasons an actor would have intrinsic knowledge of a
connector's destination:

1\. The actor is supposed to be familiar with the location and its
surroundings, within the context of the game. For example, if part of
the game is the player character's own house, the PC would probably know
where all of the connections among rooms go.

2\. The destination location is plainly visible from this location or is
clearly marked (such as with a sign). For example, if the current
location is an open field, a nearby hilltop to the east might be visible
from here, so we could see from here where we'll end up by going east.
Alternatively, if we're in a lobby, and the passage to the west is
marked with a sign reading "electrical room," an actor would have good
reason to think an electrical room lies to the west.

We handle case (1) automatically through our actorIsFamiliar() method:
if the actor is familiar with the location, we assume by default that
the actor knows where all of the connectors from here go. We don't have
any default handling for case (2), so individual rooms (or subclasses)
must override this method if they want to specify intrinsic knowledge
for any of their outgoing connectors.

</div>

<span id="actorTravelingWithin"></span>

`actorTravelingWithin (origin, dest)`

[travel.t](../file/travel.t.html)\[[4085](../source/travel.t.html#4085)\]

<div class="desc">

Receive notification of travel among nested rooms. When an actor moves
between two locations related directly by containing (such as from a
chair to the room containing the chair, or vice versa), we first call
this routine on the origin of the travel, then we move the actor, then
we call this same routine on the destination of the travel.

This routine is used any time an actor is moved with travelWithin().
This is not used when an actor travels between locations related by a
TravelConnector object rather than by direct containment.

We do nothing by default. Locations can override this if they wish to
perform any special handling during this type of travel.

</div>

<span id="addRoomNotifyItem"></span>

`addRoomNotifyItem (obj)`

[travel.t](../file/travel.t.html)\[[3970](../source/travel.t.html#3970)\]

<div class="desc">

Add an item to our registered notification list for actions in the room.

Items can be added here if they must be notified of actions performed by
within the room even when the items aren't in the room at the time of
the action. All items connected by containment with the actor performing
an action are automatically notified of the action; only items that must
receive notification even when not connected by containment need to be
registered here.

</div>

<span id="cannotGoShowExits"></span>

`cannotGoShowExits (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3642](../source/travel.t.html#3642)\]

<div class="desc">

Show a list of exits from this room as part of failed travel ("you can't
go that way").

</div>

<span id="cannotGoThatWay"></span>

`cannotGoThatWay ( )`

[travel.t](../file/travel.t.html)\[[4217](../source/travel.t.html#4217)\]

<div class="desc">

Show the default "you can't go that way" message for this location. By
default, we show a generic message, but individual rooms might want to
override this to provide a more specific description of why travel isn't
allowed.

</div>

<span id="cannotGoThatWayInDark"></span>

`cannotGoThatWayInDark ( )`

[travel.t](../file/travel.t.html)\[[4246](../source/travel.t.html#4246)\]

<div class="desc">

Show a version of the "you can't go that way" message for travel while
in the dark. This is called when the actor is in the dark (i.e., there's
no ambient light at the actor) and attempts to travel in a direction
that doesn't allow travel. By default, we show a generic "you can't see
where you're going in the dark" message.

This routine is essentially a replacement for the cannotGoThatWay()
routine that we use when the actor is in the dark.

</div>

<span id="cannotTravel"></span>

`cannotTravel ( )`

[travel.t](../file/travel.t.html)\[[4170](../source/travel.t.html#4170)\]

<div class="desc">

The default "you can't go that way" message for travel within this
location in directions that don't allow travel. This is shown whenever
an actor tries to travel in one of the directions we have set to point
to noTravel. A room can override this to produce a different, customized
message for unset travel directions - this is an easy way to change the
cannot-travel message for several directions at once.

The handling depends on whether or not it's dark. If it's dark, we don't
want to reveal whether or not it's actually possible to perform the
travel, since there's no light to see where the exits are.

</div>

<span id="checkActorOutOfNested"></span>

`checkActorOutOfNested (allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3812](../source/travel.t.html#3812)\]

<div class="desc">

Check, using pre-condition rules, that the actor is removed from this
nested location and moved to its exit destination. By default, we're not
a nested location, so there's nothing for us to do.

</div>

<span id="checkActorReadyToEnterNestedRoom"></span>

`checkActorReadyToEnterNestedRoom (allowImplicit)`

[travel.t](../file/travel.t.html)\[[3785](../source/travel.t.html#3785)\]

<div class="desc">

Check, using pre-condition rules, that the actor is ready to enter this
room as a nested location. By default, we do nothing, since we're not
designed as a nested location.

</div>

<span id="checkMovingActorInto"></span>

`checkMovingActorInto (allowImplicit)`

[travel.t](../file/travel.t.html)\[[3718](../source/travel.t.html#3718)\]

<div class="desc">

Try moving the actor into this location.

</div>

<span id="checkStagingLocation"></span>

`checkStagingLocation (dest)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3710](../source/travel.t.html#3710)\]

<div class="desc">

Check this object as a staging location. We're a valid location, so we
allow this.

</div>

<span id="checkTravelerDirectlyInRoom"></span>

`checkTravelerDirectlyInRoom (traveler, allowImplicit)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3796](../source/travel.t.html#3796)\]

<div class="desc">

Check that the traveler is directly in the given room, using
pre-condition rules. 'nested' is the nested location immediately within
this room that contains the actor (directly or indirectly).

</div>

<span id="disembarkRoom"></span>

`disembarkRoom ( )`

[travel.t](../file/travel.t.html)\[[3846](../source/travel.t.html#3846)\]

<div class="desc">

An actor is attempting to disembark this location. By default, we'll
simply turn this into an "exit" command.

</div>

<span id="dispatchRoomDaemon"></span>

`dispatchRoomDaemon ( )`

[travel.t](../file/travel.t.html)\[[4275](../source/travel.t.html#4275)\]

<div class="desc">

Dispatch the room daemon. This is a daemon routine invoked once per
turn; we in turn invoke roomDaemon on the current player character's
current location.

</div>

<span id="enteringRoom"></span>

`enteringRoom (traveler)`

[travel.t](../file/travel.t.html)\[[3998](../source/travel.t.html#3998)\]

<div class="desc">

Receive notification that a traveler is arriving. This is a convenience
method that rooms can override to carry out side effects of arrival.
This is called just before the room's arrival message (usually the
location description) is displayed, so the method can make any
adjustments to the room's status or contents needed for the arrival. By
default, we do nothing.

</div>

<span id="getDropDestination"></span>

`getDropDestination (objToDrop, path)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3862](../source/travel.t.html#3862)\]

<div class="desc">

The destination for objects explicitly dropped by an actor within this
room. By default, we'll return self, because items dropped should simply
go in the room itself. Some types of rooms will want to override this;
for example, a room that represents the middle of a tightrope would
probably want to set the drop destination to the location below the
tightrope. Likewise, objects like chairs will usually prefer to have
dropped items go into the enclosing room.

</div>

<span id="getExtraScopeItems"></span>

`getExtraScopeItems (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3908](../source/travel.t.html#3908)\]

<div class="desc">

Get any extra items in scope for an actor in this location. These are
items that are to be in scope even if they're not reachable through any
of the normal sense paths (so they'll be in scope even in the dark, for
example).

By default, this returns nothing. Subclasses can override as necessary
to include additional items in scope. For example, a chair would
probably want to include itself in scope, since the actor presumably
knows he or she is sitting in a chair even if it's too dark to see the
chair.

</div>

<span id="getNominalActorContainer"></span>

`getNominalActorContainer (posture)`

[travel.t](../file/travel.t.html)\[[3894](../source/travel.t.html#3894)\]

<div class="desc">

The "nominal actor container" - this is the container which we'll say
actors are in when we describe actors who are actually in this location.
By default, this simply returns self, but it's sometimes useful to
describe actors as being in some object other than self. The most common
case is that normal top-level rooms usually want to describe actors as
being "on the floor" or similar.

</div>

<span id="getNominalDropDestination"></span>

`getNominalDropDestination ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3883](../source/travel.t.html#3883)\]

<div class="desc">

The nominal drop destination - this is the location where objects are
\*reported\* to go when dropped by an actor in this location. By
default, we simply return 'self'.

The difference between the actual drop location and the nominal drop
location is that the nominal drop location is used only for reporting
messages, while the actual drop location is the location where objects
are moved on 'drop' or equivalent actions. Rooms, for example, want to
report that a dropped object lands on the floor (or the ground, or
whatever), even though the room itself is the location where the object
actually ends up. We distinguish between the nominal and actual drop
location to allow these distinctions in reported messages.

</div>

<span id="getRoomNotifyList"></span>

`getRoomNotifyList ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3943](../source/travel.t.html#3943)\]

<div class="desc">

Get my notification list - this is a list of objects on which we must
call beforeAction and afterAction when an action is performed within
this room.

We'll also include any registered notification items for all of our
containing rooms up to the outermost container.

The general notification mechanism always includes in the notification
list all of the objects connected by containment to the actor, so
objects that are in this room need not register for explicit
notification.

</div>

<span id="getStatuslineExitsHeight"></span>

`getStatuslineExitsHeight ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3664](../source/travel.t.html#3664)\]

<div class="desc">

Get the estimated height, in lines of text, of the exits display's
contribution to the status line. This is used to calculate the extra
height we need in the status line, if any, to display the exit list. If
we're not configured to display exits in the status line, this should
return zero.

</div>

<span id="isActorTravelReady"></span>

`isActorTravelReady (conn)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3826](../source/travel.t.html#3826)\]

<div class="desc">

Determine if the current gActor, who is directly in this location, is
"travel ready." This means that the actor is ready, as far as this
location is concerned, to traverse the given connector. By default, we
consider an actor to be travel-ready if the actor is standing; this
takes care of most nested room situations, such as chairs and beds,
automatically.

</div>

<span id="leavingRoom"></span>

`leavingRoom (traveler)`

[travel.t](../file/travel.t.html)\[[4006](../source/travel.t.html#4006)\]

<div class="desc">

Receive notification that a traveler is leaving. This is a convenience
method that rooms can override to carry out side effects of departure.
This is called just after any departure message is displayed. By
default, we do nothing.

</div>

<span id="listWithActorIn"></span>

`listWithActorIn (posture)`

[travel.t](../file/travel.t.html)\[[3484](../source/travel.t.html#3484)\]

<div class="desc">

Get the nested room list grouper for an actor in the given posture
directly in this room. This is used when we're listing the actors within
the nested room as

By default, we maintain a lookup table, and store one nested actor
grouper object for each posture. This makes it so that we show one group
per posture in this room; for example, if we contain two sitting actors
and three standing actors, we'll say something like "bill and bob are
sitting on the stage, and jill, jane, and jack are standing on the
stage." This can be overridden if a different arrangement of groups is
desired; for example, an override could simply return a single grouper
to list everyone in the room together, regardless of posture.

</div>

<span id="makeStandingUp"></span>

`makeStandingUp ( )`

[travel.t](../file/travel.t.html)\[[3681](../source/travel.t.html#3681)\]

<div class="desc">

Make the actor stand up from this location. By default, we'll simply
change the actor's posture to "standing," and show a default success
report.

Subclasses might need to override this. For example, a chair will set
the actor's location to the room containing the chair when the actor
stands up from the chair.

</div>

<span id="removeRoomNotifyItem"></span>

`removeRoomNotifyItem (obj)`

[travel.t](../file/travel.t.html)\[[3976](../source/travel.t.html#3976)\]

<div class="desc">

remove an item from the registered notification list

</div>

<span id="roomActorHereDesc"></span>

`roomActorHereDesc (actor)`

[travel.t](../file/travel.t.html)\[[3557](../source/travel.t.html#3557)\]

<div class="desc">

as part of a room description, mention an actor in this room

</div>

<span id="roomActorPostureDesc"></span>

`roomActorPostureDesc (actor)`

[travel.t](../file/travel.t.html)\[[3598](../source/travel.t.html#3598)\]

<div class="desc">

describe the actor's posture while in this location

</div>

<span id="roomActorStatus"></span>

`roomActorStatus (actor)`

[travel.t](../file/travel.t.html)\[[3595](../source/travel.t.html#3595)\]

<div class="desc">

show the status addendum for an actor in this location

</div>

<span id="roomActorThereDesc"></span>

`roomActorThereDesc (actor)`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3566](../source/travel.t.html#3566)\]

<div class="desc">

Provide a default description for an actor in this location, as seen
from a remote location (i.e., from a separate top-level room that's
linked to our top-level room by a sense connector of some kind). By
default, we'll describe the actor as being in this nested room.

</div>

<span id="roomAfterAction"></span>

`roomAfterAction ( )`

[travel.t](../file/travel.t.html)\[[3926](../source/travel.t.html#3926)\]

<div class="desc">

Receive notification that we've just finished a command within this
location. This is called on the room immediately containing the actor
performing the command, then on the room containing that room, and so on
to the outermost room.

</div>

<span id="roomBeforeAction"></span>

`roomBeforeAction ( )`

[travel.t](../file/travel.t.html)\[[3916](../source/travel.t.html#3916)\]

<div class="desc">

Receive notification that we're about to perform a command within this
location. This is called on the outermost room first, then on the nested
rooms, from the outside in, until reaching the room directly containing
the actor performing the command.

</div>

<span id="roomDarkTravel"></span>

`roomDarkTravel (actor)`

[travel.t](../file/travel.t.html)\[[4199](../source/travel.t.html#4199)\]

<div class="desc">

Receive notification of travel from one dark location to another. This
is called before the actor is moved from the source location, and can
cancel the travel if desired by using 'exit' to terminate the command.

By default, we'll simply display the same handler we do when the player
attempts travel in a direction with no travel possible in the dark
(cannotGoThatWayInDark), and then use 'exit' to cancel the command. This
default behavior provides the player with no mapping information in the
dark, since the same message is generated whether or not travel would be
possible in a given direction were light present.

</div>

<span id="roomDesc"></span>

`roomDesc ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3554](../source/travel.t.html#3554)\]

<div class="desc">

Show our room description: this is the interior description of the room,
for use when the room is viewed by an actor within the room. By default,
we show our ordinary 'desc'.

</div>

<span id="roomListActorPosture"></span>

`roomListActorPosture (actor)`

[travel.t](../file/travel.t.html)\[[3609](../source/travel.t.html#3609)\]

<div class="desc">

describe the actor's posture as part of the EXAMINE description of the
nested room

</div>

<span id="roomOkayPostureChange"></span>

`roomOkayPostureChange (actor)`

[travel.t](../file/travel.t.html)\[[3602](../source/travel.t.html#3602)\]

<div class="desc">

acknowledge a posture change while in this location

</div>

<span id="showStatuslineExits"></span>

`showStatuslineExits ( )`<span class="rem">OVERRIDDEN</span>

[travel.t](../file/travel.t.html)\[[3650](../source/travel.t.html#3650)\]

<div class="desc">

show the exit list in the status line

</div>

<span id="travelerArriving"></span>

`travelerArriving (traveler, origin, connector, backConnector)`

[travel.t](../file/travel.t.html)\[[4036](../source/travel.t.html#4036)\]

<div class="desc">

Receive notification that a traveler is arriving in the room. 'traveler'
is the object actually traveling. In most cases this is simply the
actor; but when the actor is in a vehicle, this is the vehicle instead.

By default, we set each of the "motive" actors to its default posture,
then describe the arrival.

</div>

<span id="travelerLeaving"></span>

`travelerLeaving (traveler, dest, connector)`

[travel.t](../file/travel.t.html)\[[4017](../source/travel.t.html#4017)\]

<div class="desc">

Receive notification that a traveler is about to leave the room.
'traveler' is the object actually traveling. In most cases this is
simply the actor; but when the actor is in a vehicle, this is the
vehicle instead.

By default, we describe the traveler's departure if the traveler's
destination is different from its present location.

</div>

<span id="tryMakingDefaultPosture"></span>

`tryMakingDefaultPosture ( )`

[travel.t](../file/travel.t.html)\[[3701](../source/travel.t.html#3701)\]

<div class="desc">

run the appropriate implied command to achieve our default posture

</div>

<span id="tryMakingTravelReady"></span>

`tryMakingTravelReady (conn)`

[travel.t](../file/travel.t.html)\[[3837](../source/travel.t.html#3837)\]

<div class="desc">

Run an implicit action, if possible, to make the current actor "travel
ready." This will be called if the actor is directly in this location
and isActorTravelReady() returns nil. By default, we try to make the
actor stand up. This should always be paired with isActorTravelReady -
the condition that routine tests should be the condition this routine
tries to bring into effect. If no implicit action is possible, simply
return nil.

</div>

<span id="wouldBeLitFor"></span>

`wouldBeLitFor (actor)`

[travel.t](../file/travel.t.html)\[[3518](../source/travel.t.html#3518)\]

<div class="desc">

Check the ambient illumination level in the room for the given actor's
senses to determine if the actor would be able to see if the actor were
in this room without any additional light sources. Returns true if the
room is lit for the purposes of the actor's visual senses, nil if not.

Note that if the actor is already in this location, there's no need to
run this test, since we could get the information from the actor
directly. The point of this test is to determine the light level in this
location without the actor having to be present.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
