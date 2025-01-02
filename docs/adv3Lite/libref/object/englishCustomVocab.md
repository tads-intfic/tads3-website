---
layout: docs
---
<span class="title">englishCustomVocab</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[2414](../source/english.t.html#2414)\]

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

Custom English vocabulary. Here we define a basic dictionary of
irregular plurals, a/an words, and verb parameters. Games that want to
save a little compiled file space might want to replace this with a set
that only defines the words actually needed in the game. Games are free
to define additional custom vocabulary words by adding their own
CustomVocab objects; the library will automatically find and merge them
into the dictionary during preinit.

**`englishCustomVocab`**` :   `[`CustomVocab`](../object/CustomVocab.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`englishCustomVocab`**  
[`CustomVocab`](../object/CustomVocab.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`irregularPlurals`](#irregularPlurals)[`specialAOrAn`](#specialAOrAn)[`verbParams`](#verbParams)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>





*(none)* <span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="irregularPlurals"></span>

`irregularPlurals`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2416](../source/english.t.html#2416)\]

<div class="desc">

irregular plurals

</div>

<span id="specialAOrAn"></span>

`specialAOrAn`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2567](../source/english.t.html#2567)\]

<div class="desc">

special-case 'a' vs 'an' words

</div>

<span id="verbParams"></span>

`verbParams`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2591](../source/english.t.html#2591)\]

<div class="desc">

verb parameters, for {xxx} tokens in message strings

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
