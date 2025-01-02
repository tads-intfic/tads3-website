---
layout: docs
---
<span class="title">CircularExecException</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[506](../source/_main.t.html#506)\]

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



Exception: circular execution dependency in ModuleExecObject

`class `**`CircularExecException`**` :   `[`Exception`](../object/Exception.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CircularExecException`**  
[`Exception`](../object/Exception.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`obj_`](#obj_)

Inherited from `Exception` :  
[`errmsg_`](../object/Exception.html#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`displayException`](#displayException)

Inherited from `Exception` :  
[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)[`showStackTrace`](../object/Exception.html#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="obj_"></span>

`obj_`

[\_main.t](../file/_main.t.html)\[[520](../source/_main.t.html#520)\]



The object that detected the circular dependency. We can't use this for
much ourselves, but it might be useful to store this information so that
it's available to the programmer from within the debugger.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (obj)`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[507](../source/_main.t.html#507)\]



*no description available*



<span id="displayException"></span>

`displayException ( )`<span class="rem">OVERRIDDEN</span>

[\_main.t](../file/_main.t.html)\[[508](../source/_main.t.html#508)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


