---
---
<span class="title">TemporaryFile</span><span class="type">class</span>

[file.h](../file/file.h.html)\[[598](../source/file.h.html#598)\]

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

<div class="fdesc">

The TemporaryFile intrinsic class represents a temporary file name in
the local file system. Temporary files can be used to store data too
large to conveniently store in memory.

You create a temporary file with 'new TemporaryFile()'. This
automatically assigns the object a unique filename in the local file
system, typically in a system directory reserved for temporary files.
The local file can then be opened, read, written, and otherwise
manipulated via the File class, just like any other file. Simply pass
the TemporaryFile object in place of a filename to the File.openXxx
methods.

The underlying file system file will be deleted automatically when the
TemporaryFile object is collected by the garbage collector (or when the
program terminates). This means that you don't have to worry about
cleaning up the file system space used by the file; it'll be released
automatically when the file is no longer needed. However, you can call
the deleteFile() method to explicitly release the file when you're done
with it, if you want to ensure that the resource is returned to the
operating system as soon as possible.

TemporaryFile objects are inherently transient - they're only valid for
the current session on the current local system, so they can't be saved
or restored.

Temporary files are exempt from the file safety level settings, because
the inherent restrictions on temporary files provide the same system
protections that the safety level settings provide for ordinary files.

`intrinsic class `**`TemporaryFile`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TemporaryFile`**  
`         `[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`deleteFile`](#deleteFile)`  `[`getFilename`](#getFilename)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="deleteFile"></span>

`deleteFile ( )`

[file.h](../file/file.h.html)\[[633](../source/file.h.html#633)\]

<div class="desc">

Delete the underlying file system object. This deletes the temporary
file and marks the TemporaryFile object as invalid. After calling this,
you can no longer open the file via the File.openXxxFile methods.

This method allows you to release the underlying file system resources
as soon as you're done with the temp file. It's never necessary to do
this. TADS automatically deletes the underlying file system resources
when the TemporaryFile object is deleted by the garbage collector (or
when the program terminates), so the operating system file will be
deleted eventually whether you call this method or not. The point of
this method is to let you tell the system \*exactly\* when you're done
with the file, so that the resources can be released earlier than if we
waited for garbage collection to take care of it. This should make
little difference in most situations, but in a program that will run for
a long time and use a lot of temporary files, it might be worthwhile to
release resources manually as soon as possible.

</div>

<span id="getFilename"></span>

`getFilename ( )`

[file.h](../file/file.h.html)\[[611](../source/file.h.html#611)\]

<div class="desc">

Get the name of the underlying file system object. This returns a string
with the local filename. This is mostly for debugging purposes or for
displaying to the user. You can't necessarily use this filename in a
call to File.openXxxFile, because the file path is usually in a system
directory reserved for temporary files, and the file safety level
settings often prohibit opening files outside of the program's own home
directory. To open the temp file, you should always pass the
TemporaryFile object itself in place of the filename.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
