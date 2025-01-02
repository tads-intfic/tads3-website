---
layout: docs
---
<span class="title">filename.h</span><span class="type">file</span>

[source file](../source/filename.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)



This header defines the FileName intrinsic class.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`FileName`](../object/FileName.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



*(none)* <span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`FileAttrHidden`](#FileAttrHidden) [`FileAttrRead`](#FileAttrRead) [`FileAttrSystem`](#FileAttrSystem) [`FileAttrWrite`](#FileAttrWrite) [`FileTypeBlock`](#FileTypeBlock) [`FileTypeChar`](#FileTypeChar) [`FileTypeDir`](#FileTypeDir) [`FileTypeFile`](#FileTypeFile) [`FileTypeLink`](#FileTypeLink) [`FileTypeParentLink`](#FileTypeParentLink) [`FileTypePipe`](#FileTypePipe) [`FileTypeSelfLink`](#FileTypeSelfLink) [`FileTypeSocket`](#FileTypeSocket)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



*(none)* <span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="FileAttrHidden"></span>

`FileAttrHidden`

[filename.h](../file/filename.h.html)\[[376](../source/filename.h.html#376)\]



`0x0001`  
Hidden file. When this attribute is set, the file should be omitted from
default views in the user interface and from wildcard matches in user
commands (e.g., "rm \*"). On some systems, a naming convention is used
to mark files as hidden, such as ".xxx" files on Unix; on other systems,
there's formal file system metadata corresponding to this attribute,
such as on Windows. Note that actually hiding files marked as hidden is
up to the user interface; at a programmatic level, hidden files are
treated the same as any other file, and in particular they're included
in listDir() results. It's up to the caller to decide whether or not to
filter hidden files out of listDir() results, and if so to do the
filtering. The hidden attribute isn't enforced as a security or
permissions mechanism in the file system; it doesn't prevent a user from
explicitly viewing or deleting a file. It's merely designed as a
convenience for the user, to reduce clutter in normal directory listings
by filtering out system or application files (such as preference files,
caches, or indices) that the user doesn't normally access directly.



<span id="FileAttrRead"></span>

`FileAttrRead`

[filename.h](../file/filename.h.html)\[[400](../source/filename.h.html#400)\]



`0x0004`  
The file is readable by the current process. If this is set, it means
that the program has the necessary ownership and access privileges to
read the file. It's not guaranteed that a given attempt to read the file
will actually succeed, since other conditions could arise, such as
physical media errors or locking by another process that prevents
concurrent access.



<span id="FileAttrSystem"></span>

`FileAttrSystem`

[filename.h](../file/filename.h.html)\[[390](../source/filename.h.html#390)\]



`0x0002`  
System file. This is a file system attribute on some systems (notably
Windows) that marks a file as belonging to or being part of the
operating system. For practical purposes, system files should be treated
the same as hidden files; the only reason we distinguish "system" as a
separate attribute from "hidden" is to allow applications to display the
two attributes separately when presenting file information to the user,
who might expect to see both attributes on systems where both exist.
There's no equivalent of this attribute on most systems other than DOS
and Windows; it won't ever appear in a file's attributes on systems
where there's no equivalent.



<span id="FileAttrWrite"></span>

`FileAttrWrite`

[filename.h](../file/filename.h.html)\[[410](../source/filename.h.html#410)\]



`0x0008`  
The file is writable by the current process. If this is set, it means
that the program has the necessary ownership and access privileges to
write to the file. It's not guaranteed that a given attempt to write to
the file will actually succeed, since other conditions could arise, such
as insufficient disk space, physical media errors, or locking by another
process that prevents concurrent access.



<span id="FileTypeBlock"></span>

`FileTypeBlock`

[filename.h](../file/filename.h.html)\[[332](../source/filename.h.html#332)\]



`0x0008`  
block-mode device (e.g., Linux raw disk device)



<span id="FileTypeChar"></span>

`FileTypeChar`

[filename.h](../file/filename.h.html)\[[329](../source/filename.h.html#329)\]



`0x0004`  
character-mode device (e.g., console)



<span id="FileTypeDir"></span>

`FileTypeDir`

[filename.h](../file/filename.h.html)\[[326](../source/filename.h.html#326)\]



`0x0002`  
directory (folder)



<span id="FileTypeFile"></span>

`FileTypeFile`

[filename.h](../file/filename.h.html)\[[323](../source/filename.h.html#323)\]



`0x0001`  
ordinary file (on disk or similar storage device)



<span id="FileTypeLink"></span>

`FileTypeLink`

[filename.h](../file/filename.h.html)\[[341](../source/filename.h.html#341)\]



`0x0040`  
symbolic link (a filename that links to another file or directory)



<span id="FileTypeParentLink"></span>

`FileTypeParentLink`

[filename.h](../file/filename.h.html)\[[347](../source/filename.h.html#347)\]



`0x0100`  
special system-defined parent directory link (such as Unix "..")



<span id="FileTypePipe"></span>

`FileTypePipe`

[filename.h](../file/filename.h.html)\[[335](../source/filename.h.html#335)\]



`0x0010`  
pipe (sometimes called a FIFO) or similar interprocess channel



<span id="FileTypeSelfLink"></span>

`FileTypeSelfLink`

[filename.h](../file/filename.h.html)\[[344](../source/filename.h.html#344)\]



`0x0080`  
special system-defined directory link to self (such as Unix ".")



<span id="FileTypeSocket"></span>

`FileTypeSocket`

[filename.h](../file/filename.h.html)\[[338](../source/filename.h.html#338)\]



`0x0020`  
network socket



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


