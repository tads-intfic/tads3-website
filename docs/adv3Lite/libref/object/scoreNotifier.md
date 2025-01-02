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

<div class="fdesc">

Score notification daemon handler. We'll receive a checkNotification()
call each turn; we'll display a notification message each time the score
has changed since the last time we ran.

**`scoreNotifier`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`scoreNotifier`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`everNotified`](#everNotified)`  `[`lastScore`](#lastScore)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`basicScoreChange`](#basicScoreChange)`  `[`checkNotification`](#checkNotification)`  `[`firstScoreChange`](#firstScoreChange)`  `[`scoreChange`](#scoreChange)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="everNotified"></span>

`everNotified`

[score.t](../file/score.t.html)\[[239](../source/score.t.html#239)\]

<div class="desc">

we've never generated a notification about the score before

</div>

<span id="lastScore"></span>

`lastScore`

[score.t](../file/score.t.html)\[[236](../source/score.t.html#236)\]

<div class="desc">

the score as it was the last time we displayed a notification

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="basicScoreChange"></span>

`basicScoreChange (delta)`

[score.t](../file/score.t.html)\[[306](../source/score.t.html#306)\]

<div class="desc">

basic score change notification message - this is an internal service
routine for scoreChange and firstScoreChange

</div>

<span id="checkNotification"></span>

`checkNotification ( )`

[score.t](../file/score.t.html)\[[242](../source/score.t.html#242)\]

<div class="desc">

daemon entrypoint

</div>

<span id="firstScoreChange"></span>

`firstScoreChange (delta)`

[score.t](../file/score.t.html)\[[290](../source/score.t.html#290)\]

<div class="desc">

score change - first notification

</div>

<span id="scoreChange"></span>

`scoreChange (delta)`

[score.t](../file/score.t.html)\[[296](../source/score.t.html#296)\]

<div class="desc">

score change - notification other than the first time

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
