[TimeFuse]{.title}[class]{.type}

[objtime.t](../file/objtime.t.html)\[[260](../source/objtime.t.html#260)\]

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
A TimeFuse is a Fuse that executes either at a set time or after a set
time

obj and prop are the same as for Fuse, i.e. when the Fuse fires it will
call the prop property of obj.

interval may be speficied as a list, an integer, a BigNumber, a Date or
a single-quoted string. A string or a Date specifies the time at which
the Fuse will execute. Anything else specifies the time after which the
Fuse will execute.

If interval is a list it should be in the form \[years, months, days,
hours, minutes, seconds\] (trailing elements can be omitted if they are
zero). The Fuse will then execute after the interval

If interval is an integer then it specifies the number of minutes into
the future that the Fuse will execute.

If interval is a BigNumber than it specifies the number of hours into
the future that the Fuse will execute. E.g. 1.0 specifies 1 hour, while
2.5 specifies 2 hours 30 minutes.

If interval is a single-quoted String, then it specifies the time at
which the Fuse will execute. The format may be any of the formats
recognized by Date.parseDate (for which see the System Manual). For
example \'15:34\' would specify that the Fuse is to execute at 15:34 on
the current day, while \'2014:06:22 15:34:00\' would specify that the
Fuse is to execute at 15:34 on 22nd June 2014 (game time, not real
time).

\[PART OF THE OBJTIME EXTENSION\]

`class `**`TimeFuse`**` :   `[`Fuse`](../object/Fuse.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`TimeFuse`**\
`         `[`Fuse`](../object/Fuse.html)\
`                 `[`Event`](../object/Event.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`TimeFuse`**\
`         `[`SenseTimeFuse`](../object/SenseTimeFuse.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`eventTime`](#eventTime)`  `

` `

Inherited from `Event` :\
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`getNextRunTime`](#getNextRunTime)`  `

Inherited from `Fuse` :\
` `[`executeEvent`](../object/Fuse.html#executeEvent)`  `

Inherited from `Event` :\
` `[`callMethod`](../object/Event.html#callMethod)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#eventTime}

`eventTime`

[objtime.t](../file/objtime.t.html)\[[301](../source/objtime.t.html#301)\]

::: desc
The time (as a Date object) at which this Fuse is set to activate
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (obj, prop, interval)`[OVERRIDDEN]{.rem}

[objtime.t](../file/objtime.t.html)\[[261](../source/objtime.t.html#261)\]

::: desc
*no description available*
:::

[]{#getNextRunTime}

`getNextRunTime ( )`[OVERRIDDEN]{.rem}

[objtime.t](../file/objtime.t.html)\[[308](../source/objtime.t.html#308)\]

::: desc
If our eventTime is still in the future, return a turn count well into
the future so we don\'t execute yet; otherwise return the current turn
count so we do execute on this turn.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
