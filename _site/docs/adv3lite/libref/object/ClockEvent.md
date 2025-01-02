<span class="title">ClockEvent</span><span class="type">class</span>

[subtime.t](../file/subtime.t.html)\[[527](../source/subtime.t.html#527)\]

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

Clock-setting plot event. This object represents a plot point that
occurs at a particular time in the story world. Create one of these for
each of your plot events. The Clock Manager automatically builds a list
of all of these objects during pre-initialization, so you don't have to
explicitly tell the clock manager about these.

Whenever the story reaches one of these events, you should call the
eventReached() method of the event object. This will set the clock time
to the event's current time, and take note of how long we have until the
next plot event. \[DEFINED IN SUBTIME EXTENSION\]

`class `**`ClockEvent`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ClockEvent`**  
`         object`  
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

` `[`eventDate`](#eventDate)`  `[`eventTime`](#eventTime)`  `[`hasBeenReached`](#hasBeenReached)`  `[`reachedWhen`](#reachedWhen)`  `[`scaleFactor`](#scaleFactor)`  `[`turnsToEvent`](#turnsToEvent)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`calcScaleFactor`](#calcScaleFactor)`  `[`eventReached`](#eventReached)`  `[`formatTime`](#formatTime)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="eventDate"></span>

`eventDate`

[subtime.t](../file/subtime.t.html)\[[540](../source/subtime.t.html#540)\]

<div class="desc">

This is the eventTime expressed as a Date object

</div>

<span id="eventTime"></span>

`eventTime`

[subtime.t](../file/subtime.t.html)\[[537](../source/subtime.t.html#537)\]

<div class="desc">

The time at which this event occurs. This is expressed as a list with
three elements: the day number, the hour (on a 24-hour clock), and the
minute. The day number is relative to the start of the game - day 1 is
the first day of the game. So, for example, to express 2:40pm on the
second day of the game, you'd write \[2,14,40\]. Note that 12 AM is
written as 0 (zero) on a 24-hour clock, so 12:05am on day 1 would be
\[1,0,5\].

</div>

<span id="hasBeenReached"></span>

`hasBeenReached`

[subtime.t](../file/subtime.t.html)\[[618](../source/subtime.t.html#618)\]

<div class="desc">

Flag: has this event been reached? This is used internally by the
library and shouldn't normally be changed in game code. \[SUBTIME
EXTENSION\]

</div>

<span id="reachedWhen"></span>

`reachedWhen`

[subtime.t](../file/subtime.t.html)\[[611](../source/subtime.t.html#611)\]

<div class="desc">

A condition (or a method that returns true or nil) that causes this
event to be reached when it becomes true. This provides an alternative
way of reaching events (instead of calling the eventReached method).
\[SUBTIME EXTENSION\]

</div>

<span id="scaleFactor"></span>

`scaleFactor`

[subtime.t](../file/subtime.t.html)\[[570](../source/subtime.t.html#570)\]

<div class="desc">

This is the number of minutes per hundred turns when we have unlimited
time until this next event. This number is pretty arbitrary, since we're
depending so much on the player's uncertainty about just how long things
take, and also because we'll adjust it anyway when we're running out of
time before the next event. Even so, you might want to adjust this value
up or down according to your sense of the pacing of your game.

Alternatively you can define the turnsToEvent property (see below) and
the game will calculate an appropriate scaleFactor for you. \[SUBTIME
EXTENSION\]

</div>

<span id="turnsToEvent"></span>

`turnsToEvent`

[subtime.t](../file/subtime.t.html)\[[579](../source/subtime.t.html#579)\]

<div class="desc">

Optional: if specified this should contain an estimate of the number of
turns a player is typically likely to take to get to this event from the
previous one; the game will then calculate an appropriate scaleFactor.
Alternatively this can be left at nil and the scaleFactor specified
directly. \[SUBTIME EXTENSION\]

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="calcScaleFactor"></span>

`calcScaleFactor ( )`

[subtime.t](../file/subtime.t.html)\[[586](../source/subtime.t.html#586)\]

<div class="desc">

If the turnsToEvent property is not nil and the clockManager has
recorded a previous event, calculate the scaleFactor for this event.
\[SUBTIME EXTENSION\]

</div>

<span id="eventReached"></span>

`eventReached ( )`

[subtime.t](../file/subtime.t.html)\[[551](../source/subtime.t.html#551)\]

<div class="desc">

Notify the clock manager that this event has just occurred. This sets
the game clock to the event's time. The game code must call this method
when our point in the plot is reached.

</div>

<span id="formatTime"></span>

`formatTime (fmt)`

[subtime.t](../file/subtime.t.html)\[[543](../source/subtime.t.html#543)\]

<div class="desc">

get a formatted version of the event time

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>