---
layout: docs
---
<span class="title">scriptStatus</span><span class="type">object</span>

[actions.t](../file/actions.t.html)\[[2172](../source/actions.t.html#2172)\]

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



A state object that keeps track of our logging (scripting) status. This
is transient, because logging is controlled through the output layer in
the interpreter, which does not participate in any of the persistence
mechanisms.

`transient `**`scriptStatus`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`scriptStatus`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`noteWithoutScriptWarning`](#noteWithoutScriptWarning) [`recordFile`](#recordFile) [`scriptFile`](#scriptFile)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="noteWithoutScriptWarning"></span>

`noteWithoutScriptWarning`

[actions.t](../file/actions.t.html)\[[2184](../source/actions.t.html#2184)\]



have we warned about using NOTE without logging in effect?



<span id="recordFile"></span>

`recordFile`

[actions.t](../file/actions.t.html)\[[2181](../source/actions.t.html#2181)\]



RECORD file name



<span id="scriptFile"></span>

`scriptFile`

[actions.t](../file/actions.t.html)\[[2178](../source/actions.t.html#2178)\]



Script file name. This is nil when logging is not in effect, and is set
to the name of the scripting file when a log file is active.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


