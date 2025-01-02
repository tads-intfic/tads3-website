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



Spelling correction candidate. This tracks a modified token list with a
corrected word, to keep track of which word was corrected and how well
it ranks by our selection criteria.

`class `**`CorrectionCandidate`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CorrectionCandidate`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`editDist`](#editDist)[`ranking`](#ranking)[`replCnt`](#replCnt)[`tokenList`](#tokenList)[`wordIdx`](#wordIdx)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="editDist"></span>

`editDist`

[spelling.t](../file/spelling.t.html)\[[337](../source/spelling.t.html#337)\]



the edit distance between the original and corrected words



<span id="ranking"></span>

`ranking`

[spelling.t](../file/spelling.t.html)\[[334](../source/spelling.t.html#334)\]



ranking



<span id="replCnt"></span>

`replCnt`

[spelling.t](../file/spelling.t.html)\[[340](../source/spelling.t.html#340)\]



number of character replacements included in the edit distance



<span id="tokenList"></span>

`tokenList`

[spelling.t](../file/spelling.t.html)\[[331](../source/spelling.t.html#331)\]



the corrected token list



<span id="wordIdx"></span>

`wordIdx`

[spelling.t](../file/spelling.t.html)\[[343](../source/spelling.t.html#343)\]



the index of the corrected word



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (toks, dist, repl, idx, err)`

[spelling.t](../file/spelling.t.html)\[[318](../source/spelling.t.html#318)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


