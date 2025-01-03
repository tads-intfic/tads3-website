---
layout: docs
---
<span class="title">playerHelper</span><span class="type">object</span>

[newbie.t](../file/newbie.t.html)\[[151](../source/newbie.t.html#151)\]

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



The playerHelper is an object that starts a daemon at start of play.
This daemon checks whether the player is making any progress at all, and
also watches the ratio of commands the parser rejects to the number of
turns. If this ratio becomes too high (as defined by the errorThreshold
property) we offer the player a HELP command. If it becomes very low (as
defined by the ceaseCheckingErrorLevel property) we cease checking (i.e.
stop the daemon) on the grounds that the player doesn't appear to need
the kind of help we want to offer. We first perform a check after
firstCheckAfter turns to see if the player is making any progress, and
then after each errorCheckInterval turns to see if the player is having
difficulty entering valid commands.

The idea is to keep offering HELP to an inexperienced player who clearly
needs it, even if the player declined to read any help text at the start
of the game.

**`playerHelper`**` :   `[`InitObject`](../object/InitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`playerHelper`**  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`ceaseCheckingErrorLevel`](#ceaseCheckingErrorLevel)  [`errorCheckInterval`](#errorCheckInterval)  [`errorCount`](#errorCount)  [`errorDaemonID`](#errorDaemonID)  [`errorThreshold`](#errorThreshold)  [`firstCheckAfter`](#firstCheckAfter)  [`firstCheckMsg`](#firstCheckMsg)  [`startLocation`](#startLocation)  `



Inherited from `ModuleExecObject` :  
` [`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)  [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)  [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)  [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)  [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`errorCheck`](#errorCheck)  [`execute`](#execute)  [`firstCheck`](#firstCheck)  [`firstCheckCriterion`](#firstCheckCriterion)  [`offerHelp`](#offerHelp)  [`startErrorDaemon`](#startErrorDaemon)  [`stopErrorDaemon`](#stopErrorDaemon)  `



Inherited from `ModuleExecObject` :  
` [`_execute`](../object/ModuleExecObject.html#_execute)  [`classExec`](../object/ModuleExecObject.html#classExec)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="ceaseCheckingErrorLevel"></span>

`ceaseCheckingErrorLevel`

[newbie.t](../file/newbie.t.html)\[[204](../source/newbie.t.html#204)\]



The proportion of rejected commands to turns, expressed as a percentage,
below which we stop checking for errors. The default is 5 (in other
words if less than 5 per cent of the player's commands are being
rejected, the player presumably knows what s/he's doing, so we don't
need to keep checking)



<span id="errorCheckInterval"></span>

`errorCheckInterval`

[newbie.t](../file/newbie.t.html)\[[188](../source/newbie.t.html#188)\]



The number of turns between each check on whether the player is entering
too many erroneous commands.



<span id="errorCount"></span>

`errorCount`

[newbie.t](../file/newbie.t.html)\[[317](../source/newbie.t.html#317)\]



For internal use only: the number of badly formed commands the player
has entered.



<span id="errorDaemonID"></span>

`errorDaemonID`

[newbie.t](../file/newbie.t.html)\[[311](../source/newbie.t.html#311)\]



For internal use only: the ID of the currently running error check
Daemon (if there is one)



<span id="errorThreshold"></span>

`errorThreshold`

[newbie.t](../file/newbie.t.html)\[[195](../source/newbie.t.html#195)\]



The proportion of rejected commands to turns (i.e. accepted commands)
that will trigger an offer of help. We express this number as a
percentage.



<span id="firstCheckAfter"></span>

`firstCheckAfter`

[newbie.t](../file/newbie.t.html)\[[174](../source/newbie.t.html#174)\]



The number of turns that must elapse before we test the
firstCheckCriterion to see if the player appears to be stuck.



<span id="firstCheckMsg"></span>

`firstCheckMsg`

[newbie.t](../file/newbie.t.html)\[[180](../source/newbie.t.html#180)\]



The message to display if the player seems to be stuck at the start of
the game.



<span id="startLocation"></span>

`startLocation`

[newbie.t](../file/newbie.t.html)\[[168](../source/newbie.t.html#168)\]



The location the playerCharacter starts out in at the beginning of the
game. It may be useful to know this in the firstCheckCriterion method.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="errorCheck"></span>

`errorCheck ( )`

[newbie.t](../file/newbie.t.html)\[[251](../source/newbie.t.html#251)\]



Watch for a high percentage of errors in user input



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[newbie.t](../file/newbie.t.html)\[[157](../source/newbie.t.html#157)\]



Set up the firstCheck() Fuse and note the player character's starting
location.



<span id="firstCheck"></span>

`firstCheck ( )`

[newbie.t](../file/newbie.t.html)\[[225](../source/newbie.t.html#225)\]



Check whether the player appears to be making any progress at the start
of the game. If not, display a message offering help and start the error
checking daemon.



<span id="firstCheckCriterion"></span>

`firstCheckCriterion ( )`

[newbie.t](../file/newbie.t.html)\[[215](../source/newbie.t.html#215)\]



The criterion to apply to see whether the player is making any progress
at the start of the game. This method should return true if the player
seems to be stuck. By default we simply return nil as there's no way of
knowing how to measure 'stuckness' for games in general, so specific
games will need to override this method. A game involved exploration
might set the condition to gLocation == startLocation (meaning the
player character hasn't moved) for example.



<span id="offerHelp"></span>

`offerHelp ( )`

[newbie.t](../file/newbie.t.html)\[[296](../source/newbie.t.html#296)\]



The offerHelp() method asks whether the player has played this kind of
game before and accepts a Y or N answer. if the answer is NO then it
goes on to display a message suggesting sources of help.

This method can usefully be called at the end of the
gameMain.showIntro() method, but it's up to game authors to incluse it
there if they want it/



<span id="startErrorDaemon"></span>

`startErrorDaemon ( )`

[newbie.t](../file/newbie.t.html)\[[248](../source/newbie.t.html#248)\]



We've just offered help, so we'll wait another errorCheckInterval turns
before seeing whether to offer it again.



<span id="stopErrorDaemon"></span>

`stopErrorDaemon ( )`

[newbie.t](../file/newbie.t.html)\[[279](../source/newbie.t.html#279)\]



Stop the error check daemon from running
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


