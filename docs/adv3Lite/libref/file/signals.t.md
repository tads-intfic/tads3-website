[signals.t]{.title}[file]{.type}

[source file](../source/signals.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`Signal`](../object/Signal.html)`  ` []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`connect`](#connect)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`DefSignal`](#DefSignal)`  `[`unconnect`](#unconnect)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#connect}

`connect (sender, signal, receiver, handler?)`

[signals.t](../file/signals.t.html)\[[313](../source/signals.t.html#313)\]

::: desc
Function to set up a signalling relation between sender and receiver via
the signal Signal. This first created a relation between sender and
receiver \[using the RELATIONS extension) And then, if the handler
parameter is supplied, adds an appropriate entry to the signal\'s
dispatchTab table to register that this is the handler to use on the
receiver when signal is sent to receiver from sender. \[SIGNALS
EXTENSION\]
:::

[]{#DefSignal}

`DefSignal (lit, lit)`

[signals.t](../file/signals.t.html)\[[122](../source/signals.t.html#122)\]

::: desc
Signals to handle common state changes on Thing \[SIGNALS EXTENSION\]
:::

[]{#DefSignal}

`DefSignal (unlit, unlit)`

[signals.t](../file/signals.t.html)\[[123](../source/signals.t.html#123)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (discover, discovered)`

[signals.t](../file/signals.t.html)\[[124](../source/signals.t.html#124)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (undiscover, lost)`

[signals.t](../file/signals.t.html)\[[125](../source/signals.t.html#125)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (lock, locked)`

[signals.t](../file/signals.t.html)\[[126](../source/signals.t.html#126)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (unlock, unlocked)`

[signals.t](../file/signals.t.html)\[[127](../source/signals.t.html#127)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (on, turned, on)`

[signals.t](../file/signals.t.html)\[[128](../source/signals.t.html#128)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (off, turned, off)`

[signals.t](../file/signals.t.html)\[[129](../source/signals.t.html#129)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (worn, worn)`

[signals.t](../file/signals.t.html)\[[130](../source/signals.t.html#130)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (doff, doffed)`

[signals.t](../file/signals.t.html)\[[131](../source/signals.t.html#131)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (move, moved)`

[signals.t](../file/signals.t.html)\[[132](../source/signals.t.html#132)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (actmove, action, moved)`

[signals.t](../file/signals.t.html)\[[133](../source/signals.t.html#133)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (seen, seen)`

[signals.t](../file/signals.t.html)\[[134](../source/signals.t.html#134)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (examine, examine)`

[signals.t](../file/signals.t.html)\[[135](../source/signals.t.html#135)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (take, take)`

[signals.t](../file/signals.t.html)\[[136](../source/signals.t.html#136)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (drop, drop)`

[signals.t](../file/signals.t.html)\[[137](../source/signals.t.html#137)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (open, open)`

[signals.t](../file/signals.t.html)\[[138](../source/signals.t.html#138)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (close, closed)`

[signals.t](../file/signals.t.html)\[[139](../source/signals.t.html#139)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (push, push)`

[signals.t](../file/signals.t.html)\[[140](../source/signals.t.html#140)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (pull, pull)`

[signals.t](../file/signals.t.html)\[[141](../source/signals.t.html#141)\]

::: desc
*no description available*
:::

[]{#DefSignal}

`DefSignal (feel, feel)`

[signals.t](../file/signals.t.html)\[[142](../source/signals.t.html#142)\]

::: desc
*no description available*
:::

[]{#unconnect}

`unconnect (sender, signal, receiver)`

[signals.t](../file/signals.t.html)\[[327](../source/signals.t.html#327)\]

::: desc
Function to remove the signalling relationship between sender and
receiver via the signal Signal. \[SIGNALS EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
