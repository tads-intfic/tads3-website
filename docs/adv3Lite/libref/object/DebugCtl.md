---
layout: docs
---
<span class="title">DebugCtl</span><span class="type">object</span>

[debug.t](../file/debug.t.html)\[[19](../source/debug.t.html#19)\]

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

We only include any of the code in this module in debug builds

**`DebugCtl`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DebugCtl`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`all`](#all)`  `[`enabled`](#enabled)`  `[`messageIDs`](#messageIDs)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`status`](#status)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="all"></span>

`all`

[debug.t](../file/debug.t.html)\[[32](../source/debug.t.html#32)\]

<div class="desc">

list of all debugging options

</div>

<span id="enabled"></span>

`enabled`

[debug.t](../file/debug.t.html)\[[29](../source/debug.t.html#29)\]

<div class="desc">

Debug mode options. Each debug function has an associated ID key, which
is just a string identifying it. This is a lookup table that keeps a
true/nil value for each key, saying whether the function is enabled or
disabled. This lets the developer turn debugging displays on and off
individually, so that you don't have to look at piles of debug output
not relevant to the task you're currently working on.

</div>

<span id="messageIDs"></span>

`messageIDs`

[debug.t](../file/debug.t.html)\[[44](../source/debug.t.html#44)\]

<div class="desc">

LookupTable used to avoid duplicate debug message reports

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="status"></span>

`status ( )`

[debug.t](../file/debug.t.html)\[[35](../source/debug.t.html#35)\]

<div class="desc">

show the current status

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
