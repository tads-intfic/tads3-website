---
---
<span class="title">advlite.h</span><span class="type">file</span>

[source file](../source/advlite.h.html)

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

` `[`_STRINGIZE`](#_STRINGIZE)`  `[`_STRINGIZE`](#_STRINGIZE)`  `[`abort`](#abort)`  `[`abortImplicit`](#abortImplicit)`  `[`accFor`](#accFor)`  `[`accList`](#accList)`  `[`ADV3LITE_H`](#ADV3LITE_H)`  `[`AHREF_Plain`](#AHREF_Plain)`  `[`aobjFor`](#aobjFor)`  `[`aobjList`](#aobjList)`  `[`asAccFor`](#asAccFor)`  `[`asAobjFor`](#asAobjFor)`  `[`asDobjFor`](#asDobjFor)`  `[`asDobjWithoutActionFor`](#asDobjWithoutActionFor)`  `[`asDobjWithoutVerifyFor`](#asDobjWithoutVerifyFor)`  `[`asExit`](#asExit)`  `[`asIobjFor`](#asIobjFor)`  `[`asIobjWithoutActionFor`](#asIobjWithoutActionFor)`  `[`asIobjWithoutVerifyFor`](#asIobjWithoutVerifyFor)`  `[`askForAcc`](#askForAcc)`  `[`askForAobj`](#askForAobj)`  `[`askForDobj`](#askForDobj)`  `[`askForIobj`](#askForIobj)`  `[`asObjFor`](#asObjFor)`  `[`asObjWithoutActionFor`](#asObjWithoutActionFor)`  `[`asObjWithoutVerifyFor`](#asObjWithoutVerifyFor)`  `[`AudioLink`](#AudioLink)`  `[`BMsg`](#BMsg)`  `[`BMsg`](#BMsg)`  `[`cannotTouchMsg`](#cannotTouchMsg)`  `[`checkHitMsg`](#checkHitMsg)`  `[`checkTouchMsg`](#checkTouchMsg)`  `[`ConversationLullReason`](#ConversationLullReason)`  `[`dangerous`](#dangerous)`  `[`DefaultTopicReason`](#DefaultTopicReason)`  `[`DefineAction`](#DefineAction)`  `[`DefineIAction`](#DefineIAction)`  `[`DefineLiteralAction`](#DefineLiteralAction)`  `[`DefineLiteralTAction`](#DefineLiteralTAction)`  `[`DefineNumericAction`](#DefineNumericAction)`  `[`DefineNumericTAction`](#DefineNumericTAction)`  `[`DefineSystemAction`](#DefineSystemAction)`  `[`DefineTAction`](#DefineTAction)`  `[`DefineTActionSub`](#DefineTActionSub)`  `[`DefineTIAAction`](#DefineTIAAction)`  `[`DefineTIAActionSub`](#DefineTIAActionSub)`  `[`DefineTIAction`](#DefineTIAction)`  `[`DefineTIActionSub`](#DefineTIActionSub)`  `[`DefineTopicAction`](#DefineTopicAction)`  `[`DefineTopicTAction`](#DefineTopicTAction)`  `[`DefSignal`](#DefSignal)`  `[`DMsg`](#DMsg)`  `[`DMsg`](#DMsg)`  `[`dobjFor`](#dobjFor)`  `[`dobjList`](#dobjList)`  `[`exit`](#exit)`  `[`exitAction`](#exitAction)`  `[`exitCommandLine`](#exitCommandLine)`  `[`feelResponseMsg`](#feelResponseMsg)`  `[`gAcc`](#gAcc)`  `[`gAction`](#gAction)`  `[`gActionIn`](#gActionIn)`  `[`gActionIs`](#gActionIs)`  `[`gActionList`](#gActionList)`  `[`gActionListObj`](#gActionListObj)`  `[`gActionListStr`](#gActionListStr)`  `[`gActor`](#gActor)`  `[`gAobj`](#gAobj)`  `[`gCommand`](#gCommand)`  `[`gCommandToks`](#gCommandToks)`  `[`gDobj`](#gDobj)`  `[`gExitLister`](#gExitLister)`  `[`gExtraHintManager`](#gExtraHintManager)`  `[`gHintManager`](#gHintManager)`  `[`gInformed`](#gInformed)`  `[`gIobj`](#gIobj)`  `[`gLastAction`](#gLastAction)`  `[`gLastCommand`](#gLastCommand)`  `[`gLibMessages`](#gLibMessages)`  `[`gLiteral`](#gLiteral)`  `[`gLocation`](#gLocation)`  `[`gMessageParams`](#gMessageParams)`  `[`gNumber`](#gNumber)`  `[`goInstead`](#goInstead)`  `[`goNested`](#goNested)`  `[`gOutStream`](#gOutStream)`  `[`gPlayerChar`](#gPlayerChar)`  `[`gReveal`](#gReveal)`  `[`gRevealed`](#gRevealed)`  `[`gRoom`](#gRoom)`  `[`gSetKnown`](#gSetKnown)`  `[`gSetSeen`](#gSetSeen)`  `[`gTentativeDobj`](#gTentativeDobj)`  `[`gTentativeDobjIn`](#gTentativeDobjIn)`  `[`gTentativeIobj`](#gTentativeIobj)`  `[`gTentativeIobjIn`](#gTentativeIobjIn)`  `[`gTopic`](#gTopic)`  `[`gTopicMatch`](#gTopicMatch)`  `[`gTopicText`](#gTopicText)`  `[`gTravelActionIs`](#gTravelActionIs)`  `[`gTurns`](#gTurns)`  `[`gUnreveal`](#gUnreveal)`  `[`gVerbPhrase`](#gVerbPhrase)`  `[`gVerbWord`](#gVerbWord)`  `[`gVerifyDobj`](#gVerifyDobj)`  `[`gVerifyIobj`](#gVerifyIobj)`  `[`gVerifyList`](#gVerifyList)`  `[`hitResponseMsg`](#hitResponseMsg)`  `[`IfDebug`](#IfDebug)`  `[`IfDebug`](#IfDebug)`  `[`illogical`](#illogical)`  `[`illogicalAlready`](#illogicalAlready)`  `[`illogicalNow`](#illogicalNow)`  `[`illogicalSelf`](#illogicalSelf)`  `[`implausible`](#implausible)`  `[`inaccessible`](#inaccessible)`  `[`InitiateConversationReason`](#InitiateConversationReason)`  `[`input`](#input)`  `[`iobjFor`](#iobjFor)`  `[`iobjList`](#iobjList)`  `[`isEatable`](#isEatable)`  `[`isPotable`](#isPotable)`  `[`isTouchable`](#isTouchable)`  `[`literalAcc`](#literalAcc)`  `[`literalAobj`](#literalAobj)`  `[`literalDobj`](#literalDobj)`  `[`literalIobj`](#literalIobj)`  `[`logical`](#logical)`  `[`logicalRank`](#logicalRank)`  `[`M_DOWN`](#M_DOWN)`  `[`M_PREV`](#M_PREV)`  `[`M_QUIT`](#M_QUIT)`  `[`M_SEL`](#M_SEL)`  `[`M_UP`](#M_UP)`  `[`MatchAdj`](#MatchAdj)`  `[`MatchNoApprox`](#MatchNoApprox)`  `[`MatchNoTrunc`](#MatchNoTrunc)`  `[`MatchNoun`](#MatchNoun)`  `[`MatchPartMask`](#MatchPartMask)`  `[`MatchPhrase`](#MatchPhrase)`  `[`MatchPlural`](#MatchPlural)`  `[`MatchPrep`](#MatchPrep)`  `[`MatchStrengthMask`](#MatchStrengthMask)`  `[`MatchWeak`](#MatchWeak)`  `[`more`](#more)`  `[`Msg`](#Msg)`  `[`multiAcc`](#multiAcc)`  `[`multiAobj`](#multiAobj)`  `[`multiDobj`](#multiDobj)`  `[`multiIobj`](#multiIobj)`  `[`nextrule`](#nextrule)`  `[`nonObvious`](#nonObvious)`  `[`nostop`](#nostop)`  `[`numberDobj`](#numberDobj)`  `[`numericAcc`](#numericAcc)`  `[`numericAobj`](#numericAobj)`  `[`numericDobj`](#numericDobj)`  `[`numericIobj`](#numericIobj)`  `[`objFor`](#objFor)`  `[`reportAfter`](#reportAfter)`  `[`rnull`](#rnull)`  `[`SelArbitrary`](#SelArbitrary)`  `[`SelDefault`](#SelDefault)`  `[`SelDisambig`](#SelDisambig)`  `[`SelPlural`](#SelPlural)`  `[`SelProg`](#SelProg)`  `[`setPastTense`](#setPastTense)`  `[`singleAcc`](#singleAcc)`  `[`singleAobj`](#singleAobj)`  `[`singleDir`](#singleDir)`  `[`singleDobj`](#singleDobj)`  `[`singleIobj`](#singleIobj)`  `[`stop`](#stop)`  `[`STRINGIZE`](#STRINGIZE)`  `[`STRINGIZE`](#STRINGIZE)`  `[`topicAcc`](#topicAcc)`  `[`topicAobj`](#topicAobj)`  `[`topicDobj`](#topicDobj)`  `[`topicIobj`](#topicIobj)`  `[`touchDesc`](#touchDesc)`  `[`tSel`](#tSel)`  `[`VerbRule`](#VerbRule)`  `[`VideoLink`](#VideoLink)`  `[`waitKey`](#waitKey)`  `[`withPast`](#withPast)`  `[`withPresent`](#withPresent)`  `

<span id="_EnumSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Enums</span>  

</div>

` `[`ClosedGoal`](#ClosedGoal)`  `[`feminine`](#feminine)`  `[`FootnotesFull`](#FootnotesFull)`  `[`FootnotesMedium`](#FootnotesMedium)`  `[`FootnotesOff`](#FootnotesOff)`  `[`indirectLockable`](#indirectLockable)`  `[`large`](#large)`  `[`lockableWithKey`](#lockableWithKey)`  `[`lockableWithoutKey`](#lockableWithoutKey)`  `[`manyToMany`](#manyToMany)`  `[`manyToOne`](#manyToOne)`  `[`masculine`](#masculine)`  `[`medium`](#medium)`  `[`neuter`](#neuter)`  `[`normalRelation`](#normalRelation)`  `[`notLockable`](#notLockable)`  `[`null`](#null)`  `[`oneToMany`](#oneToMany)`  `[`oneToOne`](#oneToOne)`  `[`OpenGoal`](#OpenGoal)`  `[`OtherObject`](#OtherObject)`  `[`reverseRelation`](#reverseRelation)`  `[`rmcAskLiteral`](#rmcAskLiteral)`  `[`rmcAskObject`](#rmcAskObject)`  `[`rmcCommand`](#rmcCommand)`  `[`rmcDisambig`](#rmcDisambig)`  `[`rmcOops`](#rmcOops)`  `[`small`](#small)`  `[`UndiscoveredGoal`](#UndiscoveredGoal)`  `

<span id="_TemplateSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Templates</span>  

</div>

` `[`Achievement`](#Achievement)`  `[`ActorState`](#ActorState)`  `[`AltTopic`](#AltTopic)`  `[`AltTopic`](#AltTopic)`  `[`ClockEvent`](#ClockEvent)`  `[`DefaultConsultTopic`](#DefaultConsultTopic)`  `[`DefaultThought`](#DefaultThought)`  `[`DefaultTopic`](#DefaultTopic)`  `[`Doer`](#Doer)`  `[`Door`](#Door)`  `[`Door`](#Door)`  `[`Enterable`](#Enterable)`  `[`Enterable`](#Enterable)`  `[`EventList`](#EventList)`  `[`EventListItem`](#EventListItem)`  `[`ExtraHint`](#ExtraHint)`  `[`Footnote`](#Footnote)`  `[`Goal`](#Goal)`  `[`Hint`](#Hint)`  `[`MenuItem`](#MenuItem)`  `[`MenuLongTopicItem`](#MenuLongTopicItem)`  `[`MenuTopicItem`](#MenuTopicItem)`  `[`MiscTopic`](#MiscTopic)`  `[`MiscTopic`](#MiscTopic)`  `[`NodeContinuationTopic`](#NodeContinuationTopic)`  `[`NodeContinuationTopic`](#NodeContinuationTopic)`  `[`ProxyActor`](#ProxyActor)`  `[`QueryTopic`](#QueryTopic)`  `[`QueryTopic`](#QueryTopic)`  `[`QueryTopic`](#QueryTopic)`  `[`QueryTopic`](#QueryTopic)`  `[`QueryTopic`](#QueryTopic)`  `[`QueryTopic`](#QueryTopic)`  `[`Region`](#Region)`  `[`Relation`](#Relation)`  `[`Room`](#Room)`  `[`Room`](#Room)`  `[`Rule`](#Rule)`  `[`SensoryEmanation`](#SensoryEmanation)`  `[`ShuffledEventList`](#ShuffledEventList)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`string`](#string)`  `[`StyleTag`](#StyleTag)`  `[`SymConnector`](#SymConnector)`  `[`SymConnector`](#SymConnector)`  `[`SymPassage`](#SymPassage)`  `[`SymPassage`](#SymPassage)`  `[`SymPassage`](#SymPassage)`  `[`SymPassage`](#SymPassage)`  `[`Test`](#Test)`  `[`Test`](#Test)`  `[`Thing`](#Thing)`  `[`Topic`](#Topic)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicEntry`](#TopicEntry)`  `[`TopicGroup`](#TopicGroup)`  `[`TravelConnector`](#TravelConnector)`  `[`TravelConnector`](#TravelConnector)`  `[`Unthing`](#Unthing)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)* <span id="_Macros_"></span>

<div class="mjhd">

<span class="hdln">Macros</span>  

</div>

<span id="_STRINGIZE"></span>

`_STRINGIZE (x)`

[advlite.h](../file/advlite.h.html)\[[265](../source/advlite.h.html#265)\]

<div class="desc">

`#@x`  
A couple of utility macros we use internally for turning macro values
into strings. STRINGIZE(x) expands any macros in its argument and then
turns the result into a single-quoted string, which can then be used in
regular program text or in directives that evaluate constant
expressions, such as \#if. (STRINGIZE is the real macro; \_STRINGIZE is
needed to force expansion of any macros in the argument, which is
required because of the weird ANSI C expansion-order rules, and which
works because of same.)

</div>

<span id="_STRINGIZE"></span>

`_STRINGIZE (x)`

[advlite.h](../file/advlite.h.html)\[[970](../source/advlite.h.html#970)\]

<div class="desc">

`#@x`  
A couple of utility macros we use internally for turning macro values
into strings. STRINGIZE(x) expands any macros in its argument and then
turns the result into a single-quoted string, which can then be used in
regular program text or in directives that evaluate constant
expressions, such as \#if. (STRINGIZE is the real macro; \_STRINGIZE is
needed to force expansion of any macros in the argument, which is
required because of the weird ANSI C expansion-order rules, and which
works because of same.)

</div>

<span id="abort"></span>

`abort`

[advlite.h](../file/advlite.h.html)\[[706](../source/advlite.h.html#706)\]

<div class="desc">

`throw new AbortActionSignal()`  
a concise macro to throw an Abort signal

</div>

<span id="abortImplicit"></span>

`abortImplicit`

[advlite.h](../file/advlite.h.html)\[[703](../source/advlite.h.html#703)\]

<div class="desc">

`throw new AbortImplicitSignal()`  
a concise macro to throw an AbortImplicitSignal

</div>

<span id="accFor"></span>

`accFor (action)`

[advlite.h](../file/advlite.h.html)\[[640](../source/advlite.h.html#640)\]

<div class="desc">

`objFor(Aobj, action)`  
*no description available*

</div>

<span id="accList"></span>

`accList`

[advlite.h](../file/advlite.h.html)\[[74](../source/advlite.h.html#74)\]

<div class="desc">

`nounList->accMatch`  
*no description available*

</div>

<span id="ADV3LITE_H"></span>

`ADV3LITE_H`

[advlite.h](../file/advlite.h.html)\[[16](../source/advlite.h.html#16)\]

<div class="desc">

  
*no description available*

</div>

<span id="AHREF_Plain"></span>

`AHREF_Plain`

[advlite.h](../file/advlite.h.html)\[[714](../source/advlite.h.html#714)\]

<div class="desc">

`0x0001 /* plain text hyperlink (no underline/color) */`  
aHref() flags

</div>

<span id="aobjFor"></span>

`aobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[638](../source/advlite.h.html#638)\]

<div class="desc">

`objFor(Aobj, action)`  
*no description available*

</div>

<span id="aobjList"></span>

`aobjList`

[advlite.h](../file/advlite.h.html)\[[75](../source/advlite.h.html#75)\]

<div class="desc">

`nounList->accMatch`  
*no description available*

</div>

<span id="asAccFor"></span>

`asAccFor (action)`

[advlite.h](../file/advlite.h.html)\[[641](../source/advlite.h.html#641)\]

<div class="desc">

`asObjFor(Aobj, action)`  
*no description available*

</div>

<span id="asAobjFor"></span>

`asAobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[639](../source/advlite.h.html#639)\]

<div class="desc">

`asObjFor(Aobj, action)`  
*no description available*

</div>

<span id="asDobjFor"></span>

`asDobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[444](../source/advlite.h.html#444)\]

<div class="desc">

`asObjFor(Dobj, action)`  
*no description available*

</div>

<span id="asDobjWithoutActionFor"></span>

`asDobjWithoutActionFor (action)`

[advlite.h](../file/advlite.h.html)\[[464](../source/advlite.h.html#464)\]

<div class="desc">

`asObjWithoutActionFor(Dobj, action)`  
*no description available*

</div>

<span id="asDobjWithoutVerifyFor"></span>

`asDobjWithoutVerifyFor (action)`

[advlite.h](../file/advlite.h.html)\[[476](../source/advlite.h.html#476)\]

<div class="desc">

`asObjWithoutVerifyFor(Dobj, action)`  
*no description available*

</div>

<span id="asExit"></span>

`asExit (dir)`

[advlite.h](../file/advlite.h.html)\[[492](../source/advlite.h.html#492)\]

<div class="desc">

`: UnlistedProxyConnector { direction = dir##Dir }`  
*no description available*

</div>

<span id="asIobjFor"></span>

`asIobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[445](../source/advlite.h.html#445)\]

<div class="desc">

`asObjFor(Iobj, action)`  
*no description available*

</div>

<span id="asIobjWithoutActionFor"></span>

`asIobjWithoutActionFor (action)`

[advlite.h](../file/advlite.h.html)\[[465](../source/advlite.h.html#465)\]

<div class="desc">

`asObjWithoutActionFor(Iobj, action)`  
*no description available*

</div>

<span id="asIobjWithoutVerifyFor"></span>

`asIobjWithoutVerifyFor (action)`

[advlite.h](../file/advlite.h.html)\[[477](../source/advlite.h.html#477)\]

<div class="desc">

`asObjWithoutVerifyFor(Iobj, action)`  
*no description available*

</div>

<span id="askForAcc"></span>

`askForAcc (action)`

[advlite.h](../file/advlite.h.html)\[[482](../source/advlite.h.html#482)\]

<div class="desc">

`askMissingObject(action, AccessoryObject)`  
*no description available*

</div>

<span id="askForAobj"></span>

`askForAobj (action)`

[advlite.h](../file/advlite.h.html)\[[481](../source/advlite.h.html#481)\]

<div class="desc">

`askMissingObject(action, AccessoryObject)`  
*no description available*

</div>

<span id="askForDobj"></span>

`askForDobj (action)`

[advlite.h](../file/advlite.h.html)\[[479](../source/advlite.h.html#479)\]

<div class="desc">

`askMissingObject(action, DirectObject)`  
*no description available*

</div>

<span id="askForIobj"></span>

`askForIobj (action)`

[advlite.h](../file/advlite.h.html)\[[480](../source/advlite.h.html#480)\]

<div class="desc">

`askMissingObject(action, IndirectObject)`  
*no description available*

</div>

<span id="asObjFor"></span>

`asObjFor (obj, Action)`

[advlite.h](../file/advlite.h.html)\[[434](../source/advlite.h.html#434)\]

<div class="desc">

`{ \`  
`preCond { return preCond##obj##Action; } \`  
`verify() { verify##obj##Action; } \`  
`remap() { return remap##obj##Action; } \`  
`check() { check##obj##Action; } \`  
`action() { action##obj##Action; } \`  
`report() { report##obj##Action; } \`  
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
mechanisms that handle reversals cleanly. Always consider
Doer.doInstead() first when confronted with a situation that seems to
call for a role-reversing asObjFor() mapping, as doInstead()
specifically allows for object role changes.

</div>

<span id="asObjWithoutActionFor"></span>

`asObjWithoutActionFor (obj, Action)`

[advlite.h](../file/advlite.h.html)\[[455](../source/advlite.h.html#455)\]

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

<span id="asObjWithoutVerifyFor"></span>

`asObjWithoutVerifyFor (obj, Action)`

[advlite.h](../file/advlite.h.html)\[[467](../source/advlite.h.html#467)\]

<div class="desc">

`{ \`  
`preCond { return preCond##obj##Action; } \`  
`remap() { return remap##obj##Action(); } \`  
`check() { check##obj##Action; } \`  
`action() { action##obj##Action(); } \`  
`report() { report##obj##Action(); } \`  
`}`  
*no description available*

</div>

<span id="AudioLink"></span>

`AudioLink`

[advlite.h](../file/advlite.h.html)\[[1232](../source/advlite.h.html#1232)\]

<div class="desc">

`1`  
Communication Link Types

AudioLink means audio communication only is available VideoLink means
both audio and visual links are available.

</div>

<span id="BMsg"></span>

`BMsg (id, txt, args, ...)`

[advlite.h](../file/advlite.h.html)\[[1039](../source/advlite.h.html#1039)\]

<div class="desc">

`buildMessage(#@id, txt, ##args)`  
*no description available*

</div>

<span id="BMsg"></span>

`BMsg (id, txt, args, ...)`

[advlite.h](../file/advlite.h.html)\[[1042](../source/advlite.h.html#1042)\]

<div class="desc">

`buildMessage(#@id, nil, ##args)`  
*no description available*

</div>

<span id="cannotTouchMsg"></span>

`cannotTouchMsg`

[advlite.h](../file/advlite.h.html)\[[1266](../source/advlite.h.html#1266)\]

<div class="desc">

`cannotFeelMsg`  
*no description available*

</div>

<span id="checkHitMsg"></span>

`checkHitMsg`

[advlite.h](../file/advlite.h.html)\[[1268](../source/advlite.h.html#1268)\]

<div class="desc">

`checkAttackMsg`  
*no description available*

</div>

<span id="checkTouchMsg"></span>

`checkTouchMsg`

[advlite.h](../file/advlite.h.html)\[[1263](../source/advlite.h.html#1263)\]

<div class="desc">

`checkFeelMsg`  
Define some synonyms for potentially confusing property names

</div>

<span id="ConversationLullReason"></span>

`ConversationLullReason`

[advlite.h](../file/advlite.h.html)\[[848](../source/advlite.h.html#848)\]

<div class="desc">

`2`  
*no description available*

</div>

<span id="dangerous"></span>

`dangerous`

[advlite.h](../file/advlite.h.html)\[[687](../source/advlite.h.html#687)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(90, '', true, self, nil))`  
*no description available*

</div>

<span id="DefaultTopicReason"></span>

`DefaultTopicReason`

[advlite.h](../file/advlite.h.html)\[[849](../source/advlite.h.html#849)\]

<div class="desc">

`3`  
*no description available*

</div>

<span id="DefineAction"></span>

`DefineAction (name, baseClass, ...)`

[advlite.h](../file/advlite.h.html)\[[511](../source/advlite.h.html#511)\]

<div class="desc">

`name: ##baseClass \`  
`baseActionClass = name`  
Define an action OBJECT with the given name inheriting from the given
base class, for use with the Mercury parser.

</div>

<span id="DefineIAction"></span>

`DefineIAction (name)`

[advlite.h](../file/advlite.h.html)\[[527](../source/advlite.h.html#527)\]

<div class="desc">

`DefineAction(name, IAction)`  
Define a concrete IAction, given the root name for the action. We'll
automatically generate a class with name XxxAction.

</div>

<span id="DefineLiteralAction"></span>

`DefineLiteralAction (name)`

[advlite.h](../file/advlite.h.html)\[[554](../source/advlite.h.html#554)\]

<div class="desc">

`DefineAction(name, LiteralAction)`  
*no description available*

</div>

<span id="DefineLiteralTAction"></span>

`DefineLiteralTAction (name)`

[advlite.h](../file/advlite.h.html)\[[551](../source/advlite.h.html#551)\]

<div class="desc">

`DefineTActionSub(name, LiteralTAction)`  
*no description available*

</div>

<span id="DefineNumericAction"></span>

`DefineNumericAction (name)`

[advlite.h](../file/advlite.h.html)\[[566](../source/advlite.h.html#566)\]

<div class="desc">

`DefineAction(name, NumericAction)`  
*no description available*

</div>

<span id="DefineNumericTAction"></span>

`DefineNumericTAction (name)`

[advlite.h](../file/advlite.h.html)\[[563](../source/advlite.h.html#563)\]

<div class="desc">

`DefineTActionSub(name, NumericTAction)`  
*no description available*

</div>

<span id="DefineSystemAction"></span>

`DefineSystemAction (name)`

[advlite.h](../file/advlite.h.html)\[[520](../source/advlite.h.html#520)\]

<div class="desc">

`DefineAction(name, SystemAction)`  
Define a "system" action. System actions are meta-game commands, such as
SAVE and QUIT, that generally operate the user interface and are not
part of the game world.

</div>

<span id="DefineTAction"></span>

`DefineTAction (name)`

[advlite.h](../file/advlite.h.html)\[[536](../source/advlite.h.html#536)\]

<div class="desc">

`DefineTActionSub(name, TAction)`  
Define a concrete TAction, given the root name for the action. We'll
automatically generate a class with name XxxAction, a verProp with name
verXxx, a checkProp with name checkXxx, and an actionProp with name
actionDobjXxx.

</div>

<span id="DefineTActionSub"></span>

`DefineTActionSub (name, cls)`

[advlite.h](../file/advlite.h.html)\[[542](../source/advlite.h.html#542)\]

<div class="desc">

`DefineAction(name, cls) \`  
`verDobjProp = &verifyDobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`actionDobjProp = &actionDobj##name \`  
`reportDobjProp = &reportDobj##name \`  
  
Define a concrete TAction with a specific base class.

</div>

<span id="DefineTIAAction"></span>

`DefineTIAAction (name)`

[advlite.h](../file/advlite.h.html)\[[610](../source/advlite.h.html#610)\]

<div class="desc">

`DefineTIAActionSub(name, TIAAction)`  
The following macros relating to the TIAAction class are only relevant
when the TIAAction extension is used. The macros are nevertheless
included here for convenience when using the TIAAction extension.

Define a concrete TIAAction, given the root name for the action. We'll
automatically generate a class with name XxxAction, a verDobjProp with
name verDobjXxx, a verIobjProp with name verIobjxxx, a checkDobjProp
with name checkDobjXxx, a checkIobjProp with name checkIobjXxx, an
actionDobjProp with name actionDobjXxx, and an actionIobjProp with name
actionIobjXxx.

</div>

<span id="DefineTIAActionSub"></span>

`DefineTIAActionSub (name, cls)`

[advlite.h](../file/advlite.h.html)\[[616](../source/advlite.h.html#616)\]

<div class="desc">

`DefineAction(name, cls) \`  
`verDobjProp = &verifyDobj##name \`  
`verIobjProp = &verifyIobj##name \`  
`verAobjProp = &verifyAobj##name \`  
`remapDobjProp = &remapDobj##name \`  
`remapIobjProp = &remapIobj##name \`  
`remapAobjProp = &remapAobj##name \`  
`preCondDobjProp = &preCondDobj##name \`  
`preCondIobjProp = &preCondIobj##name \`  
`preCondAobjProp = &preCondAobj##name \`  
`checkDobjProp = &checkDobj##name \`  
`checkIobjProp = &checkIobj##name \`  
`checkAobjProp = &checkAobj##name \`  
`actionDobjProp = &actionDobj##name \`  
`actionIobjProp = &actionIobj##name \`  
`actionAobjProp = &actionAobj##name \`  
`reportDobjProp = &reportDobj##name \`  
`reportIobjProp = &reportIobj##name \`  
`reportAobjProp = &reportAobj##name \`  
  
Define a concrete TIAction with a specific base class.

</div>

<span id="DefineTIAction"></span>

`DefineTIAction (name)`

[advlite.h](../file/advlite.h.html)\[[578](../source/advlite.h.html#578)\]

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

[advlite.h](../file/advlite.h.html)\[[584](../source/advlite.h.html#584)\]

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
`actionIobjProp = &actionIobj##name \`  
`reportDobjProp = &reportDobj##name \`  
`reportIobjProp = &reportIobj##name \`  
  
Define a concrete TIAction with a specific base class.

</div>

<span id="DefineTopicAction"></span>

`DefineTopicAction (name)`

[advlite.h](../file/advlite.h.html)\[[560](../source/advlite.h.html#560)\]

<div class="desc">

`DefineAction(name, TopicAction)`  
*no description available*

</div>

<span id="DefineTopicTAction"></span>

`DefineTopicTAction (name)`

[advlite.h](../file/advlite.h.html)\[[557](../source/advlite.h.html#557)\]

<div class="desc">

`DefineTActionSub(name, TopicTAction)`  
*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (sig, nam)`

[advlite.h](../file/advlite.h.html)\[[1318](../source/advlite.h.html#1318)\]

<div class="desc">

`sig##Signal: Signal \`  
`name = #@nam\`  
`handleProp = &handle_##sig`  
Definitions for the Signals Extension

</div>

<span id="DMsg"></span>

`DMsg (id, txt, args, ...)`

[advlite.h](../file/advlite.h.html)\[[1038](../source/advlite.h.html#1038)\]

<div class="desc">

`message(#@id, txt, ##args)`  
DMsg() - default English library message cover macro.

Whenever the library displays a message, it uses the DMsg() macro. The
arguments are a message ID, and the default English message text to
display. The message ID is a string that identifies the message; this is
used to look for overriding customizations of the message. Refer to the
CustomMessages class for information on customizing the standard library
messages.

In our approach, the library defines the default English text of the
messages in-line, directly in the code. On the surface, this is contrary
to standard practices in most modern programming projects, which strive
to make translations easier by separating the message text from the
program code, gathering all of the text into a central message file that
can be replaced for each language. Despite appearances, we're
accomplishing the same thing - but in our system, we have the advantage
that we \*also\* define the default English message text in-line as part
of the code it applies to. This makes it easier to read the code by
keeping a message and its full context in one place; this way you don't
have to shuttle between the code and message file.

Here's how we accomplish the message separation required for
translations, and also for games that wish to customize the library
defaults. The DMsg() macro requires both the default English message
text \*and\* an ID key for the message. The message display function
receives both. The display function proceeds to look up the ID key in a
translation table; if it finds an entry, it uses the version of the
message in the translation table instead of the English default passed
in via DMsg(). A language module can provide a message table that
defines the language translations, and a game can provide a table that
further customizes the library messages to fit its narrative style.

There's one additional element. Translators and game authors need to be
able to see all of the messages in one place, so they can create their
tables. We would seem to lack that central list of English messages.
Fortunately, by using a standard macro for each message, we can extract
a comprehensive English message list automatically via a special tool.
We use this as part of the library release process to create the English
message file for reference.

Note that the macro expansion includes the default English text only in
English builds. It omits the text in non-English builds. This is to save
space - we assume that the English messages will all be overridden
anyway by each translated library version, so there's no point in
including their text in the final compiled program.

</div>

<span id="DMsg"></span>

`DMsg (id, txt, args, ...)`

[advlite.h](../file/advlite.h.html)\[[1041](../source/advlite.h.html#1041)\]

<div class="desc">

`message(#@id, nil, ##args)`  
*no description available*

</div>

<span id="dobjFor"></span>

`dobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[390](../source/advlite.h.html#390)\]

<div class="desc">

`objFor(Dobj, action)`  
*no description available*

</div>

<span id="dobjList"></span>

`dobjList`

[advlite.h](../file/advlite.h.html)\[[94](../source/advlite.h.html#94)\]

<div class="desc">

`nounList->dobjMatch`  
Also add a couple of synonyms familiar froma adv3

</div>

<span id="exit"></span>

`exit`

[advlite.h](../file/advlite.h.html)\[[697](../source/advlite.h.html#697)\]

<div class="desc">

`throw new ExitSignal()`  
a concise macro to throw an ExitSignal

</div>

<span id="exitAction"></span>

`exitAction`

[advlite.h](../file/advlite.h.html)\[[700](../source/advlite.h.html#700)\]

<div class="desc">

`throw new ExitActionSignal()`  
a concise macro to throw an ExitActionSignal

</div>

<span id="exitCommandLine"></span>

`exitCommandLine`

[advlite.h](../file/advlite.h.html)\[[863](../source/advlite.h.html#863)\]

<div class="desc">

`throw new ExitCommandLineSignal()`  
Terminate execution of the command line. This aborts the current
command, including any remaining object iterations for the current
action, and discards anything else on the command line.

</div>

<span id="feelResponseMsg"></span>

`feelResponseMsg`

[advlite.h](../file/advlite.h.html)\[[1264](../source/advlite.h.html#1264)\]

<div class="desc">

`touchResponseMsg`  
*no description available*

</div>

<span id="gAcc"></span>

`gAcc`

[advlite.h](../file/advlite.h.html)\[[643](../source/advlite.h.html#643)\]

<div class="desc">

`gAction.curAobj`  
*no description available*

</div>

<span id="gAction"></span>

`gAction`

[advlite.h](../file/advlite.h.html)\[[294](../source/advlite.h.html#294)\]

<div class="desc">

`(libGlobal.curAction)`  
the Action object of the command being executed

</div>

<span id="gActionIn"></span>

`gActionIn (action, ...)`

[advlite.h](../file/advlite.h.html)\[[333](../source/advlite.h.html#333)\]

<div class="desc">

`(gAction != nil \`  
`&& (action#foreach/gAction.ofKind(action)/||/))`  
is the current global action ANY of the specified actions?

</div>

<span id="gActionIs"></span>

`gActionIs (action)`

[advlite.h](../file/advlite.h.html)\[[329](../source/advlite.h.html#329)\]

<div class="desc">

`(gAction != nil && gAction.ofKind(action))`  
Determine if the current global action is the specified action. Only the
action prefix is needed - so use "Take" rather than "TakeAction" here.

This tests to see if the current global action is an instance of the
given action class - we test that it's an instance rather than the
action class itself because the parser creates an instance of the action
when it matches the action's syntax.

</div>

<span id="gActionList"></span>

`gActionList`

[advlite.h](../file/advlite.h.html)\[[342](../source/advlite.h.html#342)\]

<div class="desc">

`(nilToList(gCommand.action.actionList))`  
the list of objects involved in the action just completed

</div>

<span id="gActionListObj"></span>

`gActionListObj`

[advlite.h](../file/advlite.h.html)\[[353](../source/advlite.h.html#353)\]

<div class="desc">

`(object: Thing \`  
`{ \`  
`plural = (gAction.reportList.length > 1 || \`  
`gAction.reportList[1].plural); \`  
`isIt = (gAction.reportList.length == 1 ? \`  
`gAction.reportList[1].isIt : nil);\`  
`isHim = (gAction.reportList.length == 1 ? \`  
`gAction.reportList[1].isHim : nil);\`  
`isHer = (gAction.reportList.length == 1 ? \`  
`gAction.reportList[1].isHer : nil);\`  
`name = gActionListStr; \`  
`qualified = true; \`  
`} )`  
an object that is singular or plural according to whether gActionList
represents a single object of a plurality of objects, and which picks up
the correct gender if there is only a single object.

</div>

<span id="gActionListStr"></span>

`gActionListStr`

[advlite.h](../file/advlite.h.html)\[[345](../source/advlite.h.html#345)\]

<div class="desc">

`makeListStr(gCommand.action.reportList, &theName)`  
a displaying string version of the above

</div>

<span id="gActor"></span>

`gActor`

[advlite.h](../file/advlite.h.html)\[[279](../source/advlite.h.html#279)\]

<div class="desc">

`(libGlobal.curActor)`  
the actor performing the current command

</div>

<span id="gAobj"></span>

`gAobj`

[advlite.h](../file/advlite.h.html)\[[642](../source/advlite.h.html#642)\]

<div class="desc">

`gAction.curAobj`  
*no description available*

</div>

<span id="gCommand"></span>

`gCommand`

[advlite.h](../file/advlite.h.html)\[[295](../source/advlite.h.html#295)\]

<div class="desc">

`(libGlobal.curCommand)`  
*no description available*

</div>

<span id="gCommandToks"></span>

`gCommandToks`

[advlite.h](../file/advlite.h.html)\[[1165](../source/advlite.h.html#1165)\]

<div class="desc">

`(gCommand == nil || gCommand.verbProd == nil ? [] \`  
`: gCommand.verbProd.tokenList.mapAll({t: getTokVal(t)}))`  
Get the command tokens for the current command.

</div>

<span id="gDobj"></span>

`gDobj`

[advlite.h](../file/advlite.h.html)\[[287](../source/advlite.h.html#287)\]

<div class="desc">

`(gAction.curDobj)`  
For convenience, define some macros that return the current direct and
indirect objects from the current action. The library only uses direct
and indirect objects, so games that define additional command objects
will have to add their own similar macros for those.

</div>

<span id="gExitLister"></span>

`gExitLister`

[advlite.h](../file/advlite.h.html)\[[898](../source/advlite.h.html#898)\]

<div class="desc">

`(libGlobal.exitListerObj)`  
the exit lister object - if the exits module isn't included in the game,
this will be nil

</div>

<span id="gExtraHintManager"></span>

`gExtraHintManager`

[advlite.h](../file/advlite.h.html)\[[911](../source/advlite.h.html#911)\]

<div class="desc">

`(libGlobal.extraHintManagerObj)`  
the extra hint manager object - if the hints module isn't included in
the game, this will be nil

</div>

<span id="gHintManager"></span>

`gHintManager`

[advlite.h](../file/advlite.h.html)\[[904](../source/advlite.h.html#904)\]

<div class="desc">

`(libGlobal.hintManagerObj)`  
the hint manager object - if the hints module isn't included in the
game, this will be nil

</div>

<span id="gInformed"></span>

`gInformed (key)`

[advlite.h](../file/advlite.h.html)\[[1255](../source/advlite.h.html#1255)\]

<div class="desc">

`(getActor.informedAbout(key))`  
has a topic key been revealed to an NPC through \<.inform\>?

</div>

<span id="gIobj"></span>

`gIobj`

[advlite.h](../file/advlite.h.html)\[[288](../source/advlite.h.html#288)\]

<div class="desc">

`(gAction.curIobj)`  
*no description available*

</div>

<span id="gLastAction"></span>

`gLastAction`

[advlite.h](../file/advlite.h.html)\[[316](../source/advlite.h.html#316)\]

<div class="desc">

`(libGlobal.lastAction)`  
The previous action and command

</div>

<span id="gLastCommand"></span>

`gLastCommand`

[advlite.h](../file/advlite.h.html)\[[317](../source/advlite.h.html#317)\]

<div class="desc">

`(libGlobal.lastCommand)`  
*no description available*

</div>

<span id="gLibMessages"></span>

`gLibMessages`

[advlite.h](../file/advlite.h.html)\[[892](../source/advlite.h.html#892)\]

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

[advlite.h](../file/advlite.h.html)\[[289](../source/advlite.h.html#289)\]

<div class="desc">

`(gAction.literal)`  
*no description available*

</div>

<span id="gLocation"></span>

`gLocation`

[advlite.h](../file/advlite.h.html)\[[377](../source/advlite.h.html#377)\]

<div class="desc">

`(gPlayerChar.location)`  
get the player character's location

</div>

<span id="gMessageParams"></span>

`gMessageParams (var, ...)`

[advlite.h](../file/advlite.h.html)\[[1082](../source/advlite.h.html#1082)\]

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

<span id="gNumber"></span>

`gNumber`

[advlite.h](../file/advlite.h.html)\[[290](../source/advlite.h.html#290)\]

<div class="desc">

`(gAction.num)`  
*no description available*

</div>

<span id="goInstead"></span>

`goInstead (dirn)`

[advlite.h](../file/advlite.h.html)\[[486](../source/advlite.h.html#486)\]

<div class="desc">

`doInstead(Go, dirn##Dir)`  
Convenience macros for synthesizing travel in a given compass direction

</div>

<span id="goNested"></span>

`goNested (dirn)`

[advlite.h](../file/advlite.h.html)\[[487](../source/advlite.h.html#487)\]

<div class="desc">

`doNested(Go, dirn##Dir)`  
*no description available*

</div>

<span id="gOutStream"></span>

`gOutStream`

[advlite.h](../file/advlite.h.html)\[[1060](../source/advlite.h.html#1060)\]

<div class="desc">

`(outputManager.curOutputStream)`  
*no description available*

</div>

<span id="gPlayerChar"></span>

`gPlayerChar`

[advlite.h](../file/advlite.h.html)\[[374](../source/advlite.h.html#374)\]

<div class="desc">

`(libGlobal.playerChar)`  
get the current player character Actor object

</div>

<span id="gReveal"></span>

`gReveal (key)`

[advlite.h](../file/advlite.h.html)\[[1245](../source/advlite.h.html#1245)\]

<div class="desc">

`(libGlobal.setRevealed(key))`  
reveal a topic key, as though through \<.reveal\>

</div>

<span id="gRevealed"></span>

`gRevealed (key)`

[advlite.h](../file/advlite.h.html)\[[1242](../source/advlite.h.html#1242)\]

<div class="desc">

`(libGlobal.revealedNameTab[key] != nil)`  
has a topic key been revealed through \<.reveal\>?

</div>

<span id="gRoom"></span>

`gRoom`

[advlite.h](../file/advlite.h.html)\[[386](../source/advlite.h.html#386)\]

<div class="desc">

`(gPlayerChar.getOutermostRoom)`  
get the player character's current room (which may or may not be the
same as his/her location)

</div>

<span id="gSetKnown"></span>

`gSetKnown (obj)`

[advlite.h](../file/advlite.h.html)\[[1251](../source/advlite.h.html#1251)\]

<div class="desc">

`(gPlayerChar.setKnowsAbout(obj))`  
mark a Topic/Thing as known/seen by the player character

</div>

<span id="gSetSeen"></span>

`gSetSeen (obj)`

[advlite.h](../file/advlite.h.html)\[[1252](../source/advlite.h.html#1252)\]

<div class="desc">

`(gPlayerChar.setHasSeen(obj))`  
*no description available*

</div>

<span id="gTentativeDobj"></span>

`gTentativeDobj`

[advlite.h](../file/advlite.h.html)\[[297](../source/advlite.h.html#297)\]

<div class="desc">

`(gCommand.dobjs.mapAll({x: x.obj}).toList)`  
*no description available*

</div>

<span id="gTentativeDobjIn"></span>

`gTentativeDobjIn (lst)`

[advlite.h](../file/advlite.h.html)\[[312](../source/advlite.h.html#312)\]

<div class="desc">

`(gTentativeDobj.overlapsWith(lst))`  
An alternative way of dealing with the potential object not yet resolved
problem, by testing whether any of the objects in lst are in the
Tentative Object List.

</div>

<span id="gTentativeIobj"></span>

`gTentativeIobj`

[advlite.h](../file/advlite.h.html)\[[298](../source/advlite.h.html#298)\]

<div class="desc">

`(gCommand.iobjs.mapAll({x: x.obj}).toList)`  
*no description available*

</div>

<span id="gTentativeIobjIn"></span>

`gTentativeIobjIn (lst)`

[advlite.h](../file/advlite.h.html)\[[313](../source/advlite.h.html#313)\]

<div class="desc">

`(gTentativeIobj.overlapsWith(lst))`  
*no description available*

</div>

<span id="gTopic"></span>

`gTopic`

[advlite.h](../file/advlite.h.html)\[[392](../source/advlite.h.html#392)\]

<div class="desc">

`(gAction.curTopic)`  
*no description available*

</div>

<span id="gTopicMatch"></span>

`gTopicMatch`

[advlite.h](../file/advlite.h.html)\[[394](../source/advlite.h.html#394)\]

<div class="desc">

`(gTopic.getBestMatch)`  
*no description available*

</div>

<span id="gTopicText"></span>

`gTopicText`

[advlite.h](../file/advlite.h.html)\[[393](../source/advlite.h.html#393)\]

<div class="desc">

`(gTopic.getTopicText)`  
*no description available*

</div>

<span id="gTravelActionIs"></span>

`gTravelActionIs (dirn)`

[advlite.h](../file/advlite.h.html)\[[338](../source/advlite.h.html#338)\]

<div class="desc">

`(gAction != nil && gAction.ofKind(Travel) && gAction.direction == dirn ## Dir)`  
is the current action a Travel action going dirn

</div>

<span id="gTurns"></span>

`gTurns`

[advlite.h](../file/advlite.h.html)\[[380](../source/advlite.h.html#380)\]

<div class="desc">

`(libGlobal.totalTurns)`  
get the current turn count

</div>

<span id="gUnreveal"></span>

`gUnreveal (key)`

[advlite.h](../file/advlite.h.html)\[[1248](../source/advlite.h.html#1248)\]

<div class="desc">

`(libGlobal.setUnrevealed(key))`  
remove a topic key, as though through \<.unreveal\>

</div>

<span id="gVerbPhrase"></span>

`gVerbPhrase`

[advlite.h](../file/advlite.h.html)\[[1169](../source/advlite.h.html#1169)\]

<div class="desc">

`(gCommand.getCommandPhrase())`  
Get the command phrase for the current command.

</div>

<span id="gVerbWord"></span>

`gVerbWord`

[advlite.h](../file/advlite.h.html)\[[1161](../source/advlite.h.html#1161)\]

<div class="desc">

`(gCommand == nil || gCommand.verbProd == nil ? '' \`  
`: getTokVal(gCommand.verbProd.tokenList[1]))`  
Get the first word the player entered for the current command.

</div>

<span id="gVerifyDobj"></span>

`gVerifyDobj`

[advlite.h](../file/advlite.h.html)\[[305](../source/advlite.h.html#305)\]

<div class="desc">

`(gDobj ?? gTentativeDobj[1])`  
the probable Action objects of the command being executed for use in
verify routines when resolution of both objects may not be complete. If
the gDobj or gIobj is non-nil, use that, otherwise use the first object
in the tentative resolution list.

</div>

<span id="gVerifyIobj"></span>

`gVerifyIobj`

[advlite.h](../file/advlite.h.html)\[[306](../source/advlite.h.html#306)\]

<div class="desc">

`(gIobj ?? gTentativeIobj[1])`  
*no description available*

</div>

<span id="gVerifyList"></span>

`gVerifyList`

[advlite.h](../file/advlite.h.html)\[[651](../source/advlite.h.html#651)\]

<div class="desc">

`gAction.verifyList`  
Macros for use in verify routines, returning various kinds of verify
results

</div>

<span id="hitResponseMsg"></span>

`hitResponseMsg`

[advlite.h](../file/advlite.h.html)\[[1269](../source/advlite.h.html#1269)\]

<div class="desc">

`attackResponseMsg`  
*no description available*

</div>

<span id="IfDebug"></span>

`IfDebug (key, code)`

[advlite.h](../file/advlite.h.html)\[[1054](../source/advlite.h.html#1054)\]

<div class="desc">

`if (DebugCtl.enabled[#@key]) { code; } else { }`  
Debugging. When we compile in development mode, we'll include a number
of functions and methods that display information for debugging
purposes. We omit these in release builds to keep the compiled file size
smaller, and to avoid making it too easy for end users to snoop around
in the program internals.

</div>

<span id="IfDebug"></span>

`IfDebug (key, code)`

[advlite.h](../file/advlite.h.html)\[[1057](../source/advlite.h.html#1057)\]

<div class="desc">

  
*no description available*

</div>

<span id="illogical"></span>

`illogical (msg)`

[advlite.h](../file/advlite.h.html)\[[655](../source/advlite.h.html#655)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(30, msg, nil, self))`  
*no description available*

</div>

<span id="illogicalAlready"></span>

`illogicalAlready (msg)`

[advlite.h](../file/advlite.h.html)\[[669](../source/advlite.h.html#669)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(40, msg, nil, self))`  
IllogicalAlready doesn't do anything different from IllogicalNow in
adv3Lite, but is supplied so that game authors familiar with adv3 can
use it without getting a compilation error. It may also be slightly
useful for documentary purposes to clarify why a verify routine in game
code is ruling out an action.

</div>

<span id="illogicalNow"></span>

`illogicalNow (msg)`

[advlite.h](../file/advlite.h.html)\[[658](../source/advlite.h.html#658)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(40, msg, nil, self))`  
*no description available*

</div>

<span id="illogicalSelf"></span>

`illogicalSelf (msg)`

[advlite.h](../file/advlite.h.html)\[[672](../source/advlite.h.html#672)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(20, msg, nil, self))`  
*no description available*

</div>

<span id="implausible"></span>

`implausible (msg)`

[advlite.h](../file/advlite.h.html)\[[681](../source/advlite.h.html#681)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(35, msg, nil, self))`  
*no description available*

</div>

<span id="inaccessible"></span>

`inaccessible (msg)`

[advlite.h](../file/advlite.h.html)\[[678](../source/advlite.h.html#678)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(10, msg, nil, self))`  
*no description available*

</div>

<span id="InitiateConversationReason"></span>

`InitiateConversationReason`

[advlite.h](../file/advlite.h.html)\[[847](../source/advlite.h.html#847)\]

<div class="desc">

`1`  
Define convenient named constants for use with ConvAgendaItem

</div>

<span id="input"></span>

`input (x, ...)`

[advlite.h](../file/advlite.h.html)\[[1277](../source/advlite.h.html#1277)\]

<div class="desc">

`inputManager.getInputLine(x)`  
*no description available*

</div>

<span id="iobjFor"></span>

`iobjFor (action)`

[advlite.h](../file/advlite.h.html)\[[391](../source/advlite.h.html#391)\]

<div class="desc">

`objFor(Iobj, action)`  
*no description available*

</div>

<span id="iobjList"></span>

`iobjList`

[advlite.h](../file/advlite.h.html)\[[95](../source/advlite.h.html#95)\]

<div class="desc">

`nounList->iobjMatch`  
*no description available*

</div>

<span id="isEatable"></span>

`isEatable`

[advlite.h](../file/advlite.h.html)\[[1133](../source/advlite.h.html#1133)\]

<div class="desc">

`isEdible`  
The library uses isEdible rather than isEatable, since edible is the
more natural word to use, but strict consistency might have dictated
isEatable, so we make it an effective synonym in case some game authors
use it.

</div>

<span id="isPotable"></span>

`isPotable`

[advlite.h](../file/advlite.h.html)\[[1140](../source/advlite.h.html#1140)\]

<div class="desc">

`isDrinkable`  
Conversely, authors alive to the Latin root of edible might try the
latinate isPotable instead of isDrinable.

</div>

<span id="isTouchable"></span>

`isTouchable`

[advlite.h](../file/advlite.h.html)\[[1265](../source/advlite.h.html#1265)\]

<div class="desc">

`isFeelable`  
*no description available*

</div>

<span id="literalAcc"></span>

`literalAcc`

[advlite.h](../file/advlite.h.html)\[[85](../source/advlite.h.html#85)\]

<div class="desc">

`literalPhrase->accMatch`  
*no description available*

</div>

<span id="literalAobj"></span>

`literalAobj`

[advlite.h](../file/advlite.h.html)\[[86](../source/advlite.h.html#86)\]

<div class="desc">

`literalPhrase->accMatch`  
*no description available*

</div>

<span id="literalDobj"></span>

`literalDobj`

[advlite.h](../file/advlite.h.html)\[[83](../source/advlite.h.html#83)\]

<div class="desc">

`literalPhrase->dobjMatch`  
*no description available*

</div>

<span id="literalIobj"></span>

`literalIobj`

[advlite.h](../file/advlite.h.html)\[[84](../source/advlite.h.html#84)\]

<div class="desc">

`literalPhrase->iobjMatch`  
*no description available*

</div>

<span id="logical"></span>

`logical`

[advlite.h](../file/advlite.h.html)\[[653](../source/advlite.h.html#653)\]

<div class="desc">

`gAction.addVerifyResult (new VerifyResult(100, '', true, self))`  
*no description available*

</div>

<span id="logicalRank"></span>

`logicalRank (score)`

[advlite.h](../file/advlite.h.html)\[[675](../source/advlite.h.html#675)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(score, '', true, self))`  
*no description available*

</div>

<span id="M_DOWN"></span>

`M_DOWN`

[advlite.h](../file/advlite.h.html)\[[1097](../source/advlite.h.html#1097)\]

<div class="desc">

`4`  
*no description available*

</div>

<span id="M_PREV"></span>

`M_PREV`

[advlite.h](../file/advlite.h.html)\[[1095](../source/advlite.h.html#1095)\]

<div class="desc">

`2`  
*no description available*

</div>

<span id="M_QUIT"></span>

`M_QUIT`

[advlite.h](../file/advlite.h.html)\[[1094](../source/advlite.h.html#1094)\]

<div class="desc">

`1`  
The indices for the key values used to navigate menus, which are held in
the keyList array of MenuItems.

</div>

<span id="M_SEL"></span>

`M_SEL`

[advlite.h](../file/advlite.h.html)\[[1098](../source/advlite.h.html#1098)\]

<div class="desc">

`5`  
*no description available*

</div>

<span id="M_UP"></span>

`M_UP`

[advlite.h](../file/advlite.h.html)\[[1096](../source/advlite.h.html#1096)\]

<div class="desc">

`3`  
*no description available*

</div>

<span id="MatchAdj"></span>

`MatchAdj`

[advlite.h](../file/advlite.h.html)\[[134](../source/advlite.h.html#134)\]

<div class="desc">

`0x0002`  
matched an adjective (the phrase contains at least one adjective)

</div>

<span id="MatchNoApprox"></span>

`MatchNoApprox`

[advlite.h](../file/advlite.h.html)\[[153](../source/advlite.h.html#153)\]

<div class="desc">

`0x1000`  
all words were matched WITHOUT character approximations (such as
matching 'a' to 'a-umlaut')

</div>

<span id="MatchNoTrunc"></span>

`MatchNoTrunc`

[advlite.h](../file/advlite.h.html)\[[156](../source/advlite.h.html#156)\]

<div class="desc">

`0x2000`  
all words were matched WITHOUT truncation

</div>

<span id="MatchNoun"></span>

`MatchNoun`

[advlite.h](../file/advlite.h.html)\[[137](../source/advlite.h.html#137)\]

<div class="desc">

`0x0004`  
matched a noun (the phrase contains at least one noun word)

</div>

<span id="MatchPartMask"></span>

`MatchPartMask`

[advlite.h](../file/advlite.h.html)\[[146](../source/advlite.h.html#146)\]

<div class="desc">

`0x0FFF`  
mask to select only the part-of-speech flags

</div>

<span id="MatchPhrase"></span>

`MatchPhrase`

[advlite.h](../file/advlite.h.html)\[[143](../source/advlite.h.html#143)\]

<div class="desc">

`0x0010`  
matched a phrase

</div>

<span id="MatchPlural"></span>

`MatchPlural`

[advlite.h](../file/advlite.h.html)\[[140](../source/advlite.h.html#140)\]

<div class="desc">

`0x0008`  
matched a plural (the phrase contains at least one plural word)

</div>

<span id="MatchPrep"></span>

`MatchPrep`

[advlite.h](../file/advlite.h.html)\[[125](../source/advlite.h.html#125)\]

<div class="desc">

`0x0001`  
matched a preposition (the phrase contains at least one preposition)

</div>

<span id="MatchStrengthMask"></span>

`MatchStrengthMask`

[advlite.h](../file/advlite.h.html)\[[159](../source/advlite.h.html#159)\]

<div class="desc">

`0xF000`  
mask to select only the match-strength flags

</div>

<span id="MatchWeak"></span>

`MatchWeak`

[advlite.h](../file/advlite.h.html)\[[131](../source/advlite.h.html#131)\]

<div class="desc">

`0x0001`  
matched a weak token (which we'll treat as equivalent to matchimg a
preposition).

</div>

<span id="more"></span>

`more`

[advlite.h](../file/advlite.h.html)\[[1276](../source/advlite.h.html#1276)\]

<div class="desc">

`inputManager.pauseForMore()`  
Define some macros to give abbreviated synonyms to inputManager method

</div>

<span id="Msg"></span>

`Msg (id, txt)`

[advlite.h](../file/advlite.h.html)\[[985](../source/advlite.h.html#985)\]

<div class="desc">

`#@id, txt`  
Msg() - define a custom message to override a library message. 'id' is
the message ID, which is the same ID used for the DMsg() message that
you wish to override. Do NOT use quotes around the ID - just enter it as
though it were a variable name. 'txt' is the message text, as a
single-quoted string.

This is used in CustomMessages objects to define message overrides. See
CustomMessages for full details.

</div>

<span id="multiAcc"></span>

`multiAcc`

[advlite.h](../file/advlite.h.html)\[[76](../source/advlite.h.html#76)\]

<div class="desc">

`nounList->accMatch`  
*no description available*

</div>

<span id="multiAobj"></span>

`multiAobj`

[advlite.h](../file/advlite.h.html)\[[77](../source/advlite.h.html#77)\]

<div class="desc">

`nounList->accMatch`  
*no description available*

</div>

<span id="multiDobj"></span>

`multiDobj`

[advlite.h](../file/advlite.h.html)\[[72](../source/advlite.h.html#72)\]

<div class="desc">

`nounList->dobjMatch`  
*no description available*

</div>

<span id="multiIobj"></span>

`multiIobj`

[advlite.h](../file/advlite.h.html)\[[73](../source/advlite.h.html#73)\]

<div class="desc">

`nounList->iobjMatch`  
*no description available*

</div>

<span id="nextrule"></span>

`nextrule`

[advlite.h](../file/advlite.h.html)\[[1298](../source/advlite.h.html#1298)\]

<div class="desc">

`return (rulebook.contValue)`  
*no description available*

</div>

<span id="nonObvious"></span>

`nonObvious`

[advlite.h](../file/advlite.h.html)\[[684](../source/advlite.h.html#684)\]

<div class="desc">

`gAction.addVerifyResult(new VerifyResult(30, '', true, self, nil))`  
*no description available*

</div>

<span id="nostop"></span>

`nostop`

[advlite.h](../file/advlite.h.html)\[[1299](../source/advlite.h.html#1299)\]

<div class="desc">

`return (rulebook.contValue)`  
*no description available*

</div>

<span id="numberDobj"></span>

`numberDobj`

[advlite.h](../file/advlite.h.html)\[[78](../source/advlite.h.html#78)\]

<div class="desc">

`numberPhrase->dobjMatch`  
*no description available*

</div>

<span id="numericAcc"></span>

`numericAcc`

[advlite.h](../file/advlite.h.html)\[[90](../source/advlite.h.html#90)\]

<div class="desc">

`numberPhrase -> accMatch`  
*no description available*

</div>

<span id="numericAobj"></span>

`numericAobj`

[advlite.h](../file/advlite.h.html)\[[91](../source/advlite.h.html#91)\]

<div class="desc">

`numberPhrase -> accMatch`  
*no description available*

</div>

<span id="numericDobj"></span>

`numericDobj`

[advlite.h](../file/advlite.h.html)\[[88](../source/advlite.h.html#88)\]

<div class="desc">

`numberPhrase -> dobjMatch`  
*no description available*

</div>

<span id="numericIobj"></span>

`numericIobj`

[advlite.h](../file/advlite.h.html)\[[89](../source/advlite.h.html#89)\]

<div class="desc">

`numberPhrase -> iobjMatch`  
*no description available*

</div>

<span id="objFor"></span>

`objFor (which, action)`

[advlite.h](../file/advlite.h.html)\[[388](../source/advlite.h.html#388)\]

<div class="desc">

`propertyset '*' ## #@which ## #@action`  
*no description available*

</div>

<span id="reportAfter"></span>

`reportAfter (msg)`

[advlite.h](../file/advlite.h.html)\[[396](../source/advlite.h.html#396)\]

<div class="desc">

`gCommand.afterReports += msg`  
*no description available*

</div>

<span id="rnull"></span>

`rnull`

[advlite.h](../file/advlite.h.html)\[[1297](../source/advlite.h.html#1297)\]

<div class="desc">

`return null`  
Convenient abbreviations for rules that want to allow their RuleBook to
continue processing more rules.

</div>

<span id="SelArbitrary"></span>

`SelArbitrary`

[advlite.h](../file/advlite.h.html)\[[196](../source/advlite.h.html#196)\]

<div class="desc">

`0x0002`  
This object was chosen arbitrarily from a larger set, because the noun
phrase construction says we should do so. This flag is set when the noun
phrase is something TAKE A BOOK or TAKE ANY OF THE BOOKS.

</div>

<span id="SelDefault"></span>

`SelDefault`

[advlite.h](../file/advlite.h.html)\[[210](../source/advlite.h.html#210)\]

<div class="desc">

`0x0008`  
We selected an object as a default. This is set when the player leaves
out a noun phrase, but we can guess what was probably meant based on
context: e.g., ASK ABOUT THE HOUSE is probably directed to Bob if Bob is
the only person nearby.

</div>

<span id="SelDisambig"></span>

`SelDisambig`

[advlite.h](../file/advlite.h.html)\[[189](../source/advlite.h.html#189)\]

<div class="desc">

`0x0001`  
The noun phrase required disambiguation, because more than one object
was in scope that matched the noun phrase. We were able to figure out
which one(s) the player meant from context, without having to ask the
player for help.

For example, there are two doors in the room, one open and one closed.
The player types OPEN DOOR. It's fairly obvious that they must be
talking about the closed door. So, we choose that object and set the
Disambig flag.

(Note that this flag specifically does NOT mean that we had to ask the
user for help with the dreaded "Which do you mean..." question. It's
kind of the opposite: it means that we had a noun phrase that was
initially ambiguous, but that we managed to disambiguate it on our own.
When we get the user involved, there's ambiguity \*before\* we ask the
question, but the user's response removes the ambiguity by telling us
exactly which alternative they intended. This flag indicates that we
made an educated guess about what the user must have intended, without
asking. The flag lets the parser tell the player about the guess, which
is desirable because the guess is sometimes wrong.

</div>

<span id="SelPlural"></span>

`SelPlural`

[advlite.h](../file/advlite.h.html)\[[202](../source/advlite.h.html#202)\]

<div class="desc">

`0x0004`  
The noun phrase that we matched was a manifestly plural construction,
such as TAKE ALL or TAKE THE BOOKS.

</div>

<span id="SelProg"></span>

`SelProg`

[advlite.h](../file/advlite.h.html)\[[218](../source/advlite.h.html#218)\]

<div class="desc">

`0x1000`  
This object was set internally by the program; it did not come from
parsing any player input. This generally means that the whole command
was constructed by the program, to handle an event or other internal
processing, rather than by parsing player input.

</div>

<span id="setPastTense"></span>

`setPastTense (val)`

[advlite.h](../file/advlite.h.html)\[[923](../source/advlite.h.html#923)\]

<div class="desc">

`(gameMain.usePastTense = (val))`  
Set the current narrative tense. Use val = true for past and val = nil
for present.

</div>

<span id="singleAcc"></span>

`singleAcc`

[advlite.h](../file/advlite.h.html)\[[70](../source/advlite.h.html#70)\]

<div class="desc">

`singleNoun->accMatch`  
*no description available*

</div>

<span id="singleAobj"></span>

`singleAobj`

[advlite.h](../file/advlite.h.html)\[[71](../source/advlite.h.html#71)\]

<div class="desc">

`singleNoun->accMatch`  
*no description available*

</div>

<span id="singleDir"></span>

`singleDir`

[advlite.h](../file/advlite.h.html)\[[87](../source/advlite.h.html#87)\]

<div class="desc">

`directionName->dirMatch`  
*no description available*

</div>

<span id="singleDobj"></span>

`singleDobj`

[advlite.h](../file/advlite.h.html)\[[68](../source/advlite.h.html#68)\]

<div class="desc">

`singleNoun->dobjMatch`  
Verb rule noun phrase macros. These are convenience macros for
specifying the most common noun phrase slots in the grammar templates
for verb rules.

</div>

<span id="singleIobj"></span>

`singleIobj`

[advlite.h](../file/advlite.h.html)\[[69](../source/advlite.h.html#69)\]

<div class="desc">

`singleNoun->iobjMatch`  
*no description available*

</div>

<span id="stop"></span>

`stop`

[advlite.h](../file/advlite.h.html)\[[1285](../source/advlite.h.html#1285)\]

<div class="desc">

`return stopValue;`  
Definitions for the rules.t extension

</div>

<span id="STRINGIZE"></span>

`STRINGIZE (x)`

[advlite.h](../file/advlite.h.html)\[[266](../source/advlite.h.html#266)\]

<div class="desc">

`_STRINGIZE(x)`  
*no description available*

</div>

<span id="STRINGIZE"></span>

`STRINGIZE (x)`

[advlite.h](../file/advlite.h.html)\[[971](../source/advlite.h.html#971)\]

<div class="desc">

`_STRINGIZE(x)`  
*no description available*

</div>

<span id="topicAcc"></span>

`topicAcc`

[advlite.h](../file/advlite.h.html)\[[81](../source/advlite.h.html#81)\]

<div class="desc">

`topicPhrase->accMatch`  
*no description available*

</div>

<span id="topicAobj"></span>

`topicAobj`

[advlite.h](../file/advlite.h.html)\[[82](../source/advlite.h.html#82)\]

<div class="desc">

`topicPhrase->accMatch`  
*no description available*

</div>

<span id="topicDobj"></span>

`topicDobj`

[advlite.h](../file/advlite.h.html)\[[79](../source/advlite.h.html#79)\]

<div class="desc">

`topicPhrase->dobjMatch`  
*no description available*

</div>

<span id="topicIobj"></span>

`topicIobj`

[advlite.h](../file/advlite.h.html)\[[80](../source/advlite.h.html#80)\]

<div class="desc">

`topicPhrase->iobjMatch`  
*no description available*

</div>

<span id="touchDesc"></span>

`touchDesc`

[advlite.h](../file/advlite.h.html)\[[1267](../source/advlite.h.html#1267)\]

<div class="desc">

`feelDesc`  
*no description available*

</div>

<span id="tSel"></span>

`tSel (presVal, pastVal)`

[advlite.h](../file/advlite.h.html)\[[929](../source/advlite.h.html#929)\]

<div class="desc">

`(gameMain.usePastTense ? (pastVal) : (presVal))`  
Shorthand macro for selecting one of two values depending on the current
narrative tense.

</div>

<span id="VerbRule"></span>

`VerbRule (tag)`

[advlite.h](../file/advlite.h.html)\[[61](../source/advlite.h.html#61)\]

<div class="desc">

`grammar predicate(tag):`  
The VerbRule macro starts the definition of a verb grammar rule. The tag
is just an identifying name for the rule, so that you can refer to it
with 'replace' or 'modify'.

</div>

<span id="VideoLink"></span>

`VideoLink`

[advlite.h](../file/advlite.h.html)\[[1233](../source/advlite.h.html#1233)\]

<div class="desc">

`2`  
*no description available*

</div>

<span id="waitKey"></span>

`waitKey (x, ...)`

[advlite.h](../file/advlite.h.html)\[[1278](../source/advlite.h.html#1278)\]

<div class="desc">

`inputManager.getKey(x)`  
*no description available*

</div>

<span id="withPast"></span>

`withPast (callback)`

[advlite.h](../file/advlite.h.html)\[[937](../source/advlite.h.html#937)\]

<div class="desc">

`(withTense(true, (callback)))`  
*no description available*

</div>

<span id="withPresent"></span>

`withPresent (callback)`

[advlite.h](../file/advlite.h.html)\[[936](../source/advlite.h.html#936)\]

<div class="desc">

`(withTense(nil, (callback)))`  
Temporarily override the current narrative tense and invoke a callback
function.

</div>

<span id="_Enums_"></span>

<div class="mjhd">

<span class="hdln">Enums</span>  

</div>

<span id="ClosedGoal"></span> <span id="OpenGoal"></span>
<span id="UndiscoveredGoal"></span>

`ClosedGoal   OpenGoal   UndiscoveredGoal   `

[`advlite.h`](../file/advlite.h.html)`[`[`1202`](../source/advlite.h.html#1202)`]`

<div class="desc">

Enums for Goals in the Hint system

</div>

<span id="feminine"></span> <span id="masculine"></span>
<span id="neuter"></span>

`feminine   masculine   neuter   `

[`advlite.h`](../file/advlite.h.html)`[`[`871`](../source/advlite.h.html#871)`]`

<div class="desc">

*no description available*

</div>

<span id="FootnotesFull"></span> <span id="FootnotesMedium"></span>
<span id="FootnotesOff"></span>

`FootnotesFull   FootnotesMedium   FootnotesOff   `

[`advlite.h`](../file/advlite.h.html)`[`[`1205`](../source/advlite.h.html#1205)`]`

<div class="desc">

Enums for Footnotes

</div>

<span id="indirectLockable"></span> <span id="lockableWithKey"></span>
<span id="lockableWithoutKey"></span> <span id="notLockable"></span>

`indirectLockable   lockableWithKey   lockableWithoutKey   notLockable   `

[`advlite.h`](../file/advlite.h.html)`[`[`869`](../source/advlite.h.html#869)`]`

<div class="desc">

enums for different types of lock:

</div>

<span id="large"></span>

`large   `

[`advlite.h`](../file/advlite.h.html)`[`[`1186`](../source/advlite.h.html#1186)`]`

<div class="desc">

Large - the object is large enough that its details can be sensed from a
distance or through an obscuring medium.

</div>

<span id="manyToMany"></span> <span id="manyToOne"></span>
<span id="oneToMany"></span> <span id="oneToOne"></span>

`manyToMany   manyToOne   oneToMany   oneToOne   `

[`advlite.h`](../file/advlite.h.html)`[`[`1308`](../source/advlite.h.html#1308)`]`

<div class="desc">

Definitions for the relations.t extension

</div>

<span id="medium"></span>

`medium   `

[`advlite.h`](../file/advlite.h.html)`[`[`1193`](../source/advlite.h.html#1193)`]`

<div class="desc">

Medium - the object can be sensed at a distance or when obscured, but
not in any detail. Most objects fall into this category. Note that
things that are parts of large objects should normally be medium.

</div>

<span id="normalRelation"></span> <span id="reverseRelation"></span>

`normalRelation   reverseRelation   `

[`advlite.h`](../file/advlite.h.html)`[`[`1311`](../source/advlite.h.html#1311)`]`

<div class="desc">

*no description available*

</div>

<span id="null"></span>

`null   `

[`advlite.h`](../file/advlite.h.html)`[`[`1291`](../source/advlite.h.html#1291)`]`

<div class="desc">

Null value to return from Rules that don't stop a RuleBook from
continuing to consider rules.

</div>

<span id="OtherObject"></span>

`OtherObject   `

[`advlite.h`](../file/advlite.h.html)`[`[`956`](../source/advlite.h.html#956)`]`

<div class="desc">

A special role for the "other" object of a two-object command. This can
be used in certain contexts (such as remapTo) where a particular object
role is implied by the context, and where the action involved has
exactly two objects; OtherObject in such contexts means DirectObject
when the implied role is IndirectObject, and vice versa.

</div>

<span id="rmcAskLiteral"></span>

`rmcAskLiteral   `

[`advlite.h`](../file/advlite.h.html)`[`[`248`](../source/advlite.h.html#248)`]`

<div class="desc">

reading a response to a prompt for a missing literal phrase

</div>

<span id="rmcAskObject"></span>

`rmcAskObject   `

[`advlite.h`](../file/advlite.h.html)`[`[`245`](../source/advlite.h.html#245)`]`

<div class="desc">

reading a response to a prompt for a missing object phrase

</div>

<span id="rmcCommand"></span>

`rmcCommand   `

[`advlite.h`](../file/advlite.h.html)`[`[`239`](../source/advlite.h.html#239)`]`

<div class="desc">

reading a normal command line

</div>

<span id="rmcDisambig"></span>

`rmcDisambig   `

[`advlite.h`](../file/advlite.h.html)`[`[`251`](../source/advlite.h.html#251)`]`

<div class="desc">

reading a response to an interactive disambiguation prompt

</div>

<span id="rmcOops"></span>

`rmcOops   `

[`advlite.h`](../file/advlite.h.html)`[`[`242`](../source/advlite.h.html#242)`]`

<div class="desc">

reading an unknown word response, to check for an "oops" command

</div>

<span id="small"></span>

`small   `

[`advlite.h`](../file/advlite.h.html)`[`[`1199`](../source/advlite.h.html#1199)`]`

<div class="desc">

Small - the object cannot be sensed at a distance at all. This is
appropriate for detailed parts of medium-class objects.

</div>

<span id="_Templates_"></span>

<div class="mjhd">

<span class="hdln">Templates</span>  

</div>

<span id="Achievement"></span>

`Achievement`

[advlite.h](../file/advlite.h.html)\[[723](../source/advlite.h.html#723)\]

<div class="desc">

`+points? "desc";`  
An achievement defines its descriptive text. It can also optionally
define the number of points it awards.

</div>

<span id="ActorState"></span>

`ActorState`

[advlite.h](../file/advlite.h.html)\[[759](../source/advlite.h.html#759)\]

<div class="desc">

`"specialDesc" 'stateDesc' | "stateDesc" ?;`  
*no description available*

</div>

<span id="AltTopic"></span>

`AltTopic`

[advlite.h](../file/advlite.h.html)\[[834](../source/advlite.h.html#834)\]

<div class="desc">

`"topicResponse" | [eventList];`  
AltTopics just specify the response text or list

</div>

<span id="AltTopic"></span>

`AltTopic`

[advlite.h](../file/advlite.h.html)\[[835](../source/advlite.h.html#835)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="ClockEvent"></span>

`ClockEvent`

[advlite.h](../file/advlite.h.html)\[[1211](../source/advlite.h.html#1211)\]

<div class="desc">

`[eventTime];`  
Template for ClockEvent

</div>

<span id="DefaultConsultTopic"></span>

`DefaultConsultTopic`

[advlite.h](../file/advlite.h.html)\[[824](../source/advlite.h.html#824)\]

<div class="desc">

`"topicResponse" | [eventList];`  
*no description available*

</div>

<span id="DefaultThought"></span>

`DefaultThought`

[advlite.h](../file/advlite.h.html)\[[825](../source/advlite.h.html#825)\]

<div class="desc">

`"topicResponse" | [eventList];`  
*no description available*

</div>

<span id="DefaultTopic"></span>

`DefaultTopic`

[advlite.h](../file/advlite.h.html)\[[823](../source/advlite.h.html#823)\]

<div class="desc">

`"topicResponse" | [eventList];`  
*no description available*

</div>

<span id="Doer"></span>

`Doer`

[advlite.h](../file/advlite.h.html)\[[840](../source/advlite.h.html#840)\]

<div class="desc">

`'cmd';`  
*no description available*

</div>

<span id="Door"></span>

`Door`

[advlite.h](../file/advlite.h.html)\[[746](../source/advlite.h.html#746)\]

<div class="desc">

`'vocab' @location? "desc"? ->otherSide;`  
*no description available*

</div>

<span id="Door"></span>

`Door`

[advlite.h](../file/advlite.h.html)\[[747](../source/advlite.h.html#747)\]

<div class="desc">

`->otherSide 'vocab' @location? "desc"?;`  
*no description available*

</div>

<span id="Enterable"></span>

`Enterable`

[advlite.h](../file/advlite.h.html)\[[752](../source/advlite.h.html#752)\]

<div class="desc">

`inherited ->connector;`  
*no description available*

</div>

<span id="Enterable"></span>

`Enterable`

[advlite.h](../file/advlite.h.html)\[[753](../source/advlite.h.html#753)\]

<div class="desc">

`->connector inherited;`  
*no description available*

</div>

<span id="EventList"></span>

`EventList`

[advlite.h](../file/advlite.h.html)\[[1119](../source/advlite.h.html#1119)\]

<div class="desc">

`[eventList];`  
templates for EventLists

</div>

<span id="EventListItem"></span>

`EventListItem`

[advlite.h](../file/advlite.h.html)\[[1340](../source/advlite.h.html#1340)\]

<div class="desc">

`@myListObj? ~isReady? +minInterval? *maxFireCt? "invokeItem"? ;`  
Definitions for the eventListItem Extension

</div>

<span id="ExtraHint"></span>

`ExtraHint`

[advlite.h](../file/advlite.h.html)\[[1114](../source/advlite.h.html#1114)\]

<div class="desc">

`+hintDelay? "hintText" | [eventList];`  
A Template to facilitate the definition of ExtraHints. We can define it
here and not in a header file since ExtraHints are only defined in this

</div>

<span id="Footnote"></span>

`Footnote`

[advlite.h](../file/advlite.h.html)\[[1208](../source/advlite.h.html#1208)\]

<div class="desc">

`"desc";`  
Template for Footnotes

</div>

<span id="Goal"></span>

`Goal`

[advlite.h](../file/advlite.h.html)\[[1106](../source/advlite.h.html#1106)\]

<div class="desc">

`->closeWhenAchieved? 'title' 'heading'? [menuContents];`  
templates for hint system objects

</div>

<span id="Hint"></span>

`Hint`

[advlite.h](../file/advlite.h.html)\[[1107](../source/advlite.h.html#1107)\]

<div class="desc">

`'hintText' [referencedGoals]?;`  
*no description available*

</div>

<span id="MenuItem"></span>

`MenuItem`

[advlite.h](../file/advlite.h.html)\[[1101](../source/advlite.h.html#1101)\]

<div class="desc">

`'title' 'heading'?;`  
some templates for defining menu items

</div>

<span id="MenuLongTopicItem"></span>

`MenuLongTopicItem`

[advlite.h](../file/advlite.h.html)\[[1103](../source/advlite.h.html#1103)\]

<div class="desc">

`'title' 'heading'? 'menuContents';`  
*no description available*

</div>

<span id="MenuTopicItem"></span>

`MenuTopicItem`

[advlite.h](../file/advlite.h.html)\[[1102](../source/advlite.h.html#1102)\]

<div class="desc">

`'title' 'heading'? [menuContents];`  
*no description available*

</div>

<span id="MiscTopic"></span>

`MiscTopic`

[advlite.h](../file/advlite.h.html)\[[828](../source/advlite.h.html#828)\]

<div class="desc">

`"topicResponse" | [eventList];`  
miscellanous topics just specify the response text or list

</div>

<span id="MiscTopic"></span>

`MiscTopic`

[advlite.h](../file/advlite.h.html)\[[829](../source/advlite.h.html#829)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="NodeContinuationTopic"></span>

`NodeContinuationTopic`

[advlite.h](../file/advlite.h.html)\[[830](../source/advlite.h.html#830)\]

<div class="desc">

`"topicResponse" | [eventList];`  
*no description available*

</div>

<span id="NodeContinuationTopic"></span>

`NodeContinuationTopic`

[advlite.h](../file/advlite.h.html)\[[831](../source/advlite.h.html#831)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="ProxyActor"></span>

`ProxyActor`

[advlite.h](../file/advlite.h.html)\[[838](../source/advlite.h.html#838)\]

<div class="desc">

`@location;`  
The ProxyActor template just specifies the location (i.e. the base
Actor)

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[789](../source/advlite.h.html#789)\]

<div class="desc">

` +matchScore? 'matchPattern' "topicResponse" | [eventList] ?;`  
*no description available*

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[793](../source/advlite.h.html#793)\]

<div class="desc">

` +matchScore? 'matchPattern' [firstEvents] [eventList];`  
*no description available*

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[797](../source/advlite.h.html#797)\]

<div class="desc">

` +matchScore? 'qtype' @matchObj | [matchObj] | 'matchPattern' "topicResponse" | [eventList] ?;`  
*no description available*

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[803](../source/advlite.h.html#803)\]

<div class="desc">

` +matchScore? 'qtype' @matchObj | [matchObj] | 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[809](../source/advlite.h.html#809)\]

<div class="desc">

` +matchScore? 'qtype' @matchObj | [matchObj] 'matchPattern' "topicResponse" | [eventList] ?;`  
we can also include \*both\* the match object/list \*and\* pattern

</div>

<span id="QueryTopic"></span>

`QueryTopic`

[advlite.h](../file/advlite.h.html)\[[816](../source/advlite.h.html#816)\]

<div class="desc">

` +matchScore? 'qtype' @matchObj | [matchObj] 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="Region"></span>

`Region`

[advlite.h](../file/advlite.h.html)\[[744](../source/advlite.h.html#744)\]

<div class="desc">

`[rooms];`  
*no description available*

</div>

<span id="Relation"></span>

`Relation`

[advlite.h](../file/advlite.h.html)\[[1309](../source/advlite.h.html#1309)\]

<div class="desc">

`'name' 'reverseName'? @relationType? +reciprocal?;`  
*no description available*

</div>

<span id="Room"></span>

`Room`

[advlite.h](../file/advlite.h.html)\[[741](../source/advlite.h.html#741)\]

<div class="desc">

`'roomTitle' 'vocab' "desc"?;`  
*no description available*

</div>

<span id="Room"></span>

`Room`

[advlite.h](../file/advlite.h.html)\[[742](../source/advlite.h.html#742)\]

<div class="desc">

`'roomTitle' "desc"?;`  
*no description available*

</div>

<span id="Rule"></span>

`Rule`

[advlite.h](../file/advlite.h.html)\[[1301](../source/advlite.h.html#1301)\]

<div class="desc">

`@location? &action | [action]?;`  
*no description available*

</div>

<span id="SensoryEmanation"></span>

`SensoryEmanation`

[advlite.h](../file/advlite.h.html)\[[757](../source/advlite.h.html#757)\]

<div class="desc">

`inherited [eventList]?;`  
*no description available*

</div>

<span id="ShuffledEventList"></span>

`ShuffledEventList`

[advlite.h](../file/advlite.h.html)\[[1120](../source/advlite.h.html#1120)\]

<div class="desc">

`[firstEvents] [eventList];`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1147](../source/advlite.h.html#1147)\]

<div class="desc">

`<> mentionA;`  
String templates for room descriptions etc.

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1148](../source/advlite.h.html#1148)\]

<div class="desc">

`<> mentionA;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1149](../source/advlite.h.html#1149)\]

<div class="desc">

`<> mentionThe;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1150](../source/advlite.h.html#1150)\]

<div class="desc">

`<< list of * is >> listStrIs;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1151](../source/advlite.h.html#1151)\]

<div class="desc">

`<< list of * >> makeListInStr;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1152](../source/advlite.h.html#1152)\]

<div class="desc">

`<< is list of * >> isListStr;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1153](../source/advlite.h.html#1153)\]

<div class="desc">

`<< exclude * >> makeMentioned;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1214](../source/advlite.h.html#1214)\]

<div class="desc">

`<> takeTime;`  
String Templates for Objective Time module

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1215](../source/advlite.h.html#1215)\]

<div class="desc">

`<> takeTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1216](../source/advlite.h.html#1216)\]

<div class="desc">

`<> takeTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1217](../source/advlite.h.html#1217)\]

<div class="desc">

`<> takeTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1219](../source/advlite.h.html#1219)\]

<div class="desc">

`<> addTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1220](../source/advlite.h.html#1220)\]

<div class="desc">

`<> addTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1221](../source/advlite.h.html#1221)\]

<div class="desc">

`<> addTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1222](../source/advlite.h.html#1222)\]

<div class="desc">

`<> addTime;`  
*no description available*

</div>

<span id="string"></span>

`string`

[advlite.h](../file/advlite.h.html)\[[1334](../source/advlite.h.html#1334)\]

<div class="desc">

`<<* by room>> byRoomFunc;`  
*no description available*

</div>

<span id="StyleTag"></span>

`StyleTag`

[advlite.h](../file/advlite.h.html)\[[731](../source/advlite.h.html#731)\]

<div class="desc">

`'tagName' 'openText'? 'closeText'?;`  
Templates for style tags

</div>

<span id="SymConnector"></span>

`SymConnector`

[advlite.h](../file/advlite.h.html)\[[1326](../source/advlite.h.html#1326)\]

<div class="desc">

`->destination;`  
Definitions for the SymConn Extension

</div>

<span id="SymConnector"></span>

`SymConnector`

[advlite.h](../file/advlite.h.html)\[[1327](../source/advlite.h.html#1327)\]

<div class="desc">

`@room1 @room2;`  
*no description available*

</div>

<span id="SymPassage"></span>

`SymPassage`

[advlite.h](../file/advlite.h.html)\[[1329](../source/advlite.h.html#1329)\]

<div class="desc">

`->destination 'vocab' "desc"?;`  
*no description available*

</div>

<span id="SymPassage"></span>

`SymPassage`

[advlite.h](../file/advlite.h.html)\[[1330](../source/advlite.h.html#1330)\]

<div class="desc">

`'vocab' ->destination "desc"?;`  
*no description available*

</div>

<span id="SymPassage"></span>

`SymPassage`

[advlite.h](../file/advlite.h.html)\[[1331](../source/advlite.h.html#1331)\]

<div class="desc">

`'vocab' @room1 @room2 "desc"?;`  
*no description available*

</div>

<span id="SymPassage"></span>

`SymPassage`

[advlite.h](../file/advlite.h.html)\[[1332](../source/advlite.h.html#1332)\]

<div class="desc">

`'vocab' [rooms] "desc"?;`  
*no description available*

</div>

<span id="Test"></span>

`Test`

[advlite.h](../file/advlite.h.html)\[[843](../source/advlite.h.html#843)\]

<div class="desc">

`'testName' [testList] @location? [testHolding]?;`  
Templates for use with test sequences

</div>

<span id="Test"></span>

`Test`

[advlite.h](../file/advlite.h.html)\[[844](../source/advlite.h.html#844)\]

<div class="desc">

`'testName' [testList] [testHolding]? @location?;`  
*no description available*

</div>

<span id="Thing"></span>

`Thing`

[advlite.h](../file/advlite.h.html)\[[738](../source/advlite.h.html#738)\]

<div class="desc">

`'vocab' @location? "desc"?;`  
Object definition templates

</div>

<span id="Topic"></span>

`Topic`

[advlite.h](../file/advlite.h.html)\[[739](../source/advlite.h.html#739)\]

<div class="desc">

`'vocab' @familiar?;`  
*no description available*

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[advlite.h](../file/advlite.h.html)\[[764](../source/advlite.h.html#764)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] | 'matchPattern' "topicResponse" | [eventList] ?;`  
*no description available*

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[advlite.h](../file/advlite.h.html)\[[770](../source/advlite.h.html#770)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] | 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[advlite.h](../file/advlite.h.html)\[[776](../source/advlite.h.html#776)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] 'matchPattern' "topicResponse" | [eventList] ?;`  
we can also include \*both\* the match object/list \*and\* pattern

</div>

<span id="TopicEntry"></span>

`TopicEntry`

[advlite.h](../file/advlite.h.html)\[[783](../source/advlite.h.html#783)\]

<div class="desc">

` +matchScore? @matchObj | [matchObj] 'matchPattern' [firstEvents] [eventList];`  
a ShuffledEventList version of the above

</div>

<span id="TopicGroup"></span>

`TopicGroup`

[advlite.h](../file/advlite.h.html)\[[761](../source/advlite.h.html#761)\]

<div class="desc">

`+scoreBoost? 'convKeys' | [convKeys] ? ;`  
*no description available*

</div>

<span id="TravelConnector"></span>

`TravelConnector`

[advlite.h](../file/advlite.h.html)\[[749](../source/advlite.h.html#749)\]

<div class="desc">

`'vocab'? @location? "desc"? ->destination;`  
*no description available*

</div>

<span id="TravelConnector"></span>

`TravelConnector`

[advlite.h](../file/advlite.h.html)\[[750](../source/advlite.h.html#750)\]

<div class="desc">

`->destination "travelDesc";`  
*no description available*

</div>

<span id="Unthing"></span>

`Unthing`

[advlite.h](../file/advlite.h.html)\[[755](../source/advlite.h.html#755)\]

<div class="desc">

`'vocab' @location? 'notHereMsg'?;`  
*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
