---
layout: docs
---
<span class="title">ProgramException</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[872](../source/_main.t.html#872)\]

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

A Program Exception terminates the entire program, passing an error
indication to the operating system. The VM doesn't provide a way to
specify the \*particular\* error code to return to the OS, as there's no
portable set of error codes; rather, the VM simply returns a code to the
OS that means generically that an error occurred, if there's any such
concept on the local operating system. The VM will normally display this
message just before it terminates the program, possibly with some
additional text mentioning that a program error occurred (such as
"unhandled exception: \<your message\>").

`class `**`ProgramException`**` :   `[`Exception`](../object/Exception.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ProgramException`**  
[`Exception`](../object/Exception.html)  
`                 object`  
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



Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)[`displayException`](#displayException)

Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (msg)`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[873](../source/_main.t.html#873)\]

<div class="desc">

*no description available*

</div>

<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[874](../source/_main.t.html#874)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
