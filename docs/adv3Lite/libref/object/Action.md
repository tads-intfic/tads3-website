[Action]{.title}[class]{.type}

[action.t](../file/action.t.html)\[[22](../source/action.t.html#22)\],
[english.t](../file/english.t.html)\[[5342](../source/english.t.html#5342)\],
[objtime.t](../file/objtime.t.html)\[[173](../source/objtime.t.html#173)\],
[sysrules.t](../file/sysrules.t.html)\[[340](../source/sysrules.t.html#340)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The library doesn\'t yet provide any support for actions that take three
objects (TIAActions, as they might hypothetically be called), but since
the Mercury parser does we provide a number of hooks that other code
could use. To this end we need to define the properties a TIAAction
might use so the compiler recognizes them.

*Modified in
[english.t](../file/english.t.html)\[[5342](../source/english.t.html#5342)\]:*\
Language-specific modifications to Action classes principally to enable
the construction of implicit action announcements.

*Modified in
[objtime.t](../file/objtime.t.html)\[[173](../source/objtime.t.html#173)\]:*\
Modifications to the Action class for use with the OBJTIME EXTENSION.
The purpose of these modifications is to advance the game clock each
turn.

`class `**`Action`**` :   `[`ReplaceRedirector`](../object/ReplaceRedirector.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Action`**\
`         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                 `[`Redirector`](../object/Redirector.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Action`**\
`         `[`IAction`](../object/IAction.html)\
`                 `[`LiteralAction`](../object/LiteralAction.html)\
`                 `[`MiscConvAction`](../object/MiscConvAction.html)\
`                 `[`NumericAction`](../object/NumericAction.html)\
`                 `[`SystemAction`](../object/SystemAction.html)\
`                         `[`FileOpAction`](../object/FileOpAction.html)\
`                 `[`TopicAction`](../object/TopicAction.html)\
`                         `[`ImplicitConversationAction`](../object/ImplicitConversationAction.html)\
`         `[`TAction`](../object/TAction.html)\
`                 `[`LiteralTAction`](../object/LiteralTAction.html)\
`                 `[`NumericTAction`](../object/NumericTAction.html)\
`                 `[`TIAction`](../object/TIAction.html)\
`                         `[`TIAAction`](../object/TIAAction.html)\
`                 `[`TopicTAction`](../object/TopicTAction.html)\
`         `[`TravelAction`](../object/TravelAction.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`FootnotesFullAction`](../object/FootnotesFullAction.html)`  `[`FootnotesMediumAction`](../object/FootnotesMediumAction.html)`  `[`FootnotesOffAction`](../object/FootnotesOffAction.html)`  `[`Record`](../object/Record.html)`  `[`RecordEvents`](../object/RecordEvents.html)`  `[`RecordEventsString`](../object/RecordEventsString.html)`  `[`RecordString`](../object/RecordString.html)`  `[`Replay`](../object/Replay.html)`  `[`ReplayString`](../object/ReplayString.html)`  `[`RestoreString`](../object/RestoreString.html)`  `[`Save`](../object/Save.html)`  `[`SaveString`](../object/SaveString.html)`  `[`ScriptOn`](../object/ScriptOn.html)`  `[`ScriptString`](../object/ScriptString.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`actionFailed`](#actionFailed)`  `[`advanceOnFailure`](#advanceOnFailure)`  `[`againRepeatsParse`](#againRepeatsParse)`  `[`allowAll`](#allowAll)`  `[`extraMessageParams`](#extraMessageParams)`  `[`failCheckMsg`](#failCheckMsg)`  `[`failedActionCountsAsTurn`](#failedActionCountsAsTurn)`  `[`implicitTimeTaken`](#implicitTimeTaken)`  `[`includeInUndo`](#includeInUndo)`  `[`isConversational`](#isConversational)`  `[`isImplicit`](#isImplicit)`  `[`isRepeatable`](#isRepeatable)`  `[`oldRoom`](#oldRoom)`  `[`parentAction`](#parentAction)`  `[`parentAllowAll`](#parentAllowAll)`  `[`preCond`](#preCond)`  `[`redirectParent`](#redirectParent)`  `[`reportImplicitActions`](#reportImplicitActions)`  `[`scopeList`](#scopeList)`  `[`spellingPriority`](#spellingPriority)`  `[`synthParamID`](#synthParamID)`  `[`timeTaken`](#timeTaken)`  `[`turnsTaken`](#turnsTaken)`  `[`unhides`](#unhides)`  `[`verifyObj`](#verifyObj)`  `[`wasIlluminated`](#wasIlluminated)`  `

` `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`acknowledgeNotifyStatus`](#acknowledgeNotifyStatus)`  `[`addExtraScopeItems`](#addExtraScopeItems)`  `[`addImplicitTime`](#addImplicitTime)`  `[`advanceTime`](#advanceTime)`  `[`afterAction`](#afterAction)`  `[`announceObject`](#announceObject)`  `[`beforeAction`](#beforeAction)`  `[`buildImplicitActionAnnouncement`](#buildImplicitActionAnnouncement)`  `[`buildScopeList`](#buildScopeList)`  `[`checkAction`](#checkAction)`  `[`checkActionPreconditions`](#checkActionPreconditions)`  `[`commandNotPresent`](#commandNotPresent)`  `[`exec`](#exec)`  `[`execAction`](#execAction)`  `[`execCycle`](#execCycle)`  `[`execGroup`](#execGroup)`  `[`getAll`](#getAll)`  `[`getAllUnhidden`](#getAllUnhidden)`  `[`getMessageParam`](#getMessageParam)`  `[`implicitAnnouncement`](#implicitAnnouncement)`  `[`reportAction`](#reportAction)`  `[`scoreObjects`](#scoreObjects)`  `[`setMessageParam`](#setMessageParam)`  `[`setMessageParams`](#setMessageParams)`  `[`spPrefix`](#spPrefix)`  `[`spSuffix`](#spSuffix)`  `[`synthMessageParam`](#synthMessageParam)`  `[`turnSequence`](#turnSequence)`  `[`verify`](#verify)`  `[`verifyObjRole`](#verifyObjRole)`  `[`wrapObjectsNP`](#wrapObjectsNP)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#actionFailed}

`actionFailed`

[action.t](../file/action.t.html)\[[29](../source/action.t.html#29)\]

::: desc
Flag; should this action be considered a failure? This should be reset
to true at the start of the action processing cycle but can be tested
later to prevent, e.g., inappropriate reporting.
:::

[]{#advanceOnFailure}

`advanceOnFailure`

[objtime.t](../file/objtime.t.html)\[[190](../source/objtime.t.html#190)\]

::: desc
Flag: should the game time be advanced if this action fails? By default
we allow it to advance, but this can be overridden to nil for actions
that should take no time if they\'re not carried out. \[OBJTIME
EXTENSION\]
:::

[]{#againRepeatsParse}

`againRepeatsParse`

[action.t](../file/action.t.html)\[[389](../source/action.t.html#389)\]

::: desc
If an AGAIN command is used with this command, should the command be
reparsed from scratch (because it might involve a different object) or
not (because it should act on the same objects). We generally set this
to true for actions it wouldn\'t normally make sense to repeat on the
same object straight away. Since this applies to the majority of
actions, we make this the default.
:::

[]{#allowAll}

`allowAll`

[action.t](../file/action.t.html)\[[951](../source/action.t.html#951)\]

::: desc
Can ALL be used with this action? By default we take our value from
gameMain.allVerbsAllowAll, though basic inventory-handling actions in
the library will override this. This property is really only relevant on
TAction and its descendents, but we define it here just to make sure no
cases are missed.
:::

[]{#extraMessageParams}

`extraMessageParams`

[action.t](../file/action.t.html)\[[762](../source/action.t.html#762)\]

::: desc
Extra message parameters. If a message processor wants to add special
message parameters of its own, we\'ll create a lookup table for the
extra parameters. Message processors might want to add their own special
parameters to allow referring to objects other than the main objects of
the command.
:::

[]{#failCheckMsg}

`failCheckMsg`

[action.t](../file/action.t.html)\[[967](../source/action.t.html#967)\]

::: desc
The message to display if an action fails at the check stage (via an
exit macro) without any other explanatory text being displayed.
:::

[]{#failedActionCountsAsTurn}

`failedActionCountsAsTurn`

[action.t](../file/action.t.html)\[[581](../source/action.t.html#581)\]

::: desc
Flag, do we want an action that fails at the verify stage to count as a
turn (in other words, if an action fails at the verify stage, do we want
to advance the turn counter,excecute daemons, and do all the other turn
sequence stuff)? By default we do, since this has long been the standard
behaviour, but game code can override this to nil either globally on the
Action class on on individual actions to cause failure at the verify
stage to abort the remainder of the turn sequence.
:::

[]{#implicitTimeTaken}

`implicitTimeTaken`

[objtime.t](../file/objtime.t.html)\[[208](../source/objtime.t.html#208)\]

::: desc
The number of seconds to carry out this action as an implicit action. By
default we don\'t take any, since the normal convention seems to be to
count implicit actions as part of the main action, but this could be
overridden to be, say, the same as timeTaken if zero-time implicit
actions were felt to give an unfair advantage to timed puzzles.
\[OBJTIME EXTENSION\]
:::

[]{#includeInUndo}

`includeInUndo`

[action.t](../file/action.t.html)\[[367](../source/action.t.html#367)\]

::: desc
Can this action be Undone? By default most actions can.
:::

[]{#isConversational}

`isConversational`

[action.t](../file/action.t.html)\[[370](../source/action.t.html#370)\]

::: desc
Flag: is this a conversational action?
:::

[]{#isImplicit}

`isImplicit`

[action.t](../file/action.t.html)\[[364](../source/action.t.html#364)\]

::: desc
Flag: is this an implicit action? By default it isn\'t.
:::

[]{#isRepeatable}

`isRepeatable`

[action.t](../file/action.t.html)\[[378](../source/action.t.html#378)\]

::: desc
Is this action repeatable (with an AGAIN command)? Most actions are so
the default is true but subclasses can override to exclude actions (such
as certain system actions) that it would make no sense to repeat.
:::

[]{#oldRoom}

`oldRoom`

[action.t](../file/action.t.html)\[[136](../source/action.t.html#136)\]

::: desc
The room the actor was in when the action started
:::

[]{#parentAction}

`parentAction`

[action.t](../file/action.t.html)\[[408](../source/action.t.html#408)\]

::: desc
Do we have a parent action, and if so what is it? The parent action
would be the action that\'s using us as an implicit action or nested
action.
:::

[]{#parentAllowAll}

`parentAllowAll`

[action.t](../file/action.t.html)\[[960](../source/action.t.html#960)\]

::: desc
Does the command from which we\'ve been redirected allow ALL?
:::

[]{#preCond}

`preCond`

[action.t](../file/action.t.html)\[[146](../source/action.t.html#146)\]

::: desc
A list of any PreConditions that apply to this action as a whole, as
opposed to any of its objects. This is most likely to be relevant to an
IAction.
:::

[]{#redirectParent}

`redirectParent`

[action.t](../file/action.t.html)\[[957](../source/action.t.html#957)\]

::: desc
If we\'ve been redirected here from another action, store a reference to
that action.
:::

[]{#reportImplicitActions}

`reportImplicitActions`

[english.t](../file/english.t.html)\[[5371](../source/english.t.html#5371)\]

::: desc
Flag - do we want to show implicit action reports for this action? By
default we do.
:::

[]{#scopeList}

`scopeList`

[action.t](../file/action.t.html)\[[939](../source/action.t.html#939)\]

::: desc
Our currently cached list of items in scope for this action.
:::

[]{#spellingPriority}

`spellingPriority`

[action.t](../file/action.t.html)\[[942](../source/action.t.html#942)\]

::: desc
Used by Mercury\'s spelling corrector code.
:::

[]{#synthParamID}

`synthParamID`

[action.t](../file/action.t.html)\[[753](../source/action.t.html#753)\]

::: desc
synthesized message object parameter serial number
:::

[]{#timeTaken}

`timeTaken`

[objtime.t](../file/objtime.t.html)\[[198](../source/objtime.t.html#198)\]

::: desc
The number of seconds it takes to carry out this action. By default we
assume every action takes one minute, but this can be overridden either
globally on the Action class or individually on each actiom. \[OBJTIME
EXTENSION\]
:::

[]{#turnsTaken}

`turnsTaken`

[action.t](../file/action.t.html)\[[361](../source/action.t.html#361)\]

::: desc
The number of turns this action is counted as taking. Normally, this
will be 1.
:::

[]{#unhides}

`unhides`

[action.t](../file/action.t.html)\[[989](../source/action.t.html#989)\]

::: desc
Flag: is this an action that acts on an object even if it is hidden;
normally this will only apply to debugging actions.
:::

[]{#verifyObj}

`verifyObj`

[action.t](../file/action.t.html)\[[666](../source/action.t.html#666)\]

::: desc
The object currently being verified
:::

[]{#wasIlluminated}

`wasIlluminated`

[action.t](../file/action.t.html)\[[139](../source/action.t.html#139)\]

::: desc
Flag to indicate whether the actor\'s location started out illuminated
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#acknowledgeNotifyStatus}

`acknowledgeNotifyStatus (stat)`

[action.t](../file/action.t.html)\[[979](../source/action.t.html#979)\]

::: desc
acknowledge a change in the score notification status
:::

[]{#addExtraScopeItems}

`addExtraScopeItems (role?)`

[action.t](../file/action.t.html)\[[933](../source/action.t.html#933)\]

::: desc
Add extra scope items if this action needs a wider definition of scope
than normal. By default we simply allow the current actor\'s current
location to add additional items to scope if it wishes to.
:::

[]{#addImplicitTime}

`addImplicitTime ( )`

[action.t](../file/action.t.html)\[[995](../source/action.t.html#995)\],
[objtime.t](../file/objtime.t.html)\[[214](../source/objtime.t.html#214)\]

::: desc
This does nothing in the main library but is provided as a hook for the
objtime extension to use to add to the time taken by implicit actions.

*Modified in
[objtime.t](../file/objtime.t.html)\[[214](../source/objtime.t.html#214)\]:*\
Add our implicitTimeTaken to the total time taken for the turn.
\[OBJTIME EXTENSION\]
:::

[]{#advanceTime}

`advanceTime ( )`

[action.t](../file/action.t.html)\[[1001](../source/action.t.html#1001)\],
[objtime.t](../file/objtime.t.html)\[[176](../source/objtime.t.html#176)\]

::: desc
Advance the game clock time. This does nothing in the main library but
is provided as a hook for the objtime extension to use.

*Modified in
[objtime.t](../file/objtime.t.html)\[[176](../source/objtime.t.html#176)\]:*\
Advance the notional game time \[OBJTIME EXTENSION\]
:::

[]{#afterAction}

`afterAction ( )`

[action.t](../file/action.t.html)\[[263](../source/action.t.html#263)\],
[sysrules.t](../file/sysrules.t.html)\[[352](../source/sysrules.t.html#352)\]

::: desc
Carry out the post-action processing. This first checks to see if
there\'s been a change in illumination. If there has we either show a
room description (if the actor\'s location is now lit) or announce the
onset of darkness. We then call the after action notifications first on
the actor\'s current room and then on every object in scope.

Note that afterAction() is called from the current Command object.

*Modified in
[sysrules.t](../file/sysrules.t.html)\[[352](../source/sysrules.t.html#352)\]:*\
Carry out the post-action processing. This first checks to see if
there\'s been a change in illumination. If there has we either show a
room description (if the actor\'s location is now lit) or announce the
onset of darkness. We then call the after action notifications first on
the actor\'s current room and then on every object in scope.

Note that afterAction() is called from the current Command object.
\[MODIFIED FOR SYSRULES EXTENSION\]
:::

[]{#announceObject}

`announceObject (obj)`

[english.t](../file/english.t.html)\[[5491](../source/english.t.html#5491)\]

::: desc
Announce an object (for use to introduce a report on what an action does
to particular object when it\'s one of a number of objects the actions
is acting upon)
:::

[]{#beforeAction}

`beforeAction ( )`

[action.t](../file/action.t.html)\[[209](../source/action.t.html#209)\],
[sysrules.t](../file/sysrules.t.html)\[[377](../source/sysrules.t.html#377)\]

::: desc
Return our overall check result.

*Modified in
[sysrules.t](../file/sysrules.t.html)\[[377](../source/sysrules.t.html#377)\]:*\
\[MODIFIED FOR SYSRULES EXTENSION\] Use the beforeRules RuleBook to
carry out the before action handling.
:::

[]{#buildImplicitActionAnnouncement}

`buildImplicitActionAnnouncement (success, clearReports, =, true)`

[english.t](../file/english.t.html)\[[5380](../source/english.t.html#5380)\]

::: desc
Construct the announcement of an implicit action according to whether
the implict action succeeds (success = true) or fails (success = nil)

\[Required\]
:::

[]{#buildScopeList}

`buildScopeList (whichRole, =, DirectObject)`

[action.t](../file/action.t.html)\[[917](../source/action.t.html#917)\]

::: desc
Build the scope list for this action.
:::

[]{#checkAction}

`checkAction ( )`

[action.t](../file/action.t.html)\[[46](../source/action.t.html#46)\]

::: desc
The checkAction() method calls the check routines on the objects
involved in the command (where there are objects). Subclasses such as
TAction and TIAction need to override this to carry out the appropriate
handling.
:::

[]{#checkActionPreconditions}

`checkActionPreconditions ( )`

[action.t](../file/action.t.html)\[[148](../source/action.t.html#148)\]

::: desc
*no description available*
:::

[]{#commandNotPresent}

`commandNotPresent ( )`

[action.t](../file/action.t.html)\[[971](../source/action.t.html#971)\]

::: desc
optional command is not supported in this game
:::

[]{#exec}

`exec (cmd)`

[action.t](../file/action.t.html)\[[53](../source/action.t.html#53)\]

::: desc
The main routine for handling an action. This is the method called by
the command object; the cmd parameter gives the calling Command object.
:::

[]{#execAction}

`execAction (cmd)`

[action.t](../file/action.t.html)\[[131](../source/action.t.html#131)\]

::: desc
The main action handler. Subclasses must override.
:::

[]{#execCycle}

`execCycle (cmd)`

[action.t](../file/action.t.html)\[[88](../source/action.t.html#88)\]

::: desc
The action-processing cycle carries out the before action notifications,
then executes the action. This needs to be overridden on various
subclasses since the beforeAction notifications can occur at different
points in different kinds of action.
:::

[]{#execGroup}

`execGroup (cmd)`

[action.t](../file/action.t.html)\[[38](../source/action.t.html#38)\]

::: desc
The execGroup() method is called by the current Command object before it
calls the action on individual objects, to allow processing of the group
of objects as a whole. By default we do nothing here in the library.
:::

[]{#getAll}

`getAll (cmd, role)`

[action.t](../file/action.t.html)\[[772](../source/action.t.html#772)\]

::: desc
Get a list of all the objects that this action should act on if the
player typed ALL for role (DirectObject, IndirectObject, or perhaps in
some future version of the library, AccessoryObject. This is the method
that can be overridden on subclasses to give action-specific definitions
of ALL.
:::

[]{#getAllUnhidden}

`getAllUnhidden (cmd, role)`

[action.t](../file/action.t.html)\[[786](../source/action.t.html#786)\]

::: desc
Get a list of all the objects this action will act on if the player
types ALL for role (DirectObject or IndirectObject). This is the method
actually called by the Parser. We first obtain the list of objects
returned by getAll() and then filter out any objects for which
hideFromAll(action) is true for this action. Subclasses should normally
override getAll() rather than this method.
:::

[]{#getMessageParam}

`getMessageParam (objName)`

[action.t](../file/action.t.html)\[[674](../source/action.t.html#674)\]

::: desc
Get a message parameter object for the action. Each action subclass
defines this to return its objects according to its own classifications.
The default action has no objects, but recognizes \'actor\' as the
current command\'s actor.
:::

[]{#implicitAnnouncement}

`implicitAnnouncement (success)`

[english.t](../file/english.t.html)\[[5473](../source/english.t.html#5473)\]

::: desc
Return a string giving the implicit action announcement for the current
action according to whether it\'s a success (e.g. \"taking the spoon\")
or a failure (e.g. \"trying to take the spoon\"). We make this a
separate method to make it a little easier for game code to customize
implicit action announcements.

A return value of nil will suppress the implicit action report for this
action altogeher.
:::

[]{#reportAction}

`reportAction ( )`

[action.t](../file/action.t.html)\[[400](../source/action.t.html#400)\]

::: desc
Report on the action. This is only relevant where the action has more or
one objects, so TAction must override. This is called from the current
Command object once all the objects have been acted on (in a case where
multiple direct objects have been specified, as in TAKE ALL or TAKE RED
BALL AND GREEN PEN). This allows the report routine to summarize the
action for all the objects acted upon instead of displaying an
individual report for each one.
:::

[]{#scoreObjects}

`scoreObjects (cmd, role, lst)`

[action.t](../file/action.t.html)\[[832](../source/action.t.html#832)\]

::: desc
Score a set of objects in a given noun role in the action, in order to
resolve an ambiguous command. Our job, in brief, is to READ THE
PLAYER\'S MIND: we want to figure out which object or objects the player
is actually referring to when their words are ambiguous.

\'cmd\' is the Command object describing the command. The various object
lists (dobjs, iobjs, accs) have been filled in with the in-scope objects
that match the noun phrase, but these haven\'t been disambiguated yet,
so there might be more objects listed than will actually be used in the
final command.

\'role\' tells us the noun phrase role that we\'re scoring
(DirectObject, IndirectObject, AccessoryObject, TopicRole, LiteralRole).

\'lst\' is the match list. This is a Vector containing NPMatch objects.
There\'s one NPMatch for each object that we\'re considering as a match
for the player\'s noun phrase.

For each item in the match list, we must set the NPMatch object\'s
\'score\' property to a number indicating how likely we think it is that
the player is referring to this object. The higher the score, the more
likely we think it is. The score value is purely relative - the caller
will pick the object or objects with the highest score.

We run through the verify routine for each object, which in turn runs
through the preconditions of that object. We take the returned verify
score to be the score for the object (or its replacement if remapping
took place).

Next, we do any verb-specific adjustments via self.actionScore().

Finally, we call each object\'s scoreObject() routine to give the object
a chance to make any adjustments for special affinities (or aversions).
:::

[]{#setMessageParam}

`setMessageParam (objName, obj)`

[action.t](../file/action.t.html)\[[710](../source/action.t.html#710)\]

::: desc
Define an extra message-specific parameter. Message processors can use
this to add their own special parameters, so that they can refer to
parameters that aren\'t involved directly in the command. For example, a
message for \"take \<dobj\>\" might want to refer to the object
containing the direct object.
:::

[]{#setMessageParams}

`setMessageParams ([lst])`

[action.t](../file/action.t.html)\[[727](../source/action.t.html#727)\]

::: desc
For convenience, this method allows setting any number of name/value
pairs for message parameters.
:::

[]{#spPrefix}

`spPrefix (str)`

[english.t](../file/english.t.html)\[[5483](../source/english.t.html#5483)\]

::: desc
add a space prefix/suffix to a string if the string is non-empty
:::

[]{#spSuffix}

`spSuffix (str)`

[english.t](../file/english.t.html)\[[5484](../source/english.t.html#5484)\]

::: desc
*no description available*
:::

[]{#synthMessageParam}

`synthMessageParam (obj)`

[action.t](../file/action.t.html)\[[738](../source/action.t.html#738)\]

::: desc
Synthesize a global message parameter name for the given object. We\'ll
store the association and return the synthesized name.
:::

[]{#turnSequence}

`turnSequence ( )`

[action.t](../file/action.t.html)\[[329](../source/action.t.html#329)\],
[sysrules.t](../file/sysrules.t.html)\[[406](../source/sysrules.t.html#406)\]

::: desc
The turnSequence() method is called from the current Command object. It
first executes any current daemons (apart from any PromptDaemons) and
then advances the turn counter. We define this on the Action class
principally to make it simple for certain kinds of Action such as
SystemActions to do nothing here (since they don\'t count as actions
within the game world).

*Modified in
[sysrules.t](../file/sysrules.t.html)\[[406](../source/sysrules.t.html#406)\]:*\
\[MODIFIED FOR SYSRULES EXTENSION\] Use the turnEnd RuleBook to carry
out the end-of-turn processing.
:::

[]{#verify}

`verify (obj, role)`

[action.t](../file/action.t.html)\[[417](../source/action.t.html#417)\]

::: desc
Carry out the verification stage for this object in this role, and carry
out any remapping needed. This needs to be defined on Action since there
might be verification of the ActorRole.
:::

[]{#verifyObjRole}

`verifyObjRole (obj, role)`

[action.t](../file/action.t.html)\[[591](../source/action.t.html#591)\]

::: desc
Run the verify routine on the current object in the current role to see
whether it will allow the action. If it won\'t, display any pending
implicit action announcements, then display the message explaining why
the action is disallowed, and finally return nil to tell our caller to
halt the action. If the verify stage does allow the action to go ahead,
return true to tell our caller that this routine has no objection.
:::

[]{#wrapObjectsNP}

`wrapObjectsNP (lst)`

[action.t](../file/action.t.html)\[[904](../source/action.t.html#904)\]

::: desc
Wraps a list of objects in NPMatch objects so they can be run through
the scoreObjects method.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
