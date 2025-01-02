<span class="title">ShuffledList</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[1390](../source/misc.t.html#1390)\]

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

Shuffled List - this class keeps a list of values that can be returned
in random order, but with the constraint that we never repeat a value
until we've handed out every value. Think of a shuffled deck of cards:
the order of the cards handed out is random, but once a card is dealt,
it can't be dealt again until we put everything back into the deck and
reshuffle.

`class `**`ShuffledList`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ShuffledList`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ShuffledList`**  
`         `[`ShuffledIntegerList`](../object/ShuffledIntegerList.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`suppressRepeats`](#suppressRepeats)`  `[`valueList`](#valueList)`  `[`valuesAvail`](#valuesAvail)`  `[`valuesVec`](#valuesVec)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getNextValue`](#getNextValue)`  `[`reshuffle`](#reshuffle)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="suppressRepeats"></span>

`suppressRepeats`

[misc.t](../file/misc.t.html)\[[1413](../source/misc.t.html#1413)\]

<div class="desc">

Flag: suppress repeated values. We mostly suppress repeats by our very
design, since we run through the entire list before repeating anything
in the list. However, there's one situation (in a list with more than
one element) where a repeat can occur: immediately after a shuffle, we
could select the last element from the previous shuffle as the first
element of the new shuffle. If this flag is set, we'll suppress this
type of repeat by choosing again any time we're about to choose a
repeat.

Note that we ignore this for a list of one element, since it's obviously
impossible to avoid repeats in this case. We also ignore it for a
two-element list, since this would produce the predictable pattern
A-B-A-B..., defeating the purpose of the shuffle.

</div>

<span id="valueList"></span>

`valueList`

[misc.t](../file/misc.t.html)\[[1395](../source/misc.t.html#1395)\]

<div class="desc">

the list of values we want to shuffle - initialize this in each instance
to the set of values we want to return in random order

</div>

<span id="valuesAvail"></span>

`valuesAvail`

[misc.t](../file/misc.t.html)\[[1536](../source/misc.t.html#1536)\]

<div class="desc">

number of values still available on this round

</div>

<span id="valuesVec"></span>

`valuesVec`

[misc.t](../file/misc.t.html)\[[1533](../source/misc.t.html#1533)\]

<div class="desc">

Internal vector of available/used values. Elements from 1 to
'valuesAvail', inclusive, are still available for use on this round.
Elements above 'valuesAvail' have already been used.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (lst)`

[misc.t](../file/misc.t.html)\[[1416](../source/misc.t.html#1416)\]

<div class="desc">

create from a given list

</div>

<span id="getNextValue"></span>

`getNextValue ( )`

[misc.t](../file/misc.t.html)\[[1430](../source/misc.t.html#1430)\]

<div class="desc">

Get a random value. This will return a randomly-selected element from
'valueList', but we'll return every element of 'valueList' once before
repeating any element.

If we've returned every value on the current round, we'll automatically
shuffle the values and start a new round.

</div>

<span id="reshuffle"></span>

`reshuffle ( )`

[misc.t](../file/misc.t.html)\[[1518](../source/misc.t.html#1518)\]

<div class="desc">

Shuffle the values. This puts all of the values back into the deck (as
it were) for a new round. It's never required to call this, because
getNextValue() automatically shuffles the deck and starts over each time
it runs through the entire deck. This is provided in case the caller has
a reason to want to put all the values back into play immediately,
before every value has been dealt on the current round.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>