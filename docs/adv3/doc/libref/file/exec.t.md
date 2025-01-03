---
layout: docs
---
<span class="title">exec.t</span><span class="type">file</span>

[source file](../source/exec.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library: command execution

This module defines functions that perform command execution.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`AbortImplicitSignal`](../object/AbortImplicitSignal.html) [`ExitActionSignal`](../object/ExitActionSignal.html) [`ExitSignal`](../object/ExitSignal.html) [`GlobalRemapping`](../object/GlobalRemapping.html) [`MessageResult`](../object/MessageResult.html) [`RemapActionSignal`](../object/RemapActionSignal.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



*(none)* <span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`_nestedAction`](#_nestedAction) [`_newAction`](#_newAction) [`_replaceAction`](#_replaceAction) [`_tryImplicitAction`](#_tryImplicitAction) [`execNestedAction`](#execNestedAction) [`executeAction`](#executeAction) [`executeCommand`](#executeCommand) [`nestedActionAgain`](#nestedActionAgain) [`newActionObj`](#newActionObj) [`prepareNestedAction`](#prepareNestedAction) [`remapAction`](#remapAction) [`remapActionCreate`](#remapActionCreate) [`remapVerify`](#remapVerify) [`resolveAndReplaceAction`](#resolveAndReplaceAction) [`withActionEnv`](#withActionEnv)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="_nestedAction"></span>

`_nestedAction (isReplacement, actor, actionClass, [objs])`

[exec.t](../file/exec.t.html)\[[1134](../source/exec.t.html#1134)\]



Run a nested action. 'isReplacement' has the same meaning as in
execNestedAction().



<span id="_newAction"></span>

`_newAction (transcriptClass, issuingActor, targetActor, actionClass, [objs])`

[exec.t](../file/exec.t.html)\[[1076](../source/exec.t.html#1076)\]



Run an action as a new turn. Returns the CommandTranscript describing
the action's results.



<span id="_replaceAction"></span>

`_replaceAction (actor, actionClass, [objs])`

[exec.t](../file/exec.t.html)\[[1041](../source/exec.t.html#1041)\]



Run a replacement action.



<span id="_tryImplicitAction"></span>

`_tryImplicitAction (issuingActor, targetActor, msgProp, actionClass, [objs])`

[exec.t](../file/exec.t.html)\[[936](../source/exec.t.html#936)\]



Try an implicit action.

Returns true if the action was attempted, whether or not it succeeded,
nil if the command was not even attempted. We will not attempt an
implied command that verifies as "dangerous," since this means that it
should be obvious to the player character that such a command should not
be performed lightly.



<span id="execNestedAction"></span>

`execNestedAction (isReplacement, isRemapping, actor, action)`

[exec.t](../file/exec.t.html)\[[1162](../source/exec.t.html#1162)\]



Execute a fully-constructed nested action.

'isReplacement' indicates whether the action is a full replacement or an
ordinary nested action. If it's a replacement, then we use the game time
taken by the replacement, and set the enclosing action (i.e., the
current gAction) to take zero time. If it's an ordinary nested action,
then we consider the nested action to take zero time, using the current
action's time as the overall command time.

'isRemapping' indicates whether or not this is a remapped action. If
we're remapping from one action to another, this will be true; for any
other kind of nested or replacement action, this should be nil.



<span id="executeAction"></span>

`executeAction (targetActor, targetActorPhrase, issuingActor, countsAsIssuerTurn, action)`

[exec.t](../file/exec.t.html)\[[788](../source/exec.t.html#788)\]



Execute an action, as specified by an Action object. We'll resolve the
nouns in the action, then perform the action.



<span id="executeCommand"></span>

`executeCommand (targetActor, issuingActor, toks, firstInSentence)`

[exec.t](../file/exec.t.html)\[[33](../source/exec.t.html#33)\]



Execute a command line, as issued by the given actor and as given as a
list of tokens.

If 'firstInSentence' is true, we're at the start of a "sentence." The
meaning and effect of this may vary by language. In English, a sentence
ends with certain punctuation marks (a period, semicolon, exclamation
mark, or question mark), so anything after one of these punctuation
marks is the start of a new sentence. Also in English, we can address a
command to an explicit target actor using the "actor," prefix syntax,
which we can't use except at the start of a sentence.

If the command line consists of multiple commands, we will only actually
execute the first command before returning. We'll schedule any
additional commands for later execution by putting them into the target
actor's pending command queue before we return, but we won't actually
execute them.



<span id="nestedActionAgain"></span>

`nestedActionAgain (action)`

[exec.t](../file/exec.t.html)\[[1232](../source/exec.t.html#1232)\]



Run a previously-executed command as a nested action, re-resolving all
of its objects to ensure they are still valid.



<span id="newActionObj"></span>

`newActionObj (transcriptClass, issuingActor, targetActor, actionObj, [objs])`

[exec.t](../file/exec.t.html)\[[1099](../source/exec.t.html#1099)\]



Run an action as a new turn. This is almost the same as \_newAction, but
should be used when the caller has already explicitly created an
instance of the Action to be performed.

If issuingActor is nil, we'll use the current global issuing actor; if
that's also nil, we'll use the target actor.

Returns a CommandTranscript object describing the result of the action.



<span id="prepareNestedAction"></span>

`prepareNestedAction (isReplacement, isRemapping, action)`

[exec.t](../file/exec.t.html)\[[1176](../source/exec.t.html#1176)\]



Prepare a nested or replacement action for execution.



<span id="remapAction"></span>

`remapAction (inResolve, oldRole, remapInfo)`

[exec.t](../file/exec.t.html)\[[1448](../source/exec.t.html#1448)\]



Perform a remapping to a new action. This is normally invoked through
the remapTo() macro.



<span id="remapActionCreate"></span>

`remapActionCreate (inResolve, oldRole, remapInfo)`

[exec.t](../file/exec.t.html)\[[1486](../source/exec.t.html#1486)\]



Create a new action object for the given remapped action.



<span id="remapVerify"></span>

`remapVerify (oldRole, resultSoFar, remapInfo)`

[exec.t](../file/exec.t.html)\[[1368](../source/exec.t.html#1368)\]



Remap a 'verify' method for a remapped action. This is normally invoked
through the remapTo() macro.



<span id="resolveAndReplaceAction"></span>

`resolveAndReplaceAction (newAction)`

[exec.t](../file/exec.t.html)\[[1056](../source/exec.t.html#1056)\]



Resolve and execute a replacement action. This differs from the normal
replacement action execution in that the action we execute requires
resolution before execution.



<span id="withActionEnv"></span>

`withActionEnv (actionClass, actor, func)`

[exec.t](../file/exec.t.html)\[[1261](../source/exec.t.html#1261)\]



Run some code in a simulated Action environment. We'll create a dummy
instance of the given Action class, and set up a command transcript,
then invoke the function. This is useful for writing daemon code that
needs to invoke other code that's set up to expect a normal action
processing environment.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


