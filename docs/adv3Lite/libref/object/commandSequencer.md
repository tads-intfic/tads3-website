[commandSequencer]{.title}[object]{.type}

[output.t](../file/output.t.html)\[[1227](../source/output.t.html#1227)\]

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
Command Sequencer Filter. This is an output filter that handles the
special \<.commandsep\> tag for visual command separation. This tag has
the form of a style tag, but must be processed specially.

\<.commandsep\> shows an appropriate separator between commands. Before
the first command output or after the last command output, this has no
effect. A run of multiple consecutive \<.commandsep\> tags is treated as
a single tag.

Between commands, we show gLibMessages.commandResultsSeparator. After an
input line and before the first command result text, we show
gLibMessages.commandResultsPrefix. After the last command result text
before a new input line, we show gLibMessages.commandResultsSuffix. If
we read two input lines, and there is no intervening text output at all,
we show gLibMessages.commandResultsEmpty.

The input manager should write a \<.commandbefore\> tag whenever it
starts reading a command line, and a \<.commandafter\> tag whenever it
finishes reading a command line.

`transient `**`commandSequencer`**` :   `[`OutputFilter`](../object/OutputFilter.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`commandSequencer`**\
`         `[`OutputFilter`](../object/OutputFilter.html)\
`                 object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`patNextTag`](#patNextTag)`  `[`state_`](#state_)`  `

` `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`filterText`](#filterText)`  `[`setCommandMode`](#setCommandMode)`  `[`writeThrough`](#writeThrough)`  `

` `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#patNextTag}

`patNextTag`

[output.t](../file/output.t.html)\[[1264](../source/output.t.html#1264)\]

::: desc
pre-compile our tag sequence pattern
:::

[]{#state_}

`state_`

[output.t](../file/output.t.html)\[[1543](../source/output.t.html#1543)\]

::: desc
our current state - start out in before-command mode
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#filterText}

`filterText (ostr, txt)`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[1272](../source/output.t.html#1272)\]

::: desc
Apply our filter
:::

[]{#setCommandMode}

`setCommandMode ( )`

[output.t](../file/output.t.html)\[[1234](../source/output.t.html#1234)\]

::: desc
Force the sequencer into mid-command mode. This can be used to defeat
the resequencing into before-results mode that occurs if any interactive
command-line input must be read in the course of a command\'s execution.
:::

[]{#writeThrough}

`writeThrough (txt)`

[output.t](../file/output.t.html)\[[1240](../source/output.t.html#1240)\]

::: desc
Internal routine: write the given text directly through us, skipping any
filtering we\'d otherwise apply.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
