---
---
<span class="title">CancelCommandLineException</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6952](../source/parser.t.html#6952)\]

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

Cancel Command Line exception. This is used to cancel any \*remaining\*
commands on a command line after finishing execution of one command on
the line. For example, if the player types "TAKE BOX AND GO NORTH", the
handler for TAKE BOX can throw this exception to cancel everything later
on the command line (in this case, the GO NORTH part).

This is handled almost identically to TerminateCommandException. The
only difference is that some games might want to alert the player with
an explanation that extra commands are being ignored.

`class `**`CancelCommandLineException`**` :   `[`TerminateCommandException`](../object/TerminateCommandException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CancelCommandLineException`**  
`         `[`TerminateCommandException`](../object/TerminateCommandException.html)  
`                 `[`ParserException`](../object/ParserException.html)  
`                         `[`Exception`](../object/Exception.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

` `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

` `

` `

Inherited from `Exception` :  
` `[`construct`](../object/Exception.html#construct)`  `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
