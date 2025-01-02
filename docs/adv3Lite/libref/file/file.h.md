---
layout: docs
---
<span class="title">file.h</span><span class="type">file</span>

[source file](../source/file.h.html)

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



This header defines the File intrinsic class.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`File`](../object/File.html) [`TemporaryFile`](../object/TemporaryFile.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`FileAccessRead`](#FileAccessRead) [`FileAccessReadWriteKeep`](#FileAccessReadWriteKeep) [`FileAccessReadWriteTrunc`](#FileAccessReadWriteTrunc) [`FileAccessWrite`](#FileAccessWrite) [`FileModeData`](#FileModeData) [`FileModeRaw`](#FileModeRaw) [`FileModeText`](#FileModeText) [`LibraryDefaultsFile`](#LibraryDefaultsFile) [`WebUIPrefsFile`](#WebUIPrefsFile)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="FileAccessRead"></span>

`FileAccessRead`

[file.h](../file/file.h.html)\[[38](../source/file.h.html#38)\]



`0x0001`  
Read mode - the file is opened for reading (writing is not allowed).
When opened in this mode, the file must exist, or a
FileNotFoundException is thrown from the open method.



<span id="FileAccessReadWriteKeep"></span>

`FileAccessReadWriteKeep`

[file.h](../file/file.h.html)\[[55](../source/file.h.html#55)\]



`0x0003`  
Read/write mode, keeping existing contents - the file is opened for both
reading and writing. If the file does not exist, a new file is created.
If the file does already exist, the existing contents of the file are
kept intact on open.



<span id="FileAccessReadWriteTrunc"></span>

`FileAccessReadWriteTrunc`

[file.h](../file/file.h.html)\[[64](../source/file.h.html#64)\]



`0x0004`  
Read/write mode, truncating existing contents - the file is opened for
both reading and writing. If the file does not exist, a new file is
created. If the file does already exist, the existing contents of the
file are discarded (i.e., the file is truncated to zero length) on open.



<span id="FileAccessWrite"></span>

`FileAccessWrite`

[file.h](../file/file.h.html)\[[47](../source/file.h.html#47)\]



`0x0002`  
Write mode - the file is opened for writing (reading is not allowed).
When opened in this mode, if the file doesn't already exist, a new file
is created; if the file does already exist, the existing data in the
file are discarded (i.e., the file is truncated to zero length) on open.



<span id="FileModeData"></span>

`FileModeData`

[file.h](../file/file.h.html)\[[77](../source/file.h.html#77)\]



`2`  
"data" mode



<span id="FileModeRaw"></span>

`FileModeRaw`

[file.h](../file/file.h.html)\[[80](../source/file.h.html#80)\]



`3`  
"raw" mode



<span id="FileModeText"></span>

`FileModeText`

[file.h](../file/file.h.html)\[[74](../source/file.h.html#74)\]



`1`  
text mode



<span id="LibraryDefaultsFile"></span>

`LibraryDefaultsFile`

[file.h](../file/file.h.html)\[[112](../source/file.h.html#112)\]



`0x0001`  
The library defaults file. This is the special file where the library
stores user-controlled start-up default settings.



<span id="WebUIPrefsFile"></span>

`WebUIPrefsFile`

[file.h](../file/file.h.html)\[[118](../source/file.h.html#118)\]



`0x0002`  
Web UI preference settings file. This is the special file where we store
display style settings for the Web UI.



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


