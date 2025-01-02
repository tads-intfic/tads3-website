---
layout: docs
---
<span class="title">PromptDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[813](../source/events.t.html#813)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Command Prompt Daemon. This is a special type of daemon that executes
not according to the game clock, but rather once per command prompt. The
system executes all of these daemons just before each time it prompts
for a command line.

`class `**`PromptDaemon`**` :   `[`Event`](../object/Event.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PromptDaemon`**  
[`Event`](../object/Event.html)  
[`BasicEvent`](../object/BasicEvent.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PromptDaemon`**  
[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`isPromptDaemon`](#isPromptDaemon)

Inherited from `Event` :  
[`eventOrder`](../object/Event.html#eventOrder)[`nextRunTime`](../object/Event.html#nextRunTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_)[`prop_`](../object/BasicEvent.html#prop_)[`sense_`](../object/BasicEvent.html#sense_)[`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`executeEvent`](#executeEvent)

Inherited from `Event` :  
[`construct`](../object/Event.html#construct)[`delayEvent`](../object/Event.html#delayEvent)[`getNextRunTime`](../object/Event.html#getNextRunTime)[`removeEvent`](../object/Event.html#removeEvent)

Inherited from `BasicEvent` :  
[`callMethod`](../object/BasicEvent.html#callMethod)[`eventMatches`](../object/BasicEvent.html#eventMatches)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="isPromptDaemon"></span>

`isPromptDaemon`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[826](../source/events.t.html#826)\]

<div class="desc">

flag: we are a special per-command-prompt daemon

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[815](../source/events.t.html#815)\]

<div class="desc">

execute the daemon

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
