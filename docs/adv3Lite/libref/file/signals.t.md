---
layout: docs
---
<span class="title">signals.t</span><span class="type">file</span>

[source file](../source/signals.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



--------------------------------------------------------



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`Signal`](../object/Signal.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`connect`](#connect) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`DefSignal`](#DefSignal) [`unconnect`](#unconnect)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="connect"></span>

`connect (sender, signal, receiver, handler?)`

[signals.t](../file/signals.t.html)\[[313](../source/signals.t.html#313)\]



Function to set up a signalling relation between sender and receiver via
the signal Signal. This first created a relation between sender and
receiver \[using the RELATIONS extension) And then, if the handler
parameter is supplied, adds an appropriate entry to the signal's
dispatchTab table to register that this is the handler to use on the
receiver when signal is sent to receiver from sender. \[SIGNALS
EXTENSION\]



<span id="DefSignal"></span>

`DefSignal (lit, lit)`

[signals.t](../file/signals.t.html)\[[122](../source/signals.t.html#122)\]



Signals to handle common state changes on Thing \[SIGNALS EXTENSION\]



<span id="DefSignal"></span>

`DefSignal (unlit, unlit)`

[signals.t](../file/signals.t.html)\[[123](../source/signals.t.html#123)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (discover, discovered)`

[signals.t](../file/signals.t.html)\[[124](../source/signals.t.html#124)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (undiscover, lost)`

[signals.t](../file/signals.t.html)\[[125](../source/signals.t.html#125)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (lock, locked)`

[signals.t](../file/signals.t.html)\[[126](../source/signals.t.html#126)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (unlock, unlocked)`

[signals.t](../file/signals.t.html)\[[127](../source/signals.t.html#127)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (on, turned, on)`

[signals.t](../file/signals.t.html)\[[128](../source/signals.t.html#128)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (off, turned, off)`

[signals.t](../file/signals.t.html)\[[129](../source/signals.t.html#129)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (worn, worn)`

[signals.t](../file/signals.t.html)\[[130](../source/signals.t.html#130)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (doff, doffed)`

[signals.t](../file/signals.t.html)\[[131](../source/signals.t.html#131)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (move, moved)`

[signals.t](../file/signals.t.html)\[[132](../source/signals.t.html#132)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (actmove, action, moved)`

[signals.t](../file/signals.t.html)\[[133](../source/signals.t.html#133)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (seen, seen)`

[signals.t](../file/signals.t.html)\[[134](../source/signals.t.html#134)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (examine, examine)`

[signals.t](../file/signals.t.html)\[[135](../source/signals.t.html#135)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (take, take)`

[signals.t](../file/signals.t.html)\[[136](../source/signals.t.html#136)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (drop, drop)`

[signals.t](../file/signals.t.html)\[[137](../source/signals.t.html#137)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (open, open)`

[signals.t](../file/signals.t.html)\[[138](../source/signals.t.html#138)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (close, closed)`

[signals.t](../file/signals.t.html)\[[139](../source/signals.t.html#139)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (push, push)`

[signals.t](../file/signals.t.html)\[[140](../source/signals.t.html#140)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (pull, pull)`

[signals.t](../file/signals.t.html)\[[141](../source/signals.t.html#141)\]



*no description available*



<span id="DefSignal"></span>

`DefSignal (feel, feel)`

[signals.t](../file/signals.t.html)\[[142](../source/signals.t.html#142)\]



*no description available*



<span id="unconnect"></span>

`unconnect (sender, signal, receiver)`

[signals.t](../file/signals.t.html)\[[327](../source/signals.t.html#327)\]



Function to remove the signalling relationship between sender and
receiver via the signal Signal. \[SIGNALS EXTENSION\]





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


