---
layout: docs
---
<span class="title">scoreNotifier</span><span class="type">object</span>

[score.t](../file/score.t.html)\[[234](../source/score.t.html#234)\]

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



Score notification daemon handler. We'll receive a checkNotification()
call each turn; we'll display a notification message each time the score
has changed since the last time we ran.

**`scoreNotifier`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`scoreNotifier`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`everNotified`](#everNotified) [`lastScore`](#lastScore)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`basicScoreChange`](#basicScoreChange) [`checkNotification`](#checkNotification) [`firstScoreChange`](#firstScoreChange) [`scoreChange`](#scoreChange)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="everNotified"></span>

`everNotified`

[score.t](../file/score.t.html)\[[239](../source/score.t.html#239)\]



we've never generated a notification about the score before



<span id="lastScore"></span>

`lastScore`

[score.t](../file/score.t.html)\[[236](../source/score.t.html#236)\]



the score as it was the last time we displayed a notification



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="basicScoreChange"></span>

`basicScoreChange (delta)`

[score.t](../file/score.t.html)\[[306](../source/score.t.html#306)\]



basic score change notification message - this is an internal service
routine for scoreChange and firstScoreChange



<span id="checkNotification"></span>

`checkNotification ( )`

[score.t](../file/score.t.html)\[[242](../source/score.t.html#242)\]



daemon entrypoint



<span id="firstScoreChange"></span>

`firstScoreChange (delta)`

[score.t](../file/score.t.html)\[[290](../source/score.t.html#290)\]



score change - first notification



<span id="scoreChange"></span>

`scoreChange (delta)`

[score.t](../file/score.t.html)\[[296](../source/score.t.html#296)\]



score change - notification other than the first time





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


