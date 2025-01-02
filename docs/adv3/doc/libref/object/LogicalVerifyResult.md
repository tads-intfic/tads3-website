---
layout: docs
---
<span class="title">LogicalVerifyResult</span><span class="type">class</span>

[verify.t](../file/verify.t.html)\[[170](../source/verify.t.html#170)\]

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

Verification result - command is logical and allowed.

This can provide additional information ranking the likelihood of the
command intepretation, which can be useful to distinguish among logical
but not equally likely possibilities. For example, if the command is
"take book," and the actor has a book inside his or her backpack, and
there is also a book on a table in the actor's location, it would make
sense to take either book, but the game might prefer to take the book on
the table because it's not already being carried. The likelihood level
can be used to rank these alternatives: if the object is being carried
indirectly, a lower likelihood ranking would be returned than if the
object were not already somewhere in the actor's inventory.

`class `**`LogicalVerifyResult`**` :   `[`VerifyResult`](../object/VerifyResult.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LogicalVerifyResult`**  
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

` `[`defaultLogicalVerifyResult`](../object/defaultLogicalVerifyResult.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`keyVal`](#keyVal)`  `[`likelihood`](#likelihood)`  `[`listOrder`](#listOrder)`  `[`resultRank`](#resultRank)`  `

Inherited from `VerifyResult` :  
` `[`allowAction`](../object/VerifyResult.html#allowAction)`  `[`excludePluralMatches`](../object/VerifyResult.html#excludePluralMatches)`  `

Inherited from `MessageResult` :  
` `[`messageProp_`](../object/MessageResult.html#messageProp_)`  `[`messageText_`](../object/MessageResult.html#messageText_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`compareTo`](#compareTo)`  `[`construct`](#construct)`  `[`identicalTo`](#identicalTo)`  `[`isWorseThan`](#isWorseThan)`  `[`shouldInsertBefore`](#shouldInsertBefore)`  `

` `

Inherited from `MessageResult` :  
` `[`resolveMessageText`](../object/MessageResult.html#resolveMessageText)`  `[`setMessage`](../object/MessageResult.html#setMessage)`  `[`showMessage`](../object/MessageResult.html#showMessage)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="keyVal"></span>

`keyVal`

[verify.t](../file/verify.t.html)\[[281](../source/verify.t.html#281)\]

<div class="desc">

my key value, to distinguish among different results with the same
likelihood ranking

</div>

<span id="likelihood"></span>

`likelihood`

[verify.t](../file/verify.t.html)\[[249](../source/verify.t.html#249)\]

<div class="desc">

The likelihood of the command - the higher the number, the more likely.
We use 100 as the default, so that there's plenty of room for specific
rankings above or below the default. Particular actions might want to
rank likelihoods based on action-specific factors.

</div>

<span id="listOrder"></span>

`listOrder`

[verify.t](../file/verify.t.html)\[[275](../source/verify.t.html#275)\]

<div class="desc">

Our list ordering. This establishes how we are entered into the master
results list relative to other 'logical' results. Results are entered
into the master list in ascending list order, so a lower order number
means an earlier place in the list.

The list ordering is more important than the likelihood ranking. Suppose
we have two items: one is at list order 10 and has likelihood 100, and
the other is at list order 20 and has likelihood 50. The order of the
likelihoods stored in the list will be (100, 50). This is inverted from
the normal ordering, which would put the worst item first.

The point of this ordering is to allow for logical results with higher
or lower importances in establishing the likelihood. The library uses
the following list order values:

100 - the default ranking. This is used in most cases.

150 - secondary ranking. This is used for rankings that aren't of great
importance but which can be useful to distinguish objects in cases where
no more important rankings are present. The library uses this for
precondition verification rankings.

</div>

<span id="resultRank"></span>

`resultRank`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[284](../source/verify.t.html#284)\]

<div class="desc">

result rank - we're the most approving kind of result

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="compareTo"></span>

`compareTo (other)`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[198](../source/verify.t.html#198)\]

<div class="desc">

compare to another result

</div>

<span id="construct"></span>

`construct (likelihoodRank, key, ord)`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[171](../source/verify.t.html#171)\]

<div class="desc">

*no description available*

</div>

<span id="identicalTo"></span>

`identicalTo (other)`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[233](../source/verify.t.html#233)\]

<div class="desc">

determine if I'm identical to another result

</div>

<span id="isWorseThan"></span>

`isWorseThan (other)`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[184](../source/verify.t.html#184)\]

<div class="desc">

am I worse than the other result?

</div>

<span id="shouldInsertBefore"></span>

`shouldInsertBefore (other)`<span class="rem">OVERRIDDEN</span>

[verify.t](../file/verify.t.html)\[[215](../source/verify.t.html#215)\]

<div class="desc">

determine if I go in a result list before the given result

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
