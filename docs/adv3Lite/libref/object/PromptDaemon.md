---
layout: docs
---
<span class="title">PromptDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[483](../source/events.t.html#483)\]

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



Command Prompt Daemon. This is a special type of daemon that executes
not according to the game clock, but rather once per command prompt. The
system executes all of these daemons just before each time it prompts
for a command line.

`class `**`PromptDaemon`**` :   `[`Event`](../object/Event.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`PromptDaemon`**  
[`Event`](../object/Event.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`PromptDaemon`**  
[`OneTimePromptDaemon`](../object/OneTimePromptDaemon.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isPromptDaemon`](#isPromptDaemon)

Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText)[`eventOrder`](../object/Event.html#eventOrder)[`executed`](../object/Event.html#executed)[`interval_`](../object/Event.html#interval_)[`nextRunTime`](../object/Event.html#nextRunTime)[`obj_`](../object/Event.html#obj_)[`prop_`](../object/Event.html#prop_)[`senseObj_`](../object/Event.html#senseObj_)[`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`executeEvent`](#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod)[`construct`](../object/Event.html#construct)[`delayEvent`](../object/Event.html#delayEvent)[`eventMatches`](../object/Event.html#eventMatches)[`getNextRunTime`](../object/Event.html#getNextRunTime)[`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isPromptDaemon"></span>

`isPromptDaemon`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[496](../source/events.t.html#496)\]



flag: we are a special per-command-prompt daemon



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[485](../source/events.t.html#485)\]



execute the daemon





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


