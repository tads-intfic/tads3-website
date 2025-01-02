---
layout: docs
---
<span class="title">CorrectionCandidate</span><span class="type">class</span>

[spelling.t](../file/spelling.t.html)\[[317](../source/spelling.t.html#317)\]

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

Spelling correction candidate. This tracks a modified token list with a
corrected word, to keep track of which word was corrected and how well
it ranks by our selection criteria.

`class `**`CorrectionCandidate`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CorrectionCandidate`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`editDist`](#editDist)[`ranking`](#ranking)[`replCnt`](#replCnt)[`tokenList`](#tokenList)[`wordIdx`](#wordIdx)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`construct`](#construct)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="editDist"></span>

`editDist`

[spelling.t](../file/spelling.t.html)\[[337](../source/spelling.t.html#337)\]

<div class="desc">

the edit distance between the original and corrected words

</div>

<span id="ranking"></span>

`ranking`

[spelling.t](../file/spelling.t.html)\[[334](../source/spelling.t.html#334)\]

<div class="desc">

ranking

</div>

<span id="replCnt"></span>

`replCnt`

[spelling.t](../file/spelling.t.html)\[[340](../source/spelling.t.html#340)\]

<div class="desc">

number of character replacements included in the edit distance

</div>

<span id="tokenList"></span>

`tokenList`

[spelling.t](../file/spelling.t.html)\[[331](../source/spelling.t.html#331)\]

<div class="desc">

the corrected token list

</div>

<span id="wordIdx"></span>

`wordIdx`

[spelling.t](../file/spelling.t.html)\[[343](../source/spelling.t.html#343)\]

<div class="desc">

the index of the corrected word

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (toks, dist, repl, idx, err)`

[spelling.t](../file/spelling.t.html)\[[318](../source/spelling.t.html#318)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
