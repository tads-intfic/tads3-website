---
layout: docs
---
<span class="title">sessionHintStatus</span><span class="type">object</span>

[hintsys.t](../file/hintsys.t.html)\[[706](../source/hintsys.t.html#706)\]

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



We keep several pieces of information about the status of the hint
system. Some of it pertains to the current session, independently of any
saving/restoring/restarting, so we keep this information in a transient
object. Some pertains to the present game, so we keep it in an ordinary
persistent object, so that it's saved and restored along with the game.

`transient `**`sessionHintStatus`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`sessionHintStatus`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`hintsDisabled`](#hintsDisabled) [`hintWarning`](#hintWarning)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="hintsDisabled"></span>

`hintsDisabled`

[hintsys.t](../file/hintsys.t.html)\[[711](../source/hintsys.t.html#711)\]



flag: we've disabled hints for this session



<span id="hintWarning"></span>

`hintWarning`

[hintsys.t](../file/hintsys.t.html)\[[708](../source/hintsys.t.html#708)\]



flag: we've warned about the hint system in this session



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


