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



Sense context output filter. When the sense context doesn't allow the
player character to sense whatever's going on, we'll block all output;
otherwise, we'll pass output through unchanged.

**`senseContext`**` :   `[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`senseContext`**  
[`SwitchableCaptureFilter`](../object/SwitchableCaptureFilter.html)  
[`CaptureFilter`](../object/CaptureFilter.html)  
[`OutputFilter`](../object/OutputFilter.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cached_`](#cached_)[`isBlocking_`](#isBlocking_)[`sense_`](#sense_)[`source_`](#source_)

Inherited from `SwitchableCaptureFilter` :  
[`isBlocking`](../object/SwitchableCaptureFilter.html#isBlocking)





<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`isBlocking`](#isBlocking)[`recalcSenseContext`](#recalcSenseContext)[`setSenseContext`](#setSenseContext)[`shouldBlock`](#shouldBlock)[`withSenseContext`](#withSenseContext)

Inherited from `SwitchableCaptureFilter` :  
[`filterText`](../object/SwitchableCaptureFilter.html#filterText)





<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cached_"></span>

`cached_`

[pov.t](../file/pov.t.html)\[[109](../source/pov.t.html#109)\]



*no description available*



<span id="isBlocking_"></span>

`isBlocking_`

[pov.t](../file/pov.t.html)\[[108](../source/pov.t.html#108)\]



our current cached blocking status, and its validity



<span id="sense_"></span>

`sense_`

[pov.t](../file/pov.t.html)\[[179](../source/pov.t.html#179)\]



the source object and sense of the sensory context



<span id="source_"></span>

`source_`

[pov.t](../file/pov.t.html)\[[180](../source/pov.t.html#180)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="isBlocking"></span>

`isBlocking ( )`

[pov.t](../file/pov.t.html)\[[91](../source/pov.t.html#91)\]



Get our current blocking status. If we've already cached the status,
we'll return the cached status; otherwise, we'll compute and cache the
new blocking status, based on the current sensory environment.



<span id="recalcSenseContext"></span>

`recalcSenseContext ( )`

[pov.t](../file/pov.t.html)\[[75](../source/pov.t.html#75)\]



Recalculate the current sense context. We will check to see if the
player character can sense the current sense context's source object in
the current sense context's sense, and show or hide output from this
point forward accordingly. This can be called any time conditions change
in such a way that the sense context should be refigured.



<span id="setSenseContext"></span>

`setSenseContext (source, sense)`

[pov.t](../file/pov.t.html)\[[168](../source/pov.t.html#168)\]



Set a sense context.



<span id="shouldBlock"></span>

`shouldBlock ( )`

[pov.t](../file/pov.t.html)\[[115](../source/pov.t.html#115)\]



Calculate whether or not I should be blocking output according to the
current game state. Returns true if so, nil if not.



<span id="withSenseContext"></span>

`withSenseContext (source, sense, func)`

[pov.t](../file/pov.t.html)\[[141](../source/pov.t.html#141)\]



invoke a callback with a given sense context





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


