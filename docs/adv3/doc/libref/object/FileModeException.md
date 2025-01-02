<span class="title">FileModeException</span><span class="type">class</span>

[file.t](../file/file.t.html)\[[166](../source/file.t.html#166)\]

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

File mode error - this is thrown when an attempted operation is
incompatible with the file's mode. This is thrown under these
conditions:

\- writing to a file opened for read-only access  
- reading from a file opened for write-only access  
- calling readFile or writeFile on a raw-mode file  
- calling readBytes or writeBytes on a non-raw-mode file

`class `**`FileModeException`**` :   `[`FileException`](../object/FileException.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FileModeException`**  
`         `[`FileException`](../object/FileException.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
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

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`displayException`](#displayException)`  `

` `

Inherited from `Exception` :  
` `[`construct`](../object/Exception.html#construct)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[file.t](../file/file.t.html)\[[167](../source/file.t.html#167)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
