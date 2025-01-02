<span class="title">cquotes.t</span><span class="type">file</span>

[source file](../source/cquotes.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

<div class="fdesc">

\*\* cquotes: a TADS 3 output filter for making single curly quotes \*\*
\*\* To use, just add to your project. The PreinitObject at the end \*\*
of this file automatically registers the curly quote output filter. \*\*
\*\* You may use this module in your own game. You may distribute \*\*
modified versions of this file, though I would prefer you contact \*\*
me first at stephen@granades.com and see about having me add your \*\*
changes to my source. \*\* \*\* Version: 0.2 (2 Feb 2004) \*\* Added in
fixes for patIsHTMLTag and patIsFormatTag from \*\* Matt McGlone \*\*
0.1 (27 Aug 2002) \*\* Original release \*\* \*\* Copyright (c) 2002,
2004 by Stephen Granade. All Rights Reserved.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Objects</span>  

</div>

` `[`cquoteOutputFilter`](../object/cquoteOutputFilter.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

` `[`//`](#//)`  `[`//`](#//)`  `[`filterText`](#filterText)`  `[`if`](#if)`  `[`if`](#if)`  `[`if`](#if)`  `

<span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

<span id="//"></span>

`// (since, e, ., g, ., ", \, <, font, face, =, ', courier, >, ", isn, ', t, really, an, HTML, tag)`

[cquotes.t](../file/cquotes.t.html)\[[66](../source/cquotes.t.html#66)\]

<div class="desc">

*no description available*

</div>

<span id="//"></span>

`// (Possessive, ', s, is, handled, by, the, contraction, .)`

[cquotes.t](../file/cquotes.t.html)\[[83](../source/cquotes.t.html#83)\]

<div class="desc">

*no description available*

</div>

<span id="filterText"></span>

`filterText (ostr, val, ., substr, (, ret, [1], +, ret, [2], val, ., length, ()`

[cquotes.t](../file/cquotes.t.html)\[[70](../source/cquotes.t.html#70)\]

<div class="desc">

*no description available*

</div>

<span id="if"></span>

`if (aggressive)`

[cquotes.t](../file/cquotes.t.html)\[[76](../source/cquotes.t.html#76)\]

<div class="desc">

*no description available*

</div>

<span id="if"></span>

`if (ret, =, =, nil)`

[cquotes.t](../file/cquotes.t.html)\[[58](../source/cquotes.t.html#58)\]

<div class="desc">

*no description available*

</div>

<span id="if"></span>

`if (ret, !, =, nil, &, &, (, ret, [1], =, =, 1, |, |, val, ., substr, (, ret, [1], -, 1, 1)`

[cquotes.t](../file/cquotes.t.html)\[[67](../source/cquotes.t.html#67)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 1/21/2007 from TADS version 3.0.13

</div>
