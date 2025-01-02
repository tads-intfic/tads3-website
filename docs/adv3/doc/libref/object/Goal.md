---
layout: docs
---
<span class="title">Goal</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[105](../source/hintsys.t.html#105)\]

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

A Goal represents an open task: something that the player is trying to
achieve. A Goal is an abstract object, not part of the simulated world
of the game.

Each goal is associated with a hint topic (usually shown as a question,
such as "How do I get past the guard?") and an ordered list of hints.
The hints are usually ordered from most general to most specific. The
idea is to let the player control how big a hint they get; we start with
a small nudge and work towards giving away the puzzle completely, so the
player can stop as soon as they see something that helps.

At any given time, a goal can be in one of three states:

\- Open: this means that the player is (or ought to be) aware of the
goal, but the goal hasn't yet been achieved. Determining this awareness
is up to the goal. In some cases, a goal is opened as soon as the player
has seen a particular object or entered a particular area; in other
cases, a goal might be opened by a scripted event, such as a speech by
an NPC telling the player they have to accomplish something. A goal
could even be opened by viewing a hint for another goal, because that
hint could explain a gating goal that the player might not otherwise
been able to know about.

\- Undiscovered: this means that the player doesn't yet have any reason
to know about the goal.

\- Closed: this means that the player has accomplished the goal, or in
some cases that the goal has become irrelevant.

The hint system only shows goals that are Open. We don't show Closed
goals because the player presumably has no need of them any longer; we
don't show Undiscovered goals to avoid giving away developments later in
the game before they become relevant.

`class `**`Goal`**` :   `[`MenuTopicItem`](../object/MenuTopicItem.html)[`HintMenuObject`](../object/HintMenuObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Goal`**  
[`MenuTopicItem`](../object/MenuTopicItem.html)  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                                 object`  
[`HintMenuObject`](../object/HintMenuObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`closeWhen`](#closeWhen)[`closeWhenAchieved`](#closeWhenAchieved)[`closeWhenDescribed`](#closeWhenDescribed)[`closeWhenKnown`](#closeWhenKnown)[`closeWhenRevealed`](#closeWhenRevealed)[`closeWhenSeen`](#closeWhenSeen)[`closeWhenTrue`](#closeWhenTrue)[`goalFullyDisplayed`](#goalFullyDisplayed)[`goalState`](#goalState)[`isActiveInMenu`](#isActiveInMenu)[`location`](#location)[`menuContents`](#menuContents)[`openWhen`](#openWhen)[`openWhenAchieved`](#openWhenAchieved)[`openWhenDescribed`](#openWhenDescribed)[`openWhenKnown`](#openWhenKnown)[`openWhenRevealed`](#openWhenRevealed)[`openWhenSeen`](#openWhenSeen)[`openWhenTrue`](#openWhenTrue)[`title`](#title)

Inherited from `MenuTopicItem` :  
[`chunkSize`](../object/MenuTopicItem.html#chunkSize)[`heading`](../object/MenuTopicItem.html#heading)[`lastDisplayed`](../object/MenuTopicItem.html#lastDisplayed)[`menuTopicListEnd`](../object/MenuTopicItem.html#menuTopicListEnd)[`nextMenuTopicLink`](../object/MenuTopicItem.html#nextMenuTopicLink)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor)[`curKeyList`](../object/MenuItem.html#curKeyList)[`curMenu`](../object/MenuItem.html#curMenu)[`fgcolor`](../object/MenuItem.html#fgcolor)[`fullScreenMode`](../object/MenuItem.html#fullScreenMode)[`indent`](../object/MenuItem.html#indent)[`isOpen`](../object/MenuItem.html#isOpen)[`keyList`](../object/MenuItem.html#keyList)[`prevMenuLink`](../object/MenuItem.html#prevMenuLink)[`topbarbg`](../object/MenuItem.html#topbarbg)[`topbarfg`](../object/MenuItem.html#topbarfg)[`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents)[`menuOrder`](../object/MenuObject.html#menuOrder)

Inherited from `HintMenuObject` :  
[`topicOrder`](../object/HintMenuObject.html#topicOrder)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`displaySubItem`](#displaySubItem)[`updateContents`](#updateContents)

Inherited from `MenuTopicItem` :  
[`getNextTopicXML`](../object/MenuTopicItem.html#getNextTopicXML)[`getTopicXML`](../object/MenuTopicItem.html#getTopicXML)[`getXML`](../object/MenuTopicItem.html#getXML)[`redrawWinHtml`](../object/MenuTopicItem.html#redrawWinHtml)[`showMenuHtml`](../object/MenuTopicItem.html#showMenuHtml)[`showMenuText`](../object/MenuTopicItem.html#showMenuText)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display)[`enterSubMenu`](../object/MenuItem.html#enterSubMenu)[`formatXML`](../object/MenuItem.html#formatXML)[`getChildIndex`](../object/MenuItem.html#getChildIndex)[`getKeysXML`](../object/MenuItem.html#getKeysXML)[`getNextMenu`](../object/MenuItem.html#getNextMenu)[`getPrevMenu`](../object/MenuItem.html#getPrevMenu)[`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner)[`removeStatusLine`](../object/MenuItem.html#removeStatusLine)[`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner)[`showMenu`](../object/MenuItem.html#showMenu)[`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)

Inherited from `MenuObject` :  
[`addToContents`](../object/MenuObject.html#addToContents)[`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort)[`execute`](../object/MenuObject.html#execute)[`initializeContents`](../object/MenuObject.html#initializeContents)[`initializeLocation`](../object/MenuObject.html#initializeLocation)

Inherited from `HintMenuObject` :  
[`compareForTopicSort`](../object/HintMenuObject.html#compareForTopicSort)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="closeWhen"></span>

`closeWhen`

[hintsys.t](../file/hintsys.t.html)\[[247](../source/hintsys.t.html#247)\]

<div class="desc">

Determine if there's any condition that should close this goal. We'll
check closeWhenSeen, closeWhenDescribed, and all of the other
closeWhenXxx conditions; if any of these return true, then we'll return
true.

</div>

<span id="closeWhenAchieved"></span>

`closeWhenAchieved`

[hintsys.t](../file/hintsys.t.html)\[[181](../source/hintsys.t.html#181)\]

<div class="desc">

An optional Achievement object that closes this goal. Once the
achievement is completed, this goal's state will automatically be set to
Closed. This makes it easy to associate the goal with a puzzle: once the
puzzle is solved, there's no need to show hints for the goal any more.

</div>

<span id="closeWhenDescribed"></span>

`closeWhenDescribed`

[hintsys.t](../file/hintsys.t.html)\[[162](../source/hintsys.t.html#162)\]

<div class="desc">

close the goal when the given object is described

</div>

<span id="closeWhenKnown"></span>

`closeWhenKnown`

[hintsys.t](../file/hintsys.t.html)\[[193](../source/hintsys.t.html#193)\]

<div class="desc">

an optional Topic or Thing that closes this goal when known

</div>

<span id="closeWhenRevealed"></span>

`closeWhenRevealed`

[hintsys.t](../file/hintsys.t.html)\[[203](../source/hintsys.t.html#203)\]

<div class="desc">

an optional \<.reveal\> tag that closes this goal when revealed

</div>

<span id="closeWhenSeen"></span>

`closeWhenSeen`

[hintsys.t](../file/hintsys.t.html)\[[153](../source/hintsys.t.html#153)\]

<div class="desc">

An option object that, when seen by the player character, closes this
goal. Many goals will be things like "how do I find the X?", in which
case it's nice to close the goal when the X is found.

</div>

<span id="closeWhenTrue"></span>

`closeWhenTrue`

[hintsys.t](../file/hintsys.t.html)\[[215](../source/hintsys.t.html#215)\]

<div class="desc">

an optional general-purpose check that closes the goal

</div>

<span id="goalFullyDisplayed"></span>

`goalFullyDisplayed`

[hintsys.t](../file/hintsys.t.html)\[[271](../source/hintsys.t.html#271)\]

<div class="desc">

Has this goal been fully displayed? The hint system automatically sets
this to true when the last item in our hint list is displayed.

You can use this, for example, to automatically remove the hint from the
hint menu after it's been fully displayed. (You might want to do this
with a hint for a red herring, for example. After the player has learned
that the red herring is a red herring, they probably won't need to see
that particular line of hints again, so you can remove the clutter in
the menu by closing the hint after it's been fully displayed.) To do
this, simply add this to the Goal object:

  
closeWhenTrue = (goalFullyDisplayed)

</div>

<span id="goalState"></span>

`goalState`

[hintsys.t](../file/hintsys.t.html)\[[348](../source/hintsys.t.html#348)\]

<div class="desc">

This goal's current state. We'll start off undiscovered. When a goal
should be open from the very start of the game, this should be
overridden and set to OpenGoal.

</div>

<span id="isActiveInMenu"></span>

`isActiveInMenu`

[hintsys.t](../file/hintsys.t.html)\[[341](../source/hintsys.t.html#341)\]

<div class="desc">

we're active in our parent menu if our goal state is Open

</div>

<span id="location"></span>

`location`

[hintsys.t](../file/hintsys.t.html)\[[120](../source/hintsys.t.html#120)\]

<div class="desc">

Our parent menu - this is usually a HintMenu object. In very simple hint
systems, this could simply be a top-level hint menu container; more
typically, the hint system will be structured into a menu tree that
organizes the hint topics into several different submenus, for easier
navigatino.

</div>

<span id="menuContents"></span>

`menuContents`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[134](../source/hintsys.t.html#134)\]

<div class="desc">

The list of hints for this topic. This should be ordered from most
general to most specific; we offer the hints in the order they appear in
this list, so the earlier hints should give away as little as possible,
while the later hints should get progressively closer to just outright
giving away the answer.

Each entry in the list can be a simple (single-quoted) string, or it can
be a Hint object. In most cases, a string will do. A Hint object is only
needed when displaying the hint has some side effect, such as opening a
new Goal.

</div>

<span id="openWhen"></span>

`openWhen`

[hintsys.t](../file/hintsys.t.html)\[[233](../source/hintsys.t.html#233)\]

<div class="desc">

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

</div>

<span id="openWhenAchieved"></span>

`openWhenAchieved`

[hintsys.t](../file/hintsys.t.html)\[[172](../source/hintsys.t.html#172)\]

<div class="desc">

An optional Achievement object that opens this goal. This goal will be
opened automatically once the goal is achieved, if the goal was
previously undiscovered. This makes it easy to set up a hint topic that
becomes available after a particular puzzle is solved, which is useful
when a new puzzle only becomes known to the player after a gating puzzle
has been solved.

</div>

<span id="openWhenDescribed"></span>

`openWhenDescribed`

[hintsys.t](../file/hintsys.t.html)\[[159](../source/hintsys.t.html#159)\]

<div class="desc">

this is like openWhenSeen, but opens the topic when the given object is
described (with EXAMINE)

</div>

<span id="openWhenKnown"></span>

`openWhenKnown`

[hintsys.t](../file/hintsys.t.html)\[[190](../source/hintsys.t.html#190)\]

<div class="desc">

An optional Topic or Thing that opens this goal when the object becomes
"known" to the player character. This will open the goal as soon as
gPlayerChar.knowsAbout(openWhenKnown) returns true. This makes it easy
to open a goal as soon as the player comes across some information in
the game.

</div>

<span id="openWhenRevealed"></span>

`openWhenRevealed`

[hintsys.t](../file/hintsys.t.html)\[[200](../source/hintsys.t.html#200)\]

<div class="desc">

An optional \<.reveal\> tag name that opens this goal. If this is set to
a non-nil string, we'll automatically open this goal when the tag has
been revealed via \<.reveal\> (or gReveal()).

</div>

<span id="openWhenSeen"></span>

`openWhenSeen`

[hintsys.t](../file/hintsys.t.html)\[[145](../source/hintsys.t.html#145)\]

<div class="desc">

An optional object that, when seen by the player character, opens this
goal. It's often convenient to declare a goal open as soon as the player
enters a particular area or has encountered a particular object. For
such cases, simply set this property to the room or object that opens
the goal, and we'll automatically mark the goal as Open the next time
the player asks for a hint after seeing the referenced object.

</div>

<span id="openWhenTrue"></span>

`openWhenTrue`

[hintsys.t](../file/hintsys.t.html)\[[212](../source/hintsys.t.html#212)\]

<div class="desc">

An optional arbitrary check that opens the goal. If this returns true,
we'll open the goal. This check is made in addition to the other checks
(openWhenSeen, openWhenDescribed, etc). This can be used for any custom
check that doesn't fit into one of the standard openWhenXxx properties.

</div>

<span id="title"></span>

`title`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[111](../source/hintsys.t.html#111)\]

<div class="desc">

The topic question associated with the goal. The hint system shows a
list of the topics for the goals that are currently open, so that the
player can decide what area they want help on.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="displaySubItem"></span>

`displaySubItem (idx, lastBeforeInput, eol)`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[330](../source/hintsys.t.html#330)\]

<div class="desc">

display a sub-item, keeping track of when we've shown them all

</div>

<span id="updateContents"></span>

`updateContents ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[299](../source/hintsys.t.html#299)\]

<div class="desc">

Check our menu state and update it if necessary. Each time our parent
menu is about to display, it'll call this on its sub-items to let them
update their current states. This method can promote the state to Open
or Closed if the necessary conditions for the goal have been met.

Sometimes it's more convenient to set a goal's state explicitly from a
scripted event; for example, if the goal is associated with a scored
achievement, awarding the goal's achievement will set the goal's state
to Closed. In these cases, there's no need to use this method, since
you're managing the goal's state explicitly. The purpose of this method
is to make it easy to catch goal state changes that can be reached by
several different routes; in these cases, you can just write a single
test for those conditions in this method rather than trying to catch
every possible route to the new conditions and writing code in all of
those.

The default implementation looks at our openWhenSeen property. If this
property is not nil, then we'll check the object referenced in this
property; if our current state is Undiscovered, and the object
referenced by openWhenSeen has been seen by the player character, then
we'll change our state to Open. We'll make the corresponding check for
openWhenDescribed.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
