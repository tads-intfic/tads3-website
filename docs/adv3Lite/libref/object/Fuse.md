[Fuse]{.title}[class]{.type}

[events.t](../file/events.t.html)\[[341](../source/events.t.html#341)\]

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
Fuse. A fuse is an event that fires once at a given time in the future.
Once a fuse is executed, it is removed from further scheduling.

`class `**`Fuse`**` :   `[`Event`](../object/Event.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Fuse`**\
`         `[`Event`](../object/Event.html)\
`                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Fuse`**\
`         `[`SenseFuse`](../object/SenseFuse.html)\
`         `[`TimeFuse`](../object/TimeFuse.html)\
`                 `[`SenseTimeFuse`](../object/SenseTimeFuse.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `

Inherited from `Event` :\
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

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

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (obj, prop, interval)`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[347](../source/events.t.html#347)\]

::: desc
Creation. \'turns\' is the number of turns in the future at which the
fuse is executed; if turns is 0, the fuse will be executed on the
current turn.
:::

[]{#executeEvent}

`executeEvent ( )`[OVERRIDDEN]{.rem}

[events.t](../file/events.t.html)\[[360](../source/events.t.html#360)\]

::: desc
execute the fuse
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
