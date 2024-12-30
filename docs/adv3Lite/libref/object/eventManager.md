[eventManager]{.title}[object]{.type}

[events.t](../file/events.t.html)\[[20](../source/events.t.html#20)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The eventManager is the object that manages the execution of Events such
as Fuses and Daemons.

**`eventManager`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`eventManager`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`curEvent_`](#curEvent_)`  `[`eventList`](#eventList)`  `[`schedulableList`](#schedulableList)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addEvent`](#addEvent)`  `[`executeList`](#executeList)`  `[`executePrompt`](#executePrompt)`  `[`executeTurn`](#executeTurn)`  `[`removeCurrentEvent`](#removeCurrentEvent)`  `[`removeEvent`](#removeEvent)`  `[`removeMatchingEvents`](#removeMatchingEvents)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#curEvent_}

`curEvent_`

[events.t](../file/events.t.html)\[[192](../source/events.t.html#192)\]

::: desc
restore the enclosing current event
:::

[]{#eventList}

`eventList`

[events.t](../file/events.t.html)\[[194](../source/events.t.html#194)\]

::: desc
*no description available*
:::

[]{#schedulableList}

`schedulableList`

[events.t](../file/events.t.html)\[[205](../source/events.t.html#205)\]

::: desc
A list of \'schedulables\'. These are objects whose executeEvent()
method should be called each turn prior to other events such as Fuses
and Daemons. The main use for this in the library is to provide a
mechanism for the takeTurn method of each Actor to be called before
Fuses and Daemons are run, mainly in case an AgendaItem sets up a Fuse
or Daemon that may need to execute on the same turn, or if a Scene wants
to do so.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addEvent}

`addEvent (event)`

[events.t](../file/events.t.html)\[[23](../source/events.t.html#23)\]

::: desc
Add an event to the list of events to be executed.
:::

[]{#executeList}

`executeList (lst)`

[events.t](../file/events.t.html)\[[143](../source/events.t.html#143)\]

::: desc
internal service routine - execute the fuses and daemons in the given
list, in eventOrder priority order
:::

[]{#executePrompt}

`executePrompt ( )`

[events.t](../file/events.t.html)\[[133](../source/events.t.html#133)\]

::: desc
Execute a command prompt turn. We\'ll execute each per-command-prompt
daemon.
:::

[]{#executeTurn}

`executeTurn ( )`

[events.t](../file/events.t.html)\[[98](../source/events.t.html#98)\]

::: desc
Execute a turn. We\'ll execute each fuse and each daemon that is
currently schedulable.
:::

[]{#removeCurrentEvent}

`removeCurrentEvent ( )`

[events.t](../file/events.t.html)\[[88](../source/events.t.html#88)\]

::: desc
Remove the current event - this is provided for convenience so that an
event can cancel itself in the course of its execution.

Note that this has no effect on the current event execution - this
simply prevents the event from receiving additional notifications in the
future.
:::

[]{#removeEvent}

`removeEvent (event)`

[events.t](../file/events.t.html)\[[29](../source/events.t.html#29)\]

::: desc
Remove an event from the list of events to be executed.
:::

[]{#removeMatchingEvents}

`removeMatchingEvents (obj, prop)`

[events.t](../file/events.t.html)\[[52](../source/events.t.html#52)\]

::: desc
Remove events matching the given object and property combination. We
remove all events that match both the object and property (events
matching only the object or only the property are not affected).

This is provided mostly as a convenience for cases where an event is
known to be uniquely identifiable by its object and property values;
this saves the caller the trouble of keeping track of the Event object
created when the event was first registered.

When a particular object/property combination might be used in several
different events, it\'s better to keep a reference to the Event object
representing each event, and use removeEvent() to remove the specific
Event object of interest.

Returns true if we find any matching events, nil if not.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
