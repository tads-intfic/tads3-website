<span class="title">rankByNonMatchPoss</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[5947](../source/parser.t.html#5947)\]

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

Rank by unmatched possessive-qualified phrases. If we have two unknown
phrases, one with a possessive qualifier and one without, and other
things being equal, prefer the one with the possessive qualifier.

We prefer the qualified version because it lets us report a smaller
phrase that we can't match. For example, in X BOB'S WALLET, if we can't
match WALLET all by itself, it's more useful to report that "you see no
wallet" than to report that you see no "bob's wallet", because the
latter incorrectly implies that there might still be a wallet in scope
as long as it's not Bob's we're looking for.

**`rankByNonMatchPoss`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankByNonMatchPoss`**  
`         `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`comparePass1`](#comparePass1)`  `[`comparePass2`](#comparePass2)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="comparePass1"></span>

`comparePass1 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5953](../source/parser.t.html#5953)\]

<div class="desc">

ignore on pass 1 - this only counts if other factors are equal, so we
want to consider all of the other factors on pass 1 before taking this
criterion into account

</div>

<span id="comparePass2"></span>

`comparePass2 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5956](../source/parser.t.html#5956)\]

<div class="desc">

pass 2 - more possessives are better

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
