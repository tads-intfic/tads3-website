---
---
<span class="title">TerminateCommandException</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6938](../source/parser.t.html#6938)\]

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

Terminate Command exception - when the parser encounters an error that
makes it impossible to go any further processing a command, we throw
this error to abandon the current command and proceed to the next. This
indicates a syntax error or semantic resolution error that renders the
command meaningless or makes it impossible to proceed.

When this exception is thrown, all processing of the current command
termintes immediately. No further action processing is performed; we
don't continue iterating the command on any additional objects for a
multi-object command; and we discard any remaining commands on the same
command line.

`class `**`TerminateCommandException`**` :   `[`ParserException`](../object/ParserException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TerminateCommandException`**  
`         `[`ParserException`](../object/ParserException.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TerminateCommandException`**  
`         `[`CancelCommandLineException`](../object/CancelCommandLineException.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

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
