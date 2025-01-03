---
layout: docs
---
<span class="title">commandSequencer</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[1227](../source/output.t.html#1227)\]

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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`commandSequencer`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`patNextTag`](#patNextTag) [`state_`](#state_)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`filterText`](#filterText) [`setCommandMode`](#setCommandMode) [`writeThrough`](#writeThrough)



<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="patNextTag"></span>

`patNextTag`

[output.t](../file/output.t.html)\[[1264](../source/output.t.html#1264)\]



pre-compile our tag sequence pattern



<span id="state_"></span>

`state_`

[output.t](../file/output.t.html)\[[1543](../source/output.t.html#1543)\]



our current state - start out in before-command mode



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1272](../source/output.t.html#1272)\]



Apply our filter



<span id="setCommandMode"></span>

`setCommandMode ( )`

[output.t](../file/output.t.html)\[[1234](../source/output.t.html#1234)\]



Force the sequencer into mid-command mode. This can be used to defeat
the resequencing into before-results mode that occurs if any interactive
command-line input must be read in the course of a command's execution.



<span id="writeThrough"></span>

`writeThrough (txt)`

[output.t](../file/output.t.html)\[[1240](../source/output.t.html#1240)\]



Internal routine: write the given text directly through us, skipping any
filtering we'd otherwise apply.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


