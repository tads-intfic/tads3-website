---
layout: docs
---
<span class="title">FileName</span><span class="type">class</span>

[filename.h](../file/filename.h.html)\[[72](../source/filename.h.html#72)\]

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

A FileName represents the name of a file in the local operating system.
The File object methods that take filename specifications accept
FileName objects as well as ordinary strings.

It's easier to write portable code if you manipulate filenames using the
FileName class rather than using ordinary strings. TADS runs on several
different operating systems with differing syntax rules for constructing
file names and directory paths. The FileName class handles the different
rules that apply on each system.

Construction:

  
new FileName() - creates a FileName object representing the working  
directory (e.g., '.' on Unix or Windows)

  
new FileName(str) - creates a FileName from a string 'str' giving a  
file path in local filename syntax.

  
new FileName(path, name) - creates a FileName from a path and  
a file name. 'path' and 'name' can each be a FileName  
object or a string using local filename syntax. The  
new object represents the combined path

  
new FileName(specialID) - creates a FileName from one of the special  
file identifiers defined in file.h.

You can also use the fromUniversal() static method, which creates a
FileName from a path in universal (URL-style) notation.

String conversions: using a FileName object in a context where a string
is required (such as displaying it) automatically converts the object to
a string giving the local file name path.

Operators:

  
FileName + string =\> yields a new FileName object combining  
the path given by FileName and the string naming a file,  
in local naming conventions.

  
FileName + FileName =\> yields a new FileName object combining  
the two names, treating the first as a directory path.

  
FileName == string (or !=) OR  
FileName == FileName  
Compares the FileName to the string or other filename path.  
This does a superficial comparison of the path contents,  
without attempting to correlate the path to the actual file  
system layout. For example, it doesn't resolve symbolic  
links on Unix or apply working directories to local paths.

`intrinsic class `**`FileName`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`FileName`**  
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

` `[`addToPath`](#addToPath)`  `[`createDirectory`](#createDirectory)`  `[`deleteFile`](#deleteFile)`  `[`forEachFile`](#forEachFile)`  `[`getAbsolutePath`](#getAbsolutePath)`  `[`getBaseName`](#getBaseName)`  `[`getFileInfo`](#getFileInfo)`  `[`getFileType`](#getFileType)`  `[`getName`](#getName)`  `[`getPath`](#getPath)`  `[`isAbsolute`](#isAbsolute)`  `[`listDir`](#listDir)`  `[`removeDirectory`](#removeDirectory)`  `[`renameFile`](#renameFile)`  `[`toUniversal`](#toUniversal)`  `

Inherited from `Object` :  
` `[`callInherited`](../object/Object.html#callInherited)`  `[`createIterator`](../object/Object.html#createIterator)`  `[`createLiveIterator`](../object/Object.html#createLiveIterator)`  `[`forEach`](../object/Object.html#forEach)`  `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`mapAll`](../object/Object.html#mapAll)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToPath"></span>

`addToPath (element)`

[filename.h](../file/filename.h.html)\[[127](../source/filename.h.html#127)\]

<div class="desc">

Add a path element (a string or FileName object) to the end of this
filename, yielding a new FileName object with the combined path. Uses
the correct local syntax to combine the path elements. This yields the
same results as FileName + element.

The new FileName object is in canonical form, meaning that any internal
relative path elements (e.g., Unix "." and "..") are processed by
combining them with adjacent elements as appropriate. For example,
adding ".." to the Unix path "a/b/c" yields "a/b".

</div>

<span id="createDirectory"></span>

`createDirectory (createParents?)`

[filename.h](../file/filename.h.html)\[[285](../source/filename.h.html#285)\]

<div class="desc">

Create a directory with the name contained in this object. The file
safety settings must allow write access to the parent folder.

If 'createParents' is specified, it's a true or nil value specifying
whether or not to create intermediate parent directories. The default is
nil if it's omitted. If it's true, and 'dirname' contains multiple path
elements, any parents of the named directory that don't already exist
will be created as well. For example, on Linux, if dirname is '/a/b/c',
and directory '/a' exists but not '/a/b', the routine will first create
'/a/b' and then create '/a/b/c'.

</div>

<span id="deleteFile"></span>

`deleteFile ( )`

[filename.h](../file/filename.h.html)\[[228](../source/filename.h.html#228)\]

<div class="desc">

Delete the disk file named by this object. The file safety level must
allow write access to the file; a file safety exception is thrown if
not.

</div>

<span id="forEachFile"></span>

`forEachFile (func, recursive?)`

[filename.h](../file/filename.h.html)\[[270](../source/filename.h.html#270)\]

<div class="desc">

Invoke a callback for each file in the directory named by this object.
'func' is a callback function; for each file in the directory, this is
invoked as func(f), where 'f' is a FileName object describing the file.
If 'recursive' is true, the method recursively scans the contents of
subdirectories; if 'recursive' is nil or is omitted, only the direct
contents of the directory are scanned.

</div>

<span id="getAbsolutePath"></span>

`getAbsolutePath ( )`

[filename.h](../file/filename.h.html)\[[156](../source/filename.h.html#156)\]

<div class="desc">

Get a FileName giving the absolute path to this file. This applies the
current working directory and/or volume (e.g., drive letter on Windows)
to produce the full path in absolute notation, using the appropriate
syntax for the local operating system. If the name is already in
absolute format, the result will usually be unchanged, although the
exact syntax might be modified on some systems to change the name to a
more canonical format.

If it's not possible to convert the filename into an absolute path,
returns nil.

</div>

<span id="getBaseName"></span>

`getBaseName ( )`

[filename.h](../file/filename.h.html)\[[90](../source/filename.h.html#90)\]

<div class="desc">

Get the base filename portion, without the path. This returns a string
giving the filename without any directory location information; for a
Unix-style path or Windows-style path, this is simply the last element
of the path.

</div>

<span id="getFileInfo"></span>

`getFileInfo (followLinks?)`

[filename.h](../file/filename.h.html)\[[221](../source/filename.h.html#221)\]

<div class="desc">

Get extended information on the file named by this object. This
retrieves the size of the file, timestamps, and the file's type, and
returns the information as a FileInfo object (see file.t). If the file
doesn't exist, or can't be accessed for some other reason at the
operating system level, returns nil.

'asLink' has the same meaning as in getFileType(), and has no effect at
all unless the file named is a symbolic link.

The file safety settings must allow read access to the file.

</div>

<span id="getFileType"></span>

`getFileType (followLinks?)`

[filename.h](../file/filename.h.html)\[[207](../source/filename.h.html#207)\]

<div class="desc">

Get the type of the file. If the file named by this object exists,
returns an integer with a bitwise combination of FileTypeXxx values
indicating the type of the file. If the file doesn't exist, or can't be
accessed due to file system permissions or some other operating system
error, the return value is nil. Note that it's also possible for the
return value to be zero, which means something different from nil: zero
means that the file exists, but it doesn't fit any of the FileTypeXxx
classifications.

If the file is a symbolic link, the method's behavior depends on
'asLink'. A symbolic link is a special type of file supported on some
operating systems that serves as a pointer or proxy for another file. If
the file is a link, and 'asLink' is omitted or nil, the method returns
information on the target of the link; this is the default because
symbolic links in generally act as transparent proxies for their
targets, so for most purposes a caller should be interested in the
target file's metadata. However, a symbolic link also has a separate
identity of its own as a link, so callers might sometimes be interested
in the metadata for the link rather than its target. To get information
on the link itself, set 'asLink' to true. 'asLink' has no effect for
ordinary non-link files, and also has no effect for "hard" links on
systems that support those as well.

Most of the FileTypeXxx bits are mutually exclusive, but it's possible
that more than one bit will be set, so test using '&' (e.g.,
(f.getFileType() & FileTypeDir)).

The file safety settings must allow read access to the file.

</div>

<span id="getName"></span>

`getName ( )`

[filename.h](../file/filename.h.html)\[[82](../source/filename.h.html#82)\]

<div class="desc">

Get the filename. This returns a string with the filename this object
represents, in the local syntax used by the host operating system,
including the path and base filename portions. (This is the same string
returned for toString(self), and the same string used if the filename is
displayed as though it were a string, such as with "\<\< \>\>".)

</div>

<span id="getPath"></span>

`getPath ( )`

[filename.h](../file/filename.h.html)\[[99](../source/filename.h.html#99)\]

<div class="desc">

Get the path portion name, without the file name. This returns a
FileName object containing the path portion of the file name, with the
last path element removed. If the path only contains one path element
(so it contains only a file name, not a directory path), this returns
nil.

</div>

<span id="isAbsolute"></span>

`isAbsolute ( )`

[filename.h](../file/filename.h.html)\[[142](../source/filename.h.html#142)\]

<div class="desc">

Is this an absolute path on the local system? An absolute path is one
that contains a root folder specification, such as a Unix path starting
with "/", Windows path starting with "C:\\, or a Windows UNC name such
as "\\SERVER\SHARE".

Note that a Windows path can start with a drive letter without being
absolute, as in "C:path\file" (that's relative to the working folder on
the C: drive), and can start with a backslash without being absolute, as
in "\path\file" (that's relative to the working drive letter). Similar
subtleties might apply to other systems; this routine figures it out
using local conventions.

</div>

<span id="listDir"></span>

`listDir ( )`

[filename.h](../file/filename.h.html)\[[259](../source/filename.h.html#259)\]

<div class="desc">

Get a list of files in the directory named by this object. Returns a
list of FileName objects giving the names of the files.

The file safety settings must allow read access to the directory's
contents.

On systems where the file system has special directory entries for
relative links, such as "." and ".." on Windows and Unix-likes, the
listing that this method returns will include entries for those relative
links. Be careful with these when performing recursive directory
traversals, since recursing into "." or ".." would cause an infinite
loop. You can test an entry in the returned list to see if it's one of
these special links by calling its getFileInfo() method, and testing the
specialLink property of the returned information object. Not that if
you're performing a recursive directory traversal, it might be easier to
use forEachFile() with the 'recurse' argument flag set to true.

</div>

<span id="removeDirectory"></span>

`removeDirectory (removeContents?)`

[filename.h](../file/filename.h.html)\[[311](../source/filename.h.html#311)\]

<div class="desc">

Remove the directory named by this object. The file safety settings must
allow write access to the directory.

If 'removeContents' is provided, it's a true or nil value specifying
whether or not to delete the contents of the directory before deleting
the directory itself. If this is true, and the directory contains any
files or subdirectories, the routine will attempt to delete those
contents before deleting the directory itself. Any subdirectories will
be recursively emptied and removed. For obvious reasons, use caution
when using this flag. If any of the contents can't be deleted, the
function will stop and throw an error. Note that if this occurs, the
function might have successfully deleted some of the contents of the
directory before encountering the error; those deletions won't be
undone.

If 'removeContents' is omitted or nil, and the directory isn't already
empty, the method simply returns nil (indicating failure) without
deleting anything. This is the default because it helps avoid
accidentally deleting contents that the application didn't explicitly
choose to remove. (Special system files that are always present, such as
"." and ".." on Unix, don't count when determining if the directory is
empty.)

</div>

<span id="renameFile"></span>

`renameFile (newname)`

[filename.h](../file/filename.h.html)\[[238](../source/filename.h.html#238)\]

<div class="desc">

Rename or move the file. This changes the name and/or file path location
of the file named by 'self' to the given new path, which can be a string
giving a filename in local path notation, or a FileName object with the
new name. The file safety settings must allow write access to both the
original file and the new file. The new file must not already exist.

</div>

<span id="toUniversal"></span>

`toUniversal ( )`

[filename.h](../file/filename.h.html)\[[114](../source/filename.h.html#114)\]

<div class="desc">

Get the universal URL-style notation for this file name. Returns a
string giving the universal notation for the file name (including any
path portion).

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
