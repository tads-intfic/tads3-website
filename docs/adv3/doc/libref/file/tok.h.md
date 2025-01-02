---
layout: docs
---
<span class="title">tok.h</span><span class="type">file</span>

[source file](../source/tok.h.html)

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

This header defines some macros for the standard tokenizer class.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

` `[`getTokOrig`](#getTokOrig)`  `[`getTokType`](#getTokType)`  `[`getTokVal`](#getTokVal)`  `[`tokRuleName`](#tokRuleName)`  `[`tokRulePat`](#tokRulePat)`  `[`tokRuleTest`](#tokRuleTest)`  `[`tokRuleType`](#tokRuleType)`  `[`tokRuleVal`](#tokRuleVal)`  `

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

<span id="getTokOrig"></span>

`getTokOrig (tok)`

[tok.h](../file/tok.h.html)\[[40](../source/tok.h.html#40)\]

<div class="desc">

`((tok)[3])`  
Get the token's original text. This is the original text matched from
the tokenized string.

</div>

<span id="getTokType"></span>

`getTokType (tok)`

[tok.h](../file/tok.h.html)\[[34](../source/tok.h.html#34)\]

<div class="desc">

`((tok)[2])`  
Get the token type. This is a token enum value describing the type of
the token.

</div>

<span id="getTokVal"></span>

`getTokVal (tok)`

[tok.h](../file/tok.h.html)\[[28](../source/tok.h.html#28)\]

<div class="desc">

`((tok)[1])`  
Get the token value. This is the parsed representation of the token; in
most cases, this is simply the text of the original token, although it
might be converted in some way (words are usually converted to
lower-case, for example).

</div>

<span id="tokRuleName"></span>

`tokRuleName (rule)`

[tok.h](../file/tok.h.html)\[[48](../source/tok.h.html#48)\]

<div class="desc">

`(rule[1])`  
Some internal convenience macros. (These are meant for internal use
within the tokenizer class, rather than for client code, but we define
them here because they're also useful for subclasses of the standard
tokenizer.)

</div>

<span id="tokRulePat"></span>

`tokRulePat (rule)`

[tok.h](../file/tok.h.html)\[[49](../source/tok.h.html#49)\]

<div class="desc">

`(rule[2])`  
*no description available*

</div>

<span id="tokRuleTest"></span>

`tokRuleTest (rule)`

[tok.h](../file/tok.h.html)\[[52](../source/tok.h.html#52)\]

<div class="desc">

`(rule[5])`  
*no description available*

</div>

<span id="tokRuleType"></span>

`tokRuleType (rule)`

[tok.h](../file/tok.h.html)\[[50](../source/tok.h.html#50)\]

<div class="desc">

`(rule[3])`  
*no description available*

</div>

<span id="tokRuleVal"></span>

`tokRuleVal (rule)`

[tok.h](../file/tok.h.html)\[[51](../source/tok.h.html#51)\]

<div class="desc">

`(rule[4])`  
*no description available*

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
