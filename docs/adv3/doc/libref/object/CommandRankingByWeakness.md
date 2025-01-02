---
layout: docs
---
<span class="title">CommandRankingByWeakness</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5902](../source/parser.t.html#5902)\]

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

A "weakness" criterion. This is similar to the rank-by-problem
criterion, but rather than ranking on an actual structural problem, it
ranks on a structural weakness. This is suitable for things like
adjective endings and truncations, where the weakness isn't on the same
order as a "problem" but where we'd still rather avoid the weakness if
we can.

The point of the separate "weakness" criterion is that we only allow
weaknesses to come into play on pass 2, after we've already
discriminated based on problems. If we can discriminate based on
problems, we'll do so in pass 1 and won't even get to pass 2; we'll only
discriminate based on weakness if we can't tell the difference based on
real problems.

`class `**`CommandRankingByWeakness`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandRankingByWeakness`**  
`         `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`rankByEndAdj`](../object/rankByEndAdj.html)`  `[`rankByPluralTrunc`](../object/rankByPluralTrunc.html)`  `[`rankByPronoun`](../object/rankByPronoun.html)`  `[`rankByTrunc`](../object/rankByTrunc.html)`  `[`rankByWeakness`](../object/rankByWeakness.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`prop_`](#prop_)`  `

` `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`comparePass1`](#comparePass1)`  `[`comparePass2`](#comparePass2)`  `

` `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="prop_"></span>

`prop_`

[parser.t](../file/parser.t.html)\[[5910](../source/parser.t.html#5910)\]

<div class="desc">

our command-ranking property

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="comparePass1"></span>

`comparePass1 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5904](../source/parser.t.html#5904)\]

<div class="desc">

on pass 1, ignore weaknesses

</div>

<span id="comparePass2"></span>

`comparePass2 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5907](../source/parser.t.html#5907)\]

<div class="desc">

on pass 2, compare based on weaknesses

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
