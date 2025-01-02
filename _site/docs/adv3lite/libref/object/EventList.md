<span class="title">EventList</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[149](../source/eventList.t.html#149)\],
[eventListItem.t](../file/eventListItem.t.html)\[[301](../source/eventListItem.t.html#301)\]

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

An "event list." This is a general-purpose type of script that lets you
define the scripted events separately from the Script object.

The script is driven by a list of values; each value represents one step
of the script. Each value can be a single-quoted string, in which case
the string is simply displayed; a function pointer, in which case the
function is invoked without arguments; another Script object, in which
case the object's doScript() method is invoked; a property pointer, in
which case the property of 'self' (the EventList object) is invoked with
no arguments; or nil, in which case nothing happens.

This base type of event list runs through the list once, in order, and
then simply stops doing anything once we pass the last event.

`class `**`EventList`**` :   `[`Script`](../object/Script.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`EventList`**  
`         `[`Script`](../object/Script.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`EventList`**  
`         `[`CyclicEventList`](../object/CyclicEventList.html)  
`         `[`ExternalEventList`](../object/ExternalEventList.html)  
`         `[`RandomEventList`](../object/RandomEventList.html)  
`         `[`ShuffledEventList`](../object/ShuffledEventList.html)  
`         `[`StopEventList`](../object/StopEventList.html)  
`         `[`SyncEventList`](../object/SyncEventList.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curScriptState`](#curScriptState)`  `[`eventList`](#eventList)`  `[`eventListLen`](#eventListLen)`  `[`resetEachCycle`](#resetEachCycle)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addItem`](#addItem)`  `[`advanceState`](#advanceState)`  `[`construct`](#construct)`  `[`doScript`](#doScript)`  `[`doScriptEvent`](#doScriptEvent)`  `[`resetList`](#resetList)`  `[`scriptDone`](#scriptDone)`  `

Inherited from `Script` :  
` `[`getScriptState`](../object/Script.html#getScriptState)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curScriptState"></span>

`curScriptState`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[166](../source/eventList.t.html#166)\]

<div class="desc">

by default, start at the first list element

</div>

<span id="eventList"></span>

`eventList`

[eventList.t](../file/eventList.t.html)\[[153](../source/eventList.t.html#153)\]

<div class="desc">

the list of events

</div>

<span id="eventListLen"></span>

`eventListLen`

[eventList.t](../file/eventList.t.html)\[[156](../source/eventList.t.html#156)\]

<div class="desc">

cached length of the event list

</div>

<span id="resetEachCycle"></span>

`resetEachCycle`

[eventListItem.t](../file/eventListItem.t.html)\[[327](../source/eventListItem.t.html#327)\]

<div class="desc">

Flag, do we want to reset the list each time we've run through all our
items? By default we don't, but this might ba en appropriate place to
call resetList() if we do want to call it. Note that this is in any case
irrelevant on the base EventList class but may be relevant on some of
its subclaases (CyclicEventList, RandomEventList and ShuffledEventList).

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addItem"></span>

`addItem (item, prop)`

[eventListItem.t](../file/eventListItem.t.html)\[[333](../source/eventListItem.t.html#333)\]

<div class="desc">

Add an item to prop (usually eventList) property of this EventList,
where prop should be supplied as a property pointer,

</div>

<span id="advanceState"></span>

`advanceState ( )`

[eventList.t](../file/eventList.t.html)\[[159](../source/eventList.t.html#159)\]

<div class="desc">

advance to the next state

</div>

<span id="construct"></span>

`construct (lst)`

[eventList.t](../file/eventList.t.html)\[[150](../source/eventList.t.html#150)\]

<div class="desc">

*no description available*

</div>

<span id="doScript"></span>

`doScript ( )`<span class="rem">OVERRIDDEN</span>

[eventList.t](../file/eventList.t.html)\[[169](../source/eventList.t.html#169)\]

<div class="desc">

process the next step of the script

</div>

<span id="doScriptEvent"></span>

`doScriptEvent (evt)`

[eventList.t](../file/eventList.t.html)\[[192](../source/eventList.t.html#192)\]

<div class="desc">

carry out one script event

</div>

<span id="resetList"></span>

`resetList ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[308](../source/eventListItem.t.html#308)\]

<div class="desc">

Game code can call this method to remove all EventListItems that have
been finished with (isDone = true) from the eventList of this EventList.
This probably isn't necessary unless there are likely to be a large
number of such items slowing down execution.

</div>

<span id="scriptDone"></span>

`scriptDone ( )`

[eventList.t](../file/eventList.t.html)\[[235](../source/eventList.t.html#235)\]

<div class="desc">

Perform any end-of-script processing. By default, we advance the script
to the next state.

Some scripts might want to override this. For example, a script could be
driven entirely by some external timing; the state of a script could
vary once per turn, for example, or could change each time an actor
pushes a button. In these cases, invoking the script wouldn't affect the
state of the event list, so the subclass would override scriptDone() so
that it does nothing at all.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
