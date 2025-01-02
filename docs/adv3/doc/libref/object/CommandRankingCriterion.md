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



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandRankingCriterion`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandRankingCriterion`**  
[`CommandRankingByProblem`](../object/CommandRankingByProblem.html)  
[`CommandRankingByWeakness`](../object/CommandRankingByWeakness.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`rankByAmbiguity`](../object/rankByAmbiguity.html)[`rankByLiteralLength`](../object/rankByLiteralLength.html)[`rankByNonMatchPoss`](../object/rankByNonMatchPoss.html)[`rankBySubcommands`](../object/rankBySubcommands.html)[`rankByTokenCount`](../object/rankByTokenCount.html)[`rankByVerbStructure`](../object/rankByVerbStructure.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`comparePass1`](#comparePass1)[`comparePass2`](#comparePass2)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="comparePass1"></span>

`comparePass1 (a, b)`

[parser.t](../file/parser.t.html)\[[5823](../source/parser.t.html#5823)\]



Compare two CommandRanking objects on the basis of this criterion, for
the first, coarse-grained pass. Returns a positive number if a is better
than b, 0 if they're indistinguishable, or -1 if a is worse than b.



<span id="comparePass2"></span>

`comparePass2 (a, b)`

[parser.t](../file/parser.t.html)\[[5826](../source/parser.t.html#5826)\]



compare two rankings for the second, fine-grained pass





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


