<span class="title">VerifyResult</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[3314](../source/action.t.html#3314)\]

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

<div class="fdesc">

Verify Results: objects of this class are created by macros like
logicalRank() and illogical() that are used in verify routines and
stored in the verTab table of the current action.

`class `**`VerifyResult`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`VerifyResult`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allowAction`](#allowAction)`  `[`allowImplicit`](#allowImplicit)`  `[`errMsg`](#errMsg)`  `[`myObj`](#myObj)`  `[`resultRank`](#resultRank)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowAction"></span>

`allowAction`

[action.t](../file/action.t.html)\[[3328](../source/action.t.html#3328)\]

<div class="desc">

Is the action allowed to proceed according to this verify result?

</div>

<span id="allowImplicit"></span>

`allowImplicit`

[action.t](../file/action.t.html)\[[3331](../source/action.t.html#3331)\]

<div class="desc">

Can this action be performed as an implicit action?

</div>

<span id="errMsg"></span>

`errMsg`

[action.t](../file/action.t.html)\[[3325](../source/action.t.html#3325)\]

<div class="desc">

The error message to display if this verify result prevents an action
from going ahead.

</div>

<span id="myObj"></span>

`myObj`

[action.t](../file/action.t.html)\[[3334](../source/action.t.html#3334)\]

<div class="desc">

The object to which this verify result refers

</div>

<span id="resultRank"></span>

`resultRank`

[action.t](../file/action.t.html)\[[3319](../source/action.t.html#3319)\]

<div class="desc">

Our resultRank; the lower this number the less likely it is that this
action could succeed, or the more illogical it is.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (score_, errmsg_, allowAction_, myObj_, allowImplicit_, =, true)`

[action.t](../file/action.t.html)\[[3337](../source/action.t.html#3337)\]

<div class="desc">

The constructor for creating a new verify result.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
