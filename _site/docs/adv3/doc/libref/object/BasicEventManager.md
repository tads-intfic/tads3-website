<span class="title">BasicEventManager</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[342](../source/events.t.html#342)\]

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

Basic Event Manager. This is a common base class for the game-time and
real-time event managers. This class handles the details of managing the
event queue; the subclasses must define the specifics of event timing.

`class `**`BasicEventManager`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BasicEventManager`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`eventManager`](../object/eventManager.html)`  `[`realTimeManager`](../object/realTimeManager.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`events_`](#events_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addEvent`](#addEvent)`  `[`removeCurrentEvent`](#removeCurrentEvent)`  `[`removeEvent`](#removeEvent)`  `[`removeMatchingEvents`](#removeMatchingEvents)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="events_"></span>

`// events_`<span class="rem">Interface description only</span>

[events.t](../file/events.t.html)\[[418](../source/events.t.html#418)\]

<div class="desc">

event list - each instance must initialize this to a vector

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addEvent"></span>

`addEvent (event)`

[events.t](../file/events.t.html)\[[344](../source/events.t.html#344)\]

<div class="desc">

add an event

</div>

<span id="removeCurrentEvent"></span>

`removeCurrentEvent ( )`

[events.t](../file/events.t.html)\[[411](../source/events.t.html#411)\]

<div class="desc">

Remove the current event - this is provided for convenience so that an
event can cancel itself in the course of its execution.

Note that this has no effect on the current event execution - this
simply prevents the event from receiving additional notifications in the
future.

</div>

<span id="removeEvent"></span>

`removeEvent (event)`

[events.t](../file/events.t.html)\[[351](../source/events.t.html#351)\]

<div class="desc">

remove an event

</div>

<span id="removeMatchingEvents"></span>

`removeMatchingEvents (obj, prop)`

[events.t](../file/events.t.html)\[[375](../source/events.t.html#375)\]

<div class="desc">

Remove events matching the given object and property combination. We
remove all events that match both the object and property (events
matching only the object or only the property are not affected).

This is provided mostly as a convenience for cases where an event is
known to be uniquely identifiable by its object and property values;
this saves the caller the trouble of keeping track of the Event object
created when the event was first registered.

When a particular object/property combination might be used in several
different events, it's better to keep a reference to the Event object
representing each event, and use removeEvent() to remove the specific
Event object of interest.

Returns true if we find any matching events, nil if not.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
