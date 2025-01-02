---
layout: docs
---
<span class="title">CommandRankingCriterion</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5816](../source/parser.t.html#5816)\]

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

Command ranking criterion. This is used by the CommandRanking class to
represent one criterion for comparing two parse trees.

Rankings are performed in two passes. The first pass is the rough,
qualitative pass, meant to determine if one parse tree has big, obvious
differences from another. In most cases, this means that one tree has a
particular type of problem or special advantage that the other doesn't
have at all.

The second pass is the fine-grained pass. We only reach the second pass
if we can't find any coarse differences on the first rough pass. In most
cases, the second pass compares the magnitude of problems or advantages
to determine if one tree is slightly better than the other.

`class `**`CommandRankingCriterion`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandRankingCriterion`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandRankingCriterion`**  
`         `[`CommandRankingByProblem`](../object/CommandRankingByProblem.html)  
`         `[`CommandRankingByWeakness`](../object/CommandRankingByWeakness.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`rankByAmbiguity`](../object/rankByAmbiguity.html)`  `[`rankByLiteralLength`](../object/rankByLiteralLength.html)`  `[`rankByNonMatchPoss`](../object/rankByNonMatchPoss.html)`  `[`rankBySubcommands`](../object/rankBySubcommands.html)`  `[`rankByTokenCount`](../object/rankByTokenCount.html)`  `[`rankByVerbStructure`](../object/rankByVerbStructure.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`comparePass1`](#comparePass1)`  `[`comparePass2`](#comparePass2)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="comparePass1"></span>

`comparePass1 (a, b)`

[parser.t](../file/parser.t.html)\[[5823](../source/parser.t.html#5823)\]

<div class="desc">

Compare two CommandRanking objects on the basis of this criterion, for
the first, coarse-grained pass. Returns a positive number if a is better
than b, 0 if they're indistinguishable, or -1 if a is worse than b.

</div>

<span id="comparePass2"></span>

`comparePass2 (a, b)`

[parser.t](../file/parser.t.html)\[[5826](../source/parser.t.html#5826)\]

<div class="desc">

compare two rankings for the second, fine-grained pass

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
