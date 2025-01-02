---
layout: docs
---
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



Verify Results: objects of this class are created by macros like
logicalRank() and illogical() that are used in verify routines and
stored in the verTab table of the current action.

`class `**`VerifyResult`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`VerifyResult`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`allowAction`](#allowAction)  [`allowImplicit`](#allowImplicit)  [`errMsg`](#errMsg)  [`myObj`](#myObj)  [`resultRank`](#resultRank)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`construct`](#construct)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowAction"></span>

`allowAction`

[action.t](../file/action.t.html)\[[3328](../source/action.t.html#3328)\]



Is the action allowed to proceed according to this verify result?



<span id="allowImplicit"></span>

`allowImplicit`

[action.t](../file/action.t.html)\[[3331](../source/action.t.html#3331)\]



Can this action be performed as an implicit action?



<span id="errMsg"></span>

`errMsg`

[action.t](../file/action.t.html)\[[3325](../source/action.t.html#3325)\]



The error message to display if this verify result prevents an action
from going ahead.



<span id="myObj"></span>

`myObj`

[action.t](../file/action.t.html)\[[3334](../source/action.t.html#3334)\]



The object to which this verify result refers



<span id="resultRank"></span>

`resultRank`

[action.t](../file/action.t.html)\[[3319](../source/action.t.html#3319)\]



Our resultRank; the lower this number the less likely it is that this
action could succeed, or the more illogical it is.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (score_, errmsg_, allowAction_, myObj_, allowImplicit_, =, true)`

[action.t](../file/action.t.html)\[[3337](../source/action.t.html#3337)\]



The constructor for creating a new verify result.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


