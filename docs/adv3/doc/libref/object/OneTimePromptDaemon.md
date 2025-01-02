---
layout: docs
---
<span class="title">OneTimePromptDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[853](../source/events.t.html#853)\]

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



A one-time-only prompt daemon is a regular command prompt daemon, except
that it fires only once. After it fires once, the daemon automatically
deactivates itself, so that it won't fire again.

Prompt daemons are occasionally useful for non-recurring processing,
when you want to defer some bit of code until a "safe" time between
turns. In these cases, the regular PromptDaemon is inconvenient to use
because it automatically recurs. This subclass is handy for these cases,
since it lets you schedule some bit of processing for a single deferred
execution.

One special situation where one-time prompt daemons can be handy is in
triggering conversational events - such as initiating a conversation -
at the very beginning of the game. Initiating a conversation can only be
done from within an action context, but no action context is in effect
during the game's initialization. An easy way to deal with this is to
create a one-time prompt daemon during initialization, and then trigger
the event from the daemon's callback method. The prompt daemon will set
up a daemon action environment just before the first command prompt is
displayed, at which point the callback will be able to trigger the event
as though it were in ordinary action handler code.

`class `**`OneTimePromptDaemon`**` :   `[`PromptDaemon`](../object/PromptDaemon.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OneTimePromptDaemon`**  
[`PromptDaemon`](../object/PromptDaemon.html)  
[`Event`](../object/Event.html)  
[`BasicEvent`](../object/BasicEvent.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `PromptDaemon` :  
[`isPromptDaemon`](../object/PromptDaemon.html#isPromptDaemon)

Inherited from `Event` :  
[`eventOrder`](../object/Event.html#eventOrder) [`nextRunTime`](../object/Event.html#nextRunTime)

Inherited from `BasicEvent` :  
[`obj_`](../object/BasicEvent.html#obj_) [`prop_`](../object/BasicEvent.html#prop_) [`sense_`](../object/BasicEvent.html#sense_) [`source_`](../object/BasicEvent.html#source_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`executeEvent`](#executeEvent)



Inherited from `Event` :  
[`construct`](../object/Event.html#construct) [`delayEvent`](../object/Event.html#delayEvent) [`getNextRunTime`](../object/Event.html#getNextRunTime) [`removeEvent`](../object/Event.html#removeEvent)

Inherited from `BasicEvent` :  
[`callMethod`](../object/BasicEvent.html#callMethod) [`eventMatches`](../object/BasicEvent.html#eventMatches)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[854](../source/events.t.html#854)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


