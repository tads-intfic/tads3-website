[strcomp.h]{.title}[file]{.type}

[source file](../source/strcomp.h.html)

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
This header defines the StringComparator intrinsic class.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`StringComparator`](../object/StringComparator.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`StrCompCaseFold`](#StrCompCaseFold)`  `[`StrCompMatch`](#StrCompMatch)`  `[`StrCompTrunc`](#StrCompTrunc)`  `

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

[]{#StrCompCaseFold}

`StrCompCaseFold`

[strcomp.h](../file/strcomp.h.html)\[[129](../source/strcomp.h.html#129)\]

::: desc
`0x0002`\
Case folding - this flag is set when the two values match, but one or
more characters differ in case (in other words, an upper-case letter in
the input string matched a lower-case letter in the dictionary string,
or vice versa).
:::

[]{#StrCompMatch}

`StrCompMatch`

[strcomp.h](../file/strcomp.h.html)\[[121](../source/strcomp.h.html#121)\]

::: desc
`0x0001`\
Match - this flag is set in the return code for all matching strings.
(This flag isn\'t as useless as it might sound; its purpose is to ensure
that the return value from matchValues() is non-zero for all matches,
even when no other flag values are applicable.)
:::

[]{#StrCompTrunc}

`StrCompTrunc`

[strcomp.h](../file/strcomp.h.html)\[[140](../source/strcomp.h.html#140)\]

::: desc
`0x0004`\
Truncation - this flag is set when the input string is shorter than the
value string (but matches the dictionary completely up to the input
string\'s full length, and is at least as long as the truncation length
specified in the constructor). This flag can only be returned when
truncation is allowed (as indicated by a non-zero truncation length in
the constructor), because truncated strings will never match at all when
truncation isn\'t allowed.
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
