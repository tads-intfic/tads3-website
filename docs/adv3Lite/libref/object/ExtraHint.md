---
layout: docs
---
<span class="title">ExtraHint</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[761](../source/hintsys.t.html#761)\]

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



FRAMEWORK FOR THE EXTRA HINTS MECHANISM

The ExtraHint class provides a framework for providing players
(especially novice players) with extra hints, nudges, and tips during
the course of play. When it is activated (either at player request, or
because the player appears to be having trouble), a hint or tip can be
displayed at the end of the turn in response to what the player has just
typed, or some condition that has just become true, or which became true
a certain number of turns ago.

It is also possible to define conditions (typically the achievement of
some goal) that render a particular ExtraHint otiose, so that it is not
displayed if it is no longer needed.

We simply need to define objects of the ExtraHint class to encapsulate
the extra hints we want displayed.

A series of ExtraHints can be defined using a template if desired.

The first (optional) element in the template (e.g. -\>doorAchievement)
is the achievement we check to see if this ExtraHint has become
redundant. For example, if the player has already taken the flyer,
flyer.achievement has been achieved, and so we don't need this first
ExtraHint.

The second (optional) element in the template (e.g. +1) is the
hintDelay; this is number of turns that should elapse between the
openWhen condition (see below) becoming true and the hint being offered.
This optionally allows the player a few turns to work on the solution
before being offered a gratuitous hint.

The third element in the template is simply the text of the extra hint
to display.

The openWhen property holds the condition that must be true before this
ExtraHint is displayed. In the case of the first ExtraHint, the
condition is that the player char has visited the location that contains
the telephone pole.

`class `**`ExtraHint`**` :   `[`HintOpener`](../object/HintOpener.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExtraHint`**  
[`HintOpener`](../object/HintOpener.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hintDelay`](#hintDelay) [`hintDone`](#hintDone) [`hintText`](#hintText) [`location`](#location) [`openedWhen`](#openedWhen) [`priority`](#priority)

Inherited from `HintOpener` :  
[`closeWhen`](../object/HintOpener.html#closeWhen) [`closeWhenAchieved`](../object/HintOpener.html#closeWhenAchieved) [`closeWhenExamined`](../object/HintOpener.html#closeWhenExamined) [`closeWhenKnown`](../object/HintOpener.html#closeWhenKnown) [`closeWhenMoved`](../object/HintOpener.html#closeWhenMoved) [`closeWhenRevealed`](../object/HintOpener.html#closeWhenRevealed) [`closeWhenSeen`](../object/HintOpener.html#closeWhenSeen) [`closeWhenTrue`](../object/HintOpener.html#closeWhenTrue) [`openWhen`](../object/HintOpener.html#openWhen) [`openWhenAchieved`](../object/HintOpener.html#openWhenAchieved) [`openWhenExamined`](../object/HintOpener.html#openWhenExamined) [`openWhenKnown`](../object/HintOpener.html#openWhenKnown) [`openWhenMoved`](../object/HintOpener.html#openWhenMoved) [`openWhenRevealed`](../object/HintOpener.html#openWhenRevealed) [`openWhenSeen`](../object/HintOpener.html#openWhenSeen) [`openWhenTrue`](../object/HintOpener.html#openWhenTrue)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkClose`](#checkClose) [`doHint`](#doHint) [`setDelay`](#setDelay) [`showHint`](#showHint)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hintDelay"></span>

`hintDelay`

[hintsys.t](../file/hintsys.t.html)\[[778](../source/hintsys.t.html#778)\]



The number of turns between openWhen becoming true and this hint being
displayed.



<span id="hintDone"></span>

`hintDone`

[hintsys.t](../file/hintsys.t.html)\[[856](../source/hintsys.t.html#856)\]



For internal use only: Flag; have we done with this hint (because we've
displayed it)?



<span id="hintText"></span>

`hintText`

[hintsys.t](../file/hintsys.t.html)\[[814](../source/hintsys.t.html#814)\]



The text to display in relation to this ExtraHint



<span id="location"></span>

`location`

[hintsys.t](../file/hintsys.t.html)\[[762](../source/hintsys.t.html#762)\]



*no description available*



<span id="openedWhen"></span>

`openedWhen`

[hintsys.t](../file/hintsys.t.html)\[[859](../source/hintsys.t.html#859)\]



The turn on which this ExtraHint was first opened



<span id="priority"></span>

`priority`

[hintsys.t](../file/hintsys.t.html)\[[865](../source/hintsys.t.html#865)\]



Our priority. When two ExtraHints become available on the same term, the
one with the higher priority will be displayed.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkClose"></span>

`checkClose ( )`

[hintsys.t](../file/hintsys.t.html)\[[768](../source/hintsys.t.html#768)\]



The condition under which we close this ExtraHint. By default we close
it if either hintDone becomes true or our closeWhen condition is true.



<span id="doHint"></span>

`doHint ( )`

[hintsys.t](../file/hintsys.t.html)\[[791](../source/hintsys.t.html#791)\]



If the closeWhen condition is true we remove this ExtraHint from the
list of potentially active ExtraHints and return nil to tell the caller
that this ExtraHint was not displayed. Otherwise we check if this
ExtraHint (a) meets its openWhen conditions to be displayed and (b) is
due to be displayed because hintDelay turns have passed since it was
open. If both conditions are met we show our text and return true to
tell our caller that an ExtraHint has been displayed (important since we
display at most one ExtraHint per turn). Otherwise we return nil.



<span id="setDelay"></span>

`setDelay (val)`

[hintsys.t](../file/hintsys.t.html)\[[846](../source/hintsys.t.html#846)\]



Set the number of turns that must elapse before we display this hint



<span id="showHint"></span>

`showHint ( )`

[hintsys.t](../file/hintsys.t.html)\[[817](../source/hintsys.t.html#817)\]



Show the text related to this ExtraHint
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


