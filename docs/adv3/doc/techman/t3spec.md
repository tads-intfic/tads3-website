---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \| T3 VM Technical
Documentation  
<span class="navnp"><a href="t3projectStarters.html" class="nav"><em>Prev:</em> Workbench
Project Starter Templates</a>    
<a href="t3spec/intro.html" class="nav"><em>Next:</em> Introduction</a>
    </span>
# Part IV: T3 Virtual Machine Technical Documentation

This section is for users interested in the internals of the T3 Virtual
Machine. This section is part specification, part documentation; it
covers the .t3 file format, the byte-code instruction set, type datatype
system, and the mechanisms for intrinsic classes and functions.

Authors generally don't need to know any of these internal details in
order to write games with TADS 3, since the compiler and other tools
expose all of the VM's features through the high-level TADS language.
The standard tool-set doesn't even include any low-level tools for
assembly-language programming or the like. Even so, some
technically-minded authors might be interested in the VM's internals for
the sake of their own curiosity, and in rare cases it might even be
enlightening in practice to understand exactly what's going on inside
the machine.



[Introduction](t3spec/intro.html)  
[Design Philosophy](t3spec/philos.html)  
[Design Goals](t3spec/goals.html)  
[Notation and Conventions](t3spec/notation.html)  
[Machine Model](t3spec/model.html)  
[The Metaclasses](t3spec/metacl.html)  
[Byte-Code Instruction Set](t3spec/opcode.html)  
[Image File Format](t3spec/format.html)  
[Portable Binary Encoding](t3spec/bincode.html)  
[Character Mapping](t3spec/charmap.html)  
[Debug Records](t3spec/debug.html)  
[t3vm Function Set](t3spec/fnset_t3.html)  
[Metaclass Identifier List](t3spec/metalist.html)  
[Saving and Restoring State](t3spec/save.html)  
[TADS Special Characters](t3spec/tadsspch.html)  
------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \| T3 VM Technical
Documentation  
<span class="navnp"><a href="t3projectStarters.html" class="nav"><em>Prev:</em> Workbench
Project Starter Templates</a>    
<a href="t3spec/intro.html" class="nav"><em>Next:</em> Introduction</a>
    </span>


