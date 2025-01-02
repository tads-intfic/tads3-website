<span class="title">rankByAmbiguity</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[6077](../source/parser.t.html#6077)\]

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

Rank by ambiguous noun phrases. We apply this criterion on the second
pass only, because it's a weak test: we might end up narrowing things
down through automatic "logicalness" tests during the noun resolution
process, so ambiguity at this stage in the parsing process doesn't
necessarily indicate that there's real ambiguity in the command.
However, if we can already tell that one interpretation is unambiguous
and another is ambiguous, and the two interpretations are otherwise
equally good, pick the one that's already unambiguous: the ambiguous
interpretation might or might not stay ambiguous, but the unambiguous
interpretation will definitely stay unambiguous.

**`rankByAmbiguity`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankByAmbiguity`**  
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

` `[`comparePass2`](#comparePass2)`  `

Inherited from `CommandRankingCriterion` :  
` `[`comparePass1`](../object/CommandRankingCriterion.html#comparePass1)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="comparePass2"></span>

`comparePass2 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6083](../source/parser.t.html#6083)\]

<div class="desc">

Do nothing on the first pass, because we want any first-pass criterion
to prevail over our weak test. Instead, check for a difference in
ambiguity only on the second pass.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>