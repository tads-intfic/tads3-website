---
layout: docs
---
<span class="title">EventList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1017](../source/misc.t.html#1017)\]

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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`EventList`**  
[`Script`](../object/Script.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`EventList`**  
[`CyclicEventList`](../object/CyclicEventList.html)  
[`ExternalEventList`](../object/ExternalEventList.html)  
[`RandomEventList`](../object/RandomEventList.html)  
[`ShuffledEventList`](../object/ShuffledEventList.html)  
[`StopEventList`](../object/StopEventList.html)  
[`SyncEventList`](../object/SyncEventList.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curScriptState`](#curScriptState) [`eventList`](#eventList) [`eventListLen`](#eventListLen)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`advanceState`](#advanceState) [`construct`](#construct) [`doScript`](#doScript) [`doScriptEvent`](#doScriptEvent) [`scriptDone`](#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curScriptState"></span>

`curScriptState`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1034](../source/misc.t.html#1034)\]



by default, start at the first list element



<span id="eventList"></span>

`eventList`

[misc.t](../file/misc.t.html)\[[1021](../source/misc.t.html#1021)\]



the list of events



<span id="eventListLen"></span>

`eventListLen`

[misc.t](../file/misc.t.html)\[[1024](../source/misc.t.html#1024)\]



cached length of the event list



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="advanceState"></span>

`advanceState ( )`

[misc.t](../file/misc.t.html)\[[1027](../source/misc.t.html#1027)\]



advance to the next state



<span id="construct"></span>

`construct (lst)`

[misc.t](../file/misc.t.html)\[[1018](../source/misc.t.html#1018)\]



*no description available*



<span id="doScript"></span>

`doScript ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1037](../source/misc.t.html#1037)\]



process the next step of the script



<span id="doScriptEvent"></span>

`doScriptEvent (evt)`

[misc.t](../file/misc.t.html)\[[1060](../source/misc.t.html#1060)\]



carry out one script event



<span id="scriptDone"></span>

`scriptDone ( )`

[misc.t](../file/misc.t.html)\[[1103](../source/misc.t.html#1103)\]



Perform any end-of-script processing. By default, we advance the script
to the next state.

Some scripts might want to override this. For example, a script could be
driven entirely by some external timing; the state of a script could
vary once per turn, for example, or could change each time an actor
pushes a button. In these cases, invoking the script wouldn't affect the
state of the event list, so the subclass would override scriptDone() so
that it does nothing at all.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


