---
layout: docs
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



Language-specific globals

**`languageGlobals`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`languageGlobals`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`decimalPointCharacter`](#decimalPointCharacter)[`dictComparator`](#dictComparator)[`digitGroupSeparator`](#digitGroupSeparator)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`setStringComparator`](#setStringComparator)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="decimalPointCharacter"></span>

`decimalPointCharacter`

[en_us.t](../file/en_us.t.html)\[[148](../source/en_us.t.html#148)\]



The decimal point to display in floating-point numbers. US English uses
a period; most Europeans use a comma.

Note that this setting doesn't affect system-level BigNumber formatting,
but this information can be passed when calling BigNumber formatting
routines.



<span id="dictComparator"></span>

`dictComparator`

[en_us.t](../file/en_us.t.html)\[[151](../source/en_us.t.html#151)\]



the main dictionary's string comparator



<span id="digitGroupSeparator"></span>

`digitGroupSeparator`

[en_us.t](../file/en_us.t.html)\[[138](../source/en_us.t.html#138)\]



The character to use to separate groups of digits in large numbers. US
English uses commas; most Europeans use periods.

Note that this setting does not affect system-level BigNumber
formatting, but this information can be passed when calling BigNumber
formatting routines.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="setStringComparator"></span>

`setStringComparator (sc)`

[en_us.t](../file/en_us.t.html)\[[123](../source/en_us.t.html#123)\]



Set the StringComparator object for the parser. This sets the comparator
that's used in the main command parser dictionary.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


