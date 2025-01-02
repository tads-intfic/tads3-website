<span class="title">outputManager</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[47](../source/output.t.html#47)\]

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

Output Manager. This object contains global code for displaying text on
the console.

The output manager is transient because we don't want its state to be
saved and restored; the output manager state is essentially part of the
intepreter user interface, which is not affected by save and restore.

`transient `**`outputManager`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`outputManager`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`curOutputStream`](#curOutputStream)`  `[`htmlMode`](#htmlMode)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`setOutputStream`](#setOutputStream)`  `[`withOutputStream`](#withOutputStream)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="curOutputStream"></span>

`curOutputStream`

[output.t](../file/output.t.html)\[[94](../source/output.t.html#94)\]

<div class="desc">

the current output stream - start with the main text stream

</div>

<span id="htmlMode"></span>

`htmlMode`

[output.t](../file/output.t.html)\[[111](../source/output.t.html#111)\]

<div class="desc">

Is the UI running in HTML mode? This tells us if we have a full HTML UI
or a text-only UI. Full HTML mode applies if we're running on a
Multimedia TADS interpreter, or we're using the Web UI, which runs in a
separate browser and is thus inherently HTML-capable.

(The result can't change during a session, since it's a function of the
game and interpreter capabilities, so we store the result on the first
evaluation to avoid having to recompute it on each query. Since 'self'
is a static object, we'll recompute this each time we run the program,
which is important because we could save the game on one interpreter and
resume the session on a different interpreter with different
capabilities.)

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="setOutputStream"></span>

`setOutputStream (ostr)`

[output.t](../file/output.t.html)\[[54](../source/output.t.html#54)\]

<div class="desc">

Switch to a new active output stream. Returns the previously active
output stream, so that the caller can easily restore the old output
stream if the new output stream is to be established only for a specific
duration.

</div>

<span id="withOutputStream"></span>

`withOutputStream (ostr, func)`

[output.t](../file/output.t.html)\[[75](../source/output.t.html#75)\]

<div class="desc">

run the given function, using the given output stream as the active
default output stream

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
