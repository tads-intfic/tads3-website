---
layout: docs
---
<span class="title">systype.h</span><span class="type">file</span>

[source file](../source/systype.h.html)

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



This module defines the fundamental intrinsic classes, including Object,
String, Collection, List, and Iterator.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`AnonFuncPtr`](../object/AnonFuncPtr.html)[`Collection`](../object/Collection.html)[`IndexedIterator`](../object/IndexedIterator.html)[`IntrinsicClass`](../object/IntrinsicClass.html)[`IntrinsicClassModifier`](../object/IntrinsicClassModifier.html)[`Iterator`](../object/Iterator.html)[`List`](../object/List.html)[`Object`](../object/Object.html)[`RexPattern`](../object/RexPattern.html)[`StackFrameDesc`](../object/StackFrameDesc.html)[`StackFrameRef`](../object/StackFrameRef.html)[`String`](../object/String.html)[`TadsObject`](../object/TadsObject.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`HtmlifyTranslateNewlines`](#HtmlifyTranslateNewlines)[`HtmlifyTranslateSpaces`](#HtmlifyTranslateSpaces)[`HtmlifyTranslateTabs`](#HtmlifyTranslateTabs)[`HtmlifyTranslateWhitespace`](#HtmlifyTranslateWhitespace)[`PropDefAny`](#PropDefAny)[`PropDefDirectly`](#PropDefDirectly)[`PropDefGetClass`](#PropDefGetClass)[`PropDefInherits`](#PropDefInherits)[`ReplaceAll`](#ReplaceAll)[`ReplaceFollowCase`](#ReplaceFollowCase)[`ReplaceIgnoreCase`](#ReplaceIgnoreCase)[`ReplaceOnce`](#ReplaceOnce)[`ReplaceSerial`](#ReplaceSerial)[`SortAsc`](#SortAsc)[`SortDesc`](#SortDesc)[`TypeBifPtr`](#TypeBifPtr)[`TypeCode`](#TypeCode)[`TypeDString`](#TypeDString)[`TypeEnum`](#TypeEnum)[`TypeFuncPtr`](#TypeFuncPtr)[`TypeInt`](#TypeInt)[`TypeList`](#TypeList)[`TypeNativeCode`](#TypeNativeCode)[`TypeNil`](#TypeNil)[`TypeObject`](#TypeObject)[`TypeProp`](#TypeProp)[`TypeSString`](#TypeSString)[`TypeTrue`](#TypeTrue)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="HtmlifyTranslateNewlines"></span>

`HtmlifyTranslateNewlines`

[systype.h](../file/systype.h.html)\[[898](../source/systype.h.html#898)\]



`0x0002`  
translate newlines - converts each \n character to a \<br\> tag



<span id="HtmlifyTranslateSpaces"></span>

`HtmlifyTranslateSpaces`

[systype.h](../file/systype.h.html)\[[895](../source/systype.h.html#895)\]



`0x0001`  
translate spaces - each space in a run of multiple spaces is converted
to an &nbsp; sequence



<span id="HtmlifyTranslateTabs"></span>

`HtmlifyTranslateTabs`

[systype.h](../file/systype.h.html)\[[901](../source/systype.h.html#901)\]



`0x0004`  
translate tabs - converts each \t character to a \<tab\> tag



<span id="HtmlifyTranslateWhitespace"></span>

`HtmlifyTranslateWhitespace`

[systype.h](../file/systype.h.html)\[[909](../source/systype.h.html#909)\]



`(HtmlifyTranslateSpaces | HtmlifyTranslateNewlines | HtmlifyTranslateTabs)`  
Translate all whitespace characters - translate all spaces, tabs, and
newlines into their HTML equivalents: each space character becomes an
'&nbsp sequence;', each '\n' character becomes a \<br\> tag; and each
'\t' character becomes a \<tab\> tag.



<span id="PropDefAny"></span>

`PropDefAny`

[systype.h](../file/systype.h.html)\[[93](../source/systype.h.html#93)\]



`1`  
propDefined() flags



<span id="PropDefDirectly"></span>

`PropDefDirectly`

[systype.h](../file/systype.h.html)\[[94](../source/systype.h.html#94)\]



`2`  
*no description available*



<span id="PropDefGetClass"></span>

`PropDefGetClass`

[systype.h](../file/systype.h.html)\[[96](../source/systype.h.html#96)\]



`4`  
*no description available*



<span id="PropDefInherits"></span>

`PropDefInherits`

[systype.h](../file/systype.h.html)\[[95](../source/systype.h.html#95)\]



`3`  
*no description available*



<span id="ReplaceAll"></span>

`ReplaceAll`

[systype.h](../file/systype.h.html)\[[916](../source/systype.h.html#916)\]



`0x0001`  
Flags for String.findReplace



<span id="ReplaceFollowCase"></span>

`ReplaceFollowCase`

[systype.h](../file/systype.h.html)\[[918](../source/systype.h.html#918)\]



`0x0004`  
*no description available*



<span id="ReplaceIgnoreCase"></span>

`ReplaceIgnoreCase`

[systype.h](../file/systype.h.html)\[[917](../source/systype.h.html#917)\]



`0x0002`  
*no description available*



<span id="ReplaceOnce"></span>

`ReplaceOnce`

[systype.h](../file/systype.h.html)\[[920](../source/systype.h.html#920)\]



`0x0010`  
*no description available*



<span id="ReplaceSerial"></span>

`ReplaceSerial`

[systype.h](../file/systype.h.html)\[[919](../source/systype.h.html#919)\]



`0x0008`  
*no description available*



<span id="SortAsc"></span>

`SortAsc`

[systype.h](../file/systype.h.html)\[[1187](../source/systype.h.html#1187)\]



`nil`  
Sorting order flags. These can be passed in as the first argument to
List.sort() (and Vector.sort() as well) to make the meaning of the
argument clearer.



<span id="SortDesc"></span>

`SortDesc`

[systype.h](../file/systype.h.html)\[[1188](../source/systype.h.html#1188)\]



`true`  
*no description available*



<span id="TypeBifPtr"></span>

`TypeBifPtr`

[systype.h](../file/systype.h.html)\[[30](../source/systype.h.html#30)\]



`16`  
*no description available*



<span id="TypeCode"></span>

`TypeCode`

[systype.h](../file/systype.h.html)\[[26](../source/systype.h.html#26)\]



`11`  
*no description available*



<span id="TypeDString"></span>

`TypeDString`

[systype.h](../file/systype.h.html)\[[24](../source/systype.h.html#24)\]



`9`  
*no description available*



<span id="TypeEnum"></span>

`TypeEnum`

[systype.h](../file/systype.h.html)\[[29](../source/systype.h.html#29)\]



`15`  
*no description available*



<span id="TypeFuncPtr"></span>

`TypeFuncPtr`

[systype.h](../file/systype.h.html)\[[27](../source/systype.h.html#27)\]



`12`  
*no description available*



<span id="TypeInt"></span>

`TypeInt`

[systype.h](../file/systype.h.html)\[[22](../source/systype.h.html#22)\]



`7`  
*no description available*



<span id="TypeList"></span>

`TypeList`

[systype.h](../file/systype.h.html)\[[25](../source/systype.h.html#25)\]



`10`  
*no description available*



<span id="TypeNativeCode"></span>

`TypeNativeCode`

[systype.h](../file/systype.h.html)\[[28](../source/systype.h.html#28)\]



`14`  
*no description available*



<span id="TypeNil"></span>

`TypeNil`

[systype.h](../file/systype.h.html)\[[18](../source/systype.h.html#18)\]



`1`  
TADS datatype codes. These values are returned by propType(), etc.



<span id="TypeObject"></span>

`TypeObject`

[systype.h](../file/systype.h.html)\[[20](../source/systype.h.html#20)\]



`5`  
*no description available*



<span id="TypeProp"></span>

`TypeProp`

[systype.h](../file/systype.h.html)\[[21](../source/systype.h.html#21)\]



`6`  
*no description available*



<span id="TypeSString"></span>

`TypeSString`

[systype.h](../file/systype.h.html)\[[23](../source/systype.h.html#23)\]



`8`  
*no description available*



<span id="TypeTrue"></span>

`TypeTrue`

[systype.h](../file/systype.h.html)\[[19](../source/systype.h.html#19)\]



`2`  
*no description available*



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


