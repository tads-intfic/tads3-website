---
layout: docs
---
<span class="title">libMessages</span><span class="type">object</span>

[msg_neu.t](../file/msg_neu.t.html)\[[76](../source/msg_neu.t.html#76)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Library Messages

**`libMessages`**` :   `[`MessageHelper`](../object/MessageHelper.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`libMessages`**  
[`MessageHelper`](../object/MessageHelper.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`commandFullScore`](#commandFullScore) [`commandInterruptionPrefix`](#commandInterruptionPrefix) [`commandLookAround`](#commandLookAround) [`commandNotPresent`](#commandNotPresent) [`commandResultsEmpty`](#commandResultsEmpty) [`commandResultsPrefix`](#commandResultsPrefix) [`commandResultsSeparator`](#commandResultsSeparator) [`commandResultsSuffix`](#commandResultsSuffix) [`complexResultsSeparator`](#complexResultsSeparator) [`currentlyClosed`](#currentlyClosed) [`currentlyLocked`](#currentlyLocked) [`currentlyNoHints`](#currentlyNoHints) [`currentlyOpen`](#currentlyOpen) [`currentlyUnlocked`](#currentlyUnlocked) [`defaultsFileNotSupported`](#defaultsFileNotSupported) [`defaultsFileWriteError`](#defaultsFileWriteError) [`dlgButtonCancel`](#dlgButtonCancel) [`dlgButtonNo`](#dlgButtonNo) [`dlgButtonOk`](#dlgButtonOk) [`dlgButtonYes`](#dlgButtonYes) [`dlgTitleError`](#dlgTitleError) [`dlgTitleInfo`](#dlgTitleInfo) [`dlgTitleNone`](#dlgTitleNone) [`dlgTitleQuestion`](#dlgTitleQuestion) [`dlgTitleWarning`](#dlgTitleWarning) [`emptyCommandResponse`](#emptyCommandResponse) [`finishDeathMsg`](#finishDeathMsg) [`finishFailureMsg`](#finishFailureMsg) [`finishGameOverMsg`](#finishGameOverMsg) [`finishVictoryMsg`](#finishVictoryMsg) [`getRecordingPrompt`](#getRecordingPrompt) [`getReplayPrompt`](#getReplayPrompt) [`getRestorePrompt`](#getRestorePrompt) [`getSavePrompt`](#getSavePrompt) [`getScriptingPrompt`](#getScriptingPrompt) [`hintsDisabled`](#hintsDisabled) [`hintsDone`](#hintsDone) [`hintsNotPresent`](#hintsNotPresent) [`inputFileScriptWarningButtons`](#inputFileScriptWarningButtons) [`inputScriptFailed`](#inputScriptFailed) [`internalResultsSeparator`](#internalResultsSeparator) [`intraCommandSeparator`](#intraCommandSeparator) [`listSepEnd`](#listSepEnd) [`listSepMiddle`](#listSepMiddle) [`listSepTwo`](#listSepTwo) [`longListSepEnd`](#longListSepEnd) [`longListSepMiddle`](#longListSepMiddle) [`longListSepTwo`](#longListSepTwo) [`menuKeyList`](#menuKeyList) [`menuLongTopicEnd`](#menuLongTopicEnd) [`menuTopicListEnd`](#menuTopicListEnd) [`nextMenuTopicLink`](#nextMenuTopicLink) [`noAboutInfo`](#noAboutInfo) [`noteWithoutScript`](#noteWithoutScript) [`noteWithoutScriptWarning`](#noteWithoutScriptWarning) [`noteWithScript`](#noteWithScript) [`notOnboardShip`](#notOnboardShip) [`noTopicsNotTalking`](#noTopicsNotTalking) [`offerOopsNote`](#offerOopsNote) [`oopsMissingWord`](#oopsMissingWord) [`oopsOutOfContext`](#oopsOutOfContext) [`prevMenuLink`](#prevMenuLink) [`recordingCanceled`](#recordingCanceled) [`recordingFailed`](#recordingFailed) [`recordingOkay`](#recordingOkay) [`recordOffIgnored`](#recordOffIgnored) [`recordOffOkay`](#recordOffOkay) [`replayCanceled`](#replayCanceled) [`roomDarkDesc`](#roomDarkDesc) [`roomDarkName`](#roomDarkName) [`scoreNotPresent`](#scoreNotPresent) [`scriptingCanceled`](#scriptingCanceled) [`scriptingFailed`](#scriptingFailed) [`scriptOffIgnored`](#scriptOffIgnored) [`scriptOffOkay`](#scriptOffOkay) [`settingsItemSeparator`](#settingsItemSeparator) [`showFullScorePrefix`](#showFullScorePrefix) [`showHintWarning`](#showHintWarning) [`sorryHintsDisabled`](#sorryHintsDisabled) [`webUploadTooBig`](#webUploadTooBig) [`whomPronoun`](#whomPronoun)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`acknowledgeFootnoteStatus`](#acknowledgeFootnoteStatus) [`acknowledgeNotifyStatus`](#acknowledgeNotifyStatus) [`acknowledgeTipStatus`](#acknowledgeTipStatus) [`acknowledgeVerboseMode`](#acknowledgeVerboseMode) [`actorHereGroupPrefix`](#actorHereGroupPrefix) [`actorHereGroupSuffix`](#actorHereGroupSuffix) [`actorInGroupPrefix`](#actorInGroupPrefix) [`actorInGroupSuffix`](#actorInGroupSuffix) [`actorInRemoteGroupPrefix`](#actorInRemoteGroupPrefix) [`actorInRemoteGroupSuffix`](#actorInRemoteGroupSuffix) [`actorInRemoteNestedRoom`](#actorInRemoteNestedRoom) [`actorInRemoteRoom`](#actorInRemoteRoom) [`actorInRoom`](#actorInRoom) [`actorInRoomPosture`](#actorInRoomPosture) [`actorInRoomStatus`](#actorInRoomStatus) [`actorThereGroupPrefix`](#actorThereGroupPrefix) [`actorThereGroupSuffix`](#actorThereGroupSuffix) [`againCannotChangeActor`](#againCannotChangeActor) [`againCannotTalkToTarget`](#againCannotTalkToTarget) [`againNotPossible`](#againNotPossible) [`allInSameListState`](#allInSameListState) [`alreadyTalkingTo`](#alreadyTalkingTo) [`announceAmbigActionObject`](#announceAmbigActionObject) [`announceDefaultObject`](#announceDefaultObject) [`announceImplicitAction`](#announceImplicitAction) [`announceMoveToBag`](#announceMoveToBag) [`announceMultiActionObject`](#announceMultiActionObject) [`announceRemappedAction`](#announceRemappedAction) [`basicScoreChange`](#basicScoreChange) [`candleBurnedOut`](#candleBurnedOut) [`cannotReachContents`](#cannotReachContents) [`cannotReachObject`](#cannotReachObject) [`cannotReachOutside`](#cannotReachOutside) [`cannotTalkTo`](#cannotTalkTo) [`closedMsg`](#closedMsg) [`confirmQuit`](#confirmQuit) [`confirmRestart`](#confirmRestart) [`currentExitsSettings`](#currentExitsSettings) [`defaultsFileReadError`](#defaultsFileReadError) [`dimReadDesc`](#dimReadDesc) [`distantThingDesc`](#distantThingDesc) [`distantThingSmellDesc`](#distantThingSmellDesc) [`distantThingSoundDesc`](#distantThingSoundDesc) [`exitsOnOffOkay`](#exitsOnOffOkay) [`explainExitsOnOff`](#explainExitsOnOff) [`filePromptFailed`](#filePromptFailed) [`filePromptFailedMsg`](#filePromptFailedMsg) [`firstFootnote`](#firstFootnote) [`firstScoreChange`](#firstScoreChange) [`footnoteRef`](#footnoteRef) [`fullScoreItemPoints`](#fullScoreItemPoints) [`inputFileScriptWarning`](#inputFileScriptWarning) [`inputScriptFailedException`](#inputScriptFailedException) [`inputScriptOkay`](#inputScriptOkay) [`invalidCommandToken`](#invalidCommandToken) [`invalidFinishOption`](#invalidFinishOption) [`litCandleDesc`](#litCandleDesc) [`litMatchDesc`](#litMatchDesc) [`lockedMsg`](#lockedMsg) [`mainCommandPrompt`](#mainCommandPrompt) [`makeSentence`](#makeSentence) [`matchBurnedOut`](#matchBurnedOut) [`mentionFullScore`](#mentionFullScore) [`menuInstructions`](#menuInstructions) [`menuNextChapter`](#menuNextChapter) [`menuTopicProgress`](#menuTopicProgress) [`noCommandForAgain`](#noCommandForAgain) [`noSuchFootnote`](#noSuchFootnote) [`noteMainRestore`](#noteMainRestore) [`notRestarting`](#notRestarting) [`notTerminating`](#notTerminating) [`objBurnedOut`](#objBurnedOut) [`obscuredReadDesc`](#obscuredReadDesc) [`obscuredThingDesc`](#obscuredThingDesc) [`obscuredThingSmellDesc`](#obscuredThingSmellDesc) [`obscuredThingSoundDesc`](#obscuredThingSoundDesc) [`offMsg`](#offMsg) [`okayQuitting`](#okayQuitting) [`onMsg`](#onMsg) [`oopsNote`](#oopsNote) [`openMsg`](#openMsg) [`openStatusMsg`](#openStatusMsg) [`parserErrorString`](#parserErrorString) [`pauseEnded`](#pauseEnded) [`pausePrompt`](#pausePrompt) [`pauseSaving`](#pauseSaving) [`pcDesc`](#pcDesc) [`putDestBehind`](#putDestBehind) [`putDestContainer`](#putDestContainer) [`putDestFloor`](#putDestFloor) [`putDestRoom`](#putDestRoom) [`putDestSurface`](#putDestSurface) [`putDestUnder`](#putDestUnder) [`recordingFailedException`](#recordingFailedException) [`restoreCanceled`](#restoreCanceled) [`restoreCorruptedFile`](#restoreCorruptedFile) [`restoredDefaults`](#restoredDefaults) [`restoreFailed`](#restoreFailed) [`restoreFailedOnServer`](#restoreFailedOnServer) [`restoreInvalidFile`](#restoreInvalidFile) [`restoreInvalidMatch`](#restoreInvalidMatch) [`restoreOkay`](#restoreOkay) [`roomActorHereDesc`](#roomActorHereDesc) [`roomActorPostureDesc`](#roomActorPostureDesc) [`roomActorStatus`](#roomActorStatus) [`roomActorThereDesc`](#roomActorThereDesc) [`saveCanceled`](#saveCanceled) [`savedDefaults`](#savedDefaults) [`saveFailed`](#saveFailed) [`saveFailedOnServer`](#saveFailedOnServer) [`saveOkay`](#saveOkay) [`sayArriving`](#sayArriving) [`sayArrivingDir`](#sayArrivingDir) [`sayArrivingDownStairs`](#sayArrivingDownStairs) [`sayArrivingLocally`](#sayArrivingLocally) [`sayArrivingShipDir`](#sayArrivingShipDir) [`sayArrivingThroughPassage`](#sayArrivingThroughPassage) [`sayArrivingUpStairs`](#sayArrivingUpStairs) [`sayArrivingViaPath`](#sayArrivingViaPath) [`sayDeparting`](#sayDeparting) [`sayDepartingAft`](#sayDepartingAft) [`sayDepartingDir`](#sayDepartingDir) [`sayDepartingDownStairs`](#sayDepartingDownStairs) [`sayDepartingFore`](#sayDepartingFore) [`sayDepartingLocally`](#sayDepartingLocally) [`sayDepartingShipDir`](#sayDepartingShipDir) [`sayDepartingThroughPassage`](#sayDepartingThroughPassage) [`sayDepartingUpStairs`](#sayDepartingUpStairs) [`sayDepartingViaPath`](#sayDepartingViaPath) [`sayDepartingWith`](#sayDepartingWith) [`sayDepartingWithGuide`](#sayDepartingWithGuide) [`sayOpenDoorRemotely`](#sayOpenDoorRemotely) [`sayTravelingRemotely`](#sayTravelingRemotely) [`scoreChange`](#scoreChange) [`scriptingFailedException`](#scriptingFailedException) [`scriptingOkay`](#scriptingOkay) [`scriptingOkayWebTemp`](#scriptingOkayWebTemp) [`shortFootnoteStatus`](#shortFootnoteStatus) [`shortNotifyStatus`](#shortNotifyStatus) [`shortVerboseStatus`](#shortVerboseStatus) [`showCredit`](#showCredit) [`showFinishMsg`](#showFinishMsg) [`showFootnoteStatus`](#showFootnoteStatus) [`showListState`](#showListState) [`showNotifyStatus`](#showNotifyStatus) [`showScoreMessage`](#showScoreMessage) [`showScoreNoMaxMessage`](#showScoreNoMaxMessage) [`showScoreRankMessage`](#showScoreRankMessage) [`showVersion`](#showVersion) [`silentImplicitAction`](#silentImplicitAction) [`smellDescSeparator`](#smellDescSeparator) [`smellIsFromWithin`](#smellIsFromWithin) [`smellIsFromWithout`](#smellIsFromWithout) [`soundDescSeparator`](#soundDescSeparator) [`soundIsFromWithin`](#soundIsFromWithin) [`soundIsFromWithout`](#soundIsFromWithout) [`systemActionToNPC`](#systemActionToNPC) [`textMenuMainPrompt`](#textMenuMainPrompt) [`textMenuTopicPrompt`](#textMenuTopicPrompt) [`thingFeelDesc`](#thingFeelDesc) [`thingTasteDesc`](#thingTasteDesc) [`tipStatusShort`](#tipStatusShort) [`undoFailed`](#undoFailed) [`undoOkay`](#undoOkay) [`unlitMatchDesc`](#unlitMatchDesc) [`unlockedMsg`](#unlockedMsg) [`webNewUser`](#webNewUser)

Inherited from `MessageHelper` :  
[`askDisambigList`](../object/MessageHelper.html#askDisambigList) [`shortTIMsg`](../object/MessageHelper.html#shortTIMsg) [`shortTMsg`](../object/MessageHelper.html#shortTMsg)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="commandFullScore"></span>

`commandFullScore`

[msg_neu.t](../file/msg_neu.t.html)\[[114](../source/msg_neu.t.html#114)\]



*no description available*



<span id="commandInterruptionPrefix"></span>

`commandInterruptionPrefix`

[msg_neu.t](../file/msg_neu.t.html)\[[475](../source/msg_neu.t.html#475)\]



Command "interruption" group prefix. This is displayed after an
interrupted command line - a command line editing session that was
interrupted by a timeout event - just before the text that interrupted
the command line.

By default, we'll show a paragraph break here, to set off the
interrupting text from the command line under construction.



<span id="commandLookAround"></span>

`commandLookAround`

[msg_neu.t](../file/msg_neu.t.html)\[[113](../source/msg_neu.t.html#113)\]



some standard commands for insertion into \<a\> tags - these are in the
messages so they can translated along with the command set



<span id="commandNotPresent"></span>

`commandNotPresent`

[msg_neu.t](../file/msg_neu.t.html)\[[1094](../source/msg_neu.t.html#1094)\]



optional command is not supported in this game



<span id="commandResultsEmpty"></span>

`commandResultsEmpty`

[msg_neu.t](../file/msg_neu.t.html)\[[533](../source/msg_neu.t.html#533)\]



Empty command results - this is shown when we read a command line and
then go back and read another without having displaying anything.

By default, we'll return a message indicating that nothing happened.



<span id="commandResultsPrefix"></span>

`commandResultsPrefix`

[msg_neu.t](../file/msg_neu.t.html)\[[464](../source/msg_neu.t.html#464)\]



Command group prefix - this is displayed after a command line and before
the first command results shown after the command line.

By default, we'll show the "zero-space paragraph" marker, which acts
like a paragraph break in that it swallows up immediately following
paragraph breaks, but doesn't actually add any space. This will ensure
that we don't add any space between the command input line and the next
text.



<span id="commandResultsSeparator"></span>

`commandResultsSeparator`

[msg_neu.t](../file/msg_neu.t.html)\[[493](../source/msg_neu.t.html#493)\]



Command separator - this is displayed after the results from a command
when another command is about to be executed without any more user
input. That is, when a command line contains more than one command, this
message is displayed between each successive command, to separate the
results visually.

This is not shown before the first command results after a command input
line, and is not shown after the last results before a new input line.
Furthermore, this is shown only between adjacent commands for which
output actually occurs; if a series of commands executes without any
output, we won't show any separators between the silent commands.

By default, we'll just start a new paragraph.



<span id="commandResultsSuffix"></span>

`commandResultsSuffix`

[msg_neu.t](../file/msg_neu.t.html)\[[523](../source/msg_neu.t.html#523)\]



Command results suffix - this is displayed just before a new command
line is about to be read if any command results have been shown since
the last command line.

By default, we'll show nothing extra.



<span id="complexResultsSeparator"></span>

`complexResultsSeparator`

[msg_neu.t](../file/msg_neu.t.html)\[[506](../source/msg_neu.t.html#506)\]



"Complex" result separator - this is displayed between a group of
messages for a "complex" result set and adjoining messages. A command
result list is "complex" when it's built up out of several generated
items, such as object identification prefixes or implied command
prefixes. We use additional visual separation to set off these groups of
messages from adjoining messages, which is especially important for
commands on multiple objects, where we would otherwise have several
results shown together. By default, we use a paragraph break.



<span id="currentlyClosed"></span>

`currentlyClosed`

[msg_neu.t](../file/msg_neu.t.html)\[[1665](../source/msg_neu.t.html#1665)\]



*no description available*



<span id="currentlyLocked"></span>

`currentlyLocked`

[msg_neu.t](../file/msg_neu.t.html)\[[1675](../source/msg_neu.t.html#1675)\]



object is currently locked/unlocked



<span id="currentlyNoHints"></span>

`currentlyNoHints`

[msg_neu.t](../file/msg_neu.t.html)\[[1077](../source/msg_neu.t.html#1077)\]



there are currently no hints available (but there might be later)



<span id="currentlyOpen"></span>

`currentlyOpen`

[msg_neu.t](../file/msg_neu.t.html)\[[1664](../source/msg_neu.t.html#1664)\]



object is currently open/closed



<span id="currentlyUnlocked"></span>

`currentlyUnlocked`

[msg_neu.t](../file/msg_neu.t.html)\[[1676](../source/msg_neu.t.html#1676)\]



*no description available*



<span id="defaultsFileNotSupported"></span>

`defaultsFileNotSupported`

[msg_neu.t](../file/msg_neu.t.html)\[[1137](../source/msg_neu.t.html#1137)\]



SAVE/RESTORE DEFAULTS not supported (old interpreter version)



<span id="defaultsFileWriteError"></span>

`defaultsFileWriteError`

[msg_neu.t](../file/msg_neu.t.html)\[[1150](../source/msg_neu.t.html#1150)\]



SAVE DEFAULTS file creation error



<span id="dlgButtonCancel"></span>

`dlgButtonCancel`

[msg_neu.t](../file/msg_neu.t.html)\[[1727](../source/msg_neu.t.html#1727)\]



*no description available*



<span id="dlgButtonNo"></span>

`dlgButtonNo`

[msg_neu.t](../file/msg_neu.t.html)\[[1729](../source/msg_neu.t.html#1729)\]



*no description available*



<span id="dlgButtonOk"></span>

`dlgButtonOk`

[msg_neu.t](../file/msg_neu.t.html)\[[1726](../source/msg_neu.t.html#1726)\]



Standard dialog button labels, for the Web UI. These are built in to the
conventional interpreters, but in the Web UI we have to generate these
ourselves.



<span id="dlgButtonYes"></span>

`dlgButtonYes`

[msg_neu.t](../file/msg_neu.t.html)\[[1728](../source/msg_neu.t.html#1728)\]



*no description available*



<span id="dlgTitleError"></span>

`dlgTitleError`

[msg_neu.t](../file/msg_neu.t.html)\[[1719](../source/msg_neu.t.html#1719)\]



*no description available*



<span id="dlgTitleInfo"></span>

`dlgTitleInfo`

[msg_neu.t](../file/msg_neu.t.html)\[[1717](../source/msg_neu.t.html#1717)\]



*no description available*



<span id="dlgTitleNone"></span>

`dlgTitleNone`

[msg_neu.t](../file/msg_neu.t.html)\[[1715](../source/msg_neu.t.html#1715)\]



Standard dialog titles, for the Web UI. These are shown in the title bar
area of the Web UI dialog used for inputDialog() calls. These correspond
to the InDlgIconXxx icons. The conventional interpreters use built-in
titles when titles are needed at all, but in the Web UI we have to
generate these ourselves.



<span id="dlgTitleQuestion"></span>

`dlgTitleQuestion`

[msg_neu.t](../file/msg_neu.t.html)\[[1718](../source/msg_neu.t.html#1718)\]



*no description available*



<span id="dlgTitleWarning"></span>

`dlgTitleWarning`

[msg_neu.t](../file/msg_neu.t.html)\[[1716](../source/msg_neu.t.html#1716)\]



*no description available*



<span id="emptyCommandResponse"></span>

`emptyCommandResponse`

[msg_neu.t](../file/msg_neu.t.html)\[[445](../source/msg_neu.t.html#445)\]



show the response to an empty command line



<span id="finishDeathMsg"></span>

`finishDeathMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[768](../source/msg_neu.t.html#768)\]



standard game-ending messages for the common outcomes



<span id="finishFailureMsg"></span>

`finishFailureMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[770](../source/msg_neu.t.html#770)\]



*no description available*



<span id="finishGameOverMsg"></span>

`finishGameOverMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[771](../source/msg_neu.t.html#771)\]



*no description available*



<span id="finishVictoryMsg"></span>

`finishVictoryMsg`

[msg_neu.t](../file/msg_neu.t.html)\[[769](../source/msg_neu.t.html#769)\]



*no description available*



<span id="getRecordingPrompt"></span>

`getRecordingPrompt`

[msg_neu.t](../file/msg_neu.t.html)\[[959](../source/msg_neu.t.html#959)\]



get the RECORD prompt



<span id="getReplayPrompt"></span>

`getReplayPrompt`

[msg_neu.t](../file/msg_neu.t.html)\[[988](../source/msg_neu.t.html#988)\]



REPLAY prompt



<span id="getRestorePrompt"></span>

`getRestorePrompt`

[msg_neu.t](../file/msg_neu.t.html)\[[781](../source/msg_neu.t.html#781)\]



get the restore-game prompt



<span id="getSavePrompt"></span>

`getSavePrompt`

[msg_neu.t](../file/msg_neu.t.html)\[[778](../source/msg_neu.t.html#778)\]



Get the save-game file prompt. Note that this must return a
single-quoted string value, not display a value itself, because this
prompt is passed to inputFile().



<span id="getScriptingPrompt"></span>

`getScriptingPrompt`

[msg_neu.t](../file/msg_neu.t.html)\[[920](../source/msg_neu.t.html#920)\]



get the scripting inputFile prompt message



<span id="hintsDisabled"></span>

`hintsDisabled`

[msg_neu.t](../file/msg_neu.t.html)\[[1064](../source/msg_neu.t.html#1064)\]



acknowledge HINTS OFF



<span id="hintsDone"></span>

`hintsDone`

[msg_neu.t](../file/msg_neu.t.html)\[[1091](../source/msg_neu.t.html#1091)\]



done with hints



<span id="hintsNotPresent"></span>

`hintsNotPresent`

[msg_neu.t](../file/msg_neu.t.html)\[[1073](../source/msg_neu.t.html#1073)\]



this game has no hints



<span id="inputFileScriptWarningButtons"></span>

`inputFileScriptWarningButtons`

[msg_neu.t](../file/msg_neu.t.html)\[[1748](../source/msg_neu.t.html#1748)\]



build the message



<span id="inputScriptFailed"></span>

`inputScriptFailed`

[msg_neu.t](../file/msg_neu.t.html)\[[910](../source/msg_neu.t.html#910)\]



error opening input script



<span id="internalResultsSeparator"></span>

`internalResultsSeparator`

[msg_neu.t](../file/msg_neu.t.html)\[[514](../source/msg_neu.t.html#514)\]



Internal results separator - this is displayed to visually separate the
results of an implied command from the results for the initiating
command, which are shown after the results from the implied command. By
default, we show a paragraph break.



<span id="intraCommandSeparator"></span>

`intraCommandSeparator`

[msg_neu.t](../file/msg_neu.t.html)\[[541](../source/msg_neu.t.html#541)\]



Intra-command report separator. This is used to separate report messages
within a single command's results. By default, we show a paragraph
break.



<span id="listSepEnd"></span>

`listSepEnd`

[msg_neu.t](../file/msg_neu.t.html)\[[265](../source/msg_neu.t.html#265)\]



the list separator for the end of a list of at least three elements



<span id="listSepMiddle"></span>

`listSepMiddle`

[msg_neu.t](../file/msg_neu.t.html)\[[259](../source/msg_neu.t.html#259)\]



the list separator character in the middle of a list



<span id="listSepTwo"></span>

`listSepTwo`

[msg_neu.t](../file/msg_neu.t.html)\[[262](../source/msg_neu.t.html#262)\]



the list separator character for a two-element list



<span id="longListSepEnd"></span>

`longListSepEnd`

[msg_neu.t](../file/msg_neu.t.html)\[[277](../source/msg_neu.t.html#277)\]



the list separator for the end of a long list



<span id="longListSepMiddle"></span>

`longListSepMiddle`

[msg_neu.t](../file/msg_neu.t.html)\[[271](../source/msg_neu.t.html#271)\]



the list separator for the middle of a long list (a list with embedded
lists not otherwise set off, such as by parentheses)



<span id="longListSepTwo"></span>

`longListSepTwo`

[msg_neu.t](../file/msg_neu.t.html)\[[274](../source/msg_neu.t.html#274)\]



the list separator for a two-element list of sublists



<span id="menuKeyList"></span>

`menuKeyList`

[msg_neu.t](../file/msg_neu.t.html)\[[1166](../source/msg_neu.t.html#1166)\]



Command key list for the menu system. This uses the format defined for
MenuItem.keyList in the menu system. Keys must be given as lower-case in
order to match input, since the menu system converts input keys to lower
case before matching keys to this list.

Note that the first item in each list is what will be given in the
navigation menu, which is why the fifth list contains 'ENTER' as its
first item, even though this will never match a key press.



<span id="menuLongTopicEnd"></span>

`menuLongTopicEnd`

[msg_neu.t](../file/msg_neu.t.html)\[[1220](../source/msg_neu.t.html#1220)\]



Message to display at the end of a "long topic" in the menu system.
We'll display this at the end of the long topic's contents.



<span id="menuTopicListEnd"></span>

`menuTopicListEnd`

[msg_neu.t](../file/msg_neu.t.html)\[[1213](../source/msg_neu.t.html#1213)\]



Message to display at the end of a topic list. We'll display this after
we've displayed all available items from a MenuTopicItem's list of
items, to let the user know that there are no more items available.



<span id="nextMenuTopicLink"></span>

`nextMenuTopicLink`

[msg_neu.t](../file/msg_neu.t.html)\[[1178](../source/msg_neu.t.html#1178)\]



link title for 'next topic' navigation link in topic lists



<span id="noAboutInfo"></span>

`noAboutInfo`

[msg_neu.t](../file/msg_neu.t.html)\[[163](../source/msg_neu.t.html#163)\]



there's no "about" information in this game



<span id="noteWithoutScript"></span>

`noteWithoutScript`

[msg_neu.t](../file/msg_neu.t.html)\[[1015](../source/msg_neu.t.html#1015)\]



*no description available*



<span id="noteWithoutScriptWarning"></span>

`noteWithoutScriptWarning`

[msg_neu.t](../file/msg_neu.t.html)\[[1018](../source/msg_neu.t.html#1018)\]



on the first comment without transcript recording, warn about it



<span id="noteWithScript"></span>

`noteWithScript`

[msg_neu.t](../file/msg_neu.t.html)\[[1014](../source/msg_neu.t.html#1014)\]



comment accepted, with or without transcript recording in effect



<span id="notOnboardShip"></span>

`notOnboardShip`

[msg_neu.t](../file/msg_neu.t.html)\[[1564](../source/msg_neu.t.html#1564)\]



a shipboard direction was attempted while not onboard a ship



<span id="noTopicsNotTalking"></span>

`noTopicsNotTalking`

[msg_neu.t](../file/msg_neu.t.html)\[[575](../source/msg_neu.t.html#575)\]



no topics to suggest when we're not talking to anyone



<span id="offerOopsNote"></span>

`offerOopsNote`

[msg_neu.t](../file/msg_neu.t.html)\[[107](../source/msg_neu.t.html#107)\]



Flag: offer an explanation of the "OOPS" command when it first comes up.
We'll only show this the first time the player enters an unknown word.
If you never want to offer this message at all, simply set this flag to
nil initially.

See also oopsNote() below.



<span id="oopsMissingWord"></span>

`oopsMissingWord`

[msg_neu.t](../file/msg_neu.t.html)\[[594](../source/msg_neu.t.html#594)\]



OOPS in context, but without the word to correct



<span id="oopsOutOfContext"></span>

`oopsOutOfContext`

[msg_neu.t](../file/msg_neu.t.html)\[[589](../source/msg_neu.t.html#589)\]



can't use OOPS right now



<span id="prevMenuLink"></span>

`prevMenuLink`

[msg_neu.t](../file/msg_neu.t.html)\[[1175](../source/msg_neu.t.html#1175)\]



link title for 'previous menu' navigation link



<span id="recordingCanceled"></span>

`recordingCanceled`

[msg_neu.t](../file/msg_neu.t.html)\[[978](../source/msg_neu.t.html#978)\]



acknowledge cancellation



<span id="recordingFailed"></span>

`recordingFailed`

[msg_neu.t](../file/msg_neu.t.html)\[[968](../source/msg_neu.t.html#968)\]



recording failed



<span id="recordingOkay"></span>

`recordingOkay`

[msg_neu.t](../file/msg_neu.t.html)\[[962](../source/msg_neu.t.html#962)\]



acknowledge recording on



<span id="recordOffIgnored"></span>

`recordOffIgnored`

[msg_neu.t](../file/msg_neu.t.html)\[[984](../source/msg_neu.t.html#984)\]



RECORD OFF ignored because we're not recording commands



<span id="recordOffOkay"></span>

`recordOffOkay`

[msg_neu.t](../file/msg_neu.t.html)\[[981](../source/msg_neu.t.html#981)\]



recording turned off



<span id="replayCanceled"></span>

`replayCanceled`

[msg_neu.t](../file/msg_neu.t.html)\[[991](../source/msg_neu.t.html#991)\]



REPLAY file selection canceled



<span id="roomDarkDesc"></span>

`roomDarkDesc`

[msg_neu.t](../file/msg_neu.t.html)\[[1325](../source/msg_neu.t.html#1325)\]



generic long description of a dark room



<span id="roomDarkName"></span>

`roomDarkName`

[msg_neu.t](../file/msg_neu.t.html)\[[1322](../source/msg_neu.t.html#1322)\]



generic short description of a dark room



<span id="scoreNotPresent"></span>

`scoreNotPresent`

[msg_neu.t](../file/msg_neu.t.html)\[[1098](../source/msg_neu.t.html#1098)\]



this game doesn't use scoring



<span id="scriptingCanceled"></span>

`scriptingCanceled`

[msg_neu.t](../file/msg_neu.t.html)\[[949](../source/msg_neu.t.html#949)\]



acknowledge cancellation of script file dialog



<span id="scriptingFailed"></span>

`scriptingFailed`

[msg_neu.t](../file/msg_neu.t.html)\[[939](../source/msg_neu.t.html#939)\]



scripting failed



<span id="scriptOffIgnored"></span>

`scriptOffIgnored`

[msg_neu.t](../file/msg_neu.t.html)\[[955](../source/msg_neu.t.html#955)\]



SCRIPT OFF ignored because we're not in a script file



<span id="scriptOffOkay"></span>

`scriptOffOkay`

[msg_neu.t](../file/msg_neu.t.html)\[[952](../source/msg_neu.t.html#952)\]



acknowledge scripting off



<span id="settingsItemSeparator"></span>

`settingsItemSeparator`

[msg_neu.t](../file/msg_neu.t.html)\[[1134](../source/msg_neu.t.html#1134)\]



show a separator for the settingsUI.showAll() list



<span id="showFullScorePrefix"></span>

`showFullScorePrefix`

[msg_neu.t](../file/msg_neu.t.html)\[[302](../source/msg_neu.t.html#302)\]



show the list prefix for the full score listing; this is shown on a line
by itself before the list of full score items, shown indented and one
item per line



<span id="showHintWarning"></span>

`showHintWarning`

[msg_neu.t](../file/msg_neu.t.html)\[[1081](../source/msg_neu.t.html#1081)\]



show the hint system warning



<span id="sorryHintsDisabled"></span>

`sorryHintsDisabled`

[msg_neu.t](../file/msg_neu.t.html)\[[1067](../source/msg_neu.t.html#1067)\]



rebuff a request for hints when they've been previously disabled



<span id="webUploadTooBig"></span>

`webUploadTooBig`

[msg_neu.t](../file/msg_neu.t.html)\[[879](../source/msg_neu.t.html#879)\]



Web UI inputFile error: uploaded file is too large



<span id="whomPronoun"></span>

`whomPronoun`

[msg_neu.t](../file/msg_neu.t.html)\[[97](../source/msg_neu.t.html#97)\]



The pronoun to use for the objective form of the personal interrogative
pronoun. Strictly speaking, the right word for this usage is "whom"; but
regardless of what the grammar books say, most American English speakers
these days use "who" for both the subjective and objective cases; to
many ears, "whom" sounds old-fashioned, overly formal, or even
pretentious. (Case in point: a recent television ad tried to make a
little kid look ultra-sophisticated by having him answer the phone by
asking "\*whom\* may I ask is calling?", with elaborate emphasis on the
"whom." Of course, the correct usage in this case is "who," so the ad
only made the kid look pretentious. It goes to show that, at least in
the mind of the writer of the ad, "whom" is just the snooty, formal
version of "who" that serves only to signal the speaker's
sophistication.)

By default, we distinguish "who" and "whom." Authors who prefer to use
"who" everywhere can do so by changing this property's value to 'who'.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="acknowledgeFootnoteStatus"></span>

`acknowledgeFootnoteStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[412](../source/msg_neu.t.html#412)\]



acknowledge a change in the footnote status



<span id="acknowledgeNotifyStatus"></span>

`acknowledgeNotifyStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[620](../source/msg_neu.t.html#620)\]



acknowledge a change in the score notification status



<span id="acknowledgeTipStatus"></span>

`acknowledgeTipStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[341](../source/msg_neu.t.html#341)\]



acknowledge turning tips on or off



<span id="acknowledgeVerboseMode"></span>

`acknowledgeVerboseMode (verbose)`

[msg_neu.t](../file/msg_neu.t.html)\[[598](../source/msg_neu.t.html#598)\]



acknowledge setting VERBOSE mode (true) or TERSE mode (nil)



<span id="actorHereGroupPrefix"></span>

`actorHereGroupPrefix (posture, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1449](../source/msg_neu.t.html#1449)\]



Prefix/suffix messages for listing actors in a room description, for
cases when the actors' nominal container cannot be seen or is not to be
stated: "Bob and Bill are standing here."

Note that we don't always want to state the nominal container, even when
it's visible. For example, when actors are standing on the floor, we
don't bother saying that they're on the floor, as that's stating the
obvious. The container will decide whether or not it wants to be
included in the message; containers that don't want to be mentioned will
use this form of the message.



<span id="actorHereGroupSuffix"></span>

`actorHereGroupSuffix (posture, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1450](../source/msg_neu.t.html#1450)\]



*no description available*



<span id="actorInGroupPrefix"></span>

`actorInGroupPrefix (posture, cont, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1416](../source/msg_neu.t.html#1416)\]



Prefix/suffix messages for listing actors in a room description, for
cases when the actors are in the local room in a nominal container that
we want to mention: "Bob and Bill are sitting on the couch."



<span id="actorInGroupSuffix"></span>

`actorInGroupSuffix (posture, cont, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1417](../source/msg_neu.t.html#1417)\]



*no description available*



<span id="actorInRemoteGroupPrefix"></span>

`actorInRemoteGroupPrefix (pov, posture, cont, remote, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1429](../source/msg_neu.t.html#1429)\]



Prefix/suffix messages for listing actors in a room description, for
cases when the actors are inside a nested room that's inside a remote
location: "Bob and Bill are in the courtyard, sitting on the bench."



<span id="actorInRemoteGroupSuffix"></span>

`actorInRemoteGroupSuffix (pov, posture, cont, remote, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1430](../source/msg_neu.t.html#1430)\]



*no description available*



<span id="actorInRemoteNestedRoom"></span>

`actorInRemoteNestedRoom (actor, inner, outer, pov)`

[msg_neu.t](../file/msg_neu.t.html)\[[1399](../source/msg_neu.t.html#1399)\]



mention that the given actor is visible, at a distance or remotely, in
the given nested room within the given outer location; this is used in
room descriptions



<span id="actorInRemoteRoom"></span>

`actorInRemoteRoom (actor, room, pov)`

[msg_neu.t](../file/msg_neu.t.html)\[[1387](../source/msg_neu.t.html#1387)\]



mention that the given actor is visible, at a distance or remotely, in
the given location; this is used in room descriptions when an NPC is
visible in a remote or distant location



<span id="actorInRoom"></span>

`actorInRoom (actor, cont)`

[msg_neu.t](../file/msg_neu.t.html)\[[1352](../source/msg_neu.t.html#1352)\]



Mention that an actor is in a given local room, as part of a room
description. This is used as a default "special description" for an
actor.



<span id="actorInRoomPosture"></span>

`actorInRoomPosture (actor, room)`

[msg_neu.t](../file/msg_neu.t.html)\[[1364](../source/msg_neu.t.html#1364)\]



Describe an actor as standing/sitting/lying on something, as part of the
actor's EXAMINE description. This is additional information added to the
actor's description, so we refer to the actor with a pronoun ("He's
standing here").



<span id="actorInRoomStatus"></span>

`actorInRoomStatus (actor, room)`

[msg_neu.t](../file/msg_neu.t.html)\[[1318](../source/msg_neu.t.html#1318)\]



show a status line addendum: standing in/on something



<span id="actorThereGroupPrefix"></span>

`actorThereGroupPrefix (pov, posture, remote, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1462](../source/msg_neu.t.html#1462)\]



Prefix/suffix messages for listing actors in a room description, for
cases when the actors' immediate container cannot be seen or is not to
be stated, and the actors are in a remote location: "Bob and Bill are in
the courtyard."



<span id="actorThereGroupSuffix"></span>

`actorThereGroupSuffix (pov, posture, remote, lst)`

[msg_neu.t](../file/msg_neu.t.html)\[[1463](../source/msg_neu.t.html#1463)\]



*no description available*



<span id="againCannotChangeActor"></span>

`againCannotChangeActor ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[695](../source/msg_neu.t.html#695)\]



'again' cannot be directed to a different actor



<span id="againCannotTalkToTarget"></span>

`againCannotTalkToTarget (issuer, target)`

[msg_neu.t](../file/msg_neu.t.html)\[[702](../source/msg_neu.t.html#702)\]



'again': can no longer talk to target actor



<span id="againNotPossible"></span>

`againNotPossible (issuer)`

[msg_neu.t](../file/msg_neu.t.html)\[[708](../source/msg_neu.t.html#708)\]



the last command cannot be repeated in the present context



<span id="allInSameListState"></span>

`allInSameListState (lst, stateName)`

[msg_neu.t](../file/msg_neu.t.html)\[[174](../source/msg_neu.t.html#174)\]



a set of equivalents are all in a given state



<span id="alreadyTalkingTo"></span>

`alreadyTalkingTo (actor, greeter)`

[msg_neu.t](../file/msg_neu.t.html)\[[568](../source/msg_neu.t.html#568)\]



greeting actor while actor is already talking to us



<span id="announceAmbigActionObject"></span>

`announceAmbigActionObject (obj, whichObj, action)`

[msg_neu.t](../file/msg_neu.t.html)\[[655](../source/msg_neu.t.html#655)\]



Announce a singleton object that we selected from a set of ambiguous
objects. This is used when we disambiguate a command and choose an
object over other objects that are also logical but are less likely. In
such cases, it's courteous to tell the player what we chose, because
it's possible that the user meant one of the other logical objects -
announcing this type of choice helps reduce confusion by making it
immediately plain to the player when we make a choice other than what
they were thinking.



<span id="announceDefaultObject"></span>

`announceDefaultObject (obj, whichObj, action, resolvedAllObjects)`

[msg_neu.t](../file/msg_neu.t.html)\[[677](../source/msg_neu.t.html#677)\]



Announce a singleton object we selected as a default for a missing noun
phrase.

'resolvedAllObjects' indicates where we are in the command processing:
this is true if we've already resolved all of the other objects in the
command, nil if not. We use this information to get the phrasing right
according to the situation.



<span id="announceImplicitAction"></span>

`announceImplicitAction (action, ctx)`

[msg_neu.t](../file/msg_neu.t.html)\[[129](../source/msg_neu.t.html#129)\]



Get a string to announce an implicit action. This announces the current
global action. 'ctx' is an ImplicitAnnouncementContext object describing
the context in which the message is being displayed.



<span id="announceMoveToBag"></span>

`announceMoveToBag (action, ctx)`

[msg_neu.t](../file/msg_neu.t.html)\[[149](../source/msg_neu.t.html#149)\]



Get a string to announce that we're implicitly moving an object to a bag
of holding to make room for taking something new. If 'trying' is true,
it means we want to phrase the message as merely trying the action, not
actually performing it.



<span id="announceMultiActionObject"></span>

`announceMultiActionObject (obj, whichObj, action)`

[msg_neu.t](../file/msg_neu.t.html)\[[632](../source/msg_neu.t.html#632)\]



Announce the current object of a set of multiple objects on which we're
performing an action. This is used to tell the player which object we're
acting upon when we're iterating through a set of objects specified in a
command targeting multiple objects.



<span id="announceRemappedAction"></span>

`announceRemappedAction (action)`

[msg_neu.t](../file/msg_neu.t.html)\[[117](../source/msg_neu.t.html#117)\]



announce a completely remapped action



<span id="basicScoreChange"></span>

`basicScoreChange (delta)`

[msg_neu.t](../file/msg_neu.t.html)\[[332](../source/msg_neu.t.html#332)\]



basic score change notification message - this is an internal service
routine for scoreChange and firstScoreChange



<span id="candleBurnedOut"></span>

`candleBurnedOut (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1694](../source/msg_neu.t.html#1694)\]



daemon report for burning out a candle



<span id="cannotReachContents"></span>

`cannotReachContents (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1259](../source/msg_neu.t.html#1259)\]



cannot reach an object, because the object is inside the given container



<span id="cannotReachObject"></span>

`cannotReachObject (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1250](../source/msg_neu.t.html#1250)\]



cannot reach (i.e., touch) an object that is to be manipulated in a
command - this is a generic message used when we cannot identify the
specific reason that the object is in scope but cannot be touched



<span id="cannotReachOutside"></span>

`cannotReachOutside (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1267](../source/msg_neu.t.html#1267)\]



cannot reach an object because it's outisde the given container



<span id="cannotTalkTo"></span>

`cannotTalkTo (targetActor, issuingActor)`

[msg_neu.t](../file/msg_neu.t.html)\[[561](../source/msg_neu.t.html#561)\]



a command was issued to a non-actor



<span id="closedMsg"></span>

`closedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1661](../source/msg_neu.t.html#1661)\]



*no description available*



<span id="confirmQuit"></span>

`confirmQuit ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[721](../source/msg_neu.t.html#721)\]



confirm that we really want to quit



<span id="confirmRestart"></span>

`confirmRestart ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[751](../source/msg_neu.t.html#751)\]



confirm that they really want to restart



<span id="currentExitsSettings"></span>

`currentExitsSettings (statusLine, roomDesc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1050](../source/msg_neu.t.html#1050)\]



describe the current EXITS settings



<span id="defaultsFileReadError"></span>

`defaultsFileReadError (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1143](../source/msg_neu.t.html#1143)\]



RESTORE DEFAULTS file open/read error



<span id="dimReadDesc"></span>

`dimReadDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[234](../source/msg_neu.t.html#234)\]



dim light "read" description



<span id="distantThingDesc"></span>

`distantThingDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[178](../source/msg_neu.t.html#178)\]



generic long description of a Thing from a distance



<span id="distantThingSmellDesc"></span>

`distantThingSmellDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[203](../source/msg_neu.t.html#203)\]



generic "smell" description of a Thing at a distance



<span id="distantThingSoundDesc"></span>

`distantThingSoundDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[192](../source/msg_neu.t.html#192)\]



generic "listen" description of a Thing at a distance



<span id="exitsOnOffOkay"></span>

`exitsOnOffOkay (stat, look)`

[msg_neu.t](../file/msg_neu.t.html)\[[1029](../source/msg_neu.t.html#1029)\]



acknowledge new "exits on/off" status



<span id="explainExitsOnOff"></span>

`explainExitsOnOff ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1044](../source/msg_neu.t.html#1044)\]



explain how to turn exit display on and off



<span id="filePromptFailed"></span>

`filePromptFailed ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[865](../source/msg_neu.t.html#865)\]



error showing the input file dialog (or character-mode equivalent)



<span id="filePromptFailedMsg"></span>

`filePromptFailedMsg (msg)`

[msg_neu.t](../file/msg_neu.t.html)\[[873](../source/msg_neu.t.html#873)\]



error showing the input file dialog, with a system error message



<span id="firstFootnote"></span>

`firstFootnote ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[360](../source/msg_neu.t.html#360)\]



first footnote notification



<span id="firstScoreChange"></span>

`firstScoreChange (delta)`

[msg_neu.t](../file/msg_neu.t.html)\[[315](../source/msg_neu.t.html#315)\]



score change - first notification



<span id="footnoteRef"></span>

`footnoteRef (num)`

[msg_neu.t](../file/msg_neu.t.html)\[[353](../source/msg_neu.t.html#353)\]



get the string to display for a footnote reference



<span id="fullScoreItemPoints"></span>

`fullScoreItemPoints (points)`

[msg_neu.t](../file/msg_neu.t.html)\[[309](../source/msg_neu.t.html#309)\]



show the item prefix, with the number of points, for a full score item -
immediately after this is displayed, we'll display the description
message for the achievement



<span id="inputFileScriptWarning"></span>

`inputFileScriptWarning (warning, filename)`

[msg_neu.t](../file/msg_neu.t.html)\[[1740](../source/msg_neu.t.html#1740)\]



Warning prompt for inputFile() warnings generated when reading a script
file, for the Web UI. The interpreter normally displays these warnings
directly, but in Web UI mode, the program is responsible, so we need
localized messages.



<span id="inputScriptFailedException"></span>

`inputScriptFailedException (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[914](../source/msg_neu.t.html#914)\]



exception opening input script



<span id="inputScriptOkay"></span>

`inputScriptOkay (fname)`

[msg_neu.t](../file/msg_neu.t.html)\[[903](../source/msg_neu.t.html#903)\]



acknowledge starting an input script



<span id="invalidCommandToken"></span>

`invalidCommandToken (ch)`

[msg_neu.t](../file/msg_neu.t.html)\[[448](../source/msg_neu.t.html#448)\]



invalid token (i.e., punctuation) in command line



<span id="invalidFinishOption"></span>

`invalidFinishOption (resp)`

[msg_neu.t](../file/msg_neu.t.html)\[[1023](../source/msg_neu.t.html#1023)\]



invalid finishGame response



<span id="litCandleDesc"></span>

`litCandleDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[245](../source/msg_neu.t.html#245)\]



lit candle description



<span id="litMatchDesc"></span>

`litMatchDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[241](../source/msg_neu.t.html#241)\]



lit/unlit match description



<span id="lockedMsg"></span>

`lockedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1671](../source/msg_neu.t.html#1671)\]



locked/unlocked status - adjectives describing lock states



<span id="mainCommandPrompt"></span>

`mainCommandPrompt (which)`

[msg_neu.t](../file/msg_neu.t.html)\[[436](../source/msg_neu.t.html#436)\]



Show the main command prompt.

'which' is one of the rmcXxx phase codes indicating what kind of command
we're reading. This default implementation shows the same prompt for
every type of input, but games can use the 'which' value to show
different prompts for different types of queries, if desired.



<span id="makeSentence"></span>

`makeSentence (msg)`

[msg_neu.t](../file/msg_neu.t.html)\[[809](../source/msg_neu.t.html#809)\]



make an error message into a sentence, by capitalizing the first letter
and adding a period at the end if it doesn't already have one



<span id="matchBurnedOut"></span>

`matchBurnedOut (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1686](../source/msg_neu.t.html#1686)\]



daemon report for burning out a match



<span id="mentionFullScore"></span>

`mentionFullScore ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1102](../source/msg_neu.t.html#1102)\]



mention the FULL SCORE command



<span id="menuInstructions"></span>

`menuInstructions (keylist, prevLink)`

[msg_neu.t](../file/msg_neu.t.html)\[[1227](../source/msg_neu.t.html#1227)\]



instructions text for banner-mode menus - this is displayed in the
instructions bar at the top of the screen, above the menu banner area



<span id="menuNextChapter"></span>

`menuNextChapter (keylist, title, hrefNext, hrefUp)`

[msg_neu.t](../file/msg_neu.t.html)\[[1238](../source/msg_neu.t.html#1238)\]



show a 'next chapter' link



<span id="menuTopicProgress"></span>

`menuTopicProgress (cur, tot)`

[msg_neu.t](../file/msg_neu.t.html)\[[1205](../source/msg_neu.t.html#1205)\]



Position indicator for topic list items - this is displayed after a
topic list item to show the current item number and the total number of
items in the list, to give the user an idea of where they are in the
overall list.



<span id="noCommandForAgain"></span>

`noCommandForAgain ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[689](../source/msg_neu.t.html#689)\]



'again' used with no prior command



<span id="noSuchFootnote"></span>

`noSuchFootnote (num)`

[msg_neu.t](../file/msg_neu.t.html)\[[366](../source/msg_neu.t.html#366)\]



there is no such footnote as the given number



<span id="noteMainRestore"></span>

`noteMainRestore ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[817](../source/msg_neu.t.html#817)\]



note that we're restoring at startup via a saved-position launch



<span id="notRestarting"></span>

`notRestarting ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[758](../source/msg_neu.t.html#758)\]



"not restarting" confirmation



<span id="notTerminating"></span>

`notTerminating ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[745](../source/msg_neu.t.html#745)\]



"not terminating" confirmation - this is displayed when the player
doesn't acknowledge a 'quit' command with an affirmative response to our
confirmation question



<span id="objBurnedOut"></span>

`objBurnedOut (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1702](../source/msg_neu.t.html#1702)\]



daemon report for burning out a generic fueled light source



<span id="obscuredReadDesc"></span>

`obscuredReadDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[226](../source/msg_neu.t.html#226)\]



obscured "read" description



<span id="obscuredThingDesc"></span>

`obscuredThingDesc (obj, obs)`

[msg_neu.t](../file/msg_neu.t.html)\[[185](../source/msg_neu.t.html#185)\]



generic long description of a Thing under obscured conditions



<span id="obscuredThingSmellDesc"></span>

`obscuredThingSmellDesc (obj, obs)`

[msg_neu.t](../file/msg_neu.t.html)\[[207](../source/msg_neu.t.html#207)\]



generic obscured "smell" description



<span id="obscuredThingSoundDesc"></span>

`obscuredThingSoundDesc (obj, obs)`

[msg_neu.t](../file/msg_neu.t.html)\[[196](../source/msg_neu.t.html#196)\]



generic obscured "listen" description



<span id="offMsg"></span>

`offMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1683](../source/msg_neu.t.html#1683)\]



*no description available*



<span id="okayQuitting"></span>

`okayQuitting ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[738](../source/msg_neu.t.html#738)\]



QUIT message. We display this to acknowledge an explicit player command
to quit the game. This is the last message the game displays on the way
out; there is no need to offer any options at this point, because the
player has decided to exit the game.

By default, we show nothing; games can override this to display an
acknowledgment if desired. Note that this isn't a general end-of-game
'goodbye' message; the library only shows this to acknowledge an
explicit QUIT command from the player.



<span id="onMsg"></span>

`onMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1682](../source/msg_neu.t.html#1682)\]



on/off status - these are simply adjectives that can be used to describe
the status of a switchable object



<span id="oopsNote"></span>

`oopsNote ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[583](../source/msg_neu.t.html#583)\]



Show a note about the OOPS command. This is, by default, added to the "I
don't know that word" error the first time that error occurs.



<span id="openMsg"></span>

`openMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1660](../source/msg_neu.t.html#1660)\]



open/closed status - these are simply adjectives that can be used to
describe the status of an openable object



<span id="openStatusMsg"></span>

`openStatusMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1668](../source/msg_neu.t.html#1668)\]



stand-alone independent clause describing current open status



<span id="parserErrorString"></span>

`parserErrorString (actor, msg)`

[msg_neu.t](../file/msg_neu.t.html)\[[442](../source/msg_neu.t.html#442)\]



Show a pre-resolved error message string. This simply displays the given
string.



<span id="pauseEnded"></span>

`pauseEnded ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[897](../source/msg_neu.t.html#897)\]



PAUSE ended



<span id="pausePrompt"></span>

`pausePrompt ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[882](../source/msg_neu.t.html#882)\]



PAUSE prompt



<span id="pauseSaving"></span>

`pauseSaving ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[891](../source/msg_neu.t.html#891)\]



saving from within a pause



<span id="pcDesc"></span>

`pcDesc (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[1299](../source/msg_neu.t.html#1299)\]



default description of the player character



<span id="putDestBehind"></span>

`putDestBehind (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[254](../source/msg_neu.t.html#254)\]



*no description available*



<span id="putDestContainer"></span>

`putDestContainer (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[251](../source/msg_neu.t.html#251)\]



Prepositional phrases for putting objects into different types of
objects.



<span id="putDestFloor"></span>

`putDestFloor (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[255](../source/msg_neu.t.html#255)\]



*no description available*



<span id="putDestRoom"></span>

`putDestRoom (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[256](../source/msg_neu.t.html#256)\]



*no description available*



<span id="putDestSurface"></span>

`putDestSurface (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[252](../source/msg_neu.t.html#252)\]



*no description available*



<span id="putDestUnder"></span>

`putDestUnder (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[253](../source/msg_neu.t.html#253)\]



*no description available*



<span id="recordingFailedException"></span>

`recordingFailedException (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[972](../source/msg_neu.t.html#972)\]



recording failed with exception



<span id="restoreCanceled"></span>

`restoreCanceled ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[823](../source/msg_neu.t.html#823)\]



restore canceled



<span id="restoreCorruptedFile"></span>

`restoreCorruptedFile ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[840](../source/msg_neu.t.html#840)\]



restore failed because the file was corrupted



<span id="restoredDefaults"></span>

`restoredDefaults ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1122](../source/msg_neu.t.html#1122)\]



RESTORE DEFAULTS successful



<span id="restoreFailed"></span>

`restoreFailed (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[858](../source/msg_neu.t.html#858)\]



restore failed for some reason other than those distinguished above



<span id="restoreFailedOnServer"></span>

`restoreFailedOnServer (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[826](../source/msg_neu.t.html#826)\]



restore failed due to storage server request error



<span id="restoreInvalidFile"></span>

`restoreInvalidFile ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[833](../source/msg_neu.t.html#833)\]



restore failed because the file was not a valid saved game file



<span id="restoreInvalidMatch"></span>

`restoreInvalidMatch ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[850](../source/msg_neu.t.html#850)\]



restore failed because the file was for the wrong game or version



<span id="restoreOkay"></span>

`restoreOkay ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[820](../source/msg_neu.t.html#820)\]



successfully restored



<span id="roomActorHereDesc"></span>

`roomActorHereDesc (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[1331](../source/msg_neu.t.html#1331)\]



mention that an actor is here, without mentioning the enclosing room, as
part of a room description



<span id="roomActorPostureDesc"></span>

`roomActorPostureDesc (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[1375](../source/msg_neu.t.html#1375)\]



Describe an actor's posture, as part of an actor's "examine"
description. If the actor is standing, don't bother mentioning anything,
as standing is the trivial default condition.



<span id="roomActorStatus"></span>

`roomActorStatus (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[1310](../source/msg_neu.t.html#1310)\]



Show a status line addendum for the actor posture, without mentioning
the actor's location. We won't mention standing, since this is the
default posture.



<span id="roomActorThereDesc"></span>

`roomActorThereDesc (actor)`

[msg_neu.t](../file/msg_neu.t.html)\[[1342](../source/msg_neu.t.html#1342)\]



mention that an actor is visible at a distance or remotely, without
mentioning the enclosing room, as part of a room description



<span id="saveCanceled"></span>

`saveCanceled ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[787](../source/msg_neu.t.html#787)\]



save canceled



<span id="savedDefaults"></span>

`savedDefaults ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1108](../source/msg_neu.t.html#1108)\]



SAVE DEFAULTS successful



<span id="saveFailed"></span>

`saveFailed (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[790](../source/msg_neu.t.html#790)\]



saved failed due to a file write or similar error



<span id="saveFailedOnServer"></span>

`saveFailedOnServer (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[798](../source/msg_neu.t.html#798)\]



save failed due to storage server request error



<span id="saveOkay"></span>

`saveOkay ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[784](../source/msg_neu.t.html#784)\]



successfully saved



<span id="sayArriving"></span>

`sayArriving (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[1470](../source/msg_neu.t.html#1470)\]



a traveler is arriving, but not from a compass direction



<span id="sayArrivingDir"></span>

`sayArrivingDir (traveler, dirName)`

[msg_neu.t](../file/msg_neu.t.html)\[[1514](../source/msg_neu.t.html#1514)\]



a traveler is arriving from a compass direction



<span id="sayArrivingDownStairs"></span>

`sayArrivingDownStairs (traveler, stairs)`

[msg_neu.t](../file/msg_neu.t.html)\[[1618](../source/msg_neu.t.html#1618)\]



a traveler is arriving by coming down a stairway



<span id="sayArrivingLocally"></span>

`sayArrivingLocally (traveler, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[1487](../source/msg_neu.t.html#1487)\]



a traveler is arriving locally (staying within view throughout the
travel, and coming closer to the PC)



<span id="sayArrivingShipDir"></span>

`sayArrivingShipDir (traveler, dirName)`

[msg_neu.t](../file/msg_neu.t.html)\[[1530](../source/msg_neu.t.html#1530)\]



a traveler is arriving from a shipboard direction



<span id="sayArrivingThroughPassage"></span>

`sayArrivingThroughPassage (traveler, passage)`

[msg_neu.t](../file/msg_neu.t.html)\[[1574](../source/msg_neu.t.html#1574)\]



a traveler is arriving via a passage



<span id="sayArrivingUpStairs"></span>

`sayArrivingUpStairs (traveler, stairs)`

[msg_neu.t](../file/msg_neu.t.html)\[[1609](../source/msg_neu.t.html#1609)\]



a traveler is arriving by coming up a stairway



<span id="sayArrivingViaPath"></span>

`sayArrivingViaPath (traveler, passage)`

[msg_neu.t](../file/msg_neu.t.html)\[[1588](../source/msg_neu.t.html#1588)\]



a traveler is arriving via a path



<span id="sayDeparting"></span>

`sayDeparting (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[1477](../source/msg_neu.t.html#1477)\]



a traveler is departing, but not in a compass direction



<span id="sayDepartingAft"></span>

`sayDepartingAft (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[1546](../source/msg_neu.t.html#1546)\]



a traveler is going aft



<span id="sayDepartingDir"></span>

`sayDepartingDir (traveler, dirName)`

[msg_neu.t](../file/msg_neu.t.html)\[[1521](../source/msg_neu.t.html#1521)\]



a traveler is leaving in a given compass direction



<span id="sayDepartingDownStairs"></span>

`sayDepartingDownStairs (traveler, stairs)`

[msg_neu.t](../file/msg_neu.t.html)\[[1602](../source/msg_neu.t.html#1602)\]



a traveler is leaving down a stairway



<span id="sayDepartingFore"></span>

`sayDepartingFore (traveler)`

[msg_neu.t](../file/msg_neu.t.html)\[[1555](../source/msg_neu.t.html#1555)\]



a traveler is going fore



<span id="sayDepartingLocally"></span>

`sayDepartingLocally (traveler, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[1497](../source/msg_neu.t.html#1497)\]



a traveler is departing locally (staying within view throughout the
travel, and moving further away from the PC)



<span id="sayDepartingShipDir"></span>

`sayDepartingShipDir (traveler, dirName)`

[msg_neu.t](../file/msg_neu.t.html)\[[1537](../source/msg_neu.t.html#1537)\]



a traveler is leaving in a given shipboard direction



<span id="sayDepartingThroughPassage"></span>

`sayDepartingThroughPassage (traveler, passage)`

[msg_neu.t](../file/msg_neu.t.html)\[[1567](../source/msg_neu.t.html#1567)\]



a traveler is leaving via a passage



<span id="sayDepartingUpStairs"></span>

`sayDepartingUpStairs (traveler, stairs)`

[msg_neu.t](../file/msg_neu.t.html)\[[1595](../source/msg_neu.t.html#1595)\]



a traveler is leaving up a stairway



<span id="sayDepartingViaPath"></span>

`sayDepartingViaPath (traveler, passage)`

[msg_neu.t](../file/msg_neu.t.html)\[[1581](../source/msg_neu.t.html#1581)\]



a traveler is leaving via a path



<span id="sayDepartingWith"></span>

`sayDepartingWith (traveler, lead)`

[msg_neu.t](../file/msg_neu.t.html)\[[1627](../source/msg_neu.t.html#1627)\]



acompanying another actor on travel



<span id="sayDepartingWithGuide"></span>

`sayDepartingWithGuide (guide, lead)`

[msg_neu.t](../file/msg_neu.t.html)\[[1642](../source/msg_neu.t.html#1642)\]



Accompanying a tour guide. Note the seemingly reversed roles: the lead
actor is the one initiating the travel, and the tour guide is the
accompanying actor. So, the lead actor is effectively following the
accompanying actor. It seems backwards, but really it's not: the tour
guide merely shows the lead actor where to go, but it's up to the lead
actor to actually initiate the travel.



<span id="sayOpenDoorRemotely"></span>

`sayOpenDoorRemotely (door, stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[1649](../source/msg_neu.t.html#1649)\]



note that a door is being opened/closed remotely



<span id="sayTravelingRemotely"></span>

`sayTravelingRemotely (traveler, dest)`

[msg_neu.t](../file/msg_neu.t.html)\[[1507](../source/msg_neu.t.html#1507)\]



a traveler is traveling remotely (staying within view through the
travel, and moving from one remote top-level location to another)



<span id="scoreChange"></span>

`scoreChange (delta)`

[msg_neu.t](../file/msg_neu.t.html)\[[322](../source/msg_neu.t.html#322)\]



score change - notification other than the first time



<span id="scriptingFailedException"></span>

`scriptingFailedException (exc)`

[msg_neu.t](../file/msg_neu.t.html)\[[943](../source/msg_neu.t.html#943)\]



scripting failed with an exception



<span id="scriptingOkay"></span>

`scriptingOkay ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[923](../source/msg_neu.t.html#923)\]



acknowledge scripting on



<span id="scriptingOkayWebTemp"></span>

`scriptingOkayWebTemp ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[930](../source/msg_neu.t.html#930)\]



*no description available*



<span id="shortFootnoteStatus"></span>

`shortFootnoteStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[419](../source/msg_neu.t.html#419)\]



show the footnote status, in short form



<span id="shortNotifyStatus"></span>

`shortNotifyStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[617](../source/msg_neu.t.html#617)\]



show the current score notify status, in short form



<span id="shortVerboseStatus"></span>

`shortVerboseStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[607](../source/msg_neu.t.html#607)\]



show the current VERBOSE setting, in short form



<span id="showCredit"></span>

`showCredit (name, byline)`

[msg_neu.t](../file/msg_neu.t.html)\[[157](../source/msg_neu.t.html#157)\]



show a library credit (for a CREDITS listing)



<span id="showFinishMsg"></span>

`showFinishMsg (msg)`

[msg_neu.t](../file/msg_neu.t.html)\[[765](../source/msg_neu.t.html#765)\]



Show a game-finishing message - we use the conventional "\*\*\* You have
won! \*\*\*" format that text games have been using since the dawn of
time.



<span id="showFootnoteStatus"></span>

`showFootnoteStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[373](../source/msg_neu.t.html#373)\]



show the current footnote status



<span id="showListState"></span>

`showListState (state)`

[msg_neu.t](../file/msg_neu.t.html)\[[171](../source/msg_neu.t.html#171)\]



Show a list state name - this is extra state information that we show
for an object in a listing involving the object. For example, a light
source might add a state like "(providing light)". We simply show the
list state name in parentheses.



<span id="showNotifyStatus"></span>

`showNotifyStatus (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[610](../source/msg_neu.t.html#610)\]



show the current score notify status



<span id="showScoreMessage"></span>

`showScoreMessage (points, maxPoints, turns)`

[msg_neu.t](../file/msg_neu.t.html)\[[280](../source/msg_neu.t.html#280)\]



show the basic score message



<span id="showScoreNoMaxMessage"></span>

`showScoreNoMaxMessage (points, turns)`

[msg_neu.t](../file/msg_neu.t.html)\[[288](../source/msg_neu.t.html#288)\]



show the basic score message with no maximum



<span id="showScoreRankMessage"></span>

`showScoreRankMessage (msg)`

[msg_neu.t](../file/msg_neu.t.html)\[[295](../source/msg_neu.t.html#295)\]



show the full message for a given score rank string



<span id="showVersion"></span>

`showVersion (name, version)`

[msg_neu.t](../file/msg_neu.t.html)\[[160](../source/msg_neu.t.html#160)\]



show a library version number (for a VERSION listing)



<span id="silentImplicitAction"></span>

`silentImplicitAction (action, ctx)`

[msg_neu.t](../file/msg_neu.t.html)\[[141](../source/msg_neu.t.html#141)\]



Announce a silent implied action. This allows an implied action to work
exactly as normal (including the suppression of a default response
message), but without any announcement of the implied action.



<span id="smellDescSeparator"></span>

`smellDescSeparator ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[547](../source/msg_neu.t.html#547)\]



separator for "smell" results - we ordinarily show each item's odor
description as a separate paragraph



<span id="smellIsFromWithin"></span>

`smellIsFromWithin (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1287](../source/msg_neu.t.html#1287)\]



odor is coming from inside/outside a container



<span id="smellIsFromWithout"></span>

`smellIsFromWithout (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1292](../source/msg_neu.t.html#1292)\]



*no description available*



<span id="soundDescSeparator"></span>

`soundDescSeparator ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[555](../source/msg_neu.t.html#555)\]



separator for "listen" results



<span id="soundIsFromWithin"></span>

`soundIsFromWithin (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1275](../source/msg_neu.t.html#1275)\]



sound is coming from inside/outside a container



<span id="soundIsFromWithout"></span>

`soundIsFromWithout (obj, loc)`

[msg_neu.t](../file/msg_neu.t.html)\[[1280](../source/msg_neu.t.html#1280)\]



*no description available*



<span id="systemActionToNPC"></span>

`systemActionToNPC ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[714](../source/msg_neu.t.html#714)\]



system actions cannot be directed to non-player characters



<span id="textMenuMainPrompt"></span>

`textMenuMainPrompt (keylist)`

[msg_neu.t](../file/msg_neu.t.html)\[[1184](../source/msg_neu.t.html#1184)\]



main prompt text for text-mode menus - this is displayed each time we
ask for a keystroke to navigate a menu in text-only mode



<span id="textMenuTopicPrompt"></span>

`textMenuTopicPrompt ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1192](../source/msg_neu.t.html#1192)\]



prompt text for topic lists in text-mode menus



<span id="thingFeelDesc"></span>

`thingFeelDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[222](../source/msg_neu.t.html#222)\]



generic "feel" description of a Thing



<span id="thingTasteDesc"></span>

`thingTasteDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[214](../source/msg_neu.t.html#214)\]



generic "taste" description of a Thing



<span id="tipStatusShort"></span>

`tipStatusShort (stat)`

[msg_neu.t](../file/msg_neu.t.html)\[[347](../source/msg_neu.t.html#347)\]



describe the tip mode setting



<span id="undoFailed"></span>

`undoFailed ( )`

[msg_neu.t](../file/msg_neu.t.html)\[[1007](../source/msg_neu.t.html#1007)\]



undo command failed



<span id="undoOkay"></span>

`undoOkay (actor, cmd)`

[msg_neu.t](../file/msg_neu.t.html)\[[994](../source/msg_neu.t.html#994)\]



undo command succeeded



<span id="unlitMatchDesc"></span>

`unlitMatchDesc (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[242](../source/msg_neu.t.html#242)\]



*no description available*



<span id="unlockedMsg"></span>

`unlockedMsg (obj)`

[msg_neu.t](../file/msg_neu.t.html)\[[1672](../source/msg_neu.t.html#1672)\]



*no description available*



<span id="webNewUser"></span>

`webNewUser (name)`

[msg_neu.t](../file/msg_neu.t.html)\[[1732](../source/msg_neu.t.html#1732)\]



web UI alert when a new user has joined a multi-user session
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


