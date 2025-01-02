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

<div class="fdesc">

The header defines the GrammarProd intrinsic class and some associated
properties and constants.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`GrammarProd`](../object/GrammarProd.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

` `[`GramTokTypeLiteral`](#GramTokTypeLiteral)`  `[`GramTokTypeNSpeech`](#GramTokTypeNSpeech)`  `[`GramTokTypeProd`](#GramTokTypeProd)`  `[`GramTokTypeSpeech`](#GramTokTypeSpeech)`  `[`GramTokTypeStar`](#GramTokTypeStar)`  `[`GramTokTypeTokEnum`](#GramTokTypeTokEnum)`  `

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

<span id="GramTokTypeLiteral"></span>

`GramTokTypeLiteral`

[gramprod.h](../file/gramprod.h.html)\[[134](../source/gramprod.h.html#134)\]

<div class="desc">

`3 /* token matches a literal string */`  
*no description available*

</div>

<span id="GramTokTypeNSpeech"></span>

`GramTokTypeNSpeech`

[gramprod.h](../file/gramprod.h.html)\[[137](../source/gramprod.h.html#137)\]

<div class="desc">

`6 /* matches any of several parts of speech */`  
*no description available*

</div>

<span id="GramTokTypeProd"></span>

`GramTokTypeProd`

[gramprod.h](../file/gramprod.h.html)\[[132](../source/gramprod.h.html#132)\]

<div class="desc">

`1 /* token matches a sub-production */`  
Token slot types. Each token slot in an alternative has a type, which
determines what it matches in an input token list. getGrammarInfo()
returns these type codes in the GrammarAltTokInfo objects.

</div>

<span id="GramTokTypeSpeech"></span>

`GramTokTypeSpeech`

[gramprod.h](../file/gramprod.h.html)\[[133](../source/gramprod.h.html#133)\]

<div class="desc">

`2 /* token matches a specific part of speech */`  
*no description available*

</div>

<span id="GramTokTypeStar"></span>

`GramTokTypeStar`

[gramprod.h](../file/gramprod.h.html)\[[136](../source/gramprod.h.html#136)\]

<div class="desc">

`5 /* token matches all remaining input tokens */`  
*no description available*

</div>

<span id="GramTokTypeTokEnum"></span>

`GramTokTypeTokEnum`

[gramprod.h](../file/gramprod.h.html)\[[135](../source/gramprod.h.html#135)\]

<div class="desc">

`4 /* token matches a token class enum */`  
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

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
