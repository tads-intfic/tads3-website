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

<div class="fdesc">

We keep several pieces of information about the status of the hint
system. Some of it pertains to the current session, independently of any
saving/restoring/restarting, so we keep this information in a transient
object. Some pertains to the present game, so we keep it in an ordinary
persistent object, so that it's saved and restored along with the game.

`transient `**`sessionHintStatus`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`sessionHintStatus`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`hintsDisabled`](#hintsDisabled)`  `[`hintWarning`](#hintWarning)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="hintsDisabled"></span>

`hintsDisabled`

[hintsys.t](../file/hintsys.t.html)\[[711](../source/hintsys.t.html#711)\]

<div class="desc">

flag: we've disabled hints for this session

</div>

<span id="hintWarning"></span>

`hintWarning`

[hintsys.t](../file/hintsys.t.html)\[[708](../source/hintsys.t.html#708)\]

<div class="desc">

flag: we've warned about the hint system in this session

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>