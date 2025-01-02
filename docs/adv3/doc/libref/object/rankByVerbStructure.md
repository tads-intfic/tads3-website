<span class="title">rankByVerbStructure</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[6057](../source/parser.t.html#6057)\]

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

Rank by "verb structure." This gives more weight to an interpretation
that has more structural noun phrases in the verb. For example, "DETACH
dobj FROM iobj" is given more weight than "DETACH dobj", because the
former has two structural noun phrases whereas the latter has only one.
This will make us prefer to treat DETACH WIRE FROM BOX as a two-object
action, for example, even if we could treat WIRE FROM BOX as a single
"locational" noun phrase.

**`rankByVerbStructure`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankByVerbStructure`**  
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

[parser.t](../file/parser.t.html)\[[6058](../source/parser.t.html#6058)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
