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



This header defines some macros for the standard tokenizer class.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`getTokOrig`](#getTokOrig)[`getTokType`](#getTokType)[`getTokVal`](#getTokVal)[`tokRuleName`](#tokRuleName)[`tokRulePat`](#tokRulePat)[`tokRuleTest`](#tokRuleTest)[`tokRuleType`](#tokRuleType)[`tokRuleVal`](#tokRuleVal)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="getTokOrig"></span>

`getTokOrig (tok)`

[tok.h](../file/tok.h.html)\[[40](../source/tok.h.html#40)\]



`((tok)[3])`  
Get the token's original text. This is the original text matched from
the tokenized string.



<span id="getTokType"></span>

`getTokType (tok)`

[tok.h](../file/tok.h.html)\[[34](../source/tok.h.html#34)\]



`((tok)[2])`  
Get the token type. This is a token enum value describing the type of
the token.



<span id="getTokVal"></span>

`getTokVal (tok)`

[tok.h](../file/tok.h.html)\[[28](../source/tok.h.html#28)\]



`((tok)[1])`  
Get the token value. This is the parsed representation of the token; in
most cases, this is simply the text of the original token, although it
might be converted in some way (words are usually converted to
lower-case, for example).



<span id="tokRuleName"></span>

`tokRuleName (rule)`

[tok.h](../file/tok.h.html)\[[48](../source/tok.h.html#48)\]



`(rule[1])`  
Some internal convenience macros. (These are meant for internal use
within the tokenizer class, rather than for client code, but we define
them here because they're also useful for subclasses of the standard
tokenizer.)



<span id="tokRulePat"></span>

`tokRulePat (rule)`

[tok.h](../file/tok.h.html)\[[49](../source/tok.h.html#49)\]



`(rule[2])`  
*no description available*



<span id="tokRuleTest"></span>

`tokRuleTest (rule)`

[tok.h](../file/tok.h.html)\[[52](../source/tok.h.html#52)\]



`(rule[5])`  
*no description available*



<span id="tokRuleType"></span>

`tokRuleType (rule)`

[tok.h](../file/tok.h.html)\[[50](../source/tok.h.html#50)\]



`(rule[3])`  
*no description available*



<span id="tokRuleVal"></span>

`tokRuleVal (rule)`

[tok.h](../file/tok.h.html)\[[51](../source/tok.h.html#51)\]



`(rule[4])`  
*no description available*



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


