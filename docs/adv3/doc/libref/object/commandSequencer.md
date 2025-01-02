---
layout: docs
---
<span class="title">commandSequencer</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[1611](../source/output.t.html#1611)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`commandSequencer`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`patNextTag`](#patNextTag)`  `[`state_`](#state_)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`filterText`](#filterText)`  `[`setCommandMode`](#setCommandMode)`  `[`writeThrough`](#writeThrough)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="patNextTag"></span>

`patNextTag`

[output.t](../file/output.t.html)\[[1648](../source/output.t.html#1648)\]

<div class="desc">

pre-compile our tag sequence pattern

</div>

<span id="state_"></span>

`state_`

[output.t](../file/output.t.html)\[[1862](../source/output.t.html#1862)\]

<div class="desc">

our current state - start out in before-command mode

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1656](../source/output.t.html#1656)\]

<div class="desc">

Apply our filter

</div>

<span id="setCommandMode"></span>

`setCommandMode ( )`

[output.t](../file/output.t.html)\[[1618](../source/output.t.html#1618)\]

<div class="desc">

Force the sequencer into mid-command mode. This can be used to defeat
the resequencing into before-results mode that occurs if any interactive
command-line input must be read in the course of a command's execution.

</div>

<span id="writeThrough"></span>

`writeThrough (txt)`

[output.t](../file/output.t.html)\[[1624](../source/output.t.html#1624)\]

<div class="desc">

Internal routine: write the given text directly through us, skipping any
filtering we'd otherwise apply.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
