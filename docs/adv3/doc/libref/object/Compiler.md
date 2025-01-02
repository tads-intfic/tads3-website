<span class="title">Compiler</span><span class="type">object</span>

[dynfunc.t](../file/dynfunc.t.html)\[[40](../source/dynfunc.t.html#40)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Compiler: This object provides a simplified interface to the dynamic
compiler. The methods here can be used instead of manually creating
DynamicFunc instances.

The main advantage of using this object to compile code is that it
automatically provides access to the global symbol table that was used
to compile the current program, for use in dynamic code. Without the
global symbol table, dynamic code won't have access to object names,
property names, function names, and so on. That doesn't stop you from
compiling code that only depends upon its own function parameters and
local variables, but for most purposes the global symbols are useful to
have around.

Note that including this object in a project will automatically save the
global symbol table in the compiled .t3 file. This increases the size of
the .t3 file, as well as memory usage during execution. If you're
concerned about minimizing the .t3 file size or the run-time memory
footprint, \*and\* you don't need global symbols for dynamic code (or
you don't use the dynamic compiler at all), you can save some space by
omitting this whole module from the build.

**`Compiler`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Compiler`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`macros_`](#macros_)`  `[`symtab_`](#symtab_)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`compile`](#compile)`  `[`defineFunc`](#defineFunc)`  `[`eval`](#eval)`  `[`execute`](#execute)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="macros_"></span>

`macros_`

[dynfunc.t](../file/dynfunc.t.html)\[[149](../source/dynfunc.t.html#149)\]

<div class="desc">

a saved referenced to the preprocessor macro table

</div>

<span id="symtab_"></span>

`symtab_`

[dynfunc.t](../file/dynfunc.t.html)\[[146](../source/dynfunc.t.html#146)\]

<div class="desc">

a saved reference to the global symbol table

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="compile"></span>

`compile (str, locals?)`

[dynfunc.t](../file/dynfunc.t.html)\[[73](../source/dynfunc.t.html#73)\]

<div class="desc">

Compile an expression or function. 'str' is a string giving the code to
compile. This can be a simple value expression, such as 'Me.location' or
'new BigNumber(12345).sqrt()'. Or, it can be a complete unnamed function
definition, using this syntax:

  
'function(x, y, z) { ...body of function... }'

The body of the function can contain any executable code that you could
write in a regular function in static code: if, while, switch, return,
etc.

The return value is a DynamicFunc containing the compiled expression or
function. You call it by using the return value as though it were a
function:

  
local f = Compiler.compile('Me.location');  
local loc = f();

If the source string was just an expression, it acts like a function
that takes zero arguments, and returns the computed value of the
expression. The expression is evaluated anew each time you invoke it, so
you'll get the "live" value of an expression that refers to object
properties or other external data. In the example above, we'd get the
current value of Me.location every time we call f().

The source string is actually compiled immediately when you call this
function. This means it's checked for errors, such as syntax errors and
unknown symbol names. If the code contains any errors, this method
throws a CompilerException describing the problem.

</div>

<span id="defineFunc"></span>

`defineFunc (name, str, locals?)`

[dynfunc.t](../file/dynfunc.t.html)\[[85](../source/dynfunc.t.html#85)\]

<div class="desc">

Compile a dynamic function string, and add it to the global symbol table
as a function with the given name. This effectively creates a new named
function that you can call from other dynamic code objects.

</div>

<span id="eval"></span>

`eval (str, locals?)`

[dynfunc.t](../file/dynfunc.t.html)\[[118](../source/dynfunc.t.html#118)\]

<div class="desc">

Evaluate an expression. 'str' is a string giving code to compile. In
most cases, this is simply a simple value expression, although it's also
acceptable to use the 'function()' syntax to create a function that
takes no arguments.

This method compiles the source string and immediately calls the
resulting compiled code. The return value is the value returned from the
compiled code itself. This method thus provides a quick way to evaluate
an expression.

If the string contains any syntax errors or other compilation errors,
the method throws a CompilerException. In addition, it's possible for
the compiled code to throw exceptions of its own; this method doesn't
catch those, leaving it up to the caller to handle them.

If you expect to evaluate the same expression repeatedly, you're better
off using compile() to get the compiled representation of the
expression, and then call that compiled code each time the value is
needed. That's more efficient than using eval() each time, since eval()
to recompile the expression on every call, which is a fairly complex
process.

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[dynfunc.t](../file/dynfunc.t.html)\[[138](../source/dynfunc.t.html#138)\]

<div class="desc">

During preinit, save a reference to the program's global symbol table in
a property of self. The VM always makes the global symbols available
during preinit, but by default it discards the table after that because
most programs don't need it. That means that the symbols aren't
available by default during normal execution. However, saving a
reference here prevents the garbage collector from discarding the table
when preinit finishes, which forces it to be saved in the final .t3 file
and thus makes it available permanently.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
