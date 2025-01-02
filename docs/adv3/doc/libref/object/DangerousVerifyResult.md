<span class="title">DangerousVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[293](../source/verify.t.html#293)\]

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

Verification result - command is logical and allowed, but is dangerous.
As with all verify results, this should reflect our best guess as to the
player's intentions, so this should only be used when it is meant to be
obvious to the player that the action is dangerous.

`class `**`DangerousVerifyResult`**` :   `[`VerifyResult`](../object/VerifyResult.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DangerousVerifyResult`**  
`         `[`VerifyResult`](../object/VerifyResult.html)  
`                 `[`MessageResult`](../object/MessageResult.html)  
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

` `[`allowImplicit`](#allowImplicit)`  `[`isDangerous`](#isDangerous)`  `[`resultRank`](#resultRank)`  `

Inherited from `VerifyResult` :  
` `[`allowAction`](../object/VerifyResult.html#allowAction)`  `[`excludePluralMatches`](../object/VerifyResult.html#excludePluralMatches)`  `

Inherited from `MessageResult` :  
` `[`messageProp_`](../object/MessageResult.html#messageProp_)`  `[`messageText_`](../object/MessageResult.html#messageText_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `VerifyResult` :  
` `[`compareTo`](../object/VerifyResult.html#compareTo)`  `[`identicalTo`](../object/VerifyResult.html#identicalTo)`  `[`isWorseThan`](../object/VerifyResult.html#isWorseThan)`  `[`shouldInsertBefore`](../object/VerifyResult.html#shouldInsertBefore)`  `

Inherited from `MessageResult` :  
` `[`construct`](../object/MessageResult.html#construct)`  `[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)`  `[`setMessage`](../object/MessageResult.html#setMessage)`  `[`showMessage`](../object/MessageResult.html#showMessage)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowImplicit"></span>

`allowImplicit`

[verify.t](../file/verify.t.html)\[[298](../source/verify.t.html#298)\]

<div class="desc">

don't allow dangerous actions to be undertaken implicitly - we do allow
these actions, but only when explicitly requested

</div>

<span id="isDangerous"></span>

`isDangerous`

[verify.t](../file/verify.t.html)\[[304](../source/verify.t.html#304)\]

<div class="desc">

this result indicates danger

</div>

<span id="resultRank"></span>

`resultRank`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[301](../source/verify.t.html#301)\]

<div class="desc">

result rank - we're only slightly less approving than 'logical'

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
