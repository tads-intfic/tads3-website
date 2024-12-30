[tok.h]{.title}[file]{.type}

[source file](../source/tok.h.html)

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
This header defines some macros for the standard tokenizer class.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`getTokOrig`](#getTokOrig)`  `[`getTokType`](#getTokType)`  `[`getTokVal`](#getTokVal)`  `[`tokRuleName`](#tokRuleName)`  `[`tokRulePat`](#tokRulePat)`  `[`tokRuleTest`](#tokRuleTest)`  `[`tokRuleType`](#tokRuleType)`  `[`tokRuleVal`](#tokRuleVal)`  `

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

[]{#getTokOrig}

`getTokOrig (tok)`

[tok.h](../file/tok.h.html)\[[40](../source/tok.h.html#40)\]

::: desc
`((tok)[3])`\
Get the token\'s original text. This is the original text matched from
the tokenized string.
:::

[]{#getTokType}

`getTokType (tok)`

[tok.h](../file/tok.h.html)\[[34](../source/tok.h.html#34)\]

::: desc
`((tok)[2])`\
Get the token type. This is a token enum value describing the type of
the token.
:::

[]{#getTokVal}

`getTokVal (tok)`

[tok.h](../file/tok.h.html)\[[28](../source/tok.h.html#28)\]

::: desc
`((tok)[1])`\
Get the token value. This is the parsed representation of the token; in
most cases, this is simply the text of the original token, although it
might be converted in some way (words are usually converted to
lower-case, for example).
:::

[]{#tokRuleName}

`tokRuleName (rule)`

[tok.h](../file/tok.h.html)\[[48](../source/tok.h.html#48)\]

::: desc
`(rule[1])`\
Some internal convenience macros. (These are meant for internal use
within the tokenizer class, rather than for client code, but we define
them here because they\'re also useful for subclasses of the standard
tokenizer.)
:::

[]{#tokRulePat}

`tokRulePat (rule)`

[tok.h](../file/tok.h.html)\[[49](../source/tok.h.html#49)\]

::: desc
`(rule[2])`\
*no description available*
:::

[]{#tokRuleTest}

`tokRuleTest (rule)`

[tok.h](../file/tok.h.html)\[[52](../source/tok.h.html#52)\]

::: desc
`(rule[5])`\
*no description available*
:::

[]{#tokRuleType}

`tokRuleType (rule)`

[tok.h](../file/tok.h.html)\[[50](../source/tok.h.html#50)\]

::: desc
`(rule[3])`\
*no description available*
:::

[]{#tokRuleVal}

`tokRuleVal (rule)`

[tok.h](../file/tok.h.html)\[[51](../source/tok.h.html#51)\]

::: desc
`(rule[4])`\
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
