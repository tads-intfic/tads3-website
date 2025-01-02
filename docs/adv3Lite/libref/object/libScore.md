---
layout: docs
---
<span class="title">libScore</span><span class="type">object</span>

[score.t](../file/score.t.html)\[[336](../source/score.t.html#336)\]

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



The main game score object.

**`libScore`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`libScore`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fullScoreList`](#fullScoreList) [`scoreNotify`](#scoreNotify) [`totalScore`](#totalScore)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addToScore_`](#addToScore_) [`calcMaxScore`](#calcMaxScore) [`execute`](#execute) [`runScoreNotifier`](#runScoreNotifier) [`showFullScore`](#showFullScore) [`showScore`](#showScore) [`showScoreMessage`](#showScoreMessage) [`showScoreNoMaxMessage`](#showScoreNoMaxMessage) [`showScoreRank`](#showScoreRank) [`showScoreRankMessage`](#showScoreRankMessage)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fullScoreList"></span>

`fullScoreList`

[score.t](../file/score.t.html)\[[511](../source/score.t.html#511)\]



Vector for the full score achievement list. This is a list of all of the
Achievement objects awarded for accomplishments so far.



<span id="scoreNotify"></span>

`scoreNotify`

[score.t](../file/score.t.html)\[[521](../source/score.t.html#521)\]



current score notification status - if on, we'll show a message at the
end of each turn where the score changes, otherwise we won't mention
anything



<span id="totalScore"></span>

`totalScore`

[score.t](../file/score.t.html)\[[514](../source/score.t.html#514)\]



the total number of points scored so far



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addToScore_"></span>

`addToScore_ (points, desc)`

[score.t](../file/score.t.html)\[[349](../source/score.t.html#349)\]



Add to the score. 'points' is the number of points to add to the score,
and 'desc' is a string describing the reason the points are being
awarded, or an Achievement object describing the points.

We keep a list of each unique achievement. If 'desc' is already in this
list, we'll simply add the given number of points to the existing entry
for the same description.

Note that, if 'desc' is an Achievement object, it will match a previous
item only if it's exactly the same Achievement instance.



<span id="calcMaxScore"></span>

`calcMaxScore ( )`

[score.t](../file/score.t.html)\[[529](../source/score.t.html#529)\]



Compute the sum of the maximum point values of the Achievement objects
in the game. Point values are optional in Achievement objects; if there
are no Achievement objects with non-nil point values, this will simply
return nil.



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[score.t](../file/score.t.html)\[[569](../source/score.t.html#569)\]



execute pre-initialization



<span id="runScoreNotifier"></span>

`runScoreNotifier ( )`

[score.t](../file/score.t.html)\[[411](../source/score.t.html#411)\]



Explicitly run the score notification daemon.



<span id="showFullScore"></span>

`showFullScore ( )`

[score.t](../file/score.t.html)\[[497](../source/score.t.html#497)\]



Display the full score. 'explicit' is true if the player asked for the
full score explicitly, as with a FULL SCORE command; if we're showing
the full score automatically in the course of some other action,
'explicit' should be nil.



<span id="showScore"></span>

`showScore ( )`

[score.t](../file/score.t.html)\[[420](../source/score.t.html#420)\]



Show the simple score



<span id="showScoreMessage"></span>

`showScoreMessage (points, maxPoints, turns)`

[score.t](../file/score.t.html)\[[440](../source/score.t.html#440)\]



show the basic score message



<span id="showScoreNoMaxMessage"></span>

`showScoreNoMaxMessage (points, turns)`

[score.t](../file/score.t.html)\[[449](../source/score.t.html#449)\]



show the basic score message with no maximum



<span id="showScoreRank"></span>

`showScoreRank (points)`

[score.t](../file/score.t.html)\[[460](../source/score.t.html#460)\]



show the score rank message



<span id="showScoreRankMessage"></span>

`showScoreRankMessage (msg)`

[score.t](../file/score.t.html)\[[485](../source/score.t.html#485)\]



show the full message for a given score rank string





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


