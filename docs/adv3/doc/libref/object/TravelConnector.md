---
---
<span class="title">TravelConnector</span><span class="type">class</span>

[travel.t](../file/travel.t.html)\[[775](../source/travel.t.html#775)\]

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

A Travel Connector is a special connection interface that allows for
travel from one location to another. Most actor movement, except for
movement between locations related by containment (such as from a room
to sitting in a chair within the room) are handled through travel
connector objects.

Travel connectors are used in the directional link properties in rooms -
north, south, east, west, in, out, etc. A room direction link property
is always set to a travel connector - but note that a room is itself a
travel connector, so a travel link in one room can simply be set to
point directly to another room. In many cases, rooms themselves serve as
travel connectors, so that one room can point a direction link property
directly to another room.

Some travel connectors are physical objects in the simulation, such as
doors or stairways; other connectors are just abstract objects that
represent connections, but don't appear as manipulable objects in the
game.

A travel connector provides several types of information about travel
through its connection:

\- For actors actually traveling, the connector provides a method that
moves an actor through the connector. This method can trigger any side
effects of the travel.

\- For automatic map builders, actor scripts, and other callers who want
to learn what can be known about the link without actually traversing
it, the connector provides an "apparent destination" method. This method
returns the destination of travel through the connector that a given
actor would expect just by looking at the connector. The important thing
about this routine is that it doesn't trigger any side effects, but
simply indicates whether travel is apparently possible, and if so what
the destination of the travel would be.

`class `**`TravelConnector`**` :   `[`Thing`](../object/Thing.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TravelConnector`**  
`         `[`Thing`](../object/Thing.html)  
`                 `[`VocabObject`](../object/VocabObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TravelConnector`**  
`         `[`AskConnector`](../object/AskConnector.html)  
`                 `[`DefaultAskConnector`](../object/DefaultAskConnector.html)  
`         `[`Passage`](../object/Passage.html)  
`                 `[`Stairway`](../object/Stairway.html)  
`                         `[`StairwayDown`](../object/StairwayDown.html)  
`                         `[`StairwayUp`](../object/StairwayUp.html)  
`                 `[`ThroughPassage`](../object/ThroughPassage.html)  
`                         `[`BasicDoor`](../object/BasicDoor.html)  
`                                 `[`Door`](../object/Door.html)  
`                                         `[`AutoClosingDoor`](../object/AutoClosingDoor.html)  
`                                 `[`SecretDoor`](../object/SecretDoor.html)  
`                                         `[`HiddenDoor`](../object/HiddenDoor.html)  
`                         `[`ExitOnlyPassage`](../object/ExitOnlyPassage.html)  
`                         `[`PathPassage`](../object/PathPassage.html)  
`         `[`RoomConnector`](../object/RoomConnector.html)  
`                 `[`OneWayRoomConnector`](../object/OneWayRoomConnector.html)  
`                 `[`RoomAutoConnector`](../object/RoomAutoConnector.html)  
`                         `[`Room`](../object/Room.html)  
`                                 `[`DarkRoom`](../object/DarkRoom.html)  
`                                 `[`FloorlessRoom`](../object/FloorlessRoom.html)  
`                                 `[`OutdoorRoom`](../object/OutdoorRoom.html)  
`                                 `[`ShipboardRoom`](../object/ShipboardRoom.html)  
`         `[`TravelMessage`](../object/TravelMessage.html)  
`                 `[`DeadEndConnector`](../object/DeadEndConnector.html)  
`                 `[`NoTravelMessage`](../object/NoTravelMessage.html)  
`                         `[`FakeConnector`](../object/FakeConnector.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`noTravel`](../object/noTravel.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`connectorStagingLocation`](#connectorStagingLocation)`  `[`isCircularPassage`](#isCircularPassage)`  `[`isConnectorListed`](#isConnectorListed)`  `[`rememberCircularPassage`](#rememberCircularPassage)`  `[`travelBarrier`](#travelBarrier)`  `[`travelMemory`](#travelMemory)`  `

Inherited from `Thing` :  
` `[`actorInAName`](../object/Thing.html#actorInAName)`  `[`actorInName`](../object/Thing.html#actorInName)`  `[`actorInPrep`](../object/Thing.html#actorInPrep)`  `[`actorIntoName`](../object/Thing.html#actorIntoName)`  `[`actorOutOfName`](../object/Thing.html#actorOutOfName)`  `[`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep)`  `[`aDisambigName`](../object/Thing.html#aDisambigName)`  `[`allStates`](../object/Thing.html#allStates)`  `[`aName`](../object/Thing.html#aName)`  `[`brightness`](../object/Thing.html#brightness)`  `[`bulk`](../object/Thing.html#bulk)`  `[`canBeHeard`](../object/Thing.html#canBeHeard)`  `[`canBeSeen`](../object/Thing.html#canBeSeen)`  `[`canBeSmelled`](../object/Thing.html#canBeSmelled)`  `[`canBeTouched`](../object/Thing.html#canBeTouched)`  `[`canMatchHer`](../object/Thing.html#canMatchHer)`  `[`canMatchHim`](../object/Thing.html#canMatchHim)`  `[`canMatchIt`](../object/Thing.html#canMatchIt)`  `[`canMatchThem`](../object/Thing.html#canMatchThem)`  `[`circularlyInMessage`](../object/Thing.html#circularlyInMessage)`  `[`collectiveGroup`](../object/Thing.html#collectiveGroup)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListed`](../object/Thing.html#contentsListed)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately)`  `[`contentsLister`](../object/Thing.html#contentsLister)`  `[`descContentsLister`](../object/Thing.html#descContentsLister)`  `[`described`](../object/Thing.html#described)`  `[`disambigEquivName`](../object/Thing.html#disambigEquivName)`  `[`disambigName`](../object/Thing.html#disambigName)`  `[`distantDesc`](../object/Thing.html#distantDesc)`  `[`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc)`  `[`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc)`  `[`distinguishers`](../object/Thing.html#distinguishers)`  `[`dummyName`](../object/Thing.html#dummyName)`  `[`effectiveFollowLocation`](../object/Thing.html#effectiveFollowLocation)`  `[`equivalenceKey`](../object/Thing.html#equivalenceKey)`  `[`equivalentGrouper`](../object/Thing.html#equivalentGrouper)`  `[`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass)`  `[`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable)`  `[`esEndingPat`](../object/Thing.html#esEndingPat)`  `[`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo)`  `[`getState`](../object/Thing.html#getState)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`holdingIndex`](../object/Thing.html#holdingIndex)`  `[`iesEndingPat`](../object/Thing.html#iesEndingPat)`  `[`initDesc`](../object/Thing.html#initDesc)`  `[`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`inlineContentsLister`](../object/Thing.html#inlineContentsLister)`  `[`isEquivalent`](../object/Thing.html#isEquivalent)`  `[`isHer`](../object/Thing.html#isHer)`  `[`isHim`](../object/Thing.html#isHim)`  `[`isInInitState`](../object/Thing.html#isInInitState)`  `[`isKnown`](../object/Thing.html#isKnown)`  `[`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget)`  `[`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle)`  `[`isMassNoun`](../object/Thing.html#isMassNoun)`  `[`isPlural`](../object/Thing.html#isPlural)`  `[`isProperName`](../object/Thing.html#isProperName)`  `[`isQualifiedName`](../object/Thing.html#isQualifiedName)`  `[`isThingConstructed`](../object/Thing.html#isThingConstructed)`  `[`isTopLevel`](../object/Thing.html#isTopLevel)`  `[`listName`](../object/Thing.html#listName)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lookInLister`](../object/Thing.html#lookInLister)`  `[`moved`](../object/Thing.html#moved)`  `[`name`](../object/Thing.html#name)`  `[`nameDoes`](../object/Thing.html#nameDoes)`  `[`nameSays`](../object/Thing.html#nameSays)`  `[`nameSees`](../object/Thing.html#nameSees)`  `[`notTravelReadyMsg`](../object/Thing.html#notTravelReadyMsg)`  `[`objectNotifyList`](../object/Thing.html#objectNotifyList)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc)`  `[`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc)`  `[`owner`](../object/Thing.html#owner)`  `[`patElevenEighteen`](../object/Thing.html#patElevenEighteen)`  `[`patIsAlpha`](../object/Thing.html#patIsAlpha)`  `[`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote)`  `[`patOfPhrase`](../object/Thing.html#patOfPhrase)`  `[`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord)`  `[`patOneLetterWord`](../object/Thing.html#patOneLetterWord)`  `[`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS)`  `[`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar)`  `[`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit)`  `[`patVowelY`](../object/Thing.html#patVowelY)`  `[`pluralDisambigName`](../object/Thing.html#pluralDisambigName)`  `[`pluralName`](../object/Thing.html#pluralName)`  `[`pronounSelector`](../object/Thing.html#pronounSelector)`  `[`roomDarkName`](../object/Thing.html#roomDarkName)`  `[`roomLocation`](../object/Thing.html#roomLocation)`  `[`roomName`](../object/Thing.html#roomName)`  `[`seen`](../object/Thing.html#seen)`  `[`sightPresence`](../object/Thing.html#sightPresence)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`smellPresence`](../object/Thing.html#smellPresence)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundPresence`](../object/Thing.html#soundPresence)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialContentsLister`](../object/Thing.html#specialContentsLister)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialDescOrder`](../object/Thing.html#specialDescOrder)`  `[`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation)`  `[`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen)`  `[`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage)`  `[`theDisambigName`](../object/Thing.html#theDisambigName)`  `[`theName`](../object/Thing.html#theName)`  `[`theNamePossNoun`](../object/Thing.html#theNamePossNoun)`  `[`tmpAmbient_`](../object/Thing.html#tmpAmbient_)`  `[`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_)`  `[`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_)`  `[`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_)`  `[`tmpObstructor_`](../object/Thing.html#tmpObstructor_)`  `[`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_)`  `[`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_)`  `[`tmpTrans_`](../object/Thing.html#tmpTrans_)`  `[`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_)`  `[`touchPresence`](../object/Thing.html#touchPresence)`  `[`touchSize`](../object/Thing.html#touchSize)`  `[`verbCan`](../object/Thing.html#verbCan)`  `[`verbCannot`](../object/Thing.html#verbCannot)`  `[`verbCant`](../object/Thing.html#verbCant)`  `[`verbEndingSD`](../object/Thing.html#verbEndingSD)`  `[`verbEndingSEd`](../object/Thing.html#verbEndingSEd)`  `[`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_)`  `[`verbMust`](../object/Thing.html#verbMust)`  `[`verbToCome`](../object/Thing.html#verbToCome)`  `[`verbToDo`](../object/Thing.html#verbToDo)`  `[`verbToGo`](../object/Thing.html#verbToGo)`  `[`verbToLeave`](../object/Thing.html#verbToLeave)`  `[`verbToSay`](../object/Thing.html#verbToSay)`  `[`verbToSee`](../object/Thing.html#verbToSee)`  `[`verbWill`](../object/Thing.html#verbWill)`  `[`verbWont`](../object/Thing.html#verbWont)`  `[`weight`](../object/Thing.html#weight)`  `

Inherited from `VocabObject` :  
` `[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)`  `[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)`  `[`pluralOrder`](../object/VocabObject.html#pluralOrder)`  `[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)`  `[`vocabWords`](../object/VocabObject.html#vocabWords)`  `[`weakTokens`](../object/VocabObject.html#weakTokens)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`actorTravelPreCond`](#actorTravelPreCond)`  `[`canTravelerPass`](#canTravelerPass)`  `[`checkTravelBarriers`](#checkTravelBarriers)`  `[`connectorBack`](#connectorBack)`  `[`connectorGetConnectorTo`](#connectorGetConnectorTo)`  `[`connectorTravelPreCond`](#connectorTravelPreCond)`  `[`createUnlistedProxy`](#createUnlistedProxy)`  `[`darkTravel`](#darkTravel)`  `[`describeArrival`](#describeArrival)`  `[`describeDeparture`](#describeDeparture)`  `[`describeLocalArrival`](#describeLocalArrival)`  `[`describeLocalDeparture`](#describeLocalDeparture)`  `[`describeRemoteTravel`](#describeRemoteTravel)`  `[`dobjFor(TravelVia)`](#dobjFor(TravelVia))`  `[`explainTravelBarrier`](#explainTravelBarrier)`  `[`fixedSource`](#fixedSource)`  `[`getApparentDestination`](#getApparentDestination)`  `[`getDestination`](#getDestination)`  `[`isConnectorApparent`](#isConnectorApparent)`  `[`isConnectorPassable`](#isConnectorPassable)`  `[`isConnectorVisibleInDark`](#isConnectorVisibleInDark)`  `[`noteTraversal`](#noteTraversal)`  `[`rememberTravel`](#rememberTravel)`  `

Inherited from `Thing` :  
` `[`acceptCommand`](../object/Thing.html#acceptCommand)`  `[`addAllContents`](../object/Thing.html#addAllContents)`  `[`addDirectConnections`](../object/Thing.html#addDirectConnections)`  `[`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem)`  `[`addToContents`](../object/Thing.html#addToContents)`  `[`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable)`  `[`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable)`  `[`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination)`  `[`afterAction`](../object/Thing.html#afterAction)`  `[`afterTravel`](../object/Thing.html#afterTravel)`  `[`allContents`](../object/Thing.html#allContents)`  `[`aNameFrom`](../object/Thing.html#aNameFrom)`  `[`aNameObj`](../object/Thing.html#aNameObj)`  `[`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc)`  `[`announceDefaultObject`](../object/Thing.html#announceDefaultObject)`  `[`appendHeldContents`](../object/Thing.html#appendHeldContents)`  `[`atmosphereList`](../object/Thing.html#atmosphereList)`  `[`baseMoveInto`](../object/Thing.html#baseMoveInto)`  `[`basicExamine`](../object/Thing.html#basicExamine)`  `[`basicExamineFeel`](../object/Thing.html#basicExamineFeel)`  `[`basicExamineListen`](../object/Thing.html#basicExamineListen)`  `[`basicExamineSmell`](../object/Thing.html#basicExamineSmell)`  `[`basicExamineTaste`](../object/Thing.html#basicExamineTaste)`  `[`beforeAction`](../object/Thing.html#beforeAction)`  `[`beforeTravel`](../object/Thing.html#beforeTravel)`  `[`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths)`  `[`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo)`  `[`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo)`  `[`cacheSensePath`](../object/Thing.html#cacheSensePath)`  `[`canBeHeardBy`](../object/Thing.html#canBeHeardBy)`  `[`canBeSeenBy`](../object/Thing.html#canBeSeenBy)`  `[`canBeSensed`](../object/Thing.html#canBeSensed)`  `[`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy)`  `[`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy)`  `[`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed)`  `[`canHear`](../object/Thing.html#canHear)`  `[`canMatchPronounType`](../object/Thing.html#canMatchPronounType)`  `[`canMoveViaPath`](../object/Thing.html#canMoveViaPath)`  `[`cannotGoShowExits`](../object/Thing.html#cannotGoShowExits)`  `[`cannotReachObject`](../object/Thing.html#cannotReachObject)`  `[`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource)`  `[`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource)`  `[`canOwn`](../object/Thing.html#canOwn)`  `[`canSee`](../object/Thing.html#canSee)`  `[`canSmell`](../object/Thing.html#canSmell)`  `[`canThrowViaPath`](../object/Thing.html#canThrowViaPath)`  `[`canTouch`](../object/Thing.html#canTouch)`  `[`canTouchViaPath`](../object/Thing.html#canTouchViaPath)`  `[`checkActorOutOfNested`](../object/Thing.html#checkActorOutOfNested)`  `[`checkBulkChange`](../object/Thing.html#checkBulkChange)`  `[`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin)`  `[`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath)`  `[`checkStagingLocation`](../object/Thing.html#checkStagingLocation)`  `[`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath)`  `[`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath)`  `[`checkTravelerDirectlyInRoom`](../object/Thing.html#checkTravelerDirectlyInRoom)`  `[`childInName`](../object/Thing.html#childInName)`  `[`childInNameGen`](../object/Thing.html#childInNameGen)`  `[`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner)`  `[`childInRemoteName`](../object/Thing.html#childInRemoteName)`  `[`clearSenseInfo`](../object/Thing.html#clearSenseInfo)`  `[`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents)`  `[`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb)`  `[`connectionTable`](../object/Thing.html#connectionTable)`  `[`construct`](../object/Thing.html#construct)`  `[`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn)`  `[`countDisambigName`](../object/Thing.html#countDisambigName)`  `[`countListName`](../object/Thing.html#countListName)`  `[`countName`](../object/Thing.html#countName)`  `[`countNameFrom`](../object/Thing.html#countNameFrom)`  `[`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc)`  `[`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister)`  `[`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc)`  `[`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc)`  `[`desc`](../object/Thing.html#desc)`  `[`directionForConnector`](../object/Thing.html#directionForConnector)`  `[`distantSmellDesc`](../object/Thing.html#distantSmellDesc)`  `[`distantSoundDesc`](../object/Thing.html#distantSoundDesc)`  `[`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))`  `[`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))`  `[`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf))`  `[`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))`  `[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))`  `[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))`  `[`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel))`  `[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))`  `[`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch))`  `[`dobjFor(Take)`](../object/Thing.html#dobjFor(Take))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))`  `[`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague))`  `[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))`  `[`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))`  `[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))`  `[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))`  `[`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff))`  `[`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`examineListContents`](../object/Thing.html#examineListContents)`  `[`examineListContentsWith`](../object/Thing.html#examineListContentsWith)`  `[`examineSpecialContents`](../object/Thing.html#examineSpecialContents)`  `[`examineStatus`](../object/Thing.html#examineStatus)`  `[`failCheck`](../object/Thing.html#failCheck)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`fillMedium`](../object/Thing.html#fillMedium)`  `[`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor)`  `[`findTouchObstructor`](../object/Thing.html#findTouchObstructor)`  `[`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer)`  `[`forEachContainer`](../object/Thing.html#forEachContainer)`  `[`fromPOV`](../object/Thing.html#fromPOV)`  `[`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom)`  `[`getAllPathsTo`](../object/Thing.html#getAllPathsTo)`  `[`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher)`  `[`getBagAffinities`](../object/Thing.html#getBagAffinities)`  `[`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding)`  `[`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher)`  `[`getBulk`](../object/Thing.html#getBulk)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarryingActor`](../object/Thing.html#getCarryingActor)`  `[`getCommonContainer`](../object/Thing.html#getCommonContainer)`  `[`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer)`  `[`getConnectedContainers`](../object/Thing.html#getConnectedContainers)`  `[`getConnectorTo`](../object/Thing.html#getConnectorTo)`  `[`getContentsForExamine`](../object/Thing.html#getContentsForExamine)`  `[`getDestName`](../object/Thing.html#getDestName)`  `[`getDropDestination`](../object/Thing.html#getDropDestination)`  `[`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk)`  `[`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight)`  `[`getExtraScopeItems`](../object/Thing.html#getExtraScopeItems)`  `[`getHitFallDestination`](../object/Thing.html#getHitFallDestination)`  `[`getIdentityObject`](../object/Thing.html#getIdentityObject)`  `[`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher)`  `[`getListedContents`](../object/Thing.html#getListedContents)`  `[`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler)`  `[`getLocTraveler`](../object/Thing.html#getLocTraveler)`  `[`getMovePathTo`](../object/Thing.html#getMovePathTo)`  `[`getNoise`](../object/Thing.html#getNoise)`  `[`getNominalDropDestination`](../object/Thing.html#getNominalDropDestination)`  `[`getNominalOwner`](../object/Thing.html#getNominalOwner)`  `[`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList)`  `[`getOdor`](../object/Thing.html#getOdor)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom)`  `[`getRoomNotifyList`](../object/Thing.html#getRoomNotifyList)`  `[`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation)`  `[`getStateWithInfo`](../object/Thing.html#getStateWithInfo)`  `[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)`  `[`getThrowPathTo`](../object/Thing.html#getThrowPathTo)`  `[`getTouchPathTo`](../object/Thing.html#getTouchPathTo)`  `[`getTravelConnector`](../object/Thing.html#getTravelConnector)`  `[`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo)`  `[`getWeight`](../object/Thing.html#getWeight)`  `[`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup)`  `[`hideFromAll`](../object/Thing.html#hideFromAll)`  `[`hideFromDefault`](../object/Thing.html#hideFromDefault)`  `[`initializeEquivalent`](../object/Thing.html#initializeEquivalent)`  `[`initializeLocation`](../object/Thing.html#initializeLocation)`  `[`initializeThing`](../object/Thing.html#initializeThing)`  `[`inRoomName`](../object/Thing.html#inRoomName)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isActorTravelReady`](../object/Thing.html#isActorTravelReady)`  `[`isComponentOf`](../object/Thing.html#isComponentOf)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isHeldBy`](../object/Thing.html#isHeldBy)`  `[`isIn`](../object/Thing.html#isIn)`  `[`isInFixedIn`](../object/Thing.html#isInFixedIn)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isListedInContents`](../object/Thing.html#isListedInContents)`  `[`isListedInInventory`](../object/Thing.html#isListedInInventory)`  `[`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart)`  `[`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling)`  `[`isNominallyIn`](../object/Thing.html#isNominallyIn)`  `[`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart)`  `[`isOccludedBy`](../object/Thing.html#isOccludedBy)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOwnedBy`](../object/Thing.html#isOwnedBy)`  `[`isShipboard`](../object/Thing.html#isShipboard)`  `[`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent)`  `[`itIs`](../object/Thing.html#itIs)`  `[`itNom`](../object/Thing.html#itNom)`  `[`itObj`](../object/Thing.html#itObj)`  `[`itPossAdj`](../object/Thing.html#itPossAdj)`  `[`itPossNoun`](../object/Thing.html#itPossNoun)`  `[`itVerb`](../object/Thing.html#itVerb)`  `[`listCardinality`](../object/Thing.html#listCardinality)`  `[`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector)`  `[`lookAround`](../object/Thing.html#lookAround)`  `[`lookAroundPov`](../object/Thing.html#lookAroundPov)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents)`  `[`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc)`  `[`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName)`  `[`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense)`  `[`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits)`  `[`lookInDesc`](../object/Thing.html#lookInDesc)`  `[`mainExamine`](../object/Thing.html#mainExamine)`  `[`mainMoveInto`](../object/Thing.html#mainMoveInto)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`meetsObjHeld`](../object/Thing.html#meetsObjHeld)`  `[`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo)`  `[`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel)`  `[`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath)`  `[`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto)`  `[`nameIs`](../object/Thing.html#nameIs)`  `[`nameIsnt`](../object/Thing.html#nameIsnt)`  `[`nameVerb`](../object/Thing.html#nameVerb)`  `[`normalizePath`](../object/Thing.html#normalizePath)`  `[`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc)`  `[`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj)`  `[`noteSeenBy`](../object/Thing.html#noteSeenBy)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifyMoveInto`](../object/Thing.html#notifyMoveInto)`  `[`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath)`  `[`notifyRemove`](../object/Thing.html#notifyRemove)`  `[`obscuredDesc`](../object/Thing.html#obscuredDesc)`  `[`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc)`  `[`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc)`  `[`pluralNameFrom`](../object/Thing.html#pluralNameFrom)`  `[`processThrow`](../object/Thing.html#processThrow)`  `[`propHidesProp`](../object/Thing.html#propHidesProp)`  `[`propWithPresent`](../object/Thing.html#propWithPresent)`  `[`putInName`](../object/Thing.html#putInName)`  `[`receiveDrop`](../object/Thing.html#receiveDrop)`  `[`remoteDesc`](../object/Thing.html#remoteDesc)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister)`  `[`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem)`  `[`restoreLocation`](../object/Thing.html#restoreLocation)`  `[`roomActorThereDesc`](../object/Thing.html#roomActorThereDesc)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomDaemon`](../object/Thing.html#roomDaemon)`  `[`roomDarkDesc`](../object/Thing.html#roomDarkDesc)`  `[`roomDesc`](../object/Thing.html#roomDesc)`  `[`roomFirstDesc`](../object/Thing.html#roomFirstDesc)`  `[`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc)`  `[`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond)`  `[`saveLocation`](../object/Thing.html#saveLocation)`  `[`selectPathTo`](../object/Thing.html#selectPathTo)`  `[`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert)`  `[`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove)`  `[`senseAmbientMax`](../object/Thing.html#senseAmbientMax)`  `[`senseInfoTable`](../object/Thing.html#senseInfoTable)`  `[`senseObj`](../object/Thing.html#senseObj)`  `[`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin)`  `[`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout)`  `[`sensePathToContents`](../object/Thing.html#sensePathToContents)`  `[`sensePathToLoc`](../object/Thing.html#sensePathToLoc)`  `[`sensePresenceList`](../object/Thing.html#sensePresenceList)`  `[`setAllSeenBy`](../object/Thing.html#setAllSeenBy)`  `[`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy)`  `[`setGlobalParamName`](../object/Thing.html#setGlobalParamName)`  `[`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo)`  `[`shineFromWithin`](../object/Thing.html#shineFromWithin)`  `[`shineFromWithout`](../object/Thing.html#shineFromWithout)`  `[`shineOnContents`](../object/Thing.html#shineOnContents)`  `[`shineOnLoc`](../object/Thing.html#shineOnLoc)`  `[`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc)`  `[`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents)`  `[`showInventoryContents`](../object/Thing.html#showInventoryContents)`  `[`showInventoryItem`](../object/Thing.html#showInventoryItem)`  `[`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted)`  `[`showListItem`](../object/Thing.html#showListItem)`  `[`showListItemCounted`](../object/Thing.html#showListItemCounted)`  `[`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen)`  `[`showListItemGen`](../object/Thing.html#showListItemGen)`  `[`showObjectContents`](../object/Thing.html#showObjectContents)`  `[`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc)`  `[`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents)`  `[`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo)`  `[`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo)`  `[`showStatuslineExits`](../object/Thing.html#showStatuslineExits)`  `[`showWornItem`](../object/Thing.html#showWornItem)`  `[`showWornItemCounted`](../object/Thing.html#showWornItemCounted)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellHereDesc`](../object/Thing.html#smellHereDesc)`  `[`soundDesc`](../object/Thing.html#soundDesc)`  `[`soundHereDesc`](../object/Thing.html#soundHereDesc)`  `[`specialDescList`](../object/Thing.html#specialDescList)`  `[`specialPathFrom`](../object/Thing.html#specialPathFrom)`  `[`statusName`](../object/Thing.html#statusName)`  `[`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath)`  `[`superHidesSuper`](../object/Thing.html#superHidesSuper)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`thatNom`](../object/Thing.html#thatNom)`  `[`thatObj`](../object/Thing.html#thatObj)`  `[`theNameFrom`](../object/Thing.html#theNameFrom)`  `[`theNameObj`](../object/Thing.html#theNameObj)`  `[`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc)`  `[`theNameWithOwner`](../object/Thing.html#theNameWithOwner)`  `[`throwTargetCatch`](../object/Thing.html#throwTargetCatch)`  `[`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith)`  `[`throwViaPath`](../object/Thing.html#throwViaPath)`  `[`transmitAmbient`](../object/Thing.html#transmitAmbient)`  `[`transSensingIn`](../object/Thing.html#transSensingIn)`  `[`transSensingOut`](../object/Thing.html#transSensingOut)`  `[`traversePath`](../object/Thing.html#traversePath)`  `[`tryHolding`](../object/Thing.html#tryHolding)`  `[`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor)`  `[`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto)`  `[`useInitDesc`](../object/Thing.html#useInitDesc)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents)`  `[`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom)`  `[`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart)`  `[`verbEndingEs`](../object/Thing.html#verbEndingEs)`  `[`verbEndingIes`](../object/Thing.html#verbEndingIes)`  `[`verbEndingS`](../object/Thing.html#verbEndingS)`  `[`verbToHave`](../object/Thing.html#verbToHave)`  `[`verbWas`](../object/Thing.html#verbWas)`  `[`verifyFollowable`](../object/Thing.html#verifyFollowable)`  `[`verifyInsert`](../object/Thing.html#verifyInsert)`  `[`verifyMoveTo`](../object/Thing.html#verifyMoveTo)`  `[`verifyRemove`](../object/Thing.html#verifyRemove)`  `[`whatIf`](../object/Thing.html#whatIf)`  `[`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy)`  `[`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)`  `

Inherited from `VocabObject` :  
` `[`addToDictionary`](../object/VocabObject.html#addToDictionary)`  `[`expandPronounList`](../object/VocabObject.html#expandPronounList)`  `[`filterResolveList`](../object/VocabObject.html#filterResolveList)`  `[`getFacets`](../object/VocabObject.html#getFacets)`  `[`inheritVocab`](../object/VocabObject.html#inheritVocab)`  `[`initializeVocab`](../object/VocabObject.html#initializeVocab)`  `[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)`  `[`matchName`](../object/VocabObject.html#matchName)`  `[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)`  `[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)`  `[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)`  `[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)`  `[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="connectorStagingLocation"></span>

`connectorStagingLocation`

[travel.t](../file/travel.t.html)\[[815](../source/travel.t.html#815)\]

<div class="desc">

The "staging location" for travel through this connector. By default, if
we have a location, that's our staging location; if we don't have a
location (in which case we probably an outermost room), we don't have a
staging location.

</div>

<span id="isCircularPassage"></span>

`isCircularPassage`

[travel.t](../file/travel.t.html)\[[1218](../source/travel.t.html#1218)\]

<div class="desc">

Is this a "circular" passage? A circular passage is one that explicitly
connects back to its origin, so that traveling through the connector
leaves us where we started. When a passage is marked as circular, we'll
describe travel through the passage exactly as though we had actually
gone somewhere. By default, if traveling through a passage leaves us
where we started, we assume that nothing happened, so we don't describe
any travel.

Circular passages don't often occur in ordinary settings; these are
mostly useful in disorienting environments, such as twisty cave
networks, where a passage between locations can change direction and
even loop back on itself.

</div>

<span id="isConnectorListed"></span>

`isConnectorListed`

[travel.t](../file/travel.t.html)\[[963](../source/travel.t.html#963)\]

<div class="desc">

Is this connector listed? This indicates whether or not the exit is
allowed to be displayed in lists of exits, such as in the status line or
in "you can't go that way" messages. By default, all exits are allowed
to appear in listings.

Note that this indicates if listing is ALLOWED - it doesn't guarantee
that listing actually occurs. A connector can be listed only if this is
true, AND the point-of-view actor for the listing can perceive the exit
(which means that isConnectorApparent must return true, and there must
be sufficient light to see the exit).

</div>

<span id="rememberCircularPassage"></span>

`rememberCircularPassage`

[travel.t](../file/travel.t.html)\[[1227](../source/travel.t.html#1227)\]

<div class="desc">

Should we remember a circular trip through this passage? By default, we
remember the destination of a passage that takes us back to our origin
only if we're explicitly marked as a circular passage; in other cases,
we assume that the travel was blocked somehow instead.

</div>

<span id="travelBarrier"></span>

`travelBarrier`

[travel.t](../file/travel.t.html)\[[852](../source/travel.t.html#852)\]

<div class="desc">

Barrier or barriers to travel. This property can be set to a single
TravelBarrier object or to a list of TravelBarrier objects.
checkTravelBarriers() checks each barrier specified here.

</div>

<span id="travelMemory"></span>

`travelMemory`

[travel.t](../file/travel.t.html)\[[1202](../source/travel.t.html#1202)\]

<div class="desc">

Our "travel memory" table. If this contains a non-nil lookup table
object, we'll store a record of each successful traversal of a travel
connector here - we'll record the destination keyed by the combination
of actor, origin, and connector, so that we can later check to see if
the actor has any memory of where a given connector goes from a given
origin.

We keep this information by default, which is why we statically create
the table here. Keeping this information does involve some overhead, so
some authors might want to get rid of this table (by setting the
property to nil) if the game doesn't make any use of the information.
Note that this table is stored just once, in the TravelConnector class
itself - there's not a separate table per connector.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="actorTravelPreCond"></span>

`actorTravelPreCond (actor)`

[travel.t](../file/travel.t.html)\[[836](../source/travel.t.html#836)\]

<div class="desc">

Get the travel preconditions that this connector requires for travel by
the given actor. In most cases, this won't depend on the actor, but it's
provided as a parameter anyway; in most cases, this will just apply the
conditions that are relevant to actors as travelers.

By default, we require actors to be "travel ready" before traversing a
connector. The exact meaning of "travel ready" is provided by the
actor's immediate location, but it usually simply means that the actor
is standing. This ensures that the actor isn't sitting in a chair or
lying down or something like that. Some connectors might not require
this, so this routine can be overridden per connector.

Note that this will only be called when an actor is the traveler. When a
vehicle or other kind of traveler is doing the travel, this will not be
invoked.

</div>

<span id="canTravelerPass"></span>

`canTravelerPass (traveler)`

[travel.t](../file/travel.t.html)\[[936](../source/travel.t.html#936)\]

<div class="desc">

Check to see if the Traveler object is allowed to travel through this
connector. Returns true if travel is allowed, nil if not.

This is called from checkTravelBarriers() to check any conditions coded
directly into the TravelConnector. By default, we simply return true;
subclasses can override this to apply special conditions.

If an override wants to disallow travel, it should return nil here, and
then provide an override for explainTravelBarrier() to provide a
descriptive message explaining why the travel isn't allowed.

Conditions here serve essentially the same purpose as barrier
conditions. The purpose of providing this additional place for the same
type of conditions is simply to improve the convenience of defining
travel conditions for cases where barriers are unnecessary. The main
benefit of using a barrier is that the same barrier object can be
re-used with multiple connectors, so if the same set of travel
conditions apply to several different connectors, barriers allow the
logic to be defined once in a single barrier object and then re-used
easily in each place it's needed. However, when a particular condition
is needed in only one place, creating a barrier to represent the
condition is a bit verbose; in such cases, the condition can be placed
in this method more conveniently.

</div>

<span id="checkTravelBarriers"></span>

`checkTravelBarriers (dest)`

[travel.t](../file/travel.t.html)\[[858](../source/travel.t.html#858)\]

<div class="desc">

Check barriers. The TravelVia check() routine must call this to enforce
barriers.

</div>

<span id="connectorBack"></span>

`connectorBack (traveler, dest)`

[travel.t](../file/travel.t.html)\[[1400](../source/travel.t.html#1400)\]

<div class="desc">

Find a connector in the destination location that connects back as the
source of travel from the given connector when traversed from the source
location. Returns nil if there is no such connector. This must be called
while the traveler is still in the source location; we'll attempt to
find the connector back to the traveler's current location.

The purpose of this routine is to identify the connector by which the
traveler arrives in the new location. This can be used, for example, to
generate a connector-specific message describing the traveler's
emergence from the connector (so we can say one thing if the traveler
arrives via a door, and another if the traveler arrives by climing up a
ladder).

By default, we'll try to find a travel link in the destination that
links us back to this same connector, in which case we'll return 'self'
as the connector from which the traveler emerges in the new location.
Failing that, we'll look for a travel link whose apparent source is the
origin location.

This should be overridden for any connector with an explicit
complementary connector. For example, it is common to implement a door
using a pair of objects, one representing each side of the door; in such
cases, each door object would simply return its twin here. Note that a
complementary connector doesn't actually have to go anywhere, since it's
still useful to have a connector back simply for describing travelers
arriving on the connector.

This \*must\* be overridden when the destination location doesn't have a
simple connector whose apparent source is this connector, because in
such cases we won't be able to find the reverse connector with our
direction search.

</div>

<span id="connectorGetConnectorTo"></span>

`connectorGetConnectorTo (origin, traveler, dest)`

[travel.t](../file/travel.t.html)\[[1145](../source/travel.t.html#1145)\]

<div class="desc">

Get the travel connector leading to the given destination from the given
origin and for the given travel. Return nil if we don't know a connector
leading there.

By default, we simply return 'self' if our destination is the given
destination, or nil if not.

Some subclasses might encapsulate one or more "secondary" connectors -
that is, the main connector might choose among multiple other
connectors. In these cases, the secondary connectors typically won't be
linked to directions on their own, so the room can't see them directly -
it can only find them through us, since we're effectively a wrapper for
the secondary connectors. In these cases, we won't have any single
destination ourself, so getDestination() will have to return nil. But we
\*can\* work backwards: given a destination, we can find the secondary
connector that points to that destination. That's what this routine is
for.

</div>

<span id="connectorTravelPreCond"></span>

`connectorTravelPreCond ( )`

[travel.t](../file/travel.t.html)\[[780](../source/travel.t.html#780)\]

<div class="desc">

Get any connector-specific pre-conditions for travel via this connector.

</div>

<span id="createUnlistedProxy"></span>

`createUnlistedProxy ( )`

[travel.t](../file/travel.t.html)\[[970](../source/travel.t.html#970)\]

<div class="desc">

Get an unlisted proxy for this connector. This is normally called from
the asExit() macro to set up one room exit direction as an unlisted
synonym for another.

</div>

<span id="darkTravel"></span>

`darkTravel (actor, dest)`

[travel.t](../file/travel.t.html)\[[1541](../source/travel.t.html#1541)\]

<div class="desc">

Handle travel in the dark. Specifically, this is called when an actor
attempts travel from one dark location to another dark location. (We
don't invoke this in any other case: light-to-light, light-to-dark, and
dark-to-light travel are all allowed without any special checks.)

By default, we will prohibit dark-to-dark travel by calling the
location's darkTravel handler. Individual connectors can override this
to allow such travel or apply different handling.

</div>

<span id="describeArrival"></span>

`describeArrival (traveler, origin, dest)`

[travel.t](../file/travel.t.html)\[[1287](../source/travel.t.html#1287)\]

<div class="desc">

Describe an actor's arrival through the connector from the given origin
into the given destination. This description is from the point of view
of another actor in the destination.

Note that this is called on the connector that reverses the travel, NOT
on the connector the actor is actually traversing - that is, 'self' is
the backwards connector, leading from the destination back to the origin
location. So, if we have two sides to a door, and the actor traverses
the first side, this will be called on the second side - the one that
links the destination back to the origin.

</div>

<span id="describeDeparture"></span>

`describeDeparture (traveler, origin, dest)`

[travel.t](../file/travel.t.html)\[[1234](../source/travel.t.html#1234)\]

<div class="desc">

Describe an actor's departure through the connector from the given
origin to the given destination. This description is from the point of
view of another actor in the origin location.

</div>

<span id="describeLocalArrival"></span>

`describeLocalArrival (traveler, origin, dest)`

[travel.t](../file/travel.t.html)\[[1346](../source/travel.t.html#1346)\]

<div class="desc">

Describe a "local arrival" via this connector. This is called when the
traveler moves around entirely within the field of view of the player
character, and comes \*closer\* to the PC - that is, the traveler's
origin is visible to the player character when we arrive in our
destination, AND the destination's top-level location contains the PC.
We'll describe the travel not in terms of truly arriving, since the
traveler was already here to start with, but rather as entering the
destination, but just in terms of moving closer.

</div>

<span id="describeLocalDeparture"></span>

`describeLocalDeparture (traveler, origin, dest)`

[travel.t](../file/travel.t.html)\[[1329](../source/travel.t.html#1329)\]

<div class="desc">

Describe a "local departure" via this connector. This is called when a
traveler moves around entirely within the field of view of the player
character, and move \*further away\* from the PC - that is, the
traveler's destination is visible to the PC when we're leaving our
origin, AND the origin's top-level location contains the PC. We'll
describe the travel not in terms of truly departing, but simply in terms
of moving away.

</div>

<span id="describeRemoteTravel"></span>

`describeRemoteTravel (traveler, origin, dest)`

[travel.t](../file/travel.t.html)\[[1360](../source/travel.t.html#1360)\]

<div class="desc">

Describe "remote travel" via this connector. This is called when the
traveler moves around entirely within the field of view of the PC, but
between two "remote" top-level locations - "remote" means "does not
contain the PC." In this case, the traveler isn't arriving or departing,
exactly; it's just moving laterally from one top-level location to
another.

</div>

<span id="dobjFor(TravelVia)"></span>

`dobjFor(TravelVia)`

[travel.t](../file/travel.t.html)\[[1561](../source/travel.t.html#1561)\]

<div class="desc">

Action handler for the internal "TravelVia" action. This is not a real
action, but is instead a pseudo-action that we implement generically for
travel via the connector. Subclasses that want to handle real actions by
traveling via the connector can use remapTo(TravelVia) to implement the
real action handlers. Note that remapTo should be used (rather than,
say, asDobjFor), since this will ensure that every type of travel
through the connector actually looks like a TravelVia action, which is
useful for intercepting travel actions generically in other code.

</div>

<span id="explainTravelBarrier"></span>

`explainTravelBarrier (traveler)`

[travel.t](../file/travel.t.html)\[[948](../source/travel.t.html#948)\]

<div class="desc">

Explain why canTravelerPass() returned nil. This is called to display an
explanation of why travel is not allowed by self.canTravelerPass().

Since the default canTravelerPass() always allows travel, the default
implementation of this method does nothing. Whenever canTravelerPass()
is overridden to return nil, this should also be overridden to provide
an appropriate explanation.

</div>

<span id="fixedSource"></span>

`fixedSource (dest, traveler)`

[travel.t](../file/travel.t.html)\[[1488](../source/travel.t.html#1488)\]

<div class="desc">

Get the "fixed" source for travelers emerging from this connector, if
possible. This can return nil if the connector does not have a fixed
relationship with another connector.

The purpose of this routine is to find complementary connectors for
simple static map connections. This is especially useful for direct
room-to-room connections.

When a connector relationship other than a simple static mapping exists,
the connectors must generally override connectorBack(), in which case
this routine will not be needed (at least, this routine won't be needed
as long as the overridden connectorBack() doesn't call it). Whenever it
is not clear how to implement this routine, don't - implement
connectorBack() instead.

</div>

<span id="getApparentDestination"></span>

`getApparentDestination (origin, actor)`

[travel.t](../file/travel.t.html)\[[1063](../source/travel.t.html#1063)\]

<div class="desc">

Get the apparent destination of travel by the actor to the given origin.
This returns the location to which the connector travels, AS FAR AS THE
ACTOR KNOWS. If the actor does not know and cannot tell where the
connector leads, this should return nil.

Note that this method does NOT necessarily return the actual
destination, because we obviously can't know the destination for certain
until we traverse the connection. Rather, the point of this routine is
to return as much information as the actor is supposed to have. This can
be used for purposes like auto-mapping, where we'd want to show what the
player character knows of the map, and NPC goal-seeking, where an NPC
tries to figure out how to get from one point to another based on the
NPC's knowledge of the map. In these sorts of applications, it's
important to use only knowledge that the actor is supposed to have
within the parameters of the simulation.

Callers should always test isConnectorApparent() before calling this
routine. This routine does not check to ensure that the connector is
apparent, so it could return misleading information if used
independently of isConnectorApparent(); for example, if the connector
\*formerly\* worked but has now disappeared, and the actor has a memory
of the former destination, we'll return the remembered destination.

The actor can know the destination by a number of means:

1\. The location is familiar to the character. For example, if the
setting is the character's own house, the character would obviously know
the house well, so would know where you'd end up going east from the
living room or south from the kitchen. We use the origin method
actorKnowsDestination() to determine this.

2\. The destination is readily visible from the origin location, or is
clearly marked. For example, in an outdoor setting, it might be clear
that going east from the field takes you to the hilltop. In an indoor
setting, an open passage might make it clear that going east from the
living room takes you to the dining room. We use the origin method
actorKnowsDestination() to determine this.

3\. The actor has been through the connector already in the course of
the game, and so remembers the connection by virtue of recent
experience. If our travelMemory class property is set to a non-nil
lookup table object, then we'll automatically use the lookup table to
remember the destination each time an actor travels via a connector, and
use this information by default to provide apparent destination
information.

</div>

<span id="getDestination"></span>

`getDestination (origin, traveler)`

[travel.t](../file/travel.t.html)\[[1123](../source/travel.t.html#1123)\]

<div class="desc">

Get our destination, given the traveler and the origin location.

This method is required to return the current destination for the
travel. If the connector doesn't go anywhere, this should return nil.
The results of this method must be stable for the extent of a turn, up
until the time travel actually occurs; in other words, it must be
possible to call this routine simply for information purposes, to
determine where the travel will end up.

This method should not trigger any side effects, since it's necessary to
be able to call this method more than once in the course of a given
travel command. If it's necessary to trigger side effects when the
connector is actually traversed, apply the side effects in
noteTraversal().

For auto-mapping and the like, note that getApparentDestination() is a
better choice, since this method has internal information that might not
be apparent to the characters in the game and thus shouldn't be revealed
through something like an auto-map. This method is intended for internal
use in the course of processing a travel action, since it knows the true
destination of the travel.

</div>

<span id="isConnectorApparent"></span>

`isConnectorApparent (origin, actor)`

[travel.t](../file/travel.t.html)\[[987](../source/travel.t.html#987)\]

<div class="desc">

Determine if the travel connection is apparent - as a travel connector -
to the actor in the given origin location. This doesn't indicate whether
or not travel is possible, or where travel goes, or that the actor can
tell where the passage goes; this merely indicates whether or not the
actor should realize that the passage exists at all.

A closed door, for example, would return true, because even a closed
door makes it clear that travel is possible in the direction, even if
it's not possible currently. A secret door, on the other hand, would
return nil while closed, because it would not be apparent to the actor
that the object is a door at all.

</div>

<span id="isConnectorPassable"></span>

`isConnectorPassable (origin, traveler)`

[travel.t](../file/travel.t.html)\[[1007](../source/travel.t.html#1007)\]

<div class="desc">

Determine if the travel connection is passable by the given traveler in
the current state. For example, a door would return true when open, nil
when closed.

This information is intended to help game code probing the structure of
the map. This information is NOT used in actor travel; for actor travel,
we rely on custom checks in the connector's TravelVia handler to enforce
the conditions of travel. Actor travel uses TravelVia customizations
rather than this method because that allows better specificity in
reporting failures. This method lets game code get at the same
information, but in a more coarse-grained fashion.

</div>

<span id="isConnectorVisibleInDark"></span>

`isConnectorVisibleInDark (origin, actor)`

[travel.t](../file/travel.t.html)\[[1507](../source/travel.t.html#1507)\]

<div class="desc">

Can the given actor see this connector in the dark, looking from the
given origin? Returns true if so, nil if not.

This is used to determine if the actor can travel from the given origin
via this connector when the actor (in the origin location) is in
darkness.

By default, we implement the usual convention, which is that travel from
a dark room is possible only when the destination is lit. If we can't
determine our destination, we will assume that the connector is not
visible.

</div>

<span id="noteTraversal"></span>

`noteTraversal (traveler)`

[travel.t](../file/travel.t.html)\[[1160](../source/travel.t.html#1160)\]

<div class="desc">

Note that the connector is being traversed. This is invoked just before
the traveler is moved; this notification is fired after the other
travel-related notifications (beforeTravel, actorTravel,
travelerLeaving). This is a good place to display any special messages
describing what happens during the travel, because any messages
displayed here will come after any messages related to reactions from
other objects.

</div>

<span id="rememberTravel"></span>

`rememberTravel (origin, actor, dest)`

[travel.t](../file/travel.t.html)\[[1173](../source/travel.t.html#1173)\]

<div class="desc">

Service routine: add a memory of a successful traversal of a travel
connector. If we have a travel memory table, we'll add the traversal to
the table, so that we can find it later.

This is called from Traveler.travelerTravelTo() on successful travel.
We're called for each actor participating in the travel.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
