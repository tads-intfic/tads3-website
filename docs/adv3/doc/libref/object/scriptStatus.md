---
layout: docs
---
<span class="title">scriptStatus</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[1129](../source/actions.t.html#1129)\]

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

A state object that keeps track of our logging (scripting) status. This
is transient, because logging is controlled through the output layer in
the interpreter, which does not participate in any of the persistence
mechanisms.

`transient `**`scriptStatus`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`scriptStatus`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`noteWithoutScriptWarning`](#noteWithoutScriptWarning)`  `[`recordFile`](#recordFile)`  `[`scriptFile`](#scriptFile)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="noteWithoutScriptWarning"></span>

`noteWithoutScriptWarning`

[actions.t](../file/actions.t.html)\[[1141](../source/actions.t.html#1141)\]

<div class="desc">

have we warned about using NOTE without logging in effect?

</div>

<span id="recordFile"></span>

`recordFile`

[actions.t](../file/actions.t.html)\[[1138](../source/actions.t.html#1138)\]

<div class="desc">

RECORD file name

</div>

<span id="scriptFile"></span>

`scriptFile`

[actions.t](../file/actions.t.html)\[[1135](../source/actions.t.html#1135)\]

<div class="desc">

Script file name. This is nil when logging is not in effect, and is set
to the name of the scripting file when a log file is active.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
