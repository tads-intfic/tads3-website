---
layout: docs
---
<span class="title">DynamicFunc</span><span class="type">class</span>

[dynfunc.h](../file/dynfunc.h.html)\[[75](../source/dynfunc.h.html#75)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



The DynamicFunc class is used to create new functions from source code
strings dynamically at run-time. To create a new executable function,
create a new DynamicFunc object:

  
local f = new DynamicFunc('function(x) { return x\*2; }',  
globals, locals, macros);

The first constructor argument is a string giving the source code to
compile.

The optional second argument is a LookupTable containing the global
symbols for the compilation. This can be the table returned from
t3GetGlobalSymbols(), or it can be a custom table. The compiler looks up
string keys in the table to resolve global symbol names; the
corresponding values can be objects, properties, enum values, or
function pointers.

The optional third argument is a StackFrameDesc object, or a list of
StackFrameDesc objects, giving the stack frames to use for local
variable access within the dynamic code. The source code can refer to
local variables in these frames, and can assign new values to them. This
is analogous to the way anonymous functions can refer to local variables
in their lexically enclosing scopes. If you supply a list, the compiler
searches the frames in order of their appearance in the list. If a
variable appears in more than one frame in the list, the compiler will
use the first occurrence it finds.

The optional fourth argument is a LookupTable giving the preprocessor
macros to use for the compilation. This is a table in the format
returned by t3GetGlobalsSymbols(T3PreprocMacros).

If the 'symtab' or 'macros' arguments are omitted or nil, the
compilation is done without global symbols or macros, respectively. Note
that built-in functions and intrinsic classes are identified by global
symbols, so you won't be able to call any built-ins if you don't provide
a symbol table.

The source code string can start with the keyword 'function', followed
by a list of parameter names, followed by the executable statements in
braces. Or, it can simply be a list of statements, in which case it's a
function with no arguments, as though it started with 'function()'.

Creating a DynamicFunc compiles the source code. If a compilation error
occurs (such as a syntax error, or an unknown symbol reference), the
'new' call will throw a CompilerException error. The exception object
contains information on the specific compiler error.

To invoke the new function, simply use the standard function call syntax
on the object value, as though it were a regular function pointer:

  
local y = f(7);

`intrinsic class `**`DynamicFunc`**` : `



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DynamicFunc`**  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getSource`](#getSource)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getSource"></span>

`getSource ( )`

[dynfunc.h](../file/dynfunc.h.html)\[[81](../source/dynfunc.h.html#81)\]



Get the original source code of the function. This returns the string
that was used as the source string to create the function.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


