---
layout: docs
---
<span class="title">strcomp.h</span><span class="type">file</span>

[source file](../source/strcomp.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)

<div class="fdesc">

This header defines the StringComparator intrinsic class.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

[`StringComparator`](../object/StringComparator.html)
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

[`StrCompCaseFold`](#StrCompCaseFold)[`StrCompMatch`](#StrCompMatch)[`StrCompTrunc`](#StrCompTrunc)

<span id="_EnumSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Enums</span>  

</div>

*(none)* <span id="_TemplateSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Templates</span>  

</div>

*(none)* <span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)* <span id="_Macros_"></span>

<div class="mjhd">

<span class="hdln">Macros</span>  

</div>

<span id="StrCompCaseFold"></span>

`StrCompCaseFold`

[strcomp.h](../file/strcomp.h.html)\[[129](../source/strcomp.h.html#129)\]

<div class="desc">

`0x0002`  
Case folding - this flag is set when the two values match, but one or
more characters differ in case (in other words, an upper-case letter in
the input string matched a lower-case letter in the dictionary string,
or vice versa).

</div>

<span id="StrCompMatch"></span>

`StrCompMatch`

[strcomp.h](../file/strcomp.h.html)\[[121](../source/strcomp.h.html#121)\]

<div class="desc">

`0x0001`  
Match - this flag is set in the return code for all matching strings.
(This flag isn't as useless as it might sound; its purpose is to ensure
that the return value from matchValues() is non-zero for all matches,
even when no other flag values are applicable.)

</div>

<span id="StrCompTrunc"></span>

`StrCompTrunc`

[strcomp.h](../file/strcomp.h.html)\[[140](../source/strcomp.h.html#140)\]

<div class="desc">

`0x0004`  
Truncation - this flag is set when the input string is shorter than the
value string (but matches the dictionary completely up to the input
string's full length, and is at least as long as the truncation length
specified in the constructor). This flag can only be returned when
truncation is allowed (as indicated by a non-zero truncation length in
the constructor), because truncated strings will never match at all when
truncation isn't allowed.

</div>

<span id="_Enums_"></span>

<div class="mjhd">

<span class="hdln">Enums</span>  

</div>

*(none)* <span id="_Templates_"></span>

<div class="mjhd">

<span class="hdln">Templates</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
