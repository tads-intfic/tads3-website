[file.h]{.title}[file]{.type}

[source file](../source/file.h.html)

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
This header defines the File intrinsic class.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`File`](../object/File.html)`  `[`TemporaryFile`](../object/TemporaryFile.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

*(none)* []{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`FileAccessRead`](#FileAccessRead)`  `[`FileAccessReadWriteKeep`](#FileAccessReadWriteKeep)`  `[`FileAccessReadWriteTrunc`](#FileAccessReadWriteTrunc)`  `[`FileAccessWrite`](#FileAccessWrite)`  `[`FileModeData`](#FileModeData)`  `[`FileModeRaw`](#FileModeRaw)`  `[`FileModeText`](#FileModeText)`  `[`LibraryDefaultsFile`](#LibraryDefaultsFile)`  `[`WebUIPrefsFile`](#WebUIPrefsFile)`  `

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

[]{#FileAccessRead}

`FileAccessRead`

[file.h](../file/file.h.html)\[[38](../source/file.h.html#38)\]

::: desc
`0x0001`\
Read mode - the file is opened for reading (writing is not allowed).
When opened in this mode, the file must exist, or a
FileNotFoundException is thrown from the open method.
:::

[]{#FileAccessReadWriteKeep}

`FileAccessReadWriteKeep`

[file.h](../file/file.h.html)\[[55](../source/file.h.html#55)\]

::: desc
`0x0003`\
Read/write mode, keeping existing contents - the file is opened for both
reading and writing. If the file does not exist, a new file is created.
If the file does already exist, the existing contents of the file are
kept intact on open.
:::

[]{#FileAccessReadWriteTrunc}

`FileAccessReadWriteTrunc`

[file.h](../file/file.h.html)\[[64](../source/file.h.html#64)\]

::: desc
`0x0004`\
Read/write mode, truncating existing contents - the file is opened for
both reading and writing. If the file does not exist, a new file is
created. If the file does already exist, the existing contents of the
file are discarded (i.e., the file is truncated to zero length) on open.
:::

[]{#FileAccessWrite}

`FileAccessWrite`

[file.h](../file/file.h.html)\[[47](../source/file.h.html#47)\]

::: desc
`0x0002`\
Write mode - the file is opened for writing (reading is not allowed).
When opened in this mode, if the file doesn\'t already exist, a new file
is created; if the file does already exist, the existing data in the
file are discarded (i.e., the file is truncated to zero length) on open.
:::

[]{#FileModeData}

`FileModeData`

[file.h](../file/file.h.html)\[[77](../source/file.h.html#77)\]

::: desc
`2`\
\"data\" mode
:::

[]{#FileModeRaw}

`FileModeRaw`

[file.h](../file/file.h.html)\[[80](../source/file.h.html#80)\]

::: desc
`3`\
\"raw\" mode
:::

[]{#FileModeText}

`FileModeText`

[file.h](../file/file.h.html)\[[74](../source/file.h.html#74)\]

::: desc
`1`\
text mode
:::

[]{#LibraryDefaultsFile}

`LibraryDefaultsFile`

[file.h](../file/file.h.html)\[[112](../source/file.h.html#112)\]

::: desc
`0x0001`\
The library defaults file. This is the special file where the library
stores user-controlled start-up default settings.
:::

[]{#WebUIPrefsFile}

`WebUIPrefsFile`

[file.h](../file/file.h.html)\[[118](../source/file.h.html#118)\]

::: desc
`0x0002`\
Web UI preference settings file. This is the special file where we store
display style settings for the Web UI.
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
