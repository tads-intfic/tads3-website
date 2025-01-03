---
layout: docs
---
<span class="title">clockManager</span><span class="type">object</span>

[subtime.t](../file/subtime.t.html)\[[29](../source/subtime.t.html#29)\]

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



The clockManager object is used to keep track of subjective time. In
this version we store dates and times internally as Date objects,
although we recognize date/times in the form \[d, h, m\] defined on
ClockEvents. \[DEFINED IN SUBTIME EXTENSION\]

**`clockManager`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`clockManager`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`baseDate`](#baseDate) [`baseScaleFactor`](#baseScaleFactor) [`curTime`](#curTime) [`eventList`](#eventList) [`lastEvent`](#lastEvent) [`nextEvent`](#nextEvent) [`nextTime`](#nextTime) [`scaleFactor`](#scaleFactor) [`turnLastCommitted`](#turnLastCommitted)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkTime`](#checkTime) [`checkTimeFmt`](#checkTimeFmt) [`eventDate`](#eventDate) [`eventReached`](#eventReached) [`execute`](#execute) [`formatTime`](#formatTime) [`getClockTime`](#getClockTime) [`lastEventDate`](#lastEventDate) [`reachCheck`](#reachCheck) [`slowDownTime`](#slowDownTime) [`syncTime`](#syncTime)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="baseDate"></span>

`baseDate`

[subtime.t](../file/subtime.t.html)\[[444](../source/subtime.t.html#444)\]



The base date (year, month, day) our game is meant to start on,
expressed as a Date object. Often this doesn't matter if we're only
interested in the time of day. By default we make it Jan 1, 2000. If
gameMain.gameStartDate is defines it will instead be taken from there.
\[SUBTIME EXTENSION\]



<span id="baseScaleFactor"></span>

`baseScaleFactor`

[subtime.t](../file/subtime.t.html)\[[201](../source/subtime.t.html#201)\]



The base scaling factor: this is the number of minutes per hundred turns
when we have unlimited time until the next event. This number is pretty
arbitrary, since we're depending so much on the player's uncertainty
about just how long things take, and also because we'll adjust it anyway
when we're running out of time before the next event. Even so, you might
want to adjust this value up or down according to your sense of the
pacing of your game.

In Mike Roberts's implementation, the baseScaleFactor was defined as a
constant value of 60. This is still the default value, but if there is a
next event we take the scale factor from that event's scaleFactor so
that we can vary the pace of time according to the spacing of events if
we wish. \[SUBTIME EXTENSION\]



<span id="curTime"></span>

`curTime`

[subtime.t](../file/subtime.t.html)\[[416](../source/subtime.t.html#416)\]



the current game clock time \[SUBTIME EXTENSION\]



<span id="eventList"></span>

`eventList`

[subtime.t](../file/subtime.t.html)\[[413](../source/subtime.t.html#413)\]



our list of clock events (we build this automatically during
pre-initialization) \[SUBTIME EXTENSION\]



<span id="lastEvent"></span>

`lastEvent`

[subtime.t](../file/subtime.t.html)\[[419](../source/subtime.t.html#419)\]



the most recent event that we reached \[SUBTIME EXTENSION\]



<span id="nextEvent"></span>

`nextEvent`

[subtime.t](../file/subtime.t.html)\[[425](../source/subtime.t.html#425)\]



the next event we're due to reach \[SUBTIME EXTENSION\]



<span id="nextTime"></span>

`nextTime`

[subtime.t](../file/subtime.t.html)\[[422](../source/subtime.t.html#422)\]



the next event's game clock time \[SUBTIME EXTENSION\]



<span id="scaleFactor"></span>

`scaleFactor`

[subtime.t](../file/subtime.t.html)\[[208](../source/subtime.t.html#208)\]



The scaling factor to use once we have passed the last ClockEvent; this
is the number of minutes per hundred turns once there are no more
ClockEvents. \[SUBTIME EXTENSION\]



<span id="turnLastCommitted"></span>

`turnLastCommitted`

[subtime.t](../file/subtime.t.html)\[[435](../source/subtime.t.html#435)\]



The turn counter (Schedulable.gameClockTime) on the last turn where
committed to a specific time. Each time we check the time, we look here
to see how many turns have elapsed since the last time check, and we use
this to choose a plausible scale for the wall-clock time change.
\[SUBTIME EXTENSION\]



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkTime"></span>

`checkTime ( )`

[subtime.t](../file/subtime.t.html)\[[49](../source/subtime.t.html#49)\]



Get the current game-clock time. This returns date/time as a Date
object.

Remember that our time-keeping scheme is a sort of "Schrodinger's clock"
\[see footnote 1\]. Between time checks, the game time clock is in a
vague, fuzzy state, drifting along at an indeterminate pace from the
most recent check. When this method is called, though, the clock manager
is forced to commit to a particular time, because we have to give a
specific answer to the question we're being asked ("what time is it?").
As in quantum mechanics, then, the act of observation affects the
quantity being observed. Therefore, you should avoid calling this
routine unnecessarily; call it only when you actually have to tell the
player what time it is - and don't tell the player what time it is
unless they ask, or there's some other good reason.

If you want a string-formatted version of the time (as in '9:05pm'), you
can call checkTimeFmt().



<span id="checkTimeFmt"></span>

`checkTimeFmt (fmt)`

[subtime.t](../file/subtime.t.html)\[[220](../source/subtime.t.html#220)\]



Get the current game-clock time, formatted into a string with the given
format mask - see formatTime() for details on how to write a mask
string.

Note that the same cautions for checkTime() apply here - calling this
routine commits us to a particular time, so you should call this routine
only when you're actually ready to display a time to the player.
\[SUBTIME EXTENSION\]



<span id="eventDate"></span>

`eventDate (t)`

[subtime.t](../file/subtime.t.html)\[[447](../source/subtime.t.html#447)\]



Return the date of t as a Date object. \[SUBTIME EXTENSION\]



<span id="eventReached"></span>

`eventReached (evt)`

[subtime.t](../file/subtime.t.html)\[[326](../source/subtime.t.html#326)\]



Receive notification from a clock event that an event has just occurred.
(This isn't normally called directly from game code; instead, game code
should usually call the ClockEvent object's eventReached() method.)
\[SUBTIME EXTENSION\]



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[subtime.t](../file/subtime.t.html)\[[247](../source/subtime.t.html#247)\]



pre-initialize the clockManager \[SUBTIME EXTENSION\]



<span id="formatTime"></span>

`formatTime (t, fmt)`

[subtime.t](../file/subtime.t.html)\[[233](../source/subtime.t.html#233)\]



Get a formatted version of the given wall-clock time. The time (t)
parameter can be expressed as a list, in the same format as
ClockEvent.eventTime: \[day,hour,minute\], where 'day' is 1 for the
first day of the game, 2 for the second, and so on. Alternatively it can
be supplied as a Date object.

The format string (fmt) is specified in the same way as for the
formatDate() method of the Date class (for which see the TADS 3 System
Manual). \[SUBTIME EXTENSION\]



<span id="getClockTime"></span>

`getClockTime (dat)`

[subtime.t](../file/subtime.t.html)\[[479](../source/subtime.t.html#479)\]



Get the time in our \[d, h, m, s\] format from a Date object. \[SUBTIME
EXTENSION\]



<span id="lastEventDate"></span>

`lastEventDate ( )`

[subtime.t](../file/subtime.t.html)\[[473](../source/subtime.t.html#473)\]



Retutn the date and time of the last event as a Date object. \[SUBTIME
EXTENSION\]



<span id="reachCheck"></span>

`reachCheck ( )`

[subtime.t](../file/subtime.t.html)\[[384](../source/subtime.t.html#384)\]



Check each turn whether another ClockEvent has been reached. Note that
this requires the events.t module to be present to work. \[SUBTIME
EXTENSION\]



<span id="slowDownTime"></span>

`slowDownTime ( )`

[subtime.t](../file/subtime.t.html)\[[170](../source/subtime.t.html#170)\]



Compute the time remaining until the next event at which we start to
slow down the clock. By default we make this half the time from the
previous event to the next. Game code can override if some other value
is preferred. \[SUBTIME EXTENSION\]



<span id="syncTime"></span>

`syncTime (t)`

[subtime.t](../file/subtime.t.html)\[[497](../source/subtime.t.html#497)\]



Synchronize the timeManager's time with our time, if it exists.
\[SUBTIME EXTENSION\]
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


