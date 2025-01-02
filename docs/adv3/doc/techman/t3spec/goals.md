---
layout: docs
---
<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Design Goals  
<span class="navnp"><a href="philos.html" class="nav"><em>Prev:</em> Design Philosophy</a>
    <a href="notation.html" class="nav"><em>Next:</em> Notation and
Conventions</a>     </span>

</div>



![](t3logo.gif)

  
  

## T3 Virtual Machine Design Goals

This section builds on our [design philosophy](philos.html) with some
specific goals for the T3 VM.

### What a Virtual Machine is and isn't

A "virtual machine" is an abstract computer. It's "virtual" in that no
such machine exists as a piece of hardware; instead, the machine exists
only as a software emulation of a hypothetical computer designed to the
specifications of the VM.

The reason that virtual machines are interesting is that they can be
implemented in software on many different types of actual computers, but
still behave the same way, no matter what type of physical machine is
executing the VM emulation. A program written to run on the VM can be
used on any type of computer that has an implementation of the VM,
eliminating the need to "port" the software to different machines. The
VM itself must be ported, of course, but there's tremendous leverage in
this design: once the VM is ported, every program already written for
the VM, and every program that will be written for the VM in the future,
is automatically ported as well.

In fact, the same thing could be done for any physical computer: one
could implement in software an emulation of one type of computer
hardware on an entirely different type of machine, and use the emulation
to execute software designed for the original machine on the computer
running the emulation. Such emulators exist. However, the designs of
most hardware computers are not well-suited to software emulation,
because they tend to incorporate features that are very specific to the
details of the hardware, and hence are extremely inefficient to
implement in software on computers that do not share the same hardware
design.

A good virtual machine design rises above the details of the underlying
hardware, and instead operates at a level of abstraction that can be
implemented efficiently on a wide range of physical computers. Although
a VM cannot usually hope to compete with native code on a particular
computer, a VM implementation can often be much more efficient than a
software emulation of a real computer because of the more abstract
design of the VM.

The virtual machine described here, called T3, specifies a programming
model. This includes an instruction set for executable code, a set of
datatypes, a storage management model, and an interface for invoking
native code.

The T3 virtual machine does *not* specify anything about the external
environment. In particular, the VM does not specify how input and output
operate or how an application provides or interacts with a user
interface. This allows the VM to be useful in diverse applications,
because the same VM can be used in multiple application environments.
Input/output and the user interface are explicitly intended to be
provided by an external environment in which the T3 VM is embedded. The
VM does not even specify a model for input/output for the user
interface; it is intended that software written for the VM should be
written to a model provided by the external environment.

### TADS 2 VM Features Retained in T3

The TADS 2 virtual machine had several attributes that continue to be
desirable in a new VM, so we'll start with what we want to keep.

**Fast loading**: The final compiled and linked "game file" format
should facilitate rapid loading and initialization, so that a game
starts executing quickly after the interpreter itself starts running.
This implies that the game file format should be as much as possible a
binary image of the interpreter's memory at the start of the game, so
that the interpreter can initialize the game from the data in the file
with minimal computation.

**Simple save and restore**: The object model should make it simple to
save the current state of the game to a file, and to restore state from
a file. Ideally, a save file should store a delta from the initial state
to keep its size reasonable.

**Simple restart**: The object model should make it simple and fast to
restore the initial state of the entire machine.

**Undo**: The object model should allow changes to objects to be
recorded in memory and later undone. This mechanism should provide a
method of marking a series of checkpoints, then rolling back changes to
a prior checkpoint. Multiple checkpoints should be kept; the limit on
the amount of state that can be undone should be flexible.

**Run-time typing**: In order to support a very high-level language with
strict run-time typing, the VM should support late binding, so that all
data values, including values of primitive types (integers, strings,
etc), include type information.

**String and list types**: Varying-length strings and lists, with
automatic allocation and garbage collection, should be provided as
primitive types.

**TADS object model**: This is one of the few features of the language
that has a direct impact on the VM design. A TADS object is a set of
property/value pairs, where each value can be either a primitive type or
code, and inheritance through zero or more superclasses. A new property
can be added to an object dynamically. All properties are "virtual" (in
the C++ sense) in that an object can override an inherited setting of a
property simply by defining its own setting.

**Small machine portability**: If possible, 16-bit machines should be
supported by ensuring that memory is always managed in blocks smaller
than 64k. We will not attempt to artificially limit the total memory
that can be made available to a program to accomodate the smallest
machines, but we will minimally try to ensure that the memory management
code is portable to 16-bit architectures. Hence, it may be possible to
use the VM to write a program so large that small machines cannot load
it, but it should also be possible to write smaller programs that can be
loaded on smaller machines.

**Binary image portability**: Program images and saved state files
should be portable across platforms. It should be possible to compile a
program on one type of computer and run the resulting binary file with a
VM implementation on an entirely different type of computer.

### TADS 2 Features Not Retained

Certain elements of the TADS 2 virtual machine design are not desirable
to carry forward into a new VM.

**Virtual memory:** The TADS 2 VM had a "swapping" scheme that allowed a
large game to run in limited memory by swapping objects in and out of
memory (saving objects in an external swap file while they were not in
memory). This feature was useful at the time the TADS 2 VM was designed,
since computers at the time commonly had memory limits that were
exceeded by larger games. Since then, computer memories have grown much
faster than games have, so there is much less need for the swapping
feature today. The swapping feature adds a great deal of complexity to
the VM software, and also significantly slows it down. Since there is no
longer any pressing need for this feature, it is no longer worth the
cost of including it, so it will not be part of a new VM design. *Note
that the new VM specification actually does incorporate a provision for
swapping, but the new system uses a much simpler mechanism. Furthermore,
the new swapping mechanism can be turned off entirely when compiling the
VM, which should almost entirely eliminate any performance penalty.*

### Desirable New Features

Although the TADS 2 VM had many good features, it also had some
limitations and disadvantages. So, we'll now list the features that
would be desirable in a new VM but were not found in TADS 2.

**Garbage collection**: The VM should provide automatic collection of
unreachable objects, freeing the game author of the need to manage
dynamically-allocated objects explicitly. The TADS 2 VM allowed dynamic
object creation, but required explicit deallocation of unused objects.
The T3 VM should take care of garbage collection automatically.

**Efficient dynamic object creation and deletion**: The TADS 2 VM
allowed dynamic object allocation, but the mechanism used was
inefficient; each new object required substantial memory overhead, and
took considerable time to allocate. In addition the number of objects
that could be created was somewhat limited (a 16-bit object identifier
was used, hence only 64k objects could be created). The T3 VM should use
a larger (32-bit) object identifier, and should anticipate very frequent
object allocation, hence should be optimized to make object allocation
quick and require as little memory overhead as possible.

**Exceptions**: The TADS 2 VM had a notion of exceptions, but these were
purely an internal construct. User code could not generate or handle
exceptions, except to an extremely limited extent that was not
extensible or sufficiently customizable (for example, the abort, exit,
askDo, and askIo statements effectively threw exceptions, and the
system-level command parser handled these and certain other exceptions
in specific ways). The T3 VM should expose exceptions to user code, so
that programs can explicitly throw and catch exceptions.

**Unicode**: The T3 VM uses Unicode for storing text. This ensures that
a program written for the VM is independent of the character set of the
computer used to compile the program.

**Array type**: It may be desirable to include an array type as a
primitive data type. Even though arrays can be simulated with lists, it
may be possible to implement a primitive array type that is more
efficient than a list for certain types of operations. (Actually, this
is implemented with the Vector metaclass, not as a primitive type.)

**Dictionary type**: It may be desirable to include a dictionary type as
a primitive data type. In particular, hash tables are especially useful
for text parsing applications, so a text-based hash table could be
extremely useful as a native type. Although this type of functionality
could always be coded using lists, a native implementation could provide
much better performance. (This is implemented as the Dictionary
metaclass, not as a primitive type.)

### Why not use the Java VM?

An obvious alternative to creating a new virtual machine is to use an
existing VM, the most obvious possibility being the Java VM. In fact,
the JVM has many features in common with our design: Unicode, exception
handling, efficient dynamic object creation and garbage collection. The
JVM also has an instruction set and memory model that are strikingly
similar to the TADS 2 VM (although we assume that this is the result of
convergent evolution rather than of any substantial influence of TADS
upon the designers of the Java VM).

However, the Java VM lacks several key features that are essential for a
text adventure application: undo, save and restore, and run-time typing
(of values of primitive types) are the most problematic omissions. In
addition, the Java object model is significantly different from the TADS
object model, and is not as well-suited for interactive fiction
applications; while the TADS object model could be emulated in JVM code,
it would be considerably less efficient than implementing the TADS
object model in native code within the VM.

<div class="t3spec_version">

Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006



</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Design Goals  
<span class="navnp"><a href="philos.html" class="nav"><em>Prev:</em> Design Philosophy</a>
    <a href="notation.html" class="nav"><em>Next:</em> Notation and
Conventions</a>     </span>

</div>
