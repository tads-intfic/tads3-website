<span class="title">adv3.h</span><span class="type">file</span>

[source file](../source/adv3.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)

<div class="fdesc">

TADS 3 Library - main header

This file provides definitions of macros, properties, and other
identifiers used throughout the library and in game source.

Each source code file in the library and in a game should generally
\#include this header near the top of the source file.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

` `[`abortImplicit`](#abortImplicit)`  `[`actorStateDobjFor`](#actorStateDobjFor)`  `[`actorStateIobjFor`](#actorStateIobjFor)`  `[`actorStateObjFor`](#actorStateObjFor)`  `[`ADV3_H`](#ADV3_H)`  `[`AHREF_Plain`](#AHREF_Plain)`  `[`AlwaysAnnounce`](#AlwaysAnnounce)`  `[`AnnouncedDefaultObject`](#AnnouncedDefaultObject)`  `[`asDobjFor`](#asDobjFor)`  `[`asDobjWithoutActionFor`](#asDobjWithoutActionFor)`  `[`asExit`](#asExit)`  `[`asIobjFor`](#asIobjFor)`  `[`asIobjWithoutActionFor`](#asIobjWithoutActionFor)`  `[`askForDobj`](#askForDobj)`  `[`askForIobj`](#askForIobj)`  `[`askForLiteral`](#askForLiteral)`  `[`askForTopic`](#askForTopic)`  `[`asObjFor`](#asObjFor)`  `[`asObjWithoutActionFor`](#asObjWithoutActionFor)`  `[`BaseDefineTopicTAction`](#BaseDefineTopicTAction)`  `[`canInherit`](#canInherit)`  `[`ClearDisambig`](#ClearDisambig)`  `[`cosmeticSpacingReport`](#cosmeticSpacingReport)`  `[`dangerous`](#dangerous)`  `[`dbgShowGrammarList`](#dbgShowGrammarList)`  `[`dbgShowGrammarList`](#dbgShowGrammarList)`  `[`dbgShowGrammarWithCaption`](#dbgShowGrammarWithCaption)`  `[`dbgShowGrammarWithCaption`](#dbgShowGrammarWithCaption)`  `[`defaultDescReport`](#defaultDescReport)`  `[`DefaultObject`](#DefaultObject)`  `[`defaultReport`](#defaultReport)`  `[`DefineAction`](#DefineAction)`  `[`DefineConvIAction`](#DefineConvIAction)`  `[`DefineConvTopicTAction`](#DefineConvTopicTAction)`  `[`DefineIAction`](#DefineIAction)`  `[`DefineLiteralAction`](#DefineLiteralAction)`  `[`DefineLiteralTAction`](#DefineLiteralTAction)`  `[`DefineSystemAction`](#DefineSystemAction)`  `[`DefineTAction`](#DefineTAction)`  `[`DefineTActionSub`](#DefineTActionSub)`  `[`DefineTIAction`](#DefineTIAction)`  `[`DefineTIActionSub`](#DefineTIActionSub)`  `[`DefineTopicAction`](#DefineTopicAction)`  `[`DefineTopicTAction`](#DefineTopicTAction)`  `[`DigitFormatGroupComma`](#DigitFormatGroupComma)`  `[`DigitFormatGroupPeriod`](#DigitFormatGroupPeriod)`  `[`DigitFormatGroupSep`](#DigitFormatGroupSep)`  `[`dobjFor`](#dobjFor)`  `[`dobjMsg`](#dobjMsg)`  `[`EndsWithAdj`](#EndsWithAdj)`  `[`exit`](#exit)`  `[`exitAction`](#exitAction)`  `[`extraReport`](#extraReport)`  `[`FirstPerson`](#FirstPerson)`  `[`gAction`](#gAction)`  `[`gActionIn`](#gActionIn)`  `[`gActionIs`](#gActionIs)`  `[`gActor`](#gActor)`  `[`gDobj`](#gDobj)`  `[`gExitLister`](#gExitLister)`  `[`gHintManager`](#gHintManager)`  `[`gIobj`](#gIobj)`  `[`gIssuingActor`](#gIssuingActor)`  `[`gLibMessages`](#gLibMessages)`  `[`gLiteral`](#gLiteral)`  `[`gMessageParams`](#gMessageParams)`  `[`gPlayerChar`](#gPlayerChar)`  `[`gReveal`](#gReveal)`  `[`gRevealed`](#gRevealed)`  `[`gSetKnown`](#gSetKnown)`  `[`gSetSeen`](#gSetSeen)`  `[`gSynthMessageParam`](#gSynthMessageParam)`  `[`gTentativeDobj`](#gTentativeDobj)`  `[`gTentativeIobj`](#gTentativeIobj)`  `[`gTopic`](#gTopic)`  `[`gTopicText`](#gTopicText)`  `[`gTranscript`](#gTranscript)`  `[`gVerifyResults`](#gVerifyResults)`  `[`illogical`](#illogical)`  `[`illogicalAlready`](#illogicalAlready)`  `[`illogicalNow`](#illogicalNow)`  `[`illogicalSelf`](#illogicalSelf)`  `[`inaccessible`](#inaccessible)`  `[`iobjFor`](#iobjFor)`  `[`iobjMsg`](#iobjMsg)`  `[`ListContents`](#ListContents)`  `[`ListCustomFlag`](#ListCustomFlag)`  `[`ListerCustomFlag`](#ListerCustomFlag)`  `[`ListLong`](#ListLong)`  `[`ListRecurse`](#ListRecurse)`  `[`ListTall`](#ListTall)`  `[`logical`](#logical)`  `[`logicalRank`](#logicalRank)`  `[`logicalRankOrd`](#logicalRankOrd)`  `[`LookListPortables`](#LookListPortables)`  `[`LookListSpecials`](#LookListSpecials)`  `[`LookRoomDesc`](#LookRoomDesc)`  `[`LookRoomName`](#LookRoomName)`  `[`M_DOWN`](#M_DOWN)`  `[`M_PREV`](#M_PREV)`  `[`M_QUIT`](#M_QUIT)`  `[`M_SEL`](#M_SEL)`  `[`M_UP`](#M_UP)`  `[`mainReport`](#mainReport)`  `[`mapPushTravelHandlers`](#mapPushTravelHandlers)`  `[`mapPushTravelIobj`](#mapPushTravelIobj)`  `[`MatchedAll`](#MatchedAll)`  `[`maybeRemapTo`](#maybeRemapTo)`  `[`nestedAction`](#nestedAction)`  `[`nestedActorAction`](#nestedActorAction)`  `[`newAction`](#newAction)`  `[`newActorAction`](#newActorAction)`  `[`nonObvious`](#nonObvious)`  `[`objFor`](#objFor)`  `[`objForCheck`](#objForCheck)`  `[`objForCheck`](#objForCheck)`  `[`openableContentsLister`](#openableContentsLister)`  `[`PARSER_DEBUG`](#PARSER_DEBUG)`  `[`PluralTruncated`](#PluralTruncated)`  `[`remapTo`](#remapTo)`  `[`replaceAction`](#replaceAction)`  `[`replaceActorAction`](#replaceActorAction)`  `[`reportAfter`](#reportAfter)`  `[`reportBefore`](#reportBefore)`  `[`reportFailure`](#reportFailure)`  `[`reportQuestion`](#reportQuestion)`  `[`SecondPerson`](#SecondPerson)`  `[`SpellIntAndTens`](#SpellIntAndTens)`  `[`SpellIntCommas`](#SpellIntCommas)`  `[`SpellIntTeenHundreds`](#SpellIntTeenHundreds)`  `[`ThirdPerson`](#ThirdPerson)`  `[`tryImplicitAction`](#tryImplicitAction)`  `[`tryImplicitActionMsg`](#tryImplicitActionMsg)`  `[`UnclearDisambig`](#UnclearDisambig)`  `[`VocabTruncated`](#VocabTruncated)`  `

<span id="_EnumSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Enums</span>  

</div>

` `[`ActorObject`](#ActorObject)`  `[`AnnounceClear`](#AnnounceClear)`  `[`AnnounceUnclear`](#AnnounceUnclear)`  `[`attenuated`](#attenuated)`  `[`blockEndConv`](#blockEndConv)`  `[`DescribeClear`](#DescribeClear)`  `[`DirectObject`](#DirectObject)`  `[`distant`](#distant)`  `[`endConvActor`](#endConvActor)`  `[`endConvBoredom`](#endConvBoredom)`  `[`endConvBye`](#endConvBye)`  `[`endConvTravel`](#endConvTravel)`  `[`FootnotesFull`](#FootnotesFull)`  `[`FootnotesMedium`](#FootnotesMedium)`  `[`FootnotesOff`](#FootnotesOff)`  `[`IndirectObject`](#IndirectObject)`  `[`InventoryTall`](#InventoryTall)`  `[`InventoryWide`](#InventoryWide)`  `[`large`](#large)`  `[`medium`](#medium)`  `[`obscured`](#obscured)`  `[`opaque`](#opaque)`  `[`OtherObject`](#OtherObject)`  `[`PathFrom`](#PathFrom)`  `[`PathIn`](#PathIn)`  `[`PathOut`](#PathOut)`  `[`PathPeer`](#PathPeer)`  `[`PathThrough`](#PathThrough)`  `[`PathTo`](#PathTo)`  `[`PronounHer`](#PronounHer)`  `[`PronounHim`](#PronounHim)`  `[`PronounIt`](#PronounIt)`  `[`PronounMe`](#PronounMe)`  `[`PronounThem`](#PronounThem)`  `[`PronounYou`](#PronounYou)`  `[`rmcAskLiteral`](#rmcAskLiteral)`  `[`rmcAskObject`](#rmcAskObject)`  `[`rmcCommand`](#rmcCommand)`  `[`rmcDisambig`](#rmcDisambig)`  `[`rmcOops`](#rmcOops)`  `[`small`](#small)`  `[`transparent`](#transparent)`  `

<span id="_TemplateSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Templates</span>  

</div>

` `[`Achievement`](#Achievement)`  `[`AltTopic`](#AltTopic)`  `[`AltTopic`](#AltTopic)`  `[`ConvNode`](#ConvNode)`  `[`DefaultTopic`](#DefaultTopic)`  `[`DefaultTopic`](#DefaultTopic)`  `[`EventList`](#EventList)`  `[`Footnote`](#Footnote)`  `[`Goal`](#Goal)`  `[`Hint`](#Hint)`  `[`MenuItem`](#MenuItem)`  `[`MenuLongTopicItem`](#MenuLongTopicItem)`  `[`MenuTopicItem`](#MenuTopicItem)`  `[`MiscTopic`](#MiscTopic)`  `[`MiscTopic`](#MiscTopic)`  `[`MultiLoc`](#MultiLoc)`  `[`ShuffledEventList`](#ShuffledEventList)`  `[`ShuffledList`](#ShuffledList)`  `[`SpecialTopic`](#SpecialTopic)`  `[`SpecialTopic`](#SpecialTopic)`  `[`StyleTag`](#StyleTag)`  `[`SyncEventList`](#SyncEventList)`  `[`Tip`](#Tip)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicGroup`](#TopicGroup)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)* <span id="_Macros_"></span>

<div class="mjhd">

<span class="hdln">Macros</span>  

</div>

<span id="abortImplicit"></span>

`abortImplicit`

[adv3.h](../file/adv3.h.html)\[[1569](../source/adv3.h.html#1569)\]

<div class="desc">

`throw new AbortImplicitSignal()`  
a concise macro to throw an AbortImplicitSignal

</div>

<span id="actorStateDobjFor"></span>

`actorStateDobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[480](../source/adv3.h.html#480)\]

<div class="desc">

`actorStateObjFor(Dobj, action)`  
*no description available*

</div>

<span id="actorStateIobjFor"></span>

`actorStateIobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[481](../source/adv3.h.html#481)\]

<div class="desc">

`actorStateObjFor(Iobj, action)`  
*no description available*

</div>

<span id="actorStateObjFor"></span>

`actorStateObjFor (obj, Action)`

[adv3.h](../file/adv3.h.html)\[[471](../source/adv3.h.html#471)\]

<div class="desc">

`{ \`  
`preCond { return curState.preCond##obj##Action; } \`  
`verify() { curState.verify##obj##Action; } \`  
`remap() { return curState.remap##obj##Action; } \`  
`check() { curState.check##obj##Action; } \`  
`action() { curState.action##obj##Action; } \`  
`}`  
For an Actor, delegate an action handler to the ActorState object for
processing. You can use this any time you want to write the handlers for
a particular action in the ActorState rather than in the Actor itself.
This would be desirable if the actor's response for a particular action
varies considerably according to the actor's state. For example, if you
want an actor's response to being attacked to be handled in the actor's
current ActorState object, you could put this code in the Actor object:

dobjFor(AttackWith) actorStateDobjFor(AttackWith)

Once you've done this, you'd just write a normal dobjFor(AttackWith)
handler in each of the ActorState objects associated with the actor.

</div>

<span id="ADV3_H"></span>

`ADV3_H`

[adv3.h](../file/adv3.h.html)\[[16](../source/adv3.h.html#16)\]

<div class="desc">

  
*no description available*

</div>

<span id="AHREF_Plain"></span>

`AHREF_Plain`

[adv3.h](../file/adv3.h.html)\[[819](../source/adv3.h.html#819)\]

<div class="desc">

`0x0001 /* plain text hyperlink (no underline/color) */`  
aHref() flags

</div>

<span id="AlwaysAnnounce"></span>

`AlwaysAnnounce`

[adv3.h](../file/adv3.h.html)\[[870](../source/adv3.h.html#870)\]

<div class="desc">

`0x0010`  
Always announce the object before executing the command on it. This flag
can be set for objects that match phrases whose meaning isn't
necessarily known to the player, such as "all" (which selects objects
based on the simulation state, which might not exactly match what the
player had in mind) or "any book" (which might select arbitrarily from
several possibilities, so the player can't know which we'll choose).

</div>

<span id="AnnouncedDefaultObject"></span>

`AnnouncedDefaultObject`

[adv3.h](../file/adv3.h.html)\[[921](../source/adv3.h.html#921)\]

<div class="desc">

`0x0100`  
We've announced this as a defaulted object. We use this to ensure that
we only make this type of announcement once, even if the opportunity to
make the announcement comes up more than once; this can happen when
we're asking for missing objects interactively in a multi-object
command, since we might want to announce a default before prompting as
well as before execution.

</div>

<span id="asDobjFor"></span>

`asDobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[357](../source/adv3.h.html#357)\]

<div class="desc">

`asObjFor(Dobj, action)`  
*no description available*

</div>

<span id="asDobjWithoutActionFor"></span>

`asDobjWithoutActionFor (action)`

[adv3.h](../file/adv3.h.html)\[[377](../source/adv3.h.html#377)\]

<div class="desc">

`asObjWithoutActionFor(Dobj, action)`  
*no description available*

</div>

<span id="asExit"></span>

`asExit (dir)`

[adv3.h](../file/adv3.h.html)\[[581](../source/adv3.h.html#581)\]

<div class="desc">

`= static ((dir).createUnlistedProxy())`  
Alternative exit definition. This can be used to define a secondary
direction that links to the same destination, via the same connector, as
another direction. It's frequently desirable to link multiple directions
to the same exit; for example, a door leading north might also lead out,
or a stairway to the north could lead up as well.

Use this as follows in a room's property list:

  
out asExit(north)

(Note that there's no '=' sign.)

It's not necessary to use this macro to declare an alternative exit,
since the alternatives can all point directly to the same connector as
the original. The only thing this macro does is to make the alternative
exit unlisted - it won't be shown in the list of exits in the status
line, and it won't be shown in "you can't go that way" messages.

Note that there's one common case where you should be careful with
asExit(): if you have a room that has an exit in some compass direction,
you might be tempted to make OUT the primary "direction" for the exit,
and treat the equivalent compass as a synonym, with a line such as
"south asExit(out)". You should avoid doing this - do it the other way
instead, with the compass direction as the primary direction and OUT as
the synonym: "out asExit(south)". The reason this is important is that
if there's a nested room inside the location (such as a chair), OUT
while in the nested room will mean to get out of the nested room. If you
make the compass direction primary and make OUT the synonym, the compass
direction will be listed as an available exit both in the location and
in any nested rooms within it.

</div>

<span id="asIobjFor"></span>

`asIobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[358](../source/adv3.h.html#358)\]

<div class="desc">

`asObjFor(Iobj, action)`  
*no description available*

</div>

<span id="asIobjWithoutActionFor"></span>

`asIobjWithoutActionFor (action)`

[adv3.h](../file/adv3.h.html)\[[378](../source/adv3.h.html#378)\]

<div class="desc">

`asObjWithoutActionFor(Iobj, action)`  
*no description available*

</div>

<span id="askForDobj"></span>

`askForDobj (newAction)`

[adv3.h](../file/adv3.h.html)\[[1516](../source/adv3.h.html#1516)\]

<div class="desc">

`(newAction##Action.retryWithMissingDobj(gAction, ResolveAsker))`  
Ask for a direct object and retry the command using the single-object
phrasing. This can be used in the action() routine for a no-object
command to ask for the missing direct object.

In many cases, there is simply no grammar rule for a zero-object form of
a verb; in such cases, this macro is not needed, since the missing
object is handled via the grammar. However, for some actions, it is
desirable to allow the zero-object phrasing some of the time, but
require the direct-object phrasing other times. This macro exists for
these cases, because it allows the intransitive version of the action to
decide, on a case-by-case basis, whether to process the no-object form
of the command or to prompt for a direct object.

newAction is the root name (without the Action suffix) of the transitive
action to execute. For example, if we're processing a plain "in"
command, we could use askForDobj(Enter) to ask for a direct object for
the transitive "enter" phrasing.

</div>

<span id="askForIobj"></span>

`askForIobj (newAction)`

[adv3.h](../file/adv3.h.html)\[[1538](../source/adv3.h.html#1538)\]

<div class="desc">

`(newAction##Action.retryWithMissingIobj(gAction, ResolveAsker))`  
Ask for an indirect object and retry the command using the two-object
phrasing. This can be used in the action() routine of a single-object
command to ask for the missing indirect object.

In many cases, there is simply no grammar rule for a single-object form
of a verb; in such cases, this macro is not needed, since the missing
object is handled via the grammar. However, for some actions, it is
desirable to allow the single-object phrasing some of the time, but
require the two-object phrasing other times. This macro exists for these
cases, because it allows the action() routine to decide, on a
case-by-case basis, whether to process the single-object form of the
command or to prompt for an indirect object.

newAction is the root name (without the Action suffix) of the two-object
form of the action. For example, if we're processing a single-object
"unlock" command, we would use askForIobj(UnlockWith) to ask for an
indirect object for the "unlock with" two-object phrasing.

</div>

<span id="askForLiteral"></span>

`askForLiteral (newAction)`

[adv3.h](../file/adv3.h.html)\[[1547](../source/adv3.h.html#1547)\]

<div class="desc">

`(newAction##Action.retryWithMissingLiteral(gAction))`  
Ask for a literal phrase and retry the command using the two-object
phrasing. This is analogous to askForDobj() and askForIobj(), but for
literal phrases; we effectively convert a TAction into a LiteralTAction.

</div>

<span id="askForTopic"></span>

`askForTopic (newAction)`

[adv3.h](../file/adv3.h.html)\[[1554](../source/adv3.h.html#1554)\]

<div class="desc">

`(newAction##Action.retryWithMissingTopic(gAction))`  
Ask for a topic phrase and retry the command using the two-object
phrasing.

</div>

<span id="asObjFor"></span>

`asObjFor (obj, Action)`

[adv3.h](../file/adv3.h.html)\[[348](../source/adv3.h.html#348)\]

<div class="desc">

`{ \`  
`preCond { return preCond##obj##Action; } \`  
`verify() { verify##obj##Action; } \`  
`remap() { return remap##obj##Action; } \`  
`check() { check##obj##Action; } \`  
`action() { action##obj##Action; } \`  
`}`  
Treat an object definition as equivalent to another object definition.
These can be used immediately after a dobjFor() or iobjFor() to treat
the first action as though it were the second. So, if the player types
"search box", and we want to treat the direct object the same as for
"look in box", we could make this definition for the box:

dobjFor(Search) asDobjFor(LookIn)

Note that no semicolon is needed after this definition, and that this
definition is completely in lieu of a regular property set for the
object action.

In general, a mapping should NOT change the role of an object:
dobjFor(X) should not usually be mapped using asIobjFor(Y), and
iobjFor(X) shouldn't be mapped using asDobjFor(Y). The problem with
changing the role is that the handler routines often assume that the
object is actually in the role for which the handler was written; a
verify handler might refer to '{dobj}' in generating a message, for
example, so reversing the roles would give the wrong object in the role.

Role reversals should always be avoided, but can be used if necessary
under conditions where all of the code involved in the TARGET of the
mapping can be carefully controlled to ensure that it doesn't make
assumptions about object roles, but only references 'self'. Reversing
roles in a mapping should never be attempted in general-purpose library
code, because code based on the library could override the target of the
role-reversing mapping, and the override could fail to observe the
restrictions on object role references.

Note that role reversals can almost always be handled with other
mechanisms that handle reversals cleanly. Always consider remapTo()
first when confronted with a situation that seems to call for a
role-reversing asObjFor() mapping, as remapTo() specifically allows for
object role changes.

</div>

<span id="asObjWithoutActionFor"></span>

`asObjWithoutActionFor (obj, Action)`

[adv3.h](../file/adv3.h.html)\[[368](../source/adv3.h.html#368)\]

<div class="desc">

`{ \`  
`preCond { return preCond##obj##Action; } \`  
`verify() { verify##obj##Action; } \`  
`remap() { return remap##obj##Action(); } \`  
`check() { check##obj##Action; } \`  
`action() { } \`  
`}`  
Define mappings of everything except the action. This can be used in
cases where we want to pick up the verification, preconditions, and
check routines from another handler, but not the action. This is often
useful for two-object verbs where the action processing is entirely
provided by one or the other object, so applying it to both would be
redundant.

</div>

<span id="BaseDefineTopicTAction"></span>

`BaseDefineTopicTAction (name, which, cls)`

[adv3.h](../file/adv3.h.html)\[[1069](../source/adv3.h.html#1069)\]

<div class="desc">

`DefineAction(name, cls) \`  
`verDobjProp = &verifyDobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`actionDobjProp = &actionDobj##name \`  
`whichMessageTopic = which`  
Define a concrete TopicTAction, given the root name for the action.
'which' gives the role the topic serves, for message generation
purposes - this should be one of the object role enums (DirectObject,
IndirectObject, etc) indicating which role the topic plays in the
action's grammar.

</div>

<span id="canInherit"></span>

`canInherit`

[adv3.h](../file/adv3.h.html)\[[47](../source/adv3.h.html#47)\]

<div class="desc">

`propInherited(targetprop, targetobj, definingobj, PropDefAny)`  
canInherit - determine if there's anything to inherit from the current
method. Returns true if there's a method to inherit, nil if 'inherited'
in the current context would not invoke any code.

</div>

<span id="ClearDisambig"></span>

`ClearDisambig`

[adv3.h](../file/adv3.h.html)\[[878](../source/adv3.h.html#878)\]

<div class="desc">

`0x0020`  
The noun phrase describing this object was ambiguous, and the object was
selected by automatic disambiguation in a context where it was clear
which object was indicated. This is used in cases where the objects not
selected were all illogical for the action context.

</div>

<span id="cosmeticSpacingReport"></span>

`cosmeticSpacingReport (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1339](../source/adv3.h.html#1339)\]

<div class="desc">

`(gTranscript.addReport(new CosmeticSpacingCommandReport(msg, ##params)))`  
Add an cosmetic internal spacing report. This type of report is used to
show spacing (usually a paragraph break) within command output.

The important thing about this report is that it doesn't trigger
suppression of any default reports. This is useful when internal
separation is added on speculation that there might be some reports to
separate, but without certainty that there will actually be any reports
shown; for example, when preparing to show a list of special
descriptions, we might add some spacing just in case some special
descriptions will be shown, saving the trouble of checking to see if
anything actually needs to be shown.

</div>

<span id="dangerous"></span>

`dangerous`

[adv3.h](../file/adv3.h.html)\[[1213](../source/adv3.h.html#1213)\]

<div class="desc">

`(gVerifyResults.addResult(new DangerousVerifyResult('')))`  
command is logical but dangerous

</div>

<span id="dbgShowGrammarList"></span>

`dbgShowGrammarList (lst)`

[adv3.h](../file/adv3.h.html)\[[90](../source/adv3.h.html#90)\]

<div class="desc">

`showGrammarList(lst)`  
Define some convenience macros for parser debug operations. When
PARSER_DEBUG isn't defined, these macros expand out to nothing.

</div>

<span id="dbgShowGrammarList"></span>

`dbgShowGrammarList (lst)`

[adv3.h](../file/adv3.h.html)\[[96](../source/adv3.h.html#96)\]

<div class="desc">

  
*no description available*

</div>

<span id="dbgShowGrammarWithCaption"></span>

`dbgShowGrammarWithCaption (headline, match)`

[adv3.h](../file/adv3.h.html)\[[91](../source/adv3.h.html#91)\]

<div class="desc">

`showGrammarWithCaption(headline, match)`  
*no description available*

</div>

<span id="dbgShowGrammarWithCaption"></span>

`dbgShowGrammarWithCaption (headline, match)`

[adv3.h](../file/adv3.h.html)\[[97](../source/adv3.h.html#97)\]

<div class="desc">

  
*no description available*

</div>

<span id="defaultDescReport"></span>

`defaultDescReport (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1323](../source/adv3.h.html#1323)\]

<div class="desc">

`(gTranscript.addReport(new DefaultDescCommandReport(msg, ##params)))`  
Set a default descriptive report for the current command. This report
will be shown unless any other report is shown for the same command.
This differs from defaultReport in that we don't suppress a default
description for an implied command: we only suppress a default
description when there are other reports for the same command.

The purpose of the default descriptive report is to generate reports
that say things along the lines that there's nothing special to
describe. For example:

\>x desk  
You see nothing special about it.

\>look in alcove  
There's nothing in the alcove.

When there's nothing else to report, these default descriptions are
suitable as the full response to the command. However, they become
undesirable when we have other "status" information or related special
descriptions to display; consider:

\>x desk  
You see nothing special about it.  
Someone has jabbed a dagger into the top of the desk.

\>look in alcove  
There's nothing in the alcove.  
A vase is displayed in the alcove.

\>x bag  
You see nothing special about it. It's open, and it contains  
a red book, an iron key, and a brass key.

In the first two examples above, we have special descriptions for
objects contained in the objects being described. The special
descriptions essentially contradict the default descriptions' claims
that there's nothing special to mention, and also render the default
descriptions unnecessary, in that it would be enough to show just the
special descriptions. The third example above is similar, but the extra
information is status information for the object being described rather
than a special description of a contained item; as with the other
examples, the generic default description is both contradictory and
unnecessary.

Default description reports should ONLY be used for messages that have
the character of the examples above: generic descriptions that indicate
explicitly that there's nothing special to report. Messages that offer
any sort of descriptive detail should NOT be generated as default
description reports, because it is suitable and desirable to retain an
actual descriptive message even when other status information or related
special descriptions are also shown.

</div>

<span id="DefaultObject"></span>

`DefaultObject`

[adv3.h](../file/adv3.h.html)\[[911](../source/adv3.h.html#911)\]

<div class="desc">

`0x0080`  
The noun phrase was missing from the command and this object was
supplied as an implicit default.

</div>

<span id="defaultReport"></span>

`defaultReport (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1267](../source/adv3.h.html#1267)\]

<div class="desc">

`(gTranscript.addReport(new DefaultCommandReport(msg, ##params)))`  
Set a default report for the current command. This report will be shown
unless a non-default report is issued, or if the default report is to be
suppressed (for example, because the command is being performed
implicitly as part of another command).

Default reports should be used only for simple acknowledgments of the
command's successful completion - things like "Taken" or "Dropped" or
"Done."

Default responses are suppressed for implicit commands because they are
redundant. When a command is performed implicitly, it is conventional to
mention the command being performed with a parenthetical: "(First taking
the book)". In such cases, a simple acknowledgment that the command was
successfully performed would add nothing of use but would merely make
the output more verbose, so we omit it.

</div>

<span id="DefineAction"></span>

`DefineAction (name, baseClass, ...)`

[adv3.h](../file/adv3.h.html)\[[986](../source/adv3.h.html#986)\]

<div class="desc">

`class name##Action: ##baseClass \`  
`baseActionClass = name##Action`  
Define an action with the given base class. This adds the \*Action
suffix to the given root name, and defines a class with the given base
class. We also define the baseActionClass property to refer to myself;
this is the canonical class representing the action for all subclasses.
This information is useful because a language module might define
several grammar rule subclasses for the given class; this lets us relate
any instances of those various subclasses back to this same canonical
class for the action if necessary.

</div>

<span id="DefineConvIAction"></span>

`DefineConvIAction (name)`

[adv3.h](../file/adv3.h.html)\[[1006](../source/adv3.h.html#1006)\]

<div class="desc">

`DefineAction(name, ConvIAction)`  
define a conversational IAction, such as Hello, Goodbye, Yes, No

</div>

<span id="DefineConvTopicTAction"></span>

`DefineConvTopicTAction (name, which)`

[adv3.h](../file/adv3.h.html)\[[1086](../source/adv3.h.html#1086)\]

<div class="desc">

`BaseDefineTopicTAction(name, which, ConvTopicTAction)`  
Define a concrete ConvTopicTAction. This is just like defining a
TopicTAction, but defines the action using the ConvTopicTAction
subclass.

</div>

<span id="DefineIAction"></span>

`DefineIAction (name)`

[adv3.h](../file/adv3.h.html)\[[1002](../source/adv3.h.html#1002)\]

<div class="desc">

`DefineAction(name, IAction)`  
Define a concrete IAction, given the root name for the action. We'll
automatically generate a class with name XxxAction.

</div>

<span id="DefineLiteralAction"></span>

`DefineLiteralAction (name)`

[adv3.h](../file/adv3.h.html)\[[1092](../source/adv3.h.html#1092)\]

<div class="desc">

`DefineAction(name, LiteralAction)`  
Define a concrete LiteralAction, given the root name for the action.

</div>

<span id="DefineLiteralTAction"></span>

`DefineLiteralTAction (name, which)`

[adv3.h](../file/adv3.h.html)\[[1102](../source/adv3.h.html#1102)\]

<div class="desc">

`DefineAction(name, LiteralTAction) \`  
`verDobjProp = &verifyDobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`actionDobjProp = &actionDobj##name \`  
`whichMessageLiteral = which`  
Define a concrete LiteralTAction, given the root name for the action.
'which' gives the role the literal phrase serves, for message generation
purposes - this should be one of the object role enums (DirectObject,
IndirectObject, etc) indicating which role the topic plays in the
action's grammar.

</div>

<span id="DefineSystemAction"></span>

`DefineSystemAction (name)`

[adv3.h](../file/adv3.h.html)\[[995](../source/adv3.h.html#995)\]

<div class="desc">

`DefineAction(name, SystemAction)`  
Define a "system" action. System actions are meta-game commands, such as
SAVE and QUIT, that generally operate the user interface and are not
part of the game world.

</div>

<span id="DefineTAction"></span>

`DefineTAction (name)`

[adv3.h](../file/adv3.h.html)\[[1015](../source/adv3.h.html#1015)\]

<div class="desc">

`DefineTActionSub(name, TAction)`  
Define a concrete TAction, given the root name for the action. We'll
automatically generate a class with name XxxAction, a verProp with name
verXxx, a checkProp with name checkXxx, and an actionProp with name
actionDobjXxx.

</div>

<span id="DefineTActionSub"></span>

`DefineTActionSub (name, cls)`

[adv3.h](../file/adv3.h.html)\[[1021](../source/adv3.h.html#1021)\]

<div class="desc">

`DefineAction(name, cls) \`  
`verDobjProp = &verifyDobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`actionDobjProp = &actionDobj##name \`  
  
Define a concrete TAction with a specific base class.

</div>

<span id="DefineTIAction"></span>

`DefineTIAction (name)`

[adv3.h](../file/adv3.h.html)\[[1037](../source/adv3.h.html#1037)\]

<div class="desc">

`DefineTIActionSub(name, TIAction)`  
Define a concrete TIAction, given the root name for the action. We'll
automatically generate a class with name XxxAction, a verDobjProp with
name verDobjXxx, a verIobjProp with name verIobjxxx, a checkDobjProp
with name checkDobjXxx, a checkIobjProp with name checkIobjXxx, an
actionDobjProp with name actionDobjXxx, and an actionIobjProp with name
actionIobjXxx.

</div>

<span id="DefineTIActionSub"></span>

`DefineTIActionSub (name, cls)`

[adv3.h](../file/adv3.h.html)\[[1043](../source/adv3.h.html#1043)\]

<div class="desc">

`DefineAction(name, cls) \`  
`verDobjProp = &verifyDobj##name \`  
`verIobjProp = &verifyIobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`remapIobjProp = &remapIobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`preCondIobjProp = &preCondIobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`checkIobjProp = &checkIobj##name \`  
`actionDobjProp = &actionDobj##name \`  
`actionIobjProp = &actionIobj##name`  
Define a concrete TIAction with a specific base class.

</div>

<span id="DefineTopicAction"></span>

`DefineTopicAction (name)`

[adv3.h](../file/adv3.h.html)\[[1059](../source/adv3.h.html#1059)\]

<div class="desc">

`DefineAction(name, TopicAction)`  
Define a concrete TopicAction, given the root name for the action.

</div>

<span id="DefineTopicTAction"></span>

`DefineTopicTAction (name, which)`

[adv3.h](../file/adv3.h.html)\[[1078](../source/adv3.h.html#1078)\]

<div class="desc">

`BaseDefineTopicTAction(name, which, TopicTAction)`  
*no description available*

</div>

<span id="DigitFormatGroupComma"></span>

`DigitFormatGroupComma`

[adv3.h](../file/adv3.h.html)\[[811](../source/adv3.h.html#811)\]

<div class="desc">

`0x0002`  
Explicitly use a comma/period to separate digit groups, overriding the
current languageGlobals setting.

</div>

<span id="DigitFormatGroupPeriod"></span>

`DigitFormatGroupPeriod`

[adv3.h](../file/adv3.h.html)\[[812](../source/adv3.h.html#812)\]

<div class="desc">

`0x0004`  
*no description available*

</div>

<span id="DigitFormatGroupSep"></span>

`DigitFormatGroupSep`

[adv3.h](../file/adv3.h.html)\[[805](../source/adv3.h.html#805)\]

<div class="desc">

`0x0001`  
Use a group separator character between digit groups, using the default
setting in languageGlobals.

</div>

<span id="dobjFor"></span>

`dobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[309](../source/adv3.h.html#309)\]

<div class="desc">

`objFor(Dobj, action)`  
*no description available*

</div>

<span id="dobjMsg"></span>

`dobjMsg (msg)`

[adv3.h](../file/adv3.h.html)\[[1415](../source/adv3.h.html#1415)\]

<div class="desc">

`(gDobj == self ? msg : nil)`  
Thing message property overrides sometimes need to be selective about
the role of the object. These macros let you specify that a Thing
message override is only in effect when the Thing is the direct or
indirect object. When the object isn't in the specified role, the
message override will be ignored.

For example, suppose you want to override an object's response to PUT
IN, but \*only\* when it's the indirect object of PUT IN - \*not\* when
the object is itself being put somewhere. To do this, you could give the
object a property like this:

  
notAContainerMsg = iobjMsg('The vase\\s opening is too small. ')

This specifies that when the object is involved in a PUT IN command that
fails with the 'notAContainerMsg' message, the given message should be
used - but \*only\* when the object is the indirect object.

</div>

<span id="EndsWithAdj"></span>

`EndsWithAdj`

[adv3.h](../file/adv3.h.html)\[[828](../source/adv3.h.html#828)\]

<div class="desc">

`0x0001`  
the noun phrase ends with an adjective

</div>

<span id="exit"></span>

`exit`

[adv3.h](../file/adv3.h.html)\[[1563](../source/adv3.h.html#1563)\]

<div class="desc">

`throw new ExitSignal()`  
a concise macro to throw an ExitSignal

</div>

<span id="exitAction"></span>

`exitAction`

[adv3.h](../file/adv3.h.html)\[[1566](../source/adv3.h.html#1566)\]

<div class="desc">

`throw new ExitActionSignal()`  
a concise macro to throw an ExitActionSignal

</div>

<span id="extraReport"></span>

`extraReport (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1346](../source/adv3.h.html#1346)\]

<div class="desc">

`(gTranscript.addReport(new ExtraCommandReport(msg, ##params)))`  
Add an "extra" report. This is an incidental message that doesn't affect
the display of a default report.

</div>

<span id="FirstPerson"></span>

`FirstPerson`

[adv3.h](../file/adv3.h.html)\[[589](../source/adv3.h.html#589)\]

<div class="desc">

`1`  
"Person" indices. We define these as numbers rather than enums so that
we can easily use these as list indices.

</div>

<span id="gAction"></span>

`gAction`

[adv3.h](../file/adv3.h.html)\[[159](../source/adv3.h.html#159)\]

<div class="desc">

`(libGlobal.curAction)`  
the Action object of the command being executed

</div>

<span id="gActionIn"></span>

`gActionIn (action, ...)`

[adv3.h](../file/adv3.h.html)\[[175](../source/adv3.h.html#175)\]

<div class="desc">

`(gAction != nil \`  
`&& (action#foreach/gAction.actionOfKind(action##Action)/||/))`  
is the current global action ANY of the specified actions?

</div>

<span id="gActionIs"></span>

`gActionIs (action)`

[adv3.h](../file/adv3.h.html)\[[171](../source/adv3.h.html#171)\]

<div class="desc">

`(gAction != nil && gAction.actionOfKind(action##Action))`  
Determine if the current global action is the specified action. Only the
action prefix is needed - so use "Take" rather than "TakeAction" here.

This tests to see if the current global action is an instance of the
given action class - we test that it's an instance rather than the
action class itself because the parser creates an instance of the action
when it matches the action's syntax.

</div>

<span id="gActor"></span>

`gActor`

[adv3.h](../file/adv3.h.html)\[[110](../source/adv3.h.html#110)\]

<div class="desc">

`(libGlobal.curActor)`  
the actor performing the current command

</div>

<span id="gDobj"></span>

`gDobj`

[adv3.h](../file/adv3.h.html)\[[118](../source/adv3.h.html#118)\]

<div class="desc">

`(gAction.getDobj())`  
For convenience, define some macros that return the current direct and
indirect objects from the current action. The library only uses direct
and indirect objects, so games that define additional command objects
will have to add their own similar macros for those.

</div>

<span id="gExitLister"></span>

`gExitLister`

[adv3.h](../file/adv3.h.html)\[[227](../source/adv3.h.html#227)\]

<div class="desc">

`(libGlobal.exitListerObj)`  
the exit lister object - if the exits module isn't included in the game,
this will be nil

</div>

<span id="gHintManager"></span>

`gHintManager`

[adv3.h](../file/adv3.h.html)\[[233](../source/adv3.h.html#233)\]

<div class="desc">

`(libGlobal.hintManagerObj)`  
the hint manager object - if the hints module isn't included in the
game, this will be nil

</div>

<span id="gIobj"></span>

`gIobj`

[adv3.h](../file/adv3.h.html)\[[119](../source/adv3.h.html#119)\]

<div class="desc">

`(gAction.getIobj())`  
*no description available*

</div>

<span id="gIssuingActor"></span>

`gIssuingActor`

[adv3.h](../file/adv3.h.html)\[[156](../source/adv3.h.html#156)\]

<div class="desc">

`(libGlobal.curIssuingActor)`  
the actor who \*issued\* the current command (this is usually the player
character, because most commands are initiated by the player on the
command line, but it is also possible for one actor to send a command to
another programmatically)

</div>

<span id="gLibMessages"></span>

`gLibMessages`

[adv3.h](../file/adv3.h.html)\[[255](../source/adv3.h.html#255)\]

<div class="desc">

`(libGlobal.libMessageObj)`  
The current library messages object. This is the source object for
messages that don't logically relate to the actor carrying out the
comamand. It's mostly used for meta-command replies, and for text
fragments that are used to construct descriptions.

This message object isn't generally used for parser messages or action
replies - most of those come from the objects given by the current
actor's getParserMessageObj() or getActionMessageObj(), respectively.

By default, this is set to libMessages. The library never changes this
itself, but a game can change this if it wants to switch to a new set of
messages during a game. (If you don't need to change messages during a
game, but simply want to customize some of the default messages, you
don't need to set this variable - you can simply use 'modify
libMessages' instead. This variable is designed for cases where you want
to \*dynamically\* change the standard messages during the game.)

</div>

<span id="gLiteral"></span>

`gLiteral`

[adv3.h](../file/adv3.h.html)\[[130](../source/adv3.h.html#130)\]

<div class="desc">

`(gAction.getLiteral())`  
get the current literal phrase text, when the command has one

</div>

<span id="gMessageParams"></span>

`gMessageParams (var, ...)`

[adv3.h](../file/adv3.h.html)\[[201](../source/adv3.h.html#201)\]

<div class="desc">

`(gAction.setMessageParams(var#foreach/#@var, var/,/))`  
Some message processors add their own special parameters to messages,
because they want to use expansion parameters (in the "{the dobj/him}"
format) outside of the set of objects directly involved in the command.

The Action method setMessageParam() lets you define such a parameter,
but for convenience, we define this macro for setting one or more
parameters whose names exactly match their local variable names. In
other words, if you call this macro like this:

gMessageParams(obj, cont)

then you'll get one parameter with the text name 'obj' whose expansion
will be the value of the local variable obj, and another with text name
'cont' whose expansion is the value of the local variable cont.

</div>

<span id="gPlayerChar"></span>

`gPlayerChar`

[adv3.h](../file/adv3.h.html)\[[221](../source/adv3.h.html#221)\]

<div class="desc">

`(libGlobal.playerChar)`  
get the current player character Actor object

</div>

<span id="gReveal"></span>

`gReveal (key)`

[adv3.h](../file/adv3.h.html)\[[1772](../source/adv3.h.html#1772)\]

<div class="desc">

`(conversationManager.setRevealed(key))`  
reveal a topic key, as though through \<.reveal\>

</div>

<span id="gRevealed"></span>

`gRevealed (key)`

[adv3.h](../file/adv3.h.html)\[[1769](../source/adv3.h.html#1769)\]

<div class="desc">

`(conversationManager.revealedNameTab[key] != nil)`  
has a topic key been revealed through \<.reveal\>?

</div>

<span id="gSetKnown"></span>

`gSetKnown (obj)`

[adv3.h](../file/adv3.h.html)\[[1775](../source/adv3.h.html#1775)\]

<div class="desc">

`(gPlayerChar.setKnowsAbout(obj))`  
mark a Topic/Thing as known/seen by the player character

</div>

<span id="gSetSeen"></span>

`gSetSeen (obj)`

[adv3.h](../file/adv3.h.html)\[[1776](../source/adv3.h.html#1776)\]

<div class="desc">

`(gPlayerChar.setHasSeen(obj))`  
*no description available*

</div>

<span id="gSynthMessageParam"></span>

`gSynthMessageParam (var)`

[adv3.h](../file/adv3.h.html)\[[212](../source/adv3.h.html#212)\]

<div class="desc">

`(gAction.synthMessageParam(var))`  
Synthesize a global message parameter name for the given object and
return the synthesized name. This is useful in cases where there might
be repeated instances of global message parameters in the same action,
so it's not safe to use a fixed name string for the object. We'll create
a unique global message parameter name, associate the object with the
name, and return the name string.

</div>

<span id="gTentativeDobj"></span>

`gTentativeDobj`

[adv3.h](../file/adv3.h.html)\[[147](../source/adv3.h.html#147)\]

<div class="desc">

`(gAction.getTentativeDobj())`  
The tentative pre-resolution lists for the direct and indirect objects.
When we're resolving an object of a multi-object command, these
pre-resolution lists are available for the later-resolved objects.

Note that these values are list of ResolveInfo objects. The obj\_
property of a list entry gives the entry's game-world object.

These lists do not provide the final resolution lists for the objects;
rather, they provide a tentative set of possibilities based on the
information that's available without knowing the results of resolving
the earlier-resolved objects yet.

These are not meaningful when resolving single-object actions.

</div>

<span id="gTentativeIobj"></span>

`gTentativeIobj`

[adv3.h](../file/adv3.h.html)\[[148](../source/adv3.h.html#148)\]

<div class="desc">

`(gAction.getTentativeIobj())`  
*no description available*

</div>

<span id="gTopic"></span>

`gTopic`

[adv3.h](../file/adv3.h.html)\[[126](../source/adv3.h.html#126)\]

<div class="desc">

`(gAction.getTopic())`  
Get the current ResolvedTopic, and the literal text of the topic phrase
as the user typed it (but converted to lower case). These are applicable
when the current action has a topic phrase.

</div>

<span id="gTopicText"></span>

`gTopicText`

[adv3.h](../file/adv3.h.html)\[[127](../source/adv3.h.html#127)\]

<div class="desc">

`(gTopic.getTopicText.toLower())`  
*no description available*

</div>

<span id="gTranscript"></span>

`gTranscript`

[adv3.h](../file/adv3.h.html)\[[183](../source/adv3.h.html#183)\]

<div class="desc">

`(mainOutputStream.curTranscript)`  
the command transcript object - this is valid during command execution

</div>

<span id="gVerifyResults"></span>

`gVerifyResults`

[adv3.h](../file/adv3.h.html)\[[180](../source/adv3.h.html#180)\]

<div class="desc">

`(libGlobal.curVerifyResults)`  
the verification results object - this is valid during verification

</div>

<span id="illogical"></span>

`illogical (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1233](../source/adv3.h.html#1233)\]

<div class="desc">

`(gVerifyResults.addResult(new IllogicalVerifyResult(msg, ##params)))`  
command is always illogical

</div>

<span id="illogicalAlready"></span>

`illogicalAlready (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1228](../source/adv3.h.html#1228)\]

<div class="desc">

`(gVerifyResults.addResult( \`  
`new IllogicalAlreadyVerifyResult(msg, ##params)))`  
illogical because things are already as the command would make them

</div>

<span id="illogicalNow"></span>

`illogicalNow (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1224](../source/adv3.h.html#1224)\]

<div class="desc">

`(gVerifyResults.addResult(new IllogicalNowVerifyResult(msg, ##params)))`  
command is currently (but not always) illogical, for the given reason

</div>

<span id="illogicalSelf"></span>

`illogicalSelf (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1237](../source/adv3.h.html#1237)\]

<div class="desc">

`(gVerifyResults.addResult(new IllogicalSelfVerifyResult(msg, ##params)))`  
illogical since we're trying to use something on itself (eg, PUT X IN X)

</div>

<span id="inaccessible"></span>

`inaccessible (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1241](../source/adv3.h.html#1241)\]

<div class="desc">

`(gVerifyResults.addResult(new InaccessibleVerifyResult(msg, ##params)))`  
command is being performed on an inaccessible object

</div>

<span id="iobjFor"></span>

`iobjFor (action)`

[adv3.h](../file/adv3.h.html)\[[310](../source/adv3.h.html#310)\]

<div class="desc">

`objFor(Iobj, action)`  
*no description available*

</div>

<span id="iobjMsg"></span>

`iobjMsg (msg)`

[adv3.h](../file/adv3.h.html)\[[1416](../source/adv3.h.html#1416)\]

<div class="desc">

`(gIobj == self ? msg : nil)`  
*no description available*

</div>

<span id="ListContents"></span>

`ListContents`

[adv3.h](../file/adv3.h.html)\[[728](../source/adv3.h.html#728)\]

<div class="desc">

`0x0008`  
This is a recursive listing of the contents of an item. This is set by
showList() in calls it makes to recursive listing levels.

</div>

<span id="ListCustomFlag"></span>

`ListCustomFlag`

[adv3.h](../file/adv3.h.html)\[[757](../source/adv3.h.html#757)\]

<div class="desc">

`0x0100`  
Custom option bits. Flag bits with this value and higher are reserved
for use by individual lister subclasses.

To ensure compatibility with any future changes that involve adding more
base lister flags, subclasses are encouraged to use the following
mechanism. DO NOT use \#define to define your own custom subclass flags.
Instead, define a property of your lister subclass for each flag you
need as follows:

myCustomFlag1 = ListerCustomFlag(1) // use 1 for the first flag  
myCustomFlag2 = ListerCustomFlag(2) // etc  
nextCustomFlag = ListerCustomFlag(3)

You DO NOT have to use the name 'myCustomFlag1' - use whatever name you
like that describes the nature of the flag. However, the last item MUST
be called 'nextCustomFlag' - this ensures that any subclasses of your
class will allocate their own flags with new values that don't conflict
with any of yours.

Then, when a client of your Lister subclass needs to pass one of your
flag to the Lister, it should simply evaluate your 'myCustomFlagN'
property of your lister. If you'd like, you can even \#define a ListXxx
macro that retrieves the value, for the convenience of your callers:

\#define ListMyclassMyCustomFlag1 (Myclass.myCustomFlag1)

</div>

<span id="ListerCustomFlag"></span>

`ListerCustomFlag (n)`

[adv3.h](../file/adv3.h.html)\[[759](../source/adv3.h.html#759)\]

<div class="desc">

`static ((inherited.nextCustomFlag) << ((n) - 1))`  
*no description available*

</div>

<span id="ListLong"></span>

`ListLong`

[adv3.h](../file/adv3.h.html)\[[722](../source/adv3.h.html#722)\]

<div class="desc">

`0x0004`  
use "long list" notation - separates items that contain sublists with
special punctuation, to set off the individual items in the longer
listing from the items in the sublists (for example, separates items
with semicolons rather than commas)

</div>

<span id="ListRecurse"></span>

`ListRecurse`

[adv3.h](../file/adv3.h.html)\[[714](../source/adv3.h.html#714)\]

<div class="desc">

`0x0002`  
Recursively list the contents of each item we list.

For a 'tall' list, this indicates that we'll show the listed contents of
each item that we list, and the listed contents of those items, and so
on, indenting each level to indicate the containment relationship.

For a 'wide' list, this indicates that we'll show the listed contents of
each item in-line in the listing, as a parenthetic note.

For both types of listings, when this flag is set and the indent level
is zero (indicating a top-level listing), after the main list, we'll
show a separate list for the contents of each item in our list that
isn't itself listable but has listed contents, or has contents with
listed contents, and so on to any level. For example, if we're showing a
room description, and the room contains a desk that isn't listed because
it's a fixed part of the room, we'll show a separate list of the desk's
listed contents.

</div>

<span id="ListTall"></span>

`ListTall`

[adv3.h](../file/adv3.h.html)\[[693](../source/adv3.h.html#693)\]

<div class="desc">

`0x0001`  
use "tall" notation, which lists objects in a single column, one item
per line (the default is "wide" notation, which creates a sentence with
the object listing)

</div>

<span id="logical"></span>

`logical`

[adv3.h](../file/adv3.h.html)\[[1134](../source/adv3.h.html#1134)\]

<div class="desc">

`(gVerifyResults.addResult(new LogicalVerifyResult(100, '', 100)))`  
Command is logical. There's generally no need to add a logical result
explicitly, since a command is logical unless disapproved, but we
include this for completeness.

We use 100 as the default likelihood, to leave plenty of room for
specific likelihood rankings both above and below the default level.

</div>

<span id="logicalRank"></span>

`logicalRank (rank, key)`

[adv3.h](../file/adv3.h.html)\[[1201](../source/adv3.h.html#1201)\]

<div class="desc">

`(gVerifyResults.addResult(new LogicalVerifyResult(rank, key, 100)))`  
Command is logical, and is ranked as indicated among logical results.
The 'rank' value is the likelihood rank; the higher the rank, the more
logical the command is. The rank is only used to establish an ordering
of the logical results; if a command also has illogical results, all of
the illogical results rank as less logical than the logical result with
the lowest likelihood.

The 'key' value is an arbitrary string value associated with the
ranking. When two result lists both have a logical result object, and
both logical result objects have the same likelihood level, we'll check
the keys; if the keys match, we'll treat the two results as equivalent
and thus not distinguishing for disambiguation. This is useful because
it creates a crude multivariate space for ranking items for
disambiguation.

For example, suppose we have a "put in" command, and we have two
possibilities for the target container. Neither is being held by the
actor, so they both have a result with a logical rank of 70 with a key
value of 'not held'. In addition, both are openable, and one is open and
the other is closed; the closed one has an additional result with a
logical rank of 80 and a key of 'not open'. Which do we choose? If we
looked only at the logical rankings, both would be equivalent, since
both have 70's as their most disapproving results. However, we see that
the two 70's were applied for the same reason - because they share a
common key - so we know this information isn't helpful for
disambiguation and can be ignored. So, we find that the closed one has
an 80, and the other has no other results (hence is by default logical
with rank 100), thus we take the '80' as the better one.

Throughout the library, we use the following conventions:

150 = especially good fit: a good candidate for the action that is
especially likely to be used with the command. For example, a book is
especially suitable for a "read" command.

140 = similar to 150, but slightly less ideal a fit. We use this for
objects that are excellent fits, but for which we know certain other
objects might be better fits.

100 = default: a perfectly good candidate for the action, with nothing
that would make it illogical, but nothing that makes it especially
likely, either

80 = slightly less than perfect: a good candidate, but with some
temporary and correctable attribute that may make it less likely than
others. This is used for attributes that can be corrected: a container
needs to be opened for the action to succeed, but isn't currently open,
or an article of clothing cannot be worn for the action to proceeds, but
is currently being worn.

60/70 = slightly less than perfect, but with some attributes that can't
be readily corrected and which make the candidate potentially less
likely. These are used to make guesses about which might object might be
intended when several are logical but some might be more readily used
than others; for example, if putting an object into a container, a
container being held might rank higher than one not being held, so the
one not being held might be ranked a "70" likelihood.

50 = logical but not especially likely: an acceptable candidate for the
action, but probably not the best choice for the action. This is used
when an object can be used for the action, but would not be expected to
do anything special with the action.

</div>

<span id="logicalRankOrd"></span>

`logicalRankOrd (rank, key, ord)`

[adv3.h](../file/adv3.h.html)\[[1209](../source/adv3.h.html#1209)\]

<div class="desc">

`(gVerifyResults.addResult(new LogicalVerifyResult(rank, key, ord)))`  
Logical ranking with specific list ordering. This is the same as a
regular logicalRank, but uses the given list ordering rather than the
default list ordering (100).

</div>

<span id="LookListPortables"></span>

`LookListPortables`

[adv3.h](../file/adv3.h.html)\[[1587](../source/adv3.h.html#1587)\]

<div class="desc">

`0x0008`  
show the portable items

</div>

<span id="LookListSpecials"></span>

`LookListSpecials`

[adv3.h](../file/adv3.h.html)\[[1584](../source/adv3.h.html#1584)\]

<div class="desc">

`0x0004`  
show the non-portable items (the specialDesc's)

</div>

<span id="LookRoomDesc"></span>

`LookRoomDesc`

[adv3.h](../file/adv3.h.html)\[[1581](../source/adv3.h.html#1581)\]

<div class="desc">

`0x0002`  
show the room's long desription (the roomDesc)

</div>

<span id="LookRoomName"></span>

`LookRoomName`

[adv3.h](../file/adv3.h.html)\[[1578](../source/adv3.h.html#1578)\]

<div class="desc">

`0x0001`  
show the room name as part of the description

</div>

<span id="M_DOWN"></span>

`M_DOWN`

[adv3.h](../file/adv3.h.html)\[[1665](../source/adv3.h.html#1665)\]

<div class="desc">

`4`  
*no description available*

</div>

<span id="M_PREV"></span>

`M_PREV`

[adv3.h](../file/adv3.h.html)\[[1663](../source/adv3.h.html#1663)\]

<div class="desc">

`2`  
*no description available*

</div>

<span id="M_QUIT"></span>

`M_QUIT`

[adv3.h](../file/adv3.h.html)\[[1662](../source/adv3.h.html#1662)\]

<div class="desc">

`1`  
The indices for the key values used to navigate menus, which are held in
the keyList array of MenuItems.

</div>

<span id="M_SEL"></span>

`M_SEL`

[adv3.h](../file/adv3.h.html)\[[1666](../source/adv3.h.html#1666)\]

<div class="desc">

`5`  
*no description available*

</div>

<span id="M_UP"></span>

`M_UP`

[adv3.h](../file/adv3.h.html)\[[1664](../source/adv3.h.html#1664)\]

<div class="desc">

`3`  
*no description available*

</div>

<span id="mainReport"></span>

`mainReport (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1354](../source/adv3.h.html#1354)\]

<div class="desc">

`(gTranscript.addReport(new MainCommandReport(msg, ##params)))`  
Set a main report for the current command. This report will be shown as
the main report from the command, overriding any default report for the
command.

</div>

<span id="mapPushTravelHandlers"></span>

`mapPushTravelHandlers (pushAction, travelAction)`

[adv3.h](../file/adv3.h.html)\[[443](../source/adv3.h.html#443)\]

<div class="desc">

`dobjFor(pushAction) asDobjFor(PushTravel) \`  
`mapPushTravelIobj(pushAction, travelAction)`  
For two-object push-travel actions, such as "push sled into cave",
define a special mapping for both the direct and indirect objects:

\- Map the direct object (the object being pushed) to a simple
PushTravel action. So, for "push sled into cave," map the direct object
handling to PushTravel for the sled. This makes the handling of the
command equivalent to "push sled north" and the like.

\- Map the indirect object (the travel connector) to use the PushTravel
action's verify remapper. This is handled specially by the PushTravel
action object to handle the verification as though it were verifying the
corresponding ordinary (non-push) travel action on the indirect object.
Beyond verification, we do nothing, since the direct object of a
pushable object will handle the whole action using a nested travel
action.

This effectively decomposes the two-object action into two coupled
single-object actions: a regular PushTravel action on the object being
pushed, and a regular whatever-kind-of-travel on the connector being
traversed. This handling has the appeal that it means that we don't need
a separate PUSH version of every kind of allowed travel on a connector,
and we don't need a special handler version for each kind of travel on a
pushable object; instead, we just use the basic PushTravel and
kind-of-travel handlers to form the combined form. Note that this still
allows separate treatment of the combined form wherever desired, just by
overriding these default handlers for the two-object action.

</div>

<span id="mapPushTravelIobj"></span>

`mapPushTravelIobj (pushAction, travelAction)`

[adv3.h](../file/adv3.h.html)\[[447](../source/adv3.h.html#447)\]

<div class="desc">

`iobjFor(pushAction) \`  
`{ \`  
`verify() \`  
`{ gAction.verifyPushTravelIobj(self, travelAction##Action); } \`  
`}`  
*no description available*

</div>

<span id="MatchedAll"></span>

`MatchedAll`

[adv3.h](../file/adv3.h.html)\[[860](../source/adv3.h.html#860)\]

<div class="desc">

`0x0008`  
The object came from an 'all' phrase. Normally, the only time this makes
any difference is when deciding whether or not to mention which object
we're acting upon; an 'all' object should normally be mentioned
explicitly, as though the command had involved multiple objects, because
otherwise it might not be clear to the user what object had actually
matched 'all'.

</div>

<span id="maybeRemapTo"></span>

`maybeRemapTo (cond, action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[411](../source/adv3.h.html#411)\]

<div class="desc">

`{ remap = ((cond) ? [action##Action, ##objs] : inherited()) }`  
Conditionally remap an action. If 'cond' (a conditional expression)
evaluated to true, we'll remap the action as directed; otherwise, we'll
inherit the default handling

</div>

<span id="nestedAction"></span>

`nestedAction (action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1467](../source/adv3.h.html#1467)\]

<div class="desc">

`_nestedAction(nil, gActor, action##Action, ##objs)`  
Run a nested action.

</div>

<span id="nestedActorAction"></span>

`nestedActorAction (actor, action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1473](../source/adv3.h.html#1473)\]

<div class="desc">

`_nestedAction(nil, actor, action##Action, ##objs)`  
Run a nested action targeted to a given actor.

</div>

<span id="newAction"></span>

`newAction (action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1490](../source/adv3.h.html#1490)\]

<div class="desc">

`_newAction(CommandTranscript, nil, gActor, action##Action, ##objs)`  
Run a new action. This is a brand new action run as a separate turn, not
as a nested action. This doesn't replace any current action, but is
simply a separate action.

This is normally used only for internal actions that are run between
other actions. This should not normally be used while another action is
being processed - use nestedAction for that instead. This should also
not normally be used to replace the current action with another - use
replaceAction for that.

Returns a CommandTranscript object, which provides information on the
results of the action.

</div>

<span id="newActorAction"></span>

`newActorAction (actor, action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1494](../source/adv3.h.html#1494)\]

<div class="desc">

`_newAction(CommandTranscript, nil, actor, action##Action, ##objs)`  
run a new action with a specific actor

</div>

<span id="nonObvious"></span>

`nonObvious`

[adv3.h](../file/adv3.h.html)\[[1220](../source/adv3.h.html#1220)\]

<div class="desc">

`(gVerifyResults.addResult(new NonObviousVerifyResult('')))`  
command is logical but non-obvious: the object should never be taken as
a default

</div>

<span id="objFor"></span>

`objFor (which, action)`

[adv3.h](../file/adv3.h.html)\[[305](../source/adv3.h.html#305)\]

<div class="desc">

`objForCheck(which, action) \`  
`propertyset '*' ## #@which ## #@action`  
*no description available*

</div>

<span id="objForCheck"></span>

`objForCheck (which, action)`

[adv3.h](../file/adv3.h.html)\[[299](../source/adv3.h.html#299)\]

<div class="desc">

`sentinel##which##action = __objref(action##Action, warn)`  
in debug mode, flag objFor definitions for non-existent actions

</div>

<span id="objForCheck"></span>

`objForCheck (which, action)`

[adv3.h](../file/adv3.h.html)\[[302](../source/adv3.h.html#302)\]

<div class="desc">

  
*no description available*

</div>

<span id="openableContentsLister"></span>

`openableContentsLister`

[adv3.h](../file/adv3.h.html)\[[1793](../source/adv3.h.html#1793)\]

<div class="desc">

`openableDescContentsLister`  
For compatibility with versions before 3.1.1, define
openableContentsLister as a synonym for openableDescContentsLister. The
former was renamed to the latter in 3.1.1 because the original name was
inconsistent with the corresponding listers for other classes. In
principle, openableContentsLister is meant to be the 'contentsLister'
(for displaying the openable's contents in room descriptions, etc) for
an Openable, while openableDescContentsLister is its
'descContentsLister' (for displaying the openable's contents in its own
EXAMINE description). Fortunately we don't have a need for a special
contentsLister for Openable, so we can avoid breaking existing code by
mapping the old name to the new name.

</div>

<span id="PARSER_DEBUG"></span>

`PARSER_DEBUG`

[adv3.h](../file/adv3.h.html)\[[81](../source/adv3.h.html#81)\]

<div class="desc">

  
If we're compiling for debugging, automatically include the parser debug
code, which allows certain information on the parsing process (such as
grammar match trees) to be displayed each time a command is typed.

Note that you can turn on parser debugging independently of full
compiler debug information simply by explicitly defining PARSER_DEBUG
(with the t3make -D option, for example).

</div>

<span id="PluralTruncated"></span>

`PluralTruncated`

[adv3.h](../file/adv3.h.html)\[[850](../source/adv3.h.html#850)\]

<div class="desc">

`0x0004`  
One or more plurals was truncated from its full dictionary spelling. (We
specially distinguish plurals that are truncated, because in English a
plural is usually formed by adding "s" or "es" to the end of the
singular form of a noun, meaning that a given singular form is usually a
leading substring of its plural. When a singular noun is longer than the
truncation limit, which is conventionally six characters, the singular
will always match as a truncated version of the plural, so every time
someone types in a singular it'll be treated as ambiguous between the
singular and plural form. So, in the English parser, we have a
preference to ignore a truncated plural any time the word could also be
interpreted as an untruncated singular, hence we note when we have a
truncated plural.)

</div>

<span id="remapTo"></span>

`remapTo (action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[404](../source/adv3.h.html#404)\]

<div class="desc">

`{ remap = [action##Action, ##objs] }`  
"Remap" an action. This effectively rewrites the action in the given
form. Each of the object slots can be filled either with a specific
object, or with a noun phrase role name (DirectObject, IndirectObject);
in the latter case, the object or objects from the named noun phrase
role in the \*current\* action (i.e., before the rewrite) will be used.

If the new action has two or more objects (for example, if it's a
TIAction), then EXACTLY ONE of the slots must be filled with a specific
object, and all of the other slots must be filled with role names. The
specific object is the one that corresponds to the original object
that's doing the remapping in the first place - this can simply be
'self' if the new action will operate on the same object, or it can be a
different object. The important thing is that the 'verify' method for
the defining object will be forwarded to the corresponding 'verify'
method on the corresponding object for the new action.

This macro must be used as the ENTIRE definition block for a dobjFor()
or iobjFor(). For example, to remap a "put in" command directed to a
desk so that the command is instead applied to a drawer in the desk, we
could define the following on the desk object:

iobjFor(PutIn) remapTo(PutIn, DirectObject, deskDrawer)

</div>

<span id="replaceAction"></span>

`replaceAction (action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1454](../source/adv3.h.html#1454)\]

<div class="desc">

`_replaceAction(gActor, action##Action, ##objs)`  
Replace the current action with a new action. The new action will be
performed, and the original action will be terminated with 'exit'.

'action' is the root name of the action, without the 'Action' suffix
(we'll add the suffix automatically). 'objs' is a varying-length list of
the resolved objects - direct object, indirect object, etc.

</div>

<span id="replaceActorAction"></span>

`replaceActorAction (actor, action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1461](../source/adv3.h.html#1461)\]

<div class="desc">

`_replaceAction(actor, action##Action, ##objs)`  
Replace the current action with a new action directed to a different
actor (but from the same issuing actor).

</div>

<span id="reportAfter"></span>

`reportAfter (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1370](../source/adv3.h.html#1370)\]

<div class="desc">

`(gTranscript.addReport(new AfterCommandReport(msg, ##params)))`  
Set an "after" report for the current command. This report will be shown
after any main report, but will override any default report for the
command.

</div>

<span id="reportBefore"></span>

`reportBefore (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1362](../source/adv3.h.html#1362)\]

<div class="desc">

`(gTranscript.addReport(new BeforeCommandReport(msg, ##params)))`  
Set a "before" report for the current command. This report will be shown
before any main report, but will override any default report for the
command.

</div>

<span id="reportFailure"></span>

`reportFailure (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1385](../source/adv3.h.html#1385)\]

<div class="desc">

`(gTranscript.addReport(new FailCommandReport(msg, ##params)))`  
Report failure. This overrides any default report, and marks the command
as having failed.

A failure report should NOT indicate any state change - this is
important because failure reports are suppressed under some conditions
(for example, when an NPC is performing an implied command, and the
implied command fails, we don't show the failure report). If a failure
is accompanied by a state change, then a mainReport() should be made in
addition to the failure report - the main report should indicate the
state change.

</div>

<span id="reportQuestion"></span>

`reportQuestion (msg, params, ...)`

[adv3.h](../file/adv3.h.html)\[[1392](../source/adv3.h.html#1392)\]

<div class="desc">

`(gTranscript.addReport(new QuestionCommandReport(msg, ##params)))`  
Report a question. This shows a report that's really an interactive
prompt for more information, such as a prompt for a missing object.

</div>

<span id="SecondPerson"></span>

`SecondPerson`

[adv3.h](../file/adv3.h.html)\[[590](../source/adv3.h.html#590)\]

<div class="desc">

`2`  
*no description available*

</div>

<span id="SpellIntAndTens"></span>

`SpellIntAndTens`

[adv3.h](../file/adv3.h.html)\[[785](../source/adv3.h.html#785)\]

<div class="desc">

`0x0002`  
use 'and' before the tens - 125 is 'one hundred and twenty-five' rather
than 'one hundred twenty-five'

</div>

<span id="SpellIntCommas"></span>

`SpellIntCommas`

[adv3.h](../file/adv3.h.html)\[[791](../source/adv3.h.html#791)\]

<div class="desc">

`0x0004`  
put a comma after each power group - 123456 is 'one hundred twenty-three
thousand, four hundred fifty-six'

</div>

<span id="SpellIntTeenHundreds"></span>

`SpellIntTeenHundreds`

[adv3.h](../file/adv3.h.html)\[[779](../source/adv3.h.html#779)\]

<div class="desc">

`0x0001`  
Use tens of hundreds rather than thousands if possible - 1950 is
'nineteen hundred fifty' rather than 'one thousand nine hundred fifty'.
This only works if the number (not including the millions and billions)
is in the range 1,100 to 9,999, because we don't want to say something
like 'one hundred twenty hundred' for 12,000.

</div>

<span id="ThirdPerson"></span>

`ThirdPerson`

[adv3.h](../file/adv3.h.html)\[[591](../source/adv3.h.html#591)\]

<div class="desc">

`3`  
*no description available*

</div>

<span id="tryImplicitAction"></span>

`tryImplicitAction (action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1427](../source/adv3.h.html#1427)\]

<div class="desc">

`_tryImplicitAction(gIssuingActor, gActor, &announceImplicitAction, \`  
`action##Action, ##objs)`  
Try performing a command implicitly. The action is the root name of the
action, without the 'Action' suffix - we'll automatically add the
suffix. 'objs' is a varying-length list of the resolved objects in the
new action - the direct object, indirect object, and any others needed
for the action.

</div>

<span id="tryImplicitActionMsg"></span>

`tryImplicitActionMsg (msgProp, action, objs, ...)`

[adv3.h](../file/adv3.h.html)\[[1442](../source/adv3.h.html#1442)\]

<div class="desc">

`_tryImplicitAction(gIssuingActor, gActor, msgProp, \`  
`action##Action, ##objs)`  
Try performing a command implicitly, with a special descriptive message.
'msgProp' gives the libMessages method to invoke the announce the
action, if the action is performed. If 'msgProp' is nil, no message is
displayed at all.

'action' is the root name of the action, without the 'Action' suffix
(we'll automatically add the suffix). 'objs' is a varying-length list of
the resolved objects - direct object, indirect object, and any others
needed.

</div>

<span id="UnclearDisambig"></span>

`UnclearDisambig`

[adv3.h](../file/adv3.h.html)\[[905](../source/adv3.h.html#905)\]

<div class="desc">

`0x0040`  
The noun phase describing this object was ambiguous, and the object was
selected by automatic disambiguation in a context where it was not
perfectly clear which object was indicated. This is used for cases where
the objects selected were more logical than the objects not selected,
but some of the unselected objects were still logical.

This flag doesn't mean that we chose arbitrarily, but rather that we
chose the best object or objects from a field that included additional
objects that, though not quite as good, were still valid. We flag this
case because the user \*could\* have meant to use one of the other valid
objects, even though we consider it most likely that the user meant to
use the one(s) we selected; so, we want to flag this so we can call the
user's attention to our choice, to make it more likely that the user
will immediately notice if we made the wrong choice.

Note that we can't have both ClearDisambig and UnclearDisambig at the
same time, but we \*can\* have neither of these. If neither flag is set
for an object, it simply means that the object wasn't ambiguous to start
with. When the user explicitly picks an object interactively, the
selected object is effectively unambiguous, so it won't have either flag
set; even though it started off ambiguous, the user did all of the work
of selecting the appropriate object, leaving things unambiguous in the
end.

</div>

<span id="VocabTruncated"></span>

`VocabTruncated`

[adv3.h](../file/adv3.h.html)\[[834](../source/adv3.h.html#834)\]

<div class="desc">

`0x0002`  
one of the words in the noun phrase was truncated from its full
dictionary spelling

</div>

<span id="_Enums_"></span>

<div class="mjhd">

<span class="hdln">Enums</span>  

</div>

<span id="ActorObject"></span> <span id="DirectObject"></span>
<span id="IndirectObject"></span>

`ActorObject   DirectObject   IndirectObject   `

[`adv3.h`](../file/adv3.h.html)`[`[`498`](../source/adv3.h.html#498)`]`

<div class="desc">

Object role identifiers. These are used to identify the role of a noun
phrase in a command.

The library provides base classes for actions of zero, one, and two noun
phrases in their grammars: "look", "take book", "put book on shelf". We
thus define role identifiers for direct and indirect objects. Note that
even though we stop there, this doesn't preclude games or library
extensions from adding actions that take more than two noun phrases
("put coin in slot with tongs"); any such extensions must simply define
their own additional role identifiers for the third or fourth (etc) noun
phrase.

</div>

<span id="AnnounceClear"></span>

`AnnounceClear   `

[`adv3.h`](../file/adv3.h.html)`[`[`950`](../source/adv3.h.html#950)`]`

<div class="desc">

Announce clear and unclear disambiguation results, both using
parenthetical announcement ("(the red door)"). When this setting is
selected, the parser makes these announcements every time it applies the
logicalness rules or likelihood rankings to disambiguate a noun phrase.
There's no announcement when no disambiguation is needed (because the
noun phrase matches only one in-scope object).

</div>

<span id="AnnounceUnclear"></span>

`AnnounceUnclear   `

[`adv3.h`](../file/adv3.h.html)`[`[`940`](../source/adv3.h.html#940)`]`

<div class="desc">

Announce unclear disambiguation results only. When this setting is
selected, the parser makes a parenthetical announcement (e.g., "(the red
door)") when it selects an object based on likelihood rankings from
among more than one logical match. The parser makes no announcement when
exactly one logical object is in scope, even if other objects match the
noun phrase by name.

</div>

<span id="attenuated"></span>

`attenuated   `

[`adv3.h`](../file/adv3.h.html)`[`[`610`](../source/adv3.h.html#610)`]`

<div class="desc">

The sense is passed, but with attenuation of energy level. No other
obscuration of detail occurs; this is something like tinted glass that
doesn't distort the transmitted sense but reduces the amount of energy.

</div>

<span id="blockEndConv"></span>

`blockEndConv   `

[`adv3.h`](../file/adv3.h.html)`[`[`1761`](../source/adv3.h.html#1761)`]`

<div class="desc">

Special result code for Actor.canEndConversation() - this indicates that
the other actor said something to force the conversation to keep going.

</div>

<span id="DescribeClear"></span>

`DescribeClear   `

[`adv3.h`](../file/adv3.h.html)`[`[`963`](../source/adv3.h.html#963)`]`

<div class="desc">

Describe clear disambiguation results, rather than announcing them. The
parser makes the parenthetical announcement, as usual, for unclear
disambiguation picks, but not for clear picks (a clear pick is one where
there's only one logical object, even though the noun phrase matches
more than one object). For clear picks, however, the parser uses a
verbose version of the action reply in lieu of one of the terse default
messages. For example, rather than saying just "Taken", the parser would
reply "You take the red book." The longer messages mention the object by
name, to make it clear exactly which one was chosen.

</div>

<span id="distant"></span>

`distant   `

[`adv3.h`](../file/adv3.h.html)`[`[`603`](../source/adv3.h.html#603)`]`

<div class="desc">

the sense is passed, but with a loss of detail associated with distance

</div>

<span id="endConvActor"></span>

`endConvActor   `

[`adv3.h`](../file/adv3.h.html)`[`[`1755`](../source/adv3.h.html#1755)`]`

<div class="desc">

*no description available*

</div>

<span id="endConvBoredom"></span>

`endConvBoredom   `

[`adv3.h`](../file/adv3.h.html)`[`[`1754`](../source/adv3.h.html#1754)`]`

<div class="desc">

*no description available*

</div>

<span id="endConvBye"></span>

`endConvBye   `

[`adv3.h`](../file/adv3.h.html)`[`[`1752`](../source/adv3.h.html#1752)`]`

<div class="desc">

End-of-conversation reason codes

</div>

<span id="endConvTravel"></span>

`endConvTravel   `

[`adv3.h`](../file/adv3.h.html)`[`[`1753`](../source/adv3.h.html#1753)`]`

<div class="desc">

*no description available*

</div>

<span id="FootnotesFull"></span> <span id="FootnotesMedium"></span>
<span id="FootnotesOff"></span>

`FootnotesFull   FootnotesMedium   FootnotesOff   `

[`adv3.h`](../file/adv3.h.html)`[`[`1614`](../source/adv3.h.html#1614)`]`

<div class="desc">

footnote status levels

</div>

<span id="InventoryTall"></span> <span id="InventoryWide"></span>

`InventoryTall   InventoryWide   `

[`adv3.h`](../file/adv3.h.html)`[`[`972`](../source/adv3.h.html#972)`]`

<div class="desc">

Inventory modes. "Wide" mode displays the inventory in paragraph form;
"tall" mode displays as a list, with one item per line, indenting items
to reflect containment.

</div>

<span id="large"></span>

`large   `

[`adv3.h`](../file/adv3.h.html)`[`[`639`](../source/adv3.h.html#639)`]`

<div class="desc">

Large - the object is large enough that its details can be sensed from a
distance or through an obscuring medium.

</div>

<span id="medium"></span>

`medium   `

[`adv3.h`](../file/adv3.h.html)`[`[`646`](../source/adv3.h.html#646)`]`

<div class="desc">

Medium - the object can be sensed at a distance or when obscured, but
not in any detail. Most objects fall into this category. Note that
things that are parts of large objects should normally be medium.

</div>

<span id="obscured"></span>

`obscured   `

[`adv3.h`](../file/adv3.h.html)`[`[`618`](../source/adv3.h.html#618)`]`

<div class="desc">

The sense is passed, but with a loss of detail due to an obscuring layer
of material. The energy level is also attenuated. This is something like
dirty or wavy glass that distorts an image transmitted through it but
doesn't completely block out light.

</div>

<span id="opaque"></span>

`opaque   `

[`adv3.h`](../file/adv3.h.html)`[`[`621`](../source/adv3.h.html#621)`]`

<div class="desc">

the sense is not passed at all

</div>

<span id="OtherObject"></span>

`OtherObject   `

[`adv3.h`](../file/adv3.h.html)`[`[`507`](../source/adv3.h.html#507)`]`

<div class="desc">

A special role for the "other" object of a two-object command. This can
be used in certain contexts (such as remapTo) where a particular object
role is implied by the context, and where the action involved has
exactly two objects; OtherObject in such contexts means DirectObject
when the implied role is IndirectObject, and vice versa.

</div>

<span id="PathFrom"></span>

`PathFrom   `

[`adv3.h`](../file/adv3.h.html)`[`[`661`](../source/adv3.h.html#661)`]`

<div class="desc">

traverse from the starting point of the path

</div>

<span id="PathIn"></span>

`PathIn   `

[`adv3.h`](../file/adv3.h.html)`[`[`664`](../source/adv3.h.html#664)`]`

<div class="desc">

traverse into the contents

</div>

<span id="PathOut"></span>

`PathOut   `

[`adv3.h`](../file/adv3.h.html)`[`[`667`](../source/adv3.h.html#667)`]`

<div class="desc">

traverse out to the container

</div>

<span id="PathPeer"></span>

`PathPeer   `

[`adv3.h`](../file/adv3.h.html)`[`[`670`](../source/adv3.h.html#670)`]`

<div class="desc">

traverse from an object to a peer at the same containment level

</div>

<span id="PathThrough"></span>

`PathThrough   `

[`adv3.h`](../file/adv3.h.html)`[`[`677`](../source/adv3.h.html#677)`]`

<div class="desc">

traverse through an object with no common container on either side of
the traversal - this is used when we are traversing an object, such as a
SenseConnector, that connects unrelated locations

</div>

<span id="PathTo"></span>

`PathTo   `

[`adv3.h`](../file/adv3.h.html)`[`[`680`](../source/adv3.h.html#680)`]`

<div class="desc">

traverse to the ending point of the path

</div>

<span id="PronounHer"></span> <span id="PronounHim"></span>
<span id="PronounIt"></span> <span id="PronounMe"></span>
<span id="PronounThem"></span> <span id="PronounYou"></span>

`PronounHer   PronounHim   PronounIt   PronounMe   PronounThem   PronounYou   `

[`adv3.h`](../file/adv3.h.html)`[`[`538`](../source/adv3.h.html#538)`]`

<div class="desc">

Pronoun types. These are used to identify pronoun antecedents when
resolving noun phrases involving pronouns.

We define a basic set of pronouns here that are common to most
languages. Language-specific modules are free to add their own pronoun
types as needed.

Our basic set is:

'it' - the neuter singular  
'him' - the masculine singular  
'her' - the feminine singular  
'them' - the ungendered plural  
'you' - second person singular  
'me' - first person singular

Note that the first-person and second-person pronouns are assigned
meanings that can vary by context. When a command is issued by the
player character to the player character (i.e., the command comes from
the player and no target actor is specified), these refer to the player
character when the PC is in the appropriate referral person - if the
game calls the PC "you", then the player calls the PC "me", and vice
versa. When a command is targeted to or issued by an actor other than
the PC, then "you" refers to the command's target and "me" refers to the
command's issuer.

</div>

<span id="rmcAskLiteral"></span>

`rmcAskLiteral   `

[`adv3.h`](../file/adv3.h.html)`[`[`286`](../source/adv3.h.html#286)`]`

<div class="desc">

reading a response to a prompt for a missing literal phrase

</div>

<span id="rmcAskObject"></span>

`rmcAskObject   `

[`adv3.h`](../file/adv3.h.html)`[`[`283`](../source/adv3.h.html#283)`]`

<div class="desc">

reading a response to a prompt for a missing object phrase

</div>

<span id="rmcCommand"></span>

`rmcCommand   `

[`adv3.h`](../file/adv3.h.html)`[`[`277`](../source/adv3.h.html#277)`]`

<div class="desc">

reading a normal command line

</div>

<span id="rmcDisambig"></span>

`rmcDisambig   `

[`adv3.h`](../file/adv3.h.html)`[`[`289`](../source/adv3.h.html#289)`]`

<div class="desc">

reading a response to an interactive disambiguation prompt

</div>

<span id="rmcOops"></span>

`rmcOops   `

[`adv3.h`](../file/adv3.h.html)`[`[`280`](../source/adv3.h.html#280)`]`

<div class="desc">

reading an unknown word response, to check for an "oops" command

</div>

<span id="small"></span>

`small   `

[`adv3.h`](../file/adv3.h.html)`[`[`652`](../source/adv3.h.html#652)`]`

<div class="desc">

Small - the object cannot be sensed at a distance at all. This is
appropriate for detailed parts of medium-class objects.

</div>

<span id="transparent"></span>

`transparent   `

[`adv3.h`](../file/adv3.h.html)`[`[`600`](../source/adv3.h.html#600)`]`

<div class="desc">

the sense is passed without loss of detail

</div>

<span id="_Templates_"></span>

<div class="mjhd">

<span class="hdln">Templates</span>  

</div>

<span id="Achievement"></span>

`Achievement`

[adv3.h](../file/adv3.h.html)\[[1622](../source/adv3.h.html#1622)\]

<div class="desc">

`+points? "desc";`  
An achievement defines its descriptive text. It can also optionally
define the number of points it awards.

</div>

<span id="AltTopic"></span>

`AltTopic`

[adv3.h](../file/adv3.h.html)\[[1740](../source/adv3.h.html#1740)\]

<div class="desc">

`"topicResponse" | [eventList];`  
alternative topics just specify the response string or strings

</div>

<span id="AltTopic"></span>

`AltTopic`

[adv3.h](../file/adv3.h.html)\[[1741](../source/adv3.h.html#1741)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="ConvNode"></span>

`ConvNode`

[adv3.h](../file/adv3.h.html)\[[1747](../source/adv3.h.html#1747)\]

<div class="desc">

`'name';`  
a conversation node need a name

</div>

<span id="DefaultTopic"></span>

`DefaultTopic`

[adv3.h](../file/adv3.h.html)\[[1736](../source/adv3.h.html#1736)\]

<div class="desc">

`"topicResponse" | [eventList];`  
default topics just specify the response text

</div>

<span id="DefaultTopic"></span>

`DefaultTopic`

[adv3.h](../file/adv3.h.html)\[[1737](../source/adv3.h.html#1737)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="EventList"></span>

`EventList`

[adv3.h](../file/adv3.h.html)\[[1629](../source/adv3.h.html#1629)\]

<div class="desc">

`[eventList];`  
An event list takes a list of strings, objects, and/or functions.

</div>

<span id="Footnote"></span>

`Footnote`

[adv3.h](../file/adv3.h.html)\[[1611](../source/adv3.h.html#1611)\]

<div class="desc">

`"desc";`  
A template for footnotes - all we usually need to define in a footnote
is its descriptive text, so this makes it easy to define one.

</div>

<span id="Goal"></span>

`Goal`

[adv3.h](../file/adv3.h.html)\[[1674](../source/adv3.h.html#1674)\]

<div class="desc">

`->closeWhenAchieved? 'title' 'heading'? [menuContents];`  
templates for hint system objects

</div>

<span id="Hint"></span>

`Hint`

[adv3.h](../file/adv3.h.html)\[[1675](../source/adv3.h.html#1675)\]

<div class="desc">

`'hintText' [referencedGoals]?;`  
*no description available*

</div>

<span id="MenuItem"></span>

`MenuItem`

[adv3.h](../file/adv3.h.html)\[[1669](../source/adv3.h.html#1669)\]

<div class="desc">

`'title' 'heading'?;`  
some templates for defining menu items

</div>

<span id="MenuLongTopicItem"></span>

`MenuLongTopicItem`

[adv3.h](../file/adv3.h.html)\[[1671](../source/adv3.h.html#1671)\]

<div class="desc">

`'title' 'heading'? 'menuContents';`  
*no description available*

</div>

<span id="MenuTopicItem"></span>

`MenuTopicItem`

[adv3.h](../file/adv3.h.html)\[[1670](../source/adv3.h.html#1670)\]

<div class="desc">

`'title' 'heading'? [menuContents];`  
*no description available*

</div>

<span id="MiscTopic"></span>

`MiscTopic`

[adv3.h](../file/adv3.h.html)\[[1715](../source/adv3.h.html#1715)\]

<div class="desc">

`"topicResponse" | [eventList];`  
miscellanous topics just specify the response text or list

</div>

<span id="MiscTopic"></span>

`MiscTopic`

[adv3.h](../file/adv3.h.html)\[[1716](../source/adv3.h.html#1716)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="MultiLoc"></span>

`MultiLoc`

[adv3.h](../file/adv3.h.html)\[[1596](../source/adv3.h.html#1596)\]

<div class="desc">

`[locationList];`  
Template for multi-location objects. To put a MultiLoc object in several
initial locations, simply use a template giving the list of locations.

</div>

<span id="ShuffledEventList"></span>

`ShuffledEventList`

[adv3.h](../file/adv3.h.html)\[[1637](../source/adv3.h.html#1637)\]

<div class="desc">

`[firstEvents] [eventList];`  
A shuffled event list with two lists - the first list is the sequential
initial list, fired in the exact order specified; and the second is the
random list, with the events that occur in shuffled order after we
exhaust the initial list.

</div>

<span id="ShuffledList"></span>

`ShuffledList`

[adv3.h](../file/adv3.h.html)\[[1643](../source/adv3.h.html#1643)\]

<div class="desc">

`[valueList];`  
low-level shuffled list

</div>

<span id="SpecialTopic"></span>

`SpecialTopic`

[adv3.h](../file/adv3.h.html)\[[1724](../source/adv3.h.html#1724)\]

<div class="desc">

` 'name' [keywordList] | 'matchPat' "topicResponse" | [eventList] ?;`  
A SpecialTopic takes a keyword list or a regular expression instead of
the regular match criteria. It also takes a suggestion name string and
the normal response text. There's no need for a score in a special
topic, since these are unique.

</div>

<span id="SpecialTopic"></span>

`SpecialTopic`

[adv3.h](../file/adv3.h.html)\[[1730](../source/adv3.h.html#1730)\]

<div class="desc">

` 'name' [keywordList] | 'matchPat' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="StyleTag"></span>

`StyleTag`

[adv3.h](../file/adv3.h.html)\[[1603](../source/adv3.h.html#1603)\]

<div class="desc">

`'tagName' 'openText'? 'closeText'?;`  
Templates for style tags

</div>

<span id="SyncEventList"></span>

`SyncEventList`

[adv3.h](../file/adv3.h.html)\[[1640](../source/adv3.h.html#1640)\]

<div class="desc">

`->masterObject inherited;`  
a synchronized event list takes its state from another list

</div>

<span id="Tip"></span>

`Tip`

[adv3.h](../file/adv3.h.html)\[[1650](../source/adv3.h.html#1650)\]

<div class="desc">

`"desc";`  
Define a template for the Tip class.

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[adv3.h](../file/adv3.h.html)\[[1689](../source/adv3.h.html#1689)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] | 'matchPattern' "topicResponse" | [eventList] ?;`  
A TopicEntry can be defined with an optional score, followed by the
match criteria (which can be either a single matching object, a list of
matching objects, or a regular expression pattern string), followed by
the optional response text (which can be given either as a double-quoted
string or as a list of single-quoted strings to use as an EventList).

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[adv3.h](../file/adv3.h.html)\[[1695](../source/adv3.h.html#1695)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] | 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[adv3.h](../file/adv3.h.html)\[[1701](../source/adv3.h.html#1701)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] 'matchPattern' "topicResponse" | [eventList] ?;`  
we can also include \*both\* the match object/list \*and\* pattern

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[adv3.h](../file/adv3.h.html)\[[1708](../source/adv3.h.html#1708)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="TopicGroup"></span>

`TopicGroup`

[adv3.h](../file/adv3.h.html)\[[1744](../source/adv3.h.html#1744)\]

<div class="desc">

`+matchScoreAdjustment;`  
a TopicGroup can specify its score adjustment

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
