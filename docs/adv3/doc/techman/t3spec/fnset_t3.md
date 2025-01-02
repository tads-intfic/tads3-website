---
layout: docs
---
<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
t3vm Function Set  
<span class="navnp"><a href="debug.html" class="nav"><em>Prev:</em> Debug Records</a>
   
<a href="metalist.html" class="nav"><em>Next:</em> Metaclass Identifier
List</a>     </span>

</div>



![](t3logo.gif)

  
  

## The "t3vm" Intrinsic Function Set

The T3 VM uses [intrinsic function sets](model.html#intrinsics) to
provide access to built-in functionality in the VM itself and in the
host application environment. The T3 specification allows host
environments and application configurations to define and provide their
own function sets using an open extensibility mechanism. Because each
host environment can provide its own set of intrinsics through this
extension mechanism, the T3 VM specification doesn't define a
comprehensive set of intrinsics, but merely specifies how intrinsics are
added and how they're accessed by a user program.

The T3 VM specification does, however, specify one required function set
that all implementations must provide. This required function set is the
"t3vm" function set, which provides user programs with access to and
control over the VM itself.

This section specifies the functions defined in the "t3vm" function set.

### The "t3vm" Function Set External Definition

The identification string for the current version of the "t3vm" function
set is "`t3vm/010000`". The numbers at the end are a version number;
this version number will be changed in the future when new functions are
added. Any future "t3vm" function set versions will incorporate the
current function set as their leading subset, hence they will be
compatible with past versions and can be used by programs requiring past
versions.

Programs compiled for the T3 VM access the "t3vm" function set using the
external definition shown below. This definition is for the TADS 3
compiler; other compilers might use different syntax, but the meaning
will be the same.

        intrinsic 't3vm/010000'
        {
            /* run the garbage collector */
            t3RunGC();

            /* set the default string display (SAY) function */
            t3SetSay(funcptr);

            /* get the VM version number */
            t3GetVMVsn();

            /* get the VM identification string */
            t3GetVMID();

            /* get the VM version and copyright banner string */
            t3GetVMBanner();

            /* get the preinitialization mode flag */
            t3GetVMPreinitMode();

            /* debugger trace operations */
            t3DebugTrace(mode, ...);

            /* get the global symbol table */
            t3GetGlobalSymbols();

            /* allocate a new property ID */
            t3AllocProp();
        }

### Function Index 0: Run garbage collector

**Parameters: None**  
**Return value: None**

This function invokes the garbage collector. This function doesn't
return until a complete garbage collection cycle is completed. A program
can invoke this function to force the garbage collector to run, which
might be desirable because the program knows that it would pause for
some time anyway while waiting for user input or other external events,
or because the program is in the midst of a large number of dynamic
memory operations.

### Function Index 1: Set the default string display function or method

**Parameters: function pointer *or* property ID**  
**Return value: None**

**Case 1: Function pointer argument**

This sets the default string display function to the given user program
function; the VM simply remembers the function for future use. After
this function is called, the SAY instruction invokes the given function
with a single string argument. Evaluating an object property whose value
is a self-printing string likewise invokes the given function.

**Case 2: Property ID argument**

This sets the default display method to the given property ID; the VM
simply remembers the property ID for future use. After this is called,
the SAY instruction invokes the given property ID on the current object
any time a SAY instruction is executed when a valid "self" object is in
effect. Evaluating an object property whose value is a self-printing
string likewise invokes the given method.

### Function Index 2: Get the VM version number

**Parameters: none**  
**Return value: Integer**

This function returns the current VM version number. The returned value
is a 32-bit integer value, encoded as follows: the high-order 16 bits
contain the major version number; the next 8 bits contain the minor
version number; and the low-order 8 bits contain the patch or
maintenance release number. To decode the value, use the following
formulas:

        major_version = (version >> 16) & 0xffff;
        minor_version = (version >> 8) & 0xff;
        patch_version = version & 0xff;

The exact meaning of the version number varies from implementation to
implementation; this value is meaningful only in conjunction with the VM
identification string returned by the function at index 3.

### Function Index 3: Get the VM identification string

**Parameters: none**  
**Return value: String**

This function returns the VM identification string. This is a string
that uniquely identifies the VM engine implementation. A given
implementation's identification string should remain the same from
version to version.

Programs should avoid using the VM identification string to select
different code paths because of observed differences between VM
implementations. When such differences arise, they should be considered
bugs, either in the diverging implementations or in the VM specification
itself for leaving some important behavior poorly specified. To the
extent possible, whenever divergent implementation behavior tempts a
developer to code a test for a particular VM implementation to work
around some problematic difference in behavior, the developer should
instead contact the respective implementation or specification authors
to reconcile the problem in the VM's.

### Function Index 4: Get the VM banner string

**Parameters: none**  
**Return value: String**

This function returns the VM's banner and copyright string. This string
is suitable for display to the user running the VM program. The format
and contents of this string depend upon the implementation. Typically,
this string will contain the VM implementation name, version number, and
copyright owner. A user program can display this information at startup,
in an "about" box, or in another suitable location if it wishes to let
the user see information on the underlying virtual machine.

### Function Index 5: Get the Preinitialization Mode Flag

This function returns true if the program is in "pre-initialization"
mode, nil if not. During normal execution, this returns nil.

The purpose of pre-initialization is to allow the program to perform
arbitrary initialization computations, then capture the initialized
state of the program in the final image file. A compiler/linker
providing a pre-initialization mechanism sets the preinit flag and then
simply invokes the main program entrypoint. The program observes that it
is in pre-initialization mode by checking the preinit flag through this
function, and instead of starting a normal session, the program runs its
special pre-initialization code and then terminates. Upon termination,
the compiler/linker builds a new image file capturing the state of all
objects after this session - this new image file replaces the original
image file. The purpose of this scheme is to allow time-consuming
initialization operations to be performed during compilation, rather
than each time the program is loaded.

### Function Index 6: Get/Set Debug Mode

This function queries the presence of the debugger and sets the debug
trace mode. The first argument gives the trace mode to set:

- 1 - check to see if the debugger is present. Returns true if the VM
  has an integrated interactive debugger, nil if not.
- 2 - break into the debugger. If a debugger is present, this should set
  the VM trace mode to single-stepping, as though the user had been
  interactively stepping through program code.

### Function Index 7: Get the Global Symbol Table

Retrieves the global symbol table, if present. This normally returns nil
unless the program is running in pre-initialization mode or has debugger
records stored in the image file (which is normally the case any time
the program is compiled for debugging). This function is permitted to
return nil **unless** the VM is in pre-initialization mode, in which
case a valid symbol table **must** be returned. A valid symbol table
**may** be returned in normal (non-preinit) mode if valid debug records
are included in the image file, but this is not required.

The symbol table contains all object, property, function, and enumerator
symbols defined in the program. The return value of this function is a
LookupTable object. Each key in the table is a string giving the name of
the program symbol, and each key's value is the corresponding value of
the symbol.

### Function Index 8: Allocate a Property Identifier

Allocates and returns a new, unused property identifier. Note that the
property identifier allocation must be integrated with the "undo"
mechanism and the state save/restore mechanism.

<div class="t3spec_version">

Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006



</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
t3vm Function Set  
<span class="navnp"><a href="debug.html" class="nav"><em>Prev:</em> Debug Records</a>
   
<a href="metalist.html" class="nav"><em>Next:</em> Metaclass Identifier
List</a>     </span>

</div>
