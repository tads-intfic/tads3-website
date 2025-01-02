<span class="title">Instructions</span><span class="type">object</span>

[instruct.t](../file/instruct.t.html)\[[82](../source/instruct.t.html#82)\]

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

<div class="fdesc">

The INSTRUCTIONS command. Make this a "system" action, because it's a
meta-action outside of the story. System actions don't consume any game
time.

**`Instructions`**` :   `[`SystemAction`](../object/SystemAction.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Instructions`**  
`         `[`SystemAction`](../object/SystemAction.html)  
`                 `[`IAction`](../object/IAction.html)  
`                         `[`Action`](../object/Action.html)  
`                                 `[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
`                                         `[`Redirector`](../object/Redirector.html)  
`                                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allRequiredVerbsDisclosed`](#allRequiredVerbsDisclosed)`  `[`conversationAbbr`](#conversationAbbr)`  `[`conversationVerbs`](#conversationVerbs)`  `[`crueltyLevel`](#crueltyLevel)`  `[`customVerbs`](#customVerbs)`  `[`includeInUndo`](#includeInUndo)`  `[`isRepeatable`](#isRepeatable)`  `[`truncationLength`](#truncationLength)`  `

Inherited from `SystemAction` :  
` `[`timeTaken`](../object/SystemAction.html#timeTaken)`  `[`turnsTaken`](../object/SystemAction.html#turnsTaken)`  `

Inherited from `IAction` :  
` `[`againRepeatsParse`](../object/IAction.html#againRepeatsParse)`  `

Inherited from `Action` :  
` `[`actionFailed`](../object/Action.html#actionFailed)`  `[`advanceOnFailure`](../object/Action.html#advanceOnFailure)`  `[`allowAll`](../object/Action.html#allowAll)`  `[`extraMessageParams`](../object/Action.html#extraMessageParams)`  `[`failCheckMsg`](../object/Action.html#failCheckMsg)`  `[`failedActionCountsAsTurn`](../object/Action.html#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](../object/Action.html#implicitTimeTaken)`  `[`isConversational`](../object/Action.html#isConversational)`  `[`isImplicit`](../object/Action.html#isImplicit)`  `[`oldRoom`](../object/Action.html#oldRoom)`  `[`parentAction`](../object/Action.html#parentAction)`  `[`parentAllowAll`](../object/Action.html#parentAllowAll)`  `[`preCond`](../object/Action.html#preCond)`  `[`redirectParent`](../object/Action.html#redirectParent)`  `[`reportImplicitActions`](../object/Action.html#reportImplicitActions)`  `[`scopeList`](../object/Action.html#scopeList)`  `[`spellingPriority`](../object/Action.html#spellingPriority)`  `[`synthParamID`](../object/Action.html#synthParamID)`  `[`unhides`](../object/Action.html#unhides)`  `[`verifyObj`](../object/Action.html#verifyObj)`  `[`wasIlluminated`](../object/Action.html#wasIlluminated)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`conversationInstructions`](#conversationInstructions)`  `[`execAction`](#execAction)`  `[`showAbbrevChapter`](#showAbbrevChapter)`  `[`showAdvancedCmdChapter`](#showAdvancedCmdChapter)`  `[`showAmbiguousCmdChapter`](#showAmbiguousCmdChapter)`  `[`showCommandsChapter`](#showCommandsChapter)`  `[`showConversationChapter`](#showConversationChapter)`  `[`showInstructions`](#showInstructions)`  `[`showInstructions`](#showInstructions)`  `[`showObjectsChapter`](#showObjectsChapter)`  `[`showSaveRestoreChapter`](#showSaveRestoreChapter)`  `[`showSpecialCmdChapter`](#showSpecialCmdChapter)`  `[`showTimeChapter`](#showTimeChapter)`  `[`showTipsChapter`](#showTipsChapter)`  `[`showTravelChapter`](#showTravelChapter)`  `[`showUnknownWordsChapter`](#showUnknownWordsChapter)`  `

Inherited from `SystemAction` :  
` `[`afterAction`](../object/SystemAction.html#afterAction)`  `[`exec`](../object/SystemAction.html#exec)`  `[`execCycle`](../object/SystemAction.html#execCycle)`  `[`getInputFile`](../object/SystemAction.html#getInputFile)`  `[`turnSequence`](../object/SystemAction.html#turnSequence)`  `

Inherited from `IAction` :  
` `[`execResolvedAction`](../object/IAction.html#execResolvedAction)`  `[`resolvedObjectsInScope`](../object/IAction.html#resolvedObjectsInScope)`  `[`scoreObjects`](../object/IAction.html#scoreObjects)`  `[`setResolvedObjects`](../object/IAction.html#setResolvedObjects)`  `

Inherited from `Action` :  
` `[`acknowledgeNotifyStatus`](../object/Action.html#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](../object/Action.html#addExtraScopeItems)`  `[`addImplicitTime`](../object/Action.html#addImplicitTime)`  `[`advanceTime`](../object/Action.html#advanceTime)`  `[`announceObject`](../object/Action.html#announceObject)`  `[`beforeAction`](../object/Action.html#beforeAction)`  `[`buildImplicitActionAnnouncement`](../object/Action.html#buildImplicitActionAnnouncement)`  `[`buildScopeList`](../object/Action.html#buildScopeList)`  `[`checkAction`](../object/Action.html#checkAction)`  `[`checkActionPreconditions`](../object/Action.html#checkActionPreconditions)`  `[`commandNotPresent`](../object/Action.html#commandNotPresent)`  `[`execGroup`](../object/Action.html#execGroup)`  `[`getAll`](../object/Action.html#getAll)`  `[`getAllUnhidden`](../object/Action.html#getAllUnhidden)`  `[`getMessageParam`](../object/Action.html#getMessageParam)`  `[`implicitAnnouncement`](../object/Action.html#implicitAnnouncement)`  `[`reportAction`](../object/Action.html#reportAction)`  `[`setMessageParam`](../object/Action.html#setMessageParam)`  `[`setMessageParams`](../object/Action.html#setMessageParams)`  `[`spPrefix`](../object/Action.html#spPrefix)`  `[`spSuffix`](../object/Action.html#spSuffix)`  `[`synthMessageParam`](../object/Action.html#synthMessageParam)`  `[`verify`](../object/Action.html#verify)`  `[`verifyObjRole`](../object/Action.html#verifyObjRole)`  `[`wrapObjectsNP`](../object/Action.html#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :  
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :  
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allRequiredVerbsDisclosed"></span>

`allRequiredVerbsDisclosed`

[instruct.t](../file/instruct.t.html)\[[98](../source/instruct.t.html#98)\]

<div class="desc">

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

</div>

<span id="conversationAbbr"></span>

`conversationAbbr`

[instruct.t](../file/instruct.t.html)\[[133](../source/instruct.t.html#133)\]

<div class="desc">

conversation verb abbreviations

</div>

<span id="conversationVerbs"></span>

`conversationVerbs`

[instruct.t](../file/instruct.t.html)\[[119](../source/instruct.t.html#119)\]

<div class="desc">

Verbs relating specifically to character interaction. This is in the
same format as customVerbs, and has essentially the same purpose;
however, we call these out separately to allow each game not only to
supplement the default list we provide but to replace our default list.
This is desirable for conversation-related commands in particular
because some games will not use the ASK/TELL conversation system at all
and will thus want to remove any mention of the standard set of verbs.

</div>

<span id="crueltyLevel"></span>

`crueltyLevel`

[instruct.t](../file/instruct.t.html)\[[192](../source/instruct.t.html#192)\]

<div class="desc">

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

</div>

<span id="customVerbs"></span>

`customVerbs`

[instruct.t](../file/instruct.t.html)\[[107](../source/instruct.t.html#107)\]

<div class="desc">

A list of custom verbs. Each game should set this to a list of
single-quoted strings; each string gives an example of a verb to display
in the list of sample verbs. Something like this:

customVerbs = \['brush my teeth', 'pick the lock'\]

</div>

<span id="includeInUndo"></span>

`includeInUndo`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[990](../source/instruct.t.html#990)\]

<div class="desc">

*no description available*

</div>

<span id="isRepeatable"></span>

`isRepeatable`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[989](../source/instruct.t.html#989)\]

<div class="desc">

INSTRUCTIONS doesn't affect UNDO or AGAIN

</div>

<span id="truncationLength"></span>

`truncationLength`

[instruct.t](../file/instruct.t.html)\[[145](../source/instruct.t.html#145)\]

<div class="desc">

Truncation length. If the game's parser allows words to be abbreviated
to some minimum number of letters, this should indicate the minimum
length. The English parser uses a truncation length of 8 letters by
default.

Set this to nil if the game doesn't allow truncation at all.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="conversationInstructions"></span>

`conversationInstructions ( )`

[instruct.t](../file/instruct.t.html)\[[216](../source/instruct.t.html#216)\]

<div class="desc">

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

</div>

<span id="execAction"></span>

`execAction (cmd)`<span class="rem">OVERRIDDEN</span>

[instruct.t](../file/instruct.t.html)\[[303](../source/instruct.t.html#303)\]

<div class="desc">

execute the command

</div>

<span id="showAbbrevChapter"></span>

`showAbbrevChapter ( )`

[instruct.t](../file/instruct.t.html)\[[542](../source/instruct.t.html#542)\]

<div class="desc">

Abbreviations chapter

</div>

<span id="showAdvancedCmdChapter"></span>

`showAdvancedCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[868](../source/instruct.t.html#868)\]

<div class="desc">

Advance Command Formats chapter

</div>

<span id="showAmbiguousCmdChapter"></span>

`showAmbiguousCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[829](../source/instruct.t.html#829)\]

<div class="desc">

Ambiguous Commands chapter

</div>

<span id="showCommandsChapter"></span>

`showCommandsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[427](../source/instruct.t.html#427)\]

<div class="desc">

Entering Commands chapter

</div>

<span id="showConversationChapter"></span>

`showConversationChapter ( )`

[instruct.t](../file/instruct.t.html)\[[670](../source/instruct.t.html#670)\]

<div class="desc">

show the Conversation chapter

</div>

<span id="showInstructions"></span>

`showInstructions ( )`

[instruct.t](../file/instruct.t.html)\[[317](../source/instruct.t.html#317)\]

<div class="desc">

Show the instructions, using a menu-based table of contents.

</div>

<span id="showInstructions"></span>

`showInstructions ( )`

[instruct.t](../file/instruct.t.html)\[[332](../source/instruct.t.html#332)\]

<div class="desc">

Show the instructions as a standard text display. Give the user the
option of turning on a SCRIPT file to capture the text.

</div>

<span id="showObjectsChapter"></span>

`showObjectsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[643](../source/instruct.t.html#643)\]

<div class="desc">

Objects chapter

</div>

<span id="showSaveRestoreChapter"></span>

`showSaveRestoreChapter ( )`

[instruct.t](../file/instruct.t.html)\[[696](../source/instruct.t.html#696)\]

<div class="desc">

Saving, Restoring, and Undo chapter

</div>

<span id="showSpecialCmdChapter"></span>

`showSpecialCmdChapter ( )`

[instruct.t](../file/instruct.t.html)\[[768](../source/instruct.t.html#768)\]

<div class="desc">

Other Special Commands chapter

</div>

<span id="showTimeChapter"></span>

`showTimeChapter ( )`

[instruct.t](../file/instruct.t.html)\[[681](../source/instruct.t.html#681)\]

<div class="desc">

Time chapter

</div>

<span id="showTipsChapter"></span>

`showTipsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[931](../source/instruct.t.html#931)\]

<div class="desc">

General Tips chapter

</div>

<span id="showTravelChapter"></span>

`showTravelChapter ( )`

[instruct.t](../file/instruct.t.html)\[[581](../source/instruct.t.html#581)\]

<div class="desc">

Travel chapter

</div>

<span id="showUnknownWordsChapter"></span>

`showUnknownWordsChapter ( )`

[instruct.t](../file/instruct.t.html)\[[814](../source/instruct.t.html#814)\]

<div class="desc">

Unknown Words chapter

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
