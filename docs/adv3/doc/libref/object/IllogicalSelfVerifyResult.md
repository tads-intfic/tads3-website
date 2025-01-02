<span class="title">IllogicalSelfVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[363](../source/verify.t.html#363)\]

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

Verification result - command is always illogical, because it's trying
to use an object on itself in some invalid way, as in PUT BOX IN BOX.

This is almost identical to a regular always-illogical result, so we're
a simple subclass of that result type. We distinguish these from the
basic always-illogical type because it's especially obvious that the
"self" kind is illogical, so we might in some cases want to exclude a
vocabulary match for the "self" kind that we wouldn't exclude for the
basic kind.

`class `**`IllogicalSelfVerifyResult`**` :   `[`IllogicalVerifyResult`](../object/IllogicalVerifyResult.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`IllogicalSelfVerifyResult`**  
`         `[`IllogicalVerifyResult`](../object/IllogicalVerifyResult.html)  
`                 `[`VerifyResult`](../object/VerifyResult.html)  
`                         `[`MessageResult`](../object/MessageResult.html)  
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

` `[`excludePluralMatches`](#excludePluralMatches)`  `

Inherited from `IllogicalVerifyResult` :  
` `[`allowAction`](../object/IllogicalVerifyResult.html#allowAction)`  `[`resultRank`](../object/IllogicalVerifyResult.html#resultRank)`  `

` `

Inherited from `MessageResult` :  
` `[`messageProp_`](../object/MessageResult.html#messageProp_)`  `[`messageText_`](../object/MessageResult.html#messageText_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

` `

Inherited from `VerifyResult` :  
` `[`compareTo`](../object/VerifyResult.html#compareTo)`  `[`identicalTo`](../object/VerifyResult.html#identicalTo)`  `[`isWorseThan`](../object/VerifyResult.html#isWorseThan)`  `[`shouldInsertBefore`](../object/VerifyResult.html#shouldInsertBefore)`  `

Inherited from `MessageResult` :  
` `[`construct`](../object/MessageResult.html#construct)`  `[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)`  `[`setMessage`](../object/MessageResult.html#setMessage)`  `[`showMessage`](../object/MessageResult.html#showMessage)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="excludePluralMatches"></span>

`excludePluralMatches`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[365](../source/verify.t.html#365)\]

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