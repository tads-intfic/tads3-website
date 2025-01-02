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



global data object for this module

**`mainGlobal`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`mainGlobal`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`mainRestoreFunc`](#mainRestoreFunc) [`preinited_`](#preinited_) [`reflectionObj`](#reflectionObj) [`restartID`](#restartID)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="mainRestoreFunc"></span>

`mainRestoreFunc`

[\_main.t](../file/_main.t.html)\[[1212](../source/_main.t.html#1212)\]



pointer to mainRestore function, if defined



<span id="preinited_"></span>

`preinited_`

[\_main.t](../file/_main.t.html)\[[1184](../source/_main.t.html#1184)\]



flag: we've run pre-initialization



<span id="reflectionObj"></span>

`reflectionObj`

[\_main.t](../file/_main.t.html)\[[1196](../source/_main.t.html#1196)\]



The global reflection object - if the program is compiled with the
standard reflection module, that module will set this property to point
to the reflection object.

We use this so that we don't require the reflection module to be
included. If the module isn't included, this will be nil, so we'll know
not to use reflection. If this is not nil, we'll know we can use
reflection services.



<span id="restartID"></span>

`restartID`

[\_main.t](../file/_main.t.html)\[[1209](../source/_main.t.html#1209)\]



Restart ID. This is an integer that indicates how the main entrypoint
was last reached. This is initially zero; each time we restart the game,
this is incremented.

The restart ID is the only information that survives across a restart
boundary. Other than this, entering via a restart is exactly like
loading the program from scratch; all other information about the
program state before the restart is lost in the restart operation.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


