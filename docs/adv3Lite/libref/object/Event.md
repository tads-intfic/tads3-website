[Event]{.title}[class]{.type}

[events.t](../file/events.t.html)\[[213](../source/events.t.html#213)\]

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
An Event is an object such as a Fuse or Daemon that is executed
according to certain conditions. Game code will normally use one of its
subclasses rather than the Event class directly.

`class `**`Event`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Event`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Event`**\
`         `[`Daemon`](../object/Daemon.html)\
`                 `[`SenseDaemon`](../object/SenseDaemon.html)\
`         `[`Fuse`](../object/Fuse.html)\
`                 `[`SenseFuse`](../object/SenseFuse.html)\
`                 `[`TimeFuse`](../object/TimeFuse.html)\
`                         `[`SenseTimeFuse`](../object/SenseTimeFuse.html)\
`         `[`PromptDaemon`](../object/PromptDaemon.html)\
`                 `[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`actorSchedule`](../object/actorSchedule.html)`  `[`sceneManager`](../object/sceneManager.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`captureText`](#captureText)`  `[`eventOrder`](#eventOrder)`  `[`executed`](#executed)`  `[`interval_`](#interval_)`  `[`isPromptDaemon`](#isPromptDaemon)`  `[`nextRunTime`](#nextRunTime)`  `[`obj_`](#obj_)`  `[`prop_`](#prop_)`  `[`senseObj_`](#senseObj_)`  `[`senseProp_`](#senseProp_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`callMethod`](#callMethod)`  `[`construct`](#construct)`  `[`delayEvent`](#delayEvent)`  `[`eventMatches`](#eventMatches)`  `[`executeEvent`](#executeEvent)`  `[`getNextRunTime`](#getNextRunTime)`  `[`removeEvent`](#removeEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#captureText}

`captureText`

[events.t](../file/events.t.html)\[[330](../source/events.t.html#330)\]

::: desc
Text captured from callMethod()
:::

[]{#eventOrder}

`eventOrder`

[events.t](../file/events.t.html)\[[268](../source/events.t.html#268)\]

::: desc
Event order - this establishes the order we run relative to other events
scheduled to run at the same game clock time. Lowest number goes first.
By default, we provide an event order of 100, which should leave plenty
of room for custom events before and after default events.
:::

[]{#executed}

`executed`

[events.t](../file/events.t.html)\[[333](../source/events.t.html#333)\]

::: desc
Flag - has this event ever been executed
:::

[]{#interval_}

`interval_`

[events.t](../file/events.t.html)\[[236](../source/events.t.html#236)\]

::: desc
The interval at which this Event is to be executed.
:::

[]{#isPromptDaemon}

`isPromptDaemon`

[events.t](../file/events.t.html)\[[278](../source/events.t.html#278)\]

::: desc
by default, we\'re not a per-command-prompt daemon
:::

[]{#nextRunTime}

`nextRunTime`

[events.t](../file/events.t.html)\[[275](../source/events.t.html#275)\]

::: desc
our next execution time, expressed in game clock time; by default,
we\'ll set this to nil, which means that we are not scheduled to execute
at all
:::

[]{#obj_}

`obj_`

[events.t](../file/events.t.html)\[[230](../source/events.t.html#230)\]

::: desc
The object we\'re associated with
:::

[]{#prop_}

`prop_`

[events.t](../file/events.t.html)\[[233](../source/events.t.html#233)\]

::: desc
A pointer to the property of that object to execute
:::

[]{#senseObj_}

`senseObj_`

[events.t](../file/events.t.html)\[[320](../source/events.t.html#320)\]

::: desc
If the senseObj\_ property is defined (normally via our constructor),
the player character must be able to sense the senseObj\_ via the sense
defined in senseProp\_ for any textual output from obj\_.(prop\_) to be
displayed when this Event is executed.
:::

[]{#senseProp_}

`senseProp_`

[events.t](../file/events.t.html)\[[327](../source/events.t.html#327)\]

::: desc
The sense via which we test whether senseObj\_ can be sensed by the
player character. This must be given as an appropriate property of the
Query object, e.g. &canSee or &canHear.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#callMethod}

`callMethod ( )`

[events.t](../file/events.t.html)\[[281](../source/events.t.html#281)\]

::: desc
Call the method this Event should execute when it\'s ready to do so
:::

[]{#construct}

`construct (obj, prop)`

[events.t](../file/events.t.html)\[[216](../source/events.t.html#216)\]

::: desc
Construct a new Event
:::

[]{#delayEvent}

`delayEvent (turns)`

[events.t](../file/events.t.html)\[[248](../source/events.t.html#248)\]

::: desc
delay our scheduled run time by the given number of turns
:::

[]{#eventMatches}

`eventMatches (obj, prop)`

[events.t](../file/events.t.html)\[[259](../source/events.t.html#259)\]

::: desc
does this event match the given object/property combination?
:::

[]{#executeEvent}

`executeEvent ( )`

[events.t](../file/events.t.html)\[[256](../source/events.t.html#256)\]

::: desc
Execute the event. This must be overridden by the subclass to perform
the appropriate operation when executed. In particular, the subclass
must reschedule or unschedule the event, as appropriate.
:::

[]{#getNextRunTime}

`getNextRunTime ( )`

[events.t](../file/events.t.html)\[[242](../source/events.t.html#242)\]

::: desc
Get the next run time, i.e. the next turn on which this Event should
execute obj\_.(prop\_).
:::

[]{#removeEvent}

`removeEvent ( )`

[events.t](../file/events.t.html)\[[309](../source/events.t.html#309)\]

::: desc
Remove this event from the eventManager\'s list of events.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
