---
layout: docs
---
<span class="title">rankByTokenCount</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[6037](../source/parser.t.html#6037)\]

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

Rank by token count. Other things being equal, we'd rather pick a longer
match. If one match is shorter than the other in terms of the number of
tokens it encompasses, then it means that the shorter match left more
tokens at the end of the command to be interpreted as separate commands.
If we have an interpretation that can take more of those tokens and
parse them as part of the current command, that interpretation is
probably better.

**`rankByTokenCount`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankByTokenCount`**  
[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>





*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`comparePass1`](#comparePass1)

Inherited from `CommandRankingCriterion` :  
[`comparePass2`](../object/CommandRankingCriterion.html#comparePass2)

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

[parser.t](../file/parser.t.html)\[[6039](../source/parser.t.html#6039)\]

<div class="desc">

first pass - compare token counts

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
