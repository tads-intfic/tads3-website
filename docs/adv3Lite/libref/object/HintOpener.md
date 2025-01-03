---
layout: docs
---
<span class="title">HintOpener</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[32](../source/hintsys.t.html#32)\]

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



HintOpener provides some properties common to Goal and ExtraHint, in
particuar those relating to opening and closing Goals and ExtraHints.

`class `**`HintOpener`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`HintOpener`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`HintOpener`**  
[`ExtraHint`](../object/ExtraHint.html)  
[`Goal`](../object/Goal.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`closeWhen`](#closeWhen) [`closeWhenAchieved`](#closeWhenAchieved) [`closeWhenExamined`](#closeWhenExamined) [`closeWhenKnown`](#closeWhenKnown) [`closeWhenMoved`](#closeWhenMoved) [`closeWhenRevealed`](#closeWhenRevealed) [`closeWhenSeen`](#closeWhenSeen) [`closeWhenTrue`](#closeWhenTrue) [`openWhen`](#openWhen) [`openWhenAchieved`](#openWhenAchieved) [`openWhenExamined`](#openWhenExamined) [`openWhenKnown`](#openWhenKnown) [`openWhenMoved`](#openWhenMoved) [`openWhenRevealed`](#openWhenRevealed) [`openWhenSeen`](#openWhenSeen) [`openWhenTrue`](#openWhenTrue)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="closeWhen"></span>

`closeWhen`

[hintsys.t](../file/hintsys.t.html)\[[164](../source/hintsys.t.html#164)\]



Determine if there's any condition that should close this goal. We'll
check closeWhenSeen, closeWhenDescribed, and all of the other
closeWhenXxx conditions; if any of these return true, then we'll return
true.



<span id="closeWhenAchieved"></span>

`closeWhenAchieved`

[hintsys.t](../file/hintsys.t.html)\[[95](../source/hintsys.t.html#95)\]



An optional Achievement object that closes this goal. Once the
achievement is completed, this goal's state will automatically be set to
Closed. This makes it easy to associate the goal with a puzzle: once the
puzzle is solved, there's no need to show hints for the goal any more.



<span id="closeWhenExamined"></span>

`closeWhenExamined`

[hintsys.t](../file/hintsys.t.html)\[[59](../source/hintsys.t.html#59)\]



close the goal when the given object is described



<span id="closeWhenKnown"></span>

`closeWhenKnown`

[hintsys.t](../file/hintsys.t.html)\[[107](../source/hintsys.t.html#107)\]



an optional Topic or Thing that closes this goal when known



<span id="closeWhenMoved"></span>

`closeWhenMoved`

[hintsys.t](../file/hintsys.t.html)\[[76](../source/hintsys.t.html#76)\]



An optional object that, when moved, closes this goal. Many goals will
be things like "how do I find the X?", in which case it's nice to close
the goal when the X is found.



<span id="closeWhenRevealed"></span>

`closeWhenRevealed`

[hintsys.t](../file/hintsys.t.html)\[[117](../source/hintsys.t.html#117)\]



an optional \<.reveal\> tag that closes this goal when revealed



<span id="closeWhenSeen"></span>

`closeWhenSeen`

[hintsys.t](../file/hintsys.t.html)\[[50](../source/hintsys.t.html#50)\]



An option object that, when seen by the player character, closes this
goal. Many goals will be things like "how do I find the X?", in which
case it's nice to close the goal when the X is found.



<span id="closeWhenTrue"></span>

`closeWhenTrue`

[hintsys.t](../file/hintsys.t.html)\[[131](../source/hintsys.t.html#131)\]



an optional general-purpose check that closes the goal



<span id="openWhen"></span>

`openWhen`

[hintsys.t](../file/hintsys.t.html)\[[149](../source/hintsys.t.html#149)\]



Determine if there's any condition that should open this goal. This
checks openWhenSeen, openWhenDescribed, and all of the other openWhenXxx
conditions; if any of these return true, then we'll return true.

Note that this should generally NOT be overridden in individual
instances; normally, instances would define openWhenTrue instead.
However, some games might find that they use the same special condition
over and over in many goals, often enough to warrant adding a new
openWhenXxx property to Goal. In these cases, you can use 'modify Goal'
to override openWhen to add the new condition: simply define openWhen as
(inherited \|\| newCondition), where 'newCondition' is the new special
condition you want to add.



<span id="openWhenAchieved"></span>

`openWhenAchieved`

[hintsys.t](../file/hintsys.t.html)\[[86](../source/hintsys.t.html#86)\]



An optional Achievement object that opens this goal. This goal will be
opened automatically once the goal is achieved, if the goal was
previously undiscovered. This makes it easy to set up a hint topic that
becomes available after a particular puzzle is solved, which is useful
when a new puzzle only becomes known to the player after a gating puzzle
has been solved.



<span id="openWhenExamined"></span>

`openWhenExamined`

[hintsys.t](../file/hintsys.t.html)\[[56](../source/hintsys.t.html#56)\]



this is like openWhenSeen, but opens the topic when the given object is
described (with EXAMINE)



<span id="openWhenKnown"></span>

`openWhenKnown`

[hintsys.t](../file/hintsys.t.html)\[[104](../source/hintsys.t.html#104)\]



An optional Topic or Thing that opens this goal when the object becomes
"known" to the player character. This will open the goal as soon as
gPlayerChar.knowsAbout(openWhenKnown) returns true. This makes it easy
to open a goal as soon as the player comes across some information in
the game.



<span id="openWhenMoved"></span>

`openWhenMoved`

[hintsys.t](../file/hintsys.t.html)\[[69](../source/hintsys.t.html#69)\]



An optional object that, when moved, opens this goal. It's often
convenient to declare a goal open as soon as the player enters a
particular area or has encountered a particular object. For such cases,
simply set this property to the object that opens the goal, and we'll
automatically mark the goal as Open the next time the player asks for a
hint after seeing the referenced object.



<span id="openWhenRevealed"></span>

`openWhenRevealed`

[hintsys.t](../file/hintsys.t.html)\[[114](../source/hintsys.t.html#114)\]



An optional \<.reveal\> tag name that opens this goal. If this is set to
a non-nil string, we'll automatically open this goal when the tag has
been revealed via \<.reveal\> (or gReveal()).



<span id="openWhenSeen"></span>

`openWhenSeen`

[hintsys.t](../file/hintsys.t.html)\[[42](../source/hintsys.t.html#42)\]



An optional object that, when seen by the player character, opens this
goal. It's often convenient to declare a goal open as soon as the player
enters a particular area or has encountered a particular object. For
such cases, simply set this property to the room or object that opens
the goal, and we'll automatically mark the goal as Open the next time
the player asks for a hint after seeing the referenced object.



<span id="openWhenTrue"></span>

`openWhenTrue`

[hintsys.t](../file/hintsys.t.html)\[[128](../source/hintsys.t.html#128)\]



An optional arbitrary check that opens the goal. If this returns true,
we'll open the goal. This check is made in addition to the other checks
(openWhenSeen, openWhenDescribed, etc). This can be used for any custom
check that doesn't fit into one of the standard openWhenXxx properties.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


