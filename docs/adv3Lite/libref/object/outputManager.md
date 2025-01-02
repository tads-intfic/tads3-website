---
layout: docs
---
<span class="title">outputManager</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[98](../source/output.t.html#98)\]

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



Output Manager. This object contains global code for displaying text on
the console.

The output manager is transient because we don't want its state to be
saved and restored; the output manager state is essentially part of the
intepreter user interface, which is not affected by save and restore.

`transient `**`outputManager`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`outputManager`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curOutputStream`](#curOutputStream)[`htmlMode`](#htmlMode)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setOutputStream`](#setOutputStream)[`withOutputStream`](#withOutputStream)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curOutputStream"></span>

`curOutputStream`

[output.t](../file/output.t.html)\[[145](../source/output.t.html#145)\]



the current output stream - start with the main text stream



<span id="htmlMode"></span>

`htmlMode`

[output.t](../file/output.t.html)\[[162](../source/output.t.html#162)\]



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



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setOutputStream"></span>

`setOutputStream (ostr)`

[output.t](../file/output.t.html)\[[105](../source/output.t.html#105)\]



Switch to a new active output stream. Returns the previously active
output stream, so that the caller can easily restore the old output
stream if the new output stream is to be established only for a specific
duration.



<span id="withOutputStream"></span>

`withOutputStream (ostr, func)`

[output.t](../file/output.t.html)\[[126](../source/output.t.html#126)\]



run the given function, using the given output stream as the active
default output stream





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


