---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="lib.html" class="nav">The System Library</a> \> Replacing the
System Library  
<span class="navnp"><a href="libmisc.html" class="nav"><em>Prev:</em> Miscellaneous Library
Definitions</a>    
<a href="ui.html" class="nav"><em>Next:</em> The User Interface</a>    
</span>

</div>



# Replacing the Standard Library

The standard startup module that defines \_main(), PreinitObject, and so
on, is called \_main.t. By default, the compiler includes this in every
build automatically. Most programs will have no reason to modify the
default versions provided in \_main.t, which is why t3make includes the
file in all builds by default. However, if you do need to replace this
module, you can use the -nodef compiler option to tell the compiler not
to include this default module. If you do this, you'll minimally need to
define the \_main() and \_mainRestore() functions yourself.

Most programs also explicitly include system.tl in their project files.
This is the full system library, which includes definitions for required
support classes for the [File](file.html) and [GrammarProd](gramprod.html)
intrinsic classes, as well as the [Tokenizer](tok.html) class. You can
eliminate this module from your build simply by removing system.tl from
the list of files in your project. If you do this, you'll have to define
your own versions of the support classes for File and GrammarProd, if
you use those classes.



------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="lib.html" class="nav">The System Library</a> \> Replacing the
System Library  
<span class="navnp"><a href="libmisc.html" class="nav"><em>Prev:</em> Miscellaneous Library
Definitions</a>    
<a href="ui.html" class="nav"><em>Next:</em> The User Interface</a>    
</span>

</div>
