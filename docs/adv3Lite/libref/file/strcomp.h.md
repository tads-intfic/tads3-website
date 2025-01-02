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



This header defines the StringComparator intrinsic class.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`StringComparator`](../object/StringComparator.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`StrCompCaseFold`](#StrCompCaseFold) [`StrCompMatch`](#StrCompMatch) [`StrCompTrunc`](#StrCompTrunc)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="StrCompCaseFold"></span>

`StrCompCaseFold`

[strcomp.h](../file/strcomp.h.html)\[[129](../source/strcomp.h.html#129)\]



`0x0002`  
Case folding - this flag is set when the two values match, but one or
more characters differ in case (in other words, an upper-case letter in
the input string matched a lower-case letter in the dictionary string,
or vice versa).



<span id="StrCompMatch"></span>

`StrCompMatch`

[strcomp.h](../file/strcomp.h.html)\[[121](../source/strcomp.h.html#121)\]



`0x0001`  
Match - this flag is set in the return code for all matching strings.
(This flag isn't as useless as it might sound; its purpose is to ensure
that the return value from matchValues() is non-zero for all matches,
even when no other flag values are applicable.)



<span id="StrCompTrunc"></span>

`StrCompTrunc`

[strcomp.h](../file/strcomp.h.html)\[[140](../source/strcomp.h.html#140)\]



`0x0004`  
Truncation - this flag is set when the input string is shorter than the
value string (but matches the dictionary completely up to the input
string's full length, and is at least as long as the truncation length
specified in the constructor). This flag can only be returned when
truncation is allowed (as indicated by a non-zero truncation length in
the constructor), because truncated strings will never match at all when
truncation isn't allowed.



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


