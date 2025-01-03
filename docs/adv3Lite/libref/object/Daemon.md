---
layout: docs
---
<span class="title">Daemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[396](../source/events.t.html#396)\]

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



A Daemon is an Event that executes once every defined number of turns.

`class `**`Daemon`**` :   `[`Event`](../object/Event.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Daemon`**  
[`Event`](../object/Event.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Daemon`**  
[`SenseDaemon`](../object/SenseDaemon.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`interval_`](#interval_)

Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText) [`eventOrder`](../object/Event.html#eventOrder) [`executed`](../object/Event.html#executed) [`isPromptDaemon`](../object/Event.html#isPromptDaemon) [`nextRunTime`](../object/Event.html#nextRunTime) [`obj_`](../object/Event.html#obj_) [`prop_`](../object/Event.html#prop_) [`senseObj_`](../object/Event.html#senseObj_) [`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`executeEvent`](#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod) [`delayEvent`](../object/Event.html#delayEvent) [`eventMatches`](../object/Event.html#eventMatches) [`getNextRunTime`](../object/Event.html#getNextRunTime) [`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="interval_"></span>

`interval_`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[444](../source/events.t.html#444)\]



our execution interval, in turns



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj, prop, interval)`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[405](../source/events.t.html#405)\]



Creation. 'interval' is the number of turns between invocations of the
daemon; this should be at least 1, which causes the daemon to be invoked
on each turn. The first execution will be (interval-1) turns in the
future - so if interval is 1, the daemon will first be executed on the
current turn, and if interval is 2, the daemon will be executed on the
next turn.



<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[434](../source/events.t.html#434)\]



execute the daemon
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


