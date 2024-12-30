[\_main.t]{.title}[file]{.type}

[source file](../source/_main.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
This module defines a number of low-level functions and classes that
most TADS 3 programs will need, whether based on the adv3 library or
not. This module includes the main program entrypoint, the basic
Exception classes, and the modular initialization framework.

The compiler automatically links this module into every program by
default, but you can override this by specifying the \"-nodef\" option
to t3make. If you remove this module, you\'ll have to provide your own
implementations for many of the functions and classes defined here.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`BreakLoopSignal`](../object/BreakLoopSignal.html)`  `[`CircularExecException`](../object/CircularExecException.html)`  `[`Exception`](../object/Exception.html)`  `[`InitObject`](../object/InitObject.html)`  `[`ModuleExecObject`](../object/ModuleExecObject.html)`  `[`OneOfIndexGen`](../object/OneOfIndexGen.html)`  `[`PreinitObject`](../object/PreinitObject.html)`  `[`ProgramException`](../object/ProgramException.html)`  `[`RestartSignal`](../object/RestartSignal.html)`  `[`RuntimeError`](../object/RuntimeError.html)`  `[`SpecialsToHtmlState`](../object/SpecialsToHtmlState.html)`  `[`StorageServerError`](../object/StorageServerError.html)`  `[`T3StackInfo`](../object/T3StackInfo.html)`  `[`UnknownCharSetException`](../object/UnknownCharSetException.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`mainAtExit`](../object/mainAtExit.html)`  `[`mainGlobal`](../object/mainGlobal.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`_default_display_fn`](#_default_display_fn)`  `[`_init`](#_init)`  `[`_main`](#_main)`  `[`_mainCommon`](#_mainCommon)`  `[`_mainRestore`](#_mainRestore)`  `[`_outputCapture`](#_outputCapture)`  `[`_preinit`](#_preinit)`  `[`dataTypeXlat`](#dataTypeXlat)`  `[`flexcall`](#flexcall)`  `[`forEachInstance`](#forEachInstance)`  `[`initAfterLoad`](#initAfterLoad)`  `[`instanceWhich`](#instanceWhich)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#_default_display_fn}

`_default_display_fn (str)`

[\_main.t](../file/_main.t.html)\[[968](../source/_main.t.html#968)\]

::: desc
Default string display function. Our main entrypoint code establishes
this function as the default output function.
:::

[]{#_init}

`_init ( )`

[\_main.t](../file/_main.t.html)\[[558](../source/_main.t.html#558)\]

::: desc
Library initialization. This is called during each program start-up to
initialize the program. Since this is run each time the user starts the
program, this can display any introductory messages, set up the user
interface, and so on.
:::

[]{#_main}

`_main (args)`

[\_main.t](../file/_main.t.html)\[[27](../source/_main.t.html#27)\]

::: desc
Main program entrypoint. The VM invokes this function at program
startup.
:::

[]{#_mainCommon}

`_mainCommon (args, restoreFile)`

[\_main.t](../file/_main.t.html)\[[59](../source/_main.t.html#59)\]

::: desc
Common main entrypoint. This function can be called with or without a
saved state file to restore.
:::

[]{#_mainRestore}

`_mainRestore (args, restoreFile)`

[\_main.t](../file/_main.t.html)\[[49](../source/_main.t.html#49)\]

::: desc
Main program entrypoint for restoring a saved state. The VM invokes this
function at startup instead of \_main() when the user explicitly
specifies a saved state file to restore when starting the program. (On a
command-line interpreter, this would involve using a special option on
the T3 interpreter command line; for a GUI shell, this might simply
involve double-clicking on the desktop icon for a saved state file.)

Note that we must export this as the \'mainRestore\' symbol so that the
interpreter knows how to find it.
:::

[]{#_outputCapture}

`_outputCapture (func)`

[\_main.t](../file/_main.t.html)\[[974](../source/_main.t.html#974)\]

::: desc
Raw output capture. This bypasses any filtering and directly captures
any output generated by the callback.
:::

[]{#_preinit}

`_preinit ( )`

[\_main.t](../file/_main.t.html)\[[540](../source/_main.t.html#540)\]

::: desc
Library pre-initialization. This is called immediately after compilation
to pre-initialize the program. Any changes made here to object states
become part of the initial state stored in the image file, so this
establishes the static initial state of the program.

The advantage of doing work during pre-initialization is that this work
is done once, during compilation, and is thus not repeated each time a
user starts the program. Time-consuming initialization work can thus be
made invisible to the user.

Note that the pre-initialization code should never do anything that
involves the user interface, since this code runs during compilation and
does not run again when users start the program. So, anything that you
want a user to see must be done during normal initialization (such as in
the main() routine), not here.
:::

[]{#dataTypeXlat}

`dataTypeXlat (val)`

[\_main.t](../file/_main.t.html)\[[631](../source/_main.t.html#631)\]

::: desc
Get the \"translated\" datatype of a value. This is essentially the same
as dataType(), except that anonymous function objects and dynamic
function objects are treated as being \"function pointer\" types
(TypeFuncPtr).
:::

[]{#flexcall}

`flexcall (func, [args])`

[\_main.t](../file/_main.t.html)\[[185](../source/_main.t.html#185)\]

::: desc
Flexible function call. This calls the given function, passing as many
arguments from the given argument list as the function actually wants.
If the list doesn\'t have enough arguments to satisfy the function\'s
minimum requirements, we add \'nil\' arguments to pad out the minimum.
If the list exceeds the function\'s maximum, we drop arguments past the
maximum.
:::

[]{#forEachInstance}

`forEachInstance (cls, func)`

[\_main.t](../file/_main.t.html)\[[575](../source/_main.t.html#575)\]

::: desc
For convenience, a simple object iterator function. This function
invokes a callback function for each instance of the given class, in
arbitrary order.

The callback is invoked with one argument, which gives the current
instance. The callback can \"break\" out of the loop by throwing a
BreakLoopSignal, which can be done conveniently using the breakLoop
macro.
:::

[]{#initAfterLoad}

`initAfterLoad ( )`

[\_main.t](../file/_main.t.html)\[[239](../source/_main.t.html#239)\]

::: desc
General post-load initialization. The main program entrypoint \_main()
calls this routine to set up the default display function, run
pre-initialization if necessary, and run initialization. This routine is
also useful for the target of a restartGame() routine, to perform all of
the basic load-time initialization again after a restart.
:::

[]{#instanceWhich}

`instanceWhich (cls, func)`

[\_main.t](../file/_main.t.html)\[[598](../source/_main.t.html#598)\]

::: desc
Find an instance of the given class for which the given function returns
true. We iterate over objects of the given class in arbitrary order, and
return the first instance for which the function returns true. Retursn
nil if there is no such instance.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::