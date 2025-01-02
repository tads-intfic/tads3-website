<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="langsec.htm" class="nav">The Language</a> \> Exporting
Symbols  
<span class="navnp"><a href="icext.htm" class="nav"><em>Prev:</em> Extending Intrinsic
Classes</a>    
<a href="errmsg.htm" class="nav"><em>Next:</em> VM Run-Time Error
Codes</a>     </span>

</div>

<div class="main">

# Exported Symbols

This section will be of interest only to writers of low-level libraries,
such as replacements for the basic system library.

In order to provide maximum flexibility, the T3 Virtual Machine is
designed to let the running program define as much of its own behavior
as practical. As a result, the VM sometimes relies on the program to
perform an operation on behalf of the VM, so that the operation doesn't
have to be hard-coded into the VM. The VM accesses the program-defined
code to perform these operations using "exports." An export is simply a
symbol that the program defines and which the VM wishes to access. The
program exports a symbol to tell the VM that a particular object or
property performs an operation that is special to the VM.

For example, when a run-time error occurs, the VM throws an exception,
which means the VM must create an exception object to represent the
error condition. The VM does not have its own built-in exception class,
because there's no practical need for such a class to be implemented in
native code. Instead, the VM depends upon the program to define the
object class that represents run-time errors, and uses an exported
symbol to determine which class this is.

An exported symbol has two parts: an externally visible name, and the
associated meaning. The meaning is an object or property value, and the
external name is the name by which the VM knows the symbol. Since the
purpose of this mechanism is to allow the VM to ask the program to
provide values for certain things, the external names are defined by the
VM.

## The export Statement

To export a symbol, you use the export statement.

<div class="syntax">

    export symbol [ 'externalName' ]  ;

</div>

The <span class="synPar">symbol</span> is the object or property name
you wish to export. The <span class="synPar">externalName</span>, if
present, gives the name by which the VM knows the entity. If the
external_name is not present, the symbol name is used as the external
name. For example:

<div class="code">

    export RuntimeError;

</div>

This statement exports the <span class="code">RuntimeError</span> object
defined in the program, using 'RuntimeError' as the external name as
well.

The statement allows you to specify an external name so that you can use
a different name for the entity within the program. If you provide an
external name in the statement, the VM doesn't care that your program
uses a different name internally. Some libraries have their own naming
conventions, so they might want not want to use the VM-defined symbol
names internally.

An <span class="code">export</span> statement can appear anywhere a
top-level statement (such as an object or function definition) can. It
doesn't matter if an <span class="code">export</span> comes before or
after the actual definition of the object or property it exports; all of
the exports are resolved during linking, so where they appear within the
source code is unimportant.

A given internal symbol can be exported multiple times with different
external names; if you do this, the VM will use the same entity for each
different purpose it associates with an external name. A given external
name can only be associated with a single internal entity, though - it
is an error to export multiple objects or properties with the same
external name.

## VM Symbols

The VM looks for the external names listed below to be exported by the
program. (The VM also looks for the symbols supplied automatically by
the compiler, as explained below, but library code only provides the
ones listed here.)

<span class="code">RuntimeError</span> - the exception class for
run-time error exceptions. The basic system library provides an exported
definition for this object.

<span class="code">exceptionMessage</span> - the property to which to
assign an explanatory message string in a run-time error exception
object. The basic system library provides an exported definition for
this property.

<span class="code">propNotDefined</span> - a method which the VM invokes
when a call is made to an undefined property. This method is invoked
with the original property ID as the first argument, and the original
argument list as the remaining arguments. The adv3 library provides an
exported definition for this proeprty. See the section on [capturing
undefined method calls](undef.htm).

## Compiler-Supplied Exports

The compiler automatically provides a number of exports. Libraries do
not need to provide exports for these; they are listed here only for
completeness.

<span class="code">Constructor</span> - the property invoked to
construct new object. The compiler exports the
<span class="code">construct</span> property for this symbol.

<span class="code">Destructor</span> - the property invoked to finalize
an object during garbage collection. The compiler exports the
<span class="code">finalize</span> property for this symbol.

<span class="code">LastProp</span> - the highest property ID value
allocated by the compiler.

<span class="code">ObjectCallProp</span> - a property assigned for
invocation of anonymous function pointers.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="langsec.htm" class="nav">The Language</a> \> Exporting
Symbols  
<span class="navnp"><a href="icext.htm" class="nav"><em>Prev:</em> Extending Intrinsic
Classes</a>    
<a href="errmsg.htm" class="nav"><em>Next:</em> VM Run-Time Error
Codes</a>     </span>

</div>
