---
layout: docs
---
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



Basic Event Manager. This is a common base class for the game-time and
real-time event managers. This class handles the details of managing the
event queue; the subclasses must define the specifics of event timing.

`class `**`BasicEventManager`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`BasicEventManager`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`eventManager`](../object/eventManager.html) [`realTimeManager`](../object/realTimeManager.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`events_`](#events_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addEvent`](#addEvent) [`removeCurrentEvent`](#removeCurrentEvent) [`removeEvent`](#removeEvent) [`removeMatchingEvents`](#removeMatchingEvents)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="events_"></span>

`// events_`<span class="rem">Interface description only</span>

[events.t](../file/events.t.html)\[[418](../source/events.t.html#418)\]



event list - each instance must initialize this to a vector



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addEvent"></span>

`addEvent (event)`

[events.t](../file/events.t.html)\[[344](../source/events.t.html#344)\]



add an event



<span id="removeCurrentEvent"></span>

`removeCurrentEvent ( )`

[events.t](../file/events.t.html)\[[411](../source/events.t.html#411)\]



Remove the current event - this is provided for convenience so that an
event can cancel itself in the course of its execution.

Note that this has no effect on the current event execution - this
simply prevents the event from receiving additional notifications in the
future.



<span id="removeEvent"></span>

`removeEvent (event)`

[events.t](../file/events.t.html)\[[351](../source/events.t.html#351)\]



remove an event



<span id="removeMatchingEvents"></span>

`removeMatchingEvents (obj, prop)`

[events.t](../file/events.t.html)\[[375](../source/events.t.html#375)\]



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
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


