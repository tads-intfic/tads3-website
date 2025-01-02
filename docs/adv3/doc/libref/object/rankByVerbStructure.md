---
layout: docs
---
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



Rank by "verb structure." This gives more weight to an interpretation
that has more structural noun phrases in the verb. For example, "DETACH
dobj FROM iobj" is given more weight than "DETACH dobj", because the
former has two structural noun phrases whereas the latter has only one.
This will make us prefer to treat DETACH WIRE FROM BOX as a two-object
action, for example, even if we could treat WIRE FROM BOX as a single
"locational" noun phrase.

**`rankByVerbStructure`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`rankByVerbStructure`**  
[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`comparePass2`](#comparePass2)

Inherited from `CommandRankingCriterion` :  
[`comparePass1`](../object/CommandRankingCriterion.html#comparePass1)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="comparePass2"></span>

`comparePass2 (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6058](../source/parser.t.html#6058)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


