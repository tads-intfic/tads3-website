---
layout: docs
---
<span class="title">RuntimeError</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[777](../source/_main.t.html#777)\]

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



RuntimeError exception class. The VM creates and throws an instance of
this class when any run-time error occurs. The VM explicitly sets the
exceptionMessage property to a string giving the VM error message for
the run-time error that occurred.

`class `**`RuntimeError`**` :   `[`Exception`](../object/Exception.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RuntimeError`**  
[`Exception`](../object/Exception.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`RuntimeError`**  
[`StorageServerError`](../object/StorageServerError.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`errno_`](#errno_) [`exceptionMessage`](#exceptionMessage) [`stack_`](#stack_)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`displayException`](#displayException) [`isDebuggerSignal`](#isDebuggerSignal) [`newRuntimeError`](#newRuntimeError)

Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage) [`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="errno_"></span>

`errno_`

[\_main.t](../file/_main.t.html)\[[828](../source/_main.t.html#828)\]



the VM error number of the exception



<span id="exceptionMessage"></span>

`exceptionMessage`

[\_main.t](../file/_main.t.html)\[[831](../source/_main.t.html#831)\]



the exception message, provided to us by the VM after creation



<span id="stack_"></span>

`stack_`

[\_main.t](../file/_main.t.html)\[[834](../source/_main.t.html#834)\]



the stack trace, which we store at the time we're created



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (errno, ...)`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[778](../source/_main.t.html#778)\]



*no description available*



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[809](../source/_main.t.html#809)\]



display the exception



<span id="isDebuggerSignal"></span>

`isDebuggerSignal ( )`

[\_main.t](../file/_main.t.html)\[[819](../source/_main.t.html#819)\]



check to see if it's a debugger signal of some kind



<span id="newRuntimeError"></span>

`newRuntimeError (errno, msg)`

[\_main.t](../file/_main.t.html)\[[801](../source/_main.t.html#801)\]



create a runtime error with a given error message





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


