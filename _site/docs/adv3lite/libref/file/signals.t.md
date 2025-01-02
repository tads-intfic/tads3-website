<span class="title">signals.t</span><span class="type">file</span>

[source file](../source/signals.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

--------------------------------------------------------

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`Signal`](../object/Signal.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`connect`](#connect)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`unconnect`](#unconnect)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="connect"></span>

`connect (sender, signal, receiver, handler?)`

[signals.t](../file/signals.t.html)\[[313](../source/signals.t.html#313)\]

<div class="desc">

Function to set up a signalling relation between sender and receiver via
the signal Signal. This first created a relation between sender and
receiver \[using the RELATIONS extension) And then, if the handler
parameter is supplied, adds an appropriate entry to the signal's
dispatchTab table to register that this is the handler to use on the
receiver when signal is sent to receiver from sender. \[SIGNALS
EXTENSION\]

</div>

<span id="DefSignal"></span>

`DefSignal (lit, lit)`

[signals.t](../file/signals.t.html)\[[122](../source/signals.t.html#122)\]

<div class="desc">

Signals to handle common state changes on Thing \[SIGNALS EXTENSION\]

</div>

<span id="DefSignal"></span>

`DefSignal (unlit, unlit)`

[signals.t](../file/signals.t.html)\[[123](../source/signals.t.html#123)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (discover, discovered)`

[signals.t](../file/signals.t.html)\[[124](../source/signals.t.html#124)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (undiscover, lost)`

[signals.t](../file/signals.t.html)\[[125](../source/signals.t.html#125)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (lock, locked)`

[signals.t](../file/signals.t.html)\[[126](../source/signals.t.html#126)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (unlock, unlocked)`

[signals.t](../file/signals.t.html)\[[127](../source/signals.t.html#127)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (on, turned, on)`

[signals.t](../file/signals.t.html)\[[128](../source/signals.t.html#128)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (off, turned, off)`

[signals.t](../file/signals.t.html)\[[129](../source/signals.t.html#129)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (worn, worn)`

[signals.t](../file/signals.t.html)\[[130](../source/signals.t.html#130)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (doff, doffed)`

[signals.t](../file/signals.t.html)\[[131](../source/signals.t.html#131)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (move, moved)`

[signals.t](../file/signals.t.html)\[[132](../source/signals.t.html#132)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (actmove, action, moved)`

[signals.t](../file/signals.t.html)\[[133](../source/signals.t.html#133)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (seen, seen)`

[signals.t](../file/signals.t.html)\[[134](../source/signals.t.html#134)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (examine, examine)`

[signals.t](../file/signals.t.html)\[[135](../source/signals.t.html#135)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (take, take)`

[signals.t](../file/signals.t.html)\[[136](../source/signals.t.html#136)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (drop, drop)`

[signals.t](../file/signals.t.html)\[[137](../source/signals.t.html#137)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (open, open)`

[signals.t](../file/signals.t.html)\[[138](../source/signals.t.html#138)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (close, closed)`

[signals.t](../file/signals.t.html)\[[139](../source/signals.t.html#139)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (push, push)`

[signals.t](../file/signals.t.html)\[[140](../source/signals.t.html#140)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (pull, pull)`

[signals.t](../file/signals.t.html)\[[141](../source/signals.t.html#141)\]

<div class="desc">

*no description available*

</div>

<span id="DefSignal"></span>

`DefSignal (feel, feel)`

[signals.t](../file/signals.t.html)\[[142](../source/signals.t.html#142)\]

<div class="desc">

*no description available*

</div>

<span id="unconnect"></span>

`unconnect (sender, signal, receiver)`

[signals.t](../file/signals.t.html)\[[327](../source/signals.t.html#327)\]

<div class="desc">

Function to remove the signalling relationship between sender and
receiver via the signal Signal. \[SIGNALS EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
