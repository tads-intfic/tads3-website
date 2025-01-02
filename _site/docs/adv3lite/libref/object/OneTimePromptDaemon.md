<span class="title">OneTimePromptDaemon</span><span class="type">class</span>

[events.t](../file/events.t.html)\[[523](../source/events.t.html#523)\]

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

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`OneTimePromptDaemon`**  
`         `[`PromptDaemon`](../object/PromptDaemon.html)  
`                 `[`Event`](../object/Event.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `PromptDaemon` :  
` `[`isPromptDaemon`](../object/PromptDaemon.html#isPromptDaemon)`  `

Inherited from `Event` :  
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`executeEvent`](#executeEvent)`  `

` `

Inherited from `Event` :  
` `[`callMethod`](../object/Event.html#callMethod)`  `[`construct`](../object/Event.html#construct)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`getNextRunTime`](../object/Event.html#getNextRunTime)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="executeEvent"></span>

`executeEvent ( )`<span class="rem">OVERRIDDEN</span>

[events.t](../file/events.t.html)\[[524](../source/events.t.html#524)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
