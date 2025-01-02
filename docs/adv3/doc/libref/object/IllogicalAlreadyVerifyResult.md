---
layout: docs
---
<span class="title">IllogicalAlreadyVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[335](../source/verify.t.html#335)\]

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

Verification result - command is currently illogical, because the state
that the command seeks to impose already obtains. For example, we're
trying to open a door that's already open, or drop an object that we're
not carrying.

This is almost exactly the same as an "illogical now" result, so this is
a simple subclass of that result type. We act almost the same as an
"illogical now" result; the only reason to distinguish this type is that
it's an especially obvious kind of condition, so we might want to use it
to exclude some vocabulary matches that we wouldn't normally exclude for
the more general "illogical now" result type.

`class `**`IllogicalAlreadyVerifyResult`**` :   `[`IllogicalNowVerifyResult`](../object/IllogicalNowVerifyResult.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IllogicalAlreadyVerifyResult`**  
[`IllogicalNowVerifyResult`](../object/IllogicalNowVerifyResult.html)  
[`VerifyResult`](../object/VerifyResult.html)  
[`MessageResult`](../object/MessageResult.html)  
`                                 object`  
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

[`excludePluralMatches`](#excludePluralMatches)

Inherited from `IllogicalNowVerifyResult` :  
[`allowAction`](../object/IllogicalNowVerifyResult.html#allowAction)[`resultRank`](../object/IllogicalNowVerifyResult.html#resultRank)



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

<span id="excludePluralMatches"></span>

`excludePluralMatches`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[337](../source/verify.t.html#337)\]

<div class="desc">

exclude plural matches when this result type is present

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
