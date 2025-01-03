---
layout: docs
---
<span class="title">FileSyncException</span><span class="type">class</span>

[file.t](../file/file.t.html)\[[135](../source/file.t.html#135)\]

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



File synchronization exception. This is thrown when an operation (such
as a read or write) is attempted during normal execution on a file
object that was originally opened during pre-initialization. A file
object created during pre-initialization can't be used to access the
file during ordinary execution, since the state of the external file
might have changed since the pre-init session ended. In such cases, a
new file object must be created instead.

`class `**`FileSyncException`**` :   `[`FileException`](../object/FileException.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`FileSyncException`**  
[`FileException`](../object/FileException.html)  
[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `Exception` :  
` [`errmsg_`](../object/Exception.html#errmsg_)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`displayException`](#displayException)  `



Inherited from `Exception` :  
` [`construct`](../object/Exception.html#construct)  [`getExceptionMessage`](../object/Exception.html#getExceptionMessage)  [`showStackTrace`](../object/Exception.html#showStackTrace)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[file.t](../file/file.t.html)\[[136](../source/file.t.html#136)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


