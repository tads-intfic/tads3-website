---
layout: docs
---
<span class="title">realTimeManager</span><span class="type">object</span>

[events.t](../file/events.t.html)\[[870](../source/events.t.html#870)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



Real-Time Event Manager. This object manages all of the game's real-time
events, which are events that occur according to elapsed real-world
time.

**`realTimeManager`**` :   `[`BasicEventManager`](../object/BasicEventManager.html) [`InitObject`](../object/InitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`realTimeManager`**  
[`BasicEventManager`](../object/BasicEventManager.html)  
`                 object`  
[`InitObject`](../object/InitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curEvent_`](#curEvent_) [`elapsedTimeAtSave`](#elapsedTimeAtSave) [`events_`](#events_) [`startingTime`](#startingTime)
Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute) [`execute`](#execute) [`execute`](#execute) [`executeEvents`](#executeEvents) [`getElapsedTime`](#getElapsedTime) [`getNextEventTime`](#getNextEventTime) [`restoreElapsedTime`](#restoreElapsedTime) [`saveElapsedTime`](#saveElapsedTime) [`setElapsedTime`](#setElapsedTime)

Inherited from `BasicEventManager` :  
[`addEvent`](../object/BasicEventManager.html#addEvent) [`removeCurrentEvent`](../object/BasicEventManager.html#removeCurrentEvent) [`removeEvent`](../object/BasicEventManager.html#removeEvent) [`removeMatchingEvents`](../object/BasicEventManager.html#removeMatchingEvents)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curEvent_"></span>

`curEvent_`

[events.t](../file/events.t.html)\[[1091](../source/events.t.html#1091)\]



the event currently being executed



<span id="elapsedTimeAtSave"></span>

`elapsedTimeAtSave`

[events.t](../file/events.t.html)\[[1097](../source/events.t.html#1097)\]



saved elapsed time - we use this to figure the virtual starting time
when we restore a saved game



<span id="events_"></span>

`events_`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1088](../source/events.t.html#1088)\]



our event list



<span id="startingTime"></span>

`startingTime`

[events.t](../file/events.t.html)\[[1042](../source/events.t.html#1042)\]



The imaginary real-world time of the starting point of the game,
treating the game as having been played from the start in one continous
session. Whenever we restore a saved game, we project backwards from the
current real-world time at restoration by the amount of continuous
elapsed time in the saved game to find the point at which the game would
have started if it had been played continuously in one session up to the
restored point.

We set a static initial value for this, using the interpreter's
real-time clock value at compilation time. This ensures that we'll have
a meaningful time base if any real-time events are created during
pre-initialization. This static value will only be in effect during
preinit; we're an InitObject, so our execute() method will be invoked at
run-time start-up, and at that point we'll reset the zero point to the
actual run-time start time.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1050](../source/events.t.html#1050)\]



Initialize at run-time startup. We want to set the zero point as the
time when the player actually started playing the game (any time we
spent in pre-initialization doesn't count on the real-time clock, since
it's not part of the game per se).



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1108](../source/events.t.html#1108)\]



Real-time manager: pre-save notification receiver. When we're about to
save the game, we'll note the current elapsed game time, so that when we
later restore the game, we can figure the virtual starting point that
will give us the same effective elapsed time on the system real-time
clock.



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[1125](../source/events.t.html#1125)\]



Real-time manager: post-restore notification receiver. Immediately after
we restore a game, we'll tell the real-time manager to refigure the
virtual starting point of the game based on the saved elapsed time.



<span id="executeEvents"></span>

`executeEvents ( )`

[events.t](../file/events.t.html)\[[927](../source/events.t.html#927)\]



Run any real-time events that are ready to execute, then return the next
event time. The return value has the same meaning as that of
getNextEventTime().



<span id="getElapsedTime"></span>

`getElapsedTime ( )`

[events.t](../file/events.t.html)\[[1000](../source/events.t.html#1000)\]



Get the current game elapsed time. This is the number of milliseconds
that has elapsed since the game was started, counting only the
continuous execution time. When the game is saved, we save the elapsed
time at that point; when the game is later restored, we project that
saved time backwards from the current real-world time at restoration to
get the real-world time where the game would have started if it had
actually been played continuously in one session.



<span id="getNextEventTime"></span>

`getNextEventTime ( )`

[events.t](../file/events.t.html)\[[889](../source/events.t.html#889)\]



Get the elapsed game time at which the next real-time event is
scheduled. This returns a value which can be compared to that returned
by getElapsedTime(): if this value is less than or equal to the value
from getElapsedTime(), then the next event is reay for immediate
execution; otherwise, the result of subtracting getElapsedTime() from
our return value gives the number of milliseconds until the next event
is schedulable.

Note that we don't calculate the delta to the next event time, but
instead return the absolute time, because the caller might need to
perform extra processing before using our return value. If we returned a
delta, that extra processing time wouldn't be figured into the caller's
determination of event schedulability.

If we return nil, it means that there are no scheduled real-time events.



<span id="restoreElapsedTime"></span>

`restoreElapsedTime ( )`

[events.t](../file/events.t.html)\[[1077](../source/events.t.html#1077)\]



Restore the elapsed time - this is called just after we restore a game.
We'll project the saved elapsed time backwards to figure the imaginary
starting time the game would have had if it had been played in one
continuous session rather than being saved and restored.



<span id="saveElapsedTime"></span>

`saveElapsedTime ( )`

[events.t](../file/events.t.html)\[[1064](../source/events.t.html#1064)\]



save the elapsed time so far - this is called just before we save a game
so that we can pick up where we left off on the elapsed time clock when
we restore the saved game



<span id="setElapsedTime"></span>

`setElapsedTime (t)`

[events.t](../file/events.t.html)\[[1016](../source/events.t.html#1016)\]



Set the current game elapsed time. This can be used to freeze the
real-time clock - a caller can note the elapsed game time at one point
by calling getElapsedTime(), and then pass the same value to this
routine to ensure that no real time can effectively pass between the two
calls.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


