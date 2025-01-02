---
layout: docs
---
<span class="title">SpellingCorrection</span><span class="type">class</span>

[spelling.t](../file/spelling.t.html)\[[800](../source/spelling.t.html#800)\]

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



SpellingCorrection: Each time we attempt a spelling correction, we'll
save information on the attempt in one of these objects.

`class `**`SpellingCorrection`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SpellingCorrection`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`candidates`](#candidates)[`corrections`](#corrections)[`curCand`](#curCand)[`oldToks`](#oldToks)[`parseError`](#parseError)[`unknown`](#unknown)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="candidates"></span>

`candidates`

[spelling.t](../file/spelling.t.html)\[[823](../source/spelling.t.html#823)\]



the candidate list - this is a list of token lists



<span id="corrections"></span>

`corrections`

[spelling.t](../file/spelling.t.html)\[[820](../source/spelling.t.html#820)\]



the indices of the corrections so far, before this one



<span id="curCand"></span>

`curCand`

[spelling.t](../file/spelling.t.html)\[[826](../source/spelling.t.html#826)\]



the current candidate index



<span id="oldToks"></span>

`oldToks`

[spelling.t](../file/spelling.t.html)\[[811](../source/spelling.t.html#811)\]



the token list before the spelling correction



<span id="parseError"></span>

`parseError`

[spelling.t](../file/spelling.t.html)\[[829](../source/spelling.t.html#829)\]



the ParseError that triggered the spelling correction attempt



<span id="unknown"></span>

`unknown`

[spelling.t](../file/spelling.t.html)\[[817](../source/spelling.t.html#817)\]



is this a correction for an unknown word (as opposed to a word that's in
the dictionary, but still could be a typo)?



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (oldToks, candidates, corrections, unknown, err)`

[spelling.t](../file/spelling.t.html)\[[801](../source/spelling.t.html#801)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


