---
layout: docs
---
<span class="title">Consultable</span><span class="type">class</span>

[objects.t](../file/objects.t.html)\[[1557](../source/objects.t.html#1557)\]

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



A "consultable" object. This is an inanimate object that can be
consulted about various topics, almost the way an actor can be asked
about topics. Examples include individual objects that contain
voluminous information, such as books, phone directories, and maps, as
well as collections of individual information-carrying objects, such as
file cabinets or bookcases.

A consultable keeps a database of TopicEntry objects; this works in much
the same way as the topic database system that actors use. Create one or
more ConsultTopic objects and place them inside the Consultable (using
the 'location' property, or using the '+' syntax). When an actor
consults the object about a topic, we'll search our database for a
ConsultTopic object that matches the topic and is currently active, and
show the response for the best one we can find.

From an IF design perspective, consultables have two nice properties.

First, they hide the boundaries of implementation, by letting the game
\*suggest\* that there's an untold wealth of information in a particular
book (or whatever) without the need to actually implement all of it. We
only have to show the entries the player specifically asks for, so the
game never has to admit when it's run out of things to show, and the
player can never know for sure that there's not more to find. Be
careful, though, because this is a double-edge sword, design-wise; it's
easy to abuse this property to hide information gratuitously from the
player.

Second, consultables help "match impedances" between the narrative level
of detail and the underlying world model. At the narrative level, we
paint in fairly broad strokes: when we visit a new location, we describe
the \*important\* features of the setting, not every last detail. If the
player wants to examine something in closer detail, we zoom in on that
detail, assuming we've implemented it, but it's up to the player to
determine where the attention is focused. Consultable objects give us
the same capability for books and the like. With a consultable, we can
describe the way a book looks without immediately dumping the literal
contents of the book onto the screen; but when the player chooses some
aspect of the book to read in detail, we can zoom in on that page or
chapter and show that literal content, if we choose.

Also, note that we assume that consultables convey their information
through visual information, such as printed text or a display screen.
Because of this, we by default require that the object be visible to be
consulted. This might not be appropriate in some cases, such as Braille
books or talking PDA's; to remove the visual condition, override the
pre-condition for the Consult action.

`class `**`Consultable`**` :   `[`Thing`](../object/Thing.html) [`TopicDatabase`](../object/TopicDatabase.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Consultable`**  
[`Thing`](../object/Thing.html)  
[`VocabObject`](../object/VocabObject.html)  
`                         object`  
[`TopicDatabase`](../object/TopicDatabase.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`consultTopics`](#consultTopics)

Inherited from `Thing` :  
[`actorInAName`](../object/Thing.html#actorInAName) [`actorInName`](../object/Thing.html#actorInName) [`actorInPrep`](../object/Thing.html#actorInPrep) [`actorIntoName`](../object/Thing.html#actorIntoName) [`actorOutOfName`](../object/Thing.html#actorOutOfName) [`actorOutOfPrep`](../object/Thing.html#actorOutOfPrep) [`aDisambigName`](../object/Thing.html#aDisambigName) [`allStates`](../object/Thing.html#allStates) [`aName`](../object/Thing.html#aName) [`brightness`](../object/Thing.html#brightness) [`bulk`](../object/Thing.html#bulk) [`canBeHeard`](../object/Thing.html#canBeHeard) [`canBeSeen`](../object/Thing.html#canBeSeen) [`canBeSmelled`](../object/Thing.html#canBeSmelled) [`canBeTouched`](../object/Thing.html#canBeTouched) [`canMatchHer`](../object/Thing.html#canMatchHer) [`canMatchHim`](../object/Thing.html#canMatchHim) [`canMatchIt`](../object/Thing.html#canMatchIt) [`canMatchThem`](../object/Thing.html#canMatchThem) [`circularlyInMessage`](../object/Thing.html#circularlyInMessage) [`collectiveGroup`](../object/Thing.html#collectiveGroup) [`collectiveGroups`](../object/Thing.html#collectiveGroups) [`contents`](../object/Thing.html#contents) [`contentsListed`](../object/Thing.html#contentsListed) [`contentsListedInExamine`](../object/Thing.html#contentsListedInExamine) [`contentsListedSeparately`](../object/Thing.html#contentsListedSeparately) [`contentsLister`](../object/Thing.html#contentsLister) [`descContentsLister`](../object/Thing.html#descContentsLister) [`described`](../object/Thing.html#described) [`disambigEquivName`](../object/Thing.html#disambigEquivName) [`disambigName`](../object/Thing.html#disambigName) [`distantDesc`](../object/Thing.html#distantDesc) [`distantInitSpecialDesc`](../object/Thing.html#distantInitSpecialDesc) [`distantSpecialDesc`](../object/Thing.html#distantSpecialDesc) [`distinguishers`](../object/Thing.html#distinguishers) [`dummyName`](../object/Thing.html#dummyName) [`effectiveFollowLocation`](../object/Thing.html#effectiveFollowLocation) [`equivalenceKey`](../object/Thing.html#equivalenceKey) [`equivalentGrouper`](../object/Thing.html#equivalentGrouper) [`equivalentGrouperClass`](../object/Thing.html#equivalentGrouperClass) [`equivalentGrouperTable`](../object/Thing.html#equivalentGrouperTable) [`esEndingPat`](../object/Thing.html#esEndingPat) [`explicitVisualSenseInfo`](../object/Thing.html#explicitVisualSenseInfo) [`getState`](../object/Thing.html#getState) [`globalParamName`](../object/Thing.html#globalParamName) [`holdingIndex`](../object/Thing.html#holdingIndex) [`iesEndingPat`](../object/Thing.html#iesEndingPat) [`initDesc`](../object/Thing.html#initDesc) [`initNominalRoomPartLocation`](../object/Thing.html#initNominalRoomPartLocation) [`initSpecialDesc`](../object/Thing.html#initSpecialDesc) [`inlineContentsLister`](../object/Thing.html#inlineContentsLister) [`isEquivalent`](../object/Thing.html#isEquivalent) [`isHer`](../object/Thing.html#isHer) [`isHim`](../object/Thing.html#isHim) [`isInInitState`](../object/Thing.html#isInInitState) [`isKnown`](../object/Thing.html#isKnown) [`isLikelyCommandTarget`](../object/Thing.html#isLikelyCommandTarget) [`isListedAboardVehicle`](../object/Thing.html#isListedAboardVehicle) [`isMassNoun`](../object/Thing.html#isMassNoun) [`isPlural`](../object/Thing.html#isPlural) [`isProperName`](../object/Thing.html#isProperName) [`isQualifiedName`](../object/Thing.html#isQualifiedName) [`isThingConstructed`](../object/Thing.html#isThingConstructed) [`isTopLevel`](../object/Thing.html#isTopLevel) [`listName`](../object/Thing.html#listName) [`listWith`](../object/Thing.html#listWith) [`location`](../object/Thing.html#location) [`lookInLister`](../object/Thing.html#lookInLister) [`moved`](../object/Thing.html#moved) [`name`](../object/Thing.html#name) [`nameDoes`](../object/Thing.html#nameDoes) [`nameSays`](../object/Thing.html#nameSays) [`nameSees`](../object/Thing.html#nameSees) [`notTravelReadyMsg`](../object/Thing.html#notTravelReadyMsg) [`objectNotifyList`](../object/Thing.html#objectNotifyList) [`objInPrep`](../object/Thing.html#objInPrep) [`obscuredInitSpecialDesc`](../object/Thing.html#obscuredInitSpecialDesc) [`obscuredSpecialDesc`](../object/Thing.html#obscuredSpecialDesc) [`owner`](../object/Thing.html#owner) [`patElevenEighteen`](../object/Thing.html#patElevenEighteen) [`patIsAlpha`](../object/Thing.html#patIsAlpha) [`patLeadingTagOrQuote`](../object/Thing.html#patLeadingTagOrQuote) [`patOfPhrase`](../object/Thing.html#patOfPhrase) [`patOneLetterAnWord`](../object/Thing.html#patOneLetterAnWord) [`patOneLetterWord`](../object/Thing.html#patOneLetterWord) [`patSingleApostropheS`](../object/Thing.html#patSingleApostropheS) [`patTagOrQuoteChar`](../object/Thing.html#patTagOrQuoteChar) [`patUpperOrDigit`](../object/Thing.html#patUpperOrDigit) [`patVowelY`](../object/Thing.html#patVowelY) [`pluralDisambigName`](../object/Thing.html#pluralDisambigName) [`pluralName`](../object/Thing.html#pluralName) [`pronounSelector`](../object/Thing.html#pronounSelector) [`roomDarkName`](../object/Thing.html#roomDarkName) [`roomLocation`](../object/Thing.html#roomLocation) [`roomName`](../object/Thing.html#roomName) [`seen`](../object/Thing.html#seen) [`sightPresence`](../object/Thing.html#sightPresence) [`sightSize`](../object/Thing.html#sightSize) [`smellPresence`](../object/Thing.html#smellPresence) [`smellSize`](../object/Thing.html#smellSize) [`soundPresence`](../object/Thing.html#soundPresence) [`soundSize`](../object/Thing.html#soundSize) [`specialContentsLister`](../object/Thing.html#specialContentsLister) [`specialDesc`](../object/Thing.html#specialDesc) [`specialDescBeforeContents`](../object/Thing.html#specialDescBeforeContents) [`specialDescListWith`](../object/Thing.html#specialDescListWith) [`specialDescOrder`](../object/Thing.html#specialDescOrder) [`specialNominalRoomPartLocation`](../object/Thing.html#specialNominalRoomPartLocation) [`suppressAutoSeen`](../object/Thing.html#suppressAutoSeen) [`takeFromNotInMessage`](../object/Thing.html#takeFromNotInMessage) [`theDisambigName`](../object/Thing.html#theDisambigName) [`theName`](../object/Thing.html#theName) [`theNamePossNoun`](../object/Thing.html#theNamePossNoun) [`tmpAmbient_`](../object/Thing.html#tmpAmbient_) [`tmpAmbientFill_`](../object/Thing.html#tmpAmbientFill_) [`tmpAmbientWithin_`](../object/Thing.html#tmpAmbientWithin_) [`tmpFillMedium_`](../object/Thing.html#tmpFillMedium_) [`tmpObstructor_`](../object/Thing.html#tmpObstructor_) [`tmpObstructorWithin_`](../object/Thing.html#tmpObstructorWithin_) [`tmpPathIsIn_`](../object/Thing.html#tmpPathIsIn_) [`tmpTrans_`](../object/Thing.html#tmpTrans_) [`tmpTransWithin_`](../object/Thing.html#tmpTransWithin_) [`touchPresence`](../object/Thing.html#touchPresence) [`touchSize`](../object/Thing.html#touchSize) [`verbCan`](../object/Thing.html#verbCan) [`verbCannot`](../object/Thing.html#verbCannot) [`verbCant`](../object/Thing.html#verbCant) [`verbEndingSD`](../object/Thing.html#verbEndingSD) [`verbEndingSEd`](../object/Thing.html#verbEndingSEd) [`verbEndingSMessageBuilder_`](../object/Thing.html#verbEndingSMessageBuilder_) [`verbMust`](../object/Thing.html#verbMust) [`verbToCome`](../object/Thing.html#verbToCome) [`verbToDo`](../object/Thing.html#verbToDo) [`verbToGo`](../object/Thing.html#verbToGo) [`verbToLeave`](../object/Thing.html#verbToLeave) [`verbToSay`](../object/Thing.html#verbToSay) [`verbToSee`](../object/Thing.html#verbToSee) [`verbWill`](../object/Thing.html#verbWill) [`verbWont`](../object/Thing.html#verbWont) [`weight`](../object/Thing.html#weight)

Inherited from `VocabObject` :  
[`canResolvePossessive`](../object/VocabObject.html#canResolvePossessive) [`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder) [`pluralOrder`](../object/VocabObject.html#pluralOrder) [`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood) [`vocabWords`](../object/VocabObject.html#vocabWords) [`weakTokens`](../object/VocabObject.html#weakTokens)

Inherited from `TopicDatabase` :  
[`limitSuggestions`](../object/TopicDatabase.html#limitSuggestions) [`suggestedTopics`](../object/TopicDatabase.html#suggestedTopics) [`topicGroupActive`](../object/TopicDatabase.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicDatabase.html#topicGroupScoreAdjustment)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`dobjFor(Consult)`](#dobjFor(Consult)) [`dobjFor(ConsultAbout)`](#dobjFor(ConsultAbout)) [`resolveConsultTopic`](#resolveConsultTopic) [`topicNotFound`](#topicNotFound)

Inherited from `Thing` :  
[`acceptCommand`](../object/Thing.html#acceptCommand) [`addAllContents`](../object/Thing.html#addAllContents) [`addDirectConnections`](../object/Thing.html#addDirectConnections) [`addObjectNotifyItem`](../object/Thing.html#addObjectNotifyItem) [`addToContents`](../object/Thing.html#addToContents) [`addToSenseInfoTable`](../object/Thing.html#addToSenseInfoTable) [`adjustLookAroundTable`](../object/Thing.html#adjustLookAroundTable) [`adjustThrowDestination`](../object/Thing.html#adjustThrowDestination) [`afterAction`](../object/Thing.html#afterAction) [`afterTravel`](../object/Thing.html#afterTravel) [`allContents`](../object/Thing.html#allContents) [`aNameFrom`](../object/Thing.html#aNameFrom) [`aNameObj`](../object/Thing.html#aNameObj) [`aNameOwnerLoc`](../object/Thing.html#aNameOwnerLoc) [`announceDefaultObject`](../object/Thing.html#announceDefaultObject) [`appendHeldContents`](../object/Thing.html#appendHeldContents) [`atmosphereList`](../object/Thing.html#atmosphereList) [`baseMoveInto`](../object/Thing.html#baseMoveInto) [`basicExamine`](../object/Thing.html#basicExamine) [`basicExamineFeel`](../object/Thing.html#basicExamineFeel) [`basicExamineListen`](../object/Thing.html#basicExamineListen) [`basicExamineSmell`](../object/Thing.html#basicExamineSmell) [`basicExamineTaste`](../object/Thing.html#basicExamineTaste) [`beforeAction`](../object/Thing.html#beforeAction) [`beforeTravel`](../object/Thing.html#beforeTravel) [`buildContainmentPaths`](../object/Thing.html#buildContainmentPaths) [`cacheAmbientInfo`](../object/Thing.html#cacheAmbientInfo) [`cacheSenseInfo`](../object/Thing.html#cacheSenseInfo) [`cacheSensePath`](../object/Thing.html#cacheSensePath) [`canBeHeardBy`](../object/Thing.html#canBeHeardBy) [`canBeSeenBy`](../object/Thing.html#canBeSeenBy) [`canBeSensed`](../object/Thing.html#canBeSensed) [`canBeSmelledBy`](../object/Thing.html#canBeSmelledBy) [`canBeTouchedBy`](../object/Thing.html#canBeTouchedBy) [`canDetailsBeSensed`](../object/Thing.html#canDetailsBeSensed) [`canHear`](../object/Thing.html#canHear) [`canMatchPronounType`](../object/Thing.html#canMatchPronounType) [`canMoveViaPath`](../object/Thing.html#canMoveViaPath) [`cannotGoShowExits`](../object/Thing.html#cannotGoShowExits) [`cannotReachObject`](../object/Thing.html#cannotReachObject) [`cannotSeeSmellSource`](../object/Thing.html#cannotSeeSmellSource) [`cannotSeeSoundSource`](../object/Thing.html#cannotSeeSoundSource) [`canOwn`](../object/Thing.html#canOwn) [`canSee`](../object/Thing.html#canSee) [`canSmell`](../object/Thing.html#canSmell) [`canThrowViaPath`](../object/Thing.html#canThrowViaPath) [`canTouch`](../object/Thing.html#canTouch) [`canTouchViaPath`](../object/Thing.html#canTouchViaPath) [`checkActorOutOfNested`](../object/Thing.html#checkActorOutOfNested) [`checkBulkChange`](../object/Thing.html#checkBulkChange) [`checkBulkChangeWithin`](../object/Thing.html#checkBulkChangeWithin) [`checkMoveViaPath`](../object/Thing.html#checkMoveViaPath) [`checkStagingLocation`](../object/Thing.html#checkStagingLocation) [`checkThrowViaPath`](../object/Thing.html#checkThrowViaPath) [`checkTouchViaPath`](../object/Thing.html#checkTouchViaPath) [`checkTravelerDirectlyInRoom`](../object/Thing.html#checkTravelerDirectlyInRoom) [`childInName`](../object/Thing.html#childInName) [`childInNameGen`](../object/Thing.html#childInNameGen) [`childInNameWithOwner`](../object/Thing.html#childInNameWithOwner) [`childInRemoteName`](../object/Thing.html#childInRemoteName) [`clearSenseInfo`](../object/Thing.html#clearSenseInfo) [`cloneForMultiInstanceContents`](../object/Thing.html#cloneForMultiInstanceContents) [`cloneMultiInstanceContents`](../object/Thing.html#cloneMultiInstanceContents) [`conjugateRegularVerb`](../object/Thing.html#conjugateRegularVerb) [`connectionTable`](../object/Thing.html#connectionTable) [`construct`](../object/Thing.html#construct) [`contentsInFixedIn`](../object/Thing.html#contentsInFixedIn) [`countDisambigName`](../object/Thing.html#countDisambigName) [`countListName`](../object/Thing.html#countListName) [`countName`](../object/Thing.html#countName) [`countNameFrom`](../object/Thing.html#countNameFrom) [`countNameOwnerLoc`](../object/Thing.html#countNameOwnerLoc) [`darkRoomContentsLister`](../object/Thing.html#darkRoomContentsLister) [`defaultDistantDesc`](../object/Thing.html#defaultDistantDesc) [`defaultObscuredDesc`](../object/Thing.html#defaultObscuredDesc) [`desc`](../object/Thing.html#desc) [`directionForConnector`](../object/Thing.html#directionForConnector) [`distantSmellDesc`](../object/Thing.html#distantSmellDesc) [`distantSoundDesc`](../object/Thing.html#distantSoundDesc) [`dobjFor(AskAbout)`](../object/Thing.html#dobjFor(AskAbout)) [`dobjFor(AskFor)`](../object/Thing.html#dobjFor(AskFor)) [`dobjFor(AskVague)`](../object/Thing.html#dobjFor(AskVague)) [`dobjFor(AttachTo)`](../object/Thing.html#dobjFor(AttachTo)) [`dobjFor(Attack)`](../object/Thing.html#dobjFor(Attack)) [`dobjFor(AttackWith)`](../object/Thing.html#dobjFor(AttackWith)) [`dobjFor(Board)`](../object/Thing.html#dobjFor(Board)) [`dobjFor(Break)`](../object/Thing.html#dobjFor(Break)) [`dobjFor(Burn)`](../object/Thing.html#dobjFor(Burn)) [`dobjFor(BurnWith)`](../object/Thing.html#dobjFor(BurnWith)) [`dobjFor(Clean)`](../object/Thing.html#dobjFor(Clean)) [`dobjFor(CleanWith)`](../object/Thing.html#dobjFor(CleanWith)) [`dobjFor(Climb)`](../object/Thing.html#dobjFor(Climb)) [`dobjFor(ClimbDown)`](../object/Thing.html#dobjFor(ClimbDown)) [`dobjFor(ClimbUp)`](../object/Thing.html#dobjFor(ClimbUp)) [`dobjFor(Close)`](../object/Thing.html#dobjFor(Close)) [`dobjFor(CutWith)`](../object/Thing.html#dobjFor(CutWith)) [`dobjFor(Detach)`](../object/Thing.html#dobjFor(Detach)) [`dobjFor(DetachFrom)`](../object/Thing.html#dobjFor(DetachFrom)) [`dobjFor(Dig)`](../object/Thing.html#dobjFor(Dig)) [`dobjFor(DigWith)`](../object/Thing.html#dobjFor(DigWith)) [`dobjFor(Doff)`](../object/Thing.html#dobjFor(Doff)) [`dobjFor(Drink)`](../object/Thing.html#dobjFor(Drink)) [`dobjFor(Drop)`](../object/Thing.html#dobjFor(Drop)) [`dobjFor(Eat)`](../object/Thing.html#dobjFor(Eat)) [`dobjFor(Enter)`](../object/Thing.html#dobjFor(Enter)) [`dobjFor(EnterOn)`](../object/Thing.html#dobjFor(EnterOn)) [`dobjFor(Examine)`](../object/Thing.html#dobjFor(Examine)) [`dobjFor(Extinguish)`](../object/Thing.html#dobjFor(Extinguish)) [`dobjFor(Fasten)`](../object/Thing.html#dobjFor(Fasten)) [`dobjFor(FastenTo)`](../object/Thing.html#dobjFor(FastenTo)) [`dobjFor(Feel)`](../object/Thing.html#dobjFor(Feel)) [`dobjFor(Flip)`](../object/Thing.html#dobjFor(Flip)) [`dobjFor(Follow)`](../object/Thing.html#dobjFor(Follow)) [`dobjFor(GetOffOf)`](../object/Thing.html#dobjFor(GetOffOf)) [`dobjFor(GetOutOf)`](../object/Thing.html#dobjFor(GetOutOf)) [`dobjFor(GiveTo)`](../object/Thing.html#dobjFor(GiveTo)) [`dobjFor(GoThrough)`](../object/Thing.html#dobjFor(GoThrough)) [`dobjFor(JumpOff)`](../object/Thing.html#dobjFor(JumpOff)) [`dobjFor(JumpOver)`](../object/Thing.html#dobjFor(JumpOver)) [`dobjFor(Kiss)`](../object/Thing.html#dobjFor(Kiss)) [`dobjFor(LieOn)`](../object/Thing.html#dobjFor(LieOn)) [`dobjFor(Light)`](../object/Thing.html#dobjFor(Light)) [`dobjFor(ListenTo)`](../object/Thing.html#dobjFor(ListenTo)) [`dobjFor(Lock)`](../object/Thing.html#dobjFor(Lock)) [`dobjFor(LockWith)`](../object/Thing.html#dobjFor(LockWith)) [`dobjFor(LookBehind)`](../object/Thing.html#dobjFor(LookBehind)) [`dobjFor(LookIn)`](../object/Thing.html#dobjFor(LookIn)) [`dobjFor(LookThrough)`](../object/Thing.html#dobjFor(LookThrough)) [`dobjFor(LookUnder)`](../object/Thing.html#dobjFor(LookUnder)) [`dobjFor(Move)`](../object/Thing.html#dobjFor(Move)) [`dobjFor(MoveTo)`](../object/Thing.html#dobjFor(MoveTo)) [`dobjFor(MoveWith)`](../object/Thing.html#dobjFor(MoveWith)) [`dobjFor(Open)`](../object/Thing.html#dobjFor(Open)) [`dobjFor(PlugIn)`](../object/Thing.html#dobjFor(PlugIn)) [`dobjFor(PlugInto)`](../object/Thing.html#dobjFor(PlugInto)) [`dobjFor(Pour)`](../object/Thing.html#dobjFor(Pour)) [`dobjFor(PourInto)`](../object/Thing.html#dobjFor(PourInto)) [`dobjFor(PourOnto)`](../object/Thing.html#dobjFor(PourOnto)) [`dobjFor(Pull)`](../object/Thing.html#dobjFor(Pull)) [`dobjFor(Push)`](../object/Thing.html#dobjFor(Push)) [`dobjFor(PushTravel)`](../object/Thing.html#dobjFor(PushTravel)) [`dobjFor(PutBehind)`](../object/Thing.html#dobjFor(PutBehind)) [`dobjFor(PutIn)`](../object/Thing.html#dobjFor(PutIn)) [`dobjFor(PutOn)`](../object/Thing.html#dobjFor(PutOn)) [`dobjFor(PutUnder)`](../object/Thing.html#dobjFor(PutUnder)) [`dobjFor(Read)`](../object/Thing.html#dobjFor(Read)) [`dobjFor(Remove)`](../object/Thing.html#dobjFor(Remove)) [`dobjFor(Screw)`](../object/Thing.html#dobjFor(Screw)) [`dobjFor(ScrewWith)`](../object/Thing.html#dobjFor(ScrewWith)) [`dobjFor(Search)`](../object/Thing.html#dobjFor(Search)) [`dobjFor(Set)`](../object/Thing.html#dobjFor(Set)) [`dobjFor(SetTo)`](../object/Thing.html#dobjFor(SetTo)) [`dobjFor(ShowTo)`](../object/Thing.html#dobjFor(ShowTo)) [`dobjFor(SitOn)`](../object/Thing.html#dobjFor(SitOn)) [`dobjFor(Smell)`](../object/Thing.html#dobjFor(Smell)) [`dobjFor(StandOn)`](../object/Thing.html#dobjFor(StandOn)) [`dobjFor(Strike)`](../object/Thing.html#dobjFor(Strike)) [`dobjFor(Switch)`](../object/Thing.html#dobjFor(Switch)) [`dobjFor(Take)`](../object/Thing.html#dobjFor(Take)) [`dobjFor(TakeFrom)`](../object/Thing.html#dobjFor(TakeFrom)) [`dobjFor(TalkTo)`](../object/Thing.html#dobjFor(TalkTo)) [`dobjFor(Taste)`](../object/Thing.html#dobjFor(Taste)) [`dobjFor(TellAbout)`](../object/Thing.html#dobjFor(TellAbout)) [`dobjFor(TellVague)`](../object/Thing.html#dobjFor(TellVague)) [`dobjFor(Throw)`](../object/Thing.html#dobjFor(Throw)) [`dobjFor(ThrowAt)`](../object/Thing.html#dobjFor(ThrowAt)) [`dobjFor(ThrowDir)`](../object/Thing.html#dobjFor(ThrowDir)) [`dobjFor(ThrowTo)`](../object/Thing.html#dobjFor(ThrowTo)) [`dobjFor(Turn)`](../object/Thing.html#dobjFor(Turn)) [`dobjFor(TurnOff)`](../object/Thing.html#dobjFor(TurnOff)) [`dobjFor(TurnOn)`](../object/Thing.html#dobjFor(TurnOn)) [`dobjFor(TurnTo)`](../object/Thing.html#dobjFor(TurnTo)) [`dobjFor(TurnWith)`](../object/Thing.html#dobjFor(TurnWith)) [`dobjFor(TypeLiteralOn)`](../object/Thing.html#dobjFor(TypeLiteralOn)) [`dobjFor(TypeOn)`](../object/Thing.html#dobjFor(TypeOn)) [`dobjFor(Unfasten)`](../object/Thing.html#dobjFor(Unfasten)) [`dobjFor(UnfastenFrom)`](../object/Thing.html#dobjFor(UnfastenFrom)) [`dobjFor(Unlock)`](../object/Thing.html#dobjFor(Unlock)) [`dobjFor(UnlockWith)`](../object/Thing.html#dobjFor(UnlockWith)) [`dobjFor(Unplug)`](../object/Thing.html#dobjFor(Unplug)) [`dobjFor(UnplugFrom)`](../object/Thing.html#dobjFor(UnplugFrom)) [`dobjFor(Unscrew)`](../object/Thing.html#dobjFor(Unscrew)) [`dobjFor(UnscrewWith)`](../object/Thing.html#dobjFor(UnscrewWith)) [`dobjFor(Wear)`](../object/Thing.html#dobjFor(Wear)) [`examineListContents`](../object/Thing.html#examineListContents) [`examineListContentsWith`](../object/Thing.html#examineListContentsWith) [`examineSpecialContents`](../object/Thing.html#examineSpecialContents) [`examineStatus`](../object/Thing.html#examineStatus) [`failCheck`](../object/Thing.html#failCheck) [`feelDesc`](../object/Thing.html#feelDesc) [`fillMedium`](../object/Thing.html#fillMedium) [`findOpaqueObstructor`](../object/Thing.html#findOpaqueObstructor) [`findTouchObstructor`](../object/Thing.html#findTouchObstructor) [`forEachConnectedContainer`](../object/Thing.html#forEachConnectedContainer) [`forEachContainer`](../object/Thing.html#forEachContainer) [`fromPOV`](../object/Thing.html#fromPOV) [`getAllForTakeFrom`](../object/Thing.html#getAllForTakeFrom) [`getAllPathsTo`](../object/Thing.html#getAllPathsTo) [`getAnnouncementDistinguisher`](../object/Thing.html#getAnnouncementDistinguisher) [`getBagAffinities`](../object/Thing.html#getBagAffinities) [`getBagsOfHolding`](../object/Thing.html#getBagsOfHolding) [`getBestDistinguisher`](../object/Thing.html#getBestDistinguisher) [`getBulk`](../object/Thing.html#getBulk) [`getBulkWithin`](../object/Thing.html#getBulkWithin) [`getCarryingActor`](../object/Thing.html#getCarryingActor) [`getCommonContainer`](../object/Thing.html#getCommonContainer) [`getCommonDirectContainer`](../object/Thing.html#getCommonDirectContainer) [`getConnectedContainers`](../object/Thing.html#getConnectedContainers) [`getConnectorTo`](../object/Thing.html#getConnectorTo) [`getContentsForExamine`](../object/Thing.html#getContentsForExamine) [`getDestName`](../object/Thing.html#getDestName) [`getDropDestination`](../object/Thing.html#getDropDestination) [`getEncumberingBulk`](../object/Thing.html#getEncumberingBulk) [`getEncumberingWeight`](../object/Thing.html#getEncumberingWeight) [`getExtraScopeItems`](../object/Thing.html#getExtraScopeItems) [`getHitFallDestination`](../object/Thing.html#getHitFallDestination) [`getIdentityObject`](../object/Thing.html#getIdentityObject) [`getInScopeDistinguisher`](../object/Thing.html#getInScopeDistinguisher) [`getListedContents`](../object/Thing.html#getListedContents) [`getLocPushTraveler`](../object/Thing.html#getLocPushTraveler) [`getLocTraveler`](../object/Thing.html#getLocTraveler) [`getMovePathTo`](../object/Thing.html#getMovePathTo) [`getNoise`](../object/Thing.html#getNoise) [`getNominalDropDestination`](../object/Thing.html#getNominalDropDestination) [`getNominalOwner`](../object/Thing.html#getNominalOwner) [`getObjectNotifyList`](../object/Thing.html#getObjectNotifyList) [`getOdor`](../object/Thing.html#getOdor) [`getOutermostRoom`](../object/Thing.html#getOutermostRoom) [`getOutermostVisibleRoom`](../object/Thing.html#getOutermostVisibleRoom) [`getRoomNotifyList`](../object/Thing.html#getRoomNotifyList) [`getRoomPartLocation`](../object/Thing.html#getRoomPartLocation) [`getStateWithInfo`](../object/Thing.html#getStateWithInfo) [`getStatuslineExitsHeight`](../object/Thing.html#getStatuslineExitsHeight) [`getThrowPathTo`](../object/Thing.html#getThrowPathTo) [`getTouchPathTo`](../object/Thing.html#getTouchPathTo) [`getTravelConnector`](../object/Thing.html#getTravelConnector) [`getVisualSenseInfo`](../object/Thing.html#getVisualSenseInfo) [`getWeight`](../object/Thing.html#getWeight) [`hasCollectiveGroup`](../object/Thing.html#hasCollectiveGroup) [`hideFromAll`](../object/Thing.html#hideFromAll) [`hideFromDefault`](../object/Thing.html#hideFromDefault) [`initializeEquivalent`](../object/Thing.html#initializeEquivalent) [`initializeLocation`](../object/Thing.html#initializeLocation) [`initializeThing`](../object/Thing.html#initializeThing) [`inRoomName`](../object/Thing.html#inRoomName) [`iobjFor(AttachTo)`](../object/Thing.html#iobjFor(AttachTo)) [`iobjFor(AttackWith)`](../object/Thing.html#iobjFor(AttackWith)) [`iobjFor(BurnWith)`](../object/Thing.html#iobjFor(BurnWith)) [`iobjFor(CleanWith)`](../object/Thing.html#iobjFor(CleanWith)) [`iobjFor(CutWith)`](../object/Thing.html#iobjFor(CutWith)) [`iobjFor(DetachFrom)`](../object/Thing.html#iobjFor(DetachFrom)) [`iobjFor(DigWith)`](../object/Thing.html#iobjFor(DigWith)) [`iobjFor(FastenTo)`](../object/Thing.html#iobjFor(FastenTo)) [`iobjFor(GiveTo)`](../object/Thing.html#iobjFor(GiveTo)) [`iobjFor(LockWith)`](../object/Thing.html#iobjFor(LockWith)) [`iobjFor(MoveWith)`](../object/Thing.html#iobjFor(MoveWith)) [`iobjFor(PlugInto)`](../object/Thing.html#iobjFor(PlugInto)) [`iobjFor(PourInto)`](../object/Thing.html#iobjFor(PourInto)) [`iobjFor(PourOnto)`](../object/Thing.html#iobjFor(PourOnto)) [`iobjFor(PutBehind)`](../object/Thing.html#iobjFor(PutBehind)) [`iobjFor(PutIn)`](../object/Thing.html#iobjFor(PutIn)) [`iobjFor(PutOn)`](../object/Thing.html#iobjFor(PutOn)) [`iobjFor(PutUnder)`](../object/Thing.html#iobjFor(PutUnder)) [`iobjFor(ScrewWith)`](../object/Thing.html#iobjFor(ScrewWith)) [`iobjFor(ShowTo)`](../object/Thing.html#iobjFor(ShowTo)) [`iobjFor(TakeFrom)`](../object/Thing.html#iobjFor(TakeFrom)) [`iobjFor(ThrowAt)`](../object/Thing.html#iobjFor(ThrowAt)) [`iobjFor(ThrowTo)`](../object/Thing.html#iobjFor(ThrowTo)) [`iobjFor(TurnWith)`](../object/Thing.html#iobjFor(TurnWith)) [`iobjFor(UnfastenFrom)`](../object/Thing.html#iobjFor(UnfastenFrom)) [`iobjFor(UnlockWith)`](../object/Thing.html#iobjFor(UnlockWith)) [`iobjFor(UnplugFrom)`](../object/Thing.html#iobjFor(UnplugFrom)) [`iobjFor(UnscrewWith)`](../object/Thing.html#iobjFor(UnscrewWith)) [`isActorTravelReady`](../object/Thing.html#isActorTravelReady) [`isComponentOf`](../object/Thing.html#isComponentOf) [`isDirectlyIn`](../object/Thing.html#isDirectlyIn) [`isHeldBy`](../object/Thing.html#isHeldBy) [`isIn`](../object/Thing.html#isIn) [`isInFixedIn`](../object/Thing.html#isInFixedIn) [`isListed`](../object/Thing.html#isListed) [`isListedInContents`](../object/Thing.html#isListedInContents) [`isListedInInventory`](../object/Thing.html#isListedInInventory) [`isListedInRoomPart`](../object/Thing.html#isListedInRoomPart) [`isLookAroundCeiling`](../object/Thing.html#isLookAroundCeiling) [`isNominallyIn`](../object/Thing.html#isNominallyIn) [`isNominallyInRoomPart`](../object/Thing.html#isNominallyInRoomPart) [`isOccludedBy`](../object/Thing.html#isOccludedBy) [`isOrIsIn`](../object/Thing.html#isOrIsIn) [`isOwnedBy`](../object/Thing.html#isOwnedBy) [`isShipboard`](../object/Thing.html#isShipboard) [`isVocabEquivalent`](../object/Thing.html#isVocabEquivalent) [`itIs`](../object/Thing.html#itIs) [`itNom`](../object/Thing.html#itNom) [`itObj`](../object/Thing.html#itObj) [`itPossAdj`](../object/Thing.html#itPossAdj) [`itPossNoun`](../object/Thing.html#itPossNoun) [`itVerb`](../object/Thing.html#itVerb) [`listCardinality`](../object/Thing.html#listCardinality) [`localDirectionLinkForConnector`](../object/Thing.html#localDirectionLinkForConnector) [`lookAround`](../object/Thing.html#lookAround) [`lookAroundPov`](../object/Thing.html#lookAroundPov) [`lookAroundWithin`](../object/Thing.html#lookAroundWithin) [`lookAroundWithinContents`](../object/Thing.html#lookAroundWithinContents) [`lookAroundWithinDesc`](../object/Thing.html#lookAroundWithinDesc) [`lookAroundWithinName`](../object/Thing.html#lookAroundWithinName) [`lookAroundWithinSense`](../object/Thing.html#lookAroundWithinSense) [`lookAroundWithinShowExits`](../object/Thing.html#lookAroundWithinShowExits) [`lookInDesc`](../object/Thing.html#lookInDesc) [`mainExamine`](../object/Thing.html#mainExamine) [`mainMoveInto`](../object/Thing.html#mainMoveInto) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`mapPushTravelHandlers`](../object/Thing.html#mapPushTravelHandlers) [`meetsObjHeld`](../object/Thing.html#meetsObjHeld) [`mergeSenseInfo`](../object/Thing.html#mergeSenseInfo) [`mergeSenseInfoTable`](../object/Thing.html#mergeSenseInfoTable) [`moveInto`](../object/Thing.html#moveInto) [`moveIntoForTravel`](../object/Thing.html#moveIntoForTravel) [`moveIntoNotifyPath`](../object/Thing.html#moveIntoNotifyPath) [`mustMoveObjInto`](../object/Thing.html#mustMoveObjInto) [`nameIs`](../object/Thing.html#nameIs) [`nameIsnt`](../object/Thing.html#nameIsnt) [`nameVerb`](../object/Thing.html#nameVerb) [`normalizePath`](../object/Thing.html#normalizePath) [`notePromptByOwnerLoc`](../object/Thing.html#notePromptByOwnerLoc) [`notePromptByPossAdj`](../object/Thing.html#notePromptByPossAdj) [`noteSeenBy`](../object/Thing.html#noteSeenBy) [`notifyInsert`](../object/Thing.html#notifyInsert) [`notifyMoveInto`](../object/Thing.html#notifyMoveInto) [`notifyMoveViaPath`](../object/Thing.html#notifyMoveViaPath) [`notifyRemove`](../object/Thing.html#notifyRemove) [`obscuredDesc`](../object/Thing.html#obscuredDesc) [`obscuredSmellDesc`](../object/Thing.html#obscuredSmellDesc) [`obscuredSoundDesc`](../object/Thing.html#obscuredSoundDesc) [`pluralNameFrom`](../object/Thing.html#pluralNameFrom) [`processThrow`](../object/Thing.html#processThrow) [`propHidesProp`](../object/Thing.html#propHidesProp) [`propWithPresent`](../object/Thing.html#propWithPresent) [`putInName`](../object/Thing.html#putInName) [`receiveDrop`](../object/Thing.html#receiveDrop) [`remoteDesc`](../object/Thing.html#remoteDesc) [`remoteInitSpecialDesc`](../object/Thing.html#remoteInitSpecialDesc) [`remoteRoomContentsLister`](../object/Thing.html#remoteRoomContentsLister) [`remoteSpecialDesc`](../object/Thing.html#remoteSpecialDesc) [`removeFromContents`](../object/Thing.html#removeFromContents) [`removeObjectNotifyItem`](../object/Thing.html#removeObjectNotifyItem) [`restoreLocation`](../object/Thing.html#restoreLocation) [`roomActorThereDesc`](../object/Thing.html#roomActorThereDesc) [`roomContentsLister`](../object/Thing.html#roomContentsLister) [`roomDaemon`](../object/Thing.html#roomDaemon) [`roomDarkDesc`](../object/Thing.html#roomDarkDesc) [`roomDesc`](../object/Thing.html#roomDesc) [`roomFirstDesc`](../object/Thing.html#roomFirstDesc) [`roomRemoteDesc`](../object/Thing.html#roomRemoteDesc) [`roomTravelPreCond`](../object/Thing.html#roomTravelPreCond) [`saveLocation`](../object/Thing.html#saveLocation) [`selectPathTo`](../object/Thing.html#selectPathTo) [`sendNotifyInsert`](../object/Thing.html#sendNotifyInsert) [`sendNotifyRemove`](../object/Thing.html#sendNotifyRemove) [`senseAmbientMax`](../object/Thing.html#senseAmbientMax) [`senseInfoTable`](../object/Thing.html#senseInfoTable) [`senseObj`](../object/Thing.html#senseObj) [`sensePathFromWithin`](../object/Thing.html#sensePathFromWithin) [`sensePathFromWithout`](../object/Thing.html#sensePathFromWithout) [`sensePathToContents`](../object/Thing.html#sensePathToContents) [`sensePathToLoc`](../object/Thing.html#sensePathToLoc) [`sensePresenceList`](../object/Thing.html#sensePresenceList) [`setAllSeenBy`](../object/Thing.html#setAllSeenBy) [`setContentsSeenBy`](../object/Thing.html#setContentsSeenBy) [`setGlobalParamName`](../object/Thing.html#setGlobalParamName) [`setVisualSenseInfo`](../object/Thing.html#setVisualSenseInfo) [`shineFromWithin`](../object/Thing.html#shineFromWithin) [`shineFromWithout`](../object/Thing.html#shineFromWithout) [`shineOnContents`](../object/Thing.html#shineOnContents) [`shineOnLoc`](../object/Thing.html#shineOnLoc) [`showDistantSpecialDesc`](../object/Thing.html#showDistantSpecialDesc) [`showDistantSpecialDescInContents`](../object/Thing.html#showDistantSpecialDescInContents) [`showInventoryContents`](../object/Thing.html#showInventoryContents) [`showInventoryItem`](../object/Thing.html#showInventoryItem) [`showInventoryItemCounted`](../object/Thing.html#showInventoryItemCounted) [`showListItem`](../object/Thing.html#showListItem) [`showListItemCounted`](../object/Thing.html#showListItemCounted) [`showListItemCountedGen`](../object/Thing.html#showListItemCountedGen) [`showListItemGen`](../object/Thing.html#showListItemGen) [`showObjectContents`](../object/Thing.html#showObjectContents) [`showObscuredSpecialDesc`](../object/Thing.html#showObscuredSpecialDesc) [`showObscuredSpecialDescInContents`](../object/Thing.html#showObscuredSpecialDescInContents) [`showRemoteSpecialDesc`](../object/Thing.html#showRemoteSpecialDesc) [`showRemoteSpecialDescInContents`](../object/Thing.html#showRemoteSpecialDescInContents) [`showSpecialDesc`](../object/Thing.html#showSpecialDesc) [`showSpecialDescInContents`](../object/Thing.html#showSpecialDescInContents) [`showSpecialDescInContentsWithInfo`](../object/Thing.html#showSpecialDescInContentsWithInfo) [`showSpecialDescWithInfo`](../object/Thing.html#showSpecialDescWithInfo) [`showStatuslineExits`](../object/Thing.html#showStatuslineExits) [`showWornItem`](../object/Thing.html#showWornItem) [`showWornItemCounted`](../object/Thing.html#showWornItemCounted) [`smellDesc`](../object/Thing.html#smellDesc) [`smellHereDesc`](../object/Thing.html#smellHereDesc) [`soundDesc`](../object/Thing.html#soundDesc) [`soundHereDesc`](../object/Thing.html#soundHereDesc) [`specialDescList`](../object/Thing.html#specialDescList) [`specialPathFrom`](../object/Thing.html#specialPathFrom) [`statusName`](../object/Thing.html#statusName) [`stopThrowViaPath`](../object/Thing.html#stopThrowViaPath) [`superHidesSuper`](../object/Thing.html#superHidesSuper) [`tasteDesc`](../object/Thing.html#tasteDesc) [`thatNom`](../object/Thing.html#thatNom) [`thatObj`](../object/Thing.html#thatObj) [`theNameFrom`](../object/Thing.html#theNameFrom) [`theNameObj`](../object/Thing.html#theNameObj) [`theNameOwnerLoc`](../object/Thing.html#theNameOwnerLoc) [`theNameWithOwner`](../object/Thing.html#theNameWithOwner) [`throwTargetCatch`](../object/Thing.html#throwTargetCatch) [`throwTargetHitWith`](../object/Thing.html#throwTargetHitWith) [`throwViaPath`](../object/Thing.html#throwViaPath) [`transmitAmbient`](../object/Thing.html#transmitAmbient) [`transSensingIn`](../object/Thing.html#transSensingIn) [`transSensingOut`](../object/Thing.html#transSensingOut) [`traversePath`](../object/Thing.html#traversePath) [`tryHolding`](../object/Thing.html#tryHolding) [`tryImplicitRemoveObstructor`](../object/Thing.html#tryImplicitRemoveObstructor) [`tryMovingObjInto`](../object/Thing.html#tryMovingObjInto) [`useInitDesc`](../object/Thing.html#useInitDesc) [`useInitSpecialDesc`](../object/Thing.html#useInitSpecialDesc) [`useSpecialDesc`](../object/Thing.html#useSpecialDesc) [`useSpecialDescInContents`](../object/Thing.html#useSpecialDescInContents) [`useSpecialDescInRoom`](../object/Thing.html#useSpecialDescInRoom) [`useSpecialDescInRoomPart`](../object/Thing.html#useSpecialDescInRoomPart) [`verbEndingEs`](../object/Thing.html#verbEndingEs) [`verbEndingIes`](../object/Thing.html#verbEndingIes) [`verbEndingS`](../object/Thing.html#verbEndingS) [`verbToHave`](../object/Thing.html#verbToHave) [`verbWas`](../object/Thing.html#verbWas) [`verifyFollowable`](../object/Thing.html#verifyFollowable) [`verifyInsert`](../object/Thing.html#verifyInsert) [`verifyMoveTo`](../object/Thing.html#verifyMoveTo) [`verifyRemove`](../object/Thing.html#verifyRemove) [`whatIf`](../object/Thing.html#whatIf) [`whatIfHeldBy`](../object/Thing.html#whatIfHeldBy) [`withVisualSenseInfo`](../object/Thing.html#withVisualSenseInfo)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary) [`expandPronounList`](../object/VocabObject.html#expandPronounList) [`filterResolveList`](../object/VocabObject.html#filterResolveList) [`getFacets`](../object/VocabObject.html#getFacets) [`inheritVocab`](../object/VocabObject.html#inheritVocab) [`initializeVocab`](../object/VocabObject.html#initializeVocab) [`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith) [`matchName`](../object/VocabObject.html#matchName) [`matchNameCommon`](../object/VocabObject.html#matchNameCommon) [`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig) [`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation) [`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive) [`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

Inherited from `TopicDatabase` :  
[`addSuggestedTopic`](../object/TopicDatabase.html#addSuggestedTopic) [`addTopic`](../object/TopicDatabase.html#addTopic) [`addTopicToList`](../object/TopicDatabase.html#addTopicToList) [`compareVocabMatch`](../object/TopicDatabase.html#compareVocabMatch) [`findTopicResponse`](../object/TopicDatabase.html#findTopicResponse) [`getTopicOwner`](../object/TopicDatabase.html#getTopicOwner) [`handleTopic`](../object/TopicDatabase.html#handleTopic) [`removeSuggestedTopic`](../object/TopicDatabase.html#removeSuggestedTopic) [`removeTopic`](../object/TopicDatabase.html#removeTopic) [`removeTopicFromList`](../object/TopicDatabase.html#removeTopicFromList) [`showSuggestedTopicList`](../object/TopicDatabase.html#showSuggestedTopicList) [`showTopicResponse`](../object/TopicDatabase.html#showTopicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="consultTopics"></span>

`consultTopics`

[objects.t](../file/objects.t.html)\[[1657](../source/objects.t.html#1657)\]



Our topic entry database for consultatation topics. This will be
automatically built during initialization from the set of ConsultTopic
objects located within me, so there's usually no need to initialize this
manually.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="dobjFor(Consult)"></span>

`dobjFor(Consult)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1564](../source/objects.t.html#1564)\]



If they consult us without a topic, just ask for a topic. Treat it as
logical, but rank it as improbable, in case there's anything else around
that can be consulted without any topic specified.



<span id="dobjFor(ConsultAbout)"></span>

`dobjFor(ConsultAbout)`<span class="rem">OVERRIDDEN</span>

[objects.t](../file/objects.t.html)\[[1572](../source/objects.t.html#1572)\]



consult about a topic



<span id="resolveConsultTopic"></span>

`resolveConsultTopic (lst, np, resolver)`

[objects.t](../file/objects.t.html)\[[1641](../source/objects.t.html#1641)\]



Resolve the topic phrase for a CONSULT ABOUT command. The CONSULT ABOUT
action refers this to the direct object of the action, so that the
direct object can filter the topic match according to what makes sense
for the consultable.

By default, we resolve the topic phrase a little differently than we
would for conversational commands, such as ASK ABOUT. By default, we
don't differentiate objects at all based on physical scope or actor
knowledge when deciding on a match for a topic phrase. For example, if
you create a Consultable representing a phone book, and the player
enters a command like FIND BOB IN PHONE BOOK, the topic BOB will be
found even if the 'bob' object isn't known to the player character. The
reason for this difference from ASK ABOUT et al is that consultables are
generally the kinds of objects where, in real life, a person could
browse through the object and come across entries whether or not the
person knew enough to look for them. For example, you could go through a
phone book and find an entry for "Bob" even if you didn't know anyone
named Bob.

'lst' is the list of ResolveInfo objects giving the full set of matches
for the vocabulary words; 'np' is the grammar production object for the
topic phrase; and 'resolver' is the TopicResolver that's resolving the
topic phrase. Note that 'lst' contains ResolveInfo objects, so to get
the game-world object for a given list entry, use lst\[i\].obj\_.

We return a ResolvedTopic object that encapsulates the matching objects.

Note that the resolver object can be used to get certain useful
information. The resolver's getAction() method returns the action (which
you should use instead of gAction, since this routine is called during
the resolution process, not during command execution); its
getTargetActor() method returns the actor performing the action; and its
objInPhysicalScope(obj) method lets you determine if an object is in
physical scope for the actor.



<span id="topicNotFound"></span>

`topicNotFound ( )`

[objects.t](../file/objects.t.html)\[[1587](../source/objects.t.html#1587)\]



show the default response for a topic we couldn't find
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


