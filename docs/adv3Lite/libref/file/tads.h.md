[tads.h]{.title}[file]{.type}

[source file](../source/tads.h.html)

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
\
This file is part of TADS 3.

This file includes all of the standard TADS system headers, so programs
can include this header alone rather than having to include all of the
separate headers individually.
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

` `[`_tads_io_say`](#_tads_io_say)`  `[`breakLoop`](#breakLoop)`  `[`perInstance`](#perInstance)`  `[`TADS_IO_HEADER`](#TADS_IO_HEADER)`  `

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

[]{#_tads_io_say}

`_tads_io_say (str)`

[tads.h](../file/tads.h.html)\[[29](../source/tads.h.html#29)\]

::: desc
`tadsSay(str)`\
*no description available*
:::

[]{#breakLoop}

`breakLoop`

[tads.h](../file/tads.h.html)\[[58](../source/tads.h.html#58)\]

::: desc
`throw BreakLoopSignal`\
Break out of a callback iteration, such as a forEachInstance() loop.
This can be used within the callback code to break out of the loop.
:::

[]{#perInstance}

`perInstance (expr)`

[tads.h](../file/tads.h.html)\[[81](../source/tads.h.html#81)\]

::: desc
`(self.(targetprop) = (expr))`\
Define a property value using an expression that\'s evaluated once per
instance of the class where the property is defined. This is used like
so:

class MyClass: MySuperClass\
prop1 = perInstance(new SubObject())\
;

Now, for each instance of MyClass, prop1 will be set to a separate
instance of SubObject.

Note that the per-instance property value is set \"on demand\" in each
instance. This means that a particular instance\'s copy of the property
will be set when the property is first evaluated. Note in particular
that the value won\'t necessary be computed at compile time or during
pre-initialization, because the value for a particular instance won\'t
be calculated until the property is first used for a that instance.
:::

[]{#TADS_IO_HEADER}

`TADS_IO_HEADER`

[tads.h](../file/tads.h.html)\[[26](../source/tads.h.html#26)\]

::: desc
`"tadsio.h"`\
To allow the standard library and header files to be used with
alternative I/O intrinsics, we explicitly use macros for the I/O
dependencies in the library - specifically, the I/O intrinsic header
file name, and the name of the default stream output function.

We define defaults for these if they aren\'t otherwise defined. To
compile library files with an alternative set of I/O intrinsics, define
these symbols in the compiler (for example, by using the -D command-line
option with t3make).
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
