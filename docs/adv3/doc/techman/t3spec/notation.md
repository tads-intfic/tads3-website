---
layout: docs
---
<div class="topbar">

<img src="../topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Notation and Conventions  
<span class="navnp"><a href="goals.html" class="nav"><em>Prev:</em> Design Goals</a>
    <a href="model.html" class="nav"><em>Next:</em> Machine Model</a>    
</span>

</div>

<div class="main">

![](t3logo.gif)

  
  

## Notation and Conventions

**Specification vs. Implementation:** This document is meant as a
functional specification for the T3 VM, but also contains numerous
details of the reference implementation. The inclusion of these
implementation details is not meant to imply that every implementation
must use the same internal architecture, but is meant to clarify the
specification.

**Image File, Load Image, Program Image:** These terms refer to a file
that contains a program that the VM can load and run. (Despite the
terminology, no pictures or graphics are involved. We call the file an
"image" because it contains a snapshot of memory for the initial state
of the program; the file contains other information as well, so it's not
truly a loadable image in the sense that it could be copied
byte-for-byte into memory for execution.)

**User Code, Byte Code:** These terms are used to refer to code written
in the VM instruction set and loaded from a program image file. The
actual source code to this byte code may be prepared in any language for
which a compiler that targets the T3 VM exists.

**C Code, Native Code:** These terms are used to refer to the
fully-compiled code that comprises the interpreter. These terms are used
interchangeably, and may actually refer to code written in C, C++,
assembler, or sometimes even another language; however, whatever the
source language, such code is compiled to machine ("native") code on
each platform where the interpreter runs, and hence the original source
language is essentially irrelevant.

**Host Application Environment:** The T3 VM is not a stand-alone system;
instead, it is meant to be embedded in an application. Because of this,
the VM does not provide a complete operating environment; for example,
it does not provide any built-in mechanisms for performing input/output
or interacting with a user. What the VM does specify is a set of
interfaces that the containing application provides; the VM provides the
user code with access to the operating environment through these
interfaces.

**Objects and TADS Objects:** The T3 VM has two types of "objects": a
generic internal object type, which is the basic unit of memory
management in the VM; and the "TADS object," which is a particular class
of the generic internal object which implements inheritance and a
property/value mechanism. We refer to instances of this subclass as
"TADS objects" because this subclass directly implements the
functionality exposed through the object and class construct in the TADS
language.

<div class="t3spec_version">

Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006

</div>

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Notation and Conventions  
<span class="navnp"><a href="goals.html" class="nav"><em>Prev:</em> Design Goals</a>
    <a href="model.html" class="nav"><em>Next:</em> Machine Model</a>    
</span>

</div>
