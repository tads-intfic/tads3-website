---
layout: docs
---
<span class="title">LibraryError</span><span class="type">class</span>

[misc.t](../file/misc.t.html)\[[2061](../source/misc.t.html#2061)\]

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



Library error. This is a base class for internal errors within the
library.

`class `**`LibraryError`**` :   `[`Exception`](../object/Exception.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`LibraryError`**  
[`Exception`](../object/Exception.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`LibraryError`**  
[`ArgumentMismatchError`](../object/ArgumentMismatchError.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`display`](#display)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

Inherited from `Exception` :  
[`displayException`](../object/Exception.html#displayException)[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="display"></span>

`display`

[misc.t](../file/misc.t.html)\[[2076](../source/misc.t.html#2076)\]



As a debugging aid, break into the debugger, if it's running. This makes
it easier during development to track down where errors are occurring.
This has no effect during normal execution in the interpreter, since the
interpreter ignores this call when the debugger isn't present.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`<span class="rem">OVERRIDDEN</span>

[misc.t](../file/misc.t.html)\[[2062](../source/misc.t.html#2062)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


