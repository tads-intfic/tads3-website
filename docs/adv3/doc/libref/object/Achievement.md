---
layout: docs
---
<span class="title">Achievement</span><span class="type">class</span>

[score.t](../file/score.t.html)\[[57](../source/score.t.html#57)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

An Achievement is an object used to award points in the score. For most
purposes, an achievement can be described simply by a string, but the
Achievement object provides more flexibility in describing combined
scores when a set of similar achievements are to be grouped.

There are two ways to use the scoring system.

1\. You can use a mix of string names and Achievement objects for
scoring items; each time you award a scoring item, you call the function
addToScore() to specify the achievement (by name or by Achievement
object) and the number of points to award. You can also call the method
addToScoreOnce() on an Achievement object to award the scoring item,
ensuring that the item is only awarded once in the entire game (saving
you the trouble of checking to see if the event that triggered the
scoring item has happened before already in the same game). If you do
this, you MUST set the property gameMain.maxScore to reflect the maximum
score possible in the game.

2\. You can use EXCLUSIVELY Achievement objects to represents scoring
items, and give each Achievement object a 'points' property indicating
the number of points it's worth. To award a scoring item, you call the
method awardPoints() on an Achievement object. If you use this style of
scoring, the library AUTOMATICALLY computes the gameMain.maxScore value,
by adding up the 'points' values of all of the Achievement objects in
the game. For this to work properly, you have to obey the following
rules:

  
- use ONLY Achievement objects (never strings) to award points;  
- set the 'points' property of each Achievement to its score;  
- define Achievement objects statically only (never use 'new' to  
create an Achievement dynamically)  
- if an Achievement can be awarded more than once, you must override  
its 'maxPoints' property to reflect the total number of points it  
will be worth when it is awarded the maximum number of times;  
- always award an Achievement through its awardPoints() or  
awardPointsOnce() method;  
- there exists at least one solution of the game in which every  
Achievement object is awarded

`class `**`Achievement`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Achievement`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`Achievement`**  
`         `[`SimpleAchievement`](../object/SimpleAchievement.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`desc`](#desc)`  `[`maxPoints`](#maxPoints)`  `[`points`](#points)`  `[`scoreCount`](#scoreCount)`  `[`totalPoints`](#totalPoints)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addToScoreOnce`](#addToScoreOnce)`  `[`awardPoints`](#awardPoints)`  `[`awardPointsOnce`](#awardPointsOnce)`  `[`listFullScoreItem`](#listFullScoreItem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="desc"></span>

`desc`

[score.t](../file/score.t.html)\[[97](../source/score.t.html#97)\]

<div class="desc">

Describe the achievement - this must display a string explaining the
reason the points associated with this achievement were awarded.

Note that this description can make use of the scoreCount information to
show different descriptions depending on how many times the item has
scored. For example, an achievement for finding various treasure items
might want to display "finding a treasure" if only one treasure was
found and "finding five treasures" if five were found.

In some cases, it might be desirable to keep track of additional custom
information, and use that information in generating the description. For
example, the game might keep a list of treasures found with the
achievement, adding to the list each time the achievement is scored, and
displaying the contents of the list when the description is shown.

</div>

<span id="maxPoints"></span>

`maxPoints`

[score.t](../file/score.t.html)\[[76](../source/score.t.html#76)\]

<div class="desc">

The MAXIMUM number of points this Achievement can award. This is by
default just our 'points' value, on the assumption that the achievement
is scored only once. The library uses this value during
pre-initialization to compute the maximum possible score in the game.

</div>

<span id="points"></span>

`points`

[score.t](../file/score.t.html)\[[67](../source/score.t.html#67)\]

<div class="desc">

The number of points this Achievement scores individually. By default,
we set this to nil. If you use the awardPoints() or awardPointsOnce()
methods, you MUST set this to a non-nil value.

If you set this to a non-nil value, the library will use it pre-compute
the maximum possible score in the game, saving you the trouble of
figuring out the maximum score by hand.

</div>

<span id="scoreCount"></span>

`scoreCount`

[score.t](../file/score.t.html)\[[114](../source/score.t.html#114)\]

<div class="desc">

The number of times the achievement has been awarded. Each time the
achievement is passed to addToScore(), this is incremented. Note that
this is distinct from the number of points.

</div>

<span id="totalPoints"></span>

`totalPoints`

[score.t](../file/score.t.html)\[[122](../source/score.t.html#122)\]

<div class="desc">

the number of points awarded for the achievement; if this achievement
has been accomplished multiple times, this reflects the aggregate number
of points awarded for all of the times it has been accomplished

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToScoreOnce"></span>

`addToScoreOnce (points)`

[score.t](../file/score.t.html)\[[134](../source/score.t.html#134)\]

<div class="desc">

Add this achievement to the score one time only, awarding the given
number of points. This can be used to score an achievement without
separately tracking whether or not the achievement has been accomplished
previously. If the achievement has already been scored before, this will
do nothing at all; otherwise, it'll score the achievement with the given
number of points. Returns true if we do award the points, nil if not
(because we've awarded them before).

</div>

<span id="awardPoints"></span>

`awardPoints ( )`

[score.t](../file/score.t.html)\[[156](../source/score.t.html#156)\]

<div class="desc">

Award this Achievement's score, using the score value specified in my
'points' property.

</div>

<span id="awardPointsOnce"></span>

`awardPointsOnce ( )`

[score.t](../file/score.t.html)\[[168](../source/score.t.html#168)\]

<div class="desc">

Award this Achievement's score, but ensure that we're never awarded more
than one time. If this Achievement has already been awarded, this does
nothing at all. Returns true if we do award the points, nil if not
(because we've awarded them before).

</div>

<span id="listFullScoreItem"></span>

`listFullScoreItem ( )`

[score.t](../file/score.t.html)\[[100](../source/score.t.html#100)\]

<div class="desc">

show myself in a full-score listing

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
