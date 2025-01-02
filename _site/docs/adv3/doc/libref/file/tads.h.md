<span class="title">tads.h</span><span class="type">file</span>

[source file](../source/tads.h.html)

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

  
This file is part of TADS 3.

This file includes all of the standard TADS system headers, so programs
can include this header alone rather than having to include all of the
separate headers individually.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

*(none)* <span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

` `[`_tads_io_say`](#_tads_io_say)`  `[`breakLoop`](#breakLoop)`  `[`perInstance`](#perInstance)`  `[`TADS_IO_HEADER`](#TADS_IO_HEADER)`  `

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

<span id="_tads_io_say"></span>

`_tads_io_say (str)`

[tads.h](../file/tads.h.html)\[[29](../source/tads.h.html#29)\]

<div class="desc">

`tadsSay(str)`  
*no description available*

</div>

<span id="breakLoop"></span>

`breakLoop`

[tads.h](../file/tads.h.html)\[[58](../source/tads.h.html#58)\]

<div class="desc">

`throw BreakLoopSignal`  
Break out of a callback iteration, such as a forEachInstance() loop.
This can be used within the callback code to break out of the loop.

</div>

<span id="perInstance"></span>

`perInstance (expr)`

[tads.h](../file/tads.h.html)\[[81](../source/tads.h.html#81)\]

<div class="desc">

`(self.(targetprop) = (expr))`  
Define a property value using an expression that's evaluated once per
instance of the class where the property is defined. This is used like
so:

class MyClass: MySuperClass  
prop1 = perInstance(new SubObject())  
;

Now, for each instance of MyClass, prop1 will be set to a separate
instance of SubObject.

Note that the per-instance property value is set "on demand" in each
instance. This means that a particular instance's copy of the property
will be set when the property is first evaluated. Note in particular
that the value won't necessary be computed at compile time or during
pre-initialization, because the value for a particular instance won't be
calculated until the property is first used for a that instance.

</div>

<span id="TADS_IO_HEADER"></span>

`TADS_IO_HEADER`

[tads.h](../file/tads.h.html)\[[26](../source/tads.h.html#26)\]

<div class="desc">

`"tadsio.h"`  
To allow the standard library and header files to be used with
alternative I/O intrinsics, we explicitly use macros for the I/O
dependencies in the library - specifically, the I/O intrinsic header
file name, and the name of the default stream output function.

We define defaults for these if they aren't otherwise defined. To
compile library files with an alternative set of I/O intrinsics, define
these symbols in the compiler (for example, by using the -D command-line
option with t3make).

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

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
