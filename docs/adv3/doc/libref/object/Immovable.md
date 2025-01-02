<span class="title">Immovable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[1998](../source/objects.t.html#1998)\]

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

An Immovable is an object that can't be moved, but not because it's
obviously a fixture or component of another object. This class is
suitable for things like furniture, which are in principle portable but
which actors aren't actually allowed to pick up or move around.

Note that Immovable is a lot like Fixture. The difference is that
Fixture is for objects that are \*obviously\* fixed in place by their
very nature, whereas Immovable is for objects that common sense would
tell us are portable, but which the game doesn't in fact allow the
player to move.

The practical difference between Immovable and Fixture is that Fixture
considers taking or moving to be illogical actions, whereas Immovable
considers these actions logical but simply doesn't allow them. To be
more specific, Fixture disallows taking and moving in the verify()
methods for those actions, while Immovable disallows the actions in the
check() methods. This means, for example, that Fixture objects will be
removed from consideration during the noun resolution phase when there
are more logical choices.

`class `**`Immovable`**` :   `[`NonPortable`](../object/NonPortable.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Immovable`**  
`         `[`NonPortable`](../object/NonPortable.html)  
`                 `[`Thing`](../object/Thing.html)  
`                         `[`VocabObject`](../object/VocabObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Immovable`**  
`         `[`CustomImmovable`](../object/CustomImmovable.html)  
`         `[`Heavy`](../object/Heavy.html)  
`         `[`TravelPushable`](../object/TravelPushable.html)  
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

` `[`cannotMoveMsg`](#cannotMoveMsg)`  `[`cannotPutMsg`](#cannotPutMsg)`  `[`cannotTakeMsg`](#cannotTakeMsg)`  `

Inherited from `NonPortable` :  
` `[`bulk`](../object/NonPortable.html#bulk)`  `[`contentsListed`](../object/NonPortable.html#contentsListed)`  `[`isListed`](../object/NonPortable.html#isListed)`  `[`isListedInContents`](../object/NonPortable.html#isListedInContents)`  `[`isListedInInventory`](../object/NonPortable.html#isListedInInventory)`  `[`weight`](../object/NonPortable.html#weight)`  `

Inherited from `Thing` :  
` `[`actorInAName`](../object/Thing.html#actorInAName)`  `[`actorInName`](../object/Thing.html#actorInName)`  `[`actorInPrep`](../object/Thing.html#actorInPrep)`  `[`actorIntoName`](../object/Thing.html#actorIntoName)`  `[`actorOutOfName`](../object/Thing.html#actorOutOfName)`  `[`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep)`  `[`aDisambigName`](../object/Thing.html#aDisambigName)`  `[`allStates`](../object/Thing.html#allStates)`  `[`aName`](../object/Thing.html#aName)`  `[`brightness`](../object/Thing.html#brightness)`  `[`canBeHeard`](../object/Thing.html#canBeHeard)`  `[`canBeSeen`](../object/Thing.html#canBeSeen)`  `[`canBeSmelled`](../object/Thing.html#canBeSmelled)`  `[`canBeTouched`](../object/Thing.html#canBeTouched)`  `[`canMatchHer`](../object/Thing.html#canMatchHer)`  `[`canMatchHim`](../object/Thing.html#canMatchHim)`  `[`canMatchIt`](../object/Thing.html#canMatchIt)`  `[`canMatchThem`](../object/Thing.html#canMatchThem)`  `[`circularlyInMessage`](../object/Thing.html#circularlyInMessage)`  `[`collectiveGroup`](../object/Thing.html#collectiveGroup)`  `[`collectiveGroups`](../object/Thing.html#collectiveGroups)`  `[`contents`](../object/Thing.html#contents)`  `[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)`  `[`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately)`  `[`contentsLister`](../object/Thing.html#contentsLister)`  `[`descContentsLister`](../object/Thing.html#descContentsLister)`  `[`described`](../object/Thing.html#described)`  `[`disambigEquivName`](../object/Thing.html#disambigEquivName)`  `[`disambigName`](../object/Thing.html#disambigName)`  `[`distantDesc`](../object/Thing.html#distantDesc)`  `[`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc)`  `[`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc)`  `[`distinguishers`](../object/Thing.html#distinguishers)`  `[`dummyName`](../object/Thing.html#dummyName)`  `[`effectiveFollowLocation`](../object/Thing.html#effectiveFollowLocation)`  `[`equivalenceKey`](../object/Thing.html#equivalenceKey)`  `[`equivalentGrouper`](../object/Thing.html#equivalentGrouper)`  `[`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass)`  `[`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable)`  `[`esEndingPat`](../object/Thing.html#esEndingPat)`  `[`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo)`  `[`getState`](../object/Thing.html#getState)`  `[`globalParamName`](../object/Thing.html#globalParamName)`  `[`holdingIndex`](../object/Thing.html#holdingIndex)`  `[`iesEndingPat`](../object/Thing.html#iesEndingPat)`  `[`initDesc`](../object/Thing.html#initDesc)`  `[`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation)`  `[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)`  `[`inlineContentsLister`](../object/Thing.html#inlineContentsLister)`  `[`isEquivalent`](../object/Thing.html#isEquivalent)`  `[`isHer`](../object/Thing.html#isHer)`  `[`isHim`](../object/Thing.html#isHim)`  `[`isInInitState`](../object/Thing.html#isInInitState)`  `[`isKnown`](../object/Thing.html#isKnown)`  `[`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget)`  `[`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle)`  `[`isMassNoun`](../object/Thing.html#isMassNoun)`  `[`isPlural`](../object/Thing.html#isPlural)`  `[`isProperName`](../object/Thing.html#isProperName)`  `[`isQualifiedName`](../object/Thing.html#isQualifiedName)`  `[`isThingConstructed`](../object/Thing.html#isThingConstructed)`  `[`isTopLevel`](../object/Thing.html#isTopLevel)`  `[`listName`](../object/Thing.html#listName)`  `[`listWith`](../object/Thing.html#listWith)`  `[`location`](../object/Thing.html#location)`  `[`lookInLister`](../object/Thing.html#lookInLister)`  `[`moved`](../object/Thing.html#moved)`  `[`name`](../object/Thing.html#name)`  `[`nameDoes`](../object/Thing.html#nameDoes)`  `[`nameSays`](../object/Thing.html#nameSays)`  `[`nameSees`](../object/Thing.html#nameSees)`  `[`notTravelReadyMsg`](../object/Thing.html#notTravelReadyMsg)`  `[`objectNotifyList`](../object/Thing.html#objectNotifyList)`  `[`objInPrep`](../object/Thing.html#objInPrep)`  `[`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc)`  `[`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc)`  `[`owner`](../object/Thing.html#owner)`  `[`patElevenEighteen`](../object/Thing.html#patElevenEighteen)`  `[`patIsAlpha`](../object/Thing.html#patIsAlpha)`  `[`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote)`  `[`patOfPhrase`](../object/Thing.html#patOfPhrase)`  `[`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord)`  `[`patOneLetterWord`](../object/Thing.html#patOneLetterWord)`  `[`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS)`  `[`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar)`  `[`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit)`  `[`patVowelY`](../object/Thing.html#patVowelY)`  `[`pluralDisambigName`](../object/Thing.html#pluralDisambigName)`  `[`pluralName`](../object/Thing.html#pluralName)`  `[`pronounSelector`](../object/Thing.html#pronounSelector)`  `[`roomDarkName`](../object/Thing.html#roomDarkName)`  `[`roomLocation`](../object/Thing.html#roomLocation)`  `[`roomName`](../object/Thing.html#roomName)`  `[`seen`](../object/Thing.html#seen)`  `[`sightPresence`](../object/Thing.html#sightPresence)`  `[`sightSize`](../object/Thing.html#sightSize)`  `[`smellPresence`](../object/Thing.html#smellPresence)`  `[`smellSize`](../object/Thing.html#smellSize)`  `[`soundPresence`](../object/Thing.html#soundPresence)`  `[`soundSize`](../object/Thing.html#soundSize)`  `[`specialContentsLister`](../object/Thing.html#specialContentsLister)`  `[`specialDesc`](../object/Thing.html#specialDesc)`  `[`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)`  `[`specialDescListWith`](../object/Thing.html#specialDescListWith)`  `[`specialDescOrder`](../object/Thing.html#specialDescOrder)`  `[`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation)`  `[`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen)`  `[`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage)`  `[`theDisambigName`](../object/Thing.html#theDisambigName)`  `[`theName`](../object/Thing.html#theName)`  `[`theNamePossNoun`](../object/Thing.html#theNamePossNoun)`  `[`tmpAmbient_`](../object/Thing.html#tmpAmbient_)`  `[`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_)`  `[`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_)`  `[`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_)`  `[`tmpObstructor_`](../object/Thing.html#tmpObstructor_)`  `[`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_)`  `[`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_)`  `[`tmpTrans_`](../object/Thing.html#tmpTrans_)`  `[`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_)`  `[`touchPresence`](../object/Thing.html#touchPresence)`  `[`touchSize`](../object/Thing.html#touchSize)`  `[`verbCan`](../object/Thing.html#verbCan)`  `[`verbCannot`](../object/Thing.html#verbCannot)`  `[`verbCant`](../object/Thing.html#verbCant)`  `[`verbEndingSD`](../object/Thing.html#verbEndingSD)`  `[`verbEndingSEd`](../object/Thing.html#verbEndingSEd)`  `[`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_)`  `[`verbMust`](../object/Thing.html#verbMust)`  `[`verbToCome`](../object/Thing.html#verbToCome)`  `[`verbToDo`](../object/Thing.html#verbToDo)`  `[`verbToGo`](../object/Thing.html#verbToGo)`  `[`verbToLeave`](../object/Thing.html#verbToLeave)`  `[`verbToSay`](../object/Thing.html#verbToSay)`  `[`verbToSee`](../object/Thing.html#verbToSee)`  `[`verbWill`](../object/Thing.html#verbWill)`  `[`verbWont`](../object/Thing.html#verbWont)`  `

Inherited from `VocabObject` :  
` `[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)`  `[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)`  `[`pluralOrder`](../object/VocabObject.html#pluralOrder)`  `[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)`  `[`vocabWords`](../object/VocabObject.html#vocabWords)`  `[`weakTokens`](../object/VocabObject.html#weakTokens)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`dobjFor(Drop)`](#dobjFor(Drop))`  `[`dobjFor(Move)`](#dobjFor(Move))`  `[`dobjFor(MoveTo)`](#dobjFor(MoveTo))`  `[`dobjFor(MoveWith)`](#dobjFor(MoveWith))`  `[`dobjFor(Pull)`](#dobjFor(Pull))`  `[`dobjFor(Push)`](#dobjFor(Push))`  `[`dobjFor(PushTravel)`](#dobjFor(PushTravel))`  `[`dobjFor(PutBehind)`](#dobjFor(PutBehind))`  `[`dobjFor(PutIn)`](#dobjFor(PutIn))`  `[`dobjFor(PutOn)`](#dobjFor(PutOn))`  `[`dobjFor(PutUnder)`](#dobjFor(PutUnder))`  `[`dobjFor(Take)`](#dobjFor(Take))`  `[`dobjFor(ThrowAt)`](#dobjFor(ThrowAt))`  `[`dobjFor(ThrowDir)`](#dobjFor(ThrowDir))`  `[`dobjFor(Turn)`](#dobjFor(Turn))`  `

Inherited from `NonPortable` :  
` `[`contentsInFixedIn`](../object/NonPortable.html#contentsInFixedIn)`  `[`dobjFor(Examine)`](../object/NonPortable.html#dobjFor(Examine))`  `[`dobjFor(ShowTo)`](../object/NonPortable.html#dobjFor(ShowTo))`  `[`isHeldBy`](../object/NonPortable.html#isHeldBy)`  `[`meetsObjHeld`](../object/NonPortable.html#meetsObjHeld)`  `

Inherited from `Thing` :  
` `[`acceptCommand`](../object/Thing.html#acceptCommand)`  `[`addAllContents`](../object/Thing.html#addAllContents)`  `[`addDirectConnections`](../object/Thing.html#addDirectConnections)`  `[`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem)`  `[`addToContents`](../object/Thing.html#addToContents)`  `[`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable)`  `[`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable)`  `[`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination)`  `[`afterAction`](../object/Thing.html#afterAction)`  `[`afterTravel`](../object/Thing.html#afterTravel)`  `[`allContents`](../object/Thing.html#allContents)`  `[`aNameFrom`](../object/Thing.html#aNameFrom)`  `[`aNameObj`](../object/Thing.html#aNameObj)`  `[`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc)`  `[`announceDefaultObject`](../object/Thing.html#announceDefaultObject)`  `[`appendHeldContents`](../object/Thing.html#appendHeldContents)`  `[`atmosphereList`](../object/Thing.html#atmosphereList)`  `[`baseMoveInto`](../object/Thing.html#baseMoveInto)`  `[`basicExamine`](../object/Thing.html#basicExamine)`  `[`basicExamineFeel`](../object/Thing.html#basicExamineFeel)`  `[`basicExamineListen`](../object/Thing.html#basicExamineListen)`  `[`basicExamineSmell`](../object/Thing.html#basicExamineSmell)`  `[`basicExamineTaste`](../object/Thing.html#basicExamineTaste)`  `[`beforeAction`](../object/Thing.html#beforeAction)`  `[`beforeTravel`](../object/Thing.html#beforeTravel)`  `[`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths)`  `[`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo)`  `[`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo)`  `[`cacheSensePath`](../object/Thing.html#cacheSensePath)`  `[`canBeHeardBy`](../object/Thing.html#canBeHeardBy)`  `[`canBeSeenBy`](../object/Thing.html#canBeSeenBy)`  `[`canBeSensed`](../object/Thing.html#canBeSensed)`  `[`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy)`  `[`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy)`  `[`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed)`  `[`canHear`](../object/Thing.html#canHear)`  `[`canMatchPronounType`](../object/Thing.html#canMatchPronounType)`  `[`canMoveViaPath`](../object/Thing.html#canMoveViaPath)`  `[`cannotGoShowExits`](../object/Thing.html#cannotGoShowExits)`  `[`cannotReachObject`](../object/Thing.html#cannotReachObject)`  `[`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource)`  `[`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource)`  `[`canOwn`](../object/Thing.html#canOwn)`  `[`canSee`](../object/Thing.html#canSee)`  `[`canSmell`](../object/Thing.html#canSmell)`  `[`canThrowViaPath`](../object/Thing.html#canThrowViaPath)`  `[`canTouch`](../object/Thing.html#canTouch)`  `[`canTouchViaPath`](../object/Thing.html#canTouchViaPath)`  `[`checkActorOutOfNested`](../object/Thing.html#checkActorOutOfNested)`  `[`checkBulkChange`](../object/Thing.html#checkBulkChange)`  `[`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin)`  `[`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath)`  `[`checkStagingLocation`](../object/Thing.html#checkStagingLocation)`  `[`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath)`  `[`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath)`  `[`checkTravelerDirectlyInRoom`](../object/Thing.html#checkTravelerDirectlyInRoom)`  `[`childInName`](../object/Thing.html#childInName)`  `[`childInNameGen`](../object/Thing.html#childInNameGen)`  `[`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner)`  `[`childInRemoteName`](../object/Thing.html#childInRemoteName)`  `[`clearSenseInfo`](../object/Thing.html#clearSenseInfo)`  `[`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents)`  `[`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents)`  `[`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb)`  `[`connectionTable`](../object/Thing.html#connectionTable)`  `[`construct`](../object/Thing.html#construct)`  `[`countDisambigName`](../object/Thing.html#countDisambigName)`  `[`countListName`](../object/Thing.html#countListName)`  `[`countName`](../object/Thing.html#countName)`  `[`countNameFrom`](../object/Thing.html#countNameFrom)`  `[`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc)`  `[`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister)`  `[`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc)`  `[`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc)`  `[`desc`](../object/Thing.html#desc)`  `[`directionForConnector`](../object/Thing.html#directionForConnector)`  `[`distantSmellDesc`](../object/Thing.html#distantSmellDesc)`  `[`distantSoundDesc`](../object/Thing.html#distantSoundDesc)`  `[`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))`  `[`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))`  `[`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague))`  `[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))`  `[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))`  `[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))`  `[`dobjFor(Board)`](../object/Thing.html#dobjFor(Board))`  `[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))`  `[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))`  `[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))`  `[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))`  `[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))`  `[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))`  `[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))`  `[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))`  `[`dobjFor(Close)`](../object/Thing.html#dobjFor(Close))`  `[`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult))`  `[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))`  `[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))`  `[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))`  `[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))`  `[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))`  `[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))`  `[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))`  `[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))`  `[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))`  `[`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter))`  `[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))`  `[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))`  `[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))`  `[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))`  `[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))`  `[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))`  `[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))`  `[`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf))`  `[`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf))`  `[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))`  `[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))`  `[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))`  `[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))`  `[`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))`  `[`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn))`  `[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))`  `[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))`  `[`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock))`  `[`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith))`  `[`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind))`  `[`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn))`  `[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))`  `[`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder))`  `[`dobjFor(Open)`](../object/Thing.html#dobjFor(Open))`  `[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))`  `[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))`  `[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))`  `[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))`  `[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))`  `[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))`  `[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))`  `[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))`  `[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))`  `[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))`  `[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))`  `[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))`  `[`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn))`  `[`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell))`  `[`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn))`  `[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))`  `[`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch))`  `[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))`  `[`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))`  `[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))`  `[`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))`  `[`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague))`  `[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))`  `[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))`  `[`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff))`  `[`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn))`  `[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))`  `[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))`  `[`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn))`  `[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))`  `[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))`  `[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))`  `[`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock))`  `[`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith))`  `[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))`  `[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))`  `[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))`  `[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))`  `[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))`  `[`examineListContents`](../object/Thing.html#examineListContents)`  `[`examineListContentsWith`](../object/Thing.html#examineListContentsWith)`  `[`examineSpecialContents`](../object/Thing.html#examineSpecialContents)`  `[`examineStatus`](../object/Thing.html#examineStatus)`  `[`failCheck`](../object/Thing.html#failCheck)`  `[`feelDesc`](../object/Thing.html#feelDesc)`  `[`fillMedium`](../object/Thing.html#fillMedium)`  `[`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor)`  `[`findTouchObstructor`](../object/Thing.html#findTouchObstructor)`  `[`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer)`  `[`forEachContainer`](../object/Thing.html#forEachContainer)`  `[`fromPOV`](../object/Thing.html#fromPOV)`  `[`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom)`  `[`getAllPathsTo`](../object/Thing.html#getAllPathsTo)`  `[`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher)`  `[`getBagAffinities`](../object/Thing.html#getBagAffinities)`  `[`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding)`  `[`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher)`  `[`getBulk`](../object/Thing.html#getBulk)`  `[`getBulkWithin`](../object/Thing.html#getBulkWithin)`  `[`getCarryingActor`](../object/Thing.html#getCarryingActor)`  `[`getCommonContainer`](../object/Thing.html#getCommonContainer)`  `[`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer)`  `[`getConnectedContainers`](../object/Thing.html#getConnectedContainers)`  `[`getConnectorTo`](../object/Thing.html#getConnectorTo)`  `[`getContentsForExamine`](../object/Thing.html#getContentsForExamine)`  `[`getDestName`](../object/Thing.html#getDestName)`  `[`getDropDestination`](../object/Thing.html#getDropDestination)`  `[`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk)`  `[`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight)`  `[`getExtraScopeItems`](../object/Thing.html#getExtraScopeItems)`  `[`getHitFallDestination`](../object/Thing.html#getHitFallDestination)`  `[`getIdentityObject`](../object/Thing.html#getIdentityObject)`  `[`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher)`  `[`getListedContents`](../object/Thing.html#getListedContents)`  `[`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler)`  `[`getLocTraveler`](../object/Thing.html#getLocTraveler)`  `[`getMovePathTo`](../object/Thing.html#getMovePathTo)`  `[`getNoise`](../object/Thing.html#getNoise)`  `[`getNominalDropDestination`](../object/Thing.html#getNominalDropDestination)`  `[`getNominalOwner`](../object/Thing.html#getNominalOwner)`  `[`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList)`  `[`getOdor`](../object/Thing.html#getOdor)`  `[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)`  `[`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom)`  `[`getRoomNotifyList`](../object/Thing.html#getRoomNotifyList)`  `[`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation)`  `[`getStateWithInfo`](../object/Thing.html#getStateWithInfo)`  `[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)`  `[`getThrowPathTo`](../object/Thing.html#getThrowPathTo)`  `[`getTouchPathTo`](../object/Thing.html#getTouchPathTo)`  `[`getTravelConnector`](../object/Thing.html#getTravelConnector)`  `[`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo)`  `[`getWeight`](../object/Thing.html#getWeight)`  `[`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup)`  `[`hideFromAll`](../object/Thing.html#hideFromAll)`  `[`hideFromDefault`](../object/Thing.html#hideFromDefault)`  `[`initializeEquivalent`](../object/Thing.html#initializeEquivalent)`  `[`initializeLocation`](../object/Thing.html#initializeLocation)`  `[`initializeThing`](../object/Thing.html#initializeThing)`  `[`inRoomName`](../object/Thing.html#inRoomName)`  `[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))`  `[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))`  `[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))`  `[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))`  `[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))`  `[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))`  `[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))`  `[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))`  `[`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))`  `[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))`  `[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))`  `[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))`  `[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))`  `[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))`  `[`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind))`  `[`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn))`  `[`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn))`  `[`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder))`  `[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))`  `[`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))`  `[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))`  `[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))`  `[`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))`  `[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))`  `[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))`  `[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))`  `[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))`  `[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))`  `[`isActorTravelReady`](../object/Thing.html#isActorTravelReady)`  `[`isComponentOf`](../object/Thing.html#isComponentOf)`  `[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)`  `[`isIn`](../object/Thing.html#isIn)`  `[`isInFixedIn`](../object/Thing.html#isInFixedIn)`  `[`isListed`](../object/Thing.html#isListed)`  `[`isListedInContents`](../object/Thing.html#isListedInContents)`  `[`isListedInInventory`](../object/Thing.html#isListedInInventory)`  `[`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart)`  `[`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling)`  `[`isNominallyIn`](../object/Thing.html#isNominallyIn)`  `[`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart)`  `[`isOccludedBy`](../object/Thing.html#isOccludedBy)`  `[`isOrIsIn`](../object/Thing.html#isOrIsIn)`  `[`isOwnedBy`](../object/Thing.html#isOwnedBy)`  `[`isShipboard`](../object/Thing.html#isShipboard)`  `[`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent)`  `[`itIs`](../object/Thing.html#itIs)`  `[`itNom`](../object/Thing.html#itNom)`  `[`itObj`](../object/Thing.html#itObj)`  `[`itPossAdj`](../object/Thing.html#itPossAdj)`  `[`itPossNoun`](../object/Thing.html#itPossNoun)`  `[`itVerb`](../object/Thing.html#itVerb)`  `[`listCardinality`](../object/Thing.html#listCardinality)`  `[`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector)`  `[`lookAround`](../object/Thing.html#lookAround)`  `[`lookAroundPov`](../object/Thing.html#lookAroundPov)`  `[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)`  `[`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents)`  `[`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc)`  `[`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName)`  `[`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense)`  `[`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits)`  `[`lookInDesc`](../object/Thing.html#lookInDesc)`  `[`mainExamine`](../object/Thing.html#mainExamine)`  `[`mainMoveInto`](../object/Thing.html#mainMoveInto)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)`  `[`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo)`  `[`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable)`  `[`moveInto`](../object/Thing.html#moveInto)`  `[`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel)`  `[`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath)`  `[`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto)`  `[`nameIs`](../object/Thing.html#nameIs)`  `[`nameIsnt`](../object/Thing.html#nameIsnt)`  `[`nameVerb`](../object/Thing.html#nameVerb)`  `[`normalizePath`](../object/Thing.html#normalizePath)`  `[`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc)`  `[`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj)`  `[`noteSeenBy`](../object/Thing.html#noteSeenBy)`  `[`notifyInsert`](../object/Thing.html#notifyInsert)`  `[`notifyMoveInto`](../object/Thing.html#notifyMoveInto)`  `[`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath)`  `[`notifyRemove`](../object/Thing.html#notifyRemove)`  `[`obscuredDesc`](../object/Thing.html#obscuredDesc)`  `[`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc)`  `[`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc)`  `[`pluralNameFrom`](../object/Thing.html#pluralNameFrom)`  `[`processThrow`](../object/Thing.html#processThrow)`  `[`propHidesProp`](../object/Thing.html#propHidesProp)`  `[`propWithPresent`](../object/Thing.html#propWithPresent)`  `[`putInName`](../object/Thing.html#putInName)`  `[`receiveDrop`](../object/Thing.html#receiveDrop)`  `[`remoteDesc`](../object/Thing.html#remoteDesc)`  `[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)`  `[`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister)`  `[`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)`  `[`removeFromContents`](../object/Thing.html#removeFromContents)`  `[`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem)`  `[`restoreLocation`](../object/Thing.html#restoreLocation)`  `[`roomActorThereDesc`](../object/Thing.html#roomActorThereDesc)`  `[`roomContentsLister`](../object/Thing.html#roomContentsLister)`  `[`roomDaemon`](../object/Thing.html#roomDaemon)`  `[`roomDarkDesc`](../object/Thing.html#roomDarkDesc)`  `[`roomDesc`](../object/Thing.html#roomDesc)`  `[`roomFirstDesc`](../object/Thing.html#roomFirstDesc)`  `[`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc)`  `[`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond)`  `[`saveLocation`](../object/Thing.html#saveLocation)`  `[`selectPathTo`](../object/Thing.html#selectPathTo)`  `[`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert)`  `[`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove)`  `[`senseAmbientMax`](../object/Thing.html#senseAmbientMax)`  `[`senseInfoTable`](../object/Thing.html#senseInfoTable)`  `[`senseObj`](../object/Thing.html#senseObj)`  `[`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin)`  `[`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout)`  `[`sensePathToContents`](../object/Thing.html#sensePathToContents)`  `[`sensePathToLoc`](../object/Thing.html#sensePathToLoc)`  `[`sensePresenceList`](../object/Thing.html#sensePresenceList)`  `[`setAllSeenBy`](../object/Thing.html#setAllSeenBy)`  `[`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy)`  `[`setGlobalParamName`](../object/Thing.html#setGlobalParamName)`  `[`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo)`  `[`shineFromWithin`](../object/Thing.html#shineFromWithin)`  `[`shineFromWithout`](../object/Thing.html#shineFromWithout)`  `[`shineOnContents`](../object/Thing.html#shineOnContents)`  `[`shineOnLoc`](../object/Thing.html#shineOnLoc)`  `[`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc)`  `[`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents)`  `[`showInventoryContents`](../object/Thing.html#showInventoryContents)`  `[`showInventoryItem`](../object/Thing.html#showInventoryItem)`  `[`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted)`  `[`showListItem`](../object/Thing.html#showListItem)`  `[`showListItemCounted`](../object/Thing.html#showListItemCounted)`  `[`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen)`  `[`showListItemGen`](../object/Thing.html#showListItemGen)`  `[`showObjectContents`](../object/Thing.html#showObjectContents)`  `[`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc)`  `[`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents)`  `[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)`  `[`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents)`  `[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)`  `[`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents)`  `[`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo)`  `[`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo)`  `[`showStatuslineExits`](../object/Thing.html#showStatuslineExits)`  `[`showWornItem`](../object/Thing.html#showWornItem)`  `[`showWornItemCounted`](../object/Thing.html#showWornItemCounted)`  `[`smellDesc`](../object/Thing.html#smellDesc)`  `[`smellHereDesc`](../object/Thing.html#smellHereDesc)`  `[`soundDesc`](../object/Thing.html#soundDesc)`  `[`soundHereDesc`](../object/Thing.html#soundHereDesc)`  `[`specialDescList`](../object/Thing.html#specialDescList)`  `[`specialPathFrom`](../object/Thing.html#specialPathFrom)`  `[`statusName`](../object/Thing.html#statusName)`  `[`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath)`  `[`superHidesSuper`](../object/Thing.html#superHidesSuper)`  `[`tasteDesc`](../object/Thing.html#tasteDesc)`  `[`thatNom`](../object/Thing.html#thatNom)`  `[`thatObj`](../object/Thing.html#thatObj)`  `[`theNameFrom`](../object/Thing.html#theNameFrom)`  `[`theNameObj`](../object/Thing.html#theNameObj)`  `[`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc)`  `[`theNameWithOwner`](../object/Thing.html#theNameWithOwner)`  `[`throwTargetCatch`](../object/Thing.html#throwTargetCatch)`  `[`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith)`  `[`throwViaPath`](../object/Thing.html#throwViaPath)`  `[`transmitAmbient`](../object/Thing.html#transmitAmbient)`  `[`transSensingIn`](../object/Thing.html#transSensingIn)`  `[`transSensingOut`](../object/Thing.html#transSensingOut)`  `[`traversePath`](../object/Thing.html#traversePath)`  `[`tryHolding`](../object/Thing.html#tryHolding)`  `[`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor)`  `[`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto)`  `[`useInitDesc`](../object/Thing.html#useInitDesc)`  `[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)`  `[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)`  `[`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents)`  `[`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom)`  `[`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart)`  `[`verbEndingEs`](../object/Thing.html#verbEndingEs)`  `[`verbEndingIes`](../object/Thing.html#verbEndingIes)`  `[`verbEndingS`](../object/Thing.html#verbEndingS)`  `[`verbToHave`](../object/Thing.html#verbToHave)`  `[`verbWas`](../object/Thing.html#verbWas)`  `[`verifyFollowable`](../object/Thing.html#verifyFollowable)`  `[`verifyInsert`](../object/Thing.html#verifyInsert)`  `[`verifyMoveTo`](../object/Thing.html#verifyMoveTo)`  `[`verifyRemove`](../object/Thing.html#verifyRemove)`  `[`whatIf`](../object/Thing.html#whatIf)`  `[`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy)`  `[`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)`  `

Inherited from `VocabObject` :  
` `[`addToDictionary`](../object/VocabObject.html#addToDictionary)`  `[`expandPronounList`](../object/VocabObject.html#expandPronounList)`  `[`filterResolveList`](../object/VocabObject.html#filterResolveList)`  `[`getFacets`](../object/VocabObject.html#getFacets)`  `[`inheritVocab`](../object/VocabObject.html#inheritVocab)`  `[`initializeVocab`](../object/VocabObject.html#initializeVocab)`  `[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)`  `[`matchName`](../object/VocabObject.html#matchName)`  `[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)`  `[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)`  `[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)`  `[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)`  `[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cannotMoveMsg"></span>

`cannotMoveMsg`

[objects.t](../file/objects.t.html)\[[2030](../source/objects.t.html#2030)\]

<div class="desc">

*no description available*

</div>

<span id="cannotPutMsg"></span>

`cannotPutMsg`

[objects.t](../file/objects.t.html)\[[2031](../source/objects.t.html#2031)\]

<div class="desc">

*no description available*

</div>

<span id="cannotTakeMsg"></span>

`cannotTakeMsg`

[objects.t](../file/objects.t.html)\[[2029](../source/objects.t.html#2029)\]

<div class="desc">

The messages to use for the failure messages. These can be overridden
with new properties (of playerActionMessages and the like), or simply
with single-quoted strings to display.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="dobjFor(Drop)"></span>

`dobjFor(Drop)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2009](../source/objects.t.html#2009)\]

<div class="desc">

Immovables can't be pushed, pulled, or otherwise moved

</div>

<span id="dobjFor(Move)"></span>

`dobjFor(Move)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2012](../source/objects.t.html#2012)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(MoveTo)"></span>

`dobjFor(MoveTo)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2014](../source/objects.t.html#2014)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(MoveWith)"></span>

`dobjFor(MoveWith)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2013](../source/objects.t.html#2013)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Pull)"></span>

`dobjFor(Pull)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2011](../source/objects.t.html#2011)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Push)"></span>

`dobjFor(Push)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2010](../source/objects.t.html#2010)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PushTravel)"></span>

`dobjFor(PushTravel)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2015](../source/objects.t.html#2015)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PutBehind)"></span>

`dobjFor(PutBehind)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2006](../source/objects.t.html#2006)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PutIn)"></span>

`dobjFor(PutIn)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2003](../source/objects.t.html#2003)\]

<div class="desc">

Immovables can't be put anywhere

</div>

<span id="dobjFor(PutOn)"></span>

`dobjFor(PutOn)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2004](../source/objects.t.html#2004)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(PutUnder)"></span>

`dobjFor(PutUnder)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2005](../source/objects.t.html#2005)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Take)"></span>

`dobjFor(Take)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2000](../source/objects.t.html#2000)\]

<div class="desc">

an Immovable can't be taken

</div>

<span id="dobjFor(ThrowAt)"></span>

`dobjFor(ThrowAt)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2016](../source/objects.t.html#2016)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(ThrowDir)"></span>

`dobjFor(ThrowDir)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2017](../source/objects.t.html#2017)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Turn)"></span>

`dobjFor(Turn)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[2018](../source/objects.t.html#2018)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>