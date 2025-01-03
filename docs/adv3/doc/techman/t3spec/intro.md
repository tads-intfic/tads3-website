---
layout: docs
---


<img src="../topbar.jpg" data-border="0" />





<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Introduction  
<span class="navnp"><a href="../t3spec.html" class="nav"><em>Prev:</em> T3 VM Technical
Documentation</a>    
<a href="philos.html" class="nav"><em>Next:</em> Design Philosophy</a>
    </span>





![](t3logo.gif)

  
  

## The T3 Virtual Machine

T3 is a new virtual machine, designed for interactive fiction.

The T3 VM is the next generation of the TADS Virtual Machine. This new
VM is a replacement for the TADS 2 VM, which has been in use for nearly
ten years. The new design builds on the successes of the TADS 2 VM, and
addresses many of its limitations.

This specification is intended to provide programmers with the
information necessary to create their own implementations of the T3 VM,
compilers that target the VM, and tools that work with T3 binary files.
This documentation is copyrighted, but the author explicitly grants
permission for anyone to create implementations of the T3 VM and tools
that work with T3, including compilers, linkers, and any other tools
that manipulate T3 binary files.

This document contains a great deal of information beyond a strict
specification of the virtual machine. In particular, the Machine Model
chapter describes a great deal of the design of the "reference
implementation" of the VM created by the author. An independent
implementation is certainly not obliged to make the same choices, so a
potential implementor should keep in mind that the Machine Model chapter
is not by and large normative. The chapters that would likely be of
greatest interest to a potential independent implementor would be those
on the Instruction Set, Image File Format, Portable Binary Encoding, and
Character Mapping.

### Change History

**Version 2: December, 2010.** Coincides with version 3.1 of the MJR-T3
implementation. Added operator overloading support in several opcodes;
added the IFCX, DUP2, SWAP2, SWAPN, GETSPN, GETARGN0, GETARGN1,
GETARGN2, GETARGN3, GETLCLN0, GETLCLN1, GETLCLN1, GETLCLN3, GETLCLN4,
GETLCLN5, and LSHR opcodes; renamed SHR to ASHR and clarified that it
always performs an arithmetic shift; added optional arguments to method
headers; added the new "Pointer to Built-in Function" datatype. Removed
software memory swapping from the constant pool memory management
discussion. Changed the expansion text in the MACR block to contain the
original source text, rather than the parsed version with special
character flags embedded.

**Version 1: September, 2006.** Initial release.

### Contents

[Design Philosophy](philos.html)  
[Design Goals](goals.html)  
[Notation and Conventions](notation.html)  
[Machine Model](model.html)  
[The Metaclasses](metacl.html)  
[Byte-code Instruction Set](opcode.html)  
[Image File Format](format.html)  
[Portable Binary Encoding](bincode.html)  
[Character Mapping](charmap.html)  
[Debug Records](debug.html)  
  
**Appendices**  
[Metaclass Identifier List](metalist.html)  
[Saving and Restoring State](save.html)



Copyright © 2001, 2010 by Michael J. Roberts.  
Revision: January, 2010





------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
Introduction  
<span class="navnp"><a href="../t3spec.html" class="nav"><em>Prev:</em> T3 VM Technical
Documentation</a>    
<a href="philos.html" class="nav"><em>Next:</em> Design Philosophy</a>
    </span>


