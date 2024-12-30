[Daemon]{.title}[class]{.type}

[events.t](../file/events.t.html)\[[396](../source/events.t.html#396)\]

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
A Daemon is an Event that executes once every defined number of turns.

`class `**`Daemon`**` :   `[`Event`](../object/Event.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Daemon`**\
`         `[`Event`](../object/Event.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Daemon`**\
`         `[`SenseDaemon`](../object/SenseDaemon.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`interval_`](#interval_)`  `

Inherited from `Event` :\
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`executeEvent`](#executeEvent)`  `

Inherited from `Event` :\
` `[`callMethod`](../object/Event.html#callMethod)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`getNextRunTime`](../object/Event.html#getNextRunTime)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#interval_}

`interval_`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[444](../source/events.t.html#444)\]

::: desc
our execution interval, in turns
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (obj, prop, interval)`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[405](../source/events.t.html#405)\]

::: desc
Creation. \'interval\' is the number of turns between invocations of the
daemon; this should be at least 1, which causes the daemon to be invoked
on each turn. The first execution will be (interval-1) turns in the
future - so if interval is 1, the daemon will first be executed on the
current turn, and if interval is 2, the daemon will be executed on the
next turn.
:::

[]{#executeEvent}

`executeEvent ( )`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[434](../source/events.t.html#434)\]

::: desc
execute the daemon
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
