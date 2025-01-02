---
layout: docs
---
<span class="title">Goal</span><span class="type">class</span>

[hintsys.t](../file/hintsys.t.html)\[[255](../source/hintsys.t.html#255)\]

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

`class `**`Goal`**` :   `[`MenuTopicItem`](../object/MenuTopicItem.html) [`HintMenuObject`](../object/HintMenuObject.html) [`HintOpener`](../object/HintOpener.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Goal`**  
[`MenuTopicItem`](../object/MenuTopicItem.html)  
[`MenuItem`](../object/MenuItem.html)  
[`MenuObject`](../object/MenuObject.html)  
`                                 object`  
[`HintMenuObject`](../object/HintMenuObject.html)  
`                 object`  
[`HintOpener`](../object/HintOpener.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`goalFullyDisplayed`](#goalFullyDisplayed) [`goalState`](#goalState) [`isActiveInMenu`](#isActiveInMenu) [`location`](#location) [`menuContents`](#menuContents) [`title`](#title)

Inherited from `MenuTopicItem` :  
[`chunkSize`](../object/MenuTopicItem.html#chunkSize) [`heading`](../object/MenuTopicItem.html#heading) [`lastDisplayed`](../object/MenuTopicItem.html#lastDisplayed) [`menuTopicListEnd`](../object/MenuTopicItem.html#menuTopicListEnd) [`nextMenuTopicLink`](../object/MenuTopicItem.html#nextMenuTopicLink)

Inherited from `MenuItem` :  
[`bgcolor`](../object/MenuItem.html#bgcolor) [`curKeyList`](../object/MenuItem.html#curKeyList) [`curMenu`](../object/MenuItem.html#curMenu) [`fgcolor`](../object/MenuItem.html#fgcolor) [`fullScreenMode`](../object/MenuItem.html#fullScreenMode) [`indent`](../object/MenuItem.html#indent) [`isOpen`](../object/MenuItem.html#isOpen) [`keyList`](../object/MenuItem.html#keyList) [`prevMenuLink`](../object/MenuItem.html#prevMenuLink) [`topbarbg`](../object/MenuItem.html#topbarbg) [`topbarfg`](../object/MenuItem.html#topbarfg) [`topMenu`](../object/MenuItem.html#topMenu)

Inherited from `MenuObject` :  
[`contents`](../object/MenuObject.html#contents) [`menuOrder`](../object/MenuObject.html#menuOrder)

Inherited from `HintMenuObject` :  
[`topicOrder`](../object/HintMenuObject.html#topicOrder)

Inherited from `HintOpener` :  
[`closeWhen`](../object/HintOpener.html#closeWhen) [`closeWhenAchieved`](../object/HintOpener.html#closeWhenAchieved) [`closeWhenExamined`](../object/HintOpener.html#closeWhenExamined) [`closeWhenKnown`](../object/HintOpener.html#closeWhenKnown) [`closeWhenMoved`](../object/HintOpener.html#closeWhenMoved) [`closeWhenRevealed`](../object/HintOpener.html#closeWhenRevealed) [`closeWhenSeen`](../object/HintOpener.html#closeWhenSeen) [`closeWhenTrue`](../object/HintOpener.html#closeWhenTrue) [`openWhen`](../object/HintOpener.html#openWhen) [`openWhenAchieved`](../object/HintOpener.html#openWhenAchieved) [`openWhenExamined`](../object/HintOpener.html#openWhenExamined) [`openWhenKnown`](../object/HintOpener.html#openWhenKnown) [`openWhenMoved`](../object/HintOpener.html#openWhenMoved) [`openWhenRevealed`](../object/HintOpener.html#openWhenRevealed) [`openWhenSeen`](../object/HintOpener.html#openWhenSeen) [`openWhenTrue`](../object/HintOpener.html#openWhenTrue)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`displaySubItem`](#displaySubItem) [`updateContents`](#updateContents)

Inherited from `MenuTopicItem` :  
[`getNextTopicXML`](../object/MenuTopicItem.html#getNextTopicXML) [`getTopicXML`](../object/MenuTopicItem.html#getTopicXML) [`getXML`](../object/MenuTopicItem.html#getXML) [`redrawWinHtml`](../object/MenuTopicItem.html#redrawWinHtml) [`showMenuHtml`](../object/MenuTopicItem.html#showMenuHtml) [`showMenuText`](../object/MenuTopicItem.html#showMenuText)

Inherited from `MenuItem` :  
[`display`](../object/MenuItem.html#display) [`enterSubMenu`](../object/MenuItem.html#enterSubMenu) [`formatXML`](../object/MenuItem.html#formatXML) [`getChildIndex`](../object/MenuItem.html#getChildIndex) [`getKeysXML`](../object/MenuItem.html#getKeysXML) [`getNextMenu`](../object/MenuItem.html#getNextMenu) [`getPrevMenu`](../object/MenuItem.html#getPrevMenu) [`refreshTopMenuBanner`](../object/MenuItem.html#refreshTopMenuBanner) [`removeStatusLine`](../object/MenuItem.html#removeStatusLine) [`removeTopMenuBanner`](../object/MenuItem.html#removeTopMenuBanner) [`showMenu`](../object/MenuItem.html#showMenu) [`showTopMenuBanner`](../object/MenuItem.html#showTopMenuBanner)

Inherited from `MenuObject` :  
[`addToContents`](../object/MenuObject.html#addToContents) [`compareForMenuSort`](../object/MenuObject.html#compareForMenuSort) [`execute`](../object/MenuObject.html#execute) [`initializeContents`](../object/MenuObject.html#initializeContents) [`initializeLocation`](../object/MenuObject.html#initializeLocation)

Inherited from `HintMenuObject` :  
[`compareForTopicSort`](../object/HintMenuObject.html#compareForTopicSort)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="goalFullyDisplayed"></span>

`goalFullyDisplayed`

[hintsys.t](../file/hintsys.t.html)\[[303](../source/hintsys.t.html#303)\]



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



<span id="goalState"></span>

`goalState`

[hintsys.t](../file/hintsys.t.html)\[[380](../source/hintsys.t.html#380)\]



This goal's current state. We'll start off undiscovered. When a goal
should be open from the very start of the game, this should be
overridden and set to OpenGoal.



<span id="isActiveInMenu"></span>

`isActiveInMenu`

[hintsys.t](../file/hintsys.t.html)\[[373](../source/hintsys.t.html#373)\]



we're active in our parent menu if our goal state is Open



<span id="location"></span>

`location`

[hintsys.t](../file/hintsys.t.html)\[[270](../source/hintsys.t.html#270)\]



Our parent menu - this is usually a HintMenu object. In very simple hint
systems, this could simply be a top-level hint menu container; more
typically, the hint system will be structured into a menu tree that
organizes the hint topics into several different submenus, for easier
navigatino.



<span id="menuContents"></span>

`menuContents`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[284](../source/hintsys.t.html#284)\]



The list of hints for this topic. This should be ordered from most
general to most specific; we offer the hints in the order they appear in
this list, so the earlier hints should give away as little as possible,
while the later hints should get progressively closer to just outright
giving away the answer.

Each entry in the list can be a simple (single-quoted) string, or it can
be a Hint object. In most cases, a string will do. A Hint object is only
needed when displaying the hint has some side effect, such as opening a
new Goal.



<span id="title"></span>

`title`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[261](../source/hintsys.t.html#261)\]



The topic question associated with the goal. The hint system shows a
list of the topics for the goals that are currently open, so that the
player can decide what area they want help on.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="displaySubItem"></span>

`displaySubItem (idx, lastBeforeInput, eol)`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[362](../source/hintsys.t.html#362)\]



display a sub-item, keeping track of when we've shown them all



<span id="updateContents"></span>

`updateContents ( )`<span class="rem">OVERRIDDEN</span>

[hintsys.t](../file/hintsys.t.html)\[[331](../source/hintsys.t.html#331)\]



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





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


