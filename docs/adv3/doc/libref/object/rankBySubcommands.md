---
---
<span class="title">rankBySubcommands</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[6013](../source/parser.t.html#6013)\]

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

Command ranking by subcommand count: we prefer the match with fewer
subcommands. If one has fewer subcommands than the other, it means that
we were able to interpret ambiguous conjunctions (such as "and") as noun
phrase conjunctions rather than as command conjunctions; other things
being equal, we'd rather take the interpretation that gives us noun
phrases than the one that involves more separate commands.

**`rankBySubcommands`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankBySubcommands`**  
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

` `[`comparePass1`](#comparePass1)`  `

Inherited from `CommandRankingCriterion` :  
` `[`comparePass2`](../object/CommandRankingCriterion.html#comparePass2)`  `

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

[parser.t](../file/parser.t.html)\[[6015](../source/parser.t.html#6015)\]

<div class="desc">

first pass - compare subcommand counts

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
