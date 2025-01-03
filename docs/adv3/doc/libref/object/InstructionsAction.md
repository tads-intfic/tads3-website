---
layout: docs
---
<span class="title">InstructionsAction</span><span class="type">class</span>

[instruct.t](../file/instruct.t.html)\[[81](../source/instruct.t.html#81)\]

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



The INSTRUCTIONS command. Make this a "system" action, because it's a
meta-action outside of the story. System actions don't consume any game
time.

`DefineSystemAction(Instructions)      `*`// original source text`*  
`class `**`InstructionsAction`**` :   `[`SystemAction`](../object/SystemAction.html)*`// after macro expansion`*



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`InstructionsAction`**  
[`SystemAction`](../object/SystemAction.html)  
[`IAction`](../object/IAction.html)  
[`Action`](../object/Action.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`InstructionsAction`**  
[`predicate(instructions)`](../object/predicate(instructions).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allRequiredVerbsDisclosed`](#allRequiredVerbsDisclosed) [`conversationAbbr`](#conversationAbbr) [`conversationInstructions`](#conversationInstructions) [`conversationVerbs`](#conversationVerbs) [`crueltyLevel`](#crueltyLevel) [`customVerbs`](#customVerbs) [`includeInUndo`](#includeInUndo) [`isRealTime`](#isRealTime) [`isRepeatable`](#isRepeatable) [`truncationLength`](#truncationLength)

Inherited from `SystemAction` :  
[`actionTime`](../object/SystemAction.html#actionTime)



Inherited from `Action` :  
[`afterActionMainList`](../object/Action.html#afterActionMainList) [`beforeAfterObjs`](../object/Action.html#beforeAfterObjs) [`defaultForRecursion`](../object/Action.html#defaultForRecursion) [`extraMessageParams`](../object/Action.html#extraMessageParams) [`implicitMsg`](../object/Action.html#implicitMsg) [`isImplicit`](../object/Action.html#isImplicit) [`iterationCanceled`](../object/Action.html#iterationCanceled) [`originalAction`](../object/Action.html#originalAction) [`parentAction`](../object/Action.html#parentAction) [`preCond`](../object/Action.html#preCond) [`predicateNounPhrases`](../object/Action.html#predicateNounPhrases) [`pronounOverride`](../object/Action.html#pronounOverride) [`remappedFrom`](../object/Action.html#remappedFrom) [`showDefaultReports`](../object/Action.html#showDefaultReports) [`synthParamID`](../object/Action.html#synthParamID) [`verbFlags`](../object/Action.html#verbFlags) [`verifiedOkay`](../object/Action.html#verifiedOkay)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execSystemAction`](#execSystemAction) [`showAbbrevChapter`](#showAbbrevChapter) [`showAdvancedCmdChapter`](#showAdvancedCmdChapter) [`showAmbiguousCmdChapter`](#showAmbiguousCmdChapter) [`showCommandsChapter`](#showCommandsChapter) [`showConversationChapter`](#showConversationChapter) [`showInstructions`](#showInstructions) [`showObjectsChapter`](#showObjectsChapter) [`showSaveRestoreChapter`](#showSaveRestoreChapter) [`showSpecialCmdChapter`](#showSpecialCmdChapter) [`showTimeChapter`](#showTimeChapter) [`showTipsChapter`](#showTipsChapter) [`showTravelChapter`](#showTravelChapter) [`showUnknownWordsChapter`](#showUnknownWordsChapter)

Inherited from `SystemAction` :  
[`execAction`](../object/SystemAction.html#execAction) [`getInputFile`](../object/SystemAction.html#getInputFile)

Inherited from `IAction` :  
[`doActionMain`](../object/IAction.html#doActionMain) [`resolveNouns`](../object/IAction.html#resolveNouns)

Inherited from `Action` :  
[`actionOfKind`](../object/Action.html#actionOfKind) [`addBeforeAfterObj`](../object/Action.html#addBeforeAfterObj) [`afterAction`](../object/Action.html#afterAction) [`afterActionMain`](../object/Action.html#afterActionMain) [`announceActionObject`](../object/Action.html#announceActionObject) [`announceAllDefaultObjects`](../object/Action.html#announceAllDefaultObjects) [`announceDefaultObject`](../object/Action.html#announceDefaultObject) [`beforeAction`](../object/Action.html#beforeAction) [`beforeActionMain`](../object/Action.html#beforeActionMain) [`cacheMultiObjectAnnouncements`](../object/Action.html#cacheMultiObjectAnnouncements) [`callAfterActionMain`](../object/Action.html#callAfterActionMain) [`callCatchAllProp`](../object/Action.html#callCatchAllProp) [`callPreConditions`](../object/Action.html#callPreConditions) [`callVerifyPreCond`](../object/Action.html#callVerifyPreCond) [`callVerifyProp`](../object/Action.html#callVerifyProp) [`cancelIteration`](../object/Action.html#cancelIteration) [`checkAction`](../object/Action.html#checkAction) [`checkPreConditions`](../object/Action.html#checkPreConditions) [`checkRemapping`](../object/Action.html#checkRemapping) [`combineRemappedVerifyResults`](../object/Action.html#combineRemappedVerifyResults) [`createActionFrom`](../object/Action.html#createActionFrom) [`createActionInstance`](../object/Action.html#createActionInstance) [`createTopicQualifierResolver`](../object/Action.html#createTopicQualifierResolver) [`doAction`](../object/Action.html#doAction) [`doActionOnce`](../object/Action.html#doActionOnce) [`filterAmbiguousWithVerify`](../object/Action.html#filterAmbiguousWithVerify) [`filterFacets`](../object/Action.html#filterFacets) [`filterPluralWithVerify`](../object/Action.html#filterPluralWithVerify) [`finishResolveList`](../object/Action.html#finishResolveList) [`getAnaphoricBinding`](../object/Action.html#getAnaphoricBinding) [`getCurrentObjects`](../object/Action.html#getCurrentObjects) [`getDefaultWithVerify`](../object/Action.html#getDefaultWithVerify) [`getEnteredVerbPhrase`](../object/Action.html#getEnteredVerbPhrase) [`getImplicitPhrase`](../object/Action.html#getImplicitPhrase) [`getInfPhrase`](../object/Action.html#getInfPhrase) [`getMatchForRole`](../object/Action.html#getMatchForRole) [`getMessageParam`](../object/Action.html#getMessageParam) [`getNotifyTable`](../object/Action.html#getNotifyTable) [`getObjectForRole`](../object/Action.html#getObjectForRole) [`getObjPreCondDescList`](../object/Action.html#getObjPreCondDescList) [`getObjPreConditions`](../object/Action.html#getObjPreConditions) [`getObjResponseProd`](../object/Action.html#getObjResponseProd) [`getOriginalAction`](../object/Action.html#getOriginalAction) [`getOrigTokenList`](../object/Action.html#getOrigTokenList) [`getOtherObjectRole`](../object/Action.html#getOtherObjectRole) [`getParticiplePhrase`](../object/Action.html#getParticiplePhrase) [`getPreCondDescList`](../object/Action.html#getPreCondDescList) [`getPreCondPropForRole`](../object/Action.html#getPreCondPropForRole) [`getPredicate`](../object/Action.html#getPredicate) [`getPronounOverride`](../object/Action.html#getPronounOverride) [`getQuestionInf`](../object/Action.html#getQuestionInf) [`getRemappedFrom`](../object/Action.html#getRemappedFrom) [`getRemapPropForRole`](../object/Action.html#getRemapPropForRole) [`getResolvedObjList`](../object/Action.html#getResolvedObjList) [`getResolveInfo`](../object/Action.html#getResolveInfo) [`getRoleFromIndex`](../object/Action.html#getRoleFromIndex) [`getSimpleSynonymRemap`](../object/Action.html#getSimpleSynonymRemap) [`getSortedVerifyResults`](../object/Action.html#getSortedVerifyResults) [`getVerbPhrase`](../object/Action.html#getVerbPhrase) [`getVerifyPropForRole`](../object/Action.html#getVerifyPropForRole) [`initTentative`](../object/Action.html#initTentative) [`isConversational`](../object/Action.html#isConversational) [`isNestedIn`](../object/Action.html#isNestedIn) [`isPartOf`](../object/Action.html#isPartOf) [`isRemapped`](../object/Action.html#isRemapped) [`makeResolveInfo`](../object/Action.html#makeResolveInfo) [`makeResolveInfoList`](../object/Action.html#makeResolveInfoList) [`maybeAnnounceDefaultObject`](../object/Action.html#maybeAnnounceDefaultObject) [`maybeAnnounceImplicit`](../object/Action.html#maybeAnnounceImplicit) [`maybeAnnounceMultiObject`](../object/Action.html#maybeAnnounceMultiObject) [`noMatch`](../object/Action.html#noMatch) [`notifyBeforeAfter`](../object/Action.html#notifyBeforeAfter) [`objListPronoun`](../object/Action.html#objListPronoun) [`preAnnounceActionObject`](../object/Action.html#preAnnounceActionObject) [`recalcSenseContext`](../object/Action.html#recalcSenseContext) [`repeatAction`](../object/Action.html#repeatAction) [`resetAction`](../object/Action.html#resetAction) [`resolveAction`](../object/Action.html#resolveAction) [`resolvedObjectsInScope`](../object/Action.html#resolvedObjectsInScope) [`runBeforeNotifiers`](../object/Action.html#runBeforeNotifiers) [`saveActionForAgain`](../object/Action.html#saveActionForAgain) [`setCurrentObjects`](../object/Action.html#setCurrentObjects) [`setImplicit`](../object/Action.html#setImplicit) [`setMessageParam`](../object/Action.html#setMessageParam) [`setMessageParams`](../object/Action.html#setMessageParams) [`setNested`](../object/Action.html#setNested) [`setObjectMatches`](../object/Action.html#setObjectMatches) [`setOriginalAction`](../object/Action.html#setOriginalAction) [`setPronounOverride`](../object/Action.html#setPronounOverride) [`setRemapped`](../object/Action.html#setRemapped) [`setResolvedObjects`](../object/Action.html#setResolvedObjects) [`spPrefix`](../object/Action.html#spPrefix) [`spSuffix`](../object/Action.html#spSuffix) [`synthMessageParam`](../object/Action.html#synthMessageParam) [`verifyAction`](../object/Action.html#verifyAction) [`verifyHandlersExist`](../object/Action.html#verifyHandlersExist) [`whatObj`](../object/Action.html#whatObj) [`whatTranslate`](../object/Action.html#whatTranslate) [`withVerifyResults`](../object/Action.html#withVerifyResults) [`zeroActionTime`](../object/Action.html#zeroActionTime)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`getOrigText`](../object/BasicProd.html#getOrigText) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allRequiredVerbsDisclosed"></span>

`allRequiredVerbsDisclosed`

[instruct.t](../file/instruct.t.html)\[[97](../source/instruct.t.html#97)\]



This property tells us how complete the verb list is. By default, we'll
assume that the instructions fail to disclose every required verb in the
game, because the generic set we use here doesn't even try to anticipate
the special verbs that most games include. If you provide your own list
of game-specific verbs, and your custom list (taken together with the
generic list) discloses every verb required to complete the game, you
should set this property to true; if you set this to true, the
instructions will assure the player that they will not need to think of
any verbs besides the ones listed in the instructions. Authors are
strongly encouraged to disclose a list of verbs that is sufficient by
itself to complete the game, and to set this property to true once
they've done so.



<span id="conversationAbbr"></span>

`conversationAbbr`

[instruct.t](../file/instruct.t.html)\[[129](../source/instruct.t.html#129)\]



conversation verb abbreviations



<span id="conversationInstructions"></span>

`conversationInstructions`

[instruct.t](../file/instruct.t.html)\[[219](../source/instruct.t.html#219)\]



Conversation system description. Several different conversation systems
have come into relatively widespread use, so there isn't any single
convention that's generic enough that we can assume it holds for all
games. In deference to this variability, we provide this hook to make it
easy to replace the instructions pertaining to the conversation system.
If the game uses the standard ASK/TELL system, it can leave this list
unchanged; if the game uses a different system, it can replace this with
its own instructions.

We'll include information on the TALK TO command if there are any
in-conversation state objects in the game; if not, we'll assume there's
no need for this command.

We'll mention the TOPICS command if there are any SuggestedTopic
instances in the game; if not, then the game will never have anything to
suggest, so the TOPICS command isn't needed.

We'll include information on special topics if there are any
SpecialTopic objects defined.



<span id="conversationVerbs"></span>

`conversationVerbs`

[instruct.t](../file/instruct.t.html)\[[118](../source/instruct.t.html#118)\]



Verbs relating specifically to character interaction. This is in the
same format as customVerbs, and has essentially the same purpose;
however, we call these out separately to allow each game not only to
supplement the default list we provide but to replace our default list.
This is desirable for conversation-related commands in particular
because some games will not use the ASK/TELL conversation system at all
and will thus want to remove any mention of the standard set of verbs.



<span id="crueltyLevel"></span>

`crueltyLevel`

[instruct.t](../file/instruct.t.html)\[[188](../source/instruct.t.html#188)\]



This property should be set on a game-by-game basis to indicate the
"cruelty level" of the game, which is a rough estimation of how likely
it is that the player will encounter an unwinnable position in the game.

Level 0 is "kind," which means that the player character can never be
killed, and it's impossible to make the game unwinnable. When this
setting is used, the instructions will reassure the player that saving
is necessary only to suspend the session.

Level 1 is "standard," which means that the player character can be
killed, and/or that unwinnable positions are possible, but that there
are no especially bad unwinnable situations. When this setting is
selected, we'll warn the player that they should save every so often.

(An "especially bad" situation is one in which the game becomes
unwinnable at some point, but this won't become apparent to the player
until much later. For example, suppose the first scene takes place in a
location that can never be reached again after the first scene, and
suppose that there's some object you can obtain in this scene. This
object will be required in the very last scene to win the game; if you
don't have the object, you can't win. This is an "especially bad"
unwinnable situation: if you leave the first scene without getting the
necessary object, the game is unwinnable from that point forward. In
order to win, you have to go back and play almost the whole game over
again. Saved positions are almost useless in a case like this, since
most of the saved positions will be after the fatal mistake; no matter
how often you saved, you'll still have to go back and do everything over
again from near the beginning.)

Level 2 is "cruel," which means that the game can become unwinnable in
especially bad ways, as described above. If this level is selected,
we'll warn the player more sternly to save frequently.

We set this to 1 ("standard") by default, because even games that aren't
intentionally designed to be cruel often have subtle situations where
the game becomes unwinnable, because of things like the irreversible
loss of an object, or an unrepeatable event sequence; it almost always
takes extra design work to ensure that a game is always winnable.



<span id="customVerbs"></span>

`customVerbs`

[instruct.t](../file/instruct.t.html)\[[106](../source/instruct.t.html#106)\]



A list of custom verbs. Each game should set this to a list of
single-quoted strings; each string gives an example of a verb to display
in the list of sample verbs. Something like this:

customVerbs = \['brush my teeth', 'pick the lock'\]



<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[992](../source/instruct.t.html#992)\]



*no description available*



<span id="isRealTime"></span>

`isRealTime`

[instruct.t](../file/instruct.t.html)\[[195](../source/instruct.t.html#195)\]



Does this game have any real-time features? If so, set this to true. By
default, we'll explain that game time passes only in response to command
input.



<span id="isRepeatable"></span>

`isRepeatable`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[991](../source/instruct.t.html#991)\]



INSTRUCTIONS doesn't affect UNDO or AGAIN



<span id="truncationLength"></span>

`truncationLength`

[instruct.t](../file/instruct.t.html)\[[141](../source/instruct.t.html#141)\]



Truncation length. If the game's parser allows words to be abbreviated
to some minimum number of letters, this should indicate the minimum
length. The English parser uses a truncation length of 6 letters by
default.

Set this to nil if the game doesn't allow truncation at all.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execSystemAction"></span>

`execSystemAction ( )`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[299](../source/instruct.t.html#299)\]



execute the command



<span id="showAbbrevChapter"></span>

`showAbbrevChapter ( )`

[instruct.t](../file/instruct.t.html)\[[547](../source/instruct.t.html#547)\]



Abbreviations chapter



<span id="showAdvancedCmdChapter"></span>

`showAdvancedCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[870](../source/instruct.t.html#870)\]



Advance Command Formats chapter



<span id="showAmbiguousCmdChapter"></span>

`showAmbiguousCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[831](../source/instruct.t.html#831)\]



Ambiguous Commands chapter



<span id="showCommandsChapter"></span>

`showCommandsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[432](../source/instruct.t.html#432)\]



Entering Commands chapter



<span id="showConversationChapter"></span>

`showConversationChapter ( )`

[instruct.t](../file/instruct.t.html)\[[659](../source/instruct.t.html#659)\]



show the Conversation chapter



<span id="showInstructions"></span>

`showInstructions ( )`

[instruct.t](../file/instruct.t.html)\[[337](../source/instruct.t.html#337)\]



Show the instructions as a standard text display. Give the user the
option of turning on a SCRIPT file to capture the text.



<span id="showObjectsChapter"></span>

`showObjectsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[632](../source/instruct.t.html#632)\]



Objects chapter



<span id="showSaveRestoreChapter"></span>

`showSaveRestoreChapter ( )`

[instruct.t](../file/instruct.t.html)\[[698](../source/instruct.t.html#698)\]



Saving, Restoring, and Undo chapter



<span id="showSpecialCmdChapter"></span>

`showSpecialCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[770](../source/instruct.t.html#770)\]



Other Special Commands chapter



<span id="showTimeChapter"></span>

`showTimeChapter ( )`

[instruct.t](../file/instruct.t.html)\[[670](../source/instruct.t.html#670)\]



Time chapter



<span id="showTipsChapter"></span>

`showTipsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[933](../source/instruct.t.html#933)\]



General Tips chapter



<span id="showTravelChapter"></span>

`showTravelChapter ( )`

[instruct.t](../file/instruct.t.html)\[[586](../source/instruct.t.html#586)\]



Travel chapter



<span id="showUnknownWordsChapter"></span>

`showUnknownWordsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[816](../source/instruct.t.html#816)\]



Unknown Words chapter
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


