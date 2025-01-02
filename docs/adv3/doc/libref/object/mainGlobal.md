---
layout: docs
---
<span class="title">mainGlobal</span><span class="type">object</span>

[\_main.t](../file/_main.t.html)\[[1182](../source/_main.t.html#1182)\]

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

global data object for this module

**`mainGlobal`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`mainGlobal`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`mainRestoreFunc`](#mainRestoreFunc)[`preinited_`](#preinited_)[`reflectionObj`](#reflectionObj)[`restartID`](#restartID)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="mainRestoreFunc"></span>

`mainRestoreFunc`

[\_main.t](../file/_main.t.html)\[[1212](../source/_main.t.html#1212)\]

<div class="desc">

pointer to mainRestore function, if defined

</div>

<span id="preinited_"></span>

`preinited_`

[\_main.t](../file/_main.t.html)\[[1184](../source/_main.t.html#1184)\]

<div class="desc">

flag: we've run pre-initialization

</div>

<span id="reflectionObj"></span>

`reflectionObj`

[\_main.t](../file/_main.t.html)\[[1196](../source/_main.t.html#1196)\]

<div class="desc">

The global reflection object - if the program is compiled with the
standard reflection module, that module will set this property to point
to the reflection object.

We use this so that we don't require the reflection module to be
included. If the module isn't included, this will be nil, so we'll know
not to use reflection. If this is not nil, we'll know we can use
reflection services.

</div>

<span id="restartID"></span>

`restartID`

[\_main.t](../file/_main.t.html)\[[1209](../source/_main.t.html#1209)\]

<div class="desc">

Restart ID. This is an integer that indicates how the main entrypoint
was last reached. This is initially zero; each time we restart the game,
this is incremented.

The restart ID is the only information that survives across a restart
boundary. Other than this, entering via a restart is exactly like
loading the program from scratch; all other information about the
program state before the restart is lost in the restart operation.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
