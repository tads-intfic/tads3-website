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



Custom English vocabulary. Here we define a basic dictionary of
irregular plurals, a/an words, and verb parameters. Games that want to
save a little compiled file space might want to replace this with a set
that only defines the words actually needed in the game. Games are free
to define additional custom vocabulary words by adding their own
CustomVocab objects; the library will automatically find and merge them
into the dictionary during preinit.

**`englishCustomVocab`**` :   `[`CustomVocab`](../object/CustomVocab.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`englishCustomVocab`**  
[`CustomVocab`](../object/CustomVocab.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`irregularPlurals`](#irregularPlurals) [`specialAOrAn`](#specialAOrAn) [`verbParams`](#verbParams)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
*(none)* <span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="irregularPlurals"></span>

`irregularPlurals`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2416](../source/english.t.html#2416)\]



irregular plurals



<span id="specialAOrAn"></span>

`specialAOrAn`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2567](../source/english.t.html#2567)\]



special-case 'a' vs 'an' words



<span id="verbParams"></span>

`verbParams`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[2591](../source/english.t.html#2591)\]



verb parameters, for {xxx} tokens in message strings



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


