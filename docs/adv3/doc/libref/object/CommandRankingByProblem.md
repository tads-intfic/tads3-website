---
layout: docs
---
<span class="title">CommandRankingByProblem</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5848](../source/parser.t.html#5848)\]

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

A command ranking criterion that measures a "problem" by a count of
occurrences stored in a property of the CommandRanking object. For
example, we could count the number of noun phrases that don't resolve to
any objects.

On the first, coarse-grained pass, we measure only the presence or
absence of our problem. That is, if one parse tree has zero occurrences
of the problem and the other has a non-zero number of occurrences of the
problem (as measured by our counting property), then we'll prefer the
one with zero occurrences. If both have no occurrences, or both have a
non-zero number of occurrences, we'll consider the two equivalent for
the first pass, since we only care about the presence or absence of the
problem.

On the second, fine-grained pass, we measure the actual number of
occurrences of the problem, and choose the parse tree with the lower
number.

`class `**`CommandRankingByProblem`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandRankingByProblem`**  
[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`rankByActorSpecified`](../object/rankByActorSpecified.html)[`rankByAllExcluded`](../object/rankByAllExcluded.html)[`rankByDisambigOrdinals`](../object/rankByDisambigOrdinals.html)[`rankByEmptyBut`](../object/rankByEmptyBut.html)[`rankByIndefinite`](../object/rankByIndefinite.html)[`rankByInsufficient`](../object/rankByInsufficient.html)[`rankByListForSingle`](../object/rankByListForSingle.html)[`rankByMiscWordList`](../object/rankByMiscWordList.html)[`rankByMissing`](../object/rankByMissing.html)[`rankByNonMatch`](../object/rankByNonMatch.html)[`rankByUnwantedPlural`](../object/rankByUnwantedPlural.html)[`rankByVocabNonMatch`](../object/rankByVocabNonMatch.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`prop_`](#prop_)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`comparePass1`](#comparePass1)[`comparePass2`](#comparePass2)



<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="prop_"></span>

`prop_`

[parser.t](../file/parser.t.html)\[[5854](../source/parser.t.html#5854)\]

<div class="desc">

our ranking property - this is a property of the CommandRanking object
that gives us a count of the number of times our "problem" has occurred
in the ranking object's parse tree

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="comparePass1"></span>

`comparePass1 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5857](../source/parser.t.html#5857)\]

<div class="desc">

first pass - compare by presence or absence of the problem

</div>

<span id="comparePass2"></span>

`comparePass2 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5875](../source/parser.t.html#5875)\]

<div class="desc">

second pass - compare by number of occurrences of the problem

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
