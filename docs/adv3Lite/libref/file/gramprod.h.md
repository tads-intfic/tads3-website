[gramprod.h]{.title}[file]{.type}

[source file](../source/gramprod.h.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

**Macros**\
[Summary](#_MacroSummary_)\
[Details](#_Macros_)

**Enums**\
[Summary](#_EnumSummary_)\
[Details](#_Enums_)

**Templates**\
[Summary](#_TemplateSummary_)\
[Details](#_Templates_)

::: fdesc
The header defines the GrammarProd intrinsic class and some associated
properties and constants.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`GrammarProd`](../object/GrammarProd.html)`  ` []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`GramTokTypeLiteral`](#GramTokTypeLiteral)`  `[`GramTokTypeNSpeech`](#GramTokTypeNSpeech)`  `[`GramTokTypeProd`](#GramTokTypeProd)`  `[`GramTokTypeSpeech`](#GramTokTypeSpeech)`  `[`GramTokTypeStar`](#GramTokTypeStar)`  `[`GramTokTypeTokEnum`](#GramTokTypeTokEnum)`  `

[]{#_EnumSummary_}

::: mjhd
[Summary of Enums]{.hdln}  
:::

*(none)* []{#_TemplateSummary_}

::: mjhd
[Summary of Templates]{.hdln}  
:::

*(none)* []{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

*(none)* []{#_Macros_}

::: mjhd
[Macros]{.hdln}  
:::

[]{#GramTokTypeLiteral}

`GramTokTypeLiteral`

[gramprod.h](../file/gramprod.h.html)\[[134](../source/gramprod.h.html#134)\]

::: desc
`3 /* token matches a literal string */`\
*no description available*
:::

[]{#GramTokTypeNSpeech}

`GramTokTypeNSpeech`

[gramprod.h](../file/gramprod.h.html)\[[137](../source/gramprod.h.html#137)\]

::: desc
`6 /* matches any of several parts of speech */`\
*no description available*
:::

[]{#GramTokTypeProd}

`GramTokTypeProd`

[gramprod.h](../file/gramprod.h.html)\[[132](../source/gramprod.h.html#132)\]

::: desc
`1 /* token matches a sub-production */`\
Token slot types. Each token slot in an alternative has a type, which
determines what it matches in an input token list. getGrammarInfo()
returns these type codes in the GrammarAltTokInfo objects.
:::

[]{#GramTokTypeSpeech}

`GramTokTypeSpeech`

[gramprod.h](../file/gramprod.h.html)\[[133](../source/gramprod.h.html#133)\]

::: desc
`2 /* token matches a specific part of speech */`\
*no description available*
:::

[]{#GramTokTypeStar}

`GramTokTypeStar`

[gramprod.h](../file/gramprod.h.html)\[[136](../source/gramprod.h.html#136)\]

::: desc
`5 /* token matches all remaining input tokens */`\
*no description available*
:::

[]{#GramTokTypeTokEnum}

`GramTokTypeTokEnum`

[gramprod.h](../file/gramprod.h.html)\[[135](../source/gramprod.h.html#135)\]

::: desc
`4 /* token matches a token class enum */`\
*no description available*
:::

[]{#_Enums_}

::: mjhd
[Enums]{.hdln}  
:::

*(none)* []{#_Templates_}

::: mjhd
[Templates]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
