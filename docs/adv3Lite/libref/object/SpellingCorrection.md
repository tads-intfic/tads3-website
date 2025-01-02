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

<div class="fdesc">

SpellingCorrection: Each time we attempt a spelling correction, we'll
save information on the attempt in one of these objects.

`class `**`SpellingCorrection`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SpellingCorrection`**  
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

` `[`candidates`](#candidates)`  `[`corrections`](#corrections)`  `[`curCand`](#curCand)`  `[`oldToks`](#oldToks)`  `[`parseError`](#parseError)`  `[`unknown`](#unknown)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="candidates"></span>

`candidates`

[spelling.t](../file/spelling.t.html)\[[823](../source/spelling.t.html#823)\]

<div class="desc">

the candidate list - this is a list of token lists

</div>

<span id="corrections"></span>

`corrections`

[spelling.t](../file/spelling.t.html)\[[820](../source/spelling.t.html#820)\]

<div class="desc">

the indices of the corrections so far, before this one

</div>

<span id="curCand"></span>

`curCand`

[spelling.t](../file/spelling.t.html)\[[826](../source/spelling.t.html#826)\]

<div class="desc">

the current candidate index

</div>

<span id="oldToks"></span>

`oldToks`

[spelling.t](../file/spelling.t.html)\[[811](../source/spelling.t.html#811)\]

<div class="desc">

the token list before the spelling correction

</div>

<span id="parseError"></span>

`parseError`

[spelling.t](../file/spelling.t.html)\[[829](../source/spelling.t.html#829)\]

<div class="desc">

the ParseError that triggered the spelling correction attempt

</div>

<span id="unknown"></span>

`unknown`

[spelling.t](../file/spelling.t.html)\[[817](../source/spelling.t.html#817)\]

<div class="desc">

is this a correction for an unknown word (as opposed to a word that's in
the dictionary, but still could be a typo)?

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (oldToks, candidates, corrections, unknown, err)`

[spelling.t](../file/spelling.t.html)\[[801](../source/spelling.t.html#801)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
