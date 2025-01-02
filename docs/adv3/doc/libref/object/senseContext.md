---
layout: docs
---
<span class="title">senseContext</span><span class="type">object</span>

[pov.t](../file/pov.t.html)\[[66](../source/pov.t.html#66)\]

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

Sense context output filter. When the sense context doesn't allow the
player character to sense whatever's going on, we'll block all output;
otherwise, we'll pass output through unchanged.

**`senseContext`**` :   `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`senseContext`**  
`         `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)  
`                 `[`CaptureFilter`](../object/CaptureFilter.html)  
`                         `[`OutputFilter`](../object/OutputFilter.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`cached_`](#cached_)`  `[`isBlocking_`](#isBlocking_)`  `[`sense_`](#sense_)`  `[`source_`](#source_)`  `

Inherited from `SwitchableCaptureFilter` :  
` `[`isBlocking`](../object/SwitchableCaptureFilter.html#isBlocking)`  `

` `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`isBlocking`](#isBlocking)`  `[`recalcSenseContext`](#recalcSenseContext)`  `[`setSenseContext`](#setSenseContext)`  `[`shouldBlock`](#shouldBlock)`  `[`withSenseContext`](#withSenseContext)`  `

Inherited from `SwitchableCaptureFilter` :  
` `[`filterText`](../object/SwitchableCaptureFilter.html#filterText)`  `

` `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cached_"></span>

`cached_`

[pov.t](../file/pov.t.html)\[[109](../source/pov.t.html#109)\]

<div class="desc">

*no description available*

</div>

<span id="isBlocking_"></span>

`isBlocking_`

[pov.t](../file/pov.t.html)\[[108](../source/pov.t.html#108)\]

<div class="desc">

our current cached blocking status, and its validity

</div>

<span id="sense_"></span>

`sense_`

[pov.t](../file/pov.t.html)\[[179](../source/pov.t.html#179)\]

<div class="desc">

the source object and sense of the sensory context

</div>

<span id="source_"></span>

`source_`

[pov.t](../file/pov.t.html)\[[180](../source/pov.t.html#180)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isBlocking"></span>

`isBlocking ( )`

[pov.t](../file/pov.t.html)\[[91](../source/pov.t.html#91)\]

<div class="desc">

Get our current blocking status. If we've already cached the status,
we'll return the cached status; otherwise, we'll compute and cache the
new blocking status, based on the current sensory environment.

</div>

<span id="recalcSenseContext"></span>

`recalcSenseContext ( )`

[pov.t](../file/pov.t.html)\[[75](../source/pov.t.html#75)\]

<div class="desc">

Recalculate the current sense context. We will check to see if the
player character can sense the current sense context's source object in
the current sense context's sense, and show or hide output from this
point forward accordingly. This can be called any time conditions change
in such a way that the sense context should be refigured.

</div>

<span id="setSenseContext"></span>

`setSenseContext (source, sense)`

[pov.t](../file/pov.t.html)\[[168](../source/pov.t.html#168)\]

<div class="desc">

Set a sense context.

</div>

<span id="shouldBlock"></span>

`shouldBlock ( )`

[pov.t](../file/pov.t.html)\[[115](../source/pov.t.html#115)\]

<div class="desc">

Calculate whether or not I should be blocking output according to the
current game state. Returns true if so, nil if not.

</div>

<span id="withSenseContext"></span>

`withSenseContext (source, sense, func)`

[pov.t](../file/pov.t.html)\[[141](../source/pov.t.html#141)\]

<div class="desc">

invoke a callback with a given sense context

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
