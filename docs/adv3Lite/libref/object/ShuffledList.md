[ShuffledList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[522](../source/eventList.t.html#522)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Shuffled List - this class keeps a list of values that can be returned
in random order, but with the constraint that we never repeat a value
until we\'ve handed out every value. Think of a shuffled deck of cards:
the order of the cards handed out is random, but once a card is dealt,
it can\'t be dealt again until we put everything back into the deck and
reshuffle.

`class `**`ShuffledList`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ShuffledList`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`ShuffledList`**\
`         `[`ShuffledIntegerList`](../object/ShuffledIntegerList.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`suppressRepeats`](#suppressRepeats)`  `[`valueList`](#valueList)`  `[`valuesAvail`](#valuesAvail)`  `[`valuesVec`](#valuesVec)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getNextValue`](#getNextValue)`  `[`reshuffle`](#reshuffle)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#suppressRepeats}

`suppressRepeats`

[eventList.t](../file/eventList.t.html)\[[545](../source/eventList.t.html#545)\]

::: desc
Flag: suppress repeated values. We mostly suppress repeats by our very
design, since we run through the entire list before repeating anything
in the list. However, there\'s one situation (in a list with more than
one element) where a repeat can occur: immediately after a shuffle, we
could select the last element from the previous shuffle as the first
element of the new shuffle. If this flag is set, we\'ll suppress this
type of repeat by choosing again any time we\'re about to choose a
repeat.

Note that we ignore this for a list of one element, since it\'s
obviously impossible to avoid repeats in this case. We also ignore it
for a two-element list, since this would produce the predictable pattern
A-B-A-B\..., defeating the purpose of the shuffle.
:::

[]{#valueList}

`valueList`

[eventList.t](../file/eventList.t.html)\[[527](../source/eventList.t.html#527)\]

::: desc
the list of values we want to shuffle - initialize this in each instance
to the set of values we want to return in random order
:::

[]{#valuesAvail}

`valuesAvail`

[eventList.t](../file/eventList.t.html)\[[668](../source/eventList.t.html#668)\]

::: desc
number of values still available on this round
:::

[]{#valuesVec}

`valuesVec`

[eventList.t](../file/eventList.t.html)\[[665](../source/eventList.t.html#665)\]

::: desc
Internal vector of available/used values. Elements from 1 to
\'valuesAvail\', inclusive, are still available for use on this round.
Elements above \'valuesAvail\' have already been used.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (lst)`

[eventList.t](../file/eventList.t.html)\[[548](../source/eventList.t.html#548)\]

::: desc
create from a given list
:::

[]{#getNextValue}

`getNextValue ( )`

[eventList.t](../file/eventList.t.html)\[[562](../source/eventList.t.html#562)\]

::: desc
Get a random value. This will return a randomly-selected element from
\'valueList\', but we\'ll return every element of \'valueList\' once
before repeating any element.

If we\'ve returned every value on the current round, we\'ll
automatically shuffle the values and start a new round.
:::

[]{#reshuffle}

`reshuffle ( )`

[eventList.t](../file/eventList.t.html)\[[650](../source/eventList.t.html#650)\]

::: desc
Shuffle the values. This puts all of the values back into the deck (as
it were) for a new round. It\'s never required to call this, because
getNextValue() automatically shuffles the deck and starts over each time
it runs through the entire deck. This is provided in case the caller has
a reason to want to put all the values back into play immediately,
before every value has been dealt on the current round.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
