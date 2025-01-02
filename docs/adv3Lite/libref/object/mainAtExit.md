---
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

<div class="fdesc">

At-exit handlers. This is a registry for custom handlers that are to be
invoked just before the program terminates.

`transient `**`mainAtExit`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`mainAtExit`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`handlers`](#handlers)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addHandler`](#addHandler)`  `[`callHandlers`](#callHandlers)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="handlers"></span>

`handlers`

[\_main.t](../file/_main.t.html)\[[1250](../source/_main.t.html#1250)\]

<div class="desc">

list of exit handlers

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addHandler"></span>

`addHandler (func)`

[\_main.t](../file/_main.t.html)\[[1225](../source/_main.t.html#1225)\]

<div class="desc">

Add an at-exit handler. User code can call this to register a handler
that will be invoked just before the program exits.

</div>

<span id="callHandlers"></span>

`callHandlers ( )`

[\_main.t](../file/_main.t.html)\[[1231](../source/_main.t.html#1231)\]

<div class="desc">

call our exit handlers

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
