[ShuffledEventList]{.title}[class]{.type}

[eventList.t](../file/eventList.t.html)\[[400](../source/eventList.t.html#400)\],
[eventListItem.t](../file/eventListItem.t.html)\[[362](../source/eventListItem.t.html#362)\]

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
Shuffled event list. This is similar to a random event list, except that
we fire our events in a \"shuffled\" order rather than an independently
random order. \"Shuffled order\" means that we fire the events in random
order, but we don\'t re-fire an event until we\'ve run through all of
the other events. The effect is as though we were dealing from a deck of
cards.

For the first time through the main list, we normally shuffle the
strings immediately at startup, but this is optional. If shuffleFirst is
set to nil, we will NOT shuffle the list the first time through - we\'ll
run through it once in the given order, then shuffle for the next time
through, then shuffle again for the next, and so on. So, if you want a
specific order for the first time through, just define the list in the
desired order and set shuffleFirst to nil.

You can optionally specify a separate list of one-time-only sequential
strings in the property firstEvents. We\'ll run through these strings
once. When we\'ve exhausted them, we\'ll switch to the main eventList
list, showing it one time through in its given order, then shuffling it
and running through it again, and so on. The firstEvents list is never
shuffled - it\'s always shown in exactly the order given.

*Modified in
[eventListItem.t](../file/eventListItem.t.html)\[[362](../source/eventListItem.t.html#362)\]:*\
Mofiications to ShuffledEventList for EventListItem extension

`class `**`ShuffledEventList`**` :   `[`RandomFiringScript`](../object/RandomFiringScript.html)`   `[`EventList`](../object/EventList.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`ShuffledEventList`**\
`         `[`RandomFiringScript`](../object/RandomFiringScript.html)\
`                 object`\
`         `[`EventList`](../object/EventList.html)\
`                 `[`Script`](../object/Script.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`firstEvents`](#firstEvents)`  `[`shuffledList_`](#shuffledList_)`  `[`shuffleFirst`](#shuffleFirst)`  `[`suppressRepeats`](#suppressRepeats)`  `

Inherited from `RandomFiringScript` :\
` `[`eventPercent`](../object/RandomFiringScript.html#eventPercent)`  `[`eventReduceAfter`](../object/RandomFiringScript.html#eventReduceAfter)`  `[`eventReduceTo`](../object/RandomFiringScript.html#eventReduceTo)`  `

Inherited from `EventList` :\
` `[`curScriptState`](../object/EventList.html#curScriptState)`  `[`eventList`](../object/EventList.html#eventList)`  `[`eventListLen`](../object/EventList.html#eventListLen)`  `[`resetEachCycle`](../object/EventList.html#resetEachCycle)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addItem`](#addItem)`  `[`doScript`](#doScript)`  `[`getNextRandom`](#getNextRandom)`  `[`resetList`](#resetList)`  `

Inherited from `RandomFiringScript` :\
` `[`checkEventOdds`](../object/RandomFiringScript.html#checkEventOdds)`  `[`underusedReadyELIidx`](../object/RandomFiringScript.html#underusedReadyELIidx)`  `

Inherited from `EventList` :\
` `[`advanceState`](../object/EventList.html#advanceState)`  `[`construct`](../object/EventList.html#construct)`  `[`doScriptEvent`](../object/EventList.html#doScriptEvent)`  `[`scriptDone`](../object/EventList.html#scriptDone)`  `

Inherited from `Script` :\
` `[`getScriptState`](../object/Script.html#getScriptState)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#firstEvents}

`firstEvents`

[eventList.t](../file/eventList.t.html)\[[405](../source/eventList.t.html#405)\]

::: desc
a list of events to go through sequentially, in the exact order
specified, before firing any events from the main list
:::

[]{#shuffledList_}

`shuffledList_`

[eventList.t](../file/eventList.t.html)\[[510](../source/eventList.t.html#510)\]

::: desc
our ShuffledList - we\'ll initialize this on demand
:::

[]{#shuffleFirst}

`shuffleFirst`

[eventList.t](../file/eventList.t.html)\[[415](../source/eventList.t.html#415)\]

::: desc
Flag: shuffle the eventList list before we show it for the first time.
By default, this is set to true, so that the behavior is random on each
independent run of the game. However, it might be desirable in some
cases to always use the original ordering of the eventList list the
first time through the list. If this is set to nil, we won\'t shuffle
the list the first time through.
:::

[]{#suppressRepeats}

`suppressRepeats`

[eventList.t](../file/eventList.t.html)\[[430](../source/eventList.t.html#430)\]

::: desc
Flag: suppress repeats in the shuffle. If this is true, it prevents a
given event from showing up twice in a row, which could otherwise happen
right after a shuffle. This is ignored for lists with one or two events:
it\'s impossible to prevent repeats in a one-element list, and doing so
in a two-element list would produce a predictable A-B-A-B\... pattern.

You might want to set this to nil for lists of three or four elements,
since such short lists can result in fairly un-random-looking sequences
when repeats are suppressed, because the available number of
permutations drops significantly.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addItem}

`addItem (item, prop)`[OVERRIDDEN]{.rem}

[eventListItem.t](../file/eventListItem.t.html)\[[417](../source/eventListItem.t.html#417)\]

::: desc
apply our suppressRepeats option to the shuffled list
:::

[]{#doScript}

`doScript ( )`[OVERRIDDEN]{.rem}

[eventList.t](../file/eventList.t.html)\[[433](../source/eventList.t.html#433)\]

::: desc
process the next step of the script
:::

[]{#getNextRandom}

`getNextRandom ( )`

[eventList.t](../file/eventList.t.html)\[[490](../source/eventList.t.html#490)\],
[eventListItem.t](../file/eventListItem.t.html)\[[369](../source/eventListItem.t.html#369)\]

::: desc
Get the next random event. We\'ll pick an event from our list of events
using a ShuffledIntegerList to ensure we pick each value once before
re-using any values.

*Modified in
[eventListItem.t](../file/eventListItem.t.html)\[[369](../source/eventListItem.t.html#369)\]:*\
For the EventListItem extenstion we modify this method so that it first
chooses any as yet unused EventListItem from our eventList that\'s now
ready to fire. If none is found, we use the inherited behaviour to
select the next item indicated by our shuffledList\_ .
:::

[]{#resetList}

`resetList ( )`[OVERRIDDEN]{.rem}

[eventListItem.t](../file/eventListItem.t.html)\[[401](../source/eventListItem.t.html#401)\]

::: desc
Reset our eventList to clear out EventListItems that are done with
(isDone = true). This is not called from any library code by default,
but can be called from game code if game authors are worried about an
accumulation of too many spent EventListItems in any given eventList.
For many games, this probably won\'t be necessary.

One potentially good place to call this from as at the end of each
iteration of a ShuffledEventList, when the items are about to be
reshuffled in any case. You can make this happen by setting the
resetOnReshuffle property to true,
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::