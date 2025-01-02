---
layout: docs
---
<span class="title">EventListItem</span><span class="type">class</span>

[eventListItem.t](../file/eventListItem.t.html)\[[21](../source/eventListItem.t.html#21)\]

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

An EventListItem is an object that can be used within an EventList but
is only used when certain conditions are met (its isReady property
evaluates to true, the game clock time is at or after any next firing
time we have defined, and it hasn't already been used for any maximum
number of times we care to define).

EventListItems can be added to a regular EventList object by locating
them within that object using the + notation. \[EVENTLISTITEM
EXTENSION\]

`class `**`EventListItem`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`EventListItem`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`EventListItem`**  
[`ELI`](../object/ELI.html)  
[`ELI1`](../object/ELI1.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`canRemoveWhenDone`](#canRemoveWhenDone)[`doneWhen`](#doneWhen)[`fireCt`](#fireCt)[`isDone`](#isDone)[`isReady`](#isReady)[`lastClock`](#lastClock)[`maxFireCt`](#maxFireCt)[`minInterval`](#minInterval)[`missedTurn`](#missedTurn)[`myListObj`](#myListObj)[`readyTime`](#readyTime)[`whichList`](#whichList)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`_invokeItem`](#_invokeItem)[`addToList`](#addToList)[`canFire`](#canFire)[`doScript`](#doScript)[`execute`](#execute)[`fallBack`](#fallBack)[`fallBackResponse`](#fallBackResponse)[`invokeItem`](#invokeItem)[`setDelay`](#setDelay)[`setDone`](#setDone)[`underused`](#underused)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="canRemoveWhenDone"></span>

`canRemoveWhenDone`

[eventListItem.t](../file/eventListItem.t.html)\[[194](../source/eventListItem.t.html#194)\]

<div class="desc">

Flag: can this EventListItem be removed from its eventList once isDone =
true? By default it can, but note that this flag only has any effect
when our EventList's resetEachCycle property is true. We might want to
set this to nil if isDone might become nil again on this EventListItem,
to avoid it being cleared out of its eventList.

</div>

<span id="doneWhen"></span>

`doneWhen`

[eventListItem.t](../file/eventListItem.t.html)\[[209](../source/eventListItem.t.html#209)\]

<div class="desc">

An alternative condition (which could be defined as a method) which, if
true, causes this EventListItem to be finished with (set to isDone =
true). Note that isDone will be set to try either if this EventListItem
exceeds its maaFireCt or if its doneWhen method/property evaluates to
true.

</div>

<span id="fireCt"></span>

`fireCt`

[eventListItem.t](../file/eventListItem.t.html)\[[186](../source/eventListItem.t.html#186)\]

<div class="desc">

The number of times this EventListItem has fired.

</div>

<span id="isDone"></span>

`isDone`

[eventListItem.t](../file/eventListItem.t.html)\[[177](../source/eventListItem.t.html#177)\]

<div class="desc">

Have we finished with this EventListItem?

</div>

<span id="isReady"></span>

`isReady`

[eventListItem.t](../file/eventListItem.t.html)\[[165](../source/eventListItem.t.html#165)\]

<div class="desc">

Is this EventListItem ready to fire? Note that this is addition to its
not being done and having reached its ready time.

</div>

<span id="lastClock"></span>

`lastClock`

[eventListItem.t](../file/eventListItem.t.html)\[[212](../source/eventListItem.t.html#212)\]

<div class="desc">

The last turn on which this EventListItem fired

</div>

<span id="maxFireCt"></span>

`maxFireCt`

[eventListItem.t](../file/eventListItem.t.html)\[[201](../source/eventListItem.t.html#201)\]

<div class="desc">

The maximum number of times we want this EventListItem to fire. The
default value of nil means that this EventListItem can fire an unlimited
unmber of times. For an EventListItem that fires only once, set
maxFireCt to 1 or use the ELI1 subclass.

</div>

<span id="minInterval"></span>

`minInterval`

[eventListItem.t](../file/eventListItem.t.html)\[[221](../source/eventListItem.t.html#221)\]

<div class="desc">

The minimum interval (in number of turns) between repeated occurrences
of this item.

</div>

<span id="missedTurn"></span>

`missedTurn`

[eventListItem.t](../file/eventListItem.t.html)\[[117](../source/eventListItem.t.html#117)\]

<div class="desc">

This first turn on which we came up in our EventList but were unable to
fire, or nil if we have either not missed or turn or fired on the
previous occasion we could.

</div>

<span id="myListObj"></span>

`myListObj`

[eventListItem.t](../file/eventListItem.t.html)\[[60](../source/eventListItem.t.html#60)\]

<div class="desc">

The EventList object to which we are to belong. If this is left at nil,
our location will be used.

</div>

<span id="readyTime"></span>

`readyTime`

[eventListItem.t](../file/eventListItem.t.html)\[[218](../source/eventListItem.t.html#218)\]

<div class="desc">

The turn count that must be reached before we're ready to fire. By
default this is 0, but game code can use this or set the setDelay()
method to set/reset it.

</div>

<span id="whichList"></span>

`whichList`

[eventListItem.t](../file/eventListItem.t.html)\[[54](../source/eventListItem.t.html#54)\]

<div class="desc">

we usually want to add objects to a ShuffledEventList's eventList
property, but items/subclasses could change this to be added to
firstEvents or some other alternate list within the EventList object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="_invokeItem"></span>

`_invokeItem ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[84](../source/eventListItem.t.html#84)\]

<div class="desc">

Otherwise, use our fallback routine.

</div>

<span id="addToList"></span>

`addToList (myListObj_, whichList_, =, &, eventList, minInterval_?)`

[eventListItem.t](../file/eventListItem.t.html)\[[270](../source/eventListItem.t.html#270)\]

<div class="desc">

Add this EventListItem to the whichList list of myListObj\_. If
specificied, whichList must be supplied as a property, and otherwise
defaults to &eventList. A minimium interval between firings of this
EventList item can optionally be specified in the minInterval\_
parameter, but there is no need to do this if this EventList already
defines its own minInterval or doesn't require one.

</div>

<span id="canFire"></span>

`canFire ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[171](../source/eventListItem.t.html#171)\]

<div class="desc">

Can this EventListItem item fire? By default it can if its isReady
condition is true and it is not already done (isDone != true) and the
turn count exceeds its ready time.

</div>

<span id="doScript"></span>

`doScript ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[66](../source/eventListItem.t.html#66)\]

<div class="desc">

When the event list to which we've been added gets to us, it will call
our doScript() method, so we use that to define what happens.

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[eventListItem.t](../file/eventListItem.t.html)\[[26](../source/eventListItem.t.html#26)\]

<div class="desc">

Add this EventListItem to the eventList of the EventList object with
which is is to be associated.

</div>

<span id="fallBack"></span>

`fallBack ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[124](../source/eventListItem.t.html#124)\]

<div class="desc">

The method that defines what this EventListItem does if it's invoked
when it's not ready to fire.

</div>

<span id="fallBackResponse"></span>

`fallBackResponse ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[158](../source/eventListItem.t.html#158)\]

<div class="desc">

The response to use if all else fails, that is if there we cannot fire
ourselves and there is no non-EventListItem (which could be used in our
place) in the eventList to which we belong. This could, for exmple,
display another message or it could just do nothing, which is the
default. We only need to supply something here if we belong to an
EventList that should display something every turn, for example as a
response to a DefaultTopic or else if we are or may be the final item in
a StopEventList.

</div>

<span id="invokeItem"></span>

`invokeItem ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[109](../source/eventListItem.t.html#109)\]

<div class="desc">

Here goes the code (or a double-quoted string) that carries out what we
do when we're invoked. Game code will need to define what should happen
here.

</div>

<span id="setDelay"></span>

`setDelay (turns)`

[eventListItem.t](../file/eventListItem.t.html)\[[228](../source/eventListItem.t.html#228)\]

<div class="desc">

Set the number of turns until this EventListItem can be used again. This
could, for example, be called from invokeItem() to set a minimum
interval before this EventListItem is repeated.

</div>

<span id="setDone"></span>

`setDone ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[180](../source/eventListItem.t.html#180)\]

<div class="desc">

Set this EventListItem as having been done

</div>

<span id="underused"></span>

`underused ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[252](../source/eventListItem.t.html#252)\]

<div class="desc">

Has this EventListItem been underused? By default it has if it hasn't
been used at all or it missed out the last time it was called by not
being ready, but game code can override if it wants to employ some other
condition, such as the number of times we've been used in relation to
other items in our listObj. The purpose of this is to allow
RandomFiringScripts to prioritize underused EventListItems once they
become ready to fire.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
