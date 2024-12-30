[PromptDaemon]{.title}[class]{.type}

[events.t](../file/events.t.html)\[[483](../source/events.t.html#483)\]

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
Command Prompt Daemon. This is a special type of daemon that executes
not according to the game clock, but rather once per command prompt. The
system executes all of these daemons just before each time it prompts
for a command line.

`class `**`PromptDaemon`**` :   `[`Event`](../object/Event.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PromptDaemon`**\
`         `[`Event`](../object/Event.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`PromptDaemon`**\
`         `[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`isPromptDaemon`](#isPromptDaemon)`  `

Inherited from `Event` :\
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`executeEvent`](#executeEvent)`  `

Inherited from `Event` :\
` `[`callMethod`](../object/Event.html#callMethod)`  `[`construct`](../object/Event.html#construct)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`getNextRunTime`](../object/Event.html#getNextRunTime)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#isPromptDaemon}

`isPromptDaemon`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[496](../source/events.t.html#496)\]

::: desc
flag: we are a special per-command-prompt daemon
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#executeEvent}

`executeEvent ( )`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[485](../source/events.t.html#485)\]

::: desc
execute the daemon
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
