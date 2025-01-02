---
layout: docs
---
<span class="title">rankByLiteralLength</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[5980](../source/parser.t.html#5980)\]

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

Command ranking by literal phrase length. We prefer interpretations that
treat less text as uninterpreted literal text. By "less text," we simply
mean that one has a shorter string treated as literal text than the
other. (We prefer shorter literals because when the parser matches a
string of literal text, it's essentially throwing up its hands and
admitting it can't parse the text; so the less text is contained in
literals, the more text the parser is actually parsing, and more parsed
is better.)

**`rankByLiteralLength`**` :   `[`CommandRankingCriterion`](../object/CommandRankingCriterion.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`rankByLiteralLength`**  
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

[parser.t](../file/parser.t.html)\[[5982](../source/parser.t.html#5982)\]

<div class="desc">

first pass

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
