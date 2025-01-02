---
layout: docs
---
<span class="title">NonObviousVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[381](../source/verify.t.html#381)\]

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

Verification result - command is logical and allowed, but is non-obvious
on this object. This should be used when the command is logical, but
should not be obvious to the player. When this verification result is
present, the command is allowed when performed explicitly but will never
be taken as a default.

In cases of ambiguity, a non-obvious object is equivalent to an
always-illogical object. A non-obvious object \*appears\* to be
illogical at first glance, so we want to treat it the same as an
ordinarily illogical object if we're trying to choose among ambiguous
objects.

`class `**`NonObviousVerifyResult`**` :   `[`VerifyResult`](../object/VerifyResult.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NonObviousVerifyResult`**  
[`VerifyResult`](../object/VerifyResult.html)  
[`MessageResult`](../object/MessageResult.html)  
`                         object`  
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

[`allowImplicit`](#allowImplicit)[`resultRank`](#resultRank)

Inherited from `VerifyResult` :  
[`allowAction`](../object/VerifyResult.html#allowAction)[`excludePluralMatches`](../object/VerifyResult.html#excludePluralMatches)

Inherited from `MessageResult` :  
[`messageProp_`](../object/MessageResult.html#messageProp_)[`messageText_`](../object/MessageResult.html#messageText_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `VerifyResult` :  
[`compareTo`](../object/VerifyResult.html#compareTo)[`identicalTo`](../object/VerifyResult.html#identicalTo)[`isWorseThan`](../object/VerifyResult.html#isWorseThan)[`shouldInsertBefore`](../object/VerifyResult.html#shouldInsertBefore)

Inherited from `MessageResult` :  
[`construct`](../object/MessageResult.html#construct)[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)[`setMessage`](../object/MessageResult.html#setMessage)[`showMessage`](../object/MessageResult.html#showMessage)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowImplicit"></span>

`allowImplicit`

[verify.t](../file/verify.t.html)\[[386](../source/verify.t.html#386)\]

<div class="desc">

don't allow non-obvious actions to be undertaken implicitly - we allow
these actions, but only when explicitly requested

</div>

<span id="resultRank"></span>

`resultRank`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[392](../source/verify.t.html#392)\]

<div class="desc">

non-obvious objects are illogical at first glance, so rank them the same
as objects that are actually illogical

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
