---
layout: docs
---
<span class="title">ShuffledEventList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1268](../source/misc.t.html#1268)\]

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



Shuffled event list. This is similar to a random event list, except that
we fire our events in a "shuffled" order rather than an independently
random order. "Shuffled order" means that we fire the events in random
order, but we don't re-fire an event until we've run through all of the
other events. The effect is as though we were dealing from a deck of
cards.

For the first time through the main list, we normally shuffle the
strings immediately at startup, but this is optional. If shuffleFirst is
set to nil, we will NOT shuffle the list the first time through - we'll
run through it once in the given order, then shuffle for the next time
through, then shuffle again for the next, and so on. So, if you want a
specific order for the first time through, just define the list in the
desired order and set shuffleFirst to nil.

You can optionally specify a separate list of one-time-only sequential
strings in the property firstEvents. We'll run through these strings
once. When we've exhausted them, we'll switch to the main eventList
list, showing it one time through in its given order, then shuffling it
and running through it again, and so on. The firstEvents list is never
shuffled - it's always shown in exactly the order given.

`class `**`ShuffledEventList`**` :   `[`RandomFiringScript`](../object/RandomFiringScript.html) [`EventList`](../object/EventList.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ShuffledEventList`**  
[`RandomFiringScript`](../object/RandomFiringScript.html)  
`                 object`  
[`EventList`](../object/EventList.html)  
[`Script`](../object/Script.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`firstEvents`](#firstEvents) [`shuffledList_`](#shuffledList_) [`shuffleFirst`](#shuffleFirst) [`suppressRepeats`](#suppressRepeats)

Inherited from `RandomFiringScript` :  
[`eventPercent`](../object/RandomFiringScript.html#eventPercent) [`eventReduceAfter`](../object/RandomFiringScript.html#eventReduceAfter) [`eventReduceTo`](../object/RandomFiringScript.html#eventReduceTo)

Inherited from `EventList` :  
[`curScriptState`](../object/EventList.html#curScriptState) [`eventList`](../object/EventList.html#eventList) [`eventListLen`](../object/EventList.html#eventListLen)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doScript`](#doScript) [`getNextRandom`](#getNextRandom)

Inherited from `RandomFiringScript` :  
[`checkEventOdds`](../object/RandomFiringScript.html#checkEventOdds)

Inherited from `EventList` :  
[`advanceState`](../object/EventList.html#advanceState) [`construct`](../object/EventList.html#construct) [`doScriptEvent`](../object/EventList.html#doScriptEvent) [`scriptDone`](../object/EventList.html#scriptDone)

Inherited from `Script` :  
[`getScriptState`](../object/Script.html#getScriptState)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="firstEvents"></span>

`firstEvents`

[misc.t](../file/misc.t.html)\[[1273](../source/misc.t.html#1273)\]



a list of events to go through sequentially, in the exact order
specified, before firing any events from the main list



<span id="shuffledList_"></span>

`shuffledList_`

[misc.t](../file/misc.t.html)\[[1378](../source/misc.t.html#1378)\]



our ShuffledList - we'll initialize this on demand



<span id="shuffleFirst"></span>

`shuffleFirst`

[misc.t](../file/misc.t.html)\[[1283](../source/misc.t.html#1283)\]



Flag: shuffle the eventList list before we show it for the first time.
By default, this is set to true, so that the behavior is random on each
independent run of the game. However, it might be desirable in some
cases to always use the original ordering of the eventList list the
first time through the list. If this is set to nil, we won't shuffle the
list the first time through.



<span id="suppressRepeats"></span>

`suppressRepeats`

[misc.t](../file/misc.t.html)\[[1298](../source/misc.t.html#1298)\]



Flag: suppress repeats in the shuffle. If this is true, it prevents a
given event from showing up twice in a row, which could otherwise happen
right after a shuffle. This is ignored for lists with one or two events:
it's impossible to prevent repeats in a one-element list, and doing so
in a two-element list would produce a predictable A-B-A-B... pattern.

You might want to set this to nil for lists of three or four elements,
since such short lists can result in fairly un-random-looking sequences
when repeats are suppressed, because the available number of
permutations drops significantly.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doScript"></span>

`doScript ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[1301](../source/misc.t.html#1301)\]



process the next step of the script



<span id="getNextRandom"></span>

`getNextRandom ( )`

[misc.t](../file/misc.t.html)\[[1358](../source/misc.t.html#1358)\]



Get the next random event. We'll pick an event from our list of events
using a ShuffledIntegerList to ensure we pick each value once before
re-using any values.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


