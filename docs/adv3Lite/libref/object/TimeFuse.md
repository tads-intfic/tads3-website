---
layout: docs
---
<span class="title">TimeFuse</span><span class="type">class</span>

[objtime.t](../file/objtime.t.html)\[[260](../source/objtime.t.html#260)\]

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
example '15:34' would specify that the Fuse is to execute at 15:34 on
the current day, while '2014:06:22 15:34:00' would specify that the Fuse
is to execute at 15:34 on 22nd June 2014 (game time, not real time).

\[PART OF THE OBJTIME EXTENSION\]

`class `**`TimeFuse`**` :   `[`Fuse`](../object/Fuse.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TimeFuse`**  
[`Fuse`](../object/Fuse.html)  
[`Event`](../object/Event.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TimeFuse`**  
[`SenseTimeFuse`](../object/SenseTimeFuse.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`eventTime`](#eventTime)



Inherited from `Event` :  
[`captureText`](../object/Event.html#captureText)[`eventOrder`](../object/Event.html#eventOrder)[`executed`](../object/Event.html#executed)[`interval_`](../object/Event.html#interval_)[`isPromptDaemon`](../object/Event.html#isPromptDaemon)[`nextRunTime`](../object/Event.html#nextRunTime)[`obj_`](../object/Event.html#obj_)[`prop_`](../object/Event.html#prop_)[`senseObj_`](../object/Event.html#senseObj_)[`senseProp_`](../object/Event.html#senseProp_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`getNextRunTime`](#getNextRunTime)

Inherited from `Fuse` :  
[`executeEvent`](../object/Fuse.html#executeEvent)

Inherited from `Event` :  
[`callMethod`](../object/Event.html#callMethod)[`delayEvent`](../object/Event.html#delayEvent)[`eventMatches`](../object/Event.html#eventMatches)[`removeEvent`](../object/Event.html#removeEvent)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="eventTime"></span>

`eventTime`

[objtime.t](../file/objtime.t.html)\[[301](../source/objtime.t.html#301)\]

<div class="desc">

The time (as a Date object) at which this Fuse is set to activate

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, prop, interval)`<span class="rem">OVERRIDDEN</span>

[objtime.t](../file/objtime.t.html)\[[261](../source/objtime.t.html#261)\]

<div class="desc">

*no description available*

</div>

<span id="getNextRunTime"></span>

`getNextRunTime ( )`<span class="rem">OVERRIDDEN</span>

[objtime.t](../file/objtime.t.html)\[[308](../source/objtime.t.html#308)\]

<div class="desc">

If our eventTime is still in the future, return a turn count well into
the future so we don't execute yet; otherwise return the current turn
count so we do execute on this turn.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
