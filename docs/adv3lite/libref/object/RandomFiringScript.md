---
layout: docs
---
<span class="title">RandomFiringScript</span><span class="type">class</span>

[eventList.t](../file/eventList.t.html)\[[49](../source/eventList.t.html#49)\],
[eventListItem.t](../file/eventListItem.t.html)\[[475](../source/eventListItem.t.html#475)\]

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



Random-Firing script add-in. This is a mix-in class that you can add to
the superclass list of any Script subclass to make the script execute
only a given percentage of the time it's invoked. Each time doScript()
is invoked on the script, we'll look at the probability settings (see
the properties below) to determine whether we really want to execute the
script this time; if so, we'll proceed with the scripted event,
otherwise we'll just return immediately, doing nothing.

Note that this must be used in the superclass list \*before\* the Script
subclass:

myScript: RandomFiringScript, EventList  
// ...my definitions...  
;

This class is especially useful for random atmospheric events, because
it allows you to make the timing of scripted events random. Rather than
making a scripted event happen on every single turn, you can use this to
make events happen only sporadically. It can often feel too predictable
and repetitious when a random background event happens on every single
turn; firing events less frequently often makes them feel more
realistic.

`class `**`RandomFiringScript`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RandomFiringScript`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`RandomFiringScript`**  
[`RandomEventList`](../object/RandomEventList.html)  
[`ShuffledEventList`](../object/ShuffledEventList.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`eventPercent`](#eventPercent) [`eventReduceAfter`](#eventReduceAfter) [`eventReduceTo`](#eventReduceTo)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`checkEventOdds`](#checkEventOdds) [`doScript`](#doScript) [`underusedReadyELIidx`](#underusedReadyELIidx)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="eventPercent"></span>

`eventPercent`

[eventList.t](../file/eventList.t.html)\[[65](../source/eventList.t.html#65)\]



Percentage of the time an event occurs. By default, we execute an event
100% of the time - meaning every time that doScript() is invoked. If you
set this to a lower percentage, then each time doScript() is invoked,
we'll randomly decide whether or not to execute an event based on this
percentage. For example, if you want an event to execute on average
about a third of the time, set this to 33.

Note that this is a probabilistic frequency. Setting this to 33 does
\*not\* mean that we'll execute exactly every third time. Rather, it
means that we'll randomly execute or not on each invocation, and
averaged over a large number of invocations, we'll execute about a third
of the time.



<span id="eventReduceAfter"></span>

`eventReduceAfter`

[eventList.t](../file/eventList.t.html)\[[80](../source/eventList.t.html#80)\]



Random atmospheric events can get repetitive after a while, so we
provide an easy way to reduce the frequency of our events after a while.
This way, we'll generate the events more frequently at first, but once
the player has seen them enough to get the idea, we'll cut back.
Sometimes, the player will spend a lot of time in one place trying to
solve a puzzle, so the same set of random events can get stale. Set
eventReduceAfter to the number of times you want the events to be
generated at full frequency; after we've fired events that many times,
we'll change eventPercent to eventReduceTo. If eventReduceAfter is nil,
we won't ever change eventPercent.



<span id="eventReduceTo"></span>

`eventReduceTo`

[eventList.t](../file/eventList.t.html)\[[81](../source/eventList.t.html#81)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="checkEventOdds"></span>

`checkEventOdds ( )`

[eventList.t](../file/eventList.t.html)\[[98](../source/eventList.t.html#98)\]



Check the event odds to see if we want to fire an event at all on this
invocation.



<span id="doScript"></span>

`doScript ( )`

[eventList.t](../file/eventList.t.html)\[[87](../source/eventList.t.html#87)\]



When doScript() is invoked, check the event probabilities before
proceeding.



<span id="underusedReadyELIidx"></span>

`underusedReadyELIidx ( )`

[eventListItem.t](../file/eventListItem.t.html)\[[481](../source/eventListItem.t.html#481)\]



Return the index within our eventList of any as yet unused EventListItem
that's ready to fire. This is principally for the use of our
RandomEventList and ShuffledEventList subclasses.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


