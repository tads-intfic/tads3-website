---
layout: docs
---
<span class="title">mainAtExit</span><span class="type">object</span>

[\_main.t](../file/_main.t.html)\[[1220](../source/_main.t.html#1220)\]

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



At-exit handlers. This is a registry for custom handlers that are to be
invoked just before the program terminates.

`transient `**`mainAtExit`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`mainAtExit`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`handlers`](#handlers)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addHandler`](#addHandler) [`callHandlers`](#callHandlers)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="handlers"></span>

`handlers`

[\_main.t](../file/_main.t.html)\[[1250](../source/_main.t.html#1250)\]



list of exit handlers



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addHandler"></span>

`addHandler (func)`

[\_main.t](../file/_main.t.html)\[[1225](../source/_main.t.html#1225)\]



Add an at-exit handler. User code can call this to register a handler
that will be invoked just before the program exits.



<span id="callHandlers"></span>

`callHandlers ( )`

[\_main.t](../file/_main.t.html)\[[1231](../source/_main.t.html#1231)\]



call our exit handlers
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


