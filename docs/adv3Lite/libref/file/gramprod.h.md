---
layout: docs
---
<span class="title">gramprod.h</span><span class="type">file</span>

[source file](../source/gramprod.h.html)

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



The header defines the GrammarProd intrinsic class and some associated
properties and constants.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`GrammarProd`](../object/GrammarProd.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`GramTokTypeLiteral`](#GramTokTypeLiteral) [`GramTokTypeNSpeech`](#GramTokTypeNSpeech) [`GramTokTypeProd`](#GramTokTypeProd) [`GramTokTypeSpeech`](#GramTokTypeSpeech) [`GramTokTypeStar`](#GramTokTypeStar) [`GramTokTypeTokEnum`](#GramTokTypeTokEnum)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="GramTokTypeLiteral"></span>

`GramTokTypeLiteral`

[gramprod.h](../file/gramprod.h.html)\[[134](../source/gramprod.h.html#134)\]



`3 /* token matches a literal string */`  
*no description available*



<span id="GramTokTypeNSpeech"></span>

`GramTokTypeNSpeech`

[gramprod.h](../file/gramprod.h.html)\[[137](../source/gramprod.h.html#137)\]



`6 /* matches any of several parts of speech */`  
*no description available*



<span id="GramTokTypeProd"></span>

`GramTokTypeProd`

[gramprod.h](../file/gramprod.h.html)\[[132](../source/gramprod.h.html#132)\]



`1 /* token matches a sub-production */`  
Token slot types. Each token slot in an alternative has a type, which
determines what it matches in an input token list. getGrammarInfo()
returns these type codes in the GrammarAltTokInfo objects.



<span id="GramTokTypeSpeech"></span>

`GramTokTypeSpeech`

[gramprod.h](../file/gramprod.h.html)\[[133](../source/gramprod.h.html#133)\]



`2 /* token matches a specific part of speech */`  
*no description available*



<span id="GramTokTypeStar"></span>

`GramTokTypeStar`

[gramprod.h](../file/gramprod.h.html)\[[136](../source/gramprod.h.html#136)\]



`5 /* token matches all remaining input tokens */`  
*no description available*



<span id="GramTokTypeTokEnum"></span>

`GramTokTypeTokEnum`

[gramprod.h](../file/gramprod.h.html)\[[135](../source/gramprod.h.html#135)\]



`4 /* token matches a token class enum */`  
*no description available*



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


