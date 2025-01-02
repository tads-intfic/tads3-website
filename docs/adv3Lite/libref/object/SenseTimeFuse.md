---
---
<span class="title">SenseTimeFuse</span><span class="type">class</span>

[objtime.t](../file/objtime.t.html)\[[324](../source/objtime.t.html#324)\]

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

A SenseTimeFuse is a TimeFuse that only displays its output if senseObj
can sense obj via the sense passed in the senseProp parameter at the
time the fuse executes. \[PART OF THE OBJTIME EXTENSION\]

`class `**`SenseTimeFuse`**` :   `[`TimeFuse`](../object/TimeFuse.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SenseTimeFuse`**  
`         `[`TimeFuse`](../object/TimeFuse.html)  
`                 `[`Fuse`](../object/Fuse.html)  
`                         `[`Event`](../object/Event.html)  
`                                 object`  
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

Inherited from `TimeFuse` :  
` `[`eventTime`](../object/TimeFuse.html#eventTime)`  `

` `

Inherited from `Event` :  
` `[`captureText`](../object/Event.html#captureText)`  `[`eventOrder`](../object/Event.html#eventOrder)`  `[`executed`](../object/Event.html#executed)`  `[`interval_`](../object/Event.html#interval_)`  `[`isPromptDaemon`](../object/Event.html#isPromptDaemon)`  `[`nextRunTime`](../object/Event.html#nextRunTime)`  `[`obj_`](../object/Event.html#obj_)`  `[`prop_`](../object/Event.html#prop_)`  `[`senseObj_`](../object/Event.html#senseObj_)`  `[`senseProp_`](../object/Event.html#senseProp_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

Inherited from `TimeFuse` :  
` `[`getNextRunTime`](../object/TimeFuse.html#getNextRunTime)`  `

Inherited from `Fuse` :  
` `[`executeEvent`](../object/Fuse.html#executeEvent)`  `

Inherited from `Event` :  
` `[`callMethod`](../object/Event.html#callMethod)`  `[`delayEvent`](../object/Event.html#delayEvent)`  `[`eventMatches`](../object/Event.html#eventMatches)`  `[`removeEvent`](../object/Event.html#removeEvent)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval, senseProp, =, &, canSee, senseObj, =, obj)`<span class="rem">OVERRIDDEN</span>

[objtime.t](../file/objtime.t.html)\[[333](../source/objtime.t.html#333)\]

<div class="desc">

senseObj is the object which must be sensed for this Fuse's text to be
displayed. senseProp is one of &canSee, &canReach, &canHear, &canSmell.
If these parameters are omitted then the senseObj will be the same as
the obj whose prop property is executed by the Fuse, and the senseProp
will be &canSee, probably the most common case.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
