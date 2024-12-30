[systype.h]{.title}[file]{.type}

[source file](../source/systype.h.html)

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
This module defines the fundamental intrinsic classes, including Object,
String, Collection, List, and Iterator.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`AnonFuncPtr`](../object/AnonFuncPtr.html)`  `[`Collection`](../object/Collection.html)`  `[`IndexedIterator`](../object/IndexedIterator.html)`  `[`IntrinsicClass`](../object/IntrinsicClass.html)`  `[`IntrinsicClassModifier`](../object/IntrinsicClassModifier.html)`  `[`Iterator`](../object/Iterator.html)`  `[`List`](../object/List.html)`  `[`Object`](../object/Object.html)`  `[`RexPattern`](../object/RexPattern.html)`  `[`StackFrameDesc`](../object/StackFrameDesc.html)`  `[`StackFrameRef`](../object/StackFrameRef.html)`  `[`String`](../object/String.html)`  `[`TadsObject`](../object/TadsObject.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`HtmlifyTranslateNewlines`](#HtmlifyTranslateNewlines)`  `[`HtmlifyTranslateSpaces`](#HtmlifyTranslateSpaces)`  `[`HtmlifyTranslateTabs`](#HtmlifyTranslateTabs)`  `[`HtmlifyTranslateWhitespace`](#HtmlifyTranslateWhitespace)`  `[`PropDefAny`](#PropDefAny)`  `[`PropDefDirectly`](#PropDefDirectly)`  `[`PropDefGetClass`](#PropDefGetClass)`  `[`PropDefInherits`](#PropDefInherits)`  `[`ReplaceAll`](#ReplaceAll)`  `[`ReplaceFollowCase`](#ReplaceFollowCase)`  `[`ReplaceIgnoreCase`](#ReplaceIgnoreCase)`  `[`ReplaceOnce`](#ReplaceOnce)`  `[`ReplaceSerial`](#ReplaceSerial)`  `[`SortAsc`](#SortAsc)`  `[`SortDesc`](#SortDesc)`  `[`TypeBifPtr`](#TypeBifPtr)`  `[`TypeCode`](#TypeCode)`  `[`TypeDString`](#TypeDString)`  `[`TypeEnum`](#TypeEnum)`  `[`TypeFuncPtr`](#TypeFuncPtr)`  `[`TypeInt`](#TypeInt)`  `[`TypeList`](#TypeList)`  `[`TypeNativeCode`](#TypeNativeCode)`  `[`TypeNil`](#TypeNil)`  `[`TypeObject`](#TypeObject)`  `[`TypeProp`](#TypeProp)`  `[`TypeSString`](#TypeSString)`  `[`TypeTrue`](#TypeTrue)`  `

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

[]{#HtmlifyTranslateNewlines}

`HtmlifyTranslateNewlines`

[systype.h](../file/systype.h.html)\[[898](../source/systype.h.html#898)\]

::: desc
`0x0002`\
translate newlines - converts each \\n character to a \<br\> tag
:::

[]{#HtmlifyTranslateSpaces}

`HtmlifyTranslateSpaces`

[systype.h](../file/systype.h.html)\[[895](../source/systype.h.html#895)\]

::: desc
`0x0001`\
translate spaces - each space in a run of multiple spaces is converted
to an &nbsp; sequence
:::

[]{#HtmlifyTranslateTabs}

`HtmlifyTranslateTabs`

[systype.h](../file/systype.h.html)\[[901](../source/systype.h.html#901)\]

::: desc
`0x0004`\
translate tabs - converts each \\t character to a \<tab\> tag
:::

[]{#HtmlifyTranslateWhitespace}

`HtmlifyTranslateWhitespace`

[systype.h](../file/systype.h.html)\[[909](../source/systype.h.html#909)\]

::: desc
`(HtmlifyTranslateSpaces | HtmlifyTranslateNewlines | HtmlifyTranslateTabs)`\
Translate all whitespace characters - translate all spaces, tabs, and
newlines into their HTML equivalents: each space character becomes an
\'&nbsp sequence;\', each \'\\n\' character becomes a \<br\> tag; and
each \'\\t\' character becomes a \<tab\> tag.
:::

[]{#PropDefAny}

`PropDefAny`

[systype.h](../file/systype.h.html)\[[93](../source/systype.h.html#93)\]

::: desc
`1`\
propDefined() flags
:::

[]{#PropDefDirectly}

`PropDefDirectly`

[systype.h](../file/systype.h.html)\[[94](../source/systype.h.html#94)\]

::: desc
`2`\
*no description available*
:::

[]{#PropDefGetClass}

`PropDefGetClass`

[systype.h](../file/systype.h.html)\[[96](../source/systype.h.html#96)\]

::: desc
`4`\
*no description available*
:::

[]{#PropDefInherits}

`PropDefInherits`

[systype.h](../file/systype.h.html)\[[95](../source/systype.h.html#95)\]

::: desc
`3`\
*no description available*
:::

[]{#ReplaceAll}

`ReplaceAll`

[systype.h](../file/systype.h.html)\[[916](../source/systype.h.html#916)\]

::: desc
`0x0001`\
Flags for String.findReplace
:::

[]{#ReplaceFollowCase}

`ReplaceFollowCase`

[systype.h](../file/systype.h.html)\[[918](../source/systype.h.html#918)\]

::: desc
`0x0004`\
*no description available*
:::

[]{#ReplaceIgnoreCase}

`ReplaceIgnoreCase`

[systype.h](../file/systype.h.html)\[[917](../source/systype.h.html#917)\]

::: desc
`0x0002`\
*no description available*
:::

[]{#ReplaceOnce}

`ReplaceOnce`

[systype.h](../file/systype.h.html)\[[920](../source/systype.h.html#920)\]

::: desc
`0x0010`\
*no description available*
:::

[]{#ReplaceSerial}

`ReplaceSerial`

[systype.h](../file/systype.h.html)\[[919](../source/systype.h.html#919)\]

::: desc
`0x0008`\
*no description available*
:::

[]{#SortAsc}

`SortAsc`

[systype.h](../file/systype.h.html)\[[1187](../source/systype.h.html#1187)\]

::: desc
`nil`\
Sorting order flags. These can be passed in as the first argument to
List.sort() (and Vector.sort() as well) to make the meaning of the
argument clearer.
:::

[]{#SortDesc}

`SortDesc`

[systype.h](../file/systype.h.html)\[[1188](../source/systype.h.html#1188)\]

::: desc
`true`\
*no description available*
:::

[]{#TypeBifPtr}

`TypeBifPtr`

[systype.h](../file/systype.h.html)\[[30](../source/systype.h.html#30)\]

::: desc
`16`\
*no description available*
:::

[]{#TypeCode}

`TypeCode`

[systype.h](../file/systype.h.html)\[[26](../source/systype.h.html#26)\]

::: desc
`11`\
*no description available*
:::

[]{#TypeDString}

`TypeDString`

[systype.h](../file/systype.h.html)\[[24](../source/systype.h.html#24)\]

::: desc
`9`\
*no description available*
:::

[]{#TypeEnum}

`TypeEnum`

[systype.h](../file/systype.h.html)\[[29](../source/systype.h.html#29)\]

::: desc
`15`\
*no description available*
:::

[]{#TypeFuncPtr}

`TypeFuncPtr`

[systype.h](../file/systype.h.html)\[[27](../source/systype.h.html#27)\]

::: desc
`12`\
*no description available*
:::

[]{#TypeInt}

`TypeInt`

[systype.h](../file/systype.h.html)\[[22](../source/systype.h.html#22)\]

::: desc
`7`\
*no description available*
:::

[]{#TypeList}

`TypeList`

[systype.h](../file/systype.h.html)\[[25](../source/systype.h.html#25)\]

::: desc
`10`\
*no description available*
:::

[]{#TypeNativeCode}

`TypeNativeCode`

[systype.h](../file/systype.h.html)\[[28](../source/systype.h.html#28)\]

::: desc
`14`\
*no description available*
:::

[]{#TypeNil}

`TypeNil`

[systype.h](../file/systype.h.html)\[[18](../source/systype.h.html#18)\]

::: desc
`1`\
TADS datatype codes. These values are returned by propType(), etc.
:::

[]{#TypeObject}

`TypeObject`

[systype.h](../file/systype.h.html)\[[20](../source/systype.h.html#20)\]

::: desc
`5`\
*no description available*
:::

[]{#TypeProp}

`TypeProp`

[systype.h](../file/systype.h.html)\[[21](../source/systype.h.html#21)\]

::: desc
`6`\
*no description available*
:::

[]{#TypeSString}

`TypeSString`

[systype.h](../file/systype.h.html)\[[23](../source/systype.h.html#23)\]

::: desc
`8`\
*no description available*
:::

[]{#TypeTrue}

`TypeTrue`

[systype.h](../file/systype.h.html)\[[19](../source/systype.h.html#19)\]

::: desc
`2`\
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
