---
layout: docs
---
<span class="title">ComplexContainer</span><span class="type">class</span>

[extras.t](../file/extras.t.html)\[[67](../source/extras.t.html#67)\]

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

A "complex" container is an object that can have multiple kinds of
contents simultaneously. For example, a complex container could act as
both a surface, so that some objects are sitting on top of it, and
simultaneously as a container, with objects inside.

The standard containment model only allows one kind of containment per
container, because the nature of the containment is a feature of the
container itself. The complex container handles multiple simultaneous
containment types by using one or more sub-containers: for example, if
we want to be able to act as both a surface and a regular container, we
use two sub-containers, one of class Surface and one of class Container,
to hold the different types of contents. When we need to perform an
operation specific to a certain containment type, we delegate the
operation to the sub-container of the appropriate type.

Note that the complex container itself treats its direct contents as
components, so any component parts can be made direct contents of the
complex container object.

If you want to include objects in your source code that are initially
located within the component sub-containers, define them as directly
within the ComplexContainer object, but give each one a 'subLocation'
property set to the property of the component sub-container that will
initially contain it. For example, here's how you'd place a blanket
inside a washing machine, and a laundry basket on top of it:

  
+ washingMachine: ComplexContainer 'washing machine' 'washing machine'  
subContainer: ComplexComponent, Container { etc }  
subSurface: ComplexComponent, Surface { etc }  
; \*.  
++ Thing 'big cotton blanket' 'blanket'  
subLocation = &subContainer  
; \*.  
++ Container 'laundry basket' 'laundry basket'  
subLocation = &subSurface  
;

The subLocation setting is only used for initialization, and we
automatically set it to nil right after we use it to set up the initial
location. If you want to move something into one of the sub-containers
on the fly, simply refer to the desired component directly:

pants.moveInto(washingMachine.subContainer);

`class `**`ComplexContainer`**` :   `[`Thing`](../object/Thing.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ComplexContainer`**  
[`Thing`](../object/Thing.html)  
[`VocabObject`](../object/VocabObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`allSubLocations`](#allSubLocations)[`isLocked`](#isLocked)[`isOpen`](#isOpen)[`subContainer`](#subContainer)[`subRear`](#subRear)[`subSurface`](#subSurface)[`subUnderside`](#subUnderside)

Inherited from `Thing` :  
[`actorInAName`](../object/Thing.html#actorInAName)[`actorInName`](../object/Thing.html#actorInName)[`actorInPrep`](../object/Thing.html#actorInPrep)[`actorIntoName`](../object/Thing.html#actorIntoName)[`actorOutOfName`](../object/Thing.html#actorOutOfName)[`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep)[`aDisambigName`](../object/Thing.html#aDisambigName)[`allStates`](../object/Thing.html#allStates)[`aName`](../object/Thing.html#aName)[`brightness`](../object/Thing.html#brightness)[`bulk`](../object/Thing.html#bulk)[`canBeHeard`](../object/Thing.html#canBeHeard)[`canBeSeen`](../object/Thing.html#canBeSeen)[`canBeSmelled`](../object/Thing.html#canBeSmelled)[`canBeTouched`](../object/Thing.html#canBeTouched)[`canMatchHer`](../object/Thing.html#canMatchHer)[`canMatchHim`](../object/Thing.html#canMatchHim)[`canMatchIt`](../object/Thing.html#canMatchIt)[`canMatchThem`](../object/Thing.html#canMatchThem)[`circularlyInMessage`](../object/Thing.html#circularlyInMessage)[`collectiveGroup`](../object/Thing.html#collectiveGroup)[`collectiveGroups`](../object/Thing.html#collectiveGroups)[`contents`](../object/Thing.html#contents)[`contentsListed`](../object/Thing.html#contentsListed)[`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine)[`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately)[`contentsLister`](../object/Thing.html#contentsLister)[`descContentsLister`](../object/Thing.html#descContentsLister)[`described`](../object/Thing.html#described)[`disambigEquivName`](../object/Thing.html#disambigEquivName)[`disambigName`](../object/Thing.html#disambigName)[`distantDesc`](../object/Thing.html#distantDesc)[`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc)[`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc)[`distinguishers`](../object/Thing.html#distinguishers)[`dummyName`](../object/Thing.html#dummyName)[`effectiveFollowLocation`](../object/Thing.html#effectiveFollowLocation)[`equivalenceKey`](../object/Thing.html#equivalenceKey)[`equivalentGrouper`](../object/Thing.html#equivalentGrouper)[`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass)[`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable)[`esEndingPat`](../object/Thing.html#esEndingPat)[`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo)[`getState`](../object/Thing.html#getState)[`globalParamName`](../object/Thing.html#globalParamName)[`holdingIndex`](../object/Thing.html#holdingIndex)[`iesEndingPat`](../object/Thing.html#iesEndingPat)[`initDesc`](../object/Thing.html#initDesc)[`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation)[`initSpecialDesc`](../object/Thing.html#initSpecialDesc)[`inlineContentsLister`](../object/Thing.html#inlineContentsLister)[`isEquivalent`](../object/Thing.html#isEquivalent)[`isHer`](../object/Thing.html#isHer)[`isHim`](../object/Thing.html#isHim)[`isInInitState`](../object/Thing.html#isInInitState)[`isKnown`](../object/Thing.html#isKnown)[`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget)[`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle)[`isMassNoun`](../object/Thing.html#isMassNoun)[`isPlural`](../object/Thing.html#isPlural)[`isProperName`](../object/Thing.html#isProperName)[`isQualifiedName`](../object/Thing.html#isQualifiedName)[`isThingConstructed`](../object/Thing.html#isThingConstructed)[`isTopLevel`](../object/Thing.html#isTopLevel)[`listName`](../object/Thing.html#listName)[`listWith`](../object/Thing.html#listWith)[`location`](../object/Thing.html#location)[`lookInLister`](../object/Thing.html#lookInLister)[`moved`](../object/Thing.html#moved)[`name`](../object/Thing.html#name)[`nameDoes`](../object/Thing.html#nameDoes)[`nameSays`](../object/Thing.html#nameSays)[`nameSees`](../object/Thing.html#nameSees)[`notTravelReadyMsg`](../object/Thing.html#notTravelReadyMsg)[`objectNotifyList`](../object/Thing.html#objectNotifyList)[`objInPrep`](../object/Thing.html#objInPrep)[`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc)[`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc)[`owner`](../object/Thing.html#owner)[`patElevenEighteen`](../object/Thing.html#patElevenEighteen)[`patIsAlpha`](../object/Thing.html#patIsAlpha)[`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote)[`patOfPhrase`](../object/Thing.html#patOfPhrase)[`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord)[`patOneLetterWord`](../object/Thing.html#patOneLetterWord)[`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS)[`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar)[`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit)[`patVowelY`](../object/Thing.html#patVowelY)[`pluralDisambigName`](../object/Thing.html#pluralDisambigName)[`pluralName`](../object/Thing.html#pluralName)[`pronounSelector`](../object/Thing.html#pronounSelector)[`roomDarkName`](../object/Thing.html#roomDarkName)[`roomLocation`](../object/Thing.html#roomLocation)[`roomName`](../object/Thing.html#roomName)[`seen`](../object/Thing.html#seen)[`sightPresence`](../object/Thing.html#sightPresence)[`sightSize`](../object/Thing.html#sightSize)[`smellPresence`](../object/Thing.html#smellPresence)[`smellSize`](../object/Thing.html#smellSize)[`soundPresence`](../object/Thing.html#soundPresence)[`soundSize`](../object/Thing.html#soundSize)[`specialContentsLister`](../object/Thing.html#specialContentsLister)[`specialDesc`](../object/Thing.html#specialDesc)[`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents)[`specialDescListWith`](../object/Thing.html#specialDescListWith)[`specialDescOrder`](../object/Thing.html#specialDescOrder)[`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation)[`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen)[`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage)[`theDisambigName`](../object/Thing.html#theDisambigName)[`theName`](../object/Thing.html#theName)[`theNamePossNoun`](../object/Thing.html#theNamePossNoun)[`tmpAmbient_`](../object/Thing.html#tmpAmbient_)[`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_)[`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_)[`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_)[`tmpObstructor_`](../object/Thing.html#tmpObstructor_)[`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_)[`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_)[`tmpTrans_`](../object/Thing.html#tmpTrans_)[`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_)[`touchPresence`](../object/Thing.html#touchPresence)[`touchSize`](../object/Thing.html#touchSize)[`verbCan`](../object/Thing.html#verbCan)[`verbCannot`](../object/Thing.html#verbCannot)[`verbCant`](../object/Thing.html#verbCant)[`verbEndingSD`](../object/Thing.html#verbEndingSD)[`verbEndingSEd`](../object/Thing.html#verbEndingSEd)[`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_)[`verbMust`](../object/Thing.html#verbMust)[`verbToCome`](../object/Thing.html#verbToCome)[`verbToDo`](../object/Thing.html#verbToDo)[`verbToGo`](../object/Thing.html#verbToGo)[`verbToLeave`](../object/Thing.html#verbToLeave)[`verbToSay`](../object/Thing.html#verbToSay)[`verbToSee`](../object/Thing.html#verbToSee)[`verbWill`](../object/Thing.html#verbWill)[`verbWont`](../object/Thing.html#verbWont)[`weight`](../object/Thing.html#weight)

Inherited from `VocabObject` :  
[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive)[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder)[`pluralOrder`](../object/VocabObject.html#pluralOrder)[`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood)[`vocabWords`](../object/VocabObject.html#vocabWords)[`weakTokens`](../object/VocabObject.html#weakTokens)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addToContents`](#addToContents)[`beforeMovePushable`](#beforeMovePushable)[`dobjFor(Board)`](#dobjFor(Board))[`dobjFor(Close)`](#dobjFor(Close))[`dobjFor(Enter)`](#dobjFor(Enter))[`dobjFor(GetOffOf)`](#dobjFor(GetOffOf))[`dobjFor(GetOutOf)`](#dobjFor(GetOutOf))[`dobjFor(LieOn)`](#dobjFor(LieOn))[`dobjFor(Lock)`](#dobjFor(Lock))[`dobjFor(LockWith)`](#dobjFor(LockWith))[`dobjFor(LookBehind)`](#dobjFor(LookBehind))[`dobjFor(LookIn)`](#dobjFor(LookIn))[`dobjFor(LookUnder)`](#dobjFor(LookUnder))[`dobjFor(Open)`](#dobjFor(Open))[`dobjFor(SitOn)`](#dobjFor(SitOn))[`dobjFor(StandOn)`](#dobjFor(StandOn))[`dobjFor(Unlock)`](#dobjFor(Unlock))[`dobjFor(UnlockWith)`](#dobjFor(UnlockWith))[`examineStatus`](#examineStatus)[`getAllForTakeFrom`](#getAllForTakeFrom)[`getNestedRoomDest`](#getNestedRoomDest)[`getNestedRoomSource`](#getNestedRoomSource)[`iobjFor(PutBehind)`](#iobjFor(PutBehind))[`iobjFor(PutIn)`](#iobjFor(PutIn))[`iobjFor(PutOn)`](#iobjFor(PutOn))[`iobjFor(PutUnder)`](#iobjFor(PutUnder))[`mainMoveInto`](#mainMoveInto)[`makeLocked`](#makeLocked)[`makeOpen`](#makeOpen)[`notifyComponentOfMove`](#notifyComponentOfMove)[`tryMovingObjInto`](#tryMovingObjInto)[`tryPuttingObjInBag`](#tryPuttingObjInBag)

Inherited from `Thing` :  
[`acceptCommand`](../object/Thing.html#acceptCommand)[`addAllContents`](../object/Thing.html#addAllContents)[`addDirectConnections`](../object/Thing.html#addDirectConnections)[`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem)[`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable)[`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable)[`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination)[`afterAction`](../object/Thing.html#afterAction)[`afterTravel`](../object/Thing.html#afterTravel)[`allContents`](../object/Thing.html#allContents)[`aNameFrom`](../object/Thing.html#aNameFrom)[`aNameObj`](../object/Thing.html#aNameObj)[`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc)[`announceDefaultObject`](../object/Thing.html#announceDefaultObject)[`appendHeldContents`](../object/Thing.html#appendHeldContents)[`atmosphereList`](../object/Thing.html#atmosphereList)[`baseMoveInto`](../object/Thing.html#baseMoveInto)[`basicExamine`](../object/Thing.html#basicExamine)[`basicExamineFeel`](../object/Thing.html#basicExamineFeel)[`basicExamineListen`](../object/Thing.html#basicExamineListen)[`basicExamineSmell`](../object/Thing.html#basicExamineSmell)[`basicExamineTaste`](../object/Thing.html#basicExamineTaste)[`beforeAction`](../object/Thing.html#beforeAction)[`beforeTravel`](../object/Thing.html#beforeTravel)[`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths)[`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo)[`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo)[`cacheSensePath`](../object/Thing.html#cacheSensePath)[`canBeHeardBy`](../object/Thing.html#canBeHeardBy)[`canBeSeenBy`](../object/Thing.html#canBeSeenBy)[`canBeSensed`](../object/Thing.html#canBeSensed)[`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy)[`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy)[`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed)[`canHear`](../object/Thing.html#canHear)[`canMatchPronounType`](../object/Thing.html#canMatchPronounType)[`canMoveViaPath`](../object/Thing.html#canMoveViaPath)[`cannotGoShowExits`](../object/Thing.html#cannotGoShowExits)[`cannotReachObject`](../object/Thing.html#cannotReachObject)[`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource)[`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource)[`canOwn`](../object/Thing.html#canOwn)[`canSee`](../object/Thing.html#canSee)[`canSmell`](../object/Thing.html#canSmell)[`canThrowViaPath`](../object/Thing.html#canThrowViaPath)[`canTouch`](../object/Thing.html#canTouch)[`canTouchViaPath`](../object/Thing.html#canTouchViaPath)[`checkActorOutOfNested`](../object/Thing.html#checkActorOutOfNested)[`checkBulkChange`](../object/Thing.html#checkBulkChange)[`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin)[`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath)[`checkStagingLocation`](../object/Thing.html#checkStagingLocation)[`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath)[`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath)[`checkTravelerDirectlyInRoom`](../object/Thing.html#checkTravelerDirectlyInRoom)[`childInName`](../object/Thing.html#childInName)[`childInNameGen`](../object/Thing.html#childInNameGen)[`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner)[`childInRemoteName`](../object/Thing.html#childInRemoteName)[`clearSenseInfo`](../object/Thing.html#clearSenseInfo)[`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents)[`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents)[`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb)[`connectionTable`](../object/Thing.html#connectionTable)[`construct`](../object/Thing.html#construct)[`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn)[`countDisambigName`](../object/Thing.html#countDisambigName)[`countListName`](../object/Thing.html#countListName)[`countName`](../object/Thing.html#countName)[`countNameFrom`](../object/Thing.html#countNameFrom)[`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc)[`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister)[`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc)[`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc)[`desc`](../object/Thing.html#desc)[`directionForConnector`](../object/Thing.html#directionForConnector)[`distantSmellDesc`](../object/Thing.html#distantSmellDesc)[`distantSoundDesc`](../object/Thing.html#distantSoundDesc)[`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout))[`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor))[`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague))[`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo))[`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack))[`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith))[`dobjFor(Break)`](../object/Thing.html#dobjFor(Break))[`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn))[`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith))[`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean))[`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith))[`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb))[`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown))[`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp))[`dobjFor(Consult)`](../object/Thing.html#dobjFor(Consult))[`dobjFor(ConsultAbout)`](../object/Thing.html#dobjFor(ConsultAbout))[`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith))[`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach))[`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom))[`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig))[`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith))[`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff))[`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink))[`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop))[`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat))[`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn))[`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine))[`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish))[`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten))[`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo))[`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel))[`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip))[`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow))[`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo))[`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough))[`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff))[`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver))[`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss))[`dobjFor(Light)`](../object/Thing.html#dobjFor(Light))[`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo))[`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough))[`dobjFor(Move)`](../object/Thing.html#dobjFor(Move))[`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo))[`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith))[`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn))[`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto))[`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour))[`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto))[`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto))[`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull))[`dobjFor(Push)`](../object/Thing.html#dobjFor(Push))[`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel))[`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind))[`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn))[`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn))[`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder))[`dobjFor(Read)`](../object/Thing.html#dobjFor(Read))[`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove))[`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw))[`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith))[`dobjFor(Search)`](../object/Thing.html#dobjFor(Search))[`dobjFor(Set)`](../object/Thing.html#dobjFor(Set))[`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo))[`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo))[`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell))[`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike))[`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch))[`dobjFor(Take)`](../object/Thing.html#dobjFor(Take))[`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom))[`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo))[`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste))[`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout))[`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague))[`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw))[`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt))[`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir))[`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo))[`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn))[`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff))[`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn))[`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo))[`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith))[`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn))[`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn))[`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten))[`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom))[`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug))[`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom))[`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew))[`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith))[`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear))[`examineListContents`](../object/Thing.html#examineListContents)[`examineListContentsWith`](../object/Thing.html#examineListContentsWith)[`examineSpecialContents`](../object/Thing.html#examineSpecialContents)[`failCheck`](../object/Thing.html#failCheck)[`feelDesc`](../object/Thing.html#feelDesc)[`fillMedium`](../object/Thing.html#fillMedium)[`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor)[`findTouchObstructor`](../object/Thing.html#findTouchObstructor)[`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer)[`forEachContainer`](../object/Thing.html#forEachContainer)[`fromPOV`](../object/Thing.html#fromPOV)[`getAllPathsTo`](../object/Thing.html#getAllPathsTo)[`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher)[`getBagAffinities`](../object/Thing.html#getBagAffinities)[`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding)[`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher)[`getBulk`](../object/Thing.html#getBulk)[`getBulkWithin`](../object/Thing.html#getBulkWithin)[`getCarryingActor`](../object/Thing.html#getCarryingActor)[`getCommonContainer`](../object/Thing.html#getCommonContainer)[`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer)[`getConnectedContainers`](../object/Thing.html#getConnectedContainers)[`getConnectorTo`](../object/Thing.html#getConnectorTo)[`getContentsForExamine`](../object/Thing.html#getContentsForExamine)[`getDestName`](../object/Thing.html#getDestName)[`getDropDestination`](../object/Thing.html#getDropDestination)[`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk)[`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight)[`getExtraScopeItems`](../object/Thing.html#getExtraScopeItems)[`getHitFallDestination`](../object/Thing.html#getHitFallDestination)[`getIdentityObject`](../object/Thing.html#getIdentityObject)[`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher)[`getListedContents`](../object/Thing.html#getListedContents)[`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler)[`getLocTraveler`](../object/Thing.html#getLocTraveler)[`getMovePathTo`](../object/Thing.html#getMovePathTo)[`getNoise`](../object/Thing.html#getNoise)[`getNominalDropDestination`](../object/Thing.html#getNominalDropDestination)[`getNominalOwner`](../object/Thing.html#getNominalOwner)[`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList)[`getOdor`](../object/Thing.html#getOdor)[`getOutermostRoom`](../object/Thing.html#getOutermostRoom)[`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom)[`getRoomNotifyList`](../object/Thing.html#getRoomNotifyList)[`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation)[`getStateWithInfo`](../object/Thing.html#getStateWithInfo)[`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight)[`getThrowPathTo`](../object/Thing.html#getThrowPathTo)[`getTouchPathTo`](../object/Thing.html#getTouchPathTo)[`getTravelConnector`](../object/Thing.html#getTravelConnector)[`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo)[`getWeight`](../object/Thing.html#getWeight)[`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup)[`hideFromAll`](../object/Thing.html#hideFromAll)[`hideFromDefault`](../object/Thing.html#hideFromDefault)[`initializeEquivalent`](../object/Thing.html#initializeEquivalent)[`initializeLocation`](../object/Thing.html#initializeLocation)[`initializeThing`](../object/Thing.html#initializeThing)[`inRoomName`](../object/Thing.html#inRoomName)[`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo))[`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith))[`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith))[`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith))[`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith))[`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom))[`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith))[`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo))[`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo))[`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith))[`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith))[`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto))[`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto))[`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto))[`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith))[`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo))[`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom))[`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt))[`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo))[`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith))[`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom))[`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith))[`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom))[`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith))[`isActorTravelReady`](../object/Thing.html#isActorTravelReady)[`isComponentOf`](../object/Thing.html#isComponentOf)[`isDirectlyIn`](../object/Thing.html#isDirectlyIn)[`isHeldBy`](../object/Thing.html#isHeldBy)[`isIn`](../object/Thing.html#isIn)[`isInFixedIn`](../object/Thing.html#isInFixedIn)[`isListed`](../object/Thing.html#isListed)[`isListedInContents`](../object/Thing.html#isListedInContents)[`isListedInInventory`](../object/Thing.html#isListedInInventory)[`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart)[`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling)[`isNominallyIn`](../object/Thing.html#isNominallyIn)[`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart)[`isOccludedBy`](../object/Thing.html#isOccludedBy)[`isOrIsIn`](../object/Thing.html#isOrIsIn)[`isOwnedBy`](../object/Thing.html#isOwnedBy)[`isShipboard`](../object/Thing.html#isShipboard)[`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent)[`itIs`](../object/Thing.html#itIs)[`itNom`](../object/Thing.html#itNom)[`itObj`](../object/Thing.html#itObj)[`itPossAdj`](../object/Thing.html#itPossAdj)[`itPossNoun`](../object/Thing.html#itPossNoun)[`itVerb`](../object/Thing.html#itVerb)[`listCardinality`](../object/Thing.html#listCardinality)[`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector)[`lookAround`](../object/Thing.html#lookAround)[`lookAroundPov`](../object/Thing.html#lookAroundPov)[`lookAroundWithin`](../object/Thing.html#lookAroundWithin)[`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents)[`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc)[`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName)[`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense)[`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits)[`lookInDesc`](../object/Thing.html#lookInDesc)[`mainExamine`](../object/Thing.html#mainExamine)[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)[`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers)[`meetsObjHeld`](../object/Thing.html#meetsObjHeld)[`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo)[`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable)[`moveInto`](../object/Thing.html#moveInto)[`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel)[`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath)[`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto)[`nameIs`](../object/Thing.html#nameIs)[`nameIsnt`](../object/Thing.html#nameIsnt)[`nameVerb`](../object/Thing.html#nameVerb)[`normalizePath`](../object/Thing.html#normalizePath)[`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc)[`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj)[`noteSeenBy`](../object/Thing.html#noteSeenBy)[`notifyInsert`](../object/Thing.html#notifyInsert)[`notifyMoveInto`](../object/Thing.html#notifyMoveInto)[`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath)[`notifyRemove`](../object/Thing.html#notifyRemove)[`obscuredDesc`](../object/Thing.html#obscuredDesc)[`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc)[`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc)[`pluralNameFrom`](../object/Thing.html#pluralNameFrom)[`processThrow`](../object/Thing.html#processThrow)[`propHidesProp`](../object/Thing.html#propHidesProp)[`propWithPresent`](../object/Thing.html#propWithPresent)[`putInName`](../object/Thing.html#putInName)[`receiveDrop`](../object/Thing.html#receiveDrop)[`remoteDesc`](../object/Thing.html#remoteDesc)[`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc)[`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister)[`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc)[`removeFromContents`](../object/Thing.html#removeFromContents)[`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem)[`restoreLocation`](../object/Thing.html#restoreLocation)[`roomActorThereDesc`](../object/Thing.html#roomActorThereDesc)[`roomContentsLister`](../object/Thing.html#roomContentsLister)[`roomDaemon`](../object/Thing.html#roomDaemon)[`roomDarkDesc`](../object/Thing.html#roomDarkDesc)[`roomDesc`](../object/Thing.html#roomDesc)[`roomFirstDesc`](../object/Thing.html#roomFirstDesc)[`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc)[`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond)[`saveLocation`](../object/Thing.html#saveLocation)[`selectPathTo`](../object/Thing.html#selectPathTo)[`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert)[`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove)[`senseAmbientMax`](../object/Thing.html#senseAmbientMax)[`senseInfoTable`](../object/Thing.html#senseInfoTable)[`senseObj`](../object/Thing.html#senseObj)[`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin)[`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout)[`sensePathToContents`](../object/Thing.html#sensePathToContents)[`sensePathToLoc`](../object/Thing.html#sensePathToLoc)[`sensePresenceList`](../object/Thing.html#sensePresenceList)[`setAllSeenBy`](../object/Thing.html#setAllSeenBy)[`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy)[`setGlobalParamName`](../object/Thing.html#setGlobalParamName)[`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo)[`shineFromWithin`](../object/Thing.html#shineFromWithin)[`shineFromWithout`](../object/Thing.html#shineFromWithout)[`shineOnContents`](../object/Thing.html#shineOnContents)[`shineOnLoc`](../object/Thing.html#shineOnLoc)[`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc)[`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents)[`showInventoryContents`](../object/Thing.html#showInventoryContents)[`showInventoryItem`](../object/Thing.html#showInventoryItem)[`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted)[`showListItem`](../object/Thing.html#showListItem)[`showListItemCounted`](../object/Thing.html#showListItemCounted)[`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen)[`showListItemGen`](../object/Thing.html#showListItemGen)[`showObjectContents`](../object/Thing.html#showObjectContents)[`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc)[`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents)[`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc)[`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents)[`showSpecialDesc`](../object/Thing.html#showSpecialDesc)[`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents)[`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo)[`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo)[`showStatuslineExits`](../object/Thing.html#showStatuslineExits)[`showWornItem`](../object/Thing.html#showWornItem)[`showWornItemCounted`](../object/Thing.html#showWornItemCounted)[`smellDesc`](../object/Thing.html#smellDesc)[`smellHereDesc`](../object/Thing.html#smellHereDesc)[`soundDesc`](../object/Thing.html#soundDesc)[`soundHereDesc`](../object/Thing.html#soundHereDesc)[`specialDescList`](../object/Thing.html#specialDescList)[`specialPathFrom`](../object/Thing.html#specialPathFrom)[`statusName`](../object/Thing.html#statusName)[`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath)[`superHidesSuper`](../object/Thing.html#superHidesSuper)[`tasteDesc`](../object/Thing.html#tasteDesc)[`thatNom`](../object/Thing.html#thatNom)[`thatObj`](../object/Thing.html#thatObj)[`theNameFrom`](../object/Thing.html#theNameFrom)[`theNameObj`](../object/Thing.html#theNameObj)[`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc)[`theNameWithOwner`](../object/Thing.html#theNameWithOwner)[`throwTargetCatch`](../object/Thing.html#throwTargetCatch)[`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith)[`throwViaPath`](../object/Thing.html#throwViaPath)[`transmitAmbient`](../object/Thing.html#transmitAmbient)[`transSensingIn`](../object/Thing.html#transSensingIn)[`transSensingOut`](../object/Thing.html#transSensingOut)[`traversePath`](../object/Thing.html#traversePath)[`tryHolding`](../object/Thing.html#tryHolding)[`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor)[`useInitDesc`](../object/Thing.html#useInitDesc)[`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc)[`useSpecialDesc`](../object/Thing.html#useSpecialDesc)[`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents)[`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom)[`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart)[`verbEndingEs`](../object/Thing.html#verbEndingEs)[`verbEndingIes`](../object/Thing.html#verbEndingIes)[`verbEndingS`](../object/Thing.html#verbEndingS)[`verbToHave`](../object/Thing.html#verbToHave)[`verbWas`](../object/Thing.html#verbWas)[`verifyFollowable`](../object/Thing.html#verifyFollowable)[`verifyInsert`](../object/Thing.html#verifyInsert)[`verifyMoveTo`](../object/Thing.html#verifyMoveTo)[`verifyRemove`](../object/Thing.html#verifyRemove)[`whatIf`](../object/Thing.html#whatIf)[`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy)[`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary)[`expandPronounList`](../object/VocabObject.html#expandPronounList)[`filterResolveList`](../object/VocabObject.html#filterResolveList)[`getFacets`](../object/VocabObject.html#getFacets)[`inheritVocab`](../object/VocabObject.html#inheritVocab)[`initializeVocab`](../object/VocabObject.html#initializeVocab)[`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith)[`matchName`](../object/VocabObject.html#matchName)[`matchNameCommon`](../object/VocabObject.html#matchNameCommon)[`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig)[`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation)[`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive)[`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allSubLocations"></span>

`allSubLocations`

[extras.t](../file/extras.t.html)\[[121](../source/extras.t.html#121)\]

<div class="desc">

a list of all of our component objects

</div>

<span id="isLocked"></span>

`isLocked`

[extras.t](../file/extras.t.html)\[[152](../source/extras.t.html#152)\]

<div class="desc">

*no description available*

</div>

<span id="isOpen"></span>

`isOpen`

[extras.t](../file/extras.t.html)\[[151](../source/extras.t.html#151)\]

<div class="desc">

In most cases, the open/closed and locked/unlocked status of a complex
container refer to the status of the sub-container.

</div>

<span id="subContainer"></span>

`subContainer`

[extras.t](../file/extras.t.html)\[[98](../source/extras.t.html#98)\]

<div class="desc">

Our inner container, if any. This is a "secret" object (in other words,
it doesn't appear to players as a separate named object) that we use to
store the contents that are meant to be within the complex container. If
this is to be used, it should be set to a Container object - the most
convenient way to do this is by using the nested object syntax to define
a ComplexComponent Container instance, like so:

washingMachine: ComplexContainer  
subContainer: ComplexComponent, Container { etc }  
;

Note that we use the ComplexComponent class (as well as Container) for
the sub-container object. This makes the sub-container automatically use
the name of its enclosing object in messages (in this case, the
sub-container will use the same name as the washing machine).

Note that the sub-containers don't have to be of class ComplexComponent,
but using that class makes your job a little easier because the class
sets the location and naming automatically. If you prefer to define your
sub-containers as separate objects, not nested in the ComplexContainer's
definition, there's no need to make them ComplexComponents; just make
them ordinary Component objects.

If this property is left as nil, then we don't have an inner container.

</div>

<span id="subRear"></span>

`subRear`

[extras.t](../file/extras.t.html)\[[118](../source/extras.t.html#118)\]

<div class="desc">

Our rear surface or container, if any. This is a secret internal object
like the inner container; this object can act as our back surface, or as
the space just behind us.

</div>

<span id="subSurface"></span>

`subSurface`

[extras.t](../file/extras.t.html)\[[104](../source/extras.t.html#104)\]

<div class="desc">

Our inner surface, if any. This is a secret object like the inner
container; this object acts as our surface.

</div>

<span id="subUnderside"></span>

`subUnderside`

[extras.t](../file/extras.t.html)\[[111](../source/extras.t.html#111)\]

<div class="desc">

Our underside, if any. This is a secret object like the inner container;
this object can act as the space underneath us, or as our bottom
surface.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToContents"></span>

`addToContents (obj)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[324](../source/extras.t.html#324)\]

<div class="desc">

Add an object to my contents. If the object has a subLocation setting,
take it as indicating which of my subcontainers is to contain the
object.

</div>

<span id="beforeMovePushable"></span>

`beforeMovePushable (traveler, connector, dest)`

[extras.t](../file/extras.t.html)\[[389](../source/extras.t.html#389)\]

<div class="desc">

if we're being pushed into a new location (as a PushTraveler), abandon
the contents of any SpaceOverlay components

</div>

<span id="dobjFor(Board)"></span>

`dobjFor(Board)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[209](../source/extras.t.html#209)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Close)"></span>

`dobjFor(Close)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[176](../source/extras.t.html#176)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Enter)"></span>

`dobjFor(Enter)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[211](../source/extras.t.html#211)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(GetOffOf)"></span>

`dobjFor(GetOffOf)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[217](../source/extras.t.html#217)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(GetOutOf)"></span>

`dobjFor(GetOutOf)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[215](../source/extras.t.html#215)\]

<div class="desc">

map GET OUT/OFF to whichever complex component we're currently in

</div>

<span id="dobjFor(LieOn)"></span>

`dobjFor(LieOn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[207](../source/extras.t.html#207)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Lock)"></span>

`dobjFor(Lock)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[180](../source/extras.t.html#180)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LockWith)"></span>

`dobjFor(LockWith)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[181](../source/extras.t.html#181)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LookBehind)"></span>

`dobjFor(LookBehind)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[200](../source/extras.t.html#200)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LookIn)"></span>

`dobjFor(LookIn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[177](../source/extras.t.html#177)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(LookUnder)"></span>

`dobjFor(LookUnder)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[194](../source/extras.t.html#194)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(Open)"></span>

`dobjFor(Open)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[175](../source/extras.t.html#175)\]

<div class="desc">

route all commands that treat us as a container to our sub-container
object

</div>

<span id="dobjFor(SitOn)"></span>

`dobjFor(SitOn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[205](../source/extras.t.html#205)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(StandOn)"></span>

`dobjFor(StandOn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[203](../source/extras.t.html#203)\]

<div class="desc">

route commands relevant to nested rooms to our components

</div>

<span id="dobjFor(Unlock)"></span>

`dobjFor(Unlock)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[183](../source/extras.t.html#183)\]

<div class="desc">

*no description available*

</div>

<span id="dobjFor(UnlockWith)"></span>

`dobjFor(UnlockWith)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[184](../source/extras.t.html#184)\]

<div class="desc">

*no description available*

</div>

<span id="examineStatus"></span>

`examineStatus ( )`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[128](../source/extras.t.html#128)\]

<div class="desc">

Show our status. We'll show the status for each of our sub-objects, so
that we list any contents of our sub-container or sub-surface along with
our description.

</div>

<span id="getAllForTakeFrom"></span>

`getAllForTakeFrom (scopeList)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[284](../source/extras.t.html#284)\]

<div class="desc">

Get a list of objects suitable for matching ALL in TAKE ALL FROM
\<self\>. By default, if we have a sub-surface and/or sub-container, we
return everything in scope that's inside either one of those. Otherwise,
if we have a sub-rear-surface and/or an underside, we'll return
everything from those.

</div>

<span id="getNestedRoomDest"></span>

`getNestedRoomDest (action)`

[extras.t](../file/extras.t.html)\[[243](../source/extras.t.html#243)\]

<div class="desc">

Get the destination for nested travel into this object. By default,
we'll look at the sub-container and sub-surface components to see if
either is a nested room, and if so, we'll return that. The surface takes
priority if both are nested rooms.

You can override this to differentiate by verb, if desired; for example,
you could have SIT ON and LIE ON refer to the sub-surface component,
while ENTER and BOARD refer to the sub-container component.

Note that if you do need to override this method to distinguish between
a sub-container ("IN") and a sub-surface ("ON") for nested room
purposes, there's a subtlety to watch out for. The English library maps
"sit on" and "sit in" to the single Action SitOn; likewise with "lie
in/on" for LieOn and "stand in/on" for StandOn. If you're distinguishing
the sub-container from the sub-surface, you'll probably want to
distinguish SIT IN from SIT ON (and likewise for LIE and STAND).
Fortunately, even though the action class is the same for both
phrasings, you can still find out exactly which preposition the player
typed using action.getEnteredVerbPhrase().

</div>

<span id="getNestedRoomSource"></span>

`getNestedRoomSource (actor)`

[extras.t](../file/extras.t.html)\[[264](../source/extras.t.html#264)\]

<div class="desc">

Get the source for nested travel out of this object. This is used for
GET OUT OF \<self\> - we figure out which nested room component the
actor is in, so that we can remap the command to GET OUT OF \<that
component\>.

</div>

<span id="iobjFor(PutBehind)"></span>

`iobjFor(PutBehind)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[198](../source/extras.t.html#198)\]

<div class="desc">

route commands that affect our rear to our sub-rear-side

</div>

<span id="iobjFor(PutIn)"></span>

`iobjFor(PutIn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[178](../source/extras.t.html#178)\]

<div class="desc">

*no description available*

</div>

<span id="iobjFor(PutOn)"></span>

`iobjFor(PutOn)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[188](../source/extras.t.html#188)\]

<div class="desc">

route commands that treat us as a surface to our sub-surface

</div>

<span id="iobjFor(PutUnder)"></span>

`iobjFor(PutUnder)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[192](../source/extras.t.html#192)\]

<div class="desc">

route commands that affect our underside to our sub-underside

</div>

<span id="mainMoveInto"></span>

`mainMoveInto (newCont)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[370](../source/extras.t.html#370)\]

<div class="desc">

If we have any SpaceOverlay children, abandon the contents of the
overlaid spaces as needed.

</div>

<span id="makeLocked"></span>

`makeLocked (stat)`

[extras.t](../file/extras.t.html)\[[162](../source/extras.t.html#162)\]

<div class="desc">

*no description available*

</div>

<span id="makeOpen"></span>

`makeOpen (stat)`

[extras.t](../file/extras.t.html)\[[154](../source/extras.t.html#154)\]

<div class="desc">

*no description available*

</div>

<span id="notifyComponentOfMove"></span>

`notifyComponentOfMove (sub)`

[extras.t](../file/extras.t.html)\[[410](../source/extras.t.html#410)\]

<div class="desc">

if the given component is a SpaceOverlay, notify it that we're moving,
so that it can abandon its contents as needed

</div>

<span id="tryMovingObjInto"></span>

`tryMovingObjInto (obj)`<span class="rem">OVERRIDDEN</span>

[extras.t](../file/extras.t.html)\[[427](../source/extras.t.html#427)\]

<div class="desc">

pass implicit PUT x IN self operations to our subcontainer

</div>

<span id="tryPuttingObjInBag"></span>

`tryPuttingObjInBag (target)`

[extras.t](../file/extras.t.html)\[[418](../source/extras.t.html#418)\]

<div class="desc">

pass bag-of-holding operations to our sub-container

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
