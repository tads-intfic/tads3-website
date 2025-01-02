---
---
<span class="title">languageGlobals</span><span class="type">object</span>

[en_us.t](../file/en_us.t.html)\[[118](../source/en_us.t.html#118)\]

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

Language-specific globals

**`languageGlobals`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`languageGlobals`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`decimalPointCharacter`](#decimalPointCharacter)`  `[`dictComparator`](#dictComparator)`  `[`digitGroupSeparator`](#digitGroupSeparator)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`setStringComparator`](#setStringComparator)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="decimalPointCharacter"></span>

`decimalPointCharacter`

[en_us.t](../file/en_us.t.html)\[[148](../source/en_us.t.html#148)\]

<div class="desc">

The decimal point to display in floating-point numbers. US English uses
a period; most Europeans use a comma.

Note that this setting doesn't affect system-level BigNumber formatting,
but this information can be passed when calling BigNumber formatting
routines.

</div>

<span id="dictComparator"></span>

`dictComparator`

[en_us.t](../file/en_us.t.html)\[[151](../source/en_us.t.html#151)\]

<div class="desc">

the main dictionary's string comparator

</div>

<span id="digitGroupSeparator"></span>

`digitGroupSeparator`

[en_us.t](../file/en_us.t.html)\[[138](../source/en_us.t.html#138)\]

<div class="desc">

The character to use to separate groups of digits in large numbers. US
English uses commas; most Europeans use periods.

Note that this setting does not affect system-level BigNumber
formatting, but this information can be passed when calling BigNumber
formatting routines.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="setStringComparator"></span>

`setStringComparator (sc)`

[en_us.t](../file/en_us.t.html)\[[123](../source/en_us.t.html#123)\]

<div class="desc">

Set the StringComparator object for the parser. This sets the comparator
that's used in the main command parser dictionary.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
